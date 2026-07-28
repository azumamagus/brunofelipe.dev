import {
  StrictMode,
  useEffect,
  useState,
  type FormEvent,
  type ReactNode
} from 'react';
import { createRoot } from 'react-dom/client';
import {
  articles,
  contributions,
  education,
  profile,
  projects,
  skillGroups,
  works,
  type Project,
  type Work
} from './content';
import './styles.css';

type NavKey = 'home' | 'about' | 'projects' | 'open-source' | 'works' | 'articles' | 'contact' | 'resume';

const navItems: { key: NavKey; label: string; path: string }[] = [
  { key: 'home', label: 'Home', path: '/' },
  { key: 'about', label: 'Sobre mim', path: '/about' },
  { key: 'projects', label: 'Projetos', path: '/projects' },
  { key: 'open-source', label: 'Open Source', path: '/open-source' },
  { key: 'works', label: 'Experiência', path: '/works' },
  { key: 'articles', label: 'Artigos', path: '/articles' },
  { key: 'contact', label: 'Contato', path: '/contact' },
  { key: 'resume', label: 'Currículo', path: '/resume' }
];

const titles: Record<NavKey, string> = {
  home: 'Bruno Da Cunha Felipe — Desenvolvedor .NET, PHP & Cybersecurity',
  about: 'Sobre mim — Bruno Da Cunha Felipe',
  projects: 'Projetos — Bruno Da Cunha Felipe',
  'open-source': 'Open Source — Bruno Da Cunha Felipe',
  works: 'Experiência — Bruno Da Cunha Felipe',
  articles: 'Artigos — Bruno Da Cunha Felipe',
  contact: 'Contato — Bruno Da Cunha Felipe',
  resume: 'Currículo — Bruno Da Cunha Felipe'
};

function cleanPath(value: string) {
  return value.replace(/\/+$/, '') || '/';
}

function navKeyFromPath(pathname: string): NavKey {
  const path = cleanPath(pathname);
  if (path.startsWith('/projects')) return 'projects';
  if (path.startsWith('/works')) return 'works';
  if (path.startsWith('/articles')) return 'articles';
  return navItems.find((item) => item.path === path)?.key ?? 'home';
}

function useRouter() {
  const [pathname, setPathname] = useState(() => cleanPath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setPathname(cleanPath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    document.title = titles[navKeyFromPath(pathname)];
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  function navigate(path: string) {
    if (/^(https?:|mailto:)/.test(path)) {
      window.location.href = path;
      return;
    }
    window.history.pushState({}, '', path);
    setPathname(cleanPath(path));
  }

  return { pathname, navigate };
}

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function RouteLink({
  href,
  navigate,
  children,
  className
}: {
  href: string;
  navigate: (path: string) => void;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={href}
      onClick={(event) => {
        if (href.startsWith('/')) {
          event.preventDefault();
          navigate(href);
        }
      }}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  );
}

function Header({
  active,
  navigate
}: {
  active: NavKey;
  navigate: (path: string) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
      <div className="header-profile">
        <RouteLink href="/" navigate={navigate} className="avatar" >
          <span className="avatar-grid" aria-hidden="true" />
          <strong>{profile.initials}</strong>
          <span className="avatar-status" aria-label="Disponível" />
        </RouteLink>
        <RouteLink href="/" navigate={navigate} className="profile-name">
          {profile.name}
        </RouteLink>
      </div>

      <button
        className="mobile-menu"
        type="button"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navegação principal">
        {navItems.map((item) => (
          <RouteLink
            key={item.key}
            href={item.path}
            navigate={(path) => {
              navigate(path);
              setMenuOpen(false);
            }}
            className={active === item.key ? 'nav-link active' : 'nav-link'}
          >
            {item.label}
          </RouteLink>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p>© {new Date().getFullYear()} {profile.name}.</p>
        <span>Construído com React, TypeScript e curiosidade.</span>
      </div>
      <nav aria-label="Links externos">
        {profile.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}

function SectionTitle({
  title,
  action,
  actionPath,
  navigate
}: {
  title: string;
  action?: string;
  actionPath?: string;
  navigate?: (path: string) => void;
}) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {action && actionPath && navigate ? (
        <RouteLink href={actionPath} navigate={navigate} className="view-all">
          {action} <Arrow />
        </RouteLink>
      ) : null}
    </div>
  );
}

function PageIntro({ title, description }: { title: string; description: string }) {
  return (
    <section className="page-intro">
      <p className="terminal-label">~/bruno/{title.toLowerCase().replaceAll(' ', '-')}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}

function TechBanner() {
  const technologies = ['.NET', 'C#', 'PHP', 'Laravel', 'React', 'PostgreSQL', 'Docker', 'AWS'];
  return (
    <div className="tech-banner" role="img" aria-label="Tecnologias e áreas de atuação de Bruno">
      <div className="banner-copy">
        <p><span className="prompt">$</span> whoami</p>
        <strong>software_developer</strong>
        <span>backend · web · cloud</span>
      </div>
      <div className="orbit-panel" aria-hidden="true">
        <span className="orbit orbit-one" />
        <span className="orbit orbit-two" />
        <span className="orbit-cross orbit-cross-x" />
        <span className="orbit-cross orbit-cross-y" />
        <strong>BF</strong>
      </div>
      <div className="banner-stack">
        {technologies.map((tech, index) => (
          <span key={tech} style={{ '--order': index } as React.CSSProperties}>{tech}</span>
        ))}
      </div>
      <div className="banner-modes">
        <span><i /> BUILD</span>
        <span><i /> SECURE</span>
        <span><i /> PLAY</span>
      </div>
    </div>
  );
}

function ProjectCard({ project, navigate }: { project: Project; navigate: (path: string) => void }) {
  return (
    <RouteLink href={`/projects/${project.slug}`} navigate={navigate} className="content-card project-card">
      <div className="project-visual" aria-hidden="true">
        <span className="window-bar"><i /><i /><i /></span>
        <span className="visual-path">src/{project.slug}</span>
        <strong>{project.title.slice(0, 2).toUpperCase()}</strong>
        <span className="visual-scan" />
      </div>
      <div className="card-body">
        <span className="card-kicker">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tags">
          {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
        </div>
        <span className="card-link">Ver projeto <Arrow /></span>
      </div>
    </RouteLink>
  );
}

function WorkCard({ work, navigate }: { work: Work; navigate: (path: string) => void }) {
  return (
    <RouteLink href={`/works/${work.slug}`} navigate={navigate} className="content-card work-card">
      <div className="company-mark" aria-hidden="true">{work.company.split(' ').map((word) => word[0]).slice(0, 2).join('')}</div>
      <span className="card-kicker">{work.dateRange}</span>
      <h3>{work.company}</h3>
      <strong>{work.title}</strong>
      <p>{work.summary}</p>
      <span className="card-link">Ver experiência <Arrow /></span>
    </RouteLink>
  );
}

function ContributionCard({ item }: { item: (typeof contributions)[number] }) {
  return (
    <article className="content-card contribution-card">
      <div className="repo-line">
        <span className="repo-icon" aria-hidden="true">&lt;/&gt;</span>
        <span>PUBLIC / LAB</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </article>
  );
}

function ArticleCard({ article }: { article: (typeof articles)[number] }) {
  return (
    <article className="content-card article-card">
      <div className="article-visual" aria-hidden="true">
        <span>FIELD_NOTE</span>
        <strong>{article.slug.split('-').slice(0, 2).join('_')}</strong>
        <i />
      </div>
      <div className="card-body">
        <div className="article-meta"><span>{article.date}</span><span>·</span><span>{article.readingTime}</span></div>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <span className="card-link muted">Publicação em breve</span>
      </div>
    </article>
  );
}

function Home({ navigate }: { navigate: (path: string) => void }) {
  return (
    <>
      <section className="home-intro">
        <TechBanner />
        <p className="terminal-label">~/profile <span className="cursor">_</span></p>
        <h1>{profile.headline}</h1>
        <div className="profile-copy">
          {profile.about.slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <p className="location-line">Trabalhando a partir de {profile.location}.</p>
        <p className="social-line">
          Encontre-me no{' '}
          <a href={profile.links[0].href} target="_blank" rel="noreferrer">{profile.links[0].label}</a>
          {' '}ou no{' '}
          <a href={profile.links[1].href} target="_blank" rel="noreferrer">{profile.links[1].label}</a>.
        </p>
      </section>

      <section className="status-board">
        <div><span>FOCO ATUAL</span><strong>.NET · PHP · APIs</strong></div>
        <div><span>ESTUDANDO</span><strong>Cybersecurity · Pentest</strong></div>
        <div><span>SIDE QUEST</span><strong>Game Development</strong></div>
        <div><span>STATUS</span><strong className="online"><i /> Disponível</strong></div>
      </section>

      <section className="home-section">
        <SectionTitle title="Projetos em destaque" action="Ver todos os projetos" actionPath="/projects" navigate={navigate} />
        <div className="card-grid three">
          {projects.filter((item) => item.featured).map((project) => (
            <ProjectCard key={project.slug} project={project} navigate={navigate} />
          ))}
        </div>
      </section>

      <section className="home-section">
        <SectionTitle title="Open Source & Labs" action="Ver contribuições" actionPath="/open-source" navigate={navigate} />
        <div className="card-grid two">
          {contributions.slice(0, 2).map((item) => <ContributionCard key={item.title} item={item} />)}
        </div>
      </section>

      <section className="home-section">
        <SectionTitle title="Experiência" action="Ver trajetória completa" actionPath="/works" navigate={navigate} />
        <div className="card-grid three">
          {works.slice(0, 3).map((work) => <WorkCard key={work.slug} work={work} navigate={navigate} />)}
        </div>
      </section>

      <section className="home-section">
        <SectionTitle title="Artigos & notas" action="Ver todos os artigos" actionPath="/articles" navigate={navigate} />
        <div className="card-grid three">
          {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </section>
    </>
  );
}

function About() {
  return (
    <>
      <PageIntro
        title="Sobre mim"
        description="Da operação ao desenvolvimento: uma trajetória construída resolvendo problemas reais com software, dados e infraestrutura."
      />
      <section className="prose-block">
        {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>

      <section className="home-section">
        <SectionTitle title="Competências" />
        <div className="card-grid two skills-grid">
          {skillGroups.map((group) => (
            <article className="content-card skill-card" key={group.group}>
              <h3>{group.group}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section">
        <SectionTitle title="Formação acadêmica" />
        <div className="education-list">
          {education.map((item) => (
            <article key={item.institution}>
              <span>{item.period}</span>
              <div>
                <h3>{item.institution}</h3>
                <strong>{item.course}</strong>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Projects({ navigate }: { navigate: (path: string) => void }) {
  return (
    <>
      <PageIntro
        title="Projetos"
        description="Soluções que combinam desenvolvimento web, APIs, dados, modernização e experimentação."
      />
      <section className="home-section page-list">
        <div className="card-grid three">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} navigate={navigate} />)}
        </div>
      </section>
    </>
  );
}

function OpenSource() {
  return (
    <>
      <PageIntro
        title="Open Source"
        description="Projetos, laboratórios e anotações publicados para documentar aprendizados e contribuir com a comunidade."
      />
      <section className="home-section page-list">
        <div className="card-grid two">
          {contributions.map((item) => <ContributionCard key={item.title} item={item} />)}
        </div>
      </section>
    </>
  );
}

function Works({ navigate }: { navigate: (path: string) => void }) {
  return (
    <>
      <PageIntro
        title="Experiência"
        description="Mais de uma década entre suporte, bancos de dados, implantação e desenvolvimento de software."
      />
      <section className="home-section page-list">
        <SectionTitle title="Trajetória profissional" />
        <div className="card-grid two">
          {works.map((work) => <WorkCard key={work.slug} work={work} navigate={navigate} />)}
        </div>
      </section>
    </>
  );
}

function Articles() {
  return (
    <>
      <PageIntro
        title="Artigos"
        description="Notas sobre .NET, PHP, bancos de dados, segurança de aplicações e aprendizados de quem conhece o software também pela operação."
      />
      <section className="home-section page-list">
        <div className="card-grid two">
          {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </section>
    </>
  );
}

function Contact() {
  const [opened, setOpened] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Contato pelo portfólio — ${String(data.get('name') || '')}`);
    const body = encodeURIComponent(
      `${String(data.get('message') || '')}\n\nContato: ${String(data.get('email') || '')}`
    );
    setOpened(true);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <PageIntro
        title="Contato"
        description="Tem um projeto, uma integração, um sistema legado ou uma conversa sobre segurança? Envie o contexto inicial."
      />
      <section className="contact-card">
        <h2>Vamos conversar</h2>
        <form onSubmit={submit}>
          <label>
            Nome
            <input name="name" type="text" placeholder="Seu nome" required />
          </label>
          <label>
            E-mail
            <input name="email" type="email" placeholder="voce@empresa.com" required />
          </label>
          <label>
            Mensagem
            <textarea name="message" rows={6} placeholder="Conte um pouco sobre o desafio." required />
          </label>
          <button className="primary-button" type="submit">Preparar e-mail <Arrow /></button>
          {opened ? <p className="form-status">Seu aplicativo de e-mail será aberto para concluir o envio.</p> : null}
        </form>
      </section>
      <section className="home-section contact-alternatives">
        <SectionTitle title="Outros canais" />
        <div className="card-grid three">
          <article className="content-card small-card">
            <span className="card-kicker">E-mail</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <p>Envie uma mensagem direta e responderei assim que possível.</p>
          </article>
          <article className="content-card small-card">
            <span className="card-kicker">LinkedIn</span>
            <a href={profile.links[0].href} target="_blank" rel="noreferrer">brunodcfelipe</a>
            <p>Perfil profissional, histórico e conexão.</p>
          </article>
          <article className="content-card small-card">
            <span className="card-kicker">Localização</span>
            <strong>Bauru, SP</strong>
            <p>Disponível para colaboração remota.</p>
          </article>
        </div>
      </section>
    </>
  );
}

function Resume() {
  return (
    <>
      <PageIntro
        title="Currículo"
        description={`${profile.headline} ${profile.location}.`}
      />
      <section className="resume-sheet">
        <div className="resume-actions no-print">
          <button className="primary-button" type="button" onClick={() => window.print()}>
            Salvar em PDF / Imprimir
          </button>
        </div>
        <div className="resume-section">
          <h2>Perfil</h2>
          <p>{profile.summary}</p>
        </div>
        <div className="resume-section">
          <h2>Experiência</h2>
          {works.map((work) => (
            <article className="resume-entry" key={work.slug}>
              <span>{work.dateRange}</span>
              <div>
                <h3>{work.title}</h3>
                <strong>{work.company} · {work.location}</strong>
                <p>{work.summary}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="resume-section">
          <h2>Formação</h2>
          {education.map((item) => (
            <article className="resume-entry" key={item.institution}>
              <span>{item.period}</span>
              <div>
                <h3>{item.course}</h3>
                <strong>{item.institution}</strong>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="resume-section">
          <h2>Competências</h2>
          <div className="resume-skills">
            {skillGroups.map((group) => (
              <div key={group.group}>
                <h3>{group.group}</h3>
                <p>{group.items.join(' · ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProjectDetail({ project, navigate }: { project: Project; navigate: (path: string) => void }) {
  return (
    <>
      <PageIntro title={project.title} description={project.description} />
      <article className="detail-page">
        <RouteLink href="/projects" navigate={navigate} className="back-link">← Voltar para projetos</RouteLink>
        <p className="detail-kicker">{project.category}</p>
        {project.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </article>
    </>
  );
}

function WorkDetail({ work, navigate }: { work: Work; navigate: (path: string) => void }) {
  return (
    <>
      <PageIntro title={work.company} description={`${work.title} · ${work.dateRange}`} />
      <article className="detail-page">
        <RouteLink href="/works" navigate={navigate} className="back-link">← Voltar para experiência</RouteLink>
        <p className="detail-kicker">{work.location}</p>
        <p>{work.summary}</p>
        {work.bullets?.length ? <ul>{work.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
        <div className="tags">{work.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </article>
    </>
  );
}

function NotFound({ navigate }: { navigate: (path: string) => void }) {
  return (
    <section className="not-found">
      <p className="terminal-label">HTTP 404</p>
      <h1>Página não encontrada.</h1>
      <button className="primary-button" onClick={() => navigate('/')}>Voltar ao início</button>
    </section>
  );
}

function PageRouter({ pathname, navigate }: { pathname: string; navigate: (path: string) => void }) {
  if (pathname.startsWith('/projects/')) {
    const project = projects.find((item) => `/projects/${item.slug}` === pathname);
    return project ? <ProjectDetail project={project} navigate={navigate} /> : <NotFound navigate={navigate} />;
  }
  if (pathname.startsWith('/works/')) {
    const work = works.find((item) => `/works/${item.slug}` === pathname);
    return work ? <WorkDetail work={work} navigate={navigate} /> : <NotFound navigate={navigate} />;
  }
  switch (pathname) {
    case '/': return <Home navigate={navigate} />;
    case '/about': return <About />;
    case '/projects': return <Projects navigate={navigate} />;
    case '/open-source': return <OpenSource />;
    case '/works': return <Works navigate={navigate} />;
    case '/articles': return <Articles />;
    case '/contact': return <Contact />;
    case '/resume': return <Resume />;
    default: return <NotFound navigate={navigate} />;
  }
}

function App() {
  const { pathname, navigate } = useRouter();
  return (
    <div className="app">
      <div className="grid-background" aria-hidden="true" />
      <div className="site-container">
        <Header active={navKeyFromPath(pathname)} navigate={navigate} />
        <main>
          <PageRouter pathname={pathname} navigate={navigate} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
