import React, {Component} from 'react'
import { 
    Table, TableBody, TableCell, TableHead, TableRow
    } from '@material-ui/core'
import './transaksiStyle.css'
import Axios from 'axios'
import { API_URL } from '../../helpers'

class Cart extends Component{

    componentDidMount(){
        
    }
    render(){
        return(
            <div id='cartPage'>
                <div className='container kotak mt-5 mb-5'>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Kelas Name</TableCell>
                                <TableCell>Harga</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {/* {this.renderData()} */}
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default Cart;