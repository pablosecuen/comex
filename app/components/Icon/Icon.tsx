import React, { ReactElement } from "react";

interface IconProps {
  icon: ReactElement;
  className?: string; // Agrega la prop className
}

const Icon: React.FC<IconProps> = ({ icon, className }) => {
  const classes = className ? `${className}` : ""; // Clase CSS opcional

  return React.cloneElement(icon, { className: classes }); // Agrega la clase al icono
};

export default Icon;
