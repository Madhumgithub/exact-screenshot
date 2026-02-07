import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useMemo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Crown,
  Sparkles,
  Star,
  Briefcase,
  Search,
  ArrowRight,
  MapPin,
  Users,
  TrendingUp,
} from "lucide-react";
import {
  companies,
  getCategoryCounts,
  searchCompanies,
  getCategoryColor,
  getCategoryLabel,
  type CompanyCategory,
} from "@/data/companies";

const cardConfig = [
  { key: "Total", label: "Total Companies", icon: Building2, category: undefined },
  { key: "Marquee", label: "Marquee", icon: Crown, category: "Marquee" as CompanyCategory },
  { key: "SuperDream", label: "Super Dream", icon: Sparkles, category: "SuperDream" as CompanyCategory },
  { key: "Dream", label: "Dream", icon: Star, category: "Dream" as CompanyCategory },
  { key: "Regular", label: "Regular", icon: Briefcase, category: "Regular" as CompanyCategory },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const counts = getCategoryCounts();
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchCompanies(searchQuery).slice(0, 6);
  }, [searchQuery]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="mx-auto max-w-7xl space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground lg:text-3xl">Dashboard</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Placement ecosystem overview — click any card to explore companies
        </p>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {cardConfig.map((card, i) => (
          <motion.button
            key={card.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            onClick={() =>
              navigate(
                card.category
                  ? `/companies?category=${card.category}`
                  : "/companies"
              )
            }
            className="group relative flex flex-col items-start gap-3 rounded-xl border border-border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
              card.category ? getCategoryColor(card.category) : "bg-primary text-primary-foreground"
            }`}>
              <card.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-foreground">
                {counts[card.key] || 0}
              </p>
              <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                {card.label}
              </p>
            </div>
            <ArrowRight className="absolute right-4 top-4 h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </motion.button>
        ))}
      </div>

      {/* Search Section */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        ref={searchRef}
        className="relative"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by company name (e.g., Amazon, TCS, Microsoft)"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            className="w-full rounded-xl border border-border bg-card py-4 pl-12 pr-4 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Autocomplete Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute left-0 right-0 top-full z-20 mt-1 overflow-hidden rounded-xl border border-border bg-card shadow-lg">
            {suggestions.map((company) => (
              <button
                key={company.company_id}
                onClick={() => {
                  navigate(`/companies/${company.company_id}`);
                  setShowSuggestions(false);
                  setSearchQuery("");
                }}
                className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-accent"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-xs font-bold text-foreground">
                  {company.short_name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{company.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {company.headquarters_address}
                  </p>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${getCategoryColor(company.category)}`}>
                  {getCategoryLabel(company.category)}
                </span>
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-3"
      >
        <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">20+</p>
            <p className="text-xs text-muted-foreground">Countries Represented</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Users className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">4.5M+</p>
            <p className="text-xs text-muted-foreground">Total Employees</p>
          </div>
        </div>
        <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <TrendingUp className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">8.3%</p>
            <p className="text-xs text-muted-foreground">Avg. YoY Growth</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
