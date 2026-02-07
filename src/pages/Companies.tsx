import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Users, Calendar, ExternalLink } from "lucide-react";
import {
  searchCompanies,
  getCategoryColor,
  getCategoryLabel,
  type CompanyCategory,
  type Company,
} from "@/data/companies";

const categoryFilters: { label: string; value: CompanyCategory | undefined }[] = [
  { label: "All", value: undefined },
  { label: "Marquee", value: "Marquee" },
  { label: "Super Dream", value: "SuperDream" },
  { label: "Dream", value: "Dream" },
  { label: "Regular", value: "Regular" },
];

export default function Companies() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") as CompanyCategory | null;

  const [searchQuery, setSearchQuery] = useState("");
  const activeCategory = categoryParam || undefined;

  const filteredCompanies = useMemo(() => {
    return searchCompanies(searchQuery, activeCategory);
  }, [searchQuery, activeCategory]);

  const setCategory = (cat: CompanyCategory | undefined) => {
    if (cat) {
      setSearchParams({ category: cat });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-foreground lg:text-3xl">Companies</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Discover and explore recruiting companies
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search company by name (e.g., Google, Infosys, Amazon)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-xl border border-border bg-card py-3 pl-12 pr-4 text-sm text-foreground shadow-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2">
        {categoryFilters.map((f) => (
          <button
            key={f.label}
            onClick={() => setCategory(f.value)}
            className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
              activeCategory === f.value
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-accent"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Company Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCompanies.map((company, i) => (
          <CompanyCard key={company.company_id} company={company} index={i} />
        ))}
      </div>

      {filteredCompanies.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-lg font-medium text-muted-foreground">No companies found</p>
          <p className="text-sm text-muted-foreground">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}

function CompanyCard({ company, index }: { company: Company; index: number }) {
  const navigate = useNavigate();

  return (
    <motion.button
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      onClick={() => navigate(`/companies/${company.company_id}`)}
      className="group flex flex-col items-start gap-4 rounded-xl border border-border bg-card p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
    >
      {/* Logo + Badge */}
      <div className="flex w-full items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-lg font-bold text-foreground">
          {company.short_name.charAt(0)}
        </div>
        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${getCategoryColor(company.category)}`}>
          {getCategoryLabel(company.category)}
        </span>
      </div>

      {/* Name */}
      <div>
        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors">
          {company.name}
        </h3>
        <p className="mt-0.5 text-xs text-muted-foreground">{company.nature_of_company}</p>
      </div>

      {/* Meta Info */}
      <div className="mt-auto flex w-full flex-col gap-1.5 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <Calendar className="h-3.5 w-3.5" />
          <span>Est. {company.incorporation_year}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="h-3.5 w-3.5" />
          <span>{company.employee_size} employees</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" />
          <span>{company.headquarters_address}</span>
        </div>
      </div>
    </motion.button>
  );
}
