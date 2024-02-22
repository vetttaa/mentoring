import { DIRECTIONS } from "./consts";
import { DESTINATION } from "./consts";
import { FUEL_TYPES } from "./consts";

class General {
  constructor(name, fuelType, fuelLevel, isInSpace) {
    this.name = name;
    this.fuelType = fuelType;
    this.fuelLevel = fuelLevel;
    this.isInSpace = isInSpace;
  }
  checkFuel() {
    console.log(`Уровень топлива ${this.fuelLevel}`);
  }
  refuel(amount) {
    if (this.fuelLevel + amount <= 100) {
      this.fuelLevel += amount;
    } else {
      console.log(
        `Уровень топлива превышен. Текущий уровень: ${this.fuelLevel}`
      );
    }
  }
}

class Spacecraft extends General {
  constructor(name, typeFuel, destination) {
    super(name, FUEL_TYPES[typeFuel], 100, true);
    this.destination = destination;
  }
  launch() {
    if (this.fuelLevel > 0) {
      this.isInSpace = true;
      this.fuelLevel -= 10;
      console.log(`Корабль взлетел. Количество топлива ${this.fuelLevel}`);
    } else {
      console.log(
        `Недостаточно топлива ${this.fuelLevel}. Необходимо еще ${
          10 - this.fuelLevel
        }`
      );
    }
  }
  land(destination) {
    let fuelCost = DESTINATION[destination];
    if (this.fuelLevel >= fuelCost) {
      this.isInSpace = false;
      this.fuelLevel -= fuelCost;
      console.log(`Корабль приземлился. Количество топлива ${this.fuelLevel}`);
    } else {
      console.log(
        `Недостаточно топлива ${this.fuelLevel}. Необходимо еще ${
          fuelCost - this.fuelLevel
        }`
      );
    }
  }
}

class MarsRover extends General {
  constructor(model, navigationSystem) {
    super(model, "ELECTRIC", 100, false);
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
    this.addedProgress = 25;
  }
  initiateLaunch() {
    this.spacecraft.fuelLevel > 0
      ? this.spacecraft.launch()
      : console.log(`Недостаточно топлива ${this.spacecraft.fuelLevel}`);

    if (this.progress + this.addedProgress <= 100) {
      this.progress += this.addedProgress;
    } else {
      this.progress = 100;
    }
  }
  deployMarsRover(x, y, z) {
    this.location.x = x;
    this.location.y = y;
    this.location.z = z;
    console.log(
      `Марсоход расположился на поверхности с координатами ${x},${y}, ${z}`
    );
    if (this.progress + this.addedProgress <= 100) {
      this.progress += this.addedProgress;
    } else {
      this.progress = 100;
    }
  }
  coordinateMission(direction) {
    this.marsRover.move(direction);
    this.launchDate = new Date();
    this.missionName = `Миссия ${this.missionName} началась`;

    if (this.progress + this.addedProgress <= 100) {
      this.progress += this.addedProgress;
    } else {
      this.progress = 100;
    }
  }
  monitorMissionProgress() {
    console.log(`Прогресс миссии: ${this.progress}%`);
  }
}

const spacecraft = new Spacecraft("Марсоход", "GASOLINE", "Mars");
const marsRover = new MarsRover("Марсоход M1", "Навигационная система");
const missionControl = new MissionControl(
  "марсоход",
  new Date(),
  spacecraft,
  marsRover
);
missionControl.initiateLaunch();
missionControl.deployMarsRover(1, 2, 3);
missionControl.coordinateMission(DIRECTIONS.NORTH);
missionControl.monitorMissionProgress();
