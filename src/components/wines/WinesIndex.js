import React from 'react'
import { getAllWines } from '../../lib/api'

import WinesCard from './WinesCard'

class WinesIndex extends React.Component {

  state = {
    wines: []
  }

  async componentDidMount() {
    try {
      const res = await getAllWines()
      this.setState({ wines: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (



      <section>
        <div>

          <section className="hero is-medium is-primary is-bold">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">The Good Wine Shop</h1>
                <h2 className="subtitle">Good Wine | Great Stories</h2>
              </div>
            </div>
          </section>

          <section className='heading-text'>
            <div className="container is-widescreen">
              <div className="notification">
                <h3>Recent Wines</h3>
              </div>
            </div>
          </section>

          <div className="columns is-multiline">
            {this.state.wines.map(wine => (
              <WinesCard key={wine._id} {...wine}/>
            ))}
          </div>

          <footer className="footer">
            <div className="content has-text-centered">
              <p>The Good Wine Shop</p>
            </div>
          </footer>
          
        </div>
      </section>
    )
  }
}

export default WinesIndex