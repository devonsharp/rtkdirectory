
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Message Section */}
        <div className="py-6 text-center border-b border-gray-100">
          <p className="text-gray-600 mb-2">
            <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
              RTKDirectory
            </Link>
            {" "}— Connecting you to trusted RTK correction service providers near you
          </p>
          <p className="text-sm text-gray-500">
            Contact us: contact@rtkdirectory.com
          </p>
        </div>

        <div className="py-6">
          {/* Navigation Links organized in columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            
            {/* RTK Corrections Providers Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">RTK Corrections Providers</h3>
              <div className="space-y-2">
                <Link to="/rtk-service-providers" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  All Providers
                </Link>
                <Link to="/rtk-service-providers/global" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Global
                </Link>
                <Link to="/rtk-service-providers/north-america" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  North America
                </Link>
                <Link to="/rtk-service-providers/europe" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Europe
                </Link>
                <Link to="/rtk-service-providers/asia" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Asia
                </Link>
                <Link to="/rtk-service-providers/south-america" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  South America
                </Link>
                <Link to="/rtk-service-providers/africa" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Africa
                </Link>
                <Link to="/rtk-service-providers/oceania" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Oceania
                </Link>
              </div>
            </div>

            {/* RTK Hardware Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">RTK Hardware</h3>
              <div className="space-y-2">
                <Link to="/rtk-hardware" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  RTK Hardware Providers
                </Link>
              </div>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
              <div className="space-y-2">
                <Link to="/knowledge-base" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Knowledge Base
                </Link>
                <Link to="/blog" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Blog
                </Link>
                <Link to="/glossary" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Glossary
                </Link>
              </div>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
              <div className="space-y-2">
                <Link to="/contact" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Contact Us
                </Link>
                <Link to="/submit-listing" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Submit Listing
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
