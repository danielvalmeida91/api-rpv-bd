import { knexClient } from "../knexfile.js";

export async function getAll() {
  return knexClient.raw('SELECT * FROM produtos;').then(result => result);
}