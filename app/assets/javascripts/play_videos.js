var currentIndex = 0;
var words = new Array();
var text_content = new Array();

function Videos() {
}
Videos.getPath = function(word) {
    return '/videos/' + word + '.MP4';
};

Videos.play = function() {
    videoPlayer = document.getElementById("videoPlayer");
    // remove the event listener, if there is one
    videoPlayer.removeEventListener('ended',Videos.play,false);

    // update the source with the currentVideo from the videos array
    // videoPlayer.src = Videos.getPath(words[currentIndex]);
    videoPlayer.src = words[currentIndex];
    // play the video
    videoPlayer.load();
    videoPlayer.play();
    $('.caption').text(text_content[currentIndex]);
    // increment the currentIndex
    if (currentIndex < words.length -1) {
        currentIndex = currentIndex + 1;
        // add an event listener so when the video ends it will call the Videos.play function again
        videoPlayer.addEventListener('ended', Videos.play,false);
    }
};
//hello my name is Sarah
//how are you
//do you need a doctor
//where do you want to go

var dic = ["a","alex",
"g",
"r",
"elise",
"go",
"restaurant",
"h",
"s",
"roslyn",
"help",
"sick",
"sarah",
"hospital",
"t",
"Tripti",
"how",
"time",
//"a",
"i",
"u",
"ambulance",
"j",
"v",
"b",
"k",
"w",
"big",
"l",
"want",
"c",
"little",
"what",
"call",
"m",
"when",
"my",
"where",
"carpet",
"n",
"which",
"cat",
"name",
"who",
"come",
"naughty",
"why",
"d",
"need",
"x",
"do",
"o",
"y",
"doctor",
"on",
"you",
"dog",
"p",
"your",
"e",
"police",
"z",
"f",
"q"];
