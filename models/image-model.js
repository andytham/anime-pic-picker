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
       db.one(`
       INSERT INTO safeboorutags
       (tag)
       VALUES ($1)
       RETURNING *`,[tag]);
       db.none(`
          UPDATE safeboorutags
          SET image_id = images.id
          FROM images
          WHERE images.image = $1 AND image_id IS NULL
          `, [image.image])
      }
      // db.any(`
      //   SELECT * FROM safeboorutags
      //   JOIN images ON (safeboorutags.image_id = images.id)
      //   `)

      return db.query(`
      SELECT * FROM images`)
}

Image.destroy = id => {
  return db.none(`
    DELETE FROM images
    WHERE id = $1
    `, [id]
  );
}

module.exports = Image;
