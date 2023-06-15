import React from 'react'

function OrderInput({className ,placeholder ,onInput ,value,onChange ,type ,maxLength}) {
  return (
    <input className={className} placeholder={placeholder} onInput={onInput} value={value} onChange={onChange} type={type} maxLength={maxLength}></input>
  )
}

export default OrderInput