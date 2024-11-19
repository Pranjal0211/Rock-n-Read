import React from "react";

const ProgramCard = ({ icon: Icon, title, description, iconColor }) => {
  return (
    <div className="p-6 bg-white/15 border border-gray-300 border-white rounded-lg shadow-lg text-center">
      <Icon className={`w-12 h-12 mx-auto mb-4 ${iconColor}`} />
      <h3 className="text-2xl font-semibold text-cblue">{title}</h3>
      <br />
      <p className="text-white">{description}</p>
    </div>
  );
};

export default ProgramCard;