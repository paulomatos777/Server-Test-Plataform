class Enum {
  constructor() {
    this.ENVIRONMENT = [
      { key: "staging", value: "Staging" },
      { key: "development", value: "Development" },
      { key: "production", value: "Production" },
    ];

    this.STATUS = [
      { key: "working", value: "Funcionando" },
      { key: "error", value: "Erro" },
    ];
  }

  keys(path) {
    return this[path].map((item) => item.key);
  }

  getKey(path) {
    const [type, key] = path.split(".");

    const selectedEnum = this[type].find(
      (item) => String(item.key) === String(key)
    );

    return selectedEnum.key;
  }

  getValue(path) {
    const [type, key] = path.split(".");

    const selectedEnum = this[type].find(
      (item) => String(item.key) === String(key)
    );

    return selectedEnum.value;
  }

  getKeyByValue(path) {
    const [type, value] = path.split(".");

    const selectedEnum = this[type].find(
      (item) => String(item.value) === String(value)
    );

    return selectedEnum.key;
  }

  get(path) {
    const [type, key] = path.split(".");

    const selectedEnum = this[type].find(
      (item) => String(item.key) === String(key)
    );

    return selectedEnum;
  }

  is(path, value) {
    const [type, keys] = path.split(".");

    const decodeKeys = keys.includes(",") ? keys.split(",") : [keys];

    const selectedEnums = this[type].filter((item) =>
      decodeKeys.includes(String(item.key))
    );

    return !!selectedEnums.find((item) => item.key === value);
  }
}

module.exports = new Enum();
