
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Mail, Globe, Map, Gift, ExternalLink } from "lucide-react";

interface Listing {
  id: number;
  name: string;
  company: string;
  region: string;
  continent: string;
  country: string;
  email: string;
  website: string;
  description: string;
  pricing: "free" | "paid";
  priceDetails: string;
  coverageMapLink: string;
  freeTrialLink: string | null;
  providerInfo: string;
}

interface ListingsTableProps {
  listings: Listing[];
}

const ListingsTable = ({ listings }: ListingsTableProps) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Region</TableHead>
            <TableHead>Provider</TableHead>
            <TableHead>Service Name</TableHead>
            <TableHead>Pricing</TableHead>
            <TableHead>Website</TableHead>
            <TableHead>Coverage Map</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listings.map((listing) => (
            <TableRow key={listing.id}>
              <TableCell>
                <div className="text-sm">
                  <div>{listing.country}</div>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <div className="font-medium text-gray-900">{listing.company}</div>
                </div>
              </TableCell>
              <TableCell>
                <div className="font-medium">{listing.name}</div>
              </TableCell>
              <TableCell>
                <Badge 
                  variant="secondary"
                  className="bg-gray-100 text-gray-800"
                >
                  {listing.pricing === "free" ? "Free" : "Paid"}
                </Badge>
              </TableCell>
              <TableCell>
                <a 
                  href={listing.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                >
                  <Globe className="h-3 w-3 mr-1" />
                  <ExternalLink className="h-3 w-3" />
                </a>
              </TableCell>
              <TableCell>
                <a 
                  href={listing.coverageMapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                >
                  <Map className="h-3 w-3 mr-1" />
                  <ExternalLink className="h-3 w-3" />
                </a>
              </TableCell>
              <TableCell>
                <a 
                  href={`mailto:${listing.email}`}
                  className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                >
                  <Mail className="h-3 w-3 mr-1" />
                  <ExternalLink className="h-3 w-3" />
                </a>
              </TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <Button 
                    size="sm" 
                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1 h-7"
                    onClick={() => window.open(`mailto:${listing.email}`, '_blank')}
                  >
                    Contact
                  </Button>
                  {listing.freeTrialLink && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="text-green-600 border-green-600 hover:bg-green-50 text-xs px-2 py-1 h-7"
                      onClick={() => window.open(listing.freeTrialLink!, '_blank')}
                    >
                      <Gift className="h-3 w-3 mr-1" />
                      Trial
                    </Button>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListingsTable;
