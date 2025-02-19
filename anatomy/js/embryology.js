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
        category: "General Questions",
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
    explanation: "The placental barrier separates maternal and fetal blood, facilitating nutrient and gas exchange without mixing."
  },
  {
    question: "Which cells are responsible for forming the chorionic villi?",
    options: [
      "Epiblast cells",
      "Syncytiotrophoblast cells",
      "Cytotrophoblast cells",
      "Mesodermal cells"
    ],
    correctAnswer: "Syncytiotrophoblast cells",
    explanation: "Syncytiotrophoblast cells invade the uterine lining and form the chorionic villi for placental attachment."
  },
  {
    question: "What process allows the oocyte to complete meiosis?",
    options: [
      "Cleavage",
      "Fertilization",
      "Ovulation",
      "Implantation"
    ],
    correctAnswer: "Fertilization",
    explanation: "Fertilization triggers the oocyte to complete meiosis II, forming a mature ovum and polar body."
  },
  {
    question: "What is the primary germ layer responsible for forming muscles?",
    options: [
      "Ectoderm",
      "Mesoderm",
      "Endoderm",
      "Trophoblast"
    ],
    correctAnswer: "Mesoderm",
    explanation: "The mesoderm gives rise to skeletal, smooth, and cardiac muscles, along with other structures."
  },
  {
    question: "Which stage of development involves the formation of somites?",
    options: [
      "Neurulation",
      "Cleavage",
      "Gastrulation",
      "Blastulation"
    ],
    correctAnswer: "Neurulation",
    explanation: "Somites form during neurulation from paraxial mesoderm and contribute to the axial skeleton and muscles."
  },
  {
    question: "What is the role of the notochord in development?",
    options: [
      "To form the brain and spinal cord",
      "To induce the formation of the neural tube",
      "To support trophoblast invasion",
      "To give rise to the endoderm"
    ],
    correctAnswer: "To induce the formation of the neural tube",
    explanation: "The notochord secretes signals that induce the overlying ectoderm to form the neural tube."
  },

],
      },

  
  
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// //Gastrulation ////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
        
  {
      category: "Gastrulation",
      questions: [





{
    question: "What is the primary process by which the three germ layers are formed during embryonic development?",
    options: ["Neurulation", "Gastrulation", "Organogenesis", "Fertilization"],
    correctAnswer: "Gastrulation",
    explanation: "Gastrulation is the process where epiblastic cells migrate through the primitive streak to form the three germ layers: ectoderm, mesoderm, and endoderm."
  },
  {
    question: "Which structure acts as the site of cell migration during gastrulation?",
    options: ["Neural tube", "Primitive streak", "Somites", "Notochord"],
    correctAnswer: "Primitive streak",
    explanation: "During gastrulation, epiblastic cells migrate through the primitive streak to establish the three germ layers."
  },
  {
    question: "Which germ layer gives rise to the nervous system?",
    options: ["Mesoderm", "Endoderm", "Ectoderm", "Neural crest"],
    correctAnswer: "Ectoderm",
    explanation: "The ectoderm differentiates into the nervous system through the process of neurulation."
  },
  {
    question: "At what day does the cranial neuropore close?",
    options: ["Day 23", "Day 25", "Day 27", "Day 30"],
    correctAnswer: "Day 25",
    explanation: "The cranial neuropore closes on day 25, while the caudal neuropore closes on day 27."
  },
  {
    question: "Which structure forms first during neurulation?",
    options: ["Neural tube", "Neural crest cells", "Neural groove", "Neural plate"],
    correctAnswer: "Neural plate",
    explanation: "The neural plate is the first structure to form during neurulation, which later folds to form the neural tube."
  },
  {
    question: "Neural crest cells from the cranial region contribute to which of the following?",
    options: ["Craniofacial skeleton", "Spinal cord", "Epithelial lining of the gut", "Kidneys"],
    correctAnswer: "Craniofacial skeleton",
    explanation: "Cranial neural crest cells migrate and differentiate into cranial ganglia, glial cells, melanocytes, and the craniofacial skeleton."
  },
  {
    question: "Which germ layer gives rise to the urogenital system?",
    options: ["Ectoderm", "Mesoderm", "Endoderm", "Neural crest"],
    correctAnswer: "Mesoderm",
    explanation: "The intermediate mesoderm forms the urogenital system, including the kidneys and gonads."
  },
  {
    question: "Which of the following is derived from the paraxial mesoderm?",
    options: ["Heart", "Dermis", "Liver", "Lungs"],
    correctAnswer: "Dermis",
    explanation: "The paraxial mesoderm forms somites, which differentiate into the sclerotome (bones), myotome (muscles), and dermatome (dermis)."
  },
  {
    question: "A mutation affecting neural crest cell migration may lead to defects in which structure?",
    options: ["Liver", "Lungs", "Peripheral nervous system", "Intestinal epithelium"],
    correctAnswer: "Peripheral nervous system",
    explanation: "Neural crest cells contribute to the peripheral nervous system, including sympathetic neurons and Schwann cells."
  },
  {
    question: "Which part of the mesoderm contributes to the formation of the heart and blood vessels?",
    options: ["Paraxial mesoderm", "Intermediate mesoderm", "Lateral plate mesoderm", "Neural crest"],
    correctAnswer: "Lateral plate mesoderm",
    explanation: "The splanchnic layer of the lateral plate mesoderm gives rise to the heart and blood vessels."
  },
  {
    question: "The serous membranes lining the pericardial, pleural, and peritoneal cavities originate from which layer?",
    options: ["Ectoderm", "Mesoderm", "Endoderm", "Neural crest"],
    correctAnswer: "Mesoderm",
    explanation: "The lateral plate mesoderm forms the serous membranes lining these cavities."
  },
  {
    question: "Which of the following structures originates from the endoderm?",
    options: ["Brain", "Kidneys", "Lungs", "Bones"],
    correctAnswer: "Lungs",
    explanation: "The endoderm forms the epithelial lining of the respiratory tract, including the lungs."
  },
  {
    question: "What happens if the caudal neuropore fails to close?",
    options: ["Anencephaly", "Spina bifida", "Microcephaly", "Hydrocephalus"],
    correctAnswer: "Spina bifida",
    explanation: "Failure of caudal neuropore closure leads to spina bifida, a defect in spinal cord development."
  },
  {
    question: "The epithelial lining of the gastrointestinal tract is derived from which germ layer?",
    options: ["Ectoderm", "Mesoderm", "Endoderm", "Neural crest"],
    correctAnswer: "Endoderm",
    explanation: "The endoderm forms the epithelial lining of the digestive tract and associated organs."
  },
  {
    question: "Which germ layer contributes to the formation of skeletal muscles?",
    options: ["Ectoderm", "Endoderm", "Paraxial mesoderm", "Lateral plate mesoderm"],
    correctAnswer: "Paraxial mesoderm",
    explanation: "The paraxial mesoderm forms somites, which differentiate into skeletal muscles."
  },
  {
    question: "The notochord, an important structure for neural induction, is derived from which germ layer?",
    options: ["Ectoderm", "Mesoderm", "Endoderm", "Neural crest"],
    correctAnswer: "Mesoderm",
    explanation: "The notochord is derived from the mesoderm and plays a role in neural tube formation."
  },
  {
    question: "Which structure separates the somatopleuric and splanchnic layers of the lateral plate mesoderm?",
    options: ["Neural plate", "Coelomic cavity", "Pericardial membrane", "Neural crest cells"],
    correctAnswer: "Coelomic cavity",
    explanation: "The coelomic cavity separates the somatopleuric and splanchnic layers, allowing for organ development."
  },
  {
    question: "Which of the following is NOT derived from neural crest cells?",
    options: ["Schwann cells", "Melanocytes", "Sensory ganglia", "Liver cells"],
    correctAnswer: "Liver cells",
    explanation: "The liver is derived from the endoderm, while Schwann cells, melanocytes, and sensory ganglia come from neural crest cells."
  },
  {
    question: "Which structure is the precursor to the spinal cord?",
    options: ["Neural plate", "Neural tube", "Neural crest", "Primitive streak"],
    correctAnswer: "Neural tube",
    explanation: "The caudal portion of the neural tube develops into the spinal cord."
  },
  {
    question: "The thyroid gland originates from which germ layer?",
    options: ["Ectoderm", "Mesoderm", "Endoderm", "Neural crest"],
    correctAnswer: "Endoderm",
    explanation: "The thyroid gland originates from the endoderm and develops from the pharyngeal region."
  },
  {
    question: "Which process describes the movement of neural crest cells to various parts of the embryo?",
    options: ["Induction", "Differentiation", "Migration", "Gastrulation"],
    correctAnswer: "Migration",
    explanation: "Neural crest cells migrate extensively to form various structures like cranial ganglia and melanocytes."
  },

  {
    question: "Which germ layer forms the neural tube?",
    options: ["Ectoderm", "Mesoderm", "Endoderm", "Neural crest cells"],
    correctAnswer: "Ectoderm",
    explanation: "The ectoderm undergoes neurulation, leading to the formation of the neural tube, which later develops into the central nervous system."
  },
  {
    question: "During gastrulation, epiblastic cells migrate through which structure?",
    options: ["Neural tube", "Primitive streak", "Neural plate", "Blastocoel"],
    correctAnswer: "Primitive streak",
    explanation: "Epiblastic cells migrate through the primitive streak in a craniocaudal direction to establish the three germ layers."
  },
  {
    question: "What is the function of the neural crest cells that migrate dorsally?",
    options: ["Form the spinal cord", "Give rise to melanocytes", "Develop into somites", "Contribute to the gut tube"],
    correctAnswer: "Give rise to melanocytes",
    explanation: "Neural crest cells that migrate dorsally contribute to the formation of melanocytes, which produce melanin in the skin and hair follicles."
  },
  {
    question: "On which day does the cranial neuropore close?",
    options: ["Day 20", "Day 25", "Day 27", "Day 30"],
    correctAnswer: "Day 25",
    explanation: "The cranial neuropore closes on day 25, while the caudal neuropore closes on day 27."
  },
  {
    question: "Which part of the neural tube gives rise to the spinal cord?",
    options: ["Cranial portion", "Caudal portion", "Neural crest cells", "Forebrain"],
    correctAnswer: "Caudal portion",
    explanation: "The caudal portion of the neural tube develops into the spinal cord."
  },
  {
    question: "Which of the following is NOT derived from the ectoderm?",
    options: ["Central nervous system", "Epidermis", "Liver", "Hair"],
    correctAnswer: "Liver",
    explanation: "The liver is derived from the endoderm, while the ectoderm gives rise to structures like the CNS, epidermis, and hair."
  },
  {
    question: "Which layer of the lateral plate mesoderm contributes to the formation of the heart?",
    options: ["Somatopleuric layer", "Splanchnic layer", "Intermediate mesoderm", "Paraxial mesoderm"],
    correctAnswer: "Splanchnic layer",
    explanation: "The splanchnic layer of the lateral plate mesoderm contributes to the formation of the heart, blood vessels, and smooth muscle of the digestive tract."
  },
  {
    question: "What is the role of the nephrotomes formed by the intermediate mesoderm?",
    options: ["Give rise to sensory neurons", "Form part of the kidney", "Develop into the spinal cord", "Contribute to the heart"],
    correctAnswer: "Form part of the kidney",
    explanation: "The nephrotomes, derived from the cranial part of the intermediate mesoderm, contribute to the formation of the kidney."
  },
  {
    question: "Which germ layer gives rise to the epithelial lining of the gastrointestinal tract?",
    options: ["Ectoderm", "Mesoderm", "Endoderm", "Neural crest"],
    correctAnswer: "Endoderm",
    explanation: "The endoderm forms the epithelial lining of the gastrointestinal tract, respiratory system, and urinary bladder."
  },
  {
    question: "Which structure thickens to form the neural plate?",
    options: ["Neural tube", "Neuroectoderm", "Somites", "Ectoderm"],
    correctAnswer: "Ectoderm",
    explanation: "A specific segment of the ectoderm thickens to form the neural plate, which later develops into the neural tube."
  },
  {
    question: "Which of these structures is NOT derived from neural crest cells?",
    options: ["Craniofacial skeleton", "Sensory ganglia", "Melanocytes", "Spinal cord"],
    correctAnswer: "Spinal cord",
    explanation: "The spinal cord is derived from the neural tube, not neural crest cells."
  },
  {
    question: "Which mesodermal layer gives rise to the urogenital system?",
    options: ["Paraxial mesoderm", "Intermediate mesoderm", "Lateral plate mesoderm", "Neural crest"],
    correctAnswer: "Intermediate mesoderm",
    explanation: "The intermediate mesoderm forms the urogenital system, including kidneys and gonads."
  },
  {
    question: "What is the fate of myotomes?",
    options: ["Form cartilage and bones", "Give rise to muscle components", "Develop into sensory ganglia", "Differentiate into neural crest cells"],
    correctAnswer: "Give rise to muscle components",
    explanation: "Myotomes, derived from paraxial mesoderm, form segmental muscle components."
  },
  {
    question: "Which germ layer is responsible for forming the serous membranes lining body cavities?",
    options: ["Ectoderm", "Paraxial mesoderm", "Endoderm", "Lateral plate mesoderm"],
    correctAnswer: "Lateral plate mesoderm",
    explanation: "The lateral plate mesoderm forms the serous membranes that line the peritoneal, pleural, and pericardial cavities."
  },
  {
    question: "What happens if the caudal neuropore fails to close properly?",
    options: ["Anencephaly", "Spina bifida", "Hydrocephalus", "Microcephaly"],
    correctAnswer: "Spina bifida",
    explanation: "Failure of the caudal neuropore to close results in spina bifida, a neural tube defect affecting the spinal cord."
  },
  {
    question: "Which of the following is NOT a function of neural crest cells?",
    options: ["Forming melanocytes", "Developing into cranial ganglia", "Creating myotomes", "Giving rise to Schwann cells"],
    correctAnswer: "Creating myotomes",
    explanation: "Myotomes arise from the paraxial mesoderm, not neural crest cells."
  },
  {
    question: "Which structure is derived from the lens placode?",
    options: ["Inner ear", "Lens of the eye", "Spinal cord", "Melanocytes"],
    correctAnswer: "Lens of the eye",
    explanation: "The lens placode gives rise to the lens of the eye, while the otic placode contributes to the organs of hearing."
  },
  {
    question: "The pharyngeal pouches are derivatives of which germ layer?",
    options: ["Ectoderm", "Mesoderm", "Endoderm", "Neural crest"],
    correctAnswer: "Endoderm",
    explanation: "The endoderm gives rise to the epithelial components of the pharyngeal pouches, which contribute to structures like the thymus and parathyroid glands."
  },
  {
    question: "The paraxial mesoderm segments into which structures?",
    options: ["Neural crest cells", "Somites", "Splanchnic mesoderm", "Neural tube"],
    correctAnswer: "Somites",
    explanation: "The paraxial mesoderm segments into somites, which differentiate into sclerotomes, myotomes, and dermatomes."
  },
  {
    question: "A newborn presents with anencephaly, a neural tube defect characterized by the absence of a major portion of the brain. Failure of which process most likely led to this condition?",
    options: ["Gastrulation", "Neural induction", "Neural crest migration", "Cranial neuropore closure"],
    correctAnswer: "Cranial neuropore closure",
    explanation: "Anencephaly results from the failure of the cranial neuropore to close during the fourth week of development."
  },
  {
    question: "A patient presents with a midline nasal mass. Imaging reveals a dermoid cyst containing ectodermal derivatives. This suggests an anomaly in which developmental process?",
    options: ["Neural crest cell migration", "Neurulation", "Paraxial mesoderm differentiation", "Somite segmentation"],
    correctAnswer: "Neurulation",
    explanation: "Failure of proper neural tube closure at the midline can lead to persistent ectodermal remnants, forming a dermoid cyst."
  },
  {
    question: "A fetus diagnosed with congenital scoliosis likely has defects in which embryonic structure?",
    options: ["Neural crest cells", "Lateral plate mesoderm", "Somites", "Intermediate mesoderm"],
    correctAnswer: "Somites",
    explanation: "Somites differentiate into sclerotomes, which contribute to vertebral formation. Abnormal segmentation leads to scoliosis."
  },
  {
    question: "During a fetal scan, a cardiologist notices a congenital heart defect involving improper formation of the outflow tract. Defective migration of which cell population is most likely responsible?",
    options: ["Paraxial mesoderm", "Neural crest cells", "Intermediate mesoderm", "Ectodermal placodes"],
    correctAnswer: "Neural crest cells",
    explanation: "Neural crest cells contribute to the septation of the heart's outflow tract, and defects in their migration can lead to congenital heart anomalies."
  },
  {
    question: "A newborn has a small lower jaw (micrognathia), cleft palate, and glossoptosis. These features are characteristic of which developmental disorder?",
    options: ["Treacher Collins syndrome", "Pierre Robin sequence", "DiGeorge syndrome", "Holoprosencephaly"],
    correctAnswer: "Pierre Robin sequence",
    explanation: "Pierre Robin sequence results from abnormal development of the first pharyngeal arch, affecting mandibular growth."
  },
  {
    question: "A medical student dissects a cadaver and notes that the spinal cord terminates at L2 instead of lower. Which embryological process is responsible for the differential growth of the spinal cord and vertebral column?",
    options: ["Secondary neurulation", "Caudal regression syndrome", "Spinal cord elongation", "Ascending migration of the conus medullaris"],
    correctAnswer: "Ascending migration of the conus medullaris",
    explanation: "During development, the vertebral column grows faster than the spinal cord, leading to the ascension of the conus medullaris."
  },
  {
    question: "A child presents with albinism, a condition caused by defective melanin production. Which embryonic cell population is responsible for melanin synthesis?",
    options: ["Neural crest cells", "Ectoderm", "Mesoderm", "Endoderm"],
    correctAnswer: "Neural crest cells",
    explanation: "Neural crest cells differentiate into melanocytes, which produce melanin."
  },
  {
    question: "A newborn is diagnosed with Hirschsprung disease, characterized by the absence of enteric ganglia in the distal colon. This condition results from failure of which process?",
    options: ["Neural crest migration", "Lateral folding", "Primitive streak regression", "Paraxial mesoderm differentiation"],
    correctAnswer: "Neural crest migration",
    explanation: "Neural crest cells give rise to the enteric nervous system, and failure of their migration leads to Hirschsprung disease."
  },
  {
    question: "A teratogen exposure at week 4 of gestation is most likely to disrupt which process?",
    options: ["Neural tube closure", "Limb bud formation", "Placental development", "Gametogenesis"],
    correctAnswer: "Neural tube closure",
    explanation: "The neural tube closes between days 22-27, making this a critical period for teratogenic effects."
  },
  {
    question: "A child with a deletion in chromosome 22q11 presents with cardiac defects, cleft palate, and immune deficiencies. This condition results from defective migration of which cell type?",
    options: ["Paraxial mesoderm", "Neural crest cells", "Endodermal cells", "Somites"],
    correctAnswer: "Neural crest cells",
    explanation: "DiGeorge syndrome results from neural crest cell migration defects, affecting the development of the pharyngeal arches."
  },
  {
    question: "A neonate presents with an omphalocele, a congenital defect where abdominal organs remain outside the body covered by a membrane. This condition results from failure of which developmental event?",
    options: ["Neural crest cell migration", "Lateral folding", "Cephalocaudal folding", "Gastrulation"],
    correctAnswer: "Lateral folding",
    explanation: "Lateral folding of the embryo brings the lateral body walls together, and failure of this process can lead to omphalocele."
  },
  {
    question: "A medical student is examining a histological slide of the adrenal gland. Which embryonic structure gives rise to the adrenal medulla?",
    options: ["Neural tube", "Paraxial mesoderm", "Neural crest cells", "Intermediate mesoderm"],
    correctAnswer: "Neural crest cells",
    explanation: "The adrenal medulla is derived from neural crest cells, which differentiate into chromaffin cells."
  },
  {
    question: "A fetus is diagnosed with sirenomelia (mermaid syndrome), a condition characterized by fusion of the lower limbs. This results from defects in which embryonic structure?",
    options: ["Primitive streak", "Neural crest cells", "Lateral plate mesoderm", "Caudal mesoderm"],
    correctAnswer: "Caudal mesoderm",
    explanation: "Sirenomelia results from insufficient mesodermal migration in the caudal region, affecting limb and urogenital development."
  },
  {
    question: "A pregnant woman exposed to retinoic acid early in pregnancy is at risk of having a child with defects in which structure?",
    options: ["Spinal cord", "Brainstem", "Face and pharyngeal arches", "Limbs"],
    correctAnswer: "Face and pharyngeal arches",
    explanation: "Retinoic acid disrupts neural crest migration, leading to craniofacial and pharyngeal arch anomalies."
  },
  {
    question: "A newborn has gastroschisis, a congenital abdominal wall defect. Unlike omphalocele, what is the key distinguishing feature?",
    options: ["Absence of a covering membrane", "Involves neural crest migration", "Caused by paraxial mesoderm defect", "Involves persistent yolk sac"],
    correctAnswer: "Absence of a covering membrane",
    explanation: "Gastroschisis results from a defect in lateral folding, leading to herniation of abdominal contents without a membrane."
  },
  {
    question: "A medical student is asked to identify the fate of sclerotomes in embryonic development. Which structure do they form?",
    options: ["Muscles of the back", "Vertebrae and ribs", "Neural tube", "Somatic mesoderm"],
    correctAnswer: "Vertebrae and ribs",
    explanation: "Sclerotomes, derived from somites, differentiate into vertebrae and ribs."
  },
  {
    question: "A newborn is diagnosed with holoprosencephaly, a brain malformation. Which developmental signaling pathway is most likely disrupted?",
    options: ["Wnt signaling", "Sonic hedgehog (Shh)", "FGF signaling", "BMP signaling"],
    correctAnswer: "Sonic hedgehog (Shh)",
    explanation: "Shh signaling is crucial for forebrain and facial development, and mutations can result in holoprosencephaly."
  },






],
      },

  

  
  
  
  





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////Genetics/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
{
      category: "Genetics",
      questions: [



  {
    question: "What is the study of heredity called?",
    options: ["Genomics", "Genetics", "Cytology", "Embryology"],
    answer: "Genetics"
  },
  {
    question: "Which molecule carries the genetic code?",
    options: ["RNA", "Protein", "DNA", "Lipid"],
    answer: "DNA"
  },
  {
    question: "What is the functional unit of DNA?",
    options: ["Chromosome", "Gene", "Nucleus", "Genome"],
    answer: "Gene"
  },
  {
    question: "Which branch of genetics studies the chemical structure of genes at the molecular level?",
    options: ["Cytogenetics", "Molecular genetics", "Developmental genetics", "Population genetics"],
    answer: "Molecular genetics"
  },
  {
    question: "How many genes are estimated to be in the human genome?",
    options: ["10,000–30,000", "30,000–50,000", "50,000–100,000", "100,000–150,000"],
    answer: "50,000–100,000"
  },
  {
    question: "Who introduced the double helix model of DNA?",
    options: ["Gregor Mendel", "James Watson and Francis Crick", "Rosalind Franklin", "Erwin Chargaff"],
    answer: "James Watson and Francis Crick"
  },
  {
    question: "What sugar is present in the structure of DNA?",
    options: ["Ribose", "Glucose", "Fructose", "Deoxyribose"],
    answer: "Deoxyribose"
  },
  {
    question: "Which nitrogenous base pairs with adenine in DNA?",
    options: ["Cytosine", "Guanine", "Thymine", "Uracil"],
    answer: "Thymine"
  },
  {
    question: "Which bond holds the two DNA strands together?",
    options: ["Covalent bond", "Ionic bond", "Hydrogen bond", "Peptide bond"],
    answer: "Hydrogen bond"
  },
  {
    question: "Which of the following is NOT a function of genes?",
    options: ["Maintain genetic specificity", "Control embryonic development", "Generate ATP", "Synthesize proteins and enzymes"],
    answer: "Generate ATP"
  },
  {
    question: "What term describes the complete genetic information present in a cell?",
    options: ["Genome", "Gene", "Chromosome", "Nucleosome"],
    answer: "Genome"
  },
  {
    question: "What is a dominant gene?",
    options: [
      "A gene that expresses its effect only when present on both chromosomes",
      "A gene that expresses its effect whether it is present on one or both chromosomes",
      "A gene that cannot be inherited",
      "A gene that codes for recessive traits"
    ],
    answer: "A gene that expresses its effect whether it is present on one or both chromosomes"
  },
  {
    question: "What is a diploid cell?",
    options: [
      "A cell with 46 pairs of chromosomes",
      "A cell with 23 pairs of chromosomes",
      "A cell with 23 chromosomes",
      "A cell with 92 chromosomes"
    ],
    answer: "A cell with 23 pairs of chromosomes"
  },
  {
    question: "Which chromosome abnormality causes Down syndrome?",
    options: ["Trisomy 21", "Monosomy X", "Trisomy 13", "Trisomy 18"],
    answer: "Trisomy 21"
  },
  {
    question: "Which genetic disorder is associated with a karyotype of 47 XXY?",
    options: ["Turner’s syndrome", "Klinefelter’s syndrome", "Patau’s syndrome", "Edward’s syndrome"],
    answer: "Klinefelter’s syndrome"
  },
  {
    question: "What is karyotyping used for?",
    options: [
      "Identifying chromosomal abnormalities",
      "Counting genes in DNA",
      "Detecting single nucleotide mutations",
      "Measuring DNA length"
    ],
    answer: "Identifying chromosomal abnormalities"
  },
  {
    question: "What structural chromosomal abnormality leads to Cri-du-chat syndrome?",
    options: ["Deletion", "Duplication", "Translocation", "Inversion"],
    answer: "Deletion"
  },
  {
    question: "Which of the following is NOT a numerical chromosomal abnormality?",
    options: ["Trisomy", "Monosomy", "Deletion", "Polyploidy"],
    answer: "Deletion"
  },
  {
    question: "What is the term for a chromosome pair that carries the same genes?",
    options: ["Homologous chromosomes", "Haploid chromosomes", "Metacentric chromosomes", "Autosomes"],
    answer: "Homologous chromosomes"
  },
  {
    question: "Which type of chromosomal abnormality involves an extra chromosome?",
    options: ["Monosomy", "Trisomy", "Deletion", "Translocation"],
    answer: "Trisomy"
  },
  {
    question: "Which chromosomal abnormality is caused by an error in meiosis leading to non-disjunction?",
    options: ["Polyploidy", "Translocation", "Trisomy", "Deletion"],
    answer: "Trisomy"
  },
  {
    question: "Which syndrome is associated with a 'happy puppet' appearance?",
    options: ["Prader-Willi syndrome", "Angelman syndrome", "DiGeorge syndrome", "Wolf-Hirschhorn syndrome"],
    answer: "Angelman syndrome"
  },
  {
    question: "Which of the following is a clinical feature of Turner’s syndrome?",
    options: ["Tall stature", "Gynecomastia", "Shield chest", "Macrocephaly"],
    answer: "Shield chest"
  },
  {
    question: "Which genetic disorder results from a deletion in the short arm of chromosome 5?",
    options: ["Prader-Willi syndrome", "Wolf-Hirschhorn syndrome", "Cri-du-chat syndrome", "Miller-Dieker syndrome"],
    answer: "Cri-du-chat syndrome"
  },
  {
    question: "Which of the following is an example of a structural chromosomal abnormality?",
    options: ["Trisomy 21", "Monosomy X", "Deletion", "Aneuploidy"],
    answer: "Deletion"
  },
  {
    question: "What is the chromosomal composition of a male?",
    options: ["XX", "YY", "XY", "XO"],
    answer: "XY"
  },
  {
    question: "What type of centromere positioning does a submetacentric chromosome have?",
    options: [
      "In the middle",
      "Close to the middle",
      "At the end",
      "At the farthest tip"
    ],
    answer: "Close to the middle"
  },
  {
    question: "What is the most common cause of primary amenorrhea?",
    options: ["Down syndrome", "Turner’s syndrome", "Klinefelter’s syndrome", "Angelman syndrome"],
    answer: "Turner’s syndrome"
  },
  {
    question: "Which condition results from an extra copy of chromosome 13?",
    options: ["Down syndrome", "Patau syndrome", "Edward’s syndrome", "Turner’s syndrome"],
    answer: "Patau syndrome"
  },



  {
    question: "Which molecule carries genetic information and is responsible for heredity?",
    options: ["RNA", "Protein", "DNA", "Lipid"],
    answer: "DNA"
  },
  {
    question: "A genetic disorder is suspected in a newborn with multiple congenital anomalies. Which technique would be most useful for identifying chromosomal abnormalities?",
    options: ["Karyotyping", "PCR", "Western blot", "ELISA"],
    answer: "Karyotyping"
  },
  {
    question: "A patient presents with intellectual disability, obesity, and an insatiable appetite. A microdeletion on chromosome 15 is found on the paternal chromosome. What is the diagnosis?",
    options: ["Prader-Willi syndrome", "Angelman syndrome", "Down syndrome", "Turner syndrome"],
    answer: "Prader-Willi syndrome"
  },
  {
    question: "A scientist studying gene expression is most likely working in which branch of genetics?",
    options: ["Cytogenetics", "Molecular genetics", "Population genetics", "Immunogenetics"],
    answer: "Molecular genetics"
  },
  {
    question: "Which structural component of DNA forms the backbone of the double helix?",
    options: ["Nitrogenous bases", "Phosphate and sugar", "Hydrogen bonds", "Amino acids"],
    answer: "Phosphate and sugar"
  },
  {
    question: "What is the functional unit of DNA that determines traits?",
    options: ["Chromosome", "Gene", "Protein", "Nucleotide"],
    answer: "Gene"
  },
  {
    question: "Which nitrogenous base pairs with cytosine in DNA?",
    options: ["Adenine", "Guanine", "Thymine", "Uracil"],
    answer: "Guanine"
  },
  {
    question: "In a karyotyping analysis, a trisomy of chromosome 21 is found. What is the likely diagnosis?",
    options: ["Turner syndrome", "Klinefelter syndrome", "Down syndrome", "Edward syndrome"],
    answer: "Down syndrome"
  },
  {
    question: "A newborn has a webbed neck, short stature, and underdeveloped ovaries. Which chromosomal condition is most likely?",
    options: ["Turner syndrome", "Klinefelter syndrome", "Down syndrome", "Patau syndrome"],
    answer: "Turner syndrome"
  },
  {
    question: "Which structural abnormality involves a missing segment of a chromosome?",
    options: ["Deletion", "Translocation", "Duplication", "Inversion"],
    answer: "Deletion"
  },
  {
    question: "A female presents with primary amenorrhea and a 45, XO karyotype. What syndrome does she have?",
    options: ["Turner syndrome", "Klinefelter syndrome", "Down syndrome", "Fragile X syndrome"],
    answer: "Turner syndrome"
  },
  {
    question: "Which chromosomal abnormality is characterized by a cat-like cry in infants?",
    options: ["Cri-du-chat syndrome", "Angelman syndrome", "Prader-Willi syndrome", "Patau syndrome"],
    answer: "Cri-du-chat syndrome"
  },
  {
    question: "A male with tall stature, gynecomastia, and small testes has a 47, XXY karyotype. What is the diagnosis?",
    options: ["Turner syndrome", "Klinefelter syndrome", "Down syndrome", "Edward syndrome"],
    answer: "Klinefelter syndrome"
  },
  {
    question: "Which syndrome is associated with inappropriate laughter and microdeletion of chromosome 15 from the maternal side?",
    options: ["Prader-Willi syndrome", "Angelman syndrome", "Down syndrome", "Turner syndrome"],
    answer: "Angelman syndrome"
  },
  {
    question: "If a gene must be present on both chromosomes of a homologous pair to express a trait, it is considered:",
    options: ["Dominant", "Recessive", "Codominant", "Epistatic"],
    answer: "Recessive"
  },
  {
    question: "What type of chromosomal abnormality involves exchange of genetic material between non-homologous chromosomes?",
    options: ["Deletion", "Duplication", "Translocation", "Inversion"],
    answer: "Translocation"
  },
  {
    question: "Which genetic condition is caused by trisomy 18?",
    options: ["Down syndrome", "Patau syndrome", "Edward syndrome", "Turner syndrome"],
    answer: "Edward syndrome"
  },
  {
    question: "Which branch of genetics studies inherited metabolic disorders?",
    options: ["Cytogenetics", "Population genetics", "Biochemical genetics", "Molecular genetics"],
    answer: "Biochemical genetics"
  },
  {
    question: "A researcher is studying the impact of genetics on mental health disorders. This falls under which branch?",
    options: ["Behavioral genetics", "Immunogenetics", "Molecular genetics", "Cytogenetics"],
    answer: "Behavioral genetics"
  },
  {
    question: "Which of the following chromosomal structures is visible under a microscope during metaphase?",
    options: ["Nucleotides", "Chromatin", "Chromosome", "Histone"],
    answer: "Chromosome"
  },
  {
    question: "What is the name of the chromosomal constriction involved in movement during cell division?",
    options: ["Telomere", "Centromere", "Kinetochore", "Chromatid"],
    answer: "Centromere"
  },
  {
    question: "Which chromosomal condition results in a male with one Barr body?",
    options: ["Turner syndrome", "Klinefelter syndrome", "Down syndrome", "Edward syndrome"],
    answer: "Klinefelter syndrome"
  },
  {
    question: "What term is used for a cell that contains only 23 chromosomes?",
    options: ["Diploid", "Haploid", "Polyploid", "Triploid"],
    answer: "Haploid"
  },
  {
    question: "Which of the following genetic conditions is an example of a balanced chromosomal translocation?",
    options: ["Cri-du-chat syndrome", "Klinefelter syndrome", "Robertsonian translocation", "Turner syndrome"],
    answer: "Robertsonian translocation"
  },
  {
    question: "Which chromosomal abnormality results in a male with an extra X chromosome?",
    options: ["Turner syndrome", "Klinefelter syndrome", "Down syndrome", "Patau syndrome"],
    answer: "Klinefelter syndrome"
  },
  {
    question: "Which nitrogenous bases pair together in DNA?",
    options: ["Adenine with cytosine, guanine with thymine", "Adenine with guanine, cytosine with thymine", "Adenine with thymine, guanine with cytosine", "Adenine with uracil, guanine with thymine"],
    answer: "Adenine with thymine, guanine with cytosine"
  },
  {
    question: "In which chromosomal disorder does an individual have a karyotype of 45, XO?",
    options: ["Klinefelter syndrome", "Down syndrome", "Turner syndrome", "Edward syndrome"],
    answer: "Turner syndrome"
  },


  {
    question: "A child is diagnosed with Down syndrome. Which of the following statements correctly describes their karyotype?",
    options: ["45, XY", "46, XY", "47, XY, +21", "47, XX, +18"],
    answer: "47, XY, +21",
    explanation: "Down syndrome is caused by trisomy 21, where an individual has an extra copy of chromosome 21. Affected males have a karyotype of 47, XY, +21."
  },
  {
    question: "A newborn is diagnosed with Turner syndrome. What is their chromosomal composition?",
    options: ["47, XXY", "46, XX", "45, XO", "47, XYY"],
    answer: "45, XO",
    explanation: "Turner syndrome results from the absence of one X chromosome (45, XO), leading to developmental abnormalities in females."
  },
  {
    question: "A couple undergoes genetic counseling due to a family history of cystic fibrosis, an autosomal recessive disorder. What is the probability that their child will inherit the disease if both parents are carriers?",
    options: ["0%", "25%", "50%", "75%"],
    answer: "25%",
    explanation: "If both parents are carriers (heterozygous), there is a 25% chance that the child will inherit two recessive alleles and develop cystic fibrosis."
  },
  {
    question: "A researcher is studying an individual with Klinefelter syndrome. Which of the following karyotypes is expected?",
    options: ["47, XXY", "45, XO", "47, XYY", "46, XY"],
    answer: "47, XXY",
    explanation: "Klinefelter syndrome results from an extra X chromosome in males (47, XXY), leading to symptoms such as infertility and gynecomastia."
  },
  {
    question: "A forensic scientist extracts DNA from a crime scene. Which component of the DNA will be used for genetic fingerprinting?",
    options: ["Nitrogenous bases", "Phosphate group", "Deoxyribose sugar", "Chromosome 21"],
    answer: "Nitrogenous bases",
    explanation: "DNA fingerprinting analyzes specific base sequences (e.g., short tandem repeats) that vary among individuals."
  },
  {
    question: "A laboratory technician is performing karyotyping on a patient. Which of the following could be detected through this test?",
    options: ["Gene mutation", "Chromosomal translocation", "Point mutation", "Mitochondrial DNA disorder"],
    answer: "Chromosomal translocation",
    explanation: "Karyotyping reveals structural and numerical chromosomal abnormalities, such as deletions, trisomies, and translocations."
  },
  {
    question: "A female presents with primary amenorrhea, short stature, and a webbed neck. Which chromosomal abnormality is most likely?",
    options: ["47, XXY", "45, XO", "47, XYY", "46, XX"],
    answer: "45, XO",
    explanation: "Turner syndrome (45, XO) is characterized by these physical features and infertility."
  },
  {
    question: "A male with tall stature, gynecomastia, and small testes is diagnosed with Klinefelter syndrome. What is his chromosomal karyotype?",
    options: ["47, XXY", "45, XO", "47, XYY", "46, XY"],
    answer: "47, XXY",
    explanation: "Klinefelter syndrome occurs due to an extra X chromosome in males."
  },
  {
    question: "A geneticist is studying the inheritance pattern of Huntington’s disease. What is the mode of inheritance?",
    options: ["Autosomal recessive", "X-linked recessive", "Autosomal dominant", "Mitochondrial"],
    answer: "Autosomal dominant",
    explanation: "Huntington’s disease follows an autosomal dominant inheritance pattern, meaning an affected individual has a 50% chance of passing it to offspring."
  },
  {
    question: "A scientist studying sickle cell disease is analyzing which type of mutation?",
    options: ["Frameshift mutation", "Point mutation", "Nonsense mutation", "Chromosomal deletion"],
    answer: "Point mutation",
    explanation: "Sickle cell disease is caused by a single nucleotide substitution (point mutation) in the beta-globin gene."
  },
  {
    question: "A newborn presents with hypotonia, feeding difficulties, and later develops an insatiable appetite. Which chromosomal abnormality is most likely responsible?",
    options: ["Prader-Willi syndrome", "Angelman syndrome", "Down syndrome", "Turner syndrome"],
    answer: "Prader-Willi syndrome",
    explanation: "Prader-Willi syndrome results from a deletion in the paternal chromosome 15."
  },
  {
    question: "Which enzyme is responsible for unwinding the DNA double helix during replication?",
    options: ["DNA ligase", "Helicase", "DNA polymerase", "Topoisomerase"],
    answer: "Helicase",
    explanation: "Helicase unwinds the DNA strands to allow replication to proceed."
  },
  {
    question: "A woman with a family history of hemophilia gives birth to a son. What is the probability that he will inherit the disease if she is a carrier?",
    options: ["0%", "25%", "50%", "100%"],
    answer: "50%",
    explanation: "Hemophilia is an X-linked recessive disorder. Since males inherit only one X chromosome from their mother, they have a 50% chance of inheriting the disorder if their mother is a carrier."
  },
  {
    question: "Which of the following conditions is caused by a deletion on chromosome 5, leading to a characteristic high-pitched cry in infants?",
    options: ["Down syndrome", "Cri-du-chat syndrome", "Edward syndrome", "Patau syndrome"],
    answer: "Cri-du-chat syndrome",
    explanation: "Cri-du-chat syndrome is caused by a deletion on chromosome 5 and is characterized by intellectual disability and a distinctive cat-like cry."
  },
  {
    question: "Which chromosomal abnormality results from non-disjunction during meiosis, leading to an extra chromosome 18?",
    options: ["Down syndrome", "Edward syndrome", "Patau syndrome", "Turner syndrome"],
    answer: "Edward syndrome",
    explanation: "Edward syndrome (trisomy 18) is caused by an extra chromosome 18 and leads to severe developmental delays."
  },
  {
    question: "A woman with a mitochondrial disorder passes it to which of her children?",
    options: ["Only daughters", "Only sons", "Both sons and daughters", "None"],
    answer: "Both sons and daughters",
    explanation: "Mitochondrial disorders are inherited maternally, meaning all offspring (both male and female) inherit the mutation."
  },
  {
    question: "Which genetic disorder is associated with an increased risk of leukemia and congenital heart defects?",
    options: ["Turner syndrome", "Klinefelter syndrome", "Down syndrome", "Angelman syndrome"],
    answer: "Down syndrome",
    explanation: "Individuals with Down syndrome (trisomy 21) have an increased risk of leukemia and congenital heart defects."
  },
  {
    question: "Which term describes the phenomenon where a single gene influences multiple traits?",
    options: ["Codominance", "Epistasis", "Pleiotropy", "Polygenic inheritance"],
    answer: "Pleiotropy",
    explanation: "Pleiotropy occurs when a single gene has multiple effects on an organism’s phenotype."
  },
  {
    question: "What is the primary function of DNA polymerase during replication?",
    options: ["Unwinding the DNA strand", "Synthesizing new DNA strands", "Sealing Okazaki fragments", "Binding RNA primers"],
    answer: "Synthesizing new DNA strands",
    explanation: "DNA polymerase adds nucleotides to the growing DNA strand during replication."
  },






],
      },

  







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Hip Joint/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    




  

  
  
  
  
  
  
  
  
  

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
  
  
  

  
  
  
 
