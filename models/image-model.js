const db = require('../db/config.js');
const Image = {};

Image.findAll = () =>{
  return db.query(`
  SELECT * FROM images`)
}

Image.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM images
    WHERE id = $1
    `, [id]
  );
}

Image.create = (image, id) => {
  let splitTags = image.tags.split(" ");
    db.one(`
     INSERT INTO images
     (image)
     VALUES ($1)
     RETURNING *
     `, [image.image]);
     for (let tag of splitTags) {
       let idFix = Number(image.id) + 1;
       db.one(`
       INSERT INTO safeboorutags
       (tag, image_id)
       VALUES ($1, $2)
       RETURNING *`,[tag,idFix]);
      }
      return db.query(`
      SELECT * FROM images`)
}

Image.update = (image, id) => {
  return db.none(`
    UPDATE images SET
    subject = $1,
    content = $2
    WHERE id = $3
    `, [image.image, image.content, id]
  );
}

Image.destroy = id => {
  return db.none(`
    DELETE FROM images
    WHERE id = $1
    `, [id]
  );
}

module.exports = Image;
