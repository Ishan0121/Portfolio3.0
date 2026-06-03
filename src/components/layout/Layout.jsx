// src/components/layout/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    // bg-background text-foreground ensures the background color changes globally using shadcn colors
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
      
      {/* Our newly created Navbar */}
      <Navbar />
      
      {/* The main content area where your pages load */}
      <main className="flex-1 container mx-auto px-4 md:px-8 py-12  pt-24">
        <Outlet /> 
      </main>
      
      {/* We will build a real Footer later */}
      {/* <footer className="border-t p-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} My Portfolio
      </footer>*/}
      <Footer/>
    </div>
  );
}