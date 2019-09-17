import React, {Component} from 'react'
import CardCatalogue from '../../component/card'
import Axios from 'axios'
import { API_URL } from '../../helpers'
import LoadingPage from '../loadingPage'

class ListKelas extends Component{
    state={
        kelasData:''
    }

    componentDidMount(){
        window.scrollTo(0,0)
        Axios.get(`${API_URL}/kelas/getKelas`)
        .then((res)=>{
            console.log(res.data[0].kelasName)
            this.setState({kelasData: res.data})
            // this.props.kelasInit(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    }

    renderKelasData = () => {
        // var kelasData = this.props.kelas
        return this.state.kelasData.reverse().map((item)=>{
            return (
                <div className='col-md-4 mt-4 '>
                    <CardCatalogue titleCard={item.kelasName} imageCard={`${API_URL}${item.image}`} kelasId={`/detail?id=${item.idKelas}`}/>
                </div>
            )
        })
    }

    render(){
        if(!this.state.kelasData) return <LoadingPage/>
        return(
            <div className='listkelas'>
                <div className='container mt-4 mb-4'>
                <h2>Berikut daftar Kelas yang dapat kamu ambil</h2>
                <div className='col-md-12 col-sm-12'>
                        <div className='row d-flex justify-content-between'>
                            {this.renderKelasData()}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default ListKelas;