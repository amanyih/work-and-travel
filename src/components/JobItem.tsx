import type { Company } from "../types";

type Props = {
  company: Company;
  isContacted: boolean;
  onToggle: () => void;
};

export default function JobItem({ company, isContacted, onToggle }: Props) {
  return (
    <div className="border border-gray-200 p-4 rounded-2xl shadow-sm bg-white hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start gap-4">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-gray-900">
            {company.companyName}
          </h2>
          <p className="text-sm text-gray-700">
            {company.firstName} {company.lastName}
          </p>
          <p className="text-sm text-blue-600">{company.phoneNumber}</p>
          <p className="text-sm text-blue-600">{company.email}</p>
          <p className="text-sm text-gray-500">{company.address}</p>
          <p className="text-sm text-gray-400">
            {company.state} • {company.industry}
          </p>
        </div>
        <button
          onClick={onToggle}
          className={`text-xs font-medium px-3 py-1.5 rounded-full border transition ${
            isContacted
              ? "bg-green-100 text-green-700 border-green-300"
              : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
          }`}
        >
          {isContacted ? "Contacted" : "Mark Contacted"}
        </button>
      </div>
    </div>
  );
}
