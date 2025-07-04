
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface DirectorySearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  pricingFilter: string;
  setPricingFilter: (filter: string) => void;
  regionFilter: string;
  setRegionFilter: (filter: string) => void;
}

const DirectorySearch = ({
  searchTerm,
  setSearchTerm,
  pricingFilter,
  setPricingFilter,
  regionFilter,
  setRegionFilter
}: DirectorySearchProps) => {
  return (
    <div className="mb-8 space-y-4">
      <Input
        type="text"
        placeholder="Search by service name, region, country, or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-md mx-auto"
      />
      
      <div className="flex flex-wrap justify-center gap-4">
        <Select value={pricingFilter} onValueChange={setPricingFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="All Pricing" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Pricing</SelectItem>
            <SelectItem value="free">Free Services</SelectItem>
            <SelectItem value="paid">Paid Services</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={regionFilter} onValueChange={setRegionFilter}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="All Regions" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Regions</SelectItem>
            <SelectItem value="global">Global</SelectItem>
            <SelectItem value="north-america">North America</SelectItem>
            <SelectItem value="europe">Europe</SelectItem>
            <SelectItem value="asia">Asia</SelectItem>
            <SelectItem value="south-america">South America</SelectItem>
            <SelectItem value="africa">Africa</SelectItem>
            <SelectItem value="oceania">Oceania</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default DirectorySearch;
