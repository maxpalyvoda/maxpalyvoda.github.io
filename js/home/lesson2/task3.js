var userLogin = prompt('Login', '');
if (userLogin == 'admin') {
  prompt('Password');
}
else if (userLogin == null) {
  alert('Canceled');
}
else {
  alert('Access denied');
} 
