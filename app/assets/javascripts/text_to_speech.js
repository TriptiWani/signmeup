var synth = window.speechSynthesis;

// var inputForm = document.querySelector('form');
var $inputForm = $('.speech-synthesiser');
// var inputTxt = document.querySelector('.txt');
var $inputTxt = $('.txt');
// var voiceSelect = document.querySelector('select');
var $voiceSelect = $('.languages');
var $selectedOption = $('.languages option');


// var pitch = document.querySelector('#pitch');
var $pitch = $('#pitch');
// var pitchValue = document.querySelector('.pitch-value');
var $pitchValue = $('.pitch-value');
// var rate = document.querySelector('#rate');
var $rate = $('#rate');
// var rateValue = document.querySelector('.rate-value');
var $rateValue = $('.rate-value');

var voices = [];

function populateVoiceList() {
  voices = synth.getVoices();
  console.log(voices.length);

  for(i = 0; i < voices.length ; i++) {
    // var option = document.createElement('option');
    var $option = $('option');
    $option.html(voices[i].name + ' (' + voices[i].lang + ')');

    if(voices[i].default) {
      $option.textContent += ' -- DEFAULT';
    }

    $option.attr('data-lang', voices[i].lang);
    $option.attr('data-name', voices[i].name);
    console.log($option);
    $voiceSelect.append($option);
  }
}

// populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}



$pitch.onchange = function() {
  $pitchValue.textContent = $pitch.val();
}

$rate.onchange = function() {
  $rateValue.textContent = $rate.val();
}
