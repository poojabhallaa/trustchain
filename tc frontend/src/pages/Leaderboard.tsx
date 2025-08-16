import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Medal, Award, TrendingUp, Database, Search, Shield } from "lucide-react";

const Leaderboard = () => {
  const topUsers = [
    {
      rank: 1,
      address: "0x742d35Cc6634C0532925a3b8D43EC6d1",
      name: "CryptoMaster",
      points: 125670,
      searches: 8934,
      proofs: 2341,
      streak: 47
    },
    {
      rank: 2,
      address: "0x8ba1f109551bD432803012645Hac136c", 
      name: "ZKExplorer",
      points: 98450,
      searches: 6782,
      proofs: 1876,
      streak: 32
    },
    {
      rank: 3,
      address: "0x1aE0EA34a72D944a8C7603FfB3eC30a6",
      name: "ProofValidator",
      points: 87230,
      searches: 5234,
      proofs: 2098,
      streak: 28
    }
  ];

  const topIndexers = [
    {
      rank: 1,
      name: "Alpha Prime",
      operator: "0x742d35Cc6634C0532925a3b8D43EC6d1",
      uptime: 99.8,
      queries: 234567,
      rewards: "45,230 ZKT"
    },
    {
      rank: 2,
      name: "Beta Supreme", 
      operator: "0x8ba1f109551bD432803012645Hac136c",
      uptime: 99.5,
      queries: 189342,
      rewards: "38,940 ZKT"
    },
    {
      rank: 3,
      name: "Gamma Elite",
      operator: "0x1aE0EA34a72D944a8C7603FfB3eC30a6",
      uptime: 99.1,
      queries: 167823,
      rewards: "32,156 ZKT"
    }
  ];

  const weeklyStats = [
    { category: "Most Searches", value: "1,234", user: "CryptoMaster" },
    { category: "Most Proofs", value: "456", user: "ProofValidator" },
    { category: "Best Accuracy", value: "98.9%", user: "ZKExplorer" },
    { category: "Longest Streak", value: "21 days", user: "ConsistentUser" }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs font-bold">{rank}</div>;
    }
  };

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case 2:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
      case 3:
        return "bg-amber-600/20 text-amber-600 border-amber-600/30";
      default:
        return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Leaderboards</h1>
          <p className="text-lg text-muted-foreground">
            Rankings and statistics for users and indexers
          </p>
        </div>

        {/* Weekly Highlights */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {weeklyStats.map((stat, index) => (
            <Card key={index} className="glass-card p-6 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mb-2">{stat.category}</div>
              <div className="text-xs font-medium">{stat.user}</div>
            </Card>
          ))}
        </div>

        {/* Leaderboard Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 glass-card">
            <TabsTrigger value="users" className="flex items-center space-x-2">
              <Search className="w-4 h-4" />
              <span>Top Users</span>
            </TabsTrigger>
            <TabsTrigger value="indexers" className="flex items-center space-x-2">
              <Database className="w-4 h-4" />
              <span>Top Indexers</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="users" className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Top Users</h2>
              <span className="text-muted-foreground">Based on activity points</span>
            </div>

            {topUsers.map((user, index) => (
              <Card key={user.rank} className="glass-card p-6 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getRankIcon(user.rank)}
                    <div>
                      <div className="flex items-center space-x-3 mb-1">
                        <h3 className="text-lg font-semibold">{user.name}</h3>
                        <Badge className={`border ${getRankBadge(user.rank)}`}>
                          Rank #{user.rank}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground font-mono">{user.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-8 text-sm">
                    <div className="text-center">
                      <div className="text-muted-foreground">Points</div>
                      <div className="text-xl font-bold text-primary">{user.points.toLocaleString()}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-muted-foreground flex items-center space-x-1">
                        <Search className="w-3 h-3" />
                        <span>Searches</span>
                      </div>
                      <div className="font-semibold">{user.searches.toLocaleString()}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-muted-foreground flex items-center space-x-1">
                        <Shield className="w-3 h-3" />
                        <span>Proofs</span>
                      </div>
                      <div className="font-semibold">{user.proofs.toLocaleString()}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-muted-foreground">Streak</div>
                      <div className="font-semibold text-orange-400">{user.streak} days</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="indexers" className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Top Indexers</h2>
              <span className="text-muted-foreground">Based on performance metrics</span>
            </div>

            {topIndexers.map((indexer) => (
              <Card key={indexer.rank} className="glass-card p-6 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getRankIcon(indexer.rank)}
                    <div>
                      <div className="flex items-center space-x-3 mb-1">
                        <h3 className="text-lg font-semibold">{indexer.name}</h3>
                        <Badge className={`border ${getRankBadge(indexer.rank)}`}>
                          Rank #{indexer.rank}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground font-mono">{indexer.operator}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-8 text-sm">
                    <div className="text-center">
                      <div className="text-muted-foreground">Uptime</div>
                      <div className="text-xl font-bold text-green-400">{indexer.uptime}%</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-muted-foreground">Queries</div>
                      <div className="font-semibold">{indexer.queries.toLocaleString()}</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-muted-foreground">Rewards</div>
                      <div className="font-semibold text-yellow-400">{indexer.rewards}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Leaderboard;