// Hints: 
// Use loops, map, or foreach statements whenever necessary.
//
// To do a standard for loop as you would in java use the syntax
// for (var i = 0; i < number; i++) {}
//
// Elements must be added to the DOM before you can do things like
// set CSS styles of assign events to them.
$(document).ready(function() {
    // These set some default values for
    // the height and width of the grid, available colors to draw with,
    // and the default selected color
    var gridHeight = 5;
    var gridWidth = 5;
    var colors = ["red", "blue", "green", "black", "white"];
    var selectedColor = "red";

    // Select the table which will hold out board by its id

    // Make n table rows where n is the height of the grid
    //
        //Append each row to the grid

        // In each table row, make m table data elements, where
        // m is the width of the grid
        
            // Append each table data element to the current row
            
            // Once the table data element has been appended to the row,
            // assign a click event that will change this element's
            // background color to the value of selectedColor


    // Select the table which will hold our color palette by
    // its id


    // For each color in colors, make a table row with one table data
    // element in it. Set the table data's background color to its
    // corresponding color. The table data elements should have a
    // class of colorSwatch

        // Assign a click event to the table data element so that when it is
        // clicked, selectedColor will be set to that element's corresponding
        // color.
});
// Bonus: Play around with the grid size and available colors to see if you can
//        make your website a little more fun
