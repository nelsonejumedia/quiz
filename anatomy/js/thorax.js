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
        category: "Thorax",
        questions: [
          
  



],
      },

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// //Gastrulation ////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// //Gastrulation ////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////
  
  {
        category: "Abdomen",
        questions: [
          
  
  {
    question: "Which of these planes is located at the level of the first lumbar vertebra posteriorly?",
    options: [
      "Subcostal plane",
      "Transtubercular plane",
      "Interspinous plane",
      "Transpyloric plane"
    ],
    correctAnswer: "Transpyloric plane",
    explanation: "The transpyloric plane corresponds posteriorly to the L1 vertebral level."  
  },
  {
    question: "The interspinous plane is best located by palpating which landmark?",
    options: [
      "Pubic symphysis",
      "Anterior superior iliac spines",
      "Xiphoid process",
      "Umbilicus"
    ],
    correctAnswer: "Anterior superior iliac spines",
    explanation: "The interspinous plane passes through both ASIS, located by palpating the iliac crests."  
  },
  {
    question: "An intraperitoneal organ is characterized by:",
    options: [
      "Only its anterior surface covered by peritoneum",
      "Being attached behind the peritoneal cavity",
      "Complete surrounding by peritoneum",
      "No contact with the peritoneum"
    ],
    correctAnswer: "Complete surrounding by peritoneum",
    explanation: "Intraperitoneal organs are entirely enveloped by peritoneum on all surfaces."  
  },
  {
    question: "Which description applies to retroperitoneal organs?",
    options: [
      "Covered on anterior surface only",
      "Enclosed fully by peritoneum",
      "Suspended by mesentery",
      "No peritoneal covering"
    ],
    correctAnswer: "Covered on anterior surface only",
    explanation: "Retroperitoneal organs lie outside the peritoneal cavity and have only anterior peritoneal covering."  
  },
  {
    question: "At which vertebral level does the abdominal aorta begin?",
    options: [
      "L1",
      "T12",
      "L2",
      "T10"
    ],
    correctAnswer: "T12",
    explanation: "The abdominal aorta is a continuation of the thoracic aorta and begins at T12."  
  },
  {
    question: "The abdominal aorta bifurcates into the common iliac arteries at:",
    options: [
      "L3",
      "L4",
      "L5",
      "L2"
    ],
    correctAnswer: "L4",
    explanation: "The aorta ends and splits into the iliac arteries at the L4 vertebral level."  
  },
  {
    question: "Which organ is the largest gland in the human body?",
    options: [
      "Kidney",
      "Pancreas",
      "Liver",
      "Spleen"
    ],
    correctAnswer: "Liver",
    explanation: "The liver is both the largest visceral organ and the largest gland, weighing ~1.5 kg."  
  },
  {
    question: "The 'bare area' of the liver refers to the region on its:",
    options: [
      "Inferior visceral surface",
      "Anterior diaphragmatic surface",
      "Posterior diaphragmatic surface",
      "Superior visceral surface"
    ],
    correctAnswer: "Posterior diaphragmatic surface",
    explanation: "The bare area is on the posterior aspect of the diaphragmatic surface where peritoneum is absent."  
  },
  {
    question: "Which ligament divides the right and left anatomical lobes of the liver?",
    options: [
      "Hepatogastric ligament",
      "Coronary ligament",
      "Falciform ligament",
      "Triangular ligament"
    ],
    correctAnswer: "Falciform ligament",
    explanation: "The falciform ligament attaches liver to anterior abdominal wall, separating right and left lobes."  
  },
  {
    question: "The Couinaud classification divides the liver into how many functional segments?",
    options: [
      "6",
      "8",
      "10",
      "4"
    ],
    correctAnswer: "8",
    explanation: "Couinaud's system defines eight independent segments based on vascular supply and biliary drainage."  
  },
  {
    question: "The common bile duct is formed by the union of the common hepatic duct and the:",
    options: [
      "Left hepatic duct",
      "Pancreatic duct",
      "Cystic duct",
      "Right hepatic duct"
    ],
    correctAnswer: "Cystic duct",
    explanation: "The cystic duct from the gallbladder joins the common hepatic duct to make the common bile duct."  
  },
  {
    question: "Which sequence correctly lists the stomach’s anatomical divisions from proximal to distal?",
    options: [
      "Fundus → Body → Cardia → Pylorus",
      "Cardia → Fundus → Body → Pylorus",
      "Pylorus → Body → Fundus → Cardia",
      "Cardia → Body → Fundus → Antrum"
    ],
    correctAnswer: "Cardia → Fundus → Body → Pylorus",
    explanation: "Stomach divisions run from the cardia at the esophageal junction through fundus and body to pylorus."  
  },
  {
    question: "Which curvature of the stomach is attached to the transverse colon by the greater omentum?",
    options: [
      "Lesser curvature",
      "Medial curvature",
      "Greater curvature",
      "Angular curvature"
    ],
    correctAnswer: "Greater curvature",
    explanation: "The greater omentum hangs from the greater curvature before doubling back to the transverse colon."  
  },
  {
    question: "Hartmann’s pouch is found in the:",
    options: [
      "Fundus of gallbladder",
      "Body of gallbladder",
      "Neck of gallbladder",
      "Cystic duct"
    ],
    correctAnswer: "Neck of gallbladder",
    explanation: "Hartmann’s pouch is a mucosal fold in the neck where gallstones often lodge."  
  },
  {
    question: "The major duodenal papilla marks the opening of which ducts?",
    options: [
      "Cystic and common hepatic ducts",
      "Hepatopancreatic ampulla only",
      "Pancreatic duct only",
      "Common bile and pancreatic ducts"
    ],
    correctAnswer: "Common bile and pancreatic ducts",
    explanation: "The hepatopancreatic ampulla formed by bile and pancreatic ducts opens at the major duodenal papilla."  
  },
  {
    question: "The sphincter of Oddi surrounds the:",
    options: [
      "Ampulla of Vater",
      "Ileocecal valve",
      "Pyloric orifice",
      "Cardiac orifice"
    ],
    correctAnswer: "Ampulla of Vater",
    explanation: "The muscular sphincter of Oddi controls flow through the hepatopancreatic ampulla into duodenum."  
  },
  {
    question: "Which artery primarily supplies the gallbladder?",
    options: [
      "Left hepatic artery",
      "Gastroduodenal artery",
      "Cystic artery",
      "Superior pancreaticoduodenal artery"
    ],
    correctAnswer: "Cystic artery",
    explanation: "The cystic artery, usually a branch of the right hepatic artery, supplies the gallbladder."  
  },
  {
    question: "Which part of the pancreas lies within the C-shaped curve of the duodenum?",
    options: [
      "Tail",
      "Uncinate process",
      "Head",
      "Neck"
    ],
    correctAnswer: "Head",
    explanation: "The head of the pancreas resides in the duodenal C-loop and connects by connective tissue."  
  },
  {
    question: "The pancreatic tail is located adjacent to the:",
    options: [
      "Hilum of spleen",
      "Caudate lobe of liver",
      "Inferior vena cava",
      "Posterior surface of stomach"
    ],
    correctAnswer: "Hilum of spleen",
    explanation: "The pancreatic tail extends toward and lies close to the splenic hilum in the left upper quadrant."  
  },
  {
    question: "Which artery gives off pancreatic branches supplying the body and tail of the pancreas?",
    options: [
      "Inferior pancreaticoduodenal artery",
      "Splenic artery",
      "Superior mesenteric artery",
      "Gastroduodenal artery"
    ],
    correctAnswer: "Splenic artery",
    explanation: "The splenic artery runs along the pancreas giving pancreatic branches to the body and tail."  
  },
  {
    question: "The stomach’s arterial supply along the lesser curvature comes from:",
    options: [
      "Right and left gastro-omental arteries",
      "Short gastric arteries",
      "Right and left gastric arteries",
      "Middle colic artery"
    ],
    correctAnswer: "Right and left gastric arteries",
    explanation: "The lesser curvature receives blood from the right gastric (hepatic branch) and left gastric arteries."  
  },
  {
    question: "Which peritoneal fold connects the lesser curvature of the stomach to the liver?",
    options: [
      "Greater omentum",
      "Hepatoduodenal ligament",
      "Gastrocolic ligament",
      "Hepatogastric ligament"
    ],
    correctAnswer: "Hepatogastric ligament",
    explanation: "The hepatogastric ligament (part of lesser omentum) attaches the liver to the lesser curvature."  
  },
  {
    question: "Which section of the duodenum crosses anterior to the inferior vena cava?",
    options: [
      "Superior (D1)",
      "Descending (D2)",
      "Inferior (D3)",
      "Ascending (D4)"
    ],
    correctAnswer: "Inferior (D3)",
    explanation: "The third part (inferior) of duodenum passes horizontally across L3 over IVC and aorta."  
  },
  {
    question: "A duodenal ulcer most commonly occurs in the:",
    options: [
      "Ascending duodenum",
      "Descending duodenum",
      "Superior portion of duodenum",
      "Fourth part of duodenum"
    ],
    correctAnswer: "Superior portion of duodenum",
    explanation: "Peptic ulcers in the duodenum are most common in the first part (superior section)."  
  },
  {
    question: "The jejunum and ileum are intraperitoneal and are attached to the posterior abdominal wall by:",
    options: [
      "Ligament of Treitz",
      "Mesentery",
      "Falciform ligament",
      "Greater omentum"
    ],
    correctAnswer: "Mesentery",
    explanation: "Both jejunum and ileum are suspended by the mesentery, a double peritoneal layer."  
  },
  {
    question: "The small intestine ends at the ileocecal junction, which opens into the:",
    options: [
      "Descending colon",
      "Sigmoid colon",
      "Cecum",
      "Transverse colon"
    ],
    correctAnswer: "Cecum",
    explanation: "The ileocecal valve separates the ileum of small bowel from the cecum of the large intestine."  
  },
  {
    question: "Which artery supplies both the ascending colon and cecum?",
    options: [
      "Left colic artery",
      "Ileocolic artery",
      "Middle colic artery",
      "Right gastro-omental artery"
    ],
    correctAnswer: "Ileocolic artery",
    explanation: "The ileocolic artery, a branch of SMA, gives branches to the cecum and ascending colon."  
  },
  {
    question: "Cecal volvulus involves twisting of the:",
    options: [
      "Sigmoid colon",
      "Transverse colon",
      "Cecum",
      "Descending colon"
    ],
    correctAnswer: "Cecum",
    explanation: "Cecal volvulus is torsion of the cecum causing obstruction, often requiring surgical correction."  
  },
  {
    question: "Teniae coli are longitudinal muscle bands on the colon. How many are there?",
    options: [
      "Four",
      "Two",
      "Three",
      "One"
    ],
    correctAnswer: "Three",
    explanation: "There are three teniae coli (mesocolic, free, and omental) that create haustra in the colon."  
  },
  {
    question: "Haustra of the large intestine are produced by contraction of the:",
    options: [
      "Circular muscle layer",
      "Longitudinal muscle bands",
      "Oblique muscle fibers",
      "Taeniae coli"
    ],
    correctAnswer: "Taeniae coli",
    explanation: "Contraction of the teniae coli (longitudinal bands) puckers the colon into haustra."  
  },
  {
    question: "Which vessel drains venous blood from the sigmoid colon?",
    options: [
      "Middle colic vein",
      "Sigmoid veins",
      "Right colic vein",
      "Ileocolic vein"
    ],
    correctAnswer: "Sigmoid veins",
    explanation: "Sigmoid veins drain the sigmoid colon into the inferior mesenteric vein."  
  },
  {
    question: "Lymph from the jejunum and ileum primarily drains to the:",
    options: [
      "Celiac nodes",
      "Superior mesenteric nodes",
      "Inferior mesenteric nodes",
      "Iliac nodes"
    ],
    correctAnswer: "Superior mesenteric nodes",
    explanation: "Mesenteric lymphatics from midgut (jejunum/ileum) drain into superior mesenteric lymph nodes."  
  },
  {
    question: "Which of these structures is mesoperitoneal (covered partially by peritoneum)?",
    options: [
      "Ascending colon",
      "Jejunum",
      "Retroperitoneal kidney",
      "Transverse colon"
    ],
    correctAnswer: "Ascending colon",
    explanation: "Ascending colon is secondarily retroperitoneal/mesoperitoneal with peritoneum on only its anterior surface."  
  },
  {
    question: "The porta hepatis on the liver visceral surface is also called the:",
    options: [
      "Bare area",
      "Gallbladder fossa",
      "Hilum of the liver",
      "Coronary fissure"
    ],
    correctAnswer: "Hilum of the liver",
    explanation: "Porta hepatis is the hilum where vessels and ducts enter and exit the liver."  
  },
  {
    question: "Which ligament forms a double layer of peritoneum attaching liver to diaphragm",
    options: [
      "Coronary ligament",
      "Falciform ligament",
      "Hepatoduodenal ligament",
      "Triangular ligament"
    ],
    correctAnswer: "Coronary ligament",
    explanation: "The coronary ligament (anterior and posterior folds) attaches the liver to the diaphragm and borders the bare area."  
  },
  {
    question: "The left triangular ligament is formed by union of layers of the:",
    options: [
      "Falciform and coronary ligaments",
      "Anterior and posterior layers of the coronary ligament",
      "Hepatogastric and hepatoduodenal ligaments",
      "Greater and lesser omenta"
    ],
    correctAnswer: "Anterior and posterior layers of the coronary ligament",
    explanation: "The triangular ligaments arise where anterior and posterior coronary layers meet at the liver apex."  
  },
  {
    question: "The pancreas receives arterial supply to its head from which vessel?",
    options: [
      "Splenic artery",
      "Inferior pancreaticoduodenal artery",
      "Right gastric artery",
      "Left gastro-omental artery"
    ],
    correctAnswer: "Inferior pancreaticoduodenal artery",
    explanation: "The head of pancreas gets branches from both superior and inferior pancreaticoduodenal arteries."  
  },
  {
    question: "The cystic veins drain the gallbladder directly into the:",
    options: [
      "Inferior vena cava",
      "Portal vein",
      "Splenic vein",
      "Superior mesenteric vein"
    ],
    correctAnswer: "Portal vein",
    explanation: "Cystic veins drain venous blood from gallbladder neck into the portal vein."  
  },



],
      },

  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// //Gastrulation ////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// //Gastrulation ////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////
  
  
    {
        category: "Pelvis",
        questions: [
          
  
  {
    question: "Which three bones fuse to form the hip (coxal) bone?",
    options: [
      "Ilium, Ischium, Pubis",
      "Sacrum, Coccyx, Ilium",
      "Pubis, Femur, Ischium",
      "Ischium, Sacrum, Coccyx"
    ],
    correctAnswer: "Ilium, Ischium, Pubis",
    explanation: "The hip bone is formed by the fusion of the ilium, ischium, and pubis during adolescence.  [oai_citation:0‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "The pelvic inlet is bounded posteriorly by which structure?",
    options: [
      "Sacral promontory",
      "Pubic symphysis",
      "Pubic crest",
      "Arcuate line"
    ],
    correctAnswer: "Sacral promontory",
    explanation: "Posterior border of the pelvic inlet is the sacral promontory, the anterior lip of S1.  [oai_citation:1‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "Which ligament connects the ischial spine to the sacrum?",
    options: [
      "Sacrospinous ligament",
      "Sacrotuberous ligament",
      "Iliolumbar ligament",
      "Anterior sacroiliac ligament"
    ],
    correctAnswer: "Sacrospinous ligament",
    explanation: "The sacrospinous ligament runs from the ischial spine to the sacrum, converting notches into foramina.  [oai_citation:2‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "In a female pelvis, the subpubic angle is typically:",
    options: [
      "Wider than 80°",
      "Less than 60°",
      "Exactly 70°",
      "Unrelated to sex"
    ],
    correctAnswer: "Wider than 80°",
    explanation: "Females have a broader subpubic angle (>80°) for childbirth, compared to males (<70°).  [oai_citation:3‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "Which joint unites the two pubic bones anteriorly?",
    options: [
      "Pubic symphysis",
      "Sacroiliac joint",
      "Sacrococcygeal joint",
      "Iliolumbar joint"
    ],
    correctAnswer: "Pubic symphysis",
    explanation: "The pubic symphysis is a fibrocartilaginous joint connecting left and right pubic bones.  [oai_citation:4‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "Which part of the sacrum articulates with L5?",
    options: [
      "Base",
      "Apex",
      "Auricular surface",
      "Sacral canal"
    ],
    correctAnswer: "Base",
    explanation: "The sacral base is its superior surface that articulates with the fifth lumbar vertebra.  [oai_citation:5‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "The ischial tuberosity serves as the attachment for:",
    options: [
      "Hamstring muscles",
      "Iliacus muscle",
      "Psoas major",
      "Gluteus medius"
    ],
    correctAnswer: "Hamstring muscles",
    explanation: "The ischial tuberosity is the 'sit bone' and attachment site for hamstrings.  [oai_citation:6‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "Which pelvic ligament helps prevent posterior displacement of the sacrum?",
    options: [
      "Sacrotuberous ligament",
      "Sacrospinous ligament",
      "Interosseous sacroiliac ligament",
      "Anterior sacrococcygeal ligament"
    ],
    correctAnswer: "Sacrotuberous ligament",
    explanation: "The sacrotuberous ligament extends from sacrum to ischial tuberosity, limiting sacral nutation.  [oai_citation:7‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "The lesser pelvis (true pelvis) lies:",
    options: [
      "Below the pelvic brim",
      "Above the sacrum",
      "Adjacent to the iliac crests",
      "At the level of L3"
    ],
    correctAnswer: "Below the pelvic brim",
    explanation: "The true pelvis is the space inferior to the pelvic brim, containing the pelvic viscera.  [oai_citation:8‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "Which muscle forms the lateral wall of the pelvis?",
    options: [
      "Obturator internus",
      "Levator ani",
      "Piriformis",
      "Coccygeus"
    ],
    correctAnswer: "Obturator internus",
    explanation: "Obturator internus covers most of the lateral pelvic wall under its fascia.  [oai_citation:9‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "Which structure is NOT part of the pelvic floor?",
    options: [
      "Greater omentum",
      "Levator ani muscles",
      "Coccygeus muscle",
      "Endopelvic fascia"
    ],
    correctAnswer: "Greater omentum",
    explanation: "The greater omentum is peritoneal, draping abdominal viscera, not pelvic floor.  [oai_citation:10‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "The pelvic inlet in males is typically:",
    options: [
      "Heart-shaped",
      "Oval and wide",
      "Circular",
      "Rectangular"
    ],
    correctAnswer: "Heart-shaped",
    explanation: "A male pelvic inlet is more heart-shaped and narrower than in females.  [oai_citation:11‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "What is the primary function of the endopelvic fascia?",
    options: [
      "Support pelvic organs",
      "Transmit nerve signals",
      "Produce synovial fluid",
      "Anchor the liver"
    ],
    correctAnswer: "Support pelvic organs",
    explanation: "Endopelvic fascia is a connective tissue sheet supporting viscera within pelvis.  [oai_citation:12‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "Which artery supplies the superior aspect of the urinary bladder?",
    options: [
      "Superior vesical artery",
      "Inferior vesical artery",
      "Uterine artery",
      "Middle rectal artery"
    ],
    correctAnswer: "Superior vesical artery",
    explanation: "The superior vesical arteries (from internal iliac) supply the bladder dome.  [oai_citation:13‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "In females, the urinary bladder lies directly anterior to the:",
    options: [
      "Uterus",
      "Rectum",
      "Sigmoid colon",
      "Ovary"
    ],
    correctAnswer: "Uterus",
    explanation: "Female bladder sits anterior to the uterus and superior to the vagina.  [oai_citation:14‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "The detrusor muscle of the bladder is primarily innervated by:",
    options: [
      "Pelvic splanchnic nerves",
      "Thoracolumbar sympathetics",
      "Pudendal nerve",
      "Sciatic nerve"
    ],
    correctAnswer: "Pelvic splanchnic nerves",
    explanation: "Parasympathetic pelvic splanchnics (S2–S4) cause detrusor contraction for micturition.  [oai_citation:15‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "Which vessel drains the prostatic venous plexus?",
    options: [
      "Internal iliac vein",
      "External iliac vein",
      "Internal pudendal vein",
      "Inferior vena cava"
    ],
    correctAnswer: "Internal iliac vein",
    explanation: "Prostatic plexus drains via vesical veins into the internal iliac veins.  [oai_citation:16‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "Seminal vesicle secretions contribute primarily to:",
    options: [
      "Sperm nourishment",
      "Hormonal regulation",
      "Urine filtration",
      "Bone growth"
    ],
    correctAnswer: "Sperm nourishment",
    explanation: "Seminal vesicles secrete fructose-rich fluid that nourishes spermatozoa.  [oai_citation:17‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "Which nerve provides somatic sensation to the distal urethra in females?",
    options: [
      "Pudendal nerve",
      "Pelvic splanchnic nerves",
      "Ilioinguinal nerve",
      "Genitofemoral nerve"
    ],
    correctAnswer: "Pudendal nerve",
    explanation: "The deep perineal branch of the pudendal nerve innervates the lower quarter of the vagina and urethra.  [oai_citation:18‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "The prostate gland surrounds which part of the urethra?",
    options: [
      "Prostatic urethra",
      "Membranous urethra",
      "Spongy urethra",
      "Preprostatic urethra"
    ],
    correctAnswer: "Prostatic urethra",
    explanation: "The prostate encircles the prostatic urethra just below the bladder neck.  [oai_citation:19‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "Blood to the ovaries is supplied by the:",
    options: [
      "Ovarian arteries from aorta",
      "Uterine arteries",
      "Vaginal arteries",
      "Inferior vesical arteries"
    ],
    correctAnswer: "Ovarian arteries from aorta",
    explanation: "Ovarian arteries branch directly from the abdominal aorta and anastomose with uterine arteries.  [oai_citation:20‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "Which ligament suspends the ovaries laterally?",
    options: [
      "Suspensory ligament of ovary",
      "Round ligament of uterus",
      "Broad ligament",
      "Ovarian ligament"
    ],
    correctAnswer: "Suspensory ligament of ovary",
    explanation: "The suspensory ligament contains ovarian vessels and nerves, anchoring ovaries laterally.  [oai_citation:21‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "The uterine tube’s ampulla is the usual site of:",
    options: [
      "Fertilization",
      "Ectopic implantation",
      "Menstrual shedding",
      "Sperm maturation"
    ],
    correctAnswer: "Fertilization",
    explanation: "The ampullary region of the fallopian tube is where sperm and ovum typically meet.  [oai_citation:22‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "Which artery supplies the uterus in its transverse cervical (cardinal) ligament?",
    options: [
      "Uterine artery",
      "Ovarian artery",
      "Middle rectal artery",
      "Vaginal artery"
    ],
    correctAnswer: "Uterine artery",
    explanation: "The uterine artery ascends in the broad ligament within the cardinal ligament to the uterus.  [oai_citation:23‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "Which venous plexus surrounds the cervix and vagina?",
    options: [
      "Uterovaginal plexus",
      "Prostatic plexus",
      "Rectal plexus",
      "Vesical plexus"
    ],
    correctAnswer: "Uterovaginal plexus",
    explanation: "The uterovaginal plexus drains into internal iliac veins via vaginal and uterine veins.  [oai_citation:24‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "What is the terminal part of the large intestine?",
    options: [
      "Rectum",
      "Sigmoid colon",
      "Descending colon",
      "Cecum"
    ],
    correctAnswer: "Rectum",
    explanation: "The rectum extends from the sigmoid colon to the anal canal for fecal storage.  [oai_citation:25‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "The superior rectal artery is a continuation of the:",
    options: [
      "Inferior mesenteric artery",
      "Internal iliac artery",
      "Superior mesenteric artery",
      "External iliac artery"
    ],
    correctAnswer: "Inferior mesenteric artery",
    explanation: "Superior rectal artery is the terminal branch of the inferior mesenteric artery.  [oai_citation:26‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "Which nerve plexus mediates rectal peristalsis?",
    options: [
      "Inferior hypogastric plexus",
      "Lumbar plexus",
      "Sacral plexus",
      "Celiac plexus"
    ],
    correctAnswer: "Inferior hypogastric plexus",
    explanation: "Autonomic fibers in the inferior hypogastric plexus regulate pelvic organ function, including rectum.  [oai_citation:27‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "A cystocele in females denotes herniation of the bladder into the:",
    options: [
      "Vagina",
      "Rectum",
      "Uterus",
      "Perineum"
    ],
    correctAnswer: "Vagina",
    explanation: "Cystocele occurs when weakened pelvic floor allows bladder to bulge into anterior vaginal wall.  [oai_citation:28‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "Benign prostatic hyperplasia primarily affects which lobe?",
    options: [
      "Median lobe",
      "Anterior lobe",
      "Posterior lobe",
      "Lateral lobes"
    ],
    correctAnswer: "Median lobe",
    explanation: "BPH commonly enlarges the median (middle) lobe, impinging on urethra and causing obstruction.  [oai_citation:29‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "Ectopic pregnancy most often implants in the:",
    options: [
      "Ampulla of uterine tube",
      "Fundus of uterus",
      "Cervix",
      "Ovarian surface"
    ],
    correctAnswer: "Ampulla of uterine tube",
    explanation: "Approximately 95% of ectopic pregnancies occur in the ampullary region of the fallopian tube.  [oai_citation:30‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "Vesicovaginal fistula creates an abnormal connection between bladder and:",
    options: [
      "Vagina",
      "Rectum",
      "Urethra",
      "Uterus"
    ],
    correctAnswer: "Vagina",
    explanation: "A vesicovaginal fistula allows urine to leak continuously from bladder into vagina.  [oai_citation:31‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "Pelvic organ prolapse involving rectal bulge into the vagina is called a:",
    options: [
      "Rectocele",
      "Cystocele",
      "Enterocele",
      "Urethrocele"
    ],
    correctAnswer: "Rectocele",
    explanation: "A rectocele is herniation of rectal wall into the posterior vaginal wall.  [oai_citation:32‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "Which pelvic fracture is characterized by vertical shear forces?",
    options: [
      "Unstable pelvic ring fracture",
      "Pubic ramus fracture",
      "Stable avulsion fracture",
      "Sacral stress fracture"
    ],
    correctAnswer: "Unstable pelvic ring fracture",
    explanation: "Vertical shear disrupts pelvic ring posteriorly and anteriorly, often unstable with hemorrhage risk.  [oai_citation:33‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "The obturator canal transmits the obturator nerve and:",
    options: [
      "Obturator vessels",
      "Femoral vessels",
      "Pudendal vessels",
      "Sciatic nerve"
    ],
    correctAnswer: "Obturator vessels",
    explanation: "The obturator canal in the obturator membrane carries the obturator nerve and vessels to the thigh.  [oai_citation:34‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "Which pelvic ligament is palpable through the rectum near the ischial spine?",
    options: [
      "Sacrospinous ligament",
      "Sacrotuberous ligament",
      "Anterior sacroiliac ligament",
      "Iliolumbar ligament"
    ],
    correctAnswer: "Sacrospinous ligament",
    explanation: "The sacrospinous ligament can be felt near the ischial spine on rectal exam.  [oai_citation:35‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "Inflammation of the pelvic peritoneum is termed:",
    options: [
      "Pelvic peritonitis",
      "Pelvic fasciitis",
      "Pelvic thrombosis",
      "Pelvic cellulitis"
    ],
    correctAnswer: "Pelvic peritonitis",
    explanation: "Peritoneal inflammation within the pelvis is a form of peritonitis presenting with pelvic pain.  [oai_citation:36‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "Which pelvic floor muscle forms a sling around the anorectal junction?",
    options: [
      "Puborectalis",
      "Iliococcygeus",
      "Pubococcygeus",
      "Levator ani"
    ],
    correctAnswer: "Puborectalis",
    explanation: "Puborectalis creates the anorectal angle for fecal continence as part of levator ani.  [oai_citation:37‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "The pelvic diaphragm is primarily innervated by the:",
    options: [
      "Pudendal nerve",
      "Femoral nerve",
      "Sciatic nerve",
      "Obturator nerve"
    ],
    correctAnswer: "Pudendal nerve",
    explanation: "Pudendal (S2–S4) provides the main somatic innervation to the pelvic floor muscles.  [oai_citation:38‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "Which artery anastomoses with the ovarian artery around the uterine tube?",
    options: [
      "Tubal branch of uterine artery",
      "Superior vesical artery",
      "Middle rectal artery",
      "Inferior epigastric artery"
    ],
    correctAnswer: "Tubal branch of uterine artery",
    explanation: "Anastomosis between ovarian and tubal branches of uterine artery supplies the tube.  [oai_citation:39‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "Which pelvic viscera boundary is formed by the pelvic floor?",
    options: [
      "Inferior boundary",
      "Superior boundary",
      "Anterior boundary",
      "Posterior boundary"
    ],
    correctAnswer: "Inferior boundary",
    explanation: "The pelvic floor (diaphragm) forms the inferior limit of the pelvic cavity.  [oai_citation:40‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "The anterior division of the internal iliac artery supplies all EXCEPT:",
    options: [
      "Kidneys",
      "Bladder",
      "Uterus",
      "Vagina"
    ],
    correctAnswer: "Kidneys",
    explanation: "Renal arteries arise from the aorta; anterior internal iliac branches supply pelvic organs.  [oai_citation:41‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },
  {
    question: "Which embryologic origin corresponds to hindgut derivatives in the pelvis?",
    options: [
      "Inferior mesenteric artery",
      "Superior mesenteric artery",
      "Celiac trunk",
      "Internal iliac artery"
    ],
    correctAnswer: "Inferior mesenteric artery",
    explanation: "Hindgut structures (distal colon, rectum) derive their blood supply from the inferior mesenteric artery.  [oai_citation:42‡ANATOMY OF THE PELVIC VISCERAL 200l anatomy.pptx](file-service://file-RVY11VSHwM19rwt2qn95K7)"
  },



  {
    question: "The female pelvic inlet is characteristically:",
    options: [
      "Heart-shaped and narrow",
      "Oval and wide",
      "Circular and small",
      "Triangular and constricted"
    ],
    correctAnswer: "Oval and wide",
    explanation: "In females, the pelvic inlet is broader and more oval-shaped to accommodate childbirth, unlike the heart-shaped inlet of males.  [oai_citation:0‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "A subpubic angle greater than 90° typically indicates a:",
    options: [
      "Male pelvis",
      "Female pelvis",
      "Child’s pelvis",
      "Elderly pelvis"
    ],
    correctAnswer: "Female pelvis",
    explanation: "Women have a wider subpubic angle (>90°) compared to males (<70°), reflecting adaptations for parturition.  [oai_citation:1‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "The inferior (posterior) border of the pelvic outlet is formed by the:",
    options: [
      "Sacral promontory",
      "Ischial tuberosities",
      "Tip of the coccyx",
      "Pubic symphysis"
    ],
    correctAnswer: "Tip of the coccyx",
    explanation: "Posteriorly, the pelvic outlet is bounded by the tip of the coccyx, with ischial tuberosities laterally and pubic arch anteriorly.  [oai_citation:2‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "Laterally, the pelvic inlet is bounded by the:",
    options: [
      "Iliac crest and ASIS",
      "Arcuate line and pectineal (pubic) line",
      "Sacral ala and iliac fossa",
      "Pubic crest and pubic tubercle"
    ],
    correctAnswer: "Arcuate line and pectineal (pubic) line",
    explanation: "The lateral borders of the pelvic inlet are formed by the arcuate line of the ilium and the pectineal line of the pubis.  [oai_citation:3‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "The sacrotuberous ligament helps prevent excessive:",
    options: [
      "Sacral counternutation",
      "Sacral nutation",
      "Pelvic rotation",
      "Hip abduction"
    ],
    correctAnswer: "Sacral nutation",
    explanation: "The sacrotuberous ligament extends from the sacrum to the ischial tuberosity and limits forward tilting (nutation) of the sacrum.  [oai_citation:4‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "The pelvic diaphragm’s primary muscular component is the:",
    options: [
      "Piriformis",
      "Obturator internus",
      "Levator ani",
      "Coccygeus"
    ],
    correctAnswer: "Levator ani",
    explanation: "The levator ani muscle group forms the major part of the pelvic diaphragm, supporting pelvic viscera and maintaining continence.  [oai_citation:5‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },
  {
    question: "The greater sciatic foramen is formed by the sacrospinous and:",
    options: [
      "Iliolumbar ligaments",
      "Inguinal ligament",
      "Sacrotuberous ligament",
      "Anterior sacroiliac ligament"
    ],
    correctAnswer: "Sacrotuberous ligament",
    explanation: "The sacrospinous and sacrotuberous ligaments convert the greater sciatic notch into the greater sciatic foramen.  [oai_citation:6‡ANATOMY OF THE PELVIC REGION-1.pptx](file-service://file-EEFd9h6CHGgBS9wsF8amAy)"
  },



],
      },
      
      
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// //Gastrulation ////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// //Gastrulation //////////////////////////////////////////
      
       
    {
        category: "Perineum - CA",
        questions: [
          
  
  {
    question: "Which muscle is NOT directly anchored to the perineal body?",
    options: [
      "Bulbospongiosus",
      "Superficial transverse perineal",
      "Deep transverse perineal",
      "Levator ani"
    ],
    correctAnswer: "Levator ani",
    explanation: "The levator ani forms the pelvic diaphragm but does not attach directly to the perineal body."
  },
  {
    question: "One key function of the perineal body is to:",
    options: [
      "Transmit pelvic autonomic fibers",
      "Anchor perineal muscles and support pelvic floor",
      "Form the lateral border of the anal triangle",
      "Provide a passage for the pudendal vessels"
    ],
    correctAnswer: "Anchor perineal muscles and support pelvic floor",
    explanation: "By uniting multiple muscles, the perineal body maintains integrity of the pelvic outlet."
  },
  {
    question: "Which muscle’s contraction helps maintain the anorectal angle and also partly attaches to the perineal body?",
    options: [
      "Puborectalis",
      "External urethral sphincter",
      "Ischiocavernosus",
      "External anal sphincter"
    ],
    correctAnswer: "External anal sphincter",
    explanation: "The external anal sphincter encircles the anus and has fibers anchoring to the perineal body."
  },
  {
    question: "The superficial branch of the perineal nerve primarily supplies:",
    options: [
      "Motor fibers to deep transverse perineal muscle",
      "Sensation to posterior labia or scrotum",
      "Motor fibers to ischiocavernosus",
      "Innervation of the anal canal"
    ],
    correctAnswer: "Sensation to posterior labia or scrotum",
    explanation: "The superficial perineal branch carries cutaneous sensation in the urogenital triangle."
  },
  {
    question: "Which artery is the first branch of the internal pudendal artery within the ischioanal fossa?",
    options: [
      "Deep artery of the penis/clitoris",
      "Inferior rectal artery",
      "Perineal artery",
      "Dorsal artery of the penis/clitoris"
    ],
    correctAnswer: "Inferior rectal artery",
    explanation: "The inferior rectal artery branches off in the ischioanal fossa to supply the anal triangle."
  },
  {
    question: "The deep artery of the penis or clitoris supplies blood to the:",
    options: [
      "Crura/corpora cavernosa",
      "Superficial perineal muscles",
      "Skin of the scrotum",
      "External anal sphincter"
    ],
    correctAnswer: "Crura/corpora cavernosa",
    explanation: "The deep artery runs within each crus to fill the erectile bodies."
  },
  {
    question: "Damage to the dorsal nerve of the penis/clitoris would impair:",
    options: [
      "Erection via cavernous filling",
      "Sensation of the glans",
      "Motor control of superficial transverse perineal",
      "Tone of the external anal sphincter"
    ],
    correctAnswer: "Sensation of the glans",
    explanation: "The dorsal nerve is a purely sensory branch supplying the glans."
  },
  {
    question: "Which vessel accompanies the perineal nerve through the superficial pouch?",
    options: [
      "Perineal branch of internal pudendal artery",
      "Inferior rectal artery",
      "Dorsal artery of the penis/clitoris",
      "Superior gluteal artery"
    ],
    correctAnswer: "Perineal branch of internal pudendal artery",
    explanation: "Perineal vessels and nerve travel together in the superficial perineal pouch."
  },
  {
    question: "The deep perineal pouch does NOT contain:",
    options: [
      "External urethral sphincter",
      "Deep transverse perineal muscle",
      "Bulbourethral glands (in males)",
      "Ischiocavernosus muscle"
    ],
    correctAnswer: "Ischiocavernosus muscle",
    explanation: "Ischiocavernosus lies in the superficial pouch covering the crus."
  },
  {
    question: "Which nerve branch loops around the sacrospinous ligament before re-entering the perineum?",
    options: [
      "Perineal nerve",
      "Inferior rectal nerve",
      "Pudendal nerve",
      "Dorsal nerve of penis/clitoris"
    ],
    correctAnswer: "Pudendal nerve",
    explanation: "The main pudendal trunk exits via the greater sciatic foramen and re-enters via the lesser sciatic."
  },
  {
    question: "Which artery supplies the bulb of the vestibule or penis?",
    options: [
      "Deep artery of the penis/clitoris",
      "Dorsal artery of the penis/clitoris",
      "Bulbourethral artery",
      "Perineal artery"
    ],
    correctAnswer: "Perineal artery",
    explanation: "The perineal branch gives off the bulbourethral (bulb) artery supplying the bulb."
  },
  {
    question: "The perineal body lies at the junction of all EXCEPT:",
    options: [
      "Bulbospongiosus",
      "Superficial transverse perineal",
      "Sphincter urethrae",
      "Deep gluteal muscle"
    ],
    correctAnswer: "Deep gluteal muscle",
    explanation: "Deep gluteal muscles lie outside the perineum and do not attach to the perineal body."
  },
  {
    question: "Which nerve provides motor fibers to the external urethral sphincter?",
    options: [
      "Deep branch of perineal nerve",
      "Inferior rectal nerve",
      "Dorsal nerve of clitoris/penis",
      "Pudendal trunk"
    ],
    correctAnswer: "Deep branch of perineal nerve",
    explanation: "The deep perineal branch innervates the sphincter urethrae and deep pouch muscles."
  },
  {
    question: "Inferior rectal vessels and nerves cross the ischioanal fossa to reach:",
    options: [
      "Urogenital triangle",
      "Anal canal",
      "Deep perineal pouch",
      "Pelvic cavity"
    ],
    correctAnswer: "Anal canal",
    explanation: "They supply the external anal sphincter and perianal skin in the anal triangle."
  },
  {
    question: "Which muscle compresses the bulb to aid ejaculation or vaginal constriction and anchors at the perineal body?",
    options: [
      "Ischiocavernosus",
      "Bulbospongiosus",
      "Deep transverse perineal",
      "External anal sphincter"
    ],
    correctAnswer: "Bulbospongiosus",
    explanation: "Bulbospongiosus covers the bulb and attaches partly to the perineal body."
  },
  {
    question: "Which arterial branch runs alongside the dorsal nerve on the dorsum of the penis/clitoris?",
    options: [
      "Deep artery of the penis/clitoris",
      "Perineal artery",
      "Dorsal artery of the penis/clitoris",
      "Inferior rectal artery"
    ],
    correctAnswer: "Dorsal artery of the penis/clitoris",
    explanation: "The dorsal artery travels superficially on the dorsum alongside the dorsal nerve."
  },
  {
    question: "Loss of the perineal body most directly predisposes to:",
    options: [
      "Cystocele and rectocele",
      "Sciatic neuropathy",
      "Pelvic brim fracture",
      "Femoral hernia"
    ],
    correctAnswer: "Cystocele and rectocele",
    explanation: "Without the perineal body anchor, pelvic floor support fails, causing prolapse."
  },
  {
    question: "Which branch of the pudendal nerve supplies motor innervation to ischiocavernosus?",
    options: [
      "Inferior rectal nerve",
      "Perineal nerve (deep branch)",
      "Dorsal nerve of penis/clitoris",
      "Pudendal trunk"
    ],
    correctAnswer: "Perineal nerve (deep branch)",
    explanation: "The deep perineal branch carries motor fibers to the superficial pouch muscles."
  },
  {
    question: "The external anal sphincter receives blood from:",
    options: [
      "Deep artery of the penis/clitoris",
      "Inferior rectal artery",
      "Superior vesical artery",
      "Dorsal artery of the penis/clitoris"
    ],
    correctAnswer: "Inferior rectal artery",
    explanation: "Inferior rectal vessels branch from the internal pudendal to supply the anal sphincter."
  }, 



  {
    question: "The perineal body is best described as:",
    options: [
      "A midline fibromuscular node anchoring perineal muscles",
      "A bony prominence on the ischial spine",
      "A venous plexus between the urogenital and anal triangles",
      "A ligament connecting the pubic rami"
    ],
    correctAnswer: "A midline fibromuscular node anchoring perineal muscles",
    explanation: "The perineal body is a central tendon where superficial and deep perineal muscles converge, providing pelvic floor support."
  },
  {
    question: "Which muscle does NOT attach directly to the perineal body?",
    options: [
      "Superficial transverse perineal",
      "Bulbospongiosus",
      "Levator ani",
      "Deep transverse perineal"
    ],
    correctAnswer: "Levator ani",
    explanation: "While levator ani underlies the perineum, it attaches to the pelvic walls and coccyx rather than the perineal body."
  },
  {
    question: "One primary function of the perineal body is to:",
    options: [
      "Anchor the external urethral sphincter",
      "Prevent prolapse by supporting pelvic viscera",
      "Transmit pudendal nerve fibers",
      "Form the posterior margin of the urogenital triangle"
    ],
    correctAnswer: "Prevent prolapse by supporting pelvic viscera",
    explanation: "By uniting key muscles, the perineal body maintains pelvic floor integrity and resists organ descent."
  },
  {
    question: "Which branch of the pudendal nerve supplies motor fibers to the deep transverse perineal muscle?",
    options: [
      "Dorsal nerve of the penis/clitoris",
      "Inferior rectal nerve",
      "Perineal nerve",
      "Posterior femoral cutaneous nerve"
    ],
    correctAnswer: "Perineal nerve",
    explanation: "The perineal branch of the pudendal nerve innervates the muscles of the superficial and deep perineal pouches."
  },
  {
    question: "The inferior rectal artery, a branch of the internal pudendal, primarily supplies:",
    options: [
      "The bulb of the vestibule",
      "Skin and external sphincter around the anus",
      "Crura of the clitoris or penis",
      "Deep transverse perineal muscle"
    ],
    correctAnswer: "Skin and external sphincter around the anus",
    explanation: "Inferior rectal vessels pass through the ischioanal fossa to vascularize the anal triangle."
  },
  {
    question: "Which artery directly supplies the erectile crura in both sexes?",
    options: [
      "Perineal branch of internal pudendal",
      "Superficial external pudendal artery",
      "Deep artery of the penis/clitoris",
      "Dorsal artery of the penis/clitoris"
    ],
    correctAnswer: "Deep artery of the penis/clitoris",
    explanation: "The deep artery runs in each crus to fill the cavernous bodies, enabling erection."
  },
  {
    question: "Damage to the dorsal nerve of the penis/clitoris would most likely cause loss of:",
    options: [
      "Motor control of bulbospongiosus",
      "Sensation at the glans",
      "Pudendal reflex contraction",
      "Erection via cavernous blood flow"
    ],
    correctAnswer: "Sensation at the glans",
    explanation: "The dorsal nerve is a terminal sensory branch of the pudendal nerve supplying the glans."
  },
  {
    question: "Which vessel accompanies the perineal nerve through the superficial perineal pouch?",
    options: [
      "Inferior gluteal artery",
      "Superficial perineal branch of internal pudendal",
      "Obturator artery",
      "Middle rectal artery"
    ],
    correctAnswer: "Superficial perineal branch of internal pudendal",
    explanation: "This branch supplies the superficial pouch and runs alongside the perineal nerve."
  },
  {
    question: "The pudendal nerve exits the pelvis through the greater sciatic foramen and re-enters via the:",
    options: [
      "Obturator canal",
      "Lesser sciatic foramen",
      "Inguinal canal",
      "Ischiorectal fossa"
    ],
    correctAnswer: "Lesser sciatic foramen",
    explanation: "After looping around the sacrospinous ligament, it passes into the perineum via the lesser sciatic foramen."
  },
  {
    question: "Which branch of the internal pudendal artery runs with the dorsal nerve and supplies the skin of the penis or clitoris?",
    options: [
      "Deep artery of the penis/clitoris",
      "Inferior rectal artery",
      "Dorsal artery of the penis/clitoris",
      "Perineal artery"
    ],
    correctAnswer: "Dorsal artery of the penis/clitoris",
    explanation: "The dorsal artery travels on the dorsum of the organ, supplying skin and fascia."
  },
  {
    question: "An avulsion of the perineal body would most directly weaken:",
    options: [
      "Anal continence mechanism",
      "Pelvic diaphragm tone",
      "Integrity of the urogenital diaphragm",
      "Hip joint stability"
    ],
    correctAnswer: "Integrity of the urogenital diaphragm",
    explanation: "Loss of the perineal body disrupts attachments of the urogenital diaphragm muscles, compromising support."
  },
  {
    question: "Which pudendal branch provides sensory innervation to the posterolateral skin of the perineum?",
    options: [
      "Inferior rectal nerve",
      "Dorsal nerve of the clitoris/penis",
      "Perineal nerve (posterior skin branch)",
      "Pudendal trunk"
    ],
    correctAnswer: "Perineal nerve (posterior skin branch)",
    explanation: "The superficial branch of the perineal nerve supplies the skin of the posterior labia or scrotum."
  },



],
      },
      
      
      
      
      
      
      
      
      
    {
        category: "Perineum",
        questions: [
          
  

  {
    question: "The perineum is best described as:",
    options: [
      "The most superior part of the pelvic cavity",
      "A diamond-shaped region inferior to the pelvic diaphragm",
      "The space between the abdominal muscles and the pelvic girdle",
      "The area surrounding the inguinal canal"
    ],
    correctAnswer: "A diamond-shaped region inferior to the pelvic diaphragm",
    explanation: "The perineum lies between the thighs, forming the inferior part of the pelvic outlet in a diamond shape."
  },
  {
    question: "Which structure forms the anterior boundary of the perineum?",
    options: [
      "Tip of the coccyx",
      "Ischial tuberosities",
      "Pubic symphysis",
      "Sacrotuberous ligaments"
    ],
    correctAnswer: "Pubic symphysis",
    explanation: "Anteriorly, the perineum is bounded by the pubic symphysis."
  },
  {
    question: "Posteriorly, the perineum is limited by the:",
    options: [
      "Pubic arch",
      "Anterior superior iliac spines",
      "Sacrotuberous ligaments",
      "Tip of the coccyx"
    ],
    correctAnswer: "Tip of the coccyx",
    explanation: "The coccygeal tip forms the posterior limit of the perineal diamond."
  },
  {
    question: "Laterally, the perineum is bounded by the:",
    options: [
      "Pubic tubercles",
      "Ischial tuberosities",
      "ASIS",
      "Pubic arch"
    ],
    correctAnswer: "Ischial tuberosities",
    explanation: "The ischial tuberosities mark the lateral corners of the perineal region."
  },
  {
    question: "The perineum is subdivided into two triangles by a line drawn between:",
    options: [
      "Pubic symphysis and coccyx",
      "Anterior superior iliac spines",
      "Ischial tuberosities",
      "Sacrotuberous ligament attachments"
    ],
    correctAnswer: "Ischial tuberosities",
    explanation: "A transverse line between the ischial tuberosities divides the perineum into anterior urogenital and posterior anal triangles."
  },
  {
    question: "The anterior half of the perineum is known as the:",
    options: [
      "Anal triangle",
      "Urogenital triangle",
      "Pelvic diaphragm",
      "Perineal pouch"
    ],
    correctAnswer: "Urogenital triangle",
    explanation: "The urogenital triangle houses the external genitalia and associated structures."
  },
  {
    question: "Which fascia layer lies immediately deep to the skin in the urogenital triangle?",
    options: [
      "Superficial fascia",
      "Perineal membrane",
      "Pelvic fascia",
      "Endopelvic fascia"
    ],
    correctAnswer: "Superficial fascia",
    explanation: "The superficial fascia is the most superficial connective tissue layer in the urogenital triangle."
  },
  {
    question: "Between the superficial fascia and the perineal membrane is the:",
    options: [
      "Deep perineal pouch",
      "Superficial perineal pouch",
      "Anal sinus",
      "Pelvic cavity"
    ],
    correctAnswer: "Superficial perineal pouch",
    explanation: "The superficial perineal pouch sits between the superficial fascia and the perineal membrane."
  },
  {
    question: "The space between the perineal membrane and the pelvic (inferior) fascia is the:",
    options: [
      "Superficial perineal pouch",
      "Ischiorectal fossa",
      "Deep perineal pouch",
      "Pelvic inlet"
    ],
    correctAnswer: "Deep perineal pouch",
    explanation: "The deep perineal pouch lies between the perineal membrane and the pelvic (inferior) fascia."
  },
  {
    question: "Which muscle covers the bulb of the penis and aids ejaculation?",
    options: [
      "Ischiocavernosus",
      "Bulbospongiosus",
      "Superficial transverse perineal",
      "External urethral sphincter"
    ],
    correctAnswer: "Bulbospongiosus",
    explanation: "Bulbospongiosus wraps the bulb and assists in ejaculation and erection."
  },
  {
    question: "Which muscle stabilizes the erect penis by covering the crus?",
    options: [
      "Bulbospongiosus",
      "Deep transverse perineal",
      "Ischiocavernosus",
      "Pubococcygeus"
    ],
    correctAnswer: "Ischiocavernosus",
    explanation: "Ischiocavernosus covers the crus and helps maintain erection by compressing venous outflow."
  },
  {
    question: "Which muscle runs transversely across the superficial perineal pouch?",
    options: [
      "External anal sphincter",
      "Superficial transverse perineal",
      "Deep transverse perineal",
      "Puborectalis"
    ],
    correctAnswer: "Superficial transverse perineal",
    explanation: "The superficial transverse perineal muscle spans the posterior border of the superficial pouch."
  },
  {
    question: "In females, which glands are found in the superficial perineal pouch?",
    options: [
      "Bulbourethral glands",
      "Prostate glands",
      "Greater vestibular (Bartholin’s) glands",
      "Skene’s glands"
    ],
    correctAnswer: "Greater vestibular (Bartholin’s) glands",
    explanation: "Bartholin’s glands lie in the superficial perineal pouch and secrete lubrication."
  },
  {
    question: "The deep perineal pouch contains all EXCEPT:",
    options: [
      "External urethral sphincter",
      "Deep transverse perineal muscles",
      "Bulbourethral glands in males",
      "Bulbospongiosus muscle"
    ],
    correctAnswer: "Bulbospongiosus muscle",
    explanation: "Bulbospongiosus is superficial; the deep pouch contains urethral sphincter and deep transverse muscles."
  },
  {
    question: "Which muscle encircles both urethra and vagina in females?",
    options: [
      "Ischiocavernosus",
      "Deep transverse perineal",
      "Urethrovaginalis",
      "Superficial transverse perineal"
    ],
    correctAnswer: "Urethrovaginalis",
    explanation: "The urethrovaginalis muscle surrounds the urethra and vagina in the deep pouch."
  },
  {
    question: "Which gland resides in the deep perineal pouch of males?",
    options: [
      "Greater vestibular gland",
      "Bulbourethral (Cowper’s) gland",
      "Prostate gland",
      "Seminal vesicle"
    ],
    correctAnswer: "Bulbourethral (Cowper’s) gland",
    explanation: "Cowper’s glands are located in the male deep perineal pouch and secrete pre-ejaculatory fluid."
  },
  {
    question: "The anal triangle’s anterior border is formed by the:",
    options: [
      "Inter-ischial line",
      "Pubic arch",
      "ASIS line",
      "Sacrotuberous ligament"
    ],
    correctAnswer: "Inter-ischial line",
    explanation: "The inter-ischial (transverse) line separates the urogenital and anal triangles."
  },
  {
    question: "The primary voluntary muscle of fecal continence is the:",
    options: [
      "Internal anal sphincter",
      "Puborectalis",
      "External anal sphincter",
      "Levator ani"
    ],
    correctAnswer: "External anal sphincter",
    explanation: "The external anal sphincter provides voluntary control over defecation."
  },
  {
    question: "The spaces lateral to the anal canal filled with fat are called:",
    options: [
      "Deep perineal pouches",
      "Ischiorectal (ischioanal) fossae",
      "Superficial perineal pouches",
      "Pararectal spaces"
    ],
    correctAnswer: "Ischiorectal (ischioanal) fossae",
    explanation: "These fossae allow expansion of the anal canal during defecation."
  },
  {
    question: "Which nerve provides somatic innervation to most of the perineum?",
    options: [
      "Femoral nerve",
      "Pudendal nerve",
      "Obturator nerve",
      "Inferior gluteal nerve"
    ],
    correctAnswer: "Pudendal nerve",
    explanation: "The pudendal nerve (S2–S4) supplies sensation and motor function to the perineum."
  },
  {
    question: "Branches of the pudendal nerve include all EXCEPT:",
    options: [
      "Inferior rectal nerve",
      "Perineal nerve",
      "Dorsal nerve of penis/clitoris",
      "Lateral femoral cutaneous nerve"
    ],
    correctAnswer: "Lateral femoral cutaneous nerve",
    explanation: "The lateral femoral cutaneous nerve is not a branch of the pudendal nerve."
  },
  {
    question: "Which artery is the main blood supply to the superficial perineal pouch?",
    options: [
      "Inferior gluteal artery",
      "Internal pudendal artery",
      "Obturator artery",
      "Superior vesical artery"
    ],
    correctAnswer: "Internal pudendal artery",
    explanation: "Branches of the internal pudendal artery supply both superficial and deep perineal pouches."
  },
  {
    question: "The perineal body is:",
    options: [
      "A bony prominence at the coccyx",
      "A fibromuscular node at the junction of perineal triangles",
      "The origin of the levator ani",
      "A ligament connecting ischia"
    ],
    correctAnswer: "A fibromuscular node at the junction of perineal triangles",
    explanation: "The perineal body anchors muscles of both triangles and maintains pelvic floor integrity."
  },
  {
    question: "Muscles that attach to the perineal body include:",
    options: [
      "Bulbospongiosus and superficial transverse perineal",
      "Iliacus and psoas major",
      "Gluteus maximus and medius",
      "Piriformis and obturator internus"
    ],
    correctAnswer: "Bulbospongiosus and superficial transverse perineal",
    explanation: "These superficial pouch muscles anchor into the perineal body."
  },
  {
    question: "Injury to the perineal body commonly leads to:",
    options: [
      "Urinary incontinence",
      "Cystocele",
      "Pelvic organ prolapse",
      "Hip dislocation"
    ],
    correctAnswer: "Pelvic organ prolapse",
    explanation: "Damage to the perineal body weakens pelvic floor support, leading to prolapse."
  },
  {
    question: "Which layer of fascia contributes to support of the deep perineal pouch?",
    options: [
      "Colles’ fascia",
      "Dartos fascia",
      "Gallaudet’s fascia",
      "Pelvic (inferior) fascia"
    ],
    correctAnswer: "Pelvic (inferior) fascia",
    explanation: "The pelvic fascia forms the roof of the deep perineal pouch."
  },
  {
    question: "Which muscle forms the primary sling around the anorectal junction?",
    options: [
      "Puborectalis",
      "Ischiocavernosus",
      "Deep transverse perineal",
      "External sphincter ani"
    ],
    correctAnswer: "Puborectalis",
    explanation: "Puborectalis maintains the anorectal angle crucial for continence."
  },
  {
    question: "The female equivalent of the bulbospongiosus is involved in:",
    options: [
      "Clitoral erection and vaginal constriction",
      "Phasic contraction of the urethra",
      "Elevation of the uterus",
      "Support of pelvic viscera"
    ],
    correctAnswer: "Clitoral erection and vaginal constriction",
    explanation: "In females, bulbospongiosus covers the bulb of the vestibule and aids in clitoral erection."
  },
  {
    question: "Which pouch would contain a penile urethral injury extravasation?",
    options: [
      "Deep perineal pouch",
      "Superficial perineal pouch",
      "Anal triangle",
      "Pelvic cavity"
    ],
    correctAnswer: "Superficial perineal pouch",
    explanation: "Urethral injuries below the perineal membrane leak into the superficial pouch."
  },
  {
    question: "Which structure binds the lateral margins of the urogenital triangle?",
    options: [
      "Sacrotuberous ligaments",
      "Ischial tuberosities",
      "Pubic symphysis",
      "Coccyx"
    ],
    correctAnswer: "Ischial tuberosities",
    explanation: "The ischial tuberosities form the lateral corners of both triangles."
  },
  {
    question: "Which muscle in the deep pouch assists voluntary control of micturition?",
    options: [
      "Deep transverse perineal",
      "External urethral sphincter",
      "Ischiocavernosus",
      "Bulbospongiosus"
    ],
    correctAnswer: "External urethral sphincter",
    explanation: "This sphincter surrounds the urethra and contracts under voluntary control."
  },
  {
    question: "Which nerve branch specifically innervates the external anal sphincter?",
    options: [
      "Inferior rectal nerve",
      "Perineal nerve",
      "Dorsal nerve of clitoris",
      "Pudendal trunk"
    ],
    correctAnswer: "Inferior rectal nerve",
    explanation: "The inferior rectal branches of the pudendal nerve supply the external anal sphincter."
  },
  {
    question: "Which pouch contains the roots of the erectile bodies of the external genitalia?",
    options: [
      "Anal triangle",
      "Deep perineal pouch",
      "Superficial perineal pouch",
      "Pelvic cavity"
    ],
    correctAnswer: "Superficial perineal pouch",
    explanation: "The crura of the penis or clitoris lie in the superficial pouch."
  },
  {
    question: "Which structure divides the superficial and deep perineal pouches?",
    options: [
      "Pelvic diaphragm",
      "Perineal membrane",
      "Endopelvic fascia",
      "Superficial fascia"
    ],
    correctAnswer: "Perineal membrane",
    explanation: "The perineal membrane is the fascial layer that separates the two pouches."
  },
  {
    question: "Transmission of the pudendal nerve through the perineum occurs via:",
    options: [
      "Greater sciatic foramen",
      "Obturator canal",
      "Lesser sciatic foramen",
      "Inguinal canal"
    ],
    correctAnswer: "Lesser sciatic foramen",
    explanation: "The pudendal nerve exits the pelvis by the greater sciatic foramen and re-enters via the lesser sciatic foramen."
  },
  {
    question: "The external anal sphincter is composed of:",
    options: [
      "Smooth muscle",
      "Skeletal muscle",
      "Fibrous connective tissue",
      "Elastic cartilage"
    ],
    correctAnswer: "Skeletal muscle",
    explanation: "The external anal sphincter is under voluntary control and is made of skeletal muscle."
  },
  {
    question: "Which space communicates freely with the ischiorectal fossa?",
    options: [
      "Superficial perineal pouch",
      "Deep perineal pouch",
      "Anal canal lumen",
      "Pelvic cavity"
    ],
    correctAnswer: "Anal canal lumen",
    explanation: "Infection in the ischiorectal fossa can spread to the anal canal but not into the pouches."
  },
  {
    question: "Which muscle group forms the pelvic diaphragm above the perineum?",
    options: [
      "Levator ani and coccygeus",
      "Obturator internus and piriformis",
      "Gluteal muscles",
      "Iliopsoas"
    ],
    correctAnswer: "Levator ani and coccygeus",
    explanation: "These muscles form the pelvic floor superior to the perineal region."
  },
  {
    question: "Which artery gives off the inferior rectal branches in the perineum?",
    options: [
      "Internal pudendal artery",
      "Inferior gluteal artery",
      "External pudendal artery",
      "Superior rectal artery"
    ],
    correctAnswer: "Internal pudendal artery",
    explanation: "The inferior rectal arteries branch from the internal pudendal artery in the ischiorectal fossa."
  },
  {
    question: "Which compartment contains the superficial transverse perineal muscle?",
    options: [
      "Deep perineal pouch",
      "Anal triangle",
      "Superficial perineal pouch",
      "Pelvic cavity"
    ],
    correctAnswer: "Superficial perineal pouch",
    explanation: "This muscle lies just deep to Colles’ fascia in the superficial pouch."
  },
  {
    question: "Damage to the pudendal nerve at the ischial spine would most likely impair:",
    options: [
      "Hip flexion",
      "Erection and continence",
      "Abduction of thigh",
      "Dorsiflexion of foot"
    ],
    correctAnswer: "Erection and continence",
    explanation: "Pudendal nerve injury affects sensation and motor control of perineal structures."
  },
  {
    question: "Which structure is NOT found in the deep perineal pouch of females?",
    options: [
      "External urethral sphincter",
      "Urethrovaginalis muscle",
      "Greater vestibular glands",
      "Deep transverse perineal muscles"
    ],
    correctAnswer: "Greater vestibular glands",
    explanation: "Bartholin’s glands are in the superficial pouch, not the deep pouch."
  },
  {
    question: "Which ligamentous structure contributes to the posterolateral boundary of the perineum?",
    options: [
      "Inguinal ligament",
      "Sacrotuberous ligament",
      "Iliopectineal ligament",
      "Transverse perineal ligament"
    ],
    correctAnswer: "Sacrotuberous ligament",
    explanation: "The sacrotuberous ligaments form the posterolateral triangle margins."
  },
  {
    question: "Intrinsic muscles of the perineum are primarily innervated by:",
    options: [
      "Thoracolumbar sympathetic trunks",
      "Pudendal nerve",
      "Femoral nerve",
      "Inferior hypogastric plexus"
    ],
    correctAnswer: "Pudendal nerve",
    explanation: "Most perineal muscles receive somatic motor fibers from branches of the pudendal nerve."
  },
  {
    question: "The urogenital diaphragm consists of:",
    options: [
      "Levator ani only",
      "Deep perineal pouch structures and perineal membrane",
      "Superficial pouch muscles",
      "Anal sphincters"
    ],
    correctAnswer: "Deep perineal pouch structures and perineal membrane",
    explanation: "The urogenital diaphragm comprises the deep pouch muscles and the perineal membrane."
  },
  {
    question: "Which structure provides the chief support to the pelvic viscera?",
    options: [
      "Perineal body",
      "Superficial fascia",
      "Endopelvic fascia",
      "Peritoneum"
    ],
    correctAnswer: "Endopelvic fascia",
    explanation: "Endopelvic (pelvic) fascia helps suspend and support the pelvic organs."
  },
  {
    question: "Which muscle is absent from the superficial perineal pouch?",
    options: [
      "Ischiocavernosus",
      "Deep transverse perineal",
      "Bulbospongiosus",
      "Superficial transverse perineal"
    ],
    correctAnswer: "Deep transverse perineal",
    explanation: "Deep transverse perineal lies in the deep pouch, not superficially."
  },
  {
    question: "In females, the superficial perineal pouch contains:",
    options: [
      "Urethra and vagina",
      "Roots of clitoris and Bartholin’s glands",
      "Rectum and anal canal",
      "Pelvic viscera"
    ],
    correctAnswer: "Roots of clitoris and Bartholin’s glands",
    explanation: "The superficial pouch houses the clitoral crura, bulbs, and Bartholin’s glands in females."
  },
  {
    question: "Which structure divides the perineum from the pelvic cavity?",
    options: [
      "Pelvic fascia",
      "Perineal body",
      "Pelvic diaphragm",
      "Perineal membrane"
    ],
    correctAnswer: "Pelvic diaphragm",
    explanation: "The levator ani and coccygeus muscles form the pelvic diaphragm separating the pelvis from the perineum."
  },
  {
    question: "Which nerve branch supplies the skin around the anus?",
    options: [
      "Posterior femoral cutaneous nerve",
      "Inferior rectal nerve",
      "Perineal branch of posterior femoral cutaneous",
      "Dorsal nerve of penis"
    ],
    correctAnswer: "Inferior rectal nerve",
    explanation: "Inferior rectal nerves provide sensory innervation to the perianal skin."
  },



],
      },
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// //Gastrulation ////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      
      
      {
        category: "Chapter 1 - 4",
        questions: [
          
  
{
    question: "According to Peterman & Kennedy (2003), integrating entrepreneurship education into the broader academic curriculum, rather than isolating it, has what effect?",
    options: [
      "Superficial engagement",
      "More profound long-term perceptions and attitudes",
      "Instant profitability",
      "Improved short-term exam scores"
    ],
    correctAnswer: "More profound long-term perceptions and attitudes",
    explanation: ""
  },
  {
    question: "Which of the following is the primary focus of a practical approach to entrepreneurship education?",
    options: [
      "Memorizing business theories",
      "Developing skills and mindsets",
      "Writing lengthy essays",
      "Conducting market research"
    ],
    correctAnswer: "Developing skills and mindsets",
    explanation: ""
  },
  {
    question: "Which of these is NOT typically part of a local entrepreneurial ecosystem for students?",
    options: [
      "Incubators",
      "Accelerators",
      "Angel investor networks",
      "Government taxation agencies"
    ],
    correctAnswer: "Government taxation agencies",
    explanation: ""
  },
  {
    question: "Schumpeter (1934) defined entrepreneurship as:",
    options: [
      "Risk avoidance",
      "New combinations of resources",
      "Market regulation",
      "Cost minimization"
    ],
    correctAnswer: "New combinations of resources",
    explanation: ""
  },
  {
    question: "Which of the following is considered the main driver of entrepreneurship?",
    options: [
      "Human resources",
      "Innovation",
      "Financial capital",
      "Government policy"
    ],
    correctAnswer: "Innovation",
    explanation: ""
  },
  {
    question: "Entrepreneurship is both a business activity and a(n) _______.",
    options: [
      "Economic activity",
      "Social activity",
      "Political campaign",
      "Regulatory process"
    ],
    correctAnswer: "Economic activity",
    explanation: ""
  },
  {
    question: "Managing human and non-human resources effectively is often called the _______ to successful entrepreneurship.",
    options: [
      "Panacea",
      "Barrier",
      "Challenge",
      "Obstacle"
    ],
    correctAnswer: "Panacea",
    explanation: ""
  },
  {
    question: "MSME stands for:",
    options: [
      "Macro, Strategic, Medium Enterprises",
      "Multi-State Manufacturing Entities",
      "Micro, Small, and Medium Enterprises",
      "Managed Services for Entrepreneurs"
    ],
    correctAnswer: "Micro, Small, and Medium Enterprises",
    explanation: ""
  },
  {
    question: "An entrepreneur must be mentally stable, emotionally balanced, and morally upright in order to:",
    options: [
      "Secure venture capital",
      "Mentor others effectively",
      "Avoid competition",
      "Lower operating costs"
    ],
    correctAnswer: "Mentor others effectively",
    explanation: ""
  },
  {
    question: "Intrapreneurship is best described as a system that allows employees to:",
    options: [
      "Access executive salaries",
      "Behave like entrepreneurs",
      "Circumvent company policies",
      "Reduce working hours"
    ],
    correctAnswer: "Behave like entrepreneurs",
    explanation: ""
  },
  {
    question: "Which of the following is NOT one of the three schools emphasizing the Economic Theory of entrepreneurship?",
    options: [
      "Classicalists",
      "Neo-Classicalists",
      "Austrian Market Process (AMP)",
      "Behavioral Economists"
    ],
    correctAnswer: "Behavioral Economists",
    explanation: ""
  },
  {
    question: "Classicalists believed entrepreneurship was driven primarily by:",
    options: [
      "Government subsidies",
      "Free trade, specialization and competition",
      "Technological monopolies",
      "High tax regimes"
    ],
    correctAnswer: "Free trade, specialization and competition",
    explanation: ""
  },
  {
    question: "The Austrian Market Process (AMP) school, developed by Schumpeter, emphasized:",
    options: [
      "Human action (knowledge)",
      "Strict regulation",
      "Fixed capital formation",
      "Standardized production"
    ],
    correctAnswer: "Human action (knowledge)",
    explanation: ""
  },
  {
    question: "Psychological Theory of entrepreneurship includes all of the following EXCEPT:",
    options: [
      "Personality traits",
      "Locus of control",
      "Need for achievement",
      "Social capital"
    ],
    correctAnswer: "Social capital",
    explanation: ""
  },
  {
    question: "Rotter defined ‘locus of control’ as an individual’s perception of the:",
    options: [
      "Causes of events in one’s life",
      "Level of personal income",
      "Range of managerial skills",
      "Importance of social networks"
    ],
    correctAnswer: "Causes of events in one’s life",
    explanation: ""
  },
  {
    question: "The concept of ‘need for achievement’ was first introduced by:",
    options: [
      "Drucker (1985)",
      "McClelland (1961)",
      "Rotter (1996)",
      "Conner (1991)"
    ],
    correctAnswer: "McClelland (1961)",
    explanation: ""
  },
  {
    question: "Anthropological Theory of entrepreneurship emphasizes the influence of _______ on new venture creation.",
    options: [
      "Culture",
      "Regulation",
      "Technology",
      "Finance"
    ],
    correctAnswer: "Culture",
    explanation: ""
  },
  {
    question: "Opportunity-Based Theory (Drucker, 1985) states that entrepreneurs:",
    options: [
      "Exploit opportunities created by change",
      "Directly cause societal change",
      "Avoid market fluctuations",
      "Focus only on product innovation"
    ],
    correctAnswer: "Exploit opportunities created by change",
    explanation: ""
  },
  {
    question: "Stevenson’s analysis of Drucker’s theory added which quality to the model?",
    options: [
      "Financial leverage",
      "Resourcefulness",
      "Market control",
      "Regulatory compliance"
    ],
    correctAnswer: "Resourcefulness",
    explanation: ""
  },
  {
    question: "Shane and Eckhardt argued that one may recognize entrepreneurial opportunities but lack the _______ to act on them.",
    options: [
      "Technical skills",
      "Social network",
      "Financial acumen",
      "Regulatory approval"
    ],
    correctAnswer: "Social network",
    explanation: ""
  },
  {
    question: "According to Conner (1991), entrepreneurial intuition and vision involves:",
    options: [
      "Recognizing relevant inputs",
      "Drafting formal contracts",
      "Hiring the best staff",
      "Obtaining patents"
    ],
    correctAnswer: "Recognizing relevant inputs",
    explanation: ""
  },
  {
    question: "Alvarez & Busenitz (2001) advanced Resource-Based Theory by including:",
    options: [
      "Supply chain metrics",
      "Cognitive ability/skills of the entrepreneur",
      "Fixed asset valuation",
      "Market monopolies"
    ],
    correctAnswer: "Cognitive ability/skills of the entrepreneur",
    explanation: ""
  },
  {
    question: "Critical thinking involves all of the following EXCEPT:",
    options: [
      "Questioning",
      "Analyzing",
      "Memorizing formulas",
      "Evaluating"
    ],
    correctAnswer: "Memorizing formulas",
    explanation: ""
  },
  {
    question: "Which of these is NOT one of the three levels of reflective thinking?",
    options: [
      "Technical",
      "Deliberative",
      "Critical rationality",
      "Passive acceptance"
    ],
    correctAnswer: "Passive acceptance",
    explanation: ""
  },
  {
    question: "The processes of reflective thinking include all EXCEPT:",
    options: [
      "Experiencing",
      "Reflecting on experience",
      "Learning from experience",
      "Prescribing solutions"
    ],
    correctAnswer: "Prescribing solutions",
    explanation: ""
  },
  {
    question: "Which of the following is considered the main source of innovation?",
    options: [
      "Financial capital",
      "The human mind",
      "Raw materials",
      "Government grants"
    ],
    correctAnswer: "The human mind",
    explanation: ""
  },
  {
    question: "Which of these is NOT one of the 4 Ps (dimensions) of innovation?",
    options: [
      "Paradigm",
      "Process",
      "Promotion",
      "Position"
    ],
    correctAnswer: "Promotion",
    explanation: ""
  },
  {
    question: "The 4 Cs (pillars) of innovation include all EXCEPT:",
    options: [
      "Context",
      "Culture",
      "Capability",
      "Capital"
    ],
    correctAnswer: "Capital",
    explanation: ""
  },
  {
    question: "Explicit knowledge sharing is linked primarily to:",
    options: [
      "Innovation speed",
      "Innovation quality",
      "Cost reduction",
      "Patent filings"
    ],
    correctAnswer: "Innovation quality",
    explanation: ""
  },


{
    question: "Tacit knowledge sharing most directly enhances:",
    options: [
      "Innovation cost-efficiency",
      "Innovation quality",
      "Innovation speed",
      "Innovation scale"
    ],
    correctAnswer: "Innovation speed",
    explanation: ""
  },




  {
    question: "Who said, “In the middle of every difficulty lies opportunity”?",
    options: [
      "Albert Einstein",
      "Peter Drucker",
      "Joseph Schumpeter",
      "David McClelland"
    ],
    correctAnswer: "Albert Einstein",
    explanation: ""
  },
  {
    question: "According to Lumpkin & Lichtenstein, opportunity identification is best described as the ability to:",
    options: [
      "Assess financial risk",
      "Identify a good idea and transform it into a value-adding business concept",
      "Secure venture capital",
      "Manage daily operations"
    ],
    correctAnswer: "Identify a good idea and transform it into a value-adding business concept",
    explanation: ""
  },
  {
    question: "Which of the following is NOT one of the four main idea-generation techniques?",
    options: [
      "Brainstorming",
      "Mind Mapping",
      "Brain Writing",
      "SWOT Analysis"
    ],
    correctAnswer: "SWOT Analysis",
    explanation: ""
  },
  {
    question: "In a standard brainstorming session, participants are encouraged to:",
    options: [
      "Generate as many ideas as possible without criticism",
      "Rank ideas immediately by feasibility",
      "Focus only on one idea at a time",
      "Limit discussion to financial aspects"
    ],
    correctAnswer: "Generate as many ideas as possible without criticism",
    explanation: ""
  },
  {
    question: "Brain writing differs from brainstorming because it is:",
    options: [
      "Written and silent, typically with each person jotting down ideas",
      "Led by an external moderator",
      "Conducted in a public forum",
      "Restricted to digital platforms"
    ],
    correctAnswer: "Written and silent, typically with each person jotting down ideas",
    explanation: ""
  },
  {
    question: "Which group-based technique involves 8–14 people discussing to refine and evaluate ideas?",
    options: [
      "Focus Groups",
      "Mind Mapping",
      "Brain Writing",
      "Delphi Method"
    ],
    correctAnswer: "Focus Groups",
    explanation: ""
  },
  {
    question: "Mind mapping creates a networked nodal structure by:",
    options: [
      "Branching ideas visually around a central concept",
      "Using only text lists",
      "Sorting ideas chronologically",
      "Ranking ideas by cost"
    ],
    correctAnswer: "Branching ideas visually around a central concept",
    explanation: ""
  },
  {
    question: "Which of the following is NOT a category of business idea concept?",
    options: [
      "Prospective (replacement) concepts",
      "Indirect concepts",
      "Direct concepts",
      "Collaborative concepts"
    ],
    correctAnswer: "Collaborative concepts",
    explanation: ""
  },
  {
    question: "A prospective (replacement) business idea concept typically involves:",
    options: [
      "Updating or replacing an existing product or service",
      "Creating a brand-new market category",
      "Focusing exclusively on internal processes",
      "Licensing foreign technologies"
    ],
    correctAnswer: "Updating or replacing an existing product or service",
    explanation: ""
  },
  {
    question: "New business development refers to:",
    options: [
      "Identifying, generating and seizing new prospects for a firm",
      "Managing current client relationships",
      "Optimizing existing supply chains",
      "Conducting routine financial audits"
    ],
    correctAnswer: "Identifying, generating and seizing new prospects for a firm",
    explanation: ""
  },
  {
    question: "Which of the following is NOT part of the idea-creation process described?",
    options: [
      "Brainstorming",
      "Brain writing",
      "Focus groups",
      "Cost–benefit analysis"
    ],
    correctAnswer: "Cost–benefit analysis",
    explanation: ""
  },
  {
    question: "The main objective of an entrepreneur is to:",
    options: [
      "Turn a business idea into a successful venture",
      "Maintain a large workforce",
      "Avoid all market risks",
      "Maximize daily sales volume"
    ],
    correctAnswer: "Turn a business idea into a successful venture",
    explanation: ""
  },



  {
    question: "Entrepreneurship is derived from the French word “entreptendre,” which originally meant:",
    options: [
      "Pledge",
      "To persuade",
      "To trade",
      "To innovate"
    ],
    correctAnswer: "Pledge",
    explanation: ""
  },
  {
    question: "The term “entrepreneurship” was first used in 16th-century France to describe:",
    options: [
      "Military missions",
      "Agricultural reforms",
      "Religious pilgrimages",
      "Craft guilds"
    ],
    correctAnswer: "Military missions",
    explanation: ""
  },
  {
    question: "Which statement is TRUE?",
    options: [
      "Change and innovation are synonymous",
      "Innovation always causes change",
      "Change and innovation are not synonymous",
      "All change is innovative"
    ],
    correctAnswer: "Change and innovation are not synonymous",
    explanation: ""
  },
  {
    question: "According to the text, turning information into action (“hone”) requires:",
    options: [
      "Innovation",
      "Data analytics",
      "Access to finance",
      "Market research"
    ],
    correctAnswer: "Innovation",
    explanation: ""
  },
  {
    question: "Which of the following is NOT listed as a key success factor for innovating effectively?",
    options: [
      "Leadership",
      "Support",
      "Regulatory compliance",
      "Planning"
    ],
    correctAnswer: "Regulatory compliance",
    explanation: ""
  },
  {
    question: "The five key elements of creativity include all EXCEPT:",
    options: [
      "Fluency",
      "Flexibility",
      "Originality",
      "Obedience"
    ],
    correctAnswer: "Obedience",
    explanation: ""
  },
  {
    question: "Which of these is NOT one of the innovation success indicators?",
    options: [
      "Market",
      "Team",
      "Status",
      "Regulation"
    ],
    correctAnswer: "Regulation",
    explanation: ""
  },
  {
    question: "A prospective (replacement) business idea concept contrasts with an indirect concept in that the latter:",
    options: [
      "Does not directly replace an existing product or service",
      "Focuses exclusively on replacing old products",
      "Requires external funding",
      "Is developed only by large firms"
    ],
    correctAnswer: "Does not directly replace an existing product or service",
    explanation: ""
  },
  {
    question: "A direct business idea concept is best described as one that:",
    options: [
      "Introduces a wholly new product or service to the market",
      "Replaces older products",
      "Is only for internal use",
      "Is mandated by regulators"
    ],
    correctAnswer: "Introduces a wholly new product or service to the market",
    explanation: ""
  },
  {
    question: "Cultural ideas leading to cultural business is an example of:",
    options: [
      "Anthropological Theory",
      "Resource-Based Theory",
      "Behavioral Economics",
      "Status Withdrawal Theory"
    ],
    correctAnswer: "Anthropological Theory",
    explanation: ""
  },
  {
    question: "New business development refers to:",
    options: [
      "Routine financial auditing",
      "Optimizing current operations",
      "Identifying, generating, and seizing new prospects",
      "Maintaining existing client relationships"
    ],
    correctAnswer: "Identifying, generating, and seizing new prospects",
    explanation: ""
  },


],
      },

  
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      ////////////////////

        
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
  
  
  

  
  
  
 
