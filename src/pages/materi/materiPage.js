import React, {Component} from 'react'
import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow,  Fab } from '@material-ui/core'
import './style.css'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import { API_URL } from '../../helpers'
import LoadingPage from '../loadingPage'

class MateriPage extends Component{
    state={
        modulKelasData:'',
        openModul: ''
    }

    componentDidMount(){
        window.scrollTo(0,0)

        let url = queryString.parse(this.props)
        // let link = queryString.parse(this.props)
        // console.log(url)
        // console.log(this.props.userId)
        Axios.get(`${API_URL}/modul/getModul?idkelas=${this.props.idKelas}`)
        .then((res)=>{
            // console.log(res.data)
            this.setState({modulKelasData: res.data})
                Axios.get(`${API_URL}/belajar/getBelajar?idkelas=${res.data.idkelas} && iduser=${this.props.userId}`)
                .then((res)=>{
                    // console.log(res.data)
                    this.setState({openModul: res.data})
                }).catch((err)=>{
                    console.log(err)
                })
        }).catch((err)=>{
            console.log(err)
        })

        // Axios.get(`${API_URL}/belajar/getBelajar?idkelas=${this.props.idKelas} && iduser=${this.props.userId}`)
        // .then((res)=>{
        //     console.log(res.data)
        //     this.setState({openModul: res.data})
        // }).catch((err)=>{
        //     console.log(err)
        // })
    }
    componentDidUpdate(){
        // console.log(this.state.openModul)
        // console.log(this.props.kelasid)
        // console.log(this.props.userId)
    }

    renderData=()=>{
        // console.log(this.state.openModul)
        // console.log(this.props.kelasid)
        // console.log(this.props.userId)
        // console.log(this.state.modulKelasData)
        var data = this.state.modulKelasData
        return data.map((val, i)=>{
            return(
                <TableRow className='modulList'>
                    <TableCell>{val.title}</TableCell>
                    <TableCell >
                        {this.props.userId.langganan ? 
                        <Link to={`/detailModul?kelasId=${val.idkelas}&idmodul=${val.idmodul}`} style={{textDecoration:'none', color: '#000'}}>
                            <p className='lanjut'>Lanjut belajar</p>
                        </Link>
                        : <p className='lanjut'>Lanjut belajar</p> }
                    </TableCell>
                </TableRow>
            )
        })
    }

    render(){
        
        if(!this.state.modulKelasData){
            return <LoadingPage/>
        }
        // if(!this.props.userId){
        //     return <LoadingPage/>
        // }
        // if(!this.props.kelasId){
        //     return <LoadingPage/>
        // }
        return(
            <div>
                <div className='container mt-4'>
                    <div className='row'>
                        <div className='col-12 materiContainer '>
                            <p>Daftar Modul</p>
                            {this.props.langganan}
                            <Table>
                                <TableHead>
                                    <TableCell style={{width:'80%'}}>Modul</TableCell>
                                    <TableCell style={{width:'20%'}}>Aksi</TableCell>
                                </TableHead>
                                <TableBody>
                                    {this.renderData()}
                                </TableBody>
                            </Table>
                        </div>
                        {/* <div className='col-3'>
                            <div className='boks'></div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

const mapsStateToProps = ({auth})=>{
    return{
        userId : auth
    }
}

export default connect(mapsStateToProps) (MateriPage);