export const profile = {
  name: 'Bruno Felipe',
  initials: 'BF',
  role: 'Software Developer & Security Researcher',
  location: 'Brasil · UTC−3',
  availability: 'Disponível para projetos selecionados',
  email: 'contato@brunofelipe.dev',
  summary:
    'Desenvolvo aplicações rápidas, confiáveis e orientadas a produto — e uso a mentalidade ofensiva para encontrar riscos antes que eles virem incidentes.',
  links: [
    { label: 'GitHub', href: 'https://github.com/brunofelipe' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/brunofelipe' },
    { label: 'E-mail', href: 'mailto:contato@brunofelipe.dev' }
  ]
};

export const capabilities = [
  {
    code: '01',
    title: 'Product Engineering',
    text: 'Interfaces acessíveis, APIs consistentes e sistemas pensados do primeiro commit à operação.',
    tags: ['React', 'TypeScript', 'Node.js', 'APIs']
  },
  {
    code: '02',
    title: 'Offensive Security',
    text: 'Reconhecimento, validação de superfície de ataque e relatórios que transformam achados em ação.',
    tags: ['Pentest', 'OWASP', 'OSINT', 'Web Security']
  },
  {
    code: '03',
    title: 'Secure Delivery',
    text: 'Automação, infraestrutura como código e controles de segurança integrados ao fluxo de entrega.',
    tags: ['Cloudflare', 'Terraform', 'CI/CD', 'DevSecOps']
  }
];

export const projects = [
  {
    slug: 'brunofelipe-dev',
    index: 'PRJ–001',
    title: 'brunofelipe.dev',
    status: 'Em evolução',
    type: 'Portfolio / Open Source',
    description:
      'Portfólio técnico estático com identidade própria, rotas de conteúdo, SEO e deploy automatizado na edge.',
    challenge:
      'Transformar currículo, projetos e pesquisa de segurança em uma experiência rápida, clara e memorável.',
    result:
      'Uma base editorial pronta para crescer com cases, write-ups e artigos técnicos sem depender de CMS.',
    tags: ['React 19', 'Vite', 'TypeScript', 'Cloudflare Pages'],
    href: 'https://github.com/brunofelipe/brunofelipe.dev',
    featured: true
  },
  {
    slug: 'security-lab',
    index: 'LAB–002',
    title: 'Security Lab',
    status: 'Pesquisa contínua',
    type: 'Cybersecurity',
    description:
      'Ambiente documentado para estudos de segurança web, automação de reconnaissance e reprodução responsável de vulnerabilidades.',
    challenge:
      'Organizar experimentos de maneira reproduzível, ética e útil para desenvolvimento defensivo.',
    result:
      'Write-ups objetivos, checklists reutilizáveis e pequenas ferramentas abertas para a comunidade.',
    tags: ['OWASP', 'Burp Suite', 'Linux', 'Python'],
    href: '/contact',
    featured: true
  },
  {
    slug: 'next-case',
    index: 'PRJ–003',
    title: 'Seu projeto pode estar aqui',
    status: 'Agenda aberta',
    type: 'Collaboration',
    description:
      'Tem um produto que precisa de engenharia cuidadosa ou de uma revisão de segurança com contexto de negócio?',
    challenge:
      'Entender o risco real, priorizar o que importa e entregar evolução mensurável.',
    result:
      'Escopo direto, comunicação transparente e documentação que continua útil depois da entrega.',
    tags: ['Consultoria', 'Desenvolvimento', 'Pentest'],
    href: '/contact',
    featured: false
  }
];

export const experience = [
  {
    period: 'Agora',
    role: 'Desenvolvimento de produtos digitais',
    company: 'Projetos independentes',
    description:
      'Construção de aplicações web e ferramentas técnicas com foco em experiência, qualidade de código e segurança desde o desenho.',
    stack: ['React', 'TypeScript', 'Node.js', 'Cloud']
  },
  {
    period: 'Contínuo',
    role: 'Pesquisa aplicada em segurança',
    company: 'Cybersecurity lab',
    description:
      'Estudo prático de segurança web, modelagem de ameaças, reconnaissance e comunicação responsável de vulnerabilidades.',
    stack: ['OWASP', 'Pentest', 'OSINT', 'Linux']
  },
  {
    period: 'Próximo',
    role: 'Novos desafios',
    company: 'Open to work',
    description:
      'Buscando colaborar com equipes que valorizem autonomia, profundidade técnica e segurança como parte da qualidade.',
    stack: ['Remote', 'Product', 'Security']
  }
];

export const articles = [
  {
    date: 'EM BREVE',
    readingTime: '6 min',
    title: 'Segurança não é uma etapa do deploy',
    excerpt:
      'Como transformar revisão de risco em uma prática cotidiana de engenharia, sem criar um gargalo no time.'
  },
  {
    date: 'EM BREVE',
    readingTime: '9 min',
    title: 'Reconnaissance com intenção',
    excerpt:
      'Uma abordagem organizada para mapear superfícies de ataque e separar sinal de ruído durante um assessment.'
  },
  {
    date: 'EM BREVE',
    readingTime: '7 min',
    title: 'Portfólios técnicos que contam uma história',
    excerpt:
      'O que muda quando projetos deixam de ser uma lista de tecnologias e passam a mostrar decisões e impacto.'
  }
];

export const skills = [
  { group: 'Development', items: ['TypeScript', 'JavaScript', 'React', 'Node.js', 'REST APIs', 'Git'] },
  { group: 'Security', items: ['Pentest Web', 'OWASP Top 10', 'OSINT', 'Threat Modeling', 'Hardening', 'Reporting'] },
  { group: 'Platform', items: ['Linux', 'Docker', 'Cloudflare', 'Terraform', 'GitHub Actions', 'CI/CD'] },
  { group: 'Approach', items: ['Product thinking', 'Documentação', 'Comunicação', 'Automação', 'Acessibilidade'] }
];
