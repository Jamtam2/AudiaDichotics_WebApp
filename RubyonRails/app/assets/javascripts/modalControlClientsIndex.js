// Controls functionality behind modal

$(document***REMOVED***.ready(function (***REMOVED*** {
    $("#filterButton"***REMOVED***.click(function (***REMOVED*** {
        $("#filterModal"***REMOVED***.modal('show'***REMOVED***;
    ***REMOVED******REMOVED***;

    // Update filter button text when select field value changes
    $(".sort-select"***REMOVED***.on("change", function (***REMOVED*** {
        var selectField = $(this***REMOVED***;
        var selectedOption = selectField.find("option:selected"***REMOVED***.text(***REMOVED***;
        var targetButton = $("#" + selectField.data("button-id"***REMOVED******REMOVED***;
        targetButton.text("Filter Options (" + selectedOption + "***REMOVED***"***REMOVED***;
    ***REMOVED******REMOVED***;
***REMOVED******REMOVED***;

// Reset all filter options
$("#resetFiltersButton"***REMOVED***.on("click", function (***REMOVED*** {
    $(".sort-select"***REMOVED***.val(""***REMOVED***; // Clear selected options
    $("#filterButton"***REMOVED***.text("Filter Options"***REMOVED***; // Reset button text
***REMOVED******REMOVED***;