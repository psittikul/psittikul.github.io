var validInput = true;

/** Automatically calculate each tattoo's approximate area when its height and width fields have been populated */
$(document).on("change", "input[type='number']", function () {
    console.log($(this));
    if ($(this).attr("name").split("_")[2] == "height") {
        var tattooHeight = $(this).val();
        var tattooWidth = $(this).parent().next().find("input").val();
        var tattooArea = parseFloat(tattooHeight) * parseFloat(tattooWidth);
        tattooArea = tattooArea.toFixed(2);
        // Only update the area input field if it wasn't NaN
        $(this).parent().next().next().find("input").val(function () { return tattooArea > 0 ? tattooArea : "" });
    }
    if ($(this).attr("name").split("_")[2] == "width") {
        var tattooWidth = $(this).val();
        var tattooHeight = $(this).parent().prev().find("input").val();
        var tattooArea = parseFloat(tattooHeight) * parseFloat(tattooWidth);
        tattooArea = tattooArea.toFixed(2);
        // Only update the area input field if it wasn't NaN
        $(this).parent().next().find("input").val(function () { return tattooArea > 0 ? tattooArea : "" });
    }
});

$(document).on("click", "#addRowBtn", function () {
    var newRow = $("#blankRow").clone().removeAttr("id");
    var currIndex = $("#tattoosTable tbody").find("tr:not(#blankRow)").length + 1;
    $(newRow).find("td.tattoo_number").text(currIndex); // Update the tattoo number column
    // Update the input field names accordingly
    $.each($(newRow).find("td:not(.tattoo_number)"), function () {
        var className = $(this).attr("class").split("_");
        var inputName = className[0] + "_" + currIndex + "_" + className[1];
        $(this).find("input").attr("name", inputName);
    });
    $("#blankRow").before(newRow);
    $(newRow).find("td:last-of-type").after($("#addRowCell"));  // Move the add row button to the end of the last row
});

$(document).on("click", "#calculateBtn", function () {
    /** TO-DO: First make sure all necessary fields are filled in */
    $.each($("input[required]"), function () {
        if ($(this).val().length < 1) {
            $(this).css("border", "solid thin red");
            $(this).attr("placeholder", "This field is required.");
            validInput = false;
        }
    });
    // If all necessary fields are filled in, go ahead and perform calculations
    validInput ? performCalculations() : console.log("Do nothing.");
});

/**
 * Event handler for tabbing into a new row
 */
$(document).on("keydown", "#tattoosTable input", function (e) {
    if ($(this).parent().attr("class") == "tattoo_desc" && e.keyCode == 9 && $(this).parent().parent().next().attr("id") == "blankRow") {
        $("#addRowBtn").click();
    }
});

function performCalculations() {
    /**
        * Calculate skin surface area
        * Mosteller formula: (height[in.] · weight[lb.])/3131)½
        */
    var height_in = parseFloat($("[name='height_feet']").val() * 12) + parseFloat($("[name='height_inches']").val());
    var weight_lbs = $("[name='weight_lbs']").val();
    var skinSurfaceArea = Math.sqrt((parseFloat(height_in) * parseFloat(weight_lbs)) / (parseFloat(3131)));
    skinSurfaceArea *= 1550;
    $("#skinSurfaceArea").text(skinSurfaceArea.toFixed(2) + " in²");
    $("#skinSurfaceArea").parent().css("display", "block");
    /**
     * Then calculate total area of all your tattoos
     */
    var totalTattooArea = 0;
    $.each($("tr:not(#blankRow) td.tattoo_area"), function () {
        totalTattooArea += parseFloat($(this).find("input").val());
    });
    $("#tattooSurfaceArea").text(totalTattooArea.toFixed(2) + " in²");
    $("#tattooSurfaceArea").parent().css("display", "block");
    /**
     * Then calculate what percentage of your skin's surface area is tattooed
     */
    var tattooPercentage = parseFloat(totalTattooArea / skinSurfaceArea) * 100;
    $("#tattooPercentage").text(tattooPercentage.toFixed(2));
    $("#tattooPercentage").parent().css("display", "block");
}