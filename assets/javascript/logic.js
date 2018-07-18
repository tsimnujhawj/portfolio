$(document).ready(function() { // DOCUMENT READY OPENING

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCnGRiTf-s00r0urwOoyw-PSJ7VGqtHma0",
  authDomain: "contactform-ed998.firebaseapp.com",
  databaseURL: "https://contactform-ed998.firebaseio.com",
  projectId: "contactform-ed998",
  storageBucket: "contactform-ed998.appspot.com",
  messagingSenderId: "670030328827"
};
firebase.initializeApp(config);

const msgRef = firebase.database();

// SMOOTH SCROLLING
  let scrollLink = $(".scroll");
  scrollLink.click(function(e) {
    e.preventDefault();
    $("body, html").animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });
  
  // Active link switching
  $(window).scroll(function() {
    let scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      let sectionOffset = $(this.hash).offset();
      
      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    })
    
  })

  // listen for form submit
  document.getElementById("submit-btn").addEventListener("click", submitForm);

  // Submit form
  function submitForm(e) {
    e.preventDefault();
    let contactName = getInputVal("name")
    let contactEmail = getInputVal("email")
    let contactSubject = getInputVal("subject")
    let contactComment = getInputVal("comment")

    // call Send Message func with data values
    sendMsg(contactName, contactEmail, contactSubject, contactComment)

      // show success alert
  document.querySelector(".alert").style.display = "block";

  // hide success alert
  setTimeout(function(){
    document.querySelector(".alert").style.display = "none";
  }, 3000)

  document.getElementById("form-section").reset();

  }

  // get contact value from HTML
  function getInputVal(id) {
    return document.getElementById(id).value;
  }
  

  // send message to Firebase
  function sendMsg(contactName, contactEmail, contactSubject, contactComment) {
    let newMessage = msgRef.ref("messages").push()
      newMessage.set({
        contactName: contactName,
        contactEmail: contactEmail,
        contactSubject: contactSubject,
        contactComment: contactComment
      })
  }

}); // DOCUMENT READY CLOSING