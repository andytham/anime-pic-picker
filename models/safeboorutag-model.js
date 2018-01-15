const db = require('../db/config.js');
const Safeboorutag = {};

Safeboorutag.findAll = () =>{
  return db.query(`
  SELECT DISTINCT tag FROM safeboorutags`)
}

Safeboorutag.findByTag = (tag) => {
  console.log("HEY WORK PLEASE",tag);
  return db.query(`
    SELECT * FROM safeboorutags
    JOIN images ON (safeboorutags.image_id = images.id)
    WHERE tag = $1
    `, [tag]
  );
}
Safeboorutag.create = (image, id) => {
  console.log('CREATE TEST IS NOW RUNNING', image.image)
  let splitTags = image.tags.split(" ");
  for (let tag of splitTags) {
    db.one(`
    INSERT INTO safeboorutags
    (tag, image_id)
    VALUES ($1,$2)
    RETURNING *`,[tag, id]);
  }
  console.log('UPDATE IMAGE IDS')

    return db.query(`
    SELECT * FROM images`)
}

Safeboorutag.destroy = id => {
  return db.none(`
    DELETE FROM safeboorutags
    WHERE image_id = $1
    `, [id]
  );
}
module.exports = Safeboorutag;
