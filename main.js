import { fetchData } from "./fetchData.js";
import {
  getRaceData,
  getCarsData,
  getPitData,
  getNextCar,
  searchCarByNumber,
} from "./raceService.js";
import { readData } from "./fileService.js";

async function main() {
  console.log("Pit Stop Queue - Race Team Management System");
  console.log(
    "Race engineer: Let's check the current queue status on the pit wall.\n",
  );

  try {
    await fetchData();
    const data = await readData();

    console.log("========== PIT STOP QUEUE ==========");
    console.log(await getRaceData(data));
    console.log(await getCarsData(data));
    await getPitData(data);
    const next = await getNextCar(data);
    console.log(
      `\nNext car to enter the pit:\n>>Car#${next.carNumber}|Driver: ${next.driverName}`,
    );
    console.log("=====================================\n");
    console.log(
      `Radio message to car #${next.carNumber}: "Box box box, ${next.driverName}, pit this lap!\n`,
    );
    console.log("--- Search for a car by number ---");
    console.log(await searchCarByNumber(data, 44));
    console.log(await searchCarByNumber(data, 99));
    console.log(
      "\nProcess completed successfully. The pit wall is up to date.",
    );
  } catch (err) {
    console.log(err.message);
  }
}

main();
