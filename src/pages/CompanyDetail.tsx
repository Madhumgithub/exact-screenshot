import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Users,
  ExternalLink,
  ArrowLeft,
  Brain,
  ListChecks,
  Lightbulb,
  Info,
  TrendingUp,
  DollarSign,
  Cpu,
  UsersRound,
  Link2,
  Globe,
  Target,
  Shield,
  Award,
  Linkedin,
  Twitter,
  Building2,
  Briefcase,
} from "lucide-react";
import { getCompanyById, getCategoryColor, getCategoryLabel } from "@/data/companies";

const tabs = [
  { id: "overview", label: "Overview", icon: Info },
  { id: "market", label: "Business & Market", icon: TrendingUp },
  { id: "financial", label: "Financials", icon: DollarSign },
  { id: "technology", label: "Technology", icon: Cpu },
  { id: "people", label: "People & Culture", icon: UsersRound },
  { id: "connect", label: "Connect", icon: Link2 },
];

export default function CompanyDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const company = getCompanyById(Number(id));
  const [activeTab, setActiveTab] = useState("overview");

  if (!company) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-muted-foreground">Company not found</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Back button */}
      <button
        onClick={() => navigate("/companies")}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Companies
      </button>

      {/* Company Header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-xl border border-border bg-card p-6 shadow-sm"
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-muted text-2xl font-bold text-foreground">
              {company.short_name.charAt(0)}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl font-bold text-foreground lg:text-2xl">{company.name}</h1>
                <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${getCategoryColor(company.category)}`}>
                  {getCategoryLabel(company.category)}
                </span>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" />
                  {company.headquarters_address}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  Est. {company.incorporation_year}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="h-3.5 w-3.5" />
                  {company.employee_size} employees
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => navigate(`/companies/${id}/skills`)}
              className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-accent"
            >
              <Brain className="h-3.5 w-3.5" />
              Hiring Skills
            </button>
            <button
              onClick={() => navigate(`/companies/${id}/hiring`)}
              className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-2 text-xs font-medium text-foreground transition-colors hover:bg-accent"
            >
              <ListChecks className="h-3.5 w-3.5" />
              Hiring Rounds
            </button>
            <button
              onClick={() => navigate(`/companies/${id}/innovx`)}
              className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Lightbulb className="h-3.5 w-3.5" />
              InnovX
            </button>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-1 overflow-x-auto rounded-xl border border-border bg-card p-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex shrink-0 items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-medium transition-colors ${
              activeTab === tab.id
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
          >
            <tab.icon className="h-3.5 w-3.5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "overview" && <OverviewTab company={company} />}
        {activeTab === "market" && <MarketTab company={company} />}
        {activeTab === "financial" && <FinancialTab company={company} />}
        {activeTab === "technology" && <TechnologyTab company={company} />}
        {activeTab === "people" && <PeopleTab company={company} />}
        {activeTab === "connect" && <ConnectTab company={company} />}
      </motion.div>
    </div>
  );
}

// ============ TAB COMPONENTS ============

function InfoCard({ icon: Icon, label, value }: { icon: any; label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-4 w-4 text-primary" />
      </div>
      <div>
        <p className="text-[11px] font-medium text-muted-foreground">{label}</p>
        <p className="mt-0.5 text-sm font-semibold text-foreground">{value}</p>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-3 text-base font-bold text-foreground">{children}</h3>;
}

function TagList({ items, separator = ";" }: { items?: string; separator?: string }) {
  if (!items) return null;
  const tags = items.split(separator).map((s) => s.trim()).filter(Boolean);
  return (
    <div className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function OverviewTab({ company }: { company: any }) {
  return (
    <div className="space-y-6">
      {/* Overview Text */}
      {company.overview_text && (
        <div className="rounded-xl border border-border bg-card p-5">
          <SectionTitle>About {company.short_name}</SectionTitle>
          <p className="text-sm leading-relaxed text-muted-foreground">{company.overview_text}</p>
        </div>
      )}

      {/* Vision & Mission */}
      <div className="grid gap-4 sm:grid-cols-2">
        {company.vision_statement && (
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-primary" />
              <h4 className="text-sm font-bold text-foreground">Vision</h4>
            </div>
            <p className="text-sm text-muted-foreground">{company.vision_statement}</p>
          </div>
        )}
        {company.mission_statement && (
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase className="h-4 w-4 text-primary" />
              <h4 className="text-sm font-bold text-foreground">Mission</h4>
            </div>
            <p className="text-sm text-muted-foreground">{company.mission_statement}</p>
          </div>
        )}
      </div>

      {/* Core Values */}
      {company.core_values && (
        <div className="rounded-xl border border-border bg-card p-5">
          <SectionTitle>Core Values</SectionTitle>
          <TagList items={company.core_values} />
        </div>
      )}

      {/* Differentiators */}
      <div className="grid gap-4 sm:grid-cols-2">
        {company.unique_differentiators && (
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="h-4 w-4 text-primary" />
              <h4 className="text-sm font-bold text-foreground">Unique Differentiators</h4>
            </div>
            <TagList items={company.unique_differentiators} />
          </div>
        )}
        {company.competitive_advantages && (
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 mb-3">
              <Award className="h-4 w-4 text-primary" />
              <h4 className="text-sm font-bold text-foreground">Competitive Advantages</h4>
            </div>
            <TagList items={company.competitive_advantages} />
          </div>
        )}
      </div>
    </div>
  );
}

function MarketTab({ company }: { company: any }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <InfoCard icon={Target} label="Core Value Proposition" value={company.core_value_proposition} />
        <InfoCard icon={Globe} label="Technology Partners" value={company.technology_partners} />
      </div>

      {company.focus_sectors && (
        <div className="rounded-xl border border-border bg-card p-5">
          <SectionTitle>Focus Sectors</SectionTitle>
          <TagList items={company.focus_sectors} />
        </div>
      )}

      {company.offerings_description && (
        <div className="rounded-xl border border-border bg-card p-5">
          <SectionTitle>Products & Services</SectionTitle>
          <TagList items={company.offerings_description} />
        </div>
      )}

      {company.top_customers && (
        <div className="rounded-xl border border-border bg-card p-5">
          <SectionTitle>Top Customers</SectionTitle>
          <TagList items={company.top_customers} />
        </div>
      )}

      {company.key_competitors && (
        <div className="rounded-xl border border-border bg-card p-5">
          <SectionTitle>Key Competitors</SectionTitle>
          <TagList items={company.key_competitors} />
        </div>
      )}
    </div>
  );
}

function FinancialTab({ company }: { company: any }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InfoCard icon={DollarSign} label="Annual Revenue" value={company.annual_revenue} />
        <InfoCard icon={DollarSign} label="Annual Profit" value={company.annual_profit} />
        <InfoCard icon={TrendingUp} label="YoY Growth Rate" value={company.yoy_growth_rate} />
        <InfoCard icon={Building2} label="Valuation" value={company.valuation} />
        <InfoCard icon={TrendingUp} label="Profitability" value={company.profitability_status} />
        <InfoCard icon={Globe} label="Market Share" value={company.market_share_percentage} />
      </div>

      {company.revenue_mix && (
        <div className="rounded-xl border border-border bg-card p-5">
          <SectionTitle>Revenue Mix</SectionTitle>
          <TagList items={company.revenue_mix} />
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InfoCard icon={Target} label="TAM" value={company.tam} />
        <InfoCard icon={Target} label="SAM" value={company.sam} />
        <InfoCard icon={TrendingUp} label="Net Promoter Score" value={company.net_promoter_score} />
      </div>
    </div>
  );
}

function TechnologyTab({ company }: { company: any }) {
  return (
    <div className="space-y-6">
      {company.tech_stack && (
        <div className="rounded-xl border border-border bg-card p-5">
          <SectionTitle>Technology Stack</SectionTitle>
          <TagList items={company.tech_stack} />
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <InfoCard icon={Cpu} label="AI/ML Adoption" value={company.ai_ml_adoption_level} />
        <InfoCard icon={DollarSign} label="R&D Investment" value={company.r_and_d_investment} />
        <InfoCard icon={Shield} label="Cybersecurity" value={company.cybersecurity_posture} />
        <InfoCard icon={Cpu} label="Intellectual Property" value={company.intellectual_property} />
      </div>
    </div>
  );
}

function PeopleTab({ company }: { company: any }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InfoCard icon={Users} label="Employee Size" value={company.employee_size} />
        <InfoCard icon={UsersRound} label="CEO" value={company.ceo_name} />
        <InfoCard icon={Award} label="Glassdoor Rating" value={company.glassdoor_rating} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <InfoCard icon={Building2} label="Work Culture" value={company.work_culture_summary} />
        <InfoCard icon={UsersRound} label="Diversity" value={company.diversity_metrics} />
        <InfoCard icon={Globe} label="Remote Policy" value={company.remote_policy_details} />
        <InfoCard icon={Award} label="Training Spend" value={company.training_spend} />
      </div>

      {company.key_leaders && (
        <div className="rounded-xl border border-border bg-card p-5">
          <SectionTitle>Key Leaders</SectionTitle>
          <TagList items={company.key_leaders} />
        </div>
      )}

      {company.exit_opportunities && (
        <div className="rounded-xl border border-border bg-card p-5">
          <SectionTitle>Exit Opportunities</SectionTitle>
          <TagList items={company.exit_opportunities} />
        </div>
      )}

      {company.awards_recognitions && (
        <div className="rounded-xl border border-border bg-card p-5">
          <SectionTitle>Awards & Recognition</SectionTitle>
          <TagList items={company.awards_recognitions} />
        </div>
      )}
    </div>
  );
}

function ConnectTab({ company }: { company: any }) {
  const links = [
    { icon: Globe, label: "Website", url: company.website_url },
    { icon: Linkedin, label: "LinkedIn", url: company.linkedin_url },
    { icon: Twitter, label: "Twitter", url: company.twitter_handle ? `https://twitter.com/${company.twitter_handle.replace("@", "")}` : undefined },
  ].filter((l) => l.url);

  return (
    <div className="space-y-6">
      {links.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <link.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground">{link.label}</p>
                <p className="text-xs text-muted-foreground truncate">{link.url}</p>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </a>
          ))}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <InfoCard icon={Globe} label="Operating Countries" value={company.operating_countries} />
        <InfoCard icon={Building2} label="Office Locations" value={company.office_locations} />
        <InfoCard icon={Building2} label="Number of Offices" value={company.office_count} />
      </div>
    </div>
  );
}
