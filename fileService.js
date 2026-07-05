import fs from "fs/promises";

const filePath = "./raceData.json";

export async function readData() {
  const data = await fs.readFile(filePath, "utf8");
  return JSON.parse(data);
}

export async function saveData(content) {
  const data = JSON.stringify(content, null, 2);
  await fs.writeFile(filePath, data);
}
