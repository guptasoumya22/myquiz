import React from "react";

function Leaderboard_body(props) {
  const data = props.data;

  return (
    <div class="details_L">
      <div className="board">
        <div className=" boxes el-1 ">{data.name}</div>
      </div>
      <div className="board">
        <div className=" boxes el-2 ">{data.correct}</div>
      </div>
      <div className="board">
        <div className=" boxes el-3 ">{data.wrong}</div>
      </div>
      <div className="board">
        <div className=" boxes el-4 ">{data.accuracy}</div>
      </div>
    </div>
  );
}
export default Leaderboard_body;
