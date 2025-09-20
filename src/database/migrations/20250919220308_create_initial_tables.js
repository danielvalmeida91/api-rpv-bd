/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema
    .createTable('marcas', (table) => {
      table.increments('id').primary();
      table.string('nome', 100).notNullable().unique();
      table.string('site', 100);
      table.string('telefone', 15);
    })
    .createTable('produtos', (table) => {
      table.increments('id').primary();
      table.string('nome', 100).notNullable();
      table.decimal('preco', 10, 2);
      table.integer('estoque').defaultTo(0);
      table.integer('id_marca').unsigned(); // unsigned permite somente números inteiros positivos
      table.foreign('id_marca')
        .references('id')
        .inTable('marcas')
        .onDelete('SET NULL');
    })
    .createTable('clientes', (table) => {
      table.increments('id').primary();
      table.string('nome', 100).notNullable();
      table.string('email', 100).notNullable().unique();
      table.string('cidade', 200);
      table.date('data_nascimento');
    })
    .createTable('pedidos', (table) => {
      table.increments('id').primary();
      table.timestamp('data_pedido').defaultTo(knex.fn.now());
      table.decimal('valor_total', 10, 2);
      table.integer('id_cliente').unsigned();
      table.foreign('id_cliente')
        .references('id')
        .inTable('clientes')
        .onDelete('CASCADE');
    })
    .createTable('itens_pedido', (table) => {
      table.integer('quantidade').notNullable();
      table.decimal('preco_unitario', 10, 2).notNullable();
      table.integer('id_pedido').unsigned().notNullable();
      table.foreign('id_pedido')
        .references('id')
        .inTable('pedidos')
        .onDelete('CASCADE');
      table.integer('id_produto').unsigned().notNullable();
      table.foreign('id_produto')
        .references('id')
        .inTable('produtos')
        .onDelete('CASCADE');
      table.primary(['id_pedido', 'id_produto']);
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema
    .dropTable('itens_pedido')
    .dropTable('pedidos')
    .dropTable('clientes')
    .dropTable('produtos')
    .dropTable('marcas');
}
