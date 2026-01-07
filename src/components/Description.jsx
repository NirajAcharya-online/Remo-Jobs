import React from "react";
import { Interweave } from "interweave";
function Description({ description, className = "" }) {
  return (
    <div className={className}>
      <Interweave content={description} />
    </div>
  );
}

export default Description;
