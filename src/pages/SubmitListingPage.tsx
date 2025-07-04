
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
    email: "",
    providerType: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation - only check if at least one field is filled
    if (!formData.name && !formData.company && !formData.email && !formData.subject && !formData.message) {
      toast({
        title: "Empty Form",
        description: "Please fill in at least one field.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would submit to a backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Listing Submitted!",
      description: "Our team will reach out within 2-3 business days with more information and next steps.",
    });
    
    // Reset form
    setFormData({
      name: "",
      company: "",
      email: "",
      providerType: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Submit Your Listing
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Join the world's most comprehensive RTK directory. Whether you provide correction services 
          or hardware solutions, connect with surveyors, drone operators, and GNSS users worldwide.
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
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your name"
                  className="mt-1"
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
                  placeholder="Your company name"
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your.email@example.com"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="providerType" className="text-sm font-medium text-gray-700">
                  Provider Type
                </Label>
                <Select onValueChange={(value) => setFormData({...formData, providerType: value})}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select provider type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corrections-provider">Corrections Provider</SelectItem>
                    <SelectItem value="hardware-provider">Hardware Provider</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                Subject
              </Label>
              <Input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                placeholder="Brief description of your inquiry"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Tell us about your service, hardware, or inquiry. Include details about coverage area, products, or any specific requirements..."
                className="mt-1 min-h-32"
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-2">Next Steps</h3>
              <p className="text-blue-700 text-sm">
                Our team will reach out within 2-3 business days with more information and next steps 
                based on your inquiry type.
              </p>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
            >
              Submit Listing
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubmitListingPage;
