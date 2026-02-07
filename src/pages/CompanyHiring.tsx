import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  ListChecks,
  Lightbulb,
  MapPin,
  Calendar,
  Users,
  Clock,
  CheckCircle2,
  Monitor,
  Building2,
  MessageSquare,
  Code,
  Puzzle,
  UserCheck,
} from "lucide-react";
import { getCompanyById, hiringDataMap, formatCurrency, SKILL_CODE_NAMES } from "@/data/companies";

const roundIcons: Record<string, any> = {
  "Coding Test": Code,
  Interview: MessageSquare,
  Hackathon: Puzzle,
};

const evalIcons: Record<string, any> = {
  Technical: Brain,
  HR: UserCheck,
};

export default function CompanyHiring() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const company = getCompanyById(Number(id));
  const hiringData = hiringDataMap[Number(id)];

  if (!company) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-muted-foreground">Company not found</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6">
      {/* Back + Header */}
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
        {/* Sub-navigation */}
        <div className="hidden gap-1.5 sm:flex">
          <button onClick={() => navigate(`/companies/${id}/skills`)} className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground">
            <Brain className="h-3.5 w-3.5" />Skills
          </button>
          <button className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">
            <ListChecks className="h-3.5 w-3.5" />Hiring Rounds
          </button>
          <button onClick={() => navigate(`/companies/${id}/innovx`)} className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground">
            <Lightbulb className="h-3.5 w-3.5" />InnovX
          </button>
        </div>
      </div>

      {/* Content */}
      {!hiringData ? (
        <div className="rounded-xl border border-border bg-card p-12 text-center">
          <ListChecks className="mx-auto h-12 w-12 text-muted-foreground/30" />
          <p className="mt-4 text-lg font-medium text-muted-foreground">Hiring data coming soon</p>
          <p className="mt-1 text-sm text-muted-foreground">Detailed hiring rounds for {company.short_name} will be available shortly.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {hiringData.job_role_details.map((role, ri) => (
            <div key={ri} className="space-y-4">
              {/* Role Header */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: ri * 0.1 }}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <h2 className="text-lg font-bold text-foreground">{role.role_title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{role.job_description}</p>
                <div className="mt-3 flex flex-wrap gap-3 text-xs">
                  <span className="flex items-center gap-1 rounded-full bg-highlight/10 px-3 py-1 font-semibold text-highlight">
                    💰 {formatCurrency(role.ctc_or_stipend)} CTC
                  </span>
                  <span className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-secondary-foreground">
                    🎁 {role.bonus}
                  </span>
                </div>
              </motion.div>

              {/* Timeline */}
              <div className="relative ml-6 border-l-2 border-border pl-8 space-y-6">
                {role.hiring_rounds.map((round, roundIdx) => {
                  const RoundIcon = roundIcons[round.round_category] || CheckCircle2;
                  const EvalIcon = evalIcons[round.evaluation_type] || Brain;

                  return (
                    <motion.div
                      key={roundIdx}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: ri * 0.1 + roundIdx * 0.08 }}
                      className="relative"
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-[2.55rem] flex h-7 w-7 items-center justify-center rounded-full border-2 border-primary bg-card">
                        <span className="text-xs font-bold text-primary">{round.round_number}</span>
                      </div>

                      <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                        {/* Round Header */}
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-sm font-bold text-foreground">
                            Round {round.round_number} — {round.round_name}
                          </h3>
                        </div>
                        <div className="mt-1.5 flex flex-wrap gap-2 text-xs">
                          <span className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-secondary-foreground">
                            <RoundIcon className="h-3 w-3" />
                            {round.round_category}
                          </span>
                          <span className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-secondary-foreground">
                            <EvalIcon className="h-3 w-3" />
                            {round.evaluation_type}
                          </span>
                          <span className="flex items-center gap-1 rounded-full bg-secondary px-2.5 py-0.5 text-secondary-foreground">
                            <Monitor className="h-3 w-3" />
                            {round.assessment_mode}
                          </span>
                        </div>

                        {/* Skill Sets */}
                        <div className="mt-4 space-y-3">
                          {round.skill_sets.map((skill, si) => (
                            <div key={si} className="rounded-lg bg-background p-3">
                              <p className="text-xs font-bold text-primary">
                                {SKILL_CODE_NAMES[skill.skill_set_code] || skill.skill_set_code}
                              </p>
                              <div className="mt-1.5 space-y-1">
                                {skill.typical_questions.split(";").map((q, qi) => (
                                  <p key={qi} className="text-xs text-muted-foreground">
                                    • {q.trim()}
                                  </p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
