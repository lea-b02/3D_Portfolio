import React from 'react';

// ce si remplace les boules par des images
const SkillItem = ({ icon, name }) => {
  return (
    <div className="flex justify-center items-center flex-col cursor-pointer">
       <div className="w-24 h-24 p-2 rounded-full border-2 border-accent transition-all duration-200 transform hover:scale-105 active:scale-110 hover:brightness-125 active:brightness-150">
        <img
          src={icon}
          alt={name}
          className="object-cover rounded-full h-full w-full"
        />
      </div>
      <span className="mt-2 text-sm text-center">{name}</span>
    </div>
  );
};

export default SkillItem;
