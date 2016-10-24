$(document).ready(function() {
  $("form").submit(function(event) {
    var sentence = $("#sentenceInput").val().split(" ");
    var newSentence = [];

    sentence.forEach(function(word) {
      if (word.length > 2) {
        newSentence.push(word);
      };
    });

    var reversed = newSentence.reverse().join(" ");

    event.preventDefault();

    $("#output").text(reversed);
  });
});
