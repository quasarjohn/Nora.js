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
    const random = Math.floor(Math.random() * keys.length);

    return this.neurons[keys[random]];
  }
}
