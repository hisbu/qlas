import React, {Component} from 'react'
import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow,  Fab } from '@material-ui/core'
import './style.css'
import Axios from 'axios'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { API_URL } from '../../helpers'
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
class MateriPage extends Component{
    state={
        modulKelasData:'',
        openModul: ''
    }

    componentDidMount(){

        // let url = queryString.parse(this.props.location.se)
        let link = queryString.parse(this.props)
        console.log(this.props.idKelas)
        console.log(this.props.userId)
        Axios.get(`${API_URL}/modul/getModul?idkelas=${this.props.idKelas}`)
        .then((res)=>{
            console.log(res.data)
            this.setState({modulKelasData: res.data})
                Axios.get(`${API_URL}/belajar/getBelajar?idkelas=${res.data.idkelas} && iduser=${this.props.userId}`)
                .then((res)=>{
                    console.log(res.data)
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
        console.log(this.state.openModul)
        console.log(this.props.kelasid)
        console.log(this.props.userId)
    }

    renderData=()=>{
        console.log(this.state.openModul)
        console.log(this.props.kelasid)
        console.log(this.props.userId)
        const {margin} = useStyles
        var data = this.state.modulKelasData
        return data.map((val, i)=>{
            return(
                <TableRow>
                    <TableCell>{val.title}</TableCell>
                    <TableCell>
                        <Fab
                            variant="extended"
                            size="small"
                            color="primary"
                            aria-label="add"
                            className={margin}
                            style={{marginBottom:'0.5em', display:'block'}}
                            >
                            {/* <Assignment className={extendedIcon}/> */}
                            Lihat Tugas
                        </Fab>
                        
                    </TableCell>
                </TableRow>
            )
        })
    }

    render(){
        
        if(!this.state.modulKelasData){
            return <LoadingPage/>
        }
        if(!this.props.userId){
            return <LoadingPage/>
        }
        if(!this.props.kelasId){
            return <LoadingPage/>
        }
        return(
            <div>
                <div className='container mt-4'>
                    <div className='row'>
                        <div className='col-12 materiContainer '>
                            <p>Daftar Modul</p>
                            <Table>
                                <TableHead>
                                    <TableCell style={{width:'80%'}}>Modul</TableCell>
                                    <TableCell style={{width:'20%'}}>Status</TableCell>
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
        userId : auth.userId
    }
}

export default connect(mapsStateToProps) (MateriPage);