import React from 'react'

export default function CheckAll(props) {
  const {checkedAmount,totalAmount,checkAllHandler} = props;

  return (
    <div>
        <input type="checkbox" onChange = {(event) => {checkAllHandler(event.target.checked)}}/>
        <span>已完成{checkedAmount} / 全部{totalAmount}</span>
    </div>
  )
}
