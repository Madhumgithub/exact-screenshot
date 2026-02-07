import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  ListChecks,
  Lightbulb,
  MapPin,
  Users,
  TrendingUp,
  Zap,
  Shield,
  Target,
  Layers,
  Rocket,
  AlertTriangle,
  Clock,
  Star,
} from "lucide-react";
import { getCompanyById, innovxDataMap } from "@/data/companies";

const threatColors: Record<string, string> = {
  High: "bg-destructive/10 text-destructive",
  Medium: "bg-highlight/10 text-highlight",
  Low: "bg-dream/10 text-dream",
};

const tierConfig: Record<string, { label: string; color: string; description: string }> = {
  "Tier 1": { label: "Foundational Innovation", color: "bg-dream text-dream-foreground", description: "Clear, practical, implementable" },
  "Tier 2": { label: "Advanced Innovation", color: "bg-superdream text-superdream-foreground", description: "System-level, domain-heavy" },
  "Tier 3": { label: "Breakthrough Innovation", color: "bg-marquee text-marquee-foreground", description: "Visionary, AI-first, future-oriented" },
};

export default function CompanyInnovx() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const company = getCompanyById(Number(id));
  const innovxData = innovxDataMap[Number(id)];

  if (!company) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-muted-foreground">Company not found</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6">
      {/* Back */}
      <button
        onClick={() => navigate(`/companies/${id}`)}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to {company.short_name}
      </button>

      {/* Company Mini Header */}
      <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-lg font-bold text-foreground">
          {company.short_name.charAt(0)}
        </div>
        <div className="flex-1">
          <h1 className="text-lg font-bold text-foreground">{company.name}</h1>
          <div className="mt-0.5 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{company.headquarters_address}</span>
            <span className="flex items-center gap-1"><Users className="h-3 w-3" />{company.employee_size}</span>
          </div>
        </div>
        <div className="hidden gap-1.5 sm:flex">
          <button onClick={() => navigate(`/companies/${id}/skills`)} className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground"><Brain className="h-3.5 w-3.5" />Skills</button>
          <button onClick={() => navigate(`/companies/${id}/hiring`)} className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground"><ListChecks className="h-3.5 w-3.5" />Hiring</button>
          <button className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground"><Lightbulb className="h-3.5 w-3.5" />InnovX</button>
        </div>
      </div>

      {!innovxData ? (
        <div className="rounded-xl border border-border bg-card p-12 text-center">
          <Lightbulb className="mx-auto h-12 w-12 text-muted-foreground/30" />
          <p className="mt-4 text-lg font-medium text-muted-foreground">InnovX data coming soon</p>
          <p className="mt-1 text-sm text-muted-foreground">Innovation research for {company.short_name} will be available shortly.</p>
        </div>
      ) : (
        <div className="space-y-10">
          {/* Section 1: Industry Trends */}
          <section>
            <div className="mb-4">
              <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
                <TrendingUp className="h-5 w-5 text-primary" />
                Industry Trends
              </h2>
              <p className="text-sm text-muted-foreground">Key trends shaping the industry landscape</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {innovxData.industry_trends.map((trend, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-sm font-bold text-foreground">{trend.trend_name}</h3>
                    <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      trend.strategic_importance === "Critical" ? "bg-destructive/10 text-destructive" : "bg-highlight/10 text-highlight"
                    }`}>
                      {trend.strategic_importance}
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{trend.trend_description}</p>
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {trend.time_horizon_years} year horizon
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {trend.trend_drivers.map((d) => (
                      <span key={d} className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">{d}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 2: Competitive Landscape */}
          <section>
            <div className="mb-4">
              <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
                <Shield className="h-5 w-5 text-primary" />
                Competitive Landscape
              </h2>
              <p className="text-sm text-muted-foreground">Innovation ecosystem and competitor bets</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {innovxData.competitive_landscape.map((comp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-foreground">{comp.competitor_name}</h3>
                      <p className="text-[11px] text-muted-foreground">{comp.competitor_type} · {comp.market_positioning}</p>
                    </div>
                    <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${threatColors[comp.threat_level] || "bg-secondary text-secondary-foreground"}`}>
                      {comp.threat_level} threat
                    </span>
                  </div>
                  <div className="mt-3 rounded-lg bg-background p-3">
                    <p className="text-xs font-bold text-primary">{comp.bet_name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{comp.bet_description}</p>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5 text-[10px]">
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-secondary-foreground">{comp.innovation_category}</span>
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-secondary-foreground">{comp.futuristic_level}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 3: Strategic Pillars */}
          <section>
            <div className="mb-4">
              <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
                <Layers className="h-5 w-5 text-primary" />
                Strategic Pillars
              </h2>
              <p className="text-sm text-muted-foreground">Core innovation strategy and technology focus</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {innovxData.strategic_pillars.map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-semibold text-primary">{pillar.focus_area}</span>
                  </div>
                  <h3 className="mt-2 text-base font-bold text-foreground">{pillar.pillar_name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground italic">&ldquo;{pillar.cto_vision_statement}&rdquo;</p>
                  <p className="mt-2 text-xs text-muted-foreground">{pillar.pillar_description}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {pillar.key_technologies.map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">{t}</span>
                    ))}
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-[11px] text-muted-foreground">
                    <AlertTriangle className="h-3 w-3" />
                    Risk: {pillar.strategic_risks}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Section 4: Innovation Projects */}
          <section>
            <div className="mb-4">
              <h2 className="flex items-center gap-2 text-lg font-bold text-foreground">
                <Rocket className="h-5 w-5 text-primary" />
                Student Innovation Projects
              </h2>
              <p className="text-sm text-muted-foreground">Build these to stand out — tiered by ambition</p>
            </div>

            {(["Tier 1", "Tier 2", "Tier 3"] as const).map((tier) => {
              const projects = innovxData.innovx_projects.filter((p) => p.tier_level === tier);
              if (projects.length === 0) return null;
              const config = tierConfig[tier];

              return (
                <div key={tier} className="mb-6">
                  <div className="mb-3 flex items-center gap-2">
                    <span className={`rounded-full px-3 py-1 text-xs font-bold ${config.color}`}>{tier}</span>
                    <span className="text-sm font-semibold text-foreground">{config.label}</span>
                    <span className="text-xs text-muted-foreground">— {config.description}</span>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.06 }}
                        className="rounded-xl border border-border bg-card p-5 shadow-sm"
                      >
                        <div className="flex items-center gap-1.5">
                          <Star className="h-4 w-4 text-highlight" />
                          <h3 className="text-sm font-bold text-foreground">{project.project_name}</h3>
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground">{project.problem_statement}</p>

                        <div className="mt-3 rounded-lg bg-background p-3">
                          <p className="text-[11px] font-bold text-foreground">Use Case</p>
                          <p className="text-xs text-muted-foreground">{project.primary_use_case}</p>
                          <p className="mt-1 text-[11px] font-bold text-foreground">Journey</p>
                          <p className="text-xs text-primary font-semibold">{project.user_journey_summary}</p>
                        </div>

                        <div className="mt-3">
                          <p className="text-[10px] font-bold text-muted-foreground mb-1">TECHNOLOGIES</p>
                          <div className="flex flex-wrap gap-1">
                            {[...project.backend_technologies, ...project.frontend_technologies, ...project.ai_ml_technologies].map((t) => (
                              <span key={t} className="rounded-full bg-secondary px-2 py-0.5 text-[10px] text-secondary-foreground">{t}</span>
                            ))}
                          </div>
                        </div>

                        <div className="mt-3 flex items-center gap-1 text-[11px] text-dream">
                          <Target className="h-3 w-3" />
                          {project.business_value}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      )}
    </div>
  );
}
