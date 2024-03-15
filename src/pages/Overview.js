import React from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import "../scss/Home.scss";
import { AiOutlineSwitcher } from "react-icons/ai";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
function Overview() {
  const options = {
    animationEnabled: true,
    maintainAspectRatio: true,
    height: 300,
    backgroundColor: "rgb(41, 41, 41)",
    axisX: {
      valueFormatString: "DD MMM",
      intervalType: "day",
      interval: 1,
      labelFontColor: "#9b9a9a",
      lineColor: "#9b9a9a",
    },
    axisY: {
      minimum: 0,
      maximum: 1000,
      interval: 200,
      labelFontColor: "#9b9a9a",
      lineThickness: 0,
      gridColor: "#9b9a9a",
      tickThickness: 0,
      gridThickness: 0.2,
    },

    data: [
      {
        type: "splineArea",
        fillOpacity: 0.2,
        color: "#8b0000",
        markerType: "none",
        dataPoints: [
          { x: new Date(2023, 0, 23), y: 0 },
          { x: new Date(2023, 0, 24), y: 400 },
          { x: new Date(2023, 0, 25), y: 250 },
          { x: new Date(2023, 0, 26), y: 220 },
          { x: new Date(2023, 0, 27), y: 180 },
          { x: new Date(2023, 0, 28), y: 500 },
          { x: new Date(2023, 0, 29), y: 525 },
          { x: new Date(2023, 0, 30), y: 600 },
          { x: new Date(2023, 0, 31), y: 800 },
          { x: new Date(2023, 1, 1), y: 900 },
        ],
      },
      {
        type: "splineArea",
        name: "Dataset 2",
        fillOpacity: 0.2,
        color: "#964B00",
        markerType: "none",
        dataPoints: [
          { x: new Date(2023, 0, 23), y: 250 },
          { x: new Date(2023, 0, 24), y: 400 },
          { x: new Date(2023, 0, 25), y: 240 },
          { x: new Date(2023, 0, 26), y: 230 },
          { x: new Date(2023, 0, 27), y: 220 },
          { x: new Date(2023, 0, 28), y: 190 },
          { x: new Date(2023, 0, 29), y: 500 },
          { x: new Date(2023, 0, 30), y: 600 },
          { x: new Date(2023, 0, 31), y: 500 },
          { x: new Date(2023, 1, 1), y: 900 },
        ],
      },
    ],
  };
  return (
    <div className="card-wrapper">
      <div className="grap-label-section">
        <div className="label">
          <div className="icon">
            <AiOutlineSwitcher />
          </div>
          <div className="graph-label">
            <span className="label-heading">Total Assets</span>
            <span className="label-value">$200</span>
          </div>
        </div>
        <div className="label">
          <div className="icon">
            <AiOutlineSwitcher />
          </div>
          <div className="graph-label">
            <span className="label-heading">Total Assets</span>
            <span className="label-value">$200</span>
          </div>
        </div>
        <div className="label">
          <div className="icon">
            <AiOutlineSwitcher />
          </div>
          <div className="graph-label">
            <span className="label-heading">Total Assets</span>
            <span className="label-value">$200</span>
          </div>
        </div>
      </div>

      <CanvasJSChart options={options} />
    </div>
  );
}

export default Overview;
