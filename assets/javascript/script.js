$(document).ready(function() {
  var losses = 0;
  var wins = 0;
  var counter = 0;
  var randomNumber;
  var $kittehBtn = $('.kittehBtn');

  function getRandomArbitraryInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function generateRandomNum() {
    randomNumber = getRandomArbitraryInt(19, 120);
    $("#random-number").html(randomNumber);
    var html = "<p>Wins: " + wins + "</p>";
    document.querySelector("#win-counter").innerHTML = html;
    var html2 = "<p>Losses: " + losses + "</p>";
    document.querySelector("#loss-counter").innerHTML =html2;
    var html3 = "<p>Current Score: " + counter + "</p>";
    document.querySelector("#current-score").innerHTML = html3;
  }

  generateRandomNum();

  $kittehBtn.each(function(index, kitten){
    $('#'+kitten.id).attr('data-number', getRandomArbitraryInt(1, 12));
    console.log('kitten', kitten);
  });

  $kittehBtn.click(function() {
    var newNumber = parseInt($(this).attr('data-number'));
    randomNumber -= newNumber;
    counter += newNumber;
    // $("#current-score").html(newNumber);

    if (randomNumber > 0) {
      // html that says this
      console.log('still playing');
    } else if (randomNumber === 0) {
      wins++;
      console.log('you guessed right');
      randomNumber = getRandomArbitraryInt(1, 90);
      generateRandomNum();
      counter = 0;
    } else {
     losses++;
      console.log('you went over');
      randomNumber = getRandomArbitraryInt(1, 90);
      generateRandomNum();
      counter = 0;
    }
    var html = "<p>Wins: " + wins + "</p>";
    document.querySelector("#win-counter").innerHTML = html;
    var html2 = "<p>Losses: " + losses + "</p>";
    document.querySelector("#loss-counter").innerHTML = html2;
    var html3 = "<p>Current Score: " + counter + "</p>";
    document.querySelector("#current-score").innerHTML = html3;
  })
  
});