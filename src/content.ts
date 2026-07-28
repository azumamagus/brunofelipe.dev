export const profile = {
  name: 'Bruno Da Cunha Felipe',
  shortName: 'Bruno Felipe',
  initials: 'BF',
  headline: 'Desenvolvedor .NET e PHP, entusiasta de Cybersecurity.',
  location: 'Bauru, São Paulo, Brasil (UTC−3)',
  availability: 'Aberto a projetos e oportunidades remotas',
  summary:
    'Desenvolvedor de software com experiência em aplicações web, APIs, sistemas legados, bancos de dados e infraestrutura. Construo soluções com .NET, C#, PHP e Laravel, mantendo segurança como parte da qualidade — e exploro game development como hobby.',
  about: [
    'Minha trajetória começou no suporte técnico e na administração de bancos de dados. Essa base me ensinou a olhar além do código: entender operação, usuários, dados e o impacto real de cada decisão.',
    'Hoje atuo no desenvolvimento de aplicações web, APIs RESTful, integrações e modernização de sistemas. Trabalho principalmente com .NET, ASP.NET, C#, PHP, Laravel e bancos relacionais.',
    'Cybersecurity é uma área de estudo contínuo, especialmente segurança de aplicações e pentest web. Fora do trabalho, game development é meu laboratório criativo para experimentar mecânicas, interfaces e novas tecnologias.'
  ],
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/brunodcfelipe/' },
    { label: 'GitHub', href: 'https://github.com/brunodcfelipe' },
    { label: 'E-mail', href: 'mailto:contato@brunofelipe.dev' }
  ],
  email: 'contato@brunofelipe.dev'
};

export const skillGroups = [
  {
    group: 'Backend & Web',
    items: ['.NET', 'ASP.NET Core', 'C#', 'PHP', 'Laravel', 'CodeIgniter', 'APIs RESTful', 'Blazor']
  },
  {
    group: 'Frontend & Mobile',
    items: ['React', 'TypeScript', 'JavaScript', 'Flutter', 'HTML', 'CSS', 'Android']
  },
  {
    group: 'Dados',
    items: ['PostgreSQL', 'MySQL', 'SQL Server', 'PL/SQL', 'Conversão de dados', 'Backup & Restore']
  },
  {
    group: 'Cloud, DevOps & Segurança',
    items: ['AWS', 'Microsoft Azure', 'Docker', 'Linux', 'GitHub Actions', 'Cybersecurity', 'Pentest Web', 'OWASP']
  }
];

export type Project = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  category: string;
  body: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'brunofelipe-dev',
    title: 'brunofelipe.dev',
    category: 'Portfólio & plataforma de conteúdo',
    description:
      'Portfólio estático para apresentar trajetória, projetos, artigos e estudos de segurança com deploy na edge.',
    stack: ['React', 'TypeScript', 'Vite', 'Cloudflare'],
    body: [
      'Este próprio site é um projeto em evolução: uma base rápida e acessível para transformar experiência profissional em cases e conteúdo técnico.',
      'A solução combina conteúdo local, rotas amigáveis, SEO, cabeçalhos de segurança, automação de build e infraestrutura como código.'
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
];

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

export const works: Work[] = [
  {
    slug: 'sos-desenvolvedor',
    company: 'SOS Soluções em TI',
    title: 'Desenvolvedor de Software',
    dateRange: 'jun 2019 — atual',
    location: 'Bauru, SP',
    summary: 'Desenvolvimento e evolução de software, integrações e soluções orientadas às necessidades da operação.',
    stack: ['.NET', 'C#', 'SQL', 'Software corporativo']
  },
  {
    slug: 'rasc-full-stack',
    company: 'RASC — Rede de Assistência Social Cristã',
    title: 'Desenvolvedor Full Stack · Temporário',
    dateRange: 'jul 2025 — atual',
    location: 'Remoto',
    summary:
      'Aplicações web, APIs e soluções escaláveis com Laravel e .NET, incluindo arquitetura, integrações e serviços em nuvem.',
    bullets: ['APIs RESTful', 'AWS e Microsoft Azure', 'Deploy, monitoramento e automação'],
    stack: ['Laravel', '.NET', 'AWS', 'Azure']
  },
  {
    slug: 'mega-bilheteria',
    company: 'Mega Bilheteria',
    title: 'Desenvolvedor Full Stack · Terceirizado',
    dateRange: 'out 2025 — atual',
    location: 'Remoto',
    summary: 'Desenvolvimento de funcionalidades, correções de bugs e migração de sistema legado.',
    stack: ['Laravel', 'React', 'Docker', 'PostgreSQL']
  },
  {
    slug: 'home-office',
    company: 'Projetos sob demanda',
    title: 'Desenvolvedor Full Stack',
    dateRange: 'jun 2017 — atual',
    location: 'Bauru, SP · Remoto',
    summary:
      'Desenvolvimento de aplicações e sistemas sob demanda para web, desktop e mobile.',
    stack: ['Flutter', 'Laravel', 'CodeIgniter', 'C#', 'ASP.NET Core', 'Blazor']
  },
  {
    slug: 'sos-suporte',
    company: 'SOS Soluções em TI',
    title: 'Analista de Suporte',
    dateRange: 'set 2015 — jun 2019',
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
    dateRange: 'ago 2011 — ago 2015',
    location: 'Bauru, SP',
    summary:
      'Suporte a clientes, manutenção, consultas SQL, servidores PostgreSQL, recuperação de dados e testes de software.',
    bullets: ['Backup e restore de bases', 'Windows Server e GNU/Linux CentOS', 'Configuração de RDP e automação comercial'],
    stack: ['PostgreSQL', 'SQL', 'Linux', 'Windows Server']
  }
];

export const education = [
  {
    institution: 'UNESP — Universidade Estadual Paulista',
    course: 'Aluno Especial · Mestrado em Mídia e Tecnologia',
    period: '2017',
    description: 'Cognição, sistemas inteligentes, reconhecimento de padrões, IA e redes neurais.'
  },
  {
    institution: 'Universidade do Sagrado Coração',
    course: 'Desenvolvimento de Software para Web',
    period: '2016 — 2017',
    description: 'Especialização em tecnologia da informação e desenvolvimento de aplicações web.'
  },
  {
    institution: 'FATEC Bauru',
    course: 'Tecnologia em Banco de Dados',
    period: '2013 — 2015',
    description: 'Vice-presidente da Empresa Júnior e iniciação científica em RFID.'
  },
  {
    institution: 'Senac Bauru',
    course: 'Técnico em Informática',
    period: '2011 — 2012',
    description: 'Formação técnica e liderança de classe durante os quatro semestres.'
  }
];

export const contributions = [
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
];

export const articles = [
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
];
