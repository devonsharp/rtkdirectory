
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import HoverDropdown from "./HoverDropdown";

const BottomNav = () => {
  return (
    <nav className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-6 gap-6">
          <Link to="/" className="flex items-center justify-center md:justify-start">
            <span className="text-2xl font-bold text-blue-600">RTKDirectory</span>
          </Link>
          
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            
            <HoverDropdown
              trigger={
                <div className="text-gray-700 hover:text-blue-600 transition-colors inline-flex items-center cursor-pointer">
                  RTK Corrections Providers
                  <ChevronDown className="ml-1 h-4 w-4" />
                </div>
              }
            >
              <div className="py-1">
                <Link to="/rtk-service-providers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  All Providers
                </Link>
                <Link to="/rtk-service-providers/global" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Global
                </Link>
                <Link to="/rtk-service-providers/north-america" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  North America
                </Link>
                <Link to="/rtk-service-providers/europe" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Europe
                </Link>
                <Link to="/rtk-service-providers/asia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Asia
                </Link>
                <Link to="/rtk-service-providers/south-america" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  South America
                </Link>
                <Link to="/rtk-service-providers/africa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Africa
                </Link>
                <Link to="/rtk-service-providers/oceania" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Oceania
                </Link>
              </div>
            </HoverDropdown>

            <Link to="/rtk-hardware" className="text-gray-700 hover:text-blue-600 transition-colors">
              RTK Hardware Providers
            </Link>
            
            <HoverDropdown
              trigger={
                <div className="text-gray-700 hover:text-blue-600 transition-colors inline-flex items-center cursor-pointer">
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </div>
              }
            >
              <div className="py-1">
                <Link to="/knowledge-base" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Knowledge Base
                </Link>
                <Link to="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Blog
                </Link>
                <Link to="/glossary" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Glossary
                </Link>
              </div>
            </HoverDropdown>
          </div>

          {/* Contact Button */}
          <div className="flex justify-center md:justify-end">
            <HoverDropdown
              align="end"
              trigger={
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Contact
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              }
            >
              <div className="py-1">
                <Link to="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Contact Us
                </Link>
                <Link to="/submit-listing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Submit Listing
                </Link>
              </div>
            </HoverDropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
