
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const DirectoryCTA = () => {
  return (
    <div className="text-center bg-gray-50 rounded-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Don't see your service listed?
      </h3>
      <p className="text-gray-600 mb-6">
        Join our directory and connect with professionals who need RTK correction services.
      </p>
      <Link to="/submit-listing">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Submit Your Listing
        </Button>
      </Link>
    </div>
  );
};

export default DirectoryCTA;
