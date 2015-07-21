function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}


// Fridge class
function Fridge(power) {
  
  Machine.apply(this,arguments);
  
  var food = [];
    
  // public method to add food to the fridge, SETTER
  this.addFood = function(item) {
    
    if(!this._enabled) {
      throw new Error ('the fridge is off')
    }
    if(arguments.length + 1 > power / 100) {
      throw new Error ('too much food');
    }
    for(var i=0; i<arguments.length; i++) {
      food.push(arguments[i]); //with help of counter i make arguments array
    }
  }
  // public method to return food as an array GETTER
  this.getFood = function() {
    return food.slice(); //with help of slice it does not react to newadded elements
  }
  
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");


var fridgeFood = fridge.getFood();
console.log( fridgeFood );


var fridgeFood = fridge.getFood();
alert( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

alert( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье
