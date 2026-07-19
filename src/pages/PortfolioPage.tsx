import PortfolioPanel from '../components/PortfolioPanel';
import { portfolioPlaceholders } from '../data/profile';

export default function PortfolioPage() {
  return (
    <div className="page page--portfolio">
      <PortfolioPanel eyebrow="Portfolio" title="Selected work placeholders kept in place for future case studies.">
        <div className="portfolio-placeholder-grid">
          {portfolioPlaceholders.map((item, index) => (
            <article key={item.title} className="placeholder-card">
              <p className="section-label">Case study {String(index + 1).padStart(2, '0')}</p>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <span>Placeholder content</span>
            </article>
          ))}
        </div>
      </PortfolioPanel>
    </div>
  );
}