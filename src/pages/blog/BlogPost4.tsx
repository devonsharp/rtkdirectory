
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import IntroductionCard from "@/components/blog/IntroductionCard";
import GNSSConstellationSection from "@/components/blog/GNSSConstellationSection";
import EmergingTrendsSection from "@/components/blog/EmergingTrendsSection";
import NextGenConstellationsSection from "@/components/blog/NextGenConstellationsSection";
import FutureApplicationsSection from "@/components/blog/FutureApplicationsSection";
import ChallengesOpportunitiesSection from "@/components/blog/ChallengesOpportunitiesSection";
import PreparationSection from "@/components/blog/PreparationSection";

const BlogPost4 = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <BlogPostHeader 
        title="The Future of GNSS and RTK Technology"
        date="February 28, 2024"
        readTime="10 min read"
      />

      <article className="prose prose-lg max-w-none">
        <IntroductionCard content="The GNSS and RTK landscape is evolving rapidly with new constellations, advanced signal processing, and emerging technologies. Explore the trends and innovations shaping the future of precision positioning." />

        <GNSSConstellationSection />
        <EmergingTrendsSection />
        <NextGenConstellationsSection />
        <FutureApplicationsSection />
        <ChallengesOpportunitiesSection />
        <PreparationSection />

        <Card className="bg-gray-50 border border-gray-200 mt-8">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Stay Ahead of the Curve</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Connect with forward-thinking RTK service providers who are already implementing next-generation technologies.
            </p>
            <Link to="/directory">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg">
                Find Advanced Providers
              </Button>
            </Link>
          </CardContent>
        </Card>
      </article>
    </div>
  );
};

export default BlogPost4;
