import React from 'react'
import Loader from 'react-loader-spinner'

export default function LoadingPage () {
    return(
        <div style={{display:'flex',flexDirection:'column', justifyContent:'center', height:'400px', textAlign:'center'}}>
            <Loader
             type="BallTriangle"
             color="#00BFFF"
             height="100"
             width="100"
          />
        </div>
    )
}