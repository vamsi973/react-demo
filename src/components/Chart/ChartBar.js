import './ChartBar.css';


const ChartBar = (props) => {
    console.log(props,525)
    let barFillHeight = '0%';
    if (props.maxValue > 0) {
        barFillHeight =((props.value / props.maxValue) * 100) +'%';
        console.log(barFillHeight,99)
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                {/* <h1>{barFillHeight}</h1> */}
                <div className="chart-bar__fill" style={{ height: barFillHeight }}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    )
}
export default ChartBar;