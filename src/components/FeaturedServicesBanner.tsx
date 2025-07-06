
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import FeaturedServiceCard from "./FeaturedServiceCard";

const FeaturedServicesBanner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured RTK Service Providers
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover trusted RTK correction service providers recommended for precision positioning applications.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
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
  );
};

export default FeaturedServicesBanner;
