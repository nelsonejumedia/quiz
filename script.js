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
                question: 'Damage to the upper trunk of brachial plexus leads to:',
                options: ['Erb’s palsy', 'Klumpke’s palsy', 'Ape hand', 'Pointing finger'],
                correctAnswer: 'Erb’s palsy'
            },
            {
                question: 'The blood pressure in upper limb is measured by compressing which artery?',
                options: ['Axillary artery', 'Brachial artery', 'Ulnar artery', 'Subclavian artery'],
                correctAnswer: 'Brachial artery'
            },
            {
                question: 'Which of the following is not a branch of the lateral cord of brachial plexus?',
                options: ['Lateral pectoral nerve', 'Lateral root of median nerve', 'Ulnar nerve', 'Musculocutaneous nerve'],
                correctAnswer: 'Ulnar nerve'
            },
            {
                question: 'Which of the following is not found in the cubital fossa?',
                options: ['Brachial artery', 'Median nerve', 'Tendon of biceps brachii', 'Ulnar nerve'],
                correctAnswer: 'Ulnar nerve'
            },
            {
                question: 'Which of the following is a ball & socket joint?',
                options: ['Elbow joint', 'Shoulder joint', 'Radioulnar joint', 'Wrist joint'],
                correctAnswer: 'Shoulder joint'
            },
            {
                question: 'Which nerve is compressed in carpal tunnel syndrome?',
                options: ['Radial nerve', 'Median nerve', 'Ulnar nerve', 'Musculocutaneous nerve'],
                correctAnswer: 'Median nerve'
            },
            {
                question: 'Which of the following is a uniaxial joint?',
                options: ['Wrist joint', 'First carpometacarpal joint', 'Ankle joint', 'Middle tibiofibular joint'],
                correctAnswer: 'Ankle joint'
            },
            {
                question: 'Where are pseudounipolar neurons found?',
                options: ['Retina', 'Olfactory mucosa', 'Spinal cord', 'Spinal ganglion'],
                correctAnswer: 'Spinal cord'
            },
            {
                question: 'Which of the following does not contribute to the parasympathetic system?',
                options: ['Glossopharyngeal nerve', 'Facial nerve', 'Occulomotor nerve', 'Vestibulocochlear nerve'],
                correctAnswer: 'Vestibulocochlear nerve'
            },
            {
                question: 'Which of the following is an atavistic epiphysis?',
                options: ['Coracoid process', 'Trochanter of femur', 'Lower end of fibula', 'Greater tubercle of humerus'],
                correctAnswer: 'Coracoid process'
            },
            {
                question: 'Damage to the lower trunk leads to:',
                options: ['Porter’s tip hand', 'Claw hand', 'Ape hand', 'Mallet’s finger'],
                correctAnswer: 'Claw hand'
            },
            {
                question: 'The nerve supply of deltoid muscle is:',
                options: ['Axillary nerve', 'Radial nerve', 'Ulnar nerve', 'Long thoracic nerve'],
                correctAnswer: 'Axillary nerve'
            },
            {
                question: 'Which of the following is not a branch of the axillary artery?',
                options: ['Subscapular artery', 'Suprascapular artery', 'Superior thoracic artery', 'Lateral thoracic artery'],
                correctAnswer: 'Suprascapular artery'
            },
            {
                question: 'Which of the following is the action of brachioradialis?',
                options: ['Flexion at wrist joint', 'Flexion at elbow in midprone forearm', 'Extension of forearm', 'Extension at wrist joint'],
                correctAnswer: 'Flexion at elbow in midprone forearm'
            },
            {
                question: 'Which cell is responsible for myelination in the central nervous system?',
                options: ['Ependymal cell', 'Schwann cell', 'Microglial cell', 'Oligodendrocyte'],
                correctAnswer: 'Oligodendrocyte'
            },
            {
                question: 'The cell responsible for bone remodeling is:',
                options: ['Osteoblast', 'Osteoclast', 'Both a & b', 'Neither a nor b'],
                correctAnswer: 'Both a & b'
            },
            {
                question: 'Which of the following is not a secondary cartilaginous joint?',
                options: ['Sacrococcygeal joint', 'Pubic symphysis', 'Manubriosternal joint', 'First costochondral joint'],
                correctAnswer: 'First costochondral joint'
            },
            {
                question: 'Which of the following movements is not possible at the sternoclavicular joint?',
                options: ['Protraction', 'Flexion', 'Elevation', 'Retraction'],
                correctAnswer: 'Flexion'
            },
            {
                question: 'Which nerve is related to the shaft of the humerus?',
                options: ['Radial nerve', 'Median nerve', 'Axillary nerve', 'Ulnar nerve'],
                correctAnswer: 'Radial nerve'
            },
            {
                question: 'Which of the following is an example of fibrocartilage?',
                options: ['Costal cartilage', 'Cricoid cartilage', 'Base of arytenoids cartilage', 'Acetabular labrum'],
                correctAnswer: 'Acetabular labrum'
            },
            {
                question: 'Which of the following muscles is not paralyzed in injury to the radial nerve in the spiral groove?',
                options: ['Long head of triceps', 'Brachioradialis', 'Anconeus', 'Extensor carpi radialis longus'],
                correctAnswer: 'Long head of triceps'
            },
            {
                question: 'Which muscle is responsible for the winging of the scapula when paralyzed?',
                options: ['Pectoralis minor', 'Rhomboids', 'Serratus anterior', 'Teres major'],
                correctAnswer: 'Serratus anterior'
            },
            {
                question: 'Which of the following is not found in the rotator cuff?',
                options: ['Subscapularis', 'Teres minor', 'Teres major', 'Supraspinatus'],
                correctAnswer: 'Teres major'
            },
            {
                question: 'The content of the quadrangular space includes:',
                options: ['Radial nerve', 'Axillary nerve', 'Profunda brachii artery', 'Circumflex scapular artery'],
                correctAnswer: 'Axillary nerve'
            },
            {
                question: 'Which of the following lymph nodes drains the first web space of the hand?',
                options: ['Apical axillary lymph node', 'Anterior axillary lymph node', 'Lateral axillary lymph node', 'Central axillary lymph node'],
                correctAnswer: 'Apical axillary lymph node'
            },
            {
                question: 'Which of the following is known as the "musician\'s nerve"?',
                options: ['Median nerve', 'Ulnar nerve', 'Radial nerve', 'Axillary nerve'],
                correctAnswer: 'Ulnar nerve'
            },
            {
                question: 'Which of the following is a multipennate muscle?',
                options: ['Dorsal interossei', 'Flexor pollicis longus', 'Rectus femoris', 'Subscapularis'],
                correctAnswer: 'Subscapularis'
            },
            {
                question: 'Dupuytren’s contracture involves:',
                options: ['Contracture of flexor muscles', 'Shortening of palmar aponeurosis', 'Contracture of extensor tendons', 'Ischaemic contracture of forearm muscles'],
                correctAnswer: 'Shortening of palmar aponeurosis'
            },
            {
                question: 'Which of the following is the pressure epiphysis?',
                options: ['Greater tubercle of humerus', 'Coracoid process', 'Head of femur', 'Head of 1st metacarpal'],
                correctAnswer: 'Head of femur'
            },
            {
                question: 'The floor of the anatomical snuffbox is formed by:',
                options: ['Triquetral bone', 'Capitate bone', 'Scaphoid bone', 'Hammate bone'],
                correctAnswer: 'Scaphoid bone'
            },
            {
                question: 'Which of the following is the action of Flexor digitorum profundus?',
                options: ['Flexion at elbow joint', 'Flexion at distal interphalangeal joint', 'Pronation of forearm', 'Flexion at first carpometacarpal joint'],
                correctAnswer: 'Flexion at distal interphalangeal joint'
            },

{
                question: 'Which of the following is Flexor digitorum profundus? ',
                options: ['Flexion at elbow joint', 'Flexion at distal interphalangeal joint', 'Pronation of forearm', 'Flexion at first carpometacarpal joint'],
                correctAnswer: 'Flexion at distal interphalangeal joint'
            },
        ]
    },




 


//Thorax Category Starts 

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