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
          
    
  
  { question: "Which physiologist defined systemic circulation through his work 'An anatomical exercise on the motion of the heart & blood in living beings'?", options: ["William Harvey", "Galen", "Claude Bernard", "Franciscus Sylvius"], correctAnswer: "William Harvey", explanation: "William Harvey defined systemic circulation in his 1628 publication, describing how blood is pumped by the heart throughout the body." }, { question: "Who first isolated and purified insulin, thereby revolutionizing diabetes treatment?", options: ["Frederick Banting and Charles Best", "Joseph Lister", "Claude Bernard", "Earl Sutherland"], correctAnswer: "Frederick Banting and Charles Best", explanation: "In 1922, Frederick Banting and Charles Best isolated insulin, transforming diabetes management from a fatal disease to a manageable condition." }, { question: "Which discovery is attributed to Karl Landsteiner in the field of hematology?", options: ["Isolation of insulin", "Discovery of water channels", "Classification of human blood groups and the Rh factor", "Development of the patch-clamp technique"], correctAnswer: "Classification of human blood groups and the Rh factor", explanation: "Karl Landsteiner classified the basic human blood groups and later identified the Rh factor, forming the basis of modern blood typing." }, { question: "Which homeostatic mechanism allows the body to anticipate a change and initiate a reflex response before it occurs?", options: ["Negative feedback", "Positive feedback", "Feed-forward control", "Tonic control"], correctAnswer: "Feed-forward control", explanation: "Feed-forward control enables the body to preemptively adjust to expected changes by initiating a reflex response before the stimulus fully manifests." }, { question: "Which type of control in physiology is compared to adjusting a radio's volume to regulate an organ's activity?", options: ["Negative feedback", "Tonic control", "Antagonistic control", "Circadian rhythms"], correctAnswer: "Tonic control", explanation: "Tonic control functions like a radio's volume knob, allowing for the modulation of an organ system's activity by adjusting its intensity." }, { question: "In antagonistic control, how do the two independent regulators function?", options: ["They work together to enhance the response", "They work in opposition to modulate an organ's activity", "They have no interaction", "They sequentially alternate roles"], correctAnswer: "They work in opposition to modulate an organ's activity", explanation: "Antagonistic control involves two regulators that operate in opposition, balancing each other's effects to maintain proper function." }, { question: "What are circadian rhythms?", options: ["Random fluctuations in body processes", "24-hour cycles that regulate various biological functions", "A type of feed-forward control", "The chemical signals that trigger muscle contractions"], correctAnswer: "24-hour cycles that regulate various biological functions", explanation: "Circadian rhythms are inherent 24-hour cycles that govern biological processes such as sleep, hormone release, and body temperature regulation." }, { question: "Which Nobel Prize-winning researchers developed the patch-clamp technique used to study ion channels?", options: ["Erwin Neher and Bert Sakmann", "James Watson and Francis Crick", "Ivan Pavlov and Claude Bernard", "Peter Agre and Karl Landsteiner"], correctAnswer: "Erwin Neher and Bert Sakmann", explanation: "Erwin Neher and Bert Sakmann developed the patch-clamp technique, enabling precise measurements of ion movements through cell membranes." }, { question: "Who is credited with performing the first human heart transplant?", options: ["Christiaan Barnard", "William Harvey", "Claude Bernard", "Henry Bowditch"], correctAnswer: "Christiaan Barnard", explanation: "Christiaan Barnard performed the first human heart transplant in 1967, marking a landmark achievement in medical history." }, { question: "Which system in the human body comprises the kidneys, ureters, bladder, and urethra?", options: ["Digestive system", "Nervous system", "Renal/urinary system", "Musculoskeletal system"], correctAnswer: "Renal/urinary system", explanation: "The renal/urinary system includes the kidneys, ureters, bladder, and urethra, and is responsible for filtering blood and removing waste." }, { question: "Approximately how many bones constitute the human skeletal system?", options: ["106", "206", "306", "406"], correctAnswer: "206", explanation: "The human skeletal system is composed of approximately 206 bones, divided between the axial and appendicular skeletons." }, { question: "Which part of the nervous system includes the brain and the spinal cord?", options: ["Peripheral nervous system", "Central nervous system", "Autonomic nervous system", "Somatic nervous system"], correctAnswer: "Central nervous system", explanation: "The central nervous system, consisting of the brain and spinal cord, is responsible for processing and integrating information in the body." }, { question: "What phenomenon did Ivan Pavlov famously study, which led to his Nobel Prize-winning research?", options: ["Blood circulation", "Conditional reflexes", "Discovery of epinephrine", "Telomere protection"], correctAnswer: "Conditional reflexes", explanation: "Ivan Pavlov's research on conditional reflexes, particularly his experiments with dogs, provided key insights into how organisms learn through association." }



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



{ question: "What does physiology primarily study?", options: ["The structure of dead organisms", "The proper function and vital processes of living organisms", "Inorganic chemical reactions", "Genetic mutations"], correctAnswer: "The proper function and vital processes of living organisms", explanation: "Physiology is the study of proper function in living things and the vital processes that sustain life, as described in the definitions section." }, 

{ question: "Which term best describes the process by which the body maintains a stable internal environment despite external changes?", options: ["Metabolism", "Homeostasis", "Anabolism", "Catabolism"], correctAnswer: "Homeostasis", explanation: "Homeostasis is the process by which the body maintains a constant internal environment through various feedback mechanisms." }, 

{ question: "Who is acknowledged as the father of experimental physiology for his early use of experimentation on the body's systems?", options: ["Jean Fernel", "Galen", "William Harvey", "Claude Bernard"], correctAnswer: "Galen", explanation: "Galen is largely acknowledged as the father of experimental physiology due to his pioneering experiments on the body's systems." }, 

{ question: "Which physician was the first to use the term 'physiology', derived from the Greek meaning 'study of nature'?", options: ["William Harvey", "Galen", "Jean Fernel", "Franciscus Sylvius"], correctAnswer: "Jean Fernel", explanation: "Jean Fernel, a French physician, was the first to use the term 'physiology' and properly describe aspects of the spinal canal, as noted in the history section." }, 

{ question: "Which of the following is the largest and only single-organ system in the human body?", options: ["Cardiovascular system", "Integumentary system", "Nervous system", "Digestive system"], correctAnswer: "Integumentary system", explanation: "The integumentary system, which includes the skin, nails, sweat glands, and hair, is unique as the largest single-organ system in the body." }, 

{ question: "Which scientists are credited with describing the double-helix structure of DNA?", options: ["James Watson and Francis Crick", "Ivan Pavlov and Claude Bernard", "John O’Keefe and May-Britt Moser", "Peter Agre and John Jacob Abel"], correctAnswer: "James Watson and Francis Crick", explanation: "James Watson and Francis Crick won the Nobel Prize in 1962 for their groundbreaking description of the double-helix structure of DNA." }, 

{ question: "Which discovery is associated with Frederick Banting and Charles Best?", options: ["Isolation of insulin", "Discovery of epinephrine", "Development of the patch-clamp technique", "Identification of cyclic AMP"], correctAnswer: "Isolation of insulin", explanation: "Frederick Banting and Charles Best isolated and purified insulin in 1922, a discovery that revolutionized diabetes treatment." }, 

{ question: "Which type of feedback mechanism works by reducing or removing the initial stimulus to maintain stability?", options: ["Positive feedback", "Negative feedback", "Feed-forward control", "Tonic control"], correctAnswer: "Negative feedback", explanation: "Negative feedback mechanisms help maintain homeostasis by reducing deviations from a set point, ensuring a stable internal environment." }, 

{ question: "Which system of the human body is composed of the heart, arteries, capillaries, and veins?", options: ["Nervous system", "Respiratory system", "Cardiovascular system", "Digestive system"], correctAnswer: "Cardiovascular system", explanation: "The cardiovascular system consists of the heart and a network of blood vessels that circulate blood throughout the body." }, 

{ question: "Which Nobel Prize-winning researcher discovered water channels in cells?", options: ["August Krogh", "Peter Agre", "Walter Dandy", "Erwin Neher"], correctAnswer: "Peter Agre", explanation: "Peter Agre won the Nobel Prize in Chemistry in 2003 for his discovery of water channels, essential for water transport across cell membranes." },



{ question: "What is the origin of the word 'physiology'?", options: ["Greek", "Latin", "Arabic", "Sanskrit"], correctAnswer: "Greek", explanation: "The term 'physiology' is derived from the Greek word 'physiologia', meaning 'study of nature'." }, 

{ question: "Which of the following best describes human physiology?", options: ["Study of cellular structures only", "Study of normal and abnormal functions of the human body", "Study of diseases only", "Study of external body features"], correctAnswer: "Study of normal and abnormal functions of the human body", explanation: "Human physiology examines both the normal functions and the pathological conditions of the human body." }, 

{ question: "Which experimental technique did Johannes Walaeus contribute to physiology?", options: ["Venous occlusion experiment", "Patch-clamp technique", "Electrocardiography", "Magnetic resonance imaging"], correctAnswer: "Venous occlusion experiment", explanation: "Johannes Walaeus performed the venous occlusion experiment to support the concept of blood returning to the heart." }, 

{ question: "Which physician first properly described the spinal canal?", options: ["Jean Fernel", "Galen", "William Harvey", "Claude Bernard"], correctAnswer: "Jean Fernel", explanation: "Jean Fernel was the first to describe the spinal canal, marking an important development in anatomical studies." }, 

{ question: "Who brought the concept of blood circulation to the Netherlands and distinguished between types of glands?", options: ["Franciscus Sylvius", "Jean Fernel", "Johannes Walaeus", "William Beaumont"], correctAnswer: "Franciscus Sylvius", explanation: "Franciscus Sylvius introduced the concept of blood circulation in the Netherlands and differentiated between conglomerate and conglobate glands." }, 

{ question: "Who is considered the founder of Dutch experimental physiology?", options: ["Johannes Walaeus", "Galen", "Claude Bernard", "William Beaumont"], correctAnswer: "Johannes Walaeus", explanation: "Johannes Walaeus is regarded as the founder of Dutch experimental physiology for his pioneering experiments." }, 

{ question: "Which American physiologist used a patient's gunshot wound to study gastric function?", options: ["William Beaumont", "Joseph Lister", "Claude Bernard", "Ivan Pavlov"], correctAnswer: "William Beaumont", explanation: "William Beaumont's observation of a gunshot wound allowed him to study gastric function directly, contributing to practical physiology." }, 

{ question: "Which scientist is credited with reducing surgical mortality through the discovery of antiseptics?", options: ["Joseph Lister", "William Harvey", "Galen", "Claude Bernard"], correctAnswer: "Joseph Lister", explanation: "Joseph Lister introduced antiseptic techniques that dramatically reduced surgical mortality rates." }, 

{ question: "Which duo is known for advancing the cell theory in 1838?", options: ["Matthias Schleiden & Theodor Schwann", "Claude Bernard & William Beaumont", "Galen & Jean Fernel", "Frederick Banting & Charles Best"], correctAnswer: "Matthias Schleiden & Theodor Schwann", explanation: "Schleiden and Schwann were pivotal in establishing that all living organisms are composed of cells." }, 

{ question: "Which landmark text by Claude Bernard laid the foundation for experimental medicine?", options: ["An Introduction to the Study of Experimental Medicine", "The Principles of Physiology", "The System of the Human Body", "The Origin of Species"], correctAnswer: "An Introduction to the Study of Experimental Medicine", explanation: "Claude Bernard's work provided clear explanations of experimental methods in physiology and medicine." }, 

{ question: "Which institution initiated a medical physiology program in the 1870s?", options: ["Harvard University", "Oxford University", "Yale University", "Johns Hopkins University"], correctAnswer: "Harvard University", explanation: "Harvard University established a medical physiology program in the 1870s, appointing Henry Bowditch as its first full-time physiologist." }, 

{ question: "What did Ivan Pavlov study to develop the concept of conditional reflexes?", options: ["Salivary secretion in dogs", "Blood pressure regulation", "Heart rate variability", "Muscle contraction"], correctAnswer: "Salivary secretion in dogs", explanation: "Pavlov's experiments with dogs' salivary responses led to the development of the concept of conditional reflexes." }, 

{ question: "Who isolated and purified epinephrine from the adrenal gland in 1901?", options: ["John Jacob Abel and Jokichi Takamine", "Frederick Banting and Charles Best", "Joseph Lister and William Beaumont", "Claude Bernard and Galen"], correctAnswer: "John Jacob Abel and Jokichi Takamine", explanation: "John Jacob Abel and Jokichi Takamine made a breakthrough in hormone research by isolating epinephrine." }, 

{ question: "Who performed the first mammalian heart transplant?", options: ["Alexis Carrel", "Christiaan Barnard", "Walter Dandy", "Claude Bernard"], correctAnswer: "Alexis Carrel", explanation: "Alexis Carrel is recognized for performing the first mammalian heart transplant in 1904." }, 

{ question: "Which scientist's work led to the modern classification of human blood groups?", options: ["Karl Landsteiner", "Frederick Banting", "John O’Keefe", "Erwin Neher"], correctAnswer: "Karl Landsteiner", explanation: "Karl Landsteiner's research resulted in the classification of human blood groups and the discovery of the Rh factor." }, 

{ question: "What physiological process did August Krogh study to earn his Nobel Prize?", options: ["Capillary fluid exchange and oxygen diffusion", "Conditional reflexes", "G protein-coupled receptor activity", "Telomere protection"], correctAnswer: "Capillary fluid exchange and oxygen diffusion", explanation: "August Krogh's work on how fluids and oxygen exchange in capillaries was groundbreaking and earned him a Nobel Prize." }, 

{ question: "Which expedition led by Haldane J.S. helped study the effects of altitude on breathing?", options: ["Pike's Peak expedition", "Mount Everest expedition", "K2 expedition", "Andes expedition"], correctAnswer: "Pike's Peak expedition", explanation: "Haldane J.S. led an expedition to Pike's Peak in 1911 to investigate how altitude affects human respiration." }, 

{ question: "What method did Anton Carlson use to study the relationship between hunger and digestion?", options: ["Using an inflated balloon in the stomach", "Measuring blood pressure changes", "Recording neural activity", "Assessing hormone levels"], correctAnswer: "Using an inflated balloon in the stomach", explanation: "Anton Carlson employed an inflated balloon in the stomach during a 15-day fast to study stomach contractions related to hunger." }, 

{ question: "Which discovery in 1922 transformed the treatment of diabetes?", options: ["Isolation of insulin", "Discovery of epinephrine", "Identification of cyclic AMP", "Discovery of water channels"], correctAnswer: "Isolation of insulin", explanation: "The isolation of insulin by Banting and Best in 1922 revolutionized the management of diabetes." }, 

{ question: "Who is known for the first direct measurements of blood pressure in blood vessels?", options: ["Eugene Landis", "Henry Bowditch", "Claude Bernard", "William Harvey"], correctAnswer: "Eugene Landis", explanation: "Eugene Landis published the first direct measurements of blood pressure within arteries, capillaries, and veins." }, 

{ question: "What was the main focus of the Harvard Fatigue Laboratory established in 1927?", options: ["Exercise and environmental physiology", "Cell division", "Neurotransmitter activity", "Hormone synthesis"], correctAnswer: "Exercise and environmental physiology", explanation: "The Harvard Fatigue Laboratory concentrated on studying the effects of exercise and extreme environmental conditions on human physiology." }, 

{ question: "Which neurosurgeon identified the cause of hydrocephalus and invented the baseball helmet?", options: ["Walter Dandy", "John O’Keefe", "Claude Bernard", "Alexis Carrel"], correctAnswer: "Walter Dandy", explanation: "Walter Dandy is noted for his work on hydrocephalus and is credited with inventing the baseball helmet in the 1930s." }, 

{ question: "Which researchers elucidated the ionic mechanism behind nerve impulse transmission?", options: ["Hodgkin and Huxley", "Neher and Sakmann", "Pavlov and Bernard", "Landsteiner and Krogh"], correctAnswer: "Hodgkin and Huxley", explanation: "Hodgkin and Huxley discovered the ionic basis of nerve impulse transmission in 1952, a major milestone in neuroscience." }, 

{ question: "Who discovered the neurotransmitter linked to mood regulation?", options: ["Welsh J.H.", "Claude Bernard", "Galen", "Jean Fernel"], correctAnswer: "Welsh J.H.", explanation: "Welsh J.H. discovered serotonin in 1953, a neurotransmitter that plays a critical role in regulating mood." }, 

{ question: "Which research revealed the sliding filament mechanism in skeletal muscle contraction?", options: ["Studies by Huxley Andrew & Huxley Hugh", "Pavlov's experiments", "Bernard's experimental methods", "Neher and Sakmann's findings"], correctAnswer: "Studies by Huxley Andrew & Huxley Hugh", explanation: "The research by Huxley Andrew and Huxley Hugh in 1954 demonstrated that skeletal muscle contraction involves the sliding of filaments." }, 

{ question: "What major discovery about DNA was made by Watson and Crick?", options: ["The double helix structure", "The process of transcription", "The genetic code", "The role of RNA"], correctAnswer: "The double helix structure", explanation: "Watson and Crick are renowned for elucidating the double helix structure of DNA, a pivotal moment in molecular biology." }, 

{ question: "What breakthrough did Earl Sutherland achieve regarding cellular signaling?", options: ["Identification of cyclic AMP", "Isolation of insulin", "Discovery of epinephrine", "Measurement of blood pressure"], correctAnswer: "Identification of cyclic AMP", explanation: "Earl Sutherland's identification of cyclic AMP in 1971 was crucial in understanding how cells respond to hormonal signals." }, 

{ question: "Which technique, developed in 1974, allowed for detailed measurement of ion channel activity?", options: ["Electroencephalography", "Patch-clamp technique", "Magnetic resonance imaging", "Flow cytometry"], correctAnswer: "Patch-clamp technique", explanation: "The patch-clamp technique, introduced by Erwin Neher and Bert Sakmann, enabled precise measurement of ion flow across cell membranes." }, 

{ question: "Which trio won the Nobel Prize in 2001 for their work on cell cycle regulation?", options: ["Leland Hartwell, Paul Nurse, and Timothy Hunt", "Watson, Crick, and Franklin", "Neher, Sakmann, and Dandy", "Banting, Best, and Lister"], correctAnswer: "Leland Hartwell, Paul Nurse, and Timothy Hunt", explanation: "In 2001, these scientists were awarded the Nobel Prize for discovering key mechanisms regulating cell growth, division, and death." }, 

{ question: "What is the primary function of water channels discovered by Peter Agre?", options: ["Facilitating oxygen transport", "Allowing water to move across cell membranes", "Regulating blood pressure", "Transmitting nerve impulses"], correctAnswer: "Allowing water to move across cell membranes", explanation: "Peter Agre's discovery of water channels revealed how cells manage water transport, which is essential for cellular homeostasis." }, 

{ question: "Which Nobel Prize-winning discovery involves the maintenance of chromosome ends?", options: ["Telomere protection by telomerase", "DNA replication", "Protein synthesis", "RNA interference"], correctAnswer: "Telomere protection by telomerase", explanation: "The discovery that telomerase protects chromosome ends has been vital in understanding aging and cellular replication." }, 

{ question: "Who were awarded the Nobel Prize in 2011 for their contributions to the understanding of immunity?", options: ["Bruce Beutler, Jules Hoffmann, and Ralph Steinman", "Watson, Crick, and Franklin", "Neher, Sakmann, and Huxley", "Hartwell, Nurse, and Hunt"], correctAnswer: "Bruce Beutler, Jules Hoffmann, and Ralph Steinman", explanation: "These scientists were recognized in 2011 for their groundbreaking work on innate and adaptive immune responses." }, { question: "What innovation is Ralph Brinster known for in physiological research?", options: ["Development of transgenic mice", "Discovery of the double helix", "Isolation of insulin", "Measurement of blood pressure"], correctAnswer: "Development of transgenic mice", explanation: "Ralph Brinster's work on creating transgenic mice has provided invaluable tools for studying gene function and disease." }, { question: "What is the significance of the discovery by Sir John Gurdon and Shinya Yamanaka?", options: ["Isolation of insulin", "Reprogramming mature cells into pluripotent stem cells", "Discovery of water channels", "Identification of cyclic AMP"], correctAnswer: "Reprogramming mature cells into pluripotent stem cells", explanation: "Their discovery demonstrated that mature cells can be reprogrammed to a pluripotent state, revolutionizing regenerative medicine." }, { question: "Which discovery highlighted the role of G protein-coupled receptors in cell signaling?", options: ["Research by Robert Lefkowitz and Brian Kobilka", "Isolation of insulin", "Discovery of the double helix", "Development of the patch-clamp technique"], correctAnswer: "Research by Robert Lefkowitz and Brian Kobilka", explanation: "The work of Lefkowitz and Kobilka revealed how G protein-coupled receptors function, significantly advancing our understanding of cell signaling." }, { question: "What is the main function of the vesicle traffic machinery discovered by Rothman, Schekman, and Sudhof?", options: ["Transporting genetic material", "Mediating intracellular transport", "Regulating the cell cycle", "Conducting nerve impulses"], correctAnswer: "Mediating intracellular transport", explanation: "This machinery is essential for the transport of vesicles within cells, ensuring proper distribution of molecules." }, { question: "Which discovery in 2014 revealed a cellular positioning system in the brain?", options: ["Identification of specialized cells by John O’Keefe, May-Britt Moser, and Edvard I. Moser", "Discovery of the blood-brain barrier", "Identification of neurotransmitters", "Discovery of water channels"], correctAnswer: "Identification of specialized cells by John O’Keefe, May-Britt Moser, and Edvard I. Moser", explanation: "Their discovery of grid and place cells uncovered the neural basis for spatial navigation and positioning in the brain." }, { question: "Which therapeutic breakthrough in 2015 was recognized with a Nobel Prize for combating parasitic infections?", options: ["A novel therapy against roundworm infections", "Isolation of insulin", "Discovery of the double helix", "Identification of cyclic AMP"], correctAnswer: "A novel therapy against roundworm infections", explanation: "The work of William C. Campbell and Satoshi Ōmura led to a new treatment targeting infections caused by roundworm parasites." }, { question: "Which of the following is NOT a component of the cardiovascular system?", options: ["Atria", "Ventricles", "Heart valves", "Lungs"], correctAnswer: "Lungs", explanation: "The cardiovascular system consists of the heart and blood vessels, while the lungs are part of the respiratory system." }, { question: "Which accessory organs are involved in the digestive/excretory system?", options: ["Liver and gallbladder", "Thyroid and parathyroid glands", "Kidneys and ureters", "Heart and blood vessels"], correctAnswer: "Liver and gallbladder", explanation: "The digestive/excretory system includes accessory organs like the liver and gallbladder that aid in digestion and nutrient processing." }




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
  
  
  

  
  
  
 
