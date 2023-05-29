document.addEventListener('turbolinks:load', function(***REMOVED*** {
   
    document.addEventListener('DOMContentLoaded', function(***REMOVED*** {
        // Disable scrolling
        document.body.style.overflow = 'hidden';

        // Enable scrolling
        // document.body.style.overflow = 'auto';
    ***REMOVED******REMOVED***;

    //function for keeping the buttons blue after being clicked
    const checkboxes = document.querySelectorAll('input[type="checkbox"]'***REMOVED***;

    checkboxes.forEach(function(checkbox***REMOVED*** {
    checkbox.addEventListener('change', function(***REMOVED*** {
        const label = this.closest('label'***REMOVED***;
        if (this.checked***REMOVED*** {
        label.classList.add('active'***REMOVED***;
        ***REMOVED*** else {
        label.classList.remove('active'***REMOVED***;
        ***REMOVED***
    ***REMOVED******REMOVED***;
    ***REMOVED******REMOVED***;

    //script completes all logic for calculating diagnosis and ear advantage values, It updates the percentages and lists the ear diag and advantage
    // Get the toggle buttons and count elements
    const column1Buttons = document.querySelectorAll(".column1-button input[type='checkbox']"***REMOVED***;
    const column2Buttons = document.querySelectorAll(".column2-button input[type='checkbox']"***REMOVED***;
    const allButtons = document.querySelectorAll(".column1-button input[type='checkbox'], .column2-button input[type='checkbox']"***REMOVED***;
    const column1Count = document.getElementById("column1-count"***REMOVED***;
    const column2Count = document.getElementById("column2-count"***REMOVED***;
    const column1Percent = document.getElementById("column1-percent"***REMOVED***;
    const column2Percent = document.getElementById("column2-percent"***REMOVED***;
    const advantageDiff = document.getElementById("advantage-Diff"***REMOVED***;
    const advantageName = document.getElementById("advantage-Name"***REMOVED***;
    const testDiagnosis = document.getElementById("Diagnosis"***REMOVED***;
    const readOnly = document.getElementById("read-Only"***REMOVED***;
    const readOnlyDiag = document.getElementById("read-Only-diag"***REMOVED***;



    // Update the counts when a button is clicked

    allButtons.forEach(function(button***REMOVED*** {
    button.addEventListener("click", function(***REMOVED*** {
    const checkedCount1 = document.querySelectorAll(".column1-button input[type='checkbox']:checked"***REMOVED***.length;
    const checkedCount2 = document.querySelectorAll(".column2-button input[type='checkbox']:checked"***REMOVED***.length;
    const totalCount1 = column1Buttons.length;
    const totalCount2 = column2Buttons.length;
    const percent1 = ((checkedCount1 / totalCount1***REMOVED*** * 100***REMOVED***.toFixed(2***REMOVED***;
    const percent2 = ((checkedCount2 / totalCount2***REMOVED*** * 100***REMOVED***.toFixed(2***REMOVED***;
    const advantage = (percent1 - percent2***REMOVED***.toFixed(2***REMOVED***;
    const avgPercent = ((+percent1 + +percent2***REMOVED*** / 2***REMOVED***.toFixed(2***REMOVED***;

    let direction = null;
    let interpretation = null;
    const ageElement = document.getElementById('age'***REMOVED***;
    const age = parseInt(ageElement.dataset.age***REMOVED***;
    let dom = null;
    let nondom = null;
    if (advantage > 0***REMOVED*** {
        direction = "Left";
        dom = percent1;
        nondom = percent2;
    ***REMOVED*** else if (advantage < 0***REMOVED*** {
        direction = "Right";
        dom = percent2;
        nondom = percent1;
    ***REMOVED*** else {
        direction = "Neutral";
        ***REMOVED***
    // IF else logic for diagnosis based on the childs age. Still unsure if this works as intended accoring to Employer, but we believe it is
    if (age == 5 || age == 6***REMOVED***{
        if (direction == "Neutral"***REMOVED***{
        if (percent1 <= 44***REMOVED***{
            interpretation = "Dichotic Dysaudia";
        ***REMOVED***
        else{
            interpretation = "Within Normal Limits";
        ***REMOVED***
        ***REMOVED***
        else{
        if (((dom <= 64***REMOVED*** || (nondom <= 44***REMOVED******REMOVED*** && ((advantage <= -32***REMOVED*** || (advantage >= 32***REMOVED******REMOVED******REMOVED***{
            interpretation = "Amblyaudia + Dichotic Dysaudia";
        ***REMOVED***
        else if ((dom <= 64***REMOVED*** || (nondom <= 44***REMOVED******REMOVED***{
            interpretation = "Dichotic Dysaudia";
        ***REMOVED***
        else if (((dom > 64***REMOVED*** && (nondom > 44***REMOVED******REMOVED*** && (advantage <= -32***REMOVED******REMOVED***{
            interpretation = "Ambylaudia Right Ear Dominant";
        ***REMOVED***
        else if (((dom > 64***REMOVED*** && (nondom > 44***REMOVED******REMOVED*** && (advantage >= 32***REMOVED******REMOVED***{
            interpretation = "Ambylaudia Left Ear Dominant";
        ***REMOVED***
        else{
            interpretation = "Within Normal Limits";
        ***REMOVED***
        ***REMOVED***            
    ***REMOVED***
    if (age >= 7 && age <= 9***REMOVED***{
        if (direction == "Neutral"***REMOVED***{
        if (percent1 <= 60***REMOVED***{
            interpretation = "Dichotic Dysaudia";
        ***REMOVED***
        else{
            interpretation = "Within Normal Limits";
        ***REMOVED***
        ***REMOVED***
        else{
        if (((dom <= 76***REMOVED*** || (nondom <= 60***REMOVED******REMOVED*** && ((advantage <= -24***REMOVED*** || (advantage >= 24***REMOVED******REMOVED******REMOVED***{
            interpretation = "Amblyaudia + Dichotic Dysaudia";
        ***REMOVED***
        else if ((dom <= 76***REMOVED*** || (nondom <= 60***REMOVED******REMOVED***{
            interpretation = "Dichotic Dysaudia";
        ***REMOVED***
        else if (((dom > 76***REMOVED*** && (nondom > 60***REMOVED******REMOVED*** && (advantage <= -24***REMOVED******REMOVED***{
            interpretation = "Ambylaudia Right Ear Dominant";
        ***REMOVED***
        else if (((dom > 76***REMOVED*** && (nondom > 60***REMOVED******REMOVED*** && (advantage >= 24***REMOVED******REMOVED***{
            interpretation = "Ambylaudia Left Ear Dominant";
        ***REMOVED***
        else{
            interpretation = "Within Normal Limits";
        ***REMOVED***
        ***REMOVED***          
    ***REMOVED***
    if (age >= 10 && age <= 12***REMOVED***{
        if (direction == "Neutral"***REMOVED***{
        if (percent1 <= 72***REMOVED***{
            interpretation = "Dichotic Dysaudia";
        ***REMOVED***
        else{
            interpretation = "Within Normal Limits";
        ***REMOVED***
        ***REMOVED***
        else{
        if (((dom <= 84***REMOVED*** || (nondom <= 72***REMOVED******REMOVED*** && ((advantage <= -20***REMOVED*** || (advantage >= 20***REMOVED******REMOVED******REMOVED***{
            interpretation = "Amblyaudia + Dichotic Dysaudia";
        ***REMOVED***
        else if ((dom <= 84***REMOVED*** || (nondom <= 72***REMOVED******REMOVED***{
            interpretation = "Dichotic Dysaudia";
        ***REMOVED***
        else if (((dom > 84***REMOVED*** && (nondom > 72***REMOVED******REMOVED*** && (advantage <= -20***REMOVED******REMOVED***{
            interpretation = "Ambylaudia Right Ear Dominant";
        ***REMOVED***
        else if (((dom > 84***REMOVED*** && (nondom > 72***REMOVED******REMOVED*** && (advantage >= 20***REMOVED******REMOVED***{
            interpretation = "Ambylaudia Left Ear Dominant";
        ***REMOVED***
        else{
            interpretation = "Within Normal Limits";
        ***REMOVED***
        ***REMOVED***
    ***REMOVED***
    if (age >= 13 && age <= 15***REMOVED***{
        if (direction == "Neutral"***REMOVED***{
        if (percent1 <= 76***REMOVED***{
            interpretation = "Dichotic Dysaudia";
        ***REMOVED***
        else{
            interpretation = "Within Normal Limits";
        ***REMOVED***
        ***REMOVED***
        else{
        if (((dom <= 92***REMOVED*** || (nondom <= 76***REMOVED******REMOVED*** && ((advantage <= -16***REMOVED*** || (advantage >= 16***REMOVED******REMOVED******REMOVED***{
            interpretation = "Amblyaudia + Dichotic Dysaudia";
        ***REMOVED***
        else if ((dom <= 92***REMOVED*** || (nondom <= 76***REMOVED******REMOVED***{
            interpretation = "Dichotic Dysaudia";
        ***REMOVED***
        else if (((dom > 92***REMOVED*** && (nondom > 76***REMOVED******REMOVED*** && (advantage <= -16***REMOVED******REMOVED***{
            interpretation = "Ambylaudia Right Ear Dominant";
        ***REMOVED***
        else if (((dom > 92***REMOVED*** && (nondom > 76***REMOVED******REMOVED*** && (advantage >= 16***REMOVED******REMOVED***{
            interpretation = "Ambylaudia Left Ear Dominant";
        ***REMOVED***
        else{
            interpretation = "Within Normal Limits";
        ***REMOVED***
        ***REMOVED***          
    ***REMOVED***
    if (age >= 16 && age <= 18***REMOVED***{
        if (direction == "Neutral"***REMOVED***{
        if (percent1 <= 80***REMOVED***{
            interpretation = "Dichotic Dysaudia";
        ***REMOVED***
        else{
            interpretation = "Within Normal Limits";
        ***REMOVED***
        ***REMOVED***
        else{
        if (((dom <= 88***REMOVED*** || (nondom <= 80***REMOVED******REMOVED*** && ((advantage <= -14***REMOVED*** || (advantage >= 14***REMOVED******REMOVED******REMOVED***{
            interpretation = "Amblyaudia + Dichotic Dysaudia";
        ***REMOVED***
        else if ((dom <= 88***REMOVED*** || (nondom <= 80***REMOVED******REMOVED***{
            interpretation = "Dichotic Dysaudia";
        ***REMOVED***
        else if (((dom > 88***REMOVED*** && (nondom > 80***REMOVED******REMOVED*** && (advantage <= -14***REMOVED******REMOVED***{
            interpretation = "Ambylaudia Right Ear Dominant";
        ***REMOVED***
        else if (((dom > 88***REMOVED*** && (nondom > 80***REMOVED******REMOVED*** && (advantage >= 14***REMOVED******REMOVED***{
            interpretation = "Ambylaudia Left Ear Dominant";
        ***REMOVED***
        else{
            interpretation = "Within Normal Limits";
        ***REMOVED***
        ***REMOVED***          
    ***REMOVED***
    // Passes values to strings so they can be pushed to the html above
    column1Count.innerText = checkedCount1.toString(***REMOVED***;
    column1Percent.innerText = percent1.toString(***REMOVED***;
    column2Count.innerText = checkedCount2.toString(***REMOVED***;
    column2Percent.innerText = percent2.toString(***REMOVED***;
    advantageDiff.innerText = advantage.toString(***REMOVED***;
    advantageName.innerText = direction;
    testDiagnosis.innerText = interpretation;
    readOnly.value = advantageName.innerText;
    readOnlyDiag.value = testDiagnosis.innerText;

    ***REMOVED******REMOVED***
    ***REMOVED******REMOVED***
    
***REMOVED******REMOVED***;

