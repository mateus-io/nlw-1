import Knex from 'knex';

export async function up(knex : Knex) {
    return  knex.schema.createTable('categories_products', table => {
                table.increments('id').primary();
                table.integer('categorie_id')
                    .notNullable()
                    .references('id')
                    .inTable('categories');//esse comando garante que cada point_id é um id válido na tabela points
                table.integer('product_id')
                    .notNullable()
                    .references('id')
                    .inTable('products');
            });
}
export async function down(knex : Knex) {
    return knex.schema.dropTable('categories_products');
}