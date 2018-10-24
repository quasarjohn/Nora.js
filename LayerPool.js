class LayerPool {

  constructor(maxLayer) {
    this.availableLayers = [];

    for(let i = 0; i < maxLayer - 1; i++) {
      this.availableLayers[i] = i + 1;
    }
  }

  getRandomLayerId() {
    let random = Math.floor(Math.random() * this.availableLayers.length - 1);
    let randomLayer = this.availableLayers[random];
    this.availableLayers.pop(random);

    return randomLayer;
  }


}
