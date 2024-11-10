import React from "react";

const ProgramCard = ({ icon: Icon, title, description, iconColor }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg text-center">
      <Icon className={`w-12 h-12 mx-auto mb-4 ${iconColor}`} />
      <h3 className="text-2xl font-semibold text-primary">{title}</h3>
      <br />
      <p className="text-textGray">{description}</p>
    </div>
  );
};

export default ProgramCard;