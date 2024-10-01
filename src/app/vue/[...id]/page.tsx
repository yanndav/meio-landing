import React from "react";

interface VueProps {
  params: {
    id: string;
  };
}

const Vue: React.FC<VueProps> = ({ params }) => {
  const id = params.id;
  return <div>{id}</div>;
};

export default Vue;
