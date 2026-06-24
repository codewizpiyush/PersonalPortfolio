// src/sections/Projects.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFileText } from 'react-icons/fi';
import { projects } from '../data/portfolio';
import './Projects.css';

const FILTERS = ['All', 'Full Stack', 'AI', 'Frontend'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.filter.includes(filter));

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="eyebrow">// featured projects</span>
        <h2 className="section-title">Things I've built end to end.</h2>

        <div className="projects__filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`projects__filter ${filter === f ? 'is-active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.id}
                className="projects__card glass"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
              >
                <div className="projects__card-top">
                  <h3 className="projects__title">{project.title}</h3>
                  <p className="projects__subtitle">{project.subtitle}</p>
                </div>

                <p className="projects__desc">{project.description}</p>

                <div className="projects__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="projects__tech-chip">{t}</span>
                  ))}
                </div>

                <ul className="projects__features">
                  {project.features.slice(0, 4).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <div className="projects__links">
                  <a href={project.links.demo} className="btn btn--primary btn--sm" target="_blank" rel="noopener noreferrer">
                    Live Demo <FiExternalLink size={14} />
                  </a>
                  <a href={project.links.github} className="btn btn--ghost btn--sm" target="_blank" rel="noopener noreferrer">
                    GitHub <FiGithub size={14} />
                  </a>
                  {project.links.caseStudy && (
                    <a href={project.links.caseStudy} className="btn btn--ghost btn--sm" target="_blank" rel="noopener noreferrer">
                      Case Study <FiFileText size={14} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
