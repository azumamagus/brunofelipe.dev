import getCnpjPtBrMarkdown from './content/open-source/pt-BR/getcnpj-php.md?raw';

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
  logo?: string;
  title: string;
  dateRange: string;
  location: string;
  summary: string;
  bullets?: string[];
  stack: string[];
};

export type Contribution = {
  slug: string;
  title: string;
  repository: string;
  repositoryUrl?: string;
  description: string;
  period: string;
  tags: string[];
  evidence?: { label: string; url: string }[];
  content?: string;
  sections: {
    title: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
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
  contributions: Contribution[];
  securityProfiles: {
    platform: string;
    handle: string;
    description: string;
    href: string;
    icon: 'hackthebox' | 'tryhackme' | 'portswigger' | 'credly';
    status: string;
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
      securityLabs: string;
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
      backContributions: string;
      publicLab: string;
      readContribution: string;
      openRepository: string;
      viewSecurityProfile: string;
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
        instagramDescription: string;
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
  { label: 'Commit History', href: 'https://commit-history.com/azumamagus' },
  { label: 'Instagram', href: 'https://www.instagram.com/brunofelipe.dev/' },
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
        logo: '/images/works/sossystem.png',
        title: 'Desenvolvedor de Software',
        dateRange: 'jun 2019 - atual',
        location: 'Bauru, SP',
        summary: 'Desenvolvimento e evolução de software, integrações e soluções orientadas às necessidades da operação.',
        stack: ['.NET', 'C#', 'SQL', 'Software corporativo']
      },
      {
        slug: 'rasc-full-stack',
        company: 'RASC - Rede de Assistência Social Cristã',
        logo: '/images/works/rasc.jpg',
        title: 'Desenvolvedor Full Stack - Temporário',
        dateRange: 'jul 2025 - atual',
        location: 'Remoto',
        summary:
          'Aplicações web, APIs e soluções escaláveis com Laravel e .NET, incluindo arquitetura, integrações e serviços em nuvem.',
        bullets: ['APIs RESTful', 'AWS e Microsoft Azure', 'Deploy, monitoramento e automação'],
        stack: ['Laravel', '.NET', 'AWS', 'Azure']
      },
      {
        slug: 'decola-sites',
        company: 'Decola Sites',
        logo: '/images/works/decola_sites.jpg',
        title: 'Desenvolvedor Web Full Stack',
        dateRange: 'out 2024 - atual',
        location: 'Remoto',
        summary:
          'Desenvolvimento de sites e aplicações web responsivas, seguras e performáticas para clientes de diferentes segmentos, acompanhando cada projeto da arquitetura à publicação e manutenção.',
        bullets: [
          'Desenvolvimento full stack com WordPress, PHP, TypeScript, React e RPG',
          'Criação e integração de APIs, sistemas internos e serviços de terceiros',
          'Modelagem e integração de dados com MySQL, PostgreSQL e SQLite',
          'Aplicação de inteligência artificial e automações em processos e experiências digitais',
          'Otimização de SEO técnico, acessibilidade, Core Web Vitals e compatibilidade entre dispositivos',
          'Versionamento, automação de entregas, monitoramento e manutenção contínua de projetos'
        ],
        stack: ['WordPress', 'PHP', 'TypeScript', 'React', 'RPG', 'MySQL', 'PostgreSQL', 'SQLite', 'IA']
      },
      {
        slug: 'mega-bilheteria',
        company: 'Mega Bilheteria',
        logo: '/images/works/mega-bilheteria.png',
        title: 'Desenvolvedor Full Stack - Terceirizado',
        dateRange: 'out 2025 - atual',
        location: 'Remoto',
        summary: 'Desenvolvimento de funcionalidades, correções de bugs e migração de sistema legado.',
        stack: ['Laravel', 'React', 'Docker', 'PostgreSQL']
      },
      {
        slug: 'home-office',
        company: 'Projetos sob demanda',
        logo: '/images/works/projetos-demanda.png',
        title: 'Desenvolvedor Full Stack',
        dateRange: 'jun 2017 - atual',
        location: 'Bauru, SP - Remoto',
        summary: 'Desenvolvimento de aplicações e sistemas sob demanda para web, desktop e mobile.',
        stack: ['Flutter', 'Laravel', 'CodeIgniter', 'C#', 'ASP.NET Core', 'Blazor']
      },
      {
        slug: 'soulclinic-full-stack',
        company: 'Soulclinic',
        logo: '/images/works/soulclinic.png',
        title: 'Desenvolvedor PHP Full Stack',
        dateRange: 'jan 2023 - jul 2026',
        location: 'Home office · Remoto',
        summary:
          'Desenvolvimento e evolução de plataformas para o setor de saúde, com integrações de pagamentos, serviços especializados e emissão de notas fiscais.',
        bullets: [
          'Construção e manutenção de aplicações PHP com CodeIgniter e Laravel',
          'Desenvolvimento de APIs RESTful e integrações com ferramentas do ecossistema de saúde',
          'Integração de meios de pagamento e automação da emissão de notas fiscais',
          'Configuração e evolução de pipelines de CI/CD com GitHub Actions'
        ],
        stack: ['PHP', 'CodeIgniter', 'Laravel', 'REST APIs', 'GitHub Actions', 'Payments']
      },
      {
        slug: 'sos-suporte',
        company: 'SOS Soluções em TI',
        logo: '/images/works/sossystem.png',
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
        logo: '/images/works/ostecnologic.png',
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
        slug: 'getcnpj-php',
        title: 'GetCNPJ para PHP',
        repository: 'azumamagus/GetCNPJ-php',
        repositoryUrl: 'https://github.com/azumamagus/GetCNPJ-php',
        description:
          'Biblioteca open source para consultas resilientes de CNPJ, com validação local, resposta padronizada, fallback entre quatro provedores e integrações com Laravel e CodeIgniter 4.',
        period: '14 ago 2026',
        tags: ['PHP', 'Laravel', 'CodeIgniter 4', 'PSR-18', 'Packagist', 'Open Source'],
        evidence: [
          { label: 'Pacote no Packagist', url: 'https://packagist.org/packages/azumamagus/get-cnpj' },
          { label: 'Versão .NET no NuGet', url: 'https://www.nuget.org/packages/GetCNPJ' }
        ],
        content: getCnpjPtBrMarkdown,
        sections: []
      },
      {
        slug: 'brunofelipe-dev',
        title: 'brunofelipe.dev',
        repository: 'azumamagus/brunofelipe.dev',
        repositoryUrl: 'https://github.com/azumamagus/brunofelipe.dev',
        description:
          'Código, experiência bilíngue e infraestrutura deste portfólio profissional, desenvolvido para ser rápido, seguro e simples de evoluir.',
        period: '2026 — atual',
        tags: ['React', 'TypeScript', 'Cloudflare', 'Terraform', 'GitHub Actions'],
        evidence: [
          { label: 'Site em produção', url: 'https://brunofelipe.dev' }
        ],
        sections: [
          {
            title: 'Sobre o projeto',
            paragraphs: [
              'O brunofelipe.dev centraliza minha trajetória profissional, projetos, experiências, estudos de cybersecurity e formas de contato em uma experiência bilíngue.',
              'O projeto foi construído como um produto real: conteúdo separado da apresentação, rotas próprias, identidade visual consistente e uma base preparada para receber novas publicações.'
            ]
          },
          {
            title: 'Arquitetura e entrega',
            bullets: [
              'Interface estática e responsiva construída com Vite, React e TypeScript',
              'Publicação na borda da Cloudflare com configuração de domínio e cabeçalhos de segurança',
              'Infraestrutura versionada com Terraform e entregas automatizadas por GitHub Actions',
              'Conteúdo em inglês e português com URLs localizadas e currículos para download'
            ]
          },
          {
            title: 'Decisões de produto',
            paragraphs: [
              'A navegação foi mantida direta e previsível, enquanto a identidade visual combina desenvolvimento profissional, segurança ofensiva e game development sem comprometer legibilidade ou acessibilidade.',
              'Componentes e dados foram organizados para que novos projetos, experiências e artigos possam ser incluídos sem reconstruir a interface.'
            ]
          }
        ]
      },
      {
        slug: 'security-notes',
        title: 'Security Notes',
        repository: 'Security Notes / Learning Lab',
        description: 'Coleção em evolução de checklists, anotações de laboratório e estudos de segurança ofensiva para aplicações web e APIs.',
        period: 'Em construção',
        tags: ['OWASP', 'Pentest', 'Web Security', 'Learning in public'],
        sections: [
          {
            title: 'Objetivo',
            paragraphs: [
              'Este laboratório organiza conhecimento adquirido em ambientes autorizados de estudo, transformando exercícios práticos em referências que possam ser consultadas e aprimoradas ao longo do tempo.',
              'A proposta é registrar metodologia, raciocínio e medidas de correção, não apenas o resultado de cada exercício.'
            ]
          },
          {
            title: 'Conteúdo planejado',
            bullets: [
              'Checklists de reconhecimento, enumeração e análise de aplicações web',
              'Notas sobre autenticação, autorização, APIs e lógica de negócio',
              'Laboratórios realizados no Hack The Box, TryHackMe e PortSwigger Web Security Academy',
              'Recomendações de mitigação e referências para desenvolvimento seguro'
            ]
          },
          {
            title: 'Princípios',
            paragraphs: [
              'Todo conteúdo é produzido a partir de ambientes próprios ou explicitamente autorizados. Informações sensíveis, credenciais e detalhes que possam expor sistemas reais não fazem parte das publicações.'
            ]
          }
        ]
      },
      {
        slug: 'game-dev-experiments',
        title: 'Game Dev Experiments',
        description: 'Pequenos protótipos e ferramentas criadas durante estudos de desenvolvimento de jogos.',
        repository: 'Game Development Lab',
        period: 'Em evolução',
        tags: ['C#', 'Godot', 'Game Design', 'Prototyping'],
        sections: [
          {
            title: 'O laboratório',
            paragraphs: [
              'Game development é meu espaço de experimentação criativa. Os protótipos servem para estudar sistemas interativos, arquitetura orientada a componentes e a relação entre código, regras e experiência do jogador.'
            ]
          },
          {
            title: 'Áreas de estudo',
            bullets: [
              'Mecânicas e prototipação rápida com C# e Godot',
              'Máquinas de estado, eventos, inventários e sistemas de progressão',
              'Ferramentas de apoio para criação e balanceamento de conteúdo',
              'Narrativa, construção de mundos e game design inspirados por RPG de mesa'
            ]
          },
          {
            title: 'Próximos passos',
            paragraphs: [
              'Os experimentos serão publicados gradualmente com demonstrações, decisões técnicas e retrospectivas sobre o que funcionou em cada protótipo.'
            ]
          }
        ]
      }
    ],
    securityProfiles: [
      {
        platform: 'Hack The Box',
        handle: '@4zum4',
        description:
          'Perfil público dedicado à evolução em pentest, laboratórios práticos, máquinas, desafios e competências verificáveis.',
        href: 'https://profile.hackthebox.com/profile/019faf44-6f7d-737b-9f44-7e528431d3f7',
        icon: 'hackthebox',
        status: 'PERFIL PÚBLICO',
        tags: ['Pentest', 'Labs', 'CTF', 'Cybersecurity']
      },
      {
        platform: 'TryHackMe',
        handle: '@azumamagus',
        description:
          'Trilhas e laboratórios guiados para consolidar fundamentos de segurança ofensiva, redes e aplicações web.',
        href: 'https://tryhackme.com/p/azumamagus',
        icon: 'tryhackme',
        status: 'LEARNING PATH',
        tags: ['Learning Paths', 'Rooms', 'Web Security']
      },
      {
        platform: 'PortSwigger Academy',
        handle: 'Web Security Academy',
        description:
          'Estudos práticos de segurança web com Burp Suite, vulnerabilidades em aplicações, APIs, autenticação e lógica de negócio.',
        href: 'https://portswigger.net/web-security',
        icon: 'portswigger',
        status: 'TRILHA EM ANDAMENTO',
        tags: ['Burp Suite', 'OWASP', 'Web Pentest', 'API Security']
      },
      {
        platform: 'Credly',
        handle: 'Bruno Felipe',
        description:
          'Perfil público para centralizar badges digitais, certificações e competências profissionais verificáveis por organizações emissoras.',
        href: 'https://www.credly.com/users/bruno-felipe.79c96959',
        icon: 'credly',
        status: 'CREDENCIAIS VERIFICÁVEIS',
        tags: ['Digital Badges', 'Certificações', 'Professional Development']
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
        securityLabs: 'Security Labs & Proof of Work',
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
        backContributions: 'Voltar para Open Source',
        publicLab: 'PUBLIC / LAB',
        readContribution: 'Ler detalhes',
        openRepository: 'Abrir repositório',
        viewSecurityProfile: 'Ver perfil ou plataforma',
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
          instagramDescription:
            'Conteúdo sobre desenvolvimento, cybersecurity, projetos e bastidores da rotina profissional.',
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
        logo: '/images/works/sossystem.png',
        title: 'Software Developer',
        dateRange: 'Jun 2019 - Present',
        location: 'Bauru, Brazil',
        summary: 'Software development and evolution, integrations, and solutions driven by operational needs.',
        stack: ['.NET', 'C#', 'SQL', 'Business software']
      },
      {
        slug: 'rasc-full-stack',
        company: 'RASC - Christian Social Assistance Network',
        logo: '/images/works/rasc.jpg',
        title: 'Full Stack Developer - Temporary',
        dateRange: 'Jul 2025 - Present',
        location: 'Remote',
        summary: 'Web applications, APIs, and scalable Laravel and .NET solutions, including architecture, integrations, and cloud services.',
        bullets: ['RESTful APIs', 'AWS and Microsoft Azure', 'Deployment, monitoring, and automation'],
        stack: ['Laravel', '.NET', 'AWS', 'Azure']
      },
      {
        slug: 'decola-sites',
        company: 'Decola Sites',
        logo: '/images/works/decola_sites.jpg',
        title: 'Full Stack Web Developer',
        dateRange: 'Oct 2024 - Present',
        location: 'Remote',
        summary:
          'Development of responsive, secure, and high-performance websites and web applications for clients across different industries, supporting each project from architecture through deployment and maintenance.',
        bullets: [
          'Full stack development with WordPress, PHP, TypeScript, React, and RPG',
          'Development and integration of APIs, internal systems, and third-party services',
          'Data modeling and integration with MySQL, PostgreSQL, and SQLite',
          'Application of artificial intelligence and automation to digital processes and experiences',
          'Technical SEO, accessibility, Core Web Vitals, and cross-device compatibility optimization',
          'Version control, delivery automation, monitoring, and continuous project maintenance'
        ],
        stack: ['WordPress', 'PHP', 'TypeScript', 'React', 'RPG', 'MySQL', 'PostgreSQL', 'SQLite', 'AI']
      },
      {
        slug: 'mega-bilheteria',
        company: 'Mega Bilheteria',
        logo: '/images/works/mega-bilheteria.png',
        title: 'Full Stack Developer - Contractor',
        dateRange: 'Oct 2025 - Present',
        location: 'Remote',
        summary: 'Feature development, bug fixes, and legacy system migration.',
        stack: ['Laravel', 'React', 'Docker', 'PostgreSQL']
      },
      {
        slug: 'home-office',
        company: 'Independent projects',
        logo: '/images/works/projetos-demanda.png',
        title: 'Full Stack Developer',
        dateRange: 'Jun 2017 - Present',
        location: 'Bauru, Brazil - Remote',
        summary: 'On-demand web, desktop, and mobile application development.',
        stack: ['Flutter', 'Laravel', 'CodeIgniter', 'C#', 'ASP.NET Core', 'Blazor']
      },
      {
        slug: 'soulclinic-full-stack',
        company: 'Soulclinic',
        logo: '/images/works/soulclinic.png',
        title: 'PHP Full Stack Developer',
        dateRange: 'Jan 2023 - Jul 2026',
        location: 'Home office · Remote',
        summary:
          'Development and evolution of healthcare platforms, including payment integrations, specialized services, and electronic invoice issuance.',
        bullets: [
          'Built and maintained PHP applications with CodeIgniter and Laravel',
          'Developed RESTful APIs and integrations with healthcare ecosystem tools',
          'Integrated payment gateways and automated electronic invoice issuance',
          'Configured and evolved CI/CD pipelines with GitHub Actions'
        ],
        stack: ['PHP', 'CodeIgniter', 'Laravel', 'REST APIs', 'GitHub Actions', 'Payments']
      },
      {
        slug: 'sos-suporte',
        company: 'SOS Soluções em TI',
        logo: '/images/works/sossystem.png',
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
        logo: '/images/works/ostecnologic.png',
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
        slug: 'getcnpj-php',
        title: 'GetCNPJ for PHP',
        repository: 'azumamagus/GetCNPJ-php',
        repositoryUrl: 'https://github.com/azumamagus/GetCNPJ-php',
        description:
          'An open-source library for resilient Brazilian company registry lookups, with local validation, normalized responses, four-provider fallback, and Laravel and CodeIgniter 4 integrations.',
        period: 'Aug 14, 2026',
        tags: ['PHP', 'Laravel', 'CodeIgniter 4', 'PSR-18', 'Packagist', 'Open Source'],
        evidence: [
          { label: 'Package on Packagist', url: 'https://packagist.org/packages/azumamagus/get-cnpj' },
          { label: '.NET package on NuGet', url: 'https://www.nuget.org/packages/GetCNPJ' }
        ],
        sections: [
          {
            title: 'Why this library exists',
            paragraphs: [
              'Company registry providers expose different contracts, field names, rate limits, and failure behavior. GetCNPJ isolates those differences behind a single typed API for plain PHP, Laravel, and CodeIgniter 4.',
              'The client validates CNPJ check digits locally before accessing the network and returns a consistent result regardless of which provider completed the lookup.'
            ]
          },
          {
            title: 'Resilient provider fallback',
            bullets: [
              'Adapters for CNPJ.WS, ReceitaWS, BrasilAPI, and CNPJA',
              'Priority-based fallback when a provider is unavailable or returns an invalid response',
              'Provider-specific errors retained for diagnostics and observability',
              'Per-provider sliding-window rate limiting to reduce accidental throttling'
            ]
          },
          {
            title: 'Framework-independent architecture',
            paragraphs: [
              'Small contracts separate provider access, orchestration, and rate limiting. The HTTP layer follows PSR-18, while framework integrations only manage configuration and client lifecycle.',
              'Laravel supports package discovery, dependency injection, a facade, and publishable configuration. CodeIgniter 4 integrates through Service Discovery and shared services.'
            ]
          },
          {
            title: 'Quality and distribution',
            bullets: [
              'PHPUnit coverage for validation, provider mapping, fallback, serialization, and framework integrations',
              'Continuous integration across PHP 8.1 through 8.4',
              'Composer distribution through Packagist under the MIT license',
              'Semantic versioning and automated package discovery from Git tags'
            ]
          },
          {
            title: 'Full technical article',
            paragraphs: [
              'The complete article, including installation examples, typed response models, advanced configuration, code samples, and the architecture diagram, is currently available on the Portuguese version of this page.'
            ]
          }
        ]
      },
      {
        slug: 'brunofelipe-dev',
        title: 'brunofelipe.dev',
        repository: 'azumamagus/brunofelipe.dev',
        repositoryUrl: 'https://github.com/azumamagus/brunofelipe.dev',
        description:
          'The code, bilingual experience, and infrastructure behind this professional portfolio, designed to be fast, secure, and easy to evolve.',
        period: '2026 — present',
        tags: ['React', 'TypeScript', 'Cloudflare', 'Terraform', 'GitHub Actions'],
        evidence: [
          { label: 'Live website', url: 'https://brunofelipe.dev' }
        ],
        sections: [
          {
            title: 'About the project',
            paragraphs: [
              'brunofelipe.dev brings together my professional journey, projects, experience, cybersecurity studies, and contact channels in a bilingual experience.',
              'The portfolio was built as a real product: content separated from presentation, dedicated routes, a consistent visual identity, and a foundation ready for new publications.'
            ]
          },
          {
            title: 'Architecture and delivery',
            bullets: [
              'Responsive static interface built with Vite, React, and TypeScript',
              'Edge delivery through Cloudflare with custom-domain and security-header configuration',
              'Versioned infrastructure with Terraform and delivery automation through GitHub Actions',
              'English and Portuguese content with localized URLs and downloadable resumes'
            ]
          },
          {
            title: 'Product decisions',
            paragraphs: [
              'Navigation remains direct and predictable, while the visual identity combines professional software development, offensive security, and game development without sacrificing readability or accessibility.',
              'Components and content are organized so new projects, work experiences, and articles can be added without rebuilding the interface.'
            ]
          }
        ]
      },
      {
        slug: 'security-notes',
        title: 'Security Notes',
        repository: 'Security Notes / Learning Lab',
        description: 'An evolving collection of checklists, lab notes, and offensive security studies focused on web applications and APIs.',
        period: 'In progress',
        tags: ['OWASP', 'Pentest', 'Web Security', 'Learning in public'],
        sections: [
          {
            title: 'Purpose',
            paragraphs: [
              'This lab organizes knowledge acquired in authorized learning environments, turning hands-on exercises into references that can be revisited and improved over time.',
              'The goal is to document methodology, reasoning, and remediation—not only the result of each exercise.'
            ]
          },
          {
            title: 'Planned content',
            bullets: [
              'Reconnaissance, enumeration, and web application analysis checklists',
              'Notes on authentication, authorization, APIs, and business logic',
              'Labs completed on Hack The Box, TryHackMe, and PortSwigger Web Security Academy',
              'Mitigation guidance and secure-development references'
            ]
          },
          {
            title: 'Principles',
            paragraphs: [
              'All content is based on owned or explicitly authorized environments. Sensitive information, credentials, and details that could expose real systems are excluded from every publication.'
            ]
          }
        ]
      },
      {
        slug: 'game-dev-experiments',
        title: 'Game Dev Experiments',
        description: 'Small prototypes and tools created while studying game development.',
        repository: 'Game Development Lab',
        period: 'Evolving',
        tags: ['C#', 'Godot', 'Game Design', 'Prototyping'],
        sections: [
          {
            title: 'The lab',
            paragraphs: [
              'Game development is my space for creative experimentation. These prototypes help me study interactive systems, component-oriented architecture, and the relationship between code, rules, and player experience.'
            ]
          },
          {
            title: 'Areas of study',
            bullets: [
              'Mechanics and rapid prototyping with C# and Godot',
              'State machines, events, inventories, and progression systems',
              'Supporting tools for content creation and balancing',
              'Narrative, worldbuilding, and game design inspired by tabletop RPGs'
            ]
          },
          {
            title: 'Next steps',
            paragraphs: [
              'Experiments will be published gradually with demos, technical decisions, and retrospectives on what worked in each prototype.'
            ]
          }
        ]
      }
    ],
    securityProfiles: [
      {
        platform: 'Hack The Box',
        handle: '@4zum4',
        description:
          'Public profile focused on hands-on pentesting, labs, machines, challenges, and verifiable cybersecurity skills.',
        href: 'https://profile.hackthebox.com/profile/019faf44-6f7d-737b-9f44-7e528431d3f7',
        icon: 'hackthebox',
        status: 'PUBLIC PROFILE',
        tags: ['Pentest', 'Labs', 'CTF', 'Cybersecurity']
      },
      {
        platform: 'TryHackMe',
        handle: '@azumamagus',
        description:
          'Guided learning paths and labs for strengthening offensive security, networking, and web application fundamentals.',
        href: 'https://tryhackme.com/p/azumamagus',
        icon: 'tryhackme',
        status: 'LEARNING PATH',
        tags: ['Learning Paths', 'Rooms', 'Web Security']
      },
      {
        platform: 'PortSwigger Academy',
        handle: 'Web Security Academy',
        description:
          'Hands-on web security studies covering Burp Suite, application and API vulnerabilities, authentication, and business logic.',
        href: 'https://portswigger.net/web-security',
        icon: 'portswigger',
        status: 'IN PROGRESS',
        tags: ['Burp Suite', 'OWASP', 'Web Pentest', 'API Security']
      },
      {
        platform: 'Credly',
        handle: 'Bruno Felipe',
        description:
          'Public profile for verified digital badges, certifications, and professional competencies issued by trusted organizations.',
        href: 'https://www.credly.com/users/bruno-felipe.79c96959',
        icon: 'credly',
        status: 'VERIFIED CREDENTIALS',
        tags: ['Digital Badges', 'Certifications', 'Professional Development']
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
        securityLabs: 'Security Labs & Proof of Work',
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
        backContributions: 'Back to Open Source',
        publicLab: 'PUBLIC / LAB',
        readContribution: 'Read details',
        openRepository: 'Open repository',
        viewSecurityProfile: 'View profile or platform',
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
          instagramDescription:
            'Content about software development, cybersecurity, projects, and professional behind-the-scenes.',
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
    items: [
      { name: 'C#', icon: 'sharp', color: '#9b4fce' },
      { name: 'ASP.NET Core', icon: 'dotnet', color: '#7c5cff' },
      { name: 'Node.js', icon: 'node', color: '#5fa04e' },
      { name: 'Laravel', icon: 'laravel', color: '#ff2d20' },
      { name: 'Python', icon: 'python', color: '#ffd343' }
    ]
  },
  {
    key: 'frontend',
    label: 'FRONTEND (WEB)',
    items: [
      { name: 'React.js', icon: 'react', color: '#61dafb' },
      { name: 'Vue.js', icon: 'vue', color: '#42b883' },
      { name: 'Blazor', icon: 'blazor', color: '#8c3fd1' }
    ]
  },
  {
    key: 'mobile',
    label: 'MOBILE',
    items: [
      { name: 'Flutter', icon: 'flutter', color: '#54c5f8' },
      { name: '.NET MAUI', icon: 'dotnet', color: '#8b5cf6' }
    ]
  },
  {
    key: 'devops',
    label: 'DEVOPS & INFRA',
    items: [
      { name: 'Docker', icon: 'docker', color: '#2496ed' },
      { name: 'TeamCity', icon: 'teamcity', color: '#c4d600' },
      { name: 'GitHub CI/CD', icon: 'github', color: '#f2f3ed' },
      { name: 'GitLab CI/CD', icon: 'gitlab', color: '#fc6d26' }
    ]
  },
  {
    key: 'observability',
    label: 'OBSERVABILITY',
    items: [
      { name: 'Sentry', icon: 'sentry', color: '#a687ff' },
      { name: 'Grafana', icon: 'grafana', color: '#f46800' },
      { name: 'OpenTelemetry', icon: 'opentelemetry', color: '#f5a800' }
    ]
  },
  {
    key: 'pentest',
    label: 'PENTEST',
    items: [
      { name: 'Metasploit', icon: 'metasploit', color: '#2596cd' },
      { name: 'Kali Linux', icon: 'kali', color: '#557c94' },
      { name: 'OWASP', icon: 'owasp', color: '#f2f3ed' },
      { name: 'PTES', icon: 'ptes', color: '#dff000' }
    ]
  }
] as const;
