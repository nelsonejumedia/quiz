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
  ////////////////////////////////// // Lower limbs Clinical Cases.////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
        
  
      // Lower Limbs Clinical Cases end here
  
  
  





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////Front of the Thigh/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    {
      category: "Front of the Thigh",
      questions: [
        {
  question: "What forms the roof of the femoral triangle?",
  options: [
    "Fascia lata",
    "Sartorius",
    "Adductor longus",
    "Pectineus"
  ],
  correctAnswer: "Fascia lata",
  explanation: "The fascia lata is the deep fascia that covers the muscles of the thigh. It forms a firm layer of connective tissue, enclosing the femoral triangle at the roof. This fascia provides structural integrity and allows for the passage of important neurovascular structures. The fascia lata also has an opening called the saphenous opening, which allows for the passage of the great saphenous vein."
},

{
  question: "Which structure lies laterally in the femoral triangle?",
  options: [
    "Femoral artery",
    "Femoral nerve",
    "Femoral vein",
    "Obturator nerve"
  ],
  correctAnswer: "Femoral nerve",
  explanation: "The femoral nerve is the largest nerve in the thigh, originating from the lumbar plexus (L2-L4). It lies lateral to the femoral artery and vein within the femoral triangle, outside the femoral sheath. It supplies the anterior compartment of the thigh, including the quadriceps muscles, and provides sensory innervation to the anterior thigh and medial leg via its saphenous branch."
},

{
  question: "What is the significance of the adductor canal?",
  options: [
    "A passage for the femoral artery and vein",
    "A site for the saphenous nerve to exit the thigh",
    "A protective sheath for the femoral nerve",
    "A junction for muscles of the anterior and medial compartments"
  ],
  correctAnswer: "A passage for the femoral artery and vein",
  explanation: "The adductor canal, also known as the subsartorial canal, is an important anatomical tunnel that extends from the apex of the femoral triangle to the adductor hiatus. It provides a passage for the femoral artery, femoral vein, and the saphenous nerve as they move from the anterior thigh to the popliteal fossa. This canal allows the transition of these vessels to the lower leg, where the femoral artery continues as the popliteal artery after passing through the adductor hiatus."
},

{
  question: "Which muscle forms the lateral boundary of the femoral triangle?",
  options: [
    "Sartorius",
    "Adductor longus",
    "Pectineus",
    "Iliopsoas"
  ],
  correctAnswer: "Sartorius",
  explanation: "The sartorius muscle is the longest muscle in the human body, running obliquely across the anterior aspect of the thigh. It forms the lateral boundary of the femoral triangle, alongside the adductor longus and inguinal ligament. The sartorius is involved in flexion, abduction, and lateral rotation of the hip, as well as flexion of the knee."
},

{
  question: "What is the main function of the vastus medialis?",
  options: [
    "Flexion of the hip",
    "Extension of the knee",
    "Medial rotation of the thigh",
    "Abduction of the thigh"
  ],
  correctAnswer: "Extension of the knee",
  explanation: "The vastus medialis is one of the four muscles that comprise the quadriceps group. It plays a critical role in knee extension and helps stabilize the patella, particularly through its horizontal fibers, which prevent lateral dislocation of the patella. The vastus medialis is innervated by the femoral nerve and works in coordination with the other quadriceps muscles to allow for effective knee extension during activities such as walking, running, and jumping."
},

{
  question: "What forms the floor of the femoral triangle?",
  options: [
    "Adductor longus and iliopsoas",
    "Sartorius and fascia lata",
    "Quadriceps femoris",
    "Pectineus and iliacus"
  ],
  correctAnswer: "Pectineus and iliacus",
  explanation: "The floor of the femoral triangle is formed by the iliacus and pectineus muscles. The iliacus muscle originates from the iliac fossa and plays a role in hip flexion. The pectineus is an adductor muscle located on the medial aspect of the thigh, responsible for adducting and flexing the hip. Together, these muscles support the femoral artery, vein, and nerve that traverse the triangle, making the area critical for vascular and neural structures of the lower limb."
},

{
  question: "Which structure passes through the adductor hiatus?",
  options: [
    "Femoral nerve",
    "Femoral artery",
    "Saphenous nerve",
    "Great saphenous vein"
  ],
  correctAnswer: "Femoral artery",
  explanation: "The femoral artery, after descending through the femoral triangle and adductor canal, passes through the adductor hiatus—a gap in the tendon of the adductor magnus muscle. Once it passes through the hiatus, the artery becomes the popliteal artery in the posterior aspect of the knee. This transition marks the critical change in blood supply from the thigh to the lower leg."
},

{
  question: "What is the clinical importance of the femoral canal?",
  options: [
    "It allows passage of the femoral artery",
    "It contains lymph nodes and fatty tissue",
    "It provides a protective sheath for the femoral nerve",
    "It is a common site for venous puncture"
  ],
  correctAnswer: "It contains lymph nodes and fatty tissue",
  explanation: "The femoral canal is the most medial compartment of the femoral sheath. It contains lymphatic vessels, lymph nodes, and some fatty tissue. The canal is clinically important because it is a potential site for femoral hernias, which occur when abdominal contents protrude through the femoral ring into the canal. These hernias are more common in women due to their wider pelvic structure and are often characterized by a palpable lump in the groin region."
},

{
  question: "Which artery is the main source of blood supply to the anterior thigh?",
  options: [
    "Obturator artery",
    "Femoral artery",
    "Profunda femoris artery",
    "Circumflex femoral artery"
  ],
  correctAnswer: "Femoral artery",
  explanation: "The femoral artery is the primary artery supplying blood to the anterior compartment of the thigh. It originates from the external iliac artery and travels through the femoral triangle before continuing down the thigh via the adductor canal. The artery gives off several important branches, including the profunda femoris artery, which supplies the deeper muscles of the thigh. The femoral artery is easily palpable in the femoral triangle and is a critical site for vascular access in medical emergencies."
},



{
  question: "Which structure passes through the adductor hiatus?",
  options: [
    "Femoral artery",
    "Saphenous nerve",
    "Obturator nerve",
    "Great saphenous vein"
  ],
  correctAnswer: "Femoral artery",
  explanation: "The adductor hiatus is a gap in the adductor magnus muscle that allows the femoral artery and vein to pass from the anterior compartment of the thigh to the popliteal fossa behind the knee. Upon passing through the hiatus, the femoral artery becomes the popliteal artery, supplying the lower limb. The saphenous nerve, although it follows the femoral artery in the adductor canal, exits before the artery passes through the hiatus."
},

{
  question: "Which muscle forms the medial boundary of the femoral triangle?",
  options: [
    "Sartorius",
    "Adductor longus",
    "Gracilis",
    "Pectineus"
  ],
  correctAnswer: "Adductor longus",
  explanation: "The femoral triangle is a wedge-shaped depression on the anterior thigh, bounded superiorly by the inguinal ligament, laterally by the sartorius muscle, and medially by the adductor longus muscle. The femoral triangle is clinically significant as it contains the femoral nerve, artery, vein, and lymphatics."
},

{
  question: "What forms the roof of the femoral triangle?",
  options: [
    "Fascia lata",
    "Sartorius",
    "Adductor longus",
    "Inguinal ligament"
  ],
  correctAnswer: "Fascia lata",
  explanation: "The roof of the femoral triangle is formed by the fascia lata, a thick layer of deep fascia that envelops the muscles of the thigh. It plays a crucial role in maintaining the shape of the thigh and provides support to the underlying neurovascular structures."
},

{
  question: "Which nerve accompanies the femoral artery through the adductor canal?",
  options: [
    "Femoral nerve",
    "Saphenous nerve",
    "Obturator nerve",
    "Sciatic nerve"
  ],
  correctAnswer: "Saphenous nerve",
  explanation: "The saphenous nerve is the largest cutaneous branch of the femoral nerve. It accompanies the femoral artery and vein through the adductor canal, providing sensory innervation to the skin over the medial side of the leg and foot. Unlike the artery, the saphenous nerve does not pass through the adductor hiatus."
},

{
  question: "What is the primary function of the vastus lateralis muscle?",
  options: [
    "Hip extension",
    "Knee extension",
    "Knee flexion",
    "Hip flexion"
  ],
  correctAnswer: "Knee extension",
  explanation: "The vastus lateralis is one of the four muscles that make up the quadriceps femoris group. It originates from the greater trochanter and linea aspera of the femur and inserts into the patella via the quadriceps tendon. Its main function is to extend the knee joint, making it essential for activities such as walking, running, and jumping."
},

{
  question: "Where does the femoral artery become the popliteal artery?",
  options: [
    "In the femoral triangle",
    "At the mid-thigh",
    "At the adductor hiatus",
    "Below the knee"
  ],
  correctAnswer: "At the adductor hiatus",
  explanation: "The femoral artery becomes the popliteal artery after passing through the adductor hiatus, a gap in the adductor magnus muscle near the knee. This transition is important as the popliteal artery supplies blood to the structures in the posterior compartment of the leg and foot."
},

{
  question: "What is the significance of the saphenous opening in the fascia lata?",
  options: [
    "It allows passage of the femoral artery",
    "It allows passage of the great saphenous vein",
    "It allows passage of the obturator nerve",
    "It allows passage of the femoral nerve"
  ],
  correctAnswer: "It allows passage of the great saphenous vein",
  explanation: "The saphenous opening is a hiatus in the fascia lata through which the great saphenous vein passes to join the femoral vein. It is clinically significant because it is a common site for varicose veins, which result from the improper functioning of the valves in the veins."
},

{
  question: "Which muscle is considered the longest muscle in the body?",
  options: [
    "Vastus lateralis",
    "Gracilis",
    "Sartorius",
    "Rectus femoris"
  ],
  correctAnswer: "Sartorius",
  explanation: "The sartorius is the longest muscle in the human body, running obliquely across the anterior thigh from the anterior superior iliac spine to the medial aspect of the tibia. It is involved in flexion, abduction, and lateral rotation of the hip, as well as flexion of the knee."
},

{
  question: "Which artery is the largest branch of the femoral artery in the thigh?",
  options: [
    "Obturator artery",
    "Medial circumflex femoral artery",
    "Lateral circumflex femoral artery",
    "Profunda femoris artery"
  ],
  correctAnswer: "Profunda femoris artery",
  explanation: "The profunda femoris artery, also known as the deep artery of the thigh, is the largest branch of the femoral artery. It supplies blood to the deep structures of the thigh, including the hamstring muscles and the posterior compartment of the thigh. The artery also gives off perforating branches that contribute to the anastomosis around the hip joint."
},

{
  question: "Which muscle forms the floor of the femoral triangle?",
  options: [
    "Pectineus and iliopsoas",
    "Sartorius",
    "Adductor longus",
    "Rectus femoris"
  ],
  correctAnswer: "Pectineus and iliopsoas",
  explanation: "The floor of the femoral triangle is composed of the pectineus and iliopsoas muscles. These muscles provide a firm base for the neurovascular structures passing through the triangle. The iliopsoas is the primary flexor of the hip, while the pectineus is involved in both hip flexion and adduction."
},

{
  question: "What is the clinical significance of the femoral ring?",
  options: [
    "It is a common site for inguinal hernias",
    "It is a common site for femoral hernias",
    "It is where the femoral artery becomes the popliteal artery",
    "It transmits the femoral nerve"
  ],
  correctAnswer: "It is a common site for femoral hernias",
  explanation: "The femoral ring is the base of the femoral canal, located just below the inguinal ligament. It is a common site for femoral hernias, especially in women due to their wider pelvis. A femoral hernia presents as a bulge in the groin and can become strangulated, requiring surgical intervention."
},

{
  question: "Which structure is found in the medial compartment of the femoral sheath?",
  options: [
    "Femoral nerve",
    "Femoral artery",
    "Femoral vein",
    "Lymphatic tissue"
  ],
  correctAnswer: "Lymphatic tissue",
  explanation: "The femoral sheath is divided into three compartments: lateral, intermediate, and medial. The lateral compartment contains the femoral artery, the intermediate compartment contains the femoral vein, and the medial compartment, also known as the femoral canal, contains lymphatic vessels and nodes. This space is a potential site for femoral hernias."
},

{
  question: "Which muscle forms the lateral boundary of the adductor canal?",
  options: [
    "Vastus medialis",
    "Sartorius",
    "Adductor longus",
    "Gracilis"
  ],
  correctAnswer: "Vastus medialis",
  explanation: "The vastus medialis forms the lateral boundary of the adductor canal, while the sartorius forms the roof, and the adductor longus and magnus muscles form the posterior wall. The canal allows the passage of the femoral artery, vein, and saphenous nerve toward the popliteal fossa."
},

{
  question: "What is the main function of the rectus femoris muscle?",
  options: [
    "Extension of the knee and flexion of the hip",
    "Extension of the hip",
    "Flexion of the knee",
    "Lateral rotation of the thigh"
  ],
  correctAnswer: "Extension of the knee and flexion of the hip",
  explanation: "The rectus femoris is one of the four muscles of the quadriceps femoris group. It originates from the anterior inferior iliac spine and inserts into the patella via the quadriceps tendon. Its dual role in extending the knee and flexing the hip makes it an important muscle for activities such as running, kicking, and jumping."
},

{
  question: "What is the primary function of the gracilis muscle?",
  options: [
    "Hip abduction",
    "Knee extension",
    "Hip adduction",
    "Lateral rotation of the thigh"
  ],
  correctAnswer: "Hip adduction",
  explanation: "The gracilis muscle is a long, thin muscle located on the medial aspect of the thigh. It is primarily responsible for adducting the thigh, and it also assists in knee flexion. The gracilis is one of the muscles that form the pes anserinus, where it inserts along with the sartorius and semitendinosus on the medial surface of the tibia."
},

{
  question: "Which structure marks the superior boundary of the femoral triangle?",
  options: [
    "Inguinal ligament",
    "Sartorius",
    "Adductor longus",
    "Pubic tubercle"
  ],
  correctAnswer: "Inguinal ligament",
  explanation: "The inguinal ligament marks the superior boundary of the femoral triangle. It stretches from the anterior superior iliac spine (ASIS) to the pubic tubercle and serves as a crucial landmark for various anatomical structures, including the femoral artery, vein, and nerve that pass beneath it into the thigh."
},

{
  question: "What is the anatomical significance of the femoral vein in the femoral triangle?",
  options: [
    "It drains blood from the anterior thigh",
    "It lies lateral to the femoral artery",
    "It receives blood from the deep veins of the lower limb",
    "It passes through the adductor hiatus"
  ],
  correctAnswer: "It receives blood from the deep veins of the lower limb",
  explanation: "The femoral vein is the main venous drainage of the lower limb, located medial to the femoral artery within the femoral triangle. It receives blood from the profunda femoris vein (draining the deep structures of the thigh) and the great saphenous vein (draining the superficial tissues), before continuing as the external iliac vein as it ascends toward the abdomen."
},

{
  question: "Which artery supplies the adductor muscles of the thigh?",
  options: [
    "Profunda femoris artery",
    "Obturator artery",
    "Circumflex femoral artery",
    "Femoral artery"
  ],
  correctAnswer: "Profunda femoris artery",
  explanation: "The profunda femoris artery, a large branch of the femoral artery, is the primary blood supply to the adductor muscles of the thigh. It gives off several perforating branches that pass through the adductor magnus muscle, supplying the posterior and medial compartments of the thigh."
},

{
  question: "Which structure is located most medially in the femoral triangle?",
  options: [
    "Femoral nerve",
    "Femoral artery",
    "Femoral vein",
    "Lymphatic vessels"
  ],
  correctAnswer: "Lymphatic vessels",
  explanation: "In the femoral triangle, the structures are arranged from lateral to medial as the femoral nerve, femoral artery, femoral vein, and lymphatic vessels within the femoral canal. The lymphatic vessels are located most medially and are significant as they drain into the deep inguinal lymph nodes."
},

{
  question: "Which muscle forms the anterior boundary of the adductor canal?",
  options: [
    "Sartorius",
    "Vastus medialis",
    "Adductor magnus",
    "Pectineus"
  ],
  correctAnswer: "Sartorius",
  explanation: "The sartorius muscle forms the anterior boundary (or roof) of the adductor canal. It is a long, ribbon-like muscle that runs obliquely across the front of the thigh, and its superficial location makes it a key landmark for identifying the structures within the adductor canal, such as the femoral artery and saphenous nerve."
},

{
  question: "Which muscle is responsible for both hip flexion and knee extension?",
  options: [
    "Rectus femoris",
    "Sartorius",
    "Adductor longus",
    "Vastus medialis"
  ],
  correctAnswer: "Rectus femoris",
  explanation: "The rectus femoris is unique among the quadriceps muscles because it crosses both the hip and knee joints. This dual role allows it to perform hip flexion as well as knee extension, making it crucial for movements that involve both joints, such as running or kicking."
},

{
  question: "Which structure is most vulnerable to injury during femoral hernia repair?",
  options: [
    "Femoral nerve",
    "Femoral artery",
    "Femoral vein",
    "Obturator nerve"
  ],
  correctAnswer: "Femoral vein",
  explanation: "The femoral vein is located medial to the femoral artery and can be vulnerable to injury during femoral hernia repair. Care must be taken to avoid damaging the vein, as it plays a critical role in draining blood from the lower limb. Injuries to the femoral vein can lead to complications such as deep vein thrombosis (DVT) or hemorrhage."
},


{
  question: "Which muscle forms the bulk of the anterior region of the thigh?",
  options: [
    "Sartorius",
    "Quadriceps femoris",
    "Gracilis",
    "Adductor longus"
  ],
  correctAnswer: "Quadriceps femoris",
  explanation: "The quadriceps femoris is a large muscle group that makes up the bulk of the anterior region of the thigh. It is divided into four parts: rectus femoris, vastus medialis, vastus lateralis, and vastus intermedius. These muscles converge into a common quadriceps tendon, which attaches to the patella. Their primary function is to extend the knee, and the rectus femoris also assists in hip flexion."
},

{
  question: "What is the distal attachment of the sartorius muscle?",
  options: [
    "Greater trochanter of the femur",
    "Medial surface of the tibia",
    "Lesser trochanter of the femur",
    "Lateral condyle of the femur"
  ],
  correctAnswer: "Medial surface of the tibia",
  explanation: "The sartorius, the longest muscle in the body, runs obliquely across the thigh and inserts into the medial surface of the tibia. Its role includes flexing, abducting, and laterally rotating the hip, as well as flexing the knee. The muscle helps stabilize the knee joint and contributes to movements like crossing the legs."
},

{
  question: "Which muscle is primarily responsible for preventing lateral dislocation of the patella?",
  options: [
    "Vastus medialis",
    "Rectus femoris",
    "Vastus lateralis",
    "Sartorius"
  ],
  correctAnswer: "Vastus medialis",
  explanation: "The vastus medialis is one of the four quadriceps muscles. Its lower horizontal fibers, often referred to as the vastus medialis oblique (VMO), play a key role in stabilizing the patella and preventing it from dislocating laterally, especially during knee extension. This is particularly important in patients prone to patellar instability."
},

{
  question: "What is the common tendon of the quadriceps femoris muscle called?",
  options: [
    "Patellar ligament",
    "Achilles tendon",
    "Quadriceps tendon",
    "Iliotibial band"
  ],
  correctAnswer: "Quadriceps tendon",
  explanation: "The quadriceps tendon is the common tendon formed by the four muscles of the quadriceps femoris (rectus femoris, vastus lateralis, vastus medialis, and vastus intermedius). This tendon attaches to the superior aspect of the patella, and from there, the patellar ligament connects the patella to the tibial tuberosity. This arrangement allows for powerful knee extension."
},

{
  question: "Which muscle of the quadriceps group also assists in hip flexion?",
  options: [
    "Vastus medialis",
    "Rectus femoris",
    "Vastus lateralis",
    "Vastus intermedius"
  ],
  correctAnswer: "Rectus femoris",
  explanation: "The rectus femoris is unique among the quadriceps muscles because it crosses both the hip and knee joints. This allows it to contribute to both knee extension and hip flexion, making it a key player in activities that require movement of both joints, such as kicking a ball or climbing stairs."
},

{
  question: "What is the main action of the vastus lateralis muscle?",
  options: [
    "Hip flexion",
    "Knee extension",
    "Hip abduction",
    "Knee flexion"
  ],
  correctAnswer: "Knee extension",
  explanation: "The vastus lateralis is one of the quadriceps muscles, and its primary function is knee extension. It is located on the lateral side of the thigh and contributes to the strength and stability of the knee during activities like walking, running, and jumping."
},

{
  question: "Where does the patellar ligament attach distally?",
  options: [
    "Tibial tuberosity",
    "Medial condyle of the tibia",
    "Lateral epicondyle of the femur",
    "Greater trochanter of the femur"
  ],
  correctAnswer: "Tibial tuberosity",
  explanation: "The patellar ligament connects the patella to the tibial tuberosity. It is a continuation of the quadriceps tendon and plays a crucial role in transmitting the force generated by the quadriceps muscles during knee extension. This ligament is essential for stabilizing the patella and providing leverage for knee movements."
},

{
  question: "Which muscle of the anterior thigh is the primary hip adductor?",
  options: [
    "Gracilis",
    "Adductor longus",
    "Sartorius",
    "Iliopsoas"
  ],
  correctAnswer: "Adductor longus",
  explanation: "The adductor longus is a major muscle in the medial compartment of the thigh and is responsible for adducting the thigh. It originates from the pubis and inserts into the linea aspera of the femur. Along with other adductors, it plays a crucial role in stabilizing the pelvis during walking and running."
},

{
  question: "What is the innervation of the quadriceps femoris muscle?",
  options: [
    "Obturator nerve",
    "Sciatic nerve",
    "Femoral nerve",
    "Tibial nerve"
  ],
  correctAnswer: "Femoral nerve",
  explanation: "The quadriceps femoris muscle is innervated by the femoral nerve, which originates from the lumbar plexus (L2-L4). This nerve provides motor supply to the entire quadriceps group, enabling knee extension. Damage to the femoral nerve can lead to significant weakness or loss of knee extension."
},

{
  question: "Which muscle runs along the medial side of the thigh and inserts into the medial surface of the tibia?",
  options: [
    "Adductor magnus",
    "Sartorius",
    "Gracilis",
    "Vastus medialis"
  ],
  correctAnswer: "Gracilis",
  explanation: "The gracilis is a long, thin muscle that runs along the medial side of the thigh. It inserts into the medial surface of the tibia as part of the pes anserinus group. The gracilis aids in hip adduction, knee flexion, and medial rotation of the leg. Its location and function make it an important stabilizer for the lower limb."
},





        
        // Add more questions following this pattern
      ],
      
    },


///End of the front of the thigh, femoral triangle and Adductor canal









///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Hip Joint/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    {
      category: "Hip Joint",
      questions: [
        
  {
    question: "What type of joint is the hip joint structurally?",
    options: [
      "Fibrous joint",
      "Cartilaginous joint",
      "Synovial ball and socket joint",
      "Pivot joint"
    ],
    correctAnswer: "Synovial ball and socket joint",
    explanation: "The hip joint is classified as a synovial ball and socket joint, which allows for a wide range of movements in multiple directions."
  },
  {
    question: "What are the articulating surfaces of the hip joint?",
    options: [
      "Femoral head and acetabulum",
      "Tibia and fibula",
      "Humerus and scapula",
      "Clavicle and sternum"
    ],
    correctAnswer: "Femoral head and acetabulum",
    explanation: "The articulating surfaces of the hip joint include the femoral head and the acetabulum of the pelvis."
  },
  {
    question: "Which muscles are responsible for hip flexion?",
    options: [
      "Gluteus maximus and hamstrings",
      "Iliopsoas, rectus femoris, and sartorius",
      "Gluteus medius and minimus",
      "Piriformis and quadratus femoris"
    ],
    correctAnswer: "Iliopsoas, rectus femoris, and sartorius",
    explanation: "Hip flexion is primarily caused by the iliopsoas, with assistance from the rectus femoris and sartorius muscles."
  },
  {
    question: "Which movement is limited to about 110 degrees by contact with the abdominal wall?",
    options: [
      "Extension",
      "Adduction",
      "Flexion",
      "Lateral rotation"
    ],
    correctAnswer: "Flexion",
    explanation: "Flexion is limited to about 110 degrees when the knee is flexed, due to contact with the abdominal wall."
  },
  {
    question: "Which muscles are responsible for hip extension?",
    options: [
      "Gluteus maximus and hamstrings",
      "Adductor longus and brevis",
      "Iliopsoas and psoas major",
      "Piriformis and gemelli"
    ],
    correctAnswer: "Gluteus maximus and hamstrings",
    explanation: "Hip extension is primarily carried out by the gluteus maximus and hamstrings, allowing for backward movement of the thigh."
  },
  {
    question: "What is the primary muscle responsible for hip abduction?",
    options: [
      "Gluteus maximus",
      "Gluteus medius and minimus",
      "Iliopsoas",
      "Adductor magnus"
    ],
    correctAnswer: "Gluteus medius and minimus",
    explanation: "The gluteus medius and minimus are the key muscles responsible for hip abduction, moving the leg away from the body."
  },
  {
    question: "Which nerve supplies the hip joint?",
    options: [
      "Femoral, obturator, and sciatic nerves",
      "Radial and median nerves",
      "Vagus nerve",
      "Ulnar and axillary nerves"
    ],
    correctAnswer: "Femoral, obturator, and sciatic nerves",
    explanation: "The hip joint is innervated by the femoral, obturator, and sciatic nerves, providing sensory and motor control."
  },
  {
    question: "What is the stability of the hip joint largely dependent on?",
    options: [
      "The shallow acetabulum",
      "The deep acetabulum, strong capsule, and short lateral rotator muscles",
      "Loose ligaments and weak muscles",
      "Only the gluteus maximus muscle"
    ],
    correctAnswer: "The deep acetabulum, strong capsule, and short lateral rotator muscles",
    explanation: "The stability of the hip joint is aided by the deep acetabulum, a strong capsule, and closely applied lateral rotator muscles."
  },
  {
    question: "Which of the following movements does the hip joint allow?",
    options: [
      "Flexion, extension, abduction, adduction, circumduction, and rotation",
      "Flexion, extension, and pronation",
      "Rotation, pronation, and supination",
      "Only flexion and extension"
    ],
    correctAnswer: "Flexion, extension, abduction, adduction, circumduction, and rotation",
    explanation: "The hip joint allows for a wide range of movements, including flexion, extension, abduction, adduction, circumduction, and rotation."
  },
  {
    question: "Which muscles are responsible for lateral rotation of the hip?",
    options: [
      "Adductors",
      "Iliopsoas and psoas major",
      "Piriformis, obturator internus, gemelli, quadratus femoris, and gluteus maximus",
      "Gluteus medius and minimus"
    ],
    correctAnswer: "Piriformis, obturator internus, gemelli, quadratus femoris, and gluteus maximus",
    explanation: "Lateral rotation of the hip is primarily caused by the piriformis, obturator internus, gemelli, quadratus femoris, and gluteus maximus."
  },
  {
    question: "What condition is associated with a shallow acetabulum in infants?",
    options: [
      "Hip dysplasia",
      "Osteoarthritis",
      "Rheumatoid arthritis",
      "Sciatica"
    ],
    correctAnswer: "Hip dysplasia",
    explanation: "Hip dysplasia is a congenital condition where the acetabulum is shallow, leading to instability and potential dislocation in infants."
  },
  {
    question: "What is the function of the acetabular labrum?",
    options: [
      "Stabilizes the knee joint",
      "Deepens the acetabulum to help secure the femoral head",
      "Lubricates the joint",
      "Facilitates blood flow to the hip"
    ],
    correctAnswer: "Deepens the acetabulum to help secure the femoral head",
    explanation: "The acetabular labrum deepens the acetabulum and enhances stability by clasping the femoral head more securely."
  },
  {
    question: "What test is used to detect developmental hip dysplasia in infants?",
    options: [
      "Trendelenburg Test",
      "Barlow's Test",
      "Thompson's Test",
      "McMurray's Test"
    ],
    correctAnswer: "Barlow's Test",
    explanation: "Barlow's Test is performed to detect hip dysplasia by checking for dislocation of the femoral head from the acetabulum in infants."
  },
  {
    question: "What is Trendelenburg sign associated with?",
    options: [
      "A positive result when standing on the affected leg causes the opposite hip to drop",
      "Pain in the lower back",
      "A dislocated shoulder",
      "Fracture of the femur"
    ],
    correctAnswer: "A positive result when standing on the affected leg causes the opposite hip to drop",
    explanation: "A positive Trendelenburg sign indicates weakness in the hip abductors, causing the opposite hip to drop when standing on the affected leg."
  },
  {
    question: "Which condition is described as a deformity where the femoral neck angle is reduced?",
    options: [
      "Coxa vara",
      "Osteoporosis",
      "Hip fracture",
      "Hip osteoarthritis"
    ],
    correctAnswer: "Coxa vara",
    explanation: "Coxa vara is a deformity where the angle of the femoral neck is reduced, leading to a bending inward of the femur."
  },
  {
    question: "Which artery is involved in the blood supply of the hip joint?",
    options: [
      "Femoral artery",
      "Radial artery",
      "Carotid artery",
      "Ulnar artery"
    ],
    correctAnswer: "Femoral artery",
    explanation: "The blood supply to the hip joint is provided by the femoral artery and its branches, including the gluteal arteries."
  },
  {
    question: "What happens when the femoral head dislocates from the acetabular cavity but still maintains contact?",
    options: [
      "Dysplasia",
      "Subluxation",
      "Dislocation",
      "Fracture"
    ],
    correctAnswer: "Subluxation",
    explanation: "In subluxation, the femoral head is displaced but still maintains some contact with the acetabular cavity."
  },
  {
    question: "What muscle is primarily responsible for adduction of the hip?",
    options: [
      "Gluteus maximus",
      "Adductor longus and magnus",
      "Rectus femoris",
      "Biceps femoris"
    ],
    correctAnswer: "Adductor longus and magnus",
    explanation: "The adductor longus and magnus muscles are primarily responsible for hip adduction, pulling the leg towards the midline."
  },
  {
    question: "What is the condition where the ball part of the thigh bone does not sit in the hip socket properly called?",
    options: [
      "Developmental dysplasia of the hip",
      "Osteoporosis",
      "Bursitis",
      "Arthritis"
    ],
    correctAnswer: "Developmental dysplasia of the hip",
    explanation: "Developmental dysplasia of the hip is a condition where the ball part of the thigh bone (femoral head) does not sit correctly in the socket (acetabulum), leading to instability and possible dislocation."
  },
  {
    question: "What is the movement of the hip joint where the thigh moves away from the body called?",
    options: [
      "Adduction",
      "Abduction",
      "Flexion",
      "Extension"
    ],
    correctAnswer: "Abduction",
    explanation: "Abduction is the movement where the thigh moves away from the midline of the body, primarily controlled by the gluteus medius and minimus."
  },
  {
    question: "Which test is used to assess the reduction of a dislocated hip in infants?",
    options: [
      "Ortolani Test",
      "McMurray's Test",
      "Lachman Test",
      "Phalen's Test"
    ],
    correctAnswer: "Ortolani Test",
    explanation: "The Ortolani Test is used to assess the reduction of a dislocated hip by gently manipulating the hip joint to check for re-alignment in infants."
  },


  {
    question: "What ligament bridges the acetabular notch?",
    options: [
      "Ligamentum teres",
      "Transverse acetabular ligament",
      "Iliofemoral ligament",
      "Pubofemoral ligament"
    ],
    correctAnswer: "Transverse acetabular ligament",
    explanation: "The transverse acetabular ligament bridges the acetabular notch, converting it into a foramen that allows blood vessels to pass through."
  },
  {
    question: "Which of the following muscles assists in flexion of the hip joint?",
    options: [
      "Gluteus maximus",
      "Biceps femoris",
      "Sartorius",
      "Obturator externus"
    ],
    correctAnswer: "Sartorius",
    explanation: "Sartorius is one of the muscles that assist in hip flexion, along with iliopsoas and rectus femoris."
  },
  {
    question: "Which group of muscles assists in medial rotation of the hip?",
    options: [
      "Gluteus medius, minimus, and tensor fasciae latae",
      "Gluteus maximus and piriformis",
      "Quadratus femoris and gemelli",
      "Adductor magnus and brevis"
    ],
    correctAnswer: "Gluteus medius, minimus, and tensor fasciae latae",
    explanation: "Medial rotation of the hip is primarily assisted by gluteus medius, minimus, and tensor fasciae latae."
  },
  {
    question: "What type of movement is limited to about 15-20 degrees in the hip joint?",
    options: [
      "Abduction",
      "Extension",
      "Flexion",
      "Circumduction"
    ],
    correctAnswer: "Extension",
    explanation: "Hip extension is limited to about 15-20 degrees, and it is mainly carried out by the gluteus maximus and hamstrings."
  },
  {
    question: "What is the term for the condition where the acetabulum is shallow but the femoral head is still within it?",
    options: [
      "Dislocation",
      "Subluxation",
      "Dysplasia",
      "Coxa vara"
    ],
    correctAnswer: "Dysplasia",
    explanation: "In dysplasia, the acetabular cavity is shallow but the femoral head remains within it, leading to potential instability."
  },
  {
    question: "Which movement is primarily assisted by the gluteus maximus?",
    options: [
      "Flexion",
      "Abduction",
      "Extension",
      "Adduction"
    ],
    correctAnswer: "Extension",
    explanation: "The gluteus maximus is the primary muscle responsible for extending the hip joint, especially when moving the thigh backward."
  },
  {
    question: "What is a common consequence of a traumatic posterior dislocation of the hip?",
    options: [
      "Sciatic nerve injury",
      "Femoral artery rupture",
      "Knee joint dislocation",
      "Fracture of the femoral head"
    ],
    correctAnswer: "Sciatic nerve injury",
    explanation: "A posterior dislocation of the hip often results in injury to the sciatic nerve, which is located close to the hip joint."
  },
  {
    question: "Which test can be used to detect hip dysplasia in infants?",
    options: [
      "Phalen's Test",
      "Barlow's Test",
      "Lachman Test",
      "Trendelenburg Test"
    ],
    correctAnswer: "Barlow's Test",
    explanation: "Barlow's Test is used to assess for hip dysplasia in infants by attempting to dislocate the femoral head from the acetabulum."
  },
  {
    question: "Which of the following structures helps to stabilize the femoral head within the acetabulum?",
    options: [
      "Transverse acetabular ligament",
      "Acetabular labrum",
      "Ligamentum teres",
      "Obturator membrane"
    ],
    correctAnswer: "Acetabular labrum",
    explanation: "The acetabular labrum deepens the socket of the acetabulum, helping to secure the femoral head and maintain joint stability."
  },
  {
    question: "Which muscles are responsible for adduction of the hip?",
    options: [
      "Gluteus maximus and minimus",
      "Adductor longus, adductor brevis, and gracilis",
      "Iliopsoas and sartorius",
      "Piriformis and quadratus femoris"
    ],
    correctAnswer: "Adductor longus, adductor brevis, and gracilis",
    explanation: "The adductor longus, adductor brevis, and gracilis are the primary muscles responsible for bringing the thigh towards the midline (adduction)."
  },
  {
    question: "What causes a waddling gait in a patient with hip issues?",
    options: [
      "Weakness in the hip abductors",
      "Tight hamstring muscles",
      "Tight iliopsoas muscles",
      "Injury to the adductor muscles"
    ],
    correctAnswer: "Weakness in the hip abductors",
    explanation: "A waddling gait is caused by weakness in the hip abductor muscles, such as the gluteus medius and minimus, leading to difficulty stabilizing the pelvis."
  },
  {
    question: "Which muscle group is primarily responsible for stabilizing the pelvis during walking?",
    options: [
      "Hip adductors",
      "Hip flexors",
      "Hip abductors",
      "Hip extensors"
    ],
    correctAnswer: "Hip abductors",
    explanation: "The hip abductors, particularly the gluteus medius and minimus, stabilize the pelvis during walking to prevent it from tilting."
  },
  {
    question: "Which of the following movements is the hip joint least stable during?",
    options: [
      "Flexion and abduction",
      "Extension and lateral rotation",
      "Flexion and adduction",
      "Abduction and lateral rotation"
    ],
    correctAnswer: "Flexion and adduction",
    explanation: "The hip joint is least stable during flexion and adduction, which is why dislocations often occur in this position, such as during a car accident."
  },
  {
    question: "Which condition is associated with an increased angle between the femoral neck and shaft?",
    options: [
      "Coxa vara",
      "Coxa valga",
      "Hip dysplasia",
      "Osteoarthritis"
    ],
    correctAnswer: "Coxa valga",
    explanation: "Coxa valga is a deformity where the angle between the femoral neck and shaft is increased, leading to potential instability in the hip joint."
  },
  {
    question: "Which muscle is involved in both hip flexion and medial rotation?",
    options: [
      "Gluteus maximus",
      "Piriformis",
      "Iliopsoas",
      "Adductor magnus"
    ],
    correctAnswer: "Iliopsoas",
    explanation: "Iliopsoas is primarily involved in hip flexion and also assists in medial rotation of the hip joint."
  },
  {
    question: "What is the Galeazzi sign used to assess?",
    options: [
      "Knee dislocation",
      "Congenital hip dysplasia",
      "Foot drop",
      "Sciatic nerve injury"
    ],
    correctAnswer: "Congenital hip dysplasia",
    explanation: "The Galeazzi sign is used to assess for congenital hip dysplasia by comparing the height of the knees when the infant is lying down with flexed knees."
  },
  {
    question: "Which nerve is most likely to be injured in a posterior dislocation of the hip joint?",
    options: [
      "Femoral nerve",
      "Obturator nerve",
      "Sciatic nerve",
      "Tibial nerve"
    ],
    correctAnswer: "Sciatic nerve",
    explanation: "The sciatic nerve is the most likely to be injured in a posterior dislocation of the hip joint due to its proximity to the hip."
  },
  {
    question: "What type of joint movement occurs when the femoral head rotates within the acetabulum?",
    options: [
      "Circumduction",
      "Rotation",
      "Adduction",
      "Extension"
    ],
    correctAnswer: "Rotation",
    explanation: "Rotation occurs when the femoral head rotates within the acetabulum, allowing the thigh to rotate medially or laterally."
  },
  {
    question: "What type of movement does the hip joint perform when the thigh moves towards the body's midline?",
    options: [
      "Abduction",
      "Adduction",
      "Circumduction",
      "Flexion"
    ],
    correctAnswer: "Adduction",
    explanation: "Adduction is the movement of the thigh towards the body's midline, primarily controlled by the adductor muscles of the hip."
  },
  {
    question: "What is the function of the ligamentum teres in the hip joint?",
    options: [
      "Provides stability during abduction",
      "Contains a small artery that supplies blood to the femoral head",
      "Limits hip flexion",
      "Prevents hip dislocation"
    ],
    correctAnswer: "Contains a small artery that supplies blood to the femoral head",
    explanation: "The ligamentum teres contains a small artery that provides blood supply to the femoral head, particularly in children, helping to nourish the growing bone."
  },
  {
    question: "Which condition is characterized by a reduced angle between the femoral neck and shaft?",
    options: [
      "Coxa valga",
      "Coxa vara",
      "Hip dysplasia",
      "Osteoarthritis"
    ],
    correctAnswer: "Coxa vara",
    explanation: "Coxa vara is a deformity in which the angle between the femoral neck and shaft is reduced, leading to a bent inward appearance of the femur."
  },



  {
    question: "Which ligament is the strongest in the hip joint and prevents hyperextension?",
    options: [
      "Ischiofemoral ligament",
      "Pubofemoral ligament",
      "Iliofemoral ligament",
      "Ligamentum teres"
    ],
    correctAnswer: "Iliofemoral ligament",
    explanation: "The iliofemoral ligament is the strongest ligament of the hip joint and prevents hyperextension during standing."
  },
  {
    question: "Which artery provides the majority of blood supply to the head of the femur in adults?",
    options: [
      "Obturator artery",
      "Medial circumflex femoral artery",
      "Superior gluteal artery",
      "Inferior gluteal artery"
    ],
    correctAnswer: "Medial circumflex femoral artery",
    explanation: "The medial circumflex femoral artery provides most of the blood supply to the head and neck of the femur in adults."
  },
  {
    question: "Which movement at the hip joint is limited by the tension in the hamstring muscles?",
    options: [
      "Extension",
      "Flexion",
      "Abduction",
      "Lateral rotation"
    ],
    correctAnswer: "Flexion",
    explanation: "Flexion of the hip joint is limited when the knee is extended due to tension in the hamstring muscles."
  },
  {
    question: "Which condition results from a shallow acetabulum that leads to frequent dislocations?",
    options: [
      "Osteoarthritis",
      "Coxa valga",
      "Developmental dysplasia of the hip",
      "Sciatica"
    ],
    correctAnswer: "Developmental dysplasia of the hip",
    explanation: "Developmental dysplasia of the hip is characterized by a shallow acetabulum, which causes instability and frequent dislocations."
  },
  {
    question: "Which test is used to detect gluteus medius weakness in a patient with hip problems?",
    options: [
      "McMurray's Test",
      "Trendelenburg Test",
      "Barlow's Test",
      "Ortolani Test"
    ],
    correctAnswer: "Trendelenburg Test",
    explanation: "The Trendelenburg Test is used to detect weakness in the gluteus medius muscle, which can cause a drop of the contralateral pelvis during single-leg stance."
  },
  {
    question: "What is the main function of the gluteus medius during walking?",
    options: [
      "Flexes the hip",
      "Prevents the contralateral hip from dropping",
      "Laterally rotates the hip",
      "Adducts the thigh"
    ],
    correctAnswer: "Prevents the contralateral hip from dropping",
    explanation: "The gluteus medius stabilizes the pelvis during walking, preventing the contralateral hip from dropping when the opposite leg is lifted."
  },
  {
    question: "Which nerve is most commonly involved in hip dislocations, especially posterior dislocations?",
    options: [
      "Femoral nerve",
      "Obturator nerve",
      "Sciatic nerve",
      "Tibial nerve"
    ],
    correctAnswer: "Sciatic nerve",
    explanation: "The sciatic nerve is the most commonly affected in posterior hip dislocations because of its close proximity to the hip joint."
  },
  {
    question: "What type of gait is caused by weakness of the hip abductors, particularly gluteus medius?",
    options: [
      "Steppage gait",
      "Trendelenburg gait",
      "Antalgic gait",
      "Scissor gait"
    ],
    correctAnswer: "Trendelenburg gait",
    explanation: "A Trendelenburg gait occurs when the hip abductors, especially the gluteus medius, are weak, causing the pelvis to drop on the opposite side during walking."
  },
  {
    question: "Which muscle group is responsible for limiting excessive internal rotation of the hip?",
    options: [
      "Hip flexors",
      "Hip abductors",
      "Short lateral rotators",
      "Adductors"
    ],
    correctAnswer: "Short lateral rotators",
    explanation: "The short lateral rotators (piriformis, obturator internus, gemelli, quadratus femoris) limit excessive internal rotation and stabilize the hip joint."
  },
  {
    question: "Which condition presents with reduced blood supply to the femoral head, often resulting in avascular necrosis?",
    options: [
      "Osteoarthritis",
      "Avascular necrosis",
      "Hip dysplasia",
      "Hip fracture"
    ],
    correctAnswer: "Avascular necrosis",
    explanation: "Avascular necrosis occurs when the blood supply to the femoral head is compromised, leading to bone death and hip joint dysfunction."
  },


  {
    question: "How is the hip joint classified functionally?",
    options: [
      "Synarthrotic joint",
      "Diarthrotic joint",
      "Amphiarthrotic joint",
      "Cartilaginous joint"
    ],
    correctAnswer: "Diarthrotic joint",
    explanation: "Functionally, the hip joint is classified as a diarthrotic joint, meaning it is freely movable in multiple directions."
  },
  {
    question: "What are the main components of the acetabular surface in the hip joint?",
    options: [
      "Tibia, fibula, and femur",
      "Ilium, ischium, and pubis",
      "Clavicle, scapula, and humerus",
      "Radius, ulna, and carpals"
    ],
    correctAnswer: "Ilium, ischium, and pubis",
    explanation: "The acetabulum of the hip joint is formed by the ilium, ischium, and pubis, which fuse together at skeletal maturity."
  },
  {
    question: "Which muscles separate the hip joint from the femoral vessels and nerve anteriorly?",
    options: [
      "Piriformis and quadratus femoris",
      "Iliopsoas and pectineus",
      "Rectus femoris and tensor fasciae latae",
      "Gluteus medius and minimus"
    ],
    correctAnswer: "Iliopsoas and pectineus",
    explanation: "Anteriorly, the iliopsoas and pectineus muscles separate the hip joint from the femoral vessels and nerve."
  },
  {
    question: "Which ligaments contribute to the stability of the hip joint?",
    options: [
      "Iliofemoral, pubofemoral, and ischiofemoral ligaments",
      "Patellar ligament",
      "Radial collateral ligament",
      "Lateral collateral ligament"
    ],
    correctAnswer: "Iliofemoral, pubofemoral, and ischiofemoral ligaments",
    explanation: "The iliofemoral, pubofemoral, and ischiofemoral ligaments contribute to the stability of the hip joint by reinforcing the joint capsule."
  },
  {
    question: "Which nerves provide innervation to the hip joint according to Hilton's Law?",
    options: [
      "Femoral, obturator, and sciatic nerves",
      "Axillary, radial, and median nerves",
      "Ulnar, median, and radial nerves",
      "Musculocutaneous, ulnar, and femoral nerves"
    ],
    correctAnswer: "Femoral, obturator, and sciatic nerves",
    explanation: "The hip joint is innervated by branches of the femoral, obturator, and sciatic nerves, consistent with Hilton's Law."
  },
  {
    question: "Which arteries supply blood to the hip joint?",
    options: [
      "Gluteal arteries and branches of the femoral artery",
      "Radial and ulnar arteries",
      "Axillary and subclavian arteries",
      "Popliteal and tibial arteries"
    ],
    correctAnswer: "Gluteal arteries and branches of the femoral artery",
    explanation: "The blood supply to the hip joint is through anastomoses between the gluteal arteries and branches of the femoral artery."
  },
  {
    question: "Which muscles assist in hip flexion?",
    options: [
      "Iliopsoas, rectus femoris, and sartorius",
      "Gluteus maximus and hamstrings",
      "Piriformis and quadratus femoris",
      "Adductor longus and gracilis"
    ],
    correctAnswer: "Iliopsoas, rectus femoris, and sartorius",
    explanation: "Hip flexion is mainly performed by the iliopsoas, with assistance from the rectus femoris and sartorius muscles."
  },
  {
    question: "Which muscle group is responsible for lateral rotation of the hip?",
    options: [
      "Short lateral rotators such as piriformis, gemelli, and obturator muscles",
      "Iliopsoas and rectus femoris",
      "Adductor longus and magnus",
      "Gluteus medius and minimus"
    ],
    correctAnswer: "Short lateral rotators such as piriformis, gemelli, and obturator muscles",
    explanation: "Lateral rotation of the hip is carried out by the short lateral rotator muscles, including piriformis, gemelli, and obturator muscles."
  },
  {
    question: "What condition is associated with damage to the hip abductors, leading to a positive Trendelenburg sign?",
    options: [
      "Hip dysplasia",
      "Gluteus medius weakness",
      "Femoral head fracture",
      "Osteoarthritis"
    ],
    correctAnswer: "Gluteus medius weakness",
    explanation: "A positive Trendelenburg sign occurs when there is damage or weakness in the gluteus medius, leading to instability in the pelvis during walking."
  },
  {
    question: "What causes the limitation of hip flexion to about 110 degrees?",
    options: [
      "Contact with the abdominal wall",
      "Tension in the hamstrings",
      "Shortness of the gluteus maximus",
      "Pressure from the sciatic nerve"
    ],
    correctAnswer: "Contact with the abdominal wall",
    explanation: "Hip flexion is limited to about 110 degrees when the knee is flexed due to contact with the abdominal wall."
  },




//Nelson’s Note

  {
    question: "Which muscle is the primary hip flexor?",
    options: [
      "Gluteus maximus",
      "Adductor brevis",
      "Iliopsoas",
      "Rectus femoris"
    ],
    correctAnswer: "Iliopsoas",
    explanation: "The iliopsoas muscle is the primary hip flexor, responsible for lifting the thigh towards the body."
  },
  {
    question: "Which muscle is responsible for hip extension?",
    options: [
      "Gluteus medius",
      "Adductor brevis",
      "Gluteus maximus",
      "Iliopsoas"
    ],
    correctAnswer: "Gluteus maximus",
    explanation: "The gluteus maximus is the main muscle responsible for extending the hip joint, moving the thigh backward."
  },
  {
    question: "Which muscle is primarily responsible for hip abduction?",
    options: [
      "Adductor brevis",
      "Gluteus maximus",
      "Gluteus medius",
      "Iliopsoas"
    ],
    correctAnswer: "Gluteus medius",
    explanation: "The gluteus medius is the primary muscle for abducting the hip, moving the leg away from the body's midline."
  },
  {
    question: "Which muscle is involved in hip adduction?",
    options: [
      "Adductor brevis",
      "Gluteus maximus",
      "Iliopsoas",
      "Gluteus medius"
    ],
    correctAnswer: "Adductor brevis",
    explanation: "The adductor brevis is responsible for hip adduction, pulling the leg toward the body's midline."
  },
  {
    question: "Which ligament prevents over-abduction and extension of the hip joint?",
    options: [
      "Iliofemoral ligament",
      "Pubofemoral ligament",
      "Ischiofemoral ligament",
      "Ligamentum teres"
    ],
    correctAnswer: "Pubofemoral ligament",
    explanation: "The pubofemoral ligament is located on the anterior side of the hip and prevents over-abduction and extension."
  },
  {
    question: "Which ligament is known for its Y-shape and prevents over-extension of the hip joint?",
    options: [
      "Iliofemoral ligament",
      "Ischiofemoral ligament",
      "Pubofemoral ligament",
      "Ligamentum teres"
    ],
    correctAnswer: "Iliofemoral ligament",
    explanation: "The iliofemoral ligament, also called the Y-shaped ligament, is located on the anterior side and prevents over-extension of the hip joint."
  },
  {
    question: "Where is the ischiofemoral ligament located?",
    options: [
      "On the anterior side of the hip joint",
      "On the lateral side of the hip joint",
      "On the posterior side of the hip joint",
      "On the medial side of the hip joint"
    ],
    correctAnswer: "On the posterior side of the hip joint",
    explanation: "The ischiofemoral ligament is located on the posterior side of the hip joint and originates from the ischium of the pelvis."
  },
  {
    question: "What does the ischiofemoral ligament insert deep to?",
    options: [
      "The pubofemoral ligament",
      "The iliopsoas muscle",
      "The iliofemoral ligament",
      "The gluteus maximus"
    ],
    correctAnswer: "The iliofemoral ligament",
    explanation: "The ischiofemoral ligament inserts deep to the iliofemoral ligament, located on the posterior side of the hip joint."
  },
  {
    question: "Which ligament originates from the ischium of the pelvis?",
    options: [
      "Iliofemoral ligament",
      "Pubofemoral ligament",
      "Ischiofemoral ligament",
      "Ligamentum teres"
    ],
    correctAnswer: "Ischiofemoral ligament",
    explanation: "The ischiofemoral ligament originates from the ischium of the pelvis and inserts deep to the iliofemoral ligament."
  },
  {
    question: "Which of the following ligaments prevents over-extension of the hip joint?",
    options: [
      "Pubofemoral ligament",
      "Iliofemoral ligament",
      "Ischiofemoral ligament",
      "Ligamentum teres"
    ],
    correctAnswer: "Iliofemoral ligament",
    explanation: "The iliofemoral ligament, located on the anterior side of the hip, prevents over-extension of the joint."
  },




  {
    question: "What is the joint capsule of the hip primarily responsible for?",
    options: [
      "Providing blood supply to the hip",
      "Lubricating the hip joint",
      "Stability of the hip joint",
      "Flexion of the hip joint"
    ],
    correctAnswer: "Stability of the hip joint",
    explanation: "The joint capsule of the hip is a watertight sac that provides the main source of stability by connecting the head of the femur to the acetabulum."
  },
  {
    question: "What role does the ligamentum teres play in the hip joint?",
    options: [
      "Prevents overextension of the hip",
      "Connects the tip of the femur to the acetabulum and provides a small amount of blood supply",
      "Assists in hip abduction",
      "Helps in hip flexion"
    ],
    correctAnswer: "Connects the tip of the femur to the acetabulum and provides a small amount of blood supply",
    explanation: "The ligamentum teres connects the tip of the femur to the acetabulum and carries a small artery that provides limited blood supply, mainly functional in children."
  },
  {
    question: "What is the function of a bursa in the body?",
    options: [
      "To generate movement",
      "To provide blood supply to muscles",
      "To reduce friction between muscles, tendons, and bones",
      "To store nutrients"
    ],
    correctAnswer: "To reduce friction between muscles, tendons, and bones",
    explanation: "A bursa is a thin sac of fluid that lubricates areas of friction between muscles, tendons, and bones to reduce wear."
  },
  {
    question: "Where is the greater trochanteric bursa located?",
    options: [
      "Between the iliopsoas muscle and hip joint",
      "Between the greater trochanter and the muscles/tendons crossing over it",
      "Between the ischial tuberosity and the surrounding muscles",
      "Inside the joint capsule"
    ],
    correctAnswer: "Between the greater trochanter and the muscles/tendons crossing over it",
    explanation: "The greater trochanteric bursa is located between the bump of the hip (greater trochanter) and the muscles and tendons that cross over it."
  },
  {
    question: "What is trochanteric bursitis?",
    options: [
      "A breakdown of articular cartilage",
      "Irritation and inflammation of the greater trochanteric bursa",
      "Inflammation of the iliopsoas tendon",
      "Inflammation of the joint capsule"
    ],
    correctAnswer: "Irritation and inflammation of the greater trochanteric bursa",
    explanation: "Trochanteric bursitis is the irritation and inflammation of the greater trochanteric bursa, often causing hip pain."
  },
  {
    question: "Where is the iliopsoas bursa located?",
    options: [
      "Between the iliopsoas muscle and the greater trochanter",
      "Between the iliopsoas muscle and the hip joint",
      "Inside the joint capsule",
      "On the posterior side of the femur"
    ],
    correctAnswer: "Between the iliopsoas muscle and the hip joint",
    explanation: "The iliopsoas bursa sits between the iliopsoas muscle and the hip joint, cushioning where the iliopsoas tendon passes in front of the joint."
  },
  {
    question: "What is ischial bursitis?",
    options: [
      "Inflammation of the bursa over the greater trochanter",
      "Inflammation of the bursa located at the ischial tuberosity",
      "A type of osteoarthritis",
      "A tear in the iliopsoas muscle"
    ],
    correctAnswer: "Inflammation of the bursa located at the ischial tuberosity",
    explanation: "Ischial bursitis is the inflammation of the bursa located at the ischial tuberosity, the bony area in your buttocks that you sit on."
  },
  {
    question: "Where is the ischial tuberosity bursa located?",
    options: [
      "Over the greater trochanter",
      "Inside the hip joint capsule",
      "At the bony bump in your buttocks",
      "Near the acetabulum"
    ],
    correctAnswer: "At the bony bump in your buttocks",
    explanation: "The ischial tuberosity bursa is located at the bump of bone in your buttocks, which you sit on."
  },
  {
    question: "What condition involves the breakdown of articular cartilage in the hip joint?",
    options: [
      "Osteoarthritis",
      "Trochanteric bursitis",
      "Hip dysplasia",
      "Ischial bursitis"
    ],
    correctAnswer: "Osteoarthritis",
    explanation: "Osteoarthritis involves the breakdown of the articular cartilage in the hip joint, leading to pain and stiffness."
  },
  {
    question: "Which bursa is most associated with sitting-related pain due to inflammation?",
    options: [
      "Greater trochanteric bursa",
      "Iliopsoas bursa",
      "Ischial tuberosity bursa",
      "Subscapular bursa"
    ],
    correctAnswer: "Ischial tuberosity bursa",
    explanation: "The ischial tuberosity bursa, located at the bump of bone in the buttocks, can become inflamed (ischial bursitis) and cause sitting-related pain."
  },
  {
    question: "Which bursa is located between the iliopsoas muscle and the hip joint?",
    options: [
      "Ischial tuberosity bursa",
      "Greater trochanteric bursa",
      "Iliopsoas bursa",
      "Subacromial bursa"
    ],
    correctAnswer: "Iliopsoas bursa",
    explanation: "The iliopsoas bursa is located between the iliopsoas muscle and the hip joint, cushioning the tendon as it passes in front of the hip."
  },
  {
    question: "What is the primary function of the joint capsule in the hip?",
    options: [
      "Reducing friction between tendons",
      "Providing blood supply to the joint",
      "Maintaining stability of the joint",
      "Allowing for greater range of motion"
    ],
    correctAnswer: "Maintaining stability of the joint",
    explanation: "The joint capsule, formed by a strong ligament, helps connect the femur to the acetabulum and provides stability to the hip joint."
  },
  {
    question: "Which structure provides a small amount of blood supply to the femoral head, particularly in children?",
    options: [
      "Iliofemoral ligament",
      "Ligamentum teres",
      "Greater trochanteric bursa",
      "Ischial tuberosity bursa"
    ],
    correctAnswer: "Ligamentum teres",
    explanation: "The ligamentum teres contains a small artery that supplies blood to the femoral head, mainly functional in children."
  },
  {
    question: "Which condition involves the inflammation of the bursa between the greater trochanter and the muscles/tendons crossing over it?",
    options: [
      "Trochanteric bursitis",
      "Ischial bursitis",
      "Osteoarthritis",
      "Hip dysplasia"
    ],
    correctAnswer: "Trochanteric bursitis",
    explanation: "Trochanteric bursitis is the inflammation of the bursa located between the greater trochanter and the muscles/tendons crossing over it."
  },
  {
    question: "What is the role of the iliopsoas bursa in the hip joint?",
    options: [
      "Connects the iliopsoas muscle to the femur",
      "Reduces friction between the iliopsoas tendon and the hip joint",
      "Provides blood supply to the femur",
      "Assists in hip abduction"
    ],
    correctAnswer: "Reduces friction between the iliopsoas tendon and the hip joint",
    explanation: "The iliopsoas bursa reduces friction between the iliopsoas tendon and the hip joint where the tendon passes in front of the joint."
  },
  {
    question: "Which structure is primarily affected in osteoarthritis of the hip?",
    options: [
      "Ligamentum teres",
      "Articular cartilage",
      "Iliopsoas muscle",
      "Ischial tuberosity bursa"
    ],
    correctAnswer: "Articular cartilage",
    explanation: "In osteoarthritis, the articular cartilage of the hip joint breaks down, leading to pain and restricted movement."
  },
  {
    question: "What is the function of the greater trochanteric bursa?",
    options: [
      "To supply blood to the hip",
      "To reduce friction between the greater trochanter and surrounding tendons/muscles",
      "To stabilize the hip joint",
      "To assist in hip abduction"
    ],
    correctAnswer: "To reduce friction between the greater trochanter and surrounding tendons/muscles",
    explanation: "The greater trochanteric bursa reduces friction between the greater trochanter and the muscles and tendons that cross over it."
  },
  {
    question: "What is the primary function of the ischial tuberosity bursa?",
    options: [
      "To reduce friction between the ischial tuberosity and surrounding tissues",
      "To assist in hip extension",
      "To provide blood supply to the ischial region",
      "To stabilize the hip joint"
    ],
    correctAnswer: "To reduce friction between the ischial tuberosity and surrounding tissues",
    explanation: "The ischial tuberosity bursa reduces friction between the ischial tuberosity (the bony prominence you sit on) and surrounding tissues."
  },
  {
    question: "What does inflammation of the ischial tuberosity bursa result in?",
    options: [
      "Trochanteric bursitis",
      "Osteoarthritis",
      "Ischial bursitis",
      "Ligamentum teres rupture"
    ],
    correctAnswer: "Ischial bursitis",
    explanation: "Ischial bursitis occurs when the ischial tuberosity bursa becomes inflamed, often resulting in pain during sitting."
  },





        
        // Add more questions following this pattern
      ],
      
    },

//end of the Hip Joint 


  
  
  
  
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////Popliteal Fossa/////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
      {
        category: "Popliteal Fossa",
        questions: [
    {
      question: "Where is the popliteal fossa located?",
      options: [
        "Anterior to the knee joint",
        "Lateral to the ankle",
        "Posterior to the knee joint",
        "Medial to the hip joint"
      ],
      correctAnswer: "Posterior to the knee joint",
      explanation: "The popliteal fossa is a diamond-shaped depression located at the back of the knee joint."
    },
    {
      question: "Which nerve passes through the popliteal fossa?",
      options: [
        "Femoral nerve",
        "Tibial nerve",
        "Obturator nerve",
        "Lateral femoral cutaneous nerve"
      ],
      correctAnswer: "Tibial nerve",
      explanation: "The tibial nerve, a branch of the sciatic nerve, runs through the popliteal fossa."
    },
    {
      question: "What forms the superior lateral boundary of the popliteal fossa?",
      options: [
        "Biceps femoris",
        "Semitendinosus",
        "Sartorius",
        "Gastrocnemius"
      ],
      correctAnswer: "Biceps femoris",
      explanation: "The biceps femoris muscle forms the superior lateral boundary of the popliteal fossa."
    },
    {
      question: "Which artery is found in the popliteal fossa?",
      options: [
        "Popliteal artery",
        "Femoral artery",
        "Posterior tibial artery",
        "Anterior tibial artery"
      ],
      correctAnswer: "Popliteal artery",
      explanation: "The popliteal artery is a continuation of the femoral artery and passes through the popliteal fossa."
    },
    {
      question: "Which vein is located within the popliteal fossa?",
      options: [
        "Great saphenous vein",
        "Popliteal vein",
        "Small saphenous vein",
        "Posterior tibial vein"
      ],
      correctAnswer: "Popliteal vein",
      explanation: "The popliteal vein is found in the popliteal fossa and drains blood from the lower limb."
    },
    {
      question: "Which muscle forms the inferior medial boundary of the popliteal fossa?",
      options: [
        "Semimembranosus",
        "Gastrocnemius (medial head)",
        "Plantaris",
        "Biceps femoris"
      ],
      correctAnswer: "Gastrocnemius (medial head)",
      explanation: "The medial head of the gastrocnemius muscle forms the inferior medial boundary of the popliteal fossa."
    },
    {
      question: "Which structure is most superficial in the popliteal fossa?",
      options: [
        "Popliteal artery",
        "Tibial nerve",
        "Popliteal vein",
        "Common fibular nerve"
      ],
      correctAnswer: "Tibial nerve",
      explanation: "The tibial nerve is the most superficial structure in the popliteal fossa, located just beneath the skin and fascia."
    },
    {
      question: "What is the deepest structure in the popliteal fossa?",
      options: [
        "Tibial nerve",
        "Popliteal vein",
        "Popliteal artery",
        "Sciatic nerve"
      ],
      correctAnswer: "Popliteal artery",
      explanation: "The popliteal artery is the deepest structure in the popliteal fossa, located beneath the popliteal vein and nerves."
    },
    {
      question: "Which nerve provides sensory innervation to the skin over the popliteal fossa?",
      options: [
        "Sural nerve",
        "Tibial nerve",
        "Femoral nerve",
        "Obturator nerve"
      ],
      correctAnswer: "Sural nerve",
      explanation: "The sural nerve provides cutaneous sensory innervation to the skin over the popliteal fossa."
    },
    {
      question: "Which muscle forms the superior medial boundary of the popliteal fossa?",
      options: [
        "Semimembranosus",
        "Biceps femoris",
        "Gastrocnemius (medial head)",
        "Popliteus"
      ],
      correctAnswer: "Semimembranosus",
      explanation: "The semimembranosus muscle forms the superior medial boundary of the popliteal fossa."
    },
    {
      question: "What is the function of the popliteal artery?",
      options: [
        "To supply blood to the thigh",
        "To supply blood to the leg and foot",
        "To drain blood from the knee joint",
        "To provide innervation to the leg muscles"
      ],
      correctAnswer: "To supply blood to the leg and foot",
      explanation: "The popliteal artery supplies oxygenated blood to the leg and foot after passing through the popliteal fossa."
    },
    {
      question: "Which nerve exits the popliteal fossa laterally?",
      options: [
        "Tibial nerve",
        "Common fibular nerve",
        "Obturator nerve",
        "Sciatic nerve"
      ],
      correctAnswer: "Common fibular nerve",
      explanation: "The common fibular nerve exits the popliteal fossa laterally, winding around the neck of the fibula."
    },
    {
      question: "Which nerve bifurcates into the tibial and common fibular nerves within the popliteal fossa?",
      options: [
        "Femoral nerve",
        "Sciatic nerve",
        "Obturator nerve",
        "Lateral femoral cutaneous nerve"
      ],
      correctAnswer: "Sciatic nerve",
      explanation: "The sciatic nerve bifurcates into the tibial and common fibular nerves within the popliteal fossa."
    },
    {
      question: "Which tendon is found medially in the popliteal fossa?",
      options: [
        "Semimembranosus tendon",
        "Biceps femoris tendon",
        "Achilles tendon",
        "Plantaris tendon"
      ],
      correctAnswer: "Semimembranosus tendon",
      explanation: "The semimembranosus tendon is located medially in the popliteal fossa."
    },
    {
      question: "Which muscle acts to unlock the knee joint and is located in the popliteal region?",
      options: [
        "Popliteus",
        "Gastrocnemius",
        "Plantaris",
        "Semimembranosus"
      ],
      correctAnswer: "Popliteus",
      explanation: "The popliteus muscle helps unlock the knee joint by rotating the femur laterally on the tibia."
    },
    {
      question: "What is the clinical significance of the popliteal pulse?",
      options: [
        "It indicates the presence of femoral artery blockage",
        "It is used to assess blood flow to the lower leg",
        "It indicates nerve damage in the knee",
        "It is the primary site for venous blood withdrawal"
      ],
      correctAnswer: "It is used to assess blood flow to the lower leg",
      explanation: "The popliteal pulse is an important clinical indicator of blood flow to the leg and foot."
    },
    {
      question: "Which structure within the popliteal fossa is commonly affected by aneurysms?",
      options: [
        "Popliteal artery",
        "Popliteal vein",
        "Tibial nerve",
        "Common fibular nerve"
      ],
      correctAnswer: "Popliteal artery",
      explanation: "The popliteal artery is prone to aneurysms due to its location and the high pressure exerted during knee movement."
    },
    {
      question: "Which muscle lies deepest in the popliteal region?",
      options: [
        "Popliteus",
        "Semimembranosus",
        "Gastrocnemius",
        "Plantaris"
      ],
      correctAnswer: "Popliteus",
      explanation: "The popliteus muscle is the deepest muscle in the popliteal region, lying directly against the tibia."
    },
    {
      question: "Which bony structure is located at the superior apex of the popliteal fossa?",
      options: [
        "Femur",
        "Patella",
        "Tibia",
        "Fibula"
      ],
      correctAnswer: "Femur",
      explanation: "The distal end of the femur forms the superior apex of the popliteal fossa."
    },
    {
      question: "Which structure is responsible for venous drainage from the popliteal fossa?",
      options: [
        "Popliteal vein",
        "Great saphenous vein",
        "Small saphenous vein",
        "Anterior tibial vein"
      ],
      correctAnswer: "Popliteal vein",
      explanation: "The popliteal vein drains venous blood from the popliteal fossa and continues proximally to become the femoral vein."
    },
  
  
    {
      question: "What forms the inferior lateral boundary of the popliteal fossa?",
      options: [
        "Gastrocnemius (lateral head)",
        "Soleus",
        "Semitendinosus",
        "Biceps femoris"
      ],
      correctAnswer: "Gastrocnemius (lateral head)",
      explanation: "The lateral head of the gastrocnemius muscle forms the inferior lateral boundary of the popliteal fossa. This muscle is essential for plantarflexion of the foot at the ankle and flexion at the knee."
    },
    {
      question: "Which nerve is responsible for the motor innervation of the posterior leg muscles passing through the popliteal fossa?",
      options: [
        "Common fibular nerve",
        "Tibial nerve",
        "Femoral nerve",
        "Sural nerve"
      ],
      correctAnswer: "Tibial nerve",
      explanation: "The tibial nerve, a division of the sciatic nerve, innervates most muscles of the posterior compartment of the leg, including those responsible for plantarflexion and toe flexion. It passes through the popliteal fossa before dividing further down the leg."
    },
    {
      question: "Which major vein joins the popliteal vein in the popliteal fossa?",
      options: [
        "Great saphenous vein",
        "Small saphenous vein",
        "Femoral vein",
        "Anterior tibial vein"
      ],
      correctAnswer: "Small saphenous vein",
      explanation: "The small saphenous vein drains blood from the superficial structures of the posterior leg and joins the popliteal vein within the popliteal fossa."
    },
    {
      question: "What is the function of the popliteal fossa during knee flexion?",
      options: [
        "It protects the ligaments of the knee",
        "It facilitates smooth movement of blood vessels and nerves",
        "It stabilizes the patella",
        "It absorbs shock during running"
      ],
      correctAnswer: "It facilitates smooth movement of blood vessels and nerves",
      explanation: "During knee flexion, the popliteal fossa provides space for the popliteal artery, vein, and nerves to move freely, preventing them from being compressed or damaged during movement."
    },
    {
      question: "Which structure in the popliteal fossa is most prone to aneurysms?",
      options: [
        "Popliteal artery",
        "Tibial nerve",
        "Common fibular nerve",
        "Popliteal vein"
      ],
      correctAnswer: "Popliteal artery",
      explanation: "The popliteal artery is prone to aneurysms due to its proximity to the knee joint, where it is subject to mechanical stress. A popliteal aneurysm can compress nearby structures, causing pain, swelling, or even nerve damage."
    },
    {
      question: "Which muscle covers the popliteal artery as it enters the popliteal fossa?",
      options: [
        "Semitendinosus",
        "Semimembranosus",
        "Gastrocnemius",
        "Popliteus"
      ],
      correctAnswer: "Popliteus",
      explanation: "The popliteus muscle is located at the base of the popliteal fossa and covers the popliteal artery as it enters the fossa. This small, deep muscle plays an important role in unlocking the knee from full extension."
    },
    {
      question: "What is the role of the sural nerve in the popliteal fossa?",
      options: [
        "It provides sensory innervation to the sole of the foot",
        "It supplies motor innervation to the hamstring muscles",
        "It provides sensory innervation to the posterior leg and lateral foot",
        "It innervates the muscles of the calf"
      ],
      correctAnswer: "It provides sensory innervation to the posterior leg and lateral foot",
      explanation: "The sural nerve is a sensory nerve that arises in the popliteal fossa. It supplies sensation to the skin of the posterior leg and the lateral aspect of the foot."
    },
    {
      question: "Which ligament can be felt through the popliteal fossa when the knee is extended?",
      options: [
        "Anterior cruciate ligament",
        "Medial collateral ligament",
        "Posterior cruciate ligament",
        "Lateral collateral ligament"
      ],
      correctAnswer: "Posterior cruciate ligament",
      explanation: "The posterior cruciate ligament (PCL) can be palpated through the popliteal fossa when the knee is extended. It stabilizes the knee by preventing the tibia from sliding backward relative to the femur."
    },
    {
      question: "Which vessels supply blood to the popliteal fossa?",
      options: [
        "Femoral artery and vein",
        "Popliteal artery and vein",
        "Anterior tibial artery and posterior tibial vein",
        "Sural artery and great saphenous vein"
      ],
      correctAnswer: "Popliteal artery and vein",
      explanation: "The popliteal artery and vein are the major vessels in the popliteal fossa, providing blood supply and drainage for the knee, leg, and foot."
    },
    {
      question: "Which nerve is responsible for sensory innervation to the lateral aspect of the leg, emerging from the popliteal fossa?",
      options: [
        "Tibial nerve",
        "Common fibular nerve",
        "Sural nerve",
        "Obturator nerve"
      ],
      correctAnswer: "Common fibular nerve",
      explanation: "The common fibular nerve provides sensory innervation to the lateral aspect of the leg and dorsum of the foot. It splits off from the sciatic nerve within the popliteal fossa."
    },
    {
      question: "Which muscle assists in unlocking the knee joint and is located in the popliteal fossa?",
      options: [
        "Gastrocnemius",
        "Plantaris",
        "Semimembranosus",
        "Popliteus"
      ],
      correctAnswer: "Popliteus",
      explanation: "The popliteus muscle assists in unlocking the knee from its fully extended position by rotating the femur laterally on the tibia. This is crucial for initiating knee flexion."
    },
    {
      question: "What structure protects the popliteal artery from being compressed during knee flexion?",
      options: [
        "Popliteal vein",
        "Tibial nerve",
        "Popliteus muscle",
        "Semitendinosus muscle"
      ],
      correctAnswer: "Popliteus muscle",
      explanation: "The popliteus muscle, located at the base of the popliteal fossa, protects the popliteal artery by creating space for the vessel to move freely during knee flexion, reducing the risk of compression."
    },
    {
      question: "What is the clinical significance of the popliteal pulse?",
      options: [
        "It indicates the health of the posterior tibial vein",
        "It helps assess the circulation to the leg and foot",
        "It determines the presence of deep vein thrombosis",
        "It measures the strength of the femoral artery"
      ],
      correctAnswer: "It helps assess the circulation to the leg and foot",
      explanation: "The popliteal pulse, found by palpating the popliteal artery, is a key indicator of blood flow to the lower leg and foot. Weak or absent pulses may indicate arterial occlusion or other vascular problems."
    },
    {
      question: "Which structure is at risk of injury in posterior dislocation of the knee joint?",
      options: [
        "Tibial nerve",
        "Popliteal artery",
        "Common fibular nerve",
        "Popliteal vein"
      ],
      correctAnswer: "Popliteal artery",
      explanation: "The popliteal artery is at significant risk of injury in posterior dislocations of the knee due to its location deep in the popliteal fossa and close proximity to the knee joint."
    },
    {
      question: "Which small muscle located in the popliteal fossa is sometimes absent in individuals?",
      options: [
        "Plantaris",
        "Popliteus",
        "Soleus",
        "Semitendinosus"
      ],
      correctAnswer: "Plantaris",
      explanation: "The plantaris muscle, a small and vestigial muscle with a long tendon, is sometimes absent in individuals. It is located in the popliteal fossa and plays a minor role in knee flexion."
    },
    {
      question: "Which of the following structures is least likely to be injured in a popliteal aneurysm?",
      options: [
        "Tibial nerve",
        "Popliteal vein",
        "Common fibular nerve",
        "Femoral nerve"
      ],
      correctAnswer: "Femoral nerve",
      explanation: "The femoral nerve does not pass through the popliteal fossa, so it is less likely to be affected by a popliteal aneurysm compared to the tibial nerve, popliteal vein, and common fibular nerve."
    },
    {
      question: "Which deep vein of the leg passes through the popliteal fossa?",
      options: [
        "Popliteal vein",
        "Great saphenous vein",
        "Anterior tibial vein",
        "Small saphenous vein"
      ],
      correctAnswer: "Popliteal vein",
  explanation: "The popliteal vein is the main vein in the popliteal fossa and drains blood from the deep veins of the leg before becoming the femoral vein as it passes into the thigh."
    },
    {
      question: "What is the function of the common fibular nerve as it exits the popliteal fossa?",
      options: [
        "It innervates the medial aspect of the leg",
        "It innervates the muscles of the lateral leg and dorsum of the foot",
        "It innervates the posterior compartment of the leg",
        "It innervates the anterior thigh muscles"
      ],
      correctAnswer: "It innervates the muscles of the lateral leg and dorsum of the foot",
      explanation: "The common fibular nerve exits the popliteal fossa and innervates the muscles of the lateral compartment of the leg and dorsum of the foot, allowing for dorsiflexion and eversion of the foot."
    },
    {
      question: "Which muscle forms the floor of the popliteal fossa?",
      options: [
        "Semimembranosus",
        "Gastrocnemius",
        "Popliteus",
        "Biceps femoris"
      ],
      correctAnswer: "Popliteus",
      explanation: "The popliteus muscle forms the floor of the popliteal fossa and plays a key role in unlocking the knee from full extension by laterally rotating the femur."
    },
    {
      question: "What forms the roof of the popliteal fossa?",
      options: [
        "Popliteal artery and vein",
        "Skin and popliteal fascia",
        "Semitendinosus and semimembranosus muscles",
        "Biceps femoris tendon"
      ],
      correctAnswer: "Skin and popliteal fascia",
      explanation: "The roof of the popliteal fossa is formed by the skin and popliteal fascia, which provide a protective covering for the underlying neurovascular structures."
    },
    {
      question: "Which artery bifurcates at the inferior border of the popliteal fossa?",
      options: [
        "Popliteal artery",
        "Femoral artery",
        "Tibial artery",
        "Anterior tibial artery"
      ],
      correctAnswer: "Popliteal artery",
      explanation: "At the inferior border of the popliteal fossa, the popliteal artery bifurcates into the anterior tibial artery and posterior tibial artery, which supply blood to the leg."
    },
    {
      question: "Which vein in the popliteal fossa is at risk of thrombosis due to its deep location?",
      options: [
        "Great saphenous vein",
        "Popliteal vein",
        "Small saphenous vein",
        "Femoral vein"
      ],
      correctAnswer: "Popliteal vein",
      explanation: "The popliteal vein, located deep within the popliteal fossa, is at risk of thrombosis due to slow blood flow in this region, which can lead to deep vein thrombosis (DVT)."
    },
    {
      question: "Which nerve, when injured in the popliteal fossa, can cause foot drop?",
      options: [
        "Tibial nerve",
        "Common fibular nerve",
        "Sural nerve",
        "Obturator nerve"
      ],
      correctAnswer: "Common fibular nerve",
      explanation: "Injury to the common fibular nerve in the popliteal fossa can result in foot drop, a condition where the patient is unable to dorsiflex the foot, leading to difficulty walking."
    },
    {
      question: "What is the primary function of the popliteal artery in the lower limb?",
      options: [
        "To supply blood to the anterior compartment of the leg",
        "To provide venous drainage for the leg",
        "To supply blood to the knee joint and surrounding muscles",
        "To facilitate nerve innervation in the popliteal fossa"
      ],
      correctAnswer: "To supply blood to the knee joint and surrounding muscles",
      explanation: "The popliteal artery is the major blood supply to the knee joint and surrounding muscles. It continues as the anterior and posterior tibial arteries, supplying the lower leg and foot."
    },
    {
      question: "Which structure in the popliteal fossa is compressed in popliteal entrapment syndrome?",
      options: [
        "Tibial nerve",
        "Popliteal artery",
        "Common fibular nerve",
        "Popliteal vein"
      ],
      correctAnswer: "Popliteal artery",
      explanation: "Popliteal entrapment syndrome occurs when the popliteal artery is compressed by surrounding muscles or tendons, leading to reduced blood flow to the leg and foot, especially during exercise."
    },
    {
      question: "Which muscle tendon forms part of the superior lateral boundary of the popliteal fossa?",
      options: [
        "Biceps femoris tendon",
        "Semitendinosus tendon",
        "Semimembranosus tendon",
        "Gastrocnemius tendon"
      ],
      correctAnswer: "Biceps femoris tendon",
      explanation: "The biceps femoris tendon forms the superior lateral boundary of the popliteal fossa. This muscle is part of the hamstring group and plays a role in knee flexion."
    },
    {
      question: "Which nerve is the most superficial in the popliteal fossa and at risk during surgery?",
      options: [
        "Common fibular nerve",
        "Tibial nerve",
        "Sural nerve",
        "Obturator nerve"
      ],
      correctAnswer: "Tibial nerve",
      explanation: "The tibial nerve is the most superficial major structure in the popliteal fossa, making it vulnerable to injury during surgical procedures in this region."
    },
    {
      question: "What is the clinical importance of the popliteal fossa during knee surgery?",
      options: [
        "It contains the major ligaments of the knee",
        "It houses the nerves and blood vessels that can be injured during surgery",
        "It is the primary site for muscle attachment",
        "It provides access to the femoral artery"
      ],
      correctAnswer: "It houses the nerves and blood vessels that can be injured during surgery",
      explanation: "The popliteal fossa contains important nerves (tibial, common fibular) and blood vessels (popliteal artery and vein), which are at risk of injury during knee surgeries, such as joint replacement."
    },
    {
      question: "Which nerve in the popliteal fossa supplies motor function to the calf muscles?",
      options: [
        "Tibial nerve",
        "Common fibular nerve",
        "Sural nerve",
        "Obturator nerve"
      ],
      correctAnswer: "Tibial nerve",
      explanation: "The tibial nerve supplies motor innervation to the muscles of the posterior leg, including the gastrocnemius and soleus muscles, which are responsible for plantarflexion of the foot."
    },
    {
      question: "Which structure, when injured in the popliteal fossa, can lead to swelling and reduced blood flow to the leg?",
      options: [
        "Popliteal artery",
        "Tibial nerve",
        "Popliteal vein",
        "Common fibular nerve"
      ],
      correctAnswer: "Popliteal vein",
      explanation: "Injury to the popliteal vein can lead to venous pooling, causing swelling and discomfort in the leg, as well as reducing proper blood drainage from the lower limb."
    },
    {
      question: "What is the role of the plantaris muscle, located in the popliteal fossa?",
      options: [
        "To assist in knee flexion and plantarflexion",
        "To unlock the knee from full extension",
        "To provide sensory innervation to the calf",
        "To stabilize the knee joint"
      ],
      correctAnswer: "To assist in knee flexion and plantarflexion",
      explanation: "The plantaris muscle has a long tendon and assists the larger calf muscles in both knee flexion and plantarflexion of the foot, although its function is considered minor."
    },
          
          // Add more questions following this pattern
        ],
        
      },
  
  //Popliteal Fossa ends 
  
  

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
  
  
  
  
  