import { getAll } from "../../services/products";

export async function list(_request, reply) {
  const response = await getAll();

  reply.send({ response })
}