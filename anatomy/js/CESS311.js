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
  
  
    const quizzes = [
   
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// General Questions////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
     {
    category: "Chapter 1A",
    questions: [
      {
        question: "According to the chapter, entrepreneurship is defined as the art of turning an idea into a business without regard to what?",
        options: [
          "Initial resources",
          "Market demand",
          "Government policy",
          "Competitor strategy"
        ],
        correctAnswer: "Initial resources",
        explanation: "The Introduction states entrepreneurship 'is the art of turning an idea into a business without regard to initial resources.'"
      },
      {
        question: "Which of the following is NOT listed among the six functions of an entrepreneur?",
        options: [
          "Perception and identification of business opportunities",
          "Selection of the legal form, location and site of the business",
          "Setting national interest rates",
          "Risk bearing"
        ],
        correctAnswer: "Setting national interest rates",
        explanation: "The six functions listed are perception/identification of opportunities, selection of legal form/location/site, identification/selection/acquisition of resources, innovative and strategic planning, risk bearing, and management of ongoing enterprises."
      },
      {
        question: "An entrepreneur's ability to have a clear idea in order for the company to develop to its greatest potential is best described by which characteristic?",
        options: [
          "Vision",
          "Goals",
          "Objectives",
          "Motivation"
        ],
        correctAnswer: "Vision",
        explanation: "Vision is defined as an entrepreneur needing a clear vision for the company to develop to its greatest potential."
      },
      {
        question: "Entrepreneurs described as 'doers, achievers as well as goal and action oriented,' with the ability to set realistic and measurable targets, best fits under which characteristic?",
        options: [
          "Goals",
          "Vision",
          "Drive and energy",
          "Self-confidence and control"
        ],
        correctAnswer: "Goals",
        explanation: "The 'Goals' characteristic describes entrepreneurs with the ability and commitment to set realistic, measurable, attainable goals, and calls them doers and achievers."
      },
      {
        question: "Which characteristic describes entrepreneurs who believe in self-determination, rely on their personal destinies, and have little belief based in fate?",
        options: [
          "Self-confidence and control",
          "Mindful of uncertainty",
          "Desire to achieve",
          "Mental ability and creativity"
        ],
        correctAnswer: "Self-confidence and control",
        explanation: "This is drawn directly from the description of 'Self-confidence and control' in the Characteristics of an Entrepreneur section."
      },
      {
        question: "According to the text, successful entrepreneurs are inventive in their abilities to spot and seize chances mainly due to which characteristic?",
        options: [
          "Mental ability and creativity",
          "Effective communication skills",
          "Time management skills",
          "Wealth creation skills"
        ],
        correctAnswer: "Mental ability and creativity",
        explanation: "The text states entrepreneurs 'should be inventive, forecast developments, analyze possible challenges and decide choices' under Mental ability and creativity."
      },
      {
        question: "Which skill enables an entrepreneur to view the company as an entire whole made up of interrelated, dependent functions and activities?",
        options: [
          "Conceptual skills",
          "Technical skills",
          "Humane skills",
          "Family background"
        ],
        correctAnswer: "Conceptual skills",
        explanation: "Conceptual skills help an entrepreneur see the company as a whole, e.g. in goal-setting, planning, and decision-making, since a change in one unit affects others."
      },
      {
        question: "The ability to perform daily tasks using specialized knowledge, methods, processes, and techniques (e.g. mentoring, planning, environment monitoring) describes which skill?",
        options: [
          "Technical skills",
          "Conceptual skills",
          "Humane skills",
          "Time management skills"
        ],
        correctAnswer: "Technical skills",
        explanation: "Technical skills are defined as competence and proficiency in the industry, including specialized knowledge of methods, processes, procedures and techniques."
      },
      {
        question: "Which characteristic reflects an entrepreneur's high tolerance for the ever-changing business environment and the use of new, sometimes conflicting, information from unfamiliar sources?",
        options: [
          "Mindful of uncertainty",
          "Manage failures",
          "Undertake risk",
          "Problem solving"
        ],
        correctAnswer: "Mindful of uncertainty",
        explanation: "The text says business builders 'constantly make decisions using new, and sometimes conflicting information gleaned from a variety of unfamiliar sources' under 'Mindful of uncertainty.'"
      },
      {
        question: "In the Entrepreneurship Practice section, the process by which entrepreneurs convert their ideas into workable strategies through thorough business plans is called?",
        options: [
          "Business planning",
          "Market Analysis",
          "Operations and execution",
          "Team building and leadership"
        ],
        correctAnswer: "Business planning",
        explanation: "Business planning is defined as the process of converting ideas into workable strategies through creating thorough business plans covering vision, goals, target market and operational frameworks."
      },
      {
        question: "According to the chapter, what specifically distinguishes entrepreneurs from regular businesspeople who merely carry out organising, coordinating, and planning?",
        options: [
          "Their ability to generate purchasers or clients",
          "Their academic qualifications",
          "Their government connections",
          "Their age"
        ],
        correctAnswer: "Their ability to generate purchasers or clients",
        explanation: "The chapter states entrepreneurs 'can generate purchasers or clients. This distinguishes entrepreneurs from regular businesspeople who merely carry out typical management tasks.'"
      },
      {
        question: "Which function of entrepreneurs in the development of new markets involves combining land, labour, and money to produce goods and services?",
        options: [
          "Mobilize Capital Resources",
          "Discover new sources of materials",
          "Introduce New Technologies, Industries and Products",
          "Market Analysis"
        ],
        correctAnswer: "Mobilize Capital Resources",
        explanation: "Entrepreneurs are 'responsible for organising and coordinating the main production elements, including land, labour, and money' under Mobilize Capital Resources."
      },
      {
        question: "The statement that entrepreneurs 'never settle for conventional or already-existing sources of resources' describes which function in the development of new markets?",
        options: [
          "Discover new sources of materials",
          "Mobilize Capital Resources",
          "Introduce New Technologies, Industries and Products",
          "Adaptation and iteration"
        ],
        correctAnswer: "Discover new sources of materials",
        explanation: "This is a direct paraphrase of the 'Discover new sources of materials' section."
      },
      {
        question: "According to the chapter, what is a layperson's definition of 'capital resources,' as distinct from the economics definition (tools, structures, tangible productive resources)?",
        options: [
          "Money",
          "Land",
          "Labour",
          "Time"
        ],
        correctAnswer: "Money",
        explanation: "The text states, 'A layperson's definition of capital resources is money,' contrasting it with the economics definition."
      },
      {
        question: "Which characteristic is described as entrepreneurs possessing 'an intense level of determination and desire to overcome hurdles, solve a problem and complete task' in building a successful enterprise?",
        options: [
          "Problem solving",
          "Manage failures",
          "Taking Responsibility",
          "Undertake risk"
        ],
        correctAnswer: "Problem solving",
        explanation: "This phrase appears verbatim under the 'Problem solving' characteristic."
      },
      {
        question: "Effective communication skills and feedback are used by entrepreneurs primarily for what purpose, according to the chapter?",
        options: [
          "To assess and take stock of their performance in order to improve",
          "To reduce staff salaries",
          "To avoid customer contact",
          "To delay decision-making"
        ],
        correctAnswer: "To assess and take stock of their performance in order to improve",
        explanation: "The text states entrepreneurs 'use effective feedback approach to assess/take stock of their performance with the aim of improving on it.'"
      },
      {
        question: "Which trait describes entrepreneurs who 'are not afraid of failure because failing is an opportunity to learn and improve'?",
        options: [
          "Manage failures",
          "Undertake risk",
          "Problem solving",
          "Mindful of uncertainty"
        ],
        correctAnswer: "Manage failures",
        explanation: "This is the definition given for the 'Manage failures' characteristic of an entrepreneur."
      }
    ],
  },
  {
    category: "Chapter 1B",
    questions: [
      {
        question: "According to Clarence Danhof's classification, which type of entrepreneur 'puts knowledge together, synthesizes it, and develops novel production components'?",
        options: [
          "Innovative",
          "Imitative/Adoptive",
          "Fabian",
          "Drone"
        ],
        correctAnswer: "Innovative",
        explanation: "The Innovative entrepreneur is described as one who synthesizes knowledge and develops novel production components, introducing new concepts, technology and markets."
      },
      {
        question: "Which Danhof classification describes entrepreneurs who are 'reserved and shy,' only copying inventions when convinced that failing to do so may harm the firm?",
        options: [
          "Fabian",
          "Drone",
          "Innovative",
          "Imitative/Adoptive"
        ],
        correctAnswer: "Fabian",
        explanation: "The Fabian businessman is defined as reserved, shy, and skeptical, adopting new technology only when the alternative is business loss or collapse."
      },
      {
        question: "Entrepreneurs described as 'laggards' who refuse to accept manufacturing modifications even at the risk of lower profits belong to which Danhof category?",
        options: [
          "Drone",
          "Fabian",
          "Imitative/Adoptive",
          "Innovative"
        ],
        correctAnswer: "Drone",
        explanation: "The Drone entrepreneur is described as conservative, resistant to change, and a laggard who rejects modifications to their conventional business systems."
      },
      {
        question: "Which Danhof type of entrepreneur models their business setup on the principles of already-established business owners rather than creating original concepts?",
        options: [
          "Imitative/Adoptive",
          "Innovative",
          "Fabian",
          "Drone"
        ],
        correctAnswer: "Imitative/Adoptive",
        explanation: "The Imitative/Adoptive entrepreneur only adopts successful innovations already introduced by others, copying tools and strategies rather than originating them."
      },
      {
        question: "Clarence Danhof's classification of entrepreneurs was based primarily on his study of what?",
        options: [
          "American agriculture",
          "Nigerian trade routes",
          "European industrialization",
          "Asian manufacturing"
        ],
        correctAnswer: "American agriculture",
        explanation: "The chapter states Danhof's classification 'was based on Danhof's study of American agriculture.'"
      },
      {
        question: "Under Arthur H. Cole's classification, which type of businessperson 'rarely makes any innovative changes and adheres to the rule of thumb'?",
        options: [
          "Empirical",
          "Rational",
          "Cognitive",
          "Fabian"
        ],
        correctAnswer: "Empirical",
        explanation: "This is the exact definition given for the 'Empirical' businessperson under Cole's classification."
      },
      {
        question: "According to Arthur H. Cole, both Rational and Cognitive businesspeople offer changes that appear more dramatic for what reason?",
        options: [
          "They are well-informed about the state of the economy as a whole",
          "They have access to more capital",
          "They avoid risk entirely",
          "They copy competitors closely"
        ],
        correctAnswer: "They are well-informed about the state of the economy as a whole",
        explanation: "Both Rational and Cognitive businesspeople are described identically as offering more dramatic changes because they are well-informed about the state of the economy as a whole."
      },
      {
        question: "Under the classification on the basis of ownership, which type of entrepreneur is driven mainly by profit and will not venture into industries with low likelihood of financial benefit?",
        options: [
          "Private",
          "Public",
          "Empirical",
          "Rational"
        ],
        correctAnswer: "Private",
        explanation: "The 'Private' entrepreneur classification states profit is what drives them, so they avoid low-profit-likelihood industries."
      },
      {
        question: "According to the classification based on scale of enterprise, which type of business owners 'lack the abilities, finances, and expertise required to launch massive production' and bring about new technical advancements?",
        options: [
          "Small scale",
          "Large scale",
          "Active Partners",
          "Solo Operators"
        ],
        correctAnswer: "Small scale",
        explanation: "This is the exact description of small-scale business owners, especially common in developing nations, according to the chapter."
      },
      {
        question: "The Naidu and Rao Classification comprehensively classifies entrepreneurs on how many parameters, as shown in Figure 1.1?",
        options: [
          "Four",
          "Three",
          "Five",
          "Six"
        ],
        correctAnswer: "Four",
        explanation: "Figure 1.1 shows four parameters: Socio-Cultural Classification, Entrepreneurial Experience Classification, Motivational Classification, and Technical Experience Classification."
      },
      {
        question: "According to the economic theory of entrepreneurship, entrepreneurs are stimulated by economic incentives such as taxation laws, industrial policies, and the availability of what?",
        options: [
          "Infrastructure and market information",
          "Foreign aid grants",
          "Free university tuition",
          "Military support"
        ],
        correctAnswer: "Infrastructure and market information",
        explanation: "The economic theory cites 'availability of infrastructure potential recognition for investment, marketing opportunity, and excellent information on the status of the market' as key stimulants."
      },
      {
        question: "Psychological entrepreneurship theory identifies which three characteristics as crucial for every entrepreneur's success and well-rounded accomplishment?",
        options: [
          "Identified characteristics, control, and desire for success",
          "Capital, labour, and land",
          "Vision, mission, and strategy",
          "Age, gender, and education level"
        ],
        correctAnswer: "Identified characteristics, control, and desire for success",
        explanation: "The theory 'identified characteristics, control, and desire for success as three key psychological characteristics' crucial for entrepreneurial success."
      },
      {
        question: "According to sociological entrepreneurship theory, whose 1991 work argued that social networks, interpersonal connections, and alliances that foster trust help propel business prospects?",
        options: [
          "Reynolds",
          "McClelland",
          "Peter Drucker",
          "Aigbefue"
        ],
        correctAnswer: "Reynolds",
        explanation: "The chapter attributes this view to Reynolds (1991) under Sociological entrepreneurship theory."
      },
      {
        question: "The anthropology entrepreneurship theory is entirely based on the study of a society's history, evolution, traditions, and what else?",
        options: [
          "Beliefs",
          "Currency",
          "Military strength",
          "Political parties"
        ],
        correctAnswer: "Beliefs",
        explanation: "Anthropology theory is 'entirely based on the study of a society, including its history, evolution, traditions, and beliefs.'"
      },
      {
        question: "The Opportunity-Based theory of entrepreneurship has its roots in whose concept that businesspeople take advantage of opportunities impacting many aspects of life?",
        options: [
          "Peter Drucker",
          "McClelland",
          "Reynolds",
          "Aigbefue"
        ],
        correctAnswer: "Peter Drucker",
        explanation: "The chapter states, 'This notion has its roots in Peter Drucker's concept, that businesspeople take advantage of opportunities.'"
      },
      {
        question: "Resource-based entrepreneurship theory places strong emphasis on acquiring which three types of capital essential for beginning and expanding a firm?",
        options: [
          "Financial capital, human capital, and social capital",
          "Political capital, cultural capital, and land capital",
          "Digital capital, brand capital, and legal capital",
          "Foreign capital, domestic capital, and family capital"
        ],
        correctAnswer: "Financial capital, human capital, and social capital",
        explanation: "The theory 'places strong emphasis on the significance of acquiring resources, such as financial capital, human capital, and social capital.'"
      },
      {
        question: "According to the chapter, who created the 'thirst for accomplishment' concept in 1961, showing that business owners always want to flourish and complete tasks quickly?",
        options: [
          "McClelland",
          "Reynolds",
          "Peter Drucker",
          "Aigbefue"
        ],
        correctAnswer: "McClelland",
        explanation: "The text states, 'McClelland in 1961 created the thirst for accomplishment,' linked to locus of control traits under Psychological entrepreneurship theory."
      }
    ],
  },
  {
    category: "Chapter 1C",
    questions: [
      {
        question: "According to the chapter, entrepreneurial education promotes competitiveness, employment, and social/economic growth while breaking through the barriers of gender, class, race, sexual orientation, and what other factor?",
        options: [
          "Age",
          "Religion",
          "Nationality",
          "Marital status"
        ],
        correctAnswer: "Age",
        explanation: "The chapter lists 'gender, class, race, sexual orientation, and age' as barriers that entrepreneurial education breaks through."
      },
      {
        question: "Which of the following is listed as necessary to support entrepreneurship, according to the chapter?",
        options: [
          "A system of information exchange between managers and entrepreneurs",
          "Elimination of all business risk",
          "Guaranteed government subsidies for every business",
          "A mandatory retirement age for entrepreneurs"
        ],
        correctAnswer: "A system of information exchange between managers and entrepreneurs",
        explanation: "The four listed necessities include explicit goals, an information exchange system between managers and entrepreneurs, emphasis on responsibility/accountability, and rewards for creative effort."
      },
      {
        question: "According to Figure 1.2, which factor is described as the most important in determining the growth outcome of an enterprise?",
        options: [
          "Psychological or motivational factors",
          "Competitive Advantage alone",
          "Managerial Skills alone",
          "Views of Significant Others"
        ],
        correctAnswer: "Psychological or motivational factors",
        explanation: "The text states, 'The most important factor is psychological or motivational factors (strong commitment by the entrepreneur/management team to grow the business).'"
      },
      {
        question: "In Figure 1.2, 'Growth Intention' leads to 'Growth Outcome' when combined with which two other factors?",
        options: [
          "Competitive Advantage and Managerial Skills",
          "Attitudes and Perceived Feasibility",
          "Views of Significant Others and Perceived Feasibility",
          "Policy and Finance"
        ],
        correctAnswer: "Competitive Advantage and Managerial Skills",
        explanation: "In the diagram, Growth Intention, Competitive Advantage, and Managerial Skills all feed into Growth Outcome."
      },
      {
        question: "Which of the following is NOT listed as a major factor for enterprise failure in the chapter?",
        options: [
          "Excessive employee benefits",
          "Inadequate record keeping",
          "Under-pricing",
          "Weak financial control"
        ],
        correctAnswer: "Excessive employee benefits",
        explanation: "The ten listed factors include inability to adapt, lack of managerial skills, inadequate record keeping, lack of focus, under-pricing, underestimating competition, poor marketing, weak financial control, lack of innovation, and inadequate liquidity — not employee benefits."
      },
      {
        question: "According to Table 1.1, which of the following is a firm-related element (rather than an entrepreneur-related element) influencing growth in small enterprise?",
        options: [
          "Legal form",
          "Motivation",
          "Prior business failure",
          "Functional skills"
        ],
        correctAnswer: "Legal form",
        explanation: "Table 1.1 lists Legal form under 'Firm,' while Motivation, Prior business failure, and Functional skills are listed under 'Entrepreneur.'"
      },
      {
        question: "Barriers to entrepreneurial growth are grouped into which two broad categories in Figure 1.3?",
        options: [
          "External and Internal",
          "Financial and Non-financial",
          "Local and Global",
          "Human and Technical"
        ],
        correctAnswer: "External and Internal",
        explanation: "Figure 1.3 titles the two barrier groups 'External Barriers' and 'Internal Barriers.'"
      },
      {
        question: "Which of the following is classified as an External Barrier to entrepreneurial growth in Figure 1.3?",
        options: [
          "Government policy",
          "Funding",
          "Shortage of Orders",
          "Management Capability"
        ],
        correctAnswer: "Government policy",
        explanation: "External Barriers include Labour Market Conditions, Market Structure/Competition, Government policy, Economic Climate, Legislation, and Access to Markets."
      },
      {
        question: "Which of the following is classified as an Internal Barrier to entrepreneurial growth in Figure 1.3?",
        options: [
          "Funding",
          "Access to Markets",
          "Labour Market Conditions",
          "Legislation"
        ],
        correctAnswer: "Funding",
        explanation: "Internal Barriers include Psychological/Motivational Factors, Management Capability, Funding, Shortage of Orders, Sales/marketing Capacity, and Poor Product/Services."
      },
      {
        question: "According to Figure 1.4, which three key skill-sets are required to overcome barriers to entrepreneurial growth?",
        options: [
          "Technical Skills, Managerial Skills, and Entrepreneurship Skills",
          "Financial Skills, Legal Skills, and Marketing Skills",
          "Communication, Leadership, and Networking Skills",
          "Innovation, Risk-taking, and Planning Skills"
        ],
        correctAnswer: "Technical Skills, Managerial Skills, and Entrepreneurship Skills",
        explanation: "Figure 1.4 is a Venn diagram of Entrepreneurship Skills, Technical Skills, and Management Skills."
      },
      {
        question: "In Figure 1.4, 'Inner Discipline,' 'Ability to take risk,' and 'Persistence' are listed under which skill-set category?",
        options: [
          "Entrepreneurship Skills",
          "Technical Skills",
          "Management Skills",
          "Conceptual Skills"
        ],
        correctAnswer: "Entrepreneurship Skills",
        explanation: "These traits, along with Innovative and Change-Orientated, appear under 'Entrepreneurship Skills' in Figure 1.4."
      },
      {
        question: "According to the chapter, government engagement in entrepreneurship development in Nigeria gained prominence immediately after which event?",
        options: [
          "The Nigerian civil war (1967–1970)",
          "Nigeria's independence in 1960",
          "The introduction of SAP in 1986",
          "The oil boom of the 1970s"
        ],
        correctAnswer: "The Nigerian civil war (1967–1970)",
        explanation: "The chapter states government engagement 'gained prominence immediately after Nigerian civil war (1967–1970).'"
      },
      {
        question: "Which Nigerian ethnic group is described as having honed entrepreneurial skills specifically in 'inventory control, management, and distribution through purchasing and selling items'?",
        options: [
          "Ibo",
          "Hausa",
          "Yoruba",
          "Benin"
        ],
        correctAnswer: "Ibo",
        explanation: "The chapter states, 'The Ibos honed their entrepreneurial skills in inventory control, management, and distribution through purchasing and selling items.'"
      },
      {
        question: "The Structural Adjustment Programme (SAP), which expanded government support for entrepreneurial growth in Nigeria, was introduced in what year?",
        options: [
          "1986",
          "1970",
          "1999",
          "1960"
        ],
        correctAnswer: "1986",
        explanation: "The chapter states government support 'has expanded since the middle of the 1980s, notably after the Structural Adjustment Programme (SAP) was introduced in 1986.'"
      },
      {
        question: "Which of the following was NOT mentioned in the chapter as an agency established to enhance entrepreneurship development in Nigeria?",
        options: [
          "Central Bank Entrepreneurship Fund (CBEF)",
          "National Directorate of Employment (NDE)",
          "National Open Apprenticeship Scheme (NOAS)",
          "Small and Medium Enterprise Development Association of Nigeria (SMEDAN)"
        ],
        correctAnswer: "Central Bank Entrepreneurship Fund (CBEF)",
        explanation: "The chapter names NDE, NOAS, and SMEDAN specifically; CBEF is not mentioned in the text."
      },
      {
        question: "According to the Policy Framework for High Growth of Enterprise, policies should 'co-exist programmes' for which two categories of enterprises?",
        options: [
          "General enterprises and high-growth enterprises",
          "Public enterprises and private enterprises",
          "Rural enterprises and urban enterprises",
          "Small enterprises and micro enterprises"
        ],
        correctAnswer: "General enterprises and high-growth enterprises",
        explanation: "One listed policy is to 'Co-exist programmes for general enterprises and high-growth enterprises.'"
      }
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
  
  
  

  
  
  
 
