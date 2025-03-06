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



{
category: "Exam Focus ANA201",
questions: [



{ question: "In which part of the skeleton is the lower limb located?", options: ["Superior appendicular skeleton", "Inferior appendicular skeleton", "Axial skeleton", "Cranial skeleton"], correctAnswer: "Inferior appendicular skeleton", explanation: "The lower limb is located in the inferior appendicular skeleton." },

{ question: "How many regions does the lower limb have?", options: ["3", "5", "4", "6"], correctAnswer: "5", explanation: "The lower limb has five regions: gluteal, thigh, knee, leg, and foot." },

{ question: "Which of the following is NOT one of the five regions of the lower limb?", options: ["Gluteal", "Thigh", "Cervical", "Foot"], correctAnswer: "Cervical", explanation: "The five regions of the lower limb are gluteal, thigh, knee, leg, and foot; 'cervical' is not one of them." },

{ question: "The hip bone is formed by the fusion of which three parts?", options: ["Ilium, ischium, and pubis", "Ilium, sacrum, and coccyx", "Ischium, pubis, and femur", "Pubis, ischium, and scapula"], correctAnswer: "Ilium, ischium, and pubis", explanation: "The hip bone is formed by the fusion of the ilium, ischium, and pubis." },

{ question: "What structure is formed by the fusion of the ischium, pubis, and ilium?", options: ["Sacroiliac joint", "Acetabulum", "Pubic symphysis", "Femoral head"], correctAnswer: "Acetabulum", explanation: "The acetabulum is the socket formed by the fusion of the three parts of the hip bone." },

{ question: "How many articulations does the hip have?", options: ["One", "Three", "Two", "Four"], correctAnswer: "Three", explanation: "The hip has three articulations: the sacroiliac joint, pubic symphysis, and the hip joint." },

{ question: "Which of the following is an articulation of the hip?", options: ["Intertrochanteric line", "Sacroiliac joint", "Iliac crest", "Femoral condyle"], correctAnswer: "Sacroiliac joint", explanation: "The sacroiliac joint is one of the three articulations of the hip." },

{ question: "Which part of the hip bone is the largest and most superior?", options: ["Ischium", "Ilium", "Pubis", "Acetabulum"], correctAnswer: "Ilium", explanation: "The ilium is the largest and most superior part of the hip bone." },

{ question: "Which anatomical landmark is used for lumbar punctures and bone marrow biopsies?", options: ["Iliac crest", "Acetabulum", "Greater trochanter", "Pubic symphysis"], correctAnswer: "Iliac crest", explanation: "The iliac crest serves as a landmark for lumbar punctures and bone marrow biopsies." },

{ question: "Where does the iliacus muscle attach?", options: ["Acetabulum", "Iliac fossa", "Iliac crest", "Ischial tuberosity"], correctAnswer: "Iliac fossa", explanation: "The iliacus muscle attaches to the iliac fossa." },

{ question: "To which bone are the hamstring muscles attached?", options: ["Ilium", "Ischium", "Pubis", "Femur"], correctAnswer: "Ischium", explanation: "The hamstring muscles (semimembranosus, semitendinosus, and biceps femoris) attach to the ischium." },

{ question: "What type of joint is the pubic symphysis?", options: ["Synovial", "Cartilaginous", "Fibrous", "Ball and socket"], correctAnswer: "Cartilaginous", explanation: "The pubic symphysis is a cartilaginous joint." },

{ question: "Which ramus of the pubis forms the ischiopubic ramus?", options: ["Superior pubic ramus", "Inferior pubic ramus", "Anterior pubic ramus", "Posterior pubic ramus"], correctAnswer: "Inferior pubic ramus", explanation: "The ischiopubic ramus is formed by the inferior pubic ramus." },

{ question: "What is the primary function of the superior pubic ramus?", options: ["Forms the ischiopubic ramus", "Provides attachment for adductor muscles", "Articulates with the femur", "Connects with the acetabulum"], correctAnswer: "Provides attachment for adductor muscles", explanation: "The superior pubic ramus provides an attachment site for the adductor muscles." },

{ question: "Which bone is the longest and strongest in the body?", options: ["Fibula", "Femur", "Tibia", "Humerus"], correctAnswer: "Femur", explanation: "The femur is the longest and strongest bone in the human body." },

{ question: "What feature of the femur provides attachment for ligaments?", options: ["Trochanter", "Fovea", "Condyle", "Fossa"], correctAnswer: "Fovea", explanation: "The femur has a fovea that serves as an attachment point for ligaments." },

{ question: "Which line runs between the greater and lesser trochanters of the femur?", options: ["Intertrochanteric crest", "Intertrochanteric line", "Linea aspera", "Medial intermuscular septum"], correctAnswer: "Intertrochanteric line", explanation: "The intertrochanteric line runs between the greater and lesser trochanters of the femur." },

{ question: "The adductor tubercle at the distal end of the femur is considered which of the following?", options: ["Inferior lateral condyle", "Superior medial condyle", "Intertrochanteric line", "Femoral neck"], correctAnswer: "Superior medial condyle", explanation: "The adductor tubercle is regarded as the superior medial condyle at the distal end of the femur." },

{ question: "Which bones articulate to form the knee joint?", options: ["Femur, tibia, and patella", "Femur, tibia, and fibula", "Femur, patella, and fibula", "Tibia, fibula, and patella"], correctAnswer: "Femur, tibia, and patella", explanation: "The knee joint is formed by the articulation of the distal femur with the tibia and patella." },

{ question: "According to the provided text, the tibia is also called which bone?", options: ["Chin bone", "Shin bone", "Calf bone", "Thigh bone"], correctAnswer: "Chin bone", explanation: "In the provided text, the tibia is referred to as the 'chin bone'." },

{ question: "Which region of the tibia lacks muscle attachments?", options: ["Posterolateral", "Anteromedial", "Posteromedial", "Anterolateral"], correctAnswer: "Anteromedial", explanation: "The anteromedial part of the tibia does not have muscles attached." },

{ question: "What is the shape of the tibia in cross-section?", options: ["Circular", "Triangular", "Square", "Oval"], correctAnswer: "Triangular", explanation: "The tibia is triangular in cross-section, with its anterior surface noted in the text." },

{ question: "Which bone in the lower limb is non-weight bearing?", options: ["Femur", "Tibia", "Fibula", "Calcaneus"], correctAnswer: "Fibula", explanation: "The fibula is a non-weight bearing bone and primarily serves for muscle attachment." },

{ question: "What is the main function of the fibula?", options: ["Weight-bearing", "Muscle attachment", "Joint articulation", "Shock absorption"], correctAnswer: "Muscle attachment", explanation: "The fibula mainly provides a surface for muscle attachment rather than weight-bearing." },

{ question: "What type of bone is the patella?", options: ["Long bone", "Sesamoid bone", "Short bone", "Flat bone"], correctAnswer: "Sesamoid bone", explanation: "The patella is a triangular sesamoid bone embedded within the quadriceps tendon." },

{ question: "Where does the quadriceps tendon attach?", options: ["Greater trochanter", "Base of the patella", "Tibial tuberosity", "Fibular head"], correctAnswer: "Base of the patella", explanation: "The quadriceps tendon attaches at the base of the patella." },

{ question: "How many bones are present in the foot?", options: ["24", "26", "28", "30"], correctAnswer: "26", explanation: "The human foot consists of 26 bones." },

{ question: "Which bones form the ankle joint?", options: ["Talus, tibia, and fibula", "Talus, tibia, and patella", "Calcaneus, tibia, and fibula", "Talus, calcaneus, and navicular"], correctAnswer: "Talus, tibia, and fibula", explanation: "The ankle joint is formed by the talus bone along with the medial and lateral malleoli of the tibia and fibula." },

{ question: "Which tarsal bone is the only one that participates in forming the ankle joint?", options: ["Calcaneus", "Talus", "Cuboid", "Navicular"], correctAnswer: "Talus", explanation: "Among the tarsal bones, only the talus takes part in forming the ankle joint." },

{ question: "Which group of bones contributes to the arches of the foot?", options: ["Navicular, cuboid, and cuneiform", "Calcaneus, talus, and navicular", "Metatarsals, tarsals, and phalanges", "Talus, fibula, and tibia"], correctAnswer: "Navicular, cuboid, and cuneiform", explanation: "The navicular, cuboid, and cuneiform bones are involved in forming the arches of the foot." },

{ question: "What is the joint formed by the metatarsals and tarsal bones called?", options: ["Intertarsal joint", "Tarsometatarsal joint", "Metatarsophalangeal joint", "Sacroiliac joint"], correctAnswer: "Tarsometatarsal joint", explanation: "The articulation between the metatarsals and tarsal bones forms the tarsometatarsal joint." },

{ question: "How many phalanges are present in the foot?", options: ["12", "14", "16", "18"], correctAnswer: "14", explanation: "There are 14 phalanges in the foot." },

{ question: "How many phalanges does the great toe have?", options: ["One", "Two", "Three", "Four"], correctAnswer: "Two", explanation: "The great toe has only two phalanges: a proximal and a distal phalanx." },

{ question: "Which bone in the foot is commonly fractured in falls?", options: ["Talus", "Calcaneus", "Cuboid", "Navicular"], correctAnswer: "Calcaneus", explanation: "The calcaneus is frequently fractured in falls." },

{ question: "What are the two primary types of arches in the foot?", options: ["Medial and lateral", "Longitudinal and transverse", "Anterior and posterior", "Superior and inferior"], correctAnswer: "Longitudinal and transverse", explanation: "The foot has two primary arches: the longitudinal and the transverse arches." },

{ question: "What is the main function of the arches of the foot?", options: ["Weight bearing only", "Shock absorption and energy conservation", "Muscle attachment", "Joint movement stabilization"], correctAnswer: "Shock absorption and energy conservation", explanation: "The arches of the foot are essential for shock absorption and energy conservation during movement." },

{ question: "What role does the lateral longitudinal arch play?", options: ["Shock absorption", "Weight distribution and stabilization", "Flexibility", "Balance maintenance"], correctAnswer: "Weight distribution and stabilization", explanation: "The lateral longitudinal arch plays a key role in weight distribution and stabilizing the foot during locomotion." },

{ question: "Pes Planus is a condition characterized by:", options: ["High-arched foot", "Flat foot", "Clubfoot", "Cavus foot"], correctAnswer: "Flat foot", explanation: "Pes Planus refers to flat foot, where the medial arch collapses leading to excessive pronation." },

{ question: "Pes Cavus is characterized by which of the following?", options: ["A flat medial arch", "An exaggerated arch height", "Short metatarsals", "Increased foot width"], correctAnswer: "An exaggerated arch height", explanation: "Pes Cavus is defined by an exaggerated arch height, which may reduce shock absorption." },

{ question: "Which bone forms the posterior pole of the arches of the foot?", options: ["Metatarsals", "Calcaneus", "Talus", "Cuboid"], correctAnswer: "Calcaneus", explanation: "The calcaneus forms the posterior pole of the foot's arches." },

{ question: "Which structure forms the anterior pole of the arches of the foot?", options: ["Calcaneus", "Metatarsals", "Talus", "Cuneiform"], correctAnswer: "Metatarsals", explanation: "The metatarsals form the anterior pole of the foot's arches." },

{ question: "How does the medial end of the clavicle appear?", options: ["Flat", "Triangular", "Rounded", "Oval"], correctAnswer: "Triangular", explanation: "The medial end of the clavicle appears triangular and forms the sternoclavicular joint." },

{ question: "The lateral end of the clavicle is characterized by being:", options: ["Rounded", "Triangular", "Flat", "Irregular"], correctAnswer: "Flat", explanation: "The lateral end of the clavicle appears flat and forms the acromioclavicular joint." },

{ question: "How is the medial two-thirds of the clavicle shaped?", options: ["Concave anteriorly, convex posteriorly", "Convex anteriorly, concave posteriorly", "Flat", "Irregular"], correctAnswer: "Convex anteriorly, concave posteriorly", explanation: "The medial two-thirds of the clavicle is convex on the anterior surface and concave on the posterior surface." },

{ question: "How is the lateral one-third of the clavicle described?", options: ["Convex posteriorly and concave laterally", "Convex anteriorly and concave posteriorly", "Flat", "Irregular"], correctAnswer: "Convex posteriorly and concave laterally", explanation: "The lateral one-third of the clavicle is convex on its posterior side and concave laterally." },

{ question: "Which bone does not possess a medullary cavity?", options: ["Femur", "Tibia", "Clavicle", "Humerus"], correctAnswer: "Clavicle", explanation: "The clavicle is unique among long bones in that it does not have a medullary cavity." },

{ question: "Which long bone undergoes intramembranous ossification?", options: ["Femur", "Tibia", "Clavicle", "Humerus"], correctAnswer: "Clavicle", explanation: "The clavicle is the only long bone that undergoes intramembranous ossification." },

{ question: "During which weeks of intrauterine life does the clavicle begin to ossify?", options: ["1st to 2nd week", "3rd to 4th week", "5th to 6th week", "7th to 8th week"], correctAnswer: "5th to 6th week", explanation: "The clavicle begins to ossify during the 5th to 6th week of intrauterine life." },

{ question: "At approximately what age does the clavicle fuse?", options: ["10", "15", "20", "25"], correctAnswer: "25", explanation: "The clavicle typically fuses between the ages of 25." },

{ question: "How do the ligaments attaching to the clavicle compare in strength to the bone itself?", options: ["Weaker", "Stronger", "Equal", "Variable"], correctAnswer: "Stronger", explanation: "The ligaments attaching to the clavicle are stronger than the clavicle." },

{ question: "Which border of the scapula is the thickest?", options: ["Medial", "Lateral", "Superior", "Inferior"], correctAnswer: "Lateral", explanation: "The lateral border of the scapula is the thickest." },

{ question: "Which nerve innervates the muscles of the anterior compartment of the arm?", options: ["Radial nerve", "Ulnar nerve", "Musculocutaneous nerve", "Median nerve"], correctAnswer: "Musculocutaneous nerve", explanation: "The musculocutaneous nerve supplies the muscles of the anterior compartment of the arm." },

{ question: "Which nerve innervates the anterior muscles of the forearm?", options: ["Median nerve", "Radial nerve", "Ulnar nerve", "Musculocutaneous nerve"], correctAnswer: "Median nerve", explanation: "The median nerve innervates the anterior muscles of the forearm." },

{ question: "Sciatica can lead to which clinical presentation?", options: ["Hand drop", "Waist drop", "Foot drop", "Arm drop"], correctAnswer: "Waist drop", explanation: "Sciatica can cause waist drop due to nerve impairment." },

{ question: "Piriformis syndrome can result in which of the following?", options: ["Arm weakness", "Waist drop", "Foot numbness", "Hand tingling"], correctAnswer: "Waist drop", explanation: "Piriformis syndrome, associated with hypertrophy of the piriformis muscle, may lead to waist drop." },

{ question: "What is the approximate diameter of the sciatic nerve?", options: ["0.5 to 1 cm", "1.8 to 2 cm", "2.5 to 3 cm", "3 to 4 cm"], correctAnswer: "1.8 to 2 cm", explanation: "The sciatic nerve measures approximately 1.8 to 2 cm in diameter." },

{ question: "Injury to which nerve is responsible for causing sciatica?", options: ["Femoral nerve", "Obturator nerve", "Sciatic nerve", "Tibial nerve"], correctAnswer: "Sciatic nerve", explanation: "Damage to the sciatic nerve results in sciatica." },

{ question: "Which vein is described as the largest in the human body?", options: ["Femoral vein", "Great saphenous vein", "Basilic vein", "Cephalic vein"], correctAnswer: "Great saphenous vein", explanation: "The great saphenous vein is considered the largest vein in the human body." },

{ question: "Through which opening does the great saphenous vein enter the femoral canal?", options: ["Cribiform fascia", "Obturator canal", "Saphenous opening", "Sciatic notch"], correctAnswer: "Saphenous opening", explanation: "The great saphenous vein enters the femoral canal via the saphenous opening." },

{ question: "What is the joint between the metacarpals and phalanges commonly called?", options: ["Hinge joint", "Ellipsoid (wrist) joint", "Pivot joint", "Saddle joint"], correctAnswer: "Ellipsoid (wrist) joint", explanation: "The joint between the metacarpals and phalanges is known as the ellipsoid or wrist joint." },

{ question: "Through which muscles does the brachial plexus pass?", options: ["Trapezius and latissimus dorsi", "Anterior and middle scalene", "Deltoid and pectoralis major", "Sternocleidomastoid and platysma"], correctAnswer: "Anterior and middle scalene", explanation: "The brachial plexus passes between the anterior and middle scalene muscles." },

{ question: "Erb-Duchenne Palsy is an injury to which part of the brachial plexus?", options: ["Lower part", "Upper part", "Middle trunk", "Terminal branches"], correctAnswer: "Upper part", explanation: "Erb-Duchenne Palsy results from an injury to the upper part of the brachial plexus." },

{ question: "The brachial plexus is formed by the anterior rami of which spinal nerve roots?", options: ["C3 to C7", "C5 to T1", "C1 to C8", "T1 to T5"], correctAnswer: "C5 to T1", explanation: "The brachial plexus is formed from the anterior rami of the spinal nerves C5 to T1." },

{ question: "Which muscle forms the superior aspect of the floor of the cubital fossa?", options: ["Brachioradialis", "Brachialis", "Supinator", "Pronator teres"], correctAnswer: "Brachialis", explanation: "The brachialis muscle forms the superior portion of the floor of the cubital fossa." },

{ question: "Which muscle forms the inferior aspect of the floor of the cubital fossa?", options: ["Biceps brachii", "Supinator", "Brachialis", "Pronator teres"], correctAnswer: "Supinator", explanation: "The supinator muscle forms the inferior aspect of the cubital fossa floor." },

{ question: "How many groups of axillary lymph nodes are there?", options: ["Three", "Four", "Five", "Six"], correctAnswer: "Five", explanation: "There are five groups of axillary lymph nodes." },

{ question: "Which axillary lymph node does NOT drain into the central lymph node?", options: ["Anterior", "Apical", "Lateral", "Posterior"], correctAnswer: "Apical", explanation: "All axillary lymph nodes drain to the central node except the apical lymph node, which receives drainage from the central node." },

{ question: "Approximately how long is the femur?", options: ["35 cm", "40 cm", "45 cm", "50 cm"], correctAnswer: "45 cm", explanation: "The femur is approximately 45 cm long." },

{ question: "Which of the following is NOT a primary weight-bearing bone?", options: ["Femur", "Tibia", "Foot", "Fibula"], correctAnswer: "Fibula", explanation: "While the femur, tibia, and foot are primary weight-bearing structures, the fibula is not." },

{ question: "From which foramen does the sciatic nerve originate?", options: ["Lesser sciatic foramen", "Obturator canal", "Greater sciatic foramen", "Femoral triangle"], correctAnswer: "Greater sciatic foramen", explanation: "The sciatic nerve originates from the greater sciatic foramen." },

{ question: "Which part of the gluteal region is used for injections when administering drugs to the lower limbs?", options: ["Gluteus maximus", "Piriformis", "Gluteus medius", "Gluteus minimus"], correctAnswer: "Gluteus medius", explanation: "The gluteus medius is the preferred injection site for administering drugs to the lower limbs." },

{ question: "How many portions does the pectoralis major have?", options: ["One", "Two", "Three", "Four"], correctAnswer: "Two", explanation: "The pectoralis major has two portions: the clavicular head and the sternal head." },

{ question: "What is the fiber orientation of the clavicular head of the pectoralis major?", options: ["Obliquely upward, medially", "Obliquely downward, laterally", "Horizontally", "Vertically"], correctAnswer: "Obliquely downward, laterally", explanation: "The clavicular head of the pectoralis major has fibers oriented obliquely downward and laterally." },

{ question: "What is the fiber orientation of the sternal head of the pectoralis major?", options: ["Obliquely upward, laterally", "Obliquely downward, medially", "Horizontally", "Vertically"], correctAnswer: "Obliquely upward, laterally", explanation: "The sternal head of the pectoralis major has fibers oriented obliquely upward and laterally." },

{ question: "Which movement of the arm is associated with lateral rotation?", options: ["Internal rotation", "Extension", "Lateral rotation", "Adduction"], correctAnswer: "Lateral rotation", explanation: "Lateral rotation is the movement involved in external rotation of the arm." },

{ question: "Which movement of the arm is also known as medial rotation?", options: ["Extension", "Abduction", "Internal rotation", "Lateral rotation"], correctAnswer: "Internal rotation", explanation: "Internal rotation is also referred to as medial rotation of the arm." },

{ question: "Which muscle is primarily responsible for initiating abduction of the arm?", options: ["Infraspinatus", "Subscapularis", "Supraspinatus", "Teres minor"], correctAnswer: "Supraspinatus", explanation: "The supraspinatus muscle is primarily responsible for the abduction of the arm." },

{ question: "Which muscle is chiefly responsible for the external rotation of the arm?", options: ["Subscapularis", "Pectoralis major", "Infraspinatus", "Biceps brachii"], correctAnswer: "Infraspinatus", explanation: "The infraspinatus muscle is key in performing external rotation of the arm." },

{ question: "Which muscle contributes to both external rotation and adduction of the arm?", options: ["Deltoid", "Subscapularis", "Teres minor", "Pectoralis major"], correctAnswer: "Teres minor", explanation: "The teres minor muscle aids in both external rotation and adduction of the arm." },

{ question: "Which muscle is primarily responsible for internal rotation of the arm?", options: ["Infraspinatus", "Teres minor", "Subscapularis", "Deltoid"], correctAnswer: "Subscapularis", explanation: "The subscapularis muscle is the main muscle responsible for internal (medial) rotation of the arm." },

{ question: "Which muscle forms the lateral border of the femoral triangle?", options: ["Vastus lateralis", "Sartorius", "Longest muscle of the thigh", "Rectus femoris"], correctAnswer: "Longest muscle of the thigh", explanation: "The longest muscle of the thigh forms the lateral border of the femoral triangle." },

{ question: "What forms the medial border of the femoral triangle?", options: ["Lateral head of adductor longus", "Medial head of adductor longus", "Pectineus", "Iliopsoas"], correctAnswer: "Lateral head of adductor longus", explanation: "The lateral head of the adductor longus forms the medial border of the femoral triangle." },

{ question: "The cribiform fascia is part of which region of the femoral triangle?", options: ["Floor", "Roof", "Lateral wall", "Medial wall"], correctAnswer: "Roof", explanation: "The cribiform fascia forms part of the roof of the femoral triangle." },

{ question: "Relative to the femoral sheath, where is the cribiform fascia located?", options: ["Within it", "Deep to it", "Superficial to it", "Posterior to it"], correctAnswer: "Superficial to it", explanation: "The cribiform fascia is located superficial to the femoral sheath." },

{ question: "Which ligament bounds the femoral triangle superiorly?", options: ["Lacunar ligament", "Inguinal ligament", "Poupart’s ligament", "Sartorius tendon"], correctAnswer: "Poupart’s ligament", explanation: "The femoral triangle is bounded superiorly by Poupart’s ligament." },

{ question: "Through which structure does the great saphenous vein enter the femoral triangle?", options: ["Inguinal ligament", "Cribiform fascia", "Obturator canal", "Saphenous opening"], correctAnswer: "Cribiform fascia", explanation: "The great saphenous vein enters the femoral triangle through the cribiform fascia." },

{ question: "How is the floor of the femoral triangle described?", options: ["Flat", "Curved", "Gutter shaped", "Triangular"], correctAnswer: "Gutter shaped", explanation: "The floor of the femoral triangle is described as gutter shaped." },

{ question: "What forms the apex of the femoral triangle?", options: ["Femoral artery bifurcation", "Sartorius muscle overlapping the adductor muscle", "Inguinal ligament attachment", "Great saphenous vein entry point"], correctAnswer: "Sartorius muscle overlapping the adductor muscle", explanation: "The apex of the femoral triangle is where the sartorius muscle overlies the adductor muscle." },

{ question: "Femoral hernia is bounded laterally by which structure?", options: ["Lacunar ligament", "Femoral artery", "Femoral vein", "Adductor longus"], correctAnswer: "Femoral vein", explanation: "Femoral hernia is laterally bounded by the femoral vein." },

{ question: "Femoral hernia is bounded medially by which structure?", options: ["Femoral artery", "Lacunar ligament", "Inguinal ligament", "Adductor longus"], correctAnswer: "Lacunar ligament", explanation: "Femoral hernia is medially bounded by the lacunar ligament." },

{ question: "Femoral hernias are more common in which gender?", options: ["Males", "Females", "Both equally", "Children"], correctAnswer: "Females", explanation: "Due to wider pelves and smaller inguinal canals, femoral hernias are more common in females." },

{ question: "Which lymph nodes are found in the femoral canal?", options: ["Popliteal nodes", "Inguinal nodes", "Cloquet's lymph nodes", "Axillary nodes"], correctAnswer: "Cloquet's lymph nodes", explanation: "The femoral canal contains lymph nodes known as Cloquet's lymph nodes." },

{ question: "The femoral artery is a continuation of which artery?", options: ["Internal iliac artery", "External iliac artery", "Abdominal aorta", "Popliteal artery"], correctAnswer: "External iliac artery", explanation: "The femoral artery is the direct continuation of the external iliac artery." },

{ question: "Which artery is the main blood supply to the lower limbs?", options: ["Tibial artery", "Popliteal artery", "Femoral artery", "Obturator artery"], correctAnswer: "Femoral artery", explanation: "The femoral artery is the primary blood supply to the lower limbs." },

{ question: "Deep in the femoral triangle, what forms the superior boundaries of the floor?", options: ["Linea aspera", "Medial and lateral supracondylar lines of the femur", "Intertrochanteric line", "Soleal line of the tibia"], correctAnswer: "Medial and lateral supracondylar lines of the femur", explanation: "The diverging medial and lateral supracondylar lines of the femur form the superior boundaries of the floor." },

{ question: "What forms the inferior boundary of the floor of the femoral triangle?", options: ["Linea aspera", "Soleal line of the tibia", "Adductor magnus", "Popliteus"], correctAnswer: "Soleal line of the tibia", explanation: "The soleal line of the tibia forms the inferior boundary of the femoral triangle's floor." },

{ question: "What soft tissue covers the floor bones of the femoral triangle?", options: ["Popliteus", "Adductor magnus", "Cribiform fascia", "Iliopsoas"], correctAnswer: "Popliteus", explanation: "The popliteus is the soft tissue covering the floor bones of the femoral triangle." },

{ question: "Which is the longest and largest branch of the brachial plexus?", options: ["Radial nerve", "Median nerve", "Ulnar nerve", "Musculocutaneous nerve"], correctAnswer: "Radial nerve", explanation: "The radial nerve is recognized as the longest and largest branch of the brachial plexus." },

{ question: "The cervicoaxillary canal is bounded medially by which structure?", options: ["First rib", "Clavicle", "Scapula", "Sternum"], correctAnswer: "First rib", explanation: "The first rib forms the medial boundary of the cervicoaxillary canal." },

{ question: "What structure forms the anterior boundary of the cervicoaxillary canal?", options: ["Clavicle", "First rib", "Scapula", "Vertebral column"], correctAnswer: "Clavicle", explanation: "The clavicle forms the anterior boundary of the cervicoaxillary canal." },

{ question: "Which structure forms the posterior boundary of the cervicoaxillary canal?", options: ["First rib", "Clavicle", "Sternum", "Superior aspect of the scapula"], correctAnswer: "Superior aspect of the scapula", explanation: "The superior aspect of the scapula forms the posterior boundary of the cervicoaxillary canal." },

{ question: "How many walls does the axilla have?", options: ["Three", "Four", "Five", "Six"], correctAnswer: "Four", explanation: "The axilla is anatomically described as having four walls." },

{ question: "Into how many branches does the thoraco-acromial artery divide?", options: ["Two", "Four", "Three", "Five"], correctAnswer: "Four", explanation: "The thoraco-acromial artery divides into four branches: acromial, deltoid, pectoral, and clavicular." },

{ question: "Which vein runs obliquely across the cubital fossa connecting the cephalic and basilic veins?", options: ["Cephalic vein", "Median cubital vein", "Basilic vein", "Median antebrachial vein"], correctAnswer: "Median cubital vein", explanation: "The median cubital vein runs obliquely across the cubital fossa, linking the cephalic and basilic veins." },

{ question: "In 1/5th of the population, the median antebrachial vein bifurcates into which two veins?", options: ["Median cephalic and median basilic vein", "Radial and ulnar veins", "Cephalic and basilic vein", "Superficial and deep veins"], correctAnswer: "Median cephalic and median basilic vein", explanation: "In approximately 1/5th of the population, the median antebrachial vein splits into the median cephalic and median basilic veins." },

{ question: "What are the boundaries of the anatomical snuff box?", options: ["Anteriorly: APL and EPB; Posteriorly: APB and EPL", "Anteriorly: EPL and EPB; Posteriorly: APL and APB", "Medially: APL and EPL; Laterally: EPB and APB", "Superiorly: APL and EPL; Inferiorly: EPB and APB"], correctAnswer: "Anteriorly: APL and EPB; Posteriorly: APB and EPL", explanation: "The anatomical snuff box is bounded anteriorly by the abductor pollicis longus (APL) and extensor pollicis brevis (EPB), and posteriorly by the abductor pollicis brevis (APB) and extensor pollicis longus (EPL)." },

{ question: "Which dermatome maps, based on clinical findings, are commonly used by neurologists?", options: ["Keegan and Garrett 1948", "Foerster 1933", "Myers 1980", "Smith 1990"], correctAnswer: "Foerster 1933", explanation: "Foerster's dermatome maps, established in 1933, are commonly used by neurologists for clinical assessment." },

{ question: "Which dermatome maps emphasize intuitive aesthetics corresponding to limb development?", options: ["Foerster 1933", "Keegan and Garrett 1948", "Langer 1970", "Penfield 1966"], correctAnswer: "Keegan and Garrett 1948", explanation: "The dermatome maps by Keegan and Garrett (1948) incorporate intuitive aesthetic qualities related to limb development." },





],
},







{

category: "muscles",
questions: [


{
  question: "1. A nucleoside consists of",
  options: [
    "Nitrogenous base",
    "Purine or pyrimidine base + sugar",
    "Purine or pyrimidine base + phosphorous",
    "Purine + pyrimidine base + sugar + phosphorous"
  ],
  correctAnswer: "Purine or pyrimidine base + sugar",
  explanation: "No explanation provided"
},

{
  question: "2. A nucleotide consists of",
  options: [
    "A nitrogenous base like choline",
    "Purine + pyrimidine base + sugar + phosphorous",
    "Purine or pyrimidine base + sugar",
    "Purine or pyrimidine base + phosphorous"
  ],
  correctAnswer: "Purine + pyrimidine base + sugar + phosphorous",
  explanation: "No explanation provided"
},

{
  question: "3. A purine nucleotide is",
  options: [
    "AMP",
    "UMP",
    "CMP",
    "TMP"
  ],
  correctAnswer: "AMP",
  explanation: "No explanation provided"
},

{
  question: "4. A pyrimidine nucleotide is",
  options: [
    "GMP",
    "AMP",
    "CMP",
    "IMP"
  ],
  correctAnswer: "CMP",
  explanation: "No explanation provided"
},

{
  question: "5. Adenine is",
  options: [
    "6-Amino purine",
    "2-Amino-6-oxypurine",
    "2-Oxy-4-aminopyrimidine",
    "2, 4-Dioxypyrimidine"
  ],
  correctAnswer: "6-Amino purine",
  explanation: "No explanation provided"
},

{
  question: "6. 2, 4-Dioxypyrimidine is",
  options: [
    "Thymine",
    "Cystosine",
    "Uracil",
    "Guanine"
  ],
  correctAnswer: "Uracil",
  explanation: "No explanation provided"
},

{
  question: "7. The chemical name of guanine is",
  options: [
    "2,4-Dioxy-5-methylpyrimidine",
    "2-Amino-6-oxypurine",
    "2-Oxy-4-aminopyrimidine",
    "2, 4-Dioxypyrimidine"
  ],
  correctAnswer: "2-Amino-6-oxypurine",
  explanation: "No explanation provided"
},

{
  question: "8. Nucleotides and nucleic acids concentration are often also expressed in terms of",
  options: [
    "ng",
    "mg",
    "meq",
    "OD at 260 nm"
  ],
  correctAnswer: "OD at 260 nm",
  explanation: "No explanation provided"
},

{
  question: "9. The pyrimidine nucleotide acting as the high energy intermediate is",
  options: [
    "ATP",
    "UTP",
    "UDPG",
    "CMP"
  ],
  correctAnswer: "UDPG",
  explanation: "No explanation provided"
},

{
  question: "10. The carbon of the pentose in ester linkage with the phosphate in a nucleotide structure is",
  options: [
    "C1",
    "C3",
    "C4",
    "C5"
  ],
  correctAnswer: "C5",
  explanation: "No explanation provided"
},

{
  question: "11. Uracil and ribose form",
  options: [
    "Uridine",
    "Cytidine",
    "Guanosine",
    "Adenosine"
  ],
  correctAnswer: "Uridine",
  explanation: "No explanation provided"
},

{
  question: "12. The most abundant free nucleotide in mammalian cells is",
  options: [
    "ATP",
    "NAD",
    "GTP",
    "FAD"
  ],
  correctAnswer: "ATP",
  explanation: "No explanation provided"
},

{
  question: "14. The nucleic acid base found in mRNA but not in DNA is",
  options: [
    "Adenine",
    "Cytosine",
    "Guanine",
    "Uracil"
  ],
  correctAnswer: "Uracil",
  explanation: "No explanation provided"
},

{
  question: "20. In RNA molecule guanine content does not necessarily equal its cytosine content nor does its adenine content necessarily equal its uracil content since it is a",
  options: [
    "Single strand molecule",
    "Double stranded molecule",
    "Double stranded helical molecule",
    "Polymer of purine and pyrimidine ribonucleotides"
  ],
  correctAnswer: "Single strand molecule",
  explanation: "No explanation provided"
},

{
  question: "21. The nitrogenous base present in the RNA molecule is",
  options: [
    "Thymine",
    "Uracil",
    "Xanthine",
    "Hypoxanthine"
  ],
  correctAnswer: "Uracil",
  explanation: "No explanation provided"
},

{
  question: "22. RNA does not contain",
  options: [
    "Uracil",
    "Adenine",
    "Thymine",
    "Ribose"
  ],
  correctAnswer: "Thymine",
  explanation: "No explanation provided"
},

{
  question: "23. The sugar moiety present in RNA is",
  options: [
    "Ribulose",
    "Arabinose",
    "Ribose",
    "Deoxyribose"
  ],
  correctAnswer: "Ribose",
  explanation: "No explanation provided"
},

{
  question: "24. In RNA molecule",
  options: [
    "Guanine content equals cytosine",
    "Adenine content equals uracil",
    "Adenine content equals guanine",
    "Guanine content does not necessarily equal its cytosine content."
  ],
  correctAnswer: "Guanine content does not necessarily equal its cytosine content.",
  explanation: "No explanation provided"
},

{
  question: "25. Methylated purines and pyrimidines are characteristically present in",
  options: [
    "mRNA",
    "hnRNA",
    "tRNA",
    "rRNA"
  ],
  correctAnswer: "tRNA",
  explanation: "No explanation provided"
},

{
  question: "26. Thymine is present in",
  options: [
    "tRNA",
    "Ribosomal RNA",
    "Mammalian mRNA",
    "Prokaryotic mRNA"
  ],
  correctAnswer: "tRNA",
  explanation: "No explanation provided"
},

{
  question: "27. The approximate number of nucleotides in tRNA molecule is",
  options: [
    "25",
    "50",
    "75",
    "100"
  ],
  correctAnswer: "75",
  explanation: "No explanation provided"
},

{
  question: "28. In every cell, the number of tRNA molecules is at least",
  options: [
    "10",
    "20",
    "30",
    "40"
  ],
  correctAnswer: "20",
  explanation: "No explanation provided"
},

{
  question: "29. The structure of tRNA appears like a",
  options: [
    "Helix",
    "Hair pin",
    "Clover leaf",
    "Coil"
  ],
  correctAnswer: "Clover leaf",
  explanation: "No explanation provided"
},

{
  question: "30. Although each specific tRNA differs from the others in its sequence of nucleotides, all tRNA molecules contain a base paired stem that terminates in the sequence CCA at",
  options: [
    "3' Termini",
    "5' Termini",
    "Anticodon arm",
    "3'5'-Termini"
  ],
  correctAnswer: "3' Termini",
  explanation: "No explanation provided"
},

{
  question: "31. Transfer RNAs are classified on the basis of the number of base pairs in",
  options: [
    "Acceptor arm",
    "Anticodon arm",
    "D arm",
    "Extra arm"
  ],
  correctAnswer: "Extra arm",
  explanation: "No explanation provided"
},

{
  question: "32. In tRNA molecule D arm is named for the presence of the base:",
  options: [
    "Uridine",
    "Pseudouridine",
    "Dihydrouridine",
    "Thymidine"
  ],
  correctAnswer: "Uridine",
  explanation: "No explanation provided"
},

{
  question: "36. Double helical structure model of the DNA was proposed by",
  options: [
    "Pauling and Corey",
    "Peter Mitchell",
    "Watson and Crick",
    "King and Wooten"
  ],
  correctAnswer: "Watson and Crick",
  explanation: "No explanation provided"
},

{
  question: "37. DNA does not contain",
  options: [
    "Thymine",
    "Adenine",
    "Uracil",
    "Deoxyribose"
  ],
  correctAnswer: "Uracil",
  explanation: "No explanation provided"
},

{
  question: "38. The sugar moiety present in DNA is",
  options: [
    "Deoxyribose",
    "Ribose",
    "Lyxose",
    "Ribulose"
  ],
  correctAnswer: "Deoxyribose",
  explanation: "No explanation provided"
},

{
  question: "39. DNA rich in A-T pairs have",
  options: [
    "1 Hydrogen bond",
    "2 Hydrogen bonds",
    "3 Hydrogen bonds",
    "4 Hydrogen bonds"
  ],
  correctAnswer: "2 Hydrogen bonds",
  explanation: "No explanation provided"
},

{
  question: "40. In DNA molecule",
  options: [
    "Guanine content does not equal cytosine content",
    "Adenine content does not equal thymine content",
    "Adenine content equals uracil content",
    "Guanine content equals cytosine content"
  ],
  correctAnswer: "Guanine content equals cytosine content",
  explanation: "No explanation provided"
},

{
  question: "41. DNA rich in G-C pairs have",
  options: [
    "1 Hydrogen bond",
    "2 Hydrogen bonds",
    "3 Hydrogen bonds",
    "4 Hydrogen bonds"
  ],
  correctAnswer: "3 Hydrogen bonds",
  explanation: "No explanation provided"
}





],
},















{

category: "joints",
questions: [



{
  question: "1. All proteins contain the",
  options: ["Same 20 amino acids", "Different amino acids", "300 Amino acids occurring in nature", "Only a few amino acids"],
  correctAnswer: "Same 20 amino acids",
  explanation: "No explanation provided"
},

{
  question: "2. Proteins contain",
  options: ["Only L-a-amino acids", "Only D-amino acids", "DL-Amino acids", "Both (A) and (B)"],
  correctAnswer: "Only L-a-amino acids",
  explanation: "No explanation provided"
},

{
  question: "3. The optically inactive amino acid is",
  options: ["Glycine", "Serine", "Threonine", "Valine"],
  correctAnswer: "Glycine",
  explanation: "No explanation provided"
},

{
  question: "4. At neutral pH, a mixture of amino acids in solution would be predominantly:",
  options: ["Dipolar ions", "Nonpolar molecules", "Positive and monovalent", "Hydrophobic"],
  correctAnswer: "Dipolar ions",
  explanation: "No explanation provided"
},

{
  question: "5. The true statement about solutions of amino acids at physiological pH is",
  options: ["All amino acids contain both positive and negative charges", "All amino acids contain positively charged side chains", "Some amino acids contain only positive charge", "All amino acids contain negatively charged side chains"],
  correctAnswer: "All amino acids contain both positive and negative charges",
  explanation: "No explanation provided"
},

{
  question: "6. pH (isoelectric pH) of alanine is",
  options: ["6.02", "6.6", "6.8", "7.2"],
  correctAnswer: "6.02",
  explanation: "No explanation provided"
},

{
  question: "7. Since the pK values for aspartic acid are 2.0, 3.9 and 10.0, it follows that the isoelectric (pH) is",
  options: ["3.0", "3.9", "5.9", "6.0"],
  correctAnswer: "3.0",
  explanation: "No explanation provided"
},

{
  question: "8. Sulphur containing amino acid is",
  options: ["Methionine", "Leucine", "Valine", "Asparagine"],
  correctAnswer: "Methionine",
  explanation: "No explanation provided"
},

{
  question: "9. An example of sulphur containing amino acid is",
  options: ["2-Amino-3-mercaptopropanoic acid", "2-Amino-3-methylbutanoic acid", "2-Amino-3-hydroxypropanoic acid", "Amino acetic acid"],
  correctAnswer: "2-Amino-3-mercaptopropanoic acid",
  explanation: "No explanation provided"
},

{
  question: "10. All the following are sulphur containing amino acids found in proteins except",
  options: ["Cysteine", "Cystine", "Methionine", "Threonine"],
  correctAnswer: "Threonine",
  explanation: "No explanation provided"
},

{
  question: "11. An aromatic amino acid is",
  options: ["Lysine", "Tyrosine", "Taurine", "Arginine"],
  correctAnswer: "Tyrosine",
  explanation: "No explanation provided"
},

{
  question: "12. The functions of plasma albumin are",
  options: ["Osmosis", "Transport", "Immunity", "both (A) and (B)"],
  correctAnswer: "Osmosis",
  explanation: "No explanation provided"
},

{
  question: "13. Amino acid with side chain containing basic groups is",
  options: ["2-Amino 5-guanidovaleric acid", "2-Pyrrolidine carboxylic acid", "2-Amino 3-mercaptopropanoic acid", "2-Amino propanoic acid"],
  correctAnswer: "2-Amino 5-guanidovaleric acid",
  explanation: "No explanation provided"
},

{
  question: "14. An example of a-amino acid not present in proteins but essential in mammalian metabolism is",
  options: ["3-Amino 3-hydroxypropanoic acid", "2-Amino 3-hydroxybutanoic acid", "2-Amino 4-mercaptobutanoic acid", "2-Amino 3-mercaptopropanoic acid"],
  correctAnswer: "2-Amino 4-mercaptobutanoic acid",
  explanation: "No explanation provided"
},

{
  question: "15. An essential amino acid in man is",
  options: ["Aspartate", "Tyrosine", "Methionine", "Serine"],
  correctAnswer: "Methionine",
  explanation: "No explanation provided"
},

{
  question: "16. Non essential amino acids",
  options: ["Are not components of tissue proteins", "May be synthesized in the body from essential amino acids", "Have no role in the metabolism", "May be synthesized in the body in diseased states"],
  correctAnswer: "May be synthesized in the body from essential amino acids",
  explanation: "No explanation provided"
},

{
  question: "17. Which one of the following is semiessential amino acid for humans?",
  options: ["Valine", "Arginine", "Lysine", "Tyrosine"],
  correctAnswer: "Arginine",
  explanation: "No explanation provided"
},

{
  question: "18. An example of polar amino acid is",
  options: ["Alanine", "Leucine", "Arginine", "Valine"],
  correctAnswer: "Arginine",
  explanation: "No explanation provided"
},

{
  question: "19. The amino acid with a nonpolar side chain is",
  options: ["Serine", "Valine", "Asparagine", "Threonine"],
  correctAnswer: "Valine",
  explanation: "No explanation provided"
},

{
  question: "20. A ketogenic amino acid is",
  options: ["Valine", "Cysteine", "Leucine", "Threonine"],
  correctAnswer: "Leucine",
  explanation: "No explanation provided"
},

{
  question: "21. An amino acid that does not form an a-helix is",
  options: ["Valine", "Proline", "Tyrosine", "Tryptophan"],
  correctAnswer: "Proline",
  explanation: "No explanation provided"
},

{
  question: "22. An amino acid not found in proteins is",
  options: ["β-Alanine", "Proline", "Lysine", "Histidine"],
  correctAnswer: "β-Alanine",
  explanation: "No explanation provided"
},

{
  question: "25. Biuret reaction is specific for",
  options: ["-CONH-linkages", "-CSNH2 group", "-(NH)NH2 group", "All of these"],
  correctAnswer: "-CONH-linkages",
  explanation: "No explanation provided"
},

{
  question: "26. Sakaguchi's reaction is specific for",
  options: ["Tyrosine", "Proline", "Arginine", "Cysteine"],
  correctAnswer: "Arginine",
  explanation: "No explanation provided"
},

{
  question: "27. Million-Nasse's reaction is specific for the amino acid:",
  options: ["Tryptophan", "Tyrosine", "Phenylalanine", "Arginine"],
  correctAnswer: "Tyrosine",
  explanation: "No explanation provided"
},

{
  question: "28. Ninhydrin with evolution of CO2 forms a blue complex with",
  options: ["Peptide bond", "a-Amino acids", "Serotonin", "Histamine"],
  correctAnswer: "a-Amino acids",
  explanation: "No explanation provided"
},

{
  question: "29. The most of the ultraviolet absorption of proteins above 240 nm is due to their content of",
  options: ["Tryptophan", "Aspartate", "Glutamate", "Alanine"],
  correctAnswer: "Tryptophan",
  explanation: "No explanation provided"
},

{
  question: "30. Which of the following is a dipeptide?",
  options: ["Anserine", "Glutathione", "Glucagon", "B-Lipoprotein"],
  correctAnswer: "Anserine",
  explanation: "No explanation provided"
},

{
  question: "31. Which of the following is a tripeptide?",
  options: ["Anserine", "Oxytocin", "Glutathione", "Kallidin"],
  correctAnswer: "Glutathione",
  explanation: "No explanation provided"
},

{
  question: "32. A peptide which acts as potent smooth muscle hypotensive agent is",
  options: ["Glutathione", "Bradykinin", "Tryocidine", "Gramicidin-s"],
  correctAnswer: "Bradykinin",
  explanation: "No explanation provided"
},

{
  question: "33. A tripeptide functioning as an important reducing agent in the tissues is",
  options: ["Bradykinin", "Kallidin", "Tyrocidin", "Glutathione"],
  correctAnswer: "Glutathione",
  explanation: "No explanation provided"
},

{
  question: "34. An example of metalloprotein is",
  options: ["Casein", "Ceruloplasmin", "Gelatin", "Salmine"],
  correctAnswer: "Ceruloplasmin",
  explanation: "No explanation provided"
},

{
  question: "35. Carbonic anhydrase is an example of",
  options: ["Lipoprotein", "Phosphoprotein", "Metalloprotein", "Chromoprotein"],
  correctAnswer: "Metalloprotein",
  explanation: "No explanation provided"
},

{
  question: "36. An example of chromoprotein is",
  options: ["Hemoglobin", "Sturine", "Nuclein", "Gliadin"],
  correctAnswer: "Hemoglobin",
  explanation: "No explanation provided"
},

{
  question: "38. Casein, the milk protein is",
  options: ["Nucleoprotein", "Chromoprotein", "Phosphoprotein", "Glycoprotein"],
  correctAnswer: "Phosphoprotein",
  explanation: "No explanation provided"
},

{
  question: "41. Histones are",
  options: ["Identical to protamine", "Proteins rich in lysine and arginine", "Proteins with high molecular weight", "Insoluble in water and very dilute acids"],
  correctAnswer: "Proteins rich in lysine and arginine",
  explanation: "No explanation provided"
},

{
  question: "42. The protein present in hair is",
  options: ["Keratin", "Elastin", "Myosin", "Tropocollagen"],
  correctAnswer: "Keratin",
  explanation: "No explanation provided"
},

{
  question: "43. The amino acid from which synthesis of the protein of hair keratin takes place is",
  options: ["Alanine", "Methionine", "Proline", "Hydroxyproline"],
  correctAnswer: "Methionine",
  explanation: "No explanation provided"
},

{
  question: "52. Globular proteins have completely folded, coiled polypeptide chain and the axial ratio (ratio of length to breadth) is",
  options: ["Less than 10 and generally not greater than 3-4", "Generally 10", "Greater than 10 and generally 20", "Greater than 10"],
  correctAnswer: "Less than 10 and generally not greater than 3-4",
  explanation: "No explanation provided"
},

{
  question: "53. Fibrous proteins have axial ratio",
  options: ["Less than 10", "Less than 10 and generally not greater than 3-4", "Generally 10", "Greater than 10"],
  correctAnswer: "Greater than 10",
  explanation: "No explanation provided"
},

{
  question: "54. Each turn of a-helix contains the amino acid residues (number):",
  options: ["3.6", "3.0", "4.2", "4.5"],
  correctAnswer: "3.6",
  explanation: "No explanation provided"
},

{
  question: "55. Distance traveled per turn of a-helix in nm is",
  options: ["0.53", "0.54", "0.44", "0.48"],
  correctAnswer: "0.54",
  explanation: "No explanation provided"
},

{
  question: "56. Along the a-helix each amino acid residue advances in nm by",
  options: ["0.15", "0.10", "0.12", "0.20"],
  correctAnswer: "0.15",
  explanation: "No explanation provided"
},

{
  question: "57. The number of helices present in a collagen molecule is",
  options: ["1", "2", "3", "4"],
  correctAnswer: "3",
  explanation: "No explanation provided"
},

{
  question: "58. In proteins the a-helix and ẞ-pleated sheet are examples of",
  options: ["Primary structure", "Secondary structure", "Tertiary structure", "Quaternary structure"],
  correctAnswer: "Secondary structure",
  explanation: "No explanation provided"
},

{
  question: "59. The a-helix of proteins is",
  options: ["A pleated structure", "Made periodic by disulphide bridges", "A non-periodic structure", "Stabilised by hydrogen bonds between NH and CO groups of the main chain"],
  correctAnswer: "A non-periodic structure",
  explanation: "No explanation provided"
},

{
  question: "63. Tertiary structure of a protein describes",
  options: ["The order of amino acids", "Location of disulphide bonds", "Loop regions of proteins", "The ways of protein folding"],
  correctAnswer: "The ways of protein folding",
  explanation: "No explanation provided"
},

{
  question: "64. In a protein molecule the disulphide bond is not broken by",
  options: ["Reduction", "Oxidation", "Denaturation", "X-ray diffraction"],
  correctAnswer: "Denaturation",
  explanation: "No explanation provided"
},

{
  question: "65. The technique for purification of proteins that can be made specific for a given protein is",
  options: ["Gel filtration chromotography", "Ion exchange chromatography", "Electrophoresis", "Affinity chromatography"],
  correctAnswer: "Affinity chromatography",
  explanation: "No explanation provided"
},

{
  question: "66. Denaturation of proteins results in",
  options: ["Disruption of primary structure", "Breakdown of peptide bonds", "Destruction of hydrogen bonds", "Irreversible changes in the molecule"],
  correctAnswer: "Destruction of hydrogen bonds",
  explanation: "No explanation provided"
},

{
  question: "67. Primary structure of a protein is formed by",
  options: ["Hydrogen bonds", "Peptide bonds", "Disulphide bonds", "All of these"],
  correctAnswer: "Peptide bonds",
  explanation: "No explanation provided"
},

{
  question: "68. a-Helix is formed by",
  options: ["Hydrogen bonds", "Hydrophobic bonds", "Electrostatic bonds", "Disulphide bonds"],
  correctAnswer: "Hydrogen bonds",
  explanation: "No explanation provided"
},

{
  question: "69. Glutelins are present in",
  options: ["Milk", "Eggs", "Meat", "Cereals"],
  correctAnswer: "Cereals",
  explanation: "No explanation provided"
},

{
  question: "70. Aromatic amino acids can be detected by",
  options: ["Sakaguchi reaction", "Millon-Nasse reaction", "Hopkins-Cole reaction", "Xanthoproteic reaction"],
  correctAnswer: "Xanthoproteic reaction",
  explanation: "No explanation provided"
},

{
  question: "71. Two amino groups are present in",
  options: ["Leucine", "Glutamate", "Lysine", "Threonine"],
  correctAnswer: "Lysine",
  explanation: "No explanation provided"
},

{
  question: "72. During denaturation of proteins, all of the following are disrupted except",
  options: ["Primary structure", "Secondary structure", "Tertiary structure", "Quaternary structure"],
  correctAnswer: "Secondary structure",
  explanation: "No explanation provided"
},

{
  question: "73. All the following are branched chain amino acids except",
  options: ["Isoleucine", "Alanine", "Leucine", "Valine"],
  correctAnswer: "Alanine",
  explanation: "No explanation provided"
},

{
  question: "74. An -OH group is present in the side chain of",
  options: ["Serine", "Arginine", "Lysine", "Proline"],
  correctAnswer: "Serine",
  explanation: "No explanation provided"
},

{
  question: "75. All of the following statements about aspartate are true except",
  options: ["It is non-essential amino acid", "It is a dicarboxylic amino acid", "It can be synthesized from pyruvate and glutamate", "It can be converted into asparagine"],
  correctAnswer: "It can be synthesized from pyruvate and glutamate",
  explanation: "No explanation provided"
}





],

},




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////Fundamentals of Anatomy/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
  category: "Fundamentals of Anatomy",
  questions: [

{ question: "Which of the following is NOT a tenet of the Cell Theory?", options: ["Cells arise spontaneously", "Cells are the basic unit of life", "New cells are formed from pre‐existing cells", "All living organisms are composed of cells"], correctAnswer: "Cells arise spontaneously", explanation: "Cell Theory holds that all living organisms are composed of cells, cells are the basic unit of life, and new cells are produced only from existing cells; spontaneous generation is not accepted." },

{ question: "What is the primary function of the cell membrane?", options: ["Regulate what enters and exits the cell", "Store genetic information", "Produce energy", "Synthesize proteins"], correctAnswer: "Regulate what enters and exits the cell", explanation: "The cell membrane is a selectively permeable barrier that controls the movement of substances in and out of the cell." },

{ question: "Which organelle is known as the powerhouse of the cell?", options: ["Golgi apparatus", "Nucleus", "Mitochondria", "Endoplasmic reticulum"], correctAnswer: "Mitochondria", explanation: "Mitochondria generate ATP through cellular respiration, providing energy for the cell." },

{ question: "What is the primary function of the rough endoplasmic reticulum?", options: ["Lipid synthesis", "Protein synthesis and modification", "Detoxification", "ATP production"], correctAnswer: "Protein synthesis and modification", explanation: "The rough ER is studded with ribosomes and is involved in synthesizing and modifying proteins destined for membranes or secretion." },

{ question: "Which structure is primarily responsible for packaging and sorting proteins within the cell?", options: ["Golgi apparatus", "Nucleus", "Lysosome", "Smooth endoplasmic reticulum"], correctAnswer: "Golgi apparatus", explanation: "The Golgi apparatus modifies, sorts, and packages proteins and lipids for transport to their destinations." },

{ question: "During which phase of the cell cycle does the cell grow and replicate its DNA?", options: ["Interphase", "Mitosis", "Cytokinesis", "Anaphase"], correctAnswer: "Interphase", explanation: "Interphase is the period during which the cell grows, carries out normal functions, and replicates its DNA in preparation for division." },

{ question: "What is the primary role of the centromere during mitosis?", options: ["It synthesizes proteins", "It holds sister chromatids together", "It produces ATP", "It forms the cell membrane"], correctAnswer: "It holds sister chromatids together", explanation: "The centromere is the region where sister chromatids are held together until they are separated during mitosis." },

{ question: "Which cytoskeletal component is mainly involved in forming the mitotic spindle?", options: ["Microtubules", "Microfilaments", "Intermediate filaments", "Actin filaments"], correctAnswer: "Microtubules", explanation: "Microtubules assemble into the mitotic spindle, which is critical for separating chromosomes during cell division." },

{ question: "What is the primary role of lysosomes in the cell?", options: ["Break down waste materials", "Synthesize proteins", "Store genetic information", "Produce ATP"], correctAnswer: "Break down waste materials", explanation: "Lysosomes contain digestive enzymes that break down cellular debris and macromolecules." },

{ question: "Which organelle is responsible for detoxification and lipid synthesis?", options: ["Smooth endoplasmic reticulum", "Rough endoplasmic reticulum", "Golgi apparatus", "Mitochondria"], correctAnswer: "Smooth endoplasmic reticulum", explanation: "The smooth ER lacks ribosomes and is involved in lipid synthesis, detoxification of chemicals, and regulation of calcium ions." },

{ question: "What is cytosol?", options: ["The fluid component of the cytoplasm", "A type of organelle", "The outer cell membrane", "A component of the nucleus"], correctAnswer: "The fluid component of the cytoplasm", explanation: "Cytosol is the liquid found inside cells, in which organelles and other cellular components are suspended." },

{ question: "What is one primary function of the cytoskeleton?", options: ["Providing structural support", "DNA replication", "Protein synthesis", "Lipid metabolism"], correctAnswer: "Providing structural support", explanation: "The cytoskeleton is a network of protein filaments that helps maintain cell shape, enables movement, and aids in intracellular transport." },

{ question: "The process of cell division that produces two genetically identical daughter cells is called:", options: ["Mitosis", "Meiosis", "Binary fission", "Fusion"], correctAnswer: "Mitosis", explanation: "Mitosis is the process by which a single cell divides to produce two daughter cells with identical genetic material." },

{ question: "What is the smallest independently functioning unit of life?", options: ["Cell", "Tissue", "Organ", "Organ system"], correctAnswer: "Cell", explanation: "The cell is recognized as the fundamental unit of life, capable of performing all necessary functions of an organism." },

{ question: "What is the function of the nuclear envelope?", options: ["It encloses the nucleus and regulates material exchange", "It synthesizes proteins", "It produces ATP", "It packages genetic material"], correctAnswer: "It encloses the nucleus and regulates material exchange", explanation: "The nuclear envelope is a double-membrane structure that surrounds the nucleus and controls the flow of molecules in and out via nuclear pores." },

{ question: "Which of the following is NOT one of the four primary tissue types?", options: ["Cartilaginous", "Epithelial", "Connective", "Muscle"], correctAnswer: "Cartilaginous", explanation: "Cartilage is a specialized type of connective tissue, not a separate primary tissue type." },







{ question: "Which structure is primarily responsible for sperm production in the male reproductive system?", options: ["Testes", "Epididymis", "Prostate gland", "Seminal vesicles"], correctAnswer: "Testes", explanation: "The testes are the site of sperm production and testosterone secretion in males." },

{ question: "Which structure stores and matures sperm in the male reproductive system?", options: ["Prostate gland", "Seminal vesicles", "Epididymis", "Testes"], correctAnswer: "Seminal vesicles", explanation: "The epididymis is where sperm mature and are stored before ejaculation." },

{ question: "In the female reproductive system, which structure is responsible for capturing the released oocyte?", options: ["Uterus", "Ovary", "infundibulum", "Cervix"], correctAnswer: "infundibulum", explanation: "The infundibulum of the fallopian tube, with its fimbriae, captures the oocyte released from the ovary." },

{ question: "Which layer of the uterine wall is primarily responsible for the contractile force during childbirth?", options: ["Endometrium", "Perimetrium", "Serosa", "Myometrium"], correctAnswer: "Myometrium", explanation: "The myometrium is the thick muscular layer that contracts during labor." },

{ question: "Which gland in the male reproductive system secretes a pre-ejaculate fluid that lubricates the urethra?", options: ["Bulbourethral gland", "Seminal vesicle", "Prostate gland", "Testes"], correctAnswer: "Bulbourethral gland", explanation: "The bulbourethral glands produce a lubricating fluid that helps clear the urethra prior to ejaculation." },

{ question: "Which hormone is primarily secreted by the testes in males?", options: ["Estrogen", "Testosterone", "Progesterone", "Luteinizing hormone"], correctAnswer: "Testosterone", explanation: "Testosterone, produced by Leydig cells in the testes, is the main male sex hormone." },

{ question: "Which structure in the female reproductive system produces oocytes?", options: ["Fallopian tube", "Uterus", "Ovary", "Vulva"], correctAnswer: "Ovary", explanation: "The ovaries are responsible for producing oocytes and secreting key hormones like estrogen and progesterone." },

{ question: "What is the primary function of the seminal vesicles in males?", options: ["Store sperm", "Secrete an alkaline fluid to nourish sperm", "Produce sperm", "Regulate testosterone levels"], correctAnswer: "Regulate testosterone levels", explanation: "The seminal vesicles secrete a fructose-rich fluid that provides energy for sperm and contributes to semen volume." },

{ question: "Which structure in the female reproductive system provides the site for implantation of a fertilized egg?", options: ["Uterus", "Fallopian tube", "Ovary", "Cervix"], correctAnswer: "Uterus", explanation: "The uterus, specifically its endometrial lining, is where implantation of a fertilized egg occurs." },

{ question: "Which structure in the male reproductive system plays a key role by secreting an alkaline fluid that helps neutralize the acidic environment of the female reproductive tract?", options: ["Epididymis", "Prostate gland", "Bulbourethral gland", "Testes"], correctAnswer: "Prostate gland", explanation: "The prostate gland produces an alkaline fluid that helps protect sperm by neutralizing the acidity of the vaginal environment." },

{ question: "Which structure in the female reproductive system serves as the birth canal and passageway for menstrual flow?", options: ["Ovary", "Vagina", "Fallopian tube", "Uterus"], correctAnswer: "Vagina", explanation: "The vagina is a muscular canal that functions as the passageway for menstrual flow, copulation, and childbirth." },

{ question: "What is the primary function of the cervix in the female reproductive system?", options: ["Produce oocytes", "Capture the oocyte", "Secrete hormones", "Produce cervical mucus to regulate sperm passage"], correctAnswer: "Produce cervical mucus to regulate sperm passage", explanation: "The cervix produces mucus that changes in consistency during the menstrual cycle to either facilitate or block sperm movement." },

{ question: "During the menstrual cycle, which hormone primarily stimulates the thickening of the endometrium?", options: [ "Testosterone", "Progesterone", "Estrogen", "Luteinizing hormone"], correctAnswer: "Estrogen", explanation: "Estrogen is responsible for the proliferation and thickening of the endometrial lining during the follicular phase." },

{ question: "Which structure contributes the majority of the seminal fluid volume in males?", options: ["Bulbourethral gland", "Seminal vesicle", "Epididymis", "Testes"], correctAnswer: "Seminal vesicle", explanation: "Seminal vesicles produce a large portion of the fluid that nourishes sperm and increases semen volume." },

{ question: "What is the primary role of ovarian follicles in the female reproductive system?", options: ["Exclusively produce estrogen", "Store oocytes", "Support the maturation and development of oocytes", "Facilitate fertilization"], correctAnswer: "Support the maturation and development of oocytes", explanation: "Ovarian follicles provide the environment necessary for oocyte maturation and development prior to ovulation." },







{ question: "What is the main function of epithelial tissue?", options: ["Protection and selective absorption", "Support and connection", "Contraction", "Transmission of nerve impulses"], correctAnswer: "Protection and selective absorption", explanation: "Epithelial tissue covers body surfaces, lines cavities, and forms glands, serving primarily as a protective barrier and facilitating absorption and secretion." },

{ question: "Simple epithelial tissue is characterized by:", options: ["A single layer of cells", "Multiple cell layers", "An abundance of extracellular matrix", "Loose cell arrangement"], correctAnswer: "A single layer of cells", explanation: "Simple epithelium consists of a single layer of cells, which is optimal for functions like diffusion and filtration." },



{ question: "Which position is commonly used for pelvic examinations and childbirth?", options: ["Recumbent position", "Lithotomy position", "Knee-chest position", "Dextroposition"], correctAnswer: "Lithotomy position", explanation: "The lithotomy position is used for gynecological and pelvic procedures, including childbirth." },

{ question: "Which term describes displacement of the heart to the right side of the thorax?", options: ["Dextroposition", "Ectopic position", "Cardiac position", "Lithotomy position"], correctAnswer: "Dextroposition", explanation: "Dextroposition specifically refers to the heart being located on the right side of the chest." },

{ question: "Which position involves the patient resting on knees and elbows, with the hips elevated?", options: ["Knee-elbow position", "Decubitus position", "Recumbent position", "Lithotomy position"], correctAnswer: "Knee-elbow position", explanation: "The knee-elbow position has the patient on their knees and elbows, often used for certain rectal or sigmoidoscopic exams." },

{ question: "In which position does the patient lie on their side, commonly used in X-ray imaging?", options: ["Ectopic position", "Decubitus position", "Knee-chest position", "Lithotomy position"], correctAnswer: "Decubitus position", explanation: "A decubitus position typically refers to lying on one’s side, used frequently in radiological imaging (e.g., lateral decubitus X-ray)." },

{ question: "Which position is often used to help patients with heart or breathing difficulties by keeping them upright?", options: ["Cardiac position", "Prone recumbent", "Knee-elbow position", "Dextroposition"], correctAnswer: "Cardiac position", explanation: "The cardiac (or orthopneic) position helps patients breathe more easily by elevating the upper body, reducing stress on the heart and lungs." },

{ question: "Which term best describes any organ located outside of its normal anatomical site?", options: ["Dextroposition", "Ectopic", "Recumbent", "Lithotomy"], correctAnswer: "Ectopic", explanation: "Ectopic means 'out of place,' referring to organs or tissues located away from their usual positions (e.g., ectopic pregnancy)." },

{ question: "Which position describes a patient simply lying down, without specifying orientation?", options: ["Recumbent position", "Lithotomy position", "Knee-chest position", "Cardiac position"], correctAnswer: "Recumbent position", explanation: "The term 'recumbent' indicates lying down (supine, prone, or lateral), but doesn’t specify exact orientation." },

{ question: "Which position is similar to knee-elbow but involves the patient’s chest closer to the bed or table?", options: ["Dextroposition", "Cardiac position", "Knee-chest position", "Decubitus position"], correctAnswer: "Knee-chest position", explanation: "The knee-chest position involves both knees on the bed with the chest resting on or near the bed, hips elevated." },

{ question: "Which position is often used for rectal examinations but can be uncomfortable, sometimes replaced by the left lateral position?", options: ["Knee-elbow position", "Lithotomy position", "Ectopic position", "Cardiac position"], correctAnswer: "Knee-elbow position", explanation: "The knee-elbow position can provide access for rectal exams but is less commonly used due to patient discomfort." },

{ question: "What does 'left lateral decubitus' specifically mean in a clinical or imaging context?", options: ["Patient lying on the left side", "Heart displaced to the right side", "Patient in an upright seated position", "Knees and chest on the table"], correctAnswer: "Patient lying on the left side", explanation: "A left lateral decubitus position means the patient is lying on their left side, commonly used in abdominal imaging." },

{ question: "Which position can help reduce venous pressure in the lower body by elevating the hips and lowering the chest?", options: ["Knee-chest position", "Lithotomy position", "Recumbent position", "Cardiac position"], correctAnswer: "Knee-chest position", explanation: "The knee-chest position elevates the patient’s hips above the heart, momentarily reducing venous return from the lower extremities." },

{ question: "What is a key risk if a patient remains in one position, such as decubitus, for an extended period without movement?", options: ["Enhanced lung expansion", "Dextroposition", "Formation of decubitus ulcers", "Increased cardiac output"], correctAnswer: "Formation of decubitus ulcers", explanation: "Pressure sores (decubitus ulcers) can form when patients remain in one position for too long, causing skin breakdown." },

{ question: "Which position is typically employed for surgeries or examinations of the perineal region?", options: ["Lithotomy position", "Cardiac position", "Knee-elbow position", "Decubitus position"], correctAnswer: "Lithotomy position", explanation: "In the lithotomy position, the patient’s legs are flexed and elevated, allowing surgical or exam access to the perineal region." },

{ question: "Which statement best describes 'recumbent' positioning?", options: ["It specifically means lying on the right side", "It is always used for pelvic exams", "It simply indicates lying down in any orientation", "It means the heart is displaced"], correctAnswer: "It simply indicates lying down in any orientation", explanation: "Recumbent refers broadly to lying down, whether supine, prone, or lateral." },

{ question: "Which position is sometimes referred to as an 'orthopneic' position to help with breathing difficulties?", options: ["Cardiac position", "Knee-elbow position", "Lithotomy position", "Dextroposition"], correctAnswer: "Cardiac position", explanation: "The cardiac or orthopneic position involves sitting upright, often leaning forward, to ease breathing and reduce cardiac workload." },









{ question: "Stratified squamous epithelium is primarily adapted for:", options: ["Protection against abrasion", "Rapid absorption", "Hormone secretion", "Electrical conduction"], correctAnswer: "Protection against abrasion", explanation: "Stratified squamous epithelium, with multiple cell layers, is well suited to withstand physical and chemical stresses." },

{ question: "Which type of connective tissue is characterized by tightly packed collagen fibers with minimal ground substance?", options: ["Dense connective tissue", "Loose connective tissue", "Adipose tissue", "Reticular tissue"], correctAnswer: "Dense connective tissue", explanation: "Dense connective tissue has a high concentration of collagen fibers, providing great tensile strength." },

{ question: "Which connective tissue is specialized for energy storage?", options: ["Adipose tissue", "Bone", "Cartilage", "Blood"], correctAnswer: "Adipose tissue", explanation: "Adipose tissue stores fat, serving as an energy reserve and providing insulation." },

{ question: "Which tissue type is primarily responsible for generating force and movement?", options: ["Muscle tissue", "Nervous tissue", "Connective tissue", "Epithelial tissue"], correctAnswer: "Muscle tissue", explanation: "Muscle tissue contracts to produce movement and generate force." },

{ question: "Cardiac muscle tissue is unique because it is:", options: ["Striated and involuntary", "Non-striated and voluntary", "Only found in the limbs", "Incapable of contraction"], correctAnswer: "Striated and involuntary", explanation: "Cardiac muscle shares the striated appearance of skeletal muscle but functions involuntarily to pump blood." },

{ question: "Which tissue type is specialized for the transmission of electrical signals?", options: ["Nervous tissue", "Muscle tissue", "Epithelial tissue", "Connective tissue"], correctAnswer: "Nervous tissue", explanation: "Nervous tissue is designed to conduct electrical impulses and process information throughout the body." },

{ question: "In which tissue type are cells most tightly packed with little extracellular material?", options: ["Epithelial tissue", "Connective tissue", "Muscle tissue", "Nervous tissue"], correctAnswer: "Epithelial tissue", explanation: "Epithelial tissue features cells that are closely packed together with minimal extracellular matrix, forming continuous sheets." },

{ question: "Pseudostratified epithelium is characterized by:", options: ["A single layer of cells with nuclei at different levels", "Multiple uniform layers of cells", "Lack of cellular polarity", "Abundant extracellular matrix"], correctAnswer: "A single layer of cells with nuclei at different levels", explanation: "Despite appearing layered due to varying nuclear positions, pseudostratified epithelium is a single continuous layer of cells." },

{ question: "Which connective tissue type is the most abundant in the body?", options: ["Loose connective tissue", "Dense connective tissue", "Adipose tissue", "Reticular tissue"], correctAnswer: "Loose connective tissue", explanation: "Loose connective tissue is widespread and provides support, elasticity, and a framework for organs." },

{ question: "The basement membrane is most closely associated with which type of tissue?", options: ["Epithelial tissue", "Muscle tissue", "Nervous tissue", "Connective tissue"], correctAnswer: "Epithelial tissue", explanation: "The basement membrane underlies epithelial tissues, providing support and anchoring the cells to underlying connective tissue." },

{ question: "Which type of muscle tissue is found in the walls of internal organs such as the intestines?", options: ["Smooth muscle", "Skeletal muscle", "Cardiac muscle", "Striated muscle"], correctAnswer: "Smooth muscle", explanation: "Smooth muscle is non-striated and involuntary, and it lines internal organs to facilitate movements like peristalsis." },

{ question: "Which function is the primary role of nervous tissue?", options: ["Conducting electrical impulses", "Producing movement", "Providing structural support", "Facilitating absorption"], correctAnswer: "Conducting electrical impulses", explanation: "Nervous tissue is specialized for the rapid transmission of signals throughout the body." },

{ question: "What is the correct hierarchical order of biological organization?", options: ["Cells, Tissues, Organs, Organ systems", "Tissues, Cells, Organs, Organ systems", "Cells, Organs, Tissues, Organ systems", "Organs, Tissues, Cells, Organ systems"], correctAnswer: "Cells, Tissues, Organs, Organ systems", explanation: "The proper order of biological organization from simplest to most complex is: cells, tissues, organs, and organ systems." },

{ question: "Which organ system is primarily responsible for protecting the body from external harm?", options: ["Integumentary system", "Skeletal system", "Nervous system", "Respiratory system"], correctAnswer: "Integumentary system", explanation: "The integumentary system, including the skin and its accessory structures, acts as a barrier protecting the body from external environmental hazards." },

{ question: "The skeletal system is divided into the axial and appendicular skeletons. Which of the following is part of the axial skeleton?", options: ["Skull", "Humerus", "Femur", "Pelvis"], correctAnswer: "Skull", explanation: "The skull is a component of the axial skeleton, which also includes the vertebral column and rib cage." },

{ question: "Which organ system is primarily responsible for the transportation of nutrients and gases throughout the body?", options: [ "Digestive system", "Cardiovascular system", "Nervous system", "Muscular system"], correctAnswer: "Cardiovascular system", explanation: "The cardiovascular system circulates blood, thereby transporting oxygen, nutrients, and waste products throughout the body." },

{ question: "Which system is directly involved in the exchange of oxygen and carbon dioxide?", options: ["Respiratory system", "Digestive system", "Urinary system", "Endocrine system"], correctAnswer: "Respiratory system", explanation: "The respiratory system is designed to facilitate gas exchange between the body and the external environment." },

{ question: "Which of the following is a clear example of an organ system?", options: ["Muscular system", "Cell membrane", "Cytoplasm", "Ribosomes"], correctAnswer: "Muscular system", explanation: "The muscular system, which includes various muscle tissues working together, is an organ system responsible for movement." },

{ question: "Which organ system works in close coordination with the nervous system to regulate body functions?", options: ["Endocrine system", "Integumentary system", "Skeletal system", "Digestive system"], correctAnswer: "Endocrine system", explanation: "The endocrine system secretes hormones that interact with the nervous system to regulate metabolism, growth, and other body functions." },

{ question: "What is the primary function of the digestive system?", options: ["Pumping blood", "Breakdown and absorption of nutrients",  "Structural support", "Impulse conduction"], correctAnswer: "Breakdown and absorption of nutrients", explanation: "The digestive system is responsible for digesting food, absorbing nutrients, and eliminating waste." },

{ question: "Which organ system is primarily responsible for the production and excretion of urine?", options: ["Urinary system", "Reproductive system", "Nervous system", "Cardiovascular system"], correctAnswer: "Urinary system", explanation: "The urinary system filters blood and removes waste products in the form of urine." },

{ question: "What is the main function of the lymphatic system?", options: ["Immune response and fluid balance", "Gas exchange", "Movement", "Hormone production"], correctAnswer: "Immune response and fluid balance", explanation: "The lymphatic system helps defend against infections and maintains the balance of bodily fluids." },

{ question: "Which structure is the primary site of sperm production in the male reproductive system?", options: ["Testes", "Epididymis", "Seminal vesicles", "Prostate gland"], correctAnswer: "Testes", explanation: "The testes are responsible for producing sperm and secreting testosterone, which is crucial for male reproductive function." },

{ question: "Where do sperm mature and get stored before ejaculation?", options: ["Vas deferens", "Urethra", "Epididymis", "Seminal vesicle"], correctAnswer: "Epididymis", explanation: "The epididymis is the coiled tube where sperm mature and are stored until ejaculation." },

{ question: "Which gland contributes a fructose-rich fluid to semen, aiding in sperm motility?", options: ["Seminal vesicle", "Prostate gland", "Bulbourethral gland", "Pituitary gland"], correctAnswer: "Seminal vesicle", explanation: "Seminal vesicles secrete a fluid that provides energy and facilitates sperm movement." },

{ question: "In the female reproductive system, where does fertilization most commonly occur?", options: ["Fallopian tube", "Uterus", "Vagina", "Ovary"], correctAnswer: "Fallopian tube", explanation: "Fertilization typically occurs in the fallopian tube, particularly in its widened ampullary region." },

{ question: "What is the primary function of the ovary?", options: ["Production of oocytes and secretion of hormones", "Transport of sperm", "Storage of seminal fluid", "Nutrient absorption"], correctAnswer: "Production of oocytes and secretion of hormones", explanation: "Ovaries produce eggs (oocytes) and secrete hormones such as estrogen and progesterone that regulate the menstrual cycle." },

{ question: "Which structure in the female reproductive system is primarily responsible for housing and nurturing a developing embryo?", options: [ "Vagina", "Fallopian tube", "Ovary", "Uterus"], correctAnswer: "Uterus", explanation: "The uterus provides the environment necessary for implantation and growth of the embryo during pregnancy." },

{ question: "The clitoris is primarily involved in which of the following functions?", options: ["Sexual arousal", "Egg production", "Urine storage", "Hormone secretion"], correctAnswer: "Sexual arousal", explanation: "The clitoris is a highly sensitive structure that plays a key role in female sexual arousal." },

{ question: "Which external structure is part of the female reproductive system?", options: [ "Uterus","Vulva", "Fallopian tube", "Ovary"], correctAnswer: "Vulva", explanation: "The vulva comprises the external genitalia of the female reproductive system." },

{ question: "What is the function of the bulbourethral glands in the male reproductive system?", options: ["Produce sperm", "Store testosterone", "Secrete a lubricating fluid", "Neutralize acidic urine"], correctAnswer: "Secrete a lubricating fluid", explanation: "The bulbourethral glands produce pre-ejaculate fluid that lubricates the urethra and helps clear residual urine." },

{ question: "Which statement best describes the primary difference between the male and female reproductive systems?", options: ["Male systems produce sperm and have external genitalia, while female systems produce oocytes and support gestation", "Both systems perform identical functions", "Female systems produce sperm, while male systems produce oocytes", "There is no structural difference between male and female reproductive systems"], correctAnswer: "Male systems produce sperm and have external genitalia, while female systems produce oocytes and support gestation", explanation: "This statement accurately summarizes the main functional and anatomical differences between the male and female reproductive systems." }








],
},














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
    }, 3250);
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
  
  
  
  
  