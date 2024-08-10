let quizData = [
    {
        question: "Which of the following is a type of Phishing?",
        options: ["Mishing", "Whale Phishing", "Whaling", "Haddocking"],
        answer: "Whaling"
    },
    {
        question: "What year holds the record for the most cybercrime?",
        options: ["2021", "2022", "2023", "2024"],
        answer: "2023"
    },
    {
        question: "How is malware most commonly distributed?",
        options: ["E-Mail", "Text Messages", "Voicemail", "Discord"],
        answer: "E-Mail"
    },
    {
        question: "Which of the following is a common DDoS attack victim?",
        options: ["Snapchat", "GitHub", "eBay", "Vinted"],
        answer: "GitHub"
    },
    {
        question: "What type of malware holds systems hostage?",
        options: ["Hostware", "Downware", "Software", "Ransomware"],
        answer: "Ransomware"
    }
]

function shuffleArray(array) {
    return array.sort(function () {
        return Math.random() - 0.5;
    });
}

const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const options = document.getElementById("options");

let score = 0;
let currentQuestion = 0;

function nextQuestion() {
    const next = quizData[currentQuestion];
    question.innerHTML = `<h1>${next.question}</h1>`;
    options.innerHTML = "";
    next.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.className = "quizButton";
        options.appendChild(button);
        button.addEventListener("click", submitAnswer);
    });
}

function submitAnswer(event) {
    const submitted = event.target;
    const answer = quizData[currentQuestion].answer;
    if (submitted.innerText === answer)
        score++;
    currentQuestion++;
    if (currentQuestion < quizData.length)
        nextQuestion();
    else
        showResult();
}

function showResult() {
    quiz.innerHTML = `
        <h1>You completed the Quiz!</h1>
        <p>You scored ${score}/${quizData.length}!</p>
    `
    const button = document.createElement("button");
    button.innerText = "Retake";
    button.className = "quizButton";
    quiz.appendChild(button);
    button.addEventListener("click", restartQuiz)
}

function restartQuiz(event) {
    score = 0;
    currentQuestion = 0;
    location.reload();
}

quizData = shuffleArray(quizData);
nextQuestion();