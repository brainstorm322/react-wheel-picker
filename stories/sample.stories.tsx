import * as React from "react";

export default {
  title: "Component"
};

export const Text: React.FC = () => (
  <h1 onClick={(): void => alert("sample title")}>Sample Title</h1>
);