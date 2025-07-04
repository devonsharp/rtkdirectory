
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

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
            <DropdownMenu>
              <DropdownMenuTrigger 
                className="text-gray-700 hover:text-blue-600 transition-colors inline-flex items-center"
                onMouseEnter={(e) => e.currentTarget.click()}
              >
                RTK Providers
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white">
                <DropdownMenuItem asChild>
                  <Link to="/directory" className="w-full">
                    All Providers
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/directory/global" className="w-full">
                    Global
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/directory/north-america" className="w-full">
                    North America
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/directory/europe" className="w-full">
                    Europe
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/directory/asia" className="w-full">
                    Asia
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/directory/south-america" className="w-full">
                    South America
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/directory/africa" className="w-full">
                    Africa
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/directory/oceania" className="w-full">
                    Oceania
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger 
                className="text-gray-700 hover:text-blue-600 transition-colors inline-flex items-center"
                onMouseEnter={(e) => e.currentTarget.click()}
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-white">
                <DropdownMenuItem asChild>
                  <Link to="/knowledge-base" className="w-full">
                    Knowledge Base
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/blog" className="w-full">
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/glossary" className="w-full">
                    Glossary
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <DropdownMenu>
            <DropdownMenuTrigger 
              asChild
              onMouseEnter={(e) => e.currentTarget.click()}
            >
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Contact
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/contact" className="w-full">
                  Contact Us
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/submit-listing" className="w-full">
                  Submit Listing
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
