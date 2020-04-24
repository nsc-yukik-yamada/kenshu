-- SQLite
-- CREATE TABLE music(
-- id int PRIMARY KEY,
-- title text,
-- albam int,
-- media int,
-- genre int,
-- artist int,
-- long int,
-- FOREIGN KEY (artist) REFERENCES artist(artist_id),
-- FOREIGN KEY (albam) REFERENCES albam(albam_id),
-- FOREIGN KEY(genre) REFERENCES genre(genre_id)
-- );

-- CREATE TABLE artist(
-- artist_id int PRIMARY KEY,
-- artist_name text);


--

-- DROP TABLE playlist;
-- CREATE TABLE albam(
-- albam_id int PRIMARY KEY,
-- albam_title text,
-- artist_id int,
-- FOREIGN KEY(artist_id) REFERENCES artist(artist_id));

-- CREATE TABLE genre(
-- genre_id int PRIMARY KEY,
-- genre_name text);

-- CREATE TABLE media(
-- media_id int PRIMARY KEY,
-- media_name text);

-- CREATE TABLE playlist(
-- playlist_id int PRIMARY KEY,
-- playlist_title text);


-- CREATE TABLE musicMedia(
-- music_id int,
-- media_id int,
-- PRIMARY KEY (music_id, media_id),
-- FOREIGN KEY (music_id) REFERENCES music(id),
-- FOREIGN KEY (media_id) REFERENCES media(media_id));

-- CREATE TABLE musicPlaylist(
-- music_id int,
-- pleylist_id int,
-- PRIMARY KEY (music_id, pleylist_id),
-- FOREIGN KEY (music_id) REFERENCES music(id),
-- FOREIGN KEY (pleylist_id) REFERENCES pleylist(pleylist_id));

-- INSERT INTO artist(artist_id,artist_name) VALUES (1,"より子"),(2,"Annett Louisan");
-- INSERT INTO albam(albam_id,albam_title,artist_id) VALUES(1,"second VERSE",1),(2,"MySoul",1),(3,"Zu viel Infomation",2);
-- INSERT INTO genre(genre_id,genre_name) VALUES(1,"ポップ"),(2,"洋楽"),(3,"rock");
-- INSERT INTO media(media_id,media_name) VALUES(1,"CD"),(2,"ストリーミング配信"),(3,"ダウンロード販売");

INSERT INTO playlist(playlist_id,playlist_title) VALUES(1,"いつもの"),(2,"通学");


INSERT INTO music(id,title,albam,media,genre,artist,long) VALUES
(1,"Vant",1,1,1,1,230),(2,"koi",1,1,1,1,260),(3,"Zu viel Infomation",3,3,2,2,200),(4,"Alles erledigt",3,3,2,2,200);

INSERT INTO musicPlaylist(music_id,pleylist_id) VALUES(1,1),(1,2),(2,2);

select * FROM music join artist ON artist = artist_id;
