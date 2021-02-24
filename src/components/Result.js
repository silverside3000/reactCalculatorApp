import React from 'react'

class Result extends React.Component{
    render(){
        let {result} = this.props
        return(
            <div className="result">
                <h3>{result}</h3>
            </div>
        )
    }
}

export default Result
