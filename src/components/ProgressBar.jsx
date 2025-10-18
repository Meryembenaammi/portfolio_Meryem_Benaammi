import React from "react";

export default function ProgressBar({ skill, level }) {
  return (
    <div className="progress-bar-container" data-aos="fade-right">
      <span className="skill-name">{skill}</span>
      <div className="progress">
        <div
          className="progress-fill"
          style={{ width: `${level}%` }}
        >
          <span className="progress-level">{level}%</span>
        </div>
      </div>
    </div>
  );
}
