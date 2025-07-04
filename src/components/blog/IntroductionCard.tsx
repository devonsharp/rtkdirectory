
import { Card, CardContent } from "@/components/ui/card";
import { Plane } from "lucide-react";

interface IntroductionCardProps {
  content: string;
}

const IntroductionCard = ({ content }: IntroductionCardProps) => {
  return (
    <Card className="mb-8 border-blue-200 bg-blue-50">
      <CardContent className="p-6">
        <div className="flex items-start space-x-3">
          <Plane className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
          <div>
            <p className="text-lg text-blue-800 leading-relaxed">
              {content}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IntroductionCard;
