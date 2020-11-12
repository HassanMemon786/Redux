import React, { Component } from 'react'
import { connect } from "react-redux";
import { set_data } from "../../store/action";

class Home extends Component {
    render() {
        let user = {name: "farhat", email: "farhat@gmail.com"}
        console.log("Users==>", this.props.users)
        return (
            <div>
                <h1>Home</h1>
                <button onClick={ () => this.props.set_data(user)}>Set Data</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    set_data: (data) => dispatch(set_data(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
