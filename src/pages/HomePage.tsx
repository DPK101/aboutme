import { useState } from 'react';
import { Link } from 'react-router-dom';
import { highlights, homeMetrics, profile, selectedWork, strengths } from '../data/profile';
import PortfolioPanel from '../components/PortfolioPanel';

export default function HomePage() {
  return (
    <div className="page page--home">
      <PortfolioPanel
        eyebrow="Home"
        title="Senior frontend engineer building scalable React products with performance, product clarity, and architectural depth."
        hideIntro
      >
        <div className="hero-composition">
          <div className="hero-composition__copy">
            <p className="hero-composition__name">Deepak Kumar</p>
            <h2>Senior Frontend Engineer</h2>
          </div>
        </div>
      </PortfolioPanel>
    </div>
  );
}