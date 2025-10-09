import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import ArticleDetail from "./pages/ArticleDetail";
import NotFound from "./pages/NotFound";
import { Footer } from "./components/Footer";
import { Seo } from "./components/Seo";

const queryClient = new QueryClient();

// Default SEO configuration
const defaultSeo = {
  title: 'Pokum - Full-Cycle Business Incorporation Experts',
  description: 'Professional business incorporation, legal services, and corporate solutions. Start and grow your business with our expert guidance.',
  keywords: 'business incorporation, company registration, legal services, corporate solutions, business setup, Indonesia business, company formation',
  image: 'https://res.cloudinary.com/dn8wwzjaj/image/upload/v1758533832/pokum._bjfoo8.png',
  url: 'https://pokum.id',
};

const App = () => (
  <HelmetProvider>
    <Seo {...defaultSeo} />
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Helmet>
              <html lang="en" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
              <link rel="canonical" href={window.location.href} />
            </Helmet>
            <Navbar />
            <main className="flex-grow pt-20">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/article/:id" element={<ArticleDetail />} />
                <Route path="/contact" element={<Contact />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
