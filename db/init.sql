/* Create database */

CREATE DATABASE IF NOT EXISTS `photo-album-db`;

USE `photo-album-db`;

/*
CREATE USER IF NOT EXISTS photoalbumappusr;

grant alter, alter routine, create, create routine, create temporary tables, create view, delete, drop, event, execute, index, insert, lock tables, references, select, show view, trigger, update, grant option on `photo-album-db`.* to photoalbumappusr;

grant alter, alter routine, create, create routine, create temporary tables, create view, delete, drop, event, index, insert, lock tables, select, show databases, show view, trigger, update, grant option on *.* to photoalbumappusr;
*/

/* Create user table */

CREATE TABLE IF NOT EXISTS users (
    id_user BIGINT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(25) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

/* Create photo table */

CREATE TABLE IF NOT EXISTS photos (
    id_photo BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

/* Create album table */

CREATE TABLE IF NOT EXISTS albums (
    id_album BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

/* Create album_photo table */

CREATE TABLE IF NOT EXISTS album_photos (
    id_album_photo BIGINT AUTO_INCREMENT PRIMARY KEY,
    id_album BIGINT NOT NULL,
    id_photo BIGINT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_album) REFERENCES albums(id_album),
    FOREIGN KEY (id_photo) REFERENCES photos(id_photo),
    UNIQUE (id_album, id_photo)
);

/* Data to insert into the photo table only if the table is empty */
INSERT INTO photos (title, description, url)
SELECT 'Fright Night Part II', 'Nunc rhoncus dui vel sem.', 'https://source.unsplash.com/1600x900/?happy' UNION ALL
SELECT 'The Detective 2', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.', 'https://source.unsplash.com/1600x900/?friends' UNION ALL
SELECT 'Interpreter, The', 'Morbi ut odio.', 'https://source.unsplash.com/1600x900/?nature' UNION ALL
SELECT 'Hot Rod', 'In hac habitasse platea dictumst.', 'https://source.unsplash.com/1600x900/?landscape' UNION ALL
SELECT 'Grand Day Out with Wallace and Gromit, A', 'Etiam justo.', 'https://source.unsplash.com/1600x900/?vacations' UNION ALL
SELECT 'Dara Ó Briain Talks Funny: Live in London', 'Nullam molestie nibh in lectus.', 'https://source.unsplash.com/1500x900/?happy' UNION ALL
SELECT 'Planet Ocean', 'Etiam vel augue', 'https://source.unsplash.com/1500x900/?friends' UNION ALL
SELECT 'Zombie Island Massacre', 'Donec dapibus', 'https://source.unsplash.com/1500x900/?nature' UNION ALL
SELECT 'Buddies (Colegas)', 'Donec posuere metus vitae ipsum', 'https://source.unsplash.com/1500x900/?landscape' UNION ALL
SELECT 'Nick of Time', 'Aliquam non mauris', 'https://source.unsplash.com/1500x900/?vacations' UNION ALL
SELECT 'Quatermass and the Pit', 'Nam nulla', 'https://source.unsplash.com/1400x900/?happy' UNION ALL
SELECT 'Eight Days a Week', 'Morbi ut odio', 'https://source.unsplash.com/1400x900/?friends' UNION ALL
SELECT 'Plastic', 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh', 'https://source.unsplash.com/1400x900/?nature' UNION ALL
SELECT 'Deadbolt', 'Phasellus sit amet erat', 'https://source.unsplash.com/1400x900/?landscape' UNION ALL
SELECT 'Police Academy 2: Their First Assignment', 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem', 'https://source.unsplash.com/1400x900/?vacations' UNION ALL
SELECT 'Dance Flick', 'Praesent blandit lacinia erat', 'https://source.unsplash.com/1300x900/?happy' UNION ALL
SELECT 'Blackbeard''s Ghost', 'Aenean sit amet justo', 'https://source.unsplash.com/1300x900/?friends' UNION ALL
SELECT 'Message to Garcia, A', 'Nulla tellus', 'https://source.unsplash.com/1300x900/?nature' UNION ALL
SELECT 'Ink', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo', 'https://source.unsplash.com/1300x900/?landscape' UNION ALL
SELECT 'Good Morning, Night (Buongiorno, notte)', 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh', 'https://source.unsplash.com/1300x900/?vacations'
WHERE NOT EXISTS (SELECT 1 FROM photos);

/* Data to insert into the album table only if the table is empty */

INSERT INTO albums (title, description)
SELECT 'Gembucket', 'Duis consequat dui nec nisi volutpat eleifend.' UNION ALL
SELECT 'Wrapsafe', 'Praesent blandit lacinia erat.' UNION ALL
SELECT 'Andalax', 'In hac habitasse platea dictumst.' UNION ALL
SELECT 'Veribet', 'Aenean sit amet justo. Morbi ut odio.' UNION ALL
SELECT 'Konklab', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.' UNION ALL
SELECT 'Zaam-Dox', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.' UNION ALL
SELECT 'Stim', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.' UNION ALL
SELECT 'Stronghold', 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.' UNION ALL
SELECT 'Mat Lam Tam', 'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' UNION ALL
SELECT 'Latlux', 'Morbi non quam nec dui luctus rutrum. Nulla tellus.'
WHERE NOT EXISTS (SELECT 1 FROM albums);

/* Data to insert into the album_photos table only if the table is empty */

INSERT INTO album_photos (id_album, id_photo)
SELECT 1, 18 UNION ALL
SELECT 1, 5 UNION ALL
SELECT 1, 12 UNION ALL
SELECT 1, 14 UNION ALL
SELECT 1, 3 UNION ALL
SELECT 1, 16 UNION ALL
SELECT 1, 8 UNION ALL
SELECT 1, 1 UNION ALL
SELECT 1, 10 UNION ALL
SELECT 1, 17 UNION ALL
SELECT 1, 2 UNION ALL
SELECT 1, 20 UNION ALL
SELECT 1, 19 UNION ALL
SELECT 1, 6 UNION ALL
SELECT 1, 7 UNION ALL
SELECT 1, 4 UNION ALL
SELECT 1, 13 UNION ALL
SELECT 1, 9 UNION ALL
SELECT 1, 11 UNION ALL
SELECT 2, 16 UNION ALL
SELECT 2, 12 UNION ALL
SELECT 2, 4 UNION ALL
SELECT 2, 14 UNION ALL
SELECT 2, 8 UNION ALL
SELECT 2, 11 UNION ALL
SELECT 2, 2 UNION ALL
SELECT 2, 5 UNION ALL
SELECT 2, 17 UNION ALL
SELECT 2, 1 UNION ALL
SELECT 2, 6 UNION ALL
SELECT 2, 18 UNION ALL
SELECT 2, 7 UNION ALL
SELECT 2, 20 UNION ALL
SELECT 2, 10 UNION ALL
SELECT 2, 13 UNION ALL
SELECT 2, 19 UNION ALL
SELECT 2, 3 UNION ALL
SELECT 2, 9 UNION ALL
SELECT 2, 15 UNION ALL
SELECT 3, 15 UNION ALL
SELECT 3, 1 UNION ALL
SELECT 4, 5 UNION ALL
SELECT 4, 19 UNION ALL
SELECT 4, 8 UNION ALL
SELECT 4, 13 UNION ALL
SELECT 4, 7 UNION ALL
SELECT 4, 2 UNION ALL
SELECT 4, 14 UNION ALL
SELECT 4, 20 UNION ALL
SELECT 5, 20 UNION ALL
SELECT 5, 3 UNION ALL
SELECT 5, 17 UNION ALL
SELECT 5, 9 UNION ALL
SELECT 5, 2 UNION ALL
SELECT 5, 7 UNION ALL
SELECT 5, 11 UNION ALL
SELECT 5, 4 UNION ALL
SELECT 5, 10 UNION ALL
SELECT 5, 15 UNION ALL
SELECT 5, 14 UNION ALL
SELECT 5, 16 UNION ALL
SELECT 6, 20 UNION ALL
SELECT 6, 17 UNION ALL
SELECT 6, 5 UNION ALL
SELECT 6, 4 UNION ALL
SELECT 6, 3 UNION ALL
SELECT 6, 12 UNION ALL
SELECT 6, 2 UNION ALL
SELECT 6, 8 UNION ALL
SELECT 6, 15 UNION ALL
SELECT 6, 9 UNION ALL
SELECT 6, 10 UNION ALL
SELECT 6, 11 UNION ALL
SELECT 6, 18 UNION ALL
SELECT 6, 19 UNION ALL
SELECT 7, 2 UNION ALL
SELECT 7, 15 UNION ALL
SELECT 7, 8 UNION ALL
SELECT 7, 1 UNION ALL
SELECT 7, 12 UNION ALL
SELECT 7, 7 UNION ALL
SELECT 7, 17 UNION ALL
SELECT 7, 19 UNION ALL
SELECT 7, 18 UNION ALL
SELECT 7, 5 UNION ALL
SELECT 7, 3 UNION ALL
SELECT 8, 16 UNION ALL
SELECT 8, 20 UNION ALL
SELECT 8, 13 UNION ALL
SELECT 8, 11 UNION ALL
SELECT 8, 1 UNION ALL
SELECT 8, 9 UNION ALL
SELECT 8, 2 UNION ALL
SELECT 8, 18 UNION ALL
SELECT 8, 3 UNION ALL
SELECT 8, 15 UNION ALL
SELECT 8, 17 UNION ALL
SELECT 8, 19 UNION ALL
SELECT 8, 5 UNION ALL
SELECT 8, 8 UNION ALL
SELECT 8, 7 UNION ALL
SELECT 9, 3 UNION ALL
SELECT 9, 5 UNION ALL
SELECT 9, 16 UNION ALL
SELECT 9, 4 UNION ALL
SELECT 9, 15 UNION ALL
SELECT 9, 12 UNION ALL
SELECT 9, 2 UNION ALL
SELECT 9, 19 UNION ALL
SELECT 9, 6 UNION ALL
SELECT 9, 10 UNION ALL
SELECT 9, 17 UNION ALL
SELECT 9, 8 UNION ALL
SELECT 9, 20 UNION ALL
SELECT 9, 13 UNION ALL
SELECT 9, 1 UNION ALL
SELECT 10, 13
WHERE NOT EXISTS (SELECT 1 FROM album_photos);

/* Insert User Sample Data */
INSERT INTO users (username, email, password_hash, first_name, last_name)
SELECT 'admin', 'jhon.doe@upa.edu.mx', '$2a$10$3', 'Jhon', 'Doe' UNION ALL
SELECT 'rodrigobermejo', 'juan.leanos@upa.edu.mx', '$2a$10$3', 'Rodrigo', 'Leaños Bermejo'
WHERE NOT EXISTS (SELECT 1 FROM users);
