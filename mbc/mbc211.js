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
        category: "Cells",
        questions: [
          
          
  {
    question: "Which scientist first used the term 'cell' to describe plant structures?",
    options: [
      "Antoine van Leeuwenhoek",
      "Matthias Schleiden",
      "Robert Hooke",
      "Theodor Schwann"
    ],
    correctAnswer: "Robert Hooke",
    explanation: "Robert Hooke coined the term 'cell' in 1665 after observing cork under a microscope."
  },
  {
    question: "All of the following are components of eukaryotic cells EXCEPT:",
    options: [
      "Plasma membrane",
      "Mitochondria",
      "Peptidoglycan cell wall",
      "Cytoplasm"
    ],
    correctAnswer: "Peptidoglycan cell wall",
    explanation: "Peptidoglycan cell walls are characteristic of bacteria, not eukaryotic cells."
  },
  {
    question: "Which of the following organisms is NOT classified as a Gram-negative bacterium?",
    options: [
      "Escherichia coli",
      "Streptococcus pyogenes",
      "Pseudomonas aeruginosa",
      "Klebsiella pneumoniae"
    ],
    correctAnswer: "Streptococcus pyogenes",
    explanation: "Streptococcus pyogenes is a Gram-positive bacterium."
  },
  {
    question: "Which organelle is bean-shaped with a double membrane and folded inner membranes?",
    options: [
      "Golgi apparatus",
      "Lysosome",
      "Mitochondrion",
      "Peroxisome"
    ],
    correctAnswer: "Mitochondrion",
    explanation: "Mitochondria have a double membrane with inner folds called cristae."
  },
  {
    question: "All of the following are true about smooth endoplasmic reticulum EXCEPT:",
    options: [
      "It transports lipids",
      "It has ribosomes",
      "It performs detoxification",
      "It lacks ribosomes"
    ],
    correctAnswer: "It has ribosomes",
    explanation: "Smooth ER lacks ribosomes; ribosomes are found on rough ER."
  },
  {
    question: "Which scientist is credited with first observing 'animalcules' (microorganisms)?",
    options: [
      "Robert Brown",
      "Antonie van Leeuwenhoek",
      "Rudolf Virchow",
      "Theodor Schwann"
    ],
    correctAnswer: "Antonie van Leeuwenhoek",
    explanation: "Leeuwenhoek first described microorganisms as 'animalcules' in the 1670s."
  },
  {
    question: "Which cell type remains permanently in G₀ phase?",
    options: [
      "Stable cells",
      "Permanent cells",
      "Labile cells",
      "Germ cells"
    ],
    correctAnswer: "Permanent cells",
    explanation: "Permanent cells such as neurons no longer re-enter the cell cycle and remain in G₀."
  },
  {
    question: "In bacterial conjugation, genes are transferred ____.",
    options: [
      "Vertically",
      "Diagonally",
      "Randomly",
      "Horizontally"
    ],
    correctAnswer: "Horizontally",
    explanation: "Conjugation transfers genetic material between bacteria horizontally."
  },
  {
    question: "Which structure is ONLY found in animal cells?",
    options: [
      "Chloroplast",
      "Cell wall",
      "Lysosome",
      "Large central vacuole"
    ],
    correctAnswer: "Lysosome",
    explanation: "Lysosomes are characteristic of animal cells; plants do not have them."
  },
  {
    question: "Which of the following is TRUE about mycoplasma species?",
    options: [
      "They possess a rigid peptidoglycan wall",
      "They are among the smallest free-living organisms",
      "They have chloroplasts",
      "They are multicellular"
    ],
    correctAnswer: "They are among the smallest free-living organisms",
    explanation: "Mycoplasmas lack cell walls and are extremely small (0.2–0.3 μm)."
  },
  {
    question: "Which statement is NOT included in the Cell Theory?",
    options: [
      "All living things are composed of cells",
      "All cells come from pre-existing cells",
      "Cells arise spontaneously",
      "The cell is the basic unit of life"
    ],
    correctAnswer: "Cells arise spontaneously",
    explanation: "Cell theory states cells come only from pre-existing cells, not by spontaneous generation."
  },
  {
    question: "Which organelle is directly responsible for protein synthesis?",
    options: [
      "Mitochondrion",
      "Ribosome",
      "Golgi apparatus",
      "Cytoskeleton"
    ],
    correctAnswer: "Ribosome",
    explanation: "Ribosomes catalyze the assembly of amino acids into proteins."
  },
  {
    question: "All of the following are Gram-positive cocci EXCEPT:",
    options: [
      "Bacillus megaterium",
      "Streptococcus pneumoniae",
      "Streptococcus pyogenes",
      "Enterococcus faecalis"
    ],
    correctAnswer: "Bacillus megaterium",
    explanation: "Bacillus megaterium is a Gram-positive rod, not a coccus."
  },
  {
    question: "Which endoplasmic reticulum is studded with ribosomes?",
    options: [
      "Smooth ER",
      "Rough ER",
      "Both have ribosomes",
      "Neither has ribosomes"
    ],
    correctAnswer: "Rough ER",
    explanation: "Rough ER bears ribosomes on its cytosolic surface."
  },
  {
    question: "Which is NOT included among the three major components of all cells?",
    options: [
      "DNA",
      "Cytoplasm",
      "Plasma membrane",
      "Mitochondrial DNA"
    ],
    correctAnswer: "Mitochondrial DNA",
    explanation: "Mitochondrial DNA is specific to mitochondria; the universal component is genomic DNA."
  },
  {
    question: "Which scientist provided the first formal statement that all cells arise from pre-existing cells?",
    options: [
      "Matthias Schleiden",
      "Theodor Schwann",
      "Rudolf Virchow",
      "Antonie van Leeuwenhoek"
    ],
    correctAnswer: "Rudolf Virchow",
    explanation: "In 1855 Virchow stated 'Omnis cellula e cellula'—all cells from cells."
  },
  {
    question: "Which is NOT a function of the smooth endoplasmic reticulum?",
    options: [
      "Detoxification",
      "Lipid synthesis",
      "Protein glycosylation",
      "Calcium ion storage"
    ],
    correctAnswer: "Protein glycosylation",
    explanation: "Protein glycosylation occurs in the rough ER and Golgi apparatus."
  },
  {
    question: "Which of the following cell types is classified as labile?",
    options: [
      "Neurons",
      "Cardiac muscle cells",
      "Hepatocytes",
      "Epithelial skin cells"
    ],
    correctAnswer: "Epithelial skin cells",
    explanation: "Labile cells like skin epithelium continuously proliferate."
  },
  {
    question: "Which organelle is NOT included in both plant and animal cells?",
    options: [
      "Golgi apparatus",
      "Chloroplast",
      "Ribosome",
      "Nucleus"
    ],
    correctAnswer: "Chloroplast",
    explanation: "Chloroplasts are unique to plant cells."
  },
  {
    question: "Which statement about the physiological pH of 7.4 is correct?",
    options: [
      "It exists as cations",
      "It exists as anions",
      "It is highly acidic",
      "It indicates a basic solution"
    ],
    correctAnswer: "It exists as anions",
    explanation: "At pH 7.4, many groups exist in their anionic forms."
  },
  {
    question: "Which of these is NOT a permanent cell type?",
    options: [
      "Neurons",
      "Cardiac muscle cells",
      "Bone marrow cells",
      "Skeletal muscle cells"
    ],
    correctAnswer: "Bone marrow cells",
    explanation: "Bone marrow cells are labile, not permanent."
  },
  {
    question: "Which of the following is an oligosaccharide by definition?",
    options: [
      "Starch",
      "Cellulose",
      "Maltotriose",
      "Glycogen"
    ],
    correctAnswer: "Maltotriose",
    explanation: "Maltotriose has three monosaccharide units (oligo = 3–10)."
  },
  {
    question: "All of the following are common to both plant and animal cells EXCEPT:",
    options: [
      "Mitochondria",
      "Chloroplast",
      "Endoplasmic reticulum",
      "Golgi apparatus"
    ],
    correctAnswer: "Chloroplast",
    explanation: "Chloroplasts occur only in plant cells."
  },
  {
    question: "Which scientist stated that all animals are composed of cells in 1839?",
    options: [
      "Matthias Schleiden",
      "Rudolf Virchow",
      "Theodor Schwann",
      "Robert Brown"
    ],
    correctAnswer: "Theodor Schwann",
    explanation: "Schwann extended cell theory to animals in 1839."
  },
  {
    question: "Which of these is NOT included in the cytoskeleton?",
    options: [
      "Microtubules",
      "Microfilaments",
      "Intermediate filaments",
      "Endoplasmic reticulum"
    ],
    correctAnswer: "Endoplasmic reticulum",
    explanation: "The ER is an organelle, not part of the cytoskeleton."
  },
  {
    question: "Which Gram-positive bacterium is rod-shaped and spore-forming?",
    options: [
      "Streptococcus pneumoniae",
      "Bacillus megaterium",
      "Escherichia coli",
      "Pseudomonas aeruginosa"
    ],
    correctAnswer: "Bacillus megaterium",
    explanation: "B. megaterium is a Gram-positive, spore-forming rod."
  },
  {
    question: "Which cell theory statement is NOT included in the contributions of Schleiden, Schwann, and Virchow?",
    options: [
      "Cells are the basic unit of structure",
      "All plants are made of cells",
      "Energy is conserved within cells",
      "All cells come from pre-existing cells"
    ],
    correctAnswer: "Energy is conserved within cells",
    explanation: "Conservation of energy is a physical law, not part of classic cell theory."
  },
  {
    question: "Which of the following is NOT a function of the plasma membrane?",
    options: [
      "Selective permeability",
      "Protein synthesis",
      "Cell signaling",
      "Structural support"
    ],
    correctAnswer: "Protein synthesis",
    explanation: "Protein synthesis occurs at ribosomes, not the plasma membrane."
  },
          
          
          
          ],
          },
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// General Questions////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////


{
        category: "Water",
        questions: [
          
          
{
    question: "Water’s designation as the 'universal solvent' arises from its ability to:",
    options: [
      "Dissolve only nonpolar substances",
      "Form ionic crystals",
      "Dissolve a wide range of polar and ionic compounds",
      "Act as a colloid"
    ],
    correctAnswer: "Dissolve a wide range of polar and ionic compounds",
    explanation: "Water’s polarity and hydrogen bonding allow it to solvate many polar and ionic solutes."
  },
  {
    question: "All of the following contribute to daily water intake EXCEPT:",
    options: [
      "Metabolic water",
      "Drinking fluids",
      "Inhaled air humidity",
      "Water in food"
    ],
    correctAnswer: "Inhaled air humidity",
    explanation: "Daily water intake derives from drinking, food, and metabolism; inhaled humidity is not consumed."
  },
  {
    question: "Which compartment comprises approximately 75 % of the extracellular fluid volume?",
    options: [
      "Plasma",
      "Transcellular fluid",
      "Interstitial fluid",
      "Lymph"
    ],
    correctAnswer: "Interstitial fluid",
    explanation: "About 75% of ECF (≈10.5 L) is interstitial; plasma makes up the remaining 25%."
  },
  {
    question: "At 25 °C, the ionization of pure water yields [H⁺] and [OH⁻] each equal to:",
    options: [
      "1 × 10⁻¹⁴ M",
      "1 × 10⁻⁷ M",
      "55.5 M",
      "2 × 10⁻⁹ M"
    ],
    correctAnswer: "1 × 10⁻⁷ M",
    explanation: "Pure water has [H⁺] = [OH⁻] = 10⁻⁷ M at 25 °C, giving Kw = 10⁻¹⁴."
  },
  {
    question: "Which ion is the principal intracellular cation?",
    options: [
      "Sodium",
      "Chloride",
      "Calcium",
      "Potassium"
    ],
    correctAnswer: "Potassium",
    explanation: "Potassium is the chief cation inside cells, while sodium predominates extracellularly."
  },
  {
    question: "Which of the following is NOT included in the main hormonal regulators of water and electrolyte balance?",
    options: [
      "Antidiuretic hormone (ADH)",
      "Renin–angiotensin–aldosterone system (RAAS)",
      "Atrial natriuretic factor (ANF)",
      "Thyroid-stimulating hormone (TSH)"
    ],
    correctAnswer: "Thyroid-stimulating hormone (TSH)",
    explanation: "TSH regulates thyroid function, not directly water or electrolyte balance."
  },
  {
    question: "Water loss that occurs 'insensibly' refers to loss via:",
    options: [
      "Urine",
      "Sweat glands",
      "Skin evaporation and lungs",
      "Feces"
    ],
    correctAnswer: "Skin evaporation and lungs",
    explanation: "Insensible loss happens without solute excretion through skin and pulmonary evaporation."
  },
  {
    question: "Which statement about total body water (TBW) in a 70 kg adult male is TRUE?",
    options: [
      "TBW ≈ 60 L",
      "TBW ≈ 42 L",
      "TBW ≈ 28 L",
      "TBW ≈ 14 L"
    ],
    correctAnswer: "TBW ≈ 42 L",
    explanation: "Total body water in a 70 kg man is ~60% of body weight, or ~42 L."
  },
  {
    question: "All of the following fluids contain water as a lubricant EXCEPT:",
    options: [
      "Synovial fluid",
      "Pleural fluid",
      "Peritoneal fluid",
      "Saliva"
    ],
    correctAnswer: "Saliva",
    explanation: "Saliva aids digestion and oral lubrication but is not a joint/serous cavity lubricant."
  },
  {
    question: "Which value approximate the molarity of pure water?",
    options: [
      "1 M",
      "10 M",
      "55.5 M",
      "100 M"
    ],
    correctAnswer: "55.5 M",
    explanation: "Pure water has a molarity of ~55.5 M (1000 g/L ÷ 18 g/mol)."
  },
  {
    question: "An increase in plasma osmolality primarily triggers the sensation of ____ to restore water balance.",
    options: [
      "Satiety",
      "Thirst",
      "Nausea",
      "Hypertension"
    ],
    correctAnswer: "Thirst",
    explanation: "Elevated osmolality activates hypothalamic thirst centers to increase water intake."
  },
  {
    question: "Which pair correctly matches compartment with its approximate volume in a 70 kg man?",
    options: [
      "Plasma 10.5 L",
      "Intracellular fluid 14 L",
      "Interstitial fluid 3.5 L",
      "Extracellular fluid 14 L"
    ],
    correctAnswer: "Extracellular fluid 14 L",
    explanation: "ECF is ~14 L; ICF is ~28 L, interstitial ~10.5 L, plasma ~3.5 L."
  },
  {
    question: "Which of these anions plays the LEAST direct role in plasma acid–base balance?",
    options: [
      "Bicarbonate",
      "Chloride",
      "Phosphate",
      "Sulphate"
    ],
    correctAnswer: "Sulphate",
    explanation: "Bicarbonate, chloride, and phosphate are primary in acid–base buffering; sulphate less so."
  },
  {
    question: "Which statement about metabolic water is CORRECT?",
    options: [
      "It accounts for ~50% of daily water needs",
      "It is produced by oxidation of macronutrients",
      "It is exhaled unchanged",
      "It is derived from drinking fluids"
    ],
    correctAnswer: "It is produced by oxidation of macronutrients",
    explanation: "Metabolic water arises internally via oxidation of fats, proteins, and carbohydrates."
  },
  {
    question: "Which of the following is NOT included among the sources of metabolic water?",
    options: [
      "Fat oxidation",
      "Glucose oxidation",
      "Protein oxidation",
      "Drinking metabolic juices"
    ],
    correctAnswer: "Drinking metabolic juices",
    explanation: "Metabolic water is generated within cells, not ingested."
  },
  {
    question: "All of these hormones increase water reabsorption EXCEPT:",
    options: [
      "ADH",
      "Aldosterone",
      "Atrial natriuretic factor",
      "Angiotensin II"
    ],
    correctAnswer: "Atrial natriuretic factor",
    explanation: "ANF promotes Na⁺ and water excretion, opposite to ADH, aldosterone, and Ang II."
  },
  {
    question: "Which of the following correctly lists compartments from largest to smallest volume in a 70 kg man?",
    options: [
      "ECF > ICF > plasma",
      "ICF > interstitial > plasma",
      "Plasma > interstitial > ICF",
      "ICF > plasma > interstitial"
    ],
    correctAnswer: "ICF > interstitial > plasma",
    explanation: "ICF 28 L > interstitial 10.5 L > plasma 3.5 L."
  },
  {
    question: "Which condition is NOT a typical symptom of dehydration?",
    options: [
      "Oliguria",
      "Intense thirst",
      "Mental confusion",
      "Polyuria"
    ],
    correctAnswer: "Polyuria",
    explanation: "Dehydration leads to decreased urine output (oliguria), not polyuria."
  },
  {
    question: "Which of these is the principal extracellular cation?",
    options: [
      "Potassium",
      "Sodium",
      "Magnesium",
      "Calcium"
    ],
    correctAnswer: "Sodium",
    explanation: "Sodium is the main cation in extracellular fluid."
  },
  {
    question: "All of the following statements about insensible water loss are TRUE EXCEPT:",
    options: [
      "Occurs via skin and lungs",
      "Does not involve solute loss",
      "Accounts for roughly 20 % of total water loss",
      "Can be consciously regulated"
    ],
    correctAnswer: "Can be consciously regulated",
    explanation: "Insensible loss is passive and not under voluntary control."
  },
  {
    question: "Which factor does NOT significantly alter total body water percentage?",
    options: [
      "Age",
      "Sex",
      "Hydration status",
      "Blood type"
    ],
    correctAnswer: "Blood type",
    explanation: "Blood type does not influence body water composition."
  },
  {
    question: "Which of the following fluid shifts would you expect if plasma protein content falls dramatically?",
    options: [
      "Water moves from interstitial to plasma",
      "Water moves from plasma to interstitial",
      "No net fluid shift",
      "Water moves into cells"
    ],
    correctAnswer: "Water moves from plasma to interstitial",
    explanation: "A drop in plasma oncotic pressure drives fluid into interstitial spaces."
  },
  {
    question: "Which of these is NOT included among the major hormonal regulators of sodium and water excretion?",
    options: [
      "ANF",
      "ADH",
      "Insulin",
      "Aldosterone"
    ],
    correctAnswer: "Insulin",
    explanation: "Insulin affects glucose uptake; it is not a primary regulator of Na⁺/water balance."
  },
  {
    question: "Which statement about the latent heat of vaporization of water is CORRECT?",
    options: [
      "It is lower than that of ethanol",
      "It is about 40.65 kJ/mol at 25 °C",
      "It refers to heat released during condensation",
      "It is negligible in human thermoregulation"
    ],
    correctAnswer: "It is about 40.65 kJ/mol at 25 °C",
    explanation: "Water’s latent heat of vaporization is ~40.65 kJ/mol, critical for evaporative cooling."
  },
  {
    question: "Which process contributes the SMALLEST portion of daily water gain in humans?",
    options: [
      "Drinking beverages",
      "Water in food",
      "Metabolic water production",
      "Direct absorption from air humidity"
    ],
    correctAnswer: "Direct absorption from air humidity",
    explanation: "Humans do not significantly absorb water directly from inhaled air."
  },
          
          
          
          ],
          },
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// General Questions////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////





{
        category: "Acidity",
        questions: [
          
          
          
          
          
          ],
          },
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// General Questions////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////



{
        category: "General",
        questions: [
          
          
          
          
          
          ],
          },
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// General Questions////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////






//////////
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

    {
        category: "GIT",
        questions: [


  {
    question: "All of the following arise from the foregut except:",
    options: [
      "Esophagus",
      "Proximal duodenum",
      "Ascending colon",
      "Stomach"
    ],
    correctAnswer: "Ascending colon",
    explanation: "The ascending colon derives from the midgut, not the foregut."
  },
  {
    question: "Which of the following marks the caudal boundary of the hindgut?",
    options: [
      "Respiratory diverticulum",
      "Liver bud",
      "Junction of transverse colon segments",
      "Cloacal membrane"
    ],
    correctAnswer: "Cloacal membrane",
    explanation: "The hindgut extends from the right 2/3–left 1/3 transverse colon junction to the cloacal membrane."
  },
  {
    question: "Not included in the structures that undergo primary midgut herniation is the:",
    options: [
      "Jejunum",
      "Ileum",
      "Cecum",
      "Stomach"
    ],
    correctAnswer: "Stomach",
    explanation: "The stomach remains within the abdominal cavity; only midgut loops herniate."
  },
  {
    question: "Which rotation occurs first during stomach development?",
    options: [
      "Clockwise 90° around longitudinal axis",
      "Counterclockwise 270° of midgut",
      "180° retraction rotation",
      "Rotation along anteroposterior axis"
    ],
    correctAnswer: "Clockwise 90° around longitudinal axis",
    explanation: "The stomach first rotates 90° clockwise around its long axis."
  },
  {
    question: "All of the following are true of the duodenum except:",
    options: [
      "Proximal portion from foregut",
      "Distal portion from midgut",
      "Remains at midline throughout development",
      "Forms a C-shaped loop"
    ],
    correctAnswer: "Remains at midline throughout development",
    explanation: "The duodenum initially at midline rotates to the right, becoming retroperitoneal."
  },
  {
    question: "Which mesenteric artery supplies structures derived from the hindgut?",
    options: [
      "Celiac artery",
      "Superior mesenteric artery",
      "Inferior mesenteric artery",
      "Common iliac artery"
    ],
    correctAnswer: "Inferior mesenteric artery",
    explanation: "The inferior mesenteric artery supplies hindgut derivatives."
  },
  {
    question: "The pectinate line separates which epithelial types in the anal canal?",
    options: [
      "Non-keratinized stratified squamous above and simple columnar below",
      "Simple columnar above and non-keratinized stratified squamous below",
      "Keratinized stratified squamous above and cuboidal below",
      "Pseudostratified columnar above and transitional below"
    ],
    correctAnswer: "Simple columnar above and non-keratinized stratified squamous below",
    explanation: "Proximal anal canal lined by simple columnar, distal by non-keratinized stratified squamous epithelium."
  },
  {
    question: "Which of the following events is not part of midgut development?",
    options: [
      "Physiological herniation",
      "90° counterclockwise rotation",
      "180° retraction rotation",
      "Formation of dorsal mesogastrium"
    ],
    correctAnswer: "Formation of dorsal mesogastrium",
    explanation: "Dorsal mesogastrium forms around the stomach (foregut), not midgut."
  },
  {
    question: "Tracheoesophageal fistulas result from abnormal:",
    options: [
      "Partitioning of the foregut",
      "Rotation of the stomach",
      "Midgut herniation",
      "Hindgut cloacal separation"
    ],
    correctAnswer: "Partitioning of the foregut",
    explanation: "Failure of the tracheoesophageal septum to form leads to fistulas."
  },
  {
    question: "Which of the following cell types is mismatched with its pancreatic islet cell?",
    options: [
      "Alpha cell – Glucagon",
      "Beta cell – Insulin",
      "Delta cell – Somatostatin",
      "Alpha cell – Insulin"
    ],
    correctAnswer: "Alpha cell – Insulin",
    explanation: "Alpha cells secrete glucagon; beta cells secrete insulin."
  },
  {
    question: "All of the following contribute to midgut loop retraction except:",
    options: [
      "Regression of mesonephric kidney",
      "Reduction in liver size",
      "Expansion of abdominal cavity",
      "Formation of the diaphragm"
    ],
    correctAnswer: "Formation of the diaphragm",
    explanation: "Midgut retraction is driven by renal regression, liver size decrease, and cavity expansion."
  },
  {
    question: "Which region is not derived from the caudal limb of the midgut loop?",
    options: [
      "Ascending colon",
      "Appendix",
      "Proximal 2/3 of transverse colon",
      "Duodenum"
    ],
    correctAnswer: "Duodenum",
    explanation: "The duodenum is from the foregut and proximal midgut cephalic limb."
  },
  {
    question: "Omphalocele is due to failure of:",
    options: [
      "Physiological herniation",
      "Return of midgut to abdomen",
      "Lateral body wall closure",
      "Tracheoesophageal partitioning"
    ],
    correctAnswer: "Return of midgut to abdomen",
    explanation: "Omphalocele results when herniated loops do not retract (6th–10th week)."
  },
  {
    question: "Which of the following is not associated with chromosomal abnormalities?",
    options: [
      "Omphalocele",
      "Gastroschisis",
      "Trisomy 18",
      "Trisomy 13"
    ],
    correctAnswer: "Gastroschisis",
    explanation: "Gastroschisis occurs from lateral fold failure and has no chromosomal links."
  },
  {
    question: "The tracheoesophageal septum separates the:",
    options: [
      "Stomach from duodenum",
      "Dorsal foregut from respiratory diverticulum",
      "Midgut from hindgut",
      "Pharyngeal gut from foregut"
    ],
    correctAnswer: "Dorsal foregut from respiratory diverticulum",
    explanation: "It partitions the future esophagus dorsally and trachea ventrally."
  },
  {
    question: "Which statement is false regarding the stomach’s curvatures?",
    options: [
      "Greater curvature formed by slower dorsal wall growth",
      "Lesser curvature formed by faster ventral wall growth",
      "Left side becomes anterior after rotation",
      "Right side faces posteriorly post-rotation"
    ],
    correctAnswer: "Lesser curvature formed by faster ventral wall growth",
    explanation: "The greater curvature arises from faster dorsal wall growth; the lesser from ventral."
  },
  {
    question: "Structures connected by the mesentery are classified as:",
    options: [
      "Retroperitoneal",
      "Primarily intraperitoneal",
      "Secondarily retroperitoneal",
      "Extraparenchymal"
    ],
    correctAnswer: "Primarily intraperitoneal",
    explanation: "Organs with both visceral and parietal serosa via mesentery are intraperitoneal."
  },
  {
    question: "Which is not a feature of gastroschisis?",
    options: [
      "Lateral fold closure defect",
      "Evisceration into amniotic cavity",
      "Chromosomal association",
      "Protrusion outside the umbilicus"
    ],
    correctAnswer: "Chromosomal association",
    explanation: "Gastroschisis is not linked to chromosomal abnormalities."
  },
  {
    question: "The proximal anal canal initially has which lining?",
    options: [
      "Endodermal",
      "Ectodermal",
      "Mesodermal",
      "Neural crest"
    ],
    correctAnswer: "Endodermal",
    explanation: "The proximal anal canal derives from hindgut endoderm."
  },
  {
    question: "All of the following occur during hindgut development except:",
    options: [
      "Formation of the urorectal septum",
      "Partitioning of cloaca",
      "Rotation around longitudinal axis",
      "Derivation of the urinary bladder"
    ],
    correctAnswer: "Rotation around longitudinal axis",
    explanation: "Gut rotations occur in foregut and midgut, not hindgut partitioning."
  },
  {
    question: "Which event leads to the stomach’s cephalic aspect lying to the left?",
    options: [
      "Clockwise rotation",
      "Counterclockwise rotation",
      "Midgut herniation",
      "Formation of lesser omentum"
    ],
    correctAnswer: "Clockwise rotation",
    explanation: "A 90° clockwise turn places the stomach’s cranial portion to the left."
  },
  {
    question: "The junction between right two-thirds and left one-third of the transverse colon defines the midgut–hindgut boundary because of:",
    options: [
      "Switch in arterial supply",
      "Change in neural crest migration",
      "Location of the umbilical cord",
      "Origin of the liver bud"
    ],
    correctAnswer: "Switch in arterial supply",
    explanation: "This point marks transition from SMA to IMA vascular territory."
  },
  {
    question: "Which of the following is not a trilaminar germ layer contribution to gut derivatives?",
    options: [
      "Endoderm – Epithelial lining",
      "Mesoderm – Muscularis externa",
      "Ectoderm – Enteric nervous system",
      "Neural crest – Submucosa"
    ],
    correctAnswer: "Neural crest – Submucosa",
    explanation: "Submucosa arises from mesoderm, not neural crest."
  },
  {
    question: "All of the following are derivatives of the dorsal mesentery except:",
    options: [
      "Greater omentum",
      "Dorsal mesoduodenum",
      "Ventral mesogastrium",
      "Mesentery proper"
    ],
    correctAnswer: "Ventral mesogastrium",
    explanation: "Ventral mesogastrium derives from the septum transversum (ventral mesentery)."
  },
  {
    question: "Not included among the three major rotations of the midgut is the:",
    options: [
      "90° physiological herniation",
      "270° counterclockwise total rotation",
      "180° retraction rotation",
      "90° clockwise stomach rotation"
    ],
    correctAnswer: "90° clockwise stomach rotation",
    explanation: "Stomach rotation is foregut-specific, not a midgut event."
  },
  {
    question: "Which statement about the pharyngeal gut is incorrect?",
    options: [
      "Bounded cranially by buccopharyngeal membrane",
      "Ends caudally at respiratory diverticulum",
      "Gives rise to thyroid gland",
      "Is initially blind-ended"
    ],
    correctAnswer: "Gives rise to thyroid gland",
    explanation: "The thyroid arises from a midline endodermal thickening, not the pharyngeal gut proper."
  },
  {
    question: "Which membrane failure leads directly to the formation of the anal canal opening?",
    options: [
      "Buccopharyngeal membrane",
      "Cloacal membrane",
      "Respiratory membrane",
      "Septum transversum"
    ],
    correctAnswer: "Cloacal membrane",
    explanation: "Opening of the cloacal membrane establishes the anal canal."
  },
  {
    question: "The developmental origin of the appendix is the:",
    options: [
      "Foregut",
      "Cephalic midgut limb",
      "Caudal midgut limb",
      "Hindgut"
    ],
    correctAnswer: "Caudal midgut limb",
    explanation: "The caudal limb of the primary intestinal loop forms the cecum and appendix."
  }, 

],
      },
      
      
    
    
    
    
      
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Hip Joint/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    {
        category: "CVS",
        questions: [



  {
    question: "All of the following derive from the splanchnic layer of the intraembryonic mesoderm EXCEPT:",
    options: [
      "Cardiac progenitor cells",
      "Islet cells",
      "Smooth muscle of gut",
      "Neural crest cells"
    ],
    correctAnswer: "Neural crest cells",
    explanation: "Neural crest cells derive from ectoderm, not splanchnic mesoderm."
  },
  {
    question: "The primary physiological reason a fetal cardiovascular system forms is:",
    options: [
      "To circulate blood for heat distribution",
      "Because diffusion alone cannot meet nutritional needs",
      "To support limb development",
      "To regulate amniotic fluid volume"
    ],
    correctAnswer: "Because diffusion alone cannot meet nutritional needs",
    explanation: "As the embryo grows, simple diffusion is insufficient for metabolic demands."
  },
  {
    question: "The primary and secondary heart fields arise in which embryonic layer?",
    options: [
      "Paraxial mesoderm",
      "Intermediate mesoderm",
      "Splanchnic mesoderm",
      "Ectoderm"
    ],
    correctAnswer: "Splanchnic mesoderm",
    explanation: "Cardiac progenitors in the splanchnic mesoderm form both heart fields."
  },
  {
    question: "The primary heart field contributes to all of the following EXCEPT:",
    options: [
      "Left ventricle",
      "Portion of atria",
      "Right ventricle",
      "Outflow tract"
    ],
    correctAnswer: "Right ventricle",
    explanation: "The primary field forms atria and left ventricle; the secondary forms right ventricle."
  },
  {
    question: "The cranial region of the embryo that gives rise to the heart tube is called the:",
    options: [
      "Cardiogenic area",
      "Caudal eminence",
      "Cloacal plate",
      "Neural groove"
    ],
    correctAnswer: "Cardiogenic area",
    explanation: "The cardiogenic area in the cranial splanchnic mesoderm is the initial heart-forming region."
  },
  {
    question: "During cephalic folding, the primitive heart moves from the cranial region to the thorax via:",
    options: [
      "Lateral displacement",
      "Cranial drift",
      "Cervical then thoracic shift",
      "Caudal invagination"
    ],
    correctAnswer: "Cervical then thoracic shift",
    explanation: "Folding brings the heart first into the neck region, then into the thorax."
  },
  {
    question: "Cardiac looping precedes septation and begins at approximately day:",
    options: [
      "14",
      "23",
      "30",
      "40"
    ],
    correctAnswer: "23",
    explanation: "The straight heart tube begins rightward looping around day 23."
  },
  {
    question: "Septation of the heart into four chambers occurs between days:",
    options: [
      "10–20",
      "23–28",
      "27–37",
      "40–50"
    ],
    correctAnswer: "27–37",
    explanation: "Major septa form during days 27–37 of embryogenesis."
  },
  {
    question: "The definitive heart tube’s cephalic segment becomes the:",
    options: [
      "Atria",
      "Sinus venosus",
      "Ventricular chambers",
      "Outflow tracts"
    ],
    correctAnswer: "Ventricular chambers",
    explanation: "The cranial (ventricular) portion forms the primitive ventricles."
  },
  {
    question: "The truncus arteriosus contributes to the:",
    options: [
      "Left atrium",
      "Pulmonary veins",
      "Ascending aorta and proximal pulmonary artery",
      "Inferior vena cava"
    ],
    correctAnswer: "Ascending aorta and proximal pulmonary artery",
    explanation: "The truncus gives rise to the roots of the great arteries."
  },
  {
    question: "The bulbus cordis forms primarily the:",
    options: [
      "Left ventricle",
      "Right ventricle and outflow tract",
      "Atrioventricular septum",
      "Atrial musculature"
    ],
    correctAnswer: "Right ventricle and outflow tract",
    explanation: "The bulbus contributes to right ventricular and conal regions."
  },
  {
    question: "All of the following venous systems drain into the sinus venosus EXCEPT:",
    options: [
      "Common cardinal veins",
      "Umbilical veins",
      "Vitelline veins",
      "Pulmonary veins"
    ],
    correctAnswer: "Pulmonary veins",
    explanation: "Pulmonary veins develop later and drain into the left atrium."
  },
  {
    question: "The right common cardinal vein persists as the:",
    options: [
      "Inferior vena cava",
      "Superior vena cava",
      "Coronary sinus",
      "Azygos vein"
    ],
    correctAnswer: "Superior vena cava",
    explanation: "The right common cardinal vein forms the SVC."
  },
  {
    question: "The left horn of the sinus venosus becomes the:",
    options: [
      "Right atrium",
      "Left atrium",
      "Coronary sinus",
      "Pulmonary trunk"
    ],
    correctAnswer: "Coronary sinus",
    explanation: "Left sinus horn is remodeled into the coronary sinus."
  },
  {
    question: "Cardiac looping direction of the bulbus cordis is described as VCR (ventral, caudal, right). The primitive ventricle loops:",
    options: [
      "DCR",
      "DCL",
      "VCL",
      "VCL"
    ],
    correctAnswer: "DCL",
    explanation: "The caudal ventricular region moves dorsally, cranially, and left (DCL)."
  },
  {
    question: "The sinus venosus gives rise to which embryonic conduction tissue?",
    options: [
      "AV node",
      "SA node",
      "Bundle of His",
      "Purkinje fibers"
    ],
    correctAnswer: "SA node",
    explanation: "The sinus venosus region forms the sinoatrial node."
  },
  {
    question: "TBX5 is critical for:",
    options: [
      "Looping of heart tube",
      "Septation and conduction system",
      "Neural crest migration",
      "Cardiac valve morphogenesis exclusively"
    ],
    correctAnswer: "Septation and conduction system",
    explanation: "TBX5 directs atrial septation and conduction tissue patterning."
  },
  {
    question: "VEGF promotes cardiovascular development by stimulating:",
    options: [
      "Nephron formation",
      "Endothelial differentiation",
      "Myocardial contraction",
      "Valvular cushion fusion"
    ],
    correctAnswer: "Endothelial differentiation",
    explanation: "VEGF drives mesodermal cells toward endothelial lineages."
  },
  {
    question: "Outflow tracts at the cranial tube exit are the precursors of:",
    options: [
      "Dorsal aorta",
      "Pulmonary veins",
      "Cardiac septa",
      "Coronary arteries"
    ],
    correctAnswer: "Dorsal aorta",
    explanation: "The cranial outflow region leads into the paired dorsal aortae."
  },
  {
    question: "The septum intermedium forms from the fusion of:",
    options: [
      "Septum primum and septum secundum",
      "Anterior and posterior endocardial cushions",
      "Bulbar and truncal ridges",
      "Atrial and ventricular septa"
    ],
    correctAnswer: "Anterior and posterior endocardial cushions",
    explanation: "Fusion of endocardial cushions creates the septum intermedium."
  },
  {
    question: "The septum primum initially leaves an opening called the:",
    options: [
      "Foramen ovale",
      "Ostium secundum",
      "Ostium primum",
      "Sinus venosus"
    ],
    correctAnswer: "Ostium primum",
    explanation: "Septum primum leaves the ostium primum before fusing with cushions."
  },
  {
    question: "The ostium secundum is formed in:",
    options: [
      "Septum primum",
      "Septum secundum",
      "Interventricular septum",
      "AV canal"
    ],
    correctAnswer: "Septum primum",
    explanation: "Perforations in septum primum coalesce as ostium secundum."
  },
  {
    question: "The septum secundum and septum primum form the:",
    options: [
      "Atrioventricular septum",
      "Interventricular septum",
      "Foramen ovale flap",
      "Semilunar valves"
    ],
    correctAnswer: "Foramen ovale flap",
    explanation: "Their overlapping creates a one-way valve at the foramen ovale."
  },
  {
    question: "Failure of the membranous ventricular septum to fuse causes:",
    options: [
      "Atrial septal defect",
      "Patent ductus arteriosus",
      "Ventricular septal defect",
      "Tetralogy of Fallot"
    ],
    correctAnswer: "Ventricular septal defect",
    explanation: "Incomplete fusion of membranous and muscular portions yields VSD."
  },
  {
    question: "Which structure is NOT part of the embryonic inflow tract?",
    options: [
      "Sinus venosus",
      "Primitive atrium",
      "Bulbus cordis",
      "Vitelline veins"
    ],
    correctAnswer: "Bulbus cordis",
    explanation: "Inflow is via sinus venosus and atrium; bulbus is part of outflow."
  },
  {
    question: "Common cardinal veins are also known as",
    options: [
      "Ducts of Cuvier",
      "Ductus venosus",
      "Sinus horns",
      "Umbilical sinuses"
    ],
    correctAnswer: "Ducts of Cuvier",
    explanation: "Common cardinal veins drain embryonic body into sinus venosus."
  },
  {
    question: "Vitelline veins give rise to the:",
    options: [
      "Superior vena cava",
      "Inferior vena cava",
      "Portal vein",
      "Pulmonary veins"
    ],
    correctAnswer: "Inferior vena cava",
    explanation: "Right vitelline vein contributes to the hepatic segment of the IVC."
  },
  {
    question: "Umbilical veins transport:",
    options: [
      "Deoxygenated blood from yolk sac",
      "Oxygenated blood from placenta",
      "Mixed blood from embryo body",
      "Lymph from umbilical cord"
    ],
    correctAnswer: "Oxygenated blood from placenta",
    explanation: "Umbilical veins carry oxygen-rich blood to the sinus venosus."
  },
  {
    question: "Which heart field contributes to the outflow tract?",
    options: [
      "Primary heart field",
      "Secondary heart field",
      "Tertiary heart field",
      "Neural crest cells"
    ],
    correctAnswer: "Secondary heart field",
    explanation: "Secondary field forms right ventricle, conus, and truncus arteriosus."
  },
  {
    question: "The embryonic cardiac conduction system first appears in the:",
    options: [
      "Primitive ventricle",
      "Sinus venosus",
      "Bulbus cordis",
      "Truncus arteriosus"
    ],
    correctAnswer: "Sinus venosus",
    explanation: "The sinus venosus region gives rise to early pacemaker cells."
  },
  {
    question: "Cardiac looping requires motor proteins called:",
    options: [
      "Myosins",
      "Kinesins",
      "Dyneins",
      "Actins"
    ],
    correctAnswer: "Dyneins",
    explanation: "Dynein motor activity is critical for left-right asymmetry in looping."
  },
  {
    question: "Looping sequence of the outflow tract is VCR (ventral, caudal, right). The inflow limb loops:",
    options: [
      "Dorsal, cranial, left",
      "Ventral, cranial, left",
      "Dorsal, caudal, left",
      "Ventral, caudal, left"
    ],
    correctAnswer: "Dorsal, cranial, left",
    explanation: "The caudal limb moves dorsally, cranially, and left (DCL)."
  },
  {
    question: "The dorsal aortae originate from the embryonic:",
    options: [
      "Truncus arteriosus",
      "Bulbus cordis",
      "Outflow tract",
      "Sinus venosus"
    ],
    correctAnswer: "Outflow tract",
    explanation: "The cranial outflow region connects with the paired dorsal aortae."
  },
  {
    question: "The transcription factor TBX5 contains a:",
    options: [
      "Homeobox",
      "Zinc finger",
      "T-box DNA-binding motif",
      "Leucine zipper"
    ],
    correctAnswer: "T-box DNA-binding motif",
    explanation: "TBX5 binds DNA via its characteristic T-box domain."
  },
  {
    question: "Major cardiac septa are formed between:",
    options: [
      "Day 14–20",
      "Day 23–26",
      "Day 27–37",
      "Day 40–50"
    ],
    correctAnswer: "Day 27–37",
    explanation: "Chamber septation occurs from the 27th to 37th day."
  },
  {
    question: "Looping of the heart tube spans days:",
    options: [
      "14–20",
      "21–22",
      "23–33",
      "30–40"
    ],
    correctAnswer: "23–33",
    explanation: "Rightward looping occurs roughly between days 23 and 33."
  },
  {
    question: "Which is NOT a component of the definitive caudal heart tube?",
    options: [
      "Primitive atrium",
      "Sinus venosus",
      "Conus cordis",
      "Truncus arteriosus"
    ],
    correctAnswer: "Truncus arteriosus",
    explanation: "Truncus is cranial; caudal includes atria and sinus venosus."
  },
  {
    question: "Which rodent is incorrect? I.e. which structure is NOT formed from sinus venosus?",
    options: [
      "SA node",
      "Coronary sinus",
      "Left atrium myocardium",
      "AV node"
    ],
    correctAnswer: "AV node",
    explanation: "AV node arises from atrioventricular canal, not sinus venosus."
  },
  {
    question: "The dorsal aorta carries blood:",
    options: [
      "To the head only",
      "From the heart tube to systemic circulation",
      "From yolk sac to embryo",
      "To the vitelline veins"
    ],
    correctAnswer: "From the heart tube to systemic circulation",
    explanation: "Dorsal aortae distribute oxygenated blood to the embryo."
  },
  {
    question: "The ostium primum lies between:",
    options: [
      "Septum primum and septum secundum",
      "Septum primum and AV cushions",
      "Septum secundum and atrial roof",
      "Ventricles"
    ],
    correctAnswer: "Septum primum and AV cushions",
    explanation: "Ostium primum is the gap before septum primum fuses with cushions."
  },
  {
    question: "The ostium secundum forms by apoptosis in the:",
    options: [
      "Septum secundum",
      "Septum primum",
      "Truncus arteriosus",
      "Bulbus cordis"
    ],
    correctAnswer: "Septum primum",
    explanation: "Resorption in septum primum creates the ostium secundum."
  },
  {
    question: "The flap valve of the foramen ovale is:",
    options: [
      "Septum primum",
      "Septum secundum",
      "Septum intermedium",
      "AV cushions"
    ],
    correctAnswer: "Septum primum",
    explanation: "Septum primum acts as the mobile flap over the foramen ovale."
  },
  {
    question: "Which defect results from failure of interventricular septum fusion?",
    options: [
      "ASD",
      "PDA",
      "VSD",
      "Coarctation of aorta"
    ],
    correctAnswer: "VSD",
    explanation: "Failure of membranous and muscular IV septa to fuse yields VSD."
  },
  {
    question: "The six pairs of pharyngeal arch arteries give rise to all EXCEPT:",
    options: [
      "Pulmonary arteries",
      "Aortic arch",
      "Coronary arteries",
      "Subclavian arteries"
    ],
    correctAnswer: "Coronary arteries",
    explanation: "Coronaries sprout from aortic root; pharyngeal arches form great vessels."
  },
  {
    question: "Which process is directly dependent on VEGF signaling?",
    options: [
      "Chamber septation",
      "Endothelial differentiation",
      "Looping spiral",
      "Nephron formation"
    ],
    correctAnswer: "Endothelial differentiation",
    explanation: "VEGF drives mesodermal progenitors toward endothelial lineage."
  },

],
      },
  

  
  
  
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Hip Joint/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    {
        category: "Respiratory System",
        questions: [


  {
    question: "All of the following are derivatives of the laryngotracheal groove except:",
    options: [
      "Thyroid cartilage",
      "Trachea",
      "Esophagus",
      "Laryngeal epithelium"
    ],
    correctAnswer: "Esophagus",
    explanation: "The esophagus derives from the dorsal foregut after septation, not the laryngotracheal groove."
  },
  {
    question: "Which of the following cell types is mismatched with its function in the lung?",
    options: [
      "Type I pneumocyte – Gas exchange",
      "Type II pneumocyte – Surfactant secretion",
      "Alveolar macrophage – Structural support",
      "Endothelial cell – Blood–air barrier"
    ],
    correctAnswer: "Alveolar macrophage – Structural support",
    explanation: "Alveolar macrophages are immune cells, not structural elements."
  },
  {
    question: "Not included among the stages of lung histological maturation is the:",
    options: [
      "Pseudoglandular stage",
      "Saccular stage",
      "Canalicular stage",
      "Neonatal alveolar stage"
    ],
    correctAnswer: "Neonatal alveolar stage",
    explanation: "The four recognized stages are pseudoglandular, canalicular, terminal saccular, and alveolar (post-natal to childhood)."
  },
  {
    question: "Which statement about bronchial branching is false?",
    options: [
      "Primary bronchi bifurcate into secondary bronchi",
      "There are three secondary bronchi on the left",
      "Segmental bronchi number ten on the right",
      "Branching follows a dichotomous pattern"
    ],
    correctAnswer: "There are three secondary bronchi on the left",
    explanation: "The left lung has only two secondary (lobar) bronchi, not three."
  },
  {
    question: "All of the following structures derive from splanchnic mesoderm except:",
    options: [
      "Cartilage of tracheal rings",
      "Smooth muscle of bronchioles",
      "Epithelium of the larynx",
      "Connective tissue of lung parenchyma"
    ],
    correctAnswer: "Epithelium of the larynx",
    explanation: "Epithelial linings derive from endoderm, not mesoderm."
  },
  {
    question: "Which nerve branch innervates muscles derived from the 6th pharyngeal arch?",
    options: [
      "Superior laryngeal nerve",
      "Recurrent laryngeal nerve",
      "Glossopharyngeal nerve",
      "Hypoglossal nerve"
    ],
    correctAnswer: "Recurrent laryngeal nerve",
    explanation: "The 6th arch muscles are supplied by the recurrent laryngeal branch of the vagus."
  },
  {
    question: "All of the following are features of the canalicular lung stage except:",
    options: [
      "Development of respiratory bronchioles",
      "Appearance of capillaries",
      "Formation of terminal bronchioles",
      "Secretion of surfactant by Type II cells"
    ],
    correctAnswer: "Secretion of surfactant by Type II cells",
    explanation: "Surfactant production begins closer to the terminal saccular stage."
  },
  {
    question: "Which of the following best describes the origin of the tracheoesophageal septum?",
    options: [
      "Fusion of lateral body folds",
      "Merging of tracheoesophageal ridges",
      "Differentiation of laryngotracheal groove",
      "Partitioning by the urorectal septum"
    ],
    correctAnswer: "Merging of tracheoesophageal ridges",
    explanation: "Tracheoesophageal septum forms from fusion of longitudinal ridges in the foregut wall."
  },
  {
    question: "Not included in the composition of the blood–air barrier is:",
    options: [
      "Type I pneumocyte cytoplasm",
      "Fused basal laminae",
      "Alveolar macrophage processes",
      "Capillary endothelial cytoplasm"
    ],
    correctAnswer: "Alveolar macrophage processes",
    explanation: "Macrophages reside in the alveolar space and are not part of the barrier."
  },
  {
    question: "Which process does not directly contribute to fetal lung conditioning in utero?",
    options: [
      "Fetal respiratory movements",
      "Chloride-rich secretions",
      "Protein and mucus production",
      "First breath air expansion"
    ],
    correctAnswer: "First breath air expansion",
    explanation: "Air expansion occurs at birth, not before."
  },
  {
    question: "All of the following are true of the pseudoglandular stage except:",
    options: [
      "Presence of terminal bronchioles",
      "Absence of respiratory bronchioles",
      "Absence of capillaries in airway walls",
      "Initial formation of alveolar sacs"
    ],
    correctAnswer: "Initial formation of alveolar sacs",
    explanation: "Alveolar sacs appear later, during the saccular and alveolar stages."
  },
  {
    question: "Which branch of the vagus nerve innervates muscles of the 4th pharyngeal arch?",
    options: [
      "Recurrent laryngeal nerve",
      "Superior laryngeal nerve",
      "Phrenic nerve",
      "Cardiac branches"
    ],
    correctAnswer: "Superior laryngeal nerve",
    explanation: "The superior laryngeal branch supplies 4th arch-derived muscles."
  },
  {
    question: "Not included among the functions of surfactant is:",
    options: [
      "Reducing alveolar surface tension",
      "Preventing alveolar collapse",
      "Increasing lung compliance",
      "Stimulating bronchial branching"
    ],
    correctAnswer: "Stimulating bronchial branching",
    explanation: "Surfactant’s roles are mechanical, not morphogenic."
  },
  {
    question: "Which of the following events marks the transition from pseudoglandular to canalicular stage?",
    options: [
      "Appearance of terminal bronchioles",
      "Onset of vascular-airway proximity",
      "Formation of alveolar ducts",
      "Initiation of fetal breathing movements"
    ],
    correctAnswer: "Onset of vascular-airway proximity",
    explanation: "Canalicular stage is defined by capillaries approaching airway epithelium."
  },
  {
    question: "All of the following derive from 6th pharyngeal arch mesenchyme except:",
    options: [
      "Cricoid cartilage",
      "Arytenoid cartilage",
      "Epiglottic cartilage",
      "Thyroid cartilage"
    ],
    correctAnswer: "Epiglottic cartilage",
    explanation: "Epiglottis arises from the 4th arch, not the 6th."
  },
  {
    question: "Which statement about primary bronchi is correct?",
    options: [
      "Left primary bronchus is shorter and wider",
      "They bifurcate from the lung bud at week 4",
      "They branch into three lobar bronchi on the left",
      "They form as a single midline tube"
    ],
    correctAnswer: "They bifurcate from the lung bud at week 4",
    explanation: "The lung bud splits into two primary bronchi around day 28."
  },
  {
    question: "Not included in the composition of respiratory epithelium is:",
    options: [
      "Endodermally derived cells",
      "Mesodermally derived cartilage",
      "Ciliated columnar cells",
      "Goblet cells"
    ],
    correctAnswer: "Mesodermally derived cartilage",
    explanation: "Cartilage is mesodermal but not part of the epithelial lining."
  },
  {
    question: "Which of the following is not a requirement for the formation of the tracheoesophageal septum?",
    options: [
      "Tracheoesophageal ridge formation",
      "Fusion of lateral ridges",
      "Ventrodorsal partitioning",
      "Neural crest migration"
    ],
    correctAnswer: "Neural crest migration",
    explanation: "Septum formation relies on endodermal ridges, not neural crest."
  },
  {
    question: "All of the following are mechanisms promoting mid-gestation lung growth except:",
    options: [
      "Increase in respiratory bronchiole number",
      "Alveolar enlargement",
      "Fetal breathing movements",
      "Chloride ion secretion"
    ],
    correctAnswer: "Alveolar enlargement",
    explanation: "Growth is via new airway and alveoli formation, not mere enlargement."
  },
  {
    question: "Which stage directly precedes the terminal saccular period?",
    options: [
      "Alveolar stage",
      "Pseudoglandular stage",
      "Canalicular stage",
      "Mature alveolar stage"
    ],
    correctAnswer: "Canalicular stage",
    explanation: "Terminal saccular follows the canalicular phase."
  },
  {
    question: "Not included among the roles of fetal respiratory movements is:",
    options: [
      "Conditioning respiratory muscles",
      "Lubricating pleural surfaces",
      "Enhancing lung fluid distribution",
      "Stimulating surfactant production"
    ],
    correctAnswer: "Lubricating pleural surfaces",
    explanation: "Movements condition muscles and distribute fluid but do not lubricate pleura."
  },
  {
    question: "All of the following occur at the neonate’s first breath except:",
    options: [
      "Rapid lung fluid reabsorption",
      "Surfactant-mediated alveolar expansion",
      "Complete alveolar maturation",
      "Airway clearance via tracheal expulsion"
    ],
    correctAnswer: "Complete alveolar maturation",
    explanation: "Alveolar development continues into childhood."
  },
  {
    question: "Which of the following best characterizes the alveolar stage?",
    options: [
      "Formation of respiratory bronchioles",
      "Appearance of primitive alveolar sacs",
      "Maturation of flat squamous pneumocytes",
      "Onset of pulmonary oedema"
    ],
    correctAnswer: "Maturation of flat squamous pneumocytes",
    explanation: "Late stage features thinning epithelium and mature alveoli."
  },
  {
    question: "All of the following sources contribute to lung connective tissue except:",
    options: [
      "Splanchnic mesoderm",
      "Neural crest cells",
      "Endothelial-mesenchymal transition",
      "Paraxial mesoderm"
    ],
    correctAnswer: "Neural crest cells",
    explanation: "Lung connective tissues derive mainly from splanchnic mesoderm."
  },
  {
    question: "Which of the following is not formed by dichotomous branching?",
    options: [
      "Primary bronchi",
      "Secondary bronchi",
      "Tertiary bronchi",
      "Alveolar sacs"
    ],
    correctAnswer: "Alveolar sacs",
    explanation: "Dichotomous branching generates bronchi; alveoli form separately."
  },
  {
    question: "Not included among the products of the 4th pharyngeal arch mesenchyme is:",
    options: [
      "Epiglottis",
      "Thyroid cartilage",
      "Cricoid cartilage",
      "Arytenoid cartilage"
    ],
    correctAnswer: "Thyroid cartilage",
    explanation: "Thyroid cartilage derives from the 6th arch."
  },
  {
    question: "All of the following are true of the terminal saccular stage except:",
    options: [
      "Formation of primitive alveoli",
      "Close association with capillaries",
      "Abundant surfactant secretion",
      "Begins around week 26"
    ],
    correctAnswer: "Abundant surfactant secretion",
    explanation: "Surfactant increases but peaks in late saccular and alveolar stages."
  },

],
      },
  
  
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////Hip Joint/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    {
        category: "Urogenital System",
        questions: [



],
      },
  

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
  
  
  

  
  
  
 
