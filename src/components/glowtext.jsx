import React from "react";

export default function GlowText({ children }) {
  const style = {
    fontWeight: "bold",
    background: "linear-gradient(270deg, #6AEEFF, #EBFF10, #6AEEFF)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    display: "inline-block",
    backgroundSize: "400% 100%",
    animation: "gradientMove 5s ease-in-out infinite",
  };

  return (
    <>
      <style>
        {`
          @keyframes gradientMove {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      <span style={style}>{children}</span>
    </>
  );
}
