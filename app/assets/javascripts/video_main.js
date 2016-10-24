$(document).ready(function(){
  $('.dropdown').fadeIn();
  $('.speak-button').on('click',function(){
    // console.log('clicked speak');
    recognition.start();
      // Videos.play();
      // console.log(' am here');
  });

  $('.video').hide();

  $('.speech-recognition').submit(function(e) {
      e.preventDefault();
      $('.video').show();
      var search = $('[name="search"]').val().toLowerCase();
      // var search = $('[name="search"]').val().toLowerCase();
      currentIndex = 0;
      // words = search.split(" ").filter(key => dic.indexOf(key) >= 0);
      $.ajax({
        url: '/search_video',
        data: {
          content: search},
          dataType: "json"
      })
      .done(function(data){
        // debugger
        // console.log(data);
        words = data[0];
        text_content = data[1];
        Videos.play();
      })
      .fail(function(data){
        // debug
        // console.log('fail',data,data.responseText);
      });
  });
    // $('.speech-synthesiser').on('click',function(){
    //     console.log($inputForm, $inputTxt , $voiceSelect);
    // });
  $('.text-to-speech').on('click',function(event) {
    event.preventDefault();
    var utterThis = new SpeechSynthesisUtterance( $('.txt').val());
    var selectedOption = $selectedOption.first().attr('data-name');
    for(i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    utterThis.pitch = $('#pitch').val();
    utterThis.rate = $('#rate').val();
    synth.speak(utterThis);

    utterThis.onpause = function(event) {
      var char = event.utterance.text.charAt(event.charIndex);
      // console.log('Speech paused at character ' + event.charIndex + ' of "' + event.utterance.text + '", which is "' + char + '".');
    };

    $('.txt').val('');
  });
  $('set_rate').on('click',function(e){
    // console.log('changing rate');
  });
});
