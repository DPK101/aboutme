import type { ReactNode } from 'react';

interface PortfolioPanelProps {
  eyebrow: string;
  title: string;
  children: ReactNode;
  hideIntro?: boolean;
}

export default function PortfolioPanel({ eyebrow, title, children, hideIntro = false }: PortfolioPanelProps) {
  return (
    <section className="portfolio-panel">
      {hideIntro ? null : (
        <div className="portfolio-panel__intro">
          <p className="section-label">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
      )}
      <div className="portfolio-panel__body">{children}</div>
    </section>
  );
}