
import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {
  constructor(){
    super()
    this.state = {
      sushis: [],
      startIndex: 0,
      isEaten: false
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(sushiArr => {
      this.setState({sushis: sushiArr})
    })

  }

  handleMore = () => {
     let newIndex = this.state.startIndex + 4

      if (newIndex > this.state.sushis.length){
         newIndex = 0
       }

       this.setState({
        startIndex: newIndex
       })
  }

  eatSushi = (id) => {
    const updatedSushis = this.state.sushis.map(sushiObj => {
      if (sushiObj.id === id) {
        return {
          ...sushiObj,
          isEaten: true
        }
      } else {
        return sushiObj
      }
    })

    this.setState({
      sushis: updatedSushis
    })


  }


  render() {
    const {sushis, startIndex} = this.state
    const slicedSushi = sushis.slice(startIndex, startIndex + 4)
    const eatenSushis = sushis.filter(sushi => sushi.isEaten)

    return (
      <div className="app">
        <SushiContainer sushis={slicedSushi} handleMore={this.handleMore} eatSushi={this.eatSushi}/>
        <Table eatenSushi={eatenSushis} />
      </div>
    );
  }
}

export default App;
