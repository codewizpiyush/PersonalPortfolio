// src/components/LoadingScreen.jsx
import { motion } from 'framer-motion';
import './LoadingScreen.css';

export default function LoadingScreen() {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className="loading-screen__terminal">
        <span className="loading-screen__prompt">piyush@portfolio:~$</span>
        <span className="loading-screen__cmd"> npm run build</span>
        <div className="loading-screen__bar-track">
          <motion.div
            className="loading-screen__bar-fill"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
