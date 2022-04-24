import './Chart.css';
import ChartBar from './ChartBar';
const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(point => point.value)
    const totalMaximum = Math.max(...dataPointValue);

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => {
                return <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            })}
        </div>
    )
}

export default Chart;