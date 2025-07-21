import { useEffect, useState } from "react";
import type { Company } from "../types";

type Props = {
  companies: Company[];
  selectedState: string | null;
  selectedIndustry: string | null;
  onSelectState: (state: string | null) => void;
  onSelectIndustry: (industry: string | null) => void;
  onSearch: (query: string) => void;
};

export default function Filters({
  companies,
  selectedState,
  selectedIndustry,
  onSelectState,
  onSelectIndustry,
  onSearch,
}: Props) {
  const [searchInput, setSearchInput] = useState("");

  const states = Array.from(new Set(companies.map((c) => c.state))).sort();
  const industries = Array.from(
    new Set(companies.map((c) => c.industry))
  ).sort();

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(searchInput.trim());
    }, 300);
    return () => clearTimeout(timeout);
  }, [searchInput, onSearch]);

  return (
    <div className="flex flex-wrap gap-4 items-center">
      <input
        type="text"
        placeholder="Search companies..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="w-full max-w-sm px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-sm"
      />

      <div className="flex gap-2 items-center">
        <label className="text-sm font-medium text-gray-600">State</label>
        <select
          className="border border-gray-300 bg-white text-sm p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-200"
          value={selectedState ?? ""}
          onChange={(e) => onSelectState(e.target.value || null)}
        >
          <option value="">All States</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-2 items-center">
        <label className="text-sm font-medium text-gray-600">Industry</label>
        <select
          className="border border-gray-300 bg-white text-sm p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-200"
          value={selectedIndustry ?? ""}
          onChange={(e) => onSelectIndustry(e.target.value || null)}
        >
          <option value="">All Industries</option>
          {industries.map((ind) => (
            <option key={ind} value={ind}>
              {ind}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
