import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Shield, Database, Trophy, Gavel, User, Home, Wallet } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { to: "/", label: "Home", icon: Home },
    { to: "/search", label: "Search", icon: Search },
    { to: "/proofs", label: "Proofs", icon: Shield },
    { to: "/indexers", label: "Indexers", icon: Database },
    { to: "/leaderboard", label: "Leaderboard", icon: Trophy },
    { to: "/governance", label: "Governance", icon: Gavel },
    { to: "/profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="glass-card border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">ZKProof</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `nav-link flex items-center space-x-2 ${isActive ? 'active' : ''}`
                    }
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>

          <Button className="hero-button flex items-center space-x-2">
            <Wallet className="w-4 h-4" />
            <span>Connect Wallet</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;