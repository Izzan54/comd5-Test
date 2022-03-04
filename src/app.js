import React, { useState, useEffect } from "react";
import { PageRoute } from "./routes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "app.css";
import { Layout, Login, Register } from "components";

toast.configure();

function App() {
  return (
    <Router>
      <PageRoute />
    </Router>
  );
}

export default App;
