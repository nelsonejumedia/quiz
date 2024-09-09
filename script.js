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
            category: 'Upper Limb & Lower Limb',
            questions: [
                {
                    question: 'Which planet is known as the Red Planet?',
                    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
                    correctAnswer: 'Mars'
                },
                {
                    question: 'What is the chemical symbol for water?',
                    options: ['Wa', 'H2O', 'Ho', 'Hy'],
                    correctAnswer: 'H2O'
                },
                {
                    question: 'What is the powerhouse of the cell?',
                    options: ['Nucleus', 'Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus'],
                    correctAnswer: 'Mitochondria'
                }
            ]
        },

        {
            category: 'Thorax',
            questions: [
                {
                    question: 'Which planet is known as the Red Planet?',
                    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
                    correctAnswer: 'Mars'
                },
                {
                    question: 'What is the chemical symbol for water?',
                    options: ['Wa', 'H2O', 'Ho', 'Hy'],
                    correctAnswer: 'H2O'
                },
                {
                    question: 'What is the powerhouse of the cell?',
                    options: ['Nucleus', 'Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus'],
                    correctAnswer: 'Mitochondria'
                }
            ]
        },

        {
            category: 'Histology',
            questions: [
                {
                    question: 'Which planet is known as the Red Planet?',
                    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
                    correctAnswer: 'Mars'
                },
                {
                    question: 'What is the chemical symbol for water?',
                    options: ['Wa', 'H2O', 'Ho', 'Hy'],
                    correctAnswer: 'H2O'
                },
                {
                    question: 'What is the powerhouse of the cell?',
                    options: ['Nucleus', 'Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus'],
                    correctAnswer: 'Mitochondria'
                }
            ]
        },


        {
            category: 'Embryology',
            questions: [
                {
                    question: 'Which planet is known as the Red Planet?',
                    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
                    correctAnswer: 'Mars'
                },
                {
                    question: 'What is the chemical symbol for water?',
                    options: ['Wa', 'H2O', 'Ho', 'Hy'],
                    correctAnswer: 'H2O'
                },
                {
                    question: 'What is the powerhouse of the cell?',
                    options: ['Nucleus', 'Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus'],
                    correctAnswer: 'Mitochondria'
                }
            ]
        },


        {
            category: 'The Cell',
            questions: [
                {
                    question: 'Which planet is known as the Red Planet?',
                    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
                    correctAnswer: 'Mars'
                },
                {
                    question: 'What is the chemical symbol for water?',
                    options: ['Wa', 'H2O', 'Ho', 'Hy'],
                    correctAnswer: 'H2O'
                },
                {
                    question: 'What is the powerhouse of the cell?',
                    options: ['Nucleus', 'Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus'],
                    correctAnswer: 'Mitochondria'
                }
            ]
        },


        {
            category: 'Muscle Physiology',
            questions: [
                {
                    question: 'Which planet is known as the Red Planet?',
                    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
                    correctAnswer: 'Mars'
                },
                {
                    question: 'What is the chemical symbol for water?',
                    options: ['Wa', 'H2O', 'Ho', 'Hy'],
                    correctAnswer: 'H2O'
                },
                {
                    question: 'What is the powerhouse of the cell?',
                    options: ['Nucleus', 'Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus'],
                    correctAnswer: 'Mitochondria'
                }
            ]
        },
        // Add more categories here
    ];

    function showScreen(screen) {
        homeScreen.classList.add('hidden');
        quizScreen.classList.add('hidden');
        resultsScreen.classList.add('hidden');
        screen.classList.remove('hidden');

        // Reset animations
        screen.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-scale-in, .animate-stagger-in > *').forEach(el => {
            el.style.animation = 'none';
            el.offsetHeight; // Trigger reflow
            el.style.animation = null;
        });
    }

    function startQuiz(category) {
        currentQuiz = quizzes.find(quiz => quiz.category === category);
        if (!currentQuiz) {
            console.error('Quiz not found for the selected category');
            return;
        }
        currentQuestionIndex = 0;
        score = 0;
        showScreen(quizScreen);
        quizCategory.textContent = category;
        displayQuestion();
        startTimer();
    }

    function displayQuestion() {
        const question = currentQuiz.questions[currentQuestionIndex];
        questionNumber.textContent = `Question: ${currentQuestionIndex + 1}/${currentQuiz.questions.length}`;
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
        let timeLeft = 10; // 3 minutes
        const timerElement = document.getElementById('timer');

        clearInterval(timer);
        timer = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} sec`;
            
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
        
        let message = '';
        let trophyEmoji = '';
    
        if (percentage < 40) {
            message = "Keep practicing! You'll improve with time.";
            trophyEmoji = '😢';
        } else if (percentage >= 40 && percentage < 50) {
            message = "You're on the right track. A bit more study and you'll nail it!";
            trophyEmoji = '🙂';
        } else if (percentage >= 50 && percentage < 60) {
            message = "Good effort! You're making progress.";
            trophyEmoji = '👍';
        } else if (percentage >= 60 && percentage < 70) {
            message = "Well done! You're above average.";
            trophyEmoji = '😊';
        } else if (percentage >= 70 && percentage < 90) {
            message = "Great job! You've got a solid understanding.";
            trophyEmoji = '🎉';
        } else {
            message = "Outstanding! You've mastered this topic!";
            trophyEmoji = '🏆';
        }
    
        const resultsBox = document.querySelector('.results-box');
        resultsBox.innerHTML = `
            <div class="trophy">${trophyEmoji}</div>
            <h2>Quiz Completed!</h2>
            <h3>${percentage.toFixed(0)}% Score</h3>
            <p>${message}</p>
            <p>You attempted ${currentQuiz.questions.length} questions and got ${score} correct.</p>
        `;
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