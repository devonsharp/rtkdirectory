
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Globe, Cpu } from "lucide-react";

const EmergingTrendsSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Emerging Trends and Technologies</h2>
      
      <div className="space-y-8">
        <Card className="border border-gray-200">
          <CardContent className="p-8">
            <div className="flex items-center mb-4">
              <Zap className="h-7 w-7 text-gray-600 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">Multi-Frequency Processing</h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              Next-generation receivers are leveraging multiple frequencies from each constellation to improve accuracy, 
              reduce convergence time, and enhance reliability in challenging environments.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Faster ambiguity resolution</li>
                <li>• Better ionospheric modeling</li>
                <li>• Improved multipath mitigation</li>
                <li>• Enhanced performance in urban canyons</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardContent className="p-8">
            <div className="flex items-center mb-4">
              <Globe className="h-7 w-7 text-gray-600 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">Precise Point Positioning (PPP)</h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              PPP technology is advancing rapidly, offering RTK-level accuracy without the need for local reference stations. 
              This could revolutionize positioning in remote areas and reduce infrastructure requirements.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Advantages:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• PPP-RTK hybrid solutions</li>
                <li>• Faster convergence times</li>
                <li>• Global correction services</li>
                <li>• Reduced infrastructure costs</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-gray-200">
          <CardContent className="p-8">
            <div className="flex items-center mb-4">
              <Cpu className="h-7 w-7 text-gray-600 mr-4" />
              <h3 className="text-2xl font-semibold text-gray-900">Artificial Intelligence Integration</h3>
            </div>
            <p className="text-gray-700 mb-4 text-lg leading-relaxed">
              AI and machine learning are being integrated into GNSS processing to improve signal quality assessment, 
              error prediction, and adaptive algorithms for challenging environments.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• Intelligent multipath detection</li>
                <li>• Adaptive filtering algorithms</li>
                <li>• Predictive error modeling</li>
                <li>• Automated quality control</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EmergingTrendsSection;
