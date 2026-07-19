import PortfolioPanel from '../components/PortfolioPanel';
import { aboutPoints, profile } from '../data/profile';

export default function AboutPage() {
  return (
    <div className="page page--about-route">
      <PortfolioPanel eyebrow="About" title="Frontend engineering shaped by long-horizon system thinking and hard product delivery.">
        <div className="bio-layout">
          <div className="bio-layout__copy">
            <p>{profile.summary}</p>
            {aboutPoints.map((point) => (
              <p key={point}>{point}</p>
            ))}
            <div className="bio-layout__meta">
              <span>{profile.location}</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
          <div className="bio-layout__visual" aria-hidden="true">
            <div className="bio-layout__portrait-mark">{profile.initials}</div>
          </div>
        </div>
      </PortfolioPanel>
    </div>
  );
}