// JSON parsing example adapted from W3Schools:
// "JSON.parse()" [online]Avaliable at:<https://www.w3schools.com/Js/js_json_parse.asp>[Accessed 04 December 2024].

const userObj = JSON.parse(localStorage.getItem("userObj")); // Parse the JSON string to an object
const span = document.getElementsByTagName("span");
const table = document.getElementById("summaryT");
if (userObj && userObj.UserQuest) {
    userObj.UserQuest.forEach((question, index) => {
        let tr = document.createElement("tr");
        
        // Create a cell for the question
        let tdQuestion = document.createElement("td");
        tdQuestion.textContent = question;
        tr.appendChild(tdQuestion);

        // Create a cell for the user answer
        let tdAnswer = document.createElement("td");
        tdAnswer.textContent = userObj.answers[index] || "N/A";
        tr.appendChild(tdAnswer);
        
        // Create a cell for the result
        let tdResult = document.createElement("td");
        if(index != userObj.UserQuest.length-1)
        {
            tdResult.textContent = "Correct"; 
            tr.appendChild(tdResult);
        }
        else
        {
            if (userObj.status=="fail")
            {
                tdResult.textContent = "Wrong"; 
                tr.appendChild(tdResult);
            }
            else
            {
                tdResult.textContent = "Correct"; 
                tr.appendChild(tdResult);
            }
        }
        table.appendChild(tr);
    });
}
span[0].textContent = userObj.UserKush;

document.getElementById('restart').addEventListener("click",function ()
{
    localStorage.clear();
    window.location.href = "../index.html";
});