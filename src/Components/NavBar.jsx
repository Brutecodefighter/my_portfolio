import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom"; // ADD THIS

const NAV_LINKS = [
  { name: "Home", to: "/" },
  { name: "Education", to: "/education" },
  { name: "Skills", to: "/skills" },
  { name: "Projects", to: "/projects" },
  { name: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // React Router location

  // Nav underline fix: active = current path OR current hash
  const active = React.useMemo(() => {
    if (location.hash && NAV_LINKS.some(l => l.to.startsWith('#'))) {
      return location.hash;
    }
    // Find first nav link matching the current pathname
    return (
      NAV_LINKS.find(link => link.to === location.pathname)
        ?.to ?? NAV_LINKS[0].to
    );
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.2);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-gray-900 shadow-lg backdrop-blur"
          : "bg-transparent"
      }`}
      initial={false}
      animate={{ backgroundColor: scrolled ? "rgba(17,17,23,0.96)" : "rgba(0,0,0,0)" }}
      style={{
        transition: "background-color 0.3s cubic-bezier(0.4,0,0.2,1)"
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-cyan-400 font-extrabold text-2xl tracking-wider select-none"
          >
          CHETHAN M
          </motion.div>
          <ul className="relative hidden md:flex space-x-8 text-lg items-center">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.to;
              const isHover = hovered === link.to;
              // Use <a> for hash links, <Link> for page navigation
              const isHash = link.to.startsWith("#");
              const Comp = isHash ? "a" : "a"; // If you use React Router's <Link/>, replace with Link component
              const linkProps = isHash
                ? { href: link.to }
                : { href: link.to }; // For client-side <Link to={link.to}> if using react-router-dom
              return (
                <li key={link.to} className="relative">
                  <Comp
                    {...linkProps}
                    className={
                      "px-2 py-1 font-medium transition-colors duration-150 no-underline " +
                      (isActive ? "text-cyan-400" : "hover:text-cyan-400 text-white")
                    }
                    onClick={() => {
                      setMobileOpen(false);
                      if (isHash) window.location.hash = link.to;
                    }}
                    onMouseEnter={() => setHovered(link.to)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {link.name}
                    {(isActive || isHover) && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 -bottom-1 h-1 rounded bg-cyan-400"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </Comp>
                </li>
              );
            })}
          </ul>
          {/* Hamburger / Close Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="focus:outline-none"
              aria-label={mobileOpen ? "Close mobile menu" : "Open mobile menu"}
            >
              {!mobileOpen ? (
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              ) : (
                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.ul
            className="md:hidden px-4 pb-4 flex flex-col bg-gray-900 bg-opacity-95 space-y-2 text-lg shadow-[0_4px_20px_rgba(0,0,0,.25)] absolute left-0 w-full"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = active === link.to;
              const isHover = hovered === link.to;
              const isHash = link.to.startsWith("#");
              const Comp = isHash ? "a" : "a"; // Swap for <Link/> if needed
              const linkProps = isHash
                ? { href: link.to }
                : { href: link.to };
              return (
                <li key={link.to} className="relative">
                  <Comp
                    {...linkProps}
                    className={
                      "block px-4 py-2 font-medium transition-colors duration-150 " +
                      (isActive ? "text-cyan-400" : "hover:text-cyan-400 text-white")
                    }
                    onClick={() => {
                      setMobileOpen(false);
                      if (isHash) window.location.hash = link.to;
                    }}
                    onMouseEnter={() => setHovered(link.to)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {link.name}
                    {(isActive || isHover) && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 right-0 -bottom-1 h-1 rounded bg-cyan-400"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </Comp>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
