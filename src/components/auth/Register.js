import React from 'react'
import { registerUser } from '../../lib/api'

class Register extends React.Component {
  state = {
    formData: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = event => {
    const formData = { ...this.state.formData, [event.target.name]: event.target.value }
    this.setState({ formData })
  }

  handleSubmit = async event => {
    event.preventDefault()

    try {
      await registerUser(this.state.formData)

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
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Username"
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.formData.username}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Email"
                    name="email"
                    onChange={this.handleChange}
                    value={this.state.formData.email}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    value={this.state.formData.password}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password Confirmation</label>
                <div className="control">
                  <input
                    className="input"
                    placeholder="Password Confirmation"
                    type="password"
                    name="passwordConfirmation"
                    onChange={this.handleChange}
                    value={this.state.formData.passwordConfirmation}
                  />
                </div>
              </div>
              <div className="field">
                <button
                  type="submit"
                  className="button is-fullwidth is-light"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default Register