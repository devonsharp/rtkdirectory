
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import FeaturedHardwareCard from "./FeaturedHardwareCard";

const FeaturedHardwareBanner = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-emerald-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured RTK Hardware
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Professional-grade RTK equipment recommended for precision positioning applications.
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
  );
};

export default FeaturedHardwareBanner;
