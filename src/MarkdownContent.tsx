import { Children, isValidElement, useEffect, useId, useState, type ReactNode } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

function MermaidDiagram({ chart }: { chart: string }) {
  const reactId = useId();
  const [svg, setSvg] = useState('');
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    const diagramId = `mermaid-${reactId.replace(/[^a-zA-Z0-9-]/g, '')}`;

    void import('mermaid').then(async ({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        securityLevel: 'strict',
        theme: 'dark',
        themeVariables: {
          primaryColor: '#171a10',
          primaryTextColor: '#f2f3ed',
          primaryBorderColor: '#dff000',
          lineColor: '#b7bf76',
          secondaryColor: '#10120c',
          tertiaryColor: '#080906'
        }
      });

      try {
        const result = await mermaid.render(diagramId, chart);
        if (active) setSvg(result.svg);
      } catch {
        if (active) setFailed(true);
      }
    });

    return () => { active = false; };
  }, [chart, reactId]);

  if (failed) return <pre className="markdown-code"><code>{chart}</code></pre>;
  if (!svg) return <div className="mermaid-loading">Rendering diagram…</div>;
  return <div className="mermaid-diagram" dangerouslySetInnerHTML={{ __html: svg }} />;
}

function normalizeMarkdown(source: string) {
  return source
    .replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '')
    .replace(/^# .+\r?\n+/, '')
    .replaceAll(
      'https://raw.githubusercontent.com/azumamagus/GetCNPJ-php/main/logo.png',
      '/images/open-source/getcnpj-php.png'
    );
}

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }], rehypeHighlight]}
        components={{
          a({ href, children, ...props }) {
            const external = href?.startsWith('http');
            return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} {...props}>{children}</a>;
          },
          img({ alt, ...props }) {
            return <img alt={alt || ''} loading="lazy" {...props} />;
          },
          table({ children }) {
            return <div className="markdown-table-wrap"><table>{children}</table></div>;
          },
          pre({ children }) {
            const child = Children.only(children) as ReactNode;
            if (isValidElement<{ className?: string; children?: ReactNode }>(child)
              && child.props.className === 'language-mermaid') {
              return <MermaidDiagram chart={String(child.props.children || '').trim()} />;
            }
            return <pre className="markdown-code">{children}</pre>;
          }
        }}
      >
        {normalizeMarkdown(content)}
      </ReactMarkdown>
    </div>
  );
}
