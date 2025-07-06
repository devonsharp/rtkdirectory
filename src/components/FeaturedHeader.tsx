
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import FeaturedServiceCard from "./FeaturedServiceCard";
import FeaturedHardwareCard from "./FeaturedHardwareCard";

const FeaturedHeader = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured RTK Providers & Hardware
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover trusted RTK correction service providers and professional-grade hardware solutions 
            recommended for precision positioning applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Service Providers */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Featured Service Providers
            </h3>
            <div className="max-w-lg mx-auto">
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

          {/* Featured Hardware */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Featured Hardware
            </h3>
            <div className="max-w-lg mx-auto">
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
        </div>
      </div>
    </section>
  );
};

export default FeaturedHeader;
