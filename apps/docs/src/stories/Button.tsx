import React from "react";
import "./button.css";

interface ButtonProps {
  size?: "small" | "medium" | "large";
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ size = "medium", ...props }: ButtonProps) => {
  return <button type="button" {...props}></button>;
};
