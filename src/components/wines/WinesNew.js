import React from 'react'
import { createWine } from '../../lib/api'

class WinesNew extends React.Component {
  state = {
    formData: {
      name: '',
      origin: '',
      image: '',
      price: '',
      abv: '',
      grape: ''
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()

    try {
      const res = await createWine(this.state.formData)
      console.log(res)
    } catch (err) {
      console.log(err.response.data)
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter box">
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Name"
                    name="name"
                    onChange={this.handleChange}
                    value={this.state.formData.name}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Origin</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Origin"
                    name="origin"
                    onChange={this.handleChange}
                    value={this.state.formData.origin}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Image</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Image URL"
                    name="image"
                    onChange={this.handleChange}
                    value={this.state.formData.image}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Price</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Price"
                    name="price"
                    onChange={this.handleChange}
                    value={this.state.formData.price}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Abv</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="ABV"
                    name="abv"
                    onChange={this.handleChange}
                    value={this.state.formData.abv}
                  />
                </div>
              </div>
              <div className="grape">
                <label className="label">Grape</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Grape"
                    name="grape"
                    onChange={this.handleChange}
                    value={this.state.formData.grape}
                  />
                </div>
              </div>
              <div className="field">
                <button type="submit" className="button is-fullwidth is-light">Make my Wine</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default WinesNew