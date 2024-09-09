document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const homeScreen = document.getElementById('home-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const backBtn = document.querySelector('.back-btn');
    const closeButtons = document.querySelectorAll('.close-btn');
    const submitBtn = document.getElementById('submit-btn');
    const quizCategory = document.getElementById('quiz-category');
    const questionNumber = document.getElementById('question-number');
    const questionText = document.getElementById('question-text');
    const answerOptions = document.getElementById('answer-options');
    const scorePercentage = document.getElementById('score-percentage');
    const scoreDetails = document.getElementById('score-details');

    let currentQuiz = null;
    let currentQuestionIndex = 0;
    let score = 0;
    let timer = null;






    const quizzes = [
    {
        category: 'Upper Limbs',
        questions: [
            {
                question: 'Damage to the upper trunk of brachial plexus leads to:',
                options: ['Erb’s palsy', 'Klumpke’s palsy', 'Ape hand', 'Pointing finger'],
                correctAnswer: 'Erb’s palsy'
            },
            {
                question: 'The blood pressure in upper limb is measured by compressing which artery?',
                options: ['Axillary artery', 'Brachial artery', 'Ulnar artery', 'Subclavian artery'],
                correctAnswer: 'Brachial artery'
            },
            {
                question: 'Which of the following is not a branch of the lateral cord of brachial plexus?',
                options: ['Lateral pectoral nerve', 'Lateral root of median nerve', 'Ulnar nerve', 'Musculocutaneous nerve'],
                correctAnswer: 'Ulnar nerve'
            },
            {
                question: 'Which of the following is not found in the cubital fossa?',
                options: ['Brachial artery', 'Median nerve', 'Tendon of biceps brachii', 'Ulnar nerve'],
                correctAnswer: 'Ulnar nerve'
            },
            {
                question: 'Which of the following is a ball & socket joint?',
                options: ['Elbow joint', 'Shoulder joint', 'Radioulnar joint', 'Wrist joint'],
                correctAnswer: 'Shoulder joint'
            },
            {
                question: 'Which nerve is compressed in carpal tunnel syndrome?',
                options: ['Radial nerve', 'Median nerve', 'Ulnar nerve', 'Musculocutaneous nerve'],
                correctAnswer: 'Median nerve'
            },
            {
                question: 'Which of the following is a uniaxial joint?',
                options: ['Wrist joint', 'First carpometacarpal joint', 'Ankle joint', 'Middle tibiofibular joint'],
                correctAnswer: 'Ankle joint'
            },
            {
                question: 'Where are pseudounipolar neurons found?',
                options: ['Retina', 'Olfactory mucosa', 'Spinal cord', 'Spinal ganglion'],
                correctAnswer: 'Spinal cord'
            },
            {
                question: 'Which of the following does not contribute to the parasympathetic system?',
                options: ['Glossopharyngeal nerve', 'Facial nerve', 'Occulomotor nerve', 'Vestibulocochlear nerve'],
                correctAnswer: 'Vestibulocochlear nerve'
            },
            {
                question: 'Which of the following is an atavistic epiphysis?',
                options: ['Coracoid process', 'Trochanter of femur', 'Lower end of fibula', 'Greater tubercle of humerus'],
                correctAnswer: 'Coracoid process'
            },
            {
                question: 'Damage to the lower trunk leads to:',
                options: ['Porter’s tip hand', 'Claw hand', 'Ape hand', 'Mallet’s finger'],
                correctAnswer: 'Claw hand'
            },
            {
                question: 'The nerve supply of deltoid muscle is:',
                options: ['Axillary nerve', 'Radial nerve', 'Ulnar nerve', 'Long thoracic nerve'],
                correctAnswer: 'Axillary nerve'
            },
            {
                question: 'Which of the following is not a branch of the axillary artery?',
                options: ['Subscapular artery', 'Suprascapular artery', 'Superior thoracic artery', 'Lateral thoracic artery'],
                correctAnswer: 'Suprascapular artery'
            },
            {
                question: 'Which of the following is the action of brachioradialis?',
                options: ['Flexion at wrist joint', 'Flexion at elbow in midprone forearm', 'Extension of forearm', 'Extension at wrist joint'],
                correctAnswer: 'Flexion at elbow in midprone forearm'
            },
            {
                question: 'Which cell is responsible for myelination in the central nervous system?',
                options: ['Ependymal cell', 'Schwann cell', 'Microglial cell', 'Oligodendrocyte'],
                correctAnswer: 'Oligodendrocyte'
            },
            {
                question: 'The cell responsible for bone remodeling is:',
                options: ['Osteoblast', 'Osteoclast', 'Both a & b', 'Neither a nor b'],
                correctAnswer: 'Both a & b'
            },
            {
                question: 'Which of the following is not a secondary cartilaginous joint?',
                options: ['Sacrococcygeal joint', 'Pubic symphysis', 'Manubriosternal joint', 'First costochondral joint'],
                correctAnswer: 'First costochondral joint'
            },
            {
                question: 'Which of the following movements is not possible at the sternoclavicular joint?',
                options: ['Protraction', 'Flexion', 'Elevation', 'Retraction'],
                correctAnswer: 'Flexion'
            },
            {
                question: 'Which nerve is related to the shaft of the humerus?',
                options: ['Radial nerve', 'Median nerve', 'Axillary nerve', 'Ulnar nerve'],
                correctAnswer: 'Radial nerve'
            },
            {
                question: 'Which of the following is an example of fibrocartilage?',
                options: ['Costal cartilage', 'Cricoid cartilage', 'Base of arytenoids cartilage', 'Acetabular labrum'],
                correctAnswer: 'Acetabular labrum'
            },
            {
                question: 'Which of the following muscles is not paralyzed in injury to the radial nerve in the spiral groove?',
                options: ['Long head of triceps', 'Brachioradialis', 'Anconeus', 'Extensor carpi radialis longus'],
                correctAnswer: 'Long head of triceps'
            },
            {
                question: 'Which muscle is responsible for the winging of the scapula when paralyzed?',
                options: ['Pectoralis minor', 'Rhomboids', 'Serratus anterior', 'Teres major'],
                correctAnswer: 'Serratus anterior'
            },
            {
                question: 'Which of the following is not found in the rotator cuff?',
                options: ['Subscapularis', 'Teres minor', 'Teres major', 'Supraspinatus'],
                correctAnswer: 'Teres major'
            },
            {
                question: 'The content of the quadrangular space includes:',
                options: ['Radial nerve', 'Axillary nerve', 'Profunda brachii artery', 'Circumflex scapular artery'],
                correctAnswer: 'Axillary nerve'
            },
            {
                question: 'Which of the following lymph nodes drains the first web space of the hand?',
                options: ['Apical axillary lymph node', 'Anterior axillary lymph node', 'Lateral axillary lymph node', 'Central axillary lymph node'],
                correctAnswer: 'Apical axillary lymph node'
            },
            {
                question: 'Which of the following is known as the "musician\'s nerve"?',
                options: ['Median nerve', 'Ulnar nerve', 'Radial nerve', 'Axillary nerve'],
                correctAnswer: 'Ulnar nerve'
            },
            {
                question: 'Which of the following is a multipennate muscle?',
                options: ['Dorsal interossei', 'Flexor pollicis longus', 'Rectus femoris', 'Subscapularis'],
                correctAnswer: 'Subscapularis'
            },
            {
                question: 'Dupuytren’s contracture involves:',
                options: ['Contracture of flexor muscles', 'Shortening of palmar aponeurosis', 'Contracture of extensor tendons', 'Ischaemic contracture of forearm muscles'],
                correctAnswer: 'Shortening of palmar aponeurosis'
            },
            {
                question: 'Which of the following is the pressure epiphysis?',
                options: ['Greater tubercle of humerus', 'Coracoid process', 'Head of femur', 'Head of 1st metacarpal'],
                correctAnswer: 'Head of femur'
            },
            {
                question: 'The floor of the anatomical snuffbox is formed by:',
                options: ['Triquetral bone', 'Capitate bone', 'Scaphoid bone', 'Hammate bone'],
                correctAnswer: 'Scaphoid bone'
            },
            {
                question: 'Which of the following is the action of Flexor digitorum profundus?',
                options: ['Flexion at elbow joint', 'Flexion at distal interphalangeal joint', 'Pronation of forearm', 'Flexion at first carpometacarpal joint'],
                correctAnswer: 'Flexion at distal interphalangeal joint'
            },

{
                question: 'Which of the following is Flexor digitorum profundus? ',
                options: ['Flexion at elbow joint', 'Flexion at distal interphalangeal joint', 'Pronation of forearm', 'Flexion at first carpometacarpal joint'],
                correctAnswer: 'Flexion at distal interphalangeal joint'
            },

{
                question: 'All are branches of the third part of the axillary artery except:',
                options: ['Subscapular artery', 'Posterior circumflex humeral artery', 'Thoracoacromial artery', 'Anterior circumflex humeral artery'],
                correctAnswer: 'Thoracoacromial artery'
            },
            {
                question: 'Brachioradialis is an example of:',
                options: ['Shunt muscle', 'Spin muscle', 'Spurt muscle', 'None of the above'],
                correctAnswer: 'Shunt muscle'
            },
            {
                question: 'All are examples of voluntary skeletal muscles except:',
                options: ['Genioglossus', 'Masseter', 'Inferior constrictor of pharynx', 'Mylohyoid'],
                correctAnswer: 'Inferior constrictor of pharynx'
            },
            {
                question: 'Line of weight transmission from the upper limb passes through:',
                options: ['Coracohumeral ligament', 'Annular ligament', 'Transverse humeral ligament', 'Coracoclavicular ligament'],
                correctAnswer: 'Coracoclavicular ligament'
            },
            {
                question: 'The content of Quadrangular space includes:',
                options: ['Radial nerve', 'Axillary nerve', 'Profunda brachii artery', 'Circumflex scapular artery'],
                correctAnswer: 'Axillary nerve'
            },
            {
                question: 'All is true of carpal tunnel syndrome except:',
                options: ['Paresthesia of radial 3 ½ fingers', 'Loss of sensation from radial aspect of palm', 'Paralysis of opponens pollicis', 'Ape thumb deformity'],
                correctAnswer: 'Loss of sensation from radial aspect of palm'
            },
            {
                question: 'Action of Palmer interossei:',
                options: ['Abduction of fingers', 'Extension of Metacarpophalangeal joint', 'Adduction of fingers', 'Flexion at Interphalangeal joint'],
                correctAnswer: 'Adduction of fingers'
            },
            {
                question: 'Which of the following is the nerve supply of 1st & 2nd Lumbricals?',
                options: ['Median nerve', 'Radial nerve', 'Superficial branch of ulnar nerve', 'Deep branch of ulnar nerve'],
                correctAnswer: 'Deep branch of ulnar nerve'
            },
            {
                question: 'All are causes of Erb’s palsy except:',
                options: ['Undue separation between trunk & upper arm', 'Undue separation between neck & shoulder', 'Birth injury', 'Anaesthetic block in neck'],
                correctAnswer: 'Undue separation between trunk & upper arm'
            },
            {
                question: 'Following are branches of posterior cord except:',
                options: ['Axillary nerve', 'Long thoracic nerve', 'Thoracodorsal nerve', 'Subscapular nerves'],
                correctAnswer: 'Long thoracic nerve'
            },
            {
                question: 'Which of the following forms parenchyma of breast?',
                options: ['Lactiferous ducts', 'Fat', 'Ligament of Cooper', 'Areola'],
                correctAnswer: 'Lactiferous ducts'
            },
            {
                question: 'All of the following need to be examined in a patient with carcinoma of breast except:',
                options: ['Opposite breast', 'Shoulder joint', 'Axilla', 'Neck'],
                correctAnswer: 'Shoulder joint'
            },
            {
                question: 'All are supplied by the median nerve in the forearm except:',
                options: ['Pronator Teres', 'Medial half of Flexor digitorum profundus', 'Palmaris longus', 'Lateral half of Flexor digitorum profundus'],
                correctAnswer: 'Medial half of Flexor digitorum profundus'
            },
            {
                question: 'Actual arterioarterial anastomosis is:',
                options: ['Anastomosis around elbow joint', 'Malleolar anastomosis', 'Circle of Willis', 'Trochanteric anastomosis'],
                correctAnswer: 'Circle of Willis'
            },
            {
                question: 'All are muscular arteries except:',
                options: ['Radial artery', 'Deep peroneal artery', 'Superficial temporal artery', 'Aorta'],
                correctAnswer: 'Aorta'
            },
            {
                question: 'Which of the following is the nerve supply of adductor pollicis?',
                options: ['Median nerve', 'Radial nerve', 'Superficial branch of ulnar nerve', 'Deep branch of ulnar nerve'],
                correctAnswer: 'Deep branch of ulnar nerve'
            },

{
                question: 'Which of the following is hyaline cartilage?',
                options: ['Pinna of ear', 'Epiglottis cartilage', 'Thyroid cartilage', 'Apex of the arytenoid cartilage'],
                correctAnswer: 'Thyroid cartilage'
            },


{
                question: 'All of the following are piercing clavipectoral fascia except',
                options: ['Cephalic vein', 'Lateral pectoral nerve', 'Medial pectoral nerve', 'Thoracoacromial vessels'],
                correctAnswer: 'Medial pectoral nerve'
            },









        //category: 'Osteology of the Upper Extremity 

            {
                question: 'Which bones make up the pectoral girdle?',
                options: ['Clavicle and Scapula', 'Humerus and Ulna', 'Radius and Carpus', 'Metacarpus and Phalanges'],
                correctAnswer: 'Clavicle and Scapula'
            },
            {
                question: 'Which bone connects the scapula to the thorax?',
                options: ['Clavicle', 'Humerus', 'Ulna', 'Radius'],
                correctAnswer: 'Clavicle'
            },
            {
                question: 'The clavicle has how many surfaces in the medial two-thirds?',
                options: ['Two', 'Three', 'Four', 'Five'],
                correctAnswer: 'Four'
            },
            {
                question: 'The lateral one-third of the clavicle is separated into how many borders?',
                options: ['One', 'Two', 'Three', 'Four'],
                correctAnswer: 'Two'
            },
            {
                question: 'At what age does the secondary center for the sternal end of the clavicle appear?',
                options: ['5-10 years', '10-15 years', '15-20 years', '20-25 years'],
                correctAnswer: '15-20 years'
            },
            {
                question: 'Which process of the scapula is attached to the body above the glenoid cavity?',
                options: ['Acromion process', 'Coracoid process', 'Supraspinous process', 'Infraspinous process'],
                correctAnswer: 'Coracoid process'
            },
            {
                question: 'The spine of the scapula divides the dorsal surface into which fossae?',
                options: ['Infrascapular and Suprascapular', 'Supraspinous and Infraspinous', 'Deltoid and Subscapular', 'Coracoid and Glenoid'],
                correctAnswer: 'Supraspinous and Infraspinous'
            },
            {
                question: 'Which surface of the scapula is concave and smooth?',
                options: ['Dorsal', 'Costal', 'Lateral', 'Medial'],
                correctAnswer: 'Costal'
            },
            {
                question: 'Which part of the humerus articulates with the glenoid cavity?',
                options: ['Head', 'Anatomical neck', 'Greater tubercle', 'Lesser tubercle'],
                correctAnswer: 'Head'
            },
            {
                question: 'Which nerve is closely related to the surgical neck of the humerus?',
                options: ['Axillary nerve', 'Radial nerve', 'Ulnar nerve', 'Median nerve'],
                correctAnswer: 'Axillary nerve'
            },
            {
                question: 'The radial groove on the humerus is located on which surface?',
                options: ['Anterior', 'Posterior', 'Medial', 'Lateral'],
                correctAnswer: 'Posterior'
            },
            {
                question: 'The capitulum of the humerus articulates with which bone?',
                options: ['Ulna', 'Radius', 'Scapula', 'Clavicle'],
                correctAnswer: 'Radius'
            },
            {
                question: 'What is the type of the elbow joint?',
                options: ['Ball and socket', 'Hinge', 'Saddle', 'Plane'],
                correctAnswer: 'Hinge'
            },
            {
                question: 'The olecranon fossa is located on which surface of the humerus?',
                options: ['Anterior', 'Posterior', 'Lateral', 'Medial'],
                correctAnswer: 'Posterior'
            },
            {
                question: 'Which artery lies in the intertubercular sulcus of the humerus?',
                options: ['Brachial artery', 'Radial artery', 'Anterior circumflex artery', 'Ascending branch of the anterior circumflex humeral artery'],
                correctAnswer: 'Ascending branch of the anterior circumflex humeral artery'
            },
            {
                question: 'Which part of the humerus is most likely to fracture at the surgical neck?',
                options: ['Radial nerve', 'Axillary nerve', 'Ulnar nerve', 'Median nerve'],
                correctAnswer: 'Axillary nerve'
            },
            {
                question: 'The head of the radius articulates with which part of the ulna?',
                options: ['Trochlear notch', 'Radial notch', 'Coronoid process', 'Olecranon'],
                correctAnswer: 'Radial notch'
            },
            {
                question: 'Which structure allows rotation of the radius around the ulna?',
                options: ['Trochlear notch', 'Radial notch', 'Annular ligament', 'Interosseous membrane'],
                correctAnswer: 'Annular ligament'
            },
            {
                question: 'Which bone of the upper limb is commonly fractured at its lower end resulting in a dinner fork deformity?',
                options: ['Radius', 'Ulna', 'Humerus', 'Scapula'],
                correctAnswer: 'Radius'
            },
            {
                question: 'The ulna is located on which side of the forearm?',
                options: ['Lateral', 'Medial', 'Anterior', 'Posterior'],
                correctAnswer: 'Medial'
            },
            {
                question: 'Which part of the ulna articulates with the trochlea of the humerus?',
                options: ['Coronoid process', 'Radial notch', 'Olecranon', 'Trochlear notch'],
                correctAnswer: 'Trochlear notch'
            },
            {
                question: 'At which age do the secondary centers of the ulna fuse with the shaft?',
                options: ['5 years', '10 years', '15 years', '20 years'],
                correctAnswer: '20 years'
            },
            {
                question: 'Which muscle inserts into the radial tuberosity?',
                options: ['Biceps brachii', 'Brachialis', 'Triceps brachii', 'Deltoid'],
                correctAnswer: 'Biceps brachii'
            },
            {
                question: 'Fracture at the surgical neck of the humerus is likely to affect which nerve?',
                options: ['Axillary nerve', 'Radial nerve', 'Ulnar nerve', 'Median nerve'],
                correctAnswer: 'Axillary nerve'
            },
            {
                question: 'Which artery supplies the deltoid muscle?',
                options: ['Axillary artery', 'Brachial artery', 'Posterior circumflex humeral artery', 'Subclavian artery'],
                correctAnswer: 'Posterior circumflex humeral artery'
            },
            {
                question: 'Which nerve is responsible for winging of the scapula?',
                options: ['Long thoracic nerve', 'Axillary nerve', 'Radial nerve', 'Ulnar nerve'],
                correctAnswer: 'Long thoracic nerve'
            },
            {
                question: 'Which muscle is affected in Erb’s palsy?',
                options: ['Deltoid', 'Biceps brachii', 'Infraspinatus', 'Supraspinatus'],
                correctAnswer: 'Supraspinatus'
            },
            {
                question: 'Which type of joint is the sternoclavicular joint?',
                options: ['Ball and socket', 'Hinge', 'Saddle', 'Pivot'],
                correctAnswer: 'Saddle'
            },
            {
                question: 'The clavicle articulates with which part of the scapula?',
                options: ['Acromion', 'Coracoid process', 'Spine', 'Supraspinous fossa'],
                correctAnswer: 'Acromion'
            },
            {
                question: 'Which ligament bridges the upper end of the intertubercular sulcus of the humerus?',
                options: ['Coracohumeral ligament', 'Transverse humeral ligament', 'Annular ligament', 'Glenohumeral ligament'],
                correctAnswer: 'Transverse humeral ligament'
            },
            {
                question: 'Which artery is responsible for supplying the shoulder joint?',
                options: ['Suprascapular artery', 'Axillary artery', 'Radial artery', 'Brachial artery'],
                correctAnswer: 'Suprascapular artery'
            },
            {
                question: 'The most movable joint in the upper extremity is the:',
                options: ['Elbow joint', 'Shoulder joint', 'Wrist joint', 'Sternoclavicular joint'],
                correctAnswer: 'Shoulder joint'
            },
            {
                question: 'Which muscle is responsible for initial abduction of the arm?',
                options: ['Supraspinatus', 'Deltoid', 'Infraspinatus', 'Teres minor'],
                correctAnswer: 'Supraspinatus'
            },
            {
                question: 'Which nerve is involved in Klumpke’s paralysis?',
                options: ['C8-T1', 'C5-C6', 'C7', 'T2'],
                correctAnswer: 'C8-T1'
            },


{
                question: 'What is the primary function of the clavicle?',
                options: ['Support the shoulder girdle', 'Connect the humerus to the scapula', 'Facilitate movement of the arm', 'Anchor the ribcage'],
                correctAnswer: 'Support the shoulder girdle'
            },
            {
                question: 'Fracture of the clavicle commonly occurs between which ligaments?',
                options: ['Costoclavicular and Coracoclavicular', 'Glenohumeral and Acromioclavicular', 'Annular and Radial collateral', 'Ulnar collateral and Transverse humeral'],
                correctAnswer: 'Costoclavicular and Coracoclavicular'
            },
            {
                question: 'The deltoid tubercle is located on which bone?',
                options: ['Clavicle', 'Scapula', 'Humerus', 'Radius'],
                correctAnswer: 'Clavicle'
            },
            {
                question: 'Which surface of the scapula accommodates the spine?',
                options: ['Anterior surface', 'Costal surface', 'Dorsal surface', 'Medial surface'],
                correctAnswer: 'Dorsal surface'
            },
            {
                question: 'What structure passes through the suprascapular notch?',
                options: ['Suprascapular nerve', 'Axillary nerve', 'Radial nerve', 'Ulnar nerve'],
                correctAnswer: 'Suprascapular nerve'
            },
            {
                question: 'The head of the humerus articulates with which part of the scapula?',
                options: ['Coracoid process', 'Glenoid cavity', 'Supraspinous fossa', 'Acromion'],
                correctAnswer: 'Glenoid cavity'
            },
            {
                question: 'Which process of the scapula articulates with the clavicle?',
                options: ['Coracoid process', 'Acromion', 'Spine', 'Supraglenoid tubercle'],
                correctAnswer: 'Acromion'
            },
            {
                question: 'Which structure is responsible for stabilizing the head of the humerus during movement?',
                options: ['Rotator cuff muscles', 'Deltoid muscle', 'Pectoralis major', 'Biceps brachii'],
                correctAnswer: 'Rotator cuff muscles'
            },
            {
                question: 'Which nerve innervates the deltoid muscle?',
                options: ['Axillary nerve', 'Radial nerve', 'Median nerve', 'Musculocutaneous nerve'],
                correctAnswer: 'Axillary nerve'
            },
            {
                question: 'The trochlea of the humerus articulates with which part of the ulna?',
                options: ['Radial notch', 'Coronoid process', 'Olecranon', 'Trochlear notch'],
                correctAnswer: 'Trochlear notch'
            },
            {
                question: 'Which muscle attaches to the greater tubercle of the humerus?',
                options: ['Supraspinatus', 'Biceps brachii', 'Deltoid', 'Subscapularis'],
                correctAnswer: 'Supraspinatus'
            },
            {
                question: 'The surgical neck of the humerus is located between which two parts?',
                options: ['Head and Shaft', 'Head and Anatomical neck', 'Greater and Lesser tubercle', 'Shaft and Distal end'],
                correctAnswer: 'Head and Shaft'
            },
            {
                question: 'The radial groove on the humerus contains which nerve?',
                options: ['Radial nerve', 'Axillary nerve', 'Median nerve', 'Ulnar nerve'],
                correctAnswer: 'Radial nerve'
            },
            {
                question: 'The interosseous membrane is located between which two bones?',
                options: ['Radius and Ulna', 'Humerus and Scapula', 'Radius and Humerus', 'Clavicle and Scapula'],
                correctAnswer: 'Radius and Ulna'
            },
            {
                question: 'Which part of the radius articulates with the capitulum of the humerus?',
                options: ['Radial head', 'Radial tuberosity', 'Radial notch', 'Styloid process'],
                correctAnswer: 'Radial head'
            },
            {
                question: 'The ulnar styloid process is located on which part of the ulna?',
                options: ['Distal end', 'Proximal end', 'Radial notch', 'Trochlear notch'],
                correctAnswer: 'Distal end'
            },
            {
                question: 'The brachial artery is a continuation of which artery?',
                options: ['Axillary artery', 'Radial artery', 'Subclavian artery', 'Ulnar artery'],
                correctAnswer: 'Axillary artery'
            },
            {
                question: 'Which structure is located in the cubital fossa?',
                options: ['Median nerve', 'Axillary artery', 'Radial nerve', 'Ulnar nerve'],
                correctAnswer: 'Median nerve'
            },
            {
                question: 'The lateral epicondyle of the humerus is the origin for which muscle group?',
                options: ['Wrist extensors', 'Wrist flexors', 'Forearm pronators', 'Forearm supinators'],
                correctAnswer: 'Wrist extensors'
            },
            {
                question: 'Which ligament stabilizes the proximal radioulnar joint?',
                options: ['Annular ligament', 'Radial collateral ligament', 'Ulnar collateral ligament', 'Transverse humeral ligament'],
                correctAnswer: 'Annular ligament'
            },
            {
                question: 'Which muscle is the chief extensor of the forearm?',
                options: ['Triceps brachii', 'Brachialis', 'Biceps brachii', 'Anconeus'],
                correctAnswer: 'Triceps brachii'
            },
            {
                question: 'Which artery supplies the elbow joint?',
                options: ['Brachial artery', 'Radial artery', 'Profunda brachii artery', 'Ulnar artery'],
                correctAnswer: 'Profunda brachii artery'
            },
            {
                question: 'The olecranon process is located on which bone?',
                options: ['Ulna', 'Radius', 'Humerus', 'Scapula'],
                correctAnswer: 'Ulna'
            },
            {
                question: 'Fracture of the radial head may limit which movement?',
                options: ['Supination', 'Pronation', 'Flexion', 'Extension'],
                correctAnswer: 'Supination'
            },
            {
                question: 'Which muscle inserts onto the coracoid process of the scapula?',
                options: ['Pectoralis minor', 'Biceps brachii', 'Trapezius', 'Latissimus dorsi'],
                correctAnswer: 'Pectoralis minor'
            },
            {
                question: 'The lateral border of the scapula extends from which structure?',
                options: ['Glenoid cavity', 'Spine of scapula', 'Superior angle', 'Acromion'],
                correctAnswer: 'Glenoid cavity'
            },
            {
                question: 'Which nerve supplies the serratus anterior muscle?',
                options: ['Long thoracic nerve', 'Axillary nerve', 'Radial nerve', 'Median nerve'],
                correctAnswer: 'Long thoracic nerve'
            },
            {
                question: 'The intertubercular sulcus of the humerus accommodates which structure?',
                options: ['Tendon of the long head of the biceps', 'Ulnar nerve', 'Radial artery', 'Profunda brachii artery'],
                correctAnswer: 'Tendon of the long head of the biceps'
            },
            {
                question: 'Which muscle is primarily responsible for the protraction of the scapula?',
                options: ['Serratus anterior', 'Trapezius', 'Deltoid', 'Latissimus dorsi'],
                correctAnswer: 'Serratus anterior'
            },
            {
                question: 'Which nerve is involved in Horner’s syndrome due to Klumpke’s paralysis?',
                options: ['Sympathetic fibers of T1', 'Radial nerve', 'Median nerve', 'Ulnar nerve'],
                correctAnswer: 'Sympathetic fibers of T1'
            },
            {
                question: 'Which part of the brachial plexus is affected in Erb’s palsy?',
                options: ['Upper trunk', 'Lower trunk', 'Lateral cord', 'Medial cord'],
                correctAnswer: 'Upper trunk'
            },
            {
                question: 'Which artery forms an anastomosis around the elbow joint?',
                options: ['Profunda brachii artery', 'Axillary artery', 'Subclavian artery', 'Circumflex humeral artery'],
                correctAnswer: 'Profunda brachii artery'
            },
            {
                question: 'The lateral supracondylar ridge is located on which bone?',
                options: ['Humerus', 'Radius', 'Ulna', 'Clavicle'],
                correctAnswer: 'Humerus'
            },



{
                question: 'The bicipital groove of the humerus accommodates which structure?',
                options: ['Tendon of the long head of biceps', 'Radial nerve', 'Ulnar artery', 'Axillary nerve'],
                correctAnswer: 'Tendon of the long head of biceps'
            },
            {
                question: 'The interosseous membrane primarily serves to:',
                options: ['Connect the radius and ulna', 'Stabilize the elbow joint', 'Anchor the humerus to the scapula', 'Support the shoulder joint'],
                correctAnswer: 'Connect the radius and ulna'
            },
            {
                question: 'The greater tubercle of the humerus provides attachment for which muscles?',
                options: ['Rotator cuff muscles', 'Biceps brachii', 'Deltoid', 'Triceps brachii'],
                correctAnswer: 'Rotator cuff muscles'
            },
            {
                question: 'Which artery supplies the forearm flexor muscles?',
                options: ['Radial artery', 'Ulnar artery', 'Brachial artery', 'Subclavian artery'],
                correctAnswer: 'Ulnar artery'
            },
            {
                question: 'Which muscle originates from the supraglenoid tubercle?',
                options: ['Biceps brachii', 'Triceps brachii', 'Deltoid', 'Coracobrachialis'],
                correctAnswer: 'Biceps brachii'
            },
            {
                question: 'The lateral epicondyle of the humerus is the origin for which muscle group?',
                options: ['Extensors of the wrist', 'Flexors of the wrist', 'Supinators of the forearm', 'Pronators of the forearm'],
                correctAnswer: 'Extensors of the wrist'
            },
            {
                question: 'Which nerve is associated with the medial epicondyle of the humerus?',
                options: ['Ulnar nerve', 'Radial nerve', 'Median nerve', 'Axillary nerve'],
                correctAnswer: 'Ulnar nerve'
            },
            {
                question: 'The radial styloid process is located at which part of the radius?',
                options: ['Distal end', 'Proximal end', 'Middle', 'Radial notch'],
                correctAnswer: 'Distal end'
            },
            {
                question: 'The cubital fossa contains which structure?',
                options: ['Brachial artery', 'Axillary nerve', 'Ulnar nerve', 'Posterior circumflex artery'],
                correctAnswer: 'Brachial artery'
            },
            {
                question: 'The coracoid process of the scapula serves as an attachment for which muscle?',
                options: ['Biceps brachii', 'Deltoid', 'Triceps brachii', 'Pectoralis minor'],
                correctAnswer: 'Pectoralis minor'
            },
            {
                question: 'The elbow joint is classified as what type of joint?',
                options: ['Hinge joint', 'Ball and socket joint', 'Pivot joint', 'Saddle joint'],
                correctAnswer: 'Hinge joint'
            },
            {
                question: 'Which muscle group is responsible for supination of the forearm?',
                options: ['Biceps brachii and supinator', 'Triceps brachii and pronator teres', 'Brachialis and deltoid', 'Flexor carpi ulnaris and pronator quadratus'],
                correctAnswer: 'Biceps brachii and supinator'
            },
            {
                question: 'Which artery primarily supplies the upper limb?',
                options: ['Brachial artery', 'Axillary artery', 'Radial artery', 'Ulnar artery'],
                correctAnswer: 'Brachial artery'
            },
            {
                question: 'The glenoid labrum is responsible for:',
                options: ['Deepening the glenoid cavity', 'Stabilizing the humeral head', 'Preventing shoulder dislocation', 'All of the above'],
                correctAnswer: 'All of the above'
            },
            {
                question: 'Which muscle is the chief flexor of the forearm?',
                options: ['Brachialis', 'Triceps brachii', 'Deltoid', 'Pectoralis major'],
                correctAnswer: 'Brachialis'
            },
            {
                question: 'The radial nerve passes through which space in the arm?',
                options: ['Radial groove', 'Suprascapular notch', 'Intertubercular sulcus', 'Axillary fossa'],
                correctAnswer: 'Radial groove'
            },
            {
                question: 'Which structure stabilizes the radius and ulna at the distal end?',
                options: ['Interosseous membrane', 'Radial collateral ligament', 'Ulnar collateral ligament', 'Annular ligament'],
                correctAnswer: 'Interosseous membrane'
            },
            {
                question: 'The surgical neck of the humerus is prone to injury involving which nerve?',
                options: ['Axillary nerve', 'Radial nerve', 'Ulnar nerve', 'Median nerve'],
                correctAnswer: 'Axillary nerve'
            },
            {
                question: 'Which bone forms the majority of the elbow joint with the humerus?',
                options: ['Ulna', 'Radius', 'Scapula', 'Clavicle'],
                correctAnswer: 'Ulna'
            },
            {
                question: 'The tendon of which muscle passes through the bicipital groove of the humerus?',
                options: ['Long head of biceps brachii', 'Short head of biceps brachii', 'Triceps brachii', 'Deltoid'],
                correctAnswer: 'Long head of biceps brachii'
            },
            {
                question: 'The coronoid fossa of the humerus receives which structure during elbow flexion?',
                options: ['Coronoid process of the ulna', 'Head of the radius', 'Olecranon process', 'Radial tuberosity'],
                correctAnswer: 'Coronoid process of the ulna'
            },
            {
                question: 'The medial border of the scapula is also known as the:',
                options: ['Vertebral border', 'Axillary border', 'Cervical border', 'Costal border'],
                correctAnswer: 'Vertebral border'
            },
            {
                question: 'Which ligament prevents upward displacement of the humeral head?',
                options: ['Coracoacromial ligament', 'Transverse humeral ligament', 'Glenohumeral ligament', 'Annular ligament'],
                correctAnswer: 'Coracoacromial ligament'
            },
            {
                question: 'The musculocutaneous nerve supplies which group of muscles?',
                options: ['Flexors of the arm', 'Extensors of the arm', 'Flexors of the forearm', 'Extensors of the forearm'],
                correctAnswer: 'Flexors of the arm'
            },
            {
                question: 'The radial nerve is most commonly injured in fractures of which part of the humerus?',
                options: ['Shaft', 'Head', 'Surgical neck', 'Greater tubercle'],
                correctAnswer: 'Shaft'
            },
            {
                question: 'The olecranon is part of which bone?',
                options: ['Ulna', 'Radius', 'Humerus', 'Scapula'],
                correctAnswer: 'Ulna'
            },
            {
                question: 'Fracture of the scaphoid bone can lead to damage of which artery?',
                options: ['Radial artery', 'Ulnar artery', 'Brachial artery', 'Axillary artery'],
                correctAnswer: 'Radial artery'
            },
            {
                question: 'Which muscle is responsible for initiating abduction of the arm?',
                options: ['Supraspinatus', 'Deltoid', 'Infraspinatus', 'Teres minor'],
                correctAnswer: 'Supraspinatus'
            },
            {
                question: 'The posterior circumflex humeral artery is a branch of which artery?',
                options: ['Axillary artery', 'Brachial artery', 'Radial artery', 'Subclavian artery'],
                correctAnswer: 'Axillary artery'
            },
            {
                question: 'The head of the radius articulates with which part of the humerus?',
                options: ['Capitulum', 'Trochlea', 'Coronoid fossa', 'Olecranon fossa'],
                correctAnswer: 'Capitulum'
            },



{
    question: 'The anatomical snuff box is located on which part of the hand?',
    options: ['Dorsal aspect', 'Palmar aspect', 'Lateral aspect', 'Medial aspect'],
    correctAnswer: 'Dorsal aspect'
},
{
    question: 'Which artery passes through the anatomical snuff box?',
    options: ['Radial artery', 'Ulnar artery', 'Brachial artery', 'Axillary artery'],
    correctAnswer: 'Radial artery'
},
{
    question: 'Which tendons form the boundaries of the anatomical snuff box?',
    options: ['Extensor pollicis longus, Extensor pollicis brevis, Abductor pollicis longus', 'Extensor carpi radialis, Extensor digitorum, Extensor indicis', 'Flexor carpi ulnaris, Flexor pollicis longus, Abductor digiti minimi', 'Palmaris longus, Flexor digitorum superficialis, Pronator quadratus'],
    correctAnswer: 'Extensor pollicis longus, Extensor pollicis brevis, Abductor pollicis longus'
},
{
    question: 'Which bone can be palpated in the floor of the anatomical snuff box?',
    options: ['Scaphoid', 'Lunate', 'Pisiform', 'Trapezium'],
    correctAnswer: 'Scaphoid'
},


{
    question: 'Which nerve passes through the carpal tunnel?',
    options: ['Median nerve', 'Ulnar nerve', 'Radial nerve', 'Axillary nerve'],
    correctAnswer: 'Median nerve'
},
{
    question: 'Which structure forms the roof of the carpal tunnel?',
    options: ['Flexor retinaculum', 'Extensor retinaculum', 'Palmar aponeurosis', 'Transverse carpal ligament'],
    correctAnswer: 'Flexor retinaculum'
},
{
    question: 'How many tendons pass through the carpal tunnel?',
    options: ['9', '5', '10', '7'],
    correctAnswer: '9'
},
{
    question: 'Compression of the median nerve in the carpal tunnel results in which condition?',
    options: ['Carpal tunnel syndrome', 'Cubital tunnel syndrome', 'Radial nerve palsy', 'Thoracic outlet syndrome'],
    correctAnswer: 'Carpal tunnel syndrome'
},
{
    question: 'Which tendons pass through the carpal tunnel?',
    options: ['Flexor digitorum superficialis and flexor digitorum profundus', 'Extensor digitorum and extensor indicis', 'Flexor pollicis longus and extensor pollicis brevis', 'Abductor pollicis longus and flexor carpi ulnaris'],
    correctAnswer: 'Flexor digitorum superficialis and flexor digitorum profundus'
},
{
    question: 'Which bone forms part of the floor of the carpal tunnel?',
    options: ['Scaphoid', 'Pisiform', 'Lunate', 'Trapezium'],
    correctAnswer: 'Scaphoid'
},


{
    question: 'What is the primary function of the flexor retinaculum?',
    options: ['Forms the roof of the carpal tunnel', 'Prevents dislocation of the shoulder', 'Holds the tendons of the extensor muscles', 'Stabilizes the elbow joint'],
    correctAnswer: 'Forms the roof of the carpal tunnel'
},
{
    question: 'The flexor retinaculum is attached to which bones?',
    options: ['Pisiform and Scaphoid', 'Scaphoid and Trapezium', 'Pisiform and Hamate', 'Radius and Ulna'],
    correctAnswer: 'Pisiform and Hamate'
},
{
    question: 'Which structure passes superficial to the flexor retinaculum?',
    options: ['Ulnar nerve', 'Median nerve', 'Radial nerve', 'Extensor digitorum'],
    correctAnswer: 'Ulnar nerve'
},
{
    question: 'The extensor retinaculum is located on which side of the wrist?',
    options: ['Dorsal side', 'Palmar side', 'Medial side', 'Lateral side'],
    correctAnswer: 'Dorsal side'
},
{
    question: 'What is the function of the extensor retinaculum?',
    options: ['Holds the extensor tendons in place', 'Forms the roof of the carpal tunnel', 'Holds the flexor tendons in place', 'Prevents dislocation of the ulna'],
    correctAnswer: 'Holds the extensor tendons in place'
},
{
    question: 'Which tendons pass through the extensor retinaculum?',
    options: ['Extensor digitorum and Extensor pollicis longus', 'Flexor carpi ulnaris and Flexor digitorum superficialis', 'Biceps brachii and Triceps brachii', 'Palmaris longus and Pronator teres'],
    correctAnswer: 'Extensor digitorum and Extensor pollicis longus'
},


{
        question: 'What nerve is most likely to be injured in a fracture of the surgical neck of the humerus?',
        options: ['Axillary nerve', 'Radial nerve', 'Ulnar nerve', 'Median nerve'],
        correctAnswer: 'Axillary nerve'
    },
    {
        question: 'Damage to the upper trunk of the brachial plexus (C5-C6) leads to which condition?',
        options: ['Erb’s palsy', 'Klumpke’s palsy', 'Ape hand', 'Wrist drop'],
        correctAnswer: 'Erb’s palsy'
    },
    {
        question: 'Compression of the median nerve in the carpal tunnel results in:',
        options: ['Carpal tunnel syndrome', 'Cubital tunnel syndrome', 'Thoracic outlet syndrome', 'Guyon’s canal syndrome'],
        correctAnswer: 'Carpal tunnel syndrome'
    },
    {
        question: 'A person falls on an outstretched hand, resulting in a common fracture between the costoclavicular and coracoclavicular ligaments. Which bone is fractured?',
        options: ['Clavicle', 'Scapula', 'Humerus', 'Radius'],
        correctAnswer: 'Clavicle'
    },
    {
        question: 'Fracture of the midshaft of the humerus is most likely to injure which nerve?',
        options: ['Radial nerve', 'Ulnar nerve', 'Axillary nerve', 'Median nerve'],
        correctAnswer: 'Radial nerve'
    },
    {
        question: 'Injury to the long thoracic nerve results in which clinical condition?',
        options: ['Winging of scapula', 'Foot drop', 'Wrist drop', 'Claw hand'],
        correctAnswer: 'Winging of scapula'
    },
    {
        question: 'Which muscle is paralyzed in a patient with Erb’s palsy?',
        options: ['Deltoid', 'Triceps brachii', 'Pectoralis major', 'Supraspinatus'],
        correctAnswer: 'Supraspinatus'
    },
    {
        question: 'Injury to the lower trunk of the brachial plexus (C8-T1) causes which condition?',
        options: ['Klumpke’s palsy', 'Erb’s palsy', 'Ape hand', 'Wrist drop'],
        correctAnswer: 'Klumpke’s palsy'
    },
    {
        question: 'In Klumpke’s palsy, which muscles are most likely to be affected?',
        options: ['Intrinsic muscles of the hand', 'Flexors of the arm', 'Extensors of the arm', 'Flexors of the forearm'],
        correctAnswer: 'Intrinsic muscles of the hand'
    },
    {
        question: 'Fracture of the scaphoid bone can lead to avascular necrosis due to injury to which artery?',
        options: ['Radial artery', 'Ulnar artery', 'Brachial artery', 'Axillary artery'],
        correctAnswer: 'Radial artery'
    },
    {
        question: 'A fall on an outstretched hand can result in a fracture of the distal radius, also known as:',
        options: ['Colles’ fracture', 'Smith’s fracture', 'Bennett’s fracture', 'Monteggia fracture'],
        correctAnswer: 'Colles’ fracture'
    },
    {
        question: 'What condition results from thickening of the supraspinatus tendon or inflammation of the subacromial bursa, causing pain during abduction?',
        options: ['Painful arc syndrome', 'Frozen shoulder', 'Winging of scapula', 'Erb’s palsy'],
        correctAnswer: 'Painful arc syndrome'
    },
    {
        question: 'Which nerve is most likely to be compressed in cubital tunnel syndrome?',
        options: ['Ulnar nerve', 'Radial nerve', 'Median nerve', 'Axillary nerve'],
        correctAnswer: 'Ulnar nerve'
    },
    {
        question: 'A patient presents with pain and tenderness over the lateral epicondyle. This condition is known as:',
        options: ['Tennis elbow', 'Golfer’s elbow', 'Carpal tunnel syndrome', 'Cubital tunnel syndrome'],
        correctAnswer: 'Tennis elbow'
    },
    {
        question: 'Golfer’s elbow is characterized by pain and tenderness over which structure?',
        options: ['Medial epicondyle', 'Lateral epicondyle', 'Olecranon', 'Radial head'],
        correctAnswer: 'Medial epicondyle'
    },
    {
        question: 'Injury to the brachial artery during a supracondylar fracture of the humerus may result in which condition?',
        options: ['Volkmann’s ischemic contracture', 'Frozen shoulder', 'Carpal tunnel syndrome', 'Wrist drop'],
        correctAnswer: 'Volkmann’s ischemic contracture'
    },
    {
        question: 'Which structure is commonly compressed in thoracic outlet syndrome?',
        options: ['Brachial plexus', 'Femoral nerve', 'Radial nerve', 'Median nerve'],
        correctAnswer: 'Brachial plexus'
    },
    {
        question: 'Injury to the ulnar nerve at the elbow can result in which deformity of the hand?',
        options: ['Claw hand', 'Ape hand', 'Wrist drop', 'Waiter’s tip deformity'],
        correctAnswer: 'Claw hand'
    },
    {
        question: 'Damage to the radial nerve in the arm can result in which clinical condition?',
        options: ['Wrist drop', 'Claw hand', 'Ape hand', 'Waiter’s tip deformity'],
        correctAnswer: 'Wrist drop'
    },
    {
        question: 'Injury to the axillary nerve can result in difficulty performing which movement?',
        options: ['Abduction of the arm', 'Flexion of the forearm', 'Pronation of the forearm', 'Extension of the wrist'],
        correctAnswer: 'Abduction of the arm'
    },



{
        question: 'The brachial plexus is formed by the ventral rami of which spinal nerves?',
        options: ['C5-T1', 'C1-C4', 'L1-L5', 'C7-T3'],
        correctAnswer: 'C5-T1'
    },
    {
        question: 'The upper trunk of the brachial plexus is formed by the fusion of which nerve roots?',
        options: ['C5 and C6', 'C6 and C7', 'C7 and T1', 'C8 and T1'],
        correctAnswer: 'C5 and C6'
    },
    {
        question: 'Which trunk of the brachial plexus gives rise to the suprascapular nerve?',
        options: ['Upper trunk', 'Middle trunk', 'Lower trunk', 'Posterior cord'],
        correctAnswer: 'Upper trunk'
    },
    {
        question: 'Which division of the brachial plexus forms the lateral cord?',
        options: ['Anterior divisions of the upper and middle trunks', 'Posterior divisions of all trunks', 'Anterior divisions of all trunks', 'Anterior division of the lower trunk'],
        correctAnswer: 'Anterior divisions of the upper and middle trunks'
    },
    {
        question: 'The posterior cord of the brachial plexus gives rise to which nerve?',
        options: ['Axillary nerve', 'Median nerve', 'Ulnar nerve', 'Musculocutaneous nerve'],
        correctAnswer: 'Axillary nerve'
    },
    {
        question: 'Which muscle is innervated by the musculocutaneous nerve, a branch of the lateral cord?',
        options: ['Biceps brachii', 'Triceps brachii', 'Deltoid', 'Teres minor'],
        correctAnswer: 'Biceps brachii'
    },
    {
        question: 'The radial nerve is a branch of which part of the brachial plexus?',
        options: ['Posterior cord', 'Lateral cord', 'Medial cord', 'Upper trunk'],
        correctAnswer: 'Posterior cord'
    },
    {
        question: 'Which nerve provides sensory innervation to the lateral aspect of the forearm?',
        options: ['Musculocutaneous nerve', 'Median nerve', 'Ulnar nerve', 'Radial nerve'],
        correctAnswer: 'Musculocutaneous nerve'
    },
    {
        question: 'Which nerve arises from the medial cord of the brachial plexus?',
        options: ['Ulnar nerve', 'Axillary nerve', 'Radial nerve', 'Suprascapular nerve'],
        correctAnswer: 'Ulnar nerve'
    },
    {
        question: 'Which nerve is responsible for flexion at the elbow and supination of the forearm?',
        options: ['Musculocutaneous nerve', 'Radial nerve', 'Median nerve', 'Ulnar nerve'],
        correctAnswer: 'Musculocutaneous nerve'
    },
    {
        question: 'The lateral cord contributes to the formation of which major nerve?',
        options: ['Median nerve', 'Radial nerve', 'Ulnar nerve', 'Axillary nerve'],
        correctAnswer: 'Median nerve'
    },
    {
        question: 'The long thoracic nerve arises from which nerve roots?',
        options: ['C5, C6, C7', 'C6, C7, C8', 'C8, T1', 'T1, T2'],
        correctAnswer: 'C5, C6, C7'
    },
    {
        question: 'Damage to the long thoracic nerve results in which condition?',
        options: ['Winging of scapula', 'Wrist drop', 'Claw hand', 'Erb’s palsy'],
        correctAnswer: 'Winging of scapula'
    },
    {
        question: 'Erb’s palsy is associated with injury to which part of the brachial plexus?',
        options: ['Upper trunk (C5-C6)', 'Lower trunk (C8-T1)', 'Lateral cord', 'Posterior cord'],
        correctAnswer: 'Upper trunk (C5-C6)'
    },
    {
        question: 'Klumpke’s palsy is caused by injury to which part of the brachial plexus?',
        options: ['Lower trunk (C8-T1)', 'Upper trunk (C5-C6)', 'Posterior cord', 'Lateral cord'],
        correctAnswer: 'Lower trunk (C8-T1)'
    },
    {
        question: 'The medial cord gives rise to which of the following nerves?',
        options: ['Ulnar nerve', 'Radial nerve', 'Axillary nerve', 'Musculocutaneous nerve'],
        correctAnswer: 'Ulnar nerve'
    },
    {
        question: 'Which cord of the brachial plexus gives rise to the radial nerve?',
        options: ['Posterior cord', 'Lateral cord', 'Medial cord', 'Upper trunk'],
        correctAnswer: 'Posterior cord'
    },
    {
        question: 'The suprascapular nerve arises from which trunk of the brachial plexus?',
        options: ['Upper trunk', 'Middle trunk', 'Lower trunk', 'Lateral cord'],
        correctAnswer: 'Upper trunk'
    },
    {
        question: 'Which nerve innervates the deltoid and teres minor muscles?',
        options: ['Axillary nerve', 'Radial nerve', 'Ulnar nerve', 'Median nerve'],
        correctAnswer: 'Axillary nerve'
    },
    {
        question: 'The cords of the brachial plexus are named based on their relationship to which structure?',
        options: ['Axillary artery', 'Subclavian artery', 'Axillary vein', 'Clavicle'],
        correctAnswer: 'Axillary artery'
    },


        ]
    },





 










// Lower limbs begin

{
            category: 'Lower Limbs',
            questions: [
                {
                    question: 'Which planet is known as the Red Planet?',
                    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
                    correctAnswer: 'Mars'
                },
                {
                    question: 'What is the chemical symbol for water?',
                    options: ['Wa', 'H2O', 'Ho', 'Hy'],
                    correctAnswer: 'H2O'
                },
                {
                    question: 'What is the powerhouse of the cell?',
                    options: ['Nucleus', 'Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus'],
                    correctAnswer: 'Mitochondria'
                }
            ]
        },


 


//Thorax Category Starts 

        {
            category: 'Thorax',
            questions: [
                {
                    question: 'Which planet is known as the Red Planet?',
                    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
                    correctAnswer: 'Mars'
                },
                {
                    question: 'What is the chemical symbol for water?',
                    options: ['Wa', 'H2O', 'Ho', 'Hy'],
                    correctAnswer: 'H2O'
                },
                {
                    question: 'What is the powerhouse of the cell?',
                    options: ['Nucleus', 'Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus'],
                    correctAnswer: 'Mitochondria'
                }
            ]
        },

        {
            category: 'Histology',
            questions: [
                {
                    question: 'Which planet is known as the Red Planet?',
                    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
                    correctAnswer: 'Mars'
                },
                {
                    question: 'What is the chemical symbol for water?',
                    options: ['Wa', 'H2O', 'Ho', 'Hy'],
                    correctAnswer: 'H2O'
                },
                {
                    question: 'What is the powerhouse of the cell?',
                    options: ['Nucleus', 'Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus'],
                    correctAnswer: 'Mitochondria'
                }
            ]
        },


        {
            category: 'Embryology',
            questions: [
                {
                    question: 'Which planet is known as the Red Planet?',
                    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
                    correctAnswer: 'Mars'
                },
                {
                    question: 'What is the chemical symbol for water?',
                    options: ['Wa', 'H2O', 'Ho', 'Hy'],
                    correctAnswer: 'H2O'
                },
                {
                    question: 'What is the powerhouse of the cell?',
                    options: ['Nucleus', 'Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus'],
                    correctAnswer: 'Mitochondria'
                }
            ]
        },


        {
            category: 'The Cell',
            questions: [
                {
                    question: 'Which planet is known as the Red Planet?',
                    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
                    correctAnswer: 'Mars'
                },
                {
                    question: 'What is the chemical symbol for water?',
                    options: ['Wa', 'H2O', 'Ho', 'Hy'],
                    correctAnswer: 'H2O'
                },
                {
                    question: 'What is the powerhouse of the cell?',
                    options: ['Nucleus', 'Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus'],
                    correctAnswer: 'Mitochondria'
                }
            ]
        },


        {
            category: 'Muscle Physiology',
            questions: [
                {
                    question: 'Which planet is known as the Red Planet?',
                    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
                    correctAnswer: 'Mars'
                },
                {
                    question: 'What is the chemical symbol for water?',
                    options: ['Wa', 'H2O', 'Ho', 'Hy'],
                    correctAnswer: 'H2O'
                },
                {
                    question: 'What is the powerhouse of the cell?',
                    options: ['Nucleus', 'Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus'],
                    correctAnswer: 'Mitochondria'
                }
            ]
        },
        // Add more categories here
    ];

    function showScreen(screen) {
        homeScreen.classList.add('hidden');
        quizScreen.classList.add('hidden');
        resultsScreen.classList.add('hidden');
        screen.classList.remove('hidden');

        // Reset animations
        screen.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-scale-in, .animate-stagger-in > *').forEach(el => {
            el.style.animation = 'none';
            el.offsetHeight; // Trigger reflow
            el.style.animation = null;
        });
    }

    function startQuiz(category) {
        currentQuiz = quizzes.find(quiz => quiz.category === category);
        if (!currentQuiz) {
            console.error('Quiz not found for the selected category');
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
        questionNumber.textContent = `Question: ${currentQuestionIndex + 1}/${currentQuiz.questions.length}`;
        questionText.textContent = question.question;
        answerOptions.innerHTML = '';

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.classList.add('answer-btn');
            button.innerHTML = `
                <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
                <span>${option}</span>
            `;
            button.addEventListener('click', () => selectAnswer(button));
            answerOptions.appendChild(button);
        });
    }

    function selectAnswer(selectedButton) {
        answerOptions.querySelectorAll('.answer-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        selectedButton.classList.add('selected');
    }

    function startTimer() {
        let timeLeft = 10; // 3 minutes
        const timerElement = document.getElementById('timer');

        clearInterval(timer);
        timer = setInterval(() => {
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} sec`;
            
            if (timeLeft === 0) {
                clearInterval(timer);
                submitAnswer();
            }
            timeLeft--;
        }, 1000);
    }

    function submitAnswer() {
        clearInterval(timer);
        const selectedAnswer = answerOptions.querySelector('.selected');
        if (selectedAnswer) {
            const userAnswer = selectedAnswer.querySelector('span:last-child').textContent.trim();
            if (userAnswer === currentQuiz.questions[currentQuestionIndex].correctAnswer) {
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
        
        let message = '';
        let trophyEmoji = '';
    
        if (percentage < 40) {
            message = "Keep practicing! You'll improve with time.";
            trophyEmoji = '😢';
        } else if (percentage >= 40 && percentage < 50) {
            message = "You're on the right track. A bit more study and you'll nail it!";
            trophyEmoji = '🙂';
        } else if (percentage >= 50 && percentage < 60) {
            message = "Good effort! You're making progress.";
            trophyEmoji = '👍';
        } else if (percentage >= 60 && percentage < 70) {
            message = "Well done! You're above average.";
            trophyEmoji = '😊';
        } else if (percentage >= 70 && percentage < 90) {
            message = "Great job! You've got a solid understanding.";
            trophyEmoji = '🎉';
        } else {
            message = "Outstanding! You've mastered this topic!";
            trophyEmoji = '🏆';
        }
    
        const resultsBox = document.querySelector('.results-box');
        resultsBox.innerHTML = `
            <div class="trophy">${trophyEmoji}</div>
            <h2>Quiz Completed!</h2>
            <h3>${percentage.toFixed(0)}% Score</h3>
            <p>${message}</p>
            <p>You attempted ${currentQuiz.questions.length} questions and got ${score} correct.</p>
        `;
    }

    
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            startQuiz(category);
        });
    });

    backBtn.addEventListener('click', () => showScreen(homeScreen));
    closeButtons.forEach(button => {
        button.addEventListener('click', () => showScreen(homeScreen));
    });
    submitBtn.addEventListener('click', submitAnswer);
});