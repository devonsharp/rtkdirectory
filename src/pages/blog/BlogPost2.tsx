
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import IntroductionCard from "@/components/blog/IntroductionCard";
import SelectionCriteriaSection from "@/components/blog/SelectionCriteriaSection";
import KeyQuestionsSection from "@/components/blog/KeyQuestionsSection";
import EvaluationChecklistSection from "@/components/blog/EvaluationChecklistSection";
import RedFlagsSection from "@/components/blog/RedFlagsSection";
import FinalDecisionSection from "@/components/blog/FinalDecisionSection";
import BlogCTA from "@/components/blog/BlogCTA";

const BlogPost2 = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BlogPostHeader 
        title="Choosing the Right RTK Service Provider for Your Project"
        date="March 10, 2024"
        readTime="6 min read"
      />

      <article className="prose prose-lg max-w-none">
        <IntroductionCard 
          content="Selecting the right RTK correction service provider is crucial for project success. This guide covers the essential factors to consider, questions to ask, and red flags to avoid when choosing your RTK partner."
        />

        <SelectionCriteriaSection />
        <KeyQuestionsSection />
        <EvaluationChecklistSection />
        <RedFlagsSection />
        <FinalDecisionSection />

        <BlogCTA 
          title="Find Your Perfect RTK Partner"
          description="Use our comprehensive directory to compare RTK service providers and find the perfect match for your project requirements."
          buttonText="Compare RTK Providers"
          buttonLink="/directory"
        />
      </article>
    </div>
  );
};

export default BlogPost2;
