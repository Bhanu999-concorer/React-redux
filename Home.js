import React from "react";
import { Link } from "@reach/router";

export default function Home() {
  return (
    <div className="jumbotron">
      <p> Pluralsight Administrator</p>
      <h4>React redux and routing for ultra-responsive wep apps</h4>
      <Link to="About" className="btn btn-primary btn-lg">
        About
      </Link>
    </div>
  );
}
