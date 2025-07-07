
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            {/* RTK Corrections Providers */}
            <Link to="/rtk-service-providers" className="text-gray-700 hover:text-blue-600 transition-colors">
              All Providers
            </Link>
            <Link to="/rtk-service-providers/global" className="text-gray-700 hover:text-blue-600 transition-colors">
              Global
            </Link>
            <Link to="/rtk-service-providers/north-america" className="text-gray-700 hover:text-blue-600 transition-colors">
              North America
            </Link>
            <Link to="/rtk-service-providers/europe" className="text-gray-700 hover:text-blue-600 transition-colors">
              Europe
            </Link>
            <Link to="/rtk-service-providers/asia" className="text-gray-700 hover:text-blue-600 transition-colors">
              Asia
            </Link>
            <Link to="/rtk-service-providers/south-america" className="text-gray-700 hover:text-blue-600 transition-colors">
              South America
            </Link>
            <Link to="/rtk-service-providers/africa" className="text-gray-700 hover:text-blue-600 transition-colors">
              Africa
            </Link>
            <Link to="/rtk-service-providers/oceania" className="text-gray-700 hover:text-blue-600 transition-colors">
              Oceania
            </Link>

            {/* RTK Hardware */}
            <Link to="/rtk-hardware" className="text-gray-700 hover:text-blue-600 transition-colors">
              RTK Hardware Providers
            </Link>
            
            {/* Resources */}
            <Link to="/knowledge-base" className="text-gray-700 hover:text-blue-600 transition-colors">
              Knowledge Base
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link to="/glossary" className="text-gray-700 hover:text-blue-600 transition-colors">
              Glossary
            </Link>

            {/* Contact */}
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact Us
            </Link>
            <Link to="/submit-listing" className="text-gray-700 hover:text-blue-600 transition-colors">
              Submit Listing
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
