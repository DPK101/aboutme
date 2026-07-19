import { NavLink, Outlet } from 'react-router-dom';
import { profile } from '../data/profile';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Resume', to: '/resume' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Art', to: '/art' },
];

export default function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <nav className="site-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'site-nav__link site-nav__link--active' : 'site-nav__link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-footer">
              <div className="home-bottom-bar">
          <div className="home-bottom-bar__status">
            <span>{profile.location}</span>
            <span>{profile.phone}</span>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>
      </footer>
    </div>
  );
}