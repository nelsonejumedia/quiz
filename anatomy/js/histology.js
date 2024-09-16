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
  
  
  
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////Epithelial Tissues/////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      {
        category: "Epithelial Tissues",
        questions: [
          {
            question: "Which type of epithelium is specialized for diffusion of gases and fluids?",
            options: [
              "Simple squamous epithelium",
              "Stratified squamous epithelium",
              "Transitional epithelium",
              "Pseudostratified columnar epithelium",
            ],
            correctAnswer: "Simple squamous epithelium",
            explanation: "Simple squamous epithelium lines surfaces like alveoli and capillaries, where passive transport of gases and fluids occurs."
          },
          {
            question: "Which type of epithelial tissue forms the outer layer of the skin?",
            options: [
              "Simple cuboidal epithelium",
              "Stratified squamous keratinizing epithelium",
              "Transitional epithelium",
              "Simple columnar epithelium",
            ],
            correctAnswer: "Stratified squamous keratinizing epithelium",
            explanation: "The epidermis consists of stratified squamous epithelium, which undergoes keratinization to protect against abrasion and water loss."
          },
          {
            question: "Which epithelial tissue is found lining the urinary bladder?",
            options: [
              "Simple squamous epithelium",
              "Transitional epithelium",
              "Stratified squamous epithelium",
              "Simple columnar epithelium",
            ],
            correctAnswer: "Transitional epithelium",
            explanation: "Transitional epithelium is specialized to stretch and withstand urine's toxicity, lining structures like the bladder."
          },
          {
            question: "Which of the following is NOT a function of epithelial tissue?",
            options: [
              "Absorption",
              "Secretion",
              "Protection",
              "Blood supply",
            ],
            correctAnswer: "Blood supply",
            explanation: "Epithelial tissues are avascular and depend on diffusion from underlying connective tissues for nutrients."
          },
          {
            question: "What structure supports epithelial tissues, separating them from underlying tissues?",
            options: [
              "Cell junctions",
              "Basement membrane",
              "Desmosomes",
              "Cilia",
            ],
            correctAnswer: "Basement membrane",
            explanation: "The basement membrane provides structural support and a selective barrier between the epithelium and connective tissue."
          },
          {
            question: "Which type of epithelium lines the small intestine and facilitates absorption?",
            options: [
              "Simple squamous epithelium",
              "Simple columnar epithelium",
              "Stratified cuboidal epithelium",
              "Pseudostratified columnar epithelium",
            ],
            correctAnswer: "Simple columnar epithelium",
            explanation: "Simple columnar epithelium with microvilli lines absorptive surfaces like the small intestine."
          },
          {
            question: "What type of epithelium is found in the respiratory tract, where it functions in secretion and movement of mucus?",
            options: [
              "Simple squamous epithelium",
              "Simple columnar epithelium",
              "Pseudostratified ciliated columnar epithelium",
              "Stratified squamous epithelium",
            ],
            correctAnswer: "Pseudostratified ciliated columnar epithelium",
            explanation: "Pseudostratified ciliated columnar epithelium lines the respiratory tract, where its cilia move mucus and trapped particles."
          },
          {
            question: "Which of the following epithelium types is best suited to withstand mechanical stress and abrasion?",
            options: [
              "Simple cuboidal epithelium",
              "Stratified squamous epithelium",
              "Simple columnar epithelium",
              "Simple squamous epithelium",
            ],
            correctAnswer: "Stratified squamous epithelium",
            explanation: "Stratified squamous epithelium has multiple layers of cells, providing protection against abrasion, as found in the skin and oral cavity."
          },
          {
            question: "Which epithelial cells are specialized to secrete mucus in the respiratory and digestive tracts?",
            options: [
              "Goblet cells",
              "Cuboidal cells",
              "Squamous cells",
              "Ciliated cells",
            ],
            correctAnswer: "Goblet cells",
            explanation: "Goblet cells are responsible for secreting mucus to protect and lubricate the surfaces of the respiratory and digestive tracts."
          },
          {
            question: "Which type of epithelial tissue lines the blood vessels and the heart?",
            options: [
              "Simple squamous epithelium",
              "Stratified squamous epithelium",
              "Transitional epithelium",
              "Simple columnar epithelium",
            ],
            correctAnswer: "Simple squamous epithelium",
            explanation: "The endothelium, which lines the heart and blood vessels, consists of simple squamous epithelium for efficient exchange of gases and nutrients."
          },
          {
            question: "What is the primary role of cilia in ciliated epithelial tissues?",
            options: [
              "Increase surface area for absorption",
              "Secrete enzymes",
              "Propel substances along the surface",
              "Form protective barriers",
            ],
            correctAnswer: "Propel substances along the surface",
            explanation: "Cilia move mucus and other substances across the epithelial surface, as seen in the respiratory and reproductive tracts."
          },
          {
            question: "Which epithelium type consists of a single layer of cells that appear to be multiple layers due to differing cell heights?",
            options: [
              "Simple columnar epithelium",
              "Stratified cuboidal epithelium",
              "Transitional epithelium",
              "Pseudostratified epithelium",
            ],
            correctAnswer: "Pseudostratified epithelium",
            explanation: "Pseudostratified epithelium appears to have multiple layers due to the varying heights of its cells, but all cells rest on the basement membrane."
          },
          {
            question: "Which type of epithelium lines the ducts of sweat glands?",
            options: [
              "Simple squamous epithelium",
              "Simple cuboidal epithelium",
              "Stratified cuboidal epithelium",
              "Transitional epithelium",
            ],
            correctAnswer: "Stratified cuboidal epithelium",
            explanation: "Stratified cuboidal epithelium, consisting of two or three cell layers, is typically found lining the ducts of sweat glands."
          },
          {
            question: "Where are stereocilia typically found?",
            options: [
              "In the respiratory tract",
              "On the surface of the skin",
              "In the vas deferens and epididymis",
              "In the kidney tubules",
            ],
            correctAnswer: "In the vas deferens and epididymis",
            explanation: "Stereocilia are long microvilli found in the vas deferens and epididymis, where they aid in absorption and secretion."
          },
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
          {
            question: "Which of the following epithelial tissues has the ability to stretch and return to its original shape?",
            options: [
              "Simple cuboidal epithelium",
              "Simple squamous epithelium",
              "Transitional epithelium",
              "Stratified columnar epithelium",
            ],
            correctAnswer: "Transitional epithelium",
            explanation: "Transitional epithelium is found in the bladder and can stretch as the bladder fills, returning to its original shape when emptied."
          },
          {
            question: "Which type of epithelium forms the serous membranes lining the body cavities?",
            options: [
              "Simple squamous epithelium",
              "Stratified squamous epithelium",
              "Simple columnar epithelium",
              "Pseudostratified columnar epithelium",
            ],
            correctAnswer: "Simple squamous epithelium",
            explanation: "Simple squamous epithelium forms the serous membranes, such as the peritoneum, that line and protect body cavities."
          },
          {
            question: "What is the main function of microvilli on epithelial cells?",
            options: [
              "Absorption",
              "Secretion",
              "Propulsion",
              "Protection",
            ],
            correctAnswer: "Absorption",
            explanation: "Microvilli increase the surface area of epithelial cells, enhancing their ability to absorb substances, especially in the small intestine."
          },
          {
            question: "Which of the following best describes the arrangement of stratified epithelia?",
            options: [
              "A single layer of cells",
              "Multiple layers of cells",
              "Cells with uneven heights",
              "Flattened cells in a single layer",
            ],
            correctAnswer: "Multiple layers of cells",
            explanation: "Stratified epithelia consist of two or more layers of cells, with only the deepest layer in contact with the basement membrane."
          },
          {
            question: "Which epithelium type is specialized for secretion in glands such as the thyroid or sweat glands?",
            options: [
              "Simple squamous epithelium",
              "Simple cuboidal epithelium",
              "Stratified squamous epithelium",
              "Transitional epithelium",
            ],
            correctAnswer: "Simple cuboidal epithelium",
            explanation: "Simple cuboidal epithelium, found in many glands, is specialized for secretion of substances like hormones and sweat."
          },
          {
            question: "What type of epithelial tissue is primarily involved in gas exchange in the lungs?",
            options: [
              "Simple columnar epithelium",
              "Stratified squamous epithelium",
              "Simple squamous epithelium",
              "Pseudostratified epithelium",
            ],
            correctAnswer: "Simple squamous epithelium",
            explanation: "Simple squamous epithelium forms the alveoli of the lungs, facilitating efficient gas exchange due to its thin structure."
          },
          {
            question: "Which of the following is NOT a location where pseudostratified columnar epithelium is commonly found?",
            options: [
              "Respiratory tract",
              "Male reproductive ducts",
              "Alveoli of the lungs",
              "Nasal cavity",
            ],
            correctAnswer: "Alveoli of the lungs",
            explanation: "Pseudostratified columnar epithelium lines much of the respiratory tract but not the alveoli, which are lined by simple squamous epithelium."
          },
          {
            question: "Which type of epithelial tissue is adapted for absorption in areas such as the small intestine?",
            options: [
              "Simple squamous epithelium",
              "Simple cuboidal epithelium",
              "Simple columnar epithelium",
              "Stratified cuboidal epithelium",
            ],
            correctAnswer: "Simple columnar epithelium",
            explanation: "Simple columnar epithelium, often with microvilli, is found in the small intestine, where it is specialized for nutrient absorption."
          },
          {
            question: "What is the main difference between keratinized and non-keratinized stratified squamous epithelium?",
            options: [
              "Number of cell layers",
              "Presence of a protective keratin layer",
              "Shape of the surface cells",
              "Thickness of the basement membrane",
            ],
            correctAnswer: "Presence of a protective keratin layer",
            explanation: "Keratinized stratified squamous epithelium contains a tough keratin layer, protecting areas like the skin from mechanical damage."
          },
          {
            question: "Which of the following structures is formed by simple cuboidal epithelium?",
            options: [
              "Alveoli of the lungs",
              "Kidney tubules",
              "Inner lining of blood vessels",
              "Trachea lining",
            ],
            correctAnswer: "Kidney tubules",
            explanation: "Simple cuboidal epithelium lines the kidney tubules, where it functions in secretion and absorption."
          },
          {
            question: "Which type of epithelium is specialized for rapid diffusion and filtration in the kidneys?",
            options: [
              "Simple cuboidal epithelium",
              "Simple squamous epithelium",
              "Stratified squamous epithelium",
              "Simple columnar epithelium",
            ],
            correctAnswer: "Simple squamous epithelium",
            explanation: "Simple squamous epithelium, due to its thin structure, facilitates rapid diffusion and filtration in the glomeruli of the kidneys."
          },
          {
            question: "Which type of epithelium is involved in secretion and absorption in the ducts of glands?",
            options: [
              "Stratified squamous epithelium",
              "Simple cuboidal epithelium",
              "Pseudostratified columnar epithelium",
              "Simple columnar epithelium",
            ],
            correctAnswer: "Simple cuboidal epithelium",
            explanation: "Simple cuboidal epithelium lines the ducts of glands, where it is involved in the secretion and absorption of fluids."
          },
          {
            question: "What type of epithelial tissue is found in the inner lining of blood vessels?",
            options: [
              "Simple squamous epithelium",
              "Simple cuboidal epithelium",
              "Stratified cuboidal epithelium",
              "Transitional epithelium",
            ],
            correctAnswer: "Simple squamous epithelium",
            explanation: "Simple squamous epithelium, called endothelium, lines blood vessels, allowing for smooth blood flow and exchange of substances."
          },
          {
            question: "Which of the following is a function of stratified cuboidal epithelium?",
            options: [
              "Absorption in the intestine",
              "Secretion in sweat glands",
              "Protection in the epidermis",
              "Gas exchange in the alveoli",
            ],
            correctAnswer: "Secretion in sweat glands",
            explanation: "Stratified cuboidal epithelium lines the ducts of sweat glands and is specialized for secretion."
          },
          {
            question: "Which type of epithelial tissue lines the stomach and is involved in secretion of digestive enzymes?",
            options: [
              "Simple columnar epithelium",
              "Simple cuboidal epithelium",
              "Stratified squamous epithelium",
              "Pseudostratified columnar epithelium",
            ],
            correctAnswer: "Simple columnar epithelium",
            explanation: "Simple columnar epithelium lines the stomach, where it secretes mucus and digestive enzymes."
          },
          {
            question: "What is the primary role of tight junctions in epithelial tissues?",
            options: [
              "Facilitate absorption",
              "Prevent leakage between cells",
              "Allow communication between cells",
              "Anchor cells to the basement membrane",
            ],
            correctAnswer: "Prevent leakage between cells",
            explanation: "Tight junctions seal adjacent epithelial cells together, preventing the passage of substances between them."
          },
          {
            question: "Which of the following epithelial tissues provides a protective barrier in areas subject to mechanical stress?",
            options: [
              "Simple columnar epithelium",
              "Stratified squamous epithelium",
              "Simple cuboidal epithelium",
              "Simple squamous epithelium",
            ],
            correctAnswer: "Stratified squamous epithelium",
            explanation: "Stratified squamous epithelium, with its multiple layers of cells, provides protection against mechanical stress and abrasion."
          },
          {
            question: "Which type of epithelium lines the ureters and allows for stretch and recoil?",
            options: [
              "Simple squamous epithelium",
              "Transitional epithelium",
              "Stratified squamous epithelium",
              "Simple cuboidal epithelium",
            ],
            correctAnswer: "Transitional epithelium",
            explanation: "Transitional epithelium lines the ureters and bladder, allowing them to stretch as they fill with urine."
          },
  
  
    {
      question: "Which type of epithelium has cells that change shape depending on the stretching of the tissue?",
      options: [
        "Simple cuboidal epithelium",
        "Stratified squamous epithelium",
        "Transitional epithelium",
        "Pseudostratified columnar epithelium",
      ],
      correctAnswer: "Transitional epithelium",
      explanation: "Transitional epithelium lines organs like the bladder, allowing them to stretch as they fill and empty."
    },
    {
      question: "What is the main role of the basement membrane in epithelial tissues?",
      options: [
        "Secreting mucus",
        "Providing structural support and selective permeability",
        "Absorbing nutrients",
        "Producing keratin",
      ],
      correctAnswer: "Providing structural support and selective permeability",
      explanation: "The basement membrane provides physical support and regulates material exchange between epithelial and underlying tissues."
    },
    {
      question: "Which type of epithelial tissue consists of multiple layers, providing protection in areas of wear and tear?",
      options: [
        "Simple columnar epithelium",
        "Stratified squamous epithelium",
        "Simple cuboidal epithelium",
        "Pseudostratified epithelium",
      ],
      correctAnswer: "Stratified squamous epithelium",
      explanation: "Stratified squamous epithelium is composed of several layers, which makes it suitable for protecting areas subjected to friction, such as the skin."
    },
    {
      question: "Where would you typically find simple cuboidal epithelium?",
      options: [
        "Lining the blood vessels",
        "In the kidney tubules",
        "On the skin surface",
        "In the small intestine",
      ],
      correctAnswer: "In the kidney tubules",
      explanation: "Simple cuboidal epithelium lines the kidney tubules and is involved in secretion and absorption."
    },
    {
      question: "Which structure is composed of pseudostratified columnar epithelium?",
      options: [
        "Trachea",
        "Kidney tubules",
        "Alveoli of the lungs",
        "Epidermis",
      ],
      correctAnswer: "Trachea",
      explanation: "Pseudostratified columnar epithelium with cilia and goblet cells lines the trachea, helping trap and move particles out of the airways."
    },
    {
      question: "Which type of epithelium is best suited for rapid exchange of materials by diffusion?",
      options: [
        "Simple columnar epithelium",
        "Simple squamous epithelium",
        "Stratified cuboidal epithelium",
        "Transitional epithelium",
      ],
      correctAnswer: "Simple squamous epithelium",
      explanation: "Simple squamous epithelium is very thin, allowing for efficient diffusion of gases and nutrients, like in the alveoli and capillaries."
    },
    {
      question: "What feature is characteristic of keratinized stratified squamous epithelium?",
      options: [
        "Surface cilia",
        "Thick layer of dead cells",
        "Secretory cells",
        "Absorptive microvilli",
      ],
      correctAnswer: "Thick layer of dead cells",
      explanation: "Keratinized stratified squamous epithelium, found in the skin, provides a tough barrier due to its outer layer of dead, keratin-filled cells."
    },
    {
      question: "Which of the following epithelium types forms the inner lining of blood vessels?",
      options: [
        "Simple squamous epithelium",
        "Simple cuboidal epithelium",
        "Stratified squamous epithelium",
        "Transitional epithelium",
      ],
      correctAnswer: "Simple squamous epithelium",
      explanation: "Simple squamous epithelium, also known as endothelium, lines blood vessels and is ideal for smooth blood flow and exchange."
    },
    {
      question: "Which epithelium type is found in the ducts of sweat glands?",
      options: [
        "Simple columnar epithelium",
        "Stratified cuboidal epithelium",
        "Transitional epithelium",
        "Stratified squamous epithelium",
      ],
      correctAnswer: "Stratified cuboidal epithelium",
      explanation: "Stratified cuboidal epithelium provides a strong lining for ducts such as those in sweat glands, offering more protection than a single layer."
    },
    {
      question: "What structure separates the epithelial cells from the underlying connective tissue?",
      options: [
        "Cilia",
        "Basement membrane",
        "Gap junctions",
        "Microvilli",
      ],
      correctAnswer: "Basement membrane",
      explanation: "The basement membrane is a thin layer that provides support and anchors epithelial cells to the underlying connective tissue."
    },
    {
      question: "Which epithelial tissue type lines the alveoli of the lungs?",
      options: [
        "Simple columnar epithelium",
        "Stratified squamous epithelium",
        "Simple squamous epithelium",
        "Transitional epithelium",
      ],
      correctAnswer: "Simple squamous epithelium",
      explanation: "Simple squamous epithelium lines the alveoli, facilitating the efficient exchange of oxygen and carbon dioxide."
    },
    {
      question: "Which of the following is a function of goblet cells in epithelial tissues?",
      options: [
        "Absorption",
        "Secretion of mucus",
        "Providing structural support",
        "Facilitating gas exchange",
      ],
      correctAnswer: "Secretion of mucus",
      explanation: "Goblet cells are specialized epithelial cells that secrete mucus to protect and lubricate the surface of organs such as the respiratory and digestive tracts."
    },
    {
      question: "Which type of epithelium is commonly involved in absorption and secretion in the digestive system?",
      options: [
        "Simple cuboidal epithelium",
        "Stratified squamous epithelium",
        "Simple columnar epithelium",
        "Transitional epithelium",
      ],
      correctAnswer: "Simple columnar epithelium",
      explanation: "Simple columnar epithelium, often with microvilli, lines much of the digestive tract where it aids in nutrient absorption."
    },
    {
      question: "What type of epithelium covers the body’s external surface and serves as the first line of defense against environmental factors?",
      options: [
        "Simple squamous epithelium",
        "Stratified squamous keratinized epithelium",
        "Simple columnar epithelium",
        "Transitional epithelium",
      ],
      correctAnswer: "Stratified squamous keratinized epithelium",
      explanation: "The skin is covered by stratified squamous keratinized epithelium, providing protection against mechanical damage, pathogens, and dehydration."
    },
    {
      question: "Where would you find pseudostratified ciliated columnar epithelium?",
      options: [
        "Lining the trachea",
        "In the alveoli",
        "On the skin surface",
        "In the urinary bladder",
      ],
      correctAnswer: "Lining the trachea",
      explanation: "Pseudostratified ciliated columnar epithelium lines the trachea, where the cilia help move mucus and trapped particles out of the respiratory tract."
    },
    {
      question: "Which type of cell junction in epithelial tissues prevents substances from passing between adjacent cells?",
      options: [
        "Tight junctions",
        "Desmosomes",
        "Gap junctions",
        "Hemidesmosomes",
      ],
      correctAnswer: "Tight junctions",
      explanation: "Tight junctions create a seal between adjacent epithelial cells, preventing substances from leaking between them."
    },
  
  
  
  
  
  
  
         
        ],
      },
  
  
  
  
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////Muscle  Tissues//////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      {
        category: "Muscle Tissues",
        questions: [
        {
    question: "Which muscle type is characterized by voluntary control and prominent cross-striations?",
    options: [
      "Skeletal muscle",
      "Smooth muscle",
      "Cardiac muscle",
      "Visceral muscle",
    ],
    correctAnswer: "Skeletal muscle",
    explanation: "Skeletal muscle is responsible for voluntary movements and shows prominent cross-striations due to the arrangement of its contractile proteins."
  },
  {
    question: "What structure transmits the contractile force developed inside muscle cells?",
    options: [
      "Mitochondria",
      "Z discs",
      "External lamina",
      "Endomysium",
    ],
    correctAnswer: "External lamina",
    explanation: "Contractile forces are transmitted to the external lamina via link proteins that span the muscle cell membrane."
  },
  {
    question: "Which type of muscle is found in the walls of hollow viscera and is described as involuntary?",
    options: [
      "Skeletal muscle",
      "Smooth muscle",
      "Cardiac muscle",
      "Myofibroblasts",
    ],
    correctAnswer: "Smooth muscle",
    explanation: "Smooth muscle forms the muscular component of visceral structures and is controlled involuntarily by autonomic and hormonal systems."
  },
  {
    question: "Which statement correctly describes cardiac muscle?",
    options: [
      "It has multinucleated cells.",
      "It lacks striations.",
      "It is spontaneously contractile and has autonomic modulation.",
      "It functions under voluntary control.",
    ],
    correctAnswer: "It is spontaneously contractile and has autonomic modulation.",
    explanation: "Cardiac muscle contracts rhythmically and spontaneously but is modulated by the autonomic nervous system."
  },
  {
    question: "What happens to skeletal muscle fibers when their nerve supply is damaged?",
    options: [
      "They undergo hypertrophy.",
      "They become multinucleated.",
      "They atrophy and waste away.",
      "They regenerate by mitosis.",
    ],
    correctAnswer: "They atrophy and waste away.",
    explanation: "When the nerve supply is damaged, the muscle fibers innervated by that nerve become smaller and thinner, resulting in muscle atrophy."
  },
  {
    question: "Which of the following types of fibers relies primarily on aerobic metabolism and contains abundant mitochondria?",
    options: [
      "Type I fibers (aerobic)",
      "Type II fibers (anaerobic)",
      "Intermediate fibers",
      "Fast-twitch fibers",
    ],
    correctAnswer: "Type I fibers (aerobic)",
    explanation: "Type I fibers rely on aerobic metabolism and contain many mitochondria and myoglobin, giving them a red appearance."
  },
  {
    question: "Which term describes the increase in muscle size due to the synthesis of more contractile proteins?",
    options: [
      "Atrophy",
      "Hyperplasia",
      "Hypertrophy",
      "Myofibrillogenesis",
    ],
    correctAnswer: "Hypertrophy",
    explanation: "Hypertrophy refers to the increase in muscle fiber size due to the synthesis of additional contractile proteins."
  },
  {
    question: "Which is NOT a characteristic of smooth muscle?",
    options: [
      "Involuntary control",
      "Striated appearance",
      "Single central nucleus",
      "Slow, rhythmic contractions",
    ],
    correctAnswer: "Striated appearance",
    explanation: "Smooth muscle lacks the striations seen in skeletal and cardiac muscles, as its contractile proteins are not organized in myofibrils."
  },
  {
    question: "What is the role of satellite cells in skeletal muscle?",
    options: [
      "They initiate contractions.",
      "They regenerate damaged muscle fibers.",
      "They transmit nerve signals to the muscle.",
      "They supply oxygen to muscle fibers.",
    ],
    correctAnswer: "They regenerate damaged muscle fibers.",
    explanation: "Satellite cells are muscle stem cells that proliferate after muscle damage and fuse to form new muscle fibers."
  },
  {
    question: "What is the main characteristic of Type II muscle fibers?",
    options: [
      "They are slow-twitch and rely on aerobic metabolism.",
      "They contain abundant myoglobin and mitochondria.",
      "They rely on anaerobic metabolism and are involved in rapid, intense contractions.",
      "They are found mainly in postural muscles.",
    ],
    correctAnswer: "They rely on anaerobic metabolism and are involved in rapid, intense contractions.",
    explanation: "Type II fibers have less myoglobin and mitochondria, relying on anaerobic glycolysis for short bursts of intense activity."
  },
  
  
  {
    question: "Which structure in skeletal muscle helps transmit action potentials deep into the muscle fibers?",
    options: [
      "Sarcoplasmic reticulum",
      "T-tubules",
      "Myofibrils",
      "Actin filaments",
    ],
    correctAnswer: "T-tubules",
    explanation: "T-tubules are invaginations of the plasma membrane that transmit action potentials deep into the muscle fibers, leading to coordinated contractions."
  },
  {
    question: "What component stores calcium ions necessary for muscle contraction?",
    options: [
      "Mitochondria",
      "Golgi apparatus",
      "Sarcoplasmic reticulum",
      "Ribosomes",
    ],
    correctAnswer: "Sarcoplasmic reticulum",
    explanation: "The sarcoplasmic reticulum stores calcium ions, which are released to trigger muscle contraction when the muscle is stimulated."
  },
  {
    question: "Which muscle type contains intercalated discs?",
    options: [
      "Skeletal muscle",
      "Smooth muscle",
      "Cardiac muscle",
      "Myofibroblasts",
    ],
    correctAnswer: "Cardiac muscle",
    explanation: "Cardiac muscle cells are connected by intercalated discs, which allow electrical signals to pass efficiently between cells, facilitating coordinated contractions."
  },
  {
    question: "Which protein binds calcium to initiate muscle contraction in skeletal muscle?",
    options: [
      "Myosin",
      "Tropomyosin",
      "Troponin",
      "Actin",
    ],
    correctAnswer: "Troponin",
    explanation: "Calcium binds to troponin, which causes tropomyosin to move away from actin's binding sites, allowing myosin to bind to actin and start muscle contraction."
  },
  {
    question: "What is the functional unit of contraction in a skeletal muscle fiber?",
    options: [
      "Sarcomere",
      "Myofibril",
      "Sarcoplasm",
      "Z disc",
    ],
    correctAnswer: "Sarcomere",
    explanation: "The sarcomere is the basic unit of contraction in a skeletal muscle fiber, defined by the area between two Z discs."
  },
  {
    question: "What is the primary energy source used during muscle contraction?",
    options: [
      "ATP",
      "Creatine",
      "Glucose",
      "Fatty acids",
    ],
    correctAnswer: "ATP",
    explanation: "ATP provides the necessary energy for muscle contraction, allowing myosin heads to detach and reset for the next contraction cycle."
  },
  {
    question: "Which type of muscle fiber is most suited for endurance activities?",
    options: [
      "Type I fibers (slow-twitch)",
      "Type IIa fibers (fast-twitch oxidative)",
      "Type IIb fibers (fast-twitch glycolytic)",
      "Type IIc fibers (intermediate)",
    ],
    correctAnswer: "Type I fibers (slow-twitch)",
    explanation: "Type I fibers are slow-twitch fibers that rely on aerobic metabolism and are resistant to fatigue, making them ideal for endurance activities."
  },
  {
    question: "What happens during muscle contraction according to the sliding filament theory?",
    options: [
      "Actin and myosin filaments shorten.",
      "Actin filaments slide over myosin filaments.",
      "Myosin heads detach from actin.",
      "T-tubules release sodium ions.",
    ],
    correctAnswer: "Actin filaments slide over myosin filaments.",
    explanation: "During muscle contraction, actin filaments slide over myosin filaments, shortening the sarcomere without changing the length of the filaments themselves."
  },
  {
    question: "Which muscle cell type is capable of continuous, rhythmic contractions without fatigue?",
    options: [
      "Smooth muscle",
      "Skeletal muscle",
      "Cardiac muscle",
      "Type IIb muscle fibers",
    ],
    correctAnswer: "Cardiac muscle",
    explanation: "Cardiac muscle cells are capable of continuous, rhythmic contractions that allow the heart to pump blood efficiently without fatigue."
  },
  {
    question: "What is the role of acetylcholine in skeletal muscle contraction?",
    options: [
      "It breaks down ATP for energy.",
      "It stimulates the release of calcium from the sarcoplasmic reticulum.",
      "It binds to receptors at the neuromuscular junction to initiate muscle contraction.",
      "It inhibits muscle contraction by blocking myosin binding sites.",
    ],
    correctAnswer: "It binds to receptors at the neuromuscular junction to initiate muscle contraction.",
    explanation: "Acetylcholine is a neurotransmitter that binds to receptors at the neuromuscular junction, triggering an action potential in the muscle fiber that leads to contraction."
  },
  
  
  
  
  {
    question: "Which muscle type is responsible for peristalsis in the digestive tract?",
    options: [
      "Skeletal muscle",
      "Smooth muscle",
      "Cardiac muscle",
      "Myofibroblasts",
    ],
    correctAnswer: "Smooth muscle",
    explanation: "Smooth muscle in the digestive tract contracts rhythmically to propel food through the process of peristalsis."
  },
  {
    question: "What is the main difference between skeletal and smooth muscle contraction mechanisms?",
    options: [
      "Smooth muscle contraction requires more ATP.",
      "Skeletal muscle relies on the sliding filament model, while smooth muscle contracts by cross-bridging.",
      "Skeletal muscle is controlled voluntarily, while smooth muscle is controlled involuntarily.",
      "Smooth muscle contraction is faster than skeletal muscle contraction.",
    ],
    correctAnswer: "Skeletal muscle is controlled voluntarily, while smooth muscle is controlled involuntarily.",
    explanation: "Skeletal muscle is under voluntary control, whereas smooth muscle is regulated by the autonomic nervous system."
  },
  {
    question: "What is the main characteristic of myofibrils in skeletal muscle?",
    options: [
      "They store glycogen for muscle energy.",
      "They contain actin and myosin filaments organized into sarcomeres.",
      "They regulate calcium release in muscle fibers.",
      "They act as the contractile units of smooth muscle.",
    ],
    correctAnswer: "They contain actin and myosin filaments organized into sarcomeres.",
    explanation: "Myofibrils consist of actin and myosin filaments arranged in repeating units called sarcomeres, which are responsible for muscle contraction."
  },
  {
    question: "Which part of the sarcomere remains unchanged during contraction?",
    options: [
      "H-zone",
      "I-band",
      "A-band",
      "Z-disc",
    ],
    correctAnswer: "A-band",
    explanation: "The A-band corresponds to the length of the myosin filaments, which remain constant during contraction, while other parts of the sarcomere shorten."
  },
  {
    question: "Which type of muscle is most resistant to fatigue?",
    options: [
      "Cardiac muscle",
      "Type I (slow-twitch) skeletal muscle",
      "Type IIa (fast oxidative) skeletal muscle",
      "Type IIb (fast glycolytic) skeletal muscle",
    ],
    correctAnswer: "Type I (slow-twitch) skeletal muscle",
    explanation: "Type I fibers are fatigue-resistant due to their reliance on aerobic metabolism and high mitochondrial content."
  },
  {
    question: "What is the primary role of calmodulin in smooth muscle contraction?",
    options: [
      "It binds to actin to initiate contraction.",
      "It binds to calcium and activates myosin light-chain kinase.",
      "It blocks myosin binding sites on actin filaments.",
      "It breaks down ATP to provide energy for contraction.",
    ],
    correctAnswer: "It binds to calcium and activates myosin light-chain kinase.",
    explanation: "In smooth muscle, calmodulin binds to calcium, which activates myosin light-chain kinase to initiate contraction."
  },
  {
    question: "Which muscle fibers are best suited for short bursts of high-intensity activity?",
    options: [
      "Type I fibers",
      "Type IIa fibers",
      "Type IIb fibers",
      "Intermediate fibers",
    ],
    correctAnswer: "Type IIb fibers",
    explanation: "Type IIb fibers are fast-twitch fibers that rely on anaerobic metabolism, making them ideal for short, high-intensity activities."
  },
  {
    question: "Which of the following best describes the role of titin in muscle fibers?",
    options: [
      "It facilitates calcium release from the sarcoplasmic reticulum.",
      "It provides elasticity and stabilizes myosin filaments in the sarcomere.",
      "It blocks the myosin binding sites on actin filaments.",
      "It binds to troponin to initiate muscle contraction.",
    ],
    correctAnswer: "It provides elasticity and stabilizes myosin filaments in the sarcomere.",
    explanation: "Titin is a protein that provides structural support and elasticity, helping to stabilize the myosin filaments during muscle contraction."
  },
  {
    question: "Which of the following is a common characteristic of all muscle tissue types?",
    options: [
      "They are controlled by the autonomic nervous system.",
      "They contract through the interaction of actin and myosin.",
      "They are striated.",
      "They contain multiple nuclei per cell.",
    ],
    correctAnswer: "They contract through the interaction of actin and myosin.",
    explanation: "All muscle tissue types, including skeletal, cardiac, and smooth muscle, contract through the sliding filament mechanism involving actin and myosin."
  },
  {
    question: "Which of the following processes occurs during muscle relaxation?",
    options: [
      "Calcium is released from the sarcoplasmic reticulum.",
      "Myosin binds to actin.",
      "Acetylcholine is released at the neuromuscular junction.",
      "Calcium is pumped back into the sarcoplasmic reticulum.",
    ],
    correctAnswer: "Calcium is pumped back into the sarcoplasmic reticulum.",
    explanation: "During relaxation, calcium is actively pumped back into the sarcoplasmic reticulum, which causes the myosin binding sites on actin to be blocked by tropomyosin."
  },
  {
    question: "Which protein forms the thin filaments in a muscle fiber?",
    options: [
      "Myosin",
      "Actin",
      "Titin",
      "Troponin",
    ],
    correctAnswer: "Actin",
    explanation: "Actin is the main component of the thin filaments in a sarcomere, where it interacts with myosin during muscle contraction."
  },
  {
    question: "What is the function of myosin ATPase during muscle contraction?",
    options: [
      "It transports calcium into the sarcoplasmic reticulum.",
      "It hydrolyzes ATP to provide energy for the power stroke.",
      "It binds calcium to initiate contraction.",
      "It inhibits muscle relaxation.",
    ],
    correctAnswer: "It hydrolyzes ATP to provide energy for the power stroke.",
    explanation: "Myosin ATPase breaks down ATP to release energy, which is used to perform the power stroke, moving the myosin head along the actin filament."
  },
  {
    question: "Which structural feature differentiates skeletal muscle from other muscle types?",
    options: [
      "It is controlled involuntarily.",
      "It has branched fibers.",
      "It is multinucleated.",
      "It contracts without stimulation.",
    ],
    correctAnswer: "It is multinucleated.",
    explanation: "Skeletal muscle fibers are multinucleated, which is one of their distinguishing features compared to smooth and cardiac muscle."
  },
  {
    question: "Which muscle type is capable of regeneration after injury through the activation of satellite cells?",
    options: [
      "Smooth muscle",
      "Skeletal muscle",
      "Cardiac muscle",
      "Myofibroblasts",
    ],
    correctAnswer: "Skeletal muscle",
    explanation: "Skeletal muscle has the ability to regenerate after injury with the help of satellite cells, which can proliferate and form new muscle fibers."
  },
  {
    question: "What happens to the I-band during skeletal muscle contraction?",
    options: [
      "It disappears completely.",
      "It shortens.",
      "It lengthens.",
      "It remains the same length.",
    ],
    correctAnswer: "It shortens.",
    explanation: "During contraction, the I-band, which contains only actin filaments, shortens as the sarcomere contracts."
  },
  {
    question: "What is the function of the sarcolemma in muscle fibers?",
    options: [
      "It stores calcium ions.",
      "It covers the muscle fiber and conducts action potentials.",
      "It generates ATP for muscle contraction.",
      "It provides structural support for myofibrils.",
    ],
    correctAnswer: "It covers the muscle fiber and conducts action potentials.",
    explanation: "The sarcolemma is the plasma membrane of a muscle fiber, and it plays a key role in transmitting action potentials along the muscle cell."
  },
  
  {
    question: "Which structure is responsible for transmitting the contractile force from one cardiac muscle cell to another?",
    options: [
      "T-tubules",
      "Intercalated discs",
      "Z discs",
      "Sarcoplasmic reticulum",
    ],
    correctAnswer: "Intercalated discs",
    explanation: "Intercalated discs provide structural and electrical connections between cardiac muscle cells, allowing them to act as a syncytium."
  },
  {
    question: "Which type of muscle can regenerate through hyperplasia, increasing the number of muscle cells?",
    options: [
      "Skeletal muscle",
      "Smooth muscle",
      "Cardiac muscle",
      "None of the above",
    ],
    correctAnswer: "Smooth muscle",
    explanation: "Smooth muscle can regenerate by hyperplasia, which involves increasing the number of cells, unlike skeletal and cardiac muscle."
  },
  {
    question: "What causes the striated appearance of skeletal muscle fibers under a microscope?",
    options: [
      "Presence of sarcoplasmic reticulum",
      "Arrangement of actin and myosin filaments in sarcomeres",
      "Intercalated discs",
      "Mitochondria",
    ],
    correctAnswer: "Arrangement of actin and myosin filaments in sarcomeres",
    explanation: "The striated appearance is due to the organized arrangement of actin and myosin filaments in sarcomeres."
  },
  {
    question: "Which type of muscle contraction is characterized by slow, sustained contractions with little energy expenditure?",
    options: [
      "Skeletal muscle",
      "Tonic smooth muscle",
      "Phasic smooth muscle",
      "Cardiac muscle",
    ],
    correctAnswer: "Tonic smooth muscle",
    explanation: "Tonic smooth muscle is specialized for slow, sustained contractions and uses very little energy."
  },
  {
    question: "In cardiac muscle, which structure facilitates the rapid spread of electrical impulses?",
    options: [
      "Sarcolemma",
      "Gap junctions",
      "T-tubules",
      "Z discs",
    ],
    correctAnswer: "Gap junctions",
    explanation: "Gap junctions in the intercalated discs allow for the rapid spread of electrical impulses between cardiac cells."
  },
  {
    question: "What triggers the release of calcium from the sarcoplasmic reticulum in skeletal muscle?",
    options: [
      "Depolarization of the sarcolemma",
      "Binding of actin to myosin",
      "Phosphorylation of myosin",
      "ATP hydrolysis",
    ],
    correctAnswer: "Depolarization of the sarcolemma",
    explanation: "The depolarization of the sarcolemma, through the T-tubule system, triggers the release of calcium from the sarcoplasmic reticulum."
  },
  {
    question: "Which muscle type contains cells that are long, cylindrical, and multinucleated?",
    options: [
      "Smooth muscle",
      "Skeletal muscle",
      "Cardiac muscle",
      "All of the above",
    ],
    correctAnswer: "Skeletal muscle",
    explanation: "Skeletal muscle fibers are long, cylindrical, and multinucleated, a characteristic that sets them apart from smooth and cardiac muscle."
  },
  {
    question: "Which protein complex blocks the myosin binding sites on actin in a resting skeletal muscle fiber?",
    options: [
      "Troponin",
      "Tropomyosin",
      "Calmodulin",
      "Myosin",
    ],
    correctAnswer: "Tropomyosin",
    explanation: "Tropomyosin blocks the myosin binding sites on actin, preventing contraction in the absence of calcium."
  },
  {
    question: "What is the main role of the sarcoplasmic reticulum in muscle contraction?",
    options: [
      "Storing and releasing calcium ions",
      "Breaking down ATP",
      "Anchoring contractile proteins",
      "Providing structural support",
    ],
    correctAnswer: "Storing and releasing calcium ions",
    explanation: "The sarcoplasmic reticulum stores calcium and releases it when the muscle fiber is stimulated, initiating contraction."
  },
  {
    question: "Which of the following muscle fibers is primarily adapted for endurance and continuous activity?",
    options: [
      "Type IIb fibers",
      "Type IIa fibers",
      "Type I fibers",
      "Intermediate fibers",
    ],
    correctAnswer: "Type I fibers",
    explanation: "Type I fibers are slow-twitch fibers adapted for endurance activities due to their reliance on aerobic metabolism."
  },
  {
    question: "Which muscle type is most susceptible to damage from a lack of oxygen, such as in myocardial infarction?",
    options: [
      "Skeletal muscle",
      "Cardiac muscle",
      "Smooth muscle",
      "Type IIb fibers",
    ],
    correctAnswer: "Cardiac muscle",
    explanation: "Cardiac muscle is highly dependent on a constant oxygen supply, and a lack of oxygen can cause myocardial infarction (heart attack)."
  },
  
  
  
  
  
  
  {
    question: "Which of the following is a characteristic of smooth muscle cells?",
    options: [
      "They are multinucleated.",
      "They have a striated appearance.",
      "They lack T-tubules.",
      "They contract rapidly and fatigue easily.",
    ],
    correctAnswer: "They lack T-tubules.",
    explanation: "Smooth muscle cells lack T-tubules, which are present in skeletal and cardiac muscle to help transmit action potentials deep into the cell."
  },
  {
    question: "Which protein acts as a regulatory molecule by blocking myosin binding sites on actin in a resting muscle?",
    options: [
      "Troponin",
      "Tropomyosin",
      "Actin",
      "Myosin",
    ],
    correctAnswer: "Tropomyosin",
    explanation: "Tropomyosin blocks the myosin binding sites on actin filaments in a resting muscle, preventing contraction until calcium is available."
  },
  {
    question: "Which of the following statements about cardiac muscle is true?",
    options: [
      "It is capable of mitosis and regeneration.",
      "It contains multinucleated cells.",
      "It is under voluntary control.",
      "It contracts rhythmically without nerve stimulation.",
    ],
    correctAnswer: "It contracts rhythmically without nerve stimulation.",
    explanation: "Cardiac muscle cells are capable of spontaneous, rhythmic contraction, though their rate can be modulated by the autonomic nervous system."
  },
  
  
  
  
        ],
      },
  
  
  
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////Connective Tissues/////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      {
        category: "Connective Tissues",
        questions: [
          {
    question: "Which protein provides tensile strength in connective tissues, resisting pulling, stretching, and tearing?",
    options: [
      "Elastin",
      "Fibronectin",
      "Collagen",
      "Fibrillin",
    ],
    correctAnswer: "Collagen",
    explanation: "Collagen fibers are the main components providing tensile strength to connective tissues."
  },
  {
    question: "Which component in connective tissue is responsible for elasticity and allows tissues to return to their original shape after deformation?",
    options: [
      "Ground substance",
      "Elastin",
      "Fibroblasts",
      "Proteoglycans",
    ],
    correctAnswer: "Elastin",
    explanation: "Elastin fibers allow connective tissues to stretch and recoil, providing elasticity."
  },
  {
    question: "Which connective tissue cell type is primarily responsible for producing extracellular matrix components?",
    options: [
      "Fibroblasts",
      "Chondrocytes",
      "Osteoblasts",
      "Adipocytes",
    ],
    correctAnswer: "Fibroblasts",
    explanation: "Fibroblasts synthesize and secrete extracellular matrix materials, including collagen and ground substance."
  },
  {
    question: "What is the role of ground substance in connective tissue?",
    options: [
      "Provides tensile strength",
      "Stores calcium",
      "Resists compressive forces and facilitates diffusion",
      "Forms muscle fibers",
    ],
    correctAnswer: "Resists compressive forces and facilitates diffusion",
    explanation: "Ground substance consists of glycoproteins and glycosaminoglycans, providing volume and resistance to compressive forces while aiding molecular diffusion."
  },
  {
    question: "What is the primary function of reticulin fibers in connective tissues?",
    options: [
      "Provide elasticity",
      "Form supportive meshworks for highly cellular tissues",
      "Store fat",
      "Anchor cells to the extracellular matrix",
    ],
    correctAnswer: "Form supportive meshworks for highly cellular tissues",
    explanation: "Reticulin fibers, made of Type III collagen, provide structural support for organs like the liver and lymphoid tissues."
  },
  {
    question: "Which type of connective tissue is characterized by loosely arranged fibers and a large amount of ground substance?",
    options: [
      "Dense connective tissue",
      "Loose connective tissue",
      "Cartilage",
      "Bone",
    ],
    correctAnswer: "Loose connective tissue",
    explanation: "Loose connective tissue has a loose arrangement of collagen and elastic fibers and abundant ground substance, providing flexibility and space for blood vessels and nerves."
  },
  {
    question: "What type of connective tissue provides strong, rope-like structures found in tendons and ligaments?",
    options: [
      "Loose connective tissue",
      "Dense irregular connective tissue",
      "Dense regular connective tissue",
      "Adipose tissue",
    ],
    correctAnswer: "Dense regular connective tissue",
    explanation: "Dense regular connective tissue consists of tightly packed collagen fibers aligned parallel, providing strength in one direction."
  },
  {
    question: "Which type of connective tissue cell is involved in storing fat and regulating energy metabolism?",
    options: [
      "Osteocytes",
      "Adipocytes",
      "Fibroblasts",
      "Chondrocytes",
    ],
    correctAnswer: "Adipocytes",
    explanation: "Adipocytes store triglycerides and have roles in metabolic regulation and energy storage."
  },
  {
    question: "Which collagen type forms the bulk of collagen fibers in dense connective tissues like tendons and skin?",
    options: [
      "Type I",
      "Type II",
      "Type III",
      "Type IV",
    ],
    correctAnswer: "Type I",
    explanation: "Type I collagen provides the primary structural strength in fibrous supporting tissues such as tendons and skin."
  },
  {
    question: "Which connective tissue component has a gel-like consistency and binds water to provide hydration and resistance to compression?",
    options: [
      "Collagen",
      "Elastin",
      "Ground substance",
      "Fibronectin",
    ],
    correctAnswer: "Ground substance",
    explanation: "Ground substance, made of glycosaminoglycans and proteoglycans, binds water to form a gel that resists compression and supports tissue structure."
  },
  {
    question: "What are fibroblasts primarily responsible for during wound healing?",
    options: [
      "Forming blood clots",
      "Producing antibodies",
      "Generating extracellular matrix and collagen for tissue repair",
      "Initiating immune response",
    ],
    correctAnswer: "Generating extracellular matrix and collagen for tissue repair",
    explanation: "Fibroblasts proliferate and secrete collagen to replace damaged tissue during wound healing."
  },
  {
    question: "What characteristic distinguishes dense irregular connective tissue from dense regular connective tissue?",
    options: [
      "Presence of adipocytes",
      "Arrangement of collagen fibers",
      "Type of ground substance",
      "Cell type involved",
    ],
    correctAnswer: "Arrangement of collagen fibers",
    explanation: "In dense irregular connective tissue, collagen fibers are arranged in multiple directions, providing strength in various planes, unlike dense regular connective tissue where fibers are parallel."
  },
  {
    question: "Which connective tissue is primarily responsible for forming the structural framework of lymphoid organs?",
    options: [
      "Elastic connective tissue",
      "Adipose tissue",
      "Reticular connective tissue",
      "Dense irregular connective tissue",
    ],
    correctAnswer: "Reticular connective tissue",
    explanation: "Reticular connective tissue forms a delicate mesh that supports the cellular structure of lymphoid organs like the spleen and lymph nodes."
  },
  {
    question: "Which type of connective tissue is found in areas that require high elasticity, such as the walls of large arteries?",
    options: [
      "Dense regular connective tissue",
      "Loose connective tissue",
      "Elastic connective tissue",
      "Cartilage",
    ],
    correctAnswer: "Elastic connective tissue",
    explanation: "Elastic connective tissue contains large amounts of elastin fibers, which allow it to stretch and recoil, making it essential for large arteries that expand with each heartbeat."
  },
  {
    question: "What is the key function of proteoglycans in the ground substance of connective tissue?",
    options: [
      "Providing structural rigidity",
      "Binding water and resisting compressive forces",
      "Facilitating cellular communication",
      "Secreting extracellular matrix",
    ],
    correctAnswer: "Binding water and resisting compressive forces",
    explanation: "Proteoglycans in the ground substance bind large amounts of water, creating a gel-like consistency that resists compression and supports the tissue structure."
  },
  {
    question: "Which collagen type is a major component of basement membranes?",
    options: [
      "Type I",
      "Type II",
      "Type IV",
      "Type III",
    ],
    correctAnswer: "Type IV",
    explanation: "Type IV collagen forms a mesh-like structure in basement membranes, providing support and anchoring epithelial cells."
  },
  {
    question: "What is the main characteristic of fibrocartilage?",
    options: [
      "It is highly vascularized.",
      "It contains elastic fibers.",
      "It combines strength and flexibility with dense collagen fibers.",
      "It is found in the walls of blood vessels.",
    ],
    correctAnswer: "It combines strength and flexibility with dense collagen fibers.",
    explanation: "Fibrocartilage contains dense bundles of collagen fibers, providing tensile strength and flexibility, found in intervertebral discs and pubic symphysis."
  },
  {
    question: "Which type of connective tissue serves as a packing material around organs and provides support and cushioning?",
    options: [
      "Dense regular connective tissue",
      "Loose areolar connective tissue",
      "Fibrocartilage",
      "Reticular tissue",
    ],
    correctAnswer: "Loose areolar connective tissue",
    explanation: "Loose areolar connective tissue fills spaces between organs, providing support, cushioning, and flexibility."
  },
  {
    question: "What is the function of myofibroblasts in connective tissue repair?",
    options: [
      "Secreting enzymes to degrade damaged tissue",
      "Forming blood vessels",
      "Providing tensile strength to scars",
      "Contracting and shrinking wound sites",
    ],
    correctAnswer: "Contracting and shrinking wound sites",
    explanation: "Myofibroblasts play a key role in wound contraction by contracting and shrinking the wound site during tissue repair."
  },
  {
    question: "Which glycoprotein is essential for cell adhesion and wound healing in connective tissue?",
    options: [
      "Fibronectin",
      "Elastin",
      "Collagen",
      "Proteoglycan",
    ],
    correctAnswer: "Fibronectin",
    explanation: "Fibronectin plays a crucial role in cell adhesion, migration, and tissue repair, especially during wound healing."
  },
  
  
  
  
       ],
      },
  
  
  
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////Nervous Tissues/////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      {
        category: "Nervous Tissues",
        questions: [
          
    {
      question: "What are the two main parts of the nervous system?",
      options: [
        "Central Nervous System and Autonomic Nervous System",
        "Central Nervous System and Peripheral Nervous System",
        "Somatic Nervous System and Peripheral Nervous System",
        "Autonomic Nervous System and Somatic Nervous System",
      ],
      correctAnswer: "Central Nervous System and Peripheral Nervous System",
      explanation: "The nervous system is divided into the CNS, consisting of the brain and spinal cord, and the PNS, consisting of nerves and ganglia."
    },
    {
      question: "What is the main function of neurones?",
      options: [
        "To provide structural support to organs",
        "To gather and process information and generate response signals",
        "To store nutrients for the brain",
        "To protect the body against infections",
      ],
      correctAnswer: "To gather and process information and generate response signals",
      explanation: "Neurones are specialized cells that gather information, process it, and send response signals to different parts of the body."
    },
    {
      question: "Which type of cells form the myelin sheath in the Central Nervous System?",
      options: [
        "Schwann cells",
        "Astrocytes",
        "Microglia",
        "Oligodendrocytes",
      ],
      correctAnswer: "Oligodendrocytes",
      explanation: "Oligodendrocytes are responsible for forming myelin sheaths in the CNS, while Schwann cells perform this role in the PNS."
    },
    {
      question: "What is the function of microglia in the CNS?",
      options: [
        "Provide mechanical support to neurones",
        "Form the blood-brain barrier",
        "Phagocytic activity and defense",
        "Transmit nerve signals",
      ],
      correctAnswer: "Phagocytic activity and defense",
      explanation: "Microglia are the immune cells of the CNS, responsible for phagocytosing debris and pathogens."
    },
    {
      question: "Which structure of the neuron is responsible for transmitting action potentials to other neurons or effector organs?",
      options: [
        "Dendrites",
        "Axon",
        "Synapse",
        "Cell body",
      ],
      correctAnswer: "Axon",
      explanation: "The axon conducts action potentials away from the neuron's cell body to other neurons or effector organs."
    },
    {
      question: "What are synapses?",
      options: [
        "Junctions between neurons for transmission of action potentials",
        "Supportive cells for neurons",
        "Insulating sheaths around axons",
        "Regions where neurotransmitters are produced",
      ],
      correctAnswer: "Junctions between neurons for transmission of action potentials",
      explanation: "Synapses are specialized junctions where neurons transmit signals via neurotransmitters to other neurons."
    },
    {
      question: "Which part of the nervous system is responsible for involuntary actions like heart rate and digestion?",
      options: [
        "Somatic Nervous System",
        "Central Nervous System",
        "Peripheral Nervous System",
        "Autonomic Nervous System",
      ],
      correctAnswer: "Autonomic Nervous System",
      explanation: "The Autonomic Nervous System controls involuntary actions such as heart rate and digestion."
    },
    {
      question: "What happens during an epileptic seizure?",
      options: [
        "There is an abnormal increase in neurotransmitter production",
        "The regulation of neuronal excitability becomes abnormal, leading to uncontrolled depolarization",
        "Neurons stop functioning and die",
        "The synaptic transmission is enhanced",
      ],
      correctAnswer: "The regulation of neuronal excitability becomes abnormal, leading to uncontrolled depolarization",
      explanation: "Epileptic seizures occur due to abnormal regulation of neuronal excitability, causing uncontrolled spread of depolarization."
    },
    {
      question: "Which disease is characterized by the degeneration of motor neurons?",
      options: [
        "Multiple sclerosis",
        "Parkinson’s disease",
        "Motor neuron disease",
        "Alzheimer's disease",
      ],
      correctAnswer: "Motor neuron disease",
      explanation: "Motor neuron disease is characterized by the progressive degeneration and death of motor neurons."
    },
    {
      question: "What is the role of the blood-brain barrier?",
      options: [
        "Prevent nutrients from entering the brain",
        "Facilitate the transport of oxygen to neurons",
        "Prevent certain substances in the blood from entering the brain",
        "Provide structural support to neurons",
      ],
      correctAnswer: "Prevent certain substances in the blood from entering the brain",
      explanation: "The blood-brain barrier regulates the passage of substances between the blood and the brain to protect the CNS."
    },
    {
      question: "Which cells provide structural and metabolic support to neurons in the CNS?",
      options: [
        "Oligodendrocytes",
        "Astrocytes",
        "Microglia",
        "Schwann cells",
      ],
      correctAnswer: "Astrocytes",
      explanation: "Astrocytes are highly branched cells in the CNS that provide structural and metabolic support to neurons."
    },
    {
      question: "What happens to myelin sheaths in multiple sclerosis?",
      options: [
        "They become thicker, increasing conduction velocity",
        "They degrade, reducing effective signal transmission",
        "They enhance synaptic activity",
        "They regenerate after damage",
      ],
      correctAnswer: "They degrade, reducing effective signal transmission",
      explanation: "In multiple sclerosis, myelin sheaths degrade, leading to impaired signal transmission between neurons."
    },
    {
      question: "What are the primary sensory neurons called?",
      options: [
        "Multipolar neurons",
        "Pseudo-unipolar neurons",
        "Bipolar neurons",
        "Interneurons",
      ],
      correctAnswer: "Pseudo-unipolar neurons",
      explanation: "Primary sensory neurons are pseudo-unipolar, with a single process that divides into two branches."
    },
    {
      question: "Which cells in the PNS form the myelin sheath?",
      options: [
        "Astrocytes",
        "Oligodendrocytes",
        "Schwann cells",
        "Microglia",
      ],
      correctAnswer: "Schwann cells",
      explanation: "Schwann cells form the myelin sheath around axons in the Peripheral Nervous System (PNS)."
    },
    {
      question: "What type of neuron is involved in voluntary movement control?",
      options: [
        "Autonomic neurons",
        "Sensory neurons",
        "Motor neurons",
        "Interneurons",
      ],
      correctAnswer: "Motor neurons",
      explanation: "Motor neurons transmit signals from the CNS to muscles, controlling voluntary movement."
    },
    {
      question: "What structure protects axons and facilitates faster transmission of nerve signals?",
      options: [
        "Schwann cells",
        "Synapse",
        "Myelin sheath",
        "Dendrites",
      ],
      correctAnswer: "Myelin sheath",
      explanation: "The myelin sheath insulates axons and speeds up the transmission of nerve signals."
    },
    {
      question: "Which part of the neuron receives signals from other neurons?",
      options: [
        "Axon",
        "Cell body",
        "Dendrites",
        "Myelin sheath",
      ],
      correctAnswer: "Dendrites",
      explanation: "Dendrites are the branched projections that receive signals from other neurons."
    },
    {
      question: "What is the role of ependymal cells in the CNS?",
      options: [
        "Form the myelin sheath",
        "Line the ventricles and produce cerebrospinal fluid (CSF)",
        "Transmit nerve impulses",
        "Act as phagocytes",
      ],
      correctAnswer: "Line the ventricles and produce cerebrospinal fluid (CSF)",
      explanation: "Ependymal cells line the ventricles of the brain and produce cerebrospinal fluid, which cushions the CNS."
    },
    {
      question: "Which of the following describes the function of neurotransmitters?",
      options: [
        "Insulate neurons from electrical signals",
        "Transmit signals across synapses",
        "Store nutrients for neurons",
        "Generate action potentials in axons",
      ],
      correctAnswer: "Transmit signals across synapses",
      explanation: "Neurotransmitters are chemical messengers that transmit signals across synapses between neurons."
    },
    {
      question: "What type of neuron typically has a single axon and multiple dendrites?",
      options: [
        "Multipolar neurons",
        "Bipolar neurons",
        "Pseudo-unipolar neurons",
        "Interneurons",
      ],
      correctAnswer: "Multipolar neurons",
      explanation: "Multipolar neurons have a single axon and multiple dendrites, making them common in motor and integratory pathways."
    },
  
    {
      question: "Which cells in the CNS form the blood-brain barrier?",
      options: [
        "Oligodendrocytes",
        "Astrocytes",
        "Microglia",
        "Schwann cells",
      ],
      correctAnswer: "Astrocytes",
      explanation: "Astrocytes are involved in forming the blood-brain barrier by their foot processes surrounding the capillaries in the CNS."
    },
    {
      question: "What is the function of the choroid plexus in the CNS?",
      options: [
        "Regulate blood flow",
        "Produce cerebrospinal fluid",
        "Form synapses between neurons",
        "Provide immune defense",
      ],
      correctAnswer: "Produce cerebrospinal fluid",
      explanation: "The choroid plexus produces cerebrospinal fluid (CSF) that circulates in the CNS to cushion and protect it."
    },
    {
      question: "What type of neurons are found in the dorsal root ganglia?",
      options: [
        "Multipolar neurons",
        "Bipolar neurons",
        "Pseudo-unipolar neurons",
        "Interneurons",
      ],
      correctAnswer: "Pseudo-unipolar neurons",
      explanation: "The dorsal root ganglia contain pseudo-unipolar neurons, which are sensory neurons."
    },
    {
      question: "Which neuroglial cells are involved in phagocytosis in the CNS?",
      options: [
        "Astrocytes",
        "Oligodendrocytes",
        "Schwann cells",
        "Microglia",
      ],
      correctAnswer: "Microglia",
      explanation: "Microglia are the phagocytic cells of the CNS, removing debris and pathogens."
    },
    {
      question: "Which disease is characterized by the loss of myelin in the CNS?",
      options: [
        "Alzheimer's disease",
        "Parkinson’s disease",
        "Multiple sclerosis",
        "Huntington's disease",
      ],
      correctAnswer: "Multiple sclerosis",
      explanation: "Multiple sclerosis involves the degradation of myelin sheaths in the CNS, affecting signal transmission."
    },
    {
      question: "What is the primary function of Schwann cells in the PNS?",
      options: [
        "Transmit nerve impulses",
        "Form myelin sheaths",
        "Provide structural support",
        "Engage in phagocytosis",
      ],
      correctAnswer: "Form myelin sheaths",
      explanation: "Schwann cells form the myelin sheaths around peripheral nerves, facilitating faster signal transmission."
    },
    {
      question: "What is the role of the axon hillock in a neuron?",
      options: [
        "Synthesize neurotransmitters",
        "Receive signals from other neurons",
        "Generate action potentials",
        "Store ions for signal transmission",
      ],
      correctAnswer: "Generate action potentials",
      explanation: "The axon hillock is the region of the neuron where action potentials are generated."
    },
    {
      question: "Which cells line the ventricles of the brain?",
      options: [
        "Microglia",
        "Astrocytes",
        "Ependymal cells",
        "Oligodendrocytes",
      ],
      correctAnswer: "Ependymal cells",
      explanation: "Ependymal cells line the ventricles and are involved in the production and circulation of cerebrospinal fluid."
    },
    {
      question: "Which disease affects neuromuscular transmission by targeting acetylcholine receptors?",
      options: [
        "Parkinson’s disease",
        "Multiple sclerosis",
        "Myasthenia gravis",
        "Alzheimer's disease",
      ],
      correctAnswer: "Myasthenia gravis",
      explanation: "Myasthenia gravis is an autoimmune disease where antibodies attack acetylcholine receptors, impairing neuromuscular transmission."
    },
    {
      question: "What type of glial cells form myelin in the CNS?",
      options: [
        "Astrocytes",
        "Oligodendrocytes",
        "Microglia",
        "Schwann cells",
      ],
      correctAnswer: "Oligodendrocytes",
      explanation: "Oligodendrocytes are responsible for forming myelin sheaths around axons in the CNS."
    },
    {
      question: "Which part of the nervous system is responsible for the fight or flight response?",
      options: [
        "Central Nervous System",
        "Parasympathetic Nervous System",
        "Somatic Nervous System",
        "Sympathetic Nervous System",
      ],
      correctAnswer: "Sympathetic Nervous System",
      explanation: "The Sympathetic Nervous System is responsible for the fight or flight response, preparing the body for stress."
    },
    {
      question: "What is the primary role of neurotransmitters?",
      options: [
        "Transmit signals across a synapse",
        "Insulate axons",
        "Facilitate nutrient exchange",
        "Generate action potentials",
      ],
      correctAnswer: "Transmit signals across a synapse",
      explanation: "Neurotransmitters are chemical messengers that transmit signals from one neuron to another across a synapse."
    },
    {
      question: "Which part of the neuron typically receives signals from other neurons?",
      options: [
        "Axon",
        "Dendrites",
        "Myelin sheath",
        "Cell body",
      ],
      correctAnswer: "Dendrites",
      explanation: "Dendrites are the parts of the neuron that receive signals from other neurons and relay them to the cell body."
    },
    {
      question: "What structure surrounds bundles of nerve fibers in a peripheral nerve?",
      options: [
        "Endoneurium",
        "Perineurium",
        "Epineurium",
        "Myelin sheath",
      ],
      correctAnswer: "Perineurium",
      explanation: "The perineurium surrounds each bundle (fascicle) of nerve fibers in a peripheral nerve."
    },
    {
      question: "Which type of neuron typically has a single axon and multiple dendrites?",
      options: [
        "Multipolar neurons",
        "Bipolar neurons",
        "Pseudo-unipolar neurons",
        "Interneurons",
      ],
      correctAnswer: "Multipolar neurons",
      explanation: "Multipolar neurons, commonly found in motor pathways, have a single axon and multiple dendrites."
    },
    {
      question: "Which of the following best describes the role of dendrites in neurons?",
      options: [
        "Transmit signals to other neurons",
        "Synthesize neurotransmitters",
        "Receive incoming signals from other neurons",
        "Generate action potentials",
      ],
      correctAnswer: "Receive incoming signals from other neurons",
      explanation: "Dendrites are the branch-like structures that receive incoming signals from other neurons and transmit them to the cell body."
    },
    {
      question: "What type of cells are responsible for forming the myelin sheath in the Peripheral Nervous System?",
      options: [
        "Microglia",
        "Oligodendrocytes",
        "Schwann cells",
        "Astrocytes",
      ],
      correctAnswer: "Schwann cells",
      explanation: "Schwann cells form the myelin sheath around axons in the Peripheral Nervous System."
    },
    {
      question: "What is the role of interneurons in the nervous system?",
      options: [
        "Relay signals between sensory and motor neurons",
        "Transmit sensory signals to the brain",
        "Stimulate muscle contractions",
        "Regulate blood flow in the brain",
      ],
      correctAnswer: "Relay signals between sensory and motor neurons",
      explanation: "Interneurons act as intermediaries in the central nervous system, relaying signals between sensory and motor neurons."
    },
    {
      question: "Which type of glial cells help form the blood-brain barrier?",
      options: [
        "Schwann cells",
        "Astrocytes",
        "Microglia",
        "Oligodendrocytes",
      ],
      correctAnswer: "Astrocytes",
      explanation: "Astrocytes help form the blood-brain barrier, controlling the movement of substances from the bloodstream into the brain."
    },
  
  
  
    {
      question: "What is the function of the Nodes of Ranvier?",
      options: [
        "Provide nutrients to neurons",
        "Facilitate rapid conduction of nerve impulses",
        "Secrete neurotransmitters",
        "Connect neurons to capillaries",
      ],
      correctAnswer: "Facilitate rapid conduction of nerve impulses",
      explanation: "Nodes of Ranvier are gaps in the myelin sheath that allow for saltatory conduction, speeding up the transmission of action potentials."
    },
    {
      question: "Which part of the neuron contains the nucleus and most organelles?",
      options: [
        "Dendrites",
        "Axon",
        "Synapse",
        "Cell body (Soma)",
      ],
      correctAnswer: "Cell body (Soma)",
      explanation: "The cell body, also known as the soma, contains the nucleus and most of the cell's organelles, managing metabolic activity."
    },
    {
      question: "Which neurotransmitter is commonly associated with the parasympathetic nervous system?",
      options: [
        "Dopamine",
        "Acetylcholine",
        "Serotonin",
        "Norepinephrine",
      ],
      correctAnswer: "Acetylcholine",
      explanation: "Acetylcholine is the primary neurotransmitter used by the parasympathetic nervous system to stimulate 'rest and digest' activities."
    },
    {
      question: "What type of glial cells in the CNS act as phagocytes to remove debris and pathogens?",
      options: [
        "Astrocytes",
        "Microglia",
        "Oligodendrocytes",
        "Ependymal cells",
      ],
      correctAnswer: "Microglia",
      explanation: "Microglia are the resident immune cells of the CNS, acting as phagocytes to clean up debris and protect against infections."
    },
    {
      question: "Which part of the brain is responsible for coordinating voluntary movements and balance?",
      options: [
        "Cerebrum",
        "Cerebellum",
        "Medulla oblongata",
        "Thalamus",
      ],
      correctAnswer: "Cerebellum",
      explanation: "The cerebellum coordinates voluntary movements such as posture, balance, and coordination, ensuring smooth and precise actions."
    },
    {
      question: "What type of neuron carries impulses away from the CNS to muscles or glands?",
      options: [
        "Sensory neurons",
        "Interneurons",
        "Motor neurons",
        "Bipolar neurons",
      ],
      correctAnswer: "Motor neurons",
      explanation: "Motor neurons carry impulses from the CNS to muscles or glands, causing them to respond (e.g., contract or secrete)."
    },
    {
      question: "Which part of the neuron integrates incoming signals and determines if an action potential will be initiated?",
      options: [
        "Dendrites",
        "Axon hillock",
        "Synapse",
        "Myelin sheath",
      ],
      correctAnswer: "Axon hillock",
      explanation: "The axon hillock is the region where incoming signals are summed, and if the threshold is reached, it initiates an action potential."
    },
    {
      question: "Which ion is primarily responsible for the depolarization phase of an action potential?",
      options: [
        "Potassium",
        "Sodium",
        "Calcium",
        "Chloride",
      ],
      correctAnswer: "Sodium",
      explanation: "During depolarization, sodium ions rush into the neuron, causing the inside of the cell to become more positively charged."
    },
    {
      question: "What is the function of Schwann cells in the PNS?",
      options: [
        "Transmit sensory signals",
        "Produce cerebrospinal fluid",
        "Form myelin sheaths around axons",
        "Facilitate synaptic transmission",
      ],
      correctAnswer: "Form myelin sheaths around axons",
      explanation: "Schwann cells form myelin sheaths around axons in the peripheral nervous system, facilitating faster transmission of nerve impulses."
    },
    {
      question: "What is the main function of the spinal cord in the nervous system?",
      options: [
        "Process emotions",
        "Relay information between the brain and the rest of the body",
        "Regulate hormone production",
        "Control involuntary muscle movements",
      ],
      correctAnswer: "Relay information between the brain and the rest of the body",
      explanation: "The spinal cord acts as a conduit for signals between the brain and the rest of the body, enabling sensory input and motor output."
    },
  
  
  //changes made here 
  
  
    {
      question: "What are the three main types of neurons based on their structure?",
      options: [
        "Multipolar, Unipolar, Bipolar",
        "Sensory, Motor, Interneuron",
        "Pyramidal, Stellate, Granular",
        "Central, Peripheral, Somatic",
      ],
      correctAnswer: "Multipolar, Unipolar, Bipolar",
      explanation: "Neurons are classified based on the number of processes extending from the cell body. Multipolar neurons have many processes, bipolar neurons have two, and unipolar neurons have one."
    },
    {
      question: "What is the function of dendrites in a neuron?",
      options: [
        "Transmit impulses to other neurons",
        "Receive signals from other neurons",
        "Produce myelin",
        "Store neurotransmitters",
      ],
      correctAnswer: "Receive signals from other neurons",
      explanation: "Dendrites are the branched extensions of neurons that receive signals from other neurons and transmit them towards the cell body."
    },
    {
      question: "Which cells produce cerebrospinal fluid in the CNS?",
      options: [
        "Microglia",
        "Ependymal cells",
        "Astrocytes",
        "Oligodendrocytes",
      ],
      correctAnswer: "Ependymal cells",
      explanation: "Ependymal cells line the ventricles of the brain and the central canal of the spinal cord, and they are responsible for producing cerebrospinal fluid (CSF)."
    },
    {
      question: "What type of neuron is involved in transmitting sensory information to the central nervous system?",
      options: [
        "Motor neurons",
        "Interneurons",
        "Sensory neurons",
        "Bipolar neurons",
      ],
      correctAnswer: "Sensory neurons",
      explanation: "Sensory neurons (afferent neurons) transmit sensory information from receptors to the central nervous system."
    },
    {
      question: "Which part of the neuron is responsible for transmitting signals away from the cell body?",
      options: [
        "Dendrites",
        "Nucleus",
        "Axon",
        "Synapse",
      ],
      correctAnswer: "Axon",
      explanation: "The axon is the long projection of the neuron that transmits electrical impulses away from the cell body towards other neurons or muscles."
    },
    {
      question: "Which neurotransmitter is primarily involved in muscle contraction?",
      options: [
        "Dopamine",
        "Serotonin",
        "Acetylcholine",
        "GABA",
      ],
      correctAnswer: "Acetylcholine",
      explanation: "Acetylcholine is a neurotransmitter that is released at neuromuscular junctions to stimulate muscle contraction."
    },
    {
      question: "What is the resting membrane potential of a neuron?",
      options: [
        "0 mV",
        "-70 mV",
        "-90 mV",
        "30 mV",
      ],
      correctAnswer: "-70 mV",
      explanation: "The resting membrane potential is the electrical charge difference across the neuron's membrane when the neuron is not transmitting a signal, typically around -70 mV."
    },
    {
      question: "What happens during the repolarization phase of an action potential?",
      options: [
        "Sodium ions enter the neuron",
        "Potassium ions exit the neuron",
        "Calcium ions bind to receptors",
        "The neuron becomes hyperpolarized",
      ],
      correctAnswer: "Potassium ions exit the neuron",
      explanation: "During repolarization, potassium ions exit the neuron, restoring the negative charge inside the neuron after depolarization."
    },
    {
      question: "What is the role of oligodendrocytes in the CNS?",
      options: [
        "Transmit nerve signals",
        "Form myelin sheaths around axons",
        "Remove pathogens",
        "Produce cerebrospinal fluid",
      ],
      correctAnswer: "Form myelin sheaths around axons",
      explanation: "Oligodendrocytes form myelin sheaths around the axons of neurons in the central nervous system, speeding up signal transmission."
    },
    {
      question: "Which condition is caused by the loss of dopamine-producing neurons?",
      options: [
        "Alzheimer's disease",
        "Multiple sclerosis",
        "Parkinson's disease",
        "Epilepsy",
      ],
      correctAnswer: "Parkinson's disease",
      explanation: "Parkinson's disease is caused by the degeneration of dopamine-producing neurons in the substantia nigra, leading to motor impairments."
    },
    {
      question: "What is the main function of astrocytes in the nervous system?",
      options: [
        "Generate action potentials",
        "Transmit nerve signals",
        "Provide structural and metabolic support to neurons",
        "Form myelin sheaths",
      ],
      correctAnswer: "Provide structural and metabolic support to neurons",
      explanation: "Astrocytes are star-shaped glial cells that provide structural support, regulate the extracellular environment, and contribute to the blood-brain barrier."
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
  
  
  
  
  