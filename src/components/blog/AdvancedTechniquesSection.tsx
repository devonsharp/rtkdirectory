
import { Card, CardContent } from "@/components/ui/card";

const AdvancedTechniquesSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Techniques</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Oblique Imagery with RTK</h3>
            <p className="text-gray-700 mb-3 text-sm">
              Combining RTK with oblique cameras enables detailed facade mapping and 3D reconstruction 
              with survey-grade accuracy.
            </p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Plan multi-angle flight paths</li>
              <li>• Synchronize all camera triggers</li>
              <li>• Maintain consistent geometry</li>
              <li>• Process with specialized software</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-semibold text-gray-900 mb-3">LiDAR Integration</h3>
            <p className="text-gray-700 mb-3 text-sm">
              RTK-enabled LiDAR systems provide direct georeferencing of point clouds, 
              eliminating the need for traditional aerial triangulation.
            </p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Calibrate LiDAR-GPS offsets</li>
              <li>• Monitor RTK quality continuously</li>
              <li>• Validate with ground truth</li>
              <li>• Process with trajectory data</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AdvancedTechniquesSection;
