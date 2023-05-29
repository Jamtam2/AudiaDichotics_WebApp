
  
document.addEventListener('turbolinks:load', function(***REMOVED*** {

    

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
      const column1ButtonsGroup1 = document.querySelectorAll(".column1Group1-button input[type='checkbox']"***REMOVED***;
      const column1ButtonsGroup2 = document.querySelectorAll(".column1Group2-button input[type='checkbox']"***REMOVED***;
      const column1ButtonsGroup3 = document.querySelectorAll(".column1Group3-button input[type='checkbox']"***REMOVED***;
      const column2ButtonsGroup1 = document.querySelectorAll(".column2Group1-button input[type='checkbox']"***REMOVED***;
      const column2ButtonsGroup2 = document.querySelectorAll(".column2Group2-button input[type='checkbox']"***REMOVED***;
      const column2ButtonsGroup3 = document.querySelectorAll(".column2Group3-button input[type='checkbox']"***REMOVED***;

      const allButtons = document.querySelectorAll(".column1Group1-button input[type='checkbox'], .column1Group2-button input[type='checkbox'], .column1Group3-button input[type='checkbox'], .column2Group1-button input[type='checkbox'], .column2Group2-button input[type='checkbox'], .column2Group3-button input[type='checkbox']"***REMOVED***;
      
      const column1Count = document.getElementById("column1-count"***REMOVED***;
      const column2Count = document.getElementById("column2-count"***REMOVED***;
      
      const column1Group1Percent = document.getElementById("column1Group1-percent"***REMOVED***;
      const column1Group2Percent = document.getElementById("column1Group2-percent"***REMOVED***;
      const column1Group3Percent = document.getElementById("column1Group3-percent"***REMOVED***;
      const column2Group1Percent = document.getElementById("column2Group1-percent"***REMOVED***;
      const column2Group2Percent = document.getElementById("column2Group2-percent"***REMOVED***;
      const column2Group3Percent = document.getElementById("column2Group3-percent"***REMOVED***;

      const advantageDiffGroup1 = document.getElementById("Group1advantage-Diff"***REMOVED***;
      const advantageDiffGroup2 = document.getElementById("Group2advantage-Diff"***REMOVED***;
      const advantageDiffGroup3 = document.getElementById("Group3advantage-Diff"***REMOVED***;



      const advantageName = document.getElementById("advantage-Name"***REMOVED***;
      const testDiagnosis = document.getElementById("Diagnosis"***REMOVED***;
      const readOnly = document.getElementById("read-Only"***REMOVED***;
      const readOnlyDiag = document.getElementById("read-Only-diag"***REMOVED***;
      


      // Update the counts when a button is clicked
      
      allButtons.forEach(function(button***REMOVED*** {
        button.addEventListener("click", function(***REMOVED*** {
        const checkedCount1Group1 = document.querySelectorAll(".column1Group1-button input[type='checkbox']:checked"***REMOVED***.length;
        const checkedCount1Group2 = document.querySelectorAll(".column1Group2-button input[type='checkbox']:checked"***REMOVED***.length;
        const checkedCount1Group3 = document.querySelectorAll(".column1Group3-button input[type='checkbox']:checked"***REMOVED***.length;
        const checkedCount2Group1 = document.querySelectorAll(".column2Group1-button input[type='checkbox']:checked"***REMOVED***.length;
        const checkedCount2Group2 = document.querySelectorAll(".column2Group2-button input[type='checkbox']:checked"***REMOVED***.length;
        const checkedCount2Group3 = document.querySelectorAll(".column2Group3-button input[type='checkbox']:checked"***REMOVED***.length;

        const totalCountColumn1Group1 = column1ButtonsGroup1.length;
        const totalCountColumn1Group2 = column1ButtonsGroup2.length;
        const totalCountColumn1Group3 = column1ButtonsGroup3.length;
        const totalCountColumn2Group1 = column2ButtonsGroup1.length;
        const totalCountColumn2Group2 = column2ButtonsGroup2.length;
        const totalCountColumn2Group3 = column2ButtonsGroup3.length;


        const percentColumn1Group1 = ((checkedCount1Group1 / totalCountColumn1Group1***REMOVED*** * 100***REMOVED***.toFixed(2***REMOVED***;
        const percentColumn1Group2 = ((checkedCount1Group2 / totalCountColumn1Group2***REMOVED*** * 100***REMOVED***.toFixed(2***REMOVED***;
        const percentColumn1Group3 = ((checkedCount1Group3 / totalCountColumn1Group3***REMOVED*** * 100***REMOVED***.toFixed(2***REMOVED***;
        const percentColumn2Group1 = ((checkedCount2Group1 / totalCountColumn2Group1***REMOVED*** * 100***REMOVED***.toFixed(2***REMOVED***;
        const percentColumn2Group2 = ((checkedCount2Group2 / totalCountColumn2Group2***REMOVED*** * 100***REMOVED***.toFixed(2***REMOVED***;
        const percentColumn2Group3 = ((checkedCount2Group3 / totalCountColumn2Group3***REMOVED*** * 100***REMOVED***.toFixed(2***REMOVED***;

        const group1Advantage = (percentColumn1Group1 - percentColumn2Group1***REMOVED***.toFixed(2***REMOVED***;
        const group2Advantage = (percentColumn1Group2 - percentColumn2Group2***REMOVED***.toFixed(2***REMOVED***;
        const group3Advantage = (percentColumn1Group3 - percentColumn2Group3***REMOVED***.toFixed(2***REMOVED***;

        let direction = null;
        console.log(group1Advantage + group2Advantage + group3Advantage***REMOVED***;
        if ((parseFloat(group1Advantage***REMOVED*** + parseFloat(group2Advantage***REMOVED*** + parseFloat(group3Advantage***REMOVED******REMOVED*** > 0***REMOVED*** {
          direction = "Left";
        ***REMOVED***
        else if ((parseFloat(group1Advantage***REMOVED*** + parseFloat(group2Advantage***REMOVED*** + parseFloat(group3Advantage***REMOVED******REMOVED*** < 0***REMOVED*** {
          direction = "Right";
        ***REMOVED***
        else{
          direction = "Neutral";
        ***REMOVED***


        /*
        const advantage = (percent1 - percent2***REMOVED***.toFixed(2***REMOVED***;
        const avgPercent = ((+percent1 + +percent2***REMOVED*** / 2***REMOVED***.toFixed(2***REMOVED***;

        let direction = null;
        let interpretation = null;
        let age = 40;
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
// IF else logic for diagnosis based on the childs age. Still unsure if this works as intended accoring to Employer, but we believe it does
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
        */
        // Passes values to strings so they can be pushed to the html above


        column1Group1Percent.innerText = percentColumn1Group1.toString(***REMOVED***;
        column1Group2Percent.innerText = percentColumn1Group2.toString(***REMOVED***;
        column1Group3Percent.innerText = percentColumn1Group3.toString(***REMOVED***;

        column2Group1Percent.innerText = percentColumn2Group1.toString(***REMOVED***;
        column2Group2Percent.innerText = percentColumn2Group2.toString(***REMOVED***;
        column2Group3Percent.innerText = percentColumn2Group3.toString(***REMOVED***;



        advantageDiffGroup1.innerText = group1Advantage.toString(***REMOVED***;
        advantageDiffGroup2.innerText = group2Advantage.toString(***REMOVED***;
        advantageDiffGroup3.innerText = group3Advantage.toString(***REMOVED***;


        advantageName.innerText = direction;
        readOnly.value = advantageName.innerText;

        /*
        testDiagnosis.innerText = interpretation;
        readOnly.value = advantageName.innerText;
        readOnlyDiag.value = testDiagnosis.innerText;
*/
        ***REMOVED******REMOVED***
      ***REMOVED******REMOVED***
    // gets the elements from hidden field submit above and populates them from the results in the script 
    function populateHiddenFields(***REMOVED*** {
      document.getElementById("left_score"***REMOVED***.value = column1Percent.innerText;
      document.getElementById("right_score"***REMOVED***.value = column2Percent.innerText;
      document.getElementById("ear_advantage"***REMOVED***.value = advantageName.innerText;
      document.getElementById("ear_advantage_score"***REMOVED***.value = advantageDiff.innerText;
    ***REMOVED***


***REMOVED******REMOVED***;
  