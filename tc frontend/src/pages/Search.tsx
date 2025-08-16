import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Search as SearchIcon, Image, FileText, Clock, Shield } from "lucide-react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const searchResults = [
    {
      id: 1,
      title: "Blockchain Architecture Patterns",
      description: "Comprehensive guide to modern blockchain architecture and design patterns.",
      confidence: 94,
      proofStatus: "verified",
      timestamp: "2024-01-15T10:30:00Z"
    },
    {
      id: 2,
      title: "Smart Contract Security Best Practices",
      description: "Essential security practices for smart contract development and auditing.",
      confidence: 89,
      proofStatus: "verified",
      timestamp: "2024-01-15T09:15:00Z"
    },
    {
      id: 3,
      title: "DeFi Protocol Comparison Analysis",
      description: "Detailed analysis and comparison of major DeFi protocols and their mechanisms.",
      confidence: 87,
      proofStatus: "pending",
      timestamp: "2024-01-15T08:45:00Z"
    }
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Search & Discover</h1>
          <p className="text-lg text-muted-foreground">
            Upload images or enter queries to search through our ZK-verified knowledge base
          </p>
        </div>

        {/* Search Interface */}
        <Card className="glass-card p-8 mb-8">
          <div className="space-y-6">
            {/* File Upload */}
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept="image/*"
                onChange={handleFileUpload}
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium mb-2">Upload an image to search</p>
                <p className="text-muted-foreground">Drag and drop or click to select files</p>
              </label>
              
              {uploadedFile && (
                <div className="mt-4 flex items-center justify-center space-x-2 text-sm text-primary">
                  <Image className="w-4 h-4" />
                  <span>{uploadedFile.name}</span>
                </div>
              )}
            </div>

            {/* Text Query */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Or enter a text query</label>
                <Textarea
                  placeholder="Enter your search query here..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="min-h-[120px] glass-card"
                />
              </div>
              
              <Button className="hero-button w-full sm:w-auto">
                <SearchIcon className="w-4 h-4 mr-2" />
                Search with ZK Proof
              </Button>
            </div>
          </div>
        </Card>

        {/* Search Results */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Search Results</h2>
            <span className="text-muted-foreground">{searchResults.length} results found</span>
          </div>

          <div className="space-y-4">
            {searchResults.map((result) => (
              <Card key={result.id} className="glass-card p-6 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
                    <p className="text-muted-foreground mb-4">{result.description}</p>
                    
                    <div className="flex items-center space-x-6 text-sm">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-4 h-4 text-primary" />
                        <span>Confidence: {result.confidence}%</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Shield className="w-4 h-4 text-green-400" />
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          result.proofStatus === 'verified' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {result.proofStatus}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{new Date(result.timestamp).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="glass-card ml-4">
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;