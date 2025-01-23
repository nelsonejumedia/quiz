document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons();
  
    const homeScreen = document.getElementById("home-screen");
    const quizScreen = document.getElementById("quiz-screen");
    const resultsScreen = document.getElementById("results-screen");
    const categoryButtons = document.querySelectorAll(".category-btn");
    const backBtn = document.querySelector(".back-btn");
    const closeButtons = document.querySelectorAll(".close-btn");
    const submitBtn = document.getElementById("submit-btn");
    const quizCategory = document.getElementById("quiz-category");
    const questionNumber = document.getElementById("question-number");
    const questionText = document.getElementById("question-text");
    const answerOptions = document.getElementById("answer-options");
    const scorePercentage = document.getElementById("score-percentage");
    const scoreDetails = document.getElementById("score-details");
  
    // Extra js for review
    // const resultsScreen = document.getElementById('results-screen');
    const reviewScreen = document.getElementById('review-screen');
    const questionList = document.getElementById('question-list');
    const explanationModal = document.getElementById('explanation-modal');
    const explanationText = document.getElementById('explanation-text');
    const closeBtn = document.querySelector('.close');
    const reviewBtn = document.getElementById('review-btn');
    const homeBtn = document.getElementById('home-btn');
    const scoreDisplay = document.getElementById('score-display');
  
    
  // sidebar

  const sidebar = document.getElementById('sidebar');
  const menuButton = document.getElementById('menu-button');
  const closeSidebarButton = document.getElementById('close-sidebar');
  
  function toggleSidebar() {
    sidebar.classList.toggle('open');
}

menuButton.addEventListener('click', toggleSidebar);
closeSidebarButton.addEventListener('click', toggleSidebar);
  
  
  
  
  
    let currentQuiz = null;
    let currentQuestionIndex = 0;
    let score = 0;
    let timer = null;
  
    // function playSound(isCorrect) {
    //   const correctSound = document.getElementById("correct-sound");
    //   const incorrectSound = document.getElementById("incorrect-sound");
    //   if (isCorrect) {
    //     correctSound.play();
    //   } else {
    //     incorrectSound.play();
    //   }
    // }
  
    // function checkAnswer(correctAnswer, selectedOption) {
    //   const isCorrect = correctAnswer === selectedOption;
    //   playSound(isCorrect);
    // }
  
    const quizzes = [
 

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////Embryology Category Starts/////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      {
        category: "Embryology",
        questions: [
          {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correctAnswer: "Mars",
            explanation: 'Mars is often called the Red Planet due to its reddish appearance in the night sky, caused by iron oxide (rust) on its surface nawa p.'
          },
          {
            question: "What is the chemical symbol for water?",
            options: ["Wa", "H2O", "Ho", "Hy"],
            correctAnswer: "H2O",
            explanation: 'H2O represents two hydrogen atoms and one oxygen atom bonded together to form a water molecule.'
          },
          {
            question: "What is the powerhouse of the cell?",
            options: [
              "Nucleus",
              "Mitochondria",
              "Endoplasmic Reticulum",
              "Golgi Apparatus",
            ],
            correctAnswer: "Mitochondria",
            explanation: 'Mitochondria are organelles that generate most of the cell\'s supply of adenosine triphosphate (ATP), used as a source of chemical energy.'
          },
        ],
      },
  

  
      // Add more categories here
    ];
  
  
    
  
    function showScreen(screen) {
      homeScreen.classList.add("hidden");
      quizScreen.classList.add("hidden");
      resultsScreen.classList.add("hidden");
      screen.classList.remove("hidden");
  
      // Reset animations
      screen
        .querySelectorAll(
          ".animate-fade-in, .animate-slide-up, .animate-scale-in, .animate-stagger-in > *"
        )
        .forEach((el) => {
          el.style.animation = "none";
          el.offsetHeight; // Trigger reflow
          el.style.animation = null;
        });
    }
  
    function startQuiz(category) {
      currentQuiz = quizzes.find((quiz) => quiz.category === category);
      if (!currentQuiz) {
        console.error("Quiz not found for the selected category");
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
      questionNumber.textContent = `Question: ${currentQuestionIndex + 1}/${
        currentQuiz.questions.length
      }`;
      questionText.textContent = question.question;
      answerOptions.innerHTML = "";
  
      question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("answer-btn");
        button.innerHTML = `
                  <span class="answer-letter">${String.fromCharCode(
                    65 + index
                  )}</span>
                  <span>${option}</span>
              `;
        button.addEventListener("click", () => selectAnswer(button));
        answerOptions.appendChild(button);
      });
    }
  
    function selectAnswer(selectedButton) {
      answerOptions.querySelectorAll(".answer-btn").forEach((btn) => {
        btn.classList.remove("selected");
      });
      selectedButton.classList.add("selected");
    }
  
    function startTimer() {
      let timeLeft = 30; // 3 minutes
      const timerElement = document.getElementById("timer");
  
      clearInterval(timer);
      timer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} sec`;
  
        if (timeLeft === 0) {
          clearInterval(timer);
          submitAnswer();
        }
        timeLeft--;
      }, 1000);
    }
  
    function submitAnswer() {
      clearInterval(timer);
      const selectedAnswer = answerOptions.querySelector(".selected");
      if (selectedAnswer) {
        const userAnswer = selectedAnswer
          .querySelector("span:last-child")
          .textContent.trim();
        if (
          userAnswer === currentQuiz.questions[currentQuestionIndex].correctAnswer
        ) {
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
  
      let message = "";
      let trophyEmoji = "";
  
      if (percentage < 40) {
        message = "Keep practicing! You'll improve with time.";
        trophyEmoji = "😢";
      } else if (percentage >= 40 && percentage < 50) {
        message =
          "You're on the right track. A bit more study and you'll nail it!";
        trophyEmoji = "🙂";
      } else if (percentage >= 50 && percentage < 60) {
        message = "Good effort! You're making progress.";
        trophyEmoji = "👍";
      } else if (percentage >= 60 && percentage < 70) {
        message = "Well done! You're above average.";
        trophyEmoji = "😊";
      } else if (percentage >= 70 && percentage < 90) {
        message = "Great job! You've got a solid understanding.";
        trophyEmoji = "🎉";
      } else {
        message = "Outstanding! You've mastered this topic!";
        trophyEmoji = "🏆";
      }
  
      const resultsBox = document.querySelector(".results-box");
      resultsBox.innerHTML = `
              <div class="trophy">${trophyEmoji}</div>
              <h2>Quiz Completed!</h2>
              <h3>${percentage.toFixed(0)}% Score</h3>
              <p>${message}</p>
              <p>You attempted ${
                currentQuiz.questions.length
              } questions and got ${score} correct.</p>
          `;
    }
  
    categoryButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const category = button.getAttribute("data-category");
        startQuiz(category);
      });
    });
  
    backBtn.addEventListener("click", () => showScreen(homeScreen));
    closeButtons.forEach((button) => {
      button.addEventListener("click", () => showScreen(homeScreen));
    });
    submitBtn.addEventListener("click", submitAnswer);
  
  
  
  
  
  
  
  
  
  
  /////Review section
  function showReviewScreen() {
    resultsScreen.classList.add('hidden');
    reviewScreen.classList.remove('hidden');
    homeBtn.classList.remove('hidden');
    displayQuestions();
  }
  
  function displayQuestions() {
    questionList.innerHTML = '';
    currentQuiz.questions.forEach((q, index) => {
        const questionBox = document.createElement('div');
        questionBox.classList.add('question-box');
        questionBox.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${q.question}</p>
            <!-- <p><strong>Options:</strong> ${q.options.join(', ')}</p>-->
            <p><strong>Correct Answer:</strong> ${q.correctAnswer}</p>
        `;
        questionBox.addEventListener('click', () => showExplanation(q.explanation));
        questionList.appendChild(questionBox);
    });
  }
  
  function showExplanation(explanation) {
    explanationText.textContent = explanation;
    explanationModal.classList.remove('hidden');
  }
  
  function hideExplanation() {
    explanationModal.classList.add('hidden');
  }
  
  function startReview(category) {
    const quiz = quizzes.find(q => q.category === category);
    if (quiz) {
        currentQuiz = quiz;
        score = Math.floor(Math.random() * (currentQuiz.questions.length + 1)); // Simulating a random score
        scoreDisplay.textContent = `You scored ${score} out of ${currentQuiz.questions.length}!`;
        resultsScreen.classList.remove('hidden');
    } else {
        console.error('Category not found');
    }
  }
  
  reviewBtn.addEventListener('click', showReviewScreen);
  closeBtn.addEventListener('click', hideExplanation);
  homeBtn.addEventListener('click', () => {
    reviewScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    homeBtn.classList.add('hidden');
  });
  
  // Simulating a completed quiz
  startReview();
  
  
  
  
  });
  
  
  
  
  