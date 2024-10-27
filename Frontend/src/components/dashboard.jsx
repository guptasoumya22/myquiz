import React, { useState } from "react";
import "../components_style/dashboard.css";
import { useLocation } from "react-router-dom";
import Host from "./dashboard_host";
import Join from "./dashboard_join";

const Dashboard = () => {
  const location = useLocation();
  const data = location.state.data;

  const join = data.join;
  const host = data.host;

  const [selectedOption, setSelectedOption] = useState("join");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="dashboard-container container">
      <div class="h1_text">DashBoard</div>
      <div className="option-section">
        <div
          className={`option ${selectedOption === "join" ? "selected" : ""}`}
          onClick={() => handleOptionChange("join")}
        >
          Total Quiz Attempt
        </div>
        <div
          className={`option ${selectedOption === "host" ? "selected" : ""}`}
          onClick={() => handleOptionChange("host")}
        >
          Total Quiz Host
        </div>
      </div>

      <div className="info-section">
        {selectedOption === "join" ? (
          //JOIN
          <div className="container aboutbody">
            <div className="head_board">
              <div className="board">
                <div className=" boxes el-1 ">Quiz Name</div>
              </div>
              <div className="board">
                <div className=" boxes el-2 ">Total Question</div>
              </div>
              <div className="board">
                <div className=" boxes el-3 ">Correct</div>
              </div>
              <div className="board">
                <div className=" boxes el-4 ">%Achieved</div>
              </div>
            </div>
            {join.map((each, index) => {
              return <Join key={index} data={each} />;
            })}
          </div>
        ) : (
          //HOST
          <div className="container aboutbody">
            <div className="head_board">
              <div className="board">
                <div className=" boxes el-1 ">Quiz Name</div>
              </div>
              <div className="board">
                <div className=" boxes el-2 ">Total Question</div>
              </div>
              <div className="board">
                <div className=" boxes el-3 ">Duration</div>
              </div>
              <div className="board">
                <div className=" boxes el-4 ">Quiz_id</div>
              </div>
            </div>
            <div>
              {host.map((each, index) => {
                return <Host key={index} data={each} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
