export const profile = {
  name: 'Paulo Mateo Salazar Espinoza',
  shortName: 'Paulo Mateo Salazar',
  role: { es: 'Desarrollador Full Stack · Desarrollo Seguro', en: 'Full Stack Developer · Secure Development' },
  location: 'Quito, Ecuador',
  avatar: 'https://avatars.githubusercontent.com/u/228358871?v=4',
  github: 'https://github.com/matezepam',
  website: 'https://curriculum-vitae-paulo-salazar.vercel.app',
  summary: 'Desarrollador Full Stack con experiencia en productos e-commerce, sistemas institucionales y soluciones digitales con impacto ambiental. Combino desarrollo web moderno, calidad de software y una visión práctica de producto.',
  availability: { es: 'Interesado en una oportunidad Full Stack de tiempo completo', en: 'Interested in a full-time Full Stack opportunity' },
  contact: [
    { label: 'Correo', value: 'p.m.salazar.espinoza@gmail.com', href: 'mailto:p.m.salazar.espinoza@gmail.com', icon: '@' },
    { label: 'Teléfono', value: '+593 97 971 0437', href: 'tel:+593979710437', icon: '✦' },
    { label: 'GitHub', value: 'github.com/matezepam', href: 'https://github.com/matezepam', icon: '↗' },
    { label: 'Web', value: 'curriculum-vitae-paulo-salazar.vercel.app', href: 'https://curriculum-vitae-paulo-salazar.vercel.app', icon: '◉' }
  ],
  hiringSignals: [
    { title: { es: 'Entrega end-to-end', en: 'End-to-end delivery' }, description: { es: 'Conecto frontend, backend, bases de datos, pruebas y despliegue para convertir una necesidad en un producto funcional.', en: 'I connect frontend, backend, databases, testing, and deployment to turn a need into a working product.' } },
    { title: { es: 'Cloud con criterio', en: 'Cloud with intent' }, description: { es: 'Experiencia práctica con AWS, Docker y despliegues que priorizan aislamiento, secretos y operación estable.', en: 'Practical experience with AWS, Docker, and deployments that prioritize isolation, secrets, and stable operations.' } },
    { title: { es: 'Colaboración comprobable', en: 'Proven collaboration' }, description: { es: 'He trabajado en contextos institucionales, productos comerciales y proyectos con objetivos de sostenibilidad.', en: 'I have worked in institutional contexts, commercial products, and sustainability-focused projects.' } }
  ],
  resumeFiles: [
    { format: 'PDF', fileName: 'CV-Paulo-Mateo-Salazar-Espinoza.pdf', href: 'documents/CV-Paulo-Mateo-Salazar-Espinoza.pdf', available: false },
    { format: 'Word', fileName: 'CV-Paulo-Mateo-Salazar-Espinoza.docx', href: 'documents/CV-Paulo-Mateo-Salazar-Espinoza.docx', available: false }
  ],
  experience: [
    {
      company: 'MINTEL', location: 'Quito, Ecuador', period: 'Septiembre 2025 — Presente',
      position: { es: 'Desarrollador de Software Junior', en: 'Junior Software Developer' },
      description: { es: 'Colaboro en el desarrollo y la optimización de sistemas institucionales, combinando implementación, control de calidad y gestión de entornos.', en: 'I contribute to the development and optimization of institutional systems, combining implementation, quality assurance, and environment management.' },
      highlights: [
        { es: 'Incorporación de nuevas funcionalidades y realización de pruebas para asegurar rendimiento, estabilidad y despliegues eficientes a producción.', en: 'Implemented new features and performed testing to ensure performance, stability, and efficient production deployments.' },
        { es: 'Control de calidad y gestión de código mediante repositorios, en colaboración con equipos institucionales.', en: 'Performed quality assurance and repository-based code management in collaboration with institutional teams.' }
      ]
    },
    {
      company: 'EAGLE', location: 'Quito, Ecuador', period: 'Febrero 2026 — Presente',
      position: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
      description: { es: 'Desarrollo integral de una plataforma e-commerce, desde la experiencia de usuario hasta la lógica de negocio y la operación del sistema.', en: 'End-to-end development of an e-commerce platform, from user experience to business logic and system operations.' },
      highlights: [
        { es: 'Implementación de frontend y backend, integración de métodos de pago, seguridad y gestión integral de la plataforma.', en: 'Implemented frontend and backend, payment-method integration, security, and end-to-end platform management.' },
        { es: 'Uso de herramientas modernas para optimizar el desarrollo, el rendimiento y la calidad del sistema.', en: 'Applied modern tools to optimize development processes, system performance, and quality.' }
      ]
    },
    {
      company: 'GUARDIAN', location: 'Quito, Ecuador', period: 'Diciembre 2025 — Febrero 2026',
      position: { es: 'Desarrollador Full Stack', en: 'Full Stack Developer' },
      description: { es: 'Desarrollé una aplicación para monitorear el consumo de agua, energía y reciclaje, enfocada en gestión eficiente y sostenibilidad.', en: 'Developed an application to monitor water, energy, and recycling consumption, focused on efficient management and sustainability.' },
      highlights: [
        { es: 'Implementación de registro de datos, reportes y visualización de indicadores mediante gráficas.', en: 'Implemented data capture, reporting, and indicator visualization through charts.' },
        { es: 'Diseño de módulos informativos para promover la concienciación ambiental y prácticas sostenibles.', en: 'Designed informational modules that promote environmental awareness and sustainable practices.' }
      ]
    },
    {
      company: 'VISIONATE', location: 'Sangolquí, Ecuador', period: 'Abril 2025 — Mayo 2025',
      position: { es: 'Desarrollador Web Freelance', en: 'Freelance Web Developer' },
      description: { es: 'Desarrollé una página web informativa adaptada a los requerimientos del cliente, desde la planificación hasta la estimación de costos.', en: 'Developed an informational website tailored to client requirements, from project planning through cost estimation.' },
      highlights: [
        { es: 'Estructuración de contenido y diseño de interfaz con foco en accesibilidad y experiencia de usuario.', en: 'Structured content and designed the interface with a focus on accessibility and user experience.' }
      ]
    }
  ],
  skills: [
    { group: 'Lenguajes', items: ['JavaScript', 'TypeScript', 'Python'] },
    { group: 'Frameworks y librerías', items: ['React', 'Django', 'Node.js', 'Express', 'Angular'] },
    { group: 'UI', items: ['Tailwind CSS', 'Bootstrap', 'Bulma'] },
    { group: 'Bases de datos', items: ['PostgreSQL', 'SQL Server', 'MySQL', 'MongoDB', 'MariaDB', 'Oracle'] },
    { group: 'Cloud y DevOps', items: ['AWS', 'EC2', 'S3', 'RDS', 'Cognito', 'CloudFront', 'API Gateway', 'Docker', 'CloudFormation', 'Vercel'] },
    { group: 'Ingeniería y seguridad', items: ['Git', 'GitHub', 'GitLab', 'Scrum', 'APIs REST', 'JWT', 'Testing', '.NET', 'Mattermost'] }
  ],
  securityFocus: {
    title: { es: 'Desarrollo seguro, desde el diseño', en: 'Secure development, by design' },
    description: {
      es: 'Mi objetivo es construir software funcional y resistente: incorporo controles de autenticación, pruebas y buenas prácticas de ingeniería desde el ciclo de desarrollo.',
      en: 'My goal is to build software that is both functional and resilient: I incorporate authentication controls, testing, and solid engineering practices throughout the development lifecycle.'
    },
    practices: [
      { es: 'Autenticación y protección de rutas con JWT', en: 'JWT-based authentication and route protection' },
      { es: 'Diseño y consumo responsable de APIs REST', en: 'Responsible REST API design and consumption' },
      { es: 'Testing, control de versiones y revisión de cambios', en: 'Testing, version control, and change review' },
      { es: 'Infraestructura AWS con IAM, Secrets Manager, Systems Manager y grupos de seguridad', en: 'AWS infrastructure using IAM, Secrets Manager, Systems Manager, and security groups' },
      { es: 'Ruta de aprendizaje: OWASP Top 10, NIST SSDF y DevSecOps', en: 'Learning path: OWASP Top 10, NIST SSDF, and DevSecOps' }
    ]
  },
  softSkills: [
    { es: 'Resolución de problemas', en: 'Problem solving' },
    { es: 'Pensamiento analítico', en: 'Analytical thinking' },
    { es: 'Trabajo en equipo', en: 'Teamwork' },
    { es: 'Adaptabilidad y aprendizaje continuo', en: 'Adaptability and continuous learning' }
  ],
  learning: ['C#', 'PHP', 'Spec-Driven Development', 'SDD', 'Azure'],
  languages: [
    { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Lengua nativa', en: 'Native proficiency' } },
    { name: { es: 'Inglés', en: 'English' }, level: 'B2 · Cambridge Certificate Advanced English' },
    { name: { es: 'Portugués', en: 'Portuguese' }, level: { es: 'Básico', en: 'Basic' } }
  ],
  projects: [
    { title: 'Sprint Clothes', image: 'images/sprint-clothes.svg', description: { es: 'E-commerce full stack con React, Kotlin y PostgreSQL; autenticación Cognito, despliegue en AWS y frontend publicado en Vercel.', en: 'Full-stack e-commerce with React, Kotlin, and PostgreSQL; Cognito authentication, AWS deployment, and a Vercel-hosted frontend.' }, stack: ['React', 'Kotlin', 'AWS', 'Cognito', 'PostgreSQL'], repository: 'https://github.com/matezepam/app-shopping-clothes', demo: 'https://app-shopping-clothes.vercel.app' },
    { title: 'Academic Reminder', image: 'images/academic-reminder.svg', description: { es: 'Plataforma de recordatorios académicos con microservicios y una arquitectura AWS con CloudFront, EC2, RDS, S3, API Gateway y Cognito.', en: 'Academic reminder platform with microservices and an AWS architecture using CloudFront, EC2, RDS, S3, API Gateway, and Cognito.' }, stack: ['AWS', 'Docker', 'RDS', 'S3', 'API Gateway'], repository: 'https://github.com/matezepam/app-daily-reminders' },
    { title: 'Guardian', image: 'images/guardian.svg', description: { es: 'Aplicación para registrar, visualizar y analizar consumo de agua, energía y reciclaje, orientada a decisiones sostenibles.', en: 'Application for recording, visualizing, and analyzing water, energy, and recycling consumption to support sustainable decisions.' }, stack: ['JavaScript', 'Charts', 'APIs REST'], repository: 'https://github.com/matezepam/app-guardian' },
    { title: 'Gym Management System', image: 'images/gym-management.svg', description: { es: 'Sistema de gestión de gimnasio incluido en el portafolio público, con foco en flujos operativos y organización de información.', en: 'Gym management system in the public portfolio, focused on operational workflows and information organization.' }, stack: ['HTML', 'CSS', 'JavaScript'], repository: 'https://github.com/matezepam/gym-management-system' }
  ],
  education: [
    { title: { es: 'Desarrollo de Software', en: 'Software Development' }, institution: { es: 'Pontificia Universidad Católica del Ecuador (PUCE) · Quito, Ecuador · Octubre 2024 — Presente', en: 'Pontifical Catholic University of Ecuador (PUCE) · Quito, Ecuador · October 2024 — Present' } },
    { title: { es: 'Máster en Ingeniería de Software en la Era de la Inteligencia Artificial', en: 'Master’s in Software Engineering in the Age of Artificial Intelligence' }, institution: { es: 'CodeCrypto Academy · Madrid, España · Marzo 2026 — Presente', en: 'CodeCrypto Academy · Madrid, Spain · March 2026 — Present' } }
  ],
  certifications: [
    { title: { es: 'Certificados en proceso de incorporación', en: 'Certificates pending addition' }, issuer: { es: 'Los añadiré aquí cuando compartas los archivos o sus datos de emisión.', en: 'They will be added here when you share the files or issuing details.' } }
  ]
}
