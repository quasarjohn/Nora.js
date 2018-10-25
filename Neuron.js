class Neuron {

  constructor(key) {
    // the key or the global id of the neuron
    this.key = key;
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
    this.connections[otherNeuron.key] = {
      neuron: otherNeuron,
      weight: Math.random(),
      bias: Math.random()
    };
  }

  //tanh activation
  activate(input) {
    return Math.tanh(input);
  }

  //mutation increments, dicrements or changes the weight
  mutate() {

  }

  //(weighted sum of input * weight) + biases
  calculate() {
    let value = 0;
    for(let connectionKey in this.connections) {
      const connection = this.connections[connectionKey];
      value += (connection.neuron.val * connection.weight) + connection.bias;
      console.log(this.activate(value));
      connection.neuron.val = this.activate(value);
    }
  }
}
