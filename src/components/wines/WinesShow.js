import React from 'react'
import { getSingleWine } from '../../lib/api'

class WineShow extends React.Component {
  state = {
    wine: null
  }

  async componentDidMount() {
    const wineID = this.props.match.params.id
    try {
      const res = await getSingleWine(wineID)
      console.log(res)
      this.setState({ wine: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { wine } = this.state
    if (!wine) return null
    return (
      <section className="section">
        <div className="container">
          <h2 className="title has-text-centered">{wine.name}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={wine.image} alt={wine.name} />
              </figure>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WineShow