
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const SubmitListingPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    region: "",
    email: "",
    website: "", 
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.region || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would submit to a backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Listing Submitted!",
      description: "We will review your information and contact you for payment. All payments are handled manually by email.",
    });
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      region: "",
      email: "",
      website: "",
      description: ""
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Submit Your RTK Service Listing
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join the world's most comprehensive RTK correction services directory. 
          Connect with surveyors, drone operators, and GNSS users worldwide.
        </p>
      </div>

      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-900">Listing Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                  Service Name *
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="e.g., PrecisionRTK Solutions"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                  Company Name
                </Label>
                <Input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  placeholder="e.g., PrecisionRTK Solutions LLC"
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="region" className="text-sm font-medium text-gray-700">
                Region/Continent *
              </Label>
              <Select onValueChange={(value) => setFormData({...formData, region: value})}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select your service region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="North America">North America</SelectItem>
                  <SelectItem value="Europe">Europe</SelectItem>
                  <SelectItem value="Asia">Asia</SelectItem>
                  <SelectItem value="South America">South America</SelectItem>
                  <SelectItem value="Africa">Africa</SelectItem>
                  <SelectItem value="Oceania">Oceania</SelectItem>
                  <SelectItem value="Global">Global</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Contact Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="contact@yourservice.com"
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <Label htmlFor="website" className="text-sm font-medium text-gray-700">
                  Website URL
                </Label>
                <Input
                  id="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({...formData, website: e.target.value})}
                  placeholder="https://yourservice.com"
                  className="mt-1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                Service Description *
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Describe your RTK correction service, coverage area, accuracy, support, and any special features..."
                className="mt-1 min-h-32"
                required
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Payment Information</h3>
              <p className="text-blue-700 text-sm">
                We will review your information and contact you for payment. 
                All payments are handled manually by email. Our team will reach out 
                within 2-3 business days with pricing and next steps.
              </p>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
            >
              Submit Listing for Review
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubmitListingPage;
