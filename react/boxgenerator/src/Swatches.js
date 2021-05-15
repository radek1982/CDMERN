

import React from 'react'
function Swatches(props) {
    const swatches = props.colors.map((col) => <div className="swatch"  title={col} style={{background: col}} >
    </div>);

    return (<div className="container">{swatches}</div>)
}


export default Swatches