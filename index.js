const maxLayer = 1000;
const layerPool = new LayerPool(maxLayer);
const neuronKeyManager = new NeuronKeyManager();

const nn = new NeuralNetwork();

//input layer with 2 neurons
const inputLayer = new Layer(0);
const input0 = new Neuron(neuronKeyManager.getNewKey());
const input1 = new Neuron(neuronKeyManager.getNewKey());
inputLayer.addNeuron(input0);
inputLayer.addNeuron(input1);
nn.addLayer(inputLayer);

//output layer with 1 neuron
const outputLayer = new Layer(maxLayer)
const output0 = new Neuron(-1);
outputLayer.addNeuron(output0);
nn.addLayer(outputLayer);


for(let i = 0; i < 4; i++) {
  nn.addLayer(new Layer(layerPool.getRandomLayerId()));
}

for(let i = 0; i < 20; i++) {
  nn.addRandomNeuron(neuronKeyManager.getNewKey())
}

for(let i = 0; i < 100; i++) {
  nn.makeRandomConnection()
}

new Visualizer().visualize(nn);
