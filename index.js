const maxLayer = 1000;
const layerPool = new LayerPool(maxLayer);
const neuronKeyManager = new NeuronKeyManager();

//input layer with 2 neurons
const inputLayer = new Layer(0);
const input0 = new Neuron(neuronKeyManager.getNewKey());
const input1 = new Neuron(neuronKeyManager.getNewKey());
inputLayer.addNeuron(input0);
inputLayer.addNeuron(input1);

//output layer with 1 neuron
const outputLayer = new Layer(maxLayer)
const output0 = new Neuron(-1);
outputLayer.addNeuron(output0);

const nn = new NeuralNetwork(inputLayer, outputLayer);


for(let i = 0; i < 2; i++) {
  nn.addRandomLayer(layerPool.getRandomLayerId());
}

//just for this test, add 100 neurons
for(let i = 0; i < 8; i++) {
  nn.addRandomNeuron(neuronKeyManager.getNewKey());
}

for(let i = 0; i < 20; i++) {
  nn.makeRandomConnection();
}

const v = new Visualizer();
v.visualize(nn);

//starting x and y cooridnates for the canvas
