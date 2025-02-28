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
  const overlay = document.getElementById('overlay');
  const content = document.querySelector('.content');

    function toggleSidebar() {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
        content.classList.toggle('blurred');
    }

    function closeSidebar() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        content.classList.remove('blurred');
    }

    menuButton.addEventListener('click', toggleSidebar);
    closeSidebarButton.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
  
  
  
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
    
  
   ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////Histology/////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
      {
        category: "Histology",
        questions: [
          {
            question: "What feature characterizes keratinized stratified squamous epithelium?",
            options: [
              "Mucus secretion",
              "Cilia on the surface",
              "A thick, protective layer of dead cells",
              "Goblet cells interspersed among surface cells",
            ],
            correctAnswer: "A thick, protective layer of dead cells",
            explanation: "Keratinized stratified squamous epithelium forms the epidermis, where the outer layer consists of dead cells filled with keratin, providing a tough barrier."
          },
          {
            question: "Which type of cell junctions are involved in communication between epithelial cells?",
            options: [
              "Tight junctions",
              "Desmosomes",
              "Gap junctions",
              "Hemidesmosomes",
            ],
            correctAnswer: "Gap junctions",
            explanation: "Gap junctions allow communication between epithelial cells by enabling the passage of ions and small molecules between them."
          },
          
          // Add more questions following this pattern
        ],
        
      },
  
  
  


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Cell And Its Organelles/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    {
      category: "Cell",
questions: [
  {
    question: "What is the primary function of the nucleus in a cell?",
    options: [
      "Protein synthesis",
      "Lipid storage",
      "Genetic material storage and regulation",
      "Detoxification of toxins"
    ],
    correctAnswer: "Genetic material storage and regulation",
    explanation: "The nucleus houses DNA and controls cellular activities by regulating gene expression."
  },
  {
    question: "Which organelle is known as the 'powerhouse of the cell'?",
    options: [
      "Nucleus",
      "Mitochondrion",
      "Golgi apparatus",
      "Lysosome"
    ],
    correctAnswer: "Mitochondrion",
    explanation: "Mitochondria generate ATP, the main energy source for cellular activities."
  },
  {
    question: "Which cellular structure is involved in protein synthesis?",
    options: [
      "Ribosomes",
      "Golgi apparatus",
      "Endoplasmic reticulum",
      "Lysosomes"
    ],
    correctAnswer: "Ribosomes",
    explanation: "Ribosomes facilitate the translation of mRNA to synthesize proteins."
  },
  {
    question: "What is the primary function of the rough endoplasmic reticulum?",
    options: [
      "Lipid synthesis",
      "Protein synthesis",
      "ATP production",
      "Digesting cellular waste"
    ],
    correctAnswer: "Protein synthesis",
    explanation: "The rough ER has ribosomes attached, which aid in synthesizing proteins for export."
  },
  {
    question: "Which organelle modifies, sorts, and packages proteins?",
    options: [
      "Nucleus",
      "Golgi apparatus",
      "Lysosome",
      "Peroxisome"
    ],
    correctAnswer: "Golgi apparatus",
    explanation: "The Golgi apparatus processes and packages proteins for secretion or use within the cell."
  },
  {
    question: "Which cellular component contains digestive enzymes?",
    options: [
      "Mitochondria",
      "Lysosomes",
      "Ribosomes",
      "Smooth ER"
    ],
    correctAnswer: "Lysosomes",
    explanation: "Lysosomes contain enzymes that break down waste materials and cellular debris."
  },
  {
    question: "What is the main function of peroxisomes in a cell?",
    options: [
      "Protein synthesis",
      "Lipid breakdown and detoxification",
      "Energy production",
      "DNA replication"
    ],
    correctAnswer: "Lipid breakdown and detoxification",
    explanation: "Peroxisomes help break down fatty acids and detoxify harmful substances."
  },
  {
    question: "Where does cellular respiration primarily occur?",
    options: [
      "Cytoplasm",
      "Nucleus",
      "Mitochondria",
      "Endoplasmic reticulum"
    ],
    correctAnswer: "Mitochondria",
    explanation: "Mitochondria are the main site for ATP production through cellular respiration."
  },
  {
    question: "What structure serves as the boundary of the cell, regulating entry and exit of substances?",
    options: [
      "Cell wall",
      "Nucleus",
      "Cell membrane",
      "Mitochondrial membrane"
    ],
    correctAnswer: "Cell membrane",
    explanation: "The cell membrane is selectively permeable, controlling the passage of materials."
  },
  {
    question: "Which organelle is primarily involved in lipid synthesis?",
    options: [
      "Rough ER",
      "Golgi apparatus",
      "Smooth ER",
      "Lysosome"
    ],
    correctAnswer: "Smooth ER",
    explanation: "The smooth ER is involved in lipid and steroid synthesis, as well as detoxification."
  },
  {
    question: "Which structure is responsible for organizing the spindle fibers during cell division?",
    options: [
      "Nucleus",
      "Cytoskeleton",
      "Centrosome",
      "Ribosomes"
    ],
    correctAnswer: "Centrosome",
    explanation: "The centrosome organizes microtubules and helps in chromosome separation during mitosis."
  },
  {
    question: "Which cell component is a network that provides structural support to the cell?",
    options: [
      "Lysosome",
      "Golgi apparatus",
      "Cytoskeleton",
      "Nucleolus"
    ],
    correctAnswer: "Cytoskeleton",
    explanation: "The cytoskeleton maintains cell shape and aids in movement and intracellular transport."
  },
  {
    question: "What is the function of the nucleolus within the nucleus?",
    options: [
      "DNA replication",
      "Ribosomal RNA synthesis",
      "Protein synthesis",
      "Detoxification"
    ],
    correctAnswer: "Ribosomal RNA synthesis",
    explanation: "The nucleolus produces rRNA, which is essential for ribosome assembly."
  },
  {
    question: "Where are ribosomes primarily assembled?",
    options: [
      "In the nucleus",
      "In the cytoplasm",
      "In the nucleolus",
      "In the Golgi apparatus"
    ],
    correctAnswer: "In the nucleolus",
    explanation: "The nucleolus is the site where ribosomal subunits are assembled from rRNA and proteins."
  },
  {
    question: "What function does the cell wall serve in plant cells?",
    options: [
      "Energy storage",
      "Selective permeability",
      "Protection and structural support",
      "Protein synthesis"
    ],
    correctAnswer: "Protection and structural support",
    explanation: "The cell wall provides rigidity and protection, especially in plants and some algae."
  },
  {
    question: "What is the function of the cytoplasm?",
    options: [
      "To store genetic material",
      "To facilitate cell movement",
      "To serve as the site for biochemical reactions",
      "To package proteins"
    ],
    correctAnswer: "To serve as the site for biochemical reactions",
    explanation: "The cytoplasm is where most cellular reactions occur, including glycolysis and protein synthesis."
  },
  {
    question: "Which cell organelle contains chlorophyll?",
    options: [
      "Mitochondria",
      "Chloroplast",
      "Nucleus",
      "Ribosome"
    ],
    correctAnswer: "Chloroplast",
    explanation: "Chloroplasts contain chlorophyll and are involved in photosynthesis in plant cells."
  },
  {
    question: "What is the main role of vacuoles in plant cells?",
    options: [
      "Photosynthesis",
      "Storage of nutrients and waste",
      "Protein synthesis",
      "Energy production"
    ],
    correctAnswer: "Storage of nutrients and waste",
    explanation: "Vacuoles store water, nutrients, and waste, maintaining cell turgor pressure in plants."
  },
  {
    question: "Which component is referred to as the 'control center' of the cell?",
    options: [
      "Ribosome",
      "Mitochondrion",
      "Nucleus",
      "Endoplasmic reticulum"
    ],
    correctAnswer: "Nucleus",
    explanation: "The nucleus contains genetic information and regulates cell function by controlling gene expression."
  },
  {
    question: "What is the role of the cell membrane's phospholipid bilayer?",
    options: [
      "DNA synthesis",
      "Enzyme production",
      "Selective transport",
      "ATP production"
    ],
    correctAnswer: "Selective transport",
    explanation: "The phospholipid bilayer acts as a selective barrier, allowing certain molecules to pass through."
  },
  

  {
    question: "Which cellular organelle is primarily responsible for the synthesis of ATP?",
    options: [
      "Golgi apparatus",
      "Nucleus",
      "Mitochondrion",
      "Endoplasmic reticulum"
    ],
    correctAnswer: "Mitochondrion",
    explanation: "The mitochondrion generates ATP, which powers most cellular processes."
  },
  {
    question: "What is the function of ribosomes on the rough ER?",
    options: [
      "Lipid synthesis",
      "Protein synthesis",
      "Storage of genetic information",
      "Energy production"
    ],
    correctAnswer: "Protein synthesis",
    explanation: "Ribosomes on the rough ER translate mRNA into proteins for secretion or cell membrane insertion."
  },
  {
    question: "Which component of the cell provides structural support and helps with cell movement?",
    options: [
      "Cytoskeleton",
      "Mitochondrion",
      "Nucleus",
      "Golgi apparatus"
    ],
    correctAnswer: "Cytoskeleton",
    explanation: "The cytoskeleton, composed of microtubules, microfilaments, and intermediate filaments, supports cell shape and aids in movement."
  },
  {
    question: "Where are lysosomal enzymes synthesized?",
    options: [
      "Mitochondria",
      "Rough ER",
      "Smooth ER",
      "Nucleus"
    ],
    correctAnswer: "Rough ER",
    explanation: "Lysosomal enzymes are synthesized in the rough ER and processed in the Golgi apparatus."
  },
  {
    question: "Which part of the cell is responsible for modifying and packaging proteins?",
    options: [
      "Rough ER",
      "Golgi apparatus",
      "Smooth ER",
      "Lysosomes"
    ],
    correctAnswer: "Golgi apparatus",
    explanation: "The Golgi apparatus modifies, sorts, and packages proteins for their specific destinations."
  },
  {
    question: "What is the primary function of the smooth endoplasmic reticulum in liver cells?",
    options: [
      "Protein synthesis",
      "Detoxification",
      "ATP production",
      "DNA replication"
    ],
    correctAnswer: "Detoxification",
    explanation: "In liver cells, the smooth ER detoxifies various metabolites and drugs."
  },
  {
    question: "What role does the cell membrane play?",
    options: [
      "Stores genetic material",
      "Controls the movement of substances in and out",
      "Synthesizes proteins",
      "Digests cellular waste"
    ],
    correctAnswer: "Controls the movement of substances in and out",
    explanation: "The cell membrane is selectively permeable and controls the passage of materials."
  },
  {
    question: "Which organelle has its own DNA and ribosomes?",
    options: [
      "Nucleus",
      "Mitochondrion",
      "Golgi apparatus",
      "Lysosome"
    ],
    correctAnswer: "Mitochondrion",
    explanation: "Mitochondria contain their own DNA and ribosomes, enabling some independent functions."
  },
  {
    question: "What function do vesicles primarily serve in the cell?",
    options: [
      "To store energy",
      "To transport molecules",
      "To synthesize proteins",
      "To generate ATP"
    ],
    correctAnswer: "To transport molecules",
    explanation: "Vesicles transport molecules between organelles and to the cell membrane for secretion."
  },
  {
    question: "What is the main function of the nucleolus?",
    options: [
      "Synthesizing lipids",
      "Producing ribosomal RNA",
      "Storing DNA",
      "Digesting cellular waste"
    ],
    correctAnswer: "Producing ribosomal RNA",
    explanation: "The nucleolus is responsible for rRNA synthesis and ribosome assembly."
  },
  {
    question: "Where are phospholipids primarily synthesized?",
    options: [
      "Rough ER",
      "Smooth ER",
      "Nucleus",
      "Lysosome"
    ],
    correctAnswer: "Smooth ER",
    explanation: "The smooth ER synthesizes lipids, including phospholipids for membranes."
  },
  {
    question: "Which organelle is most directly involved in cellular digestion?",
    options: [
      "Nucleus",
      "Lysosome",
      "Peroxisome",
      "Mitochondrion"
    ],
    correctAnswer: "Lysosome",
    explanation: "Lysosomes contain enzymes that break down waste materials and cellular debris."
  },
  {
    question: "What structure serves as the cytoskeleton's primary component?",
    options: [
      "Golgi apparatus",
      "Microtubules",
      "Smooth ER",
      "Rough ER"
    ],
    correctAnswer: "Microtubules",
    explanation: "Microtubules are key components of the cytoskeleton, providing support and enabling intracellular transport."
  },
  {
    question: "What is the function of cilia on cell surfaces?",
    options: [
      "Detoxify drugs",
      "Move materials along cell surfaces",
      "Generate ATP",
      "Store energy"
    ],
    correctAnswer: "Move materials along cell surfaces",
    explanation: "Cilia beat in a coordinated fashion to move substances across cell surfaces."
  },
  {
    question: "Which cell structure is involved in forming the mitotic spindle?",
    options: [
      "Ribosomes",
      "Mitochondria",
      "Centrosomes",
      "Smooth ER"
    ],
    correctAnswer: "Centrosomes",
    explanation: "Centrosomes organize microtubules and form the spindle during cell division."
  },
  {
    question: "What function does the nuclear envelope serve?",
    options: [
      "Produces energy",
      "Controls entry and exit of materials",
      "Synthesizes lipids",
      "Breaks down waste"
    ],
    correctAnswer: "Controls entry and exit of materials",
    explanation: "The nuclear envelope surrounds the nucleus, regulating passage of substances."
  },
  {
    question: "Which structure is continuous with the nuclear envelope?",
    options: [
      "Golgi apparatus",
      "Smooth ER",
      "Rough ER",
      "Lysosome"
    ],
    correctAnswer: "Rough ER",
    explanation: "The rough ER is connected to the nuclear envelope, allowing direct transfer of materials."
  },
  {
    question: "What is the primary function of the extracellular matrix?",
    options: [
      "To produce ATP",
      "To maintain cellular hydration",
      "To provide structural support",
      "To synthesize proteins"
    ],
    correctAnswer: "To provide structural support",
    explanation: "The extracellular matrix provides structural and biochemical support to surrounding cells."
  },
  {
    question: "What is the main function of microvilli?",
    options: [
      "To aid in cell movement",
      "To increase surface area for absorption",
      "To synthesize proteins",
      "To produce ATP"
    ],
    correctAnswer: "To increase surface area for absorption",
    explanation: "Microvilli increase the cell surface area, enhancing absorption efficiency."
  },
  {
    question: "Where in the cell does transcription take place?",
    options: [
      "Nucleus",
      "Cytoplasm",
      "Ribosome",
      "Mitochondria"
    ],
    correctAnswer: "Nucleus",
    explanation: "Transcription of DNA to mRNA occurs in the nucleus."
  },

      
      ],
      
    },






  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////Epithelial Tissues/////////////////////////////////////////////////////
  //////////











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
  
    let userHasSelected = false;

function displayQuestion() {
  const question = currentQuiz.questions[currentQuestionIndex];
  questionNumber.textContent = `Question: ${currentQuestionIndex + 1}/${currentQuiz.questions.length}`;
  questionText.textContent = question.question;
  answerOptions.innerHTML = "";
  userHasSelected = false;

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("answer-btn");
    button.innerHTML = `
      <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
      <span>${option}</span>
    `;
    button.addEventListener("click", () => selectAnswer(button, option));
    answerOptions.appendChild(button);
  });
}



function selectAnswer(selectedButton, selectedOption) {
  if (userHasSelected) return;
  userHasSelected = true;

  answerOptions.querySelectorAll(".answer-btn").forEach((btn) => {
    btn.classList.remove("selected");
  });
  selectedButton.classList.add("selected");


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


  setTimeout(() => {
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer;

    answerOptions.querySelectorAll(".answer-btn").forEach((btn) => {
      const btnOption = btn.querySelector("span:last-child").textContent;
      if (btnOption === correctAnswer) {
        btn.classList.add("correct");
      }
    });

    if (selectedOption === correctAnswer) {
      selectedButton.classList.add("correct");
      score++;
    } else {
      selectedButton.classList.add("incorrect");
    }

    setTimeout(() => {
      submitAnswer();
    }, 2250);
  }, 250);
}

function submitAnswer() {
  clearInterval(timer);
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
    submitBtn.addEventListener("click", () => {
  if (!userHasSelected) {
    const selectedButton = answerOptions.querySelector(".selected");
    if (selectedButton) {
      const selectedOption = selectedButton.querySelector("span:last-child").textContent;
      selectAnswer(selectedButton, selectedOption);
    }
  }
});

  
  
  
  
 
  
  
  
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
  
  
  

  
  
 