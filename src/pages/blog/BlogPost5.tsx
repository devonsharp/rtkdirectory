
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, CheckCircle } from "lucide-react";

const BlogPost5 = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Blog
      </Link>

      <article className="prose prose-lg max-w-none">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Common RTK Setup Mistakes and How to Avoid Them
          </h1>
          <div className="flex items-center text-gray-500 space-x-2 mb-6">
            <span>February 22, 2024</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </header>

        <Card className="mb-8 border-yellow-200 bg-yellow-50">
          <CardContent className="p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-lg text-yellow-800 leading-relaxed">
                  Even experienced professionals can make critical mistakes when setting up RTK systems. 
                  Learn from common pitfalls to ensure optimal performance and avoid costly errors in the field.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">The Top 5 RTK Setup Mistakes</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Poor Antenna Placement</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>The Problem:</strong> One of the most common mistakes is positioning the antenna too close to reflective surfaces, 
                under tree canopy, or in areas with limited sky view. This significantly degrades signal quality and can prevent 
                proper RTK initialization.
              </p>
              <div className="bg-gray-50 border-l-4 border-l-blue-500 p-4 mb-4">
                <p className="font-semibold text-gray-900 mb-2">How to Fix It:</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Maintain minimum 15° elevation mask above horizon</li>
                  <li>• Keep antenna at least 2 meters from reflective surfaces</li>
                  <li>• Ensure clear view of sky in all directions</li>
                  <li>• Use a ground plane for handheld units to reduce multipath</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Incorrect Communication Settings</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>The Problem:</strong> Mismatched communication parameters between receiver and correction source, 
                or using wrong correction formats, can prevent RTK corrections from being received properly.
              </p>
              <div className="bg-gray-50 border-l-4 border-l-blue-500 p-4 mb-4">
                <p className="font-semibold text-gray-900 mb-2">How to Fix It:</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Verify correction format (RTCM 3.x is recommended)</li>
                  <li>• Match baud rates and communication protocols exactly</li>
                  <li>• Test communication before heading to the field</li>
                  <li>• Keep backup communication methods ready</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Ignoring Base Station Quality</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>The Problem:</strong> Using poorly positioned base stations or ignoring base station health indicators 
                can result in unreliable corrections and reduced accuracy.
              </p>
              <div className="bg-gray-50 border-l-4 border-l-blue-500 p-4 mb-4">
                <p className="font-semibold text-gray-900 mb-2">How to Fix It:</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Monitor base station signal quality indicators regularly</li>
                  <li>• Verify base station coordinates are accurate</li>
                  <li>• Check age of corrections (should be less than 10 seconds)</li>
                  <li>• Use multiple base stations when available for redundancy</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Insufficient Initialization Time</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>The Problem:</strong> Starting measurements before RTK initialization is complete or ignoring 
                fix quality indicators leads to inaccurate positioning data.
              </p>
              <div className="bg-gray-50 border-l-4 border-l-blue-500 p-4 mb-4">
                <p className="font-semibold text-gray-900 mb-2">How to Fix It:</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Wait for "RTK Fixed" status before taking measurements</li>
                  <li>• Allow 2-5 minutes for proper initialization</li>
                  <li>• Monitor position quality indicators continuously</li>
                  <li>• Re-initialize if fix is lost during work</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Wrong Coordinate System Setup</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>The Problem:</strong> Using incorrect datum, projection, or coordinate system parameters 
                can result in systematic errors that affect all measurements.
              </p>
              <div className="bg-gray-50 border-l-4 border-l-blue-500 p-4 mb-4">
                <p className="font-semibold text-gray-900 mb-2">How to Fix It:</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Verify project coordinate system requirements before setup</li>
                  <li>• Use correct datum and projection parameters</li>
                  <li>• Test setup with known control points</li>
                  <li>• Document all coordinate system settings for future reference</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

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

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Field Procedure Mistakes</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Setup Errors</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Critical setup mistakes include incorrect antenna height measurement, not leveling the antenna properly, 
              measuring to the wrong reference point, and using inconsistent setup procedures between measurements.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Quality Control Oversights</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Skipping redundant measurements, not checking against known control points, ignoring quality indicators, 
              and insufficient documentation can compromise the reliability of survey results.
            </p>
          </div>

          <Card className="bg-blue-50 border-blue-200 mb-8">
            <CardContent className="p-6">
              <h3 className="font-semibold text-blue-900 mb-4">Essential Quality Assurance Checklist:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <ul className="text-blue-800 space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Measure antenna height twice for verification</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Check setup against known control points</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Document all setup parameters thoroughly</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="text-blue-800 space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Verify RTK fix quality before measurements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Take redundant measurements for validation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Monitor environmental conditions continuously</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Prevention Strategies</h2>
          
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Training and Education</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Regular equipment training sessions, staying updated on industry best practices, learning from experienced operators, 
              and attending manufacturer workshops are essential for preventing common mistakes.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Standard Operating Procedures</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Develop written procedures for equipment setup, create comprehensive setup checklists, implement quality control steps 
              at each phase of work, and document lessons learned from past projects.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Regular Maintenance</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Schedule regular equipment calibration, keep firmware updated to latest versions, maintain backup equipment 
              in good working condition, and thoroughly test equipment before critical projects.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-2">Emergency Troubleshooting</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-yellow-800 mb-4">When Things Go Wrong in the Field:</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="bg-yellow-600 text-white text-sm px-2 py-1 rounded font-medium">1</span>
                <span className="text-yellow-800">Stop work immediately if RTK fix is lost - don't continue with degraded accuracy</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-yellow-600 text-white text-sm px-2 py-1 rounded font-medium">2</span>
                <span className="text-yellow-800">Check communication links and satellite visibility indicators</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-yellow-600 text-white text-sm px-2 py-1 rounded font-medium">3</span>
                <span className="text-yellow-800">Re-initialize the system and verify accuracy with known control points</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="bg-yellow-600 text-white text-sm px-2 py-1 rounded font-medium">4</span>
                <span className="text-yellow-800">Contact technical support if problems persist - don't guess at solutions</span>
              </div>
            </div>
          </div>
        </section>

        <Card className="bg-blue-50 border-blue-200 mt-8">
          <CardContent className="p-6">
            <h3 className="font-semibold text-blue-800 mb-2">Need Expert Support?</h3>
            <p className="text-blue-700 mb-4">
              Connect with RTK service providers who offer comprehensive training and technical support to help you avoid these common mistakes.
            </p>
            <Link to="/directory">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Find Expert Providers
              </Button>
            </Link>
          </CardContent>
        </Card>
      </article>
    </div>
  );
};

export default BlogPost5;
