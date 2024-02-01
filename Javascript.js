let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "Welches der folgenden fünf Elemente ist für die Webentwicklung relevant?",
        "answer_1": "SQL-Datenbank",
        "answer_2": "Bilderbearbeitungssoftware",
        "answer_3": "3D-Drucker",
        "answer_4": "CSS-Stylesheet",
        "right_answer": 4
    },

    {
        "question": "Wann wurde die erste Webseite online gestellt?",
        "answer_1": "6. August 1991",
        "answer_2": "1. Januar 1874",
        "answer_3": "24 November 2001",
        "answer_4": "11 April 1970",
        "right_answer": 1
    },

    {
        "question": "Welcher der folgenden fünf ist ein Webbrowser?",
        "answer_1": "Microsoft Excel",
        "answer_2": "Mozilla Firefox",
        "answer_3": "Adobe Photoshop",
        "answer_4": "Java Virtual Machine",
        "right_answer": 2
    },

    {
        "question": "Welches der folgenden fünf Markup-Sprachen wird häufig für die Strukturierung von Inhalten in Webseiten verwendet?",
        "answer_1": "JSON",
        "answer_2": "XML",
        "answer_3": "YAML",
        "answer_4": "CSV",
        "right_answer": 2
    },
    {
        "question": "Welche der folgenden Programmiersprachen ist eine interpretierte Sprache??",
        "answer_1": "C++",
        "answer_2": "Java",
        "answer_3": "Python",
        "answer_4": "Swift",
        "right_answer": 3
    },

    {
        "question": " Welche der folgenden Technologien wird oft verwendet, um die Benutzerinteraktion in Webanwendungen zu implementieren?",
        "answer_1": "CDU",
        "answer_2": "AJAX",
        "answer_3": "REST",
        "answer_4": "SPD",
        "right_answer": 2
    }
];

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}

function answer(selection) {
    let question = questions[currentQuestion]; // Fragen sind hier gespeichert
    let selectedQuestionNumber = selection.slice(-1); // Dadurch wird der letzte buchstabe/zahl von Zeile 85 "selection" gespeichert. bsp. von answer_3 wird die 3 gespeichert.
    let idOfRightAnswer = `answer_${question['right_answer']}`; // Durch die deklarierte Variable let idOfRightAnswer, definiert die id in ${question['right_answer']}.

    if(selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success'); // Und somit wird dies hier ebenfalls definiert
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++; // mit currentQuestion++ gehen wir zum nächsten Array. von currentQuestion 0 auf 1
    document.getElementById('next-button').disabled = true; // damit in der nächsten frage der Button nicht anklickbar ist bevor man den quiz beantwortet.
    resetAnswerButton(); // damit die nächste function aufgerufen wird um alle fragen auf die normale farbe zurückzusetzten.
    showQuestion(); // damit zeigen wir die nächste frage an.
}

function resetAnswerButton() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success'); // beide farben verschwinden bzw. werden wieder auf normal zurückgesetzt.
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}