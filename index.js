const nn = new NeuralNetwork();
const maxLayer = 1000;
const layerPool = new LayerPool(maxLayer);
console.log(layerPool.availableLayers);

//input layer with 2 neurons
const inputLayer = new Layer(0);
const input0 = new Neuron(0);
const input1 = new Neuron(1);
inputLayer.addNeuron(input0);
inputLayer.addNeuron(input1);
nn.addLayer(inputLayer);

//output layer with 1 neuron
const outputLayer = new Layer(maxLayer)
const output0 = new Neuron(-1);
outputLayer.addNeuron(output0);
nn.addLayer(outputLayer);
