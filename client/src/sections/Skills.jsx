// src/sections/Skills.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { skillGroups } from '../data/portfolio';
import './Skills.css';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillGroups[0].category);
  const activeGroup = skillGroups.find((g) => g.category === activeCategory);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="eyebrow">// skills</span>
        <h2 className="section-title">Tools I reach for, and how often.</h2>
        <p className="section-sub">Proficiency is self-assessed against real project use, not certifications.</p>

        <div className="skills__tabs" role="tablist" aria-label="Skill categories">
          {skillGroups.map((group) => (
            <button
              key={group.category}
              role="tab"
              aria-selected={activeCategory === group.category}
              className={`skills__tab ${activeCategory === group.category ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(group.category)}
            >
              {group.category}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          className="skills__grid"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeGroup.skills.map((skill, i) => (
            <div className="skills__bar-item" key={skill.name}>
              <div className="skills__bar-label">
                <span>{skill.name}</span>
                <span className="skills__bar-pct">{skill.level}%</span>
              </div>
              <div className="skills__bar-track">
                <motion.div
                  className="skills__bar-fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
