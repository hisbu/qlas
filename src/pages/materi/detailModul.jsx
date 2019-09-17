import React, {Component} from 'react'
import './style.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import queryString from 'query-string'
import Axios from 'axios'
import { API_URL } from '../../helpers'
import LoadingPage from '../loadingPage'

class DetailModul extends Component{
    state={
        modulData:'',
        selectedModul: null,
        url: ''

    }

    componentDidMount(){
        window.scrollTo(0,0)
        let url = queryString.parse(this.props.location.search)
        this.setState({url: url})
        console.log(url)
        Axios.get(`${API_URL}/modul/getModul?idkelas=${url.kelasId}`)
        .then((res)=>{
            this.setState({modulData: res.data})
        }).catch((err)=>{
            console.log(err)
        })
    }

    renderList=()=>{
        let data = this.state.modulData
        return data.map((val)=>{
            return(
                <li onClick={()=> this.setState({selectedModul: val.idmodul})}>{val.title}</li>
            )
        })
    }

    renderContent=()=>{
        console.log(this.state.url)
        if(!this.state.selectedModul && !this.state.url.idmodul){
            return(
                <div>
                    <div className='modulVideo'>
                        <iframe width="100%" height="500" title="video" src={`https://www.youtube.com/embed/${this.state.modulData[0].video}`} frameborder="0" controls="0" allowfullscreen></iframe>
                    </div>
                    <div className='contentModul'>
                        <div className='contentxx' dangerouslySetInnerHTML={{ __html: this.state.modulData[0].content }} />
                        {/* <p>{val.content}</p> */}
                    </div>
                </div>
            )
        }
        return this.state.modulData.map((val,i)=>{
            console.log(val[i=0])
            let id = this.state.selectedModul ? this.state.selectedModul : this.state.url.idmodul 
            if(val.idmodul === parseInt(id)){
                return(
                    <div>
                        <div className='modulVideo'>
                            <iframe width="100%" height="500" title="video" src={`https://www.youtube.com/embed/${val.video}`} frameborder="0" controls="0" allowfullscreen></iframe>
                        </div>
                        <div className='contentModul'>
                            <div className='contentxx' dangerouslySetInnerHTML={{ __html: val.content }} />
                            {/* <p>{val.content}</p> */}
                        </div>
                    </div>
                )
            }
        })
    }
    render(){
        if(!this.state.modulData){
            return <LoadingPage/>
        }
        if(!this.props.token){
            return <Redirect to='/'/>
        }
        return(
            <div className='detailModul'>
                <div className='m-4'>
                    <div className='row'>
                        <div className='col-3 p-2'>

                            <div className='listModul'>
                                {this.renderList()}
                            </div>
                        </div>
                        <div className='col-9 p-2'>
                            {this.renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapsStateToProps = ({auth})=>{
    return{
        token   : auth.token
    }
}

export default connect(mapsStateToProps) (DetailModul);