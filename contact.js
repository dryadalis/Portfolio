// Initialize Firebase
var config = {
    apiKey: "AIzaSyBHi2SPIcU_bZ8mfuX7u1PiYSsP6CrZBLc",
    authDomain: "contact-form-25489.firebaseapp.com",
    databaseURL: "https://contact-form-25489.firebaseio.com",
    projectId: "contact-form-25489",
    storageBucket: "contact-form-25489.appspot.com",
    messagingSenderId: "145264073477"
};
firebase.initializeApp(config);

//Reference messages collection
var messagesRef = firebase.database().ref('messages');

//CONTACT FORM
document.getElementById('contactForm').addEventListener('submit', submitForm);

//Submit form
function submitForm(e) {
    e.preventDefault();

    //Get values
    var name = getInputVal('name');
    var email = getInputVal('mail');
    var subject = getInputVal('subject');
    var message = getInputVal('msg');

    saveMessage(name, email, subject, message);

    //Show alert
    document.querySelector('.alert').style.display = 'block';

    //Hide alert after 3 sec
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000)

    //Clear form
    document.getElementById('contactForm').reset();
}

//Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

//Save message to firebase

function saveMessage(name, email, subject, message) {
    var newMessageRaf = messagesRef.push();
    newMessageRaf.set({
        name: name,
        email: email,
        subject: subject,
        message: message
    });
}