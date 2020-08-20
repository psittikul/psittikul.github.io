$(function () {
    console.log("Script loaded");
    var urlParams = new URLSearchParams(window.location.search);
    // If the category is set, show resources belonging to that category
    if (urlParams.has("cat")) {
        var category = urlParams.get("cat");
        console.log("Total # of resources: " + resources.length);
        var displayResources = new Array();
        var queryString = "";
        displayResources = resources.filter(function(value) {
            return value["categories"].includes(category);
        });
    }
});