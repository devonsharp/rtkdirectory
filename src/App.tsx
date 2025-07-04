
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DirectoryPage from "./pages/DirectoryPage";
import ContinentDirectory from "./pages/ContinentDirectory";
import ContactPage from "./pages/ContactPage";
import SubmitListingPage from "./pages/SubmitListingPage";
import BlogPage from "./pages/BlogPage";
import KnowledgeBasePage from "./pages/KnowledgeBasePage";
import GlossaryPage from "./pages/GlossaryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/directory" element={<DirectoryPage />} />
              <Route path="/directory/:continent" element={<ContinentDirectory />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/submit-listing" element={<SubmitListingPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
              <Route path="/glossary" element={<GlossaryPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
