let synth = window.speechSynthesis;

// var inputForm = document.querySelector('form');
let $inputForm = $('.speech-synthesiser');
// var inputTxt = document.querySelector('.txt');
let $inputTxt = $('.txt');
// var voiceSelect = document.querySelector('select');
let $voiceSelect = $('.languages');
let $selectedOption = $('.languages option');


// var pitch = document.querySelector('#pitch');
let $pitch = $('#pitch');
// let pitchValue = document.querySelector('.pitch-value');
let $pitchValue = $('.pitch-value');
// let rate = document.querySelector('#rate');
let $rate = $('#rate');
// let rateValue = document.querySelector('.rate-value');
let $rateValue = $('.rate-value');

let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();
  // console.log(voices.length);

  for(i = 0; i < voices.length ; i++) {
    // var option = document.createElement('option');
    let $option = $('.languages option');
    $option.html(voices[i].name + ' (' + voices[i].lang + ')');

    if(voices[i].default) {
      $option.textContent += ' -- DEFAULT';
    }

    $option.attr('data-lang', voices[i].lang);
    $option.attr('data-name', voices[i].name);
    // console.log($option);
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
