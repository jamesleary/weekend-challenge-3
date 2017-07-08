CREATE TABLE todotasks(
	id SERIAL PRIMARY KEY,
	task VARCHAR (160) NOT NULL,
	complete VARCHAR (100) NOT NULL

);
INSERT INTO todotasks (task, complete) VALUES ('Pick up the children','false');

SELECT * FROM todotasks;
