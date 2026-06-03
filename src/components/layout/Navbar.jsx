import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/common/ThemeToggle";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";
import { navLinks } from "@/config/navigation";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // Apply styling changes when scrolled past 20px
    setScrolled(latest > 20);

    // Hide navbar when scrolling down, show when scrolling up
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        id="navbar"
        variants={{
          visible: { y: 0 },
          hidden: { y: "-150%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-4 left-0 right-0 z-50 mx-auto w-full  px-4 sm:px-6 lg:px-8 duration-200",
          scrolled ? "px-0 w-[95%] sm:w-[90%] duration-200" : "w-full"
        )}
      >
        <div className="glass backdrop-blur-sm bg-background/60 dark:bg-background/40 shadow-lg transition-all duration-500 border border-border/50 rounded-full border-b-accent">
          <div className="flex items-center justify-between h-14 px-6">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <span className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors text-lg tracking-tight">
                Ishan Maiti
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.href}
                  end={link.href === "/"}
                  className={({ isActive }) =>
                    cn(
                      "relative text-[14px] font-medium transition-all duration-300",
                      isActive
                        ? "text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)] border px-4 py-2 rounded-2xl bg-accent"
                        : "text-muted-foreground hover:text-foreground hover:drop-shadow-[0_0_8px_hsl(var(--foreground)/0.3)]"
                    )
                  }
                >
                  {link.title}
                </NavLink>
              ))}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              
              {/* Mobile hamburger */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden rounded-full hover:bg-white/5"
                onClick={() => setMobileOpen((o) => !o)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
