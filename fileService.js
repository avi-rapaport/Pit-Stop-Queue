import fs from "fs/promises";

const filePath = "./raceData.json";

export async function readData() {
  const data = await fs.readFile(filePath, "utf8");
  if (!data.trim()) return {};
  return JSON.parse(data);
}

export async function saveData(content) {
  const data = await JSON.stringify(content, null, 2);
  fs.writeFile(filePath, data);
}
