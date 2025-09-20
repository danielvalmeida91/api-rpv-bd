import { database } from "../database/index.js";

export async function getAll() {
  return database.raw('SELECT * FROM produtos;').then(result => {
    const filteredItems = result[0].map((item) => item)

    return filteredItems
  });
}