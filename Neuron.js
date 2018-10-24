class Neuron {

  constructor(key) {
    // the key or the global id of the neuron
    this.key = key;
    this.weight = 1;
    this.bias = 1;
    // inputs from other neurons to this neuron
    this.inputs = {};
    //the summation of the product of the inpputs and the weight of this neuron + bias
    this.val = 0;
    //the ID of neurons where this neuron will use the val as input
    this.connections = {};

    //x and y coordinates in the canvas for visualization
    this.x = 0;
    this.y = 0;
  }

  connectTo(otherNeuron) {
    this.connections[otherNeuron.key] = otherNeuron;
  }
}
