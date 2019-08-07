import React, {Component} from 'react'

class BtnBgWhite extends Component{
    render(){
        return <div className='btnBgWhite'>{this.props.title}</div>

    }
}

class BtnBgQcolor extends Component{
    render(){
        return <div className='btnBgQcolor'>{this.props.title}</div>

    }
}

export {
    BtnBgWhite,
    BtnBgQcolor
}

