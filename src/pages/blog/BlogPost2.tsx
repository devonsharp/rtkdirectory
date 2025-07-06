import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle } from "lucide-react";

const BlogPost2 = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Blog
      </Link>

      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choosing the Right RTK Service Provider for Your Project
          </h1>
          <div className="flex items-center text-gray-500 space-x-2 mb-6">
            <span>March 10, 2024</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </header>

        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Selecting the right RTK correction service provider is crucial for project success. This guide covers 
              the essential factors to consider, questions to ask, and red flags to avoid when choosing your RTK partner.
            </p>
          </CardContent>
        </Card>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Essential Selection Criteria</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Coverage and Network Density</h3>
            <p className="text-gray-700 mb-4">
              The foundation of reliable RTK service is comprehensive coverage. Evaluate providers based on:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Reference station density in your operational area</li>
              <li>Maximum baseline distances between stations</li>
              <li>Coverage reliability in challenging terrain</li>
              <li>Plans for network expansion</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Accuracy and Performance</h3>
            <p className="text-gray-700 mb-4">
              Different applications require different levels of precision. Consider:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
              <li>Horizontal and vertical accuracy specifications</li>
              <li>Convergence time requirements</li>
              <li>Performance in various atmospheric conditions</li>
              <li>Multi-constellation GNSS support</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Communication Options</h3>
            <p className="text-gray-700 mb-4">
              Modern RTK services offer multiple communication methods:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Cellular/Internet</h4>
                  <p className="text-green-700 text-sm">High reliability, wide coverage, easy setup</p>
                </CardContent>
              </Card>
              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Radio</h4>
                  <p className="text-blue-700 text-sm">No ongoing costs, works in remote areas</p>
                </CardContent>
              </Card>
              <Card className="border-purple-200 bg-purple-50">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Satellite</h4>
                  <p className="text-purple-700 text-sm">Global coverage, premium pricing</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Questions to Ask Providers</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Service Reliability</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• What is your guaranteed uptime percentage?</li>
                <li>• How do you handle service interruptions?</li>
                <li>• What redundancy measures are in place?</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Technical Support</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• What support hours do you offer?</li>
                <li>• How quickly do you respond to technical issues?</li>
                <li>• Do you provide on-site support if needed?</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Pricing and Contracts</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• What are your subscription options and pricing tiers?</li>
                <li>• Are there setup fees or equipment costs?</li>
                <li>• What are the contract terms and cancellation policies?</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Future-Proofing</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• How do you handle technology upgrades?</li>
                <li>• What new features are in development?</li>
                <li>• How do you adapt to changing GNSS constellations?</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Evaluation Checklist</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-4">Before Making Your Decision:</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Request a trial period or demo to test service quality</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Verify coverage in all your operational areas</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Check references from similar projects or industries</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Compare total cost of ownership, not just subscription fees</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Ensure compatibility with your existing equipment</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Understand the service level agreement (SLA) terms</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Red Flags to Avoid</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <ul className="text-red-700 space-y-2">
              <li>• Providers who can't provide specific accuracy guarantees</li>
              <li>• Services with frequent unexplained outages</li>
              <li>• Lack of 24/7 technical support for critical applications</li>
              <li>• Providers reluctant to offer trial periods</li>
              <li>• Hidden fees or unclear pricing structures</li>
              <li>• Outdated technology with no upgrade path</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Making the Final Decision</h2>
          <p className="text-gray-700 mb-4">
            The best RTK service provider balances technical capabilities, reliability, support quality, and cost-effectiveness. 
            Don't choose based solely on price—consider the total value proposition and long-term partnership potential.
          </p>
          <p className="text-gray-700 mb-4">
            Remember that switching RTK providers later can be costly and disruptive. Take time to thoroughly evaluate 
            your options and choose a provider that can grow with your needs.
          </p>
        </section>

        <Card className="bg-blue-50 border-blue-200 mt-8">
          <CardContent className="p-6">
            <h3 className="font-semibold text-blue-800 mb-2">Find Your Perfect RTK Partner</h3>
            <p className="text-blue-700 mb-4">
              Use our comprehensive directory to compare RTK service providers and find the perfect match for your project requirements.
            </p>
            <Link to="/directory">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Compare RTK Providers
              </Button>
            </Link>
          </CardContent>
        </Card>
      </article>
    </div>
  );
};

export default BlogPost2;
