import React, {Component} from 'react'
// import { Paper } from '@material-ui/core'
import Carousel from './../../component/carouselUserDashboard'
import TableProgress from './tableProgress'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import { API_URL } from '../../helpers'
import LoadingPage from '../loadingPage'

class HomeUser extends Component{
  state={
    kelasData:''
  }

  componentDidMount(){
    Axios.get(`${API_URL}/kelas/getKelas`)
    .then((res)=>{
      this.setState({kelasData: res.data})
    }).catch((err)=>{
      console.log(err)
    })
  }

  renderKelas = () => {
    return this.state.kelasData.splice(0,2).map((val)=>{
        return(
          <div className='rekomendasiContainer'>
            <div className='rekomendasiImage'>
              <img src={`${API_URL}${val.image}`}alt='scale_image'/>
            </div>
            <div className='recomendasiDetail'>
                <p className='rekomendasiTitle'>
                  {val.kelasName}
                </p>
                {/* <p className='rekomendasiContent'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p> */}
            </div>
          </div>
        )
    })
  }

    render(){
      if(!this.state.kelasData) return <LoadingPage/>
        return(
            <div className='container'>
                  <div className='row'>
                    {/* ============ START MAIN CONTAINER ============ */}
                    <div className='col-9'>
                      <Carousel/>
                        <TableProgress/>
                    </div>

                   {/* ============ START RIGHT CONTAINER ============ */}

                    <div className='col-3 rightContent'>
                        <h6>Rekomendasi Kelas</h6>

                        {this.renderKelas()} 
                    </div>
                  </div>
                </div>
               
              
                
              
               
              
        )
    }
}

export default HomeUser;