class NeuralNetwork {

  constructor(inputLayer, outputLayer) {
    this.inputLayer = inputLayer;
    this.outputLayer = outputLayer;
    this.layers = {};
  }

  addLayer(layer) {
    this.layers[layer.key] = layer;
  }

  addRandomLayer(layerId) {
    const layer = new Layer(layerId);
    this.addLayer(layer);
  }

  addRandomNeuron(neuronId) {
    const layer = this.getRandomLayer();
    const neuron = new Neuron(layer.key + '_' + neuronId);
    layer.addNeuron(neuron);
  }

  getRandomLayer() {
    //get the keys as array
    const keys = Object.keys(this.layers);
    //select a random number
    const random = Math.floor(Math.random() * keys.length);
    //return that layer with that key
    return this.layers[keys[random]];
  }

}
