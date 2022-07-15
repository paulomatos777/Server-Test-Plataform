"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

const Enum = use("Config").get("enum");

class TesteSchema extends Schema {
  up() {
    this.create("testes", (table) => {
      table.increments();
      table.string("test_title").notNullable();
      table.string("test_description").notNullable();
      table.string("author");
      table.enu("test_status", Enum.keys("STATUS")).notNullable();
      table.enu("test_environment", Enum.keys("ENVIRONMENT")).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("testes");
  }
}

module.exports = TesteSchema;
