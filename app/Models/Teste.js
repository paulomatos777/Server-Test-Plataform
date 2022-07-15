"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Teste extends Model {
  static get fillable() {
    return [
      "test_title",
      "test_description",
      "test_environment",
      "test_status",
      "author",
    ];
  }
}

module.exports = Teste;
