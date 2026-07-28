export type Locale = 'en' | 'pt-BR';

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  category: string;
  body: string[];
  featured?: boolean;
};

export type Work = {
  slug: string;
  company: string;
  title: string;
  dateRange: string;
  location: string;
  summary: string;
  bullets?: string[];
  stack: string[];
};

type SiteContent = {
  profile: {
    name: string;
    shortName: string;
    initials: string;
    headline: string;
    location: string;
    availability: string;
    summary: string;
    about: string[];
    links: { label: string; href: string }[];
    email: string;
  };
  skillGroups: { group: string; items: string[] }[];
  projects: Project[];
  works: Work[];
  education: {
    institution: string;
    course: string;
    period: string;
    description: string;
  }[];
  contributions: {
    title: string;
    description: string;
    tags: string[];
  }[];
  articles: {
    slug: string;
    date: string;
    readingTime: string;
    title: string;
    description: string;
  }[];
  ui: {
    nav: {
      home: string;
      about: string;
      projects: string;
      openSource: string;
      works: string;
      articles: string;
      contact: string;
      resume: string;
    };
    labels: {
      mainNavigation: string;
      externalLinks: string;
      available: string;
      currentFocus: string;
      studying: string;
      sideQuest: string;
      status: string;
      featuredProjects: string;
      viewProjects: string;
      openSourceLabs: string;
      viewContributions: string;
      experience: string;
      viewExperience: string;
      articlesNotes: string;
      viewArticles: string;
      viewProject: string;
      viewWork: string;
      comingSoon: string;
      skills: string;
      education: string;
      trajectory: string;
      backProjects: string;
      backWorks: string;
      publicLab: string;
      downloadResume: string;
      language: string;
      sendEmail: string;
    };
    banner: {
      eyebrow: string;
      title: string;
      description: string;
    };
    home: {
      locationPrefix: string;
      findMe: string;
      or: string;
    };
    pages: {
      about: { title: string; description: string };
      projects: { title: string; description: string };
      openSource: { title: string; description: string };
      works: { title: string; description: string };
      articles: { title: string; description: string };
      contact: {
        title: string;
        description: string;
        formTitle: string;
        name: string;
        namePlaceholder: string;
        email: string;
        emailPlaceholder: string;
        message: string;
        messagePlaceholder: string;
        submit: string;
        opened: string;
        alternatives: string;
        emailDescription: string;
        linkedinDescription: string;
        locationDescription: string;
      };
    };
    footer: string;
    notFound: string;
    backHome: string;
  };
};

const sharedLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/brunodcfelipe/' },
  { label: 'GitHub', href: 'https://github.com/brunodcfelipe' },
  { label: 'E-mail', href: 'mailto:contato@brunofelipe.dev' }
];

const sharedStacks = {
  backend: ['.NET', 'ASP.NET Core', 'C#', 'PHP', 'Laravel', 'CodeIgniter', 'Node.js', 'Python'],
  frontend: ['React.js', 'Vue.js', 'Blazor', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  mobile: ['Flutter', '.NET MAUI', 'Android'],
  data: ['PostgreSQL', 'MySQL', 'SQL Server', 'PL/SQL', 'Conversão de dados', 'Backup & Restore'],
  infra: ['AWS', 'DigitalOcean', 'Cloudflare', 'Microsoft Azure', 'Docker', 'TeamCity', 'GitHub Actions', 'GitLab CI/CD'],
  security: ['Cybersecurity', 'Pentest Web', 'Kali Linux', 'Metasploit', 'OWASP', 'Sentry', 'Observability']
};

export const siteContent: Record<Locale, SiteContent> = {
  'pt-BR': {
    profile: {
      name: 'Bruno Da Cunha Felipe',
      shortName: 'Bruno Felipe',
      initials: 'BF',
      headline: 'Desenvolvedor .NET e PHP, entusiasta de Cybersecurity.',
      location: 'Bauru, São Paulo, Brasil (UTC-3)',
      availability: 'Aberto a projetos e oportunidades remotas',
      summary:
        'Desenvolvedor de software com experiência em aplicações web, APIs, sistemas legados, bancos de dados e infraestrutura. Construo soluções com .NET, C#, PHP e Laravel, mantendo segurança como parte da qualidade - e exploro game development como hobby.',
      about: [
        'Minha trajetória começou no suporte técnico e na administração de bancos de dados. Essa base me ensinou a olhar além do código: entender operação, usuários, dados e o impacto real de cada decisão.',
        'Hoje atuo no desenvolvimento de aplicações web, APIs RESTful, integrações e modernização de sistemas. Trabalho principalmente com .NET, ASP.NET Core, C#, PHP, Laravel e bancos relacionais.',
        'Cybersecurity é uma área de estudo contínuo, especialmente segurança de aplicações e pentest web. Fora do trabalho, game development é meu laboratório criativo para experimentar mecânicas, interfaces e novas tecnologias.'
      ],
      links: sharedLinks,
      email: 'contato@brunofelipe.dev'
    },
    skillGroups: [
      { group: 'Backend & Web', items: sharedStacks.backend },
      { group: 'Frontend & Mobile', items: [...sharedStacks.frontend, ...sharedStacks.mobile] },
      { group: 'Dados', items: sharedStacks.data },
      { group: 'Cloud, DevOps & Segurança', items: [...sharedStacks.infra, ...sharedStacks.security] }
    ],
    projects: [
      {
        slug: 'brunofelipe-dev',
        title: 'brunofelipe.dev',
        category: 'Portfólio & plataforma de conteúdo',
        description:
          'Portfólio estático bilíngue para apresentar trajetória, projetos, artigos e estudos de segurança com deploy na edge.',
        stack: ['React', 'TypeScript', 'Vite', 'Cloudflare'],
        body: [
          'Este próprio site é um projeto em evolução: uma base rápida e acessível para transformar experiência profissional em cases e conteúdo técnico.',
          'A solução combina conteúdo localizado, rotas amigáveis, SEO, cabeçalhos de segurança, automação de build e infraestrutura como código.'
        ],
        featured: true
      },
      {
        slug: 'aplicacoes-web-apis',
        title: 'Aplicações Web & APIs',
        category: 'Soluções corporativas',
        description:
          'Desenvolvimento de aplicações, APIs e integrações escaláveis alinhadas às necessidades de negócio.',
        stack: ['.NET', 'Laravel', 'REST', 'SQL'],
        body: [
          'Atuação desde a modelagem de dados e arquitetura até a entrega, monitoramento e manutenção de aplicações web.',
          'Experiência com integrações, serviços em nuvem e APIs RESTful usando o ecossistema .NET e PHP.'
        ],
        featured: true
      },
      {
        slug: 'modernizacao-legado',
        title: 'Modernização de Legado',
        category: 'Evolução de produto',
        description:
          'Migração incremental, correção de bugs e entrega de novas funcionalidades sem interromper a operação.',
        stack: ['Laravel', 'React', 'Docker', 'PostgreSQL'],
        body: [
          'Projetos de modernização exigem equilíbrio entre evolução técnica, continuidade do negócio e segurança dos dados.',
          'O trabalho inclui leitura do domínio, redução de risco, migração progressiva e documentação das decisões.'
        ],
        featured: true
      },
      {
        slug: 'game-dev-lab',
        title: 'Game Dev Lab',
        category: 'Side quest / hobby',
        description:
          'Experimentos com lógica de jogos, interfaces, protótipos e narrativa interativa como laboratório criativo.',
        stack: ['C#', 'Godot', 'Prototyping', 'Game Design'],
        body: [
          'Game development é um hobby que exercita raciocínio sistêmico, feedback visual e construção de experiências.',
          'O laboratório reúne protótipos pequenos e estudos que serão publicados gradualmente.'
        ]
      }
    ],
    works: [
      {
        slug: 'sos-desenvolvedor',
        company: 'SOS Soluções em TI',
        title: 'Desenvolvedor de Software',
        dateRange: 'jun 2019 - atual',
        location: 'Bauru, SP',
        summary: 'Desenvolvimento e evolução de software, integrações e soluções orientadas às necessidades da operação.',
        stack: ['.NET', 'C#', 'SQL', 'Software corporativo']
      },
      {
        slug: 'rasc-full-stack',
        company: 'RASC - Rede de Assistência Social Cristã',
        title: 'Desenvolvedor Full Stack - Temporário',
        dateRange: 'jul 2025 - atual',
        location: 'Remoto',
        summary:
          'Aplicações web, APIs e soluções escaláveis com Laravel e .NET, incluindo arquitetura, integrações e serviços em nuvem.',
        bullets: ['APIs RESTful', 'AWS e Microsoft Azure', 'Deploy, monitoramento e automação'],
        stack: ['Laravel', '.NET', 'AWS', 'Azure']
      },
      {
        slug: 'mega-bilheteria',
        company: 'Mega Bilheteria',
        title: 'Desenvolvedor Full Stack - Terceirizado',
        dateRange: 'out 2025 - atual',
        location: 'Remoto',
        summary: 'Desenvolvimento de funcionalidades, correções de bugs e migração de sistema legado.',
        stack: ['Laravel', 'React', 'Docker', 'PostgreSQL']
      },
      {
        slug: 'home-office',
        company: 'Projetos sob demanda',
        title: 'Desenvolvedor Full Stack',
        dateRange: 'jun 2017 - atual',
        location: 'Bauru, SP - Remoto',
        summary: 'Desenvolvimento de aplicações e sistemas sob demanda para web, desktop e mobile.',
        stack: ['Flutter', 'Laravel', 'CodeIgniter', 'C#', 'ASP.NET Core', 'Blazor']
      },
      {
        slug: 'sos-suporte',
        company: 'SOS Soluções em TI',
        title: 'Analista de Suporte',
        dateRange: 'set 2015 - jun 2019',
        location: 'Bauru e região',
        summary:
          'Conversão de bancos de dados, implantação, treinamentos, configuração de servidores e desenvolvimento de PL/SQL.',
        bullets: ['Administração da wiki interna', 'Monitoramento de sincronização de dados', 'Software Android para mesas e comandas'],
        stack: ['PL/SQL', 'PostgreSQL', 'Android', 'Implantação']
      },
      {
        slug: 'ostecnologic',
        company: 'Ostecnologic Soluções em Informática',
        title: 'Analista de Suporte',
        dateRange: 'ago 2011 - ago 2015',
        location: 'Bauru, SP',
        summary:
          'Suporte a clientes, manutenção, consultas SQL, servidores PostgreSQL, recuperação de dados e testes de software.',
        bullets: ['Backup e restore de bases', 'Windows Server e GNU/Linux CentOS', 'Configuração de RDP e automação comercial'],
        stack: ['PostgreSQL', 'SQL', 'Linux', 'Windows Server']
      }
    ],
    education: [
      {
        institution: 'UNESP - Universidade Estadual Paulista',
        course: 'Aluno Especial - Mestrado em Mídia e Tecnologia',
        period: '2017',
        description: 'Cognição, sistemas inteligentes, reconhecimento de padrões, IA e redes neurais.'
      },
      {
        institution: 'Universidade do Sagrado Coração',
        course: 'Desenvolvimento de Software para Web',
        period: '2016 - 2017',
        description: 'Especialização em tecnologia da informação e desenvolvimento de aplicações web.'
      },
      {
        institution: 'FATEC Bauru',
        course: 'Tecnologia em Banco de Dados',
        period: '2013 - 2015',
        description: 'Vice-presidente da Empresa Júnior e iniciação científica em RFID.'
      },
      {
        institution: 'Senac Bauru',
        course: 'Técnico em Informática',
        period: '2011 - 2012',
        description: 'Formação técnica e liderança de classe durante os quatro semestres.'
      }
    ],
    contributions: [
      {
        title: 'brunofelipe.dev',
        description: 'Código e infraestrutura deste portfólio, criado para ser simples de manter e fácil de evoluir.',
        tags: ['React', 'Cloudflare', 'Terraform']
      },
      {
        title: 'Security Notes',
        description: 'Espaço em preparação para checklists, anotações de laboratório e write-ups de segurança web.',
        tags: ['OWASP', 'Pentest', 'Learning in public']
      },
      {
        title: 'Game Dev Experiments',
        description: 'Pequenos protótipos e ferramentas criadas durante estudos de desenvolvimento de jogos.',
        tags: ['C#', 'Godot', 'Game Design']
      }
    ],
    articles: [
      {
        slug: 'seguranca-aplicacoes-legadas',
        date: 'Em preparação',
        readingTime: '8 min',
        title: 'Segurança em aplicações legadas sem parar o produto',
        description: 'Como priorizar riscos e melhorar controles enquanto o sistema continua atendendo o negócio.'
      },
      {
        slug: 'apis-dotnet-laravel',
        date: 'Em preparação',
        readingTime: '7 min',
        title: '.NET e Laravel: decisões além do framework',
        description: 'Um olhar prático sobre contexto, integração, manutenção e escolha de stack para APIs.'
      },
      {
        slug: 'suporte-formacao-desenvolvedor',
        date: 'Em preparação',
        readingTime: '6 min',
        title: 'O que o suporte ensina a um desenvolvedor',
        description: 'Produção, dados e usuários como escola para escrever software mais confiável.'
      }
    ],
    ui: {
      nav: {
        home: 'Início',
        about: 'Sobre mim',
        projects: 'Projetos',
        openSource: 'Open Source',
        works: 'Trabalhos',
        articles: 'Artigos',
        contact: 'Contato',
        resume: 'Currículo'
      },
      labels: {
        mainNavigation: 'Navegação principal',
        externalLinks: 'Links externos',
        available: 'Disponível',
        currentFocus: 'FOCO ATUAL',
        studying: 'ESTUDANDO',
        sideQuest: 'SIDE QUEST',
        status: 'STATUS',
        featuredProjects: 'Projetos em destaque',
        viewProjects: 'Ver todos os projetos',
        openSourceLabs: 'Open Source & Labs',
        viewContributions: 'Ver contribuições',
        experience: 'Experiência',
        viewExperience: 'Ver trajetória completa',
        articlesNotes: 'Artigos & notas',
        viewArticles: 'Ver todos os artigos',
        viewProject: 'Ver projeto',
        viewWork: 'Ver experiência',
        comingSoon: 'Publicação em breve',
        skills: 'Competências',
        education: 'Formação acadêmica',
        trajectory: 'Trajetória profissional',
        backProjects: 'Voltar para projetos',
        backWorks: 'Voltar para experiência',
        publicLab: 'PUBLIC / LAB',
        downloadResume: 'Baixar currículo',
        language: 'Selecionar idioma',
        sendEmail: 'Preparar e-mail'
      },
      banner: {
        eyebrow: 'SOFTWARE DEVELOPER',
        title: 'CONSTRUIR. PROTEGER. ENTREGAR.',
        description: 'Software escalável, arquitetura pragmática e segurança aplicada desde o código.'
      },
      home: {
        locationPrefix: 'Trabalhando a partir de',
        findMe: 'Encontre-me no',
        or: 'ou no'
      },
      pages: {
        about: {
          title: 'Sobre mim',
          description: 'Da operação ao desenvolvimento: uma trajetória construída resolvendo problemas reais com software, dados e infraestrutura.'
        },
        projects: {
          title: 'Projetos',
          description: 'Soluções que combinam desenvolvimento web, APIs, dados, modernização e experimentação.'
        },
        openSource: {
          title: 'Open Source',
          description: 'Projetos, laboratórios e anotações publicados para documentar aprendizados e contribuir com a comunidade.'
        },
        works: {
          title: 'Experiência Profissional',
          description: 'Mais de uma década entre suporte, bancos de dados, implantação e desenvolvimento de software.'
        },
        articles: {
          title: 'Artigos',
          description: 'Notas sobre .NET, PHP, dados, segurança de aplicações e aprendizados de quem conhece o software também pela operação.'
        },
        contact: {
          title: 'Contato',
          description: 'Tem um projeto, uma integração, um sistema legado ou uma conversa sobre segurança? Envie o contexto inicial.',
          formTitle: 'Vamos conversar',
          name: 'Nome',
          namePlaceholder: 'Seu nome',
          email: 'E-mail',
          emailPlaceholder: 'voce@empresa.com',
          message: 'Mensagem',
          messagePlaceholder: 'Conte um pouco sobre o desafio.',
          submit: 'Preparar e-mail',
          opened: 'Seu aplicativo de e-mail será aberto para concluir o envio.',
          alternatives: 'Outros canais',
          emailDescription: 'Envie uma mensagem direta e responderei assim que possível.',
          linkedinDescription: 'Perfil profissional, histórico e conexão.',
          locationDescription: 'Disponível para colaboração remota.'
        }
      },
      footer: 'Construído com Vite, React, TypeScript, Cloudflare, automação e curiosidade.',
      notFound: 'Página não encontrada.',
      backHome: 'Voltar ao início'
    }
  },
  en: {
    profile: {
      name: 'Bruno Da Cunha Felipe',
      shortName: 'Bruno Felipe',
      initials: 'BF',
      headline: '.NET and PHP Developer, Cybersecurity enthusiast.',
      location: 'Bauru, São Paulo, Brazil (UTC-3)',
      availability: 'Open to remote projects and opportunities',
      summary:
        'Software developer experienced in web applications, APIs, legacy systems, databases, and infrastructure. I build solutions with .NET, C#, PHP, and Laravel, treat security as part of quality, and explore game development as a hobby.',
      about: [
        'My career began in technical support and database administration. That foundation taught me to look beyond code and understand operations, users, data, and the real impact of each decision.',
        'Today I develop web applications, RESTful APIs, integrations, and legacy modernization initiatives, mainly with .NET, ASP.NET Core, C#, PHP, Laravel, and relational databases.',
        'Cybersecurity is an ongoing field of study, especially application security and web pentesting. Outside work, game development is my creative lab for experimenting with mechanics, interfaces, and new technologies.'
      ],
      links: sharedLinks,
      email: 'contato@brunofelipe.dev'
    },
    skillGroups: [
      { group: 'Backend & Web', items: sharedStacks.backend },
      { group: 'Frontend & Mobile', items: [...sharedStacks.frontend, ...sharedStacks.mobile] },
      { group: 'Data', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'PL/SQL', 'Data conversion', 'Backup & Restore'] },
      { group: 'Cloud, DevOps & Security', items: [...sharedStacks.infra, ...sharedStacks.security] }
    ],
    projects: [
      {
        slug: 'brunofelipe-dev',
        title: 'brunofelipe.dev',
        category: 'Portfolio & content platform',
        description:
          'A bilingual static portfolio for career highlights, projects, articles, and security studies, delivered at the edge.',
        stack: ['React', 'TypeScript', 'Vite', 'Cloudflare'],
        body: [
          'This website is an evolving project: a fast and accessible foundation that turns professional experience into cases and technical content.',
          'The solution combines localized content, friendly routes, SEO, security headers, build automation, and infrastructure as code.'
        ],
        featured: true
      },
      {
        slug: 'aplicacoes-web-apis',
        title: 'Web Applications & APIs',
        category: 'Business solutions',
        description: 'Scalable applications, APIs, and integrations aligned with actual business needs.',
        stack: ['.NET', 'Laravel', 'REST', 'SQL'],
        body: [
          'Work spanning data modeling and architecture through delivery, monitoring, and maintenance of web applications.',
          'Experience with integrations, cloud services, and RESTful APIs across the .NET and PHP ecosystems.'
        ],
        featured: true
      },
      {
        slug: 'modernizacao-legado',
        title: 'Legacy Modernization',
        category: 'Product evolution',
        description: 'Incremental migration, bug fixes, and new capabilities delivered without interrupting operations.',
        stack: ['Laravel', 'React', 'Docker', 'PostgreSQL'],
        body: [
          'Modernization projects require a balance between technical evolution, business continuity, and data security.',
          'The work includes domain discovery, risk reduction, progressive migration, and clear decision records.'
        ],
        featured: true
      },
      {
        slug: 'game-dev-lab',
        title: 'Game Dev Lab',
        category: 'Side quest / hobby',
        description: 'Experiments with game logic, interfaces, prototypes, and interactive storytelling.',
        stack: ['C#', 'Godot', 'Prototyping', 'Game Design'],
        body: [
          'Game development is a hobby that exercises systems thinking, visual feedback, and experience design.',
          'The lab brings together small prototypes and studies that will be released gradually.'
        ]
      }
    ],
    works: [
      {
        slug: 'sos-desenvolvedor',
        company: 'SOS Soluções em TI',
        title: 'Software Developer',
        dateRange: 'Jun 2019 - Present',
        location: 'Bauru, Brazil',
        summary: 'Software development and evolution, integrations, and solutions driven by operational needs.',
        stack: ['.NET', 'C#', 'SQL', 'Business software']
      },
      {
        slug: 'rasc-full-stack',
        company: 'RASC - Christian Social Assistance Network',
        title: 'Full Stack Developer - Temporary',
        dateRange: 'Jul 2025 - Present',
        location: 'Remote',
        summary: 'Web applications, APIs, and scalable Laravel and .NET solutions, including architecture, integrations, and cloud services.',
        bullets: ['RESTful APIs', 'AWS and Microsoft Azure', 'Deployment, monitoring, and automation'],
        stack: ['Laravel', '.NET', 'AWS', 'Azure']
      },
      {
        slug: 'mega-bilheteria',
        company: 'Mega Bilheteria',
        title: 'Full Stack Developer - Contractor',
        dateRange: 'Oct 2025 - Present',
        location: 'Remote',
        summary: 'Feature development, bug fixes, and legacy system migration.',
        stack: ['Laravel', 'React', 'Docker', 'PostgreSQL']
      },
      {
        slug: 'home-office',
        company: 'Independent projects',
        title: 'Full Stack Developer',
        dateRange: 'Jun 2017 - Present',
        location: 'Bauru, Brazil - Remote',
        summary: 'On-demand web, desktop, and mobile application development.',
        stack: ['Flutter', 'Laravel', 'CodeIgniter', 'C#', 'ASP.NET Core', 'Blazor']
      },
      {
        slug: 'sos-suporte',
        company: 'SOS Soluções em TI',
        title: 'Support Analyst',
        dateRange: 'Sep 2015 - Jun 2019',
        location: 'Bauru region, Brazil',
        summary: 'Database conversion, software implementation, training, server configuration, and PL/SQL development.',
        bullets: ['Internal wiki administration', 'Database synchronization monitoring', 'Android table and order management software'],
        stack: ['PL/SQL', 'PostgreSQL', 'Android', 'Implementation']
      },
      {
        slug: 'ostecnologic',
        company: 'Ostecnologic Soluções em Informática',
        title: 'Support Analyst',
        dateRange: 'Aug 2011 - Aug 2015',
        location: 'Bauru, Brazil',
        summary: 'Customer support, maintenance, SQL queries, PostgreSQL servers, data recovery, and software testing.',
        bullets: ['Database backup and restore', 'Windows Server and GNU/Linux CentOS', 'RDP and retail automation configuration'],
        stack: ['PostgreSQL', 'SQL', 'Linux', 'Windows Server']
      }
    ],
    education: [
      {
        institution: 'UNESP - São Paulo State University',
        course: 'Special Master Student - Media and Technology',
        period: '2017',
        description: 'Cognition, intelligent systems, pattern recognition, AI, and neural networks.'
      },
      {
        institution: 'Universidade do Sagrado Coração',
        course: 'Web Software Development',
        period: '2016 - 2017',
        description: 'Graduate specialization in information technology and web application development.'
      },
      {
        institution: 'FATEC Bauru',
        course: 'Database Technology',
        period: '2013 - 2015',
        description: 'Vice president of the junior company and undergraduate research in RFID.'
      },
      {
        institution: 'Senac Bauru',
        course: 'Computer Technology',
        period: '2011 - 2012',
        description: 'Technical education and class leadership throughout all four semesters.'
      }
    ],
    contributions: [
      {
        title: 'brunofelipe.dev',
        description: 'The code and infrastructure behind this portfolio, designed to be easy to maintain and evolve.',
        tags: ['React', 'Cloudflare', 'Terraform']
      },
      {
        title: 'Security Notes',
        description: 'A growing space for checklists, lab notes, and web security write-ups.',
        tags: ['OWASP', 'Pentest', 'Learning in public']
      },
      {
        title: 'Game Dev Experiments',
        description: 'Small prototypes and tools created while studying game development.',
        tags: ['C#', 'Godot', 'Game Design']
      }
    ],
    articles: [
      {
        slug: 'seguranca-aplicacoes-legadas',
        date: 'In progress',
        readingTime: '8 min',
        title: 'Securing legacy applications without stopping the product',
        description: 'How to prioritize risk and improve controls while the system keeps serving the business.'
      },
      {
        slug: 'apis-dotnet-laravel',
        date: 'In progress',
        readingTime: '7 min',
        title: '.NET and Laravel: decisions beyond the framework',
        description: 'A practical look at context, integration, maintenance, and stack selection for APIs.'
      },
      {
        slug: 'suporte-formacao-desenvolvedor',
        date: 'In progress',
        readingTime: '6 min',
        title: 'What technical support teaches a developer',
        description: 'Production, data, and users as a foundation for building more reliable software.'
      }
    ],
    ui: {
      nav: {
        home: 'Home',
        about: 'About me',
        projects: 'Projects',
        openSource: 'Open Source',
        works: 'Works',
        articles: 'Articles',
        contact: 'Contact',
        resume: 'Resume'
      },
      labels: {
        mainNavigation: 'Primary navigation',
        externalLinks: 'External links',
        available: 'Available',
        currentFocus: 'CURRENT FOCUS',
        studying: 'LEARNING',
        sideQuest: 'SIDE QUEST',
        status: 'STATUS',
        featuredProjects: 'Featured Projects',
        viewProjects: 'View all projects',
        openSourceLabs: 'Open Source & Labs',
        viewContributions: 'View contributions',
        experience: 'Experience',
        viewExperience: 'View full career',
        articlesNotes: 'Articles & notes',
        viewArticles: 'View all articles',
        viewProject: 'View project',
        viewWork: 'View experience',
        comingSoon: 'Coming soon',
        skills: 'Skills',
        education: 'Education',
        trajectory: 'Professional journey',
        backProjects: 'Back to projects',
        backWorks: 'Back to experience',
        publicLab: 'PUBLIC / LAB',
        downloadResume: 'Download resume',
        language: 'Select language',
        sendEmail: 'Prepare e-mail'
      },
      banner: {
        eyebrow: 'SOFTWARE DEVELOPER',
        title: 'BUILD. SECURE. DELIVER.',
        description: 'Scalable software, pragmatic architecture, and security applied from the first line of code.'
      },
      home: {
        locationPrefix: 'Working from',
        findMe: 'Find me on',
        or: 'or on'
      },
      pages: {
        about: {
          title: 'About me',
          description: 'From operations to development: a career built by solving real problems with software, data, and infrastructure.'
        },
        projects: {
          title: 'Projects',
          description: 'Solutions combining web development, APIs, data, modernization, and experimentation.'
        },
        openSource: {
          title: 'Open Source',
          description: 'Projects, labs, and notes shared to document learning and contribute to the community.'
        },
        works: {
          title: 'Professional Experience',
          description: 'More than a decade across support, databases, implementation, and software development.'
        },
        articles: {
          title: 'Articles',
          description: 'Notes on .NET, PHP, data, application security, and lessons from seeing software in production.'
        },
        contact: {
          title: 'Contact',
          description: 'Have a project, integration, legacy system, or security topic in mind? Share the initial context.',
          formTitle: 'Let us talk',
          name: 'Name',
          namePlaceholder: 'Your name',
          email: 'E-mail',
          emailPlaceholder: 'you@company.com',
          message: 'Message',
          messagePlaceholder: 'Tell me a little about the challenge.',
          submit: 'Prepare e-mail',
          opened: 'Your e-mail application will open so you can complete the message.',
          alternatives: 'Other channels',
          emailDescription: 'Send a direct message and I will reply as soon as possible.',
          linkedinDescription: 'Professional profile, career history, and networking.',
          locationDescription: 'Available for remote collaboration.'
        }
      },
      footer: 'Built with Vite, React, TypeScript, Cloudflare, automation, and curiosity.',
      notFound: 'Page not found.',
      backHome: 'Back home'
    }
  }
};

export const technologyGroups = [
  {
    key: 'backend',
    label: 'BACKEND',
    items: ['.NET / C#', 'ASP.NET Core', 'Node.js', 'Laravel', 'Python', 'CodeIgniter']
  },
  {
    key: 'frontend',
    label: 'FRONTEND (WEB)',
    items: ['React.js', 'Vue.js', 'Blazor']
  },
  {
    key: 'mobile',
    label: 'MOBILE',
    items: ['Flutter', '.NET MAUI']
  },
  {
    key: 'devops',
    label: 'DEVOPS & INFRA',
    items: ['Docker', 'TeamCity', 'GitHub CI/CD', 'GitLab CI/CD']
  },
  {
    key: 'observability',
    label: 'OBSERVABILITY',
    items: ['Sentry', 'Monitoring', 'Logging']
  },
  {
    key: 'pentest',
    label: 'PENTEST',
    items: ['Metasploit', 'Kali Linux', 'OWASP']
  }
] as const;
