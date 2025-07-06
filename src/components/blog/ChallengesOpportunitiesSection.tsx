
import { Card, CardContent } from "@/components/ui/card";

const ChallengesOpportunitiesSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Challenges and Opportunities</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-red-800 mb-3">Challenges Ahead</h3>
            <ul className="text-red-700 space-y-2">
              <li>• Spectrum interference and jamming</li>
              <li>• Urban environment multipath</li>
              <li>• Cybersecurity threats</li>
              <li>• Interoperability standards</li>
              <li>• Cost vs. performance balance</li>
              <li>• Infrastructure modernization</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-green-800 mb-3">Market Opportunities</h3>
            <ul className="text-green-700 space-y-2">
              <li>• Growing autonomous vehicle market</li>
              <li>• Expanding drone applications</li>
              <li>• Smart city infrastructure</li>
              <li>• Precision agriculture adoption</li>
              <li>• Construction automation</li>
              <li>• Location-based services</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ChallengesOpportunitiesSection;
