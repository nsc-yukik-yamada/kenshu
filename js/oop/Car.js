 class Car {
  constructor(engine, color, name, maker) {
    this. engine = engine;
    this.color = color;
    this.name = name;
    this.maker = maker;
  }
}

class Track extends Car{
    constructor(engine, color, name, maker){
        super(engine, color, name, maker);
    }
    load(){
        console.log(Track.color);
    }
}

let prius = new Car(
    'ハイブリット','赤','セダン','トヨタ'
);
console.log(prius);

let isuzu = new Track(
    'ディーゼル','白','2ｔ','いすゞ'
);

console.log(isuzu);
isuzu.load();