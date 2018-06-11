import React, { Component } from 'react'
import { Button, Header, Modal, Form } from 'semantic-ui-react'

class HeaderTop extends Component {
  state = { modalLogInOpen: false,
            modalSignUpOpen: false}

    handleLogInOpen = (event) => this.setState({ modalLogInOpen: true })
    handleSignUpOpen = (event) => this.setState({ modalSignUpOpen: true })

    handleLogInClose = (event) => this.setState({ modalLogInOpen: false })
    handleSignUpClose = (event) => this.setState({ modalSignUpOpen: false })


  render(){
  return (

    <header>
      <Modal trigger={<Button onClick={this.handleSignUpOpen} className='login'>Sign Up</Button>} open={this.state.modalSignUpOpen}
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
            <Button onClick={(event) => {this.props.signUp(event); this.handleSignUpClose(event)}}>Submit</Button>
        </Form>
        </Modal.Content>
        <Modal.Actions>
        </Modal.Actions>
      </Modal>
      <Modal trigger={<Button onClick={this.handleLogInOpen} className='login'>Log In</Button>} open={this.state.modalLogInOpen}
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
              <Button onClick={(event) => {this.props.logIn(event); this.handleLogInClose(event)}}>Submit</Button>
          </Form>
    </Modal.Content>
    <Modal.Actions>
    </Modal.Actions>
  </Modal>
  <Button onClick={this.props.logOut} className='logout'>Log Out</Button>
  <h3>{this.props.loggedInUser}</h3>
      <h1>Denver Gear Up</h1>
    </header>
  )
}
}

export default HeaderTop
