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
  ////////////////////////////////////////////History of Anatomy////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
      {
        category: "History of Anatomy",
        questions: [
          
{
question: "Who is known as the Father of Medicine?",
options: ["Aristotle", "Hippocrates", "Plato", "Herophilus"],
correctAnswer: "Hippocrates",
explanation: "Hippocrates is credited with being the first to believe that diseases have natural causes rather than being punishments from the gods."
},

{
question: "Which ancient anatomist first identified the difference between sensory and motor nerves?",
options: ["Herophilus", "Galen", "Aristotle", "Vesalius"],
correctAnswer: "Herophilus",
explanation: "Herophilus was the first to distinguish between sensory and motor nerves during his dissections in Alexandria."
},

{
question: "What is the meaning of the Greek word 'anatome' from which anatomy is derived?",
options: ["Healing", "Structure", "Dissection", "Observation"],
correctAnswer: "Dissection",
explanation: "The term 'anatome' means 'dissection', which is the fundamental process in studying anatomy."
},

{
question: "Who performed the first recorded dissections on human cadavers?",
options: ["Hippocrates", "Galen", "Herophilus", "Aristotle"],
correctAnswer: "Herophilus",
explanation: "Herophilus, a great teacher of anatomy in Alexandria, performed human dissections and vivisections."
},

{
question: "Which of the following did Aristotle incorrectly believe?",
options: ["Brain controls the body", "Heart is the seat of intelligence", "Veins and arteries contain blood", "Organs function as a system"],
correctAnswer: "Heart is the seat of intelligence",
explanation: "Aristotle mistakenly believed that intelligence was housed in the heart rather than the brain."
},

{
question: "Who is credited with being the first to describe blood circulation?",
options: ["Galen", "Harvey", "Vesalius", "Leeuwenhoek"],
correctAnswer: "Harvey",
explanation: "William Harvey conducted experiments demonstrating that blood circulates continuously in the body."
},

{
question: "Which body cavity houses the brain?",
options: ["Thoracic cavity", "Cranial cavity", "Abdominal cavity", "Pleural cavity"],
correctAnswer: "Cranial cavity",
explanation: "The cranial cavity encloses and protects the brain."
},

{
question: "What structure develops into the brain and spinal cord?",
options: ["Notochord", "Dorsal hollow nerve cord", "Pharyngeal pouches", "Vertebral column"],
correctAnswer: "Dorsal hollow nerve cord",
explanation: "The dorsal hollow nerve cord later forms the brain and spinal cord in vertebrates."
},

{
question: "Which organ is covered by the visceral pericardium?",
options: ["Lungs", "Heart", "Liver", "Kidneys"],
correctAnswer: "Heart",
explanation: "The visceral pericardium covers the heart, while the parietal pericardium forms the outer layer."
},

{
question: "Who first used X-rays for medical imaging?",
options: ["Roentgen", "Vesalius", "Galen", "Harvey"],
correctAnswer: "Roentgen",
explanation: "Wilhelm Roentgen discovered X-rays and their medical applications."
},

{
question: "What is the function of serous fluid?",
options: ["Digestion", "Nerve conduction", "Reducing friction", "Blood clotting"],
correctAnswer: "Reducing friction",
explanation: "Serous fluid is secreted by membranes to reduce friction between organs."
},

{
question: "Who is regarded as the Father of Modern Anatomy?",
options: ["Andreas Vesalius", "Leonardo da Vinci", "William Harvey", "Galen"],
correctAnswer: "Andreas Vesalius",
explanation: "Vesalius revolutionized anatomy by challenging Galen’s errors and providing detailed dissections."
},

{
question: "Which anatomical structure is NOT part of the dorsal body cavity?",
options: ["Cranial cavity", "Vertebral canal", "Thoracic cavity", "Spinal cord"],
correctAnswer: "Thoracic cavity",
explanation: "The thoracic cavity is part of the ventral body cavity, while the cranial and vertebral cavities belong to the dorsal cavity."
},

{
question: "What structure do pharyngeal pouches develop into in humans?",
options: ["Eustachian tube", "Lungs", "Vertebrae", "Spinal cord"],
correctAnswer: "Eustachian tube",
explanation: "In human development, pharyngeal pouches give rise to structures such as the Eustachian tube and middle ear cavity."
},

{
question: "Which Greek philosopher and anatomist differentiated arteries from veins?",
options: ["Hippocrates", "Aristotle", "Galen", "Herophilus"],
correctAnswer: "Aristotle",
explanation: "Aristotle differentiated arteries from veins, although his understanding was incomplete."
},

{
question: "Which historical period saw the rebirth of anatomical study through human dissections?",
options: ["Middle Ages", "Renaissance", "Roman period", "Islamic period"],
correctAnswer: "Renaissance",
explanation: "The Renaissance marked a revival of scientific thought, including anatomical dissections."
},

{
question: "Which scientist described blood cells and spermatozoa using an improved microscope?",
options: ["Leeuwenhoek", "Harvey", "Vesalius", "Hooke"],
correctAnswer: "Leeuwenhoek",
explanation: "Antonie van Leeuwenhoek was the first to describe blood cells and spermatozoa using a microscope."
},

{
question: "Who wrote 'Gray's Anatomy'?",
options: ["Henry Gray", "Vesalius", "Galen", "Aristotle"],
correctAnswer: "Henry Gray",
explanation: "Henry Gray published 'Gray's Anatomy' in 1858, which remains a fundamental anatomical reference."
},

{
question: "Which anatomical feature is NOT associated with mammals?",
options: ["Hair", "Mammary glands", "Gills", "Four-chambered heart"],
correctAnswer: "Gills",
explanation: "Mammals do not have gills; they have lungs for respiration."
},

{
question: "Who first coined the term 'cell'?",
options: ["Leeuwenhoek", "Hooke", "Schwann", "Virchow"],
correctAnswer: "Hooke",
explanation: "Robert Hooke coined the term 'cell' after observing cork under a microscope."
},

{
question: "Who described the structure of the nervous system in detail?",
options: ["Thomas Willis", "Vesalius", "Galen", "Harvey"],
correctAnswer: "Thomas Willis",
explanation: "Thomas Willis published a summary of the nervous system, providing foundational knowledge."
},

{
question: "What is the study of individual development called?",
options: ["Embryology", "Phylogeny", "Ontogeny", "Histology"],
correctAnswer: "Ontogeny",
explanation: "Ontogeny refers to the study of individual development, from fertilization to adulthood."
},

{
question: "Which structure is part of the ventral body cavity?",
options: ["Spinal cord", "Cranial cavity", "Thoracic cavity", "Vertebral canal"],
correctAnswer: "Thoracic cavity",
explanation: "The thoracic cavity is part of the ventral body cavity and houses the heart and lungs."
},

{
question: "What did Gregory Mendel contribute to anatomy?",
options: ["Father of Genetics", "Discovery of blood circulation", "First to dissect cadavers", "Coined the term 'cell'"],
correctAnswer: "Father of Genetics",
explanation: "Mendel's work on plant hybridization laid the foundation for modern genetics."
},


{
question: "Which period is considered the rebirth of scientific anatomical studies?",
options: ["Middle Ages", "Renaissance", "Islamic Golden Age", "Roman Period"],
correctAnswer: "Renaissance",
explanation: "The Renaissance period saw the revival of scientific thought and anatomical dissections."
},

{
question: "Who is known as the ‘Reformer of Anatomy’?",
options: ["Andreas Vesalius", "Leonardo da Vinci", "Galen", "William Harvey"],
correctAnswer: "Andreas Vesalius",
explanation: "Vesalius revolutionized anatomy by challenging Galen’s erroneous concepts and publishing ‘De Humani Corporis Fabrica’."
},

{
question: "Who wrote 'De Humani Corporis Fabrica', a groundbreaking anatomy book?",
options: ["William Harvey", "Andreas Vesalius", "Galen", "Hippocrates"],
correctAnswer: "Andreas Vesalius",
explanation: "Vesalius published this detailed book, marking a new era in anatomical studies."
},

{
question: "Which ancient physician's writings were considered unquestionable for 1500 years?",
options: ["Hippocrates", "Aristotle", "Galen", "Vesalius"],
correctAnswer: "Galen",
explanation: "Galen’s medical theories dominated for centuries until challenged by Vesalius and others."
},

{
question: "Who first used X-rays in medical diagnosis?",
options: ["Wilhelm Roentgen", "Henry Gray", "William Harvey", "Antonie van Leeuwenhoek"],
correctAnswer: "Wilhelm Roentgen",
explanation: "Roentgen discovered X-rays, allowing for non-invasive anatomical imaging."
},

{
question: "Which physician was known as the ‘Father of Surgery’ in ancient India?",
options: ["Sushruta", "Charaka", "Atreya", "Dhanvantri"],
correctAnswer: "Sushruta",
explanation: "Sushruta described surgical techniques and instruments in ancient India."
},

{
question: "Which scientist suggested that blood circulates in a continuous loop?",
options: ["Harvey", "Galen", "Vesalius", "Leonardo da Vinci"],
correctAnswer: "Harvey",
explanation: "William Harvey demonstrated that blood circulates continuously rather than moving back and forth."
},

{
question: "Who first described the difference between arteries and veins?",
options: ["Herophilus", "Aristotle", "Hippocrates", "Galen"],
correctAnswer: "Aristotle",
explanation: "Aristotle distinguished between arteries and veins, although his understanding was limited."
},

{
question: "Which Islamic scholar translated 129 of Galen’s works into Arabic?",
options: ["Ibn Sina", "Al-Razi", "Hunayn ibn Ishaq", "Al-Zahrawi"],
correctAnswer: "Hunayn ibn Ishaq",
explanation: "Hunayn ibn Ishaq played a crucial role in preserving and translating Galenic texts during the Islamic Golden Age."
},

{
question: "Who performed the first known human cadaver dissections?",
options: ["Galen", "Herophilus", "Hippocrates", "Aristotle"],
correctAnswer: "Herophilus",
explanation: "Herophilus conducted dissections in Alexandria, advancing anatomical knowledge."
},

{
question: "Which period saw a decline in anatomical studies in Christian Europe?",
options: ["Roman period", "Middle Ages", "Islamic Golden Age", "Renaissance"],
correctAnswer: "Middle Ages",
explanation: "During the Middle Ages, anatomical studies stagnated in Christian Europe but flourished in the Islamic world."
},

{
question: "What was the significance of 'The Canon of Medicine' in anatomy?",
options: ["It challenged Galen’s theories", "It was the most authoritative anatomical book in the Islamic world", "It introduced the concept of circulation", "It promoted dissection"],
correctAnswer: "It was the most authoritative anatomical book in the Islamic world",
explanation: "Ibn Sina's 'The Canon of Medicine' was widely used as a medical reference for centuries."
},

{
question: "Who created detailed anatomical sketches, including cross-sectional anatomy?",
options: ["Vesalius", "Da Vinci", "Harvey", "Galen"],
correctAnswer: "Da Vinci",
explanation: "Leonardo da Vinci’s anatomical drawings were incredibly detailed and ahead of his time."
},

{
question: "Who is credited with describing the malpighian corpuscles of the kidney?",
options: ["Malpighi", "Vesalius", "Harvey", "Galen"],
correctAnswer: "Malpighi",
explanation: "Marcello Malpighi contributed to histology and described microscopic structures such as the malpighian corpuscles."
},

{
question: "Which physician emphasized clinical observation and prognosis?",
options: ["Hippocrates", "Galen", "Aristotle", "Harvey"],
correctAnswer: "Hippocrates",
explanation: "Hippocrates is known for his systematic approach to disease through clinical observation and prognosis."
},

{
question: "Who first observed and described blood cells under a microscope?",
options: ["Leeuwenhoek", "Harvey", "Hooke", "Schwann"],
correctAnswer: "Leeuwenhoek",
explanation: "Antonie van Leeuwenhoek used an improved microscope to describe blood cells."
},

{
question: "Who applied physics and chemistry to the study of the human body?",
options: ["Harvey", "Johannes Müller", "Vesalius", "Da Vinci"],
correctAnswer: "Johannes Müller",
explanation: "Johannes Müller integrated physics and chemistry into anatomical studies."
},

{
question: "Who developed the concept of the ‘Humoral Theory’?",
options: ["Hippocrates", "Galen", "Aristotle", "Harvey"],
correctAnswer: "Hippocrates",
explanation: "Hippocrates' humoral theory suggested that health depended on the balance of four body humors."
},

{
question: "Who was known as the ‘Prince of Physicians’?",
options: ["Galen", "Hippocrates", "Harvey", "Vesalius"],
correctAnswer: "Galen",
explanation: "Galen was considered the greatest physician after Hippocrates, influencing medical thought for centuries."
},

{
question: "Who is considered the founder of histology?",
options: ["Virchow", "Malpighi", "Harvey", "Leeuwenhoek"],
correctAnswer: "Malpighi",
explanation: "Marcello Malpighi pioneered histology and described microscopic structures."
},

{
question: "Which physician’s works remained authoritative until Vesalius challenged them?",
options: ["Hippocrates", "Galen", "Harvey", "Aristotle"],
correctAnswer: "Galen",
explanation: "Galen’s medical teachings were accepted without question for over 1500 years."
},

{
question: "Who first identified the ovum in the human reproductive system?",
options: ["Herophilus", "Galen", "De Graaf", "Vesalius"],
correctAnswer: "De Graaf",
explanation: "De Graaf is credited with discovering the ovarian follicles and describing the ovum."
},

{
question: "Which 19th-century anatomist published ‘Gray’s Anatomy’?",
options: ["Henry Gray", "Harvey", "Virchow", "Schwann"],
correctAnswer: "Henry Gray",
explanation: "Henry Gray’s book became a standard reference in human anatomy."
},

{
question: "Who described the clubbing of fingers as a diagnostic sign of disease?",
options: ["Hippocrates", "Harvey", "Galen", "Vesalius"],
correctAnswer: "Hippocrates",
explanation: "Hippocrates first described finger clubbing, which is now known as ‘Hippocratic fingers’."
},

{
question: "Which anatomical concept did Thomas Willis publish about?",
options: ["Circulation", "Nervous system", "Digestive system", "Muscle physiology"],
correctAnswer: "Nervous system",
explanation: "Thomas Willis summarized knowledge of the nervous system, making significant contributions to neurology."
},


          // Add more questions following this pattern
        ],
        
      },
  
  
  


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////Medical Sociology ////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    {
      category: "Medical Sociology",
questions: [
  
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










///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////Moral Philosophical////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
      {
        category: "Moral Philosophy",
        questions: [
          
{
question: "Which ethical theory states that 'the ends justify the means'?",
options: ["Virtue Ethics", "Consequentialism", "Deontology", "Kantianism"],
correctAnswer: "Consequentialism",
explanation: "Consequentialism asserts that an action is morally right if it produces a good outcome, meaning the ends justify the means."
},


{
question: "Who first clearly expressed Ethical Intuitionism?",
options: ["Immanuel Kant", "Jeremy Bentham", "Francis Hutcheson", "John Stuart Mill"],
correctAnswer: "Francis Hutcheson",
explanation: "Ethical Intuitionism was first clearly formulated by the philosopher Francis Hutcheson."
},


{
question: "Which ethical theory emphasizes following rules regardless of consequences?",
options: ["Utilitarianism", "Relativism", "Deontology", "Subjectivism"],
correctAnswer: "Deontology",
explanation: "Deontology asserts that people must follow moral laws, regardless of the consequences."
},


{
question: "What is the Fundamental Axiom in Utilitarianism according to Jeremy Bentham?",
options: ["Truth-telling is mandatory", "The ends justify the means", "Greatest happiness for the greatest number", "People should act based on feelings"],
correctAnswer: "Greatest happiness for the greatest number",
explanation: "Jeremy Bentham's Fundamental Axiom states that the right action is the one that brings the greatest happiness to the greatest number of people."
},


{
question: "Which ethical theory states that there is no objective right or wrong?",
options: ["Deontology", "Virtue Ethics", "Ethical Relativism", "Kantianism"],
correctAnswer: "Ethical Relativism",
explanation: "Ethical Relativism claims that no universal or objective moral standards exist."
},


{
question: "Which ethical philosophy was associated with Aristotle and Socrates?",
options: ["Consequentialism", "Virtue Ethics", "Kantianism", "Utilitarianism"],
correctAnswer: "Virtue Ethics",
explanation: "Virtue Ethics, which focuses on character and morality, was central to Aristotle and Socrates' teachings."
},


{
question: "According to Kantian ethics, how should people be treated?",
options: ["As means to an end", "Based on what makes them happy", "As ends in themselves", "According to societal rules"],
correctAnswer: "As ends in themselves",
explanation: "Kantian ethics states that people should never be treated merely as means to an end."
},


{
question: "Which ethical theory suggests that people should do whatever they feel is right?",
options: ["Deontology", "Utilitarianism", "Emotivism", "Kantianism"],
correctAnswer: "Emotivism",
explanation: "Emotivism holds that moral judgments are based on emotions rather than objective truths."
},


{
question: "Who are two key philosophers associated with Utilitarianism?",
options: ["John Stuart Mill & Jeremy Bentham", "Immanuel Kant & Aristotle", "Francis Hutcheson & Ayn Rand", "Galen & Hippocrates"],
correctAnswer: "John Stuart Mill & Jeremy Bentham",
explanation: "Jeremy Bentham and John Stuart Mill are the main figures behind Utilitarianism."
},


{
question: "What is the primary focus of Normative Ethics?",
options: ["Analyzing moral language", "Examining moral theories", "Studying moral rightness or wrongness", "Rejecting moral knowledge"],
correctAnswer: "Studying moral rightness or wrongness",
explanation: "Normative Ethics examines the standards for determining the rightness or wrongness of actions."
},


{
question: "Who famously said 'Property is theft'?",
options: ["Jeremy Bentham", "John Stuart Mill", "Pierre-Joseph Proudhon", "Thomas Hobbes"],
correctAnswer: "Pierre-Joseph Proudhon",
explanation: "Pierre-Joseph Proudhon, a political philosopher, is credited with the phrase 'Property is theft'."
},


{
question: "What is the main principle of Subjectivism?",
options: ["Do what your society says", "Follow logical reasoning", "Do what you personally think is right", "Seek the greatest happiness"],
correctAnswer: "Do what you personally think is right",
explanation: "Subjectivism holds that moral truths depend on individual perspectives."
},


{
question: "What does Moral Skepticism argue?",
options: ["Ethics is subjective", "No one has moral knowledge", "The greatest happiness principle is supreme", "Virtue is the key to morality"],
correctAnswer: "No one has moral knowledge",
explanation: "Moral Skepticism claims that no one can truly know moral truths."
},


{
question: "Which philosopher is associated with Kantianism?",
options: ["Aristotle", "Immanuel Kant", "John Stuart Mill", "Pierre-Joseph Proudhon"],
correctAnswer: "Immanuel Kant",
explanation: "Kantian ethics is named after Immanuel Kant, who emphasized duty and rationality in moral decisions."
},


{
question: "Which ethical theory allows people to do whatever they want since it doesn’t matter?",
options: ["Virtue Ethics", "Nihilism", "Emotivism", "Consequentialism"],
correctAnswer: "Nihilism",
explanation: "Nihilism rejects the notion that moral principles have any inherent meaning."
},


{
question: "Which theory states that an action is morally right if it maximizes a good effect?",
options: ["Kantianism", "Deontology", "Utilitarianism", "Emotivism"],
correctAnswer: "Utilitarianism",
explanation: "Utilitarianism claims that the best action is the one that maximizes happiness or another positive outcome."
},


{
question: "What does Applied Ethics focus on?",
options: ["Moral language analysis", "Following laws and rules", "Studying personal intuition", "Skepticism about morality"],
correctAnswer: "Following laws and rules",
explanation: "Applied Ethics applies moral principles to specific situations, such as law and medicine."
},


{
question: "Which ethical theory suggests following societal norms?",
options: ["Subjectivism", "Relativism", "Emotivism", "Virtue Ethics"],
correctAnswer: "Relativism",
explanation: "Relativism asserts that moral actions should align with societal standards."
},


{
question: "Which philosopher emphasized autonomy and rationality in ethics?",
options: ["Jeremy Bentham", "Francis Hutcheson", "Immanuel Kant", "John Stuart Mill"],
correctAnswer: "Immanuel Kant",
explanation: "Kantian ethics stresses autonomy, rationality, and universal moral principles."
},


{
question: "Who are some famous Egoists?",
options: ["John Stuart Mill & Bentham", "Thomas Hobbes, Adam Smith, Ayn Rand", "Aristotle & Kant", "Proudhon & Francis Hutcheson"],
correctAnswer: "Thomas Hobbes, Adam Smith, Ayn Rand",
explanation: "Thomas Hobbes, Adam Smith, and Ayn Rand are well-known Egoists."
},


{
question: "Which branch of ethics focuses on the meaning of moral language and the metaphysics of moral facts?",
options: ["Normative Ethics", "Meta-Ethics", "Applied Ethics", "Virtue Ethics"],
correctAnswer: "Meta-Ethics",
explanation: "Meta-Ethics studies the meaning of moral terms and the nature of moral facts, rather than evaluating actions."
},


{
question: "Which ethical theory argues that people should act in ways deemed inherently good, regardless of consequences?",
options: ["Utilitarianism", "Deontology", "Moral Skepticism", "Ethical Relativism"],
correctAnswer: "Deontology",
explanation: "Deontology, as proposed by Kant, states that actions are right or wrong based on moral duty, independent of their outcomes."
},


{
question: "Which philosopher's ethical system focused on being a good or virtuous person?",
options: ["Kant", "Aristotle", "Jeremy Bentham", "John Stuart Mill"],
correctAnswer: "Aristotle",
explanation: "Aristotle's ethical system, known as Virtue Ethics, emphasizes character and virtue over rules or consequences."
},


{
question: "Which ethical theory claims that no objective right or wrong exists?",
options: ["Deontology", "Ethical Relativism", "Utilitarianism", "Consequentialism"],
correctAnswer: "Ethical Relativism",
explanation: "Ethical Relativism asserts that morality is relative to cultural or societal norms, with no absolute standards."
},


{
question: "According to Kantian ethics, why should one follow moral laws?",
options: ["Because they maximize happiness", "Because they apply universally", "Because they are subjective", "Because society enforces them"],
correctAnswer: "Because they apply universally",
explanation: "Kantianism argues that moral laws should be followed because they are universally applicable to all rational beings."
},


{
question: "What does Normative Ethics focus on?",
options: ["Moral intuition", "Standards for right and wrong actions", "Ethical language analysis", "Rejecting moral knowledge"],
correctAnswer: "Standards for right and wrong actions",
explanation: "Normative Ethics examines the principles that determine whether actions are morally right or wrong."
},


{
question: "Which ethical theory states that people should follow their society's moral rules?",
options: ["Subjectivism", "Relativism", "Nihilism", "Virtue Ethics"],
correctAnswer: "Relativism",
explanation: "Relativism argues that moral correctness is determined by societal norms and traditions."
},


{
question: "What does Emotivism suggest about moral judgments?",
options: ["They are emotional expressions", "They are objective truths", "They are determined by logic", "They are fixed and universal"],
correctAnswer: "They are emotional expressions",
explanation: "Emotivism holds that moral statements express personal emotions rather than objective truths."
},


{
question: "Which ethical perspective argues that we should act based on personal gain and self-interest?",
options: ["Utilitarianism", "Egoism", "Virtue Ethics", "Deontology"],
correctAnswer: "Egoism",
explanation: "Egoism states that people should act in ways that maximize their own self-interest."
},


{
question: "Which ethical school of thought believes that truth-telling is a moral duty regardless of consequences?",
options: ["Consequentialism", "Utilitarianism", "Deontology", "Moral Skepticism"],
correctAnswer: "Deontology",
explanation: "Deontology holds that certain actions, such as truth-telling, are inherently right, regardless of outcomes."
},


{
question: "Which philosopher emphasized the importance of duty, autonomy, and rationality in ethics?",
options: ["Immanuel Kant", "Jeremy Bentham", "Francis Hutcheson", "Aristotle"],
correctAnswer: "Immanuel Kant",
explanation: "Kant's ethical theory is based on the principles of duty, autonomy, and rational moral decision-making."
},


{
question: "What does Moral Skepticism claim?",
options: ["All moral knowledge is absolute", "People have no true moral knowledge", "Ethics is purely emotional", "Consequences determine morality"],
correctAnswer: "People have no true moral knowledge",
explanation: "Moral Skepticism asserts that humans cannot truly know moral facts or absolute ethical principles."
},


{
question: "Which ethical philosophy claims that morality is entirely dependent on individual beliefs?",
options: ["Relativism", "Subjectivism", "Virtue Ethics", "Deontology"],
correctAnswer: "Subjectivism",
explanation: "Subjectivism holds that moral truths are based on personal opinions and perspectives rather than objective facts."
},


{
question: "Which ethical school of thought believes moral actions should maximize overall happiness?",
options: ["Virtue Ethics", "Utilitarianism", "Deontology", "Subjectivism"],
correctAnswer: "Utilitarianism",
explanation: "Utilitarianism states that the best moral action is the one that maximizes happiness or well-being for the majority."
},


{
question: "Who said that the proper course of action is the one that maximizes happiness?",
options: ["Francis Hutcheson", "Jeremy Bentham", "Pierre-Joseph Proudhon", "Thomas Hobbes"],
correctAnswer: "Jeremy Bentham",
explanation: "Jeremy Bentham is a key figure in Utilitarianism, which seeks to maximize happiness as the highest moral good."
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
  
  
  

  
  
 