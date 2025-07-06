
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import MistakeCard from "@/components/blog/MistakeCard";
import EquipmentMaintenanceSection from "@/components/blog/EquipmentMaintenanceSection";
import FieldProcedureSection from "@/components/blog/FieldProcedureSection";
import PreventionStrategiesSection from "@/components/blog/PreventionStrategiesSection";
import EmergencyTroubleshootingSection from "@/components/blog/EmergencyTroubleshootingSection";

const BlogPost5 = () => {
  const mistakesData = [
    {
      number: 1,
      title: "Poor Antenna Placement",
      problem: "One of the most common mistakes is positioning the antenna too close to reflective surfaces, under tree canopy, or in areas with limited sky view. This significantly degrades signal quality and can prevent proper RTK initialization.",
      solutions: [
        "• Maintain minimum 15° elevation mask above horizon",
        "• Keep antenna at least 2 meters from reflective surfaces",
        "• Ensure clear view of sky in all directions",
        "• Use a ground plane for handheld units to reduce multipath"
      ]
    },
    {
      number: 2,
      title: "Incorrect Communication Settings",
      problem: "Mismatched communication parameters between receiver and correction source, or using wrong correction formats, can prevent RTK corrections from being received properly.",
      solutions: [
        "• Verify correction format (RTCM 3.x is recommended)",
        "• Match baud rates and communication protocols exactly",
        "• Test communication before heading to the field",
        "• Keep backup communication methods ready"
      ]
    },
    {
      number: 3,
      title: "Ignoring Base Station Quality",
      problem: "Using poorly positioned base stations or ignoring base station health indicators can result in unreliable corrections and reduced accuracy.",
      solutions: [
        "• Monitor base station signal quality indicators regularly",
        "• Verify base station coordinates are accurate",
        "• Check age of corrections (should be less than 10 seconds)",
        "• Use multiple base stations when available for redundancy"
      ]
    },
    {
      number: 4,
      title: "Insufficient Initialization Time",
      problem: "Starting measurements before RTK initialization is complete or ignoring fix quality indicators leads to inaccurate positioning data.",
      solutions: [
        "• Wait for \"RTK Fixed\" status before taking measurements",
        "• Allow 2-5 minutes for proper initialization",
        "• Monitor position quality indicators continuously",
        "• Re-initialize if fix is lost during work"
      ]
    },
    {
      number: 5,
      title: "Wrong Coordinate System Setup",
      problem: "Using incorrect datum, projection, or coordinate system parameters can result in systematic errors that affect all measurements.",
      solutions: [
        "• Verify project coordinate system requirements before setup",
        "• Use correct datum and projection parameters",
        "• Test setup with known control points",
        "• Document all coordinate system settings for future reference"
      ]
    }
  ];

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
            {mistakesData.map((mistake, index) => (
              <MistakeCard
                key={index}
                number={mistake.number}
                title={mistake.title}
                problem={mistake.problem}
                solutions={mistake.solutions}
              />
            ))}
          </div>
        </section>

        <EquipmentMaintenanceSection />
        <FieldProcedureSection />
        <PreventionStrategiesSection />
        <EmergencyTroubleshootingSection />

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
