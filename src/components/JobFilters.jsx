import React from "react";

function JobFilters({ activeCategory, onChange, setSelected }) {
  const CATEGORIES = [
    { label: "Software Development", value: "software-dev" },
    { label: "Design", value: "design" },
    { label: "Sales", value: "sales" },
    { label: "Product", value: "product" },
    { label: "Finance", value: "finance" },
    { label: " All Others", value: "all-others" },
  ];
  const handleClick = (value) => {
    onChange(value);
    setSelected(true);
  };
  return (
    <div className="flex flex-wrap gap-3 justify-center py-4">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.value}
          onClick={() => handleClick(cat.value)}
          className={`px-4 py-2 rounded-full border transition
            ${
              activeCategory === cat.value
                ? "bg-blue-500 text-white border-blue-500 cursor-pointer "
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 cursor-pointer    "
            }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export default JobFilters;
