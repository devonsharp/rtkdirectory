
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const KnowledgeBasePage = () => {
  const knowledgeCategories = [
    {
      title: "Getting Started with RTK",
      description: "Learn the basics of RTK correction services and how they work.",
      articles: ["What is RTK?", "How RTK Works", "RTK vs Traditional GPS"]
    },
    {
      title: "Technical Guides",
      description: "In-depth technical documentation and setup guides.",
      articles: ["Setting Up RTK Base Stations", "CORS Network Integration", "Troubleshooting Common Issues"]
    },
    {
      title: "Best Practices",
      description: "Industry best practices and recommendations.",
      articles: ["Choosing the Right Equipment", "Quality Assurance", "Data Management"]
    },
    {
      title: "Applications",
      description: "Real-world applications and use cases for RTK services.",
      articles: ["Surveying Applications", "Construction Projects", "Agricultural Uses"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Knowledge Base
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive resources and guides to help you understand and implement 
          RTK correction services effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {knowledgeCategories.map((category, index) => (
          <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">
                {category.title}
              </CardTitle>
              <p className="text-gray-600">
                {category.description}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                {category.articles.map((article, articleIndex) => (
                  <li key={articleIndex} className="text-blue-600 hover:text-blue-800 cursor-pointer">
                    • {article}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                View All Articles
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Links */}
      <div className="mt-16 bg-gray-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Quick Links
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/blog">
            <Button variant="outline" className="w-full">
              Read Our Blog
            </Button>
          </Link>
          <Link to="/glossary">
            <Button variant="outline" className="w-full">
              Browse Glossary
            </Button>
          </Link>
          <Link to="/directory">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Find RTK Providers
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBasePage;
