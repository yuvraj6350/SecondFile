import React from 'react'

function OrderInput({className ,placeholder ,onInput}) {
  return (
    <input className={className} placeholder={placeholder} onInput={onInput}></input>
  )
}

export default OrderInput