// Inside the context, create sources — such as <audio>, oscillator, stream
// Create effects nodes, such as reverb, biquad filter, panner, compressor
// Choose final destination of audio, for example your system speakers

//create a sine wave and connect it to the master output (your speakers)
var audioContext = new (window.AudioContext || window.webkitAudioContext)();

//Create tone and panner
var leftTone = audioContext.createOscillator();
var rightTone = audioContext.createOscillator();
var leftEar = audioContext.createStereoPanner();
var rightEar = audioContext.createStereoPanner();

leftTone.type = 'sine';
rightTone.type = 'sine';

leftTone.frequency.value = 146.1;
rightTone.frequency.value = 136.1;
leftEar.pan.value = -1;
rightEar.pan.value = 1;

// Connect the sources up to the effects, and the effects to the destination.
leftTone.connect(leftEar);
rightTone.connect(rightEar);
leftEar.connect(audioContext.destination);
rightEar.connect(audioContext.destination);

leftTone.start();
rightTone.start();
leftTone.stop(audioContext.currentTime + 10);
rightTone.stop(audioContext.currentTime + 10);

//Frequency is equivalent to difference between frequency in left and right ear
var frequency = {
  "Gamma" : [30, 50],
  "Beta" : [14, 30],
  "Alpha" : [8, 14],
  "Theta" : [4, 8],
  "Delta" : [0.1, 4]
};
