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
    category: "1A",
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
  {
    category: "1B",
    questions: [
      {
        question: "According to Clarence Danhof's classification, which type of entrepreneur 'puts knowledge together, synthesizes it, and develops novel production components'?",
        options: ["Innovative", "Imitative/Adoptive", "Fabian", "Drone"],
        correctAnswer: "Innovative",
        explanation: "The Innovative entrepreneur is described as one who synthesizes knowledge and develops novel production components, introducing new concepts, technology and markets."
      },
      {
        question: "Which Danhof classification describes entrepreneurs who are 'reserved and shy,' only copying inventions when convinced that failing to do so may harm the firm?",
        options: ["Fabian", "Drone", "Innovative", "Imitative/Adoptive"],
        correctAnswer: "Fabian",
        explanation: "The Fabian businessman is defined as reserved, shy, and skeptical, adopting new technology only when the alternative is business loss or collapse."
      },
      {
        question: "Entrepreneurs described as 'laggards' who refuse to accept manufacturing modifications even at the risk of lower profits belong to which Danhof category?",
        options: ["Drone", "Fabian", "Imitative/Adoptive", "Innovative"],
        correctAnswer: "Drone",
        explanation: "The Drone entrepreneur is described as conservative, resistant to change, and a laggard who rejects modifications to their conventional business systems."
      },
      {
        question: "Which Danhof type of entrepreneur models their business setup on the principles of already-established business owners rather than creating original concepts?",
        options: ["Imitative/Adoptive", "Innovative", "Fabian", "Drone"],
        correctAnswer: "Imitative/Adoptive",
        explanation: "The Imitative/Adoptive entrepreneur only adopts successful innovations already introduced by others, copying tools and strategies rather than originating them."
      },
      {
        question: "Clarence Danhof's classification of entrepreneurs was based primarily on his study of what?",
        options: ["American agriculture", "Nigerian trade routes", "European industrialization", "Asian manufacturing"],
        correctAnswer: "American agriculture",
        explanation: "The chapter states Danhof's classification 'was based on Danhof's study of American agriculture.'"
      },
      {
        question: "Under Arthur H. Cole's classification, which type of businessperson 'rarely makes any innovative changes and adheres to the rule of thumb'?",
        options: ["Empirical", "Rational", "Cognitive", "Fabian"],
        correctAnswer: "Empirical",
        explanation: "This is the exact definition given for the 'Empirical' businessperson under Cole's classification."
      },
      {
        question: "According to Arthur H. Cole, both Rational and Cognitive businesspeople offer changes that appear more dramatic for what reason?",
        options: ["They are well-informed about the state of the economy as a whole", "They have access to more capital", "They avoid risk entirely", "They copy competitors closely"],
        correctAnswer: "They are well-informed about the state of the economy as a whole",
        explanation: "Both Rational and Cognitive businesspeople are described identically as offering more dramatic changes because they are well-informed about the state of the economy as a whole."
      },
      {
        question: "Under the classification on the basis of ownership, which type of entrepreneur is driven mainly by profit and will not venture into industries with low likelihood of financial benefit?",
        options: ["Private", "Public", "Empirical", "Rational"],
        correctAnswer: "Private",
        explanation: "The 'Private' entrepreneur classification states profit is what drives them, so they avoid low-profit-likelihood industries."
      },
      {
        question: "According to the classification based on scale of enterprise, which type of business owners 'lack the abilities, finances, and expertise required to launch massive production' and bring about new technical advancements?",
        options: ["Small scale", "Large scale", "Active Partners", "Solo Operators"],
        correctAnswer: "Small scale",
        explanation: "This is the exact description of small-scale business owners, especially common in developing nations, according to the chapter."
      },
      {
        question: "The Naidu and Rao Classification comprehensively classifies entrepreneurs on how many parameters, as shown in Figure 1.1?",
        options: ["Four", "Three", "Five", "Six"],
        correctAnswer: "Four",
        explanation: "Figure 1.1 shows four parameters: Socio-Cultural Classification, Entrepreneurial Experience Classification, Motivational Classification, and Technical Experience Classification."
      },
      {
        question: "According to the economic theory of entrepreneurship, entrepreneurs are stimulated by economic incentives such as taxation laws, industrial policies, and the availability of what?",
        options: ["Infrastructure and market information", "Foreign aid grants", "Free university tuition", "Military support"],
        correctAnswer: "Infrastructure and market information",
        explanation: "The economic theory cites 'availability of infrastructure potential recognition for investment, marketing opportunity, and excellent information on the status of the market' as key stimulants."
      },
      {
        question: "Psychological entrepreneurship theory identifies which three characteristics as crucial for every entrepreneur's success and well-rounded accomplishment?",
        options: ["Identified characteristics, control, and desire for success", "Capital, labour, and land", "Vision, mission, and strategy", "Age, gender, and education level"],
        correctAnswer: "Identified characteristics, control, and desire for success",
        explanation: "The theory 'identified characteristics, control, and desire for success as three key psychological characteristics' crucial for entrepreneurial success."
      },
      {
        question: "According to sociological entrepreneurship theory, whose 1991 work argued that social networks, interpersonal connections, and alliances that foster trust help propel business prospects?",
        options: ["Reynolds", "McClelland", "Peter Drucker", "Aigbefue"],
        correctAnswer: "Reynolds",
        explanation: "The chapter attributes this view to Reynolds (1991) under Sociological entrepreneurship theory."
      },
      {
        question: "The anthropology entrepreneurship theory is entirely based on the study of a society's history, evolution, traditions, and what else?",
        options: ["Beliefs", "Currency", "Military strength", "Political parties"],
        correctAnswer: "Beliefs",
        explanation: "Anthropology theory is 'entirely based on the study of a society, including its history, evolution, traditions, and beliefs.'"
      },
      {
        question: "The Opportunity-Based theory of entrepreneurship has its roots in whose concept that businesspeople take advantage of opportunities impacting many aspects of life?",
        options: ["Peter Drucker", "McClelland", "Reynolds", "Aigbefue"],
        correctAnswer: "Peter Drucker",
        explanation: "The chapter states, 'This notion has its roots in Peter Drucker's concept, that businesspeople take advantage of opportunities.'"
      },
      {
        question: "Resource-based entrepreneurship theory places strong emphasis on acquiring which three types of capital essential for beginning and expanding a firm?",
        options: ["Financial capital, human capital, and social capital", "Political capital, cultural capital, and land capital", "Digital capital, brand capital, and legal capital", "Foreign capital, domestic capital, and family capital"],
        correctAnswer: "Financial capital, human capital, and social capital",
        explanation: "The theory 'places strong emphasis on the significance of acquiring resources, such as financial capital, human capital, and social capital.'"
      },
      {
        question: "According to the chapter, who created the 'thirst for accomplishment' concept in 1961, showing that business owners always want to flourish and complete tasks quickly?",
        options: ["McClelland", "Reynolds", "Peter Drucker", "Aigbefue"],
        correctAnswer: "McClelland",
        explanation: "The text states, 'McClelland in 1961 created the thirst for accomplishment,' linked to locus of control traits under Psychological entrepreneurship theory."
      },
      {
        question: "Under the classification on the basis of ownership, which type of entrepreneurship involves governments in developing nations taking the initiative to share businesses?",
        options: ["Public", "Private", "Empirical", "Cognitive"],
        correctAnswer: "Public",
        explanation: "The 'Public' classification states, 'Governments in developing nations will take the initiative to share businesses.'"
      },
      {
        question: "According to the classification based on scale of enterprise, which type of business owners have 'the enterprise, human, technological, and financial resources required to start and implement new technological advances'?",
        options: ["Large scale", "Small scale", "Life timers", "Buyers Entrepreneurs"],
        correctAnswer: "Large scale",
        explanation: "This is the exact description given for 'Large scale' business owners, mostly found in industrialized nations."
      },
      {
        question: "Among the 'Other Classifications of Entrepreneurs,' which type establishes their companies independently, running the firm mostly as a sole proprietorship?",
        options: ["Solo Operators", "Active Partners", "Inventors", "Buyers Entrepreneurs"],
        correctAnswer: "Solo Operators",
        explanation: "Solo Operators 'like establishing their companies independently' and 'mostly run their firm as a sole proprietorship,' contributing their own resources and expertise."
      },
      {
        question: "Which classification of entrepreneur combines resources and works together with others, taking a proactive role in running the company's everyday operations?",
        options: ["Active Partners", "Solo Operators", "Inventors", "Life timers"],
        correctAnswer: "Active Partners",
        explanation: "Active Partners 'combine their resources and work together to create their companies,' taking a proactive role, giving them more operational performance."
      },
      {
        question: "Which classification of entrepreneur 'focuses mostly on research and development tasks' and takes pleasure in developing new items, technology, and manufacturing techniques?",
        options: ["Inventors", "Active Partners", "Life timers", "Buyers Entrepreneurs"],
        correctAnswer: "Inventors",
        explanation: "Inventors are described as business owners who focus on research and development, having a creative nature."
      },
      {
        question: "Entrepreneurs who look into buying existing, possibly confiscated or sick business units and fix them using their knowledge and skills are known as?",
        options: ["Buyers Entrepreneurs", "Life timers", "Solo Operators", "Inventors"],
        correctAnswer: "Buyers Entrepreneurs",
        explanation: "Buyers Entrepreneurs 'look into buying existing units that may be confiscated or are still operational,' fixing sick units through their skills."
      },
      {
        question: "Which category considers their businesses 'an integral part of their lives,' motivated by ego to successfully rebuild the business, including family businesses that prosper due to excellent employee expertise?",
        options: ["Life timers", "Buyers Entrepreneurs", "Active Partners", "Solo Operators"],
        correctAnswer: "Life timers",
        explanation: "Life timers 'consider their businesses to be an integral part of their lives,' motivated to accept personal responsibility for the sake of their ego."
      },
      {
        question: "In the Naidu and Rao Classification diagram (Figure 1.1), which parameter would most directly relate to an entrepreneur's societal and cultural environment?",
        options: ["Socio-Cultural Classification", "Motivational Classification", "Technical Experience Classification", "Entrepreneurial Experience Classification"],
        correctAnswer: "Socio-Cultural Classification",
        explanation: "Figure 1.1 shows 'Socio-Cultural Classification' as one of the four parameters directly relating to society and culture."
      },
      {
        question: "In the Naidu and Rao Classification diagram (Figure 1.1), which parameter would most directly relate to an entrepreneur's practical exposure to running a venture?",
        options: ["Entrepreneurial Experience Classification", "Socio-Cultural Classification", "Motivational Classification", "Technical Experience Classification"],
        correctAnswer: "Entrepreneurial Experience Classification",
        explanation: "Figure 1.1 lists 'Entrepreneurial Experience Classification' as one of the four Naidu and Rao parameters."
      },
      {
        question: "In the Naidu and Rao Classification diagram (Figure 1.1), which parameter would most directly relate to an entrepreneur's drive and inspiration to act?",
        options: ["Motivational Classification", "Technical Experience Classification", "Socio-Cultural Classification", "Entrepreneurial Experience Classification"],
        correctAnswer: "Motivational Classification",
        explanation: "Figure 1.1 lists 'Motivational Classification' as one of the four Naidu and Rao parameters."
      },
      {
        question: "In the Naidu and Rao Classification diagram (Figure 1.1), which parameter would most directly relate to an entrepreneur's know-how in their specific field?",
        options: ["Technical Experience Classification", "Motivational Classification", "Socio-Cultural Classification", "Entrepreneurial Experience Classification"],
        correctAnswer: "Technical Experience Classification",
        explanation: "Figure 1.1 lists 'Technical Experience Classification' as one of the four Naidu and Rao parameters."
      },
      {
        question: "According to economic theory, what are described as the two main forces behind the entrepreneurship idea?",
        options: ["Trade specialisation and competition", "Supply and demand", "Inflation and interest rates", "Taxation and subsidy"],
        correctAnswer: "Trade specialisation and competition",
        explanation: "The chapter states, 'The two main forces behind this entrepreneurship idea are trade specialisation and competition.'"
      },
      {
        question: "According to economic theory, the production and distribution of products and services in the marketplace are described as what?",
        options: ["Competitive endeavours", "Government-controlled processes", "Random occurrences", "Purely social activities"],
        correctAnswer: "Competitive endeavours",
        explanation: "The chapter states, 'the production and distribution of products and services in the marketplace are competitive endeavours.'"
      },
      {
        question: "According to economic theory, in order to improve the production of products and services, entrepreneurs should develop their understanding of what two things?",
        options: ["Creativity and invention", "Taxation and legislation", "Advertising and branding", "Recruitment and training"],
        correctAnswer: "Creativity and invention",
        explanation: "The idea 'stipulates that in order to improve the production of products and services, entrepreneurs should develop their understanding of creativity and invention.'"
      },
      {
        question: "Which two concepts does psychological entrepreneurship theory examine in order to encourage innovation and creativity inside an organisation?",
        options: ["Destructive innovation and design entrepreneurial thinking", "Trade specialisation and competition", "Bootstrapping and outside funding", "Locus of control and thirst for accomplishment"],
        correctAnswer: "Destructive innovation and design entrepreneurial thinking",
        explanation: "The chapter states psychological theory 'examines concepts like destructive innovation and design entrepreneurial thinking.'"
      },
      {
        question: "According to psychological entrepreneurship theory, 'personality traits' refer to what?",
        options: ["The unborn qualities of a person that make him or her stand out naturally", "Skills learned only through formal education", "Traits acquired exclusively from family business", "Traits assigned by government classification"],
        correctAnswer: "The unborn qualities of a person that make him or her stand out naturally",
        explanation: "The chapter defines personality traits as referring 'to the unborn qualities of a person that make him or her stand out naturally.'"
      },
      {
        question: "According to sociological theory, besides social interactions that propel business prospects, what other factor concerns the traits of those who choose to become entrepreneurs?",
        options: ["Their way of life, how they conduct themselves, and how others see them", "Their academic qualifications only", "Their nationality and citizenship status", "Their physical strength and fitness"],
        correctAnswer: "Their way of life, how they conduct themselves, and how others see them",
        explanation: "Sociological theory secondly considers 'the traits of those who choose to become entrepreneurs, their way of life, how they conduct themselves... and how others see them.'"
      },
      {
        question: "According to sociological theory, what is described as 'least' among the factors affecting an entrepreneur, though still relevant, particularly regarding growth of entrepreneurship?",
        options: ["The person's social background, particularly within the community", "The person's physical health", "The person's political affiliation", "The person's foreign travel experience"],
        correctAnswer: "The person's social background, particularly within the community",
        explanation: "The chapter states, 'Last but not least, the person's social background, particularly within the community,' as a factor in sociological theory."
      },
      {
        question: "According to anthropology entrepreneurship theory, the productivity and success of every entrepreneur are greatly influenced by what?",
        options: ["The cultural characteristics of a community", "The entrepreneur's formal education level", "The entrepreneur's physical location alone", "Government tax policy"],
        correctAnswer: "The cultural characteristics of a community",
        explanation: "The chapter states, 'The productivity and success of every entrepreneur are greatly influenced by the cultural characteristics of a community.'"
      },
      {
        question: "According to anthropology entrepreneurship theory, cultural experiences assist the entrepreneur to do what regarding new business opportunities?",
        options: ["Learn more and behave better while considering opportunities for expansion", "Avoid all forms of expansion", "Ignore market conditions entirely", "Rely solely on foreign investment"],
        correctAnswer: "Learn more and behave better while considering opportunities for expansion",
        explanation: "The chapter states, 'These cultural experiences assist the entrepreneur learn more and behave better while considering new company opportunities for expansion.'"
      },
      {
        question: "According to opportunity-based entrepreneurship theory, successful businesspeople are viewed as good thinkers who are always considering changes in what three areas?",
        options: ["Technology, manufacturing methods, and customer preferences", "Weather, politics, and religion", "Currency exchange rates, tariffs, and quotas", "Family structure, tradition, and language"],
        correctAnswer: "Technology, manufacturing methods, and customer preferences",
        explanation: "The chapter states successful businesspeople 'are always considering changes in technology, manufacturing methods, and customer preferences.'"
      },
      {
        question: "According to resource-based entrepreneurship theory, which strategies does the theory look at for obtaining resources?",
        options: ["Bootstrapping, looking for outside funding, and creating networks", "Government lobbying, tax evasion, and price fixing", "Advertising, discounting, and franchising", "Diversifying and downsizing"],
        correctAnswer: "Bootstrapping, looking for outside funding, and creating networks",
        explanation: "The chapter states the idea 'looks at strategies like bootstrapping, looking for outside funding, and creating networks to obtain resources.'"
      },
      {
        question: "According to the chapter, what did Aigbefue opine about an entrepreneur's exposure?",
        options: ["It will improve his or her ability in day-to-day tasks", "It has no effect on business performance", "It only matters for large-scale enterprises", "It is less important than formal education"],
        correctAnswer: "It will improve his or her ability in day-to-day tasks",
        explanation: "The chapter states, 'Aigbefue opined that an entrepreneur's exposure will improve his or her ability in day-to-day tasks.'"
      },
      {
        question: "According to Aigbefue (as cited in the chapter), finance and managerial skills are described as what?",
        options: ["A crucial link and tool that will change an entrepreneur into a better performer", "Unnecessary for successful entrepreneurship", "Only relevant to public enterprises", "Substitutes for formal education"],
        correctAnswer: "A crucial link and tool that will change an entrepreneur into a better performer",
        explanation: "The chapter states finance and managerial skills 'are a crucial link and tool that will change an entrepreneur into a better performer and result-oriented individual.'"
      },
      {
        question: "Which cognitive skill-set trait, stipulated for successful goal attainment, relates to an entrepreneur's ability to recognize opportunities?",
        options: ["Aware of chances", "Efficient with his time", "Able to Establish empires", "Apt in taking wise decisions"],
        correctAnswer: "Aware of chances",
        explanation: "The cognitive skill set list begins with 'Aware of chances' among the traits an entrepreneur should have."
      },
      {
        question: "Which cognitive skill-set trait, stipulated for successful goal attainment, relates to an entrepreneur's effective use of time?",
        options: ["Efficient with his time", "Aware of chances", "Efficient with resources", "Apt in taking wise decisions"],
        correctAnswer: "Efficient with his time",
        explanation: "'Efficient with his time' is listed among the cognitive skill-set traits an entrepreneur should possess."
      },
      {
        question: "Which cognitive skill-set trait, stipulated for successful goal attainment, relates to an entrepreneur's capacity to build large business empires?",
        options: ["Able to Establish empires", "Efficient with resources", "Aware of chances", "Apt in taking wise decisions"],
        correctAnswer: "Able to Establish empires",
        explanation: "'Able to Establish empires' is one of the five cognitive skill-set traits listed in the chapter."
      },
      {
        question: "Which cognitive skill-set trait, stipulated for successful goal attainment, relates to prudent management of resources?",
        options: ["Efficient with resources", "Able to Establish empires", "Aware of chances", "Efficient with his time"],
        correctAnswer: "Efficient with resources",
        explanation: "'Efficient with resources' is listed among the cognitive skill-set traits an entrepreneur should possess."
      },
      {
        question: "Which cognitive skill-set trait, stipulated for successful goal attainment, relates to sound judgment and decision-making?",
        options: ["Apt in taking wise decisions", "Aware of chances", "Efficient with his time", "Able to Establish empires"],
        correctAnswer: "Apt in taking wise decisions",
        explanation: "'Apt in taking wise decisions' is the last of the five cognitive skill-set traits listed."
      },
      {
        question: "According to the chapter, when a business succeeds and raises its owners' standard of living, entrepreneurs believe that what has occurred?",
        options: ["Internal control", "External control", "Random chance", "Government intervention"],
        correctAnswer: "Internal control",
        explanation: "The chapter states, 'When a business succeeds and raises its owners' standard of living, they believe that internal control has occurred.'"
      },
      {
        question: "According to the chapter, entrepreneurs with an external locus of control believe that life events are dependent on what?",
        options: ["External factors", "Their own personal accomplishments", "Formal education alone", "Family background alone"],
        correctAnswer: "External factors",
        explanation: "The chapter states, 'those with an external locus of control believe that life events are dependent on external factors.'"
      },
      {
        question: "According to Clarence Danhof's classification, entrepreneurs become more innovative and enthusiastic as what advances?",
        options: ["Economic development", "Political stability", "Population growth", "Foreign investment"],
        correctAnswer: "Economic development",
        explanation: "The chapter states Danhof's classification is based on the idea that 'as economic development advances, they become more innovative and enthusiastic.'"
      },
      {
        question: "How many categories did Arthur H. Cole classify entrepreneurs into?",
        options: ["Three", "Two", "Four", "Five"],
        correctAnswer: "Three",
        explanation: "Cole's classification comprises three types: Empirical, Rational, and Cognitive."
      }
    ],
  },
  {
    category: "1C",
    questions: [
      {
        question: "According to the chapter, entrepreneurial education promotes competitiveness, employment, and social/economic growth while breaking through the barriers of gender, class, race, sexual orientation, and what other factor?",
        options: ["Age", "Religion", "Nationality", "Marital status"],
        correctAnswer: "Age",
        explanation: "The chapter lists 'gender, class, race, sexual orientation, and age' as barriers that entrepreneurial education breaks through."
      },
      {
        question: "Which of the following is listed as necessary to support entrepreneurship, according to the chapter?",
        options: ["A system of information exchange between managers and entrepreneurs", "Elimination of all business risk", "Guaranteed government subsidies for every business", "A mandatory retirement age for entrepreneurs"],
        correctAnswer: "A system of information exchange between managers and entrepreneurs",
        explanation: "The four listed necessities include explicit goals, an information exchange system between managers and entrepreneurs, emphasis on responsibility/accountability, and rewards for creative effort."
      },
      {
        question: "According to Figure 1.2, which factor is described as the most important in determining the growth outcome of an enterprise?",
        options: ["Psychological or motivational factors", "Competitive Advantage alone", "Managerial Skills alone", "Views of Significant Others"],
        correctAnswer: "Psychological or motivational factors",
        explanation: "The text states, 'The most important factor is psychological or motivational factors (strong commitment by the entrepreneur/management team to grow the business).'"
      },
      {
        question: "In Figure 1.2, 'Growth Intention' leads to 'Growth Outcome' when combined with which two other factors?",
        options: ["Competitive Advantage and Managerial Skills", "Attitudes and Perceived Feasibility", "Views of Significant Others and Perceived Feasibility", "Policy and Finance"],
        correctAnswer: "Competitive Advantage and Managerial Skills",
        explanation: "In the diagram, Growth Intention, Competitive Advantage, and Managerial Skills all feed into Growth Outcome."
      },
      {
        question: "Which of the following is NOT listed as a major factor for enterprise failure in the chapter?",
        options: ["Excessive employee benefits", "Inadequate record keeping", "Under-pricing", "Weak financial control"],
        correctAnswer: "Excessive employee benefits",
        explanation: "The ten listed factors include inability to adapt, lack of managerial skills, inadequate record keeping, lack of focus, under-pricing, underestimating competition, poor marketing, weak financial control, lack of innovation, and inadequate liquidity — not employee benefits."
      },
      {
        question: "According to Table 1.1, which of the following is a firm-related element (rather than an entrepreneur-related element) influencing growth in small enterprise?",
        options: ["Legal form", "Motivation", "Prior business failure", "Functional skills"],
        correctAnswer: "Legal form",
        explanation: "Table 1.1 lists Legal form under 'Firm,' while Motivation, Prior business failure, and Functional skills are listed under 'Entrepreneur.'"
      },
      {
        question: "Barriers to entrepreneurial growth are grouped into which two broad categories in Figure 1.3?",
        options: ["External and Internal", "Financial and Non-financial", "Local and Global", "Human and Technical"],
        correctAnswer: "External and Internal",
        explanation: "Figure 1.3 titles the two barrier groups 'External Barriers' and 'Internal Barriers.'"
      },
      {
        question: "Which of the following is classified as an External Barrier to entrepreneurial growth in Figure 1.3?",
        options: ["Government policy", "Funding", "Shortage of Orders", "Management Capability"],
        correctAnswer: "Government policy",
        explanation: "External Barriers include Labour Market Conditions, Market Structure/Competition, Government policy, Economic Climate, Legislation, and Access to Markets."
      },
      {
        question: "Which of the following is classified as an Internal Barrier to entrepreneurial growth in Figure 1.3?",
        options: ["Funding", "Access to Markets", "Labour Market Conditions", "Legislation"],
        correctAnswer: "Funding",
        explanation: "Internal Barriers include Psychological/Motivational Factors, Management Capability, Funding, Shortage of Orders, Sales/marketing Capacity, and Poor Product/Services."
      },
      {
        question: "According to Figure 1.4, which three key skill-sets are required to overcome barriers to entrepreneurial growth?",
        options: ["Technical Skills, Managerial Skills, and Entrepreneurship Skills", "Financial Skills, Legal Skills, and Marketing Skills", "Communication, Leadership, and Networking Skills", "Innovation, Risk-taking, and Planning Skills"],
        correctAnswer: "Technical Skills, Managerial Skills, and Entrepreneurship Skills",
        explanation: "Figure 1.4 is a Venn diagram of Entrepreneurship Skills, Technical Skills, and Management Skills."
      },
      {
        question: "In Figure 1.4, 'Inner Discipline,' 'Ability to take risk,' and 'Persistence' are listed under which skill-set category?",
        options: ["Entrepreneurship Skills", "Technical Skills", "Management Skills", "Conceptual Skills"],
        correctAnswer: "Entrepreneurship Skills",
        explanation: "These traits, along with Innovative and Change-Orientated, appear under 'Entrepreneurship Skills' in Figure 1.4."
      },
      {
        question: "According to the chapter, government engagement in entrepreneurship development in Nigeria gained prominence immediately after which event?",
        options: ["The Nigerian civil war (1967–1970)", "Nigeria's independence in 1960", "The introduction of SAP in 1986", "The oil boom of the 1970s"],
        correctAnswer: "The Nigerian civil war (1967–1970)",
        explanation: "The chapter states government engagement 'gained prominence immediately after Nigerian civil war (1967–1970).'"
      },
      {
        question: "Which Nigerian ethnic group is described as having honed entrepreneurial skills specifically in 'inventory control, management, and distribution through purchasing and selling items'?",
        options: ["Ibo", "Hausa", "Yoruba", "Benin"],
        correctAnswer: "Ibo",
        explanation: "The chapter states, 'The Ibos honed their entrepreneurial skills in inventory control, management, and distribution through purchasing and selling items.'"
      },
      {
        question: "The Structural Adjustment Programme (SAP), which expanded government support for entrepreneurial growth in Nigeria, was introduced in what year?",
        options: ["1986", "1970", "1999", "1960"],
        correctAnswer: "1986",
        explanation: "The chapter states government support 'has expanded since the middle of the 1980s, notably after the Structural Adjustment Programme (SAP) was introduced in 1986.'"
      },
      {
        question: "Which of the following was NOT mentioned in the chapter as an agency established to enhance entrepreneurship development in Nigeria?",
        options: ["Central Bank Entrepreneurship Fund (CBEF)", "National Directorate of Employment (NDE)", "National Open Apprenticeship Scheme (NOAS)", "Small and Medium Enterprise Development Association of Nigeria (SMEDAN)"],
        correctAnswer: "Central Bank Entrepreneurship Fund (CBEF)",
        explanation: "The chapter names NDE, NOAS, and SMEDAN specifically; CBEF is not mentioned in the text."
      },
      {
        question: "According to the Policy Framework for High Growth of Enterprise, policies should 'co-exist programmes' for which two categories of enterprises?",
        options: ["General enterprises and high-growth enterprises", "Public enterprises and private enterprises", "Rural enterprises and urban enterprises", "Small enterprises and micro enterprises"],
        correctAnswer: "General enterprises and high-growth enterprises",
        explanation: "One listed policy is to 'Co-exist programmes for general enterprises and high-growth enterprises.'"
      },
      {
        question: "Which of the following is listed among the importance of entrepreneurship in developing society?",
        options: ["Encourages and sustains economic growth and employment Generation", "Guarantees zero business failure", "Eliminates the need for financial management", "Removes all barriers to market entry"],
        correctAnswer: "Encourages and sustains economic growth and employment Generation",
        explanation: "This is the first of four listed points on the importance of entrepreneurship in developing society."
      },
      {
        question: "Which of the following is listed among the importance of entrepreneurship in developing society, relating to technology?",
        options: ["Enhances the transfer of technology and stimulates growth", "Removes the need for technical skills", "Discourages the adoption of new technology", "Restricts technology to large firms only"],
        correctAnswer: "Enhances the transfer of technology and stimulates growth",
        explanation: "This is the second of four listed points on the importance of entrepreneurship in developing society."
      },
      {
        question: "Which of the following is listed among the importance of entrepreneurship in developing society, relating to resources?",
        options: ["Ensures optimum resource utilization and facilitate Productivity", "Eliminates the need for resource management", "Restricts resource access to the government", "Discourages productivity improvements"],
        correctAnswer: "Ensures optimum resource utilization and facilitate Productivity",
        explanation: "This is the third of four listed points on the importance of entrepreneurship in developing society."
      },
      {
        question: "Which of the following is listed among the necessities to support entrepreneurship, relating to accountability?",
        options: ["An emphasis on individual responsibility and accountability", "A guarantee of lifetime employment", "Complete elimination of managerial oversight", "Mandatory profit-sharing with competitors"],
        correctAnswer: "An emphasis on individual responsibility and accountability",
        explanation: "This is one of the four listed necessities to support entrepreneurship."
      },
      {
        question: "Which of the following is listed among the necessities to support entrepreneurship, relating to incentives for new ideas?",
        options: ["Rewards for creative effort", "Punishments for risk-taking", "Elimination of goal-setting", "Restriction of information sharing"],
        correctAnswer: "Rewards for creative effort",
        explanation: "This is one of the four listed necessities to support entrepreneurship."
      },
      {
        question: "Which of the following is listed among the necessities to support entrepreneurship, relating to entrepreneurial processes?",
        options: ["Explicit goals for entrepreneurial processes", "Vague and undefined targets", "Discouragement of process documentation", "Elimination of all entrepreneurial processes"],
        correctAnswer: "Explicit goals for entrepreneurial processes",
        explanation: "This is the first of the four listed necessities to support entrepreneurship."
      },
      {
        question: "Besides their own attitudes and the perceived outcome of success, the growth of an entrepreneur is also influenced by what, according to the chapter?",
        options: ["The opinion of other people, such as spouse, accountant, business partner or banker", "The size of their extended family", "Their astrological sign", "Their preferred sports team"],
        correctAnswer: "The opinion of other people, such as spouse, accountant, business partner or banker",
        explanation: "The chapter states growth is influenced by '(1) their own attitudes, (2) the opinion of other people (spouse, accountant, business partner or banker), and (3) the perceived outcome of success.'"
      },
      {
        question: "According to the chapter, entrepreneurs' attitudes are negatively influenced by work-family balance, additional stress, and what else?",
        options: ["Potential loss of control", "Excessive government support", "Too much customer loyalty", "Overly stable market conditions"],
        correctAnswer: "Potential loss of control",
        explanation: "The chapter states attitudes are negatively influenced by '(1) work-family balance, (2) additional stress, and (3) potential loss of control.'"
      },
      {
        question: "In Table 1.1, 'Unemployment' is listed as an element under which category?",
        options: ["Entrepreneur", "Firm", "Strategy", "Policy"],
        correctAnswer: "Entrepreneur",
        explanation: "Table 1.1 lists Unemployment under the 'Entrepreneur' column, alongside Motivation, Education, and Management experience."
      },
      {
        question: "In Table 1.1, 'Sector' is listed as an element under which category?",
        options: ["Firm", "Entrepreneur", "Strategy", "Policy"],
        correctAnswer: "Firm",
        explanation: "Table 1.1 lists Sector under the 'Firm' column, alongside Age, Legal form, Location, Size, and Ownership."
      },
      {
        question: "In Table 1.1, which of the following is NOT listed as an element under 'Entrepreneur'?",
        options: ["Ownership", "Motivation", "Age", "Training"],
        correctAnswer: "Ownership",
        explanation: "'Ownership' is listed under the 'Firm' column in Table 1.1, not under 'Entrepreneur.'"
      },
      {
        question: "Which of the following is classified as an External Barrier to entrepreneurial growth relating to the broader business environment?",
        options: ["Economic Climate", "Poor Product/Services", "Shortage of Orders", "Funding"],
        correctAnswer: "Economic Climate",
        explanation: "Economic Climate is listed as one of the six External Barriers in Figure 1.3."
      },
      {
        question: "Which of the following is classified as an Internal Barrier to entrepreneurial growth relating to a business's offerings?",
        options: ["Poor Product/Services", "Government policy", "Access to Markets", "Labour Market Conditions"],
        correctAnswer: "Poor Product/Services",
        explanation: "Poor Product/Services is listed as one of the six Internal Barriers in Figure 1.3."
      },
      {
        question: "Which of the following is NOT listed as an External Barrier to entrepreneurial growth in Figure 1.3?",
        options: ["Shortage of Orders", "Access to Markets", "Government policy", "Economic Climate"],
        correctAnswer: "Shortage of Orders",
        explanation: "'Shortage of Orders' is an Internal Barrier in Figure 1.3, not an External one."
      },
      {
        question: "According to Figure 1.4, which of the following is listed under Technical Skills?",
        options: ["Research and Development", "Decision-Making", "Motivating", "Persistence"],
        correctAnswer: "Research and Development",
        explanation: "Technical Skills in Figure 1.4 include Operations specific to Industry, Communications, Design, Research and Development, and Environmental Observation."
      },
      {
        question: "According to Figure 1.4, which of the following is listed under Management Skills?",
        options: ["Decision-Making", "Design", "Change-Orientated", "Ability to take risk"],
        correctAnswer: "Decision-Making",
        explanation: "Management Skills in Figure 1.4 include Planning, Decision-Making, Motivating, Marketing, Finance, and Selling."
      },
      {
        question: "Which of the following is NOT listed under Technical Skills in Figure 1.4?",
        options: ["Motivating", "Communications", "Design", "Environmental Observation"],
        correctAnswer: "Motivating",
        explanation: "'Motivating' belongs to Management Skills in Figure 1.4, not Technical Skills."
      },
      {
        question: "Among the twelve characteristics of the modern entrepreneurial education and training model, which one describes vision as central to the entrepreneur's identity?",
        options: ["Vision as a way of life of the entrepreneurial person", "Restricting vision to senior management only", "Eliminating long-term vision in favor of short-term profit", "Vision as an optional consideration"],
        correctAnswer: "Vision as a way of life of the entrepreneurial person",
        explanation: "This is listed among the key characteristics of the modern educational training model in the chapter."
      },
      {
        question: "Among the twelve characteristics of the modern entrepreneurial education and training model, which one focuses on the range of entrepreneurial behaviors practiced?",
        options: ["Stimulating the practice of a wide range of entrepreneurial behaviors", "Restricting practice to a single behavior type", "Discouraging behavioral experimentation", "Eliminating behavioral training entirely"],
        correctAnswer: "Stimulating the practice of a wide range of entrepreneurial behaviors",
        explanation: "This is listed among the key characteristics of the modern educational training model in the chapter."
      },
      {
        question: "Among the twelve characteristics of the modern entrepreneurial education and training model, which one relates to designing organizations that operate successfully?",
        options: ["Creating the capacity to design entrepreneurial organizations of all kinds in different contexts", "Limiting organizational design to one context only", "Avoiding organizational structure entirely", "Outsourcing all organizational design decisions"],
        correctAnswer: "Creating the capacity to design entrepreneurial organizations of all kinds in different contexts",
        explanation: "This is listed among the key characteristics of the modern educational training model in the chapter."
      },
      {
        question: "According to the chapter, Nigeria's economy has always been based on agriculture, with which of the following as one of the main products?",
        options: ["Palm oil", "Crude petroleum", "Textiles", "Automobiles"],
        correctAnswer: "Palm oil",
        explanation: "The chapter states, 'The main products were groundnuts, rubber, cocoa, and palm oil.'"
      },
      {
        question: "According to the chapter, the Hausas had clever businesspeople with highly developed abilities in tanning, dyeing, weaving, and what else?",
        options: ["Metallurgy", "Shipbuilding", "Pottery", "Glassmaking"],
        correctAnswer: "Metallurgy",
        explanation: "The chapter states, 'The Hausas had clever businesspeople with highly developed abilities in tanning, dyeing, weaving, and metallurgy.'"
      },
      {
        question: "The formulation of the 3Rs objectives — reconstruction, redevelopment, and reconciliation — was a key component of which national plan after the Nigerian civil war?",
        options: ["The 2nd National formulation Plan", "The 1st National Development Plan", "The Structural Adjustment Programme", "The Vision 2020 Plan"],
        correctAnswer: "The 2nd National formulation Plan",
        explanation: "The chapter states the 3Rs objectives were 'a key component of the 2nd National formulation Plan after the war.'"
      },
      {
        question: "Which of the following was NOT stated as one of the four main fields of expertise associated with managers'/entrepreneurs' capacity for achieving rapid growth?",
        options: ["Marketing exclusively to international customers", "Strategic and management knowledge", "Understanding the business operations and potential opportunities or threats", "Willingness to be innovative"],
        correctAnswer: "Marketing exclusively to international customers",
        explanation: "The four fields listed are strategic/management knowledge, understanding business operations/opportunities/threats, willingness to be innovative, and investing in management development — not marketing exclusively to international customers."
      },
      {
        question: "According to Figure 1.5, how many components make up the General Entrepreneurship Ecosystem?",
        options: ["Six", "Four", "Five", "Seven"],
        correctAnswer: "Six",
        explanation: "Figure 1.5 shows six components arranged around Entrepreneurship: Policy, Markets, Finance, Culture, Human Capital, and Supports."
      },
      {
        question: "Which of the following is NOT one of the six components of the General Entrepreneurship Ecosystem shown in Figure 1.5?",
        options: ["Innovation", "Policy", "Markets", "Culture"],
        correctAnswer: "Innovation",
        explanation: "Figure 1.5's six components are Policy, Markets, Finance, Culture, Human Capital, and Supports — 'Innovation' is not one of them."
      },
      {
        question: "Which of the following is identified as a challenge entrepreneurs face when launching businesses in Nigeria, relating to government processes?",
        options: ["Bureaucratic bottlenecks", "Excessive investor confidence", "Overly simple tax codes", "Too much access to credit"],
        correctAnswer: "Bureaucratic bottlenecks",
        explanation: "'Bureaucratic bottlenecks' is listed among the entrepreneur's problems when launching businesses in Nigeria."
      },
      {
        question: "According to the chapter, entrepreneurs in Nigeria face difficulty accessing what type of funding, in addition to facing excessive costs for short-term financing?",
        options: ["Long-term funding", "Foreign grants", "Cryptocurrency funding", "Peer-to-peer lending"],
        correctAnswer: "Long-term funding",
        explanation: "The chapter lists 'Difficult access to long-term funding' and 'Excessive costs for even short-term financing' as separate challenges."
      },
      {
        question: "Which of the following is listed as a policy supporting high growth of enterprises, relating to strategic direction?",
        options: ["Focus on innovation and strategic planning", "Focus exclusively on cost-cutting", "Focus on eliminating competition through mergers", "Focus on short-term profit maximization only"],
        correctAnswer: "Focus on innovation and strategic planning",
        explanation: "This is the first policy listed under 'Policy Framework for High Growth of Enterprise.'"
      },
      {
        question: "Which of the following is listed as a policy supporting high growth of enterprises, relating to business scope?",
        options: ["Focus on diversification", "Focus on single-product specialization only", "Focus on eliminating diversification", "Focus on restricting business scope"],
        correctAnswer: "Focus on diversification",
        explanation: "'Focus on diversification' is listed among the policies supporting high growth of enterprises."
      },
      {
        question: "Which of the following is listed as a policy supporting high growth of enterprises, relating to global business opportunities?",
        options: ["Improve internationalization opportunities", "Restrict businesses to domestic markets only", "Eliminate export incentives", "Discourage foreign partnerships"],
        correctAnswer: "Improve internationalization opportunities",
        explanation: "'Improve internationalization opportunities' is the last policy listed under the Policy Framework for High Growth of Enterprise."
      },
      {
        question: "According to the chapter, an entrepreneur's attitude and mindset are positively influenced by financial implications, contribution to the community, and what else?",
        options: ["Recognition of the community", "Level of formal education", "Access to foreign travel", "Number of competitors"],
        correctAnswer: "Recognition of the community",
        explanation: "The chapter states, 'the attitudes and mindset of the entrepreneur are influenced (1) financial implications, (2) contribution to the community and (3) recognition of the community.'"
      },
      {
        question: "Which factor for enterprise failure listed in the chapter relates directly to a business's cash position?",
        options: ["Inadequate liquidity", "Under-pricing", "Poor marketing activities", "Lack of initial focus and direction"],
        correctAnswer: "Inadequate liquidity",
        explanation: "'Inadequate liquidity' is the tenth and final factor listed for enterprise failure in the chapter."
      },
      {
        question: "Which of the following is identified as a challenge entrepreneurs face when launching businesses in Nigeria, relating to consumer behaviour?",
        options: ["Low and declining consumer purchasing power", "Excessive consumer brand loyalty", "Overly competitive pricing by entrepreneurs", "Too rapid consumer adoption of new products"],
        correctAnswer: "Low and declining consumer purchasing power",
        explanation: "'Low and declining consumer purchasing power' is listed among the entrepreneur's problems when launching businesses in Nigeria."
      }
    ],
  }
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
  
  
  

  
  
  
 
