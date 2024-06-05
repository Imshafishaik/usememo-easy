import React from 'react'

const Hello = ({val}) => {
    console.log("child rendering")
  return (
    <div>
      {val}
    </div>
  )
}

export default React.memo(Hello)
