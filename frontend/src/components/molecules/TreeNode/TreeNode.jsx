import { useState } from "react";

export const TreeNode = ({ folderName }) => {
  const [visibility, setVisibility] = useState({});

  if (!folderName) {
    return null;
  }

  function toggleVisibility(name) {
    setVisibility((currentVisibility) => ({
      ...currentVisibility,
      [name]: !currentVisibility[name],
    }));
  }

  return (
    <>
      {Array.isArray(folderName.children) ? (
        <button
          onClick={() => toggleVisibility(folderName.name)}
          style={{
            border: "none",
            cursor: "pointer",
            outline: "none",
            color: "white",
            backgroundColor: "transparent",
            paddingTop: "15px",
            fontSize: "16px",
          }}
        >
          {folderName.name}
        </button>
      ) : (
        <p
          style={{
            paddingTop: "5px",
            fontSize: "15px",
            cursor: "pointer",
            marginLeft: "5px",
          }}
        >
          {folderName.name}
        </p>
      )}
      {visibility[folderName.name] &&
        Array.isArray(folderName.children) &&
        folderName.children.map((child) => (
          <TreeNode folderName={child} key={child.path ?? child.name} />
        ))}
    </>
  );
};
