
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import IntroductionCard from "@/components/blog/IntroductionCard";
import RTKAdvantagesSection from "@/components/blog/RTKAdvantagesSection";
import RTKIntegrationSection from "@/components/blog/RTKIntegrationSection";
import FlightPlanningSection from "@/components/blog/FlightPlanningSection";
import FlightExecutionSection from "@/components/blog/FlightExecutionSection";
import QualityControlSection from "@/components/blog/QualityControlSection";
import PostProcessingSection from "@/components/blog/PostProcessingSection";
import TroubleshootingSection from "@/components/blog/TroubleshootingSection";
import AdvancedTechniquesSection from "@/components/blog/AdvancedTechniquesSection";
import BlogCTA from "@/components/blog/BlogCTA";

const BlogPost6 = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BlogPostHeader 
        title="RTK Correction Services for Drone Mapping: Best Practices"
        date="February 15, 2024"
        readTime="9 min read"
      />

      <article className="prose prose-lg max-w-none">
        <IntroductionCard 
          content="Drone mapping with RTK corrections delivers survey-grade accuracy for photogrammetry, LiDAR, and inspection missions. This comprehensive guide covers everything from setup to post-processing best practices."
        />

        <RTKAdvantagesSection />
        <RTKIntegrationSection />
        <FlightPlanningSection />
        <FlightExecutionSection />
        <QualityControlSection />
        <PostProcessingSection />
        <TroubleshootingSection />
        <AdvancedTechniquesSection />

        <BlogCTA 
          title="Ready for RTK-Enabled Mapping?"
          description="Find RTK correction service providers with proven experience in drone mapping applications and specialized support for aerial surveys."
          buttonText="Find Drone Mapping Providers"
          buttonLink="/directory"
        />
      </article>
    </div>
  );
};

export default BlogPost6;
