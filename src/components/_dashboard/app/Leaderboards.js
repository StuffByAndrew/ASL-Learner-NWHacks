import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@mui/material';
//
import { BaseOptionChart } from '../../charts';

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: 'Learned',
    type: 'column',
    data: [5, 12, 13, 14, 16, 22, 31, 35, 43, 56, 58, 60],
    color: '#f492f0'
  }
];

export default function Leaderboards() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: 0 },
    plotOptions: { bar: {borderRadius: 5 } },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#f492f0'],
        shadeIntensity: 1,
        type: 'horizontal', 
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
        colorStops: [
          {
              offset: 0,
              color: '#f8bba1',
              opacity: 0.35
          },
          {
              offset: 55,
              color: '#f492f0',
              opacity: 1
          }]
      }},
    labels: [
      'Brian',
      'Alice',
      'Lily',
      'Andrew',
      'Vivian',
      'Bowen',
      'Harvir',
      'Jordan',
      'Hannah',
      'Parth',
      'Sophie',
      'Ralph',
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return `${y.toFixed(0)} new signs`;
          }
          return y;
        }
      }
    }
  });


  return (
    <Card>
      <CardHeader title="🥇 Leaderboards 🥇"/>
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <ReactApexChart type="bar" series={CHART_DATA} options={chartOptions} height={364} />
      </Box>
    </Card>
  );
}
