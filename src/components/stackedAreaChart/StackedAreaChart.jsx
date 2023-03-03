import { useState, useEffect } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

function StackedAreaChart({ chartData, activeDiagtam }) {
  const [width, setWidth] = useState(window.innerWidth);
  const desctopSize = width < 1920;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
  }, []);

  const data = chartData?.map(item => {
    const yyyy = item.date.slice(0, 4);
    const dd = item.date.slice(-2);
    return {
      ...item,
      date: `${dd}/${yyyy}`,
    };
  });

  return (
    <AreaChart
      width={desctopSize ? 600 : 900}
      height={250}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <defs>
        <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#0F81CE" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#0F81CE" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorRed" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#C52D81" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#C52D81" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#1BBA64" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#1BBA64" stopOpacity={0} />
        </linearGradient>
      </defs>
      <CartesianGrid strokeDasharray="0" stroke="rgba(255, 255, 255, 0.04)" />
      <XAxis
        dataKey="date"
        tickLine={false}
        tickSize={16.5}
        stroke="rgba(255, 255, 255, 0.12)"
        style={{
          fill: 'rgba(255, 255, 255, 0.6)',
          fontSize: '11px',
          fontWeight: '400',
          lineHeight: '12px',
        }}
      />
      <YAxis
        tickLine={false}
        tickSize={21}
        stroke="rgba(255, 255, 255, 0.12)"
        style={{
          fill: 'rgba(255, 255, 255, 0.6)',
          fontSize: '11px',
          fontWeight: '400',
          lineHeight: '12px',
        }}
      />
      <Tooltip />
      {activeDiagtam.green && (
        <Area
          type="monotone"
          dataKey="green"
          stackId="1"
          stroke=" #1BBA64"
          strokeWidth={2}
          fill="url(#colorGreen)"
          dot={{ stroke: '#1BBA64', strokeWidth: 2, fill: '#1BBA64' }}
          isAnimationActive={false}
        />
      )}
      {activeDiagtam.red && (
        <Area
          type="monotone"
          dataKey="red"
          stackId="1"
          stroke="#C52D81"
          strokeWidth={2}
          fill="url(#colorRed)"
          dot={{ stroke: '#C52D81', strokeWidth: 2, fill: '#C52D81' }}
          isAnimationActive={false}
        />
      )}
      {activeDiagtam.blue && (
        <Area
          type="monotone"
          dataKey="blue"
          stackId="1"
          stroke="#0F81CE"
          strokeWidth={2}
          fill="url(#colorBlue)"
          dot={{ stroke: '#0F81CE', strokeWidth: 2, fill: '#0F81CE' }}
          isAnimationActive={false}
        />
      )}
    </AreaChart>
  );
}

export default StackedAreaChart;
