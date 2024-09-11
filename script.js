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




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////Thorax Category Starts/////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
      category: "Thorax",
      questions: [
        {
          question: "Which planet is known as the Red Planet?",
          options: ["Venus", "Mars", "Jupiter", "Saturn"],
          correctAnswer: "Mars",
          explanation: 'Mars is often called the Red Planet due to its reddish appearance in the night sky, caused by iron oxide (rust) on its surface nawa p.'
        },
        {
          question: "What is the chemical symbol for water?",
          options: ["Wa", "H2O", "Ho", "Hy"],
          correctAnswer: "H2O",
          explanation: 'H2O represents two hydrogen atoms and one oxygen atom bonded together to form a water molecule.'
        },
        {
          question: "What is the powerhouse of the cell?",
          options: [
            "Nucleus",
            "Mitochondria",
            "Endoplasmic Reticulum",
            "Golgi Apparatus",
          ],
          correctAnswer: "Mitochondria",
          explanation: 'Mitochondria are organelles that generate most of the cell\'s supply of adenosine triphosphate (ATP), used as a source of chemical energy.'
        },
      ],
    },





 ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////Histology/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    {
      category: "Histology",
      questions: [
        {
          question: "What feature characterizes keratinized stratified squamous epithelium?",
          options: [
            "Mucus secretion",
            "Cilia on the surface",
            "A thick, protective layer of dead cells",
            "Goblet cells interspersed among surface cells",
          ],
          correctAnswer: "A thick, protective layer of dead cells",
          explanation: "Keratinized stratified squamous epithelium forms the epidermis, where the outer layer consists of dead cells filled with keratin, providing a tough barrier."
        },
        {
          question: "Which type of cell junctions are involved in communication between epithelial cells?",
          options: [
            "Tight junctions",
            "Desmosomes",
            "Gap junctions",
            "Hemidesmosomes",
          ],
          correctAnswer: "Gap junctions",
          explanation: "Gap junctions allow communication between epithelial cells by enabling the passage of ions and small molecules between them."
        },
        
        // Add more questions following this pattern
      ],
      
    },




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////Epithelial Tissues/////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
      category: "Epithelial Tissues",
      questions: [
        {
          question: "Which type of epithelium is specialized for diffusion of gases and fluids?",
          options: [
            "Simple squamous epithelium",
            "Stratified squamous epithelium",
            "Transitional epithelium",
            "Pseudostratified columnar epithelium",
          ],
          correctAnswer: "Simple squamous epithelium",
          explanation: "Simple squamous epithelium lines surfaces like alveoli and capillaries, where passive transport of gases and fluids occurs."
        },
        {
          question: "Which type of epithelial tissue forms the outer layer of the skin?",
          options: [
            "Simple cuboidal epithelium",
            "Stratified squamous keratinizing epithelium",
            "Transitional epithelium",
            "Simple columnar epithelium",
          ],
          correctAnswer: "Stratified squamous keratinizing epithelium",
          explanation: "The epidermis consists of stratified squamous epithelium, which undergoes keratinization to protect against abrasion and water loss."
        },
        {
          question: "Which epithelial tissue is found lining the urinary bladder?",
          options: [
            "Simple squamous epithelium",
            "Transitional epithelium",
            "Stratified squamous epithelium",
            "Simple columnar epithelium",
          ],
          correctAnswer: "Transitional epithelium",
          explanation: "Transitional epithelium is specialized to stretch and withstand urine's toxicity, lining structures like the bladder."
        },
        {
          question: "Which of the following is NOT a function of epithelial tissue?",
          options: [
            "Absorption",
            "Secretion",
            "Protection",
            "Blood supply",
          ],
          correctAnswer: "Blood supply",
          explanation: "Epithelial tissues are avascular and depend on diffusion from underlying connective tissues for nutrients."
        },
        {
          question: "What structure supports epithelial tissues, separating them from underlying tissues?",
          options: [
            "Cell junctions",
            "Basement membrane",
            "Desmosomes",
            "Cilia",
          ],
          correctAnswer: "Basement membrane",
          explanation: "The basement membrane provides structural support and a selective barrier between the epithelium and connective tissue."
        },
        {
          question: "Which type of epithelium lines the small intestine and facilitates absorption?",
          options: [
            "Simple squamous epithelium",
            "Simple columnar epithelium",
            "Stratified cuboidal epithelium",
            "Pseudostratified columnar epithelium",
          ],
          correctAnswer: "Simple columnar epithelium",
          explanation: "Simple columnar epithelium with microvilli lines absorptive surfaces like the small intestine."
        },
        {
          question: "What type of epithelium is found in the respiratory tract, where it functions in secretion and movement of mucus?",
          options: [
            "Simple squamous epithelium",
            "Simple columnar epithelium",
            "Pseudostratified ciliated columnar epithelium",
            "Stratified squamous epithelium",
          ],
          correctAnswer: "Pseudostratified ciliated columnar epithelium",
          explanation: "Pseudostratified ciliated columnar epithelium lines the respiratory tract, where its cilia move mucus and trapped particles."
        },
        {
          question: "Which of the following epithelium types is best suited to withstand mechanical stress and abrasion?",
          options: [
            "Simple cuboidal epithelium",
            "Stratified squamous epithelium",
            "Simple columnar epithelium",
            "Simple squamous epithelium",
          ],
          correctAnswer: "Stratified squamous epithelium",
          explanation: "Stratified squamous epithelium has multiple layers of cells, providing protection against abrasion, as found in the skin and oral cavity."
        },
        {
          question: "Which epithelial cells are specialized to secrete mucus in the respiratory and digestive tracts?",
          options: [
            "Goblet cells",
            "Cuboidal cells",
            "Squamous cells",
            "Ciliated cells",
          ],
          correctAnswer: "Goblet cells",
          explanation: "Goblet cells are responsible for secreting mucus to protect and lubricate the surfaces of the respiratory and digestive tracts."
        },
        {
          question: "Which type of epithelial tissue lines the blood vessels and the heart?",
          options: [
            "Simple squamous epithelium",
            "Stratified squamous epithelium",
            "Transitional epithelium",
            "Simple columnar epithelium",
          ],
          correctAnswer: "Simple squamous epithelium",
          explanation: "The endothelium, which lines the heart and blood vessels, consists of simple squamous epithelium for efficient exchange of gases and nutrients."
        },
        {
          question: "What is the primary role of cilia in ciliated epithelial tissues?",
          options: [
            "Increase surface area for absorption",
            "Secrete enzymes",
            "Propel substances along the surface",
            "Form protective barriers",
          ],
          correctAnswer: "Propel substances along the surface",
          explanation: "Cilia move mucus and other substances across the epithelial surface, as seen in the respiratory and reproductive tracts."
        },
        {
          question: "Which epithelium type consists of a single layer of cells that appear to be multiple layers due to differing cell heights?",
          options: [
            "Simple columnar epithelium",
            "Stratified cuboidal epithelium",
            "Transitional epithelium",
            "Pseudostratified epithelium",
          ],
          correctAnswer: "Pseudostratified epithelium",
          explanation: "Pseudostratified epithelium appears to have multiple layers due to the varying heights of its cells, but all cells rest on the basement membrane."
        },
        {
          question: "Which type of epithelium lines the ducts of sweat glands?",
          options: [
            "Simple squamous epithelium",
            "Simple cuboidal epithelium",
            "Stratified cuboidal epithelium",
            "Transitional epithelium",
          ],
          correctAnswer: "Stratified cuboidal epithelium",
          explanation: "Stratified cuboidal epithelium, consisting of two or three cell layers, is typically found lining the ducts of sweat glands."
        },
        {
          question: "Where are stereocilia typically found?",
          options: [
            "In the respiratory tract",
            "On the surface of the skin",
            "In the vas deferens and epididymis",
            "In the kidney tubules",
          ],
          correctAnswer: "In the vas deferens and epididymis",
          explanation: "Stereocilia are long microvilli found in the vas deferens and epididymis, where they aid in absorption and secretion."
        },
        {
          question: "What feature characterizes keratinized stratified squamous epithelium?",
          options: [
            "Mucus secretion",
            "Cilia on the surface",
            "A thick, protective layer of dead cells",
            "Goblet cells interspersed among surface cells",
          ],
          correctAnswer: "A thick, protective layer of dead cells",
          explanation: "Keratinized stratified squamous epithelium forms the epidermis, where the outer layer consists of dead cells filled with keratin, providing a tough barrier."
        },
        {
          question: "Which type of cell junctions are involved in communication between epithelial cells?",
          options: [
            "Tight junctions",
            "Desmosomes",
            "Gap junctions",
            "Hemidesmosomes",
          ],
          correctAnswer: "Gap junctions",
          explanation: "Gap junctions allow communication between epithelial cells by enabling the passage of ions and small molecules between them."
        },
        {
          question: "Which of the following epithelial tissues has the ability to stretch and return to its original shape?",
          options: [
            "Simple cuboidal epithelium",
            "Simple squamous epithelium",
            "Transitional epithelium",
            "Stratified columnar epithelium",
          ],
          correctAnswer: "Transitional epithelium",
          explanation: "Transitional epithelium is found in the bladder and can stretch as the bladder fills, returning to its original shape when emptied."
        },
        {
          question: "Which type of epithelium forms the serous membranes lining the body cavities?",
          options: [
            "Simple squamous epithelium",
            "Stratified squamous epithelium",
            "Simple columnar epithelium",
            "Pseudostratified columnar epithelium",
          ],
          correctAnswer: "Simple squamous epithelium",
          explanation: "Simple squamous epithelium forms the serous membranes, such as the peritoneum, that line and protect body cavities."
        },
        {
          question: "What is the main function of microvilli on epithelial cells?",
          options: [
            "Absorption",
            "Secretion",
            "Propulsion",
            "Protection",
          ],
          correctAnswer: "Absorption",
          explanation: "Microvilli increase the surface area of epithelial cells, enhancing their ability to absorb substances, especially in the small intestine."
        },
        {
          question: "Which of the following best describes the arrangement of stratified epithelia?",
          options: [
            "A single layer of cells",
            "Multiple layers of cells",
            "Cells with uneven heights",
            "Flattened cells in a single layer",
          ],
          correctAnswer: "Multiple layers of cells",
          explanation: "Stratified epithelia consist of two or more layers of cells, with only the deepest layer in contact with the basement membrane."
        },
        {
          question: "Which epithelium type is specialized for secretion in glands such as the thyroid or sweat glands?",
          options: [
            "Simple squamous epithelium",
            "Simple cuboidal epithelium",
            "Stratified squamous epithelium",
            "Transitional epithelium",
          ],
          correctAnswer: "Simple cuboidal epithelium",
          explanation: "Simple cuboidal epithelium, found in many glands, is specialized for secretion of substances like hormones and sweat."
        },
        {
          question: "What type of epithelial tissue is primarily involved in gas exchange in the lungs?",
          options: [
            "Simple columnar epithelium",
            "Stratified squamous epithelium",
            "Simple squamous epithelium",
            "Pseudostratified epithelium",
          ],
          correctAnswer: "Simple squamous epithelium",
          explanation: "Simple squamous epithelium forms the alveoli of the lungs, facilitating efficient gas exchange due to its thin structure."
        },
        {
          question: "Which of the following is NOT a location where pseudostratified columnar epithelium is commonly found?",
          options: [
            "Respiratory tract",
            "Male reproductive ducts",
            "Alveoli of the lungs",
            "Nasal cavity",
          ],
          correctAnswer: "Alveoli of the lungs",
          explanation: "Pseudostratified columnar epithelium lines much of the respiratory tract but not the alveoli, which are lined by simple squamous epithelium."
        },
        {
          question: "Which type of epithelial tissue is adapted for absorption in areas such as the small intestine?",
          options: [
            "Simple squamous epithelium",
            "Simple cuboidal epithelium",
            "Simple columnar epithelium",
            "Stratified cuboidal epithelium",
          ],
          correctAnswer: "Simple columnar epithelium",
          explanation: "Simple columnar epithelium, often with microvilli, is found in the small intestine, where it is specialized for nutrient absorption."
        },
        {
          question: "What is the main difference between keratinized and non-keratinized stratified squamous epithelium?",
          options: [
            "Number of cell layers",
            "Presence of a protective keratin layer",
            "Shape of the surface cells",
            "Thickness of the basement membrane",
          ],
          correctAnswer: "Presence of a protective keratin layer",
          explanation: "Keratinized stratified squamous epithelium contains a tough keratin layer, protecting areas like the skin from mechanical damage."
        },
        {
          question: "Which of the following structures is formed by simple cuboidal epithelium?",
          options: [
            "Alveoli of the lungs",
            "Kidney tubules",
            "Inner lining of blood vessels",
            "Trachea lining",
          ],
          correctAnswer: "Kidney tubules",
          explanation: "Simple cuboidal epithelium lines the kidney tubules, where it functions in secretion and absorption."
        },
        {
          question: "Which type of epithelium is specialized for rapid diffusion and filtration in the kidneys?",
          options: [
            "Simple cuboidal epithelium",
            "Simple squamous epithelium",
            "Stratified squamous epithelium",
            "Simple columnar epithelium",
          ],
          correctAnswer: "Simple squamous epithelium",
          explanation: "Simple squamous epithelium, due to its thin structure, facilitates rapid diffusion and filtration in the glomeruli of the kidneys."
        },
        {
          question: "Which type of epithelium is involved in secretion and absorption in the ducts of glands?",
          options: [
            "Stratified squamous epithelium",
            "Simple cuboidal epithelium",
            "Pseudostratified columnar epithelium",
            "Simple columnar epithelium",
          ],
          correctAnswer: "Simple cuboidal epithelium",
          explanation: "Simple cuboidal epithelium lines the ducts of glands, where it is involved in the secretion and absorption of fluids."
        },
        {
          question: "What type of epithelial tissue is found in the inner lining of blood vessels?",
          options: [
            "Simple squamous epithelium",
            "Simple cuboidal epithelium",
            "Stratified cuboidal epithelium",
            "Transitional epithelium",
          ],
          correctAnswer: "Simple squamous epithelium",
          explanation: "Simple squamous epithelium, called endothelium, lines blood vessels, allowing for smooth blood flow and exchange of substances."
        },
        {
          question: "Which of the following is a function of stratified cuboidal epithelium?",
          options: [
            "Absorption in the intestine",
            "Secretion in sweat glands",
            "Protection in the epidermis",
            "Gas exchange in the alveoli",
          ],
          correctAnswer: "Secretion in sweat glands",
          explanation: "Stratified cuboidal epithelium lines the ducts of sweat glands and is specialized for secretion."
        },
        {
          question: "Which type of epithelial tissue lines the stomach and is involved in secretion of digestive enzymes?",
          options: [
            "Simple columnar epithelium",
            "Simple cuboidal epithelium",
            "Stratified squamous epithelium",
            "Pseudostratified columnar epithelium",
          ],
          correctAnswer: "Simple columnar epithelium",
          explanation: "Simple columnar epithelium lines the stomach, where it secretes mucus and digestive enzymes."
        },
        {
          question: "What is the primary role of tight junctions in epithelial tissues?",
          options: [
            "Facilitate absorption",
            "Prevent leakage between cells",
            "Allow communication between cells",
            "Anchor cells to the basement membrane",
          ],
          correctAnswer: "Prevent leakage between cells",
          explanation: "Tight junctions seal adjacent epithelial cells together, preventing the passage of substances between them."
        },
        {
          question: "Which of the following epithelial tissues provides a protective barrier in areas subject to mechanical stress?",
          options: [
            "Simple columnar epithelium",
            "Stratified squamous epithelium",
            "Simple cuboidal epithelium",
            "Simple squamous epithelium",
          ],
          correctAnswer: "Stratified squamous epithelium",
          explanation: "Stratified squamous epithelium, with its multiple layers of cells, provides protection against mechanical stress and abrasion."
        },
        {
          question: "Which type of epithelium lines the ureters and allows for stretch and recoil?",
          options: [
            "Simple squamous epithelium",
            "Transitional epithelium",
            "Stratified squamous epithelium",
            "Simple cuboidal epithelium",
          ],
          correctAnswer: "Transitional epithelium",
          explanation: "Transitional epithelium lines the ureters and bladder, allowing them to stretch as they fill with urine."
        },


  {
    question: "Which type of epithelium has cells that change shape depending on the stretching of the tissue?",
    options: [
      "Simple cuboidal epithelium",
      "Stratified squamous epithelium",
      "Transitional epithelium",
      "Pseudostratified columnar epithelium",
    ],
    correctAnswer: "Transitional epithelium",
    explanation: "Transitional epithelium lines organs like the bladder, allowing them to stretch as they fill and empty."
  },
  {
    question: "What is the main role of the basement membrane in epithelial tissues?",
    options: [
      "Secreting mucus",
      "Providing structural support and selective permeability",
      "Absorbing nutrients",
      "Producing keratin",
    ],
    correctAnswer: "Providing structural support and selective permeability",
    explanation: "The basement membrane provides physical support and regulates material exchange between epithelial and underlying tissues."
  },
  {
    question: "Which type of epithelial tissue consists of multiple layers, providing protection in areas of wear and tear?",
    options: [
      "Simple columnar epithelium",
      "Stratified squamous epithelium",
      "Simple cuboidal epithelium",
      "Pseudostratified epithelium",
    ],
    correctAnswer: "Stratified squamous epithelium",
    explanation: "Stratified squamous epithelium is composed of several layers, which makes it suitable for protecting areas subjected to friction, such as the skin."
  },
  {
    question: "Where would you typically find simple cuboidal epithelium?",
    options: [
      "Lining the blood vessels",
      "In the kidney tubules",
      "On the skin surface",
      "In the small intestine",
    ],
    correctAnswer: "In the kidney tubules",
    explanation: "Simple cuboidal epithelium lines the kidney tubules and is involved in secretion and absorption."
  },
  {
    question: "Which structure is composed of pseudostratified columnar epithelium?",
    options: [
      "Trachea",
      "Kidney tubules",
      "Alveoli of the lungs",
      "Epidermis",
    ],
    correctAnswer: "Trachea",
    explanation: "Pseudostratified columnar epithelium with cilia and goblet cells lines the trachea, helping trap and move particles out of the airways."
  },
  {
    question: "Which type of epithelium is best suited for rapid exchange of materials by diffusion?",
    options: [
      "Simple columnar epithelium",
      "Simple squamous epithelium",
      "Stratified cuboidal epithelium",
      "Transitional epithelium",
    ],
    correctAnswer: "Simple squamous epithelium",
    explanation: "Simple squamous epithelium is very thin, allowing for efficient diffusion of gases and nutrients, like in the alveoli and capillaries."
  },
  {
    question: "What feature is characteristic of keratinized stratified squamous epithelium?",
    options: [
      "Surface cilia",
      "Thick layer of dead cells",
      "Secretory cells",
      "Absorptive microvilli",
    ],
    correctAnswer: "Thick layer of dead cells",
    explanation: "Keratinized stratified squamous epithelium, found in the skin, provides a tough barrier due to its outer layer of dead, keratin-filled cells."
  },
  {
    question: "Which of the following epithelium types forms the inner lining of blood vessels?",
    options: [
      "Simple squamous epithelium",
      "Simple cuboidal epithelium",
      "Stratified squamous epithelium",
      "Transitional epithelium",
    ],
    correctAnswer: "Simple squamous epithelium",
    explanation: "Simple squamous epithelium, also known as endothelium, lines blood vessels and is ideal for smooth blood flow and exchange."
  },
  {
    question: "Which epithelium type is found in the ducts of sweat glands?",
    options: [
      "Simple columnar epithelium",
      "Stratified cuboidal epithelium",
      "Transitional epithelium",
      "Stratified squamous epithelium",
    ],
    correctAnswer: "Stratified cuboidal epithelium",
    explanation: "Stratified cuboidal epithelium provides a strong lining for ducts such as those in sweat glands, offering more protection than a single layer."
  },
  {
    question: "What structure separates the epithelial cells from the underlying connective tissue?",
    options: [
      "Cilia",
      "Basement membrane",
      "Gap junctions",
      "Microvilli",
    ],
    correctAnswer: "Basement membrane",
    explanation: "The basement membrane is a thin layer that provides support and anchors epithelial cells to the underlying connective tissue."
  },
  {
    question: "Which epithelial tissue type lines the alveoli of the lungs?",
    options: [
      "Simple columnar epithelium",
      "Stratified squamous epithelium",
      "Simple squamous epithelium",
      "Transitional epithelium",
    ],
    correctAnswer: "Simple squamous epithelium",
    explanation: "Simple squamous epithelium lines the alveoli, facilitating the efficient exchange of oxygen and carbon dioxide."
  },
  {
    question: "Which of the following is a function of goblet cells in epithelial tissues?",
    options: [
      "Absorption",
      "Secretion of mucus",
      "Providing structural support",
      "Facilitating gas exchange",
    ],
    correctAnswer: "Secretion of mucus",
    explanation: "Goblet cells are specialized epithelial cells that secrete mucus to protect and lubricate the surface of organs such as the respiratory and digestive tracts."
  },
  {
    question: "Which type of epithelium is commonly involved in absorption and secretion in the digestive system?",
    options: [
      "Simple cuboidal epithelium",
      "Stratified squamous epithelium",
      "Simple columnar epithelium",
      "Transitional epithelium",
    ],
    correctAnswer: "Simple columnar epithelium",
    explanation: "Simple columnar epithelium, often with microvilli, lines much of the digestive tract where it aids in nutrient absorption."
  },
  {
    question: "What type of epithelium covers the body’s external surface and serves as the first line of defense against environmental factors?",
    options: [
      "Simple squamous epithelium",
      "Stratified squamous keratinized epithelium",
      "Simple columnar epithelium",
      "Transitional epithelium",
    ],
    correctAnswer: "Stratified squamous keratinized epithelium",
    explanation: "The skin is covered by stratified squamous keratinized epithelium, providing protection against mechanical damage, pathogens, and dehydration."
  },
  {
    question: "Where would you find pseudostratified ciliated columnar epithelium?",
    options: [
      "Lining the trachea",
      "In the alveoli",
      "On the skin surface",
      "In the urinary bladder",
    ],
    correctAnswer: "Lining the trachea",
    explanation: "Pseudostratified ciliated columnar epithelium lines the trachea, where the cilia help move mucus and trapped particles out of the respiratory tract."
  },
  {
    question: "Which type of cell junction in epithelial tissues prevents substances from passing between adjacent cells?",
    options: [
      "Tight junctions",
      "Desmosomes",
      "Gap junctions",
      "Hemidesmosomes",
    ],
    correctAnswer: "Tight junctions",
    explanation: "Tight junctions create a seal between adjacent epithelial cells, preventing substances from leaking between them."
  },







       
      ],
    },





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////Muscle  Tissues//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
      category: "Muscle Tissues",
      questions: [
      {
  question: "Which muscle type is characterized by voluntary control and prominent cross-striations?",
  options: [
    "Skeletal muscle",
    "Smooth muscle",
    "Cardiac muscle",
    "Visceral muscle",
  ],
  correctAnswer: "Skeletal muscle",
  explanation: "Skeletal muscle is responsible for voluntary movements and shows prominent cross-striations due to the arrangement of its contractile proteins."
},
{
  question: "What structure transmits the contractile force developed inside muscle cells?",
  options: [
    "Mitochondria",
    "Z discs",
    "External lamina",
    "Endomysium",
  ],
  correctAnswer: "External lamina",
  explanation: "Contractile forces are transmitted to the external lamina via link proteins that span the muscle cell membrane."
},
{
  question: "Which type of muscle is found in the walls of hollow viscera and is described as involuntary?",
  options: [
    "Skeletal muscle",
    "Smooth muscle",
    "Cardiac muscle",
    "Myofibroblasts",
  ],
  correctAnswer: "Smooth muscle",
  explanation: "Smooth muscle forms the muscular component of visceral structures and is controlled involuntarily by autonomic and hormonal systems."
},
{
  question: "Which statement correctly describes cardiac muscle?",
  options: [
    "It has multinucleated cells.",
    "It lacks striations.",
    "It is spontaneously contractile and has autonomic modulation.",
    "It functions under voluntary control.",
  ],
  correctAnswer: "It is spontaneously contractile and has autonomic modulation.",
  explanation: "Cardiac muscle contracts rhythmically and spontaneously but is modulated by the autonomic nervous system."
},
{
  question: "What happens to skeletal muscle fibers when their nerve supply is damaged?",
  options: [
    "They undergo hypertrophy.",
    "They become multinucleated.",
    "They atrophy and waste away.",
    "They regenerate by mitosis.",
  ],
  correctAnswer: "They atrophy and waste away.",
  explanation: "When the nerve supply is damaged, the muscle fibers innervated by that nerve become smaller and thinner, resulting in muscle atrophy."
},
{
  question: "Which of the following types of fibers relies primarily on aerobic metabolism and contains abundant mitochondria?",
  options: [
    "Type I fibers (aerobic)",
    "Type II fibers (anaerobic)",
    "Intermediate fibers",
    "Fast-twitch fibers",
  ],
  correctAnswer: "Type I fibers (aerobic)",
  explanation: "Type I fibers rely on aerobic metabolism and contain many mitochondria and myoglobin, giving them a red appearance."
},
{
  question: "Which term describes the increase in muscle size due to the synthesis of more contractile proteins?",
  options: [
    "Atrophy",
    "Hyperplasia",
    "Hypertrophy",
    "Myofibrillogenesis",
  ],
  correctAnswer: "Hypertrophy",
  explanation: "Hypertrophy refers to the increase in muscle fiber size due to the synthesis of additional contractile proteins."
},
{
  question: "Which is NOT a characteristic of smooth muscle?",
  options: [
    "Involuntary control",
    "Striated appearance",
    "Single central nucleus",
    "Slow, rhythmic contractions",
  ],
  correctAnswer: "Striated appearance",
  explanation: "Smooth muscle lacks the striations seen in skeletal and cardiac muscles, as its contractile proteins are not organized in myofibrils."
},
{
  question: "What is the role of satellite cells in skeletal muscle?",
  options: [
    "They initiate contractions.",
    "They regenerate damaged muscle fibers.",
    "They transmit nerve signals to the muscle.",
    "They supply oxygen to muscle fibers.",
  ],
  correctAnswer: "They regenerate damaged muscle fibers.",
  explanation: "Satellite cells are muscle stem cells that proliferate after muscle damage and fuse to form new muscle fibers."
},
{
  question: "What is the main characteristic of Type II muscle fibers?",
  options: [
    "They are slow-twitch and rely on aerobic metabolism.",
    "They contain abundant myoglobin and mitochondria.",
    "They rely on anaerobic metabolism and are involved in rapid, intense contractions.",
    "They are found mainly in postural muscles.",
  ],
  correctAnswer: "They rely on anaerobic metabolism and are involved in rapid, intense contractions.",
  explanation: "Type II fibers have less myoglobin and mitochondria, relying on anaerobic glycolysis for short bursts of intense activity."
},


{
  question: "Which structure in skeletal muscle helps transmit action potentials deep into the muscle fibers?",
  options: [
    "Sarcoplasmic reticulum",
    "T-tubules",
    "Myofibrils",
    "Actin filaments",
  ],
  correctAnswer: "T-tubules",
  explanation: "T-tubules are invaginations of the plasma membrane that transmit action potentials deep into the muscle fibers, leading to coordinated contractions."
},
{
  question: "What component stores calcium ions necessary for muscle contraction?",
  options: [
    "Mitochondria",
    "Golgi apparatus",
    "Sarcoplasmic reticulum",
    "Ribosomes",
  ],
  correctAnswer: "Sarcoplasmic reticulum",
  explanation: "The sarcoplasmic reticulum stores calcium ions, which are released to trigger muscle contraction when the muscle is stimulated."
},
{
  question: "Which muscle type contains intercalated discs?",
  options: [
    "Skeletal muscle",
    "Smooth muscle",
    "Cardiac muscle",
    "Myofibroblasts",
  ],
  correctAnswer: "Cardiac muscle",
  explanation: "Cardiac muscle cells are connected by intercalated discs, which allow electrical signals to pass efficiently between cells, facilitating coordinated contractions."
},
{
  question: "Which protein binds calcium to initiate muscle contraction in skeletal muscle?",
  options: [
    "Myosin",
    "Tropomyosin",
    "Troponin",
    "Actin",
  ],
  correctAnswer: "Troponin",
  explanation: "Calcium binds to troponin, which causes tropomyosin to move away from actin's binding sites, allowing myosin to bind to actin and start muscle contraction."
},
{
  question: "What is the functional unit of contraction in a skeletal muscle fiber?",
  options: [
    "Sarcomere",
    "Myofibril",
    "Sarcoplasm",
    "Z disc",
  ],
  correctAnswer: "Sarcomere",
  explanation: "The sarcomere is the basic unit of contraction in a skeletal muscle fiber, defined by the area between two Z discs."
},
{
  question: "What is the primary energy source used during muscle contraction?",
  options: [
    "ATP",
    "Creatine",
    "Glucose",
    "Fatty acids",
  ],
  correctAnswer: "ATP",
  explanation: "ATP provides the necessary energy for muscle contraction, allowing myosin heads to detach and reset for the next contraction cycle."
},
{
  question: "Which type of muscle fiber is most suited for endurance activities?",
  options: [
    "Type I fibers (slow-twitch)",
    "Type IIa fibers (fast-twitch oxidative)",
    "Type IIb fibers (fast-twitch glycolytic)",
    "Type IIc fibers (intermediate)",
  ],
  correctAnswer: "Type I fibers (slow-twitch)",
  explanation: "Type I fibers are slow-twitch fibers that rely on aerobic metabolism and are resistant to fatigue, making them ideal for endurance activities."
},
{
  question: "What happens during muscle contraction according to the sliding filament theory?",
  options: [
    "Actin and myosin filaments shorten.",
    "Actin filaments slide over myosin filaments.",
    "Myosin heads detach from actin.",
    "T-tubules release sodium ions.",
  ],
  correctAnswer: "Actin filaments slide over myosin filaments.",
  explanation: "During muscle contraction, actin filaments slide over myosin filaments, shortening the sarcomere without changing the length of the filaments themselves."
},
{
  question: "Which muscle cell type is capable of continuous, rhythmic contractions without fatigue?",
  options: [
    "Smooth muscle",
    "Skeletal muscle",
    "Cardiac muscle",
    "Type IIb muscle fibers",
  ],
  correctAnswer: "Cardiac muscle",
  explanation: "Cardiac muscle cells are capable of continuous, rhythmic contractions that allow the heart to pump blood efficiently without fatigue."
},
{
  question: "What is the role of acetylcholine in skeletal muscle contraction?",
  options: [
    "It breaks down ATP for energy.",
    "It stimulates the release of calcium from the sarcoplasmic reticulum.",
    "It binds to receptors at the neuromuscular junction to initiate muscle contraction.",
    "It inhibits muscle contraction by blocking myosin binding sites.",
  ],
  correctAnswer: "It binds to receptors at the neuromuscular junction to initiate muscle contraction.",
  explanation: "Acetylcholine is a neurotransmitter that binds to receptors at the neuromuscular junction, triggering an action potential in the muscle fiber that leads to contraction."
},




{
  question: "Which muscle type is responsible for peristalsis in the digestive tract?",
  options: [
    "Skeletal muscle",
    "Smooth muscle",
    "Cardiac muscle",
    "Myofibroblasts",
  ],
  correctAnswer: "Smooth muscle",
  explanation: "Smooth muscle in the digestive tract contracts rhythmically to propel food through the process of peristalsis."
},
{
  question: "What is the main difference between skeletal and smooth muscle contraction mechanisms?",
  options: [
    "Smooth muscle contraction requires more ATP.",
    "Skeletal muscle relies on the sliding filament model, while smooth muscle contracts by cross-bridging.",
    "Skeletal muscle is controlled voluntarily, while smooth muscle is controlled involuntarily.",
    "Smooth muscle contraction is faster than skeletal muscle contraction.",
  ],
  correctAnswer: "Skeletal muscle is controlled voluntarily, while smooth muscle is controlled involuntarily.",
  explanation: "Skeletal muscle is under voluntary control, whereas smooth muscle is regulated by the autonomic nervous system."
},
{
  question: "What is the main characteristic of myofibrils in skeletal muscle?",
  options: [
    "They store glycogen for muscle energy.",
    "They contain actin and myosin filaments organized into sarcomeres.",
    "They regulate calcium release in muscle fibers.",
    "They act as the contractile units of smooth muscle.",
  ],
  correctAnswer: "They contain actin and myosin filaments organized into sarcomeres.",
  explanation: "Myofibrils consist of actin and myosin filaments arranged in repeating units called sarcomeres, which are responsible for muscle contraction."
},
{
  question: "Which part of the sarcomere remains unchanged during contraction?",
  options: [
    "H-zone",
    "I-band",
    "A-band",
    "Z-disc",
  ],
  correctAnswer: "A-band",
  explanation: "The A-band corresponds to the length of the myosin filaments, which remain constant during contraction, while other parts of the sarcomere shorten."
},
{
  question: "Which type of muscle is most resistant to fatigue?",
  options: [
    "Cardiac muscle",
    "Type I (slow-twitch) skeletal muscle",
    "Type IIa (fast oxidative) skeletal muscle",
    "Type IIb (fast glycolytic) skeletal muscle",
  ],
  correctAnswer: "Type I (slow-twitch) skeletal muscle",
  explanation: "Type I fibers are fatigue-resistant due to their reliance on aerobic metabolism and high mitochondrial content."
},
{
  question: "What is the primary role of calmodulin in smooth muscle contraction?",
  options: [
    "It binds to actin to initiate contraction.",
    "It binds to calcium and activates myosin light-chain kinase.",
    "It blocks myosin binding sites on actin filaments.",
    "It breaks down ATP to provide energy for contraction.",
  ],
  correctAnswer: "It binds to calcium and activates myosin light-chain kinase.",
  explanation: "In smooth muscle, calmodulin binds to calcium, which activates myosin light-chain kinase to initiate contraction."
},
{
  question: "Which muscle fibers are best suited for short bursts of high-intensity activity?",
  options: [
    "Type I fibers",
    "Type IIa fibers",
    "Type IIb fibers",
    "Intermediate fibers",
  ],
  correctAnswer: "Type IIb fibers",
  explanation: "Type IIb fibers are fast-twitch fibers that rely on anaerobic metabolism, making them ideal for short, high-intensity activities."
},
{
  question: "Which of the following best describes the role of titin in muscle fibers?",
  options: [
    "It facilitates calcium release from the sarcoplasmic reticulum.",
    "It provides elasticity and stabilizes myosin filaments in the sarcomere.",
    "It blocks the myosin binding sites on actin filaments.",
    "It binds to troponin to initiate muscle contraction.",
  ],
  correctAnswer: "It provides elasticity and stabilizes myosin filaments in the sarcomere.",
  explanation: "Titin is a protein that provides structural support and elasticity, helping to stabilize the myosin filaments during muscle contraction."
},
{
  question: "Which of the following is a common characteristic of all muscle tissue types?",
  options: [
    "They are controlled by the autonomic nervous system.",
    "They contract through the interaction of actin and myosin.",
    "They are striated.",
    "They contain multiple nuclei per cell.",
  ],
  correctAnswer: "They contract through the interaction of actin and myosin.",
  explanation: "All muscle tissue types, including skeletal, cardiac, and smooth muscle, contract through the sliding filament mechanism involving actin and myosin."
},
{
  question: "Which of the following processes occurs during muscle relaxation?",
  options: [
    "Calcium is released from the sarcoplasmic reticulum.",
    "Myosin binds to actin.",
    "Acetylcholine is released at the neuromuscular junction.",
    "Calcium is pumped back into the sarcoplasmic reticulum.",
  ],
  correctAnswer: "Calcium is pumped back into the sarcoplasmic reticulum.",
  explanation: "During relaxation, calcium is actively pumped back into the sarcoplasmic reticulum, which causes the myosin binding sites on actin to be blocked by tropomyosin."
},
{
  question: "Which protein forms the thin filaments in a muscle fiber?",
  options: [
    "Myosin",
    "Actin",
    "Titin",
    "Troponin",
  ],
  correctAnswer: "Actin",
  explanation: "Actin is the main component of the thin filaments in a sarcomere, where it interacts with myosin during muscle contraction."
},
{
  question: "What is the function of myosin ATPase during muscle contraction?",
  options: [
    "It transports calcium into the sarcoplasmic reticulum.",
    "It hydrolyzes ATP to provide energy for the power stroke.",
    "It binds calcium to initiate contraction.",
    "It inhibits muscle relaxation.",
  ],
  correctAnswer: "It hydrolyzes ATP to provide energy for the power stroke.",
  explanation: "Myosin ATPase breaks down ATP to release energy, which is used to perform the power stroke, moving the myosin head along the actin filament."
},
{
  question: "Which structural feature differentiates skeletal muscle from other muscle types?",
  options: [
    "It is controlled involuntarily.",
    "It has branched fibers.",
    "It is multinucleated.",
    "It contracts without stimulation.",
  ],
  correctAnswer: "It is multinucleated.",
  explanation: "Skeletal muscle fibers are multinucleated, which is one of their distinguishing features compared to smooth and cardiac muscle."
},
{
  question: "Which muscle type is capable of regeneration after injury through the activation of satellite cells?",
  options: [
    "Smooth muscle",
    "Skeletal muscle",
    "Cardiac muscle",
    "Myofibroblasts",
  ],
  correctAnswer: "Skeletal muscle",
  explanation: "Skeletal muscle has the ability to regenerate after injury with the help of satellite cells, which can proliferate and form new muscle fibers."
},
{
  question: "What happens to the I-band during skeletal muscle contraction?",
  options: [
    "It disappears completely.",
    "It shortens.",
    "It lengthens.",
    "It remains the same length.",
  ],
  correctAnswer: "It shortens.",
  explanation: "During contraction, the I-band, which contains only actin filaments, shortens as the sarcomere contracts."
},
{
  question: "What is the function of the sarcolemma in muscle fibers?",
  options: [
    "It stores calcium ions.",
    "It covers the muscle fiber and conducts action potentials.",
    "It generates ATP for muscle contraction.",
    "It provides structural support for myofibrils.",
  ],
  correctAnswer: "It covers the muscle fiber and conducts action potentials.",
  explanation: "The sarcolemma is the plasma membrane of a muscle fiber, and it plays a key role in transmitting action potentials along the muscle cell."
},

{
  question: "Which structure is responsible for transmitting the contractile force from one cardiac muscle cell to another?",
  options: [
    "T-tubules",
    "Intercalated discs",
    "Z discs",
    "Sarcoplasmic reticulum",
  ],
  correctAnswer: "Intercalated discs",
  explanation: "Intercalated discs provide structural and electrical connections between cardiac muscle cells, allowing them to act as a syncytium."
},
{
  question: "Which type of muscle can regenerate through hyperplasia, increasing the number of muscle cells?",
  options: [
    "Skeletal muscle",
    "Smooth muscle",
    "Cardiac muscle",
    "None of the above",
  ],
  correctAnswer: "Smooth muscle",
  explanation: "Smooth muscle can regenerate by hyperplasia, which involves increasing the number of cells, unlike skeletal and cardiac muscle."
},
{
  question: "What causes the striated appearance of skeletal muscle fibers under a microscope?",
  options: [
    "Presence of sarcoplasmic reticulum",
    "Arrangement of actin and myosin filaments in sarcomeres",
    "Intercalated discs",
    "Mitochondria",
  ],
  correctAnswer: "Arrangement of actin and myosin filaments in sarcomeres",
  explanation: "The striated appearance is due to the organized arrangement of actin and myosin filaments in sarcomeres."
},
{
  question: "Which type of muscle contraction is characterized by slow, sustained contractions with little energy expenditure?",
  options: [
    "Skeletal muscle",
    "Tonic smooth muscle",
    "Phasic smooth muscle",
    "Cardiac muscle",
  ],
  correctAnswer: "Tonic smooth muscle",
  explanation: "Tonic smooth muscle is specialized for slow, sustained contractions and uses very little energy."
},
{
  question: "In cardiac muscle, which structure facilitates the rapid spread of electrical impulses?",
  options: [
    "Sarcolemma",
    "Gap junctions",
    "T-tubules",
    "Z discs",
  ],
  correctAnswer: "Gap junctions",
  explanation: "Gap junctions in the intercalated discs allow for the rapid spread of electrical impulses between cardiac cells."
},
{
  question: "What triggers the release of calcium from the sarcoplasmic reticulum in skeletal muscle?",
  options: [
    "Depolarization of the sarcolemma",
    "Binding of actin to myosin",
    "Phosphorylation of myosin",
    "ATP hydrolysis",
  ],
  correctAnswer: "Depolarization of the sarcolemma",
  explanation: "The depolarization of the sarcolemma, through the T-tubule system, triggers the release of calcium from the sarcoplasmic reticulum."
},
{
  question: "Which muscle type contains cells that are long, cylindrical, and multinucleated?",
  options: [
    "Smooth muscle",
    "Skeletal muscle",
    "Cardiac muscle",
    "All of the above",
  ],
  correctAnswer: "Skeletal muscle",
  explanation: "Skeletal muscle fibers are long, cylindrical, and multinucleated, a characteristic that sets them apart from smooth and cardiac muscle."
},
{
  question: "Which protein complex blocks the myosin binding sites on actin in a resting skeletal muscle fiber?",
  options: [
    "Troponin",
    "Tropomyosin",
    "Calmodulin",
    "Myosin",
  ],
  correctAnswer: "Tropomyosin",
  explanation: "Tropomyosin blocks the myosin binding sites on actin, preventing contraction in the absence of calcium."
},
{
  question: "What is the main role of the sarcoplasmic reticulum in muscle contraction?",
  options: [
    "Storing and releasing calcium ions",
    "Breaking down ATP",
    "Anchoring contractile proteins",
    "Providing structural support",
  ],
  correctAnswer: "Storing and releasing calcium ions",
  explanation: "The sarcoplasmic reticulum stores calcium and releases it when the muscle fiber is stimulated, initiating contraction."
},
{
  question: "Which of the following muscle fibers is primarily adapted for endurance and continuous activity?",
  options: [
    "Type IIb fibers",
    "Type IIa fibers",
    "Type I fibers",
    "Intermediate fibers",
  ],
  correctAnswer: "Type I fibers",
  explanation: "Type I fibers are slow-twitch fibers adapted for endurance activities due to their reliance on aerobic metabolism."
},
{
  question: "Which muscle type is most susceptible to damage from a lack of oxygen, such as in myocardial infarction?",
  options: [
    "Skeletal muscle",
    "Cardiac muscle",
    "Smooth muscle",
    "Type IIb fibers",
  ],
  correctAnswer: "Cardiac muscle",
  explanation: "Cardiac muscle is highly dependent on a constant oxygen supply, and a lack of oxygen can cause myocardial infarction (heart attack)."
},






{
  question: "Which of the following is a characteristic of smooth muscle cells?",
  options: [
    "They are multinucleated.",
    "They have a striated appearance.",
    "They lack T-tubules.",
    "They contract rapidly and fatigue easily.",
  ],
  correctAnswer: "They lack T-tubules.",
  explanation: "Smooth muscle cells lack T-tubules, which are present in skeletal and cardiac muscle to help transmit action potentials deep into the cell."
},
{
  question: "Which protein acts as a regulatory molecule by blocking myosin binding sites on actin in a resting muscle?",
  options: [
    "Troponin",
    "Tropomyosin",
    "Actin",
    "Myosin",
  ],
  correctAnswer: "Tropomyosin",
  explanation: "Tropomyosin blocks the myosin binding sites on actin filaments in a resting muscle, preventing contraction until calcium is available."
},
{
  question: "Which of the following statements about cardiac muscle is true?",
  options: [
    "It is capable of mitosis and regeneration.",
    "It contains multinucleated cells.",
    "It is under voluntary control.",
    "It contracts rhythmically without nerve stimulation.",
  ],
  correctAnswer: "It contracts rhythmically without nerve stimulation.",
  explanation: "Cardiac muscle cells are capable of spontaneous, rhythmic contraction, though their rate can be modulated by the autonomic nervous system."
},




      ],
    },




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////Connective Tissues/////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
      category: "Connective Tissues",
      questions: [
        {
  question: "Which protein provides tensile strength in connective tissues, resisting pulling, stretching, and tearing?",
  options: [
    "Elastin",
    "Fibronectin",
    "Collagen",
    "Fibrillin",
  ],
  correctAnswer: "Collagen",
  explanation: "Collagen fibers are the main components providing tensile strength to connective tissues."
},
{
  question: "Which component in connective tissue is responsible for elasticity and allows tissues to return to their original shape after deformation?",
  options: [
    "Ground substance",
    "Elastin",
    "Fibroblasts",
    "Proteoglycans",
  ],
  correctAnswer: "Elastin",
  explanation: "Elastin fibers allow connective tissues to stretch and recoil, providing elasticity."
},
{
  question: "Which connective tissue cell type is primarily responsible for producing extracellular matrix components?",
  options: [
    "Fibroblasts",
    "Chondrocytes",
    "Osteoblasts",
    "Adipocytes",
  ],
  correctAnswer: "Fibroblasts",
  explanation: "Fibroblasts synthesize and secrete extracellular matrix materials, including collagen and ground substance."
},
{
  question: "What is the role of ground substance in connective tissue?",
  options: [
    "Provides tensile strength",
    "Stores calcium",
    "Resists compressive forces and facilitates diffusion",
    "Forms muscle fibers",
  ],
  correctAnswer: "Resists compressive forces and facilitates diffusion",
  explanation: "Ground substance consists of glycoproteins and glycosaminoglycans, providing volume and resistance to compressive forces while aiding molecular diffusion."
},
{
  question: "What is the primary function of reticulin fibers in connective tissues?",
  options: [
    "Provide elasticity",
    "Form supportive meshworks for highly cellular tissues",
    "Store fat",
    "Anchor cells to the extracellular matrix",
  ],
  correctAnswer: "Form supportive meshworks for highly cellular tissues",
  explanation: "Reticulin fibers, made of Type III collagen, provide structural support for organs like the liver and lymphoid tissues."
},
{
  question: "Which type of connective tissue is characterized by loosely arranged fibers and a large amount of ground substance?",
  options: [
    "Dense connective tissue",
    "Loose connective tissue",
    "Cartilage",
    "Bone",
  ],
  correctAnswer: "Loose connective tissue",
  explanation: "Loose connective tissue has a loose arrangement of collagen and elastic fibers and abundant ground substance, providing flexibility and space for blood vessels and nerves."
},
{
  question: "What type of connective tissue provides strong, rope-like structures found in tendons and ligaments?",
  options: [
    "Loose connective tissue",
    "Dense irregular connective tissue",
    "Dense regular connective tissue",
    "Adipose tissue",
  ],
  correctAnswer: "Dense regular connective tissue",
  explanation: "Dense regular connective tissue consists of tightly packed collagen fibers aligned parallel, providing strength in one direction."
},
{
  question: "Which type of connective tissue cell is involved in storing fat and regulating energy metabolism?",
  options: [
    "Osteocytes",
    "Adipocytes",
    "Fibroblasts",
    "Chondrocytes",
  ],
  correctAnswer: "Adipocytes",
  explanation: "Adipocytes store triglycerides and have roles in metabolic regulation and energy storage."
},
{
  question: "Which collagen type forms the bulk of collagen fibers in dense connective tissues like tendons and skin?",
  options: [
    "Type I",
    "Type II",
    "Type III",
    "Type IV",
  ],
  correctAnswer: "Type I",
  explanation: "Type I collagen provides the primary structural strength in fibrous supporting tissues such as tendons and skin."
},
{
  question: "Which connective tissue component has a gel-like consistency and binds water to provide hydration and resistance to compression?",
  options: [
    "Collagen",
    "Elastin",
    "Ground substance",
    "Fibronectin",
  ],
  correctAnswer: "Ground substance",
  explanation: "Ground substance, made of glycosaminoglycans and proteoglycans, binds water to form a gel that resists compression and supports tissue structure."
},
{
  question: "What are fibroblasts primarily responsible for during wound healing?",
  options: [
    "Forming blood clots",
    "Producing antibodies",
    "Generating extracellular matrix and collagen for tissue repair",
    "Initiating immune response",
  ],
  correctAnswer: "Generating extracellular matrix and collagen for tissue repair",
  explanation: "Fibroblasts proliferate and secrete collagen to replace damaged tissue during wound healing."
},
{
  question: "What characteristic distinguishes dense irregular connective tissue from dense regular connective tissue?",
  options: [
    "Presence of adipocytes",
    "Arrangement of collagen fibers",
    "Type of ground substance",
    "Cell type involved",
  ],
  correctAnswer: "Arrangement of collagen fibers",
  explanation: "In dense irregular connective tissue, collagen fibers are arranged in multiple directions, providing strength in various planes, unlike dense regular connective tissue where fibers are parallel."
},
{
  question: "Which connective tissue is primarily responsible for forming the structural framework of lymphoid organs?",
  options: [
    "Elastic connective tissue",
    "Adipose tissue",
    "Reticular connective tissue",
    "Dense irregular connective tissue",
  ],
  correctAnswer: "Reticular connective tissue",
  explanation: "Reticular connective tissue forms a delicate mesh that supports the cellular structure of lymphoid organs like the spleen and lymph nodes."
},
{
  question: "Which type of connective tissue is found in areas that require high elasticity, such as the walls of large arteries?",
  options: [
    "Dense regular connective tissue",
    "Loose connective tissue",
    "Elastic connective tissue",
    "Cartilage",
  ],
  correctAnswer: "Elastic connective tissue",
  explanation: "Elastic connective tissue contains large amounts of elastin fibers, which allow it to stretch and recoil, making it essential for large arteries that expand with each heartbeat."
},
{
  question: "What is the key function of proteoglycans in the ground substance of connective tissue?",
  options: [
    "Providing structural rigidity",
    "Binding water and resisting compressive forces",
    "Facilitating cellular communication",
    "Secreting extracellular matrix",
  ],
  correctAnswer: "Binding water and resisting compressive forces",
  explanation: "Proteoglycans in the ground substance bind large amounts of water, creating a gel-like consistency that resists compression and supports the tissue structure."
},
{
  question: "Which collagen type is a major component of basement membranes?",
  options: [
    "Type I",
    "Type II",
    "Type IV",
    "Type III",
  ],
  correctAnswer: "Type IV",
  explanation: "Type IV collagen forms a mesh-like structure in basement membranes, providing support and anchoring epithelial cells."
},
{
  question: "What is the main characteristic of fibrocartilage?",
  options: [
    "It is highly vascularized.",
    "It contains elastic fibers.",
    "It combines strength and flexibility with dense collagen fibers.",
    "It is found in the walls of blood vessels.",
  ],
  correctAnswer: "It combines strength and flexibility with dense collagen fibers.",
  explanation: "Fibrocartilage contains dense bundles of collagen fibers, providing tensile strength and flexibility, found in intervertebral discs and pubic symphysis."
},
{
  question: "Which type of connective tissue serves as a packing material around organs and provides support and cushioning?",
  options: [
    "Dense regular connective tissue",
    "Loose areolar connective tissue",
    "Fibrocartilage",
    "Reticular tissue",
  ],
  correctAnswer: "Loose areolar connective tissue",
  explanation: "Loose areolar connective tissue fills spaces between organs, providing support, cushioning, and flexibility."
},
{
  question: "What is the function of myofibroblasts in connective tissue repair?",
  options: [
    "Secreting enzymes to degrade damaged tissue",
    "Forming blood vessels",
    "Providing tensile strength to scars",
    "Contracting and shrinking wound sites",
  ],
  correctAnswer: "Contracting and shrinking wound sites",
  explanation: "Myofibroblasts play a key role in wound contraction by contracting and shrinking the wound site during tissue repair."
},
{
  question: "Which glycoprotein is essential for cell adhesion and wound healing in connective tissue?",
  options: [
    "Fibronectin",
    "Elastin",
    "Collagen",
    "Proteoglycan",
  ],
  correctAnswer: "Fibronectin",
  explanation: "Fibronectin plays a crucial role in cell adhesion, migration, and tissue repair, especially during wound healing."
},




     ],
    },




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////Nervous Tissues/////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    {
      category: "Nervous Tissues",
      questions: [
        
  {
    question: "What are the two main parts of the nervous system?",
    options: [
      "Central Nervous System and Autonomic Nervous System",
      "Central Nervous System and Peripheral Nervous System",
      "Somatic Nervous System and Peripheral Nervous System",
      "Autonomic Nervous System and Somatic Nervous System",
    ],
    correctAnswer: "Central Nervous System and Peripheral Nervous System",
    explanation: "The nervous system is divided into the CNS, consisting of the brain and spinal cord, and the PNS, consisting of nerves and ganglia."
  },
  {
    question: "What is the main function of neurones?",
    options: [
      "To provide structural support to organs",
      "To gather and process information and generate response signals",
      "To store nutrients for the brain",
      "To protect the body against infections",
    ],
    correctAnswer: "To gather and process information and generate response signals",
    explanation: "Neurones are specialized cells that gather information, process it, and send response signals to different parts of the body."
  },
  {
    question: "Which type of cells form the myelin sheath in the Central Nervous System?",
    options: [
      "Schwann cells",
      "Astrocytes",
      "Microglia",
      "Oligodendrocytes",
    ],
    correctAnswer: "Oligodendrocytes",
    explanation: "Oligodendrocytes are responsible for forming myelin sheaths in the CNS, while Schwann cells perform this role in the PNS."
  },
  {
    question: "What is the function of microglia in the CNS?",
    options: [
      "Provide mechanical support to neurones",
      "Form the blood-brain barrier",
      "Phagocytic activity and defense",
      "Transmit nerve signals",
    ],
    correctAnswer: "Phagocytic activity and defense",
    explanation: "Microglia are the immune cells of the CNS, responsible for phagocytosing debris and pathogens."
  },
  {
    question: "Which structure of the neuron is responsible for transmitting action potentials to other neurons or effector organs?",
    options: [
      "Dendrites",
      "Axon",
      "Synapse",
      "Cell body",
    ],
    correctAnswer: "Axon",
    explanation: "The axon conducts action potentials away from the neuron's cell body to other neurons or effector organs."
  },
  {
    question: "What are synapses?",
    options: [
      "Junctions between neurons for transmission of action potentials",
      "Supportive cells for neurons",
      "Insulating sheaths around axons",
      "Regions where neurotransmitters are produced",
    ],
    correctAnswer: "Junctions between neurons for transmission of action potentials",
    explanation: "Synapses are specialized junctions where neurons transmit signals via neurotransmitters to other neurons."
  },
  {
    question: "Which part of the nervous system is responsible for involuntary actions like heart rate and digestion?",
    options: [
      "Somatic Nervous System",
      "Central Nervous System",
      "Peripheral Nervous System",
      "Autonomic Nervous System",
    ],
    correctAnswer: "Autonomic Nervous System",
    explanation: "The Autonomic Nervous System controls involuntary actions such as heart rate and digestion."
  },
  {
    question: "What happens during an epileptic seizure?",
    options: [
      "There is an abnormal increase in neurotransmitter production",
      "The regulation of neuronal excitability becomes abnormal, leading to uncontrolled depolarization",
      "Neurons stop functioning and die",
      "The synaptic transmission is enhanced",
    ],
    correctAnswer: "The regulation of neuronal excitability becomes abnormal, leading to uncontrolled depolarization",
    explanation: "Epileptic seizures occur due to abnormal regulation of neuronal excitability, causing uncontrolled spread of depolarization."
  },
  {
    question: "Which disease is characterized by the degeneration of motor neurons?",
    options: [
      "Multiple sclerosis",
      "Parkinson’s disease",
      "Motor neuron disease",
      "Alzheimer's disease",
    ],
    correctAnswer: "Motor neuron disease",
    explanation: "Motor neuron disease is characterized by the progressive degeneration and death of motor neurons."
  },
  {
    question: "What is the role of the blood-brain barrier?",
    options: [
      "Prevent nutrients from entering the brain",
      "Facilitate the transport of oxygen to neurons",
      "Prevent certain substances in the blood from entering the brain",
      "Provide structural support to neurons",
    ],
    correctAnswer: "Prevent certain substances in the blood from entering the brain",
    explanation: "The blood-brain barrier regulates the passage of substances between the blood and the brain to protect the CNS."
  },
  {
    question: "Which cells provide structural and metabolic support to neurons in the CNS?",
    options: [
      "Oligodendrocytes",
      "Astrocytes",
      "Microglia",
      "Schwann cells",
    ],
    correctAnswer: "Astrocytes",
    explanation: "Astrocytes are highly branched cells in the CNS that provide structural and metabolic support to neurons."
  },
  {
    question: "What happens to myelin sheaths in multiple sclerosis?",
    options: [
      "They become thicker, increasing conduction velocity",
      "They degrade, reducing effective signal transmission",
      "They enhance synaptic activity",
      "They regenerate after damage",
    ],
    correctAnswer: "They degrade, reducing effective signal transmission",
    explanation: "In multiple sclerosis, myelin sheaths degrade, leading to impaired signal transmission between neurons."
  },
  {
    question: "What are the primary sensory neurons called?",
    options: [
      "Multipolar neurons",
      "Pseudo-unipolar neurons",
      "Bipolar neurons",
      "Interneurons",
    ],
    correctAnswer: "Pseudo-unipolar neurons",
    explanation: "Primary sensory neurons are pseudo-unipolar, with a single process that divides into two branches."
  },
  {
    question: "Which cells in the PNS form the myelin sheath?",
    options: [
      "Astrocytes",
      "Oligodendrocytes",
      "Schwann cells",
      "Microglia",
    ],
    correctAnswer: "Schwann cells",
    explanation: "Schwann cells form the myelin sheath around axons in the Peripheral Nervous System (PNS)."
  },
  {
    question: "What type of neuron is involved in voluntary movement control?",
    options: [
      "Autonomic neurons",
      "Sensory neurons",
      "Motor neurons",
      "Interneurons",
    ],
    correctAnswer: "Motor neurons",
    explanation: "Motor neurons transmit signals from the CNS to muscles, controlling voluntary movement."
  },
  {
    question: "What structure protects axons and facilitates faster transmission of nerve signals?",
    options: [
      "Schwann cells",
      "Synapse",
      "Myelin sheath",
      "Dendrites",
    ],
    correctAnswer: "Myelin sheath",
    explanation: "The myelin sheath insulates axons and speeds up the transmission of nerve signals."
  },
  {
    question: "Which part of the neuron receives signals from other neurons?",
    options: [
      "Axon",
      "Cell body",
      "Dendrites",
      "Myelin sheath",
    ],
    correctAnswer: "Dendrites",
    explanation: "Dendrites are the branched projections that receive signals from other neurons."
  },
  {
    question: "What is the role of ependymal cells in the CNS?",
    options: [
      "Form the myelin sheath",
      "Line the ventricles and produce cerebrospinal fluid (CSF)",
      "Transmit nerve impulses",
      "Act as phagocytes",
    ],
    correctAnswer: "Line the ventricles and produce cerebrospinal fluid (CSF)",
    explanation: "Ependymal cells line the ventricles of the brain and produce cerebrospinal fluid, which cushions the CNS."
  },
  {
    question: "Which of the following describes the function of neurotransmitters?",
    options: [
      "Insulate neurons from electrical signals",
      "Transmit signals across synapses",
      "Store nutrients for neurons",
      "Generate action potentials in axons",
    ],
    correctAnswer: "Transmit signals across synapses",
    explanation: "Neurotransmitters are chemical messengers that transmit signals across synapses between neurons."
  },
  {
    question: "What type of neuron typically has a single axon and multiple dendrites?",
    options: [
      "Multipolar neurons",
      "Bipolar neurons",
      "Pseudo-unipolar neurons",
      "Interneurons",
    ],
    correctAnswer: "Multipolar neurons",
    explanation: "Multipolar neurons have a single axon and multiple dendrites, making them common in motor and integratory pathways."
  },

  {
    question: "Which cells in the CNS form the blood-brain barrier?",
    options: [
      "Oligodendrocytes",
      "Astrocytes",
      "Microglia",
      "Schwann cells",
    ],
    correctAnswer: "Astrocytes",
    explanation: "Astrocytes are involved in forming the blood-brain barrier by their foot processes surrounding the capillaries in the CNS."
  },
  {
    question: "What is the function of the choroid plexus in the CNS?",
    options: [
      "Regulate blood flow",
      "Produce cerebrospinal fluid",
      "Form synapses between neurons",
      "Provide immune defense",
    ],
    correctAnswer: "Produce cerebrospinal fluid",
    explanation: "The choroid plexus produces cerebrospinal fluid (CSF) that circulates in the CNS to cushion and protect it."
  },
  {
    question: "What type of neurons are found in the dorsal root ganglia?",
    options: [
      "Multipolar neurons",
      "Bipolar neurons",
      "Pseudo-unipolar neurons",
      "Interneurons",
    ],
    correctAnswer: "Pseudo-unipolar neurons",
    explanation: "The dorsal root ganglia contain pseudo-unipolar neurons, which are sensory neurons."
  },
  {
    question: "Which neuroglial cells are involved in phagocytosis in the CNS?",
    options: [
      "Astrocytes",
      "Oligodendrocytes",
      "Schwann cells",
      "Microglia",
    ],
    correctAnswer: "Microglia",
    explanation: "Microglia are the phagocytic cells of the CNS, removing debris and pathogens."
  },
  {
    question: "Which disease is characterized by the loss of myelin in the CNS?",
    options: [
      "Alzheimer's disease",
      "Parkinson’s disease",
      "Multiple sclerosis",
      "Huntington's disease",
    ],
    correctAnswer: "Multiple sclerosis",
    explanation: "Multiple sclerosis involves the degradation of myelin sheaths in the CNS, affecting signal transmission."
  },
  {
    question: "What is the primary function of Schwann cells in the PNS?",
    options: [
      "Transmit nerve impulses",
      "Form myelin sheaths",
      "Provide structural support",
      "Engage in phagocytosis",
    ],
    correctAnswer: "Form myelin sheaths",
    explanation: "Schwann cells form the myelin sheaths around peripheral nerves, facilitating faster signal transmission."
  },
  {
    question: "What is the role of the axon hillock in a neuron?",
    options: [
      "Synthesize neurotransmitters",
      "Receive signals from other neurons",
      "Generate action potentials",
      "Store ions for signal transmission",
    ],
    correctAnswer: "Generate action potentials",
    explanation: "The axon hillock is the region of the neuron where action potentials are generated."
  },
  {
    question: "Which cells line the ventricles of the brain?",
    options: [
      "Microglia",
      "Astrocytes",
      "Ependymal cells",
      "Oligodendrocytes",
    ],
    correctAnswer: "Ependymal cells",
    explanation: "Ependymal cells line the ventricles and are involved in the production and circulation of cerebrospinal fluid."
  },
  {
    question: "Which disease affects neuromuscular transmission by targeting acetylcholine receptors?",
    options: [
      "Parkinson’s disease",
      "Multiple sclerosis",
      "Myasthenia gravis",
      "Alzheimer's disease",
    ],
    correctAnswer: "Myasthenia gravis",
    explanation: "Myasthenia gravis is an autoimmune disease where antibodies attack acetylcholine receptors, impairing neuromuscular transmission."
  },
  {
    question: "What type of glial cells form myelin in the CNS?",
    options: [
      "Astrocytes",
      "Oligodendrocytes",
      "Microglia",
      "Schwann cells",
    ],
    correctAnswer: "Oligodendrocytes",
    explanation: "Oligodendrocytes are responsible for forming myelin sheaths around axons in the CNS."
  },
  {
    question: "Which part of the nervous system is responsible for the fight or flight response?",
    options: [
      "Central Nervous System",
      "Parasympathetic Nervous System",
      "Somatic Nervous System",
      "Sympathetic Nervous System",
    ],
    correctAnswer: "Sympathetic Nervous System",
    explanation: "The Sympathetic Nervous System is responsible for the fight or flight response, preparing the body for stress."
  },
  {
    question: "What is the primary role of neurotransmitters?",
    options: [
      "Transmit signals across a synapse",
      "Insulate axons",
      "Facilitate nutrient exchange",
      "Generate action potentials",
    ],
    correctAnswer: "Transmit signals across a synapse",
    explanation: "Neurotransmitters are chemical messengers that transmit signals from one neuron to another across a synapse."
  },
  {
    question: "Which part of the neuron typically receives signals from other neurons?",
    options: [
      "Axon",
      "Dendrites",
      "Myelin sheath",
      "Cell body",
    ],
    correctAnswer: "Dendrites",
    explanation: "Dendrites are the parts of the neuron that receive signals from other neurons and relay them to the cell body."
  },
  {
    question: "What structure surrounds bundles of nerve fibers in a peripheral nerve?",
    options: [
      "Endoneurium",
      "Perineurium",
      "Epineurium",
      "Myelin sheath",
    ],
    correctAnswer: "Perineurium",
    explanation: "The perineurium surrounds each bundle (fascicle) of nerve fibers in a peripheral nerve."
  },
  {
    question: "Which type of neuron typically has a single axon and multiple dendrites?",
    options: [
      "Multipolar neurons",
      "Bipolar neurons",
      "Pseudo-unipolar neurons",
      "Interneurons",
    ],
    correctAnswer: "Multipolar neurons",
    explanation: "Multipolar neurons, commonly found in motor pathways, have a single axon and multiple dendrites."
  },
  {
    question: "Which of the following best describes the role of dendrites in neurons?",
    options: [
      "Transmit signals to other neurons",
      "Synthesize neurotransmitters",
      "Receive incoming signals from other neurons",
      "Generate action potentials",
    ],
    correctAnswer: "Receive incoming signals from other neurons",
    explanation: "Dendrites are the branch-like structures that receive incoming signals from other neurons and transmit them to the cell body."
  },
  {
    question: "What type of cells are responsible for forming the myelin sheath in the Peripheral Nervous System?",
    options: [
      "Microglia",
      "Oligodendrocytes",
      "Schwann cells",
      "Astrocytes",
    ],
    correctAnswer: "Schwann cells",
    explanation: "Schwann cells form the myelin sheath around axons in the Peripheral Nervous System."
  },
  {
    question: "What is the role of interneurons in the nervous system?",
    options: [
      "Relay signals between sensory and motor neurons",
      "Transmit sensory signals to the brain",
      "Stimulate muscle contractions",
      "Regulate blood flow in the brain",
    ],
    correctAnswer: "Relay signals between sensory and motor neurons",
    explanation: "Interneurons act as intermediaries in the central nervous system, relaying signals between sensory and motor neurons."
  },
  {
    question: "Which type of glial cells help form the blood-brain barrier?",
    options: [
      "Schwann cells",
      "Astrocytes",
      "Microglia",
      "Oligodendrocytes",
    ],
    correctAnswer: "Astrocytes",
    explanation: "Astrocytes help form the blood-brain barrier, controlling the movement of substances from the bloodstream into the brain."
  },



  {
    question: "What is the function of the Nodes of Ranvier?",
    options: [
      "Provide nutrients to neurons",
      "Facilitate rapid conduction of nerve impulses",
      "Secrete neurotransmitters",
      "Connect neurons to capillaries",
    ],
    correctAnswer: "Facilitate rapid conduction of nerve impulses",
    explanation: "Nodes of Ranvier are gaps in the myelin sheath that allow for saltatory conduction, speeding up the transmission of action potentials."
  },
  {
    question: "Which part of the neuron contains the nucleus and most organelles?",
    options: [
      "Dendrites",
      "Axon",
      "Synapse",
      "Cell body (Soma)",
    ],
    correctAnswer: "Cell body (Soma)",
    explanation: "The cell body, also known as the soma, contains the nucleus and most of the cell's organelles, managing metabolic activity."
  },
  {
    question: "Which neurotransmitter is commonly associated with the parasympathetic nervous system?",
    options: [
      "Dopamine",
      "Acetylcholine",
      "Serotonin",
      "Norepinephrine",
    ],
    correctAnswer: "Acetylcholine",
    explanation: "Acetylcholine is the primary neurotransmitter used by the parasympathetic nervous system to stimulate 'rest and digest' activities."
  },
  {
    question: "What type of glial cells in the CNS act as phagocytes to remove debris and pathogens?",
    options: [
      "Astrocytes",
      "Microglia",
      "Oligodendrocytes",
      "Ependymal cells",
    ],
    correctAnswer: "Microglia",
    explanation: "Microglia are the resident immune cells of the CNS, acting as phagocytes to clean up debris and protect against infections."
  },
  {
    question: "Which part of the brain is responsible for coordinating voluntary movements and balance?",
    options: [
      "Cerebrum",
      "Cerebellum",
      "Medulla oblongata",
      "Thalamus",
    ],
    correctAnswer: "Cerebellum",
    explanation: "The cerebellum coordinates voluntary movements such as posture, balance, and coordination, ensuring smooth and precise actions."
  },
  {
    question: "What type of neuron carries impulses away from the CNS to muscles or glands?",
    options: [
      "Sensory neurons",
      "Interneurons",
      "Motor neurons",
      "Bipolar neurons",
    ],
    correctAnswer: "Motor neurons",
    explanation: "Motor neurons carry impulses from the CNS to muscles or glands, causing them to respond (e.g., contract or secrete)."
  },
  {
    question: "Which part of the neuron integrates incoming signals and determines if an action potential will be initiated?",
    options: [
      "Dendrites",
      "Axon hillock",
      "Synapse",
      "Myelin sheath",
    ],
    correctAnswer: "Axon hillock",
    explanation: "The axon hillock is the region where incoming signals are summed, and if the threshold is reached, it initiates an action potential."
  },
  {
    question: "Which ion is primarily responsible for the depolarization phase of an action potential?",
    options: [
      "Potassium",
      "Sodium",
      "Calcium",
      "Chloride",
    ],
    correctAnswer: "Sodium",
    explanation: "During depolarization, sodium ions rush into the neuron, causing the inside of the cell to become more positively charged."
  },
  {
    question: "What is the function of Schwann cells in the PNS?",
    options: [
      "Transmit sensory signals",
      "Produce cerebrospinal fluid",
      "Form myelin sheaths around axons",
      "Facilitate synaptic transmission",
    ],
    correctAnswer: "Form myelin sheaths around axons",
    explanation: "Schwann cells form myelin sheaths around axons in the peripheral nervous system, facilitating faster transmission of nerve impulses."
  },
  {
    question: "What is the main function of the spinal cord in the nervous system?",
    options: [
      "Process emotions",
      "Relay information between the brain and the rest of the body",
      "Regulate hormone production",
      "Control involuntary muscle movements",
    ],
    correctAnswer: "Relay information between the brain and the rest of the body",
    explanation: "The spinal cord acts as a conduit for signals between the brain and the rest of the body, enabling sensory input and motor output."
  },


//changes made here 


  {
    question: "What are the three main types of neurons based on their structure?",
    options: [
      "Multipolar, Unipolar, Bipolar",
      "Sensory, Motor, Interneuron",
      "Pyramidal, Stellate, Granular",
      "Central, Peripheral, Somatic",
    ],
    correctAnswer: "Multipolar, Unipolar, Bipolar",
    explanation: "Neurons are classified based on the number of processes extending from the cell body. Multipolar neurons have many processes, bipolar neurons have two, and unipolar neurons have one."
  },
  {
    question: "What is the function of dendrites in a neuron?",
    options: [
      "Transmit impulses to other neurons",
      "Receive signals from other neurons",
      "Produce myelin",
      "Store neurotransmitters",
    ],
    correctAnswer: "Receive signals from other neurons",
    explanation: "Dendrites are the branched extensions of neurons that receive signals from other neurons and transmit them towards the cell body."
  },
  {
    question: "Which cells produce cerebrospinal fluid in the CNS?",
    options: [
      "Microglia",
      "Ependymal cells",
      "Astrocytes",
      "Oligodendrocytes",
    ],
    correctAnswer: "Ependymal cells",
    explanation: "Ependymal cells line the ventricles of the brain and the central canal of the spinal cord, and they are responsible for producing cerebrospinal fluid (CSF)."
  },
  {
    question: "What type of neuron is involved in transmitting sensory information to the central nervous system?",
    options: [
      "Motor neurons",
      "Interneurons",
      "Sensory neurons",
      "Bipolar neurons",
    ],
    correctAnswer: "Sensory neurons",
    explanation: "Sensory neurons (afferent neurons) transmit sensory information from receptors to the central nervous system."
  },
  {
    question: "Which part of the neuron is responsible for transmitting signals away from the cell body?",
    options: [
      "Dendrites",
      "Nucleus",
      "Axon",
      "Synapse",
    ],
    correctAnswer: "Axon",
    explanation: "The axon is the long projection of the neuron that transmits electrical impulses away from the cell body towards other neurons or muscles."
  },
  {
    question: "Which neurotransmitter is primarily involved in muscle contraction?",
    options: [
      "Dopamine",
      "Serotonin",
      "Acetylcholine",
      "GABA",
    ],
    correctAnswer: "Acetylcholine",
    explanation: "Acetylcholine is a neurotransmitter that is released at neuromuscular junctions to stimulate muscle contraction."
  },
  {
    question: "What is the resting membrane potential of a neuron?",
    options: [
      "0 mV",
      "-70 mV",
      "-90 mV",
      "30 mV",
    ],
    correctAnswer: "-70 mV",
    explanation: "The resting membrane potential is the electrical charge difference across the neuron's membrane when the neuron is not transmitting a signal, typically around -70 mV."
  },
  {
    question: "What happens during the repolarization phase of an action potential?",
    options: [
      "Sodium ions enter the neuron",
      "Potassium ions exit the neuron",
      "Calcium ions bind to receptors",
      "The neuron becomes hyperpolarized",
    ],
    correctAnswer: "Potassium ions exit the neuron",
    explanation: "During repolarization, potassium ions exit the neuron, restoring the negative charge inside the neuron after depolarization."
  },
  {
    question: "What is the role of oligodendrocytes in the CNS?",
    options: [
      "Transmit nerve signals",
      "Form myelin sheaths around axons",
      "Remove pathogens",
      "Produce cerebrospinal fluid",
    ],
    correctAnswer: "Form myelin sheaths around axons",
    explanation: "Oligodendrocytes form myelin sheaths around the axons of neurons in the central nervous system, speeding up signal transmission."
  },
  {
    question: "Which condition is caused by the loss of dopamine-producing neurons?",
    options: [
      "Alzheimer's disease",
      "Multiple sclerosis",
      "Parkinson's disease",
      "Epilepsy",
    ],
    correctAnswer: "Parkinson's disease",
    explanation: "Parkinson's disease is caused by the degeneration of dopamine-producing neurons in the substantia nigra, leading to motor impairments."
  },
  {
    question: "What is the main function of astrocytes in the nervous system?",
    options: [
      "Generate action potentials",
      "Transmit nerve signals",
      "Provide structural and metabolic support to neurons",
      "Form myelin sheaths",
    ],
    correctAnswer: "Provide structural and metabolic support to neurons",
    explanation: "Astrocytes are star-shaped glial cells that provide structural support, regulate the extracellular environment, and contribute to the blood-brain barrier."
  },


  

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




