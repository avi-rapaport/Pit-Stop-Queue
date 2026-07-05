import { api } from "./Configuration.js";
import { saveData } from "./fileService.js";

export async function fetchData() {
  try {
    const response = await fetch(api);

    if (!response.ok) {
      throw new Error(response.status, response.statusText);
    }
    console.log("Loading queue data...\n");
    const data = await response.json();
    await saveData(data);
  } catch (err) {
    console.log(err.message);
  }
}
