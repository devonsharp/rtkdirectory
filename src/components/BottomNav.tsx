
import { Link } from "react-router-dom";

const BottomNav = () => {
  return (
    <nav className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Message Section */}
        <div className="py-6 text-center">
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-sm">
            
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

            {/* Countries Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Countries</h3>
              <div className="space-y-2">
                <Link to="/rtk-correction-services/austria" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Austria
                </Link>
                <Link to="/rtk-correction-services/belgium" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Belgium
                </Link>
                <Link to="/rtk-correction-services/bulgaria" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Bulgaria
                </Link>
                <Link to="/rtk-correction-services/croatia" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Croatia
                </Link>
                <Link to="/rtk-correction-services/cyprus" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Cyprus
                </Link>
                <Link to="/rtk-correction-services/czechia" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Czechia
                </Link>
                <Link to="/rtk-correction-services/denmark" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Denmark
                </Link>
                <Link to="/rtk-correction-services/estonia" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Estonia
                </Link>
                <Link to="/rtk-correction-services/finland" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Finland
                </Link>
                <Link to="/rtk-correction-services/germany" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Germany
                </Link>
                <Link to="/rtk-correction-services/greece" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Greece
                </Link>
                <Link to="/rtk-correction-services/hungary" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Hungary
                </Link>
                <Link to="/rtk-correction-services/iceland" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Iceland
                </Link>
                <Link to="/rtk-correction-services/ireland" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Ireland
                </Link>
                <Link to="/rtk-correction-services/italy" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Italy
                </Link>
              </div>
            </div>

            {/* More Countries Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">&nbsp;</h3>
              <div className="space-y-2">
                <Link to="/rtk-correction-services/latvia" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Latvia
                </Link>
                <Link to="/rtk-correction-services/liechtenstein" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Liechtenstein
                </Link>
                <Link to="/rtk-correction-services/lithuania" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Lithuania
                </Link>
                <Link to="/rtk-correction-services/luxembourg" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Luxembourg
                </Link>
                <Link to="/rtk-correction-services/malta" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Malta
                </Link>
                <Link to="/rtk-correction-services/netherlands" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Netherlands
                </Link>
                <Link to="/rtk-correction-services/norway" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Norway
                </Link>
                <Link to="/rtk-correction-services/poland" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Poland
                </Link>
                <Link to="/rtk-correction-services/portugal" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Portugal
                </Link>
                <Link to="/rtk-correction-services/romania" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Romania
                </Link>
                <Link to="/rtk-correction-services/slovakia" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Slovakia
                </Link>
                <Link to="/rtk-correction-services/slovenia" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Slovenia
                </Link>
                <Link to="/rtk-correction-services/spain" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Spain
                </Link>
                <Link to="/rtk-correction-services/switzerland" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  Switzerland
                </Link>
                <Link to="/rtk-correction-services/united-kingdom" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  United Kingdom
                </Link>
              </div>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
              <div className="space-y-2">
                <Link to="/rtk-hardware" className="block text-gray-700 hover:text-blue-600 transition-colors">
                  RTK Hardware
                </Link>
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
