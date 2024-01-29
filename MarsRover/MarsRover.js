import { DIRECTIONS } from "./directions";

class Spacecraft {
  constructor(name, typeFuel, destination) {
    this.name = name;
    this.fuelType = typeFuel;
    this.fuelLevel = 100;
    this.isInSpace = true;
    this.destination = destination;
  }
  launch() {
    if (this.fuelLevel > 0) {
      this.isInSpace = true;
      this.fuelLevel -= 10;
      console.log(`Корабль взлетел`);
    } else {
      console.log(`Недостаточно топлива ${this.fuelLevel}`);
    }
  }
  land(destination) {
    if (this.fuelLevel > 0 && destination === "Mars") {
      this.isInSpace = false;
      this.fuelLevel -= 10;
      console.log(`Корабль приземлился`);
    }
  }
  checkFuel() {
    console.log(`Уровень топлива ${this.fuelLevel}`);
  }
  refuel(amount) {
    this.fuelLevel > 100
      ? сonsole.log(`Уровень топлива превышен`)
      : (this.fuelLevel += amount);
  }
}

class MarsRover {
  constructor(model, navigationSystem) {
    this.model = model;
    this.navigationSystem = navigationSystem;
    this.dataCollected = [];
    this.direction = DIRECTIONS.NORTH;
  }
  move(direction) {
    this.direction = direction;
    console.log(`Движение марсохода указывает на ${this.direction}`);
  }
  collectData(dataType) {
    const data = {
      type: dataType,
      date: `Данные типа ${dataType} были собраны`,
    };
    this.dataCollected.push(data);
  }
  sendDataToEarth() {
    console.log("Отправка данных на Землю");
    this.dataCollected.splice(0, this.dataCollected.length);
  }
}

class MissionControl {
  constructor(missionName, launchDate, spacecraft, marsRover) {
    this.missionName = missionName;
    this.launchDate = launchDate;
    this.spacecraft = spacecraft;
    this.marsRover = marsRover;
    this.location = { x: 0, y: 0, z: 0 };
    this.progress = 0;
  }
  initiateLaunch() {
    this.spacecraft.fuelLevel > 0
      ? this.spacecraft.launch()
      : console.log(`Недостаточно топлива ${this.spacecraft.fuelLevel}`);
      this.progress = Math.min(this.progress + 25, 100)
  }
  deployMarsRover(x, y, z) {
    this.location = { x, y, z };
    console.log(
      `Марсоход расположился на поверхности с координатами ${x},${y}, ${z}`
    );
    this.progress = Math.min(this.progress + 25, 100)
  }
  coordinateMission(direction) {
    this.marsRover.move(direction);
    this.launchDate;
    this.missionName;
    this.progress = Math.min(this.progress + 25, 100)
  }
  monitorMissionProgress() {
    console.log(`Прогресс миссии: ${this.progress}%`);
  }
}

const spacecraft = new Spacecraft("Enterprise", "Plasma", "Mars");
const marsRover = new MarsRover("Curiosity", "Autonomous Navigation System");
const missionControl = new MissionControl(
  "Mission 1",
  new Date(),
  spacecraft,
  marsRover
);

missionControl.initiateLaunch();
missionControl.deployMarsRover(10, 20, 30);
missionControl.coordinateMission(DIRECTIONS.EAST);
missionControl.monitorMissionProgress();
