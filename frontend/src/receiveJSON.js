import React, {Component} from 'react';

class User extends Component {
    
    state = { users: [] }


    componentDidMount(){
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState( { users } ));
    }

    render(){
        return (
            <div>
                {this.state.users.map(aUser =>
                    <section className="aUser" key={aUser.id} >
                        <p>{aUser.user_name}</p>
                        <p>{aUser.first_name}</p>
                        <p>{aUser.last_name}</p>
                    </section>    
                )}
            </div>
        )
    }
}

export default User;