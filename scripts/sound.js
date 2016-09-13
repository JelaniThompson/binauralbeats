//Create left an right tones and put them in separate audio channels
var merge = new Tone.Merge().toMaster();
var leftEar = new Tone.Oscillator().connect(merge.left);
var rightEar = new Tone.Oscillator().connect(merge.right);

//Choose what Hz you want to use for each ear - will be controlled by slider
leftEar.frequency.value = 400;
rightEar.frequency.value = 500;

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
