"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

const Enum = use("Config").get("enum");

class TesteSchema extends Schema {
  up() {
    this.create("testes", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.integer("max_value").notNullable();
      table.string("type");
      table.timestamps();
    });
  }

  down() {
    this.drop("testes");
  }
}

module.exports = TesteSchema;
