// src/components/Footer.jsx
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowUp } from 'react-icons/fi';
import { navLinks, profile } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo" onClick={(e) => scrollTo(e, '#home')}>
              <span className="footer__logo-bracket">{'<'}</span>
              {profile.name}
              <span className="footer__logo-bracket">{'/>'}</span>
            </a>
            <p className="footer__tagline">{profile.tagline}</p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={(e) => scrollTo(e, link.href)}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer__actions">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="footer__icon-btn" aria-label="GitHub">
              <FiGithub size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer__icon-btn" aria-label="LinkedIn">
              <FiLinkedin size={18} />
            </a>
            <a href={`mailto:${profile.email}`} className="footer__icon-btn" aria-label="Email">
              <FiMail size={18} />
            </a>
            <a href="/resume-piyush-gupta.pdf" download className="footer__icon-btn" aria-label="Download resume">
              <FiDownload size={18} />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} {profile.name}. All rights reserved.</p>
          <button className="footer__top-btn" onClick={scrollToTop} aria-label="Back to top">
            Back to top <FiArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
