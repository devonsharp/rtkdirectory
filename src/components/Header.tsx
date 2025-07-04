
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">RTKDirectory.com</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/directory" className="text-gray-700 hover:text-blue-600 transition-colors">
              RTK Providers
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link to="/submit-listing" className="text-gray-700 hover:text-blue-600 transition-colors">
              Submit Listing
            </Link>
          </nav>

          <Link to="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
