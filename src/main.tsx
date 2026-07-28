import {
  StrictMode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode
} from 'react';
import { createPortal } from 'react-dom';
import { createRoot } from 'react-dom/client';
import {
  siteContent,
  technologyGroups,
  type Locale,
  type Project,
  type Work
} from './content';
import './styles.css';

type NavKey = 'home' | 'about' | 'projects' | 'open-source' | 'works' | 'articles' | 'contact';

const navItems: { key: NavKey; path: string }[] = [
  { key: 'home', path: '/' },
  { key: 'about', path: '/about' },
  { key: 'projects', path: '/projects' },
  { key: 'open-source', path: '/open-source' },
  { key: 'works', path: '/works' },
  { key: 'articles', path: '/articles' },
  { key: 'contact', path: '/contact' }
];

const navLabelKeys: Record<NavKey, keyof (typeof siteContent)['en']['ui']['nav']> = {
  home: 'home',
  about: 'about',
  projects: 'projects',
  'open-source': 'openSource',
  works: 'works',
  articles: 'articles',
  contact: 'contact'
};

const preferredLocaleKey = 'brunofelipe.dev:preferred-locale';

function cleanPath(value: string) {
  return value.replace(/\/+$/, '') || '/';
}

function localeFromPath(pathname: string): Locale {
  return pathname === '/pt-br' || pathname.startsWith('/pt-br/') ? 'pt-BR' : 'en';
}

function routeFromPath(pathname: string) {
  if (pathname === '/pt-br') return '/';
  return cleanPath(pathname.replace(/^\/pt-br/, '') || '/');
}

function localizedPath(locale: Locale, route: string) {
  const normalized = cleanPath(route);
  if (locale === 'pt-BR') return normalized === '/' ? '/pt-br' : `/pt-br${normalized}`;
  return normalized;
}

function navKeyFromRoute(route: string): NavKey {
  if (route.startsWith('/projects')) return 'projects';
  if (route.startsWith('/works')) return 'works';
  if (route.startsWith('/articles')) return 'articles';
  return navItems.find((item) => item.path === route)?.key ?? 'home';
}

function useRouter() {
  const [pathname, setPathname] = useState(() => cleanPath(window.location.pathname));
  const locale = localeFromPath(pathname);
  const route = routeFromPath(pathname);

  useEffect(() => {
    const onPopState = () => setPathname(cleanPath(window.location.pathname));
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    if (window.location.pathname !== '/') return;
    const stored = window.localStorage.getItem(preferredLocaleKey);
    const detected: Locale = stored === 'pt-BR' || stored === 'en'
      ? stored
      : navigator.languages.some((language) => language.toLowerCase().startsWith('pt'))
        ? 'pt-BR'
        : 'en';
    window.localStorage.setItem(preferredLocaleKey, detected);
    if (detected === 'pt-BR') {
      window.history.replaceState({}, '', '/pt-br');
      setPathname('/pt-br');
    }
  }, []);

  useEffect(() => {
    const content = siteContent[locale];
    const key = navKeyFromRoute(route);
    document.documentElement.lang = locale;
    document.title = `${content.ui.nav[navLabelKeys[key]]} — ${content.profile.name}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [locale, route]);

  function navigate(path: string) {
    if (/^(https?:|mailto:)/.test(path)) {
      window.location.href = path;
      return;
    }
    window.history.pushState({}, '', path);
    setPathname(cleanPath(path));
  }

  function changeLocale(nextLocale: Locale) {
    window.localStorage.setItem(preferredLocaleKey, nextLocale);
    navigate(localizedPath(nextLocale, route));
  }

  return { locale, route, navigate, changeLocale };
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

function LanguageSwitcher({
  locale,
  label,
  onChange
}: {
  locale: Locale;
  label: string;
  onChange: (locale: Locale) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const nextLocale: Locale = locale === 'en' ? 'pt-BR' : 'en';

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div className="language-switcher" ref={ref}>
      <button
        type="button"
        aria-label={label}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true">{locale === 'en' ? '🇺🇸' : '🇧🇷'}</span>
        <span>{locale === 'en' ? 'EN' : 'PT'}</span>
        <i aria-hidden="true">⌄</i>
      </button>
      {open ? (
        <div className="language-menu" role="menu">
          <button
            type="button"
            role="menuitem"
            onClick={() => {
              onChange(nextLocale);
              setOpen(false);
            }}
          >
            <span aria-hidden="true">{nextLocale === 'en' ? '🇺🇸' : '🇧🇷'}</span>
            {nextLocale === 'en' ? 'English' : 'Português'}
          </button>
        </div>
      ) : null}
    </div>
  );
}

const resumeFiles = [
  {
    language: 'EN',
    label: 'English',
    href: '/resume/bruno-da-cunha-felipe-resume-en.pdf'
  },
  {
    language: 'PT',
    label: 'Português',
    href: '/resume/bruno-da-cunha-felipe-curriculo-pt-br.pdf'
  }
];

function ResumeMenu({ label, compact = false }: { label: string; compact?: boolean }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ right: 0, top: 0 });

  useEffect(() => {
    const close = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!wrapperRef.current?.contains(target) && !dropdownRef.current?.contains(target)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', escape);
    };
  }, []);

  useLayoutEffect(() => {
    if (!open) return;
    const update = () => {
      const bounds = buttonRef.current?.getBoundingClientRect();
      if (bounds) setPosition({ right: window.innerWidth - bounds.right, top: bounds.bottom + 10 });
    };
    update();
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, true);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update, true);
    };
  }, [open]);

  return (
    <div className="resume-menu-wrap" ref={wrapperRef}>
      <button
        className={compact ? 'resume-trigger compact' : 'resume-trigger'}
        ref={buttonRef}
        type="button"
        aria-label={label}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span aria-hidden="true">↓</span>
        {compact ? 'CV' : label}
      </button>
      {open ? createPortal(
        <div
          className="resume-dropdown"
          ref={dropdownRef}
          role="menu"
          style={position}
        >
          {resumeFiles.map((file) => (
            <a
              key={file.language}
              href={file.href}
              download
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              <span>{file.label}</span>
              <small>{file.language} PDF</small>
            </a>
          ))}
        </div>,
        document.body
      ) : null}
    </div>
  );
}

function Header({
  active,
  locale,
  navigate,
  changeLocale
}: {
  active: NavKey;
  locale: Locale;
  navigate: (path: string) => void;
  changeLocale: (locale: Locale) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const content = siteContent[locale];
  const { profile, ui } = content;

  return (
    <header className="site-header">
      <div className="header-tools">
        <LanguageSwitcher locale={locale} label={ui.labels.language} onChange={changeLocale} />
      </div>

      <div className="header-profile">
        <RouteLink href={localizedPath(locale, '/')} navigate={navigate} className="avatar">
          <img src="/images/bruno.jpg" alt={profile.name} width="150" height="150" />
          <span className="avatar-status" aria-label={ui.labels.available} />
        </RouteLink>
        <RouteLink href={localizedPath(locale, '/')} navigate={navigate} className="profile-name">
          {profile.name}
        </RouteLink>
      </div>

      <button
        className="mobile-menu"
        type="button"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label={ui.labels.mainNavigation}>
        {navItems.map((item) => (
          <RouteLink
            key={item.key}
            href={localizedPath(locale, item.path)}
            navigate={(path) => {
              navigate(path);
              setMenuOpen(false);
            }}
            className={active === item.key ? 'nav-link active' : 'nav-link'}
          >
            {ui.nav[navLabelKeys[item.key]]}
          </RouteLink>
        ))}
        <ResumeMenu label={ui.labels.downloadResume} />
      </nav>
    </header>
  );
}

function SiteEffects() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    let frame = 0;
    const move = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
        document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
        document.documentElement.style.setProperty('--pointer-opacity', '1');
      });
    };
    const leave = () => document.documentElement.style.setProperty('--pointer-opacity', '0');
    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('mouseleave', leave);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, []);

  return <div className="pointer-effect" aria-hidden="true" />;
}

function Footer({ locale }: { locale: Locale }) {
  const { profile, ui } = siteContent[locale];
  return (
    <footer className="site-footer">
      <div>
        <p>© {new Date().getFullYear()} {profile.name}.</p>
        <span>{ui.footer}</span>
      </div>
      <nav aria-label={ui.labels.externalLinks}>
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

function TechBanner({ locale }: { locale: Locale }) {
  const { banner } = siteContent[locale].ui;
  return (
    <section className="tech-banner" aria-label={banner.description}>
      <img className="banner-art" src="/images/hero-workspace.png" alt="" aria-hidden="true" />
      <div className="banner-shade" aria-hidden="true" />
      <div className="banner-copy">
        <p>{banner.eyebrow}</p>
        <h2>{banner.title}</h2>
        <span>{banner.description}</span>
      </div>
      <div className="cloud-providers" aria-label="Cloud providers">
        <div><img src="/images/brands/aws.png" alt="AWS" /></div>
        <div><img src="/images/brands/digitalocean.svg" alt="DigitalOcean" /><span>DigitalOcean</span></div>
        <div><img src="/images/brands/cloudflare.svg" alt="Cloudflare" /><span>Cloudflare</span></div>
      </div>
      <div className="technology-matrix">
        {technologyGroups.map((group) => (
          <div className={`technology-group ${group.key}`} key={group.key}>
            <strong>{group.label}</strong>
            <div>
              {group.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  navigate,
  label
}: {
  project: Project;
  navigate: (path: string) => void;
  label: string;
}) {
  return (
    <RouteLink href={project.slug} navigate={navigate} className="content-card project-card">
      <div className="project-visual" aria-hidden="true">
        <span className="window-bar"><i /><i /><i /></span>
        <span className="visual-path">src/{project.slug.split('/').pop()}</span>
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
        <span className="card-link">{label} <Arrow /></span>
      </div>
    </RouteLink>
  );
}

function WorkCard({
  work,
  navigate,
  label
}: {
  work: Work;
  navigate: (path: string) => void;
  label: string;
}) {
  return (
    <RouteLink href={work.slug} navigate={navigate} className="content-card work-card">
      <div className="company-mark" aria-hidden="true">
        {work.company.split(' ').map((word) => word[0]).slice(0, 2).join('')}
      </div>
      <span className="card-kicker">{work.dateRange}</span>
      <h3>{work.company}</h3>
      <strong>{work.title}</strong>
      <p>{work.summary}</p>
      <span className="card-link">{label} <Arrow /></span>
    </RouteLink>
  );
}

function ContributionCard({
  item,
  publicLabel
}: {
  item: (typeof siteContent)['en']['contributions'][number];
  publicLabel: string;
}) {
  return (
    <article className="content-card contribution-card">
      <div className="repo-line">
        <span className="repo-icon" aria-hidden="true">&lt;/&gt;</span>
        <span>{publicLabel}</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </article>
  );
}

function ArticleCard({
  article,
  comingSoon
}: {
  article: (typeof siteContent)['en']['articles'][number];
  comingSoon: string;
}) {
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
        <span className="card-link muted">{comingSoon}</span>
      </div>
    </article>
  );
}

function Home({ locale, navigate }: { locale: Locale; navigate: (path: string) => void }) {
  const { profile, projects, works, contributions, articles, ui } = siteContent[locale];
  return (
    <>
      <section className="home-intro">
        <TechBanner locale={locale} />
        <p className="terminal-label">~/profile <span className="cursor">_</span></p>
        <h1>{profile.headline}</h1>
        <div className="profile-copy">
          {profile.about.slice(0, 2).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <p className="location-line">{ui.home.locationPrefix} {profile.location}.</p>
        <p className="social-line">
          {ui.home.findMe}{' '}
          <a href={profile.links[0].href} target="_blank" rel="noreferrer">{profile.links[0].label}</a>
          {' '}{ui.home.or}{' '}
          <a href={profile.links[1].href} target="_blank" rel="noreferrer">{profile.links[1].label}</a>.
        </p>
      </section>

      <section className="status-board">
        <div><span>{ui.labels.currentFocus}</span><strong>.NET · PHP · APIs</strong></div>
        <div><span>{ui.labels.studying}</span><strong>Cybersecurity · Pentest</strong></div>
        <div><span>{ui.labels.sideQuest}</span><strong>Game Development</strong></div>
        <div><span>{ui.labels.status}</span><strong className="online"><i /> {profile.availability}</strong></div>
      </section>

      <section className="home-section">
        <SectionTitle
          title={ui.labels.featuredProjects}
          action={ui.labels.viewProjects}
          actionPath={localizedPath(locale, '/projects')}
          navigate={navigate}
        />
        <div className="card-grid three">
          {projects.filter((item) => item.featured).map((project) => (
            <ProjectCard
              key={project.slug}
              project={{ ...project, slug: localizedPath(locale, `/projects/${project.slug}`) }}
              navigate={navigate}
              label={ui.labels.viewProject}
            />
          ))}
        </div>
      </section>

      <section className="home-section">
        <SectionTitle
          title={ui.labels.openSourceLabs}
          action={ui.labels.viewContributions}
          actionPath={localizedPath(locale, '/open-source')}
          navigate={navigate}
        />
        <div className="card-grid two">
          {contributions.slice(0, 2).map((item) => (
            <ContributionCard key={item.title} item={item} publicLabel={ui.labels.publicLab} />
          ))}
        </div>
      </section>

      <section className="home-section">
        <SectionTitle
          title={ui.labels.experience}
          action={ui.labels.viewExperience}
          actionPath={localizedPath(locale, '/works')}
          navigate={navigate}
        />
        <div className="card-grid three">
          {works.slice(0, 3).map((work) => (
            <WorkCard
              key={work.slug}
              work={{ ...work, slug: localizedPath(locale, `/works/${work.slug}`) }}
              navigate={navigate}
              label={ui.labels.viewWork}
            />
          ))}
        </div>
      </section>

      <section className="home-section">
        <SectionTitle
          title={ui.labels.articlesNotes}
          action={ui.labels.viewArticles}
          actionPath={localizedPath(locale, '/articles')}
          navigate={navigate}
        />
        <div className="card-grid three">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} comingSoon={ui.labels.comingSoon} />
          ))}
        </div>
      </section>
    </>
  );
}

function About({ locale }: { locale: Locale }) {
  const { profile, skillGroups, education, ui } = siteContent[locale];
  return (
    <>
      <PageIntro title={ui.pages.about.title} description={ui.pages.about.description} />
      <section className="prose-block">
        {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </section>

      <section className="home-section">
        <SectionTitle title={ui.labels.skills} />
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
        <SectionTitle title={ui.labels.education} />
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

function Projects({ locale, navigate }: { locale: Locale; navigate: (path: string) => void }) {
  const { projects, ui } = siteContent[locale];
  return (
    <>
      <PageIntro title={ui.pages.projects.title} description={ui.pages.projects.description} />
      <section className="home-section page-list">
        <div className="card-grid three">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={{ ...project, slug: localizedPath(locale, `/projects/${project.slug}`) }}
              navigate={navigate}
              label={ui.labels.viewProject}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function OpenSource({ locale }: { locale: Locale }) {
  const { contributions, ui } = siteContent[locale];
  return (
    <>
      <PageIntro title={ui.pages.openSource.title} description={ui.pages.openSource.description} />
      <section className="home-section page-list">
        <div className="card-grid two">
          {contributions.map((item) => (
            <ContributionCard key={item.title} item={item} publicLabel={ui.labels.publicLab} />
          ))}
        </div>
      </section>
    </>
  );
}

function Works({ locale, navigate }: { locale: Locale; navigate: (path: string) => void }) {
  const { works, ui } = siteContent[locale];
  return (
    <>
      <PageIntro title={ui.pages.works.title} description={ui.pages.works.description} />
      <section className="home-section page-list">
        <SectionTitle title={ui.labels.trajectory} />
        <div className="card-grid two">
          {works.map((work) => (
            <WorkCard
              key={work.slug}
              work={{ ...work, slug: localizedPath(locale, `/works/${work.slug}`) }}
              navigate={navigate}
              label={ui.labels.viewWork}
            />
          ))}
        </div>
      </section>
    </>
  );
}

function Articles({ locale }: { locale: Locale }) {
  const { articles, ui } = siteContent[locale];
  return (
    <>
      <PageIntro title={ui.pages.articles.title} description={ui.pages.articles.description} />
      <section className="home-section page-list">
        <div className="card-grid two">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} comingSoon={ui.labels.comingSoon} />
          ))}
        </div>
      </section>
    </>
  );
}

function Contact({ locale }: { locale: Locale }) {
  const [opened, setOpened] = useState(false);
  const { profile, ui } = siteContent[locale];
  const copy = ui.pages.contact;

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio contact - ${String(data.get('name') || '')}`);
    const body = encodeURIComponent(`${String(data.get('message') || '')}\n\nContact: ${String(data.get('email') || '')}`);
    setOpened(true);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <PageIntro title={copy.title} description={copy.description} />
      <section className="contact-card">
        <h2>{copy.formTitle}</h2>
        <form onSubmit={submit}>
          <label>
            {copy.name}
            <input name="name" type="text" placeholder={copy.namePlaceholder} required />
          </label>
          <label>
            {copy.email}
            <input name="email" type="email" placeholder={copy.emailPlaceholder} required />
          </label>
          <label>
            {copy.message}
            <textarea name="message" rows={6} placeholder={copy.messagePlaceholder} required />
          </label>
          <button className="primary-button" type="submit">{copy.submit} <Arrow /></button>
          {opened ? <p className="form-status">{copy.opened}</p> : null}
        </form>
      </section>
      <section className="home-section contact-alternatives">
        <SectionTitle title={copy.alternatives} />
        <div className="card-grid three">
          <article className="content-card small-card">
            <span className="card-kicker">E-mail</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <p>{copy.emailDescription}</p>
          </article>
          <article className="content-card small-card">
            <span className="card-kicker">LinkedIn</span>
            <a href={profile.links[0].href} target="_blank" rel="noreferrer">brunodcfelipe</a>
            <p>{copy.linkedinDescription}</p>
          </article>
          <article className="content-card small-card">
            <span className="card-kicker">{locale === 'en' ? 'Location' : 'Localização'}</span>
            <strong>Bauru, SP</strong>
            <p>{copy.locationDescription}</p>
          </article>
        </div>
      </section>
    </>
  );
}

function ProjectDetail({
  project,
  locale,
  navigate
}: {
  project: Project;
  locale: Locale;
  navigate: (path: string) => void;
}) {
  const ui = siteContent[locale].ui;
  return (
    <>
      <PageIntro title={project.title} description={project.description} />
      <article className="detail-page">
        <RouteLink href={localizedPath(locale, '/projects')} navigate={navigate} className="back-link">
          ← {ui.labels.backProjects}
        </RouteLink>
        <p className="detail-kicker">{project.category}</p>
        {project.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </article>
    </>
  );
}

function WorkDetail({
  work,
  locale,
  navigate
}: {
  work: Work;
  locale: Locale;
  navigate: (path: string) => void;
}) {
  const ui = siteContent[locale].ui;
  return (
    <>
      <PageIntro title={work.company} description={`${work.title} · ${work.dateRange}`} />
      <article className="detail-page">
        <RouteLink href={localizedPath(locale, '/works')} navigate={navigate} className="back-link">
          ← {ui.labels.backWorks}
        </RouteLink>
        <p className="detail-kicker">{work.location}</p>
        <p>{work.summary}</p>
        {work.bullets?.length ? <ul>{work.bullets.map((item) => <li key={item}>{item}</li>)}</ul> : null}
        <div className="tags">{work.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
      </article>
    </>
  );
}

function NotFound({ locale, navigate }: { locale: Locale; navigate: (path: string) => void }) {
  const ui = siteContent[locale].ui;
  return (
    <section className="not-found">
      <p className="terminal-label">HTTP 404</p>
      <h1>{ui.notFound}</h1>
      <button className="primary-button" onClick={() => navigate(localizedPath(locale, '/'))}>{ui.backHome}</button>
    </section>
  );
}

function PageRouter({
  locale,
  route,
  navigate
}: {
  locale: Locale;
  route: string;
  navigate: (path: string) => void;
}) {
  const content = siteContent[locale];
  if (route.startsWith('/projects/')) {
    const slug = route.replace('/projects/', '');
    const project = content.projects.find((item) => item.slug === slug);
    return project ? <ProjectDetail project={project} locale={locale} navigate={navigate} /> : <NotFound locale={locale} navigate={navigate} />;
  }
  if (route.startsWith('/works/')) {
    const slug = route.replace('/works/', '');
    const work = content.works.find((item) => item.slug === slug);
    return work ? <WorkDetail work={work} locale={locale} navigate={navigate} /> : <NotFound locale={locale} navigate={navigate} />;
  }
  switch (route) {
    case '/': return <Home locale={locale} navigate={navigate} />;
    case '/about': return <About locale={locale} />;
    case '/projects': return <Projects locale={locale} navigate={navigate} />;
    case '/open-source': return <OpenSource locale={locale} />;
    case '/works': return <Works locale={locale} navigate={navigate} />;
    case '/articles': return <Articles locale={locale} />;
    case '/contact': return <Contact locale={locale} />;
    default: return <NotFound locale={locale} navigate={navigate} />;
  }
}

function App() {
  const { locale, route, navigate, changeLocale } = useRouter();
  return (
    <div className="app">
      <div className="grid-background" aria-hidden="true" />
      <SiteEffects />
      <div className="site-container">
        <Header
          active={navKeyFromRoute(route)}
          locale={locale}
          navigate={navigate}
          changeLocale={changeLocale}
        />
        <main>
          <PageRouter locale={locale} route={route} navigate={navigate} />
        </main>
        <Footer locale={locale} />
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
