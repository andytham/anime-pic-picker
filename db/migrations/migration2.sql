CREATE TABLE IF NOT EXISTS safeboorutags (
  id SERIAL PRIMARY KEY,
  tag VARCHAR(255),
  image_id INTEGER REFERENCES images (id)
);
