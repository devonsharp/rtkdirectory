import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import HoverDropdown from "./HoverDropdown";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">RTKDirectory</span>
          </Link>
          
          {/* Desktop Navigation */}
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

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
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

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                <SheetClose asChild>
                  <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors text-lg">
                    Home
                  </Link>
                </SheetClose>
                
                <div className="space-y-2">
                  <div className="text-gray-700 font-medium text-lg">RTK Corrections Providers</div>
                  <div className="pl-4 space-y-2">
                    <SheetClose asChild>
                      <Link to="/rtk-service-providers" className="block text-gray-600 hover:text-blue-600 transition-colors">
                        All Providers
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/rtk-service-providers/global" className="block text-gray-600 hover:text-blue-600 transition-colors">
                        Global
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/rtk-service-providers/north-america" className="block text-gray-600 hover:text-blue-600 transition-colors">
                        North America
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/rtk-service-providers/europe" className="block text-gray-600 hover:text-blue-600 transition-colors">
                        Europe
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/rtk-service-providers/asia" className="block text-gray-600 hover:text-blue-600 transition-colors">
                        Asia
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/rtk-service-providers/south-america" className="block text-gray-600 hover:text-blue-600 transition-colors">
                        South America
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/rtk-service-providers/africa" className="block text-gray-600 hover:text-blue-600 transition-colors">
                        Africa
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/rtk-service-providers/oceania" className="block text-gray-600 hover:text-blue-600 transition-colors">
                        Oceania
                      </Link>
                    </SheetClose>
                  </div>
                </div>

                <SheetClose asChild>
                  <Link to="/rtk-hardware" className="text-gray-700 hover:text-blue-600 transition-colors text-lg">
                    RTK Hardware Providers
                  </Link>
                </SheetClose>
                
                <div className="space-y-2">
                  <div className="text-gray-700 font-medium text-lg">Resources</div>
                  <div className="pl-4 space-y-2">
                    <SheetClose asChild>
                      <Link to="/knowledge-base" className="block text-gray-600 hover:text-blue-600 transition-colors">
                        Knowledge Base
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/blog" className="block text-gray-600 hover:text-blue-600 transition-colors">
                        Blog
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/glossary" className="block text-gray-600 hover:text-blue-600 transition-colors">
                        Glossary
                      </Link>
                    </SheetClose>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <div className="text-gray-700 font-medium text-lg">Contact</div>
                  <div className="pl-4 space-y-2">
                    <SheetClose asChild>
                      <Link to="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors">
                        Contact Us
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/submit-listing" className="block text-gray-600 hover:text-blue-600 transition-colors">
                        Submit Listing
                      </Link>
                    </SheetClose>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
