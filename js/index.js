
$(document).ready(function () {

  // Add class to mailto link
  // Needed to separate the disabling of the default action AND copy email to clipboard
  $('a[href^=mailto]').addClass('mailto-link');

  var mailto = $('.mailto-link');
  var messageCopy = '';
  var messageSuccess = ' Copied';

  mailto.append('<span class="mailto-message"></span>');
  $('.mailto-message').append(messageCopy);

  // Disable opening your email client. yuk.
  $('a[href^=mailto]').click(function () {
    return false;
  })

  // On click, get href and remove 'mailto:' from value
  // Store email address in a variable.
  mailto.click(function () {
    var href = $(this).attr('href');
    var email = href.replace('mailto:', '');
    copyToClipboard(email);
    $('.mailto-message').empty().append(messageSuccess);
    setTimeout(function () {
      $('.mailto-message').empty().append(messageCopy);
    }, 2000);
  });

});

// Grabbed this from Stack Overflow.
// Copies the email variable to clipboard
function copyToClipboard(text) {
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute('value', text);
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
}

$(document).ready(function () {

  // Add class to mailto link
  // Needed to separate the disabling of the default action AND copy email to clipboard
  $('a[href^=mailto1]').addClass('mailto1-link');

  var mailto = $('.mailto1-link');
  var messageCopy = '';
  var messageSuccess = ' Copied';

  mailto.append('<span class="mailto1-message"></span>');
  $('.mailto1-message').append(messageCopy);

  // Disable opening your email client. yuk.
  $('a[href^=mailto1]').click(function () {
    return false;
  })

  // On click, get href and remove 'mailto:' from value
  // Store email address in a variable.
  mailto.click(function () {
    var href = $(this).attr('href');
    var email = href.replace('mailto1:', '');
    copyToClipboard(email);
    $('.mailto1-message').empty().append(messageSuccess);
    setTimeout(function () {
      $('.mailto1-message').empty().append(messageCopy);
    }, 2000);
  });

});

// Grabbed this from Stack Overflow.
// Copies the email variable to clipboard
function copyToClipboard(text) {
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute('value', text);
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
}



// const menuBtn = document.querySelector(".Dropbtn");
// const menuContainer = document.querySelector(".Dropup");
//
// const aboutContainer = document.querySelector(".Dropup-right");
//
// menuBtn.addEventListener("mouseenter", function () {
//   menuContainer.classList.add("visible");
//   aboutContainer.classList.remove("visible");
// });
//
// menuBtn.addEventListener("mouseleave", function () {
//   menuContainer.classList.remove("visible");
// });
//
// menuBtn.addEventListener("click", function () {
//   menuContainer.classList.toggle("visible");
//   aboutContainer.classList.remove("visible");
// });
//
//
// aboutContainer.addEventListener("mouseenter", function () {
//   aboutContainer.classList.add("visible");
//   menuContainer.classList.remove("visible");
// });
//
// aboutContainer.addEventListener("mouseleave", function () {
//   aboutContainer.classList.remove("visible");
// });
//
// aboutContainer.addEventListener("click", function () {
//   aboutContainer.classList.toggle("visible");
//   menuContainer.classList.remove("visible");
// });
//
//
// const topButton = document.querySelector(".Top-Button");
// const container = document.querySelector(".flex-Container-Button");
// topButton.addEventListener('click', ()=> {
//   console.log('test');
//   container.scrollTo({ top: 0, behavior: 'smooth' });
// })


// INDEX START

$(window).on('load', function() {
    $(".trigger_popup_fricc").click(function(){
       $('.hover_bkgr_fricc').show();
    });
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
});

const topButton = document.querySelector(".Top-Button");
const container = document.querySelector(".flex-Container-Button");
topButton.addEventListener('click', ()=> {
  console.log('test');
  container.scrollTo({ top: 0, behavior: 'smooth' });
})

// patch all methods
seamless.polyfill();
// or use specific methods
seamless.scrollBy(window, { behavior: "smooth", top: 200, left: 0 });

seamless.scrollIntoView(document.querySelector("#target"), {
    behavior: "smooth",
    block: "center",
    inline: "center",
});
// INDEX STOP
