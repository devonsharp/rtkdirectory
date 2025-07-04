
import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";

interface IntroductionCardProps {
  content: string;
}

const IntroductionCard = ({ content }: IntroductionCardProps) => {
  return (
    <Card className="mb-8 border-gray-200 bg-gray-50">
      <CardContent className="p-6">
        <div className="flex items-start space-x-3">
          <Plane className="h-6 w-6 text-gray-600 mt-1 flex-shrink-0" />
          <div>
            <p className="text-lg text-gray-700 leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntroductionCard;
