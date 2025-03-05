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
  
  { question: "Who among the following was a French philosopher and one of the founders of Sociology?", options: ["Herbert Spencer", "Auguste Comte", "Max Weber", "Karl Marx"], correctAnswer: "Auguste Comte", explanation: "Auguste Comte, a French philosopher, is recognized as one of the founders of Sociology." },

{ question: "Which theory in Medical Sociology uses the analogy between a biological organism and society?", options: ["Middle-range Theories", "Structural functionalism", "Marxian Paradigm", "Health Belief Model"], correctAnswer: "Structural functionalism", explanation: "Structural functionalism compares society to a biological organism, emphasizing how different parts contribute to the stability of the whole." },

{ question: "Medical Sociology primarily focuses on the interplay between which two major aspects?", options: ["Anatomy and physiology", "Social factors and health", "Biochemistry and pathology", "Genetics and environment"], correctAnswer: "Social factors and health", explanation: "Medical Sociology examines how social and cultural factors influence health outcomes and the organization of healthcare." },

{ question: "What does Sociology primarily study?", options: ["Physical laws", "Human interaction and society", "Individual cell function", "Chemical reactions"], correctAnswer: "Human interaction and society", explanation: "Sociology is the study of societies, focusing on human behavior, social interactions, and the organization of communities." },

{ question: "Which of the following is a key social factor influencing the incidence of illness?", options: ["Genetic mutation", "Income", "Cellular metabolism", "Solar radiation"], correctAnswer: "Income", explanation: "Income is a social determinant that can affect access to healthcare and overall health outcomes." },

{ question: "According to the file, which factor is considered a cultural factor affecting health behavior?", options: ["Housing", "Religion", "Income", "Education"], correctAnswer: "Religion", explanation: "Religion is a cultural factor that can influence how individuals perceive illness and decide on treatment options." },

{ question: "Medical Sociology is a branch of Sociology that analyzes what aspect of healthcare?", options: ["The genetic basis of diseases", "The interaction of health professionals and socio-cultural factors", "The chemical composition of drugs", "The anatomical structure of organs"], correctAnswer: "The interaction of health professionals and socio-cultural factors", explanation: "It focuses on the interplay between social dynamics, cultural values, and the organization of healthcare services." },

{ question: "Which organization provided a definition of health as a complete state of physical, social, and mental well-being?", options: ["The Centers for Disease Control", "The World Health Organization (WHO)", "The American Medical Association", "The National Institutes of Health"], correctAnswer: "The World Health Organization (WHO)", explanation: "The WHO defines health as a complete state of physical, mental, and social well-being, not merely the absence of disease." },

{ question: "According to WHO, what is disease defined as?", options: ["A deviation from normal functioning with undesirable consequences", "A minor inconvenience", "A sign of aging", "A result of genetic predisposition only"], correctAnswer: "A deviation from normal functioning with undesirable consequences", explanation: "Disease is understood as a deviation from normal bodily functions that leads to discomfort or adverse health outcomes." },

{ question: "Which theory in Medical Sociology emphasizes the role of norms, values, and culture in determining health behavior?", options: ["Marxian Paradigm", "Health Belief Model", "Psychological theory of disease", "Structural functionalism"], correctAnswer: "Health Belief Model", explanation: "The Health Belief Model, introduced by Rosenstock, focuses on how cultural norms and values influence individual health behaviors." },

{ question: "The Marxian Paradigm in Medical Sociology suggests that the economic system affects what aspect of society?", options: ["Biological processes", "Technological advancements", "Healthcare delivery", "Environmental factors"], correctAnswer: "Healthcare delivery", explanation: "It posits that the economic structure and power dynamics within a society directly influence how healthcare services are organized and provided." },

{ question: "Which of the following theories is represented by the work of Goffman (1971)?", options: ["Marxian Paradigm", "Cultural theory of disease", "Middle-range Theories", "Structural functionalism"], correctAnswer: "Middle-range Theories", explanation: "Goffman's work exemplifies Middle-range Theories, which analyze specific social situations and their wider implications for behavior." },

{ question: "What does the Medical theory of disease argue?", options: ["Disease results from biological discontinuity", "Disease is caused by social inequality", "Disease is solely a cultural construct", "Disease is a myth"], correctAnswer: "Disease results from biological discontinuity", explanation: "The Medical theory of disease links illness to a malfunction or discontinuity in the biological system of the body." },

{ question: "Which theory focuses on the role of psychiatrists and psychologists in understanding the causes of mental disorders?", options: ["Medical theory of disease", "Psychological theory of disease", "Socio-environmental theory of disease", "Structural functionalism"], correctAnswer: "Psychological theory of disease", explanation: "This theory emphasizes the contribution of mental health professionals in diagnosing and understanding mental disorders." },

{ question: "The Cultural theory of disease highlights the interplay between which two factors?", options: ["Environment and genetics", "Culture and technology", "Culture and disease", "Biology and chemistry"], correctAnswer: "Culture and disease", explanation: "It examines how cultural contexts and beliefs influence the manifestation and management of diseases." },

{ question: "What does the socio-environmental theory of disease emphasize?", options: ["Economic policies", "Social and environmental factors", "Astronomical influences", "Genetic inheritance"], correctAnswer: "Social and environmental factors", explanation: "This theory states that social factors such as income, education, and living conditions, along with environmental influences, play a key role in disease development." },

{ question: "Which of the following best describes 'society' as mentioned in the file?", options: ["A community with shared customs, laws, and organizations", "A biological system", "A collection of random people", "A group of isolated individuals"], correctAnswer: "A community with shared customs, laws, and organizations", explanation: "A society is defined as a community where people live together under shared cultural norms, laws, and organizational structures." },

{ question: "In Medical Sociology, which approach views medicine as a social institution to be studied using sociological hypotheses?", options: ["Biological approach", "Social institution approach", "Applied enterprise approach", "Technological approach"], correctAnswer: "Social institution approach", explanation: "This approach treats medicine as a social institution, analyzing its structure and function using sociological methods." },

{ question: "Which approach in Medical Sociology views medicine as an applied enterprise aimed at reducing human suffering?", options: ["Social institution approach", "Applied enterprise approach", "Cultural approach", "Economic approach"], correctAnswer: "Applied enterprise approach", explanation: "This perspective sees medicine as a practical endeavor focused on alleviating suffering and improving quality of life." },

{ question: "What is one of the major concerns of Medical Sociology?", options: ["Studying how diseases are distributed among social groups", "Measuring electrical impulses in neurons", "Determining the chemical structure of drugs", "Analyzing planetary movements"], correctAnswer: "Studying how diseases are distributed among social groups", explanation: "A central concern of Medical Sociology is understanding the social distribution of diseases within different populations." },

{ question: "Which factor is NOT considered a cultural factor in health according to the file?", options: ["Gender", "Housing", "Ethnicity", "Religion"], correctAnswer: "Housing", explanation: "Housing is typically regarded as a social factor rather than a cultural factor affecting health." },

{ question: "What role does family play in health according to the file?", options: ["Family solely determines genetic factors", "Family has no impact on health", "Family is crucial for personal development and identifying health risks", "Family only influences mental health"], correctAnswer: "Family is crucial for personal development and identifying health risks", explanation: "The file emphasizes that the family unit is vital in both personal development and in assessing health risks through family medical history." },

{ question: "A family medical history can help identify the risk of which common disorder?", options: ["Astrophysical anomalies", "Economic recessions", "Heart disease", "Lunar eclipses"], correctAnswer: "Heart disease", explanation: "Family medical history is used to assess the risk of disorders such as heart disease." },

{ question: "Which social factor is highlighted as having an impact on the incidence of illness?", options: ["Quantum physics", "Chemical reactions", "Access to healthcare", "Planetary alignment"], correctAnswer: "Access to healthcare", explanation: "Access to healthcare is a critical social determinant that directly affects the prevalence and management of illnesses." },

{ question: "How do sociologists view the relationship between economic systems and healthcare delivery?", options: ["Healthcare delivery is purely biological", "Economic systems have no effect on healthcare", "Economic systems significantly influence healthcare delivery", "Technology solely determines healthcare outcomes"], correctAnswer: "Economic systems significantly influence healthcare delivery", explanation: "The Marxian Paradigm in Medical Sociology argues that the economic structure of a society has a profound effect on how healthcare is delivered." },

{ question: "What is the main objective of the applied enterprise approach in Medical Sociology?", options: ["To analyze molecular structures", "To reduce human suffering and improve quality of life", "To promote financial investments in healthcare", "To understand planetary movements"], correctAnswer: "To reduce human suffering and improve quality of life", explanation: "This approach treats medicine as a practical field focused on alleviating suffering and enhancing overall quality of life." },

{ question: "Which theoretical perspective in Medical Sociology compares society to a dynamic social system?", options: ["Middle-range Theories", "Cultural theory of disease", "Structural functionalism", "Marxian Paradigm"], correctAnswer: "Structural functionalism", explanation: "Structural functionalism views society as a system with interdependent parts, much like a biological organism, where changes in one part affect the whole." },

{ question: "What does the Middle-range Theory in Medical Sociology focus on?", options: ["Specific social situations with wider implications", "Only biological factors", "Broad, abstract social theories", "Astronomical data"], correctAnswer: "Specific social situations with wider implications", explanation: "Middle-range theories analyze concrete social interactions and situations to understand their broader effects on human behavior." },

{ question: "The Health Belief Model was first propounded by which individual?", options: ["Comte", "Goffman", "Spencer", "Rosenstock"], correctAnswer: "Rosenstock", explanation: "Rosenstock introduced the Health Belief Model, which emphasizes the influence of cultural and normative factors on health behavior." },

{ question: "Which aspect is NOT a focus of Medical Sociology?", options: ["Understanding the social distribution of diseases", "Examining societal support for medical institutions", "Exploring patient behavior within cultural contexts", "Analyzing the chemical structure of medicines"], correctAnswer: "Analyzing the chemical structure of medicines", explanation: "Medical Sociology concentrates on social, cultural, and institutional factors rather than the chemical properties of medications." },

{ question: "Which theory would best explain the impact of poverty on illness within a family?", options: ["Marxian Paradigm", "Psychological theory of disease", "Structural functionalism", "Cultural theory of disease"], correctAnswer: "Structural functionalism", explanation: "Structural functionalism explains how poverty can influence illness by affecting not only the individual but also the entire family system." },

{ question: "What is one of the roles of sociology in the context of post-treatment healthcare?", options: ["Determining drug compositions", "Studying social support networks", "Measuring blood pressure", "Performing surgeries"], correctAnswer: "Studying social support networks", explanation: "Sociology helps in understanding how social support networks influence recovery and long-term post-treatment outcomes." },

{ question: "Which of the following is NOT one of the four major types of theories in Medical Sociology mentioned?", options: ["Quantum Theory", "Middle-range Theories", "Marxist Theory", "Structural functionalism"], correctAnswer: "Quantum Theory", explanation: "Quantum Theory is not part of Medical Sociology; the recognized theories include Structural functionalism, Marxist Theory, and Middle-range Theories." },

{ question: "Which term refers to the study of the causes of diseases?", options: ["Physiology", "Aetiology", "Pathology", "Anatomy"], correctAnswer: "Aetiology", explanation: "Aetiology is the term used to describe the investigation into the causes or origins of diseases." },

{ question: "What does the psychological theory of disease primarily address?", options: ["The societal distribution of illnesses", "The chemical imbalance in the body", "The impact of mental health professionals on understanding disorders", "The role of cultural rituals in disease"], correctAnswer: "The impact of mental health professionals on understanding disorders", explanation: "This theory emphasizes the role that psychiatrists and psychologists play in diagnosing and understanding mental disorders." },

{ question: "How does the file describe the role of culture in disease management?", options: ["Culture has no effect on disease management", "Only economic factors matter", "It is solely the responsibility of doctors", "Cultural context can improve management of culture-bound syndromes"], correctAnswer: "Cultural context can improve management of culture-bound syndromes", explanation: "Understanding a patient’s cultural background can lead to more effective management of diseases that are closely linked to cultural practices." },

{ question: "What does the socio-environmental theory suggest about the determinants of health?", options: ["Social and environmental conditions are key determinants", "Only lifestyle choices matter", "Health is determined only by genetics", "Health is random"], correctAnswer: "Social and environmental conditions are key determinants", explanation: "This theory emphasizes that social and environmental factors, such as income, education, and living conditions, are critical in shaping health outcomes." },

{ question: "Which of the following best reflects the interdisciplinary nature of Medical Sociology?", options: ["It solely focuses on anatomy", "It integrates social, cultural, and medical perspectives", "It is only concerned with pharmacology", "It disregards cultural factors"], correctAnswer: "It integrates social, cultural, and medical perspectives", explanation: "Medical Sociology draws from multiple disciplines to understand how societal and cultural influences interact with medical practices." },

{ question: "How does economic inequality contribute to health disparities according to the Marxian Paradigm?", options: ["It enhances healthcare for all", "It only affects cultural practices", "It undermines access to healthcare and resources", "It has no contribution"], correctAnswer: "It undermines access to healthcare and resources", explanation: "The Marxian Paradigm posits that economic inequality creates barriers to accessing quality healthcare, thereby increasing health disparities." },

{ question: "Which aspect of Medical Sociology is concerned with how society defines and treats diseases?", options: ["Physiological processes", "Social prescriptions", "Genetic mutations", "Biochemical reactions"], correctAnswer: "Social prescriptions", explanation: "Medical Sociology examines how societal norms and institutions prescribe specific methods for treating and managing diseases." },

{ question: "What does the file indicate about the significance of human relationships in the context of illness?", options: ["They only matter in psychological conditions", "They have minimal impact", "They strongly influence illness outcomes", "They are irrelevant in modern healthcare"], correctAnswer: "They strongly influence illness outcomes", explanation: "The file highlights that human relationships and social networks play a crucial role in determining the outcome of illnesses." },

{ question: "According to the file, what is one way that social institutions support medical organizations?", options: ["By funding astrophysical research", "By creating new languages", "By designing hospital architecture", "By providing structural support and resources"], correctAnswer: "By providing structural support and resources", explanation: "Social institutions offer essential support and resources that help medical organizations effectively deliver healthcare services." },

{ question: "Which of the following statements best captures the concept of 'aetiology'?", options: ["Observation of cultural rituals", "Analysis of treatment outcomes", "Study of the causes of disease", "Study of the symptoms"], correctAnswer: "Study of the causes of disease", explanation: "Aetiology is the investigation into the origins and causes of diseases." },

{ question: "How does the file define 'disease'?", options: ["As a cultural celebration", "As an economic policy", "As any deviation from normal functioning that causes discomfort", "As a beneficial state"], correctAnswer: "As any deviation from normal functioning that causes discomfort", explanation: "Disease is defined as a deviation from normal bodily functioning that leads to discomfort or adverse health outcomes." },

{ question: "Which of the following best represents a key contribution of Medical Sociology to healthcare?", options: ["Exploring the social distribution of diseases", "Developing new surgical techniques", "Analyzing the biochemical pathways", "Measuring blood pressure accurately"], correctAnswer: "Exploring the social distribution of diseases", explanation: "Medical Sociology contributes by examining how diseases are distributed among different social groups, which can inform public health strategies." },

{ question: "Culture-bound syndromes can be better managed with informed knowledge of what?", options: ["Economic policies", "Genetic factors", "Cultural context and patient's background", "Urban planning"], correctAnswer: "Cultural context and patient's background", explanation: "An understanding of cultural context and a patient's background is crucial for the effective management of culture-bound syndromes." },

{ question: "Which element is NOT typically considered a social determinant of health?", options: ["Education", "Income", "Blood type", "Housing"], correctAnswer: "Blood type", explanation: "Blood type is a biological characteristic, whereas education, income, and housing are recognized as social determinants of health." },

{ question: "How do lifestyle choices influence health, according to the file?", options: ["They significantly impact the incidence of diseases", "They have no influence", "They only affect mental health", "They are irrelevant in modern medicine"], correctAnswer: "They significantly impact the incidence of diseases", explanation: "Lifestyle choices, including diet, exercise, and habits, are major factors that influence overall health and the risk of disease." },

{ question: "Which of the following is a characteristic of Structural functionalism in Medical Sociology?", options: ["It is based on quantum mechanics", "It ignores the role of economic factors", "It focuses only on individual behavior", "It views the family as a unit impacting health"], correctAnswer: "It views the family as a unit impacting health", explanation: "Structural functionalism considers the family as an integral part of the social system that influences overall health outcomes." },

{ question: "How does the dynamic social system model explain illness?", options: ["By solely focusing on anatomical defects", "By analyzing planetary cycles", "By linking individual illness to broader social influences", "By attributing illness to genetic mutations only"], correctAnswer: "By linking individual illness to broader social influences", explanation: "This model posits that illness is not merely a biological event but is also shaped by social relationships and structures." },



      
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
  
  
  

  
  
 