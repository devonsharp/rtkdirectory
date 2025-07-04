
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, CheckCircle, XCircle } from "lucide-react";

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

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Top 10 RTK Setup Mistakes</h2>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Poor Antenna Placement</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>The Mistake:</strong> Positioning the antenna too close to reflective surfaces, under tree canopy, 
                      or in areas with limited sky view.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-green-800 font-medium mb-2">✓ The Fix:</p>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Maintain minimum 15° elevation mask</li>
                        <li>• Keep antenna 2+ meters from reflective surfaces</li>
                        <li>• Ensure clear view of sky in all directions</li>
                        <li>• Use a ground plane for handheld units</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Incorrect Communication Settings</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>The Mistake:</strong> Mismatched communication parameters between receiver and correction source, 
                      or using wrong correction formats.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-green-800 font-medium mb-2">✓ The Fix:</p>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Verify correction format (RTCM 3.x recommended)</li>
                        <li>• Match baud rates and communication protocols</li>
                        <li>• Test communication before field work</li>
                        <li>• Keep backup communication methods ready</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Ignoring Base Station Quality</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>The Mistake:</strong> Using poorly positioned base stations or ignoring base station health indicators.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-green-800 font-medium mb-2">✓ The Fix:</p>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Monitor base station signal quality indicators</li>
                        <li>• Verify base station coordinates accuracy</li>
                        <li>• Check age of corrections (should be &lt;10 seconds)</li>
                        <li>• Use multiple base stations when available</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Insufficient Initialization Time</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>The Mistake:</strong> Starting measurements before RTK initialization is complete or ignoring fix quality indicators.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-green-800 font-medium mb-2">✓ The Fix:</p>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Wait for "RTK Fixed" status before measuring</li>
                        <li>• Allow 2-5 minutes for initialization</li>
                        <li>• Monitor position quality indicators</li>
                        <li>• Re-initialize if fix is lost during work</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">5. Wrong Coordinate System Setup</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>The Mistake:</strong> Using incorrect datum, projection, or coordinate system parameters.
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded p-3">
                      <p className="text-green-800 font-medium mb-2">✓ The Fix:</p>
                      <ul className="text-green-700 text-sm space-y-1">
                        <li>• Verify project coordinate system requirements</li>
                        <li>• Use correct datum and projection parameters</li>
                        <li>• Test with known control points</li>
                        <li>• Document all coordinate system settings</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Equipment and Maintenance Mistakes</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-orange-800 mb-3">Battery Management Issues</h3>
                <ul className="text-orange-700 space-y-2 mb-4">
                  <li>• Not charging batteries fully before use</li>
                  <li>• Ignoring low battery warnings</li>
                  <li>• Using old or degraded batteries</li>
                  <li>• No backup power plan</li>
                </ul>
                <div className="bg-white border border-orange-200 rounded p-3">
                  <p className="text-orange-800 font-medium mb-1">Best Practices:</p>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Always carry spare batteries</li>
                    <li>• Monitor battery levels regularly</li>
                    <li>• Use manufacturer-recommended batteries</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-orange-800 mb-3">Firmware and Software Issues</h3>
                <ul className="text-orange-700 space-y-2 mb-4">
                  <li>• Using outdated firmware versions</li>
                  <li>• Incompatible software configurations</li>
                  <li>• Skipping calibration procedures</li>
                  <li>• Ignoring software updates</li>
                </ul>
                <div className="bg-white border border-orange-200 rounded p-3">
                  <p className="text-orange-800 font-medium mb-1">Best Practices:</p>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• Keep firmware updated</li>
                    <li>• Regular equipment calibration</li>
                    <li>• Test after any updates</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Field Procedure Mistakes</h2>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-red-800 mb-4">Common Field Errors:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-red-700 mb-2">Setup Errors</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Incorrect antenna height measurement</li>
                  <li>• Not leveling the antenna properly</li>
                  <li>• Measuring to wrong reference point</li>
                  <li>• Inconsistent setup procedures</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-red-700 mb-2">Quality Control</h4>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Skipping redundant measurements</li>
                  <li>• Not checking known points</li>
                  <li>• Ignoring quality indicators</li>
                  <li>• Insufficient documentation</li>
                </ul>
              </div>
            </div>
          </div>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <h3 className="font-semibold text-green-800 mb-4">Quality Assurance Checklist:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <ul className="text-green-700 space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Measure antenna height twice</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Check setup against known points</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Document all setup parameters</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="text-green-700 space-y-2">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Verify RTK fix quality</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Take redundant measurements</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Monitor environmental conditions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Prevention Strategies</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Training and Education</h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Regular equipment training sessions</li>
                  <li>• Stay updated on best practices</li>
                  <li>• Learn from experienced operators</li>
                  <li>• Attend manufacturer workshops</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Standard Procedures</h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Develop written procedures</li>
                  <li>• Create setup checklists</li>
                  <li>• Implement quality control steps</li>
                  <li>• Document lessons learned</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Regular Maintenance</h3>
                <ul className="text-gray-700 text-sm space-y-2">
                  <li>• Schedule equipment calibration</li>
                  <li>• Keep firmware updated</li>
                  <li>• Maintain backup equipment</li>
                  <li>• Test before critical projects</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Troubleshooting</h2>
          
          <Card className="border-yellow-200 bg-yellow-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-yellow-800 mb-4">When Things Go Wrong in the Field:</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <span className="bg-yellow-600 text-white text-sm px-2 py-1 rounded font-medium">1</span>
                  <span className="text-yellow-800">Stop work immediately if RTK fix is lost</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-yellow-600 text-white text-sm px-2 py-1 rounded font-medium">2</span>
                  <span className="text-yellow-800">Check communication and satellite visibility</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-yellow-600 text-white text-sm px-2 py-1 rounded font-medium">3</span>
                  <span className="text-yellow-800">Re-initialize system and verify with known points</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="bg-yellow-600 text-white text-sm px-2 py-1 rounded font-medium">4</span>
                  <span className="text-yellow-800">Contact technical support if problems persist</span>
                </div>
              </div>
            </CardContent>
          </Card>
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
