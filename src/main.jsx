import React from "react";
import { createRoot } from "react-dom/client";
import { CounterApp } from "./CounterApp";
import "./styles.css";

const root = createRoot(document.getElementById("root"));

root.render(<CounterApp value={2023} />);