import React from "react";
import CircularProgress from "../../Component/CircularProgressProps";

const DashboardHome = () => {
  const score = 7.7;
  return (
    <div>
      Dashboard Home
      <CircularProgress value={score} />
    </div>
  );
};

export default DashboardHome;
