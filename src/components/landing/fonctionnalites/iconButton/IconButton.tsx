import React from "react";

interface IconButtonProps {
  icon: React.FC;
  color: string;
  type: string;
}
const IconButton: React.FC<IconButtonProps> = ({ icon, color, type }) => {
  const Icon = icon;
  return (
    <div
      style={{
        backgroundColor: `var(${color})`,
        borderRadius: type === "title" ? `12px` : `9px`,
        width: type === "title" ? `60px` : `30px`,
        height: type === "title" ? `60px` : `30px`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }}
    >
      <Icon size={type === "title" ? 38 : 22} />
    </div>
  );
};

export default IconButton;
