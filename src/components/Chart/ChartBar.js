import'./ChartBar.css'
 const ChartBar = props =>{
    let filled='0%';
    if(props.maxValue>0)
    {
        filled=Math.round((props.value/props.maxValue)*100)+'%';
    }
    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className='chart-bar__fill' 
            style={{height:filled}}
            >
            </div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
    </div>
}
export default ChartBar;