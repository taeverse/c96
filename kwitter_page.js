//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCxeVJe46fMgsUqSK0CJLPf_tpzOEE_0Gg",
      authDomain: "kwitter-89197.firebaseapp.com",
      databaseURL: "https://kwitter-89197-default-rtdb.firebaseio.com",
      projectId: "kwitter-89197",
      storageBucket: "kwitter-89197.appspot.com",
      messagingSenderId: "392383640042",
      appId: "1:392383640042:web:d203948562f6fa18c14293"
};


firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name")
room_name = localStorage. getItem("room_name")

function send()
{
msg = document.getElementById("msg").value 
firebase.database().ref(room_name).push({
name: user_name,
message: msg,
like:0      
});

document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
