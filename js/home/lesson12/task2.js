//Добавьте кофеварке геттер для приватного свойства power, чтобы внешний код мог узнать мощность кофеварки.

function CoffeeMachine(power, capacity) {
<<<<<<< HEAD


=======


>>>>>>> origin/master
  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  this.getWaterAmount = function() {
    return waterAmount;
  };

  // my getter to return power
<<<<<<< HEAD

  this.getPower = function() {
    return power;
  }

=======

  this.getPower = function() {
    return power;
  }

>>>>>>> origin/master
}

machine1 = new CoffeeMachine(100, 1000);
alert(machine1.getPower());
