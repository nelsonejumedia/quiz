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
   
   function toggleSidebar() {
     sidebar.classList.toggle('open');
 }

 menuButton.addEventListener('click', toggleSidebar);
 closeSidebarButton.addEventListener('click', toggleSidebar);
  
  
  
  
  
  
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
   
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// // Lower Limbs.////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      {
        category: "Lower Limbs",
        questions: [
          
    {
      question: "What is the main function of the femur?",
      options: [
        "To connect the spine to the upper limb",
        "To support the body's weight during standing and walking",
        "To protect the internal pelvic organs",
        "To aid in respiration"
      ],
      correctAnswer: "To support the body's weight during standing and walking",
      explanation: "The femur is the longest and strongest bone in the body, essential for supporting body weight during movement."
    },
    {
      question: "Which bone is located laterally to the tibia in the leg?",
      options: [
        "Fibula",
        "Femur",
        "Patella",
        "Talus"
      ],
      correctAnswer: "Fibula",
      explanation: "The fibula is the smaller bone of the leg, located laterally to the tibia and contributing to the ankle joint."
    },
    {
      question: "Which joint connects the lower limb to the pelvis?",
      options: [
        "Knee joint",
        "Ankle joint",
        "Hip joint",
        "Tibiofibular joint"
      ],
      correctAnswer: "Hip joint",
      explanation: "The hip joint is a ball-and-socket joint connecting the femur to the pelvic girdle, providing a wide range of motion."
    },
    {
      question: "What type of joint is the knee joint?",
      options: [
        "Hinge joint",
        "Ball-and-socket joint",
        "Pivot joint",
        "Saddle joint"
      ],
      correctAnswer: "Hinge joint",
      explanation: "The knee joint is a hinge joint, allowing flexion and extension movements."
    },
    {
      question: "What is the primary function of the gluteus maximus muscle?",
      options: [
        "Flexion of the hip",
        "Extension of the hip",
        "Adduction of the thigh",
        "Rotation of the tibia"
      ],
      correctAnswer: "Extension of the hip",
      explanation: "The gluteus maximus is responsible for extending the hip, especially during activities like standing and walking."
    },
    {
      question: "Which nerve innervates the muscles of the anterior thigh?",
      options: [
        "Sciatic nerve",
        "Femoral nerve",
        "Obturator nerve",
        "Tibial nerve"
      ],
      correctAnswer: "Femoral nerve",
      explanation: "The femoral nerve supplies the muscles of the anterior thigh, including the quadriceps."
    },
    {
      question: "Which bone forms the medial malleolus of the ankle?",
      options: [
        "Fibula",
        "Tibia",
        "Talus",
        "Calcaneus"
      ],
      correctAnswer: "Tibia",
      explanation: "The tibia forms the medial malleolus, which is the bony prominence on the inner side of the ankle."
    },
    {
      question: "What type of movement is produced by the quadriceps femoris muscle?",
      options: [
        "Flexion of the hip",
        "Extension of the knee",
        "Adduction of the thigh",
        "Flexion of the knee"
      ],
      correctAnswer: "Extension of the knee",
      explanation: "The quadriceps femoris is the main extensor muscle of the knee."
    },
    {
      question: "What is the primary function of the tibialis anterior muscle?",
      options: [
        "Plantarflexion of the foot",
        "Dorsiflexion of the foot",
        "Extension of the toes",
        "Flexion of the knee"
      ],
      correctAnswer: "Dorsiflexion of the foot",
      explanation: "The tibialis anterior muscle is responsible for dorsiflexion, lifting the foot upward."
    },
    {
      question: "Which artery supplies blood to the lower limb?",
      options: [
        "Brachial artery",
        "Femoral artery",
        "Subclavian artery",
        "Axillary artery"
      ],
      correctAnswer: "Femoral artery",
      explanation: "The femoral artery is the main blood vessel supplying oxygenated blood to the lower limb."
    },
    {
      question: "What is the primary role of the popliteal fossa?",
      options: [
        "To protect the patella",
        "To house neurovascular structures behind the knee",
        "To support the ankle joint",
        "To control foot movements"
      ],
      correctAnswer: "To house neurovascular structures behind the knee",
      explanation: "The popliteal fossa is a fat-filled area at the back of the knee, containing important blood vessels and nerves."
    },
    {
      question: "What action does the gastrocnemius muscle primarily perform?",
      options: [
        "Dorsiflexion of the foot",
        "Plantarflexion of the foot",
        "Extension of the knee",
        "Flexion of the hip"
      ],
      correctAnswer: "Plantarflexion of the foot",
      explanation: "The gastrocnemius is a powerful muscle responsible for plantarflexing the foot at the ankle joint."
    },
    {
      question: "Which muscle group is primarily responsible for thigh adduction?",
      options: [
        "Quadriceps",
        "Hamstrings",
        "Adductors",
        "Gluteals"
      ],
      correctAnswer: "Adductors",
      explanation: "The adductor muscles of the thigh are responsible for bringing the thigh toward the midline."
    },
    {
      question: "What structure connects the patella to the tibia?",
      options: [
        "Patellar ligament",
        "Anterior cruciate ligament",
        "Iliotibial band",
        "Medial collateral ligament"
      ],
      correctAnswer: "Patellar ligament",
      explanation: "The patellar ligament connects the patella to the tibial tuberosity, aiding in knee extension."
    },
    {
      question: "Which nerve is affected in sciatica?",
      options: [
        "Femoral nerve",
        "Sciatic nerve",
        "Obturator nerve",
        "Tibial nerve"
      ],
      correctAnswer: "Sciatic nerve",
      explanation: "Sciatica is caused by compression or irritation of the sciatic nerve, leading to pain along its course."
    },
    {
      question: "Which of the following muscles is a flexor of the hip?",
      options: [
        "Rectus femoris",
        "Biceps femoris",
        "Sartorius",
        "Gastrocnemius"
      ],
      correctAnswer: "Rectus femoris",
      explanation: "The rectus femoris muscle is one of the quadriceps and acts as a flexor of the hip and an extensor of the knee."
    },
    {
      question: "Which ligament stabilizes the lateral side of the ankle?",
      options: [
        "Deltoid ligament",
        "Lateral collateral ligament",
        "Anterior talofibular ligament",
        "Posterior cruciate ligament"
      ],
      correctAnswer: "Anterior talofibular ligament",
      explanation: "The anterior talofibular ligament is the most commonly injured ligament in ankle sprains."
    },
    {
      question: "What is the function of the iliotibial band?",
      options: [
        "To stabilize the hip and knee joints",
        "To protect the sciatic nerve",
        "To assist in flexing the foot",
        "To support the patella"
      ],
      correctAnswer: "To stabilize the hip and knee joints",
      explanation: "The iliotibial band runs along the lateral side of the thigh, helping stabilize the hip and knee during movement."
    },
    {
      question: "Which structure forms the lateral malleolus of the ankle?",
      options: [
        "Tibia",
        "Fibula",
        "Talus",
        "Navicular"
      ],
      correctAnswer: "Fibula",
      explanation: "The lateral malleolus is formed by the distal end of the fibula and is located on the outer side of the ankle."
    },
    {
      question: "What type of movement is dorsiflexion?",
      options: [
        "Lifting the foot upward toward the shin",
        "Pointing the toes downward",
        "Turning the foot outward",
        "Rotating the knee"
      ],
      correctAnswer: "Lifting the foot upward toward the shin",
      explanation: "Dorsiflexion is the action of raising the foot upward toward the shin, primarily controlled by the tibialis anterior."
    },
  
  
  
    {
      question: "Which muscle is primarily responsible for hip abduction?",
      options: [
        "Gluteus maximus",
        "Gluteus medius",
        "Piriformis",
        "Obturator internus"
      ],
      correctAnswer: "Gluteus medius",
      explanation: "The gluteus medius is the primary muscle responsible for abducting the hip."
    },
    {
      question: "What nerve innervates the adductor muscles of the thigh?",
      options: [
        "Obturator nerve",
        "Femoral nerve",
        "Sciatic nerve",
        "Tibial nerve"
      ],
      correctAnswer: "Obturator nerve",
      explanation: "The obturator nerve supplies the adductor muscles of the thigh, facilitating adduction."
    },
    {
      question: "What action does the biceps femoris muscle perform?",
      options: [
        "Hip flexion",
        "Knee extension",
        "Knee flexion",
        "Hip adduction"
      ],
      correctAnswer: "Knee flexion",
      explanation: "The biceps femoris is a hamstring muscle responsible for knee flexion."
    },
    {
      question: "Which ligament provides stability to the medial aspect of the knee?",
      options: [
        "Medial collateral ligament",
        "Lateral collateral ligament",
        "Anterior cruciate ligament",
        "Posterior cruciate ligament"
      ],
      correctAnswer: "Medial collateral ligament",
      explanation: "The medial collateral ligament provides stability to the inner side of the knee joint."
    },
    {
      question: "Which artery is the primary blood supply to the femoral head?",
      options: [
        "Obturator artery",
        "Femoral artery",
        "Deep femoral artery",
        "Medial circumflex femoral artery"
      ],
      correctAnswer: "Medial circumflex femoral artery",
      explanation: "The medial circumflex femoral artery supplies blood to the head and neck of the femur."
    },
    {
      question: "What is the function of the anterior cruciate ligament (ACL)?",
      options: [
        "Prevents posterior displacement of the tibia",
        "Prevents anterior displacement of the tibia",
        "Supports lateral rotation of the femur",
        "Facilitates hip flexion"
      ],
      correctAnswer: "Prevents anterior displacement of the tibia",
      explanation: "The ACL prevents the tibia from sliding forward relative to the femur."
    },
    {
      question: "Which muscle group extends the knee?",
      options: [
        "Hamstrings",
        "Quadriceps",
        "Adductors",
        "Gluteals"
      ],
      correctAnswer: "Quadriceps",
      explanation: "The quadriceps group, particularly the rectus femoris and vastus muscles, extends the knee."
    },
    {
      question: "Which structure separates the greater and lesser sciatic foramina?",
      options: [
        "Sacrotuberous ligament",
        "Sacrotendinous ligament",
        "Obturator membrane",
        "Sacrotuberous ligament"
      ],
      correctAnswer: "Sacrotuberous ligament",
      explanation: "The sacrotuberous ligament separates the greater and lesser sciatic foramina."
    },
    {
      question: "What nerve innervates the posterior compartment of the leg?",
      options: [
        "Superficial fibular nerve",
        "Deep fibular nerve",
        "Tibial nerve",
        "Femoral nerve"
      ],
      correctAnswer: "Tibial nerve",
      explanation: "The tibial nerve supplies the muscles of the posterior compartment, including those responsible for plantarflexion."
    },
    {
      question: "Which muscle is primarily responsible for plantarflexion of the foot?",
      options: [
        "Tibialis anterior",
        "Gastrocnemius",
        "Soleus",
        "Fibularis longus"
      ],
      correctAnswer: "Gastrocnemius",
      explanation: "The gastrocnemius, together with the soleus, forms the calf muscle group responsible for plantarflexion."
    },
    {
      question: "Which ligament prevents hyperextension of the hip joint?",
      options: [
        "Ischiofemoral ligament",
        "Iliofemoral ligament",
        "Pubofemoral ligament",
        "Anterior cruciate ligament"
      ],
      correctAnswer: "Iliofemoral ligament",
      explanation: "The iliofemoral ligament is one of the strongest ligaments in the body, preventing hyperextension of the hip."
    },
    {
      question: "Which muscle stabilizes the pelvis during walking?",
      options: [
        "Gluteus maximus",
        "Tensor fasciae latae",
        "Gluteus medius",
        "Piriformis"
      ],
      correctAnswer: "Gluteus medius",
      explanation: "The gluteus medius plays a crucial role in stabilizing the pelvis during gait."
    },
    {
      question: "What is the primary action of the piriformis muscle?",
      options: [
        "Medial rotation of the thigh",
        "Lateral rotation of the thigh",
        "Extension of the hip",
        "Flexion of the knee"
      ],
      correctAnswer: "Lateral rotation of the thigh",
      explanation: "The piriformis laterally rotates the thigh at the hip joint."
    },
    {
      question: "Which artery passes through the adductor hiatus?",
      options: [
        "Obturator artery",
        "Femoral artery",
        "Popliteal artery",
        "Deep femoral artery"
      ],
      correctAnswer: "Femoral artery",
      explanation: "The femoral artery passes through the adductor hiatus to become the popliteal artery."
    },
    {
      question: "Which nerve supplies sensation to the medial side of the leg?",
      options: [
        "Saphenous nerve",
        "Femoral nerve",
        "Obturator nerve",
        "Common fibular nerve"
      ],
      correctAnswer: "Saphenous nerve",
      explanation: "The saphenous nerve, a branch of the femoral nerve, provides cutaneous sensation to the medial leg."
    },
    {
      question: "Which muscle is part of the deep gluteal region?",
      options: [
        "Gluteus maximus",
        "Tensor fasciae latae",
        "Piriformis",
        "Sartorius"
      ],
      correctAnswer: "Piriformis",
      explanation: "The piriformis is part of the deep muscles in the gluteal region, responsible for lateral rotation of the thigh."
    },
    {
      question: "What is the primary movement at the subtalar joint?",
      options: [
        "Dorsiflexion",
        "Plantarflexion",
        "Inversion and eversion",
        "Flexion and extension"
      ],
      correctAnswer: "Inversion and eversion",
      explanation: "The subtalar joint is responsible for inversion and eversion movements of the foot."
    },
    {
      question: "Which ligament is commonly injured in ankle sprains?",
      options: [
        "Medial collateral ligament",
        "Anterior talofibular ligament",
        "Deltoid ligament",
        "Calcaneofibular ligament"
      ],
      correctAnswer: "Anterior talofibular ligament",
      explanation: "The anterior talofibular ligament is the most frequently injured ligament in ankle sprains."
    },
    {
      question: "Which structure forms the floor of the popliteal fossa?",
      options: [
        "Popliteus muscle",
        "Gastrocnemius muscle",
        "Soleus muscle",
        "Plantaris muscle"
      ],
      correctAnswer: "Popliteus muscle",
      explanation: "The popliteus muscle forms the floor of the popliteal fossa, which contains important neurovascular structures."
    },
    {
      question: "Which vein drains blood from the deep veins of the thigh?",
      options: [
        "Small saphenous vein",
        "Femoral vein",
        "Great saphenous vein",
        "Popliteal vein"
      ],
      correctAnswer: "Femoral vein",
      explanation: "The femoral vein drains blood from the deep veins of the thigh and becomes the external iliac vein."
    },
    {
      question: "Which muscles are primarily involved in dorsiflexion of the foot?",
      options: [
        "Gastrocnemius and soleus",
        "Tibialis anterior and extensor digitorum longus",
        "Peroneus longus and peroneus brevis",
        "Flexor digitorum longus and flexor hallucis longus"
      ],
      correctAnswer: "Tibialis anterior and extensor digitorum longus",
      explanation: "Dorsiflexion of the foot is performed by muscles in the anterior compartment of the leg, including the tibialis anterior."
    },
    {
      question: "Which ligament helps prevent valgus stress on the knee?",
      options: [
        "Medial collateral ligament",
        "Anterior cruciate ligament",
        "Lateral collateral ligament",
        "Posterior cruciate ligament"
      ],
      correctAnswer: "Medial collateral ligament",
      explanation: "The medial collateral ligament (MCL) helps prevent valgus forces that push the knee inward."
    },
    {
      question: "Which muscles make up the triceps surae?",
      options: [
        "Gastrocnemius and soleus",
        "Tibialis anterior and extensor digitorum longus",
        "Peroneus longus and peroneus brevis",
        "Flexor digitorum longus and flexor hallucis longus"
      ],
      correctAnswer: "Gastrocnemius and soleus",
      explanation: "The triceps surae is made up of the gastrocnemius and soleus muscles, which together are responsible for plantarflexion of the foot."
    },
    {
      question: "Which nerve is commonly compressed in tarsal tunnel syndrome?",
      options: [
        "Tibial nerve",
        "Deep fibular nerve",
        "Superficial fibular nerve",
        "Sural nerve"
      ],
      correctAnswer: "Tibial nerve",
      explanation: "Tarsal tunnel syndrome occurs when the tibial nerve is compressed as it passes through the tarsal tunnel."
    },
    {
      question: "Which artery provides the main blood supply to the anterior compartment of the leg?",
      options: [
        "Posterior tibial artery",
        "Popliteal artery",
        "Anterior tibial artery",
        "Femoral artery"
      ],
      correctAnswer: "Anterior tibial artery",
      explanation: "The anterior tibial artery supplies blood to the muscles of the anterior compartment of the leg."
    },
    {
      question: "Which muscle acts as the primary hip flexor?",
      options: [
        "Rectus femoris",
        "Iliopsoas",
        "Gluteus maximus",
        "Biceps femoris"
      ],
      correctAnswer: "Iliopsoas",
      explanation: "The iliopsoas is the strongest hip flexor, comprising the psoas major and iliacus muscles."
    },
    {
      question: "Which structure stabilizes the lateral side of the knee?",
      options: [
        "Medial collateral ligament",
        "Lateral collateral ligament",
        "Anterior cruciate ligament",
        "Patellar ligament"
      ],
      correctAnswer: "Lateral collateral ligament",
      explanation: "The lateral collateral ligament stabilizes the outer side of the knee and prevents varus forces."
    },
    {
      question: "Which bone in the foot articulates with the tibia to form the ankle joint?",
      options: [
        "Talus",
        "Calcaneus",
        "Navicular",
        "Cuboid"
      ],
      correctAnswer: "Talus",
      explanation: "The talus articulates with the tibia and fibula to form the ankle joint, allowing dorsiflexion and plantarflexion."
    },
    {
      question: "What is the function of the plantar fascia in the foot?",
      options: [
        "Support the arch of the foot",
        "Allow movement of the toes",
        "Protect the ankle joint",
        "Facilitate blood circulation"
      ],
      correctAnswer: "Support the arch of the foot",
      explanation: "The plantar fascia is a thick band of tissue that supports the arch of the foot and helps absorb shock."
    },
    {
      question: "Which muscles are involved in inversion of the foot?",
      options: [
        "Tibialis anterior and tibialis posterior",
        "Peroneus longus and peroneus brevis",
        "Extensor digitorum longus and extensor hallucis longus",
        "Flexor digitorum longus and flexor hallucis longus"
      ],
      correctAnswer: "Tibialis anterior and tibialis posterior",
      explanation: "The tibialis anterior and posterior muscles work together to invert the foot, turning the sole inward."
    },
  
  
  
  
  
  
  ],
      },
  
  
  
  
  
  
  
  
  
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// // Lower limbs Clinical Cases.////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      {
        category: "Lower Limbs: Clinical Cases",
        questions: [
          {
            question:
              "A 45-year-old male presents with fractures of both the tibia and fibula, and foot drop with normal eversion. Which nerve is most likely injured?",
            options: [
              "Tibial",
              "Common fibular (peroneal)",
              "Superficial fibular (peroneal)",
              "Saphenous",
              "Deep fibular (peroneal)",
            ],
            correctAnswer: "Common fibular (peroneal)",
          },
          {
            question:
              "A 75-year-old man presents with knee pain and osteoarthritis, and his knees are bowed outward. Which term best describes the condition?",
            options: [
              "Genu varus",
              "Genu valgus",
              "Coxa varus",
              "Coxa valgus",
              "Hallux valgus",
            ],
            correctAnswer: "Genu varus",
          },
          {
            question:
              "The patellar reflex is reduced in a 33-year-old diabetic patient. Which muscle’s tendon is stretched during the patellar reflex?",
            options: [
              "Quadriceps femoris",
              "Quadratus femoris",
              "Sartorius",
              "Pectineus",
              "Biceps femoris",
            ],
            correctAnswer: "Quadriceps femoris",
          },
  
          {
            question:
              "A 31-year-old female presents with Bell’s palsy and undergoes a nerve graft procedure. Post-surgery, there is no sensation on the lateral side of her foot. What nerve was used for the graft?",
            options: [
              "Superficial fibular (peroneal)",
              "Tibial",
              "Common fibular (peroneal)",
              "Sural",
              "Saphenous",
            ],
            correctAnswer: "Sural",
          },
          {
            question:
              "A 45-year-old male suffers from foot drop with normal eversion after a tibia and fibula fracture. Which nerve is most likely injured?",
            options: [
              "Tibial",
              "Common fibular (peroneal)",
              "Superficial fibular (peroneal)",
              "Saphenous",
              "Deep fibular (peroneal)",
            ],
            correctAnswer: "Common fibular (peroneal)",
          },
          {
            question:
              "A 75-year-old man has bowed knees due to osteoarthritis. What is the term for this condition?",
            options: [
              "Genu varus",
              "Genu valgus",
              "Coxa varus",
              "Coxa valgus",
              "Hallux valgus",
            ],
            correctAnswer: "Genu varus",
          },
          {
            question: "Which muscle is tested during the patellar reflex?",
            options: [
              "Quadriceps femoris",
              "Quadratus femoris",
              "Sartorius",
              "Pectineus",
              "Biceps femoris",
            ],
            correctAnswer: "Quadriceps femoris",
          },
          {
            question:
              "A 10-year-old girl is diagnosed with Osgood-Schlatter disease. Which bone structure is affected?",
            options: [
              "Medial condyle of tibia",
              "Posterior intercondylar area",
              "Intercondylar eminence",
              "Tibial tuberosity",
              "Anterolateral tibial tubercle (Gerdy’s tubercle)",
            ],
            correctAnswer: "Tibial tuberosity",
          },
          {
            question:
              "A 55-year-old woman with foot drop experiences numbness between the first and second toes. What nerve is injured?",
            options: [
              "Common fibular (peroneal)",
              "Deep fibular (peroneal)",
              "Sural",
              "Tibial",
              "Superficial fibular (peroneal)",
            ],
            correctAnswer: "Deep fibular (peroneal)",
          },
          {
            question:
              "A 49-year-old man suffers from pain due to compression of the tibial nerve in the popliteal fossa. Which movement is affected?",
            options: [
              "Dorsiflexion of the foot",
              "Flexion of the thigh",
              "Extension of the digits",
              "Extension of the leg",
              "Plantar flexion of the foot",
            ],
            correctAnswer: "Plantar flexion of the foot",
          },
          {
            question:
              "A 19-year-old football player tears his medial collateral ligament. Which structure is most likely also injured?",
            options: [
              "Medial meniscus",
              "Anterior cruciate ligament",
              "Lateral meniscus",
              "Posterior cruciate ligament",
              "Tendon of the semitendinosus",
            ],
            correctAnswer: "Medial meniscus",
          },
          {
            question:
              "A patient experiences a positive Trendelenburg sign. Which nerve is injured?",
            options: [
              "Femoral nerve",
              "Sciatic nerve",
              "Superior gluteal nerve",
              "Obturator nerve",
              "Inferior gluteal nerve",
            ],
            correctAnswer: "Superior gluteal nerve",
          },
          {
            question:
              "A man is diagnosed with piriformis syndrome, compressing which nerve?",
            options: [
              "Tibial nerve",
              "Sciatic nerve",
              "Common fibular (peroneal)",
              "Femoral nerve",
              "Obturator nerve",
            ],
            correctAnswer: "Sciatic nerve",
          },
          {
            question:
              "A woman with gonorrheal arthritis undergoes knee aspiration. The needle passes through which muscle?",
            options: [
              "Adductor magnus",
              "Short head of biceps femoris",
              "Rectus femoris",
              "Sartorius",
              "Vastus lateralis",
            ],
            correctAnswer: "Vastus lateralis",
          },
          {
            question:
              "A 75-year-old man is diagnosed with avascular necrosis of the femoral head. Which artery is most likely injured?",
            options: [
              "Acetabular branch of obturator",
              "Deep circumflex iliac",
              "Descending branch of lateral circumflex femoral",
              "First perforating branch of profunda femoris",
              "Ascending branch of medial circumflex femoral",
            ],
            correctAnswer: "Ascending branch of medial circumflex femoral",
          },
          {
            question:
              "A 29-year-old male suffers from meralgia paresthetica. Which nerve is affected?",
            options: [
              "Superior gluteal",
              "Femoral",
              "Obturator",
              "Lateral femoral cutaneous",
              "Tibial",
            ],
            correctAnswer: "Lateral femoral cutaneous",
          },
          {
            question:
              "Which nerve is most likely affected in a patient with difficulty rising from a seated position?",
            options: [
              "Superior gluteal nerve",
              "Inferior gluteal nerve",
              "Sciatic nerve",
              "Femoral nerve",
              "Obturator nerve",
            ],
            correctAnswer: "Inferior gluteal nerve",
          },
          {
            question: "Injury to which nerve causes foot drop?",
            options: [
              "Tibial nerve",
              "Common fibular (peroneal) nerve",
              "Sciatic nerve",
              "Femoral nerve",
              "Obturator nerve",
            ],
            correctAnswer: "Common fibular (peroneal) nerve",
          },
          {
            question:
              "A 49-year-old man with a torn medial meniscus undergoes surgery. Which artery supplies the head of the femur in childhood but not in adults?",
            options: [
              "Superior gluteal",
              "Inferior gluteal",
              "Internal pudendal",
              "Obturator",
              "Lateral circumflex femoral",
            ],
            correctAnswer: "Obturator",
          },
  
          {
            question:
              "A 31-year-old female with Bell’s palsy undergoes a nerve graft procedure. Post-surgery, she has no sensation on the lateral side of her foot. Which nerve was likely used for the graft?",
            options: [
              "Superficial fibular",
              "Tibial",
              "Common fibular",
              "Sural",
              "Saphenous",
            ],
            correctAnswer: "Sural",
          },
          {
            question:
              "A 10-year-old girl is diagnosed with Osgood-Schlatter disease. Which bony structure is affected?",
            options: [
              "Medial condyle of tibia",
              "Posterior intercondylar area",
              "Intercondylar eminence",
              "Tibial tuberosity",
              "Anterolateral tibial tubercle",
            ],
            correctAnswer: "Tibial tuberosity",
          },
          {
            question:
              "A patient with osteoarthritis presents with bowing of the knees. What term describes this condition?",
            options: [
              "Genu varus",
              "Genu valgus",
              "Coxa varus",
              "Coxa valgus",
              "Hallux valgus",
            ],
            correctAnswer: "Genu varus",
          },
          {
            question: "In the patellar reflex, which muscle is stretched?",
            options: [
              "Quadriceps femoris",
              "Quadratus femoris",
              "Sartorius",
              "Pectineus",
              "Biceps femoris",
            ],
            correctAnswer: "Quadriceps femoris",
          },
          {
            question:
              "A patient with common fibular nerve injury experiences foot drop but has normal eversion. Which nerve is likely injured?",
            options: [
              "Tibial",
              "Common fibular",
              "Superficial fibular",
              "Saphenous",
              "Deep fibular",
            ],
            correctAnswer: "Common fibular",
          },
          {
            question:
              "A man experiences a positive Trendelenburg sign after a motorcycle crash. Which nerve is injured?",
            options: [
              "Superior gluteal",
              "Inferior gluteal",
              "Sciatic",
              "Femoral",
              "Obturator",
            ],
            correctAnswer: "Superior gluteal",
          },
          {
            question:
              "Which nerve is responsible for causing foot drop in a patient?",
            options: [
              "Common fibular",
              "Tibial",
              "Sciatic",
              "Femoral",
              "Obturator",
            ],
            correctAnswer: "Common fibular",
          },
          {
            question:
              "A 34-year-old patient experiences knee locking and pain. Which structure is most likely damaged?",
            options: [
              "Anterior cruciate ligament",
              "Medial meniscus",
              "Lateral meniscus",
              "Posterior cruciate ligament",
              "Tendon of semitendinosus",
            ],
            correctAnswer: "Medial meniscus",
          },
          {
            question:
              "A patient presents with severe hip pain and a positive MRI for avascular necrosis. Which artery is likely injured?",
            options: [
              "Acetabular branch of obturator",
              "Deep circumflex iliac",
              "Ascending branch of medial circumflex femoral",
              "First perforating branch of profunda femoris",
              "Descending branch of lateral circumflex femoral",
            ],
            correctAnswer: "Ascending branch of medial circumflex femoral",
          },
          {
            question:
              "A patient has difficulty unlocking the knee joint to flex the leg. Which muscle is most likely affected?",
            options: [
              "Popliteus",
              "Biceps femoris",
              "Gastrocnemius",
              "Semimembranosus",
              "Rectus femoris",
            ],
            correctAnswer: "Popliteus",
          },
          {
            question:
              "A 55-year-old woman experiences numbness between the first and second toes after injury. Which nerve is affected?",
            options: [
              "Deep fibular",
              "Common fibular",
              "Superficial fibular",
              "Sural",
              "Tibial",
            ],
            correctAnswer: "Deep fibular",
          },
          {
            question:
              "A 45-year-old man presents with a Baker’s cyst in the popliteal fossa, compressing the tibial nerve. Which movement is most affected?",
            options: [
              "Plantar flexion",
              "Dorsiflexion",
              "Extension of the leg",
              "Flexion of the thigh",
              "Extension of the digits",
            ],
            correctAnswer: "Plantar flexion",
          },
          {
            question:
              "A man sustains a Pott’s fracture. What ligament is most likely injured?",
            options: [
              "Deltoid ligament",
              "Calcaneofibular ligament",
              "Spring ligament",
              "Plantar ligament",
              "Long plantar ligament",
            ],
            correctAnswer: "Deltoid ligament",
          },
          {
            question:
              "A 43-year-old man with gonococcal arthritis undergoes a knee aspiration. Which muscle does the needle pass through?",
            options: [
              "Vastus lateralis",
              "Sartorius",
              "Rectus femoris",
              "Adductor magnus",
              "Short head of biceps femoris",
            ],
            correctAnswer: "Vastus lateralis",
          },
          {
            question:
              "A 49-year-old man with a femoral bypass needs regular monitoring. Which artery should be palpated?",
            options: [
              "Dorsalis pedis",
              "Anterior tibial",
              "Deep plantar",
              "Posterior tibial",
              "Popliteal",
            ],
            correctAnswer: "Dorsalis pedis",
          },
          {
            question:
              "A 19-year-old football player is diagnosed with a torn medial collateral ligament. Which structure is most likely also injured?",
            options: [
              "Medial meniscus",
              "Anterior cruciate ligament",
              "Lateral meniscus",
              "Posterior cruciate ligament",
              "Tendon of semitendinosus",
            ],
            correctAnswer: "Medial meniscus",
          },
  
          {
            question:
              "A 31-year-old female presents with loss of sensation on the lateral side of her foot after a successful facial nerve graft procedure. Which nerve was most likely used for the graft?",
            options: [
              "Superficial fibular",
              "Tibial",
              "Common fibular",
              "Sural",
              "Saphenous",
            ],
            correctAnswer: "Sural",
          },
          {
            question:
              "A 45-year-old male has difficulty walking due to a painful lump in the proximal medial thigh. Radiographic and physical examinations reveal a femoral hernia. Through which opening does this hernia extend into the thigh?",
            options: [
              "Femoral ring",
              "Superficial inguinal ring",
              "Deep inguinal ring",
              "Fossa ovalis",
              "Obturator canal",
            ],
            correctAnswer: "Femoral ring",
          },
          {
            question:
              "A 10-year-old girl falls from a tree and is diagnosed with Osgood-Schlatter disease. Which bony structure is affected?",
            options: [
              "Medial condyle of tibia",
              "Posterior intercondylar area",
              "Intercondylar eminence",
              "Tibial tuberosity",
              "Anterolateral tibial tubercle",
            ],
            correctAnswer: "Tibial tuberosity",
          },
          {
            question:
              "A 49-year-old man undergoes coronary bypass surgery using the great saphenous vein. Postoperatively, he reports numbness in the medial leg. Which nerve was likely injured?",
            options: [
              "Common fibular",
              "Superficial fibular",
              "Saphenous",
              "Lateral sural",
              "Tibial",
            ],
            correctAnswer: "Saphenous",
          },
          {
            question:
              "A 22-year-old football player is admitted with lateral ankle pain following an inversion injury. Which ligament is most likely injured?",
            options: [
              "Calcaneonavicular",
              "Calcaneofibular",
              "Long plantar",
              "Short plantar",
              "Deltoid",
            ],
            correctAnswer: "Calcaneofibular",
          },
          {
            question:
              "A 55-year-old woman has foot pain after a bite to the dorsum of the foot. She is diagnosed with dorsalis pedis artery injury. Which condition is expected?",
            options: [
              "Foot drop",
              "Numbness between the first and second toes",
              "Inability to extend the big toe",
              "Weakness in inversion",
              "Clubfoot",
            ],
            correctAnswer: "Numbness between the first and second toes",
          },
          {
            question:
              "A 43-year-old male presents with chronic gonococcal arthritis. A knee aspiration is performed. Through which muscle does the needle pass?",
            options: [
              "Adductor magnus",
              "Short head of biceps femoris",
              "Rectus femoris",
              "Sartorius",
              "Vastus lateralis",
            ],
            correctAnswer: "Vastus lateralis",
          },
          {
            question:
              "A 19-year-old football player suffers a torn medial collateral ligament after a lateral knee hit. Which structure is most likely also injured?",
            options: [
              "Medial meniscus",
              "Anterior cruciate ligament",
              "Lateral meniscus",
              "Posterior cruciate ligament",
              "Tendon of semitendinosus",
            ],
            correctAnswer: "Medial meniscus",
          },
          {
            question:
              "A 75-year-old male with severe knee pain is diagnosed with avascular necrosis of the femoral head. Which artery is most likely injured?",
            options: [
              "Acetabular branch of obturator",
              "Deep circumflex iliac",
              "Ascending branch of medial circumflex femoral",
              "First perforating branch of profunda femoris",
              "Descending branch of lateral circumflex femoral",
            ],
            correctAnswer: "Ascending branch of medial circumflex femoral",
          },
          {
            question:
              "A 34-year-old patient has difficulty unlocking the knee to permit flexion. Which muscle is most likely damaged?",
            options: [
              "Popliteus",
              "Biceps femoris",
              "Gastrocnemius",
              "Semimembranosus",
              "Rectus femoris",
            ],
            correctAnswer: "Popliteus",
          },
          {
            question:
              "A 23-year-old female runner is diagnosed with tarsal tunnel syndrome. Which structure is the most anterior within the tunnel?",
            options: [
              "Tibialis posterior",
              "Flexor digitorum longus",
              "Posterior tibial artery",
              "Tibial nerve",
              "Flexor hallucis longus",
            ],
            correctAnswer: "Tibialis posterior",
          },
          {
            question:
              "A 58-year-old woman with severe foot pain has her plantar calcaneonavicular ligament torn. Which foot condition is most likely?",
            options: [
              "Fallen arch",
              "Foot drop",
              "Inversion sprain",
              "Plantar fasciitis",
              "Pes cavus",
            ],
            correctAnswer: "Fallen arch",
          },
          {
            question:
              "A 45-year-old man suffers from foot drop and normal eversion. Which nerve is injured?",
            options: [
              "Common fibular",
              "Deep fibular",
              "Superficial fibular",
              "Sural",
              "Tibial",
            ],
            correctAnswer: "Common fibular",
          },
          {
            question:
              "A 32-year-old basketball player suffers a Pott’s fracture. Which ligament is most likely injured?",
            options: [
              "Calcaneofibular",
              "Deltoid",
              "Spring",
              "Plantar",
              "Long plantar",
            ],
            correctAnswer: "Deltoid",
          },
          {
            question:
              "A 29-year-old woman develops pain in her lower limb and is diagnosed with piriformis syndrome. Which nerve is most likely compressed?",
            options: ["Femoral", "Sciatic", "Tibial", "Obturator", "Sural"],
            correctAnswer: "Sciatic",
          },
  
          {
            question:
              "A 30-year-old male suffered a superior gluteal nerve injury in a motorcycle crash, leading to a waddling gait and a positive Trendelenburg sign. Which of the following is the most likely finding?",
            options: [
              "Difficulty in standing from a sitting position",
              "The left side of the pelvis droops when weight is supported by the right limb",
              "The right side of the pelvis droops when weight is supported by the left limb",
              "Weakened flexion of the right hip",
              "Difficulty in sitting from a standing position",
            ],
            correctAnswer:
              "The left side of the pelvis droops when weight is supported by the right limb",
          },
        ],
      },
  
      // Lower Limbs Clinical Cases end here
  
  
  
  
  
  
  
  
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////Popliteal Fossa/////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
      {
        category: "Popliteal Fossa",
        questions: [
    {
      question: "Where is the popliteal fossa located?",
      options: [
        "Anterior to the knee joint",
        "Lateral to the ankle",
        "Posterior to the knee joint",
        "Medial to the hip joint"
      ],
      correctAnswer: "Posterior to the knee joint",
      explanation: "The popliteal fossa is a diamond-shaped depression located at the back of the knee joint."
    },
    {
      question: "Which nerve passes through the popliteal fossa?",
      options: [
        "Femoral nerve",
        "Tibial nerve",
        "Obturator nerve",
        "Lateral femoral cutaneous nerve"
      ],
      correctAnswer: "Tibial nerve",
      explanation: "The tibial nerve, a branch of the sciatic nerve, runs through the popliteal fossa."
    },
    {
      question: "What forms the superior lateral boundary of the popliteal fossa?",
      options: [
        "Biceps femoris",
        "Semitendinosus",
        "Sartorius",
        "Gastrocnemius"
      ],
      correctAnswer: "Biceps femoris",
      explanation: "The biceps femoris muscle forms the superior lateral boundary of the popliteal fossa."
    },
    {
      question: "Which artery is found in the popliteal fossa?",
      options: [
        "Popliteal artery",
        "Femoral artery",
        "Posterior tibial artery",
        "Anterior tibial artery"
      ],
      correctAnswer: "Popliteal artery",
      explanation: "The popliteal artery is a continuation of the femoral artery and passes through the popliteal fossa."
    },
    {
      question: "Which vein is located within the popliteal fossa?",
      options: [
        "Great saphenous vein",
        "Popliteal vein",
        "Small saphenous vein",
        "Posterior tibial vein"
      ],
      correctAnswer: "Popliteal vein",
      explanation: "The popliteal vein is found in the popliteal fossa and drains blood from the lower limb."
    },
    {
      question: "Which muscle forms the inferior medial boundary of the popliteal fossa?",
      options: [
        "Semimembranosus",
        "Gastrocnemius (medial head)",
        "Plantaris",
        "Biceps femoris"
      ],
      correctAnswer: "Gastrocnemius (medial head)",
      explanation: "The medial head of the gastrocnemius muscle forms the inferior medial boundary of the popliteal fossa."
    },
    {
      question: "Which structure is most superficial in the popliteal fossa?",
      options: [
        "Popliteal artery",
        "Tibial nerve",
        "Popliteal vein",
        "Common fibular nerve"
      ],
      correctAnswer: "Tibial nerve",
      explanation: "The tibial nerve is the most superficial structure in the popliteal fossa, located just beneath the skin and fascia."
    },
    {
      question: "What is the deepest structure in the popliteal fossa?",
      options: [
        "Tibial nerve",
        "Popliteal vein",
        "Popliteal artery",
        "Sciatic nerve"
      ],
      correctAnswer: "Popliteal artery",
      explanation: "The popliteal artery is the deepest structure in the popliteal fossa, located beneath the popliteal vein and nerves."
    },
    {
      question: "Which nerve provides sensory innervation to the skin over the popliteal fossa?",
      options: [
        "Sural nerve",
        "Tibial nerve",
        "Femoral nerve",
        "Obturator nerve"
      ],
      correctAnswer: "Sural nerve",
      explanation: "The sural nerve provides cutaneous sensory innervation to the skin over the popliteal fossa."
    },
    {
      question: "Which muscle forms the superior medial boundary of the popliteal fossa?",
      options: [
        "Semimembranosus",
        "Biceps femoris",
        "Gastrocnemius (medial head)",
        "Popliteus"
      ],
      correctAnswer: "Semimembranosus",
      explanation: "The semimembranosus muscle forms the superior medial boundary of the popliteal fossa."
    },
    {
      question: "What is the function of the popliteal artery?",
      options: [
        "To supply blood to the thigh",
        "To supply blood to the leg and foot",
        "To drain blood from the knee joint",
        "To provide innervation to the leg muscles"
      ],
      correctAnswer: "To supply blood to the leg and foot",
      explanation: "The popliteal artery supplies oxygenated blood to the leg and foot after passing through the popliteal fossa."
    },
    {
      question: "Which nerve exits the popliteal fossa laterally?",
      options: [
        "Tibial nerve",
        "Common fibular nerve",
        "Obturator nerve",
        "Sciatic nerve"
      ],
      correctAnswer: "Common fibular nerve",
      explanation: "The common fibular nerve exits the popliteal fossa laterally, winding around the neck of the fibula."
    },
    {
      question: "Which nerve bifurcates into the tibial and common fibular nerves within the popliteal fossa?",
      options: [
        "Femoral nerve",
        "Sciatic nerve",
        "Obturator nerve",
        "Lateral femoral cutaneous nerve"
      ],
      correctAnswer: "Sciatic nerve",
      explanation: "The sciatic nerve bifurcates into the tibial and common fibular nerves within the popliteal fossa."
    },
    {
      question: "Which tendon is found medially in the popliteal fossa?",
      options: [
        "Semimembranosus tendon",
        "Biceps femoris tendon",
        "Achilles tendon",
        "Plantaris tendon"
      ],
      correctAnswer: "Semimembranosus tendon",
      explanation: "The semimembranosus tendon is located medially in the popliteal fossa."
    },
    {
      question: "Which muscle acts to unlock the knee joint and is located in the popliteal region?",
      options: [
        "Popliteus",
        "Gastrocnemius",
        "Plantaris",
        "Semimembranosus"
      ],
      correctAnswer: "Popliteus",
      explanation: "The popliteus muscle helps unlock the knee joint by rotating the femur laterally on the tibia."
    },
    {
      question: "What is the clinical significance of the popliteal pulse?",
      options: [
        "It indicates the presence of femoral artery blockage",
        "It is used to assess blood flow to the lower leg",
        "It indicates nerve damage in the knee",
        "It is the primary site for venous blood withdrawal"
      ],
      correctAnswer: "It is used to assess blood flow to the lower leg",
      explanation: "The popliteal pulse is an important clinical indicator of blood flow to the leg and foot."
    },
    {
      question: "Which structure within the popliteal fossa is commonly affected by aneurysms?",
      options: [
        "Popliteal artery",
        "Popliteal vein",
        "Tibial nerve",
        "Common fibular nerve"
      ],
      correctAnswer: "Popliteal artery",
      explanation: "The popliteal artery is prone to aneurysms due to its location and the high pressure exerted during knee movement."
    },
    {
      question: "Which muscle lies deepest in the popliteal region?",
      options: [
        "Popliteus",
        "Semimembranosus",
        "Gastrocnemius",
        "Plantaris"
      ],
      correctAnswer: "Popliteus",
      explanation: "The popliteus muscle is the deepest muscle in the popliteal region, lying directly against the tibia."
    },
    {
      question: "Which bony structure is located at the superior apex of the popliteal fossa?",
      options: [
        "Femur",
        "Patella",
        "Tibia",
        "Fibula"
      ],
      correctAnswer: "Femur",
      explanation: "The distal end of the femur forms the superior apex of the popliteal fossa."
    },
    {
      question: "Which structure is responsible for venous drainage from the popliteal fossa?",
      options: [
        "Popliteal vein",
        "Great saphenous vein",
        "Small saphenous vein",
        "Anterior tibial vein"
      ],
      correctAnswer: "Popliteal vein",
      explanation: "The popliteal vein drains venous blood from the popliteal fossa and continues proximally to become the femoral vein."
    },
  
  
    {
      question: "What forms the inferior lateral boundary of the popliteal fossa?",
      options: [
        "Gastrocnemius (lateral head)",
        "Soleus",
        "Semitendinosus",
        "Biceps femoris"
      ],
      correctAnswer: "Gastrocnemius (lateral head)",
      explanation: "The lateral head of the gastrocnemius muscle forms the inferior lateral boundary of the popliteal fossa. This muscle is essential for plantarflexion of the foot at the ankle and flexion at the knee."
    },
    {
      question: "Which nerve is responsible for the motor innervation of the posterior leg muscles passing through the popliteal fossa?",
      options: [
        "Common fibular nerve",
        "Tibial nerve",
        "Femoral nerve",
        "Sural nerve"
      ],
      correctAnswer: "Tibial nerve",
      explanation: "The tibial nerve, a division of the sciatic nerve, innervates most muscles of the posterior compartment of the leg, including those responsible for plantarflexion and toe flexion. It passes through the popliteal fossa before dividing further down the leg."
    },
    {
      question: "Which major vein joins the popliteal vein in the popliteal fossa?",
      options: [
        "Great saphenous vein",
        "Small saphenous vein",
        "Femoral vein",
        "Anterior tibial vein"
      ],
      correctAnswer: "Small saphenous vein",
      explanation: "The small saphenous vein drains blood from the superficial structures of the posterior leg and joins the popliteal vein within the popliteal fossa."
    },
    {
      question: "What is the function of the popliteal fossa during knee flexion?",
      options: [
        "It protects the ligaments of the knee",
        "It facilitates smooth movement of blood vessels and nerves",
        "It stabilizes the patella",
        "It absorbs shock during running"
      ],
      correctAnswer: "It facilitates smooth movement of blood vessels and nerves",
      explanation: "During knee flexion, the popliteal fossa provides space for the popliteal artery, vein, and nerves to move freely, preventing them from being compressed or damaged during movement."
    },
    {
      question: "Which structure in the popliteal fossa is most prone to aneurysms?",
      options: [
        "Popliteal artery",
        "Tibial nerve",
        "Common fibular nerve",
        "Popliteal vein"
      ],
      correctAnswer: "Popliteal artery",
      explanation: "The popliteal artery is prone to aneurysms due to its proximity to the knee joint, where it is subject to mechanical stress. A popliteal aneurysm can compress nearby structures, causing pain, swelling, or even nerve damage."
    },
    {
      question: "Which muscle covers the popliteal artery as it enters the popliteal fossa?",
      options: [
        "Semitendinosus",
        "Semimembranosus",
        "Gastrocnemius",
        "Popliteus"
      ],
      correctAnswer: "Popliteus",
      explanation: "The popliteus muscle is located at the base of the popliteal fossa and covers the popliteal artery as it enters the fossa. This small, deep muscle plays an important role in unlocking the knee from full extension."
    },
    {
      question: "What is the role of the sural nerve in the popliteal fossa?",
      options: [
        "It provides sensory innervation to the sole of the foot",
        "It supplies motor innervation to the hamstring muscles",
        "It provides sensory innervation to the posterior leg and lateral foot",
        "It innervates the muscles of the calf"
      ],
      correctAnswer: "It provides sensory innervation to the posterior leg and lateral foot",
      explanation: "The sural nerve is a sensory nerve that arises in the popliteal fossa. It supplies sensation to the skin of the posterior leg and the lateral aspect of the foot."
    },
    {
      question: "Which ligament can be felt through the popliteal fossa when the knee is extended?",
      options: [
        "Anterior cruciate ligament",
        "Medial collateral ligament",
        "Posterior cruciate ligament",
        "Lateral collateral ligament"
      ],
      correctAnswer: "Posterior cruciate ligament",
      explanation: "The posterior cruciate ligament (PCL) can be palpated through the popliteal fossa when the knee is extended. It stabilizes the knee by preventing the tibia from sliding backward relative to the femur."
    },
    {
      question: "Which vessels supply blood to the popliteal fossa?",
      options: [
        "Femoral artery and vein",
        "Popliteal artery and vein",
        "Anterior tibial artery and posterior tibial vein",
        "Sural artery and great saphenous vein"
      ],
      correctAnswer: "Popliteal artery and vein",
      explanation: "The popliteal artery and vein are the major vessels in the popliteal fossa, providing blood supply and drainage for the knee, leg, and foot."
    },
    {
      question: "Which nerve is responsible for sensory innervation to the lateral aspect of the leg, emerging from the popliteal fossa?",
      options: [
        "Tibial nerve",
        "Common fibular nerve",
        "Sural nerve",
        "Obturator nerve"
      ],
      correctAnswer: "Common fibular nerve",
      explanation: "The common fibular nerve provides sensory innervation to the lateral aspect of the leg and dorsum of the foot. It splits off from the sciatic nerve within the popliteal fossa."
    },
    {
      question: "Which muscle assists in unlocking the knee joint and is located in the popliteal fossa?",
      options: [
        "Gastrocnemius",
        "Plantaris",
        "Semimembranosus",
        "Popliteus"
      ],
      correctAnswer: "Popliteus",
      explanation: "The popliteus muscle assists in unlocking the knee from its fully extended position by rotating the femur laterally on the tibia. This is crucial for initiating knee flexion."
    },
    {
      question: "What structure protects the popliteal artery from being compressed during knee flexion?",
      options: [
        "Popliteal vein",
        "Tibial nerve",
        "Popliteus muscle",
        "Semitendinosus muscle"
      ],
      correctAnswer: "Popliteus muscle",
      explanation: "The popliteus muscle, located at the base of the popliteal fossa, protects the popliteal artery by creating space for the vessel to move freely during knee flexion, reducing the risk of compression."
    },
    {
      question: "What is the clinical significance of the popliteal pulse?",
      options: [
        "It indicates the health of the posterior tibial vein",
        "It helps assess the circulation to the leg and foot",
        "It determines the presence of deep vein thrombosis",
        "It measures the strength of the femoral artery"
      ],
      correctAnswer: "It helps assess the circulation to the leg and foot",
      explanation: "The popliteal pulse, found by palpating the popliteal artery, is a key indicator of blood flow to the lower leg and foot. Weak or absent pulses may indicate arterial occlusion or other vascular problems."
    },
    {
      question: "Which structure is at risk of injury in posterior dislocation of the knee joint?",
      options: [
        "Tibial nerve",
        "Popliteal artery",
        "Common fibular nerve",
        "Popliteal vein"
      ],
      correctAnswer: "Popliteal artery",
      explanation: "The popliteal artery is at significant risk of injury in posterior dislocations of the knee due to its location deep in the popliteal fossa and close proximity to the knee joint."
    },
    {
      question: "Which small muscle located in the popliteal fossa is sometimes absent in individuals?",
      options: [
        "Plantaris",
        "Popliteus",
        "Soleus",
        "Semitendinosus"
      ],
      correctAnswer: "Plantaris",
      explanation: "The plantaris muscle, a small and vestigial muscle with a long tendon, is sometimes absent in individuals. It is located in the popliteal fossa and plays a minor role in knee flexion."
    },
    {
      question: "Which of the following structures is least likely to be injured in a popliteal aneurysm?",
      options: [
        "Tibial nerve",
        "Popliteal vein",
        "Common fibular nerve",
        "Femoral nerve"
      ],
      correctAnswer: "Femoral nerve",
      explanation: "The femoral nerve does not pass through the popliteal fossa, so it is less likely to be affected by a popliteal aneurysm compared to the tibial nerve, popliteal vein, and common fibular nerve."
    },
    {
      question: "Which deep vein of the leg passes through the popliteal fossa?",
      options: [
        "Popliteal vein",
        "Great saphenous vein",
        "Anterior tibial vein",
        "Small saphenous vein"
      ],
      correctAnswer: "Popliteal vein",
  explanation: "The popliteal vein is the main vein in the popliteal fossa and drains blood from the deep veins of the leg before becoming the femoral vein as it passes into the thigh."
    },
    {
      question: "What is the function of the common fibular nerve as it exits the popliteal fossa?",
      options: [
        "It innervates the medial aspect of the leg",
        "It innervates the muscles of the lateral leg and dorsum of the foot",
        "It innervates the posterior compartment of the leg",
        "It innervates the anterior thigh muscles"
      ],
      correctAnswer: "It innervates the muscles of the lateral leg and dorsum of the foot",
      explanation: "The common fibular nerve exits the popliteal fossa and innervates the muscles of the lateral compartment of the leg and dorsum of the foot, allowing for dorsiflexion and eversion of the foot."
    },
    {
      question: "Which muscle forms the floor of the popliteal fossa?",
      options: [
        "Semimembranosus",
        "Gastrocnemius",
        "Popliteus",
        "Biceps femoris"
      ],
      correctAnswer: "Popliteus",
      explanation: "The popliteus muscle forms the floor of the popliteal fossa and plays a key role in unlocking the knee from full extension by laterally rotating the femur."
    },
    {
      question: "What forms the roof of the popliteal fossa?",
      options: [
        "Popliteal artery and vein",
        "Skin and popliteal fascia",
        "Semitendinosus and semimembranosus muscles",
        "Biceps femoris tendon"
      ],
      correctAnswer: "Skin and popliteal fascia",
      explanation: "The roof of the popliteal fossa is formed by the skin and popliteal fascia, which provide a protective covering for the underlying neurovascular structures."
    },
    {
      question: "Which artery bifurcates at the inferior border of the popliteal fossa?",
      options: [
        "Popliteal artery",
        "Femoral artery",
        "Tibial artery",
        "Anterior tibial artery"
      ],
      correctAnswer: "Popliteal artery",
      explanation: "At the inferior border of the popliteal fossa, the popliteal artery bifurcates into the anterior tibial artery and posterior tibial artery, which supply blood to the leg."
    },
    {
      question: "Which vein in the popliteal fossa is at risk of thrombosis due to its deep location?",
      options: [
        "Great saphenous vein",
        "Popliteal vein",
        "Small saphenous vein",
        "Femoral vein"
      ],
      correctAnswer: "Popliteal vein",
      explanation: "The popliteal vein, located deep within the popliteal fossa, is at risk of thrombosis due to slow blood flow in this region, which can lead to deep vein thrombosis (DVT)."
    },
    {
      question: "Which nerve, when injured in the popliteal fossa, can cause foot drop?",
      options: [
        "Tibial nerve",
        "Common fibular nerve",
        "Sural nerve",
        "Obturator nerve"
      ],
      correctAnswer: "Common fibular nerve",
      explanation: "Injury to the common fibular nerve in the popliteal fossa can result in foot drop, a condition where the patient is unable to dorsiflex the foot, leading to difficulty walking."
    },
    {
      question: "What is the primary function of the popliteal artery in the lower limb?",
      options: [
        "To supply blood to the anterior compartment of the leg",
        "To provide venous drainage for the leg",
        "To supply blood to the knee joint and surrounding muscles",
        "To facilitate nerve innervation in the popliteal fossa"
      ],
      correctAnswer: "To supply blood to the knee joint and surrounding muscles",
      explanation: "The popliteal artery is the major blood supply to the knee joint and surrounding muscles. It continues as the anterior and posterior tibial arteries, supplying the lower leg and foot."
    },
    {
      question: "Which structure in the popliteal fossa is compressed in popliteal entrapment syndrome?",
      options: [
        "Tibial nerve",
        "Popliteal artery",
        "Common fibular nerve",
        "Popliteal vein"
      ],
      correctAnswer: "Popliteal artery",
      explanation: "Popliteal entrapment syndrome occurs when the popliteal artery is compressed by surrounding muscles or tendons, leading to reduced blood flow to the leg and foot, especially during exercise."
    },
    {
      question: "Which muscle tendon forms part of the superior lateral boundary of the popliteal fossa?",
      options: [
        "Biceps femoris tendon",
        "Semitendinosus tendon",
        "Semimembranosus tendon",
        "Gastrocnemius tendon"
      ],
      correctAnswer: "Biceps femoris tendon",
      explanation: "The biceps femoris tendon forms the superior lateral boundary of the popliteal fossa. This muscle is part of the hamstring group and plays a role in knee flexion."
    },
    {
      question: "Which nerve is the most superficial in the popliteal fossa and at risk during surgery?",
      options: [
        "Common fibular nerve",
        "Tibial nerve",
        "Sural nerve",
        "Obturator nerve"
      ],
      correctAnswer: "Tibial nerve",
      explanation: "The tibial nerve is the most superficial major structure in the popliteal fossa, making it vulnerable to injury during surgical procedures in this region."
    },
    {
      question: "What is the clinical importance of the popliteal fossa during knee surgery?",
      options: [
        "It contains the major ligaments of the knee",
        "It houses the nerves and blood vessels that can be injured during surgery",
        "It is the primary site for muscle attachment",
        "It provides access to the femoral artery"
      ],
      correctAnswer: "It houses the nerves and blood vessels that can be injured during surgery",
      explanation: "The popliteal fossa contains important nerves (tibial, common fibular) and blood vessels (popliteal artery and vein), which are at risk of injury during knee surgeries, such as joint replacement."
    },
    {
      question: "Which nerve in the popliteal fossa supplies motor function to the calf muscles?",
      options: [
        "Tibial nerve",
        "Common fibular nerve",
        "Sural nerve",
        "Obturator nerve"
      ],
      correctAnswer: "Tibial nerve",
      explanation: "The tibial nerve supplies motor innervation to the muscles of the posterior leg, including the gastrocnemius and soleus muscles, which are responsible for plantarflexion of the foot."
    },
    {
      question: "Which structure, when injured in the popliteal fossa, can lead to swelling and reduced blood flow to the leg?",
      options: [
        "Popliteal artery",
        "Tibial nerve",
        "Popliteal vein",
        "Common fibular nerve"
      ],
      correctAnswer: "Popliteal vein",
      explanation: "Injury to the popliteal vein can lead to venous pooling, causing swelling and discomfort in the leg, as well as reducing proper blood drainage from the lower limb."
    },
    {
      question: "What is the role of the plantaris muscle, located in the popliteal fossa?",
      options: [
        "To assist in knee flexion and plantarflexion",
        "To unlock the knee from full extension",
        "To provide sensory innervation to the calf",
        "To stabilize the knee joint"
      ],
      correctAnswer: "To assist in knee flexion and plantarflexion",
      explanation: "The plantaris muscle has a long tendon and assists the larger calf muscles in both knee flexion and plantarflexion of the foot, although its function is considered minor."
    },
          
          // Add more questions following this pattern
        ],
        
      },
  
  //Popliteal Fossa ends 
  
  

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
  
    function displayQuestion() {
      const question = currentQuiz.questions[currentQuestionIndex];
      questionNumber.textContent = `Question: ${currentQuestionIndex + 1}/${
        currentQuiz.questions.length
      }`;
      questionText.textContent = question.question;
      answerOptions.innerHTML = "";
  
      question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.classList.add("answer-btn");
        button.innerHTML = `
                  <span class="answer-letter">${String.fromCharCode(
                    65 + index
                  )}</span>
                  <span>${option}</span>
              `;
        button.addEventListener("click", () => selectAnswer(button));
        answerOptions.appendChild(button);
      });
    }
  
    function selectAnswer(selectedButton) {
      answerOptions.querySelectorAll(".answer-btn").forEach((btn) => {
        btn.classList.remove("selected");
      });
      selectedButton.classList.add("selected");
    }
  
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
  
    function submitAnswer() {
      clearInterval(timer);
      const selectedAnswer = answerOptions.querySelector(".selected");
      if (selectedAnswer) {
        const userAnswer = selectedAnswer
          .querySelector("span:last-child")
          .textContent.trim();
        if (
          userAnswer === currentQuiz.questions[currentQuestionIndex].correctAnswer
        ) {
          score++;
        }
      }
  
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
    submitBtn.addEventListener("click", submitAnswer);
  
  
  
  
  
  
  
  
  
  
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
  
  
  
  
  