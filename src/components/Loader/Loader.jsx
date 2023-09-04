import React from 'react';
import './loader.css'

import { Puff } from  'react-loader-spinner'

const Loader = () => {
  return (
    <div className="loader__container">
        <Puff
        height="80"
        width="80"
        radius={1}
        color="#4db5ff"
        ariaLabel="puff-loading"
        wrapperClass=""
        visible={true}
        />
    </div>
  )
}

export default Loader