import { error } from "node:console";
import { readData, saveData } from "./fileService.js";

export async function getRaceData(data) {
  const name = data.raceName;
  const current = data.currentLap;
  const total = data.totalLaps;

  return `Race: ${name}\nLap: ${current}/${total}`;
}

export async function getCarsData(data) {
  const carsList = data.cars;

  const totalCars = carsList.length;
  const pitCompletedCount = carsList.filter(
    (car) => car.status === "done",
  ).length;

  return `Total cars in race: ${totalCars}\nPit stops completed: ${pitCompletedCount}\n`;
}
export async function getPitData(data) {
  const carsList = data.cars;
  const pitwaiting = carsList.filter((car) => car.status === "waiting");
  console.log("Cars waiting for pit stop:");
  for (const wait of pitwaiting) {
    console.log(`-Car#${wait.carNumber}|Driver: ${wait.driverName}`);
  }
}

export async function getNextCar(data) {
  const carsList = data.cars;
  const pitwaiting = carsList.filter((car) => car.status == "waiting");
  return pitwaiting[0];
}

export async function searchCarByNumber(data, number) {
  const carsList = data.cars;
  const car = carsList.find((car) => car.carNumber === number);
  if (!car) {
    return `Error: No car found with number #${number} in the current race.`;
  }
  return `Found car #${car.carNumber}|Driver: ${car.driverName}|Status:${car.status}`;
}
