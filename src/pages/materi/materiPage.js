import React, {Component} from 'react'
import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow,  Fab } from '@material-ui/core'
import { CheckCircleOutline } from '@material-ui/icons'
import './style.css'
import Axios from 'axios'
import { connect } from 'react-redux'
import {pagePosition } from '../../redux/actions'
import { Link, Redirect } from 'react-router-dom'
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
        var position = window.location.href.split('/')[3]
        this.props.pagePosition(position)

        let url = queryString.parse(this.props)
        // let link = queryString.parse(this.props)
        // console.log(url)
        // console.log(this.props.userId)
        Axios.get(`${API_URL}/modul/getModul?idkelas=${this.props.idKelas}`)
        .then((res)=>{
            // console.log(res.data)
            this.setState({modulKelasData: res.data})
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
        console.log(this.props.belajar)
        // console.log(this.state.modulKelasData)
        var data = this.state.modulKelasData
        var dataModul = this.props.belajar
        return data.map((val, i)=>{
            let status = ''
            dataModul.map((item)=>{
                if(val.idmodul === item.modulId){
                    return status = 'taken'
                }   
            })
            if(status){
                return(
                    <TableRow className='modulList'>
                        <TableCell>{val.title}</TableCell>
                        <TableCell >
                            <Link to={`/dashboard/detailModul?kelasId=${val.idkelas}&idmodul=${val.idmodul}`} style={{textDecoration:'none', color: '#000'}}>
                                <p className='lanjut' style={{color: '#3f51b5', fontWeight:'bold'}}><CheckCircleOutline color='primary'/>Selesai</p>
                            </Link>
                        </TableCell>
                    </TableRow>
                )    
            }
            return(
                <TableRow className='modulList'>
                    <TableCell>{val.title}</TableCell>
                    <TableCell >
                        {this.props.langganan ? 
                        <Link to={`/dashboard/detailModul?kelasId=${val.idkelas}&idmodul=${val.idmodul}`} style={{textDecoration:'none', color: '#000'}}>
                            <p className='lanjut' onClick={()=>this.lanjutBtnClick(val.idmodul)}>Lanjut belajar</p>
                        </Link>
                        : <p className='lanjut'>Lanjut belajar</p> }
                    </TableCell>
                </TableRow>
            )
        })
    }

    lanjutBtnClick=(idmodul)=>{
        const token     = localStorage.getItem('token')
        var headers = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        let data = {
            modulId : idmodul,
            userId : this.props.userId
        }
        Axios.post(`${API_URL}/belajar/addBelajar`, data, headers)
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }

    render(){
        
        if(!this.state.modulKelasData){
            return <LoadingPage/>
        }
        if(!this.props.belajar){
            return <LoadingPage/>
        }
        // if(!this.props.kelasId){
        //     return <LoadingPage/>
        // }
        return(
            <div>
                <div className='container mt-4'>
                    <div className='row'>
                        <div className='col-12 materiContainer '>
                            <p>Daftar Modul</p>
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
        userId : auth.userId,
        belajar : auth.belajar,
        langganan : auth.langganan
    }
}

export default connect(mapsStateToProps, {pagePosition}) (MateriPage);