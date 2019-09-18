import React, {Component} from 'react'
import { Ballot, EventNote } from '@material-ui/icons'
import Arrow from '../../supports/img/lanjut.png'
import { Link } from 'react-router-dom'
import { Progress } from 'reactstrap'
import Axios from 'axios'
import { connect } from 'react-redux'
import { API_URL } from '../../helpers'
import LoadingPage from '../loadingPage'

class Kelasku extends Component{
    state = {
        kelasData: '',
        belajarData: ''
    }

    componentDidMount(){
        const token = localStorage.getItem('token=')
        let headers = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }

        Axios.get(`${API_URL}/kelas/getKelas`)
        .then((res) => {
            console.log(res.data)
            this.setState({kelasData: res.data})
        }).catch((err)=>{
            console.log(err)
        })

        Axios.get(`${API_URL}/belajar/getBelajar`)
        .then((res) => {
            this.setState({belajarData: res.data})
        }).catch((err)=>{
            console.log(err)
        })
    }
    renderKelasku=()=>{
        let kelasKudata = this.props.kelaskuData
        let kelasdata = this.state.kelasData
        let modulSelesai = this.props.modulSelesai
        return kelasKudata.map((val)=>{
            return kelasdata.map((item) => {
                if(item.idKelas === val.kelasId){
                    let modSelesai = 0
                    modulSelesai.map((mod)=>{
                        if(mod.kelasId === item.idKelas){
                            modSelesai = mod.modulSelesai
                        }
                    })
                    let progress = (modSelesai / val.jumlahModul) * 100
                    console.log(modSelesai, '===', progress)
                    return (
                        <div className='box-1 mb-3'>
                            <div className='box-2 '>
                                <img src={`${API_URL}${item.image}`} alt={item.idKelas}/>
                            </div>
                            <div className='box-3 '>
                                <p className='judulKelas'>{item.kelasName}</p>
                                <p className='jmlModul'><Ballot/> {val.jumlahModul} Modul</p>
                                <div className='progressKelas'>
                                    <EventNote/> Progress belajar 
                                    <Progress animated color='warning' value={progress} bar>{Math.floor(progress)}%</Progress>
                                </div>
                            </div>
                            <div className='box-4'>
                                <Link to={`/dashboard/detailModul?kelasId=${item.idKelas}`}>
                                    <img src={Arrow} alt='lanjut' height='150px'/>
                                </Link>
                            </div>
                        </div>
                    )
                }
            })

            
        })
    }
    componentDidUpdate(){
        // console.log(this.state.belajarData)
        // console.log(this.props.kelaskuData)
    }
    render(){
        console.log(this.state.kelasData)
        console.log(this.props.kelaskuData)
        console.log(this.props.belajarData)
        console.log(this.props.auth)
        if(!this.state.kelasData ){
            return <LoadingPage/>
        }
        if(!this.props.modulSelesai ){
            return <LoadingPage/>
        }
        return (
            <div className='kelaskuPage'>
                <div className='container mt-4 mb-4 ml-2'>
                    {this.renderKelasku()}
                </div>
            </div>
        )
    }
}

const mapsStateToProps = ({auth}) => {
    return{
        userId  : auth.userId,
        kelaskuData   : auth.kelasku,
        belajarData : auth.belajar,
        modulSelesai    : auth.modulSelesai,
        auth        : auth
    }
}
export default connect(mapsStateToProps) (Kelasku);