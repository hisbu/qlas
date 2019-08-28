import React, {Component} from 'react'

class Footer extends Component{
    render(){
        return(
            <section id='sec_footer' className=''>
            <div className='footer_bg '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='footer_title'>Perusahaan</div>
                            <li>Tentang Kami</li>
                            <li>Kesempatan Karir</li>
                        </div>
                        <div className='col-3'>
                            <div className='footer_title'>Produk</div>
                            <li>Kelas Premium</li>
                            <li>Kelas Gratis</li>
                        </div>
                        <div className='col-3'>
                            <div className='footer_title'>Bantuan</div>
                            <li>hubungi Kami</li>
                            <li>Kesempatan Karir</li>
                        </div>
                        <div className='col-3'>Sosmed</div>
                    </div>
                    <center><div className='mt-5'>@2019 PT Indonesia Pintar Bersama. All Rights Reserver.</div></center>
                </div>
            </div>
        </section>
        )
    }
}

export default Footer;