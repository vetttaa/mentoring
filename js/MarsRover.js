class Spacecraft {
  constructor(name, typeFuel) {
    this.name = name;
    this.fuelType = typeFuel;
    this.fuelLevel = 100;
    this.isInSpace = true;
  }
  launch() {
    console.log(`Корабль взлетает`) &&
      (this.fuelLevel -= 10) &&
      (this.isInSpace = true);
  }
  land(destination) {
    destination
      ? (this.isInSpace = false) && (this.fuelLevel -= 10)
      : console.log(`Недостаточно топлива ${this.fuelLevel}`);
  }
  checkFuel() {
    console.log(`Уровень топлива ${this.fuelLevel}`);
  }
  refuel(amount) {
    this.fuelLevel += amount;
  }
}

class MarsRover {
  constructor(model, navigationSystem) {
    this.model = model;
    this.navigationSystem = navigationSystem;
    this.dataCollected = [];
    this.direction = 'N';
  }
  move(direction) {
    this.direction = direction;
    console.log(`Движение марсохода указывает на ${this.direction}`);
  }
  collectData(dataType) {
    const data = `Данные типа ${dataType}`;
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
    this.location = {x: 0, y: 0, z: 0}
    this.progress = 0;
  }
  initiateLaunch() {
    this.spacecraft.fuelLevel > 0
      ? this.spacecraft.launch()
      : console.log(`Недостаточно топлива ${this.spacecraft.fuelLevel}`);
  }
  deployMarsRover(x, y, z) {
    this.location = {x: x, y: y, z: z}
    console.log(`Марсоход расположился на поверхности с координатами ${x},${y}, ${z}`)
    this.progress += 25;
  }
  coordinateMission(direction) {
    this.marsRover.move(direction);
    this.progress += 25;
  }
  monitorMissionProgress() {
    console.log(`Прогресс миссии: ${this.progress}%`);
  }
}

const spacecraft = new Spacecraft('Enterprise', 'Plasma');
const marsRover = new MarsRover('Curiosity', 'Autonomous Navigation System');
const missionControl = new MissionControl('Mission 1', new Date(), spacecraft, marsRover);

missionControl.initiateLaunch();
missionControl.deployMarsRover(10, 20, 30);
missionControl.coordinateMission('S');
missionControl.monitorMissionProgress();