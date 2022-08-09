import React from 'react'

function FooterCol({title, stuff}) {
  return (
    <div className=" space-y-4 text-xs text-gray-800">
        <h5 className=" font-bold">{title}</h5>
        <p>{stuff}</p>
        
      </div>
  )
}

export default FooterCol