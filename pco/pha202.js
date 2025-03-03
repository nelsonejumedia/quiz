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
          
    
  
  { question: "What is the normal range for fasting blood sugar (FBS)?", options: ["50-70 mg/dL", "70-99 mg/dL", "100-140 mg/dL", "140-200 mg/dL"], correctAnswer: "70-99 mg/dL", explanation: "No explanation provided." },

{ question: "Which instrument is used to measure blood pressure?", options: ["Stethoscope", "Glucometer", "Sphygmomanometer", "Weighing scale"], correctAnswer: "Sphygmomanometer", explanation: "No explanation provided." },

{ question: "Which of the following is NOT considered a vital sign?", options: ["Temperature", "Heart rate", "Peak flow rate", "Blood type"], correctAnswer: "Blood type", explanation: "No explanation provided." },

{ question: "What is the normal respiratory rate for a healthy adult?", options: ["6-12 breaths per minute", "12-20 breaths per minute", "20-30 breaths per minute", "30-40 breaths per minute"], correctAnswer: "12-20 breaths per minute", explanation: "No explanation provided." },

{ question: "The Mean Arterial Pressure (MAP) is important because it reflects:", options: ["Blood volume in the lungs", "Blood flow to organs", "Blood clotting ability", "Oxygen levels in the blood"], correctAnswer: "Blood flow to organs", explanation: "No explanation provided." },

{ question: "Which of the following factors can increase blood pressure?", options: ["Dehydration", "Physical exercise", "High salt intake", "All of the above"], correctAnswer: "All of the above", explanation: "No explanation provided." },

{ question: "A blood pressure reading of 120/80 mmHg means:", options: ["The systolic pressure is 120 mmHg and diastolic pressure is 80 mmHg", "The diastolic pressure is 120 mmHg and systolic pressure is 80 mmHg", "The heart rate is 120 beats per minute", "The person has low blood pressure"], correctAnswer: "The systolic pressure is 120 mmHg and diastolic pressure is 80 mmHg", explanation: "No explanation provided." },

{ question: "What is the relationship between weight and height in health assessment?", options: ["They are unrelated", "They help determine BMI", "Height is always greater than weight", "Only height is medically important"], correctAnswer: "They help determine BMI", explanation: "No explanation provided." },

{ question: "Which vital sign is measured using a thermometer?", options: ["Blood pressure", "Temperature", "Pulse rate", "Blood glucose"], correctAnswer: "Temperature", explanation: "No explanation provided." },

{ question: "What is the normal range for body temperature in a healthy adult?", options: ["34-35°C", "35-36°C", "36-37.5°C", "38-40°C"], correctAnswer: "36-37.5°C", explanation: "No explanation provided." },

{ question: "Which organ primarily regulates blood glucose levels?", options: ["Heart", "Liver", "Pancreas", "Lungs"], correctAnswer: "Pancreas", explanation: "No explanation provided." },

{ question: "Which test is used to measure lung function?", options: ["Sphygmomanometer", "Glucometer", "Vitalograph (Peak Flow Meter)", "Clinical thermometer"], correctAnswer: "Vitalograph (Peak Flow Meter)", explanation: "No explanation provided." },

{ question: "A heart rate below 60 beats per minute is called:", options: ["Bradycardia", "Tachycardia", "Hypertension", "Hypotension"], correctAnswer: "Bradycardia", explanation: "No explanation provided." },

{ question: "What is the clinical importance of checking post-prandial blood sugar?", options: ["Diagnosing high cholesterol", "Detecting diabetes", "Measuring oxygen levels", "Assessing hydration levels"], correctAnswer: "Detecting diabetes", explanation: "No explanation provided." },

{ question: "Which nervous system lowers heart rate and blood pressure?", options: ["Sympathetic Nervous System", "Central Nervous System", "Parasympathetic Nervous System", "Somatic Nervous System"], correctAnswer: "Parasympathetic Nervous System", explanation: "No explanation provided." },

{ question: "Which of the following is the correct formula for BMI?", options: ["Weight (kg) × Height (m)", "Weight (kg) / Height (m²)", "Height (m²) / Weight (kg)", "Weight (kg) × Age"], correctAnswer: "Weight (kg) / Height (m²)", explanation: "No explanation provided." },

{ question: "What is considered a normal blood pressure reading?", options: ["80/40 mmHg", "100/60 mmHg", "120/80 mmHg", "160/100 mmHg"], correctAnswer: "120/80 mmHg", explanation: "No explanation provided." },

{ question: "What does a peak flow meter assess?", options: ["Blood pressure", "Blood glucose level", "Lung function", "Heart rate"], correctAnswer: "Lung function", explanation: "No explanation provided." },

{ question: "A random blood glucose level of 250 mg/dL indicates:", options: ["Normal blood sugar", "Hypoglycemia", "Hyperglycemia", "Low insulin levels"], correctAnswer: "Hyperglycemia", explanation: "No explanation provided." },

{ question: "Which of the following drugs affects Mean Arterial Pressure (MAP)?", options: ["Insulin", "Epinephrine", "Paracetamol", "Amoxicillin"], correctAnswer: "Epinephrine", explanation: "No explanation provided." },

{ question: "What is the primary aim of this experiment?", options: ["To compare the toxicity of different drugs", "To study how the route of drug administration affects pharmacological response", "To test the effectiveness of different rat species", "To measure the weight of animals before drug administration"], correctAnswer: "To study how the route of drug administration affects pharmacological response", explanation: "No explanation provided." },

{ question: "Which of the following is NOT a factor influencing the choice of drug administration route?", options: ["Physical/chemical properties of the drug", "The size of the syringe used", "Expected rapidity of onset", "Effect of pH/enzymes in the alimentary tract"], correctAnswer: "The size of the syringe used", explanation: "No explanation provided." },

{ question: "What material is NOT required in this experiment?", options: ["Stopwatch", "Syringes and needles", "Oral feeding tube", "Blood pressure monitor"], correctAnswer: "Blood pressure monitor", explanation: "No explanation provided." },

{ question: "What is the primary function of the stopwatch in this experiment?", options: ["To measure the weight of the rat", "To time the onset and duration of drug action", "To monitor the drug absorption rate in blood", "To count the number of injections given"], correctAnswer: "To time the onset and duration of drug action", explanation: "No explanation provided." },

{ question: "Which animal is used in this experiment?", options: ["Guinea pigs", "Mice", "Rats", "Rabbits"], correctAnswer: "Rats", explanation: "No explanation provided." },

{ question: "Which drug is NOT listed as used in this experiment?", options: ["Phenobarbitone", "Diazepam", "Sodium Pentobarbital", "Paracetamol"], correctAnswer: "Paracetamol", explanation: "No explanation provided." },

{ question: "How is Phenobarbital first administered in the experiment?", options: ["Orally", "Intramuscularly", "Intraperitoneally", "Subcutaneously"], correctAnswer: "Intraperitoneally", explanation: "No explanation provided." },

{ question: "How does the righting reflex help in this experiment?", options: ["It indicates when the drug is completely absorbed", "It measures the drug’s toxicity level", "It is used to determine when the drug takes effect and wears off", "It ensures the rat is properly anesthetized before injection"], correctAnswer: "It is used to determine when the drug takes effect and wears off", explanation: "No explanation provided." },

{ question: "What dose of Phenobarbital is administered to the rats?", options: ["50 mg/kg", "80 mg/kg", "100 mg/kg", "120 mg/kg"], correctAnswer: "80 mg/kg", explanation: "No explanation provided." },

{ question: "What is the dose of Diazepam administered?", options: ["5 mg/kg", "10 mg/kg", "15 mg/kg", "20 mg/kg"], correctAnswer: "10 mg/kg", explanation: "No explanation provided." },

{ question: "Which of the following routes of administration would generally have the fastest onset?", options: ["Oral", "Subcutaneous (SC)", "Intramuscular (IM)", "Intraperitoneal (IP)"], correctAnswer: "Intraperitoneal (IP)", explanation: "No explanation provided." },

{ question: "Which route is expected to have the slowest onset?", options: ["Intraperitoneal (IP)", "Intramuscular (IM)", "Subcutaneous (SC)", "Oral"], correctAnswer: "Intramuscular (IM)", explanation: "No explanation provided." },

{ question: "What is a major disadvantage of oral drug administration?", options: ["Requires the use of a syringe", "High risk of infection", "First-pass metabolism in the liver reduces drug effectiveness", "Very short duration of action"], correctAnswer: "First-pass metabolism in the liver reduces drug effectiveness", explanation: "No explanation provided." },

{ question: "Which route of drug administration involves injecting the drug into muscle tissue?", options: ["Subcutaneous (SC)", "Intramuscular (IM)", "Oral", "Intraperitoneal (IP)"], correctAnswer: "Intramuscular (IM)", explanation: "No explanation provided." },

{ question: "Why is intraperitoneal (IP) administration faster than subcutaneous (SC) administration?", options: ["The peritoneal cavity has a rich blood supply", "The peritoneal cavity directly connects to the brain", "The drug is injected directly into a muscle", "It bypasses the circulatory system"], correctAnswer: "The peritoneal cavity has a rich blood supply", explanation: "No explanation provided." },

{ question: "Why does oral administration take longer to show effects?", options: ["The drug must first be digested and absorbed", "The drug is injected into fatty tissues", "The drug is immediately metabolized in the kidneys", "The drug directly enters the bloodstream"], correctAnswer: "The drug must first be digested and absorbed", explanation: "No explanation provided." },

{ question: "What is the significance of repeating the procedure with different routes of administration?", options: ["To compare the effects of different drugs", "To determine which drug is most effective", "To study how route of administration influences onset and duration of drug action", "To ensure all rats receive the same amount of drug"], correctAnswer: "To study how route of administration influences onset and duration of drug action", explanation: "No explanation provided." },

{ question: "Which of the following does NOT affect the onset of drug action?", options: ["Blood supply at the injection site", "Drug solubility", "Brand of drug used", "Metabolism in the liver"], correctAnswer: "Brand of drug used", explanation: "No explanation provided." },

{ question: "Which drug class do Phenobarbitone and Diazepam belong to?", options: ["Stimulants", "Depressants", "Antibiotics", "Antihistamines"], correctAnswer: "Depressants", explanation: "No explanation provided." },

{ question: "Why do subcutaneous (SC) injections generally have a slower onset than intramuscular (IM) injections?", options: ["SC tissue has less blood flow compared to muscles", "SC injections do not allow drug absorption", "SC injections cause immediate metabolism in the kidneys", "SC injections prevent the drug from reaching the bloodstream"], correctAnswer: "SC tissue has less blood flow compared to muscles", explanation: "No explanation provided." },

{ question: "What is the relationship between the dose of a drug and the response?", options: ["Linear", "Exponential", "Hyperbolic", "Parabolic"], correctAnswer: "Hyperbolic", explanation: "No explanation provided." },

{ question: "What type of plot is commonly used in dose-response experiments for quantitative inferences?", options: ["Linear plot", "Logarithmic plot", "Semi-logarithmic plot", "Exponential plot"], correctAnswer: "Semi-logarithmic plot", explanation: "No explanation provided." },

{ question: "What shape does the semi-logarithmic dose-response curve take?", options: ["Hyperbola", "Sigmoid", "Linear", "Parabola"], correctAnswer: "Sigmoid", explanation: "No explanation provided." },

{ question: "Which of the following can be inferred from a dose-response curve?", options: ["LD₅₀ and ED₅₀", "Relative potency and efficacy", "Therapeutic index", "All of the above"], correctAnswer: "All of the above", explanation: "No explanation provided." },

{ question: "What does LD₅₀ stand for?", options: ["Lethal Dose for 50% of subjects", "Lowest Dose for 50% efficacy", "Lightest Dose used in an experiment", "Logarithmic Dose value"], correctAnswer: "Lethal Dose for 50% of subjects", explanation: "No explanation provided." },

{ question: "What does ED₅₀ stand for?", options: ["Effective Dose for 50% of subjects", "Exponential Dose for 50% response", "Estimated Drug potency", "Extra Drug efficacy"], correctAnswer: "Effective Dose for 50% of subjects", explanation: "No explanation provided." },

{ question: "Which drug is NOT mentioned in the experiment?", options: ["Diazepam", "Sodium Pentobarbital", "Aspirin", "None of the above"], correctAnswer: "Aspirin", explanation: "No explanation provided." },

{ question: "What is the therapeutic index (TI) calculated as?", options: ["ED₅₀ / LD₅₀", "LD₅₀ / ED₅₀", "ED₅₀ × LD₅₀", "ED₅₀ + LD₅₀"], correctAnswer: "LD₅₀ / ED₅₀", explanation: "No explanation provided." },

{ question: "What is the purpose of dividing the animals into groups?", options: ["To reduce the number of animals needed", "To compare different doses of the drug", "To observe long-term effects", "To determine the safest dose"], correctAnswer: "To compare different doses of the drug", explanation: "No explanation provided." },

{ question: "What is observed and timed in this experiment?", options: ["Heart rate", "Onset and duration of sleep", "Blood pressure", "Respiration rate"], correctAnswer: "Onset and duration of sleep", explanation: "No explanation provided." },

{ question: "Which of the following doses of Diazepam is NOT used in the experiment?", options: ["1 mg/kg", "2 mg/kg", "6 mg/kg", "8 mg/kg"], correctAnswer: "6 mg/kg", explanation: "No explanation provided." },

{ question: "Which of the following doses of Sodium Pentobarbital is used in the experiment?", options: ["5 mg/kg", "10 mg/kg", "90 mg/kg", "15 mg/kg"], correctAnswer: "10 mg/kg", explanation: "No explanation provided." },

{ question: "What equipment is used in this experiment?", options: ["Needles and syringes", "Spectrophotometer", "pH meter", "Centrifuge"], correctAnswer: "Needles and syringes", explanation: "No explanation provided." },

{ question: "Why is cotton wool used in the experiment?", options: ["To clean the injection site", "To inject the drug", "To measure response time", "To determine potency"], correctAnswer: "To clean the injection site", explanation: "No explanation provided." },

{ question: "What is the function of hand gloves in the experiment?", options: ["To protect the drug", "To prevent contamination and ensure safety", "To measure dosage accurately", "To increase drug absorption"], correctAnswer: "To prevent contamination and ensure safety", explanation: "No explanation provided." },

{ question: "What is the primary purpose of plotting a dose-response curve?", options: ["To determine the side effects of a drug", "To assess the relationship between dose and response", "To calculate the half-life of a drug", "To study the metabolism of a drug"], correctAnswer: "To assess the relationship between dose and response", explanation: "No explanation provided." },

{ question: "What is the significance of plotting percentage response against log dose?", options: ["It allows better visualization of drug effects", "It determines how long the drug stays in the system", "It calculates blood concentration levels", "It measures drug solubility"], correctAnswer: "It allows better visualization of drug effects", explanation: "No explanation provided." },

{ question: "Which of the following is NOT a parameter obtained from the dose-response curve?", options: ["LD₅₀", "ED₅₀", "Half-life of the drug", "Relative potency"], correctAnswer: "Half-life of the drug", explanation: "No explanation provided." },

{ question: "Why are different doses of the drug administered to different groups?", options: ["To test if the drug is safe", "To find the effective and lethal doses", "To determine the blood concentration of the drug", "To ensure all animals receive equal treatment"], correctAnswer: "To find the effective and lethal doses", explanation: "No explanation provided." },

{ question: "What is the importance of calculating the therapeutic index?", options: ["To determine the safest and most effective dose range", "To measure the duration of drug activity", "To check the rate of drug metabolism", "To classify drugs based on chemical structure"], correctAnswer: "To determine the safest and most effective dose range", explanation: "No explanation provided." }




