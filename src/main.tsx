import { StrictMode, useEffect, useMemo, useState, type FormEvent, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import { articles, capabilities, experience, profile, projects, skills } from './content';
import './styles.css';

type RouteKey = 'home' | 'about' | 'projects' | 'open-source' | 'works' | 'articles' | 'contact' | 'resume';

const routes: { key: RouteKey; label: string; path: string }[] = [
  { key: 'home', label: 'Início', path: '/' },
  { key: 'about', label: 'Sobre', path: '/about' },
  { key: 'projects', label: 'Projetos', path: '/projects' },
  { key: 'open-source', label: 'Open Source', path: '/open-source' },
  { key: 'works', label: 'Experiência', path: '/works' },
  { key: 'articles', label: 'Artigos', path: '/articles' },
  { key: 'contact', label: 'Contato', path: '/contact' },
  { key: 'resume', label: 'Currículo', path: '/resume' }
];

const routeTitles: Record<RouteKey, string> = {
  home: 'Bruno Felipe — Developer & Security',
  about: 'Sobre — Bruno Felipe',
  projects: 'Projetos — Bruno Felipe',
  'open-source': 'Open Source — Bruno Felipe',
  works: 'Experiência — Bruno Felipe',
  articles: 'Artigos — Bruno Felipe',
  contact: 'Contato — Bruno Felipe',
  resume: 'Currículo — Bruno Felipe'
};

function normalizePath(pathname: string) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return clean;
}

function currentRoute(pathname = window.location.pathname): RouteKey {
  const match = routes.find((route) => normalizePath(route.path) === normalizePath(pathname));
  return match?.key ?? 'home';
}

function useRoute() {
  const [route, setRoute] = useState<RouteKey>(() => currentRoute());

  useEffect(() => {
    const handlePopState = () => setRoute(currentRoute());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.title = routeTitles[route];
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [route]);

  function navigate(path: string) {
    if (path.startsWith('http') || path.startsWith('mailto:')) {
      window.location.href = path;
      return;
    }
    window.history.pushState({}, '', path);
    setRoute(currentRoute(path));
  }

  return { route, navigate };
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Brand({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <a className="brand" href="/" onClick={(event) => { event.preventDefault(); onNavigate('/'); }} aria-label="Ir para o início">
      <span className="brand-mark">{profile.initials}</span>
      <span className="brand-copy">
        <strong>{profile.name}</strong>
        <small>DEV / SECURITY</small>
      </span>
    </a>
  );
}

function Header({ route, onNavigate }: { route: RouteKey; onNavigate: (path: string) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand onNavigate={onNavigate} />
        <nav className={open ? 'nav nav-open' : 'nav'} aria-label="Navegação principal">
          {routes.map((item) => (
            <a
              key={item.key}
              className={route === item.key ? 'nav-link active' : 'nav-link'}
              href={item.path}
              onClick={(event) => {
                event.preventDefault();
                onNavigate(item.path);
                setOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <span className="status-dot" aria-hidden="true" />
          <span className="status-label">ONLINE</span>
          <button
            className="menu-button"
            type="button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <p className="eyebrow">Tem um desafio em mente?</p>
        <a href="/contact" onClick={(event) => { event.preventDefault(); onNavigate('/contact'); }}>
          Vamos investigar juntos. <Arrow />
        </a>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} {profile.name}. Construído com intenção.</p>
        <div>
          {profile.links.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function PageShell({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: ReactNode }) {
  return (
    <>
      <section className="page-hero reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-intro">{intro}</p>
      </section>
      {children}
    </>
  );
}

function SignalPanel() {
  const checks = [
    ['APPLICATION', 'READY'],
    ['SECURITY', 'ACTIVE'],
    ['DELIVERY', 'AUTOMATED']
  ];

  return (
    <aside className="signal-panel" aria-label="Painel de especialidades">
      <div className="panel-head">
        <span>SYSTEM / PROFILE</span>
        <span className="live-pill">LIVE</span>
      </div>
      <div className="radar" aria-hidden="true">
        <span className="radar-axis radar-axis-x" />
        <span className="radar-axis radar-axis-y" />
        <span className="radar-ring radar-ring-one" />
        <span className="radar-ring radar-ring-two" />
        <span className="radar-sweep" />
        <span className="radar-core">BF</span>
      </div>
      <div className="signal-checks">
        {checks.map(([label, value]) => (
          <div key={label}>
            <span>{label}</span>
            <strong><i /> {value}</strong>
          </div>
        ))}
      </div>
      <p className="terminal-line"><span>$</span> building_secure_products<span className="cursor">_</span></p>
    </aside>
  );
}

function Home({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <>
      <section className="hero">
        <div className="hero-copy reveal">
          <p className="eyebrow">BRUNO FELIPE / BRASIL / UTC−3</p>
          <h1>Construo sistemas.<br /><em>Quebro suposições.</em></h1>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="/projects" onClick={(event) => { event.preventDefault(); onNavigate('/projects'); }}>
              Explorar projetos <Arrow />
            </a>
            <a className="button button-ghost" href="/contact" onClick={(event) => { event.preventDefault(); onNavigate('/contact'); }}>
              Iniciar conversa
            </a>
          </div>
        </div>
        <SignalPanel />
      </section>

      <section className="trust-bar reveal">
        <p><span className="status-dot" /> {profile.availability}</p>
        <div>
          <span>DEVELOPMENT</span>
          <span>CYBERSECURITY</span>
          <span>PENTEST</span>
          <span>DEVSECOPS</span>
        </div>
      </section>

      <section className="section reveal">
        <div className="section-heading">
          <div>
            <p className="eyebrow">O QUE EU FAÇO</p>
            <h2>Engenharia com<br />mentalidade adversarial.</h2>
          </div>
          <p>O melhor produto não é apenas bonito e funcional. Ele entende seus limites, reduz riscos e permanece confiável quando o contexto muda.</p>
        </div>
        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability-card" key={item.code}>
              <span className="card-code">{item.code}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <div className="tag-row">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section project-preview reveal">
        <div className="section-kicker">
          <p className="eyebrow">PROJETOS SELECIONADOS</p>
          <a href="/projects" onClick={(event) => { event.preventDefault(); onNavigate('/projects'); }}>Ver todos <Arrow /></a>
        </div>
        {projects.filter((project) => project.featured).map((project) => (
          <ProjectRow key={project.slug} project={project} onNavigate={onNavigate} />
        ))}
      </section>

      <section className="manifesto reveal">
        <span className="manifesto-index">[ MANIFESTO_01 ]</span>
        <blockquote>
          “Código é comportamento.<br />
          <em>Segurança é contexto.</em>”
        </blockquote>
        <p>Meu trabalho vive no encontro entre os dois.</p>
      </section>
    </>
  );
}

function ProjectRow({ project, onNavigate }: { project: (typeof projects)[number]; onNavigate: (path: string) => void }) {
  return (
    <a
      className="project-row"
      href={project.href}
      onClick={(event) => {
        if (project.href.startsWith('/')) {
          event.preventDefault();
          onNavigate(project.href);
        }
      }}
      target={project.href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
    >
      <span className="project-index">{project.index}</span>
      <div>
        <p>{project.type}</p>
        <h3>{project.title}</h3>
      </div>
      <div className="project-tags">
        {project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
      </div>
      <span className="project-arrow"><Arrow /></span>
    </a>
  );
}

function About() {
  return (
    <PageShell
      eyebrow="ABOUT / PROFILE"
      title="Curiosidade técnica. Critério de produto."
      intro="Sou Bruno Felipe, desenvolvedor com interesse profundo em cybersecurity. Gosto de entender sistemas por dentro — como são construídos, onde falham e como podem evoluir."
    >
      <section className="about-grid reveal">
        <div className="about-statement">
          <p>Minha abordagem</p>
          <h2>Entender antes de construir. Testar antes de confiar. Documentar para continuar.</h2>
        </div>
        <div className="about-copy">
          <p>Atuo entre desenvolvimento de software e segurança ofensiva, aproximando duas disciplinas que deveriam conversar desde o primeiro requisito.</p>
          <p>Em um projeto, procuro reduzir complexidade sem esconder decisões importantes. Em um assessment, procuro evidências e impacto real — não uma lista automática de alertas.</p>
          <p>Este site também é um laboratório aberto: evolui junto com meus projetos, pesquisas e aprendizados.</p>
        </div>
      </section>
      <section className="section reveal">
        <div className="section-kicker"><p className="eyebrow">TOOLKIT / MINDSET</p></div>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-group" key={skill.group}>
              <h3>{skill.group}</h3>
              <ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>
      <section className="principles reveal">
        <p className="eyebrow">PRINCÍPIOS</p>
        <div><span>01</span><h3>Clareza vence complexidade acidental.</h3></div>
        <div><span>02</span><h3>Segurança precisa de contexto, não de teatro.</h3></div>
        <div><span>03</span><h3>O que não pode ser explicado ainda não está pronto.</h3></div>
      </section>
    </PageShell>
  );
}

function Projects({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <PageShell
      eyebrow="PROJECT INDEX / 2026"
      title="Projetos com decisões visíveis."
      intro="Cada case registra contexto, escolhas técnicas e resultado. A tecnologia aparece como meio — não como protagonista."
    >
      <section className="project-list reveal">
        {projects.map((project) => (
          <article className="project-case" key={project.slug}>
            <div className="project-case-head">
              <span>{project.index}</span>
              <span className="project-status"><i /> {project.status}</span>
            </div>
            <p className="eyebrow">{project.type}</p>
            <h2>{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <dl>
              <div><dt>Desafio</dt><dd>{project.challenge}</dd></div>
              <div><dt>Resultado</dt><dd>{project.result}</dd></div>
            </dl>
            <div className="project-case-footer">
              <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a
                href={project.href}
                onClick={(event) => {
                  if (project.href.startsWith('/')) {
                    event.preventDefault();
                    onNavigate(project.href);
                  }
                }}
                target={project.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                Abrir projeto <Arrow />
              </a>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}

function OpenSource({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <PageShell
      eyebrow="OPEN SOURCE / PUBLIC WORK"
      title="Conhecimento melhora quando circula."
      intro="Código, experimentos e documentação publicados para que outras pessoas possam estudar, questionar e construir a partir deles."
    >
      <section className="oss-feature reveal">
        <div className="oss-visual" aria-hidden="true">
          <span className="code-line">01&nbsp;&nbsp;const portfolio = {'{'}</span>
          <span className="code-line">02&nbsp;&nbsp;&nbsp;&nbsp;surface: 'edge',</span>
          <span className="code-line accent">03&nbsp;&nbsp;&nbsp;&nbsp;security: 'by-design',</span>
          <span className="code-line">04&nbsp;&nbsp;&nbsp;&nbsp;status: 'open-source'</span>
          <span className="code-line">05&nbsp;&nbsp;{'}'};</span>
        </div>
        <div>
          <p className="eyebrow">FEATURED REPOSITORY</p>
          <h2>brunofelipe.dev</h2>
          <p>A própria plataforma deste portfólio: React, TypeScript, conteúdo local e infraestrutura preparada para Cloudflare Pages.</p>
          <div className="tag-row"><span>MIT</span><span>React</span><span>TypeScript</span></div>
          <a className="button button-primary" href="https://github.com/brunofelipe/brunofelipe.dev" target="_blank" rel="noreferrer">Ver repositório <Arrow /></a>
        </div>
      </section>
      <section className="section reveal">
        <div className="section-heading compact">
          <div><p className="eyebrow">LAB NOTES</p><h2>Em preparação.</h2></div>
          <p>Os próximos conteúdos incluem checklists de segurança web, scripts de automação e write-ups de laboratórios controlados.</p>
        </div>
        <button className="text-link" onClick={() => onNavigate('/contact')}>Sugerir um tema <Arrow /></button>
      </section>
    </PageShell>
  );
}

function Works() {
  return (
    <PageShell
      eyebrow="EXPERIENCE / PRACTICE"
      title="Experiência é o que permanece depois da entrega."
      intro="Uma trajetória em construção, orientada por projetos reais, estudo contínuo e responsabilidade sobre o resultado."
    >
      <section className="timeline reveal">
        {experience.map((item, index) => (
          <article key={item.role}>
            <span className="timeline-count">0{index + 1}</span>
            <p className="timeline-period">{item.period}</p>
            <div>
              <p className="eyebrow">{item.company}</p>
              <h2>{item.role}</h2>
              <p>{item.description}</p>
              <div className="tag-row">{item.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}

function Articles() {
  return (
    <PageShell
      eyebrow="FIELD NOTES / ARTICLES"
      title="Notas sobre construir e investigar."
      intro="Artigos diretos sobre engenharia, segurança ofensiva e os detalhes que costumam ficar entre o código e o incidente."
    >
      <section className="article-grid reveal">
        {articles.map((article, index) => (
          <article key={article.title}>
            <div className="article-meta"><span>{article.date}</span><span>{article.readingTime}</span></div>
            <span className="article-number">0{index + 1}</span>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <span className="soon-label">PUBLICAÇÃO EM PREPARAÇÃO</span>
          </article>
        ))}
      </section>
    </PageShell>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Contato pelo portfólio — ${String(form.get('name') || '')}`);
    const body = encodeURIComponent(`${String(form.get('message') || '')}\n\nDe: ${String(form.get('email') || '')}`);
    setSent(true);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <PageShell
      eyebrow="CONTACT / SECURE CHANNEL"
      title="Toda boa colaboração começa com contexto."
      intro="Conte sobre o produto, o desafio técnico ou a superfície que você quer avaliar. Responderei com perguntas objetivas e próximos passos."
    >
      <section className="contact-layout reveal">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <span>01 / Seu nome</span>
            <input name="name" type="text" placeholder="Como devo chamar você?" required />
          </label>
          <label>
            <span>02 / Seu e-mail</span>
            <input name="email" type="email" placeholder="voce@empresa.com" required />
          </label>
          <label>
            <span>03 / Contexto</span>
            <textarea name="message" rows={6} placeholder="Projeto, prazo, desafio e o que seria uma boa entrega para você." required />
          </label>
          <button className="button button-primary" type="submit">Preparar mensagem <Arrow /></button>
          {sent && <p className="form-note" role="status">Seu aplicativo de e-mail será aberto para concluir o envio.</p>}
        </form>
        <aside className="contact-aside">
          <div>
            <p className="eyebrow">DIRECT LINE</p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div>
            <p className="eyebrow">LOCATION</p>
            <p>{profile.location}</p>
          </div>
          <div>
            <p className="eyebrow">STATUS</p>
            <p><span className="status-dot" /> {profile.availability}</p>
          </div>
          <p className="contact-note">Para testes de segurança, envie apenas informações iniciais. Escopo, autorização e tratamento de dados são definidos antes de qualquer atividade.</p>
        </aside>
      </section>
    </PageShell>
  );
}

function Resume() {
  return (
    <PageShell
      eyebrow="RESUME / PRINTABLE PROFILE"
      title="Bruno Felipe."
      intro={profile.role}
    >
      <section className="resume-sheet reveal">
        <div className="resume-top">
          <div>
            <p>{profile.location}</p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <button className="button button-primary no-print" onClick={() => window.print()}>Salvar em PDF / Imprimir</button>
        </div>
        <div className="resume-section">
          <p className="eyebrow">PERFIL</p>
          <p className="resume-lead">{profile.summary}</p>
        </div>
        <div className="resume-section">
          <p className="eyebrow">ATUAÇÃO</p>
          {experience.map((item) => (
            <div className="resume-entry" key={item.role}>
              <span>{item.period}</span>
              <div><h2>{item.role}</h2><p>{item.company}</p><p>{item.description}</p></div>
            </div>
          ))}
        </div>
        <div className="resume-section">
          <p className="eyebrow">COMPETÊNCIAS</p>
          <div className="resume-skills">
            {skills.map((skill) => <div key={skill.group}><h3>{skill.group}</h3><p>{skill.items.join(' · ')}</p></div>)}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function NotFound({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <section className="not-found">
      <p className="eyebrow">ERROR / 404</p>
      <h1>Rota não encontrada.</h1>
      <p>O endpoint existe apenas na sua imaginação.</p>
      <button className="button button-primary" onClick={() => onNavigate('/')}>Voltar ao início</button>
    </section>
  );
}

function App() {
  const { route, navigate } = useRoute();
  const content = useMemo(() => {
    const normalized = normalizePath(window.location.pathname);
    if (!routes.some((item) => normalizePath(item.path) === normalized)) return <NotFound onNavigate={navigate} />;
    switch (route) {
      case 'about': return <About />;
      case 'projects': return <Projects onNavigate={navigate} />;
      case 'open-source': return <OpenSource onNavigate={navigate} />;
      case 'works': return <Works />;
      case 'articles': return <Articles />;
      case 'contact': return <Contact />;
      case 'resume': return <Resume />;
      default: return <Home onNavigate={navigate} />;
    }
  }, [route]);

  return (
    <div className="app-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <Header route={route} onNavigate={navigate} />
      <main className="main-content">{content}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
