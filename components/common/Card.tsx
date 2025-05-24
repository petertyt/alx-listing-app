import React from "react";

type CardProps = {
  title: string;
  description: string;
  imageUrl?: string;
  altText?: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, description, imageUrl, altText, children }) => {
  return (
    <div className="max-w-sm rounded-2xl shadow-lg bg-white overflow-hidden">
      {imageUrl && (
        <img className="w-full h-48 object-cover" src={imageUrl} alt={altText || title} />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        {children}
      </div>
    </div>
  );
};

export default Card;
