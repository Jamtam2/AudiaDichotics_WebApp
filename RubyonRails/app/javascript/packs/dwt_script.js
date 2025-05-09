//function for keeping the buttons blue after being clicked
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    const label = this.closest('label');
    if (this.checked) {
      label.classList.add('active');
    } else {
      label.classList.remove('active');
    }
  });
});

//script completes all logic for calculating diagnosis and ear advantage values, It updates the percentages and lists the ear diag and advantage
// initializing variables that are values based on the current values in the html, these are null before the test is started but will have values to pull from as the test goes on
const column1Buttons = document.querySelectorAll(".column1-button input[type='checkbox']");
const column2Buttons = document.querySelectorAll(".column2-button input[type='checkbox']");
const allButtons = document.querySelectorAll(".column1-button input[type='checkbox'], .column2-button input[type='checkbox']");
const column1Count = document.getElementById("column1-count");
const column2Count = document.getElementById("column2-count");
const column1Percent = document.getElementById("column1-percent");
const column2Percent = document.getElementById("column2-percent");
const advantageDiff = document.getElementById("advantage-Diff");
const leftEarPercentile = document.getElementById("left-percentile");
const rightEarPercentile = document.getElementById("right-percentile");
const advantagePercentile = document.getElementById("advantage-percentile");
const advantageName = document.getElementById("advantage-Name");
const testDiagnosis = document.getElementById("Diagnosis");
const readOnly = document.getElementById("read-Only");
const readOnlyDiag = document.getElementById("read-Only-diag");



// Update the counts when a button is clicked with event listener

allButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    //initializing variables for interpretation calculations
    const checkedCount1 = document.querySelectorAll(".column1-button input[type='checkbox']:checked").length;
    const checkedCount2 = document.querySelectorAll(".column2-button input[type='checkbox']:checked").length;
    const totalCount1 = column1Buttons.length;
    const totalCount2 = column2Buttons.length;
    //calculating percent score by dividing clicked buttons to all buttons and multiplying by 100 keep decimals fixed to hundredth place to avoid loss variables of obscene lengths
    const percent1 = ((checkedCount1 / totalCount1) * 100).toFixed(2);
    const percent2 = ((checkedCount2 / totalCount2) * 100).toFixed(2);
    //advantage is always right ear score - left ear score
    const advantage = (percent2 - percent1).toFixed(2);
    //not used VVV
    const avgPercent = ((+percent1 + +percent2) / 2).toFixed(2);


    //initializes various variables for further calculations
    let direction = null;
    let interpretation = null;
    const clientDataElement = document.getElementById('client-data');
    const age = clientDataElement.dataset.age;
    let dom = null;
    let nondom = null;
    let nondomPercent = null;
    let domPercent = null;
    let adv_percent = null;
    let abs_adv_percent = null;
    let advantage_25th = null;
    let advantage_10th = null;
    let advantage_5th = null;
    let dominant_25th = null;
    let dominant_10th = null;
    let dominant_5th = null;
    let nondominant_25th = null;
    let nondominant_10th = null;
    let nondominant_5th = null;

    //sets the direction of the advantage and decides which ear is dominant and nondominant
    //percent1 == left ear
    //percent2 == right ear
    if (advantage < 0) {
      direction = "Left";
      dom = percent1;
      nondom = percent2;
    } else if (advantage > 0) {
      direction = "Right";
      dom = percent2;
      nondom = percent1;
    } else {
      //neutral ear advantage technically means no ear advantage as they are equal scores
      //however, the right ear is considered dominant and left nondom for use on the percentile of scores, this is mainly for use of clinicians when determining interpretation
      direction = "Neutral";
      dom = percent2;
      nondom = percent1;
    }
    //sets the percentile of scores based on the age of the child taking the test, values are based on normative data collected by owner of software
    if (age == 5 || age == 6) {
      advantage_25th = 32;
      advantage_10th = 36;
      advantage_5th = 52;
      dominant_25th = 64;
      dominant_10th = 52;
      dominant_5th = 48;
      nondominant_25th = 44;
      nondominant_10th = 28;
      nondominant_5th = 14;
    }
    if (age >= 7 && age <= 9) {
      advantage_25th = 24;
      advantage_10th = 28;
      advantage_5th = 40;
      dominant_25th = 76;
      dominant_10th = 69;
      dominant_5th = 63;
      nondominant_25th = 60;
      nondominant_10th = 40;
      nondominant_5th = 31;
    }
    if (age >= 10 && age <= 12) {
      advantage_25th = 20;
      advantage_10th = 24;
      advantage_5th = 32;
      dominant_25th = 84;
      dominant_10th = 72;
      dominant_5th = 70;
      nondominant_25th = 72;
      nondominant_10th = 60;
      nondominant_5th = 44;
    }
    if (age >= 13 && age <= 15) {
      advantage_25th = 16;
      advantage_10th = 20;
      advantage_5th = 28;
      dominant_25th = 92;
      dominant_10th = 80;
      dominant_5th = 68;
      nondominant_25th = 76;
      nondominant_10th = 64;
      nondominant_5th = 56;
    }
    if (age >= 16 && age <= 18) {
      advantage_25th = 14;
      advantage_10th = 16;
      advantage_5th = 24;
      dominant_25th = 88;
      dominant_10th = 80;
      dominant_5th = 77;
      nondominant_25th = 80;
      nondominant_10th = 72;
      nondominant_5th = 60;
    }
    // IF else logic for diagnosis based on the childs age
    //if the direction is neutral, we find the interpretation, then the percentile score for the left, right,  and ear advantage score.
    if (direction == "Neutral") {
      //if both scores are lower than or equal to nondom 25th percentile, then dichotic dysaudia
      if (percent1 <= nondominant_25th) {
        interpretation = "Dichotic Dysaudia";
      }
      //else if both are between nondom 25ht and dom 25th is possible dichotic
      else if (percent1 > nondominant_25th && percent1 <= dominant_25th) {
        interpretation = "Possible Dichotic Dysaudia";
      }
      //otherwise its within normal limits
      else {
        interpretation = "Within Normal Limits";
      }
      //then find percentile based on scores for left, right, ear advntage, WE have to do this twice for neutral and otherwise to avoid incorrect interpretations
      if (dom >= dominant_25th) {
        domPercent = "Within Normal Limits";
      }
      else if (dom >= dominant_10th) {
        domPercent = "25th Percentile";
      }
      else if (dom >= dominant_5th) {
        domPercent = "10th Percentile";
      }
      else {
        domPercent = "5th Percentile";
      }


      if (nondom >= nondominant_25th) {
        nondomPercent = "Within Normal Limits";
      }
      else if (nondom >= nondominant_10th) {
        nondomPercent = "25th Percentile";
      }
      else if (nondom >= nondominant_5th) {
        nondomPercent = "10th Percentile";
      }
      else {
        nondomPercent = "5th Percentile";
      }

      adv_percent = "Within Normal Limits";
    }
    //when ear adv is not neutral, we have more possibilities for interpretation
    else {
      //ambyluadia and dichotic dysaudia, is only possible if both ears are at or below 25th, and ear advantage is too large
      if (((dom <= dominant_25th) && (nondom <= nondominant_25th)) && ((advantage <= -advantage_25th) || (advantage >= advantage_25th))) {
        interpretation = "Amblyaudia + Dichotic Dysaudia";
      }
      //only dichotic dysaudia is when both or domninant ear is below or at 25th and ear advantage is within normal limits
      else if (((dom <= dominant_25th) && (nondom <= nondominant_25th)) || (((dom <= dominant_25th) && (nondom > nondominant_25th)) && (((advantage > -advantage_25th) && (advantage < 0)) || ((advantage < advantage_25th) && (advantage > 0))))) {
        interpretation = "Dichotic Dysaudia";
      }
      //possible amblyuadia can be when dom is within, nondom is below 25th but ear advantage is not great enough
      else if (((dom > dominant_25th) && (nondom <= nondominant_25th)) && ((advantage > -advantage_25th) && (advantage < 0))) {
        interpretation = "Possible Ambylaudia Left Ear Dominant";
      }
      //this is the same case as above just with positive advantage
      else if (((dom > dominant_25th) && (nondom <= nondominant_25th)) && ((advantage < advantage_25th) && (advantage > 0))) {
        interpretation = "Possible Ambylaudia Right Ear Dominant";
      }
      //other case of possible amblyaudia is when, both dom and nondom is within normal limits, but ear advantage is too large
      else if (((dom > dominant_25th) && (nondom > nondominant_25th)) && (advantage <= -advantage_25th)) {
        interpretation = "Possible Ambylaudia Left Ear Dominant";
      }
      //same as above just positive advantage
      else if (((dom > dominant_25th) && (nondom > nondominant_25th)) && (advantage >= advantage_25th)) {
        interpretation = "Possible Ambylaudia Right Ear Dominant";
      }
      //true ablyadia is when dom is within normal limits, nondom is at or below 25th and ear advantage is too great
      else if (((dom > dominant_25th) && (nondom <= nondominant_25th)) && (advantage <= -advantage_25th)) {
        interpretation = "Ambylaudia Left Ear Dominant";
      }
      //same as above just the positive case
      else if (((dom > dominant_25th) && (nondom <= nondominant_25th)) && (advantage >= advantage_25th)) {
        interpretation = "Ambylaudia Right Ear Dominant";
      }
      //if non of the above conditions apply, then the score must be within normal limits, both dom and nondom above 25th and ear advantage below 25th
      else {
        interpretation = "Within Normal Limits";
      }
      //conditional for determining what percentile the dominant ear falls into
      //conditional for determining what percentile the dominant ear falls into
      if (dom >= dominant_25th) {
        domPercent = "Within Normal Limits";
      }
      else if (dom >= dominant_10th) {
        domPercent = "25th Percentile";
      }
      else if (dom >= dominant_5th) {
        domPercent = "10th Percentile";
      }
      else {
        domPercent = "5th Percentile";
      }
      //conditional for determining what percentile the nondominant ear falls into
      if (nondom >= nondominant_25th) {
        nondomPercent = "Within Normal Limits";
      }
      else if (nondom >= nondominant_10th) {
        nondomPercent = "25th Percentile";
      }
      else if (nondom >= nondominant_5th) {
        nondomPercent = "10th Percentile";
      }
      else {
        nondomPercent = "5th Percentile";
      }
      //conditional for determining what percentile the ear advantage falls into, for both negative ear advantage and positive
      abs_adv_percent = Math.abs(advantage);

      if (abs_adv_percent <= advantage_25th) {
        adv_percent = "Within Normal Limits";
      }
      if (abs_adv_percent <= advantage_10th && abs_adv_percent >= advantage_25th) {
        adv_percent = "25th Percentile";
      }
      if (abs_adv_percent <= advantage_5th && abs_adv_percent >= advantage_10th) {
        adv_percent = "10th Percentile";
      }
      if (abs_adv_percent > advantage_5th) {
        adv_percent = "5th Percentile";
      }
    }

    // Passes values to strings so they can be pushed to the html above
    column1Count.innerText = checkedCount1.toString();
    column1Percent.innerText = percent1.toString();
    column2Count.innerText = checkedCount2.toString();
    column2Percent.innerText = percent2.toString();
    advantageDiff.innerText = advantage.toString();

    //we need conditional to pass percentiles, and again neutral is treated as direction is "right" as per instructions
    if (direction == "Right") {
      leftEarPercentile.innerText = nondomPercent.toString();
      rightEarPercentile.innerText = domPercent.toString();
    }
    else if (direction == "Left") {
      leftEarPercentile.innerText = domPercent.toString();
      rightEarPercentile.innerText = nondomPercent.toString();
    }
    else {
      leftEarPercentile.innerText = nondomPercent.toString();
      rightEarPercentile.innerText = domPercent.toString();
    }

    advantagePercentile.innerText = adv_percent.toString();

    advantageName.innerText = direction;
    testDiagnosis.innerText = interpretation;
    readOnly.value = advantageName.innerText;
    readOnlyDiag.value = testDiagnosis.innerText;

    const earAdvantageCells = document.querySelectorAll('.ear-advantage');
    const percentileCells = document.querySelectorAll('.percentile');
    // Loop through each ear advantage cell
    earAdvantageCells.forEach(cell => {
      // Get the value of the cell
      const value = parseFloat(cell.textContent);

      // Check the value and set the background color accordingly
      if (value < 0) {
        cell.style.backgroundColor = 'lightblue';
      } else if (value > 0) {
        cell.style.backgroundColor = 'lightpink';
      } else {
        cell.style.backgroundColor = 'white';
      }
    });
    percentileCells.forEach(cell => {
      // Get the value of the cell
      const percValue = cell.textContent.trim();

      // Check the value and set the background color accordingly
      if ((percValue == "5th Percentile")) {
        cell.style.backgroundColor = 'lightpink';
      }
      else if (percValue == "10th Percentile") {
        cell.style.backgroundColor = 'hsl(60, 100%, 70%)';
      }
      else if (percValue == "25th Percentile") {
        cell.style.backgroundColor = 'lightgreen';
      }
      else {
        cell.style.backgroundColor = 'lightblue';
      }
    });

  })
})
// gets the elements from hidden field submit above and populates them from the results in the script
function populateHiddenFields() {
  document.getElementById("left_score").value = column1Percent.innerText;
  document.getElementById("right_score").value = column2Percent.innerText;
  document.getElementById("ear_advantage").value = advantageName.innerText;
  document.getElementById("ear_advantage_score").value = advantageDiff.innerText;
  document.getElementById("interpretation").value = testDiagnosis.innerText;
  document.getElementById("left_percentile").value = leftEarPercentile.innerText;
  document.getElementById("right_percentile").value = rightEarPercentile.innerText;
  document.getElementById("advantage_percentile").value = advantagePercentile.innerText;

}