import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, Info } from "lucide-react";
import {
  companies,
  skillRatings,
  SKILL_CODES,
  BLOOM_CODES,
  getCategoryColor,
  getCategoryLabel,
} from "@/data/companies";

export default function SkillComparison() {
  const navigate = useNavigate();
  const [selectedSkills, setSelectedSkills] = useState<string[]>(
    SKILL_CODES.map((s) => s.code)
  );

  const toggleSkill = (code: string) => {
    setSelectedSkills((prev) =>
      prev.includes(code)
        ? prev.filter((s) => s !== code)
        : [...prev, code]
    );
  };

  const activeSkills = SKILL_CODES.filter((s) => selectedSkills.includes(s.code));

  const companiesWithRatings = useMemo(() => {
    return companies.map((c) => {
      const ratings: Record<string, { rating: number; bloom_code: string }> = {};
      skillRatings
        .filter((sr) => sr.company_id === c.company_id)
        .forEach((sr) => {
          ratings[sr.skill_code] = { rating: sr.rating, bloom_code: sr.bloom_code };
        });
      return { ...c, ratings };
    });
  }, []);

  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {/* Header */}
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-bold text-foreground lg:text-3xl">
          <Brain className="h-7 w-7 text-primary" />
          Hiring Skill Sets
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Compare skill expectations and cognitive depth across recruiters
        </p>
      </div>

      {/* Skill Selector */}
      <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-bold text-muted-foreground">SELECT SKILL SETS TO COMPARE</p>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedSkills(SKILL_CODES.map((s) => s.code))}
              className="text-[10px] font-medium text-primary hover:underline"
            >
              Select All
            </button>
            <button
              onClick={() => setSelectedSkills([])}
              className="text-[10px] font-medium text-muted-foreground hover:underline"
            >
              Clear All
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {SKILL_CODES.map((skill) => (
            <button
              key={skill.code}
              onClick={() => toggleSkill(skill.code)}
              className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                selectedSkills.includes(skill.code)
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              <span>{skill.icon}</span>
              {skill.name}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="sticky left-0 z-10 bg-card px-4 py-3 text-left text-xs font-bold text-muted-foreground">
                Company
              </th>
              {activeSkills.map((skill) => (
                <th
                  key={skill.code}
                  className="px-3 py-3 text-center text-[10px] font-bold text-muted-foreground whitespace-nowrap"
                  title={skill.name}
                >
                  <div className="flex flex-col items-center gap-0.5">
                    <span>{skill.icon}</span>
                    <span>{skill.code}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {companiesWithRatings.map((company, i) => (
              <motion.tr
                key={company.company_id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.03 }}
                className="border-b border-border last:border-0 hover:bg-accent/50 cursor-pointer"
                onClick={() => navigate(`/companies/${company.company_id}`)}
              >
                <td className="sticky left-0 z-10 bg-card px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-muted text-[10px] font-bold text-foreground">
                      {company.short_name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">{company.short_name}</p>
                      <span className={`inline-block rounded-full px-1.5 py-0 text-[8px] font-semibold ${getCategoryColor(company.category)}`}>
                        {getCategoryLabel(company.category)}
                      </span>
                    </div>
                  </div>
                </td>
                {activeSkills.map((skill) => {
                  const data = company.ratings[skill.code];
                  if (!data) {
                    return (
                      <td key={skill.code} className="px-3 py-3 text-center">
                        <span className="text-xs text-muted-foreground/40">—</span>
                      </td>
                    );
                  }
                  const bloom = BLOOM_CODES[data.bloom_code];
                  return (
                    <td key={skill.code} className="px-3 py-3 text-center">
                      <div className="flex flex-col items-center gap-0.5">
                        <span
                          className="text-base font-extrabold"
                          style={{
                            color: `hsl(${221}, ${Math.min(40 + data.rating * 6, 83)}%, ${Math.max(53 - data.rating * 2, 35)}%)`,
                          }}
                        >
                          {data.rating}
                        </span>
                        <span className={`rounded px-1.5 py-0 text-[9px] font-bold ${
                          bloom && bloom.level >= 5 ? "bg-destructive/10 text-destructive" :
                          bloom && bloom.level >= 3 ? "bg-highlight/10 text-highlight" :
                          "bg-secondary text-secondary-foreground"
                        }`}>
                          {data.bloom_code}
                        </span>
                      </div>
                    </td>
                  );
                })}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground mb-2">
          <Info className="h-3.5 w-3.5" />
          BLOOM'S TAXONOMY CODES
        </div>
        <div className="flex flex-wrap gap-3">
          {Object.entries(BLOOM_CODES).map(([code, data]) => (
            <span key={code} className="text-xs text-muted-foreground">
              <span className="font-bold text-foreground">{code}</span> = {data.name} (L{data.level})
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
