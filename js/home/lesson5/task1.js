var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};
var maxTask = 0;
var maxName = '';
for (var name in tasksCompleted) {
 if (maxTask < tasksCompleted[name]) {
   maxTask = tasksCompleted[name];
<<<<<<< HEAD
   maxName = name;
 }
=======
   maxName = name;
 }
>>>>>>> origin/master
}
console.log(maxName);

// вопрос: Math.max почему-то тут не сработало. Код работает, но непонятно каким именно образом он выбирает максимальное значение из свойств обьекта?
