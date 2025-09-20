/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('itens_pedido').del();
  await knex('pedidos').del();
  await knex('produtos').del();
  await knex('clientes').del();
  await knex('marcas').del();

  await knex('marcas').insert([
    { id: 1, nome: 'Apple', site: 'apple.com', telefone: '0800-761-0867' },
    { id: 2, nome: 'Samsung', site: 'samsung.com', telefone: '0800-761-0900' },
    { id: 3, nome: 'Xiaomi', site: 'xiaomi.com', telefone: '0800-761-0800' },
    { id: 4, nome: 'Huawei', site: 'huawei.com', telefone: '0800-761-0700' },
  ]);

  await knex('clientes').insert([
    { id: 1, nome: 'Daniel Ventura', email: 'daniel@email.com', cidade: 'Juiz de Fora' },
    { id: 2, nome: 'Danilu Samuel', email: 'danilu@email.com', cidade: 'Santana de Cataguases' },
    { id: 3, nome: 'Larissa da Glória', email: 'larissa@email.com', cidade: 'Cataguases' },
    { id: 4, nome: 'Lucas Araújo', email: 'lucas.a@email.com', cidade: 'Leopoldina' },
    { id: 5, nome: 'João Pedro', email: 'joao@email.com', cidade: 'Rio de Janeiro' },
    { id: 6, nome: 'Yasmin Dias', email: 'yasmin@email.com', cidade: 'São Paulo' },
  ]);

  await knex('produtos').insert([
    { id: 1, nome: 'iPhone 15 Pro Max', preco: 9999, estoque: 160, id_marca: 1 },
    { id: 2, nome: 'iPhone 15 Pro', preco: 8599, estoque: 200, id_marca: 1 },
    { id: 3, nome: 'iPhone 15', preco: 7299, estoque: 300, id_marca: 1 },
    { id: 4, nome: 'iPhone SE', preco: 4599, estoque: 100, id_marca: 1 },
    { id: 5, nome: 'Samsung Galaxy S23 Ultra', preco: 7599, estoque: 180, id_marca: 2 },
    { id: 6, nome: 'Samsung Galaxy S23', preco: 5999, estoque: 250, id_marca: 2 },
    { id: 7, nome: 'Samsung Galaxy A54', preco: 2199, estoque: 400, id_marca: 2 },
    { id: 8, nome: 'Samsung Galaxy Z Fold 5', preco: 12999, estoque: 50, id_marca: 2 },
    { id: 9, nome: 'Samsung Galaxy Z Flip 5', preco: 7999, estoque: 80, id_marca: 2 },
    { id: 10, nome: 'Xiaomi 13 Pro', preco: 6599, estoque: 120, id_marca: 3 },
    { id: 11, nome: 'Xiaomi 13', preco: 5899, estoque: 150, id_marca: 3 },
    { id: 12, nome: 'Xiaomi Redmi Note 12 Pro', preco: 2299, estoque: 350, id_marca: 3 },
    { id: 13, nome: 'Xiaomi Poco F5 Pro', preco: 3999, estoque: 200, id_marca: 3 },
    { id: 14, nome: 'Xiaomi Redmi 12', preco: 1299, estoque: 500, id_marca: 3 },
    { id: 15, nome: 'Huawei P60 Pro', preco: 8299, estoque: 90, id_marca: 4 },
    { id: 16, nome: 'Huawei Nova 11 Pro', preco: 4999, estoque: 110, id_marca: 4 },
    { id: 17, nome: 'Huawei Mate X3', preco: 14999, estoque: 40, id_marca: 4 },
    { id: 18, nome: 'Huawei Pura 70 Ultra', preco: 11999, estoque: 60, id_marca: 4 },
    { id: 19, nome: 'Samsung Galaxy S24', preco: 6899, estoque: 220, id_marca: 2 },
    { id: 20, nome: 'Xiaomi 14 Ultra', preco: 9599, estoque: 75, id_marca: 3 },
    { id: 22, nome: 'Xiaomi 10 Ultra', preco: 9599, estoque: 0, id_marca: 3 },
  ]);

  await knex('pedidos').insert([
    { id: 1, data_pedido: '2025-09-17', id_cliente: 1, valor_total: 11898 },
    { id: 2, data_pedido: '2025-09-17', id_cliente: 2, valor_total: 13598 },
    { id: 3, data_pedido: '2025-09-17', id_cliente: 3, valor_total: 12498 },
    { id: 4, data_pedido: '2025-09-17', id_cliente: 4, valor_total: 5298 },
  ]);

  await knex('itens_pedido').insert([
    { id_pedido: 1, id_produto: 3, quantidade: 1, preco_unitario: 7299 },
    { id_pedido: 1, id_produto: 4, quantidade: 1, preco_unitario: 4599 },
    { id_pedido: 2, id_produto: 5, quantidade: 1, preco_unitario: 7599 },
    { id_pedido: 2, id_produto: 6, quantidade: 1, preco_unitario: 5999 },
    { id_pedido: 3, id_produto: 10, quantidade: 1, preco_unitario: 6599 },
    { id_pedido: 3, id_produto: 11, quantidade: 1, preco_unitario: 5899 },
    { id_pedido: 4, id_produto: 13, quantidade: 1, preco_unitario: 3999 },
    { id_pedido: 4, id_produto: 14, quantidade: 1, preco_unitario: 1299 },
  ]);
};
