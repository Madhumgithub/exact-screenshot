import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ListChecks, Search, MapPin, Users, Calendar, ArrowRight } from "lucide-react";
import { companies, searchCompanies, getCategoryColor, getCategoryLabel } from "@/data/companies";

export default function HiringEntry() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => searchCompanies(searchQuery), [searchQuery]);

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-bold text-foreground lg:text-3xl">
          <ListChecks className="h-7 w-7 text-primary" />
          Hiring Process
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Explore company-specific hiring processes and selection stages
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search company by name to view hiring rounds..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-xl border border-border bg-card py-3 pl-12 pr-4 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Company Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((company, i) => (
          <motion.button
            key={company.company_id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            onClick={() => navigate(`/companies/${company.company_id}/hiring`)}
            className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-sm font-bold text-foreground">
              {company.short_name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors">{company.name}</p>
              <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                <span>{company.headquarters_address}</span>
                <span className={`rounded-full px-1.5 py-0 text-[9px] font-semibold ${getCategoryColor(company.category)}`}>
                  {getCategoryLabel(company.category)}
                </span>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}
