import React from "react";
import DOMPurify from "dompurify";
function Description({ description, className = "" }) {
  const cleanHtml = DOMPurify.sanitize(description);
  return <div className={className} dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
}

export default Description;
