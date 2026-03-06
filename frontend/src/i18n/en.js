const en = {
  nav: ["About", "Work", "Contact"],
  navTheme: [
    "Theme: Spring Default",
    "Theme: Darcula (IDE)",
    "Theme: Terminal Matrix",
  ],
  boot: [
    "Starting PortfolioApplication using Java 21...",
    'No active profile set, falling back to 1 default profile: "default"',
    "Tomcat initialized with port(s): 8080 (http)",
    "Found node_modules folder (1.2GB). Overlooking Next.js & Express affinities.",
    "Exposing 1 endpoint(s) beneath base path '/actuator'",
    "Started PortfolioApplication in 2.456 seconds",
    "APPLICATION CONTEXT INITIALIZED. MOUNTING UI...",
  ],
  actuator: {
    status: "Status",
    uptime: "Uptime",
    cpu: "CPU Usage",
    mem: "Memory",
    threads: "Threads",
    active: "Live",
  },
  hero: {
    context: "Context: ACTIVE",
    subtitle1: "Passionate about building clean, maintainable code,",
    subtitle2:
      "exploring microservices, and growing my skills in backend development.",
    btnWork: "EXECUTE WORK",
    btnContact: '@POSTMAPPING("/CONTACT")',
  },
  about: {
    title: "ABOUT_ME",
    p1: "Heyoo! My name is Arlon Labalan, I’m a 21-year-old Backend Developer based in Vienna, Austria. My main focus is on building secure, high-performance APIs and scalable enterprise systems.",
    p2: "In 2025, I graduated from HTL Rennweg with a degree in Information Technology, specializing in Media Technology – Web Development. During my studies, I gained practical industry experience through two internships at Porsche Informatik.",
    p3: "In the near future, I will start working full-time as a Backend Developer, where I will be responsible for developing and maintaining various microservices. At the same time, I will begin my Bachelor’s degree in September, continuing to deepen my knowledge in software engineering and backend development.",
    p4: "In my free time, I continue to expand my knowledge in software development. Recently, I have been working on the development of this web portfolio and the reengineering of my diploma thesis, focusing on improving its architecture, code quality, and performance.",
    ymlTitle: "developer",
    ymlEdu: "education",
    ymlDeg: "degree",
    ymlUni: "university",
    ymlYear: "graduated",
    ymlCert: "certifications",
    ymlLang: "locales",
    ymlHint: "A little Easter egg for you!",
    deps: "DEPENDENCY_TREE",
    depsJS: "Shh... I secretly love JavaScript too.",
    history: "EXECUTION_HISTORY",
    exp: [
      {
        company: "Haus Der Barmherzigen Schwestern",
        role: "Civil Servant",
        period: "July 2025 — Present",
        desc: "Served in patient support as part of my civil service, assisting patients throughout their hospital stay. Developed strong communication skills and a heightened sense of responsibility in patient care.",
      },
      {
        company: "Porsche Informatik GmbH",
        role: "Intern | Software Engineer",
        period: "July 2024 - August 2024",
        desc: "In my second internship at Porsche, I contributed to implementing new features and optimizing existing code. I was responsible for analyzing and fixing software bugs, maintaining H2 database queries, and performing regular software updates to ensure the software remained robust, secure, and high-performing.",
      },
      {
        company: "Porsche Informatik GmbH",
        role: "Intern | Software Engineer",
        period: "July 2023 - August 2023",
        desc: "During my first internship at Porsche, I worked on the dealership software Cross 3, developing features using Angular, Java Spring Boot, and PostgreSQL. My focus was on code optimizations, improvements in the data warehouse, and visualizing and analyzing performance data with Kibana to enhance system efficiency and reliability.",
      },
      {
        company: "HTL Rennweg, Vienna Austria",
        role: "Student",
        period: "2020 - 2025",
        desc: "I graduated from HTL Rennweg, a higher technical college in Austria, with a Matura in Information Technology, specializing in Media Technology – Web Development. During my education, I gained a strong foundation in software development, web technologies, and the planning and implementation of IT projects. This experience allowed me to develop practical skills in building modern web applications and further strengthen my interest in backend development and scalable software systems.",
      },
    ],
  },
  work: {
    title: "Deployed_Microservices",
    running: "Running on port 8080",
    execute: "Execute",
    response: "Server Response",
    registry: "VIEW REGISTRY",
    projects: [
      {
        title: "Personal Web Portfolio",
        desc: "A personal web portfolio built with React and Tailwind CSS, showcasing my skills, projects, and backend integrations. Features interactive UI elements, terminal-style interface, and a real-time Actuator-inspired dashboard.",
      },
      {
        title: "Diploma Thesis Project",
        desc: "Specialbond is a software project developed as part of my Diploma Thesis. It features a React Native frontend for mobile apps and a REST API originally built with Express and Prisma. The app is designed to strengthen communication between parents and educators in kindergartens. It has since been re-engineered and re-implemented using Spring Boot for improved scalability and maintainability.",
      },
    ],
  },
  contact: {
    p1: "My inbox is always open. Feel free to send a POST request or an email to discuss project ideas, collaborate, or just have a tech talk.",
    btn: "DISPATCH EVENT",
  },
  footer: "and maybe a little Node.js",
  terminal: {
    help: "Available commands: help, clear, whoami, ls, sudo",
    whoami: "guest_user",
    sudo: "user is not in the sudoers file. This incident will be reported.",
    notFound: "command not found",
  },
};

export default en;
