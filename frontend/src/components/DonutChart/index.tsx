import axios from 'axios';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/request';

type ChartData = {
    labels: string[],
    series: number[]
}
function DonutChart() {

    let chartData : ChartData = { labels: [], series:[]}
    
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then((response) => {
            const data = response.data as SaleSum[]
            const myLabels = data.map(x => x.sellerNamer)
            const mySeries = data.map(x => x.Sum)

            chartData = {labels: myLabels, series: mySeries}
            console.log(chartData)
        })

    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            options = {{ ...options, labels: chartData.labels}}
            series = {chartData.series}
            type = "donut"
            height = "240"
        />
    );
}

export default DonutChart;