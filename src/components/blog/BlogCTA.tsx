
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
    <Card className="bg-blue-50 border-blue-200 mt-8">
      <CardContent className="p-6">
        <h3 className="font-semibold text-blue-800 mb-2">{title}</h3>
        <p className="text-blue-700 mb-4">
          {description}
        </p>
        <Link to={buttonLink}>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            {buttonText}
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogCTA;
