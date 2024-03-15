import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

import { data } from "@/data/chart";

import styles from "./styles.module.css";
import { useEffect, useRef } from 'react';

const options = {
  plugins: {
    legend: {
      display: true,
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.4, // Adiciona uma curvatura na linha
    },
  },
};


export default function Chart() {
  return(
    <div className={styles.container}>
      <Line data={data} options={options} />
    </div>
  )
}