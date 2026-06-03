import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ExternalLink, ArrowRight, Layout, Blocks, CheckCircle2, X, Filter } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card as ShadcnCard, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { projects } from "@/data/projects";

const allTags = ["All", ...Array.from(new Set(projects.flatMap(p => p.tags)))];
const allCategories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

const totalProjects = projects.length;
const totalTechs = allTags.length - 1;

// Project Modal Component
const ProjectModal = ({ project, isOpen, onOpenChange }) => {
  if (!project) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] w-full h-[95vh] max-h-screen overflow-y-auto p-0 gap-0 border-primary/20 bg-background/95 backdrop-blur-xl rounded-[2rem]">
        <DialogTitle className="sr-only">{project.title} Details</DialogTitle>
        <DialogDescription className="sr-only">Detailed case study for {project.title}</DialogDescription>
        
        {/* Modal Hero */}
        <div className="relative h-[40vh] min-h-[300px] w-full bg-muted overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
          <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover object-center" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 backdrop-blur-md">
                  {project.category}
                </Badge>
                <Badge variant="outline" className="backdrop-blur-md bg-background/40">
                  {project.status}
                </Badge>
              </div>
              <h2 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tight text-foreground drop-shadow-xl">
                {project.title}
              </h2>
            </div>
            
            <div className="flex gap-4">
              {project.liveUrl && (
                <Button size="lg" className="rounded-full shadow-xl gap-2" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button size="lg" variant="secondary" className="rounded-full shadow-xl gap-2 bg-background/80 backdrop-blur-md" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <IconBrandGithub className="w-5 h-5" /> GitHub
                  </a>
                </Button>
              )}
            </div>
          </div>
          
          <DialogClose className="absolute top-6 right-6 z-50 rounded-full bg-background/40 backdrop-blur-md p-3 hover:bg-background/60 transition-colors border border-white/10">
            <X className="w-6 h-6 text-foreground" />
          </DialogClose>
        </div>
        
        {/* Modal Content */}
        <div className="p-8 md:p-12 max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h3 className="text-2xl font-bold mb-4 font-heading flex items-center gap-2">
                <Layout className="text-primary w-6 h-6" /> Overview
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </section>
            
            {project.features && (
              <section>
                <h3 className="text-2xl font-bold mb-4 font-heading flex items-center gap-2">
                  <Blocks className="text-primary w-6 h-6" /> Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground p-4 rounded-xl border border-border/50 bg-card/30">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {project.challenges && (
              <section>
                <h3 className="text-2xl font-bold mb-4 font-heading">Challenges Overcome</h3>
                <p className="text-muted-foreground leading-relaxed border-l-4 border-primary/50 pl-6 py-4 bg-primary/5 rounded-r-2xl">
                  {project.challenges}
                </p>
              </section>
            )}
            
            {project.lessons && (
              <section>
                <h3 className="text-2xl font-bold mb-4 font-heading">Lessons Learned</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.lessons}
                </p>
              </section>
            )}
          </div>
          
          <div className="space-y-10">
            <section>
              <h3 className="text-xl font-bold mb-4 font-heading">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t, idx) => (
                  <Badge key={idx} variant="secondary" className="px-3 py-1.5 bg-secondary/50">
                    {t}
                  </Badge>
                ))}
              </div>
            </section>
            
            {project.metrics && (
              <section>
                <h3 className="text-xl font-bold mb-4 font-heading">Project Metrics</h3>
                <div className="flex flex-col gap-3">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="bg-card/50 border border-border/50 p-4 rounded-2xl flex items-center justify-between">
                      <span className="font-medium text-foreground">{m}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Main Grid Card
const GridCard = ({ project, onClick }) => (
  <ShadcnCard 
    onClick={() => onClick(project)}
    className="flex flex-col overflow-hidden rounded-[1.5rem] border-primary/10 bg-background/80 dark:bg-card/40 backdrop-blur-xl shadow-lg group hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-2 hover:border-primary/30 transition-all duration-300 cursor-pointer h-full"
  >
    <div className="relative h-48 overflow-hidden shrink-0">
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent z-10 pointer-events-none" />
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <Badge variant="secondary" className="absolute top-4 right-4 z-20 bg-background/70 backdrop-blur-md">
        {project.status}
      </Badge>
    </div>
    <CardContent className="p-6 flex flex-col flex-1">
      <div className="flex justify-between items-start mb-3 gap-2">
        <h3 className="font-bold text-xl group-hover:text-primary transition-colors text-foreground leading-tight">
          {project.title}
        </h3>
      </div>
      <p className="text-sm text-muted-foreground mb-6 flex-1 line-clamp-2">{project.description}</p>
      
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.tags.slice(0, 3).map((t, idx) => (
          <Badge key={idx} variant="outline" className="border-primary/20 text-[10px] py-0.5 px-2 rounded-full">
            {t}
          </Badge>
        ))}
        {project.tags.length > 3 && (
          <Badge variant="outline" className="border-primary/20 text-[10px] py-0.5 px-2 rounded-full">
            +{project.tags.length - 3}
          </Badge>
        )}
      </div>

      <div className="flex items-center gap-2 mt-auto border-t border-border/50 pt-4">
        {project.liveUrl && (
          <Button size="sm" variant="ghost" className="rounded-full gap-1.5 text-xs hover:bg-primary/10 hover:text-primary" asChild onClick={(e) => e.stopPropagation()}>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3.5 h-3.5" /> Demo
            </a>
          </Button>
        )}
        {project.githubUrl && (
          <Button size="sm" variant="ghost" className="rounded-full gap-1.5 text-xs hover:bg-primary/10 hover:text-primary" asChild onClick={(e) => e.stopPropagation()}>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <IconBrandGithub className="w-3.5 h-3.5" /> GitHub
            </a>
          </Button>
        )}
      </div>
    </CardContent>
  </ShadcnCard>
);

// Featured Project Showcase
const FeaturedShowcase = ({ project, index, onClick }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center mb-24 cursor-pointer group`}
      onClick={() => onClick(project)}
    >
      <div className="w-full lg:w-3/5 h-[400px] lg:h-[500px] relative rounded-[2rem] overflow-hidden border border-primary/10 shadow-2xl">
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay pointer-events-none" />
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
        />
        <div className="absolute top-6 right-6 z-20">
          <Badge className="bg-primary/90 text-primary-foreground shadow-lg px-4 py-1.5 text-sm backdrop-blur-md">
            Featured
          </Badge>
        </div>
      </div>
      
      <div className="w-full lg:w-2/5 space-y-6">
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
            {project.category}
          </Badge>
        </div>
        
        <h3 className="text-3xl lg:text-5xl font-heading font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
          {project.title}
        </h3>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map(t => (
            <Badge key={t} variant="secondary" className="bg-secondary/50">
              {t}
            </Badge>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4 pt-6">
          {project.liveUrl && (
            <Button className="rounded-full shadow-lg gap-2 px-8 h-12" asChild onClick={(e) => e.stopPropagation()}>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                View Live <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          )}
          <Button variant="outline" className="rounded-full gap-2 px-8 h-12" onClick={() => onClick(project)}>
            Case Study
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeTech, setActiveTech] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter & Sort Logic
  const filteredProjects = useMemo(() => {
    let result = projects;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    if (activeCategory !== "All") {
      result = result.filter(p => p.category === activeCategory);
    }

    if (activeTech !== "All") {
      result = result.filter(p => p.tags.includes(activeTech));
    }

    if (sortBy === "Newest") {
      result = [...result].sort((a, b) => b.id - a.id);
    } else if (sortBy === "Featured") {
      result = [...result].sort((a, b) => (b.featured === a.featured) ? 0 : b.featured ? 1 : -1);
    }

    return result;
  }, [searchQuery, activeCategory, activeTech, sortBy]);

  const featuredProjects = projects.filter(p => p.featured);
  
  // Show featured sections only when no active filters apply to keep the top clean
  const showFeatured = !searchQuery && activeCategory === "All" && activeTech === "All" && sortBy === "Newest";

  return (
    <div className="bg-background min-h-screen relative pb-32">
      {/* Background Grid */}
      <div
        className="fixed inset-0 -z-10 opacity-30 pointer-events-none"
        style={{
          background: `linear-gradient(90deg, var(--border) 1px, transparent 1px) 50% 50% / 50px 50px,
                       linear-gradient(var(--border) 1px, transparent 1px) 50% 50% / 50px 50px`,
        }}
      />

      {/* Hero Section */}
      <div className="pt-40 pb-20 px-4 max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10"
        />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-6 text-foreground"
        >
          Projects
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          A collection of applications, experiments, and systems I've built while exploring software engineering and technology.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8"
        >
          <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl px-6 py-4 flex flex-col items-center">
            <span className="text-3xl font-bold text-primary">{totalProjects}+</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Projects</span>
          </div>
          <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl px-6 py-4 flex flex-col items-center">
            <span className="text-3xl font-bold text-primary">{totalTechs}</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Technologies</span>
          </div>
          <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-2xl px-6 py-4 flex flex-col items-center">
            <span className="text-3xl font-bold text-primary">3</span>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Years Dev</span>
          </div>
        </motion.div>
      </div>

      {/* Sticky Search & Filters */}
      <div className="sticky top-2 z-30 bg-background/80 backdrop-blur-xl border-y border-border/50 py-4 mb-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 lg:px-12 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search projects..." 
                className="pl-9 bg-card/50 border-border/50 rounded-full focus-visible:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-4 w-full md:w-auto">
              <Select value={activeCategory} onValueChange={setActiveCategory}>
                <SelectTrigger className="w-full md:w-[160px] bg-card/50 border-border/50 rounded-full">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {allCategories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-[140px] bg-card/50 border-border/50 rounded-full">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Newest">Newest</SelectItem>
                  <SelectItem value="Featured">Featured</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mask-edges">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-muted-foreground mr-1 shrink-0" />
              {allTags.map(tech => (
                <button
                  key={tech}
                  onClick={() => setActiveTech(tech)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap border ${
                    activeTech === tech 
                    ? "bg-primary text-primary-foreground border-primary shadow-md" 
                    : "bg-card/40 text-muted-foreground border-border/50 hover:border-primary/30 hover:bg-card/80"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 lg:px-12 relative z-20">
        
        {/* Featured Projects Showcase (Only when unfiltered) */}
        {showFeatured && featuredProjects.length > 0 && (
          <div className="mb-32">
            <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-12 flex items-center gap-4">
              Featured Works
              <div className="h-[1px] flex-1 bg-border/50" />
            </h2>
            {featuredProjects.map((project, idx) => (
              <FeaturedShowcase 
                key={project.id} 
                project={project} 
                index={idx} 
                onClick={setSelectedProject}
              />
            ))}
          </div>
        )}

        {/* Project Grid */}
        <div>
          {showFeatured && (
            <h2 className="text-sm font-mono text-muted-foreground tracking-widest uppercase mb-8 flex items-center gap-4">
              All Projects
              <div className="h-[1px] flex-1 bg-border/50" />
            </h2>
          )}
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-32 bg-card/20 rounded-3xl border border-border/50 border-dashed">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No projects found</h3>
              <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
              <Button 
                variant="outline" 
                className="mt-6 rounded-full"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                  setActiveTech("All");
                  setSortBy("Newest");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GridCard project={project} onClick={setSelectedProject} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
        
        {/* Call to Action */}
        <div className="mt-40 mb-10 relative rounded-[3rem] overflow-hidden bg-primary/5 border border-primary/20 p-12 lg:p-20 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground tracking-tight">
              Interested in working together?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Let's build something amazing. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full shadow-xl px-10 h-14 text-lg" asChild>
                <a href="mailto:hello@example.com">Contact Me</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full bg-background/50 px-10 h-14 text-lg" asChild>
                <a href="https://github.com/Ishan0121" target="_blank" rel="noopener noreferrer">
                  <IconBrandGithub className="w-5 h-5 mr-2" /> View GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

      </div>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onOpenChange={(open) => !open && setSelectedProject(null)} 
      />
    </div>
  );
}
