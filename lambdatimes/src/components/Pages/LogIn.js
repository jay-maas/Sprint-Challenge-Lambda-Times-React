import React from 'react';

import TopBar from '../TopBar';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }))
    }

    logIn = event => {
        event.preventDefault()
        const usernameInput = document.querySelector('.logInUsername').value
        localStorage.setItem('user', `${usernameInput}`)
        const passwordInput = document.querySelector('.logInPassword').value
        localStorage.setItem('password', `${passwordInput}`)
        document.location.reload();
    }
    render(){
        const H1 = {
            fontSize: '10vh',
            textAlign: 'center',
            padding: '10%',
        }

        return(
            <div>
                <TopBar onClick={this.toggle}/>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Log In to React Lambda Times</ModalHeader>
                    <ModalBody>
                        <form>
                            <h3>Enter your username</h3>
                            <input className="logInUsername" type="text" />
                            <h3>Enter your password</h3>
                            <input className="logInPassword" type="text"/>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.logIn}>Log In</Button>
                    </ModalFooter>
                </Modal>
                <h1 style={H1}> Please Log In </h1>
            </div>
        )
    }
}

export default LogIn;