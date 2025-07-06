
const EquipmentMaintenanceSection = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Equipment and Maintenance Issues</h2>
      
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Battery Management Problems</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Poor battery management is a frequent cause of field failures. Common issues include not charging batteries 
          fully before use, ignoring low battery warnings, using old or degraded batteries, and having no backup power plan.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          <strong>Best practices:</strong> Always carry spare batteries, monitor battery levels regularly throughout the day, 
          use manufacturer-recommended batteries, and replace batteries that no longer hold adequate charge.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Firmware and Software Issues</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Using outdated firmware versions, incompatible software configurations, skipping calibration procedures, 
          and ignoring software updates can lead to performance problems and compatibility issues.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          <strong>Best practices:</strong> Keep firmware updated to the latest stable versions, perform regular equipment 
          calibration according to manufacturer specifications, and test equipment after any updates before field use.
        </p>
      </div>
    </section>
  );
};

export default EquipmentMaintenanceSection;
