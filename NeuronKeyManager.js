class NeuronKeyManager {

  constructor() {
    this.keys = 0;
  }

  getNewKey() {
    const key = this.keys;
    this.keys++;
    return key;
  }

}
