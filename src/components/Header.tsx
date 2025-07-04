
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import HoverDropdown from "./HoverDropdown";

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
            
            <HoverDropdown
              trigger={
                <div className="text-gray-700 hover:text-blue-600 transition-colors inline-flex items-center">
                  RTK Corrections Providers
                  <ChevronDown className="ml-1 h-4 w-4" />
                </div>
              }
            >
              <div className="py-1">
                <Link to="/directory" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  All Providers
                </Link>
                <Link to="/directory/global" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Global
                </Link>
                <Link to="/directory/north-america" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  North America
                </Link>
                <Link to="/directory/europe" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Europe
                </Link>
                <Link to="/directory/asia" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Asia
                </Link>
                <Link to="/directory/south-america" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  South America
                </Link>
                <Link to="/directory/africa" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Africa
                </Link>
                <Link to="/directory/oceania" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Oceania
                </Link>
              </div>
            </HoverDropdown>

            <Link to="/rtk-hardware" className="text-gray-700 hover:text-blue-600 transition-colors">
              RTK Hardware Providers
            </Link>
            
            <HoverDropdown
              trigger={
                <div className="text-gray-700 hover:text-blue-600 transition-colors inline-flex items-center">
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
          </nav>

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
    </header>
  );
};

export default Header;
