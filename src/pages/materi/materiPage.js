import React, {Component} from 'react'
import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow,  Fab } from '@material-ui/core'
import './style.css'

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
    render(){
        const {margin} = useStyles
        return(
            <div>
                <div className='container mt-4'>
                    <div className='row'>
                        <div className='col-9 materiContainer '>
                            <p>Daftar Modul</p>
                                <Table>
                                    <TableHead>
                                        <TableCell style={{width:'80%'}}>Modul</TableCell>
                                        <TableCell style={{width:'20%'}}>Status</TableCell>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>Mastering React JS</TableCell>
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
                                        <TableRow>
                                            <TableCell>Membangun aplikasi mobile multi platform dengan react native </TableCell>
                                            
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
                                        <TableRow>
                                            <TableCell>Rest API menggunakan Express</TableCell>
                                           
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
                                    </TableBody>
                                </Table>
                            <div className='boks'/>

                        </div>
                        <div className='col-3'>
                            <div className='boks'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MateriPage;