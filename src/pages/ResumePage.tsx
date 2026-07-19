import PortfolioPanel from '../components/PortfolioPanel';
import { certifications, projectHighlights, resumeCapabilities, resumeExperience, resumeSkills } from '../data/profile';

export default function ResumePage() {
  return (
    <div className="page page--resume">
      <PortfolioPanel eyebrow="Resume" title="A concise view of 12+ years across AI products, SaaS platforms, frontend systems, and delivery quality.">
        <div className="resume-grid">
          <section className="resume-column">
            <h2>Software skills</h2>
            <ul className="resume-list">
              {resumeSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="resume-column">
            <h2>Experience</h2>
            <div className="timeline-list">
              {resumeExperience.map((item) => (
                <article key={item.title} className="timeline-item">
                  <p>{item.period}</p>
                  <h3>{item.title}</h3>
                  <span>{item.detail}</span>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-column">
            <h2>What I can do</h2>
            <ul className="resume-list resume-list--tight">
              {resumeCapabilities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h2 className="resume-column__secondary-title">Certifications</h2>
            <ul className="resume-list resume-list--tight">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="project-strip">
          {projectHighlights.map((project) => (
            <article key={project.name} className="project-strip__item">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </PortfolioPanel>
    </div>
  );
}