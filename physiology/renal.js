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
   
  
  
  
  {
        category: "Kidney, Nephron and Juxtaglomerular Apparatus",
        questions: [
     
  
  {
    question: "In adults, both kidneys receive approximately what fraction of cardiac output?",
    options: ["10–15%", "20–25%", "30–35%", "40–45%"],
    correctAnswer: "20–25%",
    explanation: "Renal blood flow is about 1.2–1.3 L/min, which is roughly 20–25% of cardiac output."
  },
  {
    question: "Which historical figure first linked edema and albuminuria to kidney lesions (Bright’s disease)?",
    options: ["Marcello Malpighi", "Carl Ludwig", "Richard Bright", "William Bowman"],
    correctAnswer: "Richard Bright",
    explanation: "In 1827 Bright connected glomerular damage with clinical edema and proteinuria, defining nephritis."
  },
  {
    question: "Which of the following is NOT part of Malpighi’s original observations on the kidney?",
    options: ["Renal corpuscles", "Bowman’s capsule", "Glomeruli", "Vasa recta"],
    correctAnswer: "Vasa recta",
    explanation: "Malpighi described corpuscles and capsule; the vasa recta were characterized later in juxtamedullary nephrons."
  },
  {
    question: "Ludwig’s 1842 model of urine formation proposed filtration at the glomerulus and:",
    options: ["Active secretion in PCT", "Passive diffusion in loop", "Selective reabsorption in tubules", "Bulk flow in DCT"],
    correctAnswer: "Selective reabsorption in tubules",
    explanation: "Ludwig proposed glomerular filtration followed by tubular reabsorption, not active secretion."
  },
  {
    question: "Bright’s disease is otherwise known as:",
    options: ["Nephrolithiasis", "Nephritis", "Pyelonephritis", "Glomerulosclerosis"],
    correctAnswer: "Nephritis",
    explanation: "Historically, Bright’s disease refers to inflammatory kidney disorders—i.e., nephritis."
  },
  {
    question: "Which structure is NOT located within the renal medulla?",
    options: ["Pyramids", "Columns", "Sinus", "Fibrous capsule"],
    correctAnswer: "Fibrous capsule",
    explanation: "The fibrous capsule envelops the cortex; medulla contains pyramids, columns, and sinus."
  },
  {
    question: "Fenestrations in glomerular capillaries are approximately:",
    options: ["10–20 nm", "50–100 nm", "200–300 nm", "500–600 nm"],
    correctAnswer: "50–100 nm",
    explanation: "Glomerular endothelial pores are ~60–70 nm, facilitating plasma ultrafiltration."
  },
  {
    question: "The average diameter of a Bowman’s capsule (renal corpuscle) is closest to:",
    options: ["50 µm", "100 µm", "200 µm", "400 µm"],
    correctAnswer: "200 µm",
    explanation: "Human renal corpuscles measure about 200 µm across."
  },
  {
    question: "Podocytes are glomerular epithelial cells with:",
    options: ["Microvilli apical surfaces", "Interdigitating foot processes", "Fenestrated tight junctions", "Basement membrane extensions"],
    correctAnswer: "Interdigitating foot processes",
    explanation: "Podocytes wrap capillaries with pedicels that form the filtration slit diaphragm."
  },
  {
    question: "Which is NOT part of the nephron’s tubular component?",
    options: ["Proximal convoluted tubule", "Loop of Henle", "Distal convoluted tubule", "Glomerulus"],
    correctAnswer: "Glomerulus",
    explanation: "The glomerulus is part of the corpuscular (filtration) segment, not the tubular segment."
  },
  {
    question: "Cortical nephrons differ from juxtamedullary nephrons by having:",
    options: ["Long loops", "Peritubular capillaries", "Vasa recta", "Thin limbs only"],
    correctAnswer: "Peritubular capillaries",
    explanation: "Cortical nephrons have short loops and peritubular capillaries; vasa recta are in juxtamedullary nephrons."
  },
  {
    question: "Approximately what percentage of human nephrons are cortical?",
    options: ["50%", "65%", "85%", "95%"],
    correctAnswer: "85%",
    explanation: "Cortical nephrons make up about 85% of the total nephron population."
  },
  {
    question: "The efferent arteriole is smaller in diameter than the afferent arteriole to:",
    options: ["Lower glomerular pressure", "Maintain high glomerular pressure", "Equalize pressures", "Prevent filtration"],
    correctAnswer: "Maintain high glomerular pressure",
    explanation: "A narrower efferent arteriole increases resistance, keeping filtration pressure high."
  },
  {
    question: "Which of these is NOT a component of the juxtaglomerular apparatus?",
    options: ["Macula densa", "Juxtaglomerular cells", "Extraglomerular mesangial cells", "Podocytes"],
    correctAnswer: "Podocytes",
    explanation: "The JGA comprises macula densa, granular JG cells, and Lacis cells; podocytes are separate."
  },
  {
    question: "Macula densa cells sense ↑ NaCl and signal via:",
    options: ["Nitric oxide", "Adenosine/ATP", "Renin", "Angiotensin II"],
    correctAnswer: "Adenosine/ATP",
    explanation: "High tubular NaCl triggers ATP/adenosine release, causing afferent arteriole constriction."
  },
  {
    question: "Tubuloglomerular feedback results in all EXCEPT:",
    options: ["Afferent constriction", "Efferent dilation", "↓ GFR", "↑ NaCl delivery"],
    correctAnswer: "↑ NaCl delivery",
    explanation: "TGF lowers GFR, reducing NaCl at the macula densa; afferent constricts, efferent dilates."
  },
  {
    question: "Juxtaglomerular cells release renin in response to all EXCEPT:",
    options: ["↓ BP", "↓ ECF volume", "↓ macula densa NaCl", "↑ afferent stretch"],
    correctAnswer: "↑ afferent stretch",
    explanation: "Increased stretch inhibits renin; low BP, volume, or NaCl stimulate renin secretion."
  },
  {
    question: "ACE, which converts Ang I to Ang II, is primarily produced by:",
    options: ["JG cells", "Pulmonary endothelium", "Hepatocytes", "Alveolar macrophages"],
    correctAnswer: "Pulmonary endothelium",
    explanation: "ACE is abundant on lung capillary endothelium."
  },
  {
    question: "Which angiotensin form has the strongest vasopressor effect?",
    options: ["Ang I", "Ang II", "Ang III", "Ang IV"],
    correctAnswer: "Ang II",
    explanation: "Ang II is the most potent, causing vasoconstriction and aldosterone release."
  },
  {
    question: "Minor calyces drain into major calyces; how many minor calyces per kidney?",
    options: ["4–6", "8–18", "20–25", "30–35"],
    correctAnswer: "8–18",
    explanation: "Each kidney typically has between 8 and 18 minor calyces."
  },
  {
    question: "How many major calyces converge to form the renal pelvis?",
    options: ["1", "2–3", "4–5", "6–7"],
    correctAnswer: "2–3",
    explanation: "Two to three major calyces join to form the renal pelvis."
  },
  {
    question: "Which of the following is NOT a function of extraglomerular mesangial cells?",
    options: ["Prostaglandin secretion", "Cytokine release", "Phagocytosis", "Structural support"],
    correctAnswer: "Phagocytosis",
    explanation: "Extraglomerular mesangial cells release cytokines and prostaglandins but are not phagocytic."
  },
  {
    question: "Juxtaglomerular cells are primarily located in the:",
    options: ["Afferent arteriole wall", "Macula densa epithelium", "Loop of Henle", "Vasa recta"],
    correctAnswer: "Afferent arteriole wall",
    explanation: "JG cells line the afferent arteriole near Bowman’s capsule."
  },
  {
    question: "Which is NOT a stimulant for renin release?",
    options: ["↓ BP", "Sympathetic activation", "↓ NaCl at macula", "↑ Ang II levels"],
    correctAnswer: "↑ Ang II levels",
    explanation: "High Ang II provides negative feedback to inhibit renin release."
  },
  {
    question: "Which part of the nephron lies between Bowman’s capsule and the loop of Henle?",
    options: ["Proximal convoluted tubule", "Distal convoluted tubule", "Collecting duct", "Macula densa"],
    correctAnswer: "Proximal convoluted tubule",
    explanation: "The PCT connects Bowman’s capsule to the loop of Henle."
  },
  {
    question: "Which vascular network surrounds juxtamedullary loops of Henle?",
    options: ["Peritubular capillaries", "Vasa recta", "Glomerular capillaries", "Interstitial veins"],
    correctAnswer: "Vasa recta",
    explanation: "Vasa recta run alongside long loops to maintain medullary concentration gradients."
  },
  {
    question: "Which nephron type is primarily responsible for concentrating urine?",
    options: ["Cortical nephron", "Juxtamedullary nephron", "Subcapsular nephron", "Intermediate nephron"],
    correctAnswer: "Juxtamedullary nephron",
    explanation: "Their long loops and vasa recta establish and maintain the osmotic gradient."
  },
  {
    question: "The ratio of afferent to efferent arteriole diameter is such that efferent is:",
    options: ["Wider", "Equal", "Narrower", "Highly variable"],
    correctAnswer: "Narrower",
    explanation: "A narrower efferent arteriole increases glomerular filtration pressure."
  },
  {
    question: "Which tubular segment senses flow and composition to regulate GFR?",
    options: ["Macula densa", "PCT", "Collecting duct", "Loop of Henle"],
    correctAnswer: "Macula densa",
    explanation: "Macula densa cells in the thick ascending limb monitor NaCl and mediate tubuloglomerular feedback."
  },
  {
    question: "Which cell type forms the filtration barrier alongside fenestrated endothelium?",
    options: ["Mesangial cells", "Podocytes", "JG cells", "Epithelial cells of PCT"],
    correctAnswer: "Podocytes",
    explanation: "Podocyte foot processes and slit diaphragms complement endothelial fenestrae and basement membrane."
  },
  {
    question: "Which arteriole contributes to peritubular capillary formation after glomerular exit?",
    options: ["Afferent arteriole", "Efferent arteriole", "Interlobular artery", "Arcuate artery"],
    correctAnswer: "Efferent arteriole",
    explanation: "The efferent arteriole breaks into peritubular capillaries around cortical tubules."
  },
  {
    question: "Which segment’s epithelial cells contain numerous mitochondria for active transport?",
    options: ["PCT", "DCT", "Collecting duct", "Thin limb of Henle"],
    correctAnswer: "PCT",
    explanation: "Proximal tubule cells have abundant mitochondria to fuel reabsorption."
  },
  {
    question: "Which structure marks the transition from thick ascending limb to DCT at the JGA?",
    options: ["Macula densa", "Podocyte collar", "Bowman’s capsule outlet", "Collecting tubule entrance"],
    correctAnswer: "Macula densa",
    explanation: "The macula densa is the terminal thick ascending limb adjacent to arterioles."
  },
  {
    question: "Which hormone is NOT secreted by the JGA?",
    options: ["Renin", "Prostaglandin", "Erythropoietin", "None of the above"],
    correctAnswer: "Erythropoietin",
    explanation: "EPO is released by interstitial fibroblasts, not the JGA."
  },
  {
    question: "In the renal corpuscle, mesangial cells function in all ways EXCEPT:",
    options: ["Structural support", "Phagocytosis", "Secretion of cytokines", "Regulation of afferent tone"],
    correctAnswer: "Regulation of afferent tone",
    explanation: "Mesangial cells support, phagocytose, and secrete cytokines; JG cells regulate tone."
  },
  {
    question: "Which of these tunics surrounds the entire kidney?",
    options: ["Capsular epithelium", "Fibrous capsule", "Perinephric fat", "Renal pelvis"],
    correctAnswer: "Fibrous capsule",
    explanation: "The fibrous capsule is the kidney’s tough outer layer."
  },
  {
    question: "Which structure lies in the renal sinus collecting urine before it enters the ureter?",
    options: ["Minor calyx", "Major calyx", "Renal papilla", "Collecting duct"],
    correctAnswer: "Major calyx",
    explanation: "Major calyces converge into the renal pelvis, which continues as the ureter."
  },
  {
    question: "Which arteriole’s diameter change has the greatest effect on GFR?",
    options: ["Afferent arteriole dilation", "Efferent arteriole dilation", "Arcuate artery constriction", "Interlobular artery dilation"],
    correctAnswer: "Afferent arteriole dilation",
    explanation: "Afferent dilation increases glomerular pressure and GFR most significantly."
  },
  

],
      },
  
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////Introduction to Physiology///////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      {
        category: "Urine formation, Concentration and Micturition",
        questions: [
     
    {
    question: "All of the following are phases of urine formation EXCEPT:",
    options: [
      "Glomerular filtration",
      "Tubular reabsorption",
      "Tubular secretion",
      "Collecting duct concentration"
    ],
    correctAnswer: "Collecting duct concentration",
    explanation: "Urine formation consists of filtration, reabsorption, and secretion; concentration in the collecting duct is a result, not a separate phase."
  },
  {
    question: "Which nephron segment is known as the “point of no return”?",
    options: [
      "Proximal convoluted tubule",
      "Loop of Henle",
      "Distal convoluted tubule",
      "Collecting duct"
    ],
    correctAnswer: "Collecting duct",
    explanation: "Once filtrate enters the collecting duct, no further upstream modifications can occur."
  },
  {
    question: "Glomerular filtration membrane includes all of the following layers EXCEPT:",
    options: [
      "Fenestrated capillary endothelium",
      "Glomerular basement membrane",
      "Visceral layer of Bowman’s capsule",
      "Parietal layer of Bowman’s capsule"
    ],
    correctAnswer: "Parietal layer of Bowman’s capsule",
    explanation: "Filtration occurs through endothelium, basement membrane, and podocyte layer; the parietal layer lines Bowman’s space."
  },
  {
    question: "Normal glomerular filtration rate (GFR) in an adult is closest to:",
    options: [
      "60 mL/min",
      "90 mL/min",
      "125 mL/min",
      "180 mL/min"
    ],
    correctAnswer: "125 mL/min",
    explanation: "GFR averages about 125 mL per minute (≈180 L per day) in healthy adults."
  },
  {
    question: "Glomerular capillary hydrostatic pressure is typically about:",
    options: [
      "15 mmHg",
      "30 mmHg",
      "60 mmHg",
      "100 mmHg"
    ],
    correctAnswer: "60 mmHg",
    explanation: "Glomerular capillary pressure (45–70 mmHg) is the highest in the body and favors filtration."
  },
  {
    question: "Which pressure opposes glomerular filtration by pulling fluid back into capillaries?",
    options: [
      "Bowman’s capsular hydrostatic pressure",
      "Glomerular colloid osmotic pressure",
      "Afferent arteriole pressure",
      "Tubular lumen pressure"
    ],
    correctAnswer: "Glomerular colloid osmotic pressure",
    explanation: "Plasma proteins exert oncotic pressure in glomerular capillaries, resisting filtration."
  },
  {
    question: "The net filtration pressure equation (ΔP − Δπ) was formulated by:",
    options: [
      "William Bowman",
      "Frank Starling",
      "Marcello Malpighi",
      "Carl Ludwig"
    ],
    correctAnswer: "Frank Starling",
    explanation: "Starling described how hydrostatic and oncotic pressures determine net fluid movement across capillaries."
  },
  {
    question: "GFR is directly proportional to:",
    options: [
      "Plasma protein concentration",
      "Renal blood flow",
      "Capsular oncotic pressure",
      "Tubular back-pressure"
    ],
    correctAnswer: "Renal blood flow",
    explanation: "Increased renal blood flow raises glomerular capillary pressure and thus GFR."
  },
  {
    question: "Selective reabsorption refers to:",
    options: [
      "Passive diffusion of all solutes",
      "Active uptake of essential substances",
      "Bulk flow of water only",
      "Filtration at the glomerulus"
    ],
    correctAnswer: "Active uptake of essential substances",
    explanation: "Tubular cells use ATP to reabsorb specific solutes (e.g., glucose, amino acids)."
  },
  {
    question: "Passive reabsorption in the nephron does NOT include:",
    options: [
      "Chloride",
      "Urea",
      "Water",
      "Glucose"
    ],
    correctAnswer: "Glucose",
    explanation: "Glucose is reabsorbed actively; chloride, urea, and water move passively along gradients."
  },
  {
    question: "Which substance moves via the transcellular route rather than the paracellular route?",
    options: [
      "Sodium",
      "Chloride",
      "Glucose",
      "Urea"
    ],
    correctAnswer: "Glucose",
    explanation: "Glucose is reabsorbed transcellularly through epithelial cells using carriers."
  },
  {
    question: "Paracellular reabsorption bypasses cells and occurs via:",
    options: [
      "Aquaporin channels",
      "Tight junctions",
      "Carrier-mediated transport",
      "Endocytosis"
    ],
    correctAnswer: "Tight junctions",
    explanation: "Paracellular movement occurs between cells through intercellular spaces."
  },
  {
    question: "Which of the following is NOT reabsorbed in the proximal convoluted tubule?",
    options: [
      "Glucose",
      "Amino acids",
      "Creatinine",
      "Bicarbonate"
    ],
    correctAnswer: "Creatinine",
    explanation: "Creatinine is not reabsorbed and is instead excreted unchanged."
  },
  {
    question: "The loop of Henle reabsorbs primarily:",
    options: [
      "Glucose",
      "Amino acids",
      "Sodium and chloride",
      "Uric acid"
    ],
    correctAnswer: "Sodium and chloride",
    explanation: "The thick ascending limb actively transports Na⁺/Cl⁻ but is impermeable to water."
  },
  {
    question: "Which solute is reabsorbed in the distal convoluted tubule?",
    options: [
      "Glucose",
      "Sodium",
      "Phosphate",
      "Urea"
    ],
    correctAnswer: "Sodium",
    explanation: "DCT reabsorbs Na⁺, Ca²⁺, HCO₃⁻, and water under hormonal control."
  },
  {
    question: "Sodium reabsorption occurs in:",
    options: [
      "Only PCT and loop of Henle",
      "Only DCT and collecting duct",
      "All nephron segments",
      "Collecting duct only"
    ],
    correctAnswer: "All nephron segments",
    explanation: "Na⁺ reabsorption throughout the nephron regulates extracellular fluid volume."
  },
  {
    question: "Glomerulotubular balance ensures:",
    options: [
      "Constant GFR regardless of blood flow",
      "Matching reabsorption to filtration rate",
      "Complete excretion of filtered load",
      "Equal osmolarity of filtrate and plasma"
    ],
    correctAnswer: "Matching reabsorption to filtration rate",
    explanation: "It maintains a stable fraction of reabsorption despite GFR fluctuations."
  },
  {
    question: "Which hormone does NOT directly regulate GFR?",
    options: [
      "Antidiuretic hormone",
      "Aldosterone",
      "Angiotensin II",
      "Parathyroid hormone"
    ],
    correctAnswer: "Parathyroid hormone",
    explanation: "ADH, aldosterone, and Ang II affect filtration and reabsorption; PTH mainly regulates Ca²⁺."
  },
  {
    question: "Angiotensin II enhances sodium reabsorption in the:",
    options: [
      "Proximal and distal tubules",
      "Glomerulus",
      "Loop of Henle only",
      "Collecting duct only"
    ],
    correctAnswer: "Proximal and distal tubules",
    explanation: "Ang II stimulates Na⁺ reabsorption in both PCT and DCT to conserve volume."
  },
  {
    question: "Sympathetic activation in the kidney primarily:",
    options: [
      "Decreases sodium reabsorption",
      "Increases sodium reabsorption",
      "Inhibits renin release",
      "Dilates afferent arteriole"
    ],
    correctAnswer: "Increases sodium reabsorption",
    explanation: "SNS stimulation enhances Na⁺ reabsorption via α₁-adrenergic receptors on tubule cells."
  },
  {
    question: "Urea handling in the nephron includes:",
    options: [
      "No secretion or reabsorption",
      "Secretion in the loop of Henle",
      "Active reabsorption in DCT",
      "No movement in collecting duct"
    ],
    correctAnswer: "Secretion in the loop of Henle",
    explanation: "Urea is secreted into the thin limb, aiding the medullary osmotic gradient."
  },
  {
    question: "Tubular secretion refers to:",
    options: [
      "Passive movement from filtrate to blood",
      "Active transport from blood to tubule",
      "Filtration at glomerulus",
      "Bulk flow in Bowman’s space"
    ],
    correctAnswer: "Active transport from blood to tubule",
    explanation: "Secretion actively moves substances from peritubular capillaries into the tubular lumen."
  },
  {
    question: "Filtrate osmolarity at the end of the PCT is:",
    options: [
      "Hypotonic",
      "Isotonic",
      "Hypertonic",
      "Zero"
    ],
    correctAnswer: "Isotonic",
    explanation: "Early filtrate remains ~300 mOsm/L, identical to plasma osmolarity."
  },
  {
    question: "Maximum inner medullary interstitial osmolarity in juxtamedullary nephrons reaches:",
    options: [
      "600 mOsm/L",
      "900 mOsm/L",
      "1200 mOsm/L",
      "1800 mOsm/L"
    ],
    correctAnswer: "1200 mOsm/L",
    explanation: "Long loops and urea recycling generate a gradient up to ~1200 mOsm/L."
  },
  {
    question: "Which segment is impermeable to water but reabsorbs NaCl rapidly?",
    options: [
      "Thin descending limb",
      "Thick ascending limb",
      "Thin ascending limb",
      "Collecting duct"
    ],
    correctAnswer: "Thick ascending limb",
    explanation: "The thick ascending limb actively transports NaCl but does not allow water passage."
  },
  {
    question: "Diuresis (large urine volume) is typical of:",
    options: [
      "Diabetes insipidus",
      "Diabetes mellitus",
      "SIADH",
      "Congestive heart failure"
    ],
    correctAnswer: "Diabetes mellitus",
    explanation: "Glucose-rich filtrate in DM osmotically draws water, causing polyuria."
  },
  {
    question: "Polyuria with normal ADH levels but unresponsive tubules is:",
    options: [
      "Central DI",
      "Nephrogenic DI",
      "Gestational DI",
      "Psychogenic polydipsia"
    ],
    correctAnswer: "Nephrogenic DI",
    explanation: "Kidneys fail to respond to ADH despite normal secretion, causing polyuria."
  },
  {
    question: "Bartter’s syndrome results from transporter defects in:",
    options: [
      "PCT and DCT",
      "Thick ascending limb and DCT",
      "Collecting duct",
      "Glomerular basement membrane"
    ],
    correctAnswer: "Thick ascending limb and DCT",
    explanation: "Mutations in NKCC2 (TAL) or NCC (DCT) channels cause Bartter’s syndrome."
  },
  {
    question: "Nighttime bedwetting after age 3 is called:",
    options: [
      "Nocturia",
      "Enuresis",
      "Polyuria",
      "Dysuria"
    ],
    correctAnswer: "Enuresis",
    explanation: "Enuresis is involuntary nocturnal micturition beyond the age of 3."
  },
  {
    question: "Lesions in the midbrain cause:",
    options: [
      "Urinary retention",
      "Uninhibited neurogenic bladder",
      "Nephrogenic DI",
      "Overflow incontinence"
    ],
    correctAnswer: "Uninhibited neurogenic bladder",
    explanation: "Suprapontine lesions remove voluntary control, causing frequent involuntary voiding."
  },
  {
    question: "An automatic bladder is characterized by:",
    options: [
      "Absence of reflex micturition",
      "Hyperactive reflex but no voluntary control",
      "Only overflow incontinence",
      "Complete urinary retention"
    ],
    correctAnswer: "Hyperactive reflex but no voluntary control",
    explanation: "Automatic bladder loses voluntary override but retains hyperactive reflex emptying."
  },
  {
    question: "Which layer is NOT part of the detrusor muscle?",
    options: [
      "Inner longitudinal",
      "Middle circular",
      "Outer longitudinal",
      "Oblique"
    ],
    correctAnswer: "Oblique",
    explanation: "Detrusor consists of inner and outer longitudinal layers plus a middle circular layer."
  },
  {
    question: "Detrusor muscle contraction results in:",
    options: [
      "Urine retention",
      "Urine expulsion",
      "Relaxation of external sphincter",
      "Increased bladder capacity"
    ],
    correctAnswer: "Urine expulsion",
    explanation: "Contraction of detrusor compresses the bladder, forcing urine out."
  },
  {
    question: "Male urethra differs from female urethra by:",
    options: [
      "Length and dual function for urine and semen",
      "Absence of mucus glands",
      "Being shorter",
      "Carrying only urine"
    ],
    correctAnswer: "Length and dual function for urine and semen",
    explanation: "The male urethra is longer and conducts both urine and semen."
  },
  {
    question: "Glands of Littre are:",
    options: [
      "Prostate glands",
      "Bulbourethral glands",
      "Mucus glands along the urethra",
      "Paraurethral glands"
    ],
    correctAnswer: "Mucus glands along the urethra",
    explanation: "Littre’s glands secrete mucus throughout the urethral length."
  },
  {
    question: "Cowper’s glands are also called:",
    options: [
      "Skene’s glands",
      "Bulbourethral glands",
      "Bartholin’s glands",
      "Littre’s glands"
    ],
    correctAnswer: "Bulbourethral glands",
    explanation: "Cowper’s (bulbourethral) glands secrete pre-ejaculatory mucus into the male urethra."
  },
  {
    question: "The internal urethral sphincter is under control of:",
    options: [
      "Somatic pudendal fibers",
      "Parasympathetic pelvic nerves",
      "Sympathetic hypogastric nerves",
      "Vagus nerve"
    ],
    correctAnswer: "Sympathetic hypogastric nerves",
    explanation: "Sympathetic fibers (L1–L2) keep the internal sphincter contracted during filling."
  },
  {
    question: "The external urethral sphincter is innervated by:",
    options: [
      "Pelvic splanchnic nerves",
      "Hypogastric nerves",
      "Pudendal nerve",
      "Obturator nerve"
    ],
    correctAnswer: "Pudendal nerve",
    explanation: "Somatic pudendal fibers allow voluntary control of the external sphincter."
  },
  {
    question: "Which nerve is called the “nerve of filling”?",
    options: [
      "Pelvic parasympathetic nerve",
      "Hypogastric sympathetic nerve",
      "Pudendal nerve",
      "Vagus nerve"
    ],
    correctAnswer: "Hypogastric sympathetic nerve",
    explanation: "Sympathetic hypogastric nerve relaxes detrusor and constricts internal sphincter during filling."
  },
  {
    question: "Which nerve is termed the “nerve of emptying”?",
    options: [
      "Hypogastric nerve",
      "Pudendal nerve",
      "Pelvic parasympathetic nerve",
      "Femoral nerve"
    ],
    correctAnswer: "Pelvic parasympathetic nerve",
    explanation: "Pelvic splanchnics (S2–S4) contract detrusor and relax internal sphincter to void urine."
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
  
  
  

  
  
  
 
