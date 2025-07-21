import { useState } from "react";
import Filters from "./components/Filters";
import JobList from "./components/JobList";
import JobMap from "./components/JobMap";
import { useCompanies } from "./hooks/useCompanies";

function App() {
  const [contacted, setContacted] = useState<Set<string>>(new Set());
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const companies = useCompanies({
    search: searchQuery,
    state: selectedState,
    industry: selectedIndustry,
  });

  const toggleContacted = (id: string) => {
    setContacted((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex flex-col overflow-hidden">
        <div className="p-4 border-b">
          <Filters
            companies={companies}
            selectedState={selectedState}
            selectedIndustry={selectedIndustry}
            onSelectState={setSelectedState}
            onSelectIndustry={setSelectedIndustry}
            onSearch={setSearchQuery}
          />
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <JobList
            companies={companies}
            contacted={contacted}
            onToggleContacted={toggleContacted}
          />
        </div>
      </div>
      <div className="w-1/2 bg-white p-2">
        <div className="h-full rounded-2xl border shadow overflow-hidden">
          <JobMap companies={companies} />
        </div>
      </div>
    </div>
  );
}

export default App;
