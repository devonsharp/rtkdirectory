
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface BlogCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const BlogCTA = ({ title, description, buttonText, buttonLink }: BlogCTAProps) => {
  return (
    <Card className="bg-gray-50 border-gray-200 mt-8">
      <CardContent className="p-6">
        <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">
          {description}
        </p>
        <Link to={buttonLink}>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white">
            {buttonText}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogCTA;
