/* Create database */

CREATE DATABASE `photo-album-db`;

USE `photo-album-db`;

/* Create user table */

CREATE TABLE users (
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

CREATE TABLE photos (
    id_photo BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    url VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

/* Create album table */

CREATE TABLE albums (
    id_album BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

/* Create album_photo table */

CREATE TABLE album_photos (
    id_album_photo BIGINT AUTO_INCREMENT PRIMARY KEY,
    id_album BIGINT NOT NULL,
    id_photo BIGINT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_album) REFERENCES albums(id_album),
    FOREIGN KEY (id_photo) REFERENCES photos(id_photo),
    UNIQUE (id_album, id_photo)
);


/* Data to insert into the photo table */

INSERT INTO photos (title, description, url) VALUES ('Fright Night Part II', 'Nunc rhoncus dui vel sem.', 'https://source.unsplash.com/1600x900/?happy');
INSERT INTO photos (title, description, url) VALUES ('The Detective 2', 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.', 'https://source.unsplash.com/1600x900/?friends');
INSERT INTO photos (title, description, url) VALUES ('Interpreter, The', 'Morbi ut odio.', 'https://source.unsplash.com/1600x900/?nature');
INSERT INTO photos (title, description, url) VALUES ('Hot Rod', 'In hac habitasse platea dictumst.', 'https://source.unsplash.com/1600x900/?landscape');
INSERT INTO photos (title, description, url) VALUES ('Grand Day Out with Wallace and Gromit, A', 'Etiam justo.', 'https://source.unsplash.com/1600x900/?vacations');
INSERT INTO photos (title, description, url) VALUES ('Dara Ó Briain Talks Funny: Live in London', 'Nullam molestie nibh in lectus.', 'https://source.unsplash.com/1500x900/?happy');
INSERT INTO photos (title, description, url) VALUES ('Planet Ocean', 'Etiam vel augue', 'https://source.unsplash.com/1500x900/?friends');
INSERT INTO photos (title, description, url) VALUES ('Zombie Island Massacre', 'Donec dapibus', 'https://source.unsplash.com/1500x900/?nature');
INSERT INTO photos (title, description, url) VALUES ('Buddies (Colegas)', 'Donec posuere metus vitae ipsum', 'https://source.unsplash.com/1500x900/?landscape');
INSERT INTO photos (title, description, url) VALUES ('Nick of Time', 'Aliquam non mauris', 'https://source.unsplash.com/1500x900/?vacations');
INSERT INTO photos (title, description, url) VALUES ('Quatermass and the Pit', 'Nam nulla', 'https://source.unsplash.com/1400x900/?happy');
INSERT INTO photos (title, description, url) VALUES ('Eight Days a Week', 'Morbi ut odio', 'https://source.unsplash.com/1400x900/?friends');
INSERT INTO photos (title, description, url) VALUES ('Plastic', 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh', 'https://source.unsplash.com/1400x900/?nature');
INSERT INTO photos (title, description, url) VALUES ('Deadbolt', 'Phasellus sit amet erat', 'https://source.unsplash.com/1400x900/?landscape');
INSERT INTO photos (title, description, url) VALUES ('Police Academy 2: Their First Assignment', 'Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem', 'https://source.unsplash.com/1400x900/?vacations');
INSERT INTO photos (title, description, url) VALUES ('Dance Flick', 'Praesent blandit lacinia erat', 'https://source.unsplash.com/1300x900/?happy');
INSERT INTO photos (title, description, url) VALUES ('Blackbeard''s Ghost', 'Aenean sit amet justo', 'https://source.unsplash.com/1300x900/?friends');
INSERT INTO photos (title, description, url) VALUES ('Message to Garcia, A', 'Nulla tellus', 'https://source.unsplash.com/1300x900/?nature');
INSERT INTO photos (title, description, url) VALUES ('Ink', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo', 'https://source.unsplash.com/1300x900/?landscape');
INSERT INTO photos (title, description, url) VALUES ('Good Morning, Night (Buongiorno, notte)', 'Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh', 'https://source.unsplash.com/1300x900/?vacations');

/* Data to insert into the album table */

INSERT INTO albums (title, description) VALUES ('Gembucket', 'Duis consequat dui nec nisi volutpat eleifend.');
INSERT INTO albums (title, description) VALUES ('Wrapsafe', 'Praesent blandit lacinia erat.');
INSERT INTO albums (title, description) VALUES ('Andalax', 'In hac habitasse platea dictumst.');
INSERT INTO albums (title, description) VALUES ('Veribet', 'Aenean sit amet justo. Morbi ut odio.');
INSERT INTO albums (title, description) VALUES ('Konklab', 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.');
INSERT INTO albums (title, description) VALUES ('Zaam-Dox', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.');
INSERT INTO albums (title, description) VALUES ('Stim', 'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.');
INSERT INTO albums (title, description) VALUES ('Stronghold', 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.');
INSERT INTO albums (title, description) VALUES ('Mat Lam Tam', 'Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.');
INSERT INTO albums (title, description) VALUES ('Latlux', 'Morbi non quam nec dui luctus rutrum. Nulla tellus.');

/* Data to insert into the album_photos table */

/* Album 1 */
INSERT INTO album_photos (id_album, id_photo) VALUES (1, 18);
INSERT INTO album_photos (id_album, id_photo) VALUES (1, 5);
INSERT INTO album_photos (id_album, id_photo) VALUES (1, 12);
INSERT INTO album_photos (id_album, id_photo) VALUES (1, 14);
INSERT INTO album_photos (id_album, id_photo) VALUES (1, 3);
INSERT INTO album_photos (id_album, id_photo) VALUES (1, 16);
INSERT INTO album_photos (id_album, id_photo) VALUES (1, 8);
INSERT INTO album_photos (id_album, id_photo) VALUES (1, 1);
INSERT INTO album_photos (id_album, id_photo) VALUES (1, 10);
INSERT INTO album_photos (id_album, id_photo) VALUES (1, 17);
INSERT INTO album_photos (id_album, id_photo) VALUES (1, 2);
INSERT INTO album_photos (id_album, id_photo) VALUES (1, 20);
INSERT INTO album_photos (id_album, id_photo) VALUES (1, 19);
INSERT INTO album_photos (id_album, id_photo) VALUES (1, 6);
INSERT INTO album_photos (id_album, id_photo) VALUES (1, 7);
INSERT INTO album_photos (id_album, id_photo) VALUES (1, 4);
INSERT INTO album_photos (id_album, id_photo) VALUES (1, 13);
INSERT INTO album_photos (id_album, id_photo) VALUES (1, 9);
INSERT INTO album_photos (id_album, id_photo) VALUES (1, 11);

/* Album 2 */
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 16);
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 12);
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 4);
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 14);
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 8);
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 11);
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 2);
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 5);
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 17);
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 1);
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 6);
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 18);
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 7);
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 20);
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 10);
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 13);
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 19);
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 3);
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 9);
INSERT INTO album_photos (id_album, id_photo) VALUES (2, 15);

/* Album 3 */
INSERT INTO album_photos (id_album, id_photo) VALUES (3, 15);
INSERT INTO album_photos (id_album, id_photo) VALUES (3, 1);

/* Album 4 */
INSERT INTO album_photos (id_album, id_photo) VALUES (4, 5);
INSERT INTO album_photos (id_album, id_photo) VALUES (4, 19);
INSERT INTO album_photos (id_album, id_photo) VALUES (4, 8);
INSERT INTO album_photos (id_album, id_photo) VALUES (4, 13);
INSERT INTO album_photos (id_album, id_photo) VALUES (4, 7);
INSERT INTO album_photos (id_album, id_photo) VALUES (4, 2);
INSERT INTO album_photos (id_album, id_photo) VALUES (4, 14);
INSERT INTO album_photos (id_album, id_photo) VALUES (4, 20);

/* Album 5 */
INSERT INTO album_photos (id_album, id_photo) VALUES (5, 20);
INSERT INTO album_photos (id_album, id_photo) VALUES (5, 3);
INSERT INTO album_photos (id_album, id_photo) VALUES (5, 17);
INSERT INTO album_photos (id_album, id_photo) VALUES (5, 9);
INSERT INTO album_photos (id_album, id_photo) VALUES (5, 2);
INSERT INTO album_photos (id_album, id_photo) VALUES (5, 7);
INSERT INTO album_photos (id_album, id_photo) VALUES (5, 11);
INSERT INTO album_photos (id_album, id_photo) VALUES (5, 4);
INSERT INTO album_photos (id_album, id_photo) VALUES (5, 10);
INSERT INTO album_photos (id_album, id_photo) VALUES (5, 15);
INSERT INTO album_photos (id_album, id_photo) VALUES (5, 14);
INSERT INTO album_photos (id_album, id_photo) VALUES (5, 16);

/* Album 6 */
INSERT INTO album_photos (id_album, id_photo) VALUES (6, 20);
INSERT INTO album_photos (id_album, id_photo) VALUES (6, 17);
INSERT INTO album_photos (id_album, id_photo) VALUES (6, 5);
INSERT INTO album_photos (id_album, id_photo) VALUES (6, 4);
INSERT INTO album_photos (id_album, id_photo) VALUES (6, 3);
INSERT INTO album_photos (id_album, id_photo) VALUES (6, 12);
INSERT INTO album_photos (id_album, id_photo) VALUES (6, 2);
INSERT INTO album_photos (id_album, id_photo) VALUES (6, 8);
INSERT INTO album_photos (id_album, id_photo) VALUES (6, 15);
INSERT INTO album_photos (id_album, id_photo) VALUES (6, 9);
INSERT INTO album_photos (id_album, id_photo) VALUES (6, 10);
INSERT INTO album_photos (id_album, id_photo) VALUES (6, 11);
INSERT INTO album_photos (id_album, id_photo) VALUES (6, 18);
INSERT INTO album_photos (id_album, id_photo) VALUES (6, 19);

/* Album 7 */
INSERT INTO album_photos (id_album, id_photo) VALUES (7, 2);
INSERT INTO album_photos (id_album, id_photo) VALUES (7, 15);
INSERT INTO album_photos (id_album, id_photo) VALUES (7, 8);
INSERT INTO album_photos (id_album, id_photo) VALUES (7, 1);
INSERT INTO album_photos (id_album, id_photo) VALUES (7, 12);
INSERT INTO album_photos (id_album, id_photo) VALUES (7, 7);
INSERT INTO album_photos (id_album, id_photo) VALUES (7, 17);
INSERT INTO album_photos (id_album, id_photo) VALUES (7, 19);
INSERT INTO album_photos (id_album, id_photo) VALUES (7, 18);
INSERT INTO album_photos (id_album, id_photo) VALUES (7, 5);
INSERT INTO album_photos (id_album, id_photo) VALUES (7, 3);


/* Album 8 */
INSERT INTO album_photos (id_album, id_photo) VALUES (8, 16);
INSERT INTO album_photos (id_album, id_photo) VALUES (8, 20);
INSERT INTO album_photos (id_album, id_photo) VALUES (8, 13);
INSERT INTO album_photos (id_album, id_photo) VALUES (8, 11);
INSERT INTO album_photos (id_album, id_photo) VALUES (8, 1);
INSERT INTO album_photos (id_album, id_photo) VALUES (8, 9);
INSERT INTO album_photos (id_album, id_photo) VALUES (8, 2);
INSERT INTO album_photos (id_album, id_photo) VALUES (8, 18);
INSERT INTO album_photos (id_album, id_photo) VALUES (8, 3);
INSERT INTO album_photos (id_album, id_photo) VALUES (8, 15);
INSERT INTO album_photos (id_album, id_photo) VALUES (8, 17);
INSERT INTO album_photos (id_album, id_photo) VALUES (8, 19);
INSERT INTO album_photos (id_album, id_photo) VALUES (8, 5);
INSERT INTO album_photos (id_album, id_photo) VALUES (8, 8);
INSERT INTO album_photos (id_album, id_photo) VALUES (8, 7);

/* Album 9 */
INSERT INTO album_photos (id_album, id_photo) VALUES (9, 3);
INSERT INTO album_photos (id_album, id_photo) VALUES (9, 5);
INSERT INTO album_photos (id_album, id_photo) VALUES (9, 16);
INSERT INTO album_photos (id_album, id_photo) VALUES (9, 4);
INSERT INTO album_photos (id_album, id_photo) VALUES (9, 15);
INSERT INTO album_photos (id_album, id_photo) VALUES (9, 12);
INSERT INTO album_photos (id_album, id_photo) VALUES (9, 2);
INSERT INTO album_photos (id_album, id_photo) VALUES (9, 19);
INSERT INTO album_photos (id_album, id_photo) VALUES (9, 6);
INSERT INTO album_photos (id_album, id_photo) VALUES (9, 10);
INSERT INTO album_photos (id_album, id_photo) VALUES (9, 17);
INSERT INTO album_photos (id_album, id_photo) VALUES (9, 8);
INSERT INTO album_photos (id_album, id_photo) VALUES (9, 20);
INSERT INTO album_photos (id_album, id_photo) VALUES (9, 13);
INSERT INTO album_photos (id_album, id_photo) VALUES (9, 1);

/* Album 10 */
INSERT INTO album_photos (id_album, id_photo) VALUES (10, 13);

/* Insert User Sample */
INSERT INTO users (username, email, password_hash, first_name, last_name) VALUES ('admin', 'jhon.doe@upa.edu.mx', '$2a$10$3', 'Jhon', 'Doe');
