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

{ question: "What is the primary function of water channels discovered by Peter Agre?", options: ["Transmitting nerve impulses", "Allowing water to move across cell membranes", "Regulating blood pressure", "Facilitating oxygen transport"], correctAnswer: "Allowing water to move across cell membranes", explanation: "Peter Agre's discovery of water channels revealed how cells manage water transport, which is essential for cellular homeostasis." },

{ question: "Which Nobel Prize-winning discovery involves the maintenance of chromosome ends?", options: ["DNA replication", "Telomere protection by telomerase", "Protein synthesis", "RNA interference"], correctAnswer: "Telomere protection by telomerase", explanation: "The discovery that telomerase protects chromosome ends has been vital in understanding aging and cellular replication." },

{ question: "Who were awarded the Nobel Prize in 2011 for their contributions to the understanding of immunity?", options: ["Hartwell, Nurse, and Hunt", "Bruce Beutler, Jules Hoffmann, and Ralph Steinman", "Watson, Crick, and Franklin", "Neher, Sakmann, and Huxley"], correctAnswer: "Bruce Beutler, Jules Hoffmann, and Ralph Steinman", explanation: "These scientists were recognized in 2011 for their groundbreaking work on innate and adaptive immune responses." },

{ question: "What innovation is Ralph Brinster known for in physiological research?", options: ["Measurement of blood pressure", "Isolation of insulin", "Development of transgenic mice", "Discovery of the double helix"], correctAnswer: "Development of transgenic mice", explanation: "Ralph Brinster's work on creating transgenic mice has provided invaluable tools for studying gene function and disease." },

{ question: "What is the significance of the discovery by Sir John Gurdon and Shinya Yamanaka?", options: ["Discovery of water channels", "Isolation of insulin", "Reprogramming mature cells into pluripotent stem cells", "Identification of cyclic AMP"], correctAnswer: "Reprogramming mature cells into pluripotent stem cells", explanation: "Their discovery demonstrated that mature cells can be reprogrammed to a pluripotent state, revolutionizing regenerative medicine." },

{ question: "Which discovery highlighted the role of G protein-coupled receptors in cell signaling?", options: ["Discovery of the double helix", "Research by Robert Lefkowitz and Brian Kobilka", "Isolation of insulin", "Development of the patch-clamp technique"], correctAnswer: "Research by Robert Lefkowitz and Brian Kobilka", explanation: "The work of Lefkowitz and Kobilka revealed how G protein-coupled receptors function, significantly advancing our understanding of cell signaling." },

{ question: "What is the main function of the vesicle traffic machinery discovered by Rothman, Schekman, and Sudhof?", options: ["Mediating intracellular transport", "Conducting nerve impulses", "Regulating the cell cycle", "Transporting genetic material"], correctAnswer: "Mediating intracellular transport", explanation: "This machinery is essential for the transport of vesicles within cells, ensuring proper distribution of molecules." },

{ question: "Which discovery in 2014 revealed a cellular positioning system in the brain?", options: ["Discovery of water channels", "Identification of specialized cells by John O’Keefe, May-Britt Moser, and Edvard I. Moser", "Identification of neurotransmitters", "Discovery of the blood-brain barrier"], correctAnswer: "Identification of specialized cells by John O’Keefe, May-Britt Moser, and Edvard I. Moser", explanation: "Their discovery of grid and place cells uncovered the neural basis for spatial navigation and positioning in the brain." },

{ question: "Which therapeutic breakthrough in 2015 was recognized with a Nobel Prize for combating parasitic infections?", options: ["Discovery of the double helix", "Isolation of insulin", "A novel therapy against roundworm infections", "Identification of cyclic AMP"], correctAnswer: "A novel therapy against roundworm infections", explanation: "The work of William C. Campbell and Satoshi Ōmura led to a new treatment targeting infections caused by roundworm parasites." },

{ question: "Which of the following is NOT a component of the cardiovascular system?", options: ["Ventricles", "Lungs", "Atria", "Heart valves"], correctAnswer: "Lungs", explanation: "The cardiovascular system consists of the heart and blood vessels, while the lungs are part of the respiratory system." },

{ question: "Which accessory organs are involved in the digestive/excretory system?", options: ["Kidneys and ureters", "Liver and gallbladder", "Thyroid and parathyroid glands", "Heart and blood vessels"], correctAnswer: "Liver and gallbladder", explanation: "The digestive/excretory system includes accessory organs like the liver and gallbladder that aid in digestion and nutrient processing." },








],
      },

  
  
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// Blood Physiology ////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
        
  {
      category: "Blood",
      questions: [





{ question: "What is blood primarily considered to be?", options: ["A connective tissue", "A solid tissue", "The body's only fluid tissue", "An organ"], correctAnswer: "The body's only fluid tissue", explanation: "Blood is unique in that it is the only tissue in the body that is in a fluid state, circulating throughout the vascular system." },

{ question: "Which of the following is the non-cellular component of blood?", options: ["Erythrocytes", "Liquid plasma", "Platelets", "Leukocytes"], correctAnswer: "Liquid plasma", explanation: "Blood consists of liquid plasma as its non-cellular component along with cellular elements such as red blood cells, white blood cells, and platelets." },

{ question: "Which cells are primarily responsible for the transport of oxygen and carbon dioxide?", options: ["Platelets", "Red blood cells", "White blood cells", "Plasma cells"], correctAnswer: "Red blood cells", explanation: "Red blood cells contain hemoglobin, the pigment that binds oxygen and facilitates the transport of oxygen and carbon dioxide throughout the body." },

{ question: "Which pigment in red blood cells is responsible for oxygen transport?", options: ["Myoglobin", "Hemoglobin", "Melanin", "Fibrinogen"], correctAnswer: "Hemoglobin", explanation: "Hemoglobin is the iron-containing pigment in red blood cells that binds oxygen in the lungs and releases it in tissues." },

{ question: "What does hematocrit measure in the blood?", options: ["The percentage of red blood cells out of the total blood volume", "The concentration of hemoglobin", "The volume of platelets", "The percentage of plasma in blood"], correctAnswer: "The percentage of red blood cells out of the total blood volume", explanation: "Hematocrit is a measure of the proportion of blood that is composed of red blood cells." },

{ question: "What is the normal pH range of human blood?", options: ["7.35–7.45", "6.8–7.0", "7.8–8.0", "8.5–9.0"], correctAnswer: "7.35–7.45", explanation: "The pH of blood is tightly regulated between 7.35 and 7.45 to ensure proper physiological functioning." },

{ question: "What is the average blood volume in adult males?", options: ["5–6 L", "3–4 L", "4–5 L", "6–7 L"], correctAnswer: "5–6 L", explanation: "Adult males typically have an average blood volume of 5 to 6 liters." },

{ question: "What is the average blood volume in adult females?", options: ["4–5 L", "5–6 L", "3–4 L", "6–7 L"], correctAnswer: "4–5 L", explanation: "Adult females generally have a blood volume ranging from 4 to 5 liters." },

{ question: "Which of the following is a key function of plasma proteins in blood?", options: ["Maintaining osmotic pressure", "Transporting oxygen", "Producing white blood cells", "Storing iron"], correctAnswer: "Maintaining osmotic pressure", explanation: "Plasma proteins play an important role in maintaining osmotic pressure in capillaries, helping to regulate fluid balance in the blood." },

{ question: "Which plasma protein is directly involved in blood clotting?", options: ["Hemoglobin", "Albumin", "Globulins", "Fibrinogen"], correctAnswer: "Fibrinogen", explanation: "Fibrinogen is a soluble plasma protein that is converted into fibrin during the coagulation cascade, forming the structural basis of a blood clot." },

{ question: "What is the typical shape of a red blood cell?", options: ["Biconcave disk", "Rod-shaped", "Spherical", "Irregular"], correctAnswer: "Biconcave disk", explanation: "The biconcave disk shape of red blood cells increases their surface area, facilitating efficient gas exchange." },

{ question: "What is the approximate diameter of a red blood cell?", options: ["7.5 µm", "5 µm", "10 µm", "12 µm"], correctAnswer: "7.5 µm", explanation: "Red blood cells typically have a diameter of about 7.5 micrometers, which supports their efficient function in gas exchange." },

{ question: "What is the approximate lifespan of a typical red blood cell?", options: ["About 120 days", "About 30 days", "About 60 days", "About 180 days"], correctAnswer: "About 120 days", explanation: "A red blood cell generally circulates for approximately 120 days before it is removed from the bloodstream." },

{ question: "What is haemopoiesis?", options: ["The production of blood cells", "The destruction of red blood cells", "The formation of blood clots", "The conversion of hemoglobin to bilirubin"], correctAnswer: "The production of blood cells", explanation: "Haemopoiesis refers to the process by which all types of blood cells, including red blood cells, white blood cells, and platelets, are produced." },

{ question: "Which process specifically refers to red blood cell production?", options: ["Thrombopoiesis", "Erythropoiesis", "Leukopoiesis", "Hemolysis"], correctAnswer: "Erythropoiesis", explanation: "Erythropoiesis is the specific process of synthesizing red blood cells." },

{ question: "In adults, where are red blood cells primarily produced?", options: ["Red bone marrow", "Liver", "Spleen", "Kidneys"], correctAnswer: "Red bone marrow", explanation: "In adults, red blood cells are primarily produced in the red bone marrow, especially in the axial skeleton and the proximal epiphyses of long bones." },

{ question: "Which membrane protein provides flexibility to red blood cells?", options: ["Spectrin", "Tubulin", "Actin", "Keratin"], correctAnswer: "Spectrin", explanation: "Spectrin is an important membrane protein that maintains the flexibility and structural integrity of red blood cells." },

{ question: "What term describes the rupture of red blood cells?", options: ["Hemolysis", "Erythropoiesis", "Thrombopoiesis", "Diapedesis"], correctAnswer: "Hemolysis", explanation: "Hemolysis refers to the rupture or destruction of red blood cells, releasing hemoglobin into the bloodstream." },

{ question: "After phagocytosis, what happens to hemoglobin in red blood cells?", options: ["It is stored for later use", "It is broken down into globular proteins and heme, with heme converted to bilirubin", "It is excreted unchanged", "It is converted directly into urobilinogen"], correctAnswer: "It is broken down into globular proteins and heme, with heme converted to bilirubin", explanation: "Once red blood cells are phagocytosed, their hemoglobin is degraded; the heme portion is converted into bilirubin, while the globular protein is broken down into amino acids." },

{ question: "What is the primary function of white blood cells?", options: ["Defending the body against pathogens", "Transporting oxygen", "Clotting the blood", "Regulating blood pH"], correctAnswer: "Defending the body against pathogens", explanation: "White blood cells are essential for the immune response, protecting the body from infections and foreign substances." },

{ question: "Which type of white blood cell is the most abundant in circulation?", options: ["Neutrophils", "Lymphocytes", "Monocytes", "Eosinophils"], correctAnswer: "Neutrophils", explanation: "Neutrophils make up 50-70% of circulating white blood cells, making them the most numerous among the various types." },

{ question: "What does the term 'diapedesis' refer to?", options: ["The process by which white blood cells exit the bloodstream", "The process of clot formation", "The breakdown of fibrin", "The aggregation of platelets"], correctAnswer: "The process by which white blood cells exit the bloodstream", explanation: "Diapedesis is the process where white blood cells squeeze through the endothelial lining of blood vessels to reach sites of infection or injury." },

{ question: "Which mnemonic helps remember the order of abundance of white blood cells?", options: ["Never let monkeys eat bananas!", "Apples before oranges", "Bananas over apples", "Cats and dogs"], correctAnswer: "Never let monkeys eat bananas!", explanation: "The mnemonic 'Never let monkeys eat bananas!' stands for Neutrophils, Lymphocytes, Monocytes, Eosinophils, and Basophils, in order of their relative abundance." },

{ question: "What is thrombopoiesis?", options: ["The production of platelets", "The production of red blood cells", "The production of white blood cells", "The breakdown of platelets"], correctAnswer: "The production of platelets", explanation: "Thrombopoiesis is the process by which platelets are produced from megakaryocytes in the bone marrow." },

{ question: "How long do platelets typically circulate in the bloodstream?", options: ["9–12 days", "3–5 days", "15–20 days", "20–30 days"], correctAnswer: "9–12 days", explanation: "Platelets usually circulate for approximately 9 to 12 days before being removed by the spleen." },

{ question: "What is hemostasis?", options: ["The process of stopping bleeding", "The production of blood cells", "The breakdown of blood clots", "The process of blood circulation"], correctAnswer: "The process of stopping bleeding", explanation: "Hemostasis is the series of events that lead to the cessation of bleeding after a blood vessel is injured." },

{ question: "Which phase of hemostasis involves vasoconstriction of the blood vessel?", options: ["Vascular Phase", "Platelet Phase", "Coagulation Phase", "Fibrinolysis Phase"], correctAnswer: "Vascular Phase", explanation: "The vascular phase is the first phase of hemostasis and involves the constriction of the blood vessel to reduce blood flow." },

{ question: "During the platelet phase, what is the primary action of platelets?", options: ["Adhering to the damaged vessel wall to form a plug", "Releasing enzymes to digest clots", "Converting fibrinogen to fibrin", "Stimulating red blood cell production"], correctAnswer: "Adhering to the damaged vessel wall to form a plug", explanation: "In the platelet phase, platelets adhere to exposed collagen and damaged endothelium, aggregating to form a temporary plug to prevent blood loss." },

{ question: "What is the key event during the coagulation phase of hemostasis?", options: ["Conversion of fibrinogen into fibrin", "Platelet aggregation", "Vasoconstriction", "Breakdown of red blood cells"], correctAnswer: "Conversion of fibrinogen into fibrin", explanation: "The coagulation phase is characterized by the conversion of fibrinogen into fibrin, which forms a mesh that stabilizes the blood clot." },

{ question: "Which factor is responsible for converting prothrombin into thrombin in the coagulation cascade?", options: ["Prothrombin activator (Factor X)", "Fibrinogen", "Plasmin", "Tissue plasminogen activator"], correctAnswer: "Prothrombin activator (Factor X)", explanation: "Prothrombin activator, primarily Factor X, converts prothrombin into thrombin, a critical step in the coagulation cascade." },

{ question: "What role does thrombin play in the clotting process?", options: ["It converts fibrinogen to fibrin", "It dissolves clots", "It activates white blood cells", "It stimulates vasoconstriction"], correctAnswer: "It converts fibrinogen to fibrin", explanation: "Thrombin is the enzyme that catalyzes the conversion of fibrinogen into fibrin, forming the structural basis of a blood clot." },

{ question: "What is clot retraction?", options: ["The process by which a clot shrinks to draw vessel edges together", "The initial formation of a clot", "The dissolution of a clot", "The aggregation of platelets"], correctAnswer: "The process by which a clot shrinks to draw vessel edges together", explanation: "Clot retraction involves the contraction of the clot, which helps to bring the torn edges of a blood vessel closer together to facilitate healing." },

{ question: "What is fibrinolysis?", options: ["The process of clot dissolution", "The formation of fibrin", "The aggregation of platelets", "The activation of white blood cells"], correctAnswer: "The process of clot dissolution", explanation: "Fibrinolysis is the enzymatic breakdown of fibrin, which leads to the dissolution of the blood clot once the vessel is repaired." },

{ question: "Which enzyme is primarily responsible for breaking down fibrin during fibrinolysis?", options: ["Plasmin", "Thrombin", "Prothrombin", "Factor X"], correctAnswer: "Plasmin", explanation: "Plasmin is the key enzyme that degrades fibrin, thereby dissolving the blood clot during fibrinolysis." },

{ question: "What is an embolus?", options: ["A clot that has detached and is traveling through the bloodstream", "A type of white blood cell", "A stationary blood clot", "A component of plasma"], correctAnswer: "A clot that has detached and is traveling through the bloodstream", explanation: "An embolus is a blood clot or other debris that breaks off from its original site and travels through the bloodstream, potentially causing blockages." },

{ question: "What is hemophilia?", options: ["A hereditary bleeding disorder due to clotting factor deficiency", "An autoimmune disease", "A bacterial infection", "A type of anemia"], correctAnswer: "A hereditary bleeding disorder due to clotting factor deficiency", explanation: "Hemophilia is a genetic disorder characterized by deficiencies in certain clotting factors, leading to prolonged bleeding." },

{ question: "Which clotting factor is deficient in Hemophilia A?", options: ["Factor VIII", "Factor IX", "Factor X", "Factor II"], correctAnswer: "Factor VIII", explanation: "Hemophilia A is caused by a deficiency in clotting Factor VIII, which impairs the blood clotting process." },

{ question: "Which clotting factor is deficient in Hemophilia B?", options: ["Factor IX", "Factor VIII", "Factor X", "Factor II"], correctAnswer: "Factor IX", explanation: "Hemophilia B results from a deficiency in clotting Factor IX, leading to difficulties in forming stable blood clots." },

{ question: "Which of the following best describes a function of platelets?", options: ["Initiating the clotting process", "Transporting oxygen", "Defending against pathogens", "Regulating blood pH"], correctAnswer: "Initiating the clotting process", explanation: "Platelets are essential for hemostasis as they aggregate at sites of vascular injury to initiate the formation of a blood clot." },

{ question: "During the platelet phase, what do activated platelets release to attract more platelets?", options: ["Chemical factors", "Hormones", "Enzymes", "Cytokines"], correctAnswer: "Chemical factors", explanation: "Activated platelets release chemical signals that recruit additional platelets to the site of injury, amplifying the clotting response." },

{ question: "Which substance released by intact endothelial cells helps inhibit platelet aggregation?", options: ["Prostacyclin", "Thromboxane A2", "ADP", "Epinephrine"], correctAnswer: "Prostacyclin", explanation: "Prostacyclin, released by healthy endothelial cells, inhibits platelet aggregation and prevents unnecessary clot formation." },

{ question: "What is the primary role of the liver in the context of blood clotting?", options: ["Synthesis of clotting factors", "Storage of red blood cells", "Production of platelets", "Destruction of white blood cells"], correctAnswer: "Synthesis of clotting factors", explanation: "The liver is responsible for synthesizing many of the clotting factors that are essential for the blood coagulation process." },

{ question: "Which vitamin is essential for the production of certain clotting factors in the liver?", options: ["Vitamin K", "Vitamin A", "Vitamin D", "Vitamin C"], correctAnswer: "Vitamin K", explanation: "Vitamin K plays a critical role in the synthesis of several clotting factors in the liver, making it essential for proper blood coagulation." },

{ question: "What does the common pathway in coagulation refer to?", options: ["The convergence of the intrinsic and extrinsic pathways leading to fibrin formation", "The process of platelet aggregation", "The breakdown of red blood cells", "The activation of white blood cells"], correctAnswer: "The convergence of the intrinsic and extrinsic pathways leading to fibrin formation", explanation: "The common pathway is the stage in coagulation where both the intrinsic and extrinsic pathways converge, resulting in the conversion of fibrinogen to fibrin." },

{ question: "What initiates the extrinsic pathway of coagulation?", options: ["Release of tissue factor by damaged tissues", "Exposure of collagen", "Platelet aggregation", "Vasoconstriction"], correctAnswer: "Release of tissue factor by damaged tissues", explanation: "The extrinsic pathway is triggered by the release of tissue factor from damaged endothelial cells and tissues." },

{ question: "What initiates the intrinsic pathway of coagulation?", options: ["Exposure of collagen in the vessel wall", "Tissue factor release", "Platelet aggregation", "Vasoconstriction"], correctAnswer: "Exposure of collagen in the vessel wall", explanation: "The intrinsic pathway is activated when the collagen in the damaged blood vessel wall is exposed to circulating blood." },

{ question: "Which component of blood is primarily responsible for transporting nutrients and hormones?", options: ["Blood plasma", "Platelets", "Red blood cells", "White blood cells"], correctAnswer: "Blood plasma", explanation: "Blood plasma acts as the medium for transporting nutrients, hormones, and waste products throughout the body." },

{ question: "What is erythropoietin?", options: ["A hormone that stimulates red blood cell production", "A plasma protein", "A clotting factor", "A type of white blood cell"], correctAnswer: "A hormone that stimulates red blood cell production", explanation: "Erythropoietin is a hormone produced mainly by the kidneys that signals the bone marrow to produce more red blood cells." },

{ question: "What is the main function of immunoglobulins found in plasma?", options: ["Defending against pathogens", "Transporting oxygen", "Aiding in clot formation", "Regulating blood pressure"], correctAnswer: "Defending against pathogens", explanation: "Immunoglobulins, or antibodies, are essential for the immune system as they recognize and neutralize pathogens." },

{ question: "Which of the following best describes blood's role in temperature regulation?", options: ["It absorbs and distributes heat throughout the body", "It directly generates heat", "It cools the body by evaporation", "It does not play a role in temperature regulation"], correctAnswer: "It absorbs and distributes heat throughout the body", explanation: "Blood helps regulate body temperature by absorbing heat from metabolic processes and distributing it throughout the body." },




],
      },

  

  
  
  
  





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////Genetics/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
{
      category: "Genetics",
      questions: [



  {
    "question": "Which syndrome is associated with a 'happy puppet' appearance?",
    "options": ["Prader-Willi syndrome", "Angelman syndrome", "DiGeorge syndrome", "Wolf-Hirschhorn syndrome"],
    "correctAnswer": "Angelman syndrome",
    "explanation": "Angelman syndrome is characterized by developmental delay, speech impairment, ataxia, and frequent laughter, leading to its 'happy puppet' nickname."
  },
  {
    "question": "Which of the following is a clinical feature of Turner’s syndrome?",
    "options": ["Tall stature", "Gynecomastia", "Shield chest", "Macrocephaly"],
    "correctAnswer": "Shield chest",
    "explanation": "Turner syndrome (45, XO) is characterized by short stature, a broad shield-like chest, and primary amenorrhea."
  },
  {
    "question": "Which genetic disorder results from a deletion in the short arm of chromosome 5?",
    "options": ["Prader-Willi syndrome", "Wolf-Hirschhorn syndrome", "Cri-du-chat syndrome", "Miller-Dieker syndrome"],
    "correctAnswer": "Cri-du-chat syndrome",
    "explanation": "Cri-du-chat syndrome is caused by a deletion on chromosome 5p and is associated with a characteristic high-pitched cry in infants."
  },
  {
    "question": "Which of the following is an example of a structural chromosomal abnormality?",
    "options": ["Trisomy 21", "Monosomy X", "Deletion", "Aneuploidy"],
    "correctAnswer": "Deletion",
    "explanation": "A deletion occurs when a portion of a chromosome is missing, leading to genetic disorders such as Cri-du-chat syndrome."
  },
  {
    "question": "What is the chromosomal composition of a male?",
    "options": ["XX", "YY", "XY", "XO"],
    "correctAnswer": "XY",
    "explanation": "Males have one X and one Y chromosome (XY), while females have two X chromosomes (XX)."
  },
  {
    "question": "What type of centromere positioning does a submetacentric chromosome have?",
    "options": ["In the middle", "Close to the middle", "At the end", "At the farthest tip"],
    "correctAnswer": "Close to the middle",
    "explanation": "A submetacentric chromosome has its centromere slightly off-center, resulting in one arm being slightly longer than the other."
  },
  {
    "question": "What is the most common cause of primary amenorrhea?",
    "options": ["Down syndrome", "Turner’s syndrome", "Klinefelter’s syndrome", "Angelman syndrome"],
    "correctAnswer": "Turner’s syndrome",
    "explanation": "Turner syndrome (45, XO) often leads to ovarian dysgenesis, causing primary amenorrhea."
  },
  {
    "question": "Which condition results from an extra copy of chromosome 13?",
    "options": ["Down syndrome", "Patau syndrome", "Edward’s syndrome", "Turner’s syndrome"],
    "correctAnswer": "Patau syndrome",
    "explanation": "Patau syndrome (trisomy 13) is associated with severe intellectual disability, microcephaly, and congenital malformations."
  },

  {
    "question": "Which type of mutation involves the substitution of a single nucleotide without changing the amino acid sequence?",
    "options": ["Missense mutation", "Nonsense mutation", "Silent mutation", "Frameshift mutation"],
    "correctAnswer": "Silent mutation",
    "explanation": "A silent mutation occurs when a nucleotide substitution does not alter the encoded amino acid due to the redundancy of the genetic code."
  },
  {
    "question": "A newborn presents with hypotonia, poor feeding, and characteristic almond-shaped eyes. Which genetic disorder is most likely?",
    "options": ["Prader-Willi syndrome", "Angelman syndrome", "Cri-du-chat syndrome", "Patau syndrome"],
    "correctAnswer": "Prader-Willi syndrome",
    "explanation": "Prader-Willi syndrome is characterized by hypotonia, poor feeding in infancy, and later hyperphagia leading to obesity."
  },
  {
    "question": "Which mode of inheritance is characterized by the transmission of a trait from an affected father to all of his daughters but none of his sons?",
    "options": ["Autosomal dominant", "Autosomal recessive", "X-linked dominant", "X-linked recessive"],
    "correctAnswer": "X-linked dominant",
    "explanation": "In X-linked dominant inheritance, affected fathers pass the trait to all their daughters but not to their sons."
  },
  {
    "question": "Which genetic disorder is associated with a mutation in the FMR1 gene and causes intellectual disability, a long face, and large ears?",
    "options": ["Fragile X syndrome", "Klinefelter syndrome", "Turner syndrome", "Down syndrome"],
    "correctAnswer": "Fragile X syndrome",
    "explanation": "Fragile X syndrome is caused by an expansion of CGG repeats in the FMR1 gene, leading to intellectual disability and characteristic facial features."
  },
  {
    "question": "Which condition results from an extra copy of chromosome 13 and is associated with severe congenital anomalies and a high mortality rate?",
    "options": ["Edward syndrome", "Down syndrome", "Patau syndrome", "Turner syndrome"],
    "correctAnswer": "Patau syndrome",
    "explanation": "Patau syndrome (trisomy 13) is associated with severe developmental abnormalities, including cleft lip, polydactyly, and cardiac defects."
  },
  {
    "question": "A person with a deletion on chromosome 22q11.2 presents with cardiac defects, cleft palate, and immunodeficiency. What is the diagnosis?",
    "options": ["DiGeorge syndrome", "Angelman syndrome", "Prader-Willi syndrome", "Williams syndrome"],
    "correctAnswer": "DiGeorge syndrome",
    "explanation": "DiGeorge syndrome (22q11.2 deletion) is characterized by congenital heart defects, immune deficiencies, and facial abnormalities."
  },
  {
    "question": "A child with short stature, elfin facial features, and a friendly personality is diagnosed with which genetic condition?",
    "options": ["Williams syndrome", "Turner syndrome", "Down syndrome", "Fragile X syndrome"],
    "correctAnswer": "Williams syndrome",
    "explanation": "Williams syndrome is caused by a deletion on chromosome 7q11.23, leading to distinctive facial features and an outgoing personality."
  },
  {
    "question": "Which term describes a genetic condition that appears in every generation of a family?",
    "options": ["Autosomal recessive", "X-linked recessive", "Autosomal dominant", "Mitochondrial inheritance"],
    "correctAnswer": "Autosomal dominant",
    "explanation": "Autosomal dominant traits are typically present in every generation, as only one affected allele is needed for expression."
  },
  {
    "question": "Which disorder is caused by a defect in the dystrophin gene and leads to progressive muscle weakness?",
    "options": ["Duchenne muscular dystrophy", "Huntington disease", "Cystic fibrosis", "Tay-Sachs disease"],
    "correctAnswer": "Duchenne muscular dystrophy",
    "explanation": "Duchenne muscular dystrophy is an X-linked disorder caused by mutations in the dystrophin gene, leading to progressive muscle degeneration."
  },
  {
    "question": "A child presents with cherry-red macula, neurodegeneration, and an accumulation of GM2 gangliosides. What is the likely diagnosis?",
    "options": ["Tay-Sachs disease", "Niemann-Pick disease", "Gaucher disease", "Hurler syndrome"],
    "correctAnswer": "Tay-Sachs disease",
    "explanation": "Tay-Sachs disease is an autosomal recessive disorder caused by HEXA gene mutations, leading to GM2 ganglioside accumulation in neurons."
  },
  {
    "question": "Which inheritance pattern is observed in mitochondrial diseases?",
    "options": ["Maternal inheritance", "Autosomal dominant", "Autosomal recessive", "X-linked inheritance"],
    "correctAnswer": "Maternal inheritance",
    "explanation": "Mitochondrial disorders are inherited exclusively from the mother, as mitochondria are passed through the oocyte."
  },
  {
    "question": "Which chromosomal disorder results in a male phenotype but with infertility due to an additional X chromosome?",
    "options": ["Klinefelter syndrome", "Turner syndrome", "XYY syndrome", "Androgen insensitivity syndrome"],
    "correctAnswer": "Klinefelter syndrome",
    "explanation": "Klinefelter syndrome (47, XXY) results in hypogonadism, infertility, and tall stature in males."
  },
  {
    "question": "Which type of genetic testing is used to detect single nucleotide polymorphisms (SNPs) across the genome?",
    "options": ["Karyotyping", "Microarray analysis", "FISH", "PCR"],
    "correctAnswer": "Microarray analysis",
    "explanation": "Microarray analysis allows for the detection of SNPs, copy number variations, and gene expression levels."
  },
  {
    "question": "Which genetic disorder results from an expansion of CAG repeats and causes progressive neurodegeneration?",
    "options": ["Huntington disease", "Fragile X syndrome", "Myotonic dystrophy", "Spinocerebellar ataxia"],
    "correctAnswer": "Huntington disease",
    "explanation": "Huntington disease is an autosomal dominant disorder caused by CAG repeat expansion in the HTT gene, leading to progressive neurodegeneration."
  },
  {
    "question": "Which prenatal screening test involves analyzing free fetal DNA in maternal blood?",
    "options": ["Amniocentesis", "Chorionic villus sampling", "Non-invasive prenatal testing (NIPT)", "Karyotyping"],
    "correctAnswer": "Non-invasive prenatal testing (NIPT)",
    "explanation": "NIPT analyzes cell-free fetal DNA in maternal blood to screen for chromosomal abnormalities non-invasively."
  },
  {
    "question": "What is the term for a mutation that results in a premature stop codon?",
    "options": ["Missense mutation", "Nonsense mutation", "Silent mutation", "Frameshift mutation"],
    "correctAnswer": "Nonsense mutation",
    "explanation": "A nonsense mutation introduces a premature stop codon, leading to truncated and usually nonfunctional proteins."
  },
  {
    "question": "Which enzyme is responsible for unwinding DNA during replication?",
    "options": ["DNA polymerase", "RNA polymerase", "Helicase", "Ligase"],
    "correctAnswer": "Helicase",
    "explanation": "Helicase unwinds the DNA helix, allowing replication to occur."
  },
  {
    "question": "What is the function of telomerase?",
    "options": ["Repairing DNA damage", "Synthesizing RNA", "Extending the ends of chromosomes", "Splicing introns"],
    "correctAnswer": "Extending the ends of chromosomes",
    "explanation": "Telomerase adds repetitive sequences to the ends of chromosomes, preventing their shortening during replication."
  },



  {
    "question": "Which molecule carries genetic information and is responsible for heredity?",
    "options": ["RNA", "Protein", "DNA", "Lipid"],
    "correctAnswer": "DNA",
    "explanation": "DNA (Deoxyribonucleic acid) contains the genetic blueprint for the development, functioning, growth, and reproduction of all known organisms."
  },
  {
    "question": "A genetic disorder is suspected in a newborn with multiple congenital anomalies. Which technique would be most useful for identifying chromosomal abnormalities?",
    "options": ["Karyotyping", "PCR", "Western blot", "ELISA"],
    "correctAnswer": "Karyotyping",
    "explanation": "Karyotyping involves visualizing chromosomes to detect structural and numerical abnormalities."
  },
  {
    "question": "A patient presents with intellectual disability, obesity, and an insatiable appetite. A microdeletion on chromosome 15 is found on the paternal chromosome. What is the diagnosis?",
    "options": ["Prader-Willi syndrome", "Angelman syndrome", "Down syndrome", "Turner syndrome"],
    "correctAnswer": "Prader-Willi syndrome",
    "explanation": "Prader-Willi syndrome results from the loss of paternally inherited genes on chromosome 15q11-13."
  },
  {
    "question": "A scientist studying gene expression is most likely working in which branch of genetics?",
    "options": ["Cytogenetics", "Molecular genetics", "Population genetics", "Immunogenetics"],
    "correctAnswer": "Molecular genetics",
    "explanation": "Molecular genetics focuses on the structure and function of genes at a molecular level."
  },
  {
    "question": "Which structural component of DNA forms the backbone of the double helix?",
    "options": ["Nitrogenous bases", "Phosphate and sugar", "Hydrogen bonds", "Amino acids"],
    "correctAnswer": "Phosphate and sugar",
    "explanation": "The backbone of DNA consists of alternating phosphate groups and sugar molecules (deoxyribose)."
  },
  {
    "question": "What is the functional unit of DNA that determines traits?",
    "options": ["Chromosome", "Gene", "Protein", "Nucleotide"],
    "correctAnswer": "Gene",
    "explanation": "A gene is a sequence of DNA that contains the instructions for building a specific protein, influencing traits."
  },
  {
    "question": "Which nitrogenous base pairs with cytosine in DNA?",
    "options": ["Adenine", "Guanine", "Thymine", "Uracil"],
    "correctAnswer": "Guanine",
    "explanation": "In DNA, cytosine pairs with guanine through three hydrogen bonds."
  },
  {
    "question": "In a karyotyping analysis, a trisomy of chromosome 21 is found. What is the likely diagnosis?",
    "options": ["Turner syndrome", "Klinefelter syndrome", "Down syndrome", "Edward syndrome"],
    "correctAnswer": "Down syndrome",
    "explanation": "Down syndrome is caused by an extra copy of chromosome 21, also known as trisomy 21."
  },
  {
    "question": "A newborn has a webbed neck, short stature, and underdeveloped ovaries. Which chromosomal condition is most likely?",
    "options": ["Turner syndrome", "Klinefelter syndrome", "Down syndrome", "Patau syndrome"],
    "correctAnswer": "Turner syndrome",
    "explanation": "Turner syndrome (45, XO) presents with features like webbed neck, short stature, and gonadal dysgenesis."
  },
  {
    "question": "Which structural abnormality involves a missing segment of a chromosome?",
    "options": ["Deletion", "Translocation", "Duplication", "Inversion"],
    "correctAnswer": "Deletion",
    "explanation": "A deletion occurs when a part of a chromosome is lost, often leading to genetic disorders."
  },
  {
    "question": "A female presents with primary amenorrhea and a 45, XO karyotype. What syndrome does she have?",
    "options": ["Turner syndrome", "Klinefelter syndrome", "Down syndrome", "Fragile X syndrome"],
    "correctAnswer": "Turner syndrome",
    "explanation": "Turner syndrome is associated with a single X chromosome (45, XO) and commonly causes primary amenorrhea."
  },
  {
    "question": "Which chromosomal abnormality is characterized by a cat-like cry in infants?",
    "options": ["Cri-du-chat syndrome", "Angelman syndrome", "Prader-Willi syndrome", "Patau syndrome"],
    "correctAnswer": "Cri-du-chat syndrome",
    "explanation": "Cri-du-chat syndrome, caused by a deletion on chromosome 5p, leads to a distinctive high-pitched cry in infants."
  },
  {
    "question": "A male with tall stature, gynecomastia, and small testes has a 47, XXY karyotype. What is the diagnosis?",
    "options": ["Turner syndrome", "Klinefelter syndrome", "Down syndrome", "Edward syndrome"],
    "correctAnswer": "Klinefelter syndrome",
    "explanation": "Klinefelter syndrome (47, XXY) presents with hypogonadism, tall stature, and sometimes gynecomastia."
  },
  {
    "question": "Which syndrome is associated with inappropriate laughter and microdeletion of chromosome 15 from the maternal side?",
    "options": ["Prader-Willi syndrome", "Angelman syndrome", "Down syndrome", "Turner syndrome"],
    "correctAnswer": "Angelman syndrome",
    "explanation": "Angelman syndrome is caused by the loss of maternal gene expression on chromosome 15q11-13."
  },
  {
    "question": "If a gene must be present on both chromosomes of a homologous pair to express a trait, it is considered:",
    "options": ["Dominant", "Recessive", "Codominant", "Epistatic"],
    "correctAnswer": "Recessive",
    "explanation": "A recessive gene expresses its trait only when two copies are present."
  },
  {
    "question": "What type of chromosomal abnormality involves exchange of genetic material between non-homologous chromosomes?",
    "options": ["Deletion", "Duplication", "Translocation", "Inversion"],
    "correctAnswer": "Translocation",
    "explanation": "A translocation involves the transfer of a chromosome segment to a non-homologous chromosome."
  },
  {
    "question": "Which genetic condition is caused by trisomy 18?",
    "options": ["Down syndrome", "Patau syndrome", "Edward syndrome", "Turner syndrome"],
    "correctAnswer": "Edward syndrome",
    "explanation": "Edward syndrome is characterized by trisomy 18, leading to developmental delays and structural malformations."
  },
  {
    "question": "Which branch of genetics studies inherited metabolic disorders?",
    "options": ["Cytogenetics", "Population genetics", "Biochemical genetics", "Molecular genetics"],
    "correctAnswer": "Biochemical genetics",
    "explanation": "Biochemical genetics deals with the chemical basis of genetic disorders, focusing on metabolism."
  },
  {
    "question": "A researcher is studying the impact of genetics on mental health disorders. This falls under which branch?",
    "options": ["Behavioral genetics", "Immunogenetics", "Molecular genetics", "Cytogenetics"],
    "correctAnswer": "Behavioral genetics",
    "explanation": "Behavioral genetics explores the role of genetics in influencing behavior and mental health."
  },
  {
    "question": "Which of the following chromosomal structures is visible under a microscope during metaphase?",
    "options": ["Nucleotides", "Chromatin", "Chromosome", "Histone"],
    "correctAnswer": "Chromosome",
    "explanation": "During metaphase, chromosomes condense and become visible, allowing for karyotyping."
  },


  

  {
    question: "A child is diagnosed with Down syndrome. Which of the following statements correctly describes their karyotype?",
    options: ["45, XY", "46, XY", "47, XY, +21", "47, XX, +18"],
    correctAnswer: "47, XY, +21",
    explanation: "Down syndrome is caused by trisomy 21, where an individual has an extra copy of chromosome 21. Affected males have a karyotype of 47, XY, +21."
  },
  {
    question: "A newborn is diagnosed with Turner syndrome. What is their chromosomal composition?",
    options: ["47, XXY", "46, XX", "45, XO", "47, XYY"],
    correctAnswer: "45, XO",
    explanation: "Turner syndrome results from the absence of one X chromosome (45, XO), leading to developmental abnormalities in females."
  },
  {
    question: "A couple undergoes genetic counseling due to a family history of cystic fibrosis, an autosomal recessive disorder. What is the probability that their child will inherit the disease if both parents are carriers?",
    options: ["0%", "25%", "50%", "75%"],
    correctAnswer: "25%",
    explanation: "If both parents are carriers (heterozygous), there is a 25% chance that the child will inherit two recessive alleles and develop cystic fibrosis."
  },
  {
    question: "A researcher is studying an individual with Klinefelter syndrome. Which of the following karyotypes is expected?",
    options: ["47, XXY", "45, XO", "47, XYY", "46, XY"],
    correctAnswer: "47, XXY",
    explanation: "Klinefelter syndrome results from an extra X chromosome in males (47, XXY), leading to symptoms such as infertility and gynecomastia."
  },
  {
    question: "A forensic scientist extracts DNA from a crime scene. Which component of the DNA will be used for genetic fingerprinting?",
    options: ["Nitrogenous bases", "Phosphate group", "Deoxyribose sugar", "Chromosome 21"],
    correctAnswer: "Nitrogenous bases",
    explanation: "DNA fingerprinting analyzes specific base sequences (e.g., short tandem repeats) that vary among individuals."
  },
  {
    question: "A laboratory technician is performing karyotyping on a patient. Which of the following could be detected through this test?",
    options: ["Gene mutation", "Chromosomal translocation", "Point mutation", "Mitochondrial DNA disorder"],
    correctAnswer: "Chromosomal translocation",
    explanation: "Karyotyping reveals structural and numerical chromosomal abnormalities, such as deletions, trisomies, and translocations."
  },
  {
    question: "A female presents with primary amenorrhea, short stature, and a webbed neck. Which chromosomal abnormality is most likely?",
    options: ["47, XXY", "45, XO", "47, XYY", "46, XX"],
    correctAnswer: "45, XO",
    explanation: "Turner syndrome (45, XO) is characterized by these physical features and infertility."
  },
  {
    question: "A male with tall stature, gynecomastia, and small testes is diagnosed with Klinefelter syndrome. What is his chromosomal karyotype?",
    options: ["47, XXY", "45, XO", "47, XYY", "46, XY"],
    correctAnswer: "47, XXY",
    explanation: "Klinefelter syndrome occurs due to an extra X chromosome in males."
  },
  {
    question: "A geneticist is studying the inheritance pattern of Huntington’s disease. What is the mode of inheritance?",
    options: ["Autosomal recessive", "X-linked recessive", "Autosomal dominant", "Mitochondrial"],
    correctAnswer: "Autosomal dominant",
    explanation: "Huntington’s disease follows an autosomal dominant inheritance pattern, meaning an affected individual has a 50% chance of passing it to offspring."
  },
  {
    question: "A scientist studying sickle cell disease is analyzing which type of mutation?",
    options: ["Frameshift mutation", "Point mutation", "Nonsense mutation", "Chromosomal deletion"],
    correctAnswer: "Point mutation",
    explanation: "Sickle cell disease is caused by a single nucleotide substitution (point mutation) in the beta-globin gene."
  },
  {
    question: "A newborn presents with hypotonia, feeding difficulties, and later develops an insatiable appetite. Which chromosomal abnormality is most likely responsible?",
    options: ["Prader-Willi syndrome", "Angelman syndrome", "Down syndrome", "Turner syndrome"],
    correctAnswer: "Prader-Willi syndrome",
    explanation: "Prader-Willi syndrome results from a deletion in the paternal chromosome 15."
  },
  {
    question: "Which enzyme is responsible for unwinding the DNA double helix during replication?",
    options: ["DNA ligase", "Helicase", "DNA polymerase", "Topoisomerase"],
    correctAnswer: "Helicase",
    explanation: "Helicase unwinds the DNA strands to allow replication to proceed."
  },
  {
    question: "A woman with a family history of hemophilia gives birth to a son. What is the probability that he will inherit the disease if she is a carrier?",
    options: ["0%", "25%", "50%", "100%"],
    correctAnswer: "50%",
    explanation: "Hemophilia is an X-linked recessive disorder. Since males inherit only one X chromosome from their mother, they have a 50% chance of inheriting the disorder if their mother is a carrier."
  },
  {
    question: "Which of the following conditions is caused by a deletion on chromosome 5, leading to a characteristic high-pitched cry in infants?",
    options: ["Down syndrome", "Cri-du-chat syndrome", "Edward syndrome", "Patau syndrome"],
    correctAnswer: "Cri-du-chat syndrome",
    explanation: "Cri-du-chat syndrome is caused by a deletion on chromosome 5 and is characterized by intellectual disability and a distinctive cat-like cry."
  },
  {
    question: "Which chromosomal abnormality results from non-disjunction during meiosis, leading to an extra chromosome 18?",
    options: ["Down syndrome", "Edward syndrome", "Patau syndrome", "Turner syndrome"],
    correctAnswer: "Edward syndrome",
    explanation: "Edward syndrome (trisomy 18) is caused by an extra chromosome 18 and leads to severe developmental delays."
  },
  {
    question: "A woman with a mitochondrial disorder passes it to which of her children?",
    options: ["Only daughters", "Only sons", "Both sons and daughters", "None"],
    correctAnswer: "Both sons and daughters",
    explanation: "Mitochondrial disorders are inherited maternally, meaning all offspring (both male and female) inherit the mutation."
  },
  {
    question: "Which genetic disorder is associated with an increased risk of leukemia and congenital heart defects?",
    options: ["Turner syndrome", "Klinefelter syndrome", "Down syndrome", "Angelman syndrome"],
    correctAnswer: "Down syndrome",
    explanation: "Individuals with Down syndrome (trisomy 21) have an increased risk of leukemia and congenital heart defects."
  },
  {
    question: "Which term describes the phenomenon where a single gene influences multiple traits?",
    options: ["Codominance", "Epistasis", "Pleiotropy", "Polygenic inheritance"],
    correctAnswer: "Pleiotropy",
    explanation: "Pleiotropy occurs when a single gene has multiple effects on an organism’s phenotype."
  },
  {
    question: "What is the primary function of DNA polymerase during replication?",
    options: ["Unwinding the DNA strand", "Synthesizing new DNA strands", "Sealing Okazaki fragments", "Binding RNA primers"],
    correctAnswer: "Synthesizing new DNA strands",
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
  
  
  

  
  
  
 
