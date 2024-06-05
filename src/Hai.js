import React from 'react'

const Hai = ({newVal,setNewVal}) => {
    console.log("Hai comp rendered")
  return (
    <div>
      <button onClick={()=>setNewVal(newVal+1)}>Hai</button>
    </div>
  )
}

export default React.memo(Hai)
