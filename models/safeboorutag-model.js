const db = require('../db/config.js');
const Safeboorutag = {};

Safeboorutag.findAll = () =>{
  return db.query(`
  SELECT * FROM safeboorutags`)
}

Safeboorutag.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM safeboorutags
    WHERE id = $1
    `, [id]
  );
}

Safeboorutag.create = tag => {
  return db.one(`
    INSERT INTO safeboorutags
    (tag)
    VALUES ($1)
    RETURNING *
    `, [tag.tag])
}

Safeboorutag.update = (tag, id) => {
  return db.none(`
    UPDATE safeboorutags SET
    subject = $1,
    content = $2
    WHERE id = $3
    `, [tag.subject, tag.content, id]
  );
}

Safeboorutag.destroy = id => {
  return db.none(`
    DELETE FROM safeboorutags
    WHERE id = $1
    `, [id]
  );
}

module.exports = Safeboorutag;
