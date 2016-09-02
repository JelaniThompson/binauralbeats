// Inside the context, create sources — such as <audio>, oscillator, stream
// Create effects nodes, such as reverb, biquad filter, panner, compressor
// Choose final destination of audio, for example your system speakers

//create a sine wave and connect it to the master output (your speakers)
var audioContext = new (window.AudioContext || window.webkitAudioContext)();

//Create tone and panner
var oscillator = audioContext.createOscillator();
var leftEar = audioContext.createStereoPanner();
var rightEar = audioContext.createStereoPanner();

oscillator.type = 'sine';
oscillator.frequency.value = 210;
leftEar.pan.value = -1;

// Connect the sources up to the effects, and the effects to the destination.
oscillator.connect(leftEar);
leftEar.connect(audioContext.destination);

oscillator.start();
oscillator.stop(audioContext.currentTime + 3);

var frequency = {
  "Gamma" : [30, 50],
  "Beta" : [14, 30],
  "Alpha" : [8, 14],
  "Theta" : [4, 8],
  "Delta" : [0.1, 4]
};
