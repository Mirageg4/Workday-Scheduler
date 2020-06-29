// JQuery Document Ready Function
$(function () {
    // Variable - Current Day-Month-Date-Year in Jumbotron
    const currentDay = moment().format("dddd, MMMM Do YYYY");
    
    // Variable - Timeblocks for Day
    // TODO - Retrieve current hour as a number
    const hour = parseInt(moment().format("H"));

    // DONE - Fill the '#currentDay' container with the currentDay variable
    $("#currentDay").text(currentDay)

    // DONE - Retrieve stored tasks and parse from local storage
    const tasks = JSON.parse(
        localStorage.getItem("tasks")
    ) || {}

    // DONE - Run a for-loop and create timeblocks for every hour from 9 - 5
    const timeData = [
        {
            label: "9am", // 12-hour formatted time
            value: 9 // 24-hour Military time
        },
        {
            label: "10am", // 12-hour formatted time
            value: 10 // 24-hour Military time
        },
        {
            label: "11am", // 12-hour formatted time
            value: 11 // 24-hour Military time
        },
        {
            label: "12pm", // 12-hour formatted time
            value: 12 // 24-hour Military time
        },
        {
            label: "1pm", // 12-hour formatted time
            value: 13 // 24-hour Military time
        },
        {
            label: "2pm", // 12-hour formatted time
            value: 14 // 24-hour Military time
        },
        {
            label: "3pm", // 12-hour formatted time
            value: 15 // 24-hour Military time
        },
        {
            label: "4pm", // 12-hour formatted time
            value: 16 // 24-hour Military time
        },
        {
            label: "5pm", // 12-hour formatted time
            value: 17 // 24-hour Military time
        }
    ]
    for (let i = 0; i < timeData.length; i++) {
        // The hour of this timeblock
        const timeBlockHour = timeData[i].value
    
        // TESTING - Contains current time, textarea for input (given the .past, .present, .future as appropriate), and the save button (.saveBtn)
        // add class to textarea element.
        
       

       let timeClass = "";

        if (hour < timeBlockHour) timeClass = "future";
        else if(hour === timeBlockHour) timeClass = "present";
        else timeClass = "past";
        
        $("#textarea").addClass("timeClass");


        const timeBlockTemplate = `
        <div class='time-block row'>
            <span class='hour'>${timeData[i].label}</span>
            <textarea class='description ${timeClass}'>${tasks[timeData[i].label] || ""}</textarea>
            <button id='${timeData[i].label}' class='saveBtn'>
            <i class="fas fa-save"></i>
            </button>
        </div>
        `
        // DONE - Put timeblocks into the container
        $("#timeblock-container").append(timeBlockTemplate)

    }

    // DONE - Add a click event istener to all save buttons to stringify and store the entered task into local storage
    $(".saveBtn").on("click", function () {

        // DONE - Get current value from 'this' timeblock's textarea element
        const taskDescription = $($(this).siblings("textarea")).val();
        const timeBlockHour = this.id

        // DONE - Set the task into the 'tasks' object
        tasks[timeBlockHour] = taskDescription;

        // DONE - Store the 'tasks' object into local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));
    })

});
