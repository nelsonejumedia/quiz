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
  //////////////////////////////////Introduction to Physiology///////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      {
        category: "Introduction",
        questions: [
          
    
  
  {
    question: "What does embryology study?",
    options: [
      "The formation of organs after birth",
      "The development of an organism from fertilization to birth",
      "The genetic makeup of embryos",
      "Diseases that affect the embryo"
    ],
    correctAnswer: "The development of an organism from fertilization to birth",
    explanation: "Embryology studies the stages of development, from fertilization of the egg to the formation of a complete organism."
  },
  {
    question: "What is spermatogenesis?",
    options: [
      "The production of female gametes",
      "The process of sperm maturation and production",
      "The fusion of male and female gametes",
      "The division of zygotes into blastomeres"
    ],
    correctAnswer: "The process of sperm maturation and production",
    explanation: "Spermatogenesis is the process through which male gametes (sperm) are formed in the testes."
  },
  {
    question: "When do oogonia stop dividing by mitosis?",
    options: [
      "During childhood",
      "By the fifth month of fetal life",
      "During puberty",
      "After fertilization"
    ],
    correctAnswer: "By the fifth month of fetal life",
    explanation: "Oogonia stop dividing by mitosis during fetal development, around the fifth month of gestation."
  },

{
    question: "At what stage do spermatogonia differentiate into type B spermatogonia?",
    options: [
      "Spermatogonial phase",
      "Meiotic phase",
      "Spermiogenesis",
      "Gastrulation phase"
    ],
    correctAnswer: "Spermatogonial phase",
    explanation: "During the spermatogonial phase, type A spermatogonia undergo mitosis to form type B spermatogonia, which later proceed to meiosis."
  },


  {
    question: "What is capacitation?",
    options: [
      "The formation of the blastocyst",
      "The maturation process sperm undergo in the female reproductive tract",
      "The process of egg implantation",
      "The division of a zygote into two cells"
    ],
    correctAnswer: "The maturation process sperm undergo in the female reproductive tract",
    explanation: "Capacitation prepares sperm for fertilization by enhancing their motility and ability to penetrate the egg."
  },
  {
    question: "Where does fertilization typically occur?",
    options: [
      "In the ovary",
      "In the ampulla of the uterine tube",
      "In the uterus",
      "In the cervix"
    ],
    correctAnswer: "In the ampulla of the uterine tube",
    explanation: "The ampulla of the uterine tube is the most common site of fertilization due to its proximity to the released oocyte."
  },
  {
    question: "What is the zona pellucida?",
    options: [
      "A protective glycoprotein layer surrounding the oocyte",
      "The outer layer of the sperm",
      "A cavity inside the blastocyst",
      "The fluid-filled area in a mature follicle"
    ],
    correctAnswer: "A protective glycoprotein layer surrounding the oocyte",
    explanation: "The zona pellucida facilitates sperm binding and protects the oocyte before fertilization."
  },
  {
    question: "How many chromosomes does a human zygote contain?",
    options: ["23", "46", "92", "48"],
    correctAnswer: "46",
    explanation: "The human zygote is diploid, containing 46 chromosomes—23 from each parent."
  },
  {
    question: "What is the morula?",
    options: [
      "A single-celled zygote",
      "A solid ball of cells resulting from cleavage",
      "A fluid-filled blastocyst",
      "The germ layer forming during gastrulation"
    ],
    correctAnswer: "A solid ball of cells resulting from cleavage",
    explanation: "The morula is the stage following cleavage where cells form a compact mass."
  },
  {
    question: "What process transforms a zygote into a blastocyst?",
    options: ["Cleavage", "Fertilization", "Gastrulation", "Capacitation"],
    correctAnswer: "Cleavage",
    explanation: "Cleavage is a series of mitotic divisions that results in the formation of a blastocyst."
  },
  {
    question: "What does the trophoblast of a blastocyst develop into?",
    options: [
      "The embryo",
      "The placenta and fetal membranes",
      "The amniotic cavity",
      "The yolk sac"
    ],
    correctAnswer: "The placenta and fetal membranes",
    explanation: "The trophoblast forms the outer layer of the blastocyst and contributes to placental development."
  },
  {
    question: "What is the main function of the corpus luteum?",
    options: [
      "To release mature eggs",
      "To maintain progesterone production for early pregnancy",
      "To stimulate spermatogenesis",
      "To aid in cleavage of the zygote"
    ],
    correctAnswer: "To maintain progesterone production for early pregnancy",
    explanation: "The corpus luteum secretes progesterone, crucial for maintaining the uterine lining during pregnancy."
  },
  {
    question: "What is gastrulation?",
    options: [
      "Fusion of male and female pronuclei",
      "Formation of the primary germ layers",
      "Implantation of the blastocyst",
      "Development of the placenta"
    ],
    correctAnswer: "Formation of the primary germ layers",
    explanation: "Gastrulation establishes the three germ layers (ectoderm, mesoderm, and endoderm), which give rise to all tissues and organs."
  },
  {
    question: "What does the ectoderm give rise to?",
    options: [
      "The digestive tract",
      "The nervous system and skin",
      "The circulatory system",
      "The muscular system"
    ],
    correctAnswer: "The nervous system and skin",
    explanation: "The ectoderm forms the nervous system, skin, and associated structures."
  },
  {
    question: "Which hormone triggers ovulation?",
    options: [
      "Progesterone",
      "Luteinizing hormone (LH)",
      "Follicle-stimulating hormone (FSH)",
      "Estrogen"
    ],
    correctAnswer: "Luteinizing hormone (LH)",
    explanation: "A surge in LH levels triggers ovulation, releasing the oocyte from the follicle."
  },
  {
    question: "How is polyspermy prevented during fertilization?",
    options: [
      "By releasing enzymes from the acrosome",
      "By the cortical reaction",
      "By multiple sperm binding to the zona pellucida",
      "By capacitation"
    ],
    correctAnswer: "By the cortical reaction",
    explanation: "The cortical reaction alters the zona pellucida, preventing further sperm entry after the first sperm penetrates."
  },
  {
    question: "What structure forms from the inner cell mass of the blastocyst?",
    options: ["Trophoblast", "Embryo proper", "Amnion", "Zona pellucida"],
    correctAnswer: "Embryo proper",
    explanation: "The inner cell mass gives rise to the embryo, while the trophoblast contributes to the placenta."
  },


{
    question: "What does the blastocyst consist of?",
    options: [
      "Only the embryoblast",
      "Only the trophoblast",
      "An embryoblast, trophoblast, and a fluid-filled cavity",
      "A solid mass of cells"
    ],
    correctAnswer: "An embryoblast, trophoblast, and a fluid-filled cavity",
    explanation: "The blastocyst consists of the inner embryoblast, outer trophoblast, and a fluid-filled cavity called the blastocele."
  },


{
    question: "What is the function of luteinizing hormone (LH) in females?",
    options: [
      "Stimulating sperm production",
      "Triggering ovulation and corpus luteum formation",
      "Initiating mitosis in oogonia",
      "Inducing the acrosome reaction in sperm"
    ],
    correctAnswer: "Triggering ovulation and corpus luteum formation",
    explanation: "LH triggers ovulation and helps in the formation of the corpus luteum, which secretes progesterone for uterine preparation."
  },


  {
    question: "What is the duration of spermatogenesis in humans?",
    options: ["24 hours", "64-72 days", "9 months", "1 year"],
    correctAnswer: "64-72 days",
    explanation: "Spermatogenesis takes approximately 64-72 days to produce mature sperm cells."
  },
  {
    question: "What does the endoderm give rise to?",
    options: [
      "The brain and spinal cord",
      "The gastrointestinal tract and respiratory system",
      "The heart and blood vessels",
      "The skeletal muscles"
    ],
    correctAnswer: "The gastrointestinal tract and respiratory system",
    explanation: "The endoderm forms the lining of the digestive and respiratory tracts, among other structures."
  },


{
  question: "What is the difference between cell division and cell differentiation?",
  options: [
    "Cell division refers to the process by which a parent cell divides into two or more daughter cells, while cell differentiation refers to the process by which a cell changes into a specialized cell type.",
    "Cell division involves genetic changes, while cell differentiation does not involve genetic changes.",
    "Cell division occurs only in the early stages of life, while cell differentiation occurs throughout life.",
    "Cell division is specific to eukaryotes, while cell differentiation is specific to prokaryotes."
  ],
  correctAnswer: "Cell division refers to the process by which a parent cell divides into two or more daughter cells, while cell differentiation refers to the process by which a cell changes into a specialized cell type.",
  explanation: "Cell division produces new cells for growth, repair, or reproduction. Differentiation involves cells developing specific structures and functions to perform specialized roles in the body."
},
{
  question: "What happens in the first phase of spermatogonia?",
  options: [
    "Spermatogonia undergo meiosis to form primary spermatocytes.",
    "Spermatogonia remain dormant until puberty.",
    "Spermatogonia undergo mitosis to produce more spermatogonia",
    "Spermatogonia differentiate into mature sperm cells."
  ],
  correctAnswer: "Spermatogonia undergo mitosis to produce more spermatogonia",
  explanation: "In the first phase, spermatogonia divide mitotically to maintain their numbers and produce cells that will later differentiate into primary spermatocytes."
},


  {
    question: "Which of the following is true about oogenesis?",
    options: [
      "It continues throughout a woman's lifetime",
      "It begins before birth and pauses until puberty",
      "It produces four functional gametes from one oogonium",
      "It is completed by the time of fertilization"
    ],
    correctAnswer: "It begins before birth and pauses until puberty",
    explanation: "Oogenesis begins in fetal life, halts at prophase I, and resumes at puberty during the menstrual cycle."
  },
  {
    question: "What is the first stage of embryonic cleavage called?",
    options: ["Morula", "Blastula", "Two-cell stage", "Gastrula"],
    correctAnswer: "Two-cell stage",
    explanation: "The zygote divides into two cells in the first stage of cleavage, marking the beginning of embryonic development."
  },


  {
    question: "What is the significance of the acrosome in sperm?",
    options: [
      "It contains mitochondria to power sperm motility",
      "It provides enzymes to penetrate the zona pellucida",
      "It binds to the oocyte plasma membrane",
      "It triggers the cortical reaction"
    ],
    correctAnswer: "It provides enzymes to penetrate the zona pellucida",
    explanation: "The acrosome contains enzymes like hyaluronidase that help the sperm penetrate the zona pellucida for fertilization."
  },
  {
    question: "What structure is responsible for secreting human chorionic gonadotropin (hCG)?",
    options: [
      "Corpus luteum",
      "Trophoblast",
      "Inner cell mass",
      "Zona pellucida"
    ],
    correctAnswer: "Trophoblast",
    explanation: "The trophoblast of the blastocyst secretes hCG to maintain the corpus luteum and support pregnancy."
  },
  {
    question: "What phase of meiosis is the secondary oocyte arrested in until fertilization?",
    options: ["Prophase I", "Metaphase II", "Anaphase I", "Telophase II"],
    correctAnswer: "Metaphase II",
    explanation: "The secondary oocyte is arrested in metaphase II and completes meiosis only after fertilization."
  },
  {
    question: "Which germ layer gives rise to the heart and blood vessels?",
    options: [
      "Ectoderm",
      "Mesoderm",
      "Endoderm",
      "Neural crest cells"
    ],
    correctAnswer: "Mesoderm",
    explanation: "The mesoderm forms the cardiovascular system, including the heart and blood vessels."
  },
  {
    question: "What event marks the beginning of implantation?",
    options: [
      "Attachment of the blastocyst to the endometrium",
      "Cleavage of the zygote",
      "Fertilization of the oocyte",
      "Formation of the morula"
    ],
    correctAnswer: "Attachment of the blastocyst to the endometrium",
    explanation: "Implantation begins when the blastocyst adheres to the endometrial lining of the uterus."
  },
  {
    question: "Which structure develops into the umbilical cord?",
    options: [
      "Amniotic sac",
      "Connecting stalk",
      "Allantois",
      "Trophoblast"
    ],
    correctAnswer: "Connecting stalk",
    explanation: "The connecting stalk evolves into the umbilical cord, providing a link between the embryo and placenta."
  },
  {
    question: "What is the primary role of the yolk sac in humans?",
    options: [
      "Providing nutrients to the embryo",
      "Forming the fetal blood cells in early development",
      "Acting as a respiratory organ",
      "Protecting the embryo from mechanical shocks"
    ],
    correctAnswer: "Forming the fetal blood cells in early development",
    explanation: "The yolk sac is important for early hematopoiesis and development of primordial germ cells."
  },
  {
    question: "At what stage does the zona pellucida disintegrate?",
    options: [
      "Morula",
      "Blastocyst",
      "Gastrula",
      "Two-cell stage"
    ],
    correctAnswer: "Blastocyst",
    explanation: "The zona pellucida dissolves at the blastocyst stage, enabling implantation in the uterus."
  },
  {
    question: "What process occurs after the cortical reaction in fertilization?",
    options: [
      "Cleavage begins",
      "Polyspermy is blocked",
      "The morula is formed",
      "The sperm fuses with the egg nucleus"
    ],
    correctAnswer: "Polyspermy is blocked",
    explanation: "The cortical reaction alters the zona pellucida to prevent additional sperm from fertilizing the egg."
  },
  {
    question: "What is the origin of the amniotic cavity?",
    options: [
      "It forms within the epiblast",
      "It develops from the trophoblast",
      "It arises from the yolk sac",
      "It originates in the hypoblast"
    ],
    correctAnswer: "It forms within the epiblast",
    explanation: "The amniotic cavity forms between the epiblast and trophoblast during early embryogenesis."
  },
  {
    question: "What is the primary purpose of the primitive streak?",
    options: [
      "To facilitate sperm penetration during fertilization",
      "To mark the site of gastrulation",
      "To support implantation in the uterus",
      "To assist in cleavage of the zygote"
    ],
    correctAnswer: "To mark the site of gastrulation",
    explanation: "The primitive streak is essential for establishing body axes and initiating gastrulation."
  },
  {
    question: "Which structure forms the placenta?",
    options: [
      "Trophoblast and endometrium",
      "Inner cell mass and yolk sac",
      "Amniotic sac and chorionic villi",
      "Zona pellucida and morula"
    ],
    correctAnswer: "Trophoblast and endometrium",
    explanation: "The placenta is formed by the trophoblast of the embryo and the endometrium of the mother."
  },
  {
    question: "At what week does the fetal period begin?",
    options: ["4th week", "9th week", "16th week", "20th week"],
    correctAnswer: "9th week",
    explanation: "The fetal period begins at the 9th week, marking the transition from embryonic development."
  },
  {
    question: "What is the fate of the hypoblast during development?",
    options: [
      "It forms the ectoderm",
      "It contributes to the endoderm of the yolk sac",
      "It gives rise to the nervous system",
      "It degenerates after gastrulation"
    ],
    correctAnswer: "It contributes to the endoderm of the yolk sac",
    explanation: "The hypoblast forms the endodermal lining of the yolk sac and supports early development."
  },
  {
    question: "Which structure prevents maternal and fetal blood from mixing directly?",
    options: [
      "Amniotic membrane",
      "Placental barrier",
      "Zona pellucida",
      "Trophoblastic villi"
    ],
    correctAnswer: "Placental barrier",
    explanation: "The placental barrier separates maternal 