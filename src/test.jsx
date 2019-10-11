// import React, {Component} from 'react'
// import Axios from 'axios'
// import { Button } from '@material-ui/core'
// import { API_URL } from './helpers'
// // import {snap} from 'midtrans'

// class Test extends Component{
    
//     componentDidMount(){
//         // const data = {
//         //     transaction_details: {
//         //     order_id: "ORDER-101",
//         //     gross_amount: 10000
//         //   }
//         // }
    
//         // const headers = {
//         //   'Accept' :'*',
//         //   'Content-Type': 'application/json',
//         //   'Authorization': 'Basic AUTH_STRING',
//         //   'Access-Control-Allow-Origin': '*',
//         //   'Access-Control-Allow-Methods': 'POST',
//         //   'Access-Control-Allow-Headers': 'Authorization'
//         // }
    
//         // Axios.post('https://app.sandbox.midtrans.com/snap/v1/transactions', data ,{
//         //   headers:{
//         //     'Accept' :'application/json',
//         //     'Content-Type': 'application/json',
//         //     'Authorization': 'Basic AUTH_STRING',
//         //     'Access-Control-Allow-Origin': '*',
//         //     'Access-Control-Allow-Methods': 'POST',
//         //     'Access-Control-Allow-Headers': 'Authorization'
//         //   } , 
//         //   // auth:{
//         //   //   username: 'SB-Mid-server-Dr8HK_lJ4cuEZi4rUgNcsDUR',
//         //   //   password: ''
//         //   // }
//         // } )
//         // .then((res)=>{
//         //   console.log(res.data)
//         // }).catch((err)=>{
//         //   console.log(err)
//         // })
//     }

//     klikPay=()=>{
//         Axios.get(API_URL+'/midtrans/midtrans')
//         .then((res)=>{
//             console.log(res.data)
//             snap.pay(res.data)
//         }).catch((err)=>{
//             console.log(err)
//         })
//     }
//     render(){
//         return(
//             <center>
//                 <h1>test</h1>
//                 <Button onClick={this.klikPay}>Pay</Button>
//             </center>
//         )
//     }
// }

// export default Test;