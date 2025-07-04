
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Drone, MapPin, Camera, Settings } from "lucide-react";

const BlogPost6 = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Blog
      </Link>

      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            RTK Correction Services for Drone Mapping: Best Practices
          </h1>
          <div className="flex items-center text-gray-500 space-x-2 mb-6">
            <span>February 15, 2024</span>
            <span>•</span>
            <span>9 min read</span>
          </div>
        </header>

        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <Drone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-lg text-blue-800 leading-relaxed">
                  Drone mapping with RTK corrections delivers survey-grade accuracy for photogrammetry, LiDAR, and inspection missions. 
                  This comprehensive guide covers everything from setup to post-processing best practices.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why RTK Matters for Drone Mapping</h2>
          <p className="text-gray-700 mb-4">
            Traditional drone mapping relies on ground control points (GCPs) for accuracy, requiring significant field time and 
            limiting operational efficiency. RTK-enabled drones eliminate or drastically reduce GCP requirements while maintaining 
            survey-grade accuracy.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-green-800 mb-3">RTK Advantages</h3>
                <ul className="text-green-700 space-y-2">
                  <li>• Achieve 2-5 cm absolute accuracy</li>
                  <li>• Reduce or eliminate GCPs</li>
                  <li>• Faster field operations</li>
                  <li>• Consistent accuracy across large areas</li>
                  <li>• Real-time quality assurance</li>
                  <li>• Reduced post-processing time</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-blue-800 mb-3">Application Benefits</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• Corridor mapping without GCPs</li>
                  <li>• Rapid emergency response surveys</li>
                  <li>• Precision agriculture monitoring</li>
                  <li>• Construction progress tracking</li>
                  <li>• Environmental monitoring</li>
                  <li>• Infrastructure inspection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">RTK Integration Methods</h2>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Settings className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Onboard RTK Receivers</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Many modern mapping drones include integrated RTK receivers that connect directly to correction services 
                  via cellular or radio links.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Advantages:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Seamless integration</li>
                      <li>• Real-time corrections</li>
                      <li>• Simplified workflow</li>
                      <li>• Factory calibration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Considerations:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Higher initial cost</li>
                      <li>• Communication requirements</li>
                      <li>• Limited to specific platforms</li>
                      <li>• Subscription costs</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <MapPin className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">PPK Processing Workflow</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Post-Processed Kinematic (PPK) approach records raw GNSS data during flight and applies corrections 
                  during post-processing, ideal for areas without real-time communication.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Advantages:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Works in remote areas</li>
                      <li>• No communication needed</li>
                      <li>• Flexible processing options</li>
                      <li>• Lower operational costs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Considerations:</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Post-processing required</li>
                      <li>• Delayed quality feedback</li>
                      <li>• More complex workflow</li>
                      <li>• Processing expertise needed</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pre-Flight Planning Best Practices</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Camera className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">Mission Planning</h3>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li>• Verify RTK coverage in survey area</li>
                  <li>• Plan for adequate overlap (80% forward, 60% side)</li>
                  <li>• Consider sun angle and lighting conditions</li>
                  <li>• Plan emergency landing zones</li>
                  <li>• Check weather conditions and wind speed</li>
                  <li>• Ensure sufficient battery life</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Settings className="h-5 w-5 text-green-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">System Preparation</h3>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li>• Test RTK connection before flight</li>
                  <li>• Verify coordinate system settings</li>
                  <li>• Calibrate compass and IMU</li>
                  <li>• Check camera settings and memory cards</li>
                  <li>• Prepare backup communication methods</li>
                  <li>• Document all configuration settings</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Flight Execution Guidelines</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-yellow-800 mb-3">Critical Flight Considerations</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-yellow-700 mb-2">Before Takeoff:</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Verify RTK fixed solution</li>
                  <li>• Allow 2-3 minutes for initialization</li>
                  <li>• Check satellite visibility and DOP values</li>
                  <li>• Confirm correction age &lt; 10 seconds</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-yellow-700 mb-2">During Flight:</h4>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>• Monitor RTK status continuously</li>
                  <li>• Abort if RTK fix is lost</li>
                  <li>• Maintain consistent flight speed</li>
                  <li>• Avoid rapid altitude changes</li>
                </ul>
              </div>
            </div>
          </div>

          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-blue-800 mb-3">Optimal Flight Parameters</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">Altitude</h4>
                  <p className="text-blue-700 text-sm">Maintain consistent AGL height, typically 80-120m for mapping missions</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">Speed</h4>
                  <p className="text-blue-700 text-sm">Fly at 8-12 m/s for optimal image quality and overlap</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-700 mb-2">Overlap</h4>
                  <p className="text-blue-700 text-sm">Maintain 80% forward, 60% side overlap minimum</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quality Control and Validation</h2>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">In-Flight Monitoring</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">RTK Status Indicators</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Fixed solution: Green status</li>
                      <li>• Float solution: Yellow warning</li>
                      <li>• Single point: Red alert</li>
                      <li>• Correction age: &lt; 10 seconds</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Flight Metrics</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Consistent ground speed</li>
                      <li>• Stable altitude profile</li>
                      <li>• Adequate image overlap</li>
                      <li>• Proper exposure settings</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-orange-500">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Post-Flight Validation</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Data Quality Checks</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Verify image count and coverage</li>
                      <li>• Check GPS log continuity</li>
                      <li>• Validate overlap percentages</li>
                      <li>• Review exposure consistency</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Accuracy Verification</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Compare to check points</li>
                      <li>• Verify coordinate system</li>
                      <li>• Check altitude consistency</li>
                      <li>• Validate with known features</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

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

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Troubleshooting Common Issues</h2>
          
          <div className="space-y-4">
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-4">
                <h3 className="font-semibold text-red-800 mb-2">RTK Fix Loss During Flight</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-red-700 mb-1">Causes:</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Communication interruption</li>
                      <li>• Satellite visibility obstruction</li>
                      <li>• High DOP values</li>
                      <li>• Atmospheric disturbances</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-700 mb-1">Solutions:</h4>
                    <ul className="text-red-700 text-sm space-y-1">
                      <li>• Return to home and re-initialize</li>
                      <li>• Switch to backup correction source</li>
                      <li>• Increase flight altitude</li>
                      <li>• Abort mission if persistent</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-4">
                <h3 className="font-semibold text-orange-800 mb-2">Coordinate System Errors</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-orange-700 mb-1">Symptoms:</h4>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Large positional offsets</li>
                      <li>• Inconsistent check point residuals</li>
                      <li>• Scale discrepancies</li>
                      <li>• Projection distortions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-700 mb-1">Solutions:</h4>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Verify datum and projection settings</li>
                      <li>• Check with survey control points</li>
                      <li>• Validate coordinate transformations</li>
                      <li>• Use local coordinate systems</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

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

        <Card className="bg-blue-50 border-blue-200 mt-8">
          <CardContent className="p-6">
            <h3 className="font-semibold text-blue-800 mb-2">Ready for RTK-Enabled Mapping?</h3>
            <p className="text-blue-700 mb-4">
              Find RTK correction service providers with proven experience in drone mapping applications and specialized support for aerial surveys.
            </p>
            <Link to="/directory">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Find Drone Mapping Providers
              </Button>
            </Link>
          </CardContent>
        </Card>
      </article>
    </div>
  );
};

export default BlogPost6;
