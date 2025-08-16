import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Vote, Clock, CheckCircle, XCircle, Plus, Users } from "lucide-react";

const Governance = () => {
  const proposals = [
    {
      id: "prop_001",
      title: "Increase Indexer Rewards by 15%",
      description: "Proposal to increase rewards for indexer nodes to improve network participation and security.",
      status: "active",
      votesFor: 12543,
      votesAgainst: 3421,
      totalVotes: 15964,
      quorum: 20000,
      timeLeft: "3 days 14 hours",
      proposer: "0x742d35Cc6634C0532925a3b8D43EC6d1"
    },
    {
      id: "prop_002",
      title: "Implement New ZK Proof Algorithm",
      description: "Upgrade to a more efficient zero-knowledge proof algorithm to reduce computation time and costs.",
      status: "active",
      votesFor: 8932,
      votesAgainst: 6234,
      totalVotes: 15166,
      quorum: 20000,
      timeLeft: "6 days 2 hours",
      proposer: "0x8ba1f109551bD432803012645Hac136c"
    },
    {
      id: "prop_003",
      title: "Reduce Minimum Stake Requirement",
      description: "Lower the minimum stake requirement for indexers from 10,000 ZKT to 5,000 ZKT to increase accessibility.",
      status: "passed",
      votesFor: 18734,
      votesAgainst: 4523,
      totalVotes: 23257,
      quorum: 20000,
      timeLeft: "Ended",
      proposer: "0x1aE0EA34a72D944a8C7603FfB3eC30a6"
    },
    {
      id: "prop_004",
      title: "Treasury Fund Allocation",
      description: "Allocate 500,000 ZKT from treasury for ecosystem development and marketing initiatives.",
      status: "rejected",
      votesFor: 7832,
      votesAgainst: 15643,
      totalVotes: 23475,
      quorum: 20000,
      timeLeft: "Ended",
      proposer: "0x5aAeb6053F3E94C9b9A09f33669435E7"
    }
  ];

  const delegations = [
    {
      delegate: "0x742d35Cc6634C0532925a3b8D43EC6d1",
      name: "TechExpert",
      votingPower: "125,000 ZKT",
      proposals: 23,
      successRate: 78
    },
    {
      delegate: "0x8ba1f109551bD432803012645Hac136c",
      name: "CommunityLeader",
      votingPower: "98,500 ZKT",
      proposals: 18,
      successRate: 83
    },
    {
      delegate: "0x1aE0EA34a72D944a8C7603FfB3eC30a6",
      name: "GovernanceGuru",
      votingPower: "87,200 ZKT",
      proposals: 31,
      successRate: 74
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "passed":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "rejected":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-muted/20 text-muted-foreground border-muted/30";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active":
        return <Clock className="w-4 h-4" />;
      case "passed":
        return <CheckCircle className="w-4 h-4" />;
      case "rejected":
        return <XCircle className="w-4 h-4" />;
      default:
        return <Vote className="w-4 h-4" />;
    }
  };

  const calculateVotePercentage = (votes: number, total: number) => {
    return total > 0 ? (votes / total) * 100 : 0;
  };

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Governance</h1>
          <p className="text-lg text-muted-foreground">
            Participate in protocol governance and shape the future of the network
          </p>
        </div>

        {/* Governance Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Vote className="w-6 h-6 text-primary" />
            </div>
            <div className="text-2xl font-bold">47</div>
            <div className="text-sm text-muted-foreground">Total Proposals</div>
          </Card>
          
          <Card className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-blue-400" />
            </div>
            <div className="text-2xl font-bold text-blue-400">4</div>
            <div className="text-sm text-muted-foreground">Active Votes</div>
          </Card>
          
          <Card className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="text-2xl font-bold text-yellow-400">15.4K</div>
            <div className="text-sm text-muted-foreground">Participants</div>
          </Card>
          
          <Card className="glass-card p-6 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div className="text-2xl font-bold text-green-400">72%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </Card>
        </div>

        <Tabs defaultValue="proposals" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 glass-card">
            <TabsTrigger value="proposals">Proposals</TabsTrigger>
            <TabsTrigger value="delegates">Delegates</TabsTrigger>
          </TabsList>

          <TabsContent value="proposals" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Proposals</h2>
              <Button className="hero-button">
                <Plus className="w-4 h-4 mr-2" />
                Create Proposal
              </Button>
            </div>

            <div className="space-y-4">
              {proposals.map((proposal) => (
                <Card key={proposal.id} className="glass-card p-6 hover:shadow-elegant transition-all duration-300">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          {getStatusIcon(proposal.status)}
                          <h3 className="text-xl font-semibold">{proposal.title}</h3>
                          <Badge className={`border ${getStatusColor(proposal.status)}`}>
                            {proposal.status}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground mb-4">{proposal.description}</p>
                        
                        <div className="grid md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Proposal ID:</span>
                            <div className="font-mono text-primary">{proposal.id}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Proposer:</span>
                            <div className="font-mono text-xs">{proposal.proposer}</div>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Time Left:</span>
                            <div className="font-semibold">{proposal.timeLeft}</div>
                          </div>
                        </div>
                      </div>
                      
                      {proposal.status === "active" && (
                        <div className="flex space-x-2 ml-6">
                          <Button className="hero-button" size="sm">Vote For</Button>
                          <Button variant="outline" size="sm" className="glass-card">Vote Against</Button>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>Votes For: {proposal.votesFor.toLocaleString()}</span>
                        <span>{calculateVotePercentage(proposal.votesFor, proposal.totalVotes).toFixed(1)}%</span>
                      </div>
                      <Progress value={calculateVotePercentage(proposal.votesFor, proposal.totalVotes)} className="h-2" />
                      
                      <div className="flex items-center justify-between text-sm">
                        <span>Votes Against: {proposal.votesAgainst.toLocaleString()}</span>
                        <span>{calculateVotePercentage(proposal.votesAgainst, proposal.totalVotes).toFixed(1)}%</span>
                      </div>
                      <Progress value={calculateVotePercentage(proposal.votesAgainst, proposal.totalVotes)} className="h-2" />
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Quorum: {proposal.quorum.toLocaleString()} votes needed</span>
                        <span>Current: {proposal.totalVotes.toLocaleString()} votes</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="delegates" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Top Delegates</h2>
              <span className="text-muted-foreground">Delegate your voting power</span>
            </div>

            <div className="space-y-4">
              {delegations.map((delegate, index) => (
                <Card key={delegate.delegate} className="glass-card p-6 hover:shadow-elegant transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                        #{index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{delegate.name}</h3>
                        <p className="text-sm text-muted-foreground font-mono">{delegate.delegate}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-8 text-sm">
                      <div className="text-center">
                        <div className="text-muted-foreground">Voting Power</div>
                        <div className="font-semibold text-primary">{delegate.votingPower}</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-muted-foreground">Proposals</div>
                        <div className="font-semibold">{delegate.proposals}</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-muted-foreground">Success Rate</div>
                        <div className="font-semibold text-green-400">{delegate.successRate}%</div>
                      </div>
                      
                      <Button variant="outline" size="sm" className="glass-card">
                        Delegate
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Governance;