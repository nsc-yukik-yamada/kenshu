-- SQLite
-- テーブル作成
-- テーブル名：test
--  id:int
--  name:text
--  price:real

-- CREATE TABLE IF NOT EXISTS product(
--  id int PRIMARY KEY,
--  name text,
--  region text,
--  purchase text
-- );

-- CREATE TABLE IF NOT EXISTS stock(
--  product_id int,
--  amount int,
--  rimit int,
--  FOREIGN KEY(product_id) REFERENCES product(id));


-- テーブル名を変更 => product
-- ALTER TABLE test RENAME TO product;

-- テーブルにカラムを追加
--  test:データ
-- ALTER TABLE product ADD COLUMN test blob;


-- テーブルのカラムを一つ名前変更 test => image
-- ALTER TABLE product RENAME COLUMN test TO image;

-- テーブルを削除
-- DROP TABLE product;

-- INSERT INTO product(id,name,region,purchase) VALUES(1,"リンゴ","長野","ABC商店"),(2,"みかん","和歌山","ABC商店");

-- INSERT INTO product(id,name,region,purchase) VALUES(3,"リンゴ","青森","DDC青果店"),(4,"キウイ","和歌山","ABC商店"),(5,"もも","山梨","DDC青果店");

-- SELECT * FROM product WHERE price > 100;

-- INSERT INTO stock(product_id,amount,rimit) VALUES
-- (1,200,5),(1,120,1),(2,60,10),(2,20,2);

SELECT * FROM product JOIN stock ON id = product_id;
SELECT * FROM product;