import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Database, Server, Activity, Coins, Plus, Settings } from "lucide-react";

const Indexers = () => {
  const indexerStats = {
    totalIndexers: 156,
    activeIndexers: 142,
    totalStaked: "2.4M ZKT",
    averageUptime: 98.7
  };

  const myIndexers = [
    {
      id: "idx_001",
      name: "Primary Indexer Node",
      status: "active",
      uptime: 99.2,
      staked: "50,000 ZKT",
      earnings: "1,234 ZKT",
      queries: 45234,
      location: "US-East"
    },
    {
      id: "idx_002", 
      name: "Secondary Node",
      status: "active",
      uptime: 97.8,
      staked: "25,000 ZKT",
      earnings: "892 ZKT",
      queries: 23451,
      location: "EU-West"
    },
    {
      id: "idx_003",
      name: "Backup Node",
      status: "syncing",
      uptime: 94.5,
      staked: "10,000 ZKT",
      earnings: "234 ZKT",
      queries: 8924,
      location: "Asia-Pacific"
    }
  ];

  const networkIndexers = [
    {
      id: "idx_network_001",
      name: "Alpha Prime",
      operator: "0x742d35Cc6634C0532925a3b8D43EC6d1",
      uptime: 99.8,
      staked: "500,000 ZKT",
      queries: 234567,
      rank: 1
    },
    {
      id: "idx_network_002",
      name: "Beta Supreme",
      operator: "0x8ba1f109551bD432803012645Hac136c",
      uptime: 99.5,
      staked: "425,000 ZKT",
      queries: 189342,
      rank: 2
    },
    {
      id: "idx_network_003",
      name: "Gamma Elite",
      operator: "0x1aE0EA34a72D944a8C7603FfB3eC30a6",
      uptime: 99.1,
      staked: "380,000 ZKT",
      queries: 167823,
      rank: 3
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "syncing":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "offline":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Indexer Dashboard</h1>
          <p className="text-lg text-muted-foreground">
            Manage your indexer nodes and explore the network
          </p>
        </div>

        {/* Network Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Database className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl font-bold">{indexerStats.totalIndexers}</div>
            <div className="text-sm text-muted-foreground">Total Indexers</div>
          </Card>
          
          <Card className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Activity className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-green-400">{indexerStats.activeIndexers}</div>
            <div className="text-sm text-muted-foreground">Active Nodes</div>
          </Card>
          
          <Card className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Coins className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold text-yellow-400">{indexerStats.totalStaked}</div>
            <div className="text-sm text-muted-foreground">Total Staked</div>
          </Card>
          
          <Card className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Server className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-purple-400">{indexerStats.averageUptime}%</div>
            <div className="text-sm text-muted-foreground">Avg Uptime</div>
          </Card>
        </div>

        {/* My Indexers */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">My Indexers</h2>
            <Button className="hero-button">
              <Plus className="w-4 h-4 mr-2" />
              Add New Indexer
            </Button>
          </div>

          <div className="space-y-4">
            {myIndexers.map((indexer) => (
              <Card key={indexer.id} className="glass-card p-6 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <Server className="w-6 h-6 text-primary" />
                      <h3 className="text-xl font-semibold">{indexer.name}</h3>
                      <Badge className={`border ${getStatusColor(indexer.status)}`}>
                        {indexer.status}
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-6 gap-4 mb-4">
                      <div>
                        <span className="text-sm text-muted-foreground">Uptime</span>
                        <div className="font-semibold text-green-400">{indexer.uptime}%</div>
                        <Progress value={indexer.uptime} className="mt-1 h-2" />
                      </div>
                      
                      <div>
                        <span className="text-sm text-muted-foreground">Staked</span>
                        <div className="font-semibold">{indexer.staked}</div>
                      </div>
                      
                      <div>
                        <span className="text-sm text-muted-foreground">Earnings</span>
                        <div className="font-semibold text-yellow-400">{indexer.earnings}</div>
                      </div>
                      
                      <div>
                        <span className="text-sm text-muted-foreground">Queries</span>
                        <div className="font-semibold">{indexer.queries.toLocaleString()}</div>
                      </div>
                      
                      <div>
                        <span className="text-sm text-muted-foreground">Location</span>
                        <div className="font-semibold">{indexer.location}</div>
                      </div>
                      
                      <div>
                        <span className="text-sm text-muted-foreground">Node ID</span>
                        <div className="font-mono text-xs text-primary">{indexer.id}</div>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="glass-card ml-4">
                    <Settings className="w-4 h-4 mr-2" />
                    Manage
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Network Indexers */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Top Network Indexers</h2>
          
          <div className="space-y-4">
            {networkIndexers.map((indexer) => (
              <Card key={indexer.id} className="glass-card p-6 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                      #{indexer.rank}
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold">{indexer.name}</h3>
                      <p className="text-sm text-muted-foreground font-mono">{indexer.operator}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-8 text-sm">
                    <div className="text-center">
                      <div className="text-muted-foreground">Uptime</div>
                      <div className="font-semibold text-green-400">{indexer.uptime}%</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-muted-foreground">Staked</div>
                      <div className="font-semibold">{indexer.staked}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-muted-foreground">Queries</div>
                      <div className="font-semibold">{indexer.queries.toLocaleString()}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indexers;