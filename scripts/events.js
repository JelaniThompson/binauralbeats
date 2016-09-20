//Check the Hz in each ear and adjust description box accordingly
$("#leftSlider").on("input", function() {
    leftEar.frequency.value = $("#leftSlider").val();
    $("#leftHz").val(leftEar.frequency.value);
    stateTitle.title = findFrequency(leftEar.frequency.value, rightEar.frequency.value);
    updateDescription();
    leftEar.start();
});

$("#rightSlider").on("input", function() {
    rightEar.frequency.value = $("#rightSlider").val();
    $("#rightHz").val(rightEar.frequency.value);
    stateTitle.title = findFrequency(leftEar.frequency.value, rightEar.frequency.value);
    rightEar.start();
});

//If value in text box changes, update slider accordingly
$("#leftHz").on("input", function() {
    $("#leftSlider").val($("#leftHz").val());
    leftEar.frequency.value = $("#leftHz").val();
    stateTitle.title = findFrequency(leftEar.frequency.value, rightEar.frequency.value);
    leftEar.start();
});

$("#rightHz").on("input", function() {
    $("#rightSlider").val($("#rightHz").val());
    rightEar.frequency.value = $("#rightHz").val();
    stateTitle.title = findFrequency(leftEar.frequency.value, rightEar.frequency.value);
    rightEar.start();
});

$("#learn-more").on("click", function() {
    $(".modal").addClass("is-active");
});

$(".delete").on("click", function() {
    $(".modal").removeClass("is-active");
});
