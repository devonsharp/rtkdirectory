
const NextGenConstellationsSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Next-Generation Satellite Constellations</h2>
      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
        The GNSS landscape continues to evolve with constellation modernization and new satellite systems:
      </p>
      
      <div className="mb-8 space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">GPS Modernization</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            GPS III satellites bring improved signal power, new L1C signal, and enhanced accuracy. The constellation will be fully modernized by 2030, 
            featuring advanced anti-jamming capabilities and better civilian signal availability.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Galileo Second Generation</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Galileo G2 satellites will feature enhanced signal power, improved accuracy, and new services for professional applications. 
            The system will offer unprecedented positioning performance for European users and global applications requiring high precision.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Regional Augmentation Systems</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            QZSS (Japan), NavIC (India), and other regional systems are expanding to provide enhanced regional coverage and specialized services. 
            These systems complement global constellations with improved accuracy and availability in their respective regions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NextGenConstellationsSection;
