class Layer {

  constructor(key) {
    this.key = key;
    this.neurons = {};
  }

  addNeuron(neuron) {
    this.neurons[neuron.key] = neuron;
  }

  getRandomNeuron() {
    const keys = Object.keys(this.neurons);
    const random = this.getRandomInt(0, keys.length);

    return this.neurons[keys[random]];
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * max);
  }
}
