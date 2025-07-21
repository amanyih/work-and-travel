import type { Company } from "../types";
import JobItem from "./JobItem";

type Props = {
  companies: Company[];
  contacted: Set<string>;
  onToggleContacted: (id: string) => void;
};

export default function JobList({
  companies,
  contacted,
  onToggleContacted,
}: Props) {
  return (
    <div className="space-y-4">
      {companies.map((company) => (
        <JobItem
          key={company.companyId}
          company={company}
          isContacted={contacted.has(company.companyId)}
          onToggle={() => onToggleContacted(company.companyId)}
        />
      ))}
    </div>
  );
}
