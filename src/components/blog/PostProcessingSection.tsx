
import { Card, CardContent } from "@/components/ui/card";

const PostProcessingSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Post-Processing Workflow</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h3 className="font-semibold text-gray-900 mb-4">Recommended Processing Steps:</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-900 mb-3">RTK Processing</h4>
            <ol className="text-gray-700 text-sm space-y-2">
              <li>1. Import raw GNSS data and images</li>
              <li>2. Process RTK corrections (if PPK workflow)</li>
              <li>3. Synchronize GPS time with image timestamps</li>
              <li>4. Verify coordinate system accuracy</li>
              <li>5. Quality control position data</li>
            </ol>
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Photogrammetric Processing</h4>
            <ol className="text-gray-700 text-sm space-y-2">
              <li>1. Import images with GPS coordinates</li>
              <li>2. Perform image alignment</li>
              <li>3. Optimize camera parameters</li>
              <li>4. Generate dense point cloud</li>
              <li>5. Create orthomosaic and DSM</li>
            </ol>
          </div>
        </div>
      </div>

      <Card className="border-purple-200 bg-purple-50">
        <CardContent className="p-6">
          <h3 className="font-semibold text-purple-800 mb-3">Processing Software Recommendations</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-medium text-purple-700 mb-2">RTK/PPK Processing</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• RTKLIB (free)</li>
                <li>• NovAtel Inertial Explorer</li>
                <li>• Waypoint Inertial Explorer</li>
                <li>• Trimble Business Center</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-purple-700 mb-2">Photogrammetry</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• Agisoft Metashape</li>
                <li>• Pix4D Desktop</li>
                <li>• RealityCapture</li>
                <li>• DroneDeploy (cloud)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-purple-700 mb-2">Integrated Solutions</h4>
              <ul className="text-purple-700 text-sm space-y-1">
                <li>• UgCS Pro</li>
                <li>• Pix4D Cloud</li>
                <li>• Trimble UAS Master</li>
                <li>• Leica Infinity</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default PostProcessingSection;
