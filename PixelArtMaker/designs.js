// Select color input
// Select size input
var height, width, color;
// When size is submitted by the user, call makeGrid()

$("#sizePicker").submit(function (event) {
    event.preventDefault();
    height = $("#inputHeight").val();
    width = $("#inputWidth").val();
    makeGrid(height, width);
    // console.log("Height is " + height);
});

function makeGrid(height, width) {
    $("tr").remove();

    // Your code goes here!
    for (var i = 0; i < height; i++) {
        $("#pixelCanvas").append(`<tr id=tableRow${i}></tr>`)              // Provides a nice view for other programmers in element pane. 
        for (var j = 0; j < width; j++) {
            $("tr:last").append("<td id=tableColumn" + j + "></td>")       // Add Columns only in the last row.
        }
    }

    // add color to cell
    $('td').click(function addColor() {
        color = $("#colorPicker").val();

        if ($(this).attr('style')) {                                       // $(this) is used to target the current HTML Element.
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }

    })
}
