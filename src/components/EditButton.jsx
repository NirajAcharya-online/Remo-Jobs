import React from "react";
import { Pencil, Save } from "lucide-react";

const EditButton = ({ isEditing, handleUpdate, setIsEditing }) => {
  return (
    <button
      onClick={() => (isEditing ? handleUpdate() : setIsEditing(true))}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
        isEditing
          ? "bg-green-600 text-white"
          : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
      }`}
    >
      {isEditing ? (
        <>
          <Save size={14} /> Save Changes
        </>
      ) : (
        <>
          <Pencil size={14} /> Edit Profile
        </>
      )}
    </button>
  );
};

export default EditButton;
