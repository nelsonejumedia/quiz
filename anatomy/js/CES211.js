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
        category: "GST113",
        questions: [

            
  // CHAPTER ONE
  {
    question: "According to Deustch, conflicts may arise from what?",
    options: ["Differences in values", "Scarcity of resources", "Rivalries", "All of the above"],
    correctAnswer: "All of the above",
    explanation: "Deustch attributes conflict to differences in values, scarcity of resources, and rivalries — all of the above."
  },
  {
    question: "Peace is generally defined as what?",
    options: [
      "The presence of war and conflict",
      "The absence of war, conflict, anxiety, suffering, and violence",
      "The absence of communication",
      "A temporary state of non-violence"
    ],
    correctAnswer: "The absence of war, conflict, anxiety, suffering, and violence",
    explanation: "Peace is generally defined as the absence of war, conflict, anxiety, suffering, and violence."
  },
  {
    question: "Galtung's concept of 'positive peace' includes what?",
    options: [
      "The absence of direct violence only",
      "The absence of unjust structures and unequal relationships",
      "The presence of cultural violence",
      "Perpetual war"
    ],
    correctAnswer: "The absence of unjust structures and unequal relationships",
    explanation: "Galtung's positive peace includes the absence of unjust structures and unequal relationships."
  },
  {
    question: "Structural violence is defined as what?",
    options: [
      "Physical harm caused directly by individuals",
      "Embedded social and political hierarchies that cause harm",
      "Cultural norms creating discrimination",
      "None of the above"
    ],
    correctAnswer: "Embedded social and political hierarchies that cause harm",
    explanation: "Structural violence refers to embedded social and political hierarchies that cause harm."
  },
  {
    question: "Which theory suggests that people are naturally predisposed to conflict due to selfishness?",
    options: ["Structural conflict theory", "Realist theory", "Economic theory", "Relational theory"],
    correctAnswer: "Realist theory",
    explanation: "Realist theory suggests people are naturally predisposed to conflict due to selfishness and pursuit of power."
  },

  // CHAPTER TWO
  {
    question: "What percentage of African countries has experienced at least a year of armed conflict in the past three decades?",
    options: ["About one third", "More than half", "One fifth", "Three quarters"],
    correctAnswer: "More than half",
    explanation: "More than half of African countries have experienced at least a year of armed conflict in the past three decades."
  },
  {
    question: "According to Webster's Student Dictionary, conflict can be defined as what?",
    options: ["A healthy opposition", "A prolonged struggle or sharp disagreement", "A friendly debate", "A mild disagreement"],
    correctAnswer: "A prolonged struggle or sharp disagreement",
    explanation: "Webster's Student Dictionary defines conflict as a prolonged struggle or sharp disagreement."
  },
  {
    question: "What political factors have led to intense violence and conflicts in African countries?",
    options: [
      "Economic stability",
      "Boundary disputes, election disputes, inept leadership, political corruption",
      "Stable governments",
      "Efficient institutions"
    ],
    correctAnswer: "Boundary disputes, election disputes, inept leadership, political corruption",
    explanation: "These political factors have led to intense violence and conflict in African countries."
  },
  {
    question: "A classic example of ethnic violence in Africa was the 1994 genocide in what country?",
    options: ["Kenya", "Nigeria", "Rwanda and Burundi", "Ghana"],
    correctAnswer: "Rwanda and Burundi",
    explanation: "The 1994 genocide in Rwanda and Burundi is a classic example of ethnic violence in Africa."
  },
  {
    question: "In Nigeria, the socio-cultural arrangement that has often resulted in conflicts is between whom?",
    options: [
      "Christians and Muslims",
      "Farmers and herdsmen",
      "Urban and rural dwellers",
      "Government and opposition parties"
    ],
    correctAnswer: "Christians and Muslims",
    explanation: "Conflicts in Nigeria have often resulted from tensions between Christians and Muslims."
  },

  // CHAPTER THREE
  {
    question: "According to Afegbua (2014), why are conflicts common and unavoidable in all human societies?",
    options: [
      "Due to the nature of the economy",
      "Because of differing interests and values",
      "Because people dislike each other",
      "Due to technological advancements"
    ],
    correctAnswer: "Because of differing interests and values",
    explanation: "Afegbua (2014) attributes conflict's ubiquity to differing interests and values."
  },
  {
    question: "What did Alabi (2010) assert about conflicts and crises?",
    options: [
      "They are rare and can be avoided",
      "They are found at every stage of life",
      "They only occur in developing countries",
      "They are mainly caused by political issues"
    ],
    correctAnswer: "They are found at every stage of life",
    explanation: "Alabi (2010) asserted that conflicts and crises are found at every stage of life."
  },
  {
    question: "What model is used to showcase the interplay between sport and peacebuilding?",
    options: ["Galtung's 3Rs", "Maslow's hierarchy of needs", "SWOT analysis", "Porter's Five Forces"],
    correctAnswer: "Galtung's 3Rs",
    explanation: "Galtung's 3Rs model is used to showcase the interplay between sport and peacebuilding."
  },
  {
    question: "What example is given of a sport project encouraging development of social networks in former antagonistic communities?",
    options: [
      "Open Fun Schools project in Bosnia and Herzegovina",
      "Second Chance Schools in Spain",
      "Sport for All initiative in India",
      "Fair Play Program in Australia"
    ],
    correctAnswer: "Open Fun Schools project in Bosnia and Herzegovina",
    explanation: "The Open Fun Schools project in Bosnia and Herzegovina is cited as an example of sport encouraging social network development."
  },
  {
    question: "What were the three pillars of Olympism conceived by De Coubertin according to Nanayakkara & Culpan (2012)?",
    options: [
      "Sports, economics, and technology",
      "Sports, ethics, and peace",
      "Politics, education, and culture",
      "Health, wealth, and prosperity"
    ],
    correctAnswer: "Sports, ethics, and peace",
    explanation: "De Coubertin's three pillars of Olympism were sports, ethics, and peace."
  },

  // CHAPTER FOUR
  {
    question: "The Mano River is locally called what?",
    options: ["Bewa River", "Gola River", "Solija River", "Voinjama River"],
    correctAnswer: "Bewa River",
    explanation: "The Mano River is locally called the Bewa River."
  },
  {
    question: "When did rebels take up arms against the governments of Liberia and Sierra Leone?",
    options: ["1979 and 1981", "1989 and 1991", "1999 and 2001", "2009 and 2011"],
    correctAnswer: "1989 and 1991",
    explanation: "Rebels took up arms against the governments of Liberia and Sierra Leone in 1989 and 1991."
  },
  {
    question: "Which organization played a key role in the resolution of the crisis in Liberia by acting as intermediaries?",
    options: ["SLWF", "MARWOPNET", "WIPNET", "FAWE"],
    correctAnswer: "WIPNET",
    explanation: "WIPNET played a key role in resolving the Liberian crisis by acting as intermediaries."
  },
  {
    question: "Who was the first female president of Liberia?",
    options: ["Fatumata Sawaneh", "Ruth Perry", "Ellen Johnson Sirleaf", "Antoinette Sayeh"],
    correctAnswer: "Ellen Johnson Sirleaf",
    explanation: "Ellen Johnson Sirleaf was the first female president of Liberia."
  },
  {
    question: "Which organization mobilized over 7,500 women to vote in Liberia?",
    options: ["MARWOPNET", "WIPNET", "SLWF", "FAWE"],
    correctAnswer: "WIPNET",
    explanation: "WIPNET mobilized over 7,500 women to vote in Liberia."
  },

  // CHAPTER FIVE
  {
    question: "What does the statement 'When nails grow long we cut the nails, not fingers' imply about managing misunderstandings?",
    options: [
      "Remove the relationship to solve problems",
      "Cut off misunderstandings, not the relationship",
      "Ignore the misunderstandings",
      "Cut both nails and fingers"
    ],
    correctAnswer: "Cut off misunderstandings, not the relationship",
    explanation: "The statement implies cutting off misunderstandings while preserving the relationship."
  },
  {
    question: "Coser's definition of social conflict involves a struggle over what?",
    options: [
      "Shared resources and mutual benefits",
      "Entertainment and leisure",
      "Personal satisfaction",
      "Values, status, power, and scarce resources"
    ],
    correctAnswer: "Values, status, power, and scarce resources",
    explanation: "Coser defines social conflict as a struggle over values, status, power, and scarce resources."
  },
  {
    question: "What did Karl Marx advocate for to resolve social conflicts?",
    options: [
      "Maintaining the status quo",
      "A revolution to overthrow the bourgeois class",
      "Increasing personal wealth",
      "Ignoring class struggles"
    ],
    correctAnswer: "A revolution to overthrow the bourgeois class",
    explanation: "Karl Marx advocated a revolution to overthrow the bourgeois class as the resolution to social conflict."
  },
  {
    question: "What is the role of a mediator in conflict resolution?",
    options: [
      "To dictate the terms of resolution",
      "To listen and proffer solutions",
      "To ignore the conflict",
      "To participate as a conflicting party"
    ],
    correctAnswer: "To listen and proffer solutions",
    explanation: "The mediator's role is to listen and proffer solutions in conflict resolution."
  },
  {
    question: "What is often the result of arbitration in conflict resolution?",
    options: [
      "Non-binding suggestions",
      "Recommendations without enforcement",
      "Binding and final decisions",
      "Further negotiation"
    ],
    correctAnswer: "Binding and final decisions",
    explanation: "Arbitration typically results in binding and final decisions."
  },

  // CHAPTER SIX
  {
    question: "What is conflict according to D. Whawo?",
    options: [
      "A peaceful negotiation",
      "A minor disagreement",
      "A clash between two or more people or parties from an unresolved dispute",
      "A friendly discussion"
    ],
    correctAnswer: "A clash between two or more people or parties from an unresolved dispute",
    explanation: "D. Whawo defines conflict as a clash between two or more parties arising from an unresolved dispute."
  },
  {
    question: "What is considered the sustainer of community ethics in pre-literate African society?",
    options: ["Politician", "Teacher", "Warrior", "Griot"],
    correctAnswer: "Griot",
    explanation: "The Griot is considered the sustainer of community ethics in pre-literate African society."
  },
  {
    question: "What does Theatre-for-Development (TFD) aim to achieve?",
    options: [
      "Create abstract art",
      "Provide entertainment only",
      "Diagnose, analyze, and mediate human conflict",
      "Promote technological advancements"
    ],
    correctAnswer: "Diagnose, analyze, and mediate human conflict",
    explanation: "TFD aims to diagnose, analyze, and mediate human conflict."
  },
  {
    question: "What method does Augusto Boal's 'Theatre of the Oppressed' utilize?",
    options: [
      "Static performances",
      "Technological simulations",
      "Forum Theatre for interactive/participatory conflict resolution",
      "Economic theories"
    ],
    correctAnswer: "Forum Theatre for interactive/participatory conflict resolution",
    explanation: "Boal's Theatre of the Oppressed utilizes Forum Theatre for interactive, participatory conflict resolution."
  },
  {
    question: "What potential does theatre have in peace-building efforts?",
    options: [
      "It focuses on individualism",
      "It can mobilize, sensitize, and mediate conflicts",
      "It can only entertain",
      "It is ineffective"
    ],
    correctAnswer: "It can mobilize, sensitize, and mediate conflicts",
    explanation: "Theatre has the potential to mobilize, sensitize, and mediate conflicts in peace-building efforts."
  },

  // CHAPTER SEVEN
  {
    question: "Nigeria is described as what type of society?",
    options: ["Homogeneous", "Pluralistic", "Monolithic", "Isolated"],
    correctAnswer: "Pluralistic",
    explanation: "Nigeria is described as a pluralistic society."
  },
  {
    question: "Conflict, as described by Coser (1956), is a struggle over what?",
    options: ["Technological advancements", "Cultural practices", "Values and resources", "Historical narratives"],
    correctAnswer: "Values and resources",
    explanation: "Coser (1956) describes conflict as a struggle over values and resources."
  },
  {
    question: "What is the Agenda Setting Theory in mass communication?",
    options: [
      "Media influences what issues people think about",
      "Media dictates what people should do",
      "Media controls the economy",
      "Media determines political outcomes"
    ],
    correctAnswer: "Media influences what issues people think about",
    explanation: "The Agenda Setting Theory holds that media influences what issues people think about."
  },
  {
    question: "Who or what are considered 'gatekeepers' in the context of mass communication?",
    options: [
      "Government officials",
      "Media intermediaries who control information flow",
      "Security personnel",
      "Academic researchers"
    ],
    correctAnswer: "Media intermediaries who control information flow",
    explanation: "Gatekeepers are media intermediaries who control the flow of information."
  },
  {
    question: "Why is mass communication considered effective in diverse societies?",
    options: [
      "It isolates different groups",
      "It orients and mobilizes people towards common goals",
      "It suppresses minority voices",
      "It promotes economic disparity"
    ],
    correctAnswer: "It orients and mobilizes people towards common goals",
    explanation: "Mass communication is effective in diverse societies because it orients and mobilizes people towards common goals."
  },

  // CHAPTER EIGHT
  {
    question: "What are the two main roles of international organizations like the UN and the AU?",
    options: [
      "Regulate global trade and environmental policies",
      "Regulate relations among member states and maintain international peace and security",
      "Promote tourism and culture",
      "Manage global health and education"
    ],
    correctAnswer: "Regulate relations among member states and maintain international peace and security",
    explanation: "The UN and AU's main roles are regulating relations among member states and maintaining international peace and security."
  },
  {
    question: "Which international treaty ended the First World War and led to the establishment of the League of Nations?",
    options: ["Treaty of Paris", "Versaille Peace Treaty", "Treaty of Rome", "Treaty of Nanking"],
    correctAnswer: "Versaille Peace Treaty",
    explanation: "The Versaille Peace Treaty ended World War I and led to the League of Nations."
  },
  {
    question: "Which philosopher offered designs of an international system for peace maintenance?",
    options: ["Aristotle", "Dante of Italy", "Socrates", "Machiavelli"],
    correctAnswer: "Dante of Italy",
    explanation: "Dante of Italy offered early designs of an international system for peace maintenance."
  },
  {
    question: "One of the objectives of the OAU was to what?",
    options: [
      "Promote space exploration",
      "Eradicate all forms of colonialism and apartheid from the African continent",
      "Develop nuclear capabilities",
      "Establish a single African currency"
    ],
    correctAnswer: "Eradicate all forms of colonialism and apartheid from the African continent",
    explanation: "One OAU objective was to eradicate colonialism and apartheid from Africa."
  },
  {
    question: "What is the goal of the New Partnership for Africa's Development (NEPAD)?",
    options: [
      "Space exploration",
      "Redevelopment of Africa and economic cooperation",
      "Establishing a common language",
      "Regulating trade tariffs"
    ],
    correctAnswer: "Redevelopment of Africa and economic cooperation",
    explanation: "NEPAD's goal is the redevelopment of Africa and economic cooperation."
  },

  // CHAPTER NINE
  {
    question: "According to Otite (2001), what are fertile grounds for conflicts involving individuals and groups?",
    options: [
      "New technology advancements",
      "Contestable access to new political positions",
      "Economic downturns",
      "Cultural festivals"
    ],
    correctAnswer: "Contestable access to new political positions",
    explanation: "Otite (2001) identifies contestable access to new political positions as fertile ground for conflict."
  },
  {
    question: "What is the process of gaining secret knowledge about the past, present, or future by calling on the aid of spirits?",
    options: ["Oath-taking", "Divination", "Joint problem-solving", "Litigation"],
    correctAnswer: "Divination",
    explanation: "Divination is the process of gaining secret knowledge by calling on the aid of spirits."
  },
  {
    question: "Which style of conflict response represents a win-lose approach to conflict?",
    options: ["Compromising", "Joint problem-solving", "Confrontation or Forcing", "Avoidance"],
    correctAnswer: "Confrontation or Forcing",
    explanation: "Confrontation or Forcing represents a win-lose approach to conflict."
  },
  {
    question: "According to Albert (2001), what is the best method of dealing with conflict?",
    options: ["Avoidance", "Confrontation", "Third-party decision making", "Joint problem-solving"],
    correctAnswer: "Joint problem-solving",
    explanation: "Albert (2001) considers joint problem-solving the best method of dealing with conflict."
  },
  {
    question: "What is the primary purpose of shrines and oath-taking in Nigerian traditional societies?",
    options: [
      "To celebrate cultural festivals",
      "To control social behavior and maintain peace",
      "To enforce taxation laws",
      "To organize community games"
    ],
    correctAnswer: "To control social behavior and maintain peace",
    explanation: "Shrines and oath-taking are used to control social behavior and maintain peace in Nigerian traditional societies."
  },

  // CHAPTER TEN
  {
    question: "What is a major consequence of oil and gas activities in the Niger Delta?",
    options: ["Soil erosion", "Air pollution", "Deforestation", "All of the above"],
    correctAnswer: "All of the above",
    explanation: "Oil and gas activities in the Niger Delta cause soil erosion, air pollution, and deforestation."
  },
  {
    question: "What percentage of Nigeria's GDP is attributed to oil from the Niger Delta?",
    options: ["75%", "90%", "97%", "100%"],
    correctAnswer: "97%",
    explanation: "97% of Nigeria's GDP is attributed to oil from the Niger Delta."
  },
  {
    question: "The Land Use Act empowers state governors to do what?",
    options: [
      "Manage wildlife conservation",
      "Allocate land in urban areas",
      "Regulate air quality",
      "Establish environmental agencies"
    ],
    correctAnswer: "Allocate land in urban areas",
    explanation: "The Land Use Act empowers state governors to allocate land in urban areas."
  },
  {
    question: "What is the primary cause of conflict between Fulani herdsmen and farmers in the Niger Delta?",
    options: ["Ethnic rivalry", "Oil exploration", "Land scarcity", "Religious differences"],
    correctAnswer: "Land scarcity",
    explanation: "Land scarcity is the primary cause of conflict between Fulani herdsmen and farmers in the Niger Delta."
  },
  {
    question: "What environmental concept emphasizes meeting present needs without compromising future generations?",
    options: ["Sustainable development", "Resource governance", "Environmental protection", "Legislative oversight"],
    correctAnswer: "Sustainable development",
    explanation: "Sustainable development emphasizes meeting present needs without compromising future generations."
  }

        
        
        

            
                   ],
      },
        
        
        
        {
        category: "CES311-3",
        questions: [


  {
    question: "What are becoming more and more vital for both new and established enterprises?",
    options: ["Entrepreneurial strategies", "Environmental dynamics", "Environmental factors", "Tactics"],
    correctAnswer: "Entrepreneurial strategies",
    explanation: "Entrepreneurial strategies are becoming more and more vital for both new and established enterprises."
  },
  {
    question: "What is the essence of entrepreneurship?",
    options: ["Strategic management", "Identification and exploitation of opportunities", "Strategy formulation", "Risk-aversion"],
    correctAnswer: "Identification and exploitation of opportunities",
    explanation: "The identification and exploitation of opportunities is the essence of entrepreneurship."
  },
  {
    question: "What refers to how opportunities are transformed into viable competitive advantages for entrepreneurs?",
    options: ["Creativity", "Innovation", "Strategic management", "Risk-taking"],
    correctAnswer: "Strategic management",
    explanation: "Strategic management refers to how opportunities are transformed into viable competitive advantages for entrepreneurs."
  },
  {
    question: "What contribute to the creation of values independently, but could contribute even more when integrated?",
    options: [
      "Entrepreneurial and management actions",
      "Creativity and Innovation",
      "Risk-aversion and risk-taking",
      "Entrepreneurial and strategic actions"
    ],
    correctAnswer: "Entrepreneurial and strategic actions",
    explanation: "Entrepreneurial and strategic actions contribute to value creation independently, and more so when integrated."
  },
  {
    question: "What is the most promising aspect to be integrated into entrepreneurship?",
    options: ["Strategic management", "Tactics", "Innovation", "Creativity and innovation"],
    correctAnswer: "Strategic management",
    explanation: "Strategic management is the most promising aspect to be integrated into entrepreneurship."
  },
  {
    question: "What are complementary and can achieve the greatest wealth when integrated?",
    options: [
      "Wealth creation and development",
      "Entrepreneurial and strategic actions",
      "Wealth creation and exploration",
      "None of the above"
    ],
    correctAnswer: "Entrepreneurial and strategic actions",
    explanation: "Entrepreneurial and strategic actions are complementary and can achieve the greatest wealth when integrated."
  },
  {
    question: "While entrepreneurship focuses on creation, strategic management focuses on what?",
    options: ["Growth", "Growth and Development", "Building a competitive advantage", "Planning"],
    correctAnswer: "Building a competitive advantage",
    explanation: "While entrepreneurship focuses on creation, strategic management focuses on building a competitive advantage."
  },
  {
    question: "One of the key challenges for entrepreneurs is to deal with what?",
    options: ["Creativity", "Innovativeness", "Business ideas", "Strategic changes"],
    correctAnswer: "Strategic changes",
    explanation: "One of the key challenges for entrepreneurs is to deal with strategic changes."
  },
  {
    question: "What defines the businesses of an enterprise and how its activities are structured and managed?",
    options: ["Corporate strategy", "Management", "Tactics", "Risk management"],
    correctAnswer: "Corporate strategy",
    explanation: "Corporate strategy defines the businesses of an enterprise and how its activities are structured and managed."
  },
  {
    question: "What embraces marketing, human resources and research and development strategies of the enterprise?",
    options: ["Functional level strategy", "Business level strategy", "Corporate level strategy", "Implementation strategy"],
    correctAnswer: "Functional level strategy",
    explanation: "Functional level strategy embraces marketing, human resources, and R&D strategies of the enterprise."
  },
  {
    question: "The acronym 'SWOT' stands for what?",
    options: [
      "Strength, weakness, opportunities and thirst",
      "Strength, weaknesses, opportunities and threats",
      "Strength, weaknesses, originality and thirst",
      "Strength, weaknesses, originality and thirst"
    ],
    correctAnswer: "Strength, weaknesses, opportunities and threats",
    explanation: "SWOT stands for Strength, Weaknesses, Opportunities, and Threats."
  },
  {
    question: "The six 'natural' areas where the intersection between entrepreneurship and strategic management exist include what?",
    options: [
      "Internationalization, innovations, learning, team governance, network and growth",
      "Innovations, organization, learning, management teams and governance, networks and growth",
      "Internationalization, innovations, organizational learning, top management teams and governance, networks and growth",
      "None of the above"
    ],
    correctAnswer: "Internationalization, innovations, organizational learning, top management teams and governance, networks and growth",
    explanation: "The six natural areas of intersection include internationalization, innovations, organizational learning, top management teams and governance, and networks and growth."
  },
  {
    question: "What refers to the constitutive elements of SMEs' strategy?",
    options: [
      "Entrepreneur, control, process and business plan",
      "Strategy, process and business plan",
      "Business plan and strategic control",
      "Entrepreneur, strategy control, strategy process and business plan"
    ],
    correctAnswer: "Entrepreneur, strategy control, strategy process and business plan",
    explanation: "The constitutive elements of SMEs' strategy refer to entrepreneur, strategy control, strategy process, and business plan."
  },
  {
    question: "What is often the foundation of creations in entrepreneurship?",
    options: ["Innovation", "Creativity", "Management strategy", "Strategic planning"],
    correctAnswer: "Innovation",
    explanation: "Innovation is often the foundation of creations in entrepreneurship."
  },
  {
    question: "What help enterprises develop resources/capabilities that are complex to imitate, leading to a competitive advantage?",
    options: [
      "Alliances and strategy",
      "Strategic planning and networks",
      "Strategic management and alliances",
      "Strategic alliances and strategic networks"
    ],
    correctAnswer: "Strategic alliances and strategic networks",
    explanation: "Strategic alliances and strategic networks help enterprises develop complex-to-imitate resources/capabilities leading to competitive advantage."
  },
  {
    question: "What provide access to information, resources, technology and markets?",
    options: ["Tactics", "Strategy", "Managerial skills and learning", "Alliances and networks"],
    correctAnswer: "Alliances and networks",
    explanation: "Alliances and networks provide access to information, resources, technology, and markets."
  },
  {
    question: "What leads to exchange relationships with entrepreneurial organizations' customers?",
    options: ["Strategic alliance", "Alliance networks", "Networks", "Managerial networks"],
    correctAnswer: "Strategic alliance",
    explanation: "Strategic alliance leads to exchange relationships with entrepreneurial organizations' customers."
  },
  {
    question: "What borders on the ability to anticipate, envision, maintain flexibility, and empower others to create necessary strategic change?",
    options: ["Growth leadership", "Strategic leadership", "Alliances and networks", "Tactics and strategy"],
    correctAnswer: "Strategic leadership",
    explanation: "Strategic leadership borders on the ability to anticipate, envision, maintain flexibility, and empower others to create necessary strategic change."
  },
  {
    question: "What is a good indicator of entrepreneurship for younger and smaller firms?",
    options: ["Growth", "Strategy", "Management", "Risk-bearing"],
    correctAnswer: "Growth",
    explanation: "Growth is a good indicator of entrepreneurship for younger and smaller firms."
  },
  {
    question: "In times of growing uncertainty and increasing speed of change, what emerge?",
    options: [
      "New threats and opportunities",
      "Challenges and Growth",
      "Growth and development",
      "Growth and Underdevelopment"
    ],
    correctAnswer: "New threats and opportunities",
    explanation: "In times of growing uncertainty and increasing speed of change, new threats and opportunities emerge."
  },
  {
    question: "What is concerned with creation of a competitive advantage in all the enterprise product levels/strategic business units?",
    options: ["Corporate strategy", "Corporate business plan", "Business level strategy", "Functional strategy"],
    correctAnswer: "Corporate strategy",
    explanation: "Corporate strategy is concerned with creating a competitive advantage across all product levels/strategic business units."
  },
  {
    question: "What is a document that describes the enterprise's strategy (content and process)?",
    options: ["Business idea", "Feasibility study", "Feasibility plan", "Business plan"],
    correctAnswer: "Business plan",
    explanation: "The business plan is the document describing the enterprise's strategy (content and process)."
  },
  {
    question: "What involves entrepreneurial actions taken and guided by a strategic perspective?",
    options: ["Strategy", "Entrepreneurship", "Strategic goals", "Strategic entrepreneurship"],
    correctAnswer: "Strategic entrepreneurship",
    explanation: "Strategic entrepreneurship involves entrepreneurial actions taken and guided by a strategic perspective."
  },
  {
    question: "The aim of strategic entrepreneurship is to constantly create competitive advantages that lead to creation of what?",
    options: ["Opportunities", "Strength and opportunities", "Profit", "Maximum wealth"],
    correctAnswer: "Maximum wealth",
    explanation: "The aim of strategic entrepreneurship is to constantly create competitive advantages leading to maximum wealth."
  },
  {
    question: "What can serve as internal control and goal-achievement mechanisms for the enterprise?",
    options: ["Feasibility plan", "Feasibility study", "Business environment", "Business plan"],
    correctAnswer: "Business plan",
    explanation: "The business plan can serve as an internal control and goal-achievement mechanism for the enterprise."
  }



            

            ],
      },
        
        
        {
        category: "CES311-2",
        questions: [


  {
    question: "What is the activity to do something well, usually gained via training and experience?",
    options: ["Skill", "Training", "Education", "Training and Education"],
    correctAnswer: "Skill",
    explanation: "Skill is defined as the activity to do something well, usually gained via training and experience."
  },
  {
    question: "Broadly, skill acquisition can be classified as what?",
    options: [
      "Functional and Self-Management",
      "Special Knowledge, Functional and Self-Management",
      "Training, Development and Education",
      "Training, Coaching and Mentoring"
    ],
    correctAnswer: "Special Knowledge, Functional and Self-Management",
    explanation: "Skill acquisition is broadly classified as Special Knowledge, Functional, and Self-Management skills."
  },
  {
    question: "Learning how to acquire skill can help the entrepreneur to create what?",
    options: ["Special needs", "Special Skills", "Special Knowledge", "Effective plan for developing and advancing careers"],
    correctAnswer: "Effective plan for developing and advancing careers",
    explanation: "Learning how to acquire skill helps the entrepreneur create an effective plan for developing and advancing careers."
  },
  {
    question: "Soft skills is usually referred to as what?",
    options: ["Communication skills", "Computer programming skills", "Technical skills", "Hard skills"],
    correctAnswer: "Communication skills",
    explanation: "Soft skills is usually referred to as Communication skills."
  },
  {
    question: "Technical/hard skills is often referred to as what?",
    options: ["Computer engineering skills", "Communication skills", "Computer programming skills", "Computer skills"],
    correctAnswer: "Computer programming skills",
    explanation: "Technical/hard skills is often referred to as Computer programming skills."
  },
  {
    question: "What is an inherent benefit of skills acquisition?",
    options: [
      "It enhances your learning",
      "It enhances your education",
      "Assists in diversifying your job responsibilities",
      "It enhances your training"
    ],
    correctAnswer: "Assists in diversifying your job responsibilities",
    explanation: "An inherent benefit of skills acquisition is that it assists in diversifying your job responsibilities."
  },
  {
    question: "Skill acquisition can be broadly classified into how many groups?",
    options: ["1", "2", "3", "4"],
    correctAnswer: "3",
    explanation: "Skill acquisition can be broadly classified into 3 groups."
  },
  {
    question: "What are often obtained through proper education/experience?",
    options: ["Talents and Expertise", "Talent and Skills", "Expertise and Skills", "Training and Education"],
    correctAnswer: "Talents and Expertise",
    explanation: "Talents and Expertise are often obtained through proper education/experience."
  },
  {
    question: "What is one of the benefits in acquiring skills?",
    options: [
      "It aids the personality of entrepreneurs",
      "It assists in developing a growth and flexibility mindset",
      "It assists in enhancing the psychology of the mindset",
      "It enhances your training capabilities"
    ],
    correctAnswer: "It assists in developing a growth and flexibility mindset",
    explanation: "One benefit of acquiring skills is that it assists in developing a growth and flexibility mindset."
  },
  {
    question: "What refers to the art/process of learning how to do something, master it, and use it as a means of earning a living/survival?",
    options: ["Mastering Art", "Mastering Skills", "Skill Earning", "Skills Acquisition"],
    correctAnswer: "Skills Acquisition",
    explanation: "Skills Acquisition refers to the art/process of learning how to do something, mastering it, and using it as a means of earning a living."
  },
  {
    question: "What is a basic skill related to keeping an office organized and managing a business to success?",
    options: ["Collaboration", "Technical abilities", "Financial abilities", "Management capabilities"],
    correctAnswer: "Collaboration",
    explanation: "Collaboration is a basic skill related to keeping an office organized and managing a business to success."
  },
  {
    question: "What is a skill necessary for customers' services?",
    options: ["Resources-fullness", "Interpersonal skills", "Active listening skill", "Problem-solving skill"],
    correctAnswer: "Active listening skill",
    explanation: "Active listening skill is necessary for customer service."
  },
  {
    question: "IT skills may be very useful in addition to special IT programmes, referring to what?",
    options: ["Analytics skills", "Written skills", "Oral communication skills", "Organization skills"],
    correctAnswer: "Analytics skills",
    explanation: "Analytics skills are useful in addition to special IT programmes."
  },
  {
    question: "What is a marketing-relevant skill required for a successful enterprise?",
    options: ["Sales strategy skills", "Sales skills", "Advertising skills", "Adaptability skills"],
    correctAnswer: "Adaptability skills",
    explanation: "Adaptability skills are a marketing-relevant skill required for a successful enterprise."
  },
  {
    question: "What is a necessary skill a sales employee needs to develop?",
    options: ["Resources-fullness skills", "Emotional intelligence skills", "Marketing skills", "Sales skills"],
    correctAnswer: "Emotional intelligence skills",
    explanation: "Emotional intelligence skills are necessary for a sales employee to develop."
  },
  {
    question: "What is a basic step that an entrepreneur can take to learn and acquire necessary skills?",
    options: ["Finding a mentor", "Networking skills", "Persuasion skills", "Public speaking skills"],
    correctAnswer: "Finding a mentor",
    explanation: "Finding a mentor is a basic step an entrepreneur can take to learn and acquire necessary skills."
  },
  {
    question: "What is a process of acquiring new skills?",
    options: ["Setting specific goals to attain skills", "Creating enough time to work on skills", "Considering skill sharing", "Considering skill management"],
    correctAnswer: "Setting specific goals to attain skills",
    explanation: "Setting specific goals to attain skills is a process of acquiring new skills."
  },
  {
    question: "What is a profitable and sustainable skill to acquire without a job after school?",
    options: ["Teaching", "Trading", "Online Marketing", "Fashion/Fabric Decoration"],
    correctAnswer: "Fashion/Fabric Decoration",
    explanation: "Fashion/Fabric Decoration is a profitable and sustainable skill to acquire without a job after school."
  },
  {
    question: "What is the means of learning and mastering special activities in any type of profession?",
    options: ["Skill Acquisition", "Training", "Education", "Skill"],
    correctAnswer: "Skill",
    explanation: "Skill is the means of learning and mastering special activities in any type of profession."
  },
  {
    question: "One can acquire skill in either one or a combination of which of the following ways?",
    options: [
      "Through affiliate marketing and trading",
      "Through online marketing and sales",
      "Through formal education and training",
      "Through public and private ways"
    ],
    correctAnswer: "Through formal education and training",
    explanation: "One can acquire skill through formal education and training, among other ways."
  },
  {
    question: "What is a process of investing in diverse assets where the investment will help in generating additional wealth?",
    options: ["Wealth creation", "Investment analysis", "Portfolio", "Assets investments"],
    correctAnswer: "Wealth creation",
    explanation: "Wealth creation is a process of investing in diverse assets to help generate additional wealth."
  },
  {
    question: "What is a strategic step needed to build wealth?",
    options: ["Invest in real assets", "Set financial goals", "Invest in portfolio", "Invest your salary"],
    correctAnswer: "Set financial goals",
    explanation: "Setting financial goals is a strategic step needed to build wealth."
  },
  {
    question: "What is the value of asset after deducting the total debts or liabilities?",
    options: ["Profit", "Earnings", "Net assets", "Net worth"],
    correctAnswer: "Net worth",
    explanation: "Net worth is the value of assets after deducting total debts or liabilities."
  },
  {
    question: "What is the bedrock of building wealth?",
    options: ["Earned income", "Profit", "Reserves", "Retained earnings"],
    correctAnswer: "Earned income",
    explanation: "Earned income is the bedrock of building wealth."
  },
  {
    question: "What refers to the building of wealth via various financial products with the objective of gaining higher income?",
    options: ["Wealth creation", "Innovation", "Creativity", "Online Marketing"],
    correctAnswer: "Wealth creation",
    explanation: "Wealth creation refers to the building of wealth via various financial products aimed at gaining higher income."
  },
  {
    question: "Earnings not realized from the workplace directly but from another source is referred to as what?",
    options: ["Earnings", "Unearned income", "Passive income", "Active income"],
    correctAnswer: "Passive income",
    explanation: "Passive income is earnings not realized from the workplace directly but from another source."
  },
  {
    question: "Portfolio income includes one of the following:",
    options: ["Earnings", "Reserves", "Rents", "Dividends"],
    correctAnswer: "Dividends",
    explanation: "Portfolio income includes dividends."
  },
  {
    question: "Which of the following is a principle of wealth creation?",
    options: ["Focusing on tax savings", "Focusing on passive income", "Focusing on interest reduction", "All of the above"],
    correctAnswer: "Focusing on tax savings",
    explanation: "Focusing on tax savings is a principle of wealth creation."
  },
  {
    question: "The first law for successful wealth creation is what?",
    options: [
      "Spending less than earning",
      "Creating a roadmap for financial success",
      "Investing surplus income wisely",
      "None of the above"
    ],
    correctAnswer: "Creating a roadmap for financial success",
    explanation: "The first law for successful wealth creation is creating a roadmap for financial success."
  },
  {
    question: "What is the income derived from the workplace?",
    options: ["Active income", "Passive income", "Portfolio income", "Active portfolio"],
    correctAnswer: "Active income",
    explanation: "Active income is the income derived directly from the workplace."
  },
  {
    question: "There are how many pillars of wealth creation?",
    options: ["2", "3", "4", "5"],
    correctAnswer: "5",
    explanation: "There are 5 pillars of wealth creation."
  },
  {
    question: "What is one of the entire entrepreneurial processes broken down into independent but related phases?",
    options: ["Idea generation", "Innovation", "Creativity", "Idea transformation"],
    correctAnswer: "Idea generation",
    explanation: "Idea generation is one of the entire entrepreneurial process phases."
  },
  {
    question: "Earned money could come from either what?",
    options: [
      "Active or passive income",
      "Passive or unearned incomes",
      "Earned or passive incomes",
      "Passive and dormant incomes"
    ],
    correctAnswer: "Earned or passive incomes",
    explanation: "Earned money could come from either earned or passive incomes."
  },
  {
    question: "The acronym 'DTI' refers to what?",
    options: [
      "Debt to Income Ratio",
      "Debt to Tax Ratio",
      "Debt to Thrift Ratio",
      "Debtors to Tax Ratio"
    ],
    correctAnswer: "Debt to Income Ratio",
    explanation: "DTI stands for Debt to Income Ratio."
  },
  {
    question: "What is vital to maintaining a good credit score?",
    options: [
      "Avoid excessive interest rate",
      "Avoidance of higher risk",
      "Employing efficient staff",
      "Pay bills at due time"
    ],
    correctAnswer: "Pay bills at due time",
    explanation: "Paying bills at the due time is vital to maintaining a good credit score."
  },
  {
    question: "The 50/30/20 rule of wealth creation states that what?",
    options: [
      "50% of total income should be spent on needs, 30% on wants and 20% on repayment of debt",
      "50% of total income should be spent on wants, 30% on needs and 20% on savings",
      "50% of total income should be spent on investments, 30% on wants and 20% on debt repayment",
      "50% of income should be spent on wants, 30% on needs and 20% on investment"
    ],
    correctAnswer: "50% of total income should be spent on needs, 30% on wants and 20% on repayment of debt",
    explanation: "The 50/30/20 rule states 50% of income goes to needs, 30% to wants, and 20% to debt repayment."
  },
  {
    question: "To use the 50/30/20 rule to save money, one of the following should be observed:",
    options: ["Track investment", "Track debt profile", "Track spending", "Watch the investment space"],
    correctAnswer: "Track spending",
    explanation: "Tracking spending is essential to applying the 50/30/20 rule."
  },
  {
    question: "One of the following is a process of acquiring novel skills:",
    options: [
      "Try to use acquired skill in a practical setting",
      "Do not set deadlines",
      "Try to use your resources wisely",
      "Do not attract more losses"
    ],
    correctAnswer: "Do not attract more losses",
    explanation: "Avoiding further losses is listed as a process of acquiring novel skills."
  },
  {
    question: "What is the income derived from the workplace?",
    options: ["Portfolio marketing and sales", "Passive income", "Active income", "Active portfolio"],
    correctAnswer: "Active income",
    explanation: "Active income is the income derived from the workplace."
  },
  {
    question: "The second law for successful wealth creation is what?",
    options: [
      "Spending less than earning",
      "Creating a roadmap for financial success",
      "Investing surplus income wisely",
      "Creating a roadmap for wealth creation"
    ],
    correctAnswer: "Spending less than earning",
    explanation: "The second law for successful wealth creation is spending less than earning."
  },
  {
    question: "What is one of the entire entrepreneurial processes broken down into independent but related phases?",
    options: ["Launching and growth", "Company growth", "Company development", "Management"],
    correctAnswer: "Launching and growth",
    explanation: "Launching and growth is one of the entrepreneurial process phases."
  },
  {
    question: "One of the roles of entrepreneurs in wealth creation includes what?",
    options: ["Job creation", "Helping the government", "Promoting sales level", "Promoting the governmental sector"],
    correctAnswer: "Job creation",
    explanation: "Job creation is one of the roles of entrepreneurs in wealth creation."
  },
  {
    question: "Building wealth over time is a matter of how many basic steps?",
    options: ["7", "4", "3", "6"],
    correctAnswer: "3",
    explanation: "Building wealth over time is a matter of 3 basic steps."
  },
  {
    question: "A good way to maximize earnings potential is to invest in what?",
    options: ["Skills", "Education and skills", "Marketing skills", "Unemployed youths"],
    correctAnswer: "Education and skills",
    explanation: "A good way to maximize earnings potential is to invest in education and skills."
  },
  {
    question: "Improving financial decision-making is which law for successful wealth creation?",
    options: ["Seventh law", "Sixth law", "Second law", "Third law"],
    correctAnswer: "Sixth law",
    explanation: "Improving financial decision-making is the sixth law for successful wealth creation."
  },
  {
    question: "One of the following is a pillar of wealth creation:",
    options: ["Self-investing", "Saving your income", "Investing wisely", "Investing your salary"],
    correctAnswer: "Self-investing",
    explanation: "Self-investing is a pillar of wealth creation."
  },
  {
    question: "The entire entrepreneurial process can be broken down into how many independent but related phases?",
    options: ["1", "2", "5", "4"],
    correctAnswer: "5",
    explanation: "The entire entrepreneurial process can be broken down into 5 independent but related phases."
  },
  {
    question: "One way to improve entrepreneurial education and skills is via what?",
    options: [
      "Obtaining academic degree",
      "The marketplace",
      "Those trading in the market",
      "All of the above"
    ],
    correctAnswer: "Obtaining academic degree",
    explanation: "Obtaining an academic degree is one way to improve entrepreneurial education and skills."
  },
  {
    question: "The fourth law for successful wealth creation emphasizes what?",
    options: [
      "Diversifying personal investments",
      "Exposure to different economic drivers",
      "Allowing personal investment to grow",
      "Adaptability to market changes"
    ],
    correctAnswer: "Allowing personal investment to grow",
    explanation: "The fourth law for successful wealth creation emphasizes allowing personal investment to grow."
  },
  {
    question: "What is a profitable and sustainable skill to acquire in order to become self-employed?",
    options: ["Animal Feed Production", "Food Selling", "Online Marketing", "Online (unspecified)"],
    correctAnswer: "Online Marketing",
    explanation: "Online Marketing is highlighted as a profitable and sustainable skill for becoming self-employed."
  }




            

            ],
      },
        


        
           {
        category: "CES311-1B",
        questions: [


  {
    question: "According to the chapter, entrepreneurship is defined as the art of turning an idea into a business without regard to what?",
    options: ["Initial resources", "Market demand", "Government policy", "Competitor strategy"],
    correctAnswer: "Initial resources",
    explanation: "The chapter states entrepreneurship is the art of turning an idea into a business without regard to initial resources."
  },
  {
    question: "Which of the following is a function of entrepreneurship?",
    options: ["Risk aversion", "Risk neutral", "Identification and selection of innovative skills", "Innovative and strategic planning"],
    correctAnswer: "Innovative and strategic planning",
    explanation: "Innovative and strategic planning is listed as a function of entrepreneurship."
  },
  {
    question: "Establishing a successfully enterprise requires what?",
    options: ["Short and long term planning", "Long-term planning and all-round commitment", "Stern commitment", "Short, medium and long-term vision"],
    correctAnswer: "Long-term planning and all-round commitment",
    explanation: "The chapter states that establishing a successful enterprise requires long-term planning and all-round commitment."
  },
  {
    question: "The success or failure of a new enterprise largely depends on what?",
    options: ["Optimism", "Motivation", "Personal accomplishments and control", "Drive"],
    correctAnswer: "Personal accomplishments and control",
    explanation: "The chapter identifies personal accomplishments and control as key to a new enterprise's success or failure."
  },
  {
    question: "What is the process by which entrepreneurs convert their ideas into workable strategies?",
    options: ["Business Planning", "Market survey", "Market analysis", "Conceptual skills"],
    correctAnswer: "Business Planning",
    explanation: "Business Planning is described as the process of converting ideas into workable strategies."
  },
  {
    question: "What involves locating financing sources, control of expenses, and ensuring financial stability by the entrepreneur?",
    options: ["Business Plan", "Financial Forecast", "Financing Sources", "Financial Management"],
    correctAnswer: "Financial Management",
    explanation: "Financial Management covers locating financing sources, controlling expenses, and ensuring financial stability."
  },
  {
    question: "The practice of entrepreneurship requires both what?",
    options: ["Innovation and Creativity", "Theoretical knowledge with real-world abilities and experience", "Skills and Practices", "Capability and Skills"],
    correctAnswer: "Theoretical knowledge with real-world abilities and experience",
    explanation: "The chapter notes entrepreneurship requires both theoretical knowledge and real-world abilities and experience."
  },
  {
    question: "What is the largest employer of labour?",
    options: ["Public Enterprises", "Governmental sector", "Private business sector", "Public business sector"],
    correctAnswer: "Private business sector",
    explanation: "The private business sector is identified as the largest employer of labour."
  },
  {
    question: "Which type of entrepreneurs are reserved and shy?",
    options: ["Fabian entrepreneurs", "Imitative entrepreneurs", "Introvert entrepreneurs", "Extrovert entrepreneurs"],
    correctAnswer: "Fabian entrepreneurs",
    explanation: "Fabian entrepreneurs are described as reserved and shy."
  },
  {
    question: "What influences the creation of price structure, customers' acquisition technique, marketing and sales strategies?",
    options: ["Business Process", "Marketing Strategies", "Market Analysis", "Sales Strategies"],
    correctAnswer: "Market Analysis",
    explanation: "Market Analysis influences pricing structure, customer acquisition, marketing, and sales strategies."
  },
  {
    question: "One way to describe a drone entrepreneur is that they are what?",
    options: ["Open to innovation", "Copycats", "Conservative", "Inventive"],
    correctAnswer: "Conservative",
    explanation: "Drone entrepreneurs are described as conservative in the chapter's classification."
  },
  {
    question: "Arthur H. Cole classified entrepreneurs as what?",
    options: ["Innovative and Creative", "Empirical, Rational, Cognitive", "Optimistic and Pessimistic", "Analytical, Skilful and Creative"],
    correctAnswer: "Empirical, Rational, Cognitive",
    explanation: "Arthur H. Cole's classification of entrepreneurs is Empirical, Rational, and Cognitive."
  },
  {
    question: "Entrepreneurship can be classified on the basis of ownership as what?",
    options: ["Family and Non-Family", "Government and quasi-government", "Public and private partnership", "Private and Public"],
    correctAnswer: "Private and Public",
    explanation: "On the basis of ownership, entrepreneurship is classified as Private and Public."
  },
  {
    question: "What type of business owners combine their resources and work together to create their companies?",
    options: ["Active partners", "Inventors", "Solo operators", "Solo partners"],
    correctAnswer: "Active partners",
    explanation: "Active partners are business owners who combine resources and work together to build their companies."
  },
  {
    question: "Which entrepreneurship theory explains that to improve products and services, entrepreneurs must develop their understanding of creativity and invention?",
    options: ["Psychological Entrepreneurship Theory", "Sociological Entrepreneurship Theory", "Innovation and Creativity Theory", "Anthropology Entrepreneurship Theory"],
    correctAnswer: "Innovation and Creativity Theory",
    explanation: "The Innovation and Creativity Theory explains that entrepreneurs must develop their understanding of creativity and invention to improve products and services."
  },
  {
    question: "Which entrepreneurship theory emphasizes the value of creativity and innovation in the development of novel concepts, goods or services?",
    options: ["Sociological Entrepreneurship Theory", "Entrepreneurship Economic Theory", "Anthropology Entrepreneurship Theory", "Psychological Entrepreneurship Theory"],
    correctAnswer: "Psychological Entrepreneurship Theory",
    explanation: "The Psychological Entrepreneurship Theory emphasizes creativity and innovation in developing novel concepts, goods, or services."
  },
  {
    question: "What has been recognized globally as a catalyst for economic and social development?",
    options: ["Entrepreneurship", "Business Venture", "Government Enterprises", "Business Owners"],
    correctAnswer: "Entrepreneurship",
    explanation: "Entrepreneurship is recognized globally as a catalyst for economic and social development."
  },
  {
    question: "What is a major factor for enterprise failure?",
    options: ["Over-pricing", "Inability to adapt to change", "Poor Feasibility Study", "Poor Business Plan"],
    correctAnswer: "Inability to adapt to change",
    explanation: "Inability to adapt to change is cited as a major factor for enterprise failure."
  },
  {
    question: "What type of business owner focuses mostly on research and development?",
    options: ["Researchers", "Creators", "Inventors", "Business Researchers"],
    correctAnswer: "Inventors",
    explanation: "Inventors are the type of business owner who focuses mostly on research and development."
  },
  {
    question: "Entrepreneurship can be classified on the basis of scale of enterprise as what?",
    options: ["Small and Medium", "Profit-making and No Profit making", "Long and Short", "Private and Public"],
    correctAnswer: "Small and Medium",
    explanation: "On the basis of scale of enterprise, entrepreneurship is classified as Small and Medium."
  },
  {
    question: "Which entrepreneurship theory looks at how society and tradition affect an entrepreneur's existence?",
    options: ["Opportunity-based Theory", "Sociological Entrepreneurship Theory", "Personality-based Theory", "Innovation and Creativity Theory"],
    correctAnswer: "Sociological Entrepreneurship Theory",
    explanation: "The Sociological Entrepreneurship Theory looks at how society and tradition affect an entrepreneur's existence."
  },
  {
    question: "The barriers to entrepreneurial growth can be grouped into what?",
    options: ["Internal and External", "Short and Long", "Fixed and Random", "Fixed and Variable"],
    correctAnswer: "Internal and External",
    explanation: "Barriers to entrepreneurial growth are grouped into Internal and External categories."
  },
  {
    question: "What is aimed at supporting all people with entrepreneurial mind-sets and the entrepreneurs?",
    options: ["Entrepreneurial skills", "Entrepreneurial capabilities", "Entrepreneurial mindsets", "Entrepreneurial education and training"],
    correctAnswer: "Entrepreneurial education and training",
    explanation: "Entrepreneurial education and training is aimed at supporting people with entrepreneurial mind-sets and entrepreneurs."
  },
  {
    question: "The acronym 'NGO' stands for what?",
    options: ["Non-Grant Organization", "Not-for Grant Organization", "Non-Governmental Organizations", "Not-for Government Opportunities"],
    correctAnswer: "Non-Governmental Organizations",
    explanation: "NGO stands for Non-Governmental Organizations."
  },
  {
    question: "In Nigeria, government's engagement in entrepreneurship development gained prominence immediately after what?",
    options: ["Civil War", "Post-Civil War", "Discovery of Crude Oil", "Decline in Economic Growth"],
    correctAnswer: "Civil War",
    explanation: "Government's engagement in entrepreneurship development in Nigeria gained prominence immediately after the Civil War."
  },
  {
    question: "The 3Rs objectives stands for what?",
    options: ["Resources, Revenue, and Redeployment", "Revenue, Rotation, and Reserve", "Reserve, Resources, and Redeployment", "Reconstruction, Redevelopment, and Reconciliation"],
    correctAnswer: "Reconstruction, Redevelopment, and Reconciliation",
    explanation: "The 3Rs stand for Reconstruction, Redevelopment, and Reconciliation."
  },
  {
    question: "The 3Rs objectives was formulated after what?",
    options: ["Civil War", "Post-Civil War", "Discovery of Crude Oil", "None of the above"],
    correctAnswer: "Civil War",
    explanation: "The 3Rs objectives were formulated after the Civil War."
  },
  {
    question: "The term 'SAP' stands for what?",
    options: ["Structural Assessment Programme", "Structural Amendment Programme", "Structural Adjustment Programme", "Structural Amendment Plan"],
    correctAnswer: "Structural Adjustment Programme",
    explanation: "SAP stands for Structural Adjustment Programme."
  },
  {
    question: "SAP was introduced in what year?",
    options: ["1986", "1980", "1982", "1960"],
    correctAnswer: "1986",
    explanation: "SAP was introduced in 1986."
  },
  {
    question: "Which of the following is an external barrier to entrepreneurial growth?",
    options: ["Management capability", "Labour market condition", "Funding", "Shortage of Orders"],
    correctAnswer: "Labour market condition",
    explanation: "Labour market condition is identified as an external barrier to entrepreneurial growth."
  },
  {
    question: "In Nigeria, entrepreneurship growth gained enormous momentum after what?",
    options: ["Civil War", "Post-Civil War", "Second World War", "Third World War"],
    correctAnswer: "Post-Civil War",
    explanation: "Entrepreneurship growth in Nigeria gained enormous momentum in the Post-Civil War period."
  },
  {
    question: "NDE stands for what?",
    options: ["National Directorate of Employment", "National Deployment Exercise", "Nigerian Department of Entrepreneurship", "Nigeria Department of Entrepreneurs"],
    correctAnswer: "National Directorate of Employment",
    explanation: "NDE stands for National Directorate of Employment."
  },
  {
    question: "NOAS stands for what?",
    options: ["Nigerian Organizational Agency Standards", "National Organizational Agency Standards", "National Open Apprenticeship Scheme", "None of the above"],
    correctAnswer: "National Open Apprenticeship Scheme",
    explanation: "NOAS stands for National Open Apprenticeship Scheme."
  },
  {
    question: "SMEDAN is an acronym for what?",
    options: [
      "Small and Medium Enterprise Development Association of Nigerian",
      "Small and Medium Scale Enterprise Development Association",
      "State and Modern Enterprise Development Agency of Nigeria",
      "Small and Medium Enterprise Development Association of Nigeria"
    ],
    correctAnswer: "Small and Medium Enterprise Development Association of Nigeria",
    explanation: "SMEDAN stands for Small and Medium Enterprise Development Association of Nigeria."
  },
  {
    question: "Which of the following is an internal barrier to entrepreneurial growth?",
    options: ["Motivational factors", "Government Policies", "Economic Climate", "Access to Markets"],
    correctAnswer: "Motivational factors",
    explanation: "Motivational factors are identified as an internal barrier to entrepreneurial growth."
  },
  {
    question: "What skill-sets are required to overcome the barriers to entrepreneurial growth?",
    options: [
      "Technical and Managerial",
      "Technical and Financial",
      "Technical, Managerial and Entrepreneurial",
      "Financial and Material"
    ],
    correctAnswer: "Technical, Managerial and Entrepreneurial",
    explanation: "Technical, Managerial and Entrepreneurial skill-sets are required to overcome barriers to entrepreneurial growth."
  },
  {
    question: "The acronym 'CED' represents what?",
    options: [
      "Centre for Entrepreneurship Development",
      "Centre for Economic Development",
      "Centre for Entrepreneurs' Development",
      "Centre for Entrepreneurial Developers"
    ],
    correctAnswer: "Centre for Entrepreneurship Development",
    explanation: "CED stands for Centre for Entrepreneurship Development."
  },
  {
    question: "Which of the following is a major entrepreneur's problem when launching an enterprise?",
    options: ["Poor Facilities", "Low materials", "Lack of Material Resources", "Ineffective Administration of Incentives"],
    correctAnswer: "Ineffective Administration of Incentives",
    explanation: "Ineffective Administration of Incentives is cited as a major problem entrepreneurs face when launching an enterprise."
  },
  {
    question: "Policies supporting high growth of enterprises should focus on what?",
    options: ["ICT", "Innovation and Strategic Planning", "Technological Growth", "Business Innovation"],
    correctAnswer: "Innovation and Strategic Planning",
    explanation: "Policies supporting high growth of enterprises should focus on Innovation and Strategic Planning."
  },
  {
    question: "What is a policy framework for high growth of enterprise?",
    options: ["Diversification", "ICT", "Innovation", "Creativity and Innovation"],
    correctAnswer: "Diversification",
    explanation: "Diversification is identified as a policy framework for high growth of enterprise."
  },
  {
    question: "What is a function required of an entrepreneur?",
    options: ["Innovative skills", "Inventing skills", "Perception and identification of business opportunities", "Creative skills"],
    correctAnswer: "Perception and identification of business opportunities",
    explanation: "Perception and identification of business opportunities is a required function of an entrepreneur."
  },
  {
    question: "Which of the following is a characteristic needed by the entrepreneur?",
    options: ["Vision", "Skills", "Mentoring", "Inventing skills"],
    correctAnswer: "Vision",
    explanation: "Vision is listed as a characteristic needed by the entrepreneur."
  },
  {
    question: "Company owners who establish their companies independently are referred to as what?",
    options: ["Partners", "Partnership", "Ventures", "Solo-operators"],
    correctAnswer: "Solo-operators",
    explanation: "Company owners who establish their companies independently are referred to as Solo-operators."
  },
  {
    question: "Networking provides access to new what?",
    options: [
      "Resources & Markets",
      "Resources, Markets & Partnerships",
      "Resources & Partnerships",
      "Material Resources, Financial and Information"
    ],
    correctAnswer: "Resources, Markets & Partnerships",
    explanation: "Networking provides access to new Resources, Markets & Partnerships."
  },
  {
    question: "Which entrepreneurship theory lays emphasis on locus of control as the basis for entrepreneurial motivation?",
    options: [
      "Sociological entrepreneurship theory",
      "Anthropology entrepreneurship theory",
      "Psychological entrepreneurship theory",
      "Entrepreneurship economic theory"
    ],
    correctAnswer: "Psychological entrepreneurship theory",
    explanation: "The Psychological entrepreneurship theory lays emphasis on locus of control as the basis for entrepreneurial motivation."
  },
  {
    question: "Which entrepreneurship theory draws philosophies from Peter Drucker's concept?",
    options: [
      "Resource-based entrepreneurship theory",
      "Anthropology entrepreneurship theory",
      "Opportunity-based Entrepreneurship Theory",
      "Motivational Theory of Entrepreneurship"
    ],
    correctAnswer: "Opportunity-based Entrepreneurship Theory",
    explanation: "The Opportunity-based Entrepreneurship Theory draws philosophies from Peter Drucker's concept."
  },
  {
    question: "What is a challenge of entrepreneurship in Nigeria?",
    options: ["Low Income level", "Low material resources", "Poor Financial Capability", "Poor collaboration spirit"],
    correctAnswer: "Poor collaboration spirit",
    explanation: "Poor collaboration spirit is cited as a challenge of entrepreneurship in Nigeria."
  },
  {
    question: "Who are individuals that notice opportunities and take responsibility for mobilizing the resources needed to produce new products and services?",
    options: ["Businessman", "Entrepreneurs", "Business Owners", "Opportunity search"],
    correctAnswer: "Entrepreneurs",
    explanation: "Entrepreneurs are individuals who notice opportunities and take responsibility for mobilizing resources to produce new products and services."
  },
  {
    question: "What is a characteristic needed by the entrepreneur?",
    options: ["Motivation", "Mentoring", "Capabilities", "Abilities"],
    correctAnswer: "Motivation",
    explanation: "Motivation is listed as a characteristic needed by the entrepreneur."
  },
  {
    question: "Who searches for change, responds to and exploits it as an opportunity, and recognizes opportunities where others see chaos?",
    options: ["Entrepreneur", "Optimistic Persons", "Business Owners", "Inventors"],
    correctAnswer: "Entrepreneur",
    explanation: "The entrepreneur searches for change, responds to and exploits it as an opportunity, recognizing opportunities where others see chaos."
  }


            

            ],
      },



        
  
   {
        category: "CES311-1A",
        questions: [
          

            {
        question: "According to the chapter, entrepreneurship is defined as the art of turning an idea into a business without regard to what?",
        options: ["Initial resources", "Market demand", "Government policy", "Competitor strategy"],
        correctAnswer: "Initial resources",
        explanation: "The Introduction states entrepreneurship 'is the art of turning an idea into a business without regard to initial resources.'"
      },
      {
        question: "Which of the following is NOT listed among the six functions of an entrepreneur?",
        options: ["Perception and identification of business opportunities", "Selection of the legal form, location and site of the business", "Setting national interest rates", "Risk bearing"],
        correctAnswer: "Setting national interest rates",
        explanation: "The six functions are perception/identification of opportunities, selection of legal form/location/site, identification/selection/acquisition of resources, innovative and strategic planning, risk bearing, and management of ongoing enterprises."
      },
      {
        question: "An entrepreneur's ability to have a clear idea in order for the company to develop to its greatest potential is best described by which characteristic?",
        options: ["Vision", "Goals", "Objectives", "Motivation"],
        correctAnswer: "Vision",
        explanation: "Vision is defined as an entrepreneur needing a clear vision for the company to develop to its greatest potential."
      },
      {
        question: "Entrepreneurs described as 'doers, achievers as well as goal and action oriented,' with the ability to set realistic and measurable targets, best fits under which characteristic?",
        options: ["Goals", "Vision", "Drive and energy", "Self-confidence and control"],
        correctAnswer: "Goals",
        explanation: "The 'Goals' characteristic describes entrepreneurs with the ability and commitment to set realistic, measurable, attainable goals, and calls them doers and achievers."
      },
      {
        question: "Which characteristic describes entrepreneurs who believe in self-determination, rely on their personal destinies, and have little belief based in fate?",
        options: ["Self-confidence and control", "Mindful of uncertainty", "Desire to achieve", "Mental ability and creativity"],
        correctAnswer: "Self-confidence and control",
        explanation: "This is drawn directly from the description of 'Self-confidence and control' in the Characteristics of an Entrepreneur section."
      },
      {
        question: "According to the text, successful entrepreneurs are inventive in their abilities to spot and seize chances mainly due to which characteristic?",
        options: ["Mental ability and creativity", "Effective communication skills", "Time management skills", "Wealth creation skills"],
        correctAnswer: "Mental ability and creativity",
        explanation: "The text states entrepreneurs 'should be inventive, forecast developments, analyze possible challenges and decide choices' under Mental ability and creativity."
      },
      {
        question: "Which skill enables an entrepreneur to view the company as an entire whole made up of interrelated, dependent functions and activities?",
        options: ["Conceptual skills", "Technical skills", "Humane skills", "Family background"],
        correctAnswer: "Conceptual skills",
        explanation: "Conceptual skills help an entrepreneur see the company as a whole, e.g. in goal-setting, planning, and decision-making, since a change in one unit affects others."
      },
      {
        question: "The ability to perform daily tasks using specialized knowledge, methods, processes, and techniques (e.g. mentoring, planning, environment monitoring) describes which skill?",
        options: ["Technical skills", "Conceptual skills", "Humane skills", "Time management skills"],
        correctAnswer: "Technical skills",
        explanation: "Technical skills are defined as competence and proficiency in the industry, including specialized knowledge of methods, processes, procedures and techniques."
      },
      {
        question: "Which characteristic reflects an entrepreneur's high tolerance for the ever-changing business environment and the use of new, sometimes conflicting, information from unfamiliar sources?",
        options: ["Mindful of uncertainty", "Manage failures", "Undertake risk", "Problem solving"],
        correctAnswer: "Mindful of uncertainty",
        explanation: "The text says business builders 'constantly make decisions using new, and sometimes conflicting information gleaned from a variety of unfamiliar sources' under 'Mindful of uncertainty.'"
      },
      {
        question: "In the Entrepreneurship Practice section, the process by which entrepreneurs convert their ideas into workable strategies through thorough business plans is called?",
        options: ["Business planning", "Market Analysis", "Operations and execution", "Team building and leadership"],
        correctAnswer: "Business planning",
        explanation: "Business planning is defined as the process of converting ideas into workable strategies through creating thorough business plans covering vision, goals, target market and operational frameworks."
      },
      {
        question: "According to the chapter, what specifically distinguishes entrepreneurs from regular businesspeople who merely carry out organising, coordinating, and planning?",
        options: ["Their ability to generate purchasers or clients", "Their academic qualifications", "Their government connections", "Their age"],
        correctAnswer: "Their ability to generate purchasers or clients",
        explanation: "The chapter states entrepreneurs 'can generate purchasers or clients. This distinguishes entrepreneurs from regular businesspeople who merely carry out typical management tasks.'"
      },
      {
        question: "Which function of entrepreneurs in the development of new markets involves combining land, labour, and money to produce goods and services?",
        options: ["Mobilize Capital Resources", "Discover new sources of materials", "Introduce New Technologies, Industries and Products", "Market Analysis"],
        correctAnswer: "Mobilize Capital Resources",
        explanation: "Entrepreneurs are 'responsible for organising and coordinating the main production elements, including land, labour, and money' under Mobilize Capital Resources."
      },
      {
        question: "The statement that entrepreneurs 'never settle for conventional or already-existing sources of resources' describes which function in the development of new markets?",
        options: ["Discover new sources of materials", "Mobilize Capital Resources", "Introduce New Technologies, Industries and Products", "Adaptation and iteration"],
        correctAnswer: "Discover new sources of materials",
        explanation: "This is a direct paraphrase of the 'Discover new sources of materials' section."
      },
      {
        question: "According to the chapter, what is a layperson's definition of 'capital resources,' as distinct from the economics definition (tools, structures, tangible productive resources)?",
        options: ["Money", "Land", "Labour", "Time"],
        correctAnswer: "Money",
        explanation: "The text states, 'A layperson's definition of capital resources is money,' contrasting it with the economics definition."
      },
      {
        question: "Which characteristic is described as entrepreneurs possessing 'an intense level of determination and desire to overcome hurdles, solve a problem and complete task' in building a successful enterprise?",
        options: ["Problem solving", "Manage failures", "Taking Responsibility", "Undertake risk"],
        correctAnswer: "Problem solving",
        explanation: "This phrase appears verbatim under the 'Problem solving' characteristic."
      },
      {
        question: "Effective communication skills and feedback are used by entrepreneurs primarily for what purpose, according to the chapter?",
        options: ["To assess and take stock of their performance in order to improve", "To reduce staff salaries", "To avoid customer contact", "To delay decision-making"],
        correctAnswer: "To assess and take stock of their performance in order to improve",
        explanation: "The text states entrepreneurs 'use effective feedback approach to assess/take stock of their performance with the aim of improving on it.'"
      },
      {
        question: "Which trait describes entrepreneurs who 'are not afraid of failure because failing is an opportunity to learn and improve'?",
        options: ["Manage failures", "Undertake risk", "Problem solving", "Mindful of uncertainty"],
        correctAnswer: "Manage failures",
        explanation: "This is the definition given for the 'Manage failures' characteristic of an entrepreneur."
      },
      {
        question: "Which characteristic involves an entrepreneur having clear objectives about the items to be produced and ancillary activities to be carried out, aiding their sense of direction?",
        options: ["Objectives", "Vision", "Goals", "Motivation"],
        correctAnswer: "Objectives",
        explanation: "Objectives are described as clarity about items to be produced and ancillary activities, aiding the entrepreneur's ability to turn their idea into reality and offer direction."
      },
      {
        question: "Which characteristic describes entrepreneurs having 'a strong sense of enthusiasm, optimism, and self-motivation,' constantly eager to take the lead?",
        options: ["Motivation", "Desire to achieve", "Drive and energy", "Self-confidence and control"],
        correctAnswer: "Motivation",
        explanation: "This is a direct paraphrase of the 'Motivation' characteristic."
      },
      {
        question: "Which characteristic describes entrepreneurs as typically having 'a strong desire to achievement as primary motivating force'?",
        options: ["Desire to achieve", "Motivation", "Goals", "Objectives"],
        correctAnswer: "Desire to achieve",
        explanation: "This is the exact phrase used to describe the 'Desire to achieve' characteristic."
      },
      {
        question: "Which characteristic states that entrepreneurs 'possess the capacity to work for long hours,' calling long hours and hard work 'the rules to achieve and maintain a successful enterprise'?",
        options: ["Drive and energy", "Desire to achieve", "Take and tolerate risk", "Long term planning and perseverance"],
        correctAnswer: "Drive and energy",
        explanation: "This is the exact description given for 'Drive and energy.'"
      },
      {
        question: "Which characteristic states that 'an entrepreneur needs to and be willing to take and tolerate a lot of risk in order to achieve the stated objectives'?",
        options: ["Take and tolerate risk", "Undertake risk", "Manage failures", "Mindful of uncertainty"],
        correctAnswer: "Take and tolerate risk",
        explanation: "This is drawn directly from the 'Take and tolerate risk' characteristic description."
      },
      {
        question: "Which characteristic emphasizes that establishing a successful enterprise 'requires long-term planning and all-round commitment from an entrepreneur'?",
        options: ["Long term planning and perseverance", "Taking Responsibility", "Wealth creation skills", "Time management skills"],
        correctAnswer: "Long term planning and perseverance",
        explanation: "The chapter states, 'Establishing a successful enterprise requires long-term planning and all-round commitment from an entrepreneur.'"
      },
      {
        question: "Which characteristic simply states that entrepreneurs 'undertake calculated and defined risks'?",
        options: ["Undertake risk", "Take and tolerate risk", "Manage failures", "Problem solving"],
        correctAnswer: "Undertake risk",
        explanation: "This is a distinct, shorter characteristic in the list: 'Entrepreneurs undertake calculated and defined risks.'"
      },
      {
        question: "According to the chapter, what is described as 'necessary to enhance the management of the entrepreneur's endeavours'?",
        options: ["Formal education in relevant areas", "Access to social media", "A large family network", "Government subsidies"],
        correctAnswer: "Formal education in relevant areas",
        explanation: "The 'Education' characteristic states, 'Formal education in relevant areas is necessary to enhance the management of the entrepreneur's endeavours.'"
      },
      {
        question: "Which characteristic reflects entrepreneurs having 'a deep sense of personal responsibility for the success or failure of the business'?",
        options: ["Taking Responsibility", "Internal locus of control belief", "Manage failures", "Undertake risk"],
        correctAnswer: "Taking Responsibility",
        explanation: "This phrase is taken directly from the 'Taking Responsibility' characteristic."
      },
      {
        question: "Which characteristic describes successful entrepreneurs as being 'known for effectively procurement and use of human and material resources efficiently and effective in order to achieve organizational goals'?",
        options: ["Procurement and use of resources", "Wealth creation skills", "Time management skills", "Knowledge of commercial and business laws"],
        correctAnswer: "Procurement and use of resources",
        explanation: "This is a near-verbatim quote from the 'Procurement and use of resources' characteristic."
      },
      {
        question: "Which characteristic requires entrepreneurs to 'cultivate a habit to use the available time optimally to achieve productivity'?",
        options: ["Time management skills", "Drive and energy", "Procurement and use of resources", "Long term planning and perseverance"],
        correctAnswer: "Time management skills",
        explanation: "This is a direct quote from the 'Time management skills' characteristic."
      },
      {
        question: "Which characteristic reflects that 'every entrepreneur's ambition is to create wealth for the benefits of owners, employees and society'?",
        options: ["Wealth creation skills", "Desire to achieve", "Objectives", "Taking Responsibility"],
        correctAnswer: "Wealth creation skills",
        explanation: "This is a direct quote describing the 'Wealth creation skills' characteristic."
      },
      {
        question: "According to the chapter, a basic knowledge of taxation, accounting, and business management is described as essential to what?",
        options: ["Making the life of an entrepreneur easier", "Reducing government taxes", "Avoiding all business risk", "Guaranteeing business success"],
        correctAnswer: "Making the life of an entrepreneur easier",
        explanation: "The 'Knowledge of commercial and business laws' characteristic states this basic knowledge 'is essential to make the life of an entrepreneur easier.'"
      },
      {
        question: "Which characteristic describes high-performing entrepreneurs who 'possess internalized kind of competitive spirit in which they continuously engage in competition to beat previous best performance'?",
        options: ["Competing against internal objective and standards", "Desire to achieve", "Self-confidence and control", "Undertake risk"],
        correctAnswer: "Competing against internal objective and standards",
        explanation: "This is the exact description of the 'Competing against internal objective and standards' characteristic."
      },
      {
        question: "Which characteristic holds that 'the success or failure of a new business enterprise depends on the entrepreneur's personal accomplishments, personal control and influence'?",
        options: ["Internal locus of control belief", "Taking Responsibility", "Self-confidence and control", "Mindful of uncertainty"],
        correctAnswer: "Internal locus of control belief",
        explanation: "This is a direct quote describing the 'Internal locus of control belief' characteristic."
      },
      {
        question: "Which characteristic emphasizes that 'it is necessary for an entrepreneur to acquire relevant experience' before undertaking a business venture, to understand potential pitfalls?",
        options: ["Experience", "Education", "Mindful of uncertainty", "Problem solving"],
        correctAnswer: "Experience",
        explanation: "This is a direct quote describing the 'Experience' characteristic."
      },
      {
        question: "Which characteristic requires an entrepreneur to have 'good social skills,' emotional stability, and compassion in order to build rapport with customers and employees?",
        options: ["Humane skills", "Conceptual skills", "Technical skills", "Effective communication skills and feedback"],
        correctAnswer: "Humane skills",
        explanation: "This describes 'Humane skills,' which requires emotional stability, interpersonal interactions, compassion and tact."
      },
      {
        question: "Which factor describes entrepreneurs being 'motivated to branch out on their own from their parents who are successful entrepreneurs'?",
        options: ["Family background", "Experience", "Education", "Internal locus of control belief"],
        correctAnswer: "Family background",
        explanation: "This is the exact description given for 'Family background' as an entrepreneurial characteristic/factor."
      },
      {
        question: "According to the chapter, function (ii) among an entrepreneur's duties is 'Selection of the legal form, location and site of the ___'?",
        options: ["business", "market", "product", "employees"],
        correctAnswer: "business",
        explanation: "Function (ii) is listed as 'Selection of the legal form, location and site of the business.'"
      },
      {
        question: "Function (iv) among the entrepreneur's listed duties is 'Innovative and strategic ___'?",
        options: ["planning", "financing", "marketing", "hiring"],
        correctAnswer: "planning",
        explanation: "Function (iv) is 'Innovative and strategic planning.'"
      },
      {
        question: "Which function is listed last (function vi) among the six functions of an entrepreneur?",
        options: ["Management of the ongoing enterprises", "Risk bearing", "Innovative and strategic planning", "Perception and identification of business opportunities"],
        correctAnswer: "Management of the ongoing enterprises",
        explanation: "The sixth and final listed function is 'Management of the ongoing enterprises.'"
      },
      {
        question: "Which function directly precedes 'Risk bearing' in the chapter's list of entrepreneur functions?",
        options: ["Innovative and strategic planning", "Selection of the legal form, location and site of the business", "Perception and identification of business opportunities", "Management of the ongoing enterprises"],
        correctAnswer: "Innovative and strategic planning",
        explanation: "The order given is: perception/identification, legal form/location, resource identification/acquisition, innovative/strategic planning, risk bearing, management."
      },
      {
        question: "Which entrepreneurship practice activity involves market research to comprehend client wants, market trends, and competitive environments?",
        options: ["Market Analysis", "Business planning", "Operations and execution", "Financial management"],
        correctAnswer: "Market Analysis",
        explanation: "Market Analysis is defined as entrepreneurs doing market research and analysis to comprehend client wants, trends, and competitive environments."
      },
      {
        question: "Which entrepreneurship practice activity covers planning, forecasting, cash flow management, and financial decision-making, including locating financing sources?",
        options: ["Financial management", "Marketing and sales", "Adaptation and iteration", "Networking and collaboration"],
        correctAnswer: "Financial management",
        explanation: "Financial management involves overseeing financial matters including planning, forecasting, cash flow management and financial decision-making."
      },
      {
        question: "Which entrepreneurship practice activity involves overseeing manufacturing, logistics, quality assurance, and supply chain management to deliver goods quickly?",
        options: ["Operations and execution", "Team building and leadership", "Learning and development", "Market Analysis"],
        correctAnswer: "Operations and execution",
        explanation: "Operations and execution involves putting in place operational systems and procedures to supply goods or services quickly, overseeing manufacturing, logistics, quality assurance and supply chain."
      },
      {
        question: "Which entrepreneurship practice activity includes creating marketing plans with ideas for branding, advertising, and customer acquisition?",
        options: ["Marketing and sales", "Business planning", "Financial management", "Adaptation and iteration"],
        correctAnswer: "Marketing and sales",
        explanation: "Marketing and sales is defined as creating marketing plans including branding, advertising and customer acquisition tactics."
      },
      {
        question: "Which entrepreneurship practice activity involves hiring, developing, and overseeing staff members to create and manage productive teams?",
        options: ["Team building and leadership", "Networking and collaboration", "Operations and execution", "Learning and development"],
        correctAnswer: "Team building and leadership",
        explanation: "Team building and leadership involves hiring, developing, and overseeing staff members, encouraging cooperation and a great work environment."
      },
      {
        question: "Which entrepreneurship practice activity involves entrepreneurs constantly modifying their strategies and business models based on client feedback and market realities?",
        options: ["Adaptation and iteration", "Business planning", "Market Analysis", "Team building and leadership"],
        correctAnswer: "Adaptation and iteration",
        explanation: "Adaptation and iteration describes entrepreneurs constantly modifying strategies based on client feedback, market realities, and evolving business demands."
      },
      {
        question: "Which entrepreneurship practice activity involves entrepreneurs cultivating connections with stakeholders and looking for alliances or collaborations?",
        options: ["Networking and collaboration", "Learning and development", "Financial management", "Operations and execution"],
        correctAnswer: "Networking and collaboration",
        explanation: "Networking and collaboration facilitates resource access, industry intelligence, and synergistic business growth through stakeholder connections."
      },
      {
        question: "Which entrepreneurship practice activity involves a commitment to lifelong learning through conferences, workshops, and courses to advance knowledge and abilities?",
        options: ["Learning and development", "Adaptation and iteration", "Networking and collaboration", "Team building and leadership"],
        correctAnswer: "Learning and development",
        explanation: "Learning and development describes entrepreneurs' commitment to lifelong learning, taking lessons from both triumphs and mistakes."
      },
      {
        question: "Which function in the development of new markets involves entrepreneurs using business possibilities and turning them into profits as 'inventors and prudent risk-takers'?",
        options: ["Introduce New Technologies, Industries and Products", "Mobilize Capital Resources", "Discover new sources of materials", "Market Analysis"],
        correctAnswer: "Introduce New Technologies, Industries and Products",
        explanation: "This function describes entrepreneurs as inventors and prudent risk-takers who provide new or distinct introductions that benefit the economy."
      },
      {
        question: "According to the chapter, what economic term describes people who are 'ready and able to meet people's demands through their efforts,' distinguishing them as developing markets?",
        options: ["Effective demand", "Capital resources", "Market equilibrium", "Purchasing power"],
        correctAnswer: "Effective demand",
        explanation: "The chapter states this readiness and ability to meet demand 'is referred to as effective demand in economics.'"
      },
      {
        question: "According to the chapter, which sector is described as 'the largest employer,' supporting millions of jobs through industrial, service, and agricultural companies?",
        options: ["The private business sector", "The public/government sector", "The informal barter sector", "The non-governmental sector"],
        correctAnswer: "The private business sector",
        explanation: "The chapter states, 'The private business sector is the largest employer,' citing examples like SM, Uniwide, Robinson, SMC, Ayala, and the Soriano group of firms."
      }

    
],
      },

 
  
  
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////// General Questions////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      {
        category: "All Chapters",
        questions: [
          
  

  // --- Chapter 1: Introduction to Entrepreneurship ---
  {
    question: "Which of the following is NOT considered a prerequisite skill to organize and run a business?",
    options: [
      "Financial Accounting",
      "Managerial, Professional and Leadership Skills",
      "Strategic Decision Making",
      "Creative Problem Solving"
    ],
    correctAnswer: "Financial Accounting",
    explanation: ""
  },
  {
    question: "These prerequisite skills are primarily used in which business function for growth?",
    options: [
      "Decision Making",
      "Marketing Research",
      "Quality Control",
      "Customer Service"
    ],
    correctAnswer: "Decision Making",
    explanation: ""
  },
  {
    question: "Entrepreneurs use resources at their disposal to _______.",
    options: [
      "Create Value",
      "Minimize Overhead",
      "Reduce Labor Costs",
      "Maximize Regulatory Compliance"
    ],
    correctAnswer: "Create Value",
    explanation: ""
  },
  {
    question: "The success of any business most heavily depends on which of the following?",
    options: [
      "Creativity and Innovation",
      "Physical Assets",
      "Established Brand Name",
      "High Volume Sales"
    ],
    correctAnswer: "Creativity and Innovation",
    explanation: ""
  },
  {
    question: "In entrepreneurship, the process of designing new business ideas and turning them into marketable goods and services is called _______.",
    options: [
      "Product Development",
      "Creativity and Innovation",
      "Supply Chain Management",
      "Financial Planning"
    ],
    correctAnswer: "Creativity and Innovation",
    explanation: ""
  },
  {
    question: "According to Schumpeter, entrepreneurship involves _______.",
    options: [
      "New combinations of resources",
      "Risk avoidance",
      "Cost minimization",
      "Market saturation"
    ],
    correctAnswer: "New combinations of resources",
    explanation: ""
  },
  {
    question: "Which of the following is NOT a major growth driver of a country’s economy?",
    options: [
      "Entrepreneurship",
      "Technology Adoption",
      "High Tax Rates",
      "Capital Investment"
    ],
    correctAnswer: "High Tax Rates",
    explanation: ""
  },
  {
    question: "What are the core characteristics of entrepreneurship? (EXCEPT)",
    options: [
      "Risk Bearing",
      "Managerial Skill",
      "Value Creation",
      "Excessive Bureaucracy"
    ],
    correctAnswer: "Excessive Bureaucracy",
    explanation: ""
  },
  {
    question: "Which of the following is NOT an objective of entrepreneurship?",
    options: [
      "Reducing poverty levels",
      "Creating employment opportunities",
      "Maximizing environmental degradation",
      "Enhancing GDP"
    ],
    correctAnswer: "Maximizing environmental degradation",
    explanation: ""
  },
  {
    question: "MSMEs refers to _______.",
    options: [
      "Micro, Small and Medium Enterprises",
      "Major Stock Market Entities",
      "Manufacturing, Shipping and Mining Enterprises",
      "Multi-State Marketing Enterprises"
    ],
    correctAnswer: "Micro, Small and Medium Enterprises",
    explanation: ""
  },
  // …and so on through all 27 questions of Chapter 1

  // --- Chapter 2: Theories of Entrepreneurship ---
  {
    question: "Theories in entrepreneurship have been proposed to explain _______.",
    options: [
      "The concept of Entrepreneurship",
      "Market Pricing Models",
      "Supply Chain Dynamics",
      "Accounting Principles"
    ],
    correctAnswer: "The concept of Entrepreneurship",
    explanation: ""
  },
  {
    question: "Which of these is NOT one of the seven main theories of entrepreneurship?",
    options: [
      "Psychological Theory",
      "Resource-Based Theory",
      "Opportunity-Based Theory",
      "Game Theory"
    ],
    correctAnswer: "Game Theory",
    explanation: ""
  },
  {
    question: "Economic Theory posits that entrepreneurs are motivated by _______.",
    options: [
      "Economic incentives",
      "Social recognition",
      "Regulatory compliance",
      "Random chance"
    ],
    correctAnswer: "Economic incentives",
    explanation: ""
  },
  {
    question: "Which school of thought is NOT part of the three that emphasize Economic Theory?",
    options: [
      "Austrian Market Process (AMP)",
      "Classicalists",
      "Behaviorists",
      "Non-Classicalists"
    ],
    correctAnswer: "Behaviorists",
    explanation: ""
  },
  {
    question: "McClelland’s 1961 work introduced the concept of _______.",
    options: [
      "Need for Achievement",
      "Locus of Control",
      "Personality Traits",
      "Social Capital"
    ],
    correctAnswer: "Need for Achievement",
    explanation: ""
  },
  {
    question: "Which of the following is NOT one of the three classes under Resource-Based Theory?",
    options: [
      "Financial Capital",
      "Social Capital",
      "Human Capital",
      "Regulatory Capital"
    ],
    correctAnswer: "Regulatory Capital",
    explanation: ""
  },
  {
    question: "Alvarez and Busenitz (2001) expanded Resource-Based Theory by adding _______.",
    options: [
      "Cognitive ability/skills of the entrepreneur",
      "Market saturation analysis",
      "Fixed asset valuation",
      "Supply chain metrics"
    ],
    correctAnswer: "Cognitive ability/skills of the entrepreneur",
    explanation: ""
  },
  // …and so on through all ~30 questions of Chapter 2

  // --- Chapter 3: The Nigeria Business Environment ---
  {
    question: "Business usually operates in an _______.",
    options: [
      "Environment",
      "Isolation",
      "Vacuum",
      "Monopoly"
    ],
    correctAnswer: "Environment",
    explanation: ""
  },
  {
    question: "Which of these is NOT a type of business environment?",
    options: [
      "Ecological",
      "Psychological",
      "Technological",
      "Legal"
    ],
    correctAnswer: "Psychological",
    explanation: ""
  },
  {
    question: "Internal business environment factors include all EXCEPT _______.",
    options: [
      "Product",
      "Promotion",
      "Place",
      "Political Regulation"
    ],
    correctAnswer: "Political Regulation",
    explanation: ""
  },
  // …continue through all 12 questions of Chapter 3

  // --- Chapter 4: Nature and Types of Business ---
  {
    question: "Which of the following is NOT one of the five types of business organization?",
    options: [
      "Sole Proprietorship",
      "Partnership",
      "Cooperative Society",
      "Virtual Corporation"
    ],
    correctAnswer: "Virtual Corporation",
    explanation: ""
  },
  {
    question: "A partnership regulated by a document called the _______.",
    options: [
      "Deed of Partnership",
      "Articles of Incorporation",
      "Memorandum of Understanding",
      "Operating Agreement"
    ],
    correctAnswer: "Deed of Partnership",
    explanation: ""
  },
  {
    question: "Which partner is known to the public but does not take part in day-to-day operations?",
    options: [
      "Silent Partner",
      "Secret Partner",
      "Dormant Partner",
      "Managing Partner"
    ],
    correctAnswer: "Silent Partner",
    explanation: ""
  },
  // …and so on through all ~25 questions of Chapter 4

  // --- Chapter 5: Sources of Finance ---
  {
    question: "Which of these is NOT a source of finance?",
    options: [
      "Internal Retained Earnings",
      "Bank Loans",
      "Operating Leases",
      "Social Media Funding"
    ],
    correctAnswer: "Social Media Funding",
    explanation: ""
  },
  {
    question: "Thrift societies are best described as _______.",
    options: [
      "Groups pooling money to lend at interest",
      "Government grant programs",
      "Equity investors",
      "Crowdfunding platforms"
    ],
    correctAnswer: "Groups pooling money to lend at interest",
    explanation: ""
  },
  {
    question: "Which of these is NOT a type of lease?",
    options: [
      "Operating Lease",
      "Finance Lease",
      "Sale-Back Lease",
      "Capital Lease"
    ],
    correctAnswer: "Sale-Back Lease",
    explanation: ""
  },


  // --- Chapter 5: Sources of Finance ---
  {
    question: "Which business function is often called the “oil wheel” because it acquires the services of skilled labor and modern technology?",
    options: ["Operations", "Marketing", "Finance", "Human Resources"],
    correctAnswer: "Finance",
    explanation: ""
  },
  {
    question: "A shortage in which of the following will most directly disrupt a company’s profitability?",
    options: ["Raw Materials", "Finance", "Customer Feedback", "Brand Recognition"],
    correctAnswer: "Finance",
    explanation: ""
  },
  {
    question: "Which of these is NOT a source of finance?",
    options: ["Internal Retained Earnings", "Bank Loans", "Trade Credit", "Social Media Campaigns"],
    correctAnswer: "Social Media Campaigns",
    explanation: ""
  },
  {
    question: "Which option best describes internal sources of finance?",
    options: ["Profits reinvested in the business", "Equity sold to investors", "Loans from banks", "Grants from government"],
    correctAnswer: "Profits reinvested in the business",
    explanation: ""
  },
  {
    question: "Which of these would be considered an external source of finance?",
    options: ["Sale of fixed assets", "Owner’s savings", "Share issue to the public", "Retained profits"],
    correctAnswer: "Share issue to the public",
    explanation: ""
  },
  {
    question: "Thrift societies are best described as groups that _______.",
    options: ["Pool money to lend to members", "Act as venture capitalists", "Issue corporate bonds", "Manage insurance risks"],
    correctAnswer: "Pool money to lend to members",
    explanation: ""
  },
  {
    question: "Which of the following is a short-term finance method where debts are sold to a specialist?",
    options: ["Factoring", "Leasing", "Equity Financing", "Crowdfunding"],
    correctAnswer: "Factoring",
    explanation: ""
  },
  {
    question: "Leasing is a contract that allows a business to _______.",
    options: ["Rent assets for a period of time", "Purchase equipment at a discount", "Secure loans without collateral", "Sell shares in the company"],
    correctAnswer: "Rent assets for a period of time",
    explanation: ""
  },
  {
    question: "Which of these is NOT a recognised type of lease?",
    options: ["Finance Lease", "Operating Lease", "Sale and Leaseback", "Equity Lease"],
    correctAnswer: "Equity Lease",
    explanation: ""
  },
  {
    question: "Which of the following is a real type of lease agreement?",
    options: ["Operating Lease", "Deferred Equity Lease", "Variable Interest Lease", "Floating Rate Lease"],
    correctAnswer: "Operating Lease",
    explanation: ""
  },

  // --- Chapter 6: Creativity and Innovation in Entrepreneurship ---
  {
    question: "Which statement is FALSE about creativity and innovation?",
    options: ["Creativity generates ideas", "Innovation commercialises ideas", "They are unrelated processes", "Innovation begins with creativity"],
    correctAnswer: "They are unrelated processes",
    explanation: ""
  },
  {
    question: "Which term best defines the ability to bring something new into existence?",
    options: ["Creativity", "Innovation", "Imitation", "Optimization"],
    correctAnswer: "Creativity",
    explanation: ""
  },
  {
    question: "Innovation primarily focuses on _______.",
    options: ["Implementing new ideas", "Assessing past failures", "Maintaining status quo", "Reducing costs only"],
    correctAnswer: "Implementing new ideas",
    explanation: ""
  },
  {
    question: "What is the key starting point for any innovation?",
    options: ["Creative idea", "Financial backing", "Market research", "Regulatory approval"],
    correctAnswer: "Creative idea",
    explanation: ""
  },
  {
    question: "Which of the following is NOT considered a form of innovation?",
    options: ["Process Innovation", "Product Innovation", "Management Innovation", "Accounting Innovation"],
    correctAnswer: "Accounting Innovation",
    explanation: ""
  },
  {
    question: "How many interrelated dimensions are studied in innovation strategy?",
    options: ["4", "2", "3", "5"],
    correctAnswer: "4",
    explanation: ""
  },
  {
    question: "Which of these is NOT one of the four dimensions of innovation strategy?",
    options: ["Exploration vs Exploitation", "Market Pull vs Technology Push", "Internal vs External Sourcing", "Cost Minimization vs Revenue Maximization"],
    correctAnswer: "Cost Minimization vs Revenue Maximization",
    explanation: ""
  },

  // --- Chapter 7: Business Establishment, Planning & Growth, Feasibility Study ---
  {
    question: "What term describes the organised setup of processes and factors to satisfy a need and generate revenue?",
    options: ["Business Establishment", "Market Analysis", "Product Launch", "Equity Financing"],
    correctAnswer: "Business Establishment",
    explanation: ""
  },
  {
    question: "At the very start of establishing a business, an entrepreneur must adopt the right _______.",
    options: ["Mindset", "Budget", "Team", "Location"],
    correctAnswer: "Mindset",
    explanation: ""
  },
  {
    question: "Which acronym stands for the Nigerian Association of Chambers of Commerce, Industry, Mines and Agriculture?",
    options: ["NACCIMA", "NASME", "MAN", "SMEDAN"],
    correctAnswer: "NACCIMA",
    explanation: ""
  },
  {
    question: "Which of these is NOT a Nigerian business association acronym?",
    options: ["NASDAQ", "NASME", "VEDAN", "AMEN"],
    correctAnswer: "NASDAQ",
    explanation: ""
  },
  {
    question: "A business plan is defined as a document that _______.",
    options: ["Analyses technical and financial feasibility", "Records daily sales", "Details only staffing needs", "Serves as a marketing brochure"],
    correctAnswer: "Analyses technical and financial feasibility",
    explanation: ""
  },
  {
    question: "Which of the following is NOT a standard component of a business plan?",
    options: ["Executive Summary", "Market Analysis", "Funding Requirements", "Employee Attendance Records"],
    correctAnswer: "Employee Attendance Records",
    explanation: ""
  },
  {
    question: "Which section provides a snapshot overview of the entire business plan?",
    options: ["Executive Summary", "Business Description", "Financial Projections", "Sales Strategies"],
    correctAnswer: "Executive Summary",
    explanation: ""
  },
  {
    question: "Market analysis primarily involves assessing _______.",
    options: ["Industry conditions and customer needs", "Employee morale", "Supplier discounts", "Office layout"],
    correctAnswer: "Industry conditions and customer needs",
    explanation: ""
  },
  {
    question: "Business growth stage is characterised by _______.",
    options: ["Expansion and added profit options", "Business closure", "Debt restructuring", "Brand repositioning"],
    correctAnswer: "Expansion and added profit options",
    explanation: ""
  },
  {
    question: "A feasibility study is designed to determine whether a _______.",
    options: ["Project is viable", "Team is productive", "Brand is recognised", "Patent is enforceable"],
    correctAnswer: "Project is viable",
    explanation: ""
  },

  // --- Chapter 8: Human Resource Management ---
  {
    question: "Which function involves planning, organising, directing and controlling procurement and development of people?",
    options: ["Human Resource Management", "Operations Management", "Financial Management", "Marketing Management"],
    correctAnswer: "Human Resource Management",
    explanation: ""
  },
  {
    question: "The process of determining manpower requirements to meet organisational goals is called _______.",
    options: ["Human Resource Planning", "Job Analysis", "Performance Appraisal", "Compensation Management"],
    correctAnswer: "Human Resource Planning",
    explanation: ""
  },
  {
    question: "Human resource planning is often described as a _______.",
    options: ["Double-edged weapon", "Smooth process", "Single-step procedure", "Break-even analysis"],
    correctAnswer: "Double-edged weapon",
    explanation: ""
  },
  {
    question: "The act of searching for prospective employees to match job specifications is known as _______.",
    options: ["Recruitment", "Selection", "Induction", "Orientation"],
    correctAnswer: "Recruitment",
    explanation: ""
  },

  // --- Chapter 9: Validation, Opportunity Search & Marketing ---
  {
    question: "Which term means checking the accuracy or validity of something?",
    options: ["Validation", "Audit", "Calibration", "Verification"],
    correctAnswer: "Validation",
    explanation: ""
  },
  {
    question: "Scanning the external business environment to identify new prospects is called _______.",
    options: ["Opportunity Search", "Market Penetration", "Supply Chain Management", "Corporate Social Responsibility"],
    correctAnswer: "Opportunity Search",
    explanation: ""
  },
  {
    question: "In marketing, the act of obtaining a desired object by offering something in return is called _______.",
    options: ["Exchange", "Distribution", "Promotion", "Segmentation"],
    correctAnswer: "Exchange",
    explanation: ""
  },
  {
    question: "Which metric is considered marketing’s basic unit of measurement?",
    options: ["Transaction", "Brand Equity", "Market Share", "Customer Loyalty"],
    correctAnswer: "Transaction",
    explanation: ""
  },
  {
    question: "Which of the following is NOT a product offered to a market to satisfy a need?",
    options: ["Product", "Price", "Place", "Promotion"],
    correctAnswer: "Price",
    explanation: ""
  },
  {
    question: "The process of promoting and selling a product to customers is known as _______.",
    options: ["Marketing of Product", "Product Development", "Quality Assurance", "Customer Service"],
    correctAnswer: "Marketing of Product",
    explanation: ""
  },
  {
    question: "Which type of entrepreneur is characterised by cautious adoption of change?",
    options: ["Fabian", "Innovative", "Imitating", "Drone"],
    correctAnswer: "Fabian",
    explanation: ""
  },
  {
    question: "Which of the following is NOT one of the main roles an entrepreneur fulfills?",
    options: ["Technological Change", "Economic Change", "Social Change", "Regulatory Change"],
    correctAnswer: "Regulatory Change",
    explanation: ""
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

        
  
  

  
  
  
  





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////Genetics/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    







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

function startTimer() {
  let timeLeft = 30; // 30 seconds
  const timerElement = document.getElementById("timer");

  if (!timerElement) return;

  clearInterval(timer);
  timerElement.textContent = `00:30 sec`;

  timer = setInterval(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} sec`;

    if (timeLeft === 0) {
      clearInterval(timer);
      submitAnswer();
      return;
    }
    timeLeft--;
  }, 1000);
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
  
  
  

  
  
  
 
