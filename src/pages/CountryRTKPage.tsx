import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { countryRTKData } from "@/data/countryRTKData";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const CountryRTKPage = () => {
  const { country } = useParams<{ country: string }>();
  
  if (!country || !countryRTKData[country]) {
    return <Navigate to="/404" replace />;
  }

  const data = countryRTKData[country];

  const getCostBadgeVariant = (costType: string) => {
    if (costType === "Free") return "default";
    if (costType === "Paid Subscription") return "secondary";
    return "outline";
  };

  return (
    <>
      <Helmet>
        <title>{data.pageTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <meta name="keywords" content={`RTK, NTRIP, ${data.countryName}, GNSS, correction services, precision agriculture, surveying`} />
        <link rel="canonical" href={`https://rtkdirectory.lovable.app/rtk-correction-services-in-${data.slug}`} />
      </Helmet>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/rtk-service-providers" 
          className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Directory
        </Link>

        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {data.h1}
            </h1>
            <p className="text-muted-foreground">
              Comprehensive guide to RTK correction services and NTRIP casters available in {data.countryName}
            </p>
          </header>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Introduction and Context
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              {data.introContent}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Understanding RTK Networks in {data.countryName}
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              {data.networkContent}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-foreground mb-4">
              Choosing the Right NTRIP Provider
            </h2>
            <p className="text-foreground/90 leading-relaxed">
              {data.choosingContent}
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-foreground mb-6">
              RTK/NTRIP Providers in {data.countryName}
            </h2>
            
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="font-semibold">Service Name</TableHead>
                        <TableHead className="font-semibold">Provider/Operator</TableHead>
                        <TableHead className="font-semibold">Coverage</TableHead>
                        <TableHead className="font-semibold">Cost Type</TableHead>
                        <TableHead className="font-semibold">Type</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {data.providers.map((provider, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{provider.serviceName}</TableCell>
                          <TableCell>{provider.providerOperator}</TableCell>
                          <TableCell>{provider.coverage}</TableCell>
                          <TableCell>
                            <Badge variant={getCostBadgeVariant(provider.costType)}>
                              {provider.costType}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {provider.type}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="bg-muted/30 rounded-lg p-6 mb-10">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Need Help Choosing an RTK Provider?
            </h3>
            <p className="text-foreground/90 mb-4">
              Our comprehensive directory features detailed information about RTK correction services worldwide. 
              Compare providers, read reviews, and find the perfect solution for your precision positioning needs.
            </p>
            <Link 
              to="/rtk-service-providers"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Browse Full Directory →
            </Link>
          </section>

          <section className="border-t border-border pt-8">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              About This Guide
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This guide provides an overview of RTK correction services and NTRIP casters available in {data.countryName}. 
              Information is regularly updated to reflect the current state of RTK infrastructure and service offerings. 
              For the most current pricing, coverage details, and service specifications, please contact providers directly. 
              RTK Directory is an independent resource and is not affiliated with any service providers listed.
            </p>
          </section>
        </article>
      </div>
    </>
  );
};

export default CountryRTKPage;
