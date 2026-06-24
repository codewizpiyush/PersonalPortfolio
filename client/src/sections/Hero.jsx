// src/sections/Hero.jsx
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import ParticleField from '../components/ParticleField';
import { profile, stats } from '../data/portfolio';
import { useCountUp } from '../hooks/useCountUp';
import './Hero.css';

const TYPE_WORDS = profile.roles;

function TypingText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPE_WORDS[wordIndex];
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % TYPE_WORDS.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex]);

  return (
    <span className="hero__typing">
      {text}
      <span className="hero__caret" aria-hidden="true" />
    </span>
  );
}

function StatItem({ stat }) {
  const { ref, value } = useCountUp(stat.value);
  return (
    <div className="hero__stat" ref={ref}>
      <span className="hero__stat-value">
        {value}
        {stat.suffix}
      </span>
      <span className="hero__stat-label">{stat.label}</span>
    </div>
  );
}

export default function Hero() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <ParticleField />
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="container hero__grid">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="eyebrow">// available for hire</span>

          <h1 className="hero__name">{profile.name}</h1>

          <h2 className="hero__role">
            <TypingText />
          </h2>

          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__cta-row">
            <a href="#projects" className="btn btn--primary" onClick={(e) => scrollTo(e, '#projects')}>
              View Projects <FiArrowRight />
            </a>
            <a href="https://drive.google.com/file/d/1k2yW-bY7LdryqpcIAJ8CCGuEc1EwWTR5/view?usp=sharing" className="btn btn--ghost" download>
              Download Resume <FiDownload />
            </a>
            <a href="#contact" className="btn btn--ghost" onClick={(e) => scrollTo(e, '#contact')}>
              Contact Me <FiMail />
            </a>
          </div>

          <div className="hero__socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              <FiGithub size={18} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <FiLinkedin size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="hero__terminal">
            <div className="hero__terminal-bar">
              <span className="hero__dot hero__dot--red" />
              <span className="hero__dot hero__dot--yellow" />
              <span className="hero__dot hero__dot--green" />
              <span className="hero__terminal-title">GET /api/piyush</span>
            </div>
            <div className="hero__terminal-content">
              <div className="hero__avatar-wrap">
                <img
                  src="/profile-photo-placeholder.svg"
                  alt="Piyush Gupta"
                  className="hero__avatar"
                />
              </div>
              <pre className="hero__terminal-body">
{`> GET /api/piyush HTTP/1.1
< 200 OK

{
  "name": "Piyush Gupta",
  "role": "MERN Stack Developer",
  "stack": [
    "React.js", "Node.js",
    "Express.js", "MongoDB"
  ],
  "specialty": "AI Integration",
  "status": "open_to_work",
  "location": "Indore, India"
}`}
              </pre>
            </div>
          </div>

          <div className="hero__icons-orbit" aria-hidden="true">
            {['React', 'Node.js', 'MongoDB', 'Express', 'JS', 'Gemini', 'GitHub'].map((tech, i) => (
              <span
                key={tech}
                className="hero__icon-chip"
                style={{ '--i': i, '--n': 7 }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="container hero__stats-row">
        {stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}
