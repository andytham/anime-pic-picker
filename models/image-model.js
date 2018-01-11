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
    return db.one(`

        INSERT INTO images
        (image)
        VALUES ($1)
        RETURNING *

     `, [image.image]);
     // for (let tag of splitTags) {
     //   db.one(`
     //
     //   INSERT INTO safeboorutags
     //   (tag)
     //   VALUES ($1)
     //   RETURNING *`,[tag]);
     //
     //  db.none(`
     //    DELETE FROM safeboorutags
     //    WHERE image_id = NULL
     //    `)
     //  }
     //  return db.query(`
     //  SELECT * FROM images`)

}

Image.grab = (image) => {
  return db.oneOrNone(`
    SELECT * FROM images
    WHERE image = $1`, [image.image])
}

// Image.createTEST = (image, id) => {
//   console.log('CREATE TEST IS NOW RUNNING', image.image)
//   let splitTags = image.tags.split(" ");
//   for (let tag of splitTags) {
//     db.one(`
//     INSERT INTO safeboorutags
//     (tag, image_id)
//     VALUES ($1,$2)
//     RETURNING *`,[tag, id]);
//   }
//   console.log('UPDATE IMAGE IDS')
//
//     return db.query(`
//     SELECT * FROM images`)
// }

Image.update = (image,id) => {
  return db.none(`
    UPDATE images SET
    comment = $1
    WHERE id = $2
 `,
  [image.comment, id]  )
}

Image.destroy = id => {
  return db.none(`
    DELETE FROM images
    WHERE id = $1
    `, [id]
  );
}

module.exports = Image;
