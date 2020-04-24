-- SQLite
--  SELECT name,title 
--  FROM artists JOIN albums 
--  WHERE artists.ArtistId=albums.ArtistId
-- ;
-- -- select * from artists;

--  SELECT name,title 
--  FROM artists JOIN albums, 
--  WHERE artists.ArtistId=albums.ArtistId
-- ;

SELECT tracks.trackId,tracks.Name 
FROM tracks JOIN media_types
WHERE tracks.MediaTypeId = media_types.MediaTypeId
AND media_types.Name = "AAC audio file";


SELECT tracks.Name,albums.Title
FROM tracks JOIN albums
WHERE tracks.AlbumId = albums.AlbumId
AND albums.ArtistId = 84;

SELECT tracks.Name
FROM playlist_track AS PT JOIN tracks, playlists
WHERE PT.PlaylistId = playlists.PlaylistId
AND PT.TrackId = tracks.TrackId
AND PT.PlaylistId = 11;

SELECT tracks.Name,albums.Title AS "アルバム名",artists.Name
FROM tracks JOIN albums,artists
WHERE tracks.AlbumId = albums.AlbumId
AND albums.ArtistId = artists.ArtistId
AND artists.ArtistId = "10"
ORDER BY albums.AlbumId;

