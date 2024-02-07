import { DESTINATION } from "./MarsRover.js";
import { DIRECTIONS } from "./MarsRover.js";

function Spacecraft(name, typeFuel, destination) {
  this.name = name;
  this.fuelType = typeFuel;
  this.fuelLevel = 100;
  this.isInSpace = true;
  this.destination = destination;
}

Spacecraft.prototype.launch = function () {
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
};

Spacecraft.prototype.land = function (destination) {
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
};

Spacecraft.prototype.checkFuel = function () {
  console.log(`Уровень топлива ${this.fuelLevel}`);
};

Spacecraft.prototype.refuel = function (amount) {
  this.fuelLevel >= 100
    ? console.log(`Уровень топлива превышен ${this.fuelLevel}`)
    : (this.fuelLevel += amount);
};

function MarsRover(model, navigationSystem) {
  this.model = model;
  this.navigationSystem = navigationSystem;
  this.dataCollected = [];
  this.direction = DIRECTIONS.NORTH;
}

MarsRover.prototype.move = function (direction) {
  this.direction = direction;
  console.log(`Движение марсохода указывает на ${this.direction}`);
};

MarsRover.prototype.collectData = function (dataType) {
  const data = {
    type: dataType,
    date: `Данные типа ${dataType} были собраны`,
  };
  this.dataCollected.push(data);
};

MarsRover.prototype.sendDataToEarth = function () {
  console.log("Отправка данных на Землю");
  this.dataCollected.splice(0, this.dataCollected.length);
};

function MissionControl(missionName, launchDate, spacecraft, marsRover) {
  this.missionName = missionName;
  this.launchDate = launchDate;
  this.spacecraft = spacecraft;
  this.marsRover = marsRover;
  this.location = { x: 0, y: 0, z: 0 };
  this.progress = 0;
  this.addedProgress = 25;
}

MissionControl.prototype.initiateLaunch = function () {
  this.spacecraft.fuelLevel > 0
    ? this.spacecraft.launch()
    : console.log(`Недостаточно топлива ${this.spacecraft.fuelLevel}`);

  if (this.progress + addedProgress <= 100) {
    this.progress += addedProgress;
  } else {
    this.progress = 100;
  }
};

MissionControl.prototype.deployMarsRover = function (x, y, z) {
  this.location.x = x;
  this.location.y = y;
  this.location.z = z;
  console.log(
    `Марсоход расположился на поверхности с координатами ${x},${y}, ${z}`
  );
  if (this.progress + addedProgress <= 100) {
    this.progress += addedProgress;
  } else {
    this.progress = 100;
  }
};

MissionControl.prototype.coordinateMission = function (direction) {
  this.marsRover.move(direction);
  this.launchDate = new Date();
  this.missionName = `Миссия ${this.missionName} началась`;

  if (this.progress + addedProgress <= 100) {
    this.progress += addedProgress;
  } else {
    this.progress = 100;
  }
};

MissionControl.prototype.monitorMissionProgress = function () {
  console.log(`Прогресс миссии: ${this.progress}%`);
};

const missionControl = new MissionControl(
  "Миссия 1",
  new Date(),
  new Spacecraft("Марсоход", "Бензин", "Mars"),
  new MarsRover("Марсоход M1", "Навигационная система")
);
