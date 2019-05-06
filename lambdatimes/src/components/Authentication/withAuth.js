import React from 'react';

const withAuth = NonAuth => Auth => 
    class extends React.Component {
        constructor(props) {
            super(props);

            this.state= {
                isAuth: false
            }
        }
        componentDidMount() {
            localStorage.getItem('user') ? this.setState({
                isAuth: true
            }) : this.setState({
                isAuth: false
            })
        }
        render() {
            return this.state.isAuth ? <Auth /> : <NonAuth />
        }
    }

    export default withAuth;