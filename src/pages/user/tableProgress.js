import React, {Component} from 'react'
import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Paper, Fab } from '@material-ui/core'
import { Navigation, Assignment, Print} from '@material-ui/icons'
import { Progress } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { API_URL } from '../../helpers'
import { Ballot, EventNote } from '@material-ui/icons'
import Arrow from '../../supports/img/lanjut.png'
import LoadingPage from '../loadingPage'

const useStyles = makeStyles(theme => ({
    margin:{
        margin: theme.spacing(3)
    },
    marginButtom:{
        marginBottom: '1em',
    },
    extendedIcon: {
        marginRight: theme.spacing(3)
    }
}))

class TableProgress extends Component{
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
        if(modulSelesai){
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
                            <TableRow>
                                <TableCell>{item.kelasName}</TableCell>
                                <TableCell>
                                    <Progress animated color='warning' value={progress}/>
                                </TableCell>
                                <TableCell>
                                    <Link to={`/dashboard/detailModul?kelasId=${val.kelasId}`}>
                                        Lanjut belajar
                                    </Link>
                                </TableCell>
                            </TableRow>
                        )
                    }
                })
            })
        }
        return (
            <TableRow>
                <TableCell>Belum ada kelas yang anda ambil</TableCell>
            </TableRow>
        )

    }
    render(){
        if(!this.state.kelasData ){
            return <LoadingPage/>
        }
        const {margin, extendedIcon} = useStyles
        return(
            <div className='progressKelas' style={{width:'100%'}}>
                <Paper style={{padding:'1em', marginTop:'1em'}}>
                    <p className='progressTitle'>Progress Belajar</p>
                    <Table>
                        <TableHead>
                            <TableCell style={{width:'40%'}}>Kelas</TableCell>
                            <TableCell style={{width:'40%'}}>Progress</TableCell>
                            <TableCell style={{width:'20%'}}>Aksi</TableCell>
                        </TableHead>
                        <TableBody>
                            {this.renderKelasku()}
                        </TableBody>
                    </Table>
                </Paper>
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
export default connect(mapsStateToProps) (TableProgress);