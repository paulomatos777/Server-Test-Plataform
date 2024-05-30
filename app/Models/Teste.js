"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Teste extends Model {
  static get fillable() {
    return [
      "name",
      "max_value",
      "type",
    ];
  }
}

module.exports = Teste;
