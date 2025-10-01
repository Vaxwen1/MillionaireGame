document.getElementById("Start").addEventListener("click",function(){
    const username = document.getElementById("playerName").value.trim();

    if (username){
        localStorage.setItem("playerName", username);

        window.location.href = "html/game.html";
    }
    else{
        alert("Please enter the name to start!");
    }
});