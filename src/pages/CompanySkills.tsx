import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  ListChecks,
  Lightbulb,
  MapPin,
  Users,
} from "lucide-react";
import {
  getCompanyById,
  getSkillRatingsForCompany,
  SKILL_CODES,
  BLOOM_CODES,
} from "@/data/companies";

export default function CompanySkills() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const company = getCompanyById(Number(id));
  const ratings = getSkillRatingsForCompany(Number(id));

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
          <button className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground"><Brain className="h-3.5 w-3.5" />Skills</button>
          <button onClick={() => navigate(`/companies/${id}/hiring`)} className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground"><ListChecks className="h-3.5 w-3.5" />Hiring</button>
          <button onClick={() => navigate(`/companies/${id}/innovx`)} className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground"><Lightbulb className="h-3.5 w-3.5" />InnovX</button>
        </div>
      </div>

      {/* Skills Grid */}
      {ratings.length === 0 ? (
        <div className="rounded-xl border border-border bg-card p-12 text-center">
          <Brain className="mx-auto h-12 w-12 text-muted-foreground/30" />
          <p className="mt-4 text-lg font-medium text-muted-foreground">Skill data coming soon</p>
          <p className="mt-1 text-sm text-muted-foreground">Detailed skill expectations for {company.short_name} will be available shortly.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CODES.map((skill) => {
            const rating = ratings.find((r) => r.skill_code === skill.code);
            if (!rating) return null;
            const bloom = BLOOM_CODES[rating.bloom_code];
            const intensity = Math.min(rating.rating / 10, 1);

            return (
              <motion.div
                key={skill.code}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{skill.icon}</span>
                    <h3 className="text-sm font-bold text-foreground">{skill.name}</h3>
                  </div>
                </div>

                {/* Rating bar */}
                <div className="mt-3">
                  <div className="flex items-end justify-between">
                    <span className="text-3xl font-extrabold text-foreground">{rating.rating}</span>
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                      bloom.level >= 5 ? "bg-destructive/10 text-destructive" :
                      bloom.level >= 3 ? "bg-highlight/10 text-highlight" :
                      "bg-secondary text-secondary-foreground"
                    }`}>
                      {rating.bloom_code} — {bloom.name}
                    </span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${intensity * 100}%` }}
                    />
                  </div>
                  <p className="mt-1 text-[10px] text-muted-foreground">Rating out of 10</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
