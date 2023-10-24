import React from 'react'

export const Item = (glasses) => {
    
  return (
    <div className="col-3 mt-3">
        <div className="card">
            <img src={glasses.url} alt="..." />
        </div>
    </div>
  )
}
