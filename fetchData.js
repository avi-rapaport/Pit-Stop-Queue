import { api } from "./Configuration.js";
import { saveData } from "./fileService.js";

export async function fetchData() {
  console.log("Loading queue data...\n");

  const response = await fetch(api);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();
  await saveData(data);
}
