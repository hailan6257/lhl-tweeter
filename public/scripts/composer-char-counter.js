// ensure the DOM has loaded.
$(document).ready(function() {
  // register an event to the input area;
  $("#tweet-text").on('keypress', function() {//better add another event just in case user paste some content in
    const inputLengh = $(this).val().length + 1;
    const counter = $(this).parent().get(0).counter;
    //set the value of counter
    counter.innerText = 140 - inputLengh;
    if (counter.innerText < 0) {
      $(counter).css('color', 'red');
    }
    
 
  });
});