const btn = document.getElementById('submit_btn');
const error_message = document.getElementById('error_zone')

// regexes
const letters = /[a-z\u00C0-\u00FF]/ig;
const emailRegEx = /^([a-z0-9\_]+)@([a-z0-9]+)\.[a-z]{2,}$/i;
const pwdRegEx = /^(?=.*\d.*\d.*)(?=.*\s.*)(?=.*[!@#$%^&*()_+}{|":\\';?><]).{12,}$/
// get inputs
const lastname = document.getElementById('lastname');
const firstname = document.getElementById('firstname');
const age = document.getElementById('age');
const email = document.getElementById('email');
const email_confirm = document.getElementById('email_confirm');
const password = document.getElementById('password');
const password_confirm = document.getElementById('password_confirm');
const accept_condition = document.getElementById('accept_condition');

const verifyInput = (
  lastname, firstname, age, 
  email, email_confirm, 
  password, password_confirm, 
  accept_condition
  ) => {
    if (lastname.value.length === 0) {
      error_message.innerHTML = "<li>Veuillez saisir votre nom de famille.</li>"      
    } else if (firstname.value.length === 0) {
      error_message.innerHTML = "<li>Veuillez saisir votre prénom.</li>"      
    } else if ((firstname.value.match(letters)=== null) || (firstname.value.match(letters).length < 3)) {
      error_message.innerHTML = "<li>Le prénom doit contenir au moins 3 lettres.</li>"      
    } else if (age.value.length === 0 ) {
      error_message.innerHTML = "<li>Veuillez saisir votre âge.</li>"      
    } else if (age.value <= 18) {
      error_message.innerHTML = "<li>Vous devez avoir plus que 18 ans pour continuer.</li>"      
    } else if (email.value.length === 0) {
      error_message.innerHTML = "<li>Veuillez saisir votre adresse mail.</li>"      
    } else if (!emailRegEx.test(email.value)) {
      error_message.innerHTML = "<li>Veuillez vérifier le format de votre adresse mail.</li>"      
    } else if (email_confirm.value.length === 0) {
      error_message.innerHTML = "<li>Veuillez confirmer votre adresse mail.</li>"      
    } else if (email.value.toLowerCase() !== email_confirm.value.toLowerCase()) {
      error_message.innerHTML = "<li>Les deux saisies de votre adresse mail ne correspondent pas.</li>"      
    } else if (password.value.length === 0) {
      error_message.innerHTML = "<li>Veuillez définir un mot de passe.</li>"      
    } else if (!pwdRegEx.test(password.value)) {
      error_message.innerHTML = "<li>Veuillez vérifier le format de votre mot de passe.</li>"
    } else if (password_confirm.value.length === 0) {
      error_message.innerHTML = "<li>Veuillez re-confirmer votre mot de passe.</li>" 
    } else if (password.value !== password_confirm.value) {
      error_message.innerHTML = "<li>Les deux saisies de votre mot de passe ne correspondent pas.</li>" 
    } else if (!accept_condition.checked) {
      error_message.innerHTML = "<li>Vous devez accepter les conditions pour continuer.</li>"
    }
    else {
      error_message.innerHTML = ""
      return true      
    } 
  }

/*   Aucun des champs ne devra être vide.
Le password et sa confirmation également
Les CGU doivent être acceptés
 */


btn.onclick = (e) => {
  let inputValid = verifyInput(
  lastname, firstname, age, 
  email, email_confirm, 
  password, password_confirm, 
  accept_condition);
  console.log(inputValid)
  if (inputValid){
    console.log(btn.data-destination)
    window.location = btn.data-destination;
  } else {
    e.preventDefault();
  }
  ;
}