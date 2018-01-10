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

module.exports = Safeboorutag;
