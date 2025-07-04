import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const GlossaryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const glossaryTerms = [
    {
      term: "RTK",
      definition: "Real-Time Kinematic - A satellite navigation technique used to enhance the precision of position data derived from satellite-based positioning systems."
    },
    {
      term: "Base Station",
      definition: "A fixed GNSS receiver at a known location that provides correction data to mobile receivers to improve positioning accuracy."
    },
    {
      term: "CORS",
      definition: "Continuously Operating Reference Stations - A network of GNSS reference stations that provide correction data for high-precision positioning."
    },
    {
      term: "GNSS",
      definition: "Global Navigation Satellite System - A general term for satellite navigation systems including GPS, GLONASS, Galileo, and BeiDou."
    },
    {
      term: "PPK",
      definition: "Post-Processed Kinematic - A positioning technique where GNSS data is processed after collection to achieve high accuracy."
    },
    {
      term: "Rover",
      definition: "A mobile GNSS receiver that receives correction data from a base station to achieve centimeter-level accuracy."
    },
    {
      term: "NTRIP",
      definition: "Networked Transport of RTCM via Internet Protocol - A protocol for streaming GNSS correction data over the internet."
    },
    {
      term: "RTCM",
      definition: "Radio Technical Commission for Maritime Services - A standard format for transmitting differential GNSS correction data."
    },
    {
      term: "Baseline",
      definition: "The distance between a base station and rover receiver, which affects the accuracy of RTK corrections."
    },
    {
      term: "Ambiguity Resolution",
      definition: "The process of determining the integer number of carrier wave cycles between satellite and receiver."
    }
  ];

  const filteredTerms = glossaryTerms.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          RTK Glossary
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A comprehensive glossary of terms and definitions related to RTK correction services, 
          GNSS technology, and precision positioning.
        </p>
      </div>

      <div className="mb-8">
        <Input
          type="text"
          placeholder="Search terms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-md mx-auto"
        />
      </div>

      <div className="space-y-4">
        {filteredTerms.map((item, index) => (
          <Card key={index} className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg text-blue-600">
                {item.term}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                {item.definition}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No terms found matching "{searchTerm}"
          </p>
        </div>
      )}

      <div className="mt-16 text-center bg-blue-50 rounded-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Need More Information?
        </h3>
        <p className="text-gray-600 mb-6">
          Can't find what you're looking for? Check out our knowledge base or contact us directly.
        </p>
        <div className="space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Browse Knowledge Base
          </Button>
          <Button variant="outline" className="border-blue-600 text-blue-600">
            Contact Support
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GlossaryPage;
