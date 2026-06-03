import { socialLinks } from "@/data/social";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function SocialLinks({ size = "md", className }) {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3", className)}>
        {socialLinks.map(({ id, label, url, icon: Icon }) => (
          <Tooltip key={id}>
            <TooltipTrigger asChild>
              <Button variant="outline" size="lg" asChild className="p-3">
                <motion.a
                  href={url}
                  target={url.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.18, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 450, damping: 15 }}
                >
                  <Icon
                    className={
                      size === "sm"
                        ? "size-3.5"
                        : size === "md"
                        ? "size-4.5"
                        : "size-6"
                    }
                  />
                </motion.a>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}