import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'WORK', target: 'work' },
    { name: 'STACK', target: 'stack' },
    { name: 'EXPERIENCE', target: 'experience' },
    { name: 'CONTACT', target: 'contact' },
  ];

  const handleNavClick = (target: string) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to homepage with hash
      navigate(`/#${target}`);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-strong border-b border-glass-border py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo/Wordmark */}
        <Link
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-display font-bold text-lg tracking-wider text-ink hover:text-ink-dim transition-colors"
        >
          RISHABH SHARMA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 font-mono text-xs tracking-widest text-ink-dim">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link.target)}
                  className="hover:text-ink transition-colors relative py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          <a
            href="https://drive.google.com/file/d/1_TSEuYMucfqFTDUs2-YR2tvL9uXo5ZBh/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="glass hover:bg-glass-strong border border-glass-border text-ink font-mono text-xs tracking-widest py-2 px-4 transition-colors flex items-center gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink focus-visible:outline-offset-2"
          >
            RESUME <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-ink hover:text-ink-dim focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink p-1"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-[100%] left-0 right-0 glass-strong border-b border-glass-border overflow-hidden"
          >
            <div className="flex flex-col space-y-6 p-6 font-mono text-xs tracking-widest text-ink-dim">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.name}
                  initial={{ x: -12, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.04 + 0.1, duration: 0.2, ease: 'easeOut' }}
                  onClick={() => handleNavClick(link.target)}
                  className="text-left py-2 hover:text-ink border-b border-line transition-colors"
                >
                  {link.name}
                </motion.button>
              ))}
              <motion.a
                initial={{ x: -12, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.04 + 0.1, duration: 0.2, ease: 'easeOut' }}
                href="https://drive.google.com/file/d/1_TSEuYMucfqFTDUs2-YR2tvL9uXo5ZBh/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="glass hover:bg-glass-strong border border-glass-border text-ink text-center py-3 px-4 transition-colors flex items-center justify-center gap-2"
              >
                RESUME <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
