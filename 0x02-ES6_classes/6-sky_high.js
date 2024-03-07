import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {  // Define constructor
    super(sqft);
    this.floors = floors; // Assign the value of floor
  }

  get floors() { // getting the calue of floors
    return this._floors;
  }

  set floors(value) { // Set floor value
    this._floors = value;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
