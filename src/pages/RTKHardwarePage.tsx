import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLink } from "lucide-react";
import FeaturedHardwareCard from "@/components/FeaturedHardwareCard";

const RTKHardwarePage = () => {
  const baseStations = [
    {
      country: "United States",
      manufacturer: "Trimble",
      model: "NetR9 GNSS Reference Station",
      website: "https://www.trimble.com"
    },
    {
      country: "Switzerland",
      manufacturer: "Leica Geosystems",
      model: "GR50 GNSS Reference Station",
      website: "https://leica-geosystems.com"
    },
    {
      country: "Japan",
      manufacturer: "Topcon",
      model: "NET-G5 Network Base Station",
      website: "https://www.topcon.com"
    },
    {
      country: "Germany",
      manufacturer: "Septentrio",
      model: "PolaRx5TR Base Station",
      website: "https://www.septentrio.com"
    }
  ];

  const rovers = [
    {
      country: "United States",
      manufacturer: "Trimble",
      model: "R12i GNSS Receiver",
      website: "https://www.trimble.com"
    },
    {
      country: "Switzerland",
      manufacturer: "Leica Geosystems",
      model: "GS18 T GNSS RTK Rover",
      website: "https://leica-geosystems.com"
    },
    {
      country: "Japan",
      manufacturer: "Topcon",
      model: "HiPer VR GNSS Receiver",
      website: "https://www.topcon.com"
    },
    {
      country: "China",
      manufacturer: "CHC Navigation",
      model: "i80 GNSS RTK System",
      website: "https://www.chcnav.com"
    },
    {
      country: "United States",
      manufacturer: "Emlid",
      model: "Reach RS3 RTK Receiver",
      website: "https://www.emlid.com"
    }
  ];

  const rtkBoards = [
    {
      country: "Russia",
      manufacturer: "Emlid",
      model: "Reach M2 RTK Board",
      website: "https://www.emlid.com"
    },
    {
      country: "China",
      manufacturer: "u-blox",
      model: "ZED-F9P RTK Module",
      website: "https://www.u-blox.com"
    },
    {
      country: "United States",
      manufacturer: "SparkFun",
      model: "GPS-RTK2 Board (ZED-F9P)",
      website: "https://www.sparkfun.com"
    },
    {
      country: "Germany",
      manufacturer: "Septentrio",
      model: "mosaic-X5 RTK Module",
      website: "https://www.septentrio.com"
    },
    {
      country: "United States",
      manufacturer: "ArduSimple",
      model: "simpleRTK2B Board",
      website: "https://www.ardusimple.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            RTK Hardware Providers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover leading manufacturers and suppliers of RTK hardware solutions, 
            from base stations to rover receivers for precise positioning.
          </p>
        </div>

        {/* RTK Base Stations Section */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">RTK Base Stations</h3>
            <p className="text-gray-600 mb-6">
              Reference stations and base station equipment for RTK networks, providing 
              correction data for high-precision positioning applications.
            </p>
            
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Country</TableHead>
                    <TableHead>Manufacturer</TableHead>
                    <TableHead>Model</TableHead>
                    <TableHead>Website</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {baseStations.map((station, index) => (
                    <TableRow key={index}>
                      <TableCell>{station.country}</TableCell>
                      <TableCell className="font-medium">{station.manufacturer}</TableCell>
                      <TableCell>{station.model}</TableCell>
                      <TableCell>
                        <a 
                          href={station.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800"
                        >
                          Visit Website
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* RTK Receivers (Rovers) Section */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">RTK Receivers (Rovers)</h3>
            <p className="text-gray-600 mb-6">
              Mobile RTK receivers and rover units for field surveying, construction, 
              agriculture, and precision navigation applications.
            </p>
            
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Country</TableHead>
                    <TableHead>Manufacturer</TableHead>
                    <TableHead>Model</TableHead>
                    <TableHead>Website</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rovers.map((rover, index) => (
                    <TableRow key={index}>
                      <TableCell>{rover.country}</TableCell>
                      <TableCell className="font-medium">{rover.manufacturer}</TableCell>
                      <TableCell>{rover.model}</TableCell>
                      <TableCell>
                        <a 
                          href={rover.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800"
                        >
                          Visit Website
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* RTK Boards Section */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">RTK Boards & Modules</h3>
            <p className="text-gray-600 mb-6">
              Development boards and modules for integrating RTK functionality 
              into custom applications, robotics, and embedded systems.
            </p>
            
            <div className="border rounded-lg overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Country</TableHead>
                    <TableHead>Manufacturer</TableHead>
                    <TableHead>Model</TableHead>
                    <TableHead>Website</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rtkBoards.map((board, index) => (
                    <TableRow key={index}>
                      <TableCell>{board.country}</TableCell>
                      <TableCell className="font-medium">{board.manufacturer}</TableCell>
                      <TableCell>{board.model}</TableCell>
                      <TableCell>
                        <a 
                          href={board.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 hover:text-blue-800"
                        >
                          Visit Website
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </a>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>

        {/* Featured RTK Hardware Section */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Featured RTK Hardware
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional-grade RTK equipment recommended for precision positioning applications.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <FeaturedHardwareCard />
          </div>
        </section>
      </div>
    </div>
  );
};

export default RTKHardwarePage;
