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
  //////////////////////////////////Introduction to Practical Pharmacology///////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      {
        category: "PHA202",
        questions: [
          
    
  
  { question: "Which physiologist defined systemic circulation through his work 'An anatomical exercise on the motion of the heart & blood in living beings'?", options: ["William Harvey", "Galen", "Claude Bernard", "Franciscus Sylvius"], correctAnswer: "William Harvey", explanation: "William Harvey defined systemic circulation in his 1628 publication, describing how blood is pumped by the heart throughout the body." },

 { question: "Who first isolated and purified insulin, thereby revolutionizing diabetes treatment?", options: ["Frederick Banting and Charles Best", "Joseph Lister", "Claude Bernard", "Earl Sutherland"], correctAnswer: "Frederick Banting and Charles Best", explanation: "In 1922, Frederick Banting and Charles Best isolated insulin, transforming diabetes management from a fatal disease to a manageable condition." },

 { question: "Which discovery is attributed to Karl Landsteiner in the field of hematology?", options: ["Isolation of insulin", "Discovery of water channels", "Classification of human blood groups and the Rh factor", "Development of the patch-clamp technique"], correctAnswer: "Classification of human blood groups and the Rh factor", explanation: "Karl Landsteiner classified the basic human blood groups and later identified the Rh factor, forming the basis of modern blood typing." }, 

{ question: "Which homeostatic mechanism allows the body to anticipate a change and initiate a reflex response before it occurs?", options: ["Negative feedback", "Positive feedback", "Feed-forward control", "Tonic control"], correctAnswer: "Feed-forward control", explanation: "Feed-forward control enables the body to preemptively adjust to expected changes by initiating a reflex response before the stimulus fully manifests." }, 

{ question: "Which type of control in physiology is compared to adjusting a radio's volume to regulate an organ's activity?", options: ["Negative feedback", "Tonic control", "Antagonistic control", "Circadian rhythms"], correctAnswer: "Tonic control", explanation: "Tonic control functions like a radio's volume knob, allowing for the modulation of an organ system's activity by adjusting its intensity." }, 

{ question: "In antagonistic control, how do the two independent regulators function?", options: ["They work together to enhance the response", "They work in opposition to modulate an organ's activity", "They have no interaction", "They sequentially alternate roles"], correctAnswer: "They work in opposition to modulate an organ's activity", explanation: "Antagonistic control involves two regulators that operate in opposition, balancing each other's effects to maintain proper function." }, 

{ question: "What are circadian rhythms?", options: ["Random fluctuations in body processes", "24-hour cycles that regulate various biological functions", "A type of feed-forward control", "The chemical signals that trigger muscle contractions"], correctAnswer: "24-hour cycles that regulate various biological functions", explanation: "Circadian rhythms are inherent 24-hour cycles that govern biological processes such as sleep, hormone release, and body temperature regulation." }, 

{ question: "Which Nobel Prize-winning researchers developed the patch-clamp technique used to study ion channels?", options: ["Erwin Neher and Bert Sakmann", "James Watson and Francis Crick", "Ivan Pavlov and Claude Bernard", "Peter Agre and Karl Landsteiner"], correctAnswer: "Erwin Neher and Bert Sakmann", explanation: "Erwin Neher and Bert Sakmann developed the patch-clamp technique, enabling precise measurements of ion movements through cell membranes." }, 

{ question: "Who is credited with performing the first human heart transplant?", options: ["Christiaan Barnard", "William Harvey", "Claude Bernard", "Henry Bowditch"], correctAnswer: "Christiaan Barnard", explanation: "Christiaan Barnard performed the first human heart transplant in 1967, marking a landmark achievement in medical history." }, 

{ question: "Which system in the human body comprises the kidneys, ureters, bladder, and urethra?", options: ["Digestive system", "Nervous system", "Renal/urinary system", "Musculoskeletal system"], correctAnswer: "Renal/urinary system", explanation: "The renal/urinary system includes the kidneys, ureters, bladder, and urethra, and is responsible for filtering blood and removing waste." }, 

{ question: "Approximately how many bones constitute the human skeletal system?", options: ["106", "206", "306", "406"], correctAnswer: "206", explanation: "The human skeletal system is composed of approximately 206 bones, divided between the axial and appendicular skeletons." }, 

{ question: "Which part of the nervous system includes the brain and the spinal cord?", options: ["Peripheral nervous system", "Central nervous system", "Autonomic nervous system", "Somatic nervous system"], correctAnswer: "Central nervous system", explanation: "The central nervous system, consisting of the brain and spinal cord, is responsible for processing and integrating information in the body." }, 

{ question: "What phenomenon did Ivan Pavlov famously study, which led to his Nobel Prize-winning research?", options: ["Blood circulation", "Conditional reflexes", "Discovery of epinephrine", "Telomere protection"], correctAnswer: "Conditional reflexes", explanation: "Ivan Pavlov's research on conditional reflexes, particularly his experiments with dogs, provided key insights into how organisms learn through association." },


{ question: "What is the origin of the word 'physiology'?", options: ["Latin", "Greek", "Sanskrit", "Arabic"], correctAnswer: "Greek", explanation: "The term 'physiology' is derived from the Greek word 'physiologia', meaning 'study of nature'." },

{ question: "Which of the following best describes human physiology?", options: ["Study of diseases only", "Study of normal and abnormal functions of the human body", "Study of cellular structures only", "Study of external body features"], correctAnswer: "Study of normal and abnormal functions of the human body", explanation: "Human physiology examines both the normal functions and the pathological conditions of the human body." },

{ question: "Which experimental technique did Johannes Walaeus contribute to physiology?", options: ["Electrocardiography", "Venous occlusion experiment", "Magnetic resonance imaging", "Patch-clamp technique"], correctAnswer: "Venous occlusion experiment", explanation: "Johannes Walaeus performed the venous occlusion experiment to support the concept of blood returning to the heart." },

{ question: "Which physician first properly described the spinal canal?", options: ["William Harvey", "Jean Fernel", "Claude Bernard", "Galen"], correctAnswer: "Jean Fernel", explanation: "Jean Fernel was the first to describe the spinal canal, marking an important development in anatomical studies." },

{ question: "Who brought the concept of blood circulation to the Netherlands and distinguished between types of glands?", options: ["Jean Fernel", "William Beaumont", "Franciscus Sylvius", "Johannes Walaeus"], correctAnswer: "Franciscus Sylvius", explanation: "Franciscus Sylvius introduced the concept of blood circulation in the Netherlands and differentiated between conglomerate and conglobate glands." },

{ question: "Who is considered the founder of Dutch experimental physiology?", options: ["Galen", "Johannes Walaeus", "Claude Bernard", "William Beaumont"], correctAnswer: "Johannes Walaeus", explanation: "Johannes Walaeus is regarded as the founder of Dutch experimental physiology for his pioneering experiments." },

{ question: "Which American physiologist used a patient's gunshot wound to study gastric function?", options: ["Claude Bernard", "Ivan Pavlov", "William Beaumont", "Joseph Lister"], correctAnswer: "William Beaumont", explanation: "William Beaumont's observation of a gunshot wound allowed him to study gastric function directly, contributing to practical physiology." },

{ question: "Which scientist is credited with reducing surgical mortality through the discovery of antiseptics?", options: ["Galen", "Claude Bernard", "William Harvey", "Joseph Lister"], correctAnswer: "Joseph Lister", explanation: "Joseph Lister introduced antiseptic techniques that dramatically reduced surgical mortality rates." },

{ question: "Which duo is known for advancing the cell theory in 1838?", options: ["Frederick Banting & Charles Best", "Matthias Schleiden & Theodor Schwann", "Claude Bernard & William Beaumont", "Galen & Jean Fernel"], correctAnswer: "Matthias Schleiden & Theodor Schwann", explanation: "Schleiden and Schwann were pivotal in establishing that all living organisms are composed of cells." },

{ question: "Which landmark text by Claude Bernard laid the foundation for experimental medicine?", options: ["The Origin of Species", "An Introduction to the Study of Experimental Medicine", "The System of the Human Body", "The Principles of Physiology"], correctAnswer: "An Introduction to the Study of Experimental Medicine", explanation: "Claude Bernard's work provided clear explanations of experimental methods in physiology and medicine." },

{ question: "Which institution initiated a medical physiology program in the 1870s?", options: ["Yale University", "Harvard University", "Johns Hopkins University", "Oxford University"], correctAnswer: "Harvard University", explanation: "Harvard University established a medical physiology program in the 1870s, appointing Henry Bowditch as its first full-time physiologist." },

{ question: "What did Ivan Pavlov study to develop the concept of conditional reflexes?", options: ["Muscle contraction", "Salivary secretion in dogs", "Heart rate variability", "Blood pressure regulation"], correctAnswer: "Salivary secretion in dogs", explanation: "Pavlov's experiments with dogs' salivary responses led to the development of the concept of conditional reflexes." },

{ question: "Who isolated and purified epinephrine from the adrenal gland in 1901?", options: ["Joseph Lister and William Beaumont", "John Jacob Abel and Jokichi Takamine", "Claude Bernard and Galen", "Frederick Banting and Charles Best"], correctAnswer: "John Jacob Abel and Jokichi Takamine", explanation: "John Jacob Abel and Jokichi Takamine made a breakthrough in hormone research by isolating epinephrine." },

{ question: "Who performed the first mammalian heart transplant?", options: ["Walter Dandy", "Christiaan Barnard", "Alexis Carrel", "Claude Bernard"], correctAnswer: "Alexis Carrel", explanation: "Alexis Carrel is recognized for performing the first mammalian heart transplant in 1904." },

{ question: "Which scientist's work led to the modern classification of human blood groups?", options: ["Frederick Banting", "John O’Keefe", "Erwin Neher", "Karl Landsteiner"], correctAnswer: "Karl Landsteiner", explanation: "Karl Landsteiner's research resulted in the classification of human blood groups and the discovery of the Rh factor." },

{ question: "What physiological process did August Krogh study to earn his Nobel Prize?", options: ["Telomere protection", "Capillary fluid exchange and oxygen diffusion", "Conditional reflexes", "G protein-coupled receptor activity"], correctAnswer: "Capillary fluid exchange and oxygen diffusion", explanation: "August Krogh's work on how fluids and oxygen exchange in capillaries was groundbreaking and earned him a Nobel Prize." },

{ question: "Which expedition led by Haldane J.S. helped study the effects of altitude on breathing?", options: ["K2 expedition", "Pike's Peak expedition", "Mount Everest expedition", "Andes expedition"], correctAnswer: "Pike's Peak expedition", explanation: "Haldane J.S. led an expedition to Pike's Peak in 1911 to investigate how altitude affects human respiration." },

{ question: "What method did Anton Carlson use to study the relationship between hunger and digestion?", options: ["Assessing hormone levels", "Using an inflated balloon in the stomach", "Recording neural activity", "Measuring blood pressure changes"], correctAnswer: "Using an inflated balloon in the stomach", explanation: "Anton Carlson employed an inflated balloon in the stomach during a 15-day fast to study stomach contractions related to hunger." },

{ question: "Which discovery in 1922 transformed the treatment of diabetes?", options: ["Identification of cyclic AMP", "Isolation of insulin", "Discovery of water channels", "Discovery of epinephrine"], correctAnswer: "Isolation of insulin", explanation: "The isolation of insulin by Banting and Best in 1922 revolutionized the management of diabetes." },

{ question: "Who is known for the first direct measurements of blood pressure in blood vessels?", options: ["Claude Bernard", "Henry Bowditch", "Eugene Landis", "William Harvey"], correctAnswer: "Eugene Landis", explanation: "Eugene Landis published the first direct measurements of blood pressure within arteries, capillaries, and veins." },

{ question: "What was the main focus of the Harvard Fatigue Laboratory established in 1927?", options: ["Neurotransmitter activity", "Cell division", "Hormone synthesis", "Exercise and environmental physiology"], correctAnswer: "Exercise and environmental physiology", explanation: "The Harvard Fatigue Laboratory concentrated on studying the effects of exercise and extreme environmental conditions on human physiology." },

{ question: "Which neurosurgeon identified the cause of hydrocephalus and invented the baseball helmet?", options: ["John O’Keefe", "Walter Dandy", "Claude Bernard", "Alexis Carrel"], correctAnswer: "Walter Dandy", explanation: "Walter Dandy is noted for his work on hydrocephalus and is credited with inventing the baseball helmet in the 1930s." },

{ question: "Which researchers elucidated the ionic mechanism behind nerve impulse transmission?", options: ["Pavlov and Bernard", "Neher and Sakmann", "Hodgkin and Huxley", "Landsteiner and Krogh"], correctAnswer: "Hodgkin and Huxley", explanation: "Hodgkin and Huxley discovered the ionic basis of nerve impulse transmission in 1952, a major milestone in neuroscience." },

{ question: "Who discovered the neurotransmitter linked to mood regulation?", options: ["Claude Bernard", "Welsh J.H.", "Jean Fernel", "Galen"], correctAnswer: "Welsh J.H.", explanation: "Welsh J.H. discovered serotonin in 1953, a neurotransmitter that plays a critical role in regulating mood." },

{ question: "Which research revealed the sliding filament mechanism in skeletal muscle contraction?", options: ["Neher and Sakmann's findings", "Pavlov's experiments", "Studies by Huxley Andrew & Huxley Hugh", "Bernard's experimental methods"], correctAnswer: "Studies by Huxley Andrew & Huxley Hugh", explanation: "The research by Huxley Andrew and Huxley Hugh in 1954 demonstrated that skeletal muscle contraction involves the sliding of filaments." },

{ question: "What major discovery about DNA was made by Watson and Crick?", options: ["The genetic code", "The process of transcription", "The double helix structure", "The role of RNA"], correctAnswer: "The double helix structure", explanation: "Watson and Crick are renowned for elucidating the double helix structure of DNA, a pivotal moment in molecular biology." },

{ question: "What breakthrough did Earl Sutherland achieve regarding cellular signaling?", options: ["Discovery of epinephrine", "Identification of cyclic AMP", "Isolation of insulin", "Measurement of blood pressure"], correctAnswer: "Identification of cyclic AMP", explanation: "Earl Sutherland's identification of cyclic AMP in 1971 was crucial in understanding how cells respond to hormonal signals." },

{ question: "Which technique, developed in 1974, allowed for detailed measurement of ion channel activity?", options: ["Flow cytometry", "Patch-clamp technique", "Electroencephalography", "Magnetic resonance imaging"], correctAnswer: "Patch-clamp technique", explanation: "The patch-clamp technique, introduced by Erwin Neher and Bert Sakmann, enabled precise measurement of ion flow across cell membranes." },

{ question: "Which trio won the Nobel Prize in 2001 for their work on cell cycle regulation?", options: ["Neher, Sakmann, and Dandy", "Leland Hartwell, Paul Nurse, and Timothy Hunt", "Banting, Best, and Lister", "Watson, Crick, and Franklin"], correctAnswer: "Leland Hartwell, Paul Nurse, and Timothy Hunt", explanation: "In 2001, these scientists were awarded the Nobel Prize for discovering key mechanisms regulating cell growth, division, and death." },

{ question: "What is the primary function of water channels discovered by Peter Agre?", options: ["Transmitting nerve impulses", "Allowing water to move across cell membranes", "Regulating blood pressure", "Facilitating oxygen transport"], correctAnswer: