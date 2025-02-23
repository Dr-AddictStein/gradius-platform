"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const SignUpButton: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 text-base font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default SignUpButton;
