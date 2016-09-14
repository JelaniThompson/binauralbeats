//Create left an right tones and put them in separate audio channels
var merge = new Tone.Merge().toMaster();
var leftEar = new Tone.Oscillator().connect(merge.left);
var rightEar = new Tone.Oscillator().connect(merge.right);

//Choose what Hz you want to use for each ear - will be controlled by slider
leftEar.frequency.value = 0;
rightEar.frequency.value = 0;

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  }
})

var currentState = "Gamma";
$(".currentState").html(currentState);

$("#leftSlider").change(function() {
    console.log(this.value);
    $("#leftHz").val(this.value);
    leftEar.frequency.value = this.value;
    leftEar.start();
});

$("#rightSlider").change(function() {
    console.log(this.value);
    $("#rightHz").val(this.value);
    rightEar.frequency.value = this.value;
    rightEar.start();
});

//Check the Hz in each ear and adjust description box accordingly
function checkState() {

}

// //Start frequencies in each ear
// leftEar.start()
//        .stop("5s");
//
// rightEar.start()
//         .stop("10s");

var leftSlide = $("#left");
var rightSlider = $("#right");

//Frequency is equivalent to difference between frequency in left and right ear
var frequency = {
    "Gamma": [30, 50],
    "Beta": [14, 30],
    "Alpha": [8, 14],
    "Theta": [4, 8],
    "Delta": [0.1, 4]
};

var descriptions = {
    "Beta": "Beta is the most common brain wave pattern: Beta brainwaves are produced when we are wide awake, alert, active and engaged in mental activity, usually involving more the rational, reality-oriented left hemisphere of our brain. When beta wave activity becomes very intense, our brain hemispheres become less synchronized. Beta state is required to function properly in your everyday life.",
    "Alpha": "These are lower frequency waves: The state is generated when our thoughts are really not concentrated and our minds wonder freely, or we are in a relaxed state such as meditating or daydreaming. We also experience Alpha Brainwaves when we are gently busy with routine tasks like pottering in the garden, taking a shower, putting on makeup, doing light housework. Alpha is considered to be the bridge between the conscious mind and the subconscious mind.",
    "Theta": "Theta brainwave states have been used in meditation for centuries: It is common for people to feel as if they are in a trance, where the mind feels as though it may have gone to sleep although it is conscious of what is happening around it. Theta induces a capacity for prolonged daydreaming, where a loss of time may be experienced.",
    "Delta": "Delta is the place of deepest relaxation, deepest healing, deepest spiritual connection and deepest connection with the subconscious mind. It is considered to be the gateway to the unconscious mind and the collective unconscious, bringing access to the universal psyche or mind.",
    "Gamma": "Gamma brainwave states are the most rapid in frequency. Gamma hase long been considered the the brainwave that is able to link and process information from all parts of the brain. It is the frequency that brings with it the ability to process large amounts of information in relatively small amounts of time. Think of generating more Gamma activity as getting a processor upgrade for your brain."
};
