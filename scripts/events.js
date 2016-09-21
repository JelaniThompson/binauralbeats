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
    updateDescription();
    rightEar.start();
});

//If value in text box changes, update slider accordingly
$("#leftHz").on("input", function() {
    $("#leftSlider").val($("#leftHz").val());
    leftEar.frequency.value = $("#leftHz").val();
    stateTitle.title = findFrequency(leftEar.frequency.value, rightEar.frequency.value);
    updateDescription();
    leftEar.start();
});

$("#rightHz").on("input", function() {
    $("#rightSlider").val($("#rightHz").val());
    rightEar.frequency.value = $("#rightHz").val();
    stateTitle.title = findFrequency(leftEar.frequency.value, rightEar.frequency.value);
    updateDescription();
    rightEar.start();
});

$("#learn-more").on("click", function() {
    $(".modal").addClass("is-active");
});

$(".delete").on("click", function() {
    $(".modal").removeClass("is-active");
});

$("#preset").on("change", function() {
  if($(this).val() == "1") { leftEar.frequency.value = 100; rightEar.frequency.value = 115; }
  if($(this).val() == "2") { leftEar.frequency.value = 130; rightEar.frequency.value = 139; }
  if($(this).val() == "3") { leftEar.frequency.value = 150; rightEar.frequency.value = 155; }
  if($(this).val() == "4") { leftEar.frequency.value = 120; rightEar.frequency.value = 124; }
  if($(this).val() == "5") { leftEar.frequency.value = 160; rightEar.frequency.value = 210; }
  stateTitle.title = findFrequency(leftEar.frequency.value, rightEar.frequency.value);
  updateDescription();
  leftEar.start();
  rightEar.start();
});
