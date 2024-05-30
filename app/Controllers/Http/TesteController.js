"use strict";
const Teste = use("App/Models/Teste");

class TesteController {
  async index() {
    const testes = Teste.all();

    return testes;
  }
//nome, valor máximo, e tipo (eletrônico ou físico).
  async store({ request }) {
    const data = request.only(Teste.fillable);


    const teste = await Teste.create(data);

    return teste;
  }

  async show({ params }) {
    const teste = await Teste.findOrFail(params.id);

    return teste;
  }

  async update({ params, request }) {
    const teste = await Teste.findOrFail(params.id);
    const data = request.only(Teste.fillable);

    teste.merge(data);
    await teste.save();

    return teste;
  }

  async destroy({ params }) {
    const teste = await Teste.findOrFail(params.id);

    await teste.delete();
  }
}

module.exports = TesteController;
