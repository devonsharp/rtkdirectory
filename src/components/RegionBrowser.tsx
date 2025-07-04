
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const continents = [
  { name: "Global", slug: "global", count: 1 },
  { name: "North America", slug: "north-america", count: 1 },
  { name: "Europe", slug: "europe", count: 1 },
  { name: "Asia", slug: "asia", count: 1 },
  { name: "South America", slug: "south-america", count: 0 },
  { name: "Africa", slug: "africa", count: 0 },
  { name: "Oceania", slug: "oceania", count: 0 }
];

const RegionBrowser = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Browse by Region
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {continents.map((continent) => (
          <Link key={continent.slug} to={`/directory/${continent.slug}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-20 flex items-center justify-center">
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
  );
};

export default RegionBrowser;
