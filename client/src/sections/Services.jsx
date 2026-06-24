// src/sections/Services.jsx
import { motion } from 'framer-motion';
import {
  FiLayers, FiGitBranch, FiServer, FiCpu,
  FiDatabase, FiSmartphone, FiZap, FiUploadCloud,
} from 'react-icons/fi';
import { services } from '../data/portfolio';
import './Services.css';

const ICONS = [FiLayers, FiGitBranch, FiServer, FiCpu, FiDatabase, FiSmartphone, FiZap, FiUploadCloud];

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <span className="eyebrow">// services</span>
        <h2 className="section-title">What I can build for you.</h2>

        <div className="services__grid">
          {services.map((service, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                className="services__card glass"
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: (i % 4) * 0.07 }}
              >
                <div className="services__icon">
                  <Icon size={22} />
                </div>
                <h3 className="services__title">{service.title}</h3>
                <p className="services__desc">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
