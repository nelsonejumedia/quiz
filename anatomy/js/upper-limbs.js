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
///////////////////////////////////////////Basics/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
  category: "Anatomical Position, Planes and Terms",
  questions: [
    {
      question: "What is the anatomical term for the position of the body facing forward, with arms at the side and palms facing forward?",
      options: [
        "Supine position",
        "Anatomical position",
        "Prone position",
        "Lateral position"
      ],
      correctAnswer: "Anatomical position"
    },
    {
      question: "Which plane divides the body into left and right halves?",
      options: [
        "Coronal plane",
        "Sagittal plane",
        "Transverse plane",
        "Oblique plane"
      ],
      correctAnswer: "Sagittal plane"
    },
    {
      question: "In anatomical terms, which direction does 'distal' indicate?",
      options: [
        "Closer to the trunk",
        "Away from the trunk",
        "Toward the head",
        "Toward the feet"
      ],
      correctAnswer: "Away from the trunk"
    },
    {
      question: "Which anatomical plane divides the body into anterior and posterior sections?",
      options: [
        "Sagittal plane",
        "Coronal plane",
        "Transverse plane",
        "Median plane"
      ],
      correctAnswer: "Coronal plane"
    },
    {
      question: "What term describes the position of a structure located closer to the surface of the body?",
      options: [
        "Deep",
        "Superficial",
        "Distal",
        "Medial"
      ],
      correctAnswer: "Superficial"
    },
    {
      question: "Which plane divides the body into superior and inferior parts?",
      options: [
        "Sagittal plane",
        "Transverse plane",
        "Coronal plane",
        "Oblique plane"
      ],
      correctAnswer: "Transverse plane"
    },
    {
      question: "What does the term 'medial' indicate?",
      options: [
        "Closer to the midline of the body",
        "Away from the midline of the body",
        "Above another structure",
        "Below another structure"
      ],
      correctAnswer: "Closer to the midline of the body"
    },
    {
      question: "What does 'anterior' refer to in anatomical terms?",
      options: [
        "Front of the body",
        "Back of the body",
        "Above a structure",
        "Below a structure"
      ],
      correctAnswer: "Front of the body"
    },
    {
      question: "Which of the following terms is used to describe a position farther from the surface of the body?",
      options: [
        "Superficial",
        "Lateral",
        "Deep",
        "Proximal"
      ],
      correctAnswer: "Deep"
    },
    {
      question: "The term 'lateral' describes a position that is:",
      options: [
        "Closer to the midline",
        "Farther from the midline",
        "Toward the surface",
        "Away from the head"
      ],
      correctAnswer: "Farther from the midline"
    },
    {
      question: "In anatomical terms, what does 'proximal' refer to?",
      options: [
        "Closer to the head",
        "Closer to the point of origin",
        "Farther from the trunk",
        "Farther from the surface"
      ],
      correctAnswer: "Closer to the point of origin"
    },
    {
      question: "What is the prone position?",
      options: [
        "Lying face up",
        "Lying face down",
        "Sitting upright",
        "Standing with arms extended"
      ],
      correctAnswer: "Lying face down"
    },
    {
      question: "What does 'posterior' indicate?",
      options: [
        "Towards the front",
        "Towards the back",
        "Towards the top",
        "Towards the bottom"
      ],
      correctAnswer: "Towards the back"
    },
    {
      question: "Which plane is also known as the horizontal plane?",
      options: [
        "Transverse plane",
        "Sagittal plane",
        "Coronal plane",
        "Oblique plane"
      ],
      correctAnswer: "Transverse plane"
    },
    {
      question: "Which plane would cut the body diagonally?",
      options: [
        "Sagittal plane",
        "Coronal plane",
        "Transverse plane",
        "Oblique plane"
      ],
      correctAnswer: "Oblique plane"
    },
    {
      question: "What is the term for a body part closer to the head?",
      options: [
        "Inferior",
        "Proximal",
        "Cranial",
        "Caudal"
      ],
      correctAnswer: "Cranial"
    },
    {
      question: "Which of the following is the correct description of the term 'inferior'?",
      options: [
        "Closer to the midline",
        "Closer to the feet",
        "Closer to the head",
        "Closer to the surface"
      ],
      correctAnswer: "Closer to the feet"
    },
    {
      question: "The sagittal plane that divides the body equally into left and right halves is called:",
      options: [
        "Parasagittal plane",
        "Median plane",
        "Coronal plane",
        "Transverse plane"
      ],
      correctAnswer: "Median plane"
    },
    {
      question: "What does 'ventral' mean in anatomical terms?",
      options: [
        "Towards the back",
        "Towards the front",
        "Towards the side",
        "Towards the head"
      ],
      correctAnswer: "Towards the front"
    },
    {
      question: "Which term describes a body part that is located closer to the midline?",
      options: [
        "Lateral",
        "Medial",
        "Distal",
        "Proximal"
      ],
      correctAnswer: "Medial"
    },
    {
      question: "The term 'caudal' refers to a position closer to which part of the body?",
      options: [
        "Head",
        "Feet",
        "Spine",
        "Midline"
      ],
      correctAnswer: "Feet"
    },
    {
      question: "Which of the following terms indicates the back side of the body?",
      options: [
        "Anterior",
        "Posterior",
        "Ventral",
        "Medial"
      ],
      correctAnswer: "Posterior"
    },
    {
      question: "In anatomical terms, what does 'superior' mean?",
      options: [
        "Towards the feet",
        "Closer to the surface",
        "Closer to the head",
        "Away from the midline"
      ],
      correctAnswer: "Closer to the head"
    },
    {
      question: "What term is used for a body part farther from the trunk or point of origin?",
      options: [
        "Proximal",
        "Distal",
        "Medial",
        "Deep"
      ],
      correctAnswer: "Distal"
    },
    {
      question: "In anatomical terminology, 'cephalic' refers to:",
      options: [
        "Towards the head",
        "Towards the feet",
        "Towards the side",
        "Towards the back"
      ],
      correctAnswer: "Towards the head"
    },
    {
      question: "What does the term 'prone' refer to in anatomical positioning?",
      options: [
        "Lying face up",
        "Lying face down",
        "Sitting with legs extended",
        "Standing upright"
      ],
      correctAnswer: "Lying face down"
    },
    {
      question: "The supine position refers to the body lying:",
      options: [
        "On its side",
        "Face up",
        "Face down",
        "In a crouching position"
      ],
      correctAnswer: "Face up"
    },
    {
      question: "Which plane divides the body into unequal left and right parts?",
      options: [
        "Median plane",
        "Parasagittal plane",
        "Coronal plane",
        "Transverse plane"
      ],
      correctAnswer: "Parasagittal plane"
    },
    {
      question: "In anatomical terms, the hand is considered to be in what position relative to the elbow?",
      options: [
        "Distal",
        "Proximal",
        "Medial",
        "Lateral"
      ],
      correctAnswer: "Distal"
    },
    {
      question: "Which anatomical plane is also referred to as the 'frontal plane'?",
      options: [
        "Sagittal plane",
        "Coronal plane",
        "Transverse plane",
        "Oblique plane"
      ],
      correctAnswer: "Coronal plane"
    },
  ],
},













///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////Brachial Plexus/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
  category: "Brachial Plexus",
  questions: [
    



  {
    question: "How many roots form the Brachial Plexus?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "5",
    explanation: "The Brachial Plexus is formed by five roots: C5, C6, C7, C8, and T1."
  },
  {
    question: "What is the term for a Brachial Plexus where T2 is present and C4 is absent?",
    options: ["Prefixed Plexus", "Postfixed Plexus", "Cervical Plexus", "Nervous Furcalis"],
    correctAnswer: "Postfixed Plexus",
    explanation: "A postfixed plexus occurs when T2 is present, C4 is absent, and T1 is large."
  },
  {
    question: "What is C4 called in relation to the Brachial Plexus?",
    options: ["Nervous Furcalis", "Prefixed Nerve", "Posterior Division", "Anterior Division"],
    correctAnswer: "Nervous Furcalis",
    explanation: "C4 is called the Nervous Furcalis because it contributes to both the cervical and brachial plexuses."
  },
  {
    question: "What forms the upper trunk of the Brachial Plexus?",
    options: ["C5 and C6", "C7 and C8", "C8 and T1", "C4 and T1"],
    correctAnswer: "C5 and C6",
    explanation: "The upper trunk is formed by the union of C5 and C6."
  },
  {
    question: "Which trunk is formed by the anterior ramus of C7?",
    options: ["Upper Trunk", "Middle Trunk", "Lower Trunk", "Posterior Trunk"],
    correctAnswer: "Middle Trunk",
    explanation: "The middle trunk is formed by the anterior ramus of C7."
  },
  {
    question: "What are the two divisions of the Brachial Plexus trunk?",
    options: ["Anterior and Posterior", "Lateral and Medial", "Upper and Lower", "Supraclavicular and Infraclavicular"],
    correctAnswer: "Anterior and Posterior",
    explanation: "The trunk is divided into anterior (ventral) and posterior (dorsal) divisions."
  },
  {
    question: "What forms the lateral cord of the Brachial Plexus?",
    options: [
      "Anterior divisions of upper and middle trunks",
      "Posterior divisions of all three trunks",
      "Anterior division of lower trunk",
      "Anterior division of middle trunk"
    ],
    correctAnswer: "Anterior divisions of upper and middle trunks",
    explanation: "The lateral cord is formed by the anterior divisions of the upper and middle trunks."
  },
  {
    question: "What cord is formed by the posterior divisions of all three trunks?",
    options: ["Lateral Cord", "Medial Cord", "Posterior Cord", "Inferior Cord"],
    correctAnswer: "Posterior Cord",
    explanation: "The posterior cord is formed by the posterior divisions of all three trunks."
  },
  {
    question: "Which nerve innervates the serratus anterior muscle?",
    options: ["Long Thoracic Nerve", "Dorsal Subscapular Nerve", "Axillary Nerve", "Radial Nerve"],
    correctAnswer: "Long Thoracic Nerve",
    explanation: "The Long Thoracic Nerve (C5, C6, C7) innervates the serratus anterior muscle."
  },
  {
    question: "What is another name for the Dorsal Subscapular Nerve?",
    options: ["Nerve of Bull", "Thoracodorsal Nerve", "Nerve to Rhomboid", "Nerve to Pectoralis"],
    correctAnswer: "Nerve to Rhomboid",
    explanation: "The Dorsal Subscapular Nerve (C5) is also called the Nerve to Rhomboid."
  },
  {
    question: "Which nerve innervates the supraspinatus and infraspinatus muscles?",
    options: ["Suprascapular Nerve", "Subclavian Nerve", "Axillary Nerve", "Radial Nerve"],
    correctAnswer: "Suprascapular Nerve",
    explanation: "The Suprascapular Nerve (C5 and C6) innervates the supraspinatus and infraspinatus muscles."
  },
  {
    question: "Which branch of the Brachial Plexus includes the nerves in the root and trunk?",
    options: ["Infraclavicular Branch", "Supraclavicular Branch", "Medial Cord", "Posterior Cord"],
    correctAnswer: "Supraclavicular Branch",
    explanation: "The supraclavicular branch includes nerves in the root and trunk."
  },
  {
    question: "What does the Lateral Pectoral Nerve (C5 to C7) innervate?",
    options: ["Pectoralis Minor", "Deltoid", "Teres Major", "Pectoralis Major"],
    correctAnswer: "Pectoralis Major",
    explanation: "The Lateral Pectoral Nerve innervates the pectoralis major muscle."
  },
  {
    question: "Which nerve innervates the biceps brachii, brachialis, and coracobrachialis?",
    options: ["Musculocutaneous Nerve", "Median Nerve", "Radial Nerve", "Ulnar Nerve"],
    correctAnswer: "Musculocutaneous Nerve",
    explanation: "The Musculocutaneous Nerve innervates these three muscles."
  },
  {
    question: "Which cord gives rise to the Ulnar Nerve?",
    options: ["Lateral Cord", "Medial Cord", "Posterior Cord", "Middle Cord"],
    correctAnswer: "Medial Cord",
    explanation: "The Ulnar Nerve arises from the medial cord."
  },
  {
    question: "Which nerve innervates the latissimus dorsi muscle?",
    options: ["Thoracodorsal Nerve", "Radial Nerve", "Median Nerve", "Suprascapular Nerve"],
    correctAnswer: "Thoracodorsal Nerve",
    explanation: "The Thoracodorsal Nerve innervates the latissimus dorsi."
  },
  {
    question: "What muscle does the Axillary Nerve innervate?",
    options: ["Latissimus Dorsi", "Deltoid", "Biceps Brachii", "Flexor Carpi Ulnaris"],
    correctAnswer: "Deltoid",
    explanation: "The Axillary Nerve innervates the deltoid and teres minor muscles."
  },
  {
    question: "What is the root origin of the Radial Nerve?",
    options: ["C5-T1", "C6-C8", "C5-C7", "C7-T1"],
    correctAnswer: "C5-T1",
    explanation: "The Radial Nerve originates from roots C5 to T1."
  },
  {
    question: "Which nerve supplies the skin of the medial aspect of the forearm?",
    options: ["Medial Cutaneous Nerve of Forearm", "Medial Cutaneous Nerve of Arm", "Lateral Cutaneous Nerve", "Radial Nerve"],
    correctAnswer: "Medial Cutaneous Nerve of Forearm",
    explanation: "The Medial Cutaneous Nerve of Forearm supplies the skin of the medial forearm."
  },
  {
    question: "Which trunk of the Brachial Plexus is located behind the scalenus anterior?",
    options: ["Upper Trunk", "Middle Trunk", "Lower Trunk", "Posterior Trunk"],
    correctAnswer: "Lower Trunk",
    explanation: "The lower trunk, formed by C8 and T1, is located behind the scalenus anterior."
  },


  {
    question: "Which cord gives rise to the Median Nerve?",
    options: ["Lateral and Medial Cords", "Posterior Cord", "Lateral Cord", "Medial Cord"],
    correctAnswer: "Lateral and Medial Cords",
    explanation: "The Median Nerve is formed by contributions from both the lateral and medial cords."
  },
  {
    question: "What is the nerve root origin of the Long Thoracic Nerve?",
    options: ["C4-C6", "C5-C7", "C6-C8", "C7-T1"],
    correctAnswer: "C5-C7",
    explanation: "The Long Thoracic Nerve originates from the roots C5, C6, and C7."
  },
  {
    question: "Which nerve is also called the 'Nerve of Bull'?",
    options: ["Thoracodorsal Nerve", "Suprascapular Nerve", "Long Thoracic Nerve", "Axillary Nerve"],
    correctAnswer: "Long Thoracic Nerve",
    explanation: "The Long Thoracic Nerve is nicknamed the 'Nerve of Bull' because of its strength in innervating the serratus anterior."
  },
  {
    question: "What is the function of the divisions in the Brachial Plexus?",
    options: [
      "Compensate for anterior and posterior innervation",
      "Separate the lateral and medial cords",
      "Provide direct innervation to muscles",
      "Divide the roots into trunks"
    ],
    correctAnswer: "Compensate for anterior and posterior innervation",
    explanation: "The divisions ensure proper innervation of the anterior and posterior compartments of the upper limb."
  },
  {
    question: "Which nerve innervates the rhomboid minor and major muscles?",
    options: ["Dorsal Subscapular Nerve", "Thoracodorsal Nerve", "Long Thoracic Nerve", "Musculocutaneous Nerve"],
    correctAnswer: "Dorsal Subscapular Nerve",
    explanation: "The Dorsal Subscapular Nerve (C5) innervates the rhomboid minor and major muscles."
  },
  {
    question: "Which nerve arises from the posterior cord and innervates the latissimus dorsi muscle?",
    options: ["Thoracodorsal Nerve", "Axillary Nerve", "Radial Nerve", "Suprascapular Nerve"],
    correctAnswer: "Thoracodorsal Nerve",
    explanation: "The Thoracodorsal Nerve arises from the posterior cord and supplies the latissimus dorsi."
  },
  {
    question: "Which nerve arises from the lateral cord and innervates the pectoralis major?",
    options: ["Medial Pectoral Nerve", "Lateral Pectoral Nerve", "Musculocutaneous Nerve", "Median Nerve"],
    correctAnswer: "Lateral Pectoral Nerve",
    explanation: "The Lateral Pectoral Nerve (C5 to C7) innervates the pectoralis major."
  },
  {
    question: "What nerve supplies the medial aspect of the arm?",
    options: ["Medial Cutaneous Nerve of the Arm", "Medial Cutaneous Nerve of the Forearm", "Radial Nerve", "Axillary Nerve"],
    correctAnswer: "Medial Cutaneous Nerve of the Arm",
    explanation: "The Medial Cutaneous Nerve of the Arm supplies the medial skin of the arm."
  },
  {
    question: "Which nerve innervates the subscapularis muscle?",
    options: ["Lower Subscapular Nerve", "Upper Subscapular Nerve", "Thoracodorsal Nerve", "Axillary Nerve"],
    correctAnswer: "Upper Subscapular Nerve",
    explanation: "The Upper Subscapular Nerve innervates the subscapularis muscle."
  },
  {
    question: "Where does the lower trunk of the Brachial Plexus lie in relation to the scalenus anterior muscle?",
    options: ["In front", "Above", "Behind", "Lateral to"],
    correctAnswer: "Behind",
    explanation: "The lower trunk (C8 and T1) lies behind the scalenus anterior muscle."
  },
  {
    question: "Which nerve innervates the deltoid muscle?",
    options: ["Axillary Nerve", "Radial Nerve", "Thoracodorsal Nerve", "Musculocutaneous Nerve"],
    correctAnswer: "Axillary Nerve",
    explanation: "The Axillary Nerve supplies the deltoid and teres minor muscles."
  },
  {
    question: "What is the root origin of the Ulnar Nerve?",
    options: ["C7-T1", "C8-T1", "C5-C6", "C5-T1"],
    correctAnswer: "C7-T1",
    explanation: "The Ulnar Nerve originates from C7, C8, and T1."
  },
  {
    question: "Which branch of the Brachial Plexus includes the musculocutaneous nerve?",
    options: ["Infraclavicular Branch", "Supraclavicular Branch", "Lateral Cord", "Posterior Cord"],
    correctAnswer: "Infraclavicular Branch",
    explanation: "The musculocutaneous nerve is part of the infraclavicular branch."
  },
  {
    question: "What structure forms the middle trunk of the Brachial Plexus?",
    options: ["Anterior ramus of C7", "Union of C5 and C6", "C8 and T1", "C4 and T1"],
    correctAnswer: "Anterior ramus of C7",
    explanation: "The middle trunk is formed solely by the anterior ramus of C7."
  },
  {
    question: "Which nerve innervates the flexor carpi ulnaris muscle?",
    options: ["Ulnar Nerve", "Median Nerve", "Radial Nerve", "Musculocutaneous Nerve"],
    correctAnswer: "Ulnar Nerve",
    explanation: "The Ulnar Nerve innervates the flexor carpi ulnaris and the medial half of the flexor digitorum profundus."
  },
  {
    question: "Which nerve innervates the teres minor muscle?",
    options: ["Radial Nerve", "Suprascapular Nerve", "Lower Subscapular Nerve", "Axillary Nerve"],
    correctAnswer: "Axillary Nerve",
    explanation: "The Axillary Nerve innervates the teres minor and deltoid muscles."
  },
  {
    question: "Which branch of the Brachial Plexus contains the suprascapular nerve?",
    options: ["Supraclavicular Branch", "Infraclavicular Branch", "Posterior Cord", "Lateral Cord"],
    correctAnswer: "Supraclavicular Branch",
    explanation: "The suprascapular nerve (C5, C6) is part of the supraclavicular branch."
  },
  {
    question: "Which nerve supplies most of the intrinsic muscles of the hand?",
    options: ["Ulnar Nerve", "Median Nerve", "Radial Nerve", "Musculocutaneous Nerve"],
    correctAnswer: "Ulnar Nerve",
    explanation: "The Ulnar Nerve supplies most of the intrinsic muscles of the hand."
  },
  {
    question: "Which nerve arises from the posterior cord and innervates the triceps brachii?",
    options: ["Axillary Nerve", "Thoracodorsal Nerve", "Radial Nerve", "Musculocutaneous Nerve"],
    correctAnswer: "Radial Nerve",
    explanation: "The Radial Nerve arises from the posterior cord and innervates the triceps brachii and other muscles in the posterior compartment."
  },
  {
    question: "Which nerve innervates the infraspinatus muscle?",
    options: ["Suprascapular Nerve", "Axillary Nerve", "Radial Nerve", "Musculocutaneous Nerve"],
    correctAnswer: "Suprascapular Nerve",
    explanation: "The Suprascapular Nerve (C5, C6) innervates the infraspinatus muscle."
  },


  {
    question: "What is the root origin of the dorsal scapular nerve?",
    options: ["C5", "C6", "C7", "T1"],
    correctAnswer: "C5",
    explanation: "The dorsal scapular nerve arises from the C5 root and innervates the rhomboids and levator scapulae."
  },
  {
    question: "What is the main significance of the divisions in the brachial plexus?",
    options: [
      "To form the cords",
      "To separate sensory and motor nerves",
      "To compensate for anterior and posterior innervation",
      "To form the trunks"
    ],
    correctAnswer: "To compensate for anterior and posterior innervation",
    explanation: "The divisions ensure proper innervation of the anterior and posterior compartments of the upper limb."
  },
  {
    question: "Which structure is also known as Erb's point in the brachial plexus?",
    options: ["Lateral border of scalenus medius", "Lower border of scalenus anterior", "Posterior border of trapezius", "Medial border of clavicle"],
    correctAnswer: "Lateral border of scalenus medius",
    explanation: "The union of C5 and C6 at the lateral border of scalenus medius is known as Erb's point."
  },
  {
    question: "Which nerve innervates the pectoralis major and minor muscles?",
    options: ["Medial Pectoral Nerve", "Lateral Pectoral Nerve", "Axillary Nerve", "Radial Nerve"],
    correctAnswer: "Medial Pectoral Nerve",
    explanation: "The medial pectoral nerve (C8, T1) innervates both the pectoralis major and minor muscles."
  },
  {
    question: "Which trunks contribute to the posterior cord?",
    options: ["All three trunks", "Upper and Middle Trunks", "Lower and Middle Trunks", "Lower Trunk only"],
    correctAnswer: "All three trunks",
    explanation: "The posterior cord is formed by the posterior divisions of the upper, middle, and lower trunks."
  },
  {
    question: "Which nerve innervates the serratus anterior muscle?",
    options: ["Long Thoracic Nerve", "Suprascapular Nerve", "Thoracodorsal Nerve", "Axillary Nerve"],
    correctAnswer: "Long Thoracic Nerve",
    explanation: "The Long Thoracic Nerve (C5-C7) innervates the serratus anterior muscle."
  },
  {
    question: "Which type of brachial plexus variation involves a large C4 and absent T2?",
    options: ["Prefixed Plexus", "Postfixed Plexus", "Anterior Plexus", "Posterior Plexus"],
    correctAnswer: "Prefixed Plexus",
    explanation: "A prefixed plexus is characterized by a large C4 and absent T2."
  },
  {
    question: "Which nerve innervates the supraspinatus and infraspinatus muscles?",
    options: ["Suprascapular Nerve", "Axillary Nerve", "Radial Nerve", "Thoracodorsal Nerve"],
    correctAnswer: "Suprascapular Nerve",
    explanation: "The suprascapular nerve (C5, C6) innervates the supraspinatus and infraspinatus muscles."
  },
  {
    question: "What is the root origin of the radial nerve?",
    options: ["C5-C8 and T1", "C5-C7", "C6-C8", "C8 and T1"],
    correctAnswer: "C5-C8 and T1",
    explanation: "The radial nerve arises from roots C5-C8 and T1 and innervates the posterior compartment of the upper limb."
  },
  {
    question: "What nerve arises from the posterior cord and innervates the teres major muscle?",
    options: ["Lower Subscapular Nerve", "Upper Subscapular Nerve", "Thoracodorsal Nerve", "Axillary Nerve"],
    correctAnswer: "Lower Subscapular Nerve",
    explanation: "The lower subscapular nerve innervates the teres major muscle."
  },
  {
    question: "What is the root origin of the medial cutaneous nerve of the forearm?",
    options: ["C8 and T1", "C7 and T1", "C6 and C7", "C5 and C6"],
    correctAnswer: "C8 and T1",
    explanation: "The medial cutaneous nerve of the forearm arises from roots C8 and T1."
  },
  {
    question: "Which nerve arises from the lateral cord and supplies the coracobrachialis muscle?",
    options: ["Musculocutaneous Nerve", "Median Nerve", "Axillary Nerve", "Radial Nerve"],
    correctAnswer: "Musculocutaneous Nerve",
    explanation: "The musculocutaneous nerve arises from the lateral cord and supplies the coracobrachialis, biceps brachii, and brachialis."
  },
  {
    question: "Which nerve arises from the medial cord and supplies the flexor carpi ulnaris?",
    options: ["Ulnar Nerve", "Median Nerve", "Musculocutaneous Nerve", "Radial Nerve"],
    correctAnswer: "Ulnar Nerve",
    explanation: "The ulnar nerve arises from the medial cord and innervates the flexor carpi ulnaris."
  },
  {
    question: "What is the primary nerve supplying the posterior compartment of the arm?",
    options: ["Radial Nerve", "Axillary Nerve", "Musculocutaneous Nerve", "Median Nerve"],
    correctAnswer: "Radial Nerve",
    explanation: "The radial nerve supplies the muscles in the posterior compartment of the arm."
  },
  {
    question: "Which cord gives rise to the axillary nerve?",
    options: ["Lateral Cord", "Medial Cord", "Posterior Cord", "Supraclavicular Branch"],
    correctAnswer: "Posterior Cord",
    explanation: "The axillary nerve arises from the posterior cord and innervates the deltoid and teres minor muscles."
  },
  {
    question: "Which root is known as the 'nervous furcalis'?",
    options: ["C4", "C5", "C6", "T1"],
    correctAnswer: "C4",
    explanation: "C4 is called the 'nervous furcalis' because it contributes to both the cervical and brachial plexuses."
  },
  {
    question: "Which nerve innervates the latissimus dorsi muscle?",
    options: ["Thoracodorsal Nerve", "Axillary Nerve", "Radial Nerve", "Suprascapular Nerve"],
    correctAnswer: "Thoracodorsal Nerve",
    explanation: "The thoracodorsal nerve, arising from the posterior cord, innervates the latissimus dorsi."
  },
  {
    question: "What is the root origin of the suprascapular nerve?",
    options: ["C4 and C5", "C5 and C6", "C5 and C7", "C6 and C7"],
    correctAnswer: "C5 and C6",
    explanation: "The suprascapular nerve originates from roots C5 and C6."
  },
  {
    question: "Which nerve supplies the skin of the medial aspect of the forearm?",
    options: ["Medial Cutaneous Nerve of the Forearm", "Medial Cutaneous Nerve of the Arm", "Radial Nerve", "Musculocutaneous Nerve"],
    correctAnswer: "Medial Cutaneous Nerve of the Forearm",
    explanation: "The medial cutaneous nerve of the forearm supplies the medial aspect of the forearm."
  },
  {
    question: "Which trunks contribute to the lateral cord?",
    options: ["Upper and Middle Trunks", "Middle and Lower Trunks", "Upper Trunk only", "All three trunks"],
    correctAnswer: "Upper and Middle Trunks",
    explanation: "The lateral cord is formed by the anterior divisions of the upper and middle trunks."
  },





  ],
},















      {
        category: "Upper Limbs",
        questions: [
          {
            question: "Damage to the upper trunk of brachial plexus leads to:",
            options: [
              "Erb’s palsy",
              "Klumpke’s palsy",
              "Ape hand",
              "Pointing finger",
            ],
            correctAnswer: "Erb’s palsy",
          },
          {
            question:
              "The blood pressure in upper limb is measured by compressing which artery?",
            options: [
              "Axillary artery",
              "Brachial artery",
              "Ulnar artery",
              "Subclavian artery",
            ],
            correctAnswer: "Brachial artery",
          },
          {
            question:
              "Which of the following is not a branch of the lateral cord of brachial plexus?",
            options: [
              "Lateral pectoral nerve",
              "Lateral root of median nerve",
              "Ulnar nerve",
              "Musculocutaneous nerve",
            ],
            correctAnswer: "Ulnar nerve",
          },
          {
            question: "Which of the following is not found in the cubital fossa?",
            options: [
              "Brachial artery",
              "Median nerve",
              "Tendon of biceps brachii",
              "Ulnar nerve",
            ],
            correctAnswer: "Ulnar nerve",
          },
          {
            question: "Which of the following is a ball & socket joint?",
            options: [
              "Elbow joint",
              "Shoulder joint",
              "Radioulnar joint",
              "Wrist joint",
            ],
            correctAnswer: "Shoulder joint",
          },
          {
            question: "Which nerve is compressed in carpal tunnel syndrome?",
            options: [
              "Radial nerve",
              "Median nerve",
              "Ulnar nerve",
              "Musculocutaneous nerve",
            ],
            correctAnswer: "Median nerve",
          },
          {
            question: "Which of the following is a uniaxial joint?",
            options: [
              "Wrist joint",
              "First carpometacarpal joint",
              "Ankle joint",
              "Middle tibiofibular joint",
            ],
            correctAnswer: "Ankle joint",
          },
          {
            question: "Where are pseudounipolar neurons found?",
            options: [
              "Retina",
              "Olfactory mucosa",
              "Spinal cord",
              "Spinal ganglion",
            ],
            correctAnswer: "Spinal cord",
          },
          {
            question:
              "Which of the following does not contribute to the parasympathetic system?",
            options: [
              "Glossopharyngeal nerve",
              "Facial nerve",
              "Occulomotor nerve",
              "Vestibulocochlear nerve",
            ],
            correctAnswer: "Vestibulocochlear nerve",
          },
          {
            question: "Which of the following is an atavistic epiphysis?",
            options: [
              "Coracoid process",
              "Trochanter of femur",
              "Lower end of fibula",
              "Greater tubercle of humerus",
            ],
            correctAnswer: "Coracoid process",
          },
          {
            question: "Damage to the lower trunk leads to:",
            options: [
              "Porter’s tip hand",
              "Claw hand",
              "Ape hand",
              "Mallet’s finger",
            ],
            correctAnswer: "Claw hand",
          },
          {
            question: "The nerve supply of deltoid muscle is:",
            options: [
              "Axillary nerve",
              "Radial nerve",
              "Ulnar nerve",
              "Long thoracic nerve",
            ],
            correctAnswer: "Axillary nerve",
          },
          {
            question:
              "Which of the following is not a branch of the axillary artery?",
            options: [
              "Subscapular artery",
              "Suprascapular artery",
              "Superior thoracic artery",
              "Lateral thoracic artery",
            ],
            correctAnswer: "Suprascapular artery",
          },
          {
            question: "Which of the following is the action of brachioradialis?",
            options: [
              "Flexion at wrist joint",
              "Flexion at elbow in midprone forearm",
              "Extension of forearm",
              "Extension at wrist joint",
            ],
            correctAnswer: "Flexion at elbow in midprone forearm",
          },
          {
            question:
              "Which cell is responsible for myelination in the central nervous system?",
            options: [
              "Ependymal cell",
              "Schwann cell",
              "Microglial cell",
              "Oligodendrocyte",
            ],
            correctAnswer: "Oligodendrocyte",
          },
          {
            question: "The cell responsible for bone remodeling is:",
            options: [
              "Osteoblast",
              "Osteoclast",
              "Both a & b",
              "Neither a nor b",
            ],
            correctAnswer: "Both a & b",
          },
          {
            question:
              "Which of the following is not a secondary cartilaginous joint?",
            options: [
              "Sacrococcygeal joint",
              "Pubic symphysis",
              "Manubriosternal joint",
              "First costochondral joint",
            ],
            correctAnswer: "First costochondral joint",
          },
          {
            question:
              "Which of the following movements is not possible at the sternoclavicular joint?",
            options: ["Protraction", "Flexion", "Elevation", "Retraction"],
            correctAnswer: "Flexion",
          },
          {
            question: "Which nerve is related to the shaft of the humerus?",
            options: [
              "Radial nerve",
              "Median nerve",
              "Axillary nerve",
              "Ulnar nerve",
            ],
            correctAnswer: "Radial nerve",
          },
          {
            question: "Which of the following is an example of fibrocartilage?",
            options: [
              "Costal cartilage",
              "Cricoid cartilage",
              "Base of arytenoids cartilage",
              "Acetabular labrum",
            ],
            correctAnswer: "Acetabular labrum",
          },
          {
            question:
              "Which of the following muscles is not paralyzed in injury to the radial nerve in the spiral groove?",
            options: [
              "Long head of triceps",
              "Brachioradialis",
              "Anconeus",
              "Extensor carpi radialis longus",
            ],
            correctAnswer: "Long head of triceps",
          },
          {
            question:
              "Which muscle is responsible for the winging of the scapula when paralyzed?",
            options: [
              "Pectoralis minor",
              "Rhomboids",
              "Serratus anterior",
              "Teres major",
            ],
            correctAnswer: "Serratus anterior",
          },
          {
            question: "Which of the following is not found in the rotator cuff?",
            options: [
              "Subscapularis",
              "Teres minor",
              "Teres major",
              "Supraspinatus",
            ],
            correctAnswer: "Teres major",
          },
          {
            question: "The content of the quadrangular space includes:",
            options: [
              "Radial nerve",
              "Axillary nerve",
              "Profunda brachii artery",
              "Circumflex scapular artery",
            ],
            correctAnswer: "Axillary nerve",
          },
          {
            question:
              "Which of the following lymph nodes drains the first web space of the hand?",
            options: [
              "Apical axillary lymph node",
              "Anterior axillary lymph node",
              "Lateral axillary lymph node",
              "Central axillary lymph node",
            ],
            correctAnswer: "Apical axillary lymph node",
          },
          {
            question:
              'Which of the following is known as the "musician\'s nerve"?',
            options: [
              "Median nerve",
              "Ulnar nerve",
              "Radial nerve",
              "Axillary nerve",
            ],
            correctAnswer: "Ulnar nerve",
          },
          {
            question: "Which of the following is a multipennate muscle?",
            options: [
              "Dorsal interossei",
              "Flexor pollicis longus",
              "Rectus femoris",
              "Subscapularis",
            ],
            correctAnswer: "Subscapularis",
          },
          {
            question: "Dupuytren’s contracture involves:",
            options: [
              "Contracture of flexor muscles",
              "Shortening of palmar aponeurosis",
              "Contracture of extensor tendons",
              "Ischaemic contracture of forearm muscles",
            ],
            correctAnswer: "Shortening of palmar aponeurosis",
          },
          {
            question: "Which of the following is the pressure epiphysis?",
            options: [
              "Greater tubercle of humerus",
              "Coracoid process",
              "Head of femur",
              "Head of 1st metacarpal",
            ],
            correctAnswer: "Head of femur",
          },
          {
            question: "The floor of the anatomical snuffbox is formed by:",
            options: [
              "Triquetral bone",
              "Capitate bone",
              "Scaphoid bone",
              "Hammate bone",
            ],
            correctAnswer: "Scaphoid bone",
          },
          {
            question:
              "Which of the following is the action of Flexor digitorum profundus?",
            options: [
              "Flexion at elbow joint",
              "Flexion at distal interphalangeal joint",
              "Pronation of forearm",
              "Flexion at first carpometacarpal joint",
            ],
            correctAnswer: "Flexion at distal interphalangeal joint",
          },
  
          {
            question: "Which of the following is Flexor digitorum profundus? ",
            options: [
              "Flexion at elbow joint",
              "Flexion at distal interphalangeal joint",
              "Pronation of forearm",
              "Flexion at first carpometacarpal joint",
            ],
            correctAnswer: "Flexion at distal interphalangeal joint",
          },
  
          {
            question:
              "All are branches of the third part of the axillary artery except:",
            options: [
              "Subscapular artery",
              "Posterior circumflex humeral artery",
              "Thoracoacromial artery",
              "Anterior circumflex humeral artery",
            ],
            correctAnswer: "Thoracoacromial artery",
          },
          {
            question: "Brachioradialis is an example of:",
            options: [
              "Shunt muscle",
              "Spin muscle",
              "Spurt muscle",
              "None of the above",
            ],
            correctAnswer: "Shunt muscle",
          },
          {
            question: "All are examples of voluntary skeletal muscles except:",
            options: [
              "Genioglossus",
              "Masseter",
              "Inferior constrictor of pharynx",
              "Mylohyoid",
            ],
            correctAnswer: "Inferior constrictor of pharynx",
          },
          {
            question:
              "Line of weight transmission from the upper limb passes through:",
            options: [
              "Coracohumeral ligament",
              "Annular ligament",
              "Transverse humeral ligament",
              "Coracoclavicular ligament",
            ],
            correctAnswer: "Coracoclavicular ligament",
          },
          {
            question: "The content of Quadrangular space includes:",
            options: [
              "Radial nerve",
              "Axillary nerve",
              "Profunda brachii artery",
              "Circumflex scapular artery",
            ],
            correctAnswer: "Axillary nerve",
          },
          {
            question: "All is true of carpal tunnel syndrome except:",
            options: [
              "Paresthesia of radial 3 ½ fingers",
              "Loss of sensation from radial aspect of palm",
              "Paralysis of opponens pollicis",
              "Ape thumb deformity",
            ],
            correctAnswer: "Loss of sensation from radial aspect of palm",
          },
          {
            question: "Action of Palmer interossei:",
            options: [
              "Abduction of fingers",
              "Extension of Metacarpophalangeal joint",
              "Adduction of fingers",
              "Flexion at Interphalangeal joint",
            ],
            correctAnswer: "Adduction of fingers",
          },
          {
            question:
              "Which of the following is the nerve supply of 1st & 2nd Lumbricals?",
            options: [
              "Median nerve",
              "Radial nerve",
              "Superficial branch of ulnar nerve",
              "Deep branch of ulnar nerve",
            ],
            correctAnswer: "Deep branch of ulnar nerve",
          },
          {
            question: "All are causes of Erb’s palsy except:",
            options: [
              "Undue separation between trunk & upper arm",
              "Undue separation between neck & shoulder",
              "Birth injury",
              "Anaesthetic block in neck",
            ],
            correctAnswer: "Undue separation between trunk & upper arm",
          },
          {
            question: "Following are branches of posterior cord except:",
            options: [
              "Axillary nerve",
              "Long thoracic nerve",
              "Thoracodorsal nerve",
              "Subscapular nerves",
            ],
            correctAnswer: "Long thoracic nerve",
          },
          {
            question: "Which of the following forms parenchyma of breast?",
            options: ["Lactiferous ducts", "Fat", "Ligament of Cooper", "Areola"],
            correctAnswer: "Lactiferous ducts",
          },
          {
            question:
              "All of the following need to be examined in a patient with carcinoma of breast except:",
            options: ["Opposite breast", "Shoulder joint", "Axilla", "Neck"],
            correctAnswer: "Shoulder joint",
          },
          {
            question:
              "All are supplied by the median nerve in the forearm except:",
            options: [
              "Pronator Teres",
              "Medial half of Flexor digitorum profundus",
              "Palmaris longus",
              "Lateral half of Flexor digitorum profundus",
            ],
            correctAnswer: "Medial half of Flexor digitorum profundus",
          },
          {
            question: "Actual arterioarterial anastomosis is:",
            options: [
              "Anastomosis around elbow joint",
              "Malleolar anastomosis",
              "Circle of Willis",
              "Trochanteric anastomosis",
            ],
            correctAnswer: "Circle of Willis",
          },
          {
            question: "All are muscular arteries except:",
            options: [
              "Radial artery",
              "Deep peroneal artery",
              "Superficial temporal artery",
              "Aorta",
            ],
            correctAnswer: "Aorta",
          },
          {
            question:
              "Which of the following is the nerve supply of adductor pollicis?",
            options: [
              "Median nerve",
              "Radial nerve",
              "Superficial branch of ulnar nerve",
              "Deep branch of ulnar nerve",
            ],
            correctAnswer: "Deep branch of ulnar nerve",
          },
  
          {
            question: "Which of the following is hyaline cartilage?",
            options: [
              "Pinna of ear",
              "Epiglottis cartilage",
              "Thyroid cartilage",
              "Apex of the arytenoid cartilage",
            ],
            correctAnswer: "Thyroid cartilage",
          },
  
          {
            question:
              "All of the following are piercing clavipectoral fascia except",
            options: [
              "Cephalic vein",
              "Lateral pectoral nerve",
              "Medial pectoral nerve",
              "Thoracoacromial vessels",
            ],
            correctAnswer: "Medial pectoral nerve",
          },
  
          //category: 'Osteology of the Upper Extremity
  
          {
            question: "Which bones make up the pectoral girdle?",
            options: [
              "Clavicle and Scapula",
              "Humerus and Ulna",
              "Radius and Carpus",
              "Metacarpus and Phalanges",
            ],
            correctAnswer: "Clavicle and Scapula",
          },
          {
            question: "Which bone connects the scapula to the thorax?",
            options: ["Clavicle", "Humerus", "Ulna", "Radius"],
            correctAnswer: "Clavicle",
          },
          {
            question:
              "The clavicle has how many surfaces in the medial two-thirds?",
            options: ["Two", "Three", "Four", "Five"],
            correctAnswer: "Four",
          },
          {
            question:
              "The lateral one-third of the clavicle is separated into how many borders?",
            options: ["One", "Two", "Three", "Four"],
            correctAnswer: "Two",
          },
          {
            question:
              "At what age does the secondary center for the sternal end of the clavicle appear?",
            options: ["5-10 years", "10-15 years", "15-20 years", "20-25 years"],
            correctAnswer: "15-20 years",
          },
          {
            question:
              "Which process of the scapula is attached to the body above the glenoid cavity?",
            options: [
              "Acromion process",
              "Coracoid process",
              "Supraspinous process",
              "Infraspinous process",
            ],
            correctAnswer: "Coracoid process",
          },
          {
            question:
              "The spine of the scapula divides the dorsal surface into which fossae?",
            options: [
              "Infrascapular and Suprascapular",
              "Supraspinous and Infraspinous",
              "Deltoid and Subscapular",
              "Coracoid and Glenoid",
            ],
            correctAnswer: "Supraspinous and Infraspinous",
          },
          {
            question: "Which surface of the scapula is concave and smooth?",
            options: ["Dorsal", "Costal", "Lateral", "Medial"],
            correctAnswer: "Costal",
          },
          {
            question:
              "Which part of the humerus articulates with the glenoid cavity?",
            options: [
              "Head",
              "Anatomical neck",
              "Greater tubercle",
              "Lesser tubercle",
            ],
            correctAnswer: "Head",
          },
          {
            question:
              "Which nerve is closely related to the surgical neck of the humerus?",
            options: [
              "Axillary nerve",
              "Radial nerve",
              "Ulnar nerve",
              "Median nerve",
            ],
            correctAnswer: "Axillary nerve",
          },
          {
            question:
              "The radial groove on the humerus is located on which surface?",
            options: ["Anterior", "Posterior", "Medial", "Lateral"],
            correctAnswer: "Posterior",
          },
          {
            question: "The capitulum of the humerus articulates with which bone?",
            options: ["Ulna", "Radius", "Scapula", "Clavicle"],
            correctAnswer: "Radius",
          },
          {
            question: "What is the type of the elbow joint?",
            options: ["Ball and socket", "Hinge", "Saddle", "Plane"],
            correctAnswer: "Hinge",
          },
          {
            question:
              "The olecranon fossa is located on which surface of the humerus?",
            options: ["Anterior", "Posterior", "Lateral", "Medial"],
            correctAnswer: "Posterior",
          },
          {
            question:
              "Which artery lies in the intertubercular sulcus of the humerus?",
            options: [
              "Brachial artery",
              "Radial artery",
              "Anterior circumflex artery",
              "Ascending branch of the anterior circumflex humeral artery",
            ],
            correctAnswer:
              "Ascending branch of the anterior circumflex humeral artery",
          },
          {
            question:
              "Which part of the humerus is most likely to fracture at the surgical neck?",
            options: [
              "Radial nerve",
              "Axillary nerve",
              "Ulnar nerve",
              "Median nerve",
            ],
            correctAnswer: "Axillary nerve",
          },
          {
            question:
              "The head of the radius articulates with which part of the ulna?",
            options: [
              "Trochlear notch",
              "Radial notch",
              "Coronoid process",
              "Olecranon",
            ],
            correctAnswer: "Radial notch",
          },
          {
            question:
              "Which structure allows rotation of the radius around the ulna?",
            options: [
              "Trochlear notch",
              "Radial notch",
              "Annular ligament",
              "Interosseous membrane",
            ],
            correctAnswer: "Annular ligament",
          },
          {
            question:
              "Which bone of the upper limb is commonly fractured at its lower end resulting in a dinner fork deformity?",
            options: ["Radius", "Ulna", "Humerus", "Scapula"],
            correctAnswer: "Radius",
          },
          {
            question: "The ulna is located on which side of the forearm?",
            options: ["Lateral", "Medial", "Anterior", "Posterior"],
            correctAnswer: "Medial",
          },
          {
            question:
              "Which part of the ulna articulates with the trochlea of the humerus?",
            options: [
              "Coronoid process",
              "Radial notch",
              "Olecranon",
              "Trochlear notch",
            ],
            correctAnswer: "Trochlear notch",
          },
          {
            question:
              "At which age do the secondary centers of the ulna fuse with the shaft?",
            options: ["5 years", "10 years", "15 years", "20 years"],
            correctAnswer: "20 years",
          },
          {
            question: "Which muscle inserts into the radial tuberosity?",
            options: [
              "Biceps brachii",
              "Brachialis",
              "Triceps brachii",
              "Deltoid",
            ],
            correctAnswer: "Biceps brachii",
          },
          {
            question:
              "Fracture at the surgical neck of the humerus is likely to affect which nerve?",
            options: [
              "Axillary nerve",
              "Radial nerve",
              "Ulnar nerve",
              "Median nerve",
            ],
            correctAnswer: "Axillary nerve",
          },
          {
            question: "Which artery supplies the deltoid muscle?",
            options: [
              "Axillary artery",
              "Brachial artery",
              "Posterior circumflex humeral artery",
              "Subclavian artery",
            ],
            correctAnswer: "Posterior circumflex humeral artery",
          },
          {
            question: "Which nerve is responsible for winging of the scapula?",
            options: [
              "Long thoracic nerve",
              "Axillary nerve",
              "Radial nerve",
              "Ulnar nerve",
            ],
            correctAnswer: "Long thoracic nerve",
          },
          {
            question: "Which muscle is affected in Erb’s palsy?",
            options: [
              "Deltoid",
              "Biceps brachii",
              "Infraspinatus",
              "Supraspinatus",
            ],
            correctAnswer: "Supraspinatus",
          },
          {
            question: "Which type of joint is the sternoclavicular joint?",
            options: ["Ball and socket", "Hinge", "Saddle", "Pivot"],
            correctAnswer: "Saddle",
          },
          {
            question: "The clavicle articulates with which part of the scapula?",
            options: [
              "Acromion",
              "Coracoid process",
              "Spine",
              "Supraspinous fossa",
            ],
            correctAnswer: "Acromion",
          },
          {
            question:
              "Which ligament bridges the upper end of the intertubercular sulcus of the humerus?",
            options: [
              "Coracohumeral ligament",
              "Transverse humeral ligament",
              "Annular ligament",
              "Glenohumeral ligament",
            ],
            correctAnswer: "Transverse humeral ligament",
          },
          {
            question:
              "Which artery is responsible for supplying the shoulder joint?",
            options: [
              "Suprascapular artery",
              "Axillary artery",
              "Radial artery",
              "Brachial artery",
            ],
            correctAnswer: "Suprascapular artery",
          },
          {
            question: "The most movable joint in the upper extremity is the:",
            options: [
              "Elbow joint",
              "Shoulder joint",
              "Wrist joint",
              "Sternoclavicular joint",
            ],
            correctAnswer: "Shoulder joint",
          },
          {
            question:
              "Which muscle is responsible for initial abduction of the arm?",
            options: ["Supraspinatus", "Deltoid", "Infraspinatus", "Teres minor"],
            correctAnswer: "Supraspinatus",
          },
          {
            question: "Which nerve is involved in Klumpke’s paralysis?",
            options: ["C8-T1", "C5-C6", "C7", "T2"],
            correctAnswer: "C8-T1",
          },
  
          {
            question: "What is the primary function of the clavicle?",
            options: [
              "Support the shoulder girdle",
              "Connect the humerus to the scapula",
              "Facilitate movement of the arm",
              "Anchor the ribcage",
            ],
            correctAnswer: "Support the shoulder girdle",
          },
          {
            question:
              "Fracture of the clavicle commonly occurs between which ligaments?",
            options: [
              "Costoclavicular and Coracoclavicular",
              "Glenohumeral and Acromioclavicular",
              "Annular and Radial collateral",
              "Ulnar collateral and Transverse humeral",
            ],
            correctAnswer: "Costoclavicular and Coracoclavicular",
          },
          {
            question: "The deltoid tubercle is located on which bone?",
            options: ["Clavicle", "Scapula", "Humerus", "Radius"],
            correctAnswer: "Clavicle",
          },
          {
            question: "Which surface of the scapula accommodates the spine?",
            options: [
              "Anterior surface",
              "Costal surface",
              "Dorsal surface",
              "Medial surface",
            ],
            correctAnswer: "Dorsal surface",
          },
          {
            question: "What structure passes through the suprascapular notch?",
            options: [
              "Suprascapular nerve",
              "Axillary nerve",
              "Radial nerve",
              "Ulnar nerve",
            ],
            correctAnswer: "Suprascapular nerve",
          },
          {
            question:
              "The head of the humerus articulates with which part of the scapula?",
            options: [
              "Coracoid process",
              "Glenoid cavity",
              "Supraspinous fossa",
              "Acromion",
            ],
            correctAnswer: "Glenoid cavity",
          },
          {
            question:
              "Which process of the scapula articulates with the clavicle?",
            options: [
              "Coracoid process",
              "Acromion",
              "Spine",
              "Supraglenoid tubercle",
            ],
            correctAnswer: "Acromion",
          },
          {
            question:
              "Which structure is responsible for stabilizing the head of the humerus during movement?",
            options: [
              "Rotator cuff muscles",
              "Deltoid muscle",
              "Pectoralis major",
              "Biceps brachii",
            ],
            correctAnswer: "Rotator cuff muscles",
          },
          {
            question: "Which nerve innervates the deltoid muscle?",
            options: [
              "Axillary nerve",
              "Radial nerve",
              "Median nerve",
              "Musculocutaneous nerve",
            ],
            correctAnswer: "Axillary nerve",
          },
          {
            question:
              "The trochlea of the humerus articulates with which part of the ulna?",
            options: [
              "Radial notch",
              "Coronoid process",
              "Olecranon",
              "Trochlear notch",
            ],
            correctAnswer: "Trochlear notch",
          },
          {
            question:
              "Which muscle attaches to the greater tubercle of the humerus?",
            options: [
              "Supraspinatus",
              "Biceps brachii",
              "Deltoid",
              "Subscapularis",
            ],
            correctAnswer: "Supraspinatus",
          },
          {
            question:
              "The surgical neck of the humerus is located between which two parts?",
            options: [
              "Head and Shaft",
              "Head and Anatomical neck",
              "Greater and Lesser tubercle",
              "Shaft and Distal end",
            ],
            correctAnswer: "Head and Shaft",
          },
          {
            question: "The radial groove on the humerus contains which nerve?",
            options: [
              "Radial nerve",
              "Axillary nerve",
              "Median nerve",
              "Ulnar nerve",
            ],
            correctAnswer: "Radial nerve",
          },
          {
            question:
              "The interosseous membrane is located between which two bones?",
            options: [
              "Radius and Ulna",
              "Humerus and Scapula",
              "Radius and Humerus",
              "Clavicle and Scapula",
            ],
            correctAnswer: "Radius and Ulna",
          },
          {
            question:
              "Which part of the radius articulates with the capitulum of the humerus?",
            options: [
              "Radial head",
              "Radial tuberosity",
              "Radial notch",
              "Styloid process",
            ],
            correctAnswer: "Radial head",
          },
          {
            question:
              "The ulnar styloid process is located on which part of the ulna?",
            options: [
              "Distal end",
              "Proximal end",
              "Radial notch",
              "Trochlear notch",
            ],
            correctAnswer: "Distal end",
          },
          {
            question: "The brachial artery is a continuation of which artery?",
            options: [
              "Axillary artery",
              "Radial artery",
              "Subclavian artery",
              "Ulnar artery",
            ],
            correctAnswer: "Axillary artery",
          },
          {
            question: "Which structure is located in the cubital fossa?",
            options: [
              "Median nerve",
              "Axillary artery",
              "Radial nerve",
              "Ulnar nerve",
            ],
            correctAnswer: "Median nerve",
          },
          {
            question:
              "The lateral epicondyle of the humerus is the origin for which muscle group?",
            options: [
              "Wrist extensors",
              "Wrist flexors",
              "Forearm pronators",
              "Forearm supinators",
            ],
            correctAnswer: "Wrist extensors",
          },
          {
            question: "Which ligament stabilizes the proximal radioulnar joint?",
            options: [
              "Annular ligament",
              "Radial collateral ligament",
              "Ulnar collateral ligament",
              "Transverse humeral ligament",
            ],
            correctAnswer: "Annular ligament",
          },
          {
            question: "Which muscle is the chief extensor of the forearm?",
            options: [
              "Triceps brachii",
              "Brachialis",
              "Biceps brachii",
              "Anconeus",
            ],
            correctAnswer: "Triceps brachii",
          },
          {
            question: "Which artery supplies the elbow joint?",
            options: [
              "Brachial artery",
              "Radial artery",
              "Profunda brachii artery",
              "Ulnar artery",
            ],
            correctAnswer: "Profunda brachii artery",
          },
          {
            question: "The olecranon process is located on which bone?",
            options: ["Ulna", "Radius", "Humerus", "Scapula"],
            correctAnswer: "Ulna",
          },
          {
            question: "Fracture of the radial head may limit which movement?",
            options: ["Supination", "Pronation", "Flexion", "Extension"],
            correctAnswer: "Supination",
          },
          {
            question:
              "Which muscle inserts onto the coracoid process of the scapula?",
            options: [
              "Pectoralis minor",
              "Biceps brachii",
              "Trapezius",
              "Latissimus dorsi",
            ],
            correctAnswer: "Pectoralis minor",
          },
          {
            question:
              "The lateral border of the scapula extends from which structure?",
            options: [
              "Glenoid cavity",
              "Spine of scapula",
              "Superior angle",
              "Acromion",
            ],
            correctAnswer: "Glenoid cavity",
          },
          {
            question: "Which nerve supplies the serratus anterior muscle?",
            options: [
              "Long thoracic nerve",
              "Axillary nerve",
              "Radial nerve",
              "Median nerve",
            ],
            correctAnswer: "Long thoracic nerve",
          },
          {
            question:
              "The intertubercular sulcus of the humerus accommodates which structure?",
            options: [
              "Tendon of the long head of the biceps",
              "Ulnar nerve",
              "Radial artery",
              "Profunda brachii artery",
            ],
            correctAnswer: "Tendon of the long head of the biceps",
          },
          {
            question:
              "Which muscle is primarily responsible for the protraction of the scapula?",
            options: [
              "Serratus anterior",
              "Trapezius",
              "Deltoid",
              "Latissimus dorsi",
            ],
            correctAnswer: "Serratus anterior",
          },
          {
            question:
              "Which nerve is involved in Horner’s syndrome due to Klumpke’s paralysis?",
            options: [
              "Sympathetic fibers of T1",
              "Radial nerve",
              "Median nerve",
              "Ulnar nerve",
            ],
            correctAnswer: "Sympathetic fibers of T1",
          },
          {
            question:
              "Which part of the brachial plexus is affected in Erb’s palsy?",
            options: [
              "Upper trunk",
              "Lower trunk",
              "Lateral cord",
              "Medial cord",
            ],
            correctAnswer: "Upper trunk",
          },
          {
            question: "Which artery forms an anastomosis around the elbow joint?",
            options: [
              "Profunda brachii artery",
              "Axillary artery",
              "Subclavian artery",
              "Circumflex humeral artery",
            ],
            correctAnswer: "Profunda brachii artery",
          },
          {
            question: "The lateral supracondylar ridge is located on which bone?",
            options: ["Humerus", "Radius", "Ulna", "Clavicle"],
            correctAnswer: "Humerus",
          },
  
          {
            question:
              "The bicipital groove of the humerus accommodates which structure?",
            options: [
              "Tendon of the long head of biceps",
              "Radial nerve",
              "Ulnar artery",
              "Axillary nerve",
            ],
            correctAnswer: "Tendon of the long head of biceps",
          },
          {
            question: "The interosseous membrane primarily serves to:",
            options: [
              "Connect the radius and ulna",
              "Stabilize the elbow joint",
              "Anchor the humerus to the scapula",
              "Support the shoulder joint",
            ],
            correctAnswer: "Connect the radius and ulna",
          },
          {
            question:
              "The greater tubercle of the humerus provides attachment for which muscles?",
            options: [
              "Rotator cuff muscles",
              "Biceps brachii",
              "Deltoid",
              "Triceps brachii",
            ],
            correctAnswer: "Rotator cuff muscles",
          },
          {
            question: "Which artery supplies the forearm flexor muscles?",
            options: [
              "Radial artery",
              "Ulnar artery",
              "Brachial artery",
              "Subclavian artery",
            ],
            correctAnswer: "Ulnar artery",
          },
          {
            question: "Which muscle originates from the supraglenoid tubercle?",
            options: [
              "Biceps brachii",
              "Triceps brachii",
              "Deltoid",
              "Coracobrachialis",
            ],
            correctAnswer: "Biceps brachii",
          },
          {
            question:
              "The lateral epicondyle of the humerus is the origin for which muscle group?",
            options: [
              "Extensors of the wrist",
              "Flexors of the wrist",
              "Supinators of the forearm",
              "Pronators of the forearm",
            ],
            correctAnswer: "Extensors of the wrist",
          },
          {
            question:
              "Which nerve is associated with the medial epicondyle of the humerus?",
            options: [
              "Ulnar nerve",
              "Radial nerve",
              "Median nerve",
              "Axillary nerve",
            ],
            correctAnswer: "Ulnar nerve",
          },
          {
            question:
              "The radial styloid process is located at which part of the radius?",
            options: ["Distal end", "Proximal end", "Middle", "Radial notch"],
            correctAnswer: "Distal end",
          },
          {
            question: "The cubital fossa contains which structure?",
            options: [
              "Brachial artery",
              "Axillary nerve",
              "Ulnar nerve",
              "Posterior circumflex artery",
            ],
            correctAnswer: "Brachial artery",
          },
          {
            question:
              "The coracoid process of the scapula serves as an attachment for which muscle?",
            options: [
              "Biceps brachii",
              "Deltoid",
              "Triceps brachii",
              "Pectoralis minor",
            ],
            correctAnswer: "Pectoralis minor",
          },
          {
            question: "The elbow joint is classified as what type of joint?",
            options: [
              "Hinge joint",
              "Ball and socket joint",
              "Pivot joint",
              "Saddle joint",
            ],
            correctAnswer: "Hinge joint",
          },
          {
            question:
              "Which muscle group is responsible for supination of the forearm?",
            options: [
              "Biceps brachii and supinator",
              "Triceps brachii and pronator teres",
              "Brachialis and deltoid",
              "Flexor carpi ulnaris and pronator quadratus",
            ],
            correctAnswer: "Biceps brachii and supinator",
          },
          {
            question: "Which artery primarily supplies the upper limb?",
            options: [
              "Brachial artery",
              "Axillary artery",
              "Radial artery",
              "Ulnar artery",
            ],
            correctAnswer: "Brachial artery",
          },
          {
            question: "The glenoid labrum is responsible for:",
            options: [
              "Deepening the glenoid cavity",
              "Stabilizing the humeral head",
              "Preventing shoulder dislocation",
              "All of the above",
            ],
            correctAnswer: "All of the above",
          },
          {
            question: "Which muscle is the chief flexor of the forearm?",
            options: [
              "Brachialis",
              "Triceps brachii",
              "Deltoid",
              "Pectoralis major",
            ],
            correctAnswer: "Brachialis",
          },
          {
            question: "The radial nerve passes through which space in the arm?",
            options: [
              "Radial groove",
              "Suprascapular notch",
              "Intertubercular sulcus",
              "Axillary fossa",
            ],
            correctAnswer: "Radial groove",
          },
          {
            question:
              "Which structure stabilizes the radius and ulna at the distal end?",
            options: [
              "Interosseous membrane",
              "Radial collateral ligament",
              "Ulnar collateral ligament",
              "Annular ligament",
            ],
            correctAnswer: "Interosseous membrane",
          },
          {
            question:
              "The surgical neck of the humerus is prone to injury involving which nerve?",
            options: [
              "Axillary nerve",
              "Radial nerve",
              "Ulnar nerve",
              "Median nerve",
            ],
            correctAnswer: "Axillary nerve",
          },
          {
            question:
              "Which bone forms the majority of the elbow joint with the humerus?",
            options: ["Ulna", "Radius", "Scapula", "Clavicle"],
            correctAnswer: "Ulna",
          },
          {
            question:
              "The tendon of which muscle passes through the bicipital groove of the humerus?",
            options: [
              "Long head of biceps brachii",
              "Short head of biceps brachii",
              "Triceps brachii",
              "Deltoid",
            ],
            correctAnswer: "Long head of biceps brachii",
          },
          {
            question:
              "The coronoid fossa of the humerus receives which structure during elbow flexion?",
            options: [
              "Coronoid process of the ulna",
              "Head of the radius",
              "Olecranon process",
              "Radial tuberosity",
            ],
            correctAnswer: "Coronoid process of the ulna",
          },
          {
            question: "The medial border of the scapula is also known as the:",
            options: [
              "Vertebral border",
              "Axillary border",
              "Cervical border",
              "Costal border",
            ],
            correctAnswer: "Vertebral border",
          },
          {
            question:
              "Which ligament prevents upward displacement of the humeral head?",
            options: [
              "Coracoacromial ligament",
              "Transverse humeral ligament",
              "Glenohumeral ligament",
              "Annular ligament",
            ],
            correctAnswer: "Coracoacromial ligament",
          },
          {
            question:
              "The musculocutaneous nerve supplies which group of muscles?",
            options: [
              "Flexors of the arm",
              "Extensors of the arm",
              "Flexors of the forearm",
              "Extensors of the forearm",
            ],
            correctAnswer: "Flexors of the arm",
          },
          {
            question:
              "The radial nerve is most commonly injured in fractures of which part of the humerus?",
            options: ["Shaft", "Head", "Surgical neck", "Greater tubercle"],
            correctAnswer: "Shaft",
          },
          {
            question: "The olecranon is part of which bone?",
            options: ["Ulna", "Radius", "Humerus", "Scapula"],
            correctAnswer: "Ulna",
          },
          {
            question:
              "Fracture of the scaphoid bone can lead to damage of which artery?",
            options: [
              "Radial artery",
              "Ulnar artery",
              "Brachial artery",
              "Axillary artery",
            ],
            correctAnswer: "Radial artery",
          },
          {
            question:
              "Which muscle is responsible for initiating abduction of the arm?",
            options: ["Supraspinatus", "Deltoid", "Infraspinatus", "Teres minor"],
            correctAnswer: "Supraspinatus",
          },
          {
            question:
              "The posterior circumflex humeral artery is a branch of which artery?",
            options: [
              "Axillary artery",
              "Brachial artery",
              "Radial artery",
              "Subclavian artery",
            ],
            correctAnswer: "Axillary artery",
          },
          {
            question:
              "The head of the radius articulates with which part of the humerus?",
            options: [
              "Capitulum",
              "Trochlea",
              "Coronoid fossa",
              "Olecranon fossa",
            ],
            correctAnswer: "Capitulum",
          },
  
          {
            question:
              "The anatomical snuff box is located on which part of the hand?",
            options: [
              "Dorsal aspect",
              "Palmar aspect",
              "Lateral aspect",
              "Medial aspect",
            ],
            correctAnswer: "Dorsal aspect",
          },
          {
            question: "Which artery passes through the anatomical snuff box?",
            options: [
              "Radial artery",
              "Ulnar artery",
              "Brachial artery",
              "Axillary artery",
            ],
            correctAnswer: "Radial artery",
          },
          {
            question:
              "Which tendons form the boundaries of the anatomical snuff box?",
            options: [
              "Extensor pollicis longus, Extensor pollicis brevis, Abductor pollicis longus",
              "Extensor carpi radialis, Extensor digitorum, Extensor indicis",
              "Flexor carpi ulnaris, Flexor pollicis longus, Abductor digiti minimi",
              "Palmaris longus, Flexor digitorum superficialis, Pronator quadratus",
            ],
            correctAnswer:
              "Extensor pollicis longus, Extensor pollicis brevis, Abductor pollicis longus",
          },
          {
            question:
              "Which bone can be palpated in the floor of the anatomical snuff box?",
            options: ["Scaphoid", "Lunate", "Pisiform", "Trapezium"],
            correctAnswer: "Scaphoid",
          },
  
          {
            question: "Which nerve passes through the carpal tunnel?",
            options: [
              "Median nerve",
              "Ulnar nerve",
              "Radial nerve",
              "Axillary nerve",
            ],
            correctAnswer: "Median nerve",
          },
          {
            question: "Which structure forms the roof of the carpal tunnel?",
            options: [
              "Flexor retinaculum",
              "Extensor retinaculum",
              "Palmar aponeurosis",
              "Transverse carpal ligament",
            ],
            correctAnswer: "Flexor retinaculum",
          },
          {
            question: "How many tendons pass through the carpal tunnel?",
            options: ["9", "5", "10", "7"],
            correctAnswer: "9",
          },
          {
            question:
              "Compression of the median nerve in the carpal tunnel results in which condition?",
            options: [
              "Carpal tunnel syndrome",
              "Cubital tunnel syndrome",
              "Radial nerve palsy",
              "Thoracic outlet syndrome",
            ],
            correctAnswer: "Carpal tunnel syndrome",
          },
          {
            question: "Which tendons pass through the carpal tunnel?",
            options: [
              "Flexor digitorum superficialis and flexor digitorum profundus",
              "Extensor digitorum and extensor indicis",
              "Flexor pollicis longus and extensor pollicis brevis",
              "Abductor pollicis longus and flexor carpi ulnaris",
            ],
            correctAnswer:
              "Flexor digitorum superficialis and flexor digitorum profundus",
          },
          {
            question: "Which bone forms part of the floor of the carpal tunnel?",
            options: ["Scaphoid", "Pisiform", "Lunate", "Trapezium"],
            correctAnswer: "Scaphoid",
          },
  
          {
            question: "What is the primary function of the flexor retinaculum?",
            options: [
              "Forms the roof of the carpal tunnel",
              "Prevents dislocation of the shoulder",
              "Holds the tendons of the extensor muscles",
              "Stabilizes the elbow joint",
            ],
            correctAnswer: "Forms the roof of the carpal tunnel",
          },
          {
            question: "The flexor retinaculum is attached to which bones?",
            options: [
              "Pisiform and Scaphoid",
              "Scaphoid and Trapezium",
              "Pisiform and Hamate",
              "Radius and Ulna",
            ],
            correctAnswer: "Pisiform and Hamate",
          },
          {
            question:
              "Which structure passes superficial to the flexor retinaculum?",
            options: [
              "Ulnar nerve",
              "Median nerve",
              "Radial nerve",
              "Extensor digitorum",
            ],
            correctAnswer: "Ulnar nerve",
          },
          {
            question:
              "The extensor retinaculum is located on which side of the wrist?",
            options: [
              "Dorsal side",
              "Palmar side",
              "Medial side",
              "Lateral side",
            ],
            correctAnswer: "Dorsal side",
          },
          {
            question: "What is the function of the extensor retinaculum?",
            options: [
              "Holds the extensor tendons in place",
              "Forms the roof of the carpal tunnel",
              "Holds the flexor tendons in place",
              "Prevents dislocation of the ulna",
            ],
            correctAnswer: "Holds the extensor tendons in place",
          },
          {
            question: "Which tendons pass through the extensor retinaculum?",
            options: [
              "Extensor digitorum and Extensor pollicis longus",
              "Flexor carpi ulnaris and Flexor digitorum superficialis",
              "Biceps brachii and Triceps brachii",
              "Palmaris longus and Pronator teres",
            ],
            correctAnswer: "Extensor digitorum and Extensor pollicis longus",
          },
  
          {
            question:
              "What nerve is most likely to be injured in a fracture of the surgical neck of the humerus?",
            options: [
              "Axillary nerve",
              "Radial nerve",
              "Ulnar nerve",
              "Median nerve",
            ],
            correctAnswer: "Axillary nerve",
          },
          {
            question:
              "Damage to the upper trunk of the brachial plexus (C5-C6) leads to which condition?",
            options: ["Erb’s palsy", "Klumpke’s palsy", "Ape hand", "Wrist drop"],
            correctAnswer: "Erb’s palsy",
          },
          {
            question:
              "Compression of the median nerve in the carpal tunnel results in:",
            options: [
              "Carpal tunnel syndrome",
              "Cubital tunnel syndrome",
              "Thoracic outlet syndrome",
              "Guyon’s canal syndrome",
            ],
            correctAnswer: "Carpal tunnel syndrome",
          },
          {
            question:
              "A person falls on an outstretched hand, resulting in a common fracture between the costoclavicular and coracoclavicular ligaments. Which bone is fractured?",
            options: ["Clavicle", "Scapula", "Humerus", "Radius"],
            correctAnswer: "Clavicle",
          },
          {
            question:
              "Fracture of the midshaft of the humerus is most likely to injure which nerve?",
            options: [
              "Radial nerve",
              "Ulnar nerve",
              "Axillary nerve",
              "Median nerve",
            ],
            correctAnswer: "Radial nerve",
          },
          {
            question:
              "Injury to the long thoracic nerve results in which clinical condition?",
            options: [
              "Winging of scapula",
              "Foot drop",
              "Wrist drop",
              "Claw hand",
            ],
            correctAnswer: "Winging of scapula",
          },
          {
            question: "Which muscle is paralyzed in a patient with Erb’s palsy?",
            options: [
              "Deltoid",
              "Triceps brachii",
              "Pectoralis major",
              "Supraspinatus",
            ],
            correctAnswer: "Supraspinatus",
          },
          {
            question:
              "Injury to the lower trunk of the brachial plexus (C8-T1) causes which condition?",
            options: ["Klumpke’s palsy", "Erb’s palsy", "Ape hand", "Wrist drop"],
            correctAnswer: "Klumpke’s palsy",
          },
          {
            question:
              "In Klumpke’s palsy, which muscles are most likely to be affected?",
            options: [
              "Intrinsic muscles of the hand",
              "Flexors of the arm",
              "Extensors of the arm",
              "Flexors of the forearm",
            ],
            correctAnswer: "Intrinsic muscles of the hand",
          },
          {
            question:
              "Fracture of the scaphoid bone can lead to avascular necrosis due to injury to which artery?",
            options: [
              "Radial artery",
              "Ulnar artery",
              "Brachial artery",
              "Axillary artery",
            ],
            correctAnswer: "Radial artery",
          },
          {
            question:
              "A fall on an outstretched hand can result in a fracture of the distal radius, also known as:",
            options: [
              "Colles’ fracture",
              "Smith’s fracture",
              "Bennett’s fracture",
              "Monteggia fracture",
            ],
            correctAnswer: "Colles’ fracture",
          },
          {
            question:
              "What condition results from thickening of the supraspinatus tendon or inflammation of the subacromial bursa, causing pain during abduction?",
            options: [
              "Painful arc syndrome",
              "Frozen shoulder",
              "Winging of scapula",
              "Erb’s palsy",
            ],
            correctAnswer: "Painful arc syndrome",
          },
          {
            question:
              "Which nerve is most likely to be compressed in cubital tunnel syndrome?",
            options: [
              "Ulnar nerve",
              "Radial nerve",
              "Median nerve",
              "Axillary nerve",
            ],
            correctAnswer: "Ulnar nerve",
          },
          {
            question:
              "A patient presents with pain and tenderness over the lateral epicondyle. This condition is known as:",
            options: [
              "Tennis elbow",
              "Golfer’s elbow",
              "Carpal tunnel syndrome",
              "Cubital tunnel syndrome",
            ],
            correctAnswer: "Tennis elbow",
          },
          {
            question:
              "Golfer’s elbow is characterized by pain and tenderness over which structure?",
            options: [
              "Medial epicondyle",
              "Lateral epicondyle",
              "Olecranon",
              "Radial head",
            ],
            correctAnswer: "Medial epicondyle",
          },
          {
            question:
              "Injury to the brachial artery during a supracondylar fracture of the humerus may result in which condition?",
            options: [
              "Volkmann’s ischemic contracture",
              "Frozen shoulder",
              "Carpal tunnel syndrome",
              "Wrist drop",
            ],
            correctAnswer: "Volkmann’s ischemic contracture",
          },
          {
            question:
              "Which structure is commonly compressed in thoracic outlet syndrome?",
            options: [
              "Brachial plexus",
              "Femoral nerve",
              "Radial nerve",
              "Median nerve",
            ],
            correctAnswer: "Brachial plexus",
          },
          {
            question:
              "Injury to the ulnar nerve at the elbow can result in which deformity of the hand?",
            options: [
              "Claw hand",
              "Ape hand",
              "Wrist drop",
              "Waiter’s tip deformity",
            ],
            correctAnswer: "Claw hand",
          },
          {
            question:
              "Damage to the radial nerve in the arm can result in which clinical condition?",
            options: [
              "Wrist drop",
              "Claw hand",
              "Ape hand",
              "Waiter’s tip deformity",
            ],
            correctAnswer: "Wrist drop",
          },
          {
            question:
              "Injury to the axillary nerve can result in difficulty performing which movement?",
            options: [
              "Abduction of the arm",
              "Flexion of the forearm",
              "Pronation of the forearm",
              "Extension of the wrist",
            ],
            correctAnswer: "Abduction of the arm",
          },
  
          {
            question:
              "The brachial plexus is formed by the ventral rami of which spinal nerves?",
            options: ["C5-T1", "C1-C4", "L1-L5", "C7-T3"],
            correctAnswer: "C5-T1",
          },
          {
            question:
              "The upper trunk of the brachial plexus is formed by the fusion of which nerve roots?",
            options: ["C5 and C6", "C6 and C7", "C7 and T1", "C8 and T1"],
            correctAnswer: "C5 and C6",
          },
          {
            question:
              "Which trunk of the brachial plexus gives rise to the suprascapular nerve?",
            options: [
              "Upper trunk",
              "Middle trunk",
              "Lower trunk",
              "Posterior cord",
            ],
            correctAnswer: "Upper trunk",
          },
          {
            question:
              "Which division of the brachial plexus forms the lateral cord?",
            options: [
              "Anterior divisions of the upper and middle trunks",
              "Posterior divisions of all trunks",
              "Anterior divisions of all trunks",
              "Anterior division of the lower trunk",
            ],
            correctAnswer: "Anterior divisions of the upper and middle trunks",
          },
          {
            question:
              "The posterior cord of the brachial plexus gives rise to which nerve?",
            options: [
              "Axillary nerve",
              "Median nerve",
              "Ulnar nerve",
              "Musculocutaneous nerve",
            ],
            correctAnswer: "Axillary nerve",
          },
          {
            question:
              "Which muscle is innervated by the musculocutaneous nerve, a branch of the lateral cord?",
            options: [
              "Biceps brachii",
              "Triceps brachii",
              "Deltoid",
              "Teres minor",
            ],
            correctAnswer: "Biceps brachii",
          },
          {
            question:
              "The radial nerve is a branch of which part of the brachial plexus?",
            options: [
              "Posterior cord",
              "Lateral cord",
              "Medial cord",
              "Upper trunk",
            ],
            correctAnswer: "Posterior cord",
          },
          {
            question:
              "Which nerve provides sensory innervation to the lateral aspect of the forearm?",
            options: [
              "Musculocutaneous nerve",
              "Median nerve",
              "Ulnar nerve",
              "Radial nerve",
            ],
            correctAnswer: "Musculocutaneous nerve",
          },
          {
            question:
              "Which nerve arises from the medial cord of the brachial plexus?",
            options: [
              "Ulnar nerve",
              "Axillary nerve",
              "Radial nerve",
              "Suprascapular nerve",
            ],
            correctAnswer: "Ulnar nerve",
          },
          {
            question:
              "Which nerve is responsible for flexion at the elbow and supination of the forearm?",
            options: [
              "Musculocutaneous nerve",
              "Radial nerve",
              "Median nerve",
              "Ulnar nerve",
            ],
            correctAnswer: "Musculocutaneous nerve",
          },
          {
            question:
              "The lateral cord contributes to the formation of which major nerve?",
            options: [
              "Median nerve",
              "Radial nerve",
              "Ulnar nerve",
              "Axillary nerve",
            ],
            correctAnswer: "Median nerve",
          },
          {
            question: "The long thoracic nerve arises from which nerve roots?",
            options: ["C5, C6, C7", "C6, C7, C8", "C8, T1", "T1, T2"],
            correctAnswer: "C5, C6, C7",
          },
          {
            question:
              "Damage to the long thoracic nerve results in which condition?",
            options: [
              "Winging of scapula",
              "Wrist drop",
              "Claw hand",
              "Erb’s palsy",
            ],
            correctAnswer: "Winging of scapula",
          },
          {
            question:
              "Erb’s palsy is associated with injury to which part of the brachial plexus?",
            options: [
              "Upper trunk (C5-C6)",
              "Lower trunk (C8-T1)",
              "Lateral cord",
              "Posterior cord",
            ],
            correctAnswer: "Upper trunk (C5-C6)",
          },
          {
            question:
              "Klumpke’s palsy is caused by injury to which part of the brachial plexus?",
            options: [
              "Lower trunk (C8-T1)",
              "Upper trunk (C5-C6)",
              "Posterior cord",
              "Lateral cord",
            ],
            correctAnswer: "Lower trunk (C8-T1)",
          },
          {
            question:
              "The medial cord gives rise to which of the following nerves?",
            options: [
              "Ulnar nerve",
              "Radial nerve",
              "Axillary nerve",
              "Musculocutaneous nerve",
            ],
            correctAnswer: "Ulnar nerve",
          },
          {
            question:
              "Which cord of the brachial plexus gives rise to the radial nerve?",
            options: [
              "Posterior cord",
              "Lateral cord",
              "Medial cord",
              "Upper trunk",
            ],
            correctAnswer: "Posterior cord",
          },
          {
            question:
              "The suprascapular nerve arises from which trunk of the brachial plexus?",
            options: [
              "Upper trunk",
              "Middle trunk",
              "Lower trunk",
              "Lateral cord",
            ],
            correctAnswer: "Upper trunk",
          },
          {
            question:
              "Which nerve innervates the deltoid and teres minor muscles?",
            options: [
              "Axillary nerve",
              "Radial nerve",
              "Ulnar nerve",
              "Median nerve",
            ],
            correctAnswer: "Axillary nerve",
          },
          {
            question:
              "The cords of the brachial plexus are named based on their relationship to which structure?",
            options: [
              "Axillary artery",
              "Subclavian artery",
              "Axillary vein",
              "Clavicle",
            ],
            correctAnswer: "Axillary artery",
          },
        ],
      },
  
      
      
  
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////   
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////upper limbs Clinical Cases//////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      {
        category: "Upper Limbs: Clinical Cases",
        questions: [
          {
            question:
              "A 55-year-old woman presents with severe pain in the flexor muscles of the forearm and cyanosis of the fingers. What is the most likely diagnosis?",
            options: [
              "Colles’ fracture",
              "Scaphoid fracture",
              "Bennett’s fracture",
              "Volkmann’s ischemic contracture",
              "Boxer’s fracture",
            ],
            correctAnswer: "Volkmann’s ischemic contracture",
          },
          {
            question:
              "A 62-year-old man fractures his pisiform bone. Which nerve is most likely affected?",
            options: ["Ulnar", "Radial", "Median", "Deep ulnar", "Deep radial"],
            correctAnswer: "Ulnar",
          },
          {
            question:
              "A 32-year-old woman has a “benediction attitude” of the hand after an elbow injury. Which nerve is likely injured?",
            options: [
              "Median nerve",
              "Radial nerve",
              "Ulnar nerve",
              "Median and radial nerves",
              "Median, ulnar, and radial nerves",
            ],
            correctAnswer: "Median nerve",
          },
          {
            question:
              "A 54-year-old man is undergoing a coronary bypass surgery using a radial artery graft. What test should be performed prior to the operation?",
            options: [
              "Allen test",
              "Triceps reflex",
              "Tinel test",
              "Brachioradialis reflex",
              "Biceps reflex",
            ],
            correctAnswer: "Allen test",
          },
          {
            question:
              "A 34-year-old man presents with weak abduction and adduction of his fingers and decreased sensation in the palmar surface of the fourth and fifth fingers. Which nerve is most likely compressed?",
            options: [
              "Median",
              "Ulnar",
              "Radial",
              "Deep radial",
              "Musculocutaneous",
            ],
            correctAnswer: "Ulnar",
          },
          {
            question:
              "A 22-year-old woman suffers a radial nerve injury at the wrist. What muscle is primarily affected?",
            options: [
              "Extensor carpi radialis longus",
              "Brachioradialis",
              "Supinator",
              "Abductor pollicis longus",
              "Extensor carpi ulnaris",
            ],
            correctAnswer: "Extensor carpi radialis longus",
          },
          {
            question:
              "A 60-year-old man suffers a fracture to the midshaft of the humerus. Which structure is most likely affected?",
            options: [
              "Median nerve and brachial artery",
              "Radial nerve and profunda brachii artery",
              "Axillary nerve and posterior humeral circumflex artery",
              "Ulnar nerve and superior ulnar collateral artery",
              "Musculocutaneous nerve and inferior ulnar collateral artery",
            ],
            correctAnswer: "Radial nerve and profunda brachii artery",
          },
          {
            question:
              "A 19-year-old male suffers from shoulder pain after playing basketball. Which muscle is most likely injured if the patient has difficulty abducting the arm?",
            options: [
              "Supraspinatus",
              "Infraspinatus",
              "Teres major",
              "Subscapularis",
              "Latissimus dorsi",
            ],
            correctAnswer: "Supraspinatus",
          },
          {
            question:
              "A 42-year-old woman has a positive Froment sign. Weakness of which muscle is responsible for this?",
            options: [
              "Flexor pollicis longus",
              "Adductor pollicis",
              "Flexor carpi radialis",
              "Flexor digiti minimi",
              "Extensor indicis",
            ],
            correctAnswer: "Adductor pollicis",
          },
          {
            question:
              "A 48-year-old woman presents with carpal tunnel syndrome. Which muscles are most likely weakened?",
            options: [
              "Thenar muscles",
              "Hypothenar muscles",
              "Lumbricals III and IV",
              "Dorsal interossei",
              "Palmar interossei",
            ],
            correctAnswer: "Thenar muscles",
          },
          {
            question:
              "A 23-year-old man falls asleep with his arm wedged into his axilla. He is unable to extend his wrist or fingers. Which nerve is most likely affected?",
            options: [
              "Radial nerve",
              "Median nerve",
              "Ulnar nerve",
              "Lateral cord of the brachial plexus",
              "Medial cord of the brachial plexus",
            ],
            correctAnswer: "Radial nerve",
          },
          {
            question:
              "A 17-year-old girl develops compartment syndrome affecting her interosseous membrane. Which joint is likely affected?",
            options: [
              "Radioulnar",
              "Anular",
              "Interosseous",
              "Radial collateral",
              "Ulnar collateral",
            ],
            correctAnswer: "Radioulnar",
          },
          {
            question:
              "A 41-year-old woman is scheduled for a latissimus dorsi flap procedure. Which artery forms the vascular base for the flap?",
            options: [
              "Circumflex scapular artery",
              "Dorsal scapular artery",
              "Transverse cervical artery",
              "Lateral thoracic artery",
              "Thoracoacromial artery",
            ],
            correctAnswer: "Circumflex scapular artery",
          },
          {
            question:
              "A 60-year-old male butcher partially divides his ulnar nerve. Which action is most likely lost?",
            options: [
              "Flexion of the fifth digit’s proximal interphalangeal joint",
              "Adduction of the fifth digit",
              "Abduction of the thumb",
              "Opposition of the thumb",
              "Extension of the thumb",
            ],
            correctAnswer: "Adduction of the fifth digit",
          },
          {
            question:
              "A 29-year-old woman suffers a fracture at the spiral groove of the humerus. Three days later, her arm appears pale and cool with absent radial pulse. Which condition is most likely?",
            options: [
              "Compartment syndrome",
              "Thoracic outlet syndrome",
              "Raynaud’s disease",
              "Venous thrombosis",
              "Injury of the radial nerve",
            ],
            correctAnswer: "Compartment syndrome",
          },
          {
            question:
              "A 25-year-old man fractures the scaphoid bone in the anatomical snuffbox. Which bone is fractured?",
            options: [
              "Triquetral",
              "Scaphoid",
              "Capitate",
              "Hamate",
              "Trapezoid",
            ],
            correctAnswer: "Scaphoid",
          },
          {
            question:
              "A 35-year-old woman suffers from painful shoulder due to supraspinatus tendinopathy. What is the painful arc range during abduction?",
            options: [
              "70° to 140°",
              "15° to 140°",
              "40° to 140°",
              "0° to 15°",
              "0° to 140°",
            ],
            correctAnswer: "70° to 140°",
          },
          {
            question:
              "A 22-year-old man suffers from Erb-Duchenne palsy. Which physical examination finding is most likely?",
            options: [
              "Inability to laterally rotate the arm",
              "Winged scapula",
              "Loss of sensation in the dorsum of the hand",
              "Paraesthesia in the medial arm",
              "Paralysis of intrinsic hand muscles",
            ],
            correctAnswer: "Inability to laterally rotate the arm",
          },
          {
            question:
              "A 25-year-old woman fractures her radius near the pronator teres muscle. Which muscle is responsible for the lateral deviation of the proximal radius?",
            options: [
              "Pronator teres",
              "Brachioradialis",
              "Supinator",
              "Brachialis",
              "Pronator quadratus",
            ],
            correctAnswer: "Pronator teres",
          },
          {
            question:
              "A 45-year-old woman is bitten by a dog on the lateral side of her hand. Two days later, which lymphatic group is most likely involved?",
            options: [
              "Humeral",
              "Pectoral",
              "Central",
              "Subscapular",
              "Parasternal",
            ],
            correctAnswer: "Humeral",
          },
  
          {
            question:
              "A 55-year-old male firefighter presents with winging of the scapula after blunt trauma to his right axilla. Which part of the brachial plexus is likely injured?",
            options: [
              "Cords",
              "Divisions",
              "Roots",
              "Terminal branches",
              "Trunks",
            ],
            correctAnswer: "Roots",
          },
          {
            question:
              "A 36-year-old man with a deep knife wound on the medial side of his distal forearm is unable to hold a piece of paper between his fingers. Which nerve is most likely injured?",
            options: [
              "Axillary",
              "Median",
              "Musculocutaneous",
              "Radial",
              "Ulnar",
            ],
            correctAnswer: "Ulnar",
          },
          {
            question:
              "A 22-year-old woman is admitted unconscious, and a nurse checks her radial pulse to determine her heart rate. This pulse is felt lateral to which tendon?",
            options: [
              "Palmaris longus",
              "Flexor pollicis longus",
              "Flexor digitorum profundus",
              "Flexor carpi radialis",
              "Flexor digitorum superficialis",
            ],
            correctAnswer: "Flexor carpi radialis",
          },
          {
            question:
              "A 42-year-old woman presents with pain in her right wrist due to a carpal bone dislocation. Which carpal bone is most commonly dislocated?",
            options: ["Capitate", "Lunate", "Scaphoid", "Pisiform", "Triquetrum"],
            correctAnswer: "Lunate",
          },
          {
            question:
              "A 24-year-old woman presents with numbness and tingling in her hand, diagnosed as carpal tunnel syndrome. Which muscles are most typically weakened in this condition?",
            options: [
              "Dorsal interossei",
              "Lumbricals III and IV",
              "Thenar",
              "Palmar interossei",
              "Hypothenar",
            ],
            correctAnswer: "Thenar",
          },
          {
            question:
              "A 60-year-old man presents with a midshaft humeral fracture. Which pair of structures is most likely injured at the fracture site?",
            options: [
              "Median nerve and brachial artery",
              "Axillary nerve and posterior humeral circumflex artery",
              "Radial nerve and deep brachial artery",
              "Suprascapular nerve and artery",
              "Long thoracic nerve and lateral thoracic artery",
            ],
            correctAnswer: "Radial nerve and deep brachial artery",
          },
          {
            question:
              "A 45-year-old man suffers from a medial epicondyle fracture and torn ulnar nerve. Which muscle is most likely paralyzed?",
            options: [
              "Flexor digitorum superficialis",
              "Biceps brachii",
              "Brachioradialis",
              "Flexor carpi ulnaris",
              "Supinator",
            ],
            correctAnswer: "Flexor carpi ulnaris",
          },
          {
            question:
              "A 22-year-old male dislocates his shoulder during soccer. Post-reduction, he cannot abduct his arm normally. Which muscle is most likely damaged?",
            options: [
              "Coracobrachialis",
              "Long head of the triceps",
              "Pectoralis minor",
              "Supraspinatus",
              "Teres major",
            ],
            correctAnswer: "Supraspinatus",
          },
          {
            question:
              "A 48-year-old male stenographer suffers from carpal tunnel syndrome. Which nerve is most likely compressed?",
            options: [
              "Ulnar",
              "Radial",
              "Recurrent median",
              "Median",
              "Posterior interosseous",
            ],
            correctAnswer: "Median",
          },
          {
            question:
              "A 41-year-old woman with an upper trunk brachial plexus injury is diagnosed with Erb-Duchenne palsy. Which of the following conditions is expected?",
            options: [
              "Winged scapula",
              "Inability to laterally rotate the arm",
              "Paralysis of intrinsic muscles of the hand",
              "Paraesthesia in the medial arm",
              "Loss of sensation in the dorsum of the hand",
            ],
            correctAnswer: "Inability to laterally rotate the arm",
          },
          {
            question:
              "A 45-year-old woman is bitten by a dog and develops fever and swollen lymph nodes in the humeral group. Which lymphatic group is involved?",
            options: [
              "Central",
              "Humeral",
              "Pectoral",
              "Subscapular",
              "Parasternal",
            ],
            correctAnswer: "Humeral",
          },
          {
            question:
              "A 23-year-old man presents with a swollen forearm due to compartment syndrome originating at the interosseous membrane. Which joint is most likely affected?",
            options: [
              "Radioulnar",
              "Anular",
              "Interosseous",
              "Radial collateral",
              "Ulnar collateral",
            ],
            correctAnswer: "Radioulnar",
          },
          {
            question:
              "A 24-year-old woman presents with severe pain in her upper limb and tingling in the fourth and fifth digits. The problem worsens with overhead arm use, and radiographic studies reveal a cervical rib. Which structure is most likely compressed?",
            options: [
              "Axillary artery",
              "Upper trunk of brachial plexus",
              "Subclavian artery",
              "Lower trunk of brachial plexus",
              "Brachiocephalic artery",
            ],
            correctAnswer: "Lower trunk of brachial plexus",
          },
          {
            question:
              "A 22-year-old man fractures his radius near the pronator teres. Which muscle is responsible for the lateral deviation of the proximal radius?",
            options: [
              "Pronator teres",
              "Brachioradialis",
              "Supinator",
              "Brachialis",
              "Pronator quadratus",
            ],
            correctAnswer: "Pronator teres",
          },
          {
            question:
              "A 19-year-old man suffers a deep laceration on his upper limb. He can extend his metacarpophalangeal joints but has weak extension of the interphalangeal joints. Which nerve is injured?",
            options: [
              "Radial nerve at the elbow",
              "Median nerve at the wrist",
              "Ulnar nerve in midforearm",
              "Deep branch of ulnar nerve",
              "Recurrent branch of median nerve",
            ],
            correctAnswer: "Deep branch of ulnar nerve",
          },
          {
            question:
              "A 68-year-old woman falls and sustains a distal radius fracture. What is this type of injury commonly called?",
            options: [
              "Colles’ fracture",
              "Scaphoid fracture",
              "Bennett’s fracture",
              "Smith’s fracture",
              "Boxer’s fracture",
            ],
            correctAnswer: "Smith’s fracture",
          },
          {
            question:
              "A 55-year-old male presents with partial paralysis of his right diaphragm and winging of his right scapula after trauma. Which nerve is injured?",
            options: [
              "Long thoracic",
              "Axillary",
              "Radial",
              "Musculocutaneous",
              "Thoracodorsal",
            ],
            correctAnswer: "Long thoracic",
          },
          {
            question:
              "A 45-year-old male construction worker presents with shoulder drooping and weakness in turning his head. A shallow stab wound is observed in the posterior triangle of his neck. Which nerve is likely injured?",
            options: [
              "Suprascapular nerve",
              "Dorsal scapular nerve",
              "Upper trunk of the brachial plexus",
              "Spinal accessory nerve",
              "Thoracodorsal nerve",
            ],
            correctAnswer: "Spinal accessory nerve",
          },
          {
            question:
              "A 35-year-old female tennis player is diagnosed with rotator cuff injury. Which ligament is most likely involved?",
            options: [
              "Acromioclavicular ligament",
              "Coracohumeral ligament",
              "Transverse scapular ligament",
              "Glenohumeral ligament",
              "Coracoacromial ligament",
            ],
            correctAnswer: "Coracoacromial ligament",
          },
          {
            question:
              "A 24-year-old woman was bitten at the base of her thumb by a dog, resulting in an infected radial bursa. Which tendon is most likely affected?",
            options: [
              "Flexor digitorum profundus",
              "Flexor digitorum superficialis",
              "Flexor pollicis longus",
              "Flexor carpi radialis",
              "Flexor pollicis brevis",
            ],
            correctAnswer: "Flexor pollicis longus",
          },
  
          {
            question:
              "A 35-year-old patient has a small but painful tumor under the nail of the little finger. Which of the following nerves would have to be anesthetized for a painless removal of the tumor?",
            options: [
              "Superficial radial",
              "Common palmar digital of median",
              "Common palmar digital of ulnar",
              "Deep radial",
              "Recurrent branch of median",
            ],
            correctAnswer: "Common palmar digital of ulnar",
          },
          {
            question:
              "A 25-year-old male athlete is admitted after a bad landing in the pole vault. Radiographic examination reveals a fractured carpal bone in the floor of the anatomic snuffbox. Which bone has most likely been fractured?",
            options: [
              "Triquetral",
              "Scaphoid",
              "Capitate",
              "Hamate",
              "Trapezoid",
            ],
            correctAnswer: "Scaphoid",
          },
          {
            question:
              "A 19-year-old male dislocates his shoulder while playing soccer. After reduction, he cannot abduct the arm normally. Which muscle is most likely damaged?",
            options: [
              "Coracobrachialis",
              "Long head of triceps",
              "Pectoralis minor",
              "Supraspinatus",
              "Teres major",
            ],
            correctAnswer: "Supraspinatus",
          },
          {
            question:
              "A 55-year-old woman presents with pain and fixed flexion of the fingers. What is the most likely diagnosis?",
            options: [
              "Colles’ fracture",
              "Scaphoid fracture",
              "Bennett’s fracture",
              "Volkmann’s ischemic contracture",
              "Boxer’s fracture",
            ],
            correctAnswer: "Volkmann’s ischemic contracture",
          },
          {
            question:
              "A 60-year-old male presents with a midshaft humeral fracture. What structures are most likely injured?",
            options: [
              "Median nerve and brachial artery",
              "Radial nerve and profunda brachii artery",
              "Axillary nerve and posterior humeral circumflex artery",
              "Ulnar nerve and superior ulnar collateral artery",
              "Musculocutaneous nerve and inferior ulnar collateral artery",
            ],
            correctAnswer: "Radial nerve and profunda brachii artery",
          },
          {
            question:
              "A 48-year-old woman presents with carpal tunnel syndrome. Which muscles are typically weakened?",
            options: [
              "Thenar muscles",
              "Hypothenar muscles",
              "Lumbricals III and IV",
              "Dorsal interossei",
              "Palmar interossei",
            ],
            correctAnswer: "Thenar muscles",
          },
          {
            question:
              "A 22-year-old man cannot extend his wrist or fingers after his arm was wedged into his axilla. What is the most likely nerve injured?",
            options: [
              "Radial nerve",
              "Median nerve",
              "Ulnar nerve",
              "Lateral cord of the brachial plexus",
              "Medial cord of the brachial plexus",
            ],
            correctAnswer: "Radial nerve",
          },
          {
            question:
              "A 32-year-old man is admitted with a deep knife wound on the medial side of the distal forearm. He is unable to hold a piece of paper between his fingers. Which nerve is most likely injured?",
            options: [
              "Axillary",
              "Median",
              "Musculocutaneous",
              "Radial",
              "Ulnar",
            ],
            correctAnswer: "Ulnar",
          },
          {
            question:
              "A 19-year-old man falls and suffers a midshaft humeral fracture. He cannot extend his wrist or metacarpophalangeal joints. Which nerve is most likely injured?",
            options: [
              "Median",
              "Ulnar",
              "Radial",
              "Musculocutaneous",
              "Axillary",
            ],
            correctAnswer: "Radial",
          },
          {
            question:
              "A 41-year-old woman has a positive Froment sign. Which muscle weakness is responsible?",
            options: [
              "Flexor pollicis longus",
              "Adductor pollicis",
              "Flexor digiti minimi",
              "Flexor carpi radialis",
              "Extensor indicis",
            ],
            correctAnswer: "Adductor pollicis",
          },
          {
            question:
              "A 45-year-old woman is bitten on the hand and develops a swollen lymph node. Which group of lymph nodes is most likely affected?",
            options: [
              "Central",
              "Humeral",
              "Pectoral",
              "Subscapular",
              "Parasternal",
            ],
            correctAnswer: "Humeral",
          },
          {
            question:
              "A 60-year-old woman suffers from a fracture of the pisiform bone. Which nerve is most likely injured?",
            options: ["Ulnar", "Radial", "Median", "Deep ulnar", "Deep radial"],
            correctAnswer: "Ulnar",
          },
          {
            question:
              "A 55-year-old man with winging of the scapula also has partial paralysis of his diaphragm. Which part of the brachial plexus is most likely injured?",
            options: [
              "Cords",
              "Divisions",
              "Roots",
              "Terminal branches",
              "Trunks",
            ],
            correctAnswer: "Roots",
          },
          {
            question:
              "A 54-year-old woman has absence of her brachioradialis reflex. Which spinal nerve is responsible?",
            options: ["C5", "C6", "C7", "C8", "T1"],
            correctAnswer: "C6",
          },
          {
            question:
              "A 55-year-old woman presents with pain in the forearm and cyanosis of the fingers after a car crash. What is the most likely diagnosis?",
            options: [
              "Colles’ fracture",
              "Scaphoid fracture",
              "Bennett’s fracture",
              "Volkmann’s ischemic contracture",
              "Boxer’s fracture",
            ],
            correctAnswer: "Volkmann’s ischemic contracture",
          },
          {
            question:
              "A 42-year-old man suffers from thoracic outlet syndrome. Which structure is most likely compressed?",
            options: [
              "Axillary artery",
              "Upper trunk of brachial plexus",
              "Subclavian artery",
              "Lower trunk of brachial plexus",
              "Brachiocephalic artery",
            ],
            correctAnswer: "Lower trunk of brachial plexus",
          },
          {
            question:
              "A 60-year-old man presents with a “benediction attitude” of the hand. Which nerve is most likely injured?",
            options: [
              "Median nerve",
              "Radial nerve",
              "Ulnar nerve",
              "Median and radial nerves",
              "Median, ulnar, and radial nerves",
            ],
            correctAnswer: "Median nerve",
          },
          {
            question:
              "A 45-year-old male construction worker presents with shoulder drooping after being stabbed in the posterior triangle of his neck. Which nerve is most likely injured?",
            options: [
              "Suprascapular nerve",
              "Dorsal scapular nerve",
              "Upper trunk of the brachial plexus",
              "Spinal accessory nerve",
              "Thoracodorsal nerve",
            ],
            correctAnswer: "Spinal accessory nerve",
          },
          {
            question:
              "A 25-year-old man fractures his scaphoid bone in the anatomical snuffbox. Which bone is fractured?",
            options: [
              "Triquetral",
              "Scaphoid",
              "Capitate",
              "Hamate",
              "Trapezoid",
            ],
            correctAnswer: "Scaphoid",
          },
          {
            question:
              "A 50-year-old woman suffers from a rupture of the long head of the biceps tendon. Where is the rupture most likely located?",
            options: [
              "Intertubercular groove",
              "Midportion of the biceps muscle",
              "Junction with short head of the biceps muscle",
              "Proximal end of the combined biceps muscle",
              "Bony insertion of the muscle",
            ],
            correctAnswer: "Intertubercular groove",
          },
  
          {
            question:
              "A 55-year-old man presents with winging of the scapula and difficulty elevating his arm after an injury. Which nerve is most likely damaged?",
            options: [
              "Long thoracic nerve",
              "Axillary nerve",
              "Radial nerve",
              "Spinal accessory nerve",
              "Musculocutaneous nerve",
            ],
            correctAnswer: "Long thoracic nerve",
          },
          {
            question:
              "A 32-year-old male has difficulty extending his wrist and fingers following a humeral fracture. Which nerve is likely injured?",
            options: [
              "Radial nerve",
              "Median nerve",
              "Ulnar nerve",
              "Musculocutaneous nerve",
              "Axillary nerve",
            ],
            correctAnswer: "Radial nerve",
          },
          {
            question:
              "A 24-year-old medical student was bitten by a dog on her thumb, causing an infection in the radial bursa. Which tendon is likely affected?",
            options: [
              "Flexor digitorum profundus",
              "Flexor digitorum superficialis",
              "Flexor pollicis longus",
              "Flexor carpi radialis",
              "Flexor pollicis brevis",
            ],
            correctAnswer: "Flexor pollicis longus",
          },
          {
            question:
              "A 45-year-old male is admitted with pain and weakness following an ulnar nerve injury. Which action is most likely lost?",
            options: [
              "Opposition of the thumb",
              "Flexion of the fifth digit",
              "Adduction of the fifth digit",
              "Abduction of the thumb",
              "Extension of the thumb",
            ],
            correctAnswer: "Adduction of the fifth digit",
          },
          {
            question:
              "A 68-year-old woman fell and fractured her distal radius. What is the common name for this type of injury?",
            options: [
              "Colles’ fracture",
              "Scaphoid fracture",
              "Smith’s fracture",
              "Boxer’s fracture",
              "Bennett’s fracture",
            ],
            correctAnswer: "Smith’s fracture",
          },
          {
            question:
              "A 60-year-old male presents with a fracture of the midshaft of the humerus. Which structure is most likely injured at this site?",
            options: [
              "Axillary nerve and posterior humeral circumflex artery",
              "Radial nerve and profunda brachii artery",
              "Median nerve and brachial artery",
              "Ulnar nerve and superior ulnar collateral artery",
              "Musculocutaneous nerve and inferior ulnar collateral artery",
            ],
            correctAnswer: "Radial nerve and profunda brachii artery",
          },
          {
            question:
              "A 32-year-old male suffers from carpal tunnel syndrome. Which muscle is most likely weakened?",
            options: [
              "Thenar muscles",
              "Hypothenar muscles",
              "Lumbricals III and IV",
              "Palmar interossei",
              "Dorsal interossei",
            ],
            correctAnswer: "Thenar muscles",
          },
          {
            question:
              "A 48-year-old woman suffers from weakness of abduction and adduction of the fingers, with sensory loss in the fourth and fifth fingers. Which nerve is most likely compressed?",
            options: [
              "Radial nerve",
              "Median nerve",
              "Ulnar nerve",
              "Axillary nerve",
              "Musculocutaneous nerve",
            ],
            correctAnswer: "Ulnar nerve",
          },
          {
            question:
              "A 42-year-old woman presents with pain in her wrist due to a dislocation. Which carpal bone is most likely dislocated?",
            options: ["Scaphoid", "Capitate", "Lunate", "Pisiform", "Triquetrum"],
            correctAnswer: "Lunate",
          },
          {
            question:
              "A 22-year-old male dislocates his shoulder while playing soccer and has difficulty abducting the arm. Which muscle is most likely injured?",
            options: [
              "Teres major",
              "Supraspinatus",
              "Long head of triceps",
              "Coracobrachialis",
              "Pectoralis minor",
            ],
            correctAnswer: "Supraspinatus",
          },
          {
            question:
              "A 36-year-old man suffers a deep laceration on the medial side of his forearm and cannot hold a piece of paper between his fingers. Which nerve is most likely injured?",
            options: [
              "Axillary nerve",
              "Median nerve",
              "Radial nerve",
              "Musculocutaneous nerve",
              "Ulnar nerve",
            ],
            correctAnswer: "Ulnar nerve",
          },
          {
            question:
              "A 25-year-old male athlete fractures his scaphoid bone. Which structure forms the floor of the anatomic snuffbox where the fracture is most palpable?",
            options: [
              "Scaphoid",
              "Triquetral",
              "Capitate",
              "Hamate",
              "Trapezoid",
            ],
            correctAnswer: "Scaphoid",
          },
          {
            question:
              "A 55-year-old woman presents with pain and inability to flex the distal interphalangeal joints of the fourth and fifth digits. Which muscle is most likely affected?",
            options: [
              "Flexor digitorum profundus",
              "Flexor digitorum superficialis",
              "Lumbricals",
              "Interossei",
              "Flexor carpi ulnaris",
            ],
            correctAnswer: "Flexor digitorum profundus",
          },
          {
            question:
              "A 45-year-old woman falls and suffers a humeral shaft fracture. Which nerve is most at risk of injury at the midshaft?",
            options: [
              "Radial nerve",
              "Ulnar nerve",
              "Median nerve",
              "Axillary nerve",
              "Musculocutaneous nerve",
            ],
            correctAnswer: "Radial nerve",
          },
          {
            question:
              "A 23-year-old woman presents with a swollen, painful forearm. MRI reveals compartment syndrome in the interosseous membrane. Which type of joint is likely affected?",
            options: [
              "Synchondrosis",
              "Symphysis",
              "Trochoid",
              "Ginglymus",
              "Synarthrosis",
            ],
            correctAnswer: "Trochoid",
          },
          {
            question:
              "A 19-year-old male suffers from Erb-Duchenne palsy after a motorcycle accident. Which motion is most likely impaired?",
            options: [
              "Lateral rotation of the arm",
              "Abduction of the arm",
              "Flexion of the fingers",
              "Pronation of the forearm",
              "Supination of the forearm",
            ],
            correctAnswer: "Lateral rotation of the arm",
          },
          {
            question:
              "A 48-year-old stenographer presents with atrophy of the thenar muscles. Which nerve is most likely compressed?",
            options: [
              "Ulnar nerve",
              "Radial nerve",
              "Median nerve",
              "Axillary nerve",
              "Musculocutaneous nerve",
            ],
            correctAnswer: "Median nerve",
          },
          {
            question:
              "A 33-year-old man dislocates his shoulder during weightlifting and experiences weakness in shoulder abduction. Which nerve is likely injured?",
            options: [
              "Axillary nerve",
              "Radial nerve",
              "Median nerve",
              "Ulnar nerve",
              "Musculocutaneous nerve",
            ],
            correctAnswer: "Axillary nerve",
          },
          {
            question:
              "A 60-year-old man with pain in his wrist is diagnosed with carpal tunnel syndrome. Which nerve is most commonly compressed in this condition?",
            options: [
              "Radial nerve",
              "Median nerve",
              "Ulnar nerve",
              "Musculocutaneous nerve",
              "Axillary nerve",
            ],
            correctAnswer: "Median nerve",
          },
          {
            question:
              "A 23-year-old man presents with radial nerve palsy and cannot extend his wrist. Which muscle is primarily affected?",
            options: [
              "Extensor carpi radialis longus",
              "Brachioradialis",
              "Abductor pollicis longus",
              "Supinator",
              "Flexor carpi ulnaris",
            ],
            correctAnswer: "Extensor carpi radialis longus",
          },
  
          {
            question:
              "A 45-year-old man is admitted with pain and weakness in his arm. He cannot abduct his arm after a shoulder dislocation. Which nerve is most likely injured?",
            options: [
              "Axillary nerve",
              "Radial nerve",
              "Median nerve",
              "Ulnar nerve",
              "Musculocutaneous nerve",
            ],
            correctAnswer: "Axillary nerve",
          },
          {
            question:
              "A 19-year-old male dislocates his shoulder and tears a muscle. Which muscle is most likely injured if he cannot abduct his arm normally?",
            options: [
              "Supraspinatus",
              "Coracobrachialis",
              "Teres major",
              "Long head of the triceps",
              "Pectoralis minor",
            ],
            correctAnswer: "Supraspinatus",
          },
          {
            question:
              "A 48-year-old woman presents with pain in her wrist after a fall. Radiographic studies reveal dislocation of the lunate bone. Which carpal bone is most commonly dislocated?",
            options: ["Lunate", "Scaphoid", "Capitate", "Pisiform", "Triquetrum"],
            correctAnswer: "Lunate",
          },
          {
            question:
              "A 32-year-old man fractures the shaft of his humerus. He cannot extend his wrist or fingers. Which nerve is most likely injured?",
            options: [
              "Radial nerve",
              "Ulnar nerve",
              "Median nerve",
              "Axillary nerve",
              "Musculocutaneous nerve",
            ],
            correctAnswer: "Radial nerve",
          },
          {
            question:
              "A 41-year-old woman is scheduled for a latissimus dorsi muscle flap. Which artery forms the vascular base for this flap?",
            options: [
              "Circumflex scapular artery",
              "Dorsal scapular artery",
              "Transverse cervical artery",
              "Lateral thoracic artery",
              "Thoracoacromial artery",
            ],
            correctAnswer: "Circumflex scapular artery",
          },
          {
            question:
              "A 55-year-old male suffers winging of the scapula after trauma. Which nerve is likely injured?",
            options: [
              "Long thoracic nerve",
              "Axillary nerve",
              "Radial nerve",
              "Musculocutaneous nerve",
              "Thoracodorsal nerve",
            ],
            correctAnswer: "Long thoracic nerve",
          },
          {
            question:
              "A 34-year-old man presents with pain in his thumb after an injury. MRI reveals rupture of the ulnar collateral ligament of the thumb. What is the clinical name for this condition?",
            options: [
              "Gamekeeper’s thumb",
              "De Quervain’s syndrome",
              "Boxer’s thumb",
              "Bennett’s fracture",
              "Navicular bone fracture",
            ],
            correctAnswer: "Gamekeeper’s thumb",
          },
          {
            question:
              "A 50-year-old woman ruptures the long tendon of the biceps brachii. Where is this rupture most likely located?",
            options: [
              "Intertubercular groove",
              "Midportion of the biceps muscle",
              "Junction with short head of the biceps muscle",
              "Proximal end of the biceps muscle",
              "Bony insertion of the muscle",
            ],
            correctAnswer: "Intertubercular groove",
          },
          {
            question:
              "A 29-year-old man sustains a midshaft humeral fracture. He cannot extend his wrist or metacarpophalangeal joints. Which nerve is injured?",
            options: [
              "Radial nerve",
              "Ulnar nerve",
              "Median nerve",
              "Axillary nerve",
              "Musculocutaneous nerve",
            ],
            correctAnswer: "Radial nerve",
          },
          {
            question:
              "A 45-year-old man suffers a fracture of the medial epicondyle and a torn ulnar nerve. Which muscle is most likely paralyzed?",
            options: [
              "Flexor carpi ulnaris",
              "Biceps brachii",
              "Flexor digitorum superficialis",
              "Brachioradialis",
              "Supinator",
            ],
            correctAnswer: "Flexor carpi ulnaris",
          },
          {
            question:
              "A 19-year-old male has a fractured scaphoid bone. Where is the fracture most palpable?",
            options: [
              "Anatomic snuffbox",
              "Palmar surface of the hand",
              "Flexor retinaculum",
              "Dorsal aspect of the wrist",
              "Thenar eminence",
            ],
            correctAnswer: "Anatomic snuffbox",
          },
          {
            question:
              "A 22-year-old man is admitted after a motorcycle accident with weakness in his forearm and hand muscles. Which spinal levels are most likely involved in this injury?",
            options: ["C8, T1", "C5, C6", "C5, C6, C7", "C7, T1", "C6, T1"],
            correctAnswer: "C8, T1",
          },
          {
            question:
              "A 60-year-old man presents with a midshaft humeral fracture. Which structure is most likely affected?",
            options: [
              "Radial nerve and profunda brachii artery",
              "Median nerve and brachial artery",
              "Axillary nerve and posterior humeral circumflex artery",
              "Ulnar nerve and superior ulnar collateral artery",
              "Musculocutaneous nerve and inferior ulnar collateral artery",
            ],
            correctAnswer: "Radial nerve and profunda brachii artery",
          },
          {
            question:
              "A 24-year-old woman suffers a shoulder dislocation. Which nerve is most likely injured?",
            options: [
              "Axillary nerve",
              "Radial nerve",
              "Median nerve",
              "Ulnar nerve",
              "Musculocutaneous nerve",
            ],
            correctAnswer: "Axillary nerve",
          },
          {
            question:
              "A 54-year-old man complains of numbness and tingling in his hand, diagnosed as carpal tunnel syndrome. Which muscles are most typically weakened?",
            options: [
              "Thenar muscles",
              "Hypothenar muscles",
              "Lumbricals III and IV",
              "Palmar interossei",
              "Dorsal interossei",
            ],
            correctAnswer: "Thenar muscles",
          },
          {
            question:
              "A 36-year-old man suffers a deep knife wound to the medial side of his forearm and cannot hold a piece of paper between his fingers. Which nerve is most likely injured?",
            options: [
              "Ulnar nerve",
              "Radial nerve",
              "Median nerve",
              "Axillary nerve",
              "Musculocutaneous nerve",
            ],
            correctAnswer: "Ulnar nerve",
          },
          {
            question:
              "A 55-year-old man has difficulty flexing the distal interphalangeal joints of his fourth and fifth digits after a laceration. Which muscle is most likely affected?",
            options: [
              "Flexor digitorum profundus",
              "Flexor digitorum superficialis",
              "Lumbricals",
              "Interossei",
              "Flexor carpi ulnaris",
            ],
            correctAnswer: "Flexor digitorum profundus",
          },
          {
            question:
              "A 45-year-old man sustains a distal radius fracture. Which name is most commonly applied to this type of injury?",
            options: [
              "Colles’ fracture",
              "Smith’s fracture",
              "Boxer’s fracture",
              "Bennett’s fracture",
              "Scaphoid fracture",
            ],
            correctAnswer: "Colles’ fracture",
          },
          {
            question:
              "A 23-year-old woman develops numbness in her hand, primarily affecting the fourth and fifth digits. MRI reveals a cervical rib. Which structure is most likely compressed?",
            options: [
              "Lower trunk of the brachial plexus",
              "Upper trunk of the brachial plexus",
              "Axillary artery",
              "Subclavian artery",
              "Brachiocephalic artery",
            ],
            correctAnswer: "Lower trunk of the brachial plexus",
          },
          {
            question:
              "A 60-year-old woman presents with winging of the scapula after surgery. Which nerve was most likely injured?",
            options: [
              "Long thoracic nerve",
              "Axillary nerve",
              "Radial nerve",
              "Musculocutaneous nerve",
              "Thoracodorsal nerve",
            ],
            correctAnswer: "Long thoracic nerve",
          },
        ],
      },
  
      // end of clinical cases in upper limbs
  
  
  
  
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
  
  
  
  
  