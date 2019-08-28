import React, {Component} from 'react'
import { makeStyles, Table, TableBody, TableCell, TableHead, TableRow, Paper, Input, Fab } from '@material-ui/core'
import { Navigation, Assignment, Print} from '@material-ui/icons'
import { Progress } from 'reactstrap'

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
    render(){
        const {margin, extendedIcon, marginButtom} = useStyles
        return(
            <div className='progressKelas'>
                <Paper style={{padding:'1em', marginTop:'1em'}}>
                    <p className='progressTitle'>Progress Belajar</p>
                    <Table>
                        <TableHead>
                            <TableCell style={{width:'30%'}}>Kelas</TableCell>
                            <TableCell style={{width:'40%'}}>Progress</TableCell>
                            <TableCell style={{width:'30%'}}>Aksi</TableCell>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Mastering React JS</TableCell>
                                <TableCell>
                                    <Progress animated color='warning' value={75}/>
                                </TableCell>
                                <TableCell>
                                    <Fab
                                        variant="extended"
                                        size="small"
                                        color="primary"
                                        aria-label="add"
                                        className={margin}
                                        style={{marginBottom:'0.5em', display:'block'}}
                                        >
                                        <Assignment className={extendedIcon}/>
                                        Lihat Tugas
                                    </Fab>
                                    
                                    <Fab
                                        variant="extended"
                                        size="small"
                                        color="primary"
                                        aria-label="add"
                                        className={margin}
                                        >
                                        <Navigation className={extendedIcon}/>
                                        Lanjutkan Belajar
                                    </Fab>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Membangun aplikasi mobile multi platform dengan react native </TableCell>
                                <TableCell>
                                    <Progress animated color='warning' value={50}/>
                                </TableCell>
                                <TableCell>
                                    <Fab
                                        variant="extended"
                                        size="small"
                                        color="primary"
                                        aria-label="add"
                                        className={margin}
                                        style={{marginBottom:'0.5em', display:'block'}}
                                        >
                                        <Assignment className={extendedIcon}/>
                                        Lihat Tugas
                                    </Fab>
                                    
                                    <Fab
                                        variant="extended"
                                        size="small"
                                        color="primary"
                                        aria-label="add"
                                        className={margin}
                                        >
                                        <Navigation className={extendedIcon}/>
                                        Lanjutkan Belajar
                                    </Fab>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Rest API menggunakan Express</TableCell>
                                <TableCell>
                                    <Progress animated color='success' value={100}/>
                                </TableCell>
                                <TableCell>
                                    <Fab
                                        variant="extended"
                                        size="small"
                                        color="primary"
                                        aria-label="add"
                                        className={margin}
                                        style={{marginBottom:'0.5em', display:'block'}}
                                        >
                                        <Assignment className={extendedIcon}/>
                                        Lihat Tugas
                                    </Fab>
                                    
                                    <Fab
                                        variant="extended"
                                        size="small"
                                        color="inherit"
                                        aria-label="add"
                                        className={margin}
                                        >
                                        <Print className={extendedIcon}/>
                                        Cetak Sertifikat
                                    </Fab>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Paper>
          </div>
        )
    }
}

export default TableProgress;