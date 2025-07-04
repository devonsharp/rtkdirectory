
const RTKHardwarePage = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">RTK Base Stations</h3>
            <p className="text-gray-600 mb-4">
              Reference stations and base station equipment for RTK networks, providing 
              correction data for high-precision positioning applications.
            </p>
            <div className="text-sm text-blue-600 font-medium">Coming Soon</div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">RTK Receivers (Rovers)</h3>
            <p className="text-gray-600 mb-4">
              Mobile RTK receivers and rover units for field surveying, construction, 
              agriculture, and precision navigation applications.
            </p>
            <div className="text-sm text-blue-600 font-medium">Coming Soon</div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Hardware Provider Directory Coming Soon
            </h2>
            <p className="text-gray-600 mb-6">
              We're building a comprehensive directory of RTK hardware providers. 
              If you're a manufacturer or distributor, get in touch to be featured.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              Submit Your Hardware Listing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTKHardwarePage;
