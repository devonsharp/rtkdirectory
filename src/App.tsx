import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import HomePage from "./pages/HomePage";
import DirectoryPage from "./pages/DirectoryPage";
import ContinentDirectory from "./pages/ContinentDirectory";
import ContactPage from "./pages/ContactPage";
import SubmitListingPage from "./pages/SubmitListingPage";
import BlogPage from "./pages/BlogPage";
import KnowledgeBasePage from "./pages/KnowledgeBasePage";
import GlossaryPage from "./pages/GlossaryPage";
import RTKHardwarePage from "./pages/RTKHardwarePage";
import NotFound from "./pages/NotFound";
import BlogPost1 from "./pages/blog/BlogPost1";
import BlogPost2 from "./pages/blog/BlogPost2";
import BlogPost3 from "./pages/blog/BlogPost3";
import BlogPost4 from "./pages/blog/BlogPost4";
import BlogPost5 from "./pages/blog/BlogPost5";
import BlogPost6 from "./pages/blog/BlogPost6";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-white flex flex-col pb-16 md:pb-0">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/rtk-service-providers" element={<DirectoryPage />} />
              <Route path="/rtk-service-providers/:continent" element={<ContinentDirectory />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/submit-listing" element={<SubmitListingPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/understanding-rtk-correction-services" element={<BlogPost1 />} />
              <Route path="/blog/choosing-rtk-service-provider" element={<BlogPost2 />} />
              <Route path="/blog/rtk-vs-ppk-positioning" element={<BlogPost3 />} />
              <Route path="/blog/future-of-gnss-rtk-technology" element={<BlogPost4 />} />
              <Route path="/blog/common-rtk-setup-mistakes" element={<BlogPost5 />} />
              <Route path="/blog/rtk-drone-mapping-best-practices" element={<BlogPost6 />} />
              <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
              <Route path="/glossary" element={<GlossaryPage />} />
              <Route path="/rtk-hardware" element={<RTKHardwarePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <BottomNav />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
