import React from "react";
import Button from "./Button";
function Filter({ setCategory, setSelected }) {
  const handleClick = (e) => {
    setCategory(e.target.value);
    setSelected(true);
    
  };
  const handleClear = () => {
    setCategory("");
    setSelected(false);
  };
  return (
    <section className="w-full px-4 py-3 flex flex-col items-center m-3">
      <h3 className="text-lg font-semibold mb-3">Filter by Category</h3>

      <div className="flex flex-wrap gap-3">
        <Button
          value={"sofware-dev"}
          onClick={handleClick}
          className="px-4 py-2 rounded-full border text-sm font-medium cursor-pointer"
        >
          Software Dev
        </Button>

        <Button
          value={"design"}
          onClick={handleClick}
          className="px-4 py-2 rounded-full border text-sm font-medium cursor-pointer "
        >
          Design
        </Button>

        <Button
          value={"data"}
          onClick={handleClick}
          className="px-4 py-2 rounded-full border text-sm font-medium cursor-pointer "
        >
          Data Analysis
        </Button>

        <Button
          value={"marketing"}
          onClick={handleClick}
          className="px-4 py-2 rounded-full border text-sm font-medium cursor-pointer "
        >
          Marketing
        </Button>

        <Button
          value={"customer-service"}
          onClick={handleClick}
          className="px-4 py-2 rounded-full border text-sm font-medium cursor-pointer "
        >
          Customer Support
        </Button>

        <Button
          value={"all-others"}
          onClick={handleClick}
          className="px-4 py-2 rounded-full border text-sm font-medium cursor-pointer "
        >
          Other
        </Button>
        <Button
          onClick={handleClear}
          bgColor="bg-red-400"
          className="px-4 py-2 rounded-2xl border text-sm font-medium cursor-pointer "
        >
          Clear All
        </Button>
      </div>
    </section>
  );
}

export default Filter;
