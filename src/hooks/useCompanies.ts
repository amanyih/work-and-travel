import { useEffect, useMemo, useState } from "react";
import companiesData from "../data/companies.json";
import type { Company } from "../types";

interface UseCompaniesParams {
  search: string;
  state: string | null;
  industry: string | null;
}

export function useCompanies({ search, state, industry }: UseCompaniesParams) {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    setCompanies(companiesData);
  }, []);

  const filteredCompanies = useMemo(() => {
    const lowerSearch = search.toLowerCase();

    return companies.filter((c) => {
      const matchesSearch =
        c.companyName.toLowerCase().includes(lowerSearch) ||
        c.firstName.toLowerCase().includes(lowerSearch) ||
        c.lastName.toLowerCase().includes(lowerSearch);

      const matchesState = state ? c.state === state : true;
      const matchesIndustry = industry ? c.industry === industry : true;

      return matchesSearch && matchesState && matchesIndustry;
    });
  }, [companies, search, state, industry]);

  return filteredCompanies;
}
