   
const Questions = [{
        q: "Which kind of penguin is not real?",
        a: [{ text: "Gentoo", isCorrect: false },
        { text: "Adelie", isCorrect: false },
        { text: "Queen", isCorrect: true },
        { text: "Emperor", isCorrect: false }
        ]
     
    },
    {
        q: "Where do Penguins NOT live?",
        a: [{ text: "Australia", isCorrect: false},
        { text: "Antarctica", isCorrect: false},
        { text: "South America", isCorrect: false},
        { text: "Alaska", isCorrect: true}
        ]
     
    },
    {
        q: "How fast can Gentoo penguins swim?",
        a: [{ text: "20 MPH", isCorrect: false },
        { text: "22 MPH", isCorrect: true },
        { text: "10 MPH", isCorrect: false },
        { text: "They can't swim", isCorrect: false }
        ]
     
    },
    {
        q: "Can penguins fly?",
        a: [{ text: "Yes", isCorrect: false },
        { text: "No", isCorrect: true },
        ]
     
    },
    {
        q: "Why do some penguins have pink spots around their eyes?",
        a: [{ text: "Their diet", isCorrect: false },
        { text: "Genetic mutation", isCorrect: false },
        { text: "Temperature regulation", isCorrect: true },
        { text: "Aesthetics", isCorrect: false }
        ]
     
    },
    {
        q: "How many known species of penguin are there?",
        a: [{ text: "18", isCorrect: true },
        { text: "5", isCorrect: false },
        { text: "0", isCorrect: false },
        { text: "22", isCorrect: false }
        ]
     
    }
     
    ]
     
    let currQuestion = 0
    let score = 0
     
    function loadQues() {
        const question = document.getElementById("ques")
        const opt = document.getElementById("opt")
     
        question.textContent = Questions[currQuestion].q;
        opt.innerHTML = ""
     
        for (let i = 0; i < Questions[currQuestion].a.length; i++) {
            const choicesdiv = document.createElement("div");
            const choice = document.createElement("input");
            const choiceLabel = document.createElement("label");
     
            choice.type = "radio";
            choice.name = "answer";
            choice.value = i;
     
            choiceLabel.textContent = Questions[currQuestion].a[i].text;
     
            choicesdiv.appendChild(choice);
            choicesdiv.appendChild(choiceLabel);
            opt.appendChild(choicesdiv);
        }
    }
     
        
    function loadScore() {
        
        const totalScore = document.getElementById("score")
        totalScore.textContent = `You scored ${score} out of ${Questions.length}!!`
    }
     
     
    function nextQuestion() {
        if (currQuestion < Questions.length - 1) {
            currQuestion++;
            loadQues();
            console.log(currQuestion < Questions.length - 1);
        } else {
            document.getElementById("opt").remove();
            document.getElementById("ques").remove();
            document.getElementById("btn").remove();
            document.getElementById("title").innerHTML = "Good Job!";
            loadScore();
        }
    }
     
    function checkAns() {
        if (document.querySelector('input[name="answer"]:checked') == null) {
            alert('please choose an answer!');  
        }
        else {
        const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
     
        if (Questions[currQuestion].a[selectedAns].isCorrect) {
            score++;
            console.log("Correct");
            nextQuestion();
        } else {
            console.log('Incorrect');
            nextQuestion();
        }
    }
}
    function page_switch(page) 
    {
		let html = '.html';
        window.location.href = page.concat(html);
    
    }