const maxLayer = 1000;
const layerPool = new LayerPool(maxLayer);

//input layer with 2 neurons
const inputLayer = new Layer(0);
const input0 = new Neuron(0);
const input1 = new Neuron(1);
inputLayer.addNeuron(input0);
inputLayer.addNeuron(input1);

//output layer with 1 neuron
const outputLayer = new Layer(maxLayer)
const output0 = new Neuron(-1);
outputLayer.addNeuron(output0);

const nn = new NeuralNetwork(inputLayer, outputLayer);


for(let i = 0; i < 10; i++) {
  nn.addRandomLayer(layerPool.getRandomLayerId());
}

//just for this test, add 100 neurons
for(let i = 0; i < 100; i++) {
  nn.addRandomNeuron(i);
}
