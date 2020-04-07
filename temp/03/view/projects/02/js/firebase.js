// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCh7u_SNN2kMY8JhDf9ENX846ROH4tGopg",
    authDomain: "portfolio-d6bf5.firebaseapp.com",
    databaseURL: "https://portfolio-d6bf5.firebaseio.com",
    projectId: "portfolio-d6bf5",
    storageBucket: "portfolio-d6bf5.appspot.com",
    messagingSenderId: "284094989059",
    appId: "1:284094989059:web:a754afeb3fb1ac44"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

//Log out
document.getElementById("logout").addEventListener("click", function (event) {
    event.preventDefault();
    userLogOut();
});
//Sign out
function userLogOut() {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        console.log("logged out");
    }).catch(function (error) {
        // An error happened.
        console.warn(error.message);
    });
}

firebase.auth().onAuthStateChanged(function (user) {
    cit();
});

// Change Account inner text
function cit() {
    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;
    var account = document.getElementById("account");
    var login = document.getElementById("login");
    var logout = document.getElementById("logout");
    var welcome = document.getElementById("welcome");
    var welcome_default = "Welcome to my page!";

    function changeInnerText() {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        uid = user.uid;
        console.log(name, email, photoUrl, emailVerified, uid);
        // DOM Modification
        login.classList.add("hidden"); //Hide login link
        logout.classList.remove("hidden"); //Show logout
        account.innerText = email;
        welcome.innerText = "Welcome " + name +"!";
    }

    if (user != null) {
        changeInnerText();
    } else {
        logout.classList.add("hidden");
        login.classList.remove("hidden");
        welcome.innerText = welcome_default;
        account.innerText = "Log in";
    }


}