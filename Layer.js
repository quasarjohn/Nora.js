class Layer {

  constructor(key) {
    this.key = key;
    this.neurons = {};
  }

  addNeuron(neuron) {
    this.neurons[neuron.key] = neuron;
  }
}
