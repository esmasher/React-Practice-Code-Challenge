
import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props)
  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map(sushiObj => {
          return <Sushi sushi={sushiObj} key={sushiObj.id} eatSushi={props.eatSushi}/>
        })
      }
        <MoreButton handleMore={props.handleMore}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
