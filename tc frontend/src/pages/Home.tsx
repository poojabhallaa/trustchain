import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Search, Shield, Database, TrendingUp, ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Search,
      title: "Advanced Search",
      description: "Upload images and query with advanced ZK-powered search capabilities.",
      link: "/search"
    },
    {
      icon: Shield,
      title: "ZK Proofs",
      description: "View and verify zero-knowledge proofs with complete transparency.",
      link: "/proofs"
    },
    {
      icon: Database,
      title: "Indexer Network",
      description: "Participate in the decentralized indexing network and earn rewards.",
      link: "/indexers"
    },
    {
      icon: TrendingUp,
      title: "Leaderboards",
      description: "Track rankings, statistics, and top performers in the network.",
      link: "/leaderboard"
    }
  ];

  const recentQueries = [
    { id: 1, query: "Blockchain architecture diagram", status: "verified", timestamp: "2 minutes ago" },
    { id: 2, query: "Smart contract security audit", status: "pending", timestamp: "5 minutes ago" },
    { id: 3, query: "DeFi protocol comparison", status: "verified", timestamp: "12 minutes ago" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Zero-Knowledge
              <br />
              Proof Search
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Harness the power of decentralized indexing with zero-knowledge proofs. 
              Search, verify, and discover with complete privacy and transparency.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Link to="/search">
              <Button className="hero-button text-lg px-8 py-4 animate-glow-pulse">
                <Zap className="w-5 h-5 mr-2" />
                Start Searching
              </Button>
            </Link>
            <Link to="/proofs">
              <Button variant="outline" className="text-lg px-8 py-4 glass-card hover:bg-secondary/20">
                View Proofs
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Platform Features</h2>
          <p className="text-lg text-muted-foreground">Explore the capabilities of our ZK-powered search platform</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link key={index} to={feature.link}>
                <Card className="glass-card p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 cursor-pointer group">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Recent Queries */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Recent Queries</h2>
            <Link to="/search">
              <Button variant="outline" className="glass-card">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="space-y-4">
            {recentQueries.map((query) => (
              <Card key={query.id} className="glass-card p-6 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{query.query}</h3>
                    <p className="text-sm text-muted-foreground">{query.timestamp}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      query.status === 'verified' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {query.status}
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;