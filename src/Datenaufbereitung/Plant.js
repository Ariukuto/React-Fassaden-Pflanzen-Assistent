export class Plant
{
  name = ""; 
  type = ""; 
  winterHardinessZone = ""; 
  careLevel = ""; 
  foliagePhase = "";
  foliageColors = "";
  flowerColors = "";
  exposition = ""

  constructor(plantArray) {
    this.name = plantArray[0];
    this.type = this.edit(plantArray[1]);
    this.winterHardinessZone = this.edit(plantArray[2]);
    this.careLevel = this.edit(plantArray[3]);
		this.flowerColors = this.edit(plantArray[4]);
    this.foliageColors = this.edit(plantArray[5]);
		this.exposition = this.edit(plantArray[6]);
		this.foliagePhase = this.edit(plantArray[7]);
  }

  edit(value="") {
    var splitted = value.split(" ");
    var newValue = "";
    if(splitted.length > 1) {
      splitted.forEach(str => {
        str = str.charAt(0).toUpperCase() + str.slice(1);
        newValue = newValue + `${str}, `;
      });
      newValue = newValue.substr(0, newValue.length - 2);
      return newValue;
    } else {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }

  toJsonString() {
    return `
    {
      name: "${this.name}",
      type: "${this.type}",
      winterHardinessZone: "${this.winterHardinessZone}",
      careLevel: "${this.careLevel}",
      foliagePhase: "${this.foliagePhase}",
      foliageColors: "${this.foliageColors}",
      flowerColors: "${this.flowerColors}",
      exposition: "${this.exposition}",
    },
    `;
  }

	toJsonObject() {
		return {
			name: this.name,
			type: this.type,
			winterHardinessZone: this.winterHardinessZone,
			careLevel: this.careLevel,
			foliagePhase: this.foliagePhase,
			foliageColors: this.foliageColors,
			flowerColors: this.flowerColors,
			exposition: this.exposition,
		}
	}
}
