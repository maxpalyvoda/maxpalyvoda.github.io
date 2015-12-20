// OOP getters,setters

/* С приватными свойствами имя firstName и фамилия surname.
С сеттерами для этих свойств.
С геттером getFullName(), который возвращает полное имя. */

function User() {
 var firstName = ' ';
 var surname = ' ';
<<<<<<< HEAD

=======

>>>>>>> origin/master
 this.setFirstName = function(name){
   firstName = name;
   //alert(firstName)
 };
<<<<<<< HEAD

  this.setSurname = function(secondName) {
    surname = secondName;
  };

  this.getFullName = function() {
    return firstName + ' ' + surname;
  }

=======

  this.setSurname = function(secondName) {
    surname = secondName;
  };

  this.getFullName = function() {
    return firstName + ' ' + surname;
  }

>>>>>>> origin/master
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов
