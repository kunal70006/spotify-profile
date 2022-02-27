import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import { useEffect, useState } from "react";

const AudioChart = ({ data }) => {
  const [features, setFeatures] = useState({});
  const properties = [
    "acousticness",
    "danceability",
    "energy",
    "instrumentalness",
    "liveness",
    "speechiness",
    "valence",
  ];

  useEffect(() => {
    let tempObj = {};
    if (data) {
      properties.map((prop) => {
        if (prop in data) {
          // console.log(prop);
          tempObj = { ...tempObj, [prop]: data[prop] };
          // setFeatures({ ...features, [prop]: data[prop] });
        }
      });

      setFeatures(tempObj);
    }
  }, [data]);

  const chartData = {
    labels: properties,
    datasets: [
      {
        label: "Audio Features",
        data: Object.values(features),
        backgroundColor: [
          "#84E3C8",
          "#A8E6CF",
          "#DCEDC1",
          "#FFD3B6",
          "#FFAAA5",
          "#FF8B94",
          "#FF7480",
        ],
        borderColor: [
          "#84E3C8",
          "#A8E6CF",
          "#DCEDC1",
          "#FFD3B6",
          "#FFAAA5",
          "#FF8B94",
          "#FF7480",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={chartData} />;
};

export default AudioChart;
