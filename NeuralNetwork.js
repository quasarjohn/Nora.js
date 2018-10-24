class NeuralNetwork {

  constructor() {
    this.layers = {};
  }

  addRandomNeuron(neuronId) {
    const layer = this.getRandomLayer(true);
    if(layer != undefined) {
      const neuron = new Neuron(layer.key + '_' + neuronId);
      layer.addNeuron(neuron);
    }
  }

  makeRandomConnection() {
    //get two random layers
    let max = Math.floor(Math.random() * Object.keys(nn.layers).length);

    //+1 to ensure that layer0 has lesser index than layer1 to prevent recurrent connections
    const layer0 = this.getRandomLayer(max);
    const layer1 = this.getRandomLayer(max);

    //check if neither is undefined
    if(layer0 != undefined && layer1 != undefined) {
      //check if the two random layers are not the same
      if(layer0.key != layer1.key) {
        //check if both contains neuron
        if(Object.keys(layer0.neurons).length > 0 && Object.keys(layer1.neurons).length > 0) {
          const neuron0 = layer0.getRandomNeuron();
          const neuron1 = layer1.getRandomNeuron();

          neuron0.connectTo(neuron1);
        }
      }
    }
  }

  //helper functions
  addLayer(layer) {
    this.layers[layer.key] = layer;
  }

  getRandomLayer(includeInOut) {
    const keys = Object.keys(this.layers);
    const r = Math.floor(Math.random() * keys.length);

    if(includeInOut && (r == 0 || keys[r] == '1000'))
      return undefined;

    return this.layers[keys[r]];
  }

  clone() {
    const n = new NeuralNetwork(this.inputLayer, this.outputLayer);
    n.layers = this.layers;
    return n;
  }
}
