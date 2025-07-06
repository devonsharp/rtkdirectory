
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Users, Globe, Layers, Building, Code, BookOpen, Map, Compass, Mountain, Palmtree, TreePine, Waves } from "lucide-react";
import FeaturedServiceCard from "@/components/FeaturedServiceCard";
import FeaturedHardwareCard from "@/components/FeaturedHardwareCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const continents = [
  { name: "All Providers", slug: "", count: 4, icon: Map },
  { name: "Global", slug: "global", count: 1, icon: Globe },
  { name: "North America", slug: "north-america", count: 1, icon: Mountain },
  { name: "Europe", slug: "europe", count: 1, icon: Building },
  { name: "Asia", slug: "asia", count: 1, icon: Compass },
  { name: "South America", slug: "south-america", count: 0, icon: Palmtree },
  { name: "Africa", slug: "africa", count: 0, icon: TreePine },
  { name: "Oceania", slug: "oceania", count: 0, icon: Waves }
];

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Find RTK Correction Services
            <span className="text-blue-600"> Worldwide</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            RTKDirectory is the global directory connecting surveyors, drone operators, 
            and GNSS users with trusted RTK correction service providers worldwide.
          </p>
          <Link to="/rtk-service-providers">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              View All RTK Providers
            </Button>
          </Link>
        </div>
      </section>

      {/* Browse by Region Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Browse RTK Providers by Region
          </h2>
          <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
            {continents.map((continent) => (
              <Link key={continent.slug} to={continent.slug === "" ? "/rtk-service-providers" : `/rtk-service-providers/${continent.slug}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer h-24 flex items-center justify-center">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-semibold text-gray-900 text-sm">{continent.name}</h3>
                    <p className="text-xs text-gray-600">
                      {continent.count} service{continent.count !== 1 ? 's' : ''}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured RTK Provider Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured RTK Correction Providers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our highlighted RTK correction service providers offering 
              exceptional coverage and reliability worldwide.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Carousel 
              className="w-full"
              opts={{
                loop: true
              }}
            >
              <CarouselContent>
                <CarouselItem>
                  <FeaturedServiceCard />
                </CarouselItem>
                <CarouselItem>
                  <FeaturedServiceCard isSecondCard={true} />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Featured RTK Hardware Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured RTK Hardware
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional-grade RTK equipment for precision positioning and surveying applications.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Carousel 
              className="w-full"
              opts={{
                loop: true
              }}
            >
              <CarouselContent>
                <CarouselItem>
                  <FeaturedHardwareCard />
                </CarouselItem>
                <CarouselItem>
                  <FeaturedHardwareCard isSecondCard={true} />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Blog Link Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <BookOpen className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Informed with Our RTK Knowledge Hub
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Discover the latest insights, guides, and best practices for RTK correction services, 
            GNSS technology, and precision positioning.
          </p>
          <Link to="/blog">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Read Our Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Who We Help
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Surveyors</h3>
                <p className="text-gray-600">
                  Professional land surveyors seeking accurate RTK correction services 
                  for precise measurements and mapping projects.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Drone Operators</h3>
                <p className="text-gray-600">
                  Commercial and professional drone pilots requiring high-precision 
                  positioning for mapping, inspection, and surveying operations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Layers className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">GIS Professionals</h3>
                <p className="text-gray-600">
                  Geographic Information Systems specialists who need precise positioning 
                  data for spatial analysis, mapping, and data collection projects.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Construction & Utility Companies</h3>
                <p className="text-gray-600">
                  Construction firms and utility companies requiring accurate positioning 
                  for infrastructure projects, asset management, and field operations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">GNSS Users</h3>
                <p className="text-gray-600">
                  Engineers, researchers, and professionals using GNSS equipment 
                  who need reliable correction services for their applications.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">GNSS Developers</h3>
                <p className="text-gray-600">
                  Software developers and hardware engineers creating GNSS applications 
                  and devices that integrate RTK correction capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why List With Us Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why List Your RTK Service With Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Global Reach</h3>
              <p className="text-gray-600">
                Connect with professionals worldwide who need RTK correction services 
                in your region.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Targeted Audience</h3>
              <p className="text-gray-600">
                Reach qualified surveyors, drone operators, and GNSS users actively 
                seeking correction services.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Simple Process</h3>
              <p className="text-gray-600">
                Easy listing submission with manual review and payment processing 
                for quality assurance.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">Professional Directory</h3>
              <p className="text-gray-600">
                Be part of the most comprehensive RTK correction services directory 
                on the web.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Link to="/submit-listing">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Get Listed Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
