
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding RTK Correction Services: A Complete Guide",
      excerpt: "Learn everything you need to know about RTK correction services, how they work, and why they're essential for precision surveying and mapping.",
      date: "March 15, 2024",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Choosing the Right RTK Service Provider for Your Project",
      excerpt: "Key factors to consider when selecting an RTK correction service provider, including coverage area, accuracy, and support options.",
      date: "March 10, 2024", 
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "RTK vs PPK: Which Positioning Method is Right for You?",
      excerpt: "Compare Real-Time Kinematic (RTK) and Post-Processed Kinematic (PPK) positioning methods to determine the best approach for your needs.",
      date: "March 5, 2024",
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "The Future of GNSS and RTK Technology",
      excerpt: "Explore emerging trends and technologies shaping the future of Global Navigation Satellite Systems and RTK correction services.",
      date: "February 28, 2024",
      readTime: "10 min read"
    },
    {
      id: 5,
      title: "Common RTK Setup Mistakes and How to Avoid Them",
      excerpt: "Learn about the most common mistakes when setting up RTK systems and get practical tips to ensure optimal performance.",
      date: "February 22, 2024",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "RTK Correction Services for Drone Mapping: Best Practices",
      excerpt: "Specialized guide for drone operators on integrating RTK correction services for precision mapping and surveying applications.",
      date: "February 15, 2024",
      readTime: "9 min read"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          RTK Knowledge Hub
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Stay informed with the latest insights, guides, and best practices 
          for RTK correction services, GNSS technology, and precision positioning.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="border-gray-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900 leading-tight">
                {post.title}
              </CardTitle>
              <div className="flex items-center text-sm text-gray-500 space-x-2">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <Button 
                variant="outline" 
                className="text-blue-600 border-blue-600 hover:bg-blue-50"
              >
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-blue-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Stay Updated with RTK Industry News
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest RTK technology updates, 
          industry insights, and service provider spotlights.
        </p>
        <div className="flex max-w-md mx-auto space-x-2">
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
            Subscribe
          </Button>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center bg-gray-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Find RTK Services?
        </h3>
        <p className="text-gray-600 mb-6">
          Browse our comprehensive directory of RTK correction service providers worldwide.
        </p>
        <Link to="/directory">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white mr-4">
            Browse Directory
          </Button>
        </Link>
        <Link to="/submit-listing">
          <Button variant="outline" className="border-blue-600 text-blue-600">
            List Your Service
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;
