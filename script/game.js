//stackoverflow.How to create a simple JavaScript timer? [online].Avaliable at: <https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer>
//[Accessed 04 December 2024]
  let sec =29;
  let timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
          alert("Time out!")
           finishGame();
           sec = 29;
        }
      }, 1000);

  const txtFild = document.getElementById("txtField");
  let questionRows = document.getElementById("list").getElementsByTagName("tr");
  const buttons =
  [
    buttonA = document.getElementById("buttonA"),
    buttonB = document.getElementById("buttonB"),
    buttonC = document.getElementById("buttonC"),
    buttonD = document.getElementById("buttonD")
  ]

  fifty_fiftyBtm = document.getElementById("fifty_fiftyB");
  friendCallBtm = document.getElementById("friendCallB");
  groupHelpBtm = document.getElementById("groupHelpB");


  buttons.forEach((button) => 
    { 
      button.addEventListener("click",  () => checkAnswer(button));
      button.addEventListener("mouseover", function() {button.style.backgroundColor = "green";});
      button.addEventListener("mouseout", function () {button.style.backgroundColor = "#141f95";});
    });

  let user =
  {
    name:localStorage.getItem("playerName"),
    UserQuest: [],
    questionNumb: 0,
    UserKush: 0,
    answers: [],
    status: ""
  }
  let Hint = 
  {
    canUse:true,
    friendCall: true,
    fifty_fifty: true,
    groupHelp:true
  }

  document.getElementById("playerName").textContent = user.name;
  let friendAnswers=[
    "I think you’re speaking from the past—your signal needs a time machine!",
    "Hi! I'm busy at the moment.Please leave a message and I call you back as soon as possible.",
    "Sorry, you caught me in the middle of an epic standoff with a jar of pickles. They’re winning.",
    "Sorry, bro! I really don't know. What a stupid question!",
    "I hate history!",
    "It's easy! Just guess!",
    "Is ‘pass’ an option? No? Okay, I’ll guess like my life depends on it.",
    "Let’s see… E) None of the above? Oh, there’s no E? Dang it.",
  ];

  let questions = [
    {questiontxt:"Which animal is known as 'man's best friend'?", answers:["Cat","Dog","Rabbit","Elephant"], trueAnswer:"Dog"},
    {questiontxt:"What is the capital of France?", answers:["Berlin","Paris","Madrid","Rome"], trueAnswer:"Paris"},
    {questiontxt:"Which planet is known as the Red Planet?", answers:["Venus","Mars","Jupiter","Saturn"], trueAnswer:"Mars"},
    {questiontxt:"What is the largest ocean on Earth?", answers:["Atlantic Ocean","Indian Ocean","Arctic Ocean","Pacific Ocean"], trueAnswer:"Pacific Ocean"},
    {questiontxt:"Which fruit is known for keeping the doctor away if eaten every day?", answers:["Banana","Apple","Orange","Pear"], trueAnswer:"Apple"},
    {questiontxt:"What type of animal is a Komodo dragon?", answers:["Mammal","Bird","Reptile","Fish"], trueAnswer:"Reptile"},
    {questiontxt:"Who is the author of 'Harry Potter'?", answers:["Suzanne Collins","J.K. Rowling","J.R.R. Tolkien","C.S. Lewis"], trueAnswer:"J.K. Rowling"},
    {questiontxt:"What is the correct way to declare a variable in JavaScript?", answers:["var myVar","variable myVar","let myVar","Both A and C"], trueAnswer:"Both A and C"},
    {questiontxt:"What is the result of 'console.log(2 + '2');'?", answers:["4","22","Error","undefined"], trueAnswer:"22"},
    {questiontxt:"How do you write a comment in JavaScript?", answers:["// This is a comment","/* This is a comment */","<!-- This is a comment -->","Both A and B"], trueAnswer:"Both A and B"},
    {questiontxt:"What does NaN stand for in JavaScript?", answers:["Not a Number","Not any Number","Null and None","None of the above"], trueAnswer:"Not a Number"},
    {questiontxt:"Who is the best hero?", answers:["Superman","Deadpool","Hulk","Batman"], trueAnswer:"Deadpool"},
    {questiontxt:"What is the capital city of Ireland?", answers:["Cork","Belfast","Dublin","Galway"], trueAnswer:"Dublin"},
    {questiontxt:"What is the national symbol of Ireland?", answers:["Lion","Shamrock","Eagle","Rose"], trueAnswer:"Shamrock"},
    {questiontxt:"Which famous Irish writer wrote 'Ulysses'?", answers:["Samuel Beckett","W.B. Yeats","Oscar Wilde","James Joyce"], trueAnswer:"James Joyce"},
    {questiontxt:"What is the capital city of Ukraine?", answers:["Kyiv","Lviv","Odessa","Kharkiv"], trueAnswer:"Kyiv"},
    {questiontxt:"What is the currency of Ukraine?", answers:["Euro","Hryvnia","Zloty","Tenge"], trueAnswer:"Hryvnia"},
    {questiontxt:"What is the name of the large nuclear disaster that took place in Ukraine in 1986?", answers:["Chernobyl","Fukushima","Three Mile Island","Hiroshima"], trueAnswer:"Chernobyl"},
    {questiontxt:"What is the first country in the world to celebrate the New Year?", answers:["Australia","New Zealand","Japan","Fiji"], trueAnswer:"New Zealand"},
    {questiontxt:"Which of these animals can live both in water and on land?", answers:["Dolphin","Frog","Lion","Whale"], trueAnswer:"Frog"},
    {questiontxt:"In which year did the Titanic sink?", answers:["1905","1912","1920","1932"], trueAnswer:"1912"},
    {questiontxt:"What is the largest species of shark?", answers:["Great White Shark","Hammerhead Shark","Whale Shark","Tiger Shark"], trueAnswer:"Whale Shark"},
    {questiontxt:"Which country was formerly known as Persia?", answers:["Iraq","Iran","Afghanistan","Turkey"], trueAnswer:"Iran"},
    {questiontxt:"Who was the first woman to fly solo across the Atlantic Ocean?", answers:["Amelia Earhart","Jacqueline Cochran","Bessie Coleman","Harriet Quimby"], trueAnswer:"Amelia Earhart"},
    {questiontxt:"What is the value of π (pi) to two decimal places?", answers:["3.14","3.15","5","3.17"], trueAnswer:"3.14"},
    {questiontxt:"What is 25% of 200?", answers:["50","75","100","150"], trueAnswer:"50"}
  ];

  let alreadyUseIndex = [];

  function showQuestion()
  {     
    let index = randomPick();
    
    buttons.forEach((element) => 
    { 
      element.style.visibility = "visible";
    });
    questionRows[((questionRows.length -1)-user.questionNumb)].style.backgroundColor = "red";
    txtFild.textContent = "Q" + (user.questionNumb+1) + ": " + questions[index].questiontxt;
    buttonA.textContent = questions[index].answers[0];
    buttonB.textContent = questions[index].answers[1];
    buttonC.textContent = questions[index].answers[2];
    buttonD.textContent = questions[index].answers[3];      
  }
  function randomPick()
  {
    let questionIndex;
    do 
    {
      questionIndex = Math.floor(Math.random() * questions.length);
    } while (alreadyUseIndex.includes(questionIndex));
  
    alreadyUseIndex.push(questionIndex); 
    return questionIndex;
  }


  function finishGame()
  {
    localStorage.setItem("userObj", JSON.stringify(user));
    window.location.href = "summary.html";
  }

  function checkAnswer(button)
  {
    user.answers.push(button.textContent);
    user.UserQuest.push(txtFild.textContent);
    Hint.canUse = true;

    questionRows[((questionRows.length -1)-user.questionNumb)].style.backgroundColor = "transparent";
    
    if(button.textContent == questions[alreadyUseIndex[alreadyUseIndex.length -1]].trueAnswer)
    {
      if(user.questionNumb == 14)
      {
        user.UserKush ="1 Million"
        user.status="win";
        finishGame();
      }
      else
      {
        if (user.questionNumb == 4)
        {
          user.UserKush = "1,000";
        }
        if (user.questionNumb == 9)
        {
          user.UserKush = "32,000";
        }
        user.questionNumb++;
        sec = 30;
        showQuestion();
      }
    }
    else
    {
      alert("You Loose!")
      user.status="fail";
      finishGame();
    } 
  }

//LifeLine functions
  function fifty_fifty()
  {
    if(Hint.canUse && Hint.fifty_fifty)
    {
      Hint.canUse = false;
      Hint.fifty_fifty = false;

      let removeOptions = 0;
      let hideButtons = [];

      do 
      {
        let buttonIndex = Math.floor(Math.random() * buttons.length);
        if (buttons[buttonIndex].textContent != questions[alreadyUseIndex[alreadyUseIndex.length -1]].trueAnswer && !hideButtons.includes(buttonIndex) )
        {
          removeOptions++;
          hideButtons.push(buttonIndex);
          buttons[buttonIndex].style.visibility = "hidden"

        }
      } while (removeOptions < 2);
    
      fifty_fiftyBtm.removeEventListener("click",fifty_fifty)
    }
  }

  function PhoneAFriend()
  {
    if(Hint.canUse && Hint.friendCall)
    {
      Hint.canUse = false;
      Hint.friendCall = false;

      let choice = Math.floor(Math.random()*2);

      if (choice == 1)
      {
        choice = Math.floor(Math.random()*friendAnswers.length);
        alert(friendAnswers[choice]);
      }
      else
      {
        alert(questions[alreadyUseIndex[alreadyUseIndex.length -1]].trueAnswer + " \nI’d like to thank my parents for raising a trivia nerd and Google for always being there.");
      }
      friendCallBtm.removeEventListener("click",PhoneAFriend)
    }
  }

  function AskAudience()
  {
    if(Hint.canUse && Hint.groupHelp)
    {
      Hint.canUse = false;
      Hint.groupHelp = false;

      let removeOptions = 0;
      let hideButtons = [];
      do 
      {
        let buttonIndex = Math.floor(Math.random() * buttons.length);

        if (!hideButtons.includes(buttonIndex) )
        {
          removeOptions++;
          hideButtons.push(buttonIndex);
          buttons[buttonIndex].style.visibility = "hidden";
        }
      } while (removeOptions < 3);
      groupHelpBtm.removeEventListener("click",AskAudience)
    }
  }

  fifty_fiftyBtm.addEventListener("click",() => fifty_fifty() )
  friendCallBtm.addEventListener("click",() => PhoneAFriend() )
  groupHelpBtm.addEventListener("click",() => AskAudience() )
