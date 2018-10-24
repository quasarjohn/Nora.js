class Visualizer {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');

  }


visualize(nn) {

  let incX = 200;
  let incY = 100;

  this.nn = nn;

  let x = 100;
  let y = 100;

  //draw the input layer
  for(const neuronKey in nn.inputLayer.neurons) {
    const neuron = nn.inputLayer.neurons[neuronKey];
    neuron.x = x;
    neuron.y = y;
    y+= incY;
    this.drawNeuron(neuron);
  }

  //draw the hidden layers
  for(const layerKey in nn.layers) {
    x += incX;
    y = 100;
    const layer = nn.layers[layerKey];
    for(const neuronKey in layer.neurons) {
      const neuron = layer.neurons[neuronKey];
      neuron.x = x;
      neuron.y = y;
      y+= incY;
      this.drawNeuron(neuron);
    }
  }

  //draw the output layer
  y = 100;
  x += incX;
  for(const neuronKey in nn.outputLayer.neurons) {
    const neuron = nn.outputLayer.neurons[neuronKey];
    neuron.x = x;
    neuron.y = y;
    y+= incY;
    this.drawNeuron(neuron);
  }

  //draw the lines
  // for(const neuronKey in nn.inputLayer.neurons) {
  //   const neuron = nn.inputLayer.neurons[neuronKey];
  //   this.drawLine(neuron);
  // }

  for(const layerKey in nn.layers) {
    const layer = nn.layers[layerKey];
    for(const neuronKey in layer.neurons) {
      const neuron = layer.neurons[neuronKey];
      this.drawLine(neuron);
    }
  }
}

  drawNeuron(neuron) {
    this.ctx.beginPath();
    this.ctx.arc(neuron.x, neuron.y, 35, 0, 2 * Math.PI);
    this.ctx.stroke();

    this.ctx.font = "12px Arial";
    this.ctx.fillText(neuron.key,neuron.x, neuron.y);
  }

  drawLine(neuron) {
    const startX = neuron.x;
    const startY = neuron.y;

    for(const connectionKey in neuron.connections) {
      const outNeuron = neuron.connections[connectionKey];

      const endX = outNeuron.x;
      const endY = outNeuron.y;

      this.ctx.beginPath();
      this.ctx.moveTo(startX, startY);
      this.ctx.lineTo(endX, endY);
      this.ctx.stroke();
    }
  }
}
