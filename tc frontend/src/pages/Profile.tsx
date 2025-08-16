import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Coins, Search, Shield, TrendingUp, Calendar, Settings, Copy } from "lucide-react";

const Profile = () => {
  const userStats = {
    totalStaked: "75,000 ZKT",
    totalEarnings: "12,450 ZKT",
    searchesCount: 2456,
    proofsVerified: 1234,
    rank: 8,
    joinDate: "2023-08-15"
  };

  const stakingPositions = [
    {
      id: "stake_001",
      type: "Indexer Node",
      amount: "50,000 ZKT",
      rewards: "8,230 ZKT",
      apr: 18.5,
      duration: "90 days",
      status: "active"
    },
    {
      id: "stake_002",
      type: "Governance",
      amount: "25,000 ZKT", 
      rewards: "4,220 ZKT",
      apr: 15.2,
      duration: "Flexible",
      status: "active"
    }
  ];

  const queryHistory = [
    {
      id: "query_001",
      query: "Blockchain architecture patterns",
      timestamp: "2024-01-15T14:30:00Z",
      status: "verified",
      confidence: 98.5,
      rewards: "15 ZKT"
    },
    {
      id: "query_002",
      query: "Smart contract security audit",
      timestamp: "2024-01-15T13:15:00Z", 
      status: "verified",
      confidence: 96.2,
      rewards: "12 ZKT"
    },
    {
      id: "query_003",
      query: "DeFi protocol comparison",
      timestamp: "2024-01-15T11:45:00Z",
      status: "pending",
      confidence: 0,
      rewards: "0 ZKT"
    },
    {
      id: "query_004",
      query: "Zero-knowledge proof implementation",
      timestamp: "2024-01-15T10:20:00Z",
      status: "verified",
      confidence: 99.1,
      rewards: "18 ZKT"
    }
  ];

  const achievements = [
    { title: "Early Adopter", description: "Joined in the first month", icon: "🌟" },
    { title: "Search Master", description: "Completed 1000+ searches", icon: "🔍" },
    { title: "Proof Validator", description: "Verified 500+ proofs", icon: "🛡️" },
    { title: "Staking Champion", description: "Staked over 50K ZKT", icon: "💎" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "pending":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "active":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <Card className="glass-card p-8 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">CryptoExplorer</h1>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-muted-foreground">Wallet:</span>
                  <span className="font-mono text-sm">0x742d35Cc6634C0532925a3b8D43EC6d1</span>
                  <Button variant="ghost" size="sm">
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Joined {new Date(userStats.joinDate).toLocaleDateString()}</span>
                  </div>
                  <Badge className="bg-gradient-primary text-primary-foreground">
                    Rank #{userStats.rank}
                  </Badge>
                </div>
              </div>
            </div>
            
            <Button variant="outline" className="glass-card">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
          
          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Coins className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="text-2xl font-bold text-yellow-400">{userStats.totalStaked}</div>
              <div className="text-sm text-muted-foreground">Total Staked</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-green-400">{userStats.totalEarnings}</div>
              <div className="text-sm text-muted-foreground">Total Earnings</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Search className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-blue-400">{userStats.searchesCount}</div>
              <div className="text-sm text-muted-foreground">Searches</div>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-purple-400">{userStats.proofsVerified}</div>
              <div className="text-sm text-muted-foreground">Proofs Verified</div>
            </div>
          </div>
        </Card>

        {/* Achievements */}
        <Card className="glass-card p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Achievements</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-secondary/20 border border-border/50">
                <span className="text-2xl">{achievement.icon}</span>
                <div>
                  <div className="font-semibold">{achievement.title}</div>
                  <div className="text-sm text-muted-foreground">{achievement.description}</div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Tabs defaultValue="staking" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 glass-card">
            <TabsTrigger value="staking">Staking Positions</TabsTrigger>
            <TabsTrigger value="history">Query History</TabsTrigger>
          </TabsList>

          <TabsContent value="staking" className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Staking Positions</h2>
              <Button className="hero-button">
                <Coins className="w-4 h-4 mr-2" />
                New Stake
              </Button>
            </div>

            {stakingPositions.map((position) => (
              <Card key={position.id} className="glass-card p-6 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <Coins className="w-6 h-6 text-yellow-400" />
                      <h3 className="text-xl font-semibold">{position.type}</h3>
                      <Badge className={`border ${getStatusColor(position.status)}`}>
                        {position.status}
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-5 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Staked Amount</span>
                        <div className="font-semibold text-yellow-400">{position.amount}</div>
                      </div>
                      
                      <div>
                        <span className="text-muted-foreground">Rewards Earned</span>
                        <div className="font-semibold text-green-400">{position.rewards}</div>
                      </div>
                      
                      <div>
                        <span className="text-muted-foreground">APR</span>
                        <div className="font-semibold">{position.apr}%</div>
                      </div>
                      
                      <div>
                        <span className="text-muted-foreground">Duration</span>
                        <div className="font-semibold">{position.duration}</div>
                      </div>
                      
                      <div>
                        <span className="text-muted-foreground">Position ID</span>
                        <div className="font-mono text-xs text-primary">{position.id}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2 ml-6">
                    <Button variant="outline" size="sm" className="glass-card">
                      Claim Rewards
                    </Button>
                    <Button variant="outline" size="sm" className="glass-card">
                      Unstake
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <h2 className="text-2xl font-bold">Query History</h2>
            
            {queryHistory.map((query) => (
              <Card key={query.id} className="glass-card p-6 hover:shadow-elegant transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Search className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold">{query.query}</h3>
                      <Badge className={`border ${getStatusColor(query.status)}`}>
                        {query.status}
                      </Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Query ID</span>
                        <div className="font-mono text-primary">{query.id}</div>
                      </div>
                      
                      <div>
                        <span className="text-muted-foreground">Confidence</span>
                        <div className="font-semibold">
                          {query.confidence > 0 ? `${query.confidence}%` : 'Pending'}
                        </div>
                      </div>
                      
                      <div>
                        <span className="text-muted-foreground">Rewards</span>
                        <div className="font-semibold text-green-400">{query.rewards}</div>
                      </div>
                      
                      <div>
                        <span className="text-muted-foreground">Timestamp</span>
                        <div className="font-semibold">
                          {new Date(query.timestamp).toLocaleString()}
                        </div>
                      </div>
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

export default Profile;