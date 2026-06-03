import { useState } from "react";
import { motion } from "framer-motion";
import { skillsData } from "@/data/skills";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Slide-in variants based on the live site's behavior
const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function SkillsPage() {
  const [view, setView] = useState("grid"); // "grid" or "tree"

  return (
    <div className="flex flex-col items-center">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 opacity-30 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, var(--border) 2px, transparent 1px) 50% 50% / 40px 40px, linear-gradient(var(--border) 2px, transparent 1px) 50% 50% / 40px 40px`
        }}>
      </div>
      
      <main className="flex-1 px-10 container select-none w-full max-w-6xl mx-auto">
        <div className="h-10"></div>
        <section className="py-12 sm:py-16 flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-10 h-[200px] lg:h-[400px] w-[200px] lg:w-[400px] mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg opacity-20 blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="skills visual" 
              className="object-cover rounded-lg absolute inset-0 w-full h-full"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-16 w-full z-20"
          >
            <Tabs defaultValue="grid" className="w-[400px] flex justify-center items-center" onValueChange={setView}>
              <TabsList className="glass border border-white/10 shadow-lg bg-blue-900/10 dark:bg-blue-900/20 p-1 h-12 rounded-full flex ">
                <TabsTrigger value="grid" className="rounded-full px-6 text-sm font-medium transition-all data-[state=active]:bg-primary/20 data-[state=active]:text-foreground text-muted-foreground w-32 ">Grid View</TabsTrigger>
                <TabsTrigger value="tree" className="rounded-full px-6 text-sm font-medium transition-all data-[state=active]:bg-primary/20 data-[state=active]:text-foreground text-muted-foreground w-32">Tree View</TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-16 w-full max-w-4xl"
          >
            {skillsData.map((category, index) => (
              <div key={index} className="space-y-6 overflow-hidden">
                <h3 className="text-2xl font-semibold">{category.name}</h3>
                
                {view === "grid" ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.skills.map((skill, i) => (
                      <motion.div 
                        key={i}
                        variants={i % 2 === 0 ? slideLeft : slideRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="overflow-hidden"
                      >
                        <Card className="rounded-lg border-primary/20 bg-blue-900/5 dark:bg-blue-900/10 backdrop-blur-[1px] transition-all duration-300 hover:backdrop-blur-[3px] hover:bg-blue-900/20 shadow-sm hover:shadow-blue-900/30 h-full">
                          <CardContent className="p-4 space-y-2">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className="font-semibold text-foreground/90">{skill.name}</h3>
                              <Badge variant="outline" className="text-muted-foreground text-xs font-normal border-primary/20 bg-background/50">
                                {skill.level}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{skill.description}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="pl-6 border-l-2 border-primary/20 space-y-4">
                    {category.skills.map((skill, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        <div className="absolute -left-[31px] top-2 w-4 h-4 rounded-full bg-background border-2 border-primary/50"></div>
                        <h4 className="font-medium text-lg text-foreground/90 flex items-center gap-2">
                          {skill.name}
                          <Badge variant="secondary" className="text-[10px] font-normal px-1.5 py-0 bg-secondary/50">
                            {skill.level}
                          </Badge>
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </section>
      </main>
    </div>
  );
}
