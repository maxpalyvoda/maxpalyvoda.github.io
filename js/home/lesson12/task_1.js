function Machine(power) {
  this._enabled = false;
 // var self = this;

  // on
  this.enable = function() {
       this._enabled = true;
       console.log('on')
  };

// off
  this.disable = function() {
    this._enabled = false;
    console.log('off')
  };

}

function CoffeeMachine(power) {
  //apply machine on/off functions with arguments
  Machine.apply(this, arguments);

  var waterAmount = 0;
// setter for water amount
  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

  /*var parentEnable = this.enable;
  this.enable = function() {
      parentEnable(); // теперь можно вызывать как угодно, this не важен
      this.run();
    } */

  function onReady() {
    console.log( 'coffee is ready' );
  }

  this.run = function() {
    if (!this._enabled) {
    throw new Error("Кофеварка выключена");
  }
    setTimeout(onReady, 1000);
  };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
