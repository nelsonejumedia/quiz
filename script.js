document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const homeScreen = document.getElementById('home-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const backBtn = document.querySelector('.back-btn');
    const closeButtons = document.querySelectorAll('.close-btn');
    const submitBtn = document.getElementById('submit-btn');
    const quizCategory = document.getElementById('quiz-category');
    const questionNumber = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    const answerOptions = document.getElementById('answer-options');
    const scorePercentage = document.getElementById('score-percentage');
    const scoreDetails = document.getElementById('score-details');

    let currentQuiz = null;
    let currentQuestionIndex = 0;
    let score = 0;
    let timer = null;

    const quizzes = [
        {
            category: 'Anatomy of the Upper and Lower Limb',
            questions: [
                {
                    question: 'Which space agency has decided to carry out its first all-female spacewalk at the International Space Station (ISS)?',
                    options: ['Roscosmos', 'NASA', 'ISRO', 'JAXA'],
                    correctAnswer: 'NASA'
                },
                {
                    question: 'What is the chemical symbol for gold?',
                    options: ['Au', 'Ag', 'Fe', 'Cu'],
                    correctAnswer: 'Au'
                },
                {
                    question: 'Which planet is known as the Red Planet?',
                    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
                    correctAnswer: 'Mars'
                }
            ]
        },


        {
            category: 'Technology',
            questions: [
                {
                    question: 'HTML',
                    options: ['Roscosmos', 'NASA', 'ISRO', 'HyperText Markup Language'],
                    correctAnswer: 'HyperText Markup Language'
                },
                {
                    question: 'CSS',
                    options: ['Au', 'Ag', 'Cascading Style Sheet', 'Cu'],
                    correctAnswer: 'Cascading Style Sheet'
                },
                {
                    question: 'JS',
                    options: ['JavaScript', 'Mars', 'Jupiter', 'Saturn'],
                    correctAnswer: 'JavaScript'
                }
            ]
        },
        // Add more quizzes for other categories here
    ];

    function showScreen(screen) {
        homeScreen.classList.add('hidden');
        quizScreen.classList.add('hidden');
        resultsScreen.classList.add('hidden');
        screen.classList.remove('hidden');
    }

    function startQuiz(category) {
        currentQuiz = quizzes.find(quiz => quiz.category === category);
        currentQuestionIndex = 0;
        score = 0;
        showScreen(quizScreen);
        quizCategory.textContent = category;
        displayQuestion();
        startTimer();
    }

    function displayQuestion() {
        const question = currentQuiz.questions[currentQuestionIndex];
        questionNumber.textContent = `Quiz : ${currentQuestionIndex + 1}`;
        questionText.textContent = question.question;
        answerOptions.innerHTML = '';

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('answer-btn');
            button.innerHTML = `
                <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
                <span>${option}</span>
            `;
            button.addEventListener('click', () => selectAnswer(button));
            answerOptions.appendChild(button);
        });
    }

    function selectAnswer(selectedButton) {
        answerOptions.querySelectorAll('.answer-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        selectedButton.classList.add('selected');
    }

    function startTimer() {
        let timeLeft = 180; // 3 minutes
        const timerElement = document.getElementById('timer');

        clearInterval(timer);
        timer = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} min`;
            
            if (timeLeft === 0) {
                clearInterval(timer);
                submitAnswer();
            }
            timeLeft--;
        }, 1000);
    }

    function submitAnswer() {
        clearInterval(timer);
        const selectedAnswer = answerOptions.querySelector('.selected');
        if (selectedAnswer) {
            const userAnswer = selectedAnswer.querySelector('span:last-child').textContent.trim();
            if (userAnswer === currentQuiz.questions[currentQuestionIndex].correctAnswer) {
                score++;
            }
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuiz.questions.length) {
            displayQuestion();
            startTimer();
        } else {
            showResults();
        }
    }

    function showResults() {
        showScreen(resultsScreen);
        const percentage = (score / currentQuiz.questions.length) * 100;
        scorePercentage.textContent = `${percentage.toFixed(0)}% Score`;
        scoreDetails.textContent = `You attempted ${currentQuiz.questions.length} questions and from that ${score} answer${score !== 1 ? 's are' : ' is'} correct.`;
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            startQuiz(category);
        });
    });

    backBtn.addEventListener('click', () => showScreen(homeScreen));
    closeButtons.forEach(button => {
        button.addEventListener('click', () => showScreen(homeScreen));
    });
    submitBtn.addEventListener('click', submitAnswer);
});