class NeuralNetwork {

  constructor() {
    this.layers = {};
  }

  addLayer(layer) {
    this.layers[layer.key] = layer;
  }
  
}
