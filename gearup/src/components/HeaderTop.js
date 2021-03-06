import React, { Component } from 'react'
import { Button, Header, Modal, Form } from 'semantic-ui-react'

class HeaderTop extends Component {
  state = {
    modalLogInOpen: false,
    modalSignUpOpen: false,
    modalLoginButton: true,
    modalSignUpButton: true,
    showButton: true
  }



  handleLogInOpen = (event) => this.setState({ modalLogInOpen: true })
  handleSignUpOpen = (event) => this.setState({ modalSignUpOpen: true })

  handleLogInClose = (event) => this.setState({ modalLogInOpen: false })
  handleSignUpClose = (event) => this.setState({ modalSignUpOpen: false })

  visibleButton = (event) => {
    console.log(this.props.loggedInUser)
    if (this.props.loggedInUser === 'Please Log In or Create an Account') {
      this.setState({ showButton: true })
    }
    else { this.setState({ showButton: false }) }
  }


  render(){
  return (

    <header>
      <div className='main-title'>
        <h1>Gear Up</h1>
        <h2>Denver</h2>
      </div>
      <img className="header-icon" src="https://slack-imgs.com/?c=1&url=https%3A%2F%2Fd30y9cdsu7xlg0.cloudfront.net%2Fpng%2F18197-200.png"/>
      <div className='buttons-and-user'>

        <div className="header-button">
          {this.state.showButton ? <Modal trigger={ <Button onClick={this.handleSignUpOpen} className='signup'> Sign Up </Button>} open={this.state.modalSignUpOpen}
            onClose={this.handleSignUpClose} basic size='small'>
            <Header Icon='add user' content='Sign Up' />
            <Modal.Content>
              <p>
                Enter your email address and new password to create an account.
              </p>
              <Form>
                <Form.Field>
                  <label>Email Address</label>
                  <input id='signup-email' placeholder='Email Address' />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input id='signup-password' type='password' placeholder='Password' />
                </Form.Field>
                <Button onClick={ (event) => { this.props.signUp(event); this.handleSignUpClose(event); this.visibleButton(event) } }>Submit</Button>
            </Form>
            </Modal.Content>
            <Modal.Actions>
            </Modal.Actions>
          </Modal> : <p></p>}


          {this.state.showButton ? <Modal trigger={<Button onClick={this.handleLogInOpen} className='login'>Log In</Button>} open={this.state.modalLogInOpen}
            onClose={this.handleLogInClose} basic size='small'>

            <Header icon='pointing down' content='Log In' />
            <Modal.Content>
              <p>
                Enter Your Email And Password to Log In
                </p>
              <Form>
                <Form.Field>
                  <label>Email Address</label>
                  <input id='login-email' placeholder='Email Address' />
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <input id='login-password' type='password' placeholder='Password' />
                </Form.Field>
                <Button onClick={ (event) => { this.props.logIn(event); this.handleLogInClose(event); this.visibleButton(event) } }>Submit</Button>

              </Form>
            </Modal.Content>
            <Modal.Actions>
            </Modal.Actions>
          </Modal> : <p></p>}
        </div>




        {this.state.showButton ? <p></p> : <Button onClick={(event) => { this.props.logOut(event);  this.visibleButton(event) } } className='logout'>Log Out</Button>}
        {this.state.showButton ? <h3>{this.props.loggedInUser}</h3> : <div><Button className='profile-button' onClick={this.props.showPostGear}>My Profile</Button><h3>{this.props.loggedInUser}</h3></div>}
      </div>

    </header>
    )
  }
}


export default HeaderTop
