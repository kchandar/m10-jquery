// Hints: 
// Use loops, map, or foreach statements whenever necessary.
//
// To do a standard for loop as you would in java use the syntax
// for (var i = 0; i < number; i++) {}
//
// Elements must be added to the DOM before you can do things like
// set CSS styles of assign events to them.
$(document).ready(function() {

    var gridHeight = 5;
    var gridWidth = 5;
    var colors = ["pink", "lightblue", "yellow", "gray", "purple"];
    var selectedColor = "red";

    var board = $('#board');
    for(var n = 0; n < gridHeight; n++) {
        var trb = $('<tr>');
        board.append(trb);
        for(var m = 0; m < gridWidth; m++) {
            var tdb = $('<td>');
            trb.append(tdb);
        }

    }

    $('td').click(function() {
        $(this).css('background-color', selectedColor);
    })   

    var palette = $('#palette');
    // For each color in colors, make a table row with one table data
    // element in it. Set the table data's background color to its
    // corresponding color. The table data elements should have a
    // class of colorSwatch
    colors.forEach(function(c) {
        var trp = $("<tr>");

        var tdp = $('<td class="colors">');
        trp.append(tdp);
        palette.append(trp);
        tdp.css("background-color", c);

        // Assign a click event to the table data element so that when it is
        // clicked, selectedColor will be set to that element's corresponding
        // color.
        tdp.on("click", function() {
            selectedColor = c;
        });
    })
            // Assign a click event to the table data element so that when it is
        // clicked, selectedColor will be set to that element's corresponding
        // color.
});
// Bonus: Play around with the grid size and available colors to see if you can
//        make your website a little more fun
