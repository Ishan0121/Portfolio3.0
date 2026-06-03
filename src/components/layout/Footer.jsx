import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Mail } from "lucide-react";
import SocialLinks from "@/components/common/SocialLinks";
import { navLinks } from "@/config/navigation";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Top fade line */}
      <div className="h-px w-full bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      <div className="glass border-none px-4 sm:px-8 lg:px-12 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5 w-fit group">
              <motion.div
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-[0_0_14px_hsl(var(--primary)/0.4)]"
              >
                IM
              </motion.div>
              <span className="font-semibold text-lg group-hover:text-primary transition-colors">
                Ishan Maiti
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Crafting digital experiences with clean code and thoughtful design.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase font-mono">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-colors duration-200" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground tracking-wide uppercase font-mono">Connect</h3>
            <SocialLinks size="md" />
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail size={13} />
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <motion.p
            className="text-xs text-muted-foreground flex items-center gap-1"
            whileHover={{ scale: 1.03 }}
          >
            Built with{" "}
            <Heart size={11} className="text-red-500 fill-red-500 mx-0.5 animate-pulse" />
            using React, Vite &amp; shadcn/ui
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
