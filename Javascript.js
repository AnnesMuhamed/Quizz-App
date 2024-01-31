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
    console.log('Selected answer is ', selection); // Geklickte Frage
    let selectedQuestionNumber = selection.slice(-1); // Dadurch wird der letzte buchstabe/zahl von Zeile 85 "selection" gespeichert. bsp. von answer_3 wird die 3 gespeichert.
    console.log('selectedQuestionNumber is ', selectedQuestionNumber);
    console.log('Current question is ', question['right_answer']); // Geklickte frage in voller Form

    if(selectedQuestionNumber == question['right_answer']) {
        console.log('Richtige Antwort!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        console.log('Falsche Antwort!!!');
    }
}