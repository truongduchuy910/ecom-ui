import { Component } from "react";

export function Box({ children }) {
  return (
    <div
      style={{
        padding: 34,
        marginTop: 21,
        marginBottom: 21,
        backgroundColor: "rgba(0,0,0,0.03)",
      }}
    >
      {children}
    </div>
  );
}
