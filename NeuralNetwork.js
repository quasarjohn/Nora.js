class NeuralNetwork {

  constructor(inputLayer, outputLayer) {
    this.inputLayer = inputLayer;
    this.outputLayer = outputLayer;
    this.layers = {};
  }

  addRandomLayer(layerId) {
    const layer = new Layer(layerId);
    this.addLayer(layer);
  }

  addRandomNeuron(neuronId) {
    const layer = this.getRandomLayer(false);
    const neuron = new Neuron(layer.key + '_' + neuronId);
    layer.addNeuron(neuron);
  }

  makeRandomConnection() {
    //get two random layers
    const layer0 = this.getRandomLayer(true);
    const layer1 = this.getRandomLayer(true);

    //check if the two random layers are not the same
    if(layer0.key != layer1.key) {
      if(Object.keys(layer0.neurons).length > 0 && Object.keys(layer1.neurons).length > 0) {
        const neuron0 = layer0.getRandomNeuron();
        const neuron1 = layer1.getRandomNeuron();

        neuron0.connectTo(neuron1);
      }
    }
  }

  //helper functions
  addLayer(layer) {
    this.layers[layer.key] = layer;
  }

  getRandomLayer(includeInputLayer) {
    const keys = Object.keys(this.layers);

    if(includeInputLayer) {
      const r = Math.floor(Math.random() * (keys.length + 2)) - 1;
      console.log(r);
      if(r == -1) {
        return this.inputLayer
      } else if(r >= keys.length) {
        return this.outputLayer;
      } else {
        return this.layers[keys[r]];
      }
    }
    //get the keys as array
    //select a random number
    const random = this.getRandomInt(0, keys.length);
    //return that layer with that key
    return this.layers[keys[random]];
  }

  getRandomInt(min, max) {
    const r = Math.floor(Math.random() * max) - min;
    return r;
  }
}
