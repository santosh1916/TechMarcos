const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris"
        },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasmic reticulum"],
        answer: "Mitochondria"
    }
    ];

let mainContainer = document.getElementById("main-container")
questions.forEach((elem,index)=>{
    
    // Create div in Which all question and answer accur.
    let container = document.createElement("div")
    container.className = "container";
    
    // create p tag for question and append in container.
    let questionElement = document.createElement("p");
    questionElement.className = "question text-md";
    questionElement.textContent = elem.question; // add question value in <p> tag.
    container.appendChild(questionElement); // append <p> tag inside
    mainContainer.appendChild(container);
    
    // create another div class name = row. inside this put all option with label
    elem.options.forEach((queOpt)=>{
        
        let optionBox = document.createElement("div")
        optionBox.className = "row";
        let inputbox = document.createElement("input");
        inputbox.type = "radio";
        inputbox.setAttribute("id" , `${queOpt}`);
        inputbox.setAttribute("name" , `${index}`);
        
        let labelForOption = document.createElement("label");
        labelForOption.setAttribute("for", `${queOpt}`)
        labelForOption.textContent = queOpt;
        optionBox.appendChild(inputbox);
        optionBox.appendChild(labelForOption); 
        container.appendChild(optionBox);
        
    })
})
    // Add a submit button
    let submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    mainContainer.appendChild(submitButton);

    // push correct answer in array.
     let correctAnswer = [];
        questions.forEach((elem)=>{
        correctAnswer.push(elem.answer)
    })
    
    // Compare function for given answer.
    const compareQuestionAnswer = (selectedAns,correctAns)=>{
          let rightAnsCount = 0;
           correctAns.forEach((correctElem)=>{
               for(let i = 0; i < selectedAns.length; i++){
               if(correctElem === selectedAns[i]){
                   rightAnsCount += 1;
               }
           }
           })
           alert(`You have give ${rightAnsCount} Right Answer`);
           
       }
       
    // Handle submit button click
    submitButton.addEventListener("click", () => {
        let selectedAnswers = [];
        mainContainer.querySelectorAll('input[type="radio"]:checked').forEach((checkbox) => {
            selectedAnswers.push(checkbox.nextElementSibling.textContent);
        });
        compareQuestionAnswer(selectedAnswers,correctAnswer);
    });