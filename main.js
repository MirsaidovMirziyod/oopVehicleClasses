class Mashina {
  constructor(carName, speed, weight, nitro, engine) {
    this.carName = carName;
    this.carSpeed = `${speed}km/h`;
    this.carWeight = `${weight}kg`;
    this.carNitro = `${nitro}lb`;
    this.carEngine = `${engine}`;
  }

  voice() {
    console.log("vrum vrum");
  }
}
class Hatchback extends Mashina {}
class Pickup extends Mashina {}
class Crossover extends Mashina {}
class Gruzovoy extends Mashina {}
class Sedan extends Mashina {}

const spark = new Hatchback("Spark", 200, 2000, 10, "B10D1");
const tico = new Hatchback("Tico", 150, 1000, "not aviable", "F8C");
const matiz = new Hatchback("Matiz", 180, 1000, "not aviable", "IDK");

const mikser = new Pickup("Mikser", 180, 3000, "not aviable", "g42cb");
const labo = new Pickup("Labo", 180, 3000, "not aviable", "f8cb");

const captiva = new Crossover("Captiva", 220, 3000, "not aviable", "v62");
const equinox = new Crossover("Equinox", 220, 3000, "not aviable", "v66");
const tracker = new Crossover("Tracker", 220, 3000, "not aviable", "v4");

const nexia = new Sedan("Nexia", 240, 2000, 12, "A15MF");
const lacetti = new Sedan("Lacetti", 260, 2000, 15, "v6");
const malibu = new Sedan("Malibu", 280, 2000, 20, "v12");

const kamaz = new Gruzovoy("Kamaz", 150, 6000, "not aviable", "v8");

spark.voice();
console.log(equinox,captiva,tracker);
console.log(nexia,lacetti,malibu);
console.log(spark, tico, matiz);
console.log(labo,mikser);
console.log(kamaz);
