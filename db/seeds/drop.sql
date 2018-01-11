DROP TABLE safeboorutags;
DROP TABLE images;

CREATE TABLE IF NOT EXISTS images (
  id SERIAL PRIMARY KEY,
  image VARCHAR(255) UNIQUE,
  comment TEXT
);

CREATE TABLE IF NOT EXISTS safeboorutags (
  id SERIAL PRIMARY KEY,
  tag VARCHAR(255),
  image_id INTEGER REFERENCES images (id)
);
