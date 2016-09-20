//Create left an right tones and put them in separate audio channels
var merge = new Tone.Merge().toMaster();
var leftEar = new Tone.Oscillator().connect(merge.left);
var rightEar = new Tone.Oscillator().connect(merge.right);

//Choose what Hz you want to use for each ear - will be controlled by slider
leftEar.frequency.value = 0;
rightEar.frequency.value = 0;
$("#leftHz").val(leftEar.frequency.value);
$("#rightHz").val(rightEar.frequency.value);

var freqs = ['Delta', 'Theta', 'Alpha', 'Beta', 'Gamma']; // array of frequencies from the lowset to the highest range

var descriptions = [
    "Beta is the most common brain wave pattern: Beta brainwaves are produced when we are wide awake, alert, active and engaged in mental activity, usually involving more the rational, reality-oriented left hemisphere of our brain. When beta wave activity becomes very intense, our brain hemispheres become less synchronized. Beta state is required to function properly in your everyday life.",
    "These are lower frequency waves: The state is generated when our thoughts are really not concentrated and our minds wonder freely, or we are in a relaxed state such as meditating or daydreaming. We also experience Alpha Brainwaves when we are gently busy with routine tasks like pottering in the garden, taking a shower, putting on makeup, doing light housework. Alpha is considered to be the bridge between the conscious mind and the subconscious mind.",
    "Theta brainwave states have been used in meditation for centuries: It is common for people to feel as if they are in a trance, where the mind feels as though it may have gone to sleep although it is conscious of what is happening around it. Theta induces a capacity for prolonged daydreaming, where a loss of time may be experienced.",
    "Delta is the place of deepest relaxation, deepest healing, deepest spiritual connection and deepest connection with the subconscious mind. It is considered to be the gateway to the unconscious mind and the collective unconscious, bringing access to the universal psyche or mind.",
    "Gamma brainwave states are the most rapid in frequency. Gamma hase long been considered the the brainwave that is able to link and process information from all parts of the brain. It is the frequency that brings with it the ability to process large amounts of information in relatively small amounts of time. Think of generating more Gamma activity as getting a processor upgrade for your brain."
];

//Frequency is equivalent to difference between frequency in left and right ear
var frequency = {
    "Gamma": [30, 50],
    "Beta": [14, 30],
    "Alpha": [8, 14],
    "Theta": [4, 8],
    "Delta": [0.1, 4]
};

//Adjust information box dynamically
function findFrequency(left, right) {
    return _.find(freqs, function(value) {
        var range = frequency[value];
        var diff = Math.abs(left - right);
        return _.inRange(diff, range[0], range[1]);
    });
}

function updateDescription() {
    //Update description according to title
    if (stateTitle.title == "Gamma") {
        frequencyDescription.description = descriptions[4];
    }
}

var stateTitle = new Vue({
    el: ".currentState",
    data: {
        title: "Brain States"
    }
});

//Set description dynamically
var frequencyDescription = new Vue({
    el: ".description",
    data: {
        description: "When you're set to a specific state, this box will update with the name and description of it! Try experimenting with the sliders above to see all of them. The 5 states are Gamma, Beta, Alpha, Delta and Theta. You can read more about them by clicking the learn more button above. Have fun!"
    }
});
