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
Image.create = image => {
  return db.one(`
    INSERT INTO images
    (image)
    VALUES ($1)
    RETURNING *
    `, [image.image])
}

Image.update = (image, id) => {
  return db.none(`
    UPDATE Images SET
    subject = $1,
    content = $2
    WHERE id = $3
    `, [image.subject, image.content, id]
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
