// JQuery Document Ready Function
$(function () {
    // Variable - Current Day-Month-Date-Year in Jumbotron
    const currentDay = moment().format("dddd, MMMM Do YYYY");
    
    // Variable - Timeblocks for Day
    const hour = moment().format("H A");

    // DONE - Fill the '#currentDay' container with the currentDay variable
    $("#currentDay").text(currentDay)

    // DONE - Retrieve stored tasks and parse from local storage
    const tasks = JSON.parse(
        localStorage.getItem("tasks")
    )

    // TODO - Create timeblocks and populate with any existing stored task and color appropriately based on current time
    // ------------------------------------------------------------------------

    // TODO - Run a for-loop and create timeblocks for every hour from 9 - 5
    const startHour = 9;
    for (let i = 0; i < 9; i++) {
        // The hour of this timeblock
        const timeBlockHour = startHour + i;
    
        // TODO - Contains current time, textarea for input (given the .past, .present, .future as appropriate), and the save button (.saveButton)
        const timeBlockTemplate = `<p>${timeBlockHour}</p>`

        // DONE - Put timeblocks into the container
        $("#timeblock-container").append(timeBlockTemplate)

    }

    // TODO - Add a click event istener to all save buttons to stringify and store the entered task into local storage
    $(".saveButton").on("click", function () {
        $(timeBlockHour).val();

        // TODO - Get current value from 'this' timeblock's textarea element
        this.timeBlockHour("p").val();
       
        // TODO - Push the task into the 'tasks' array
        tasks.push()

        // TODO - Store the 'tasks' array into local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));
    })
});
