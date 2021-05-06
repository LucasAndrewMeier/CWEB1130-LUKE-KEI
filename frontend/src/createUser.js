
import './createUser.css';

function createUser() {
  return (
    <div className="createUser">
        <form action="/add-user" method="POST">
            <input type="text" name="user_name" class="form-control" placeholder="Enter Username" size= "24"></input><br></br>
            <input type="text" name="first_name" class="form-control" placeholder="Enter First Name" size= "24"></input><br></br>
            <input type="text" name="last_name" class="form-control" placeholder="Enter Last Name" size= "24"></input><br></br>
            <input type="text" name="password" class="form-control" placeholder="Enter A Password" size= "24"></input><br></br>
            <input type="submit" class="btn btn-primary" value="submit"></input>
        </form>
    </div>
  );
}

export default createUser;
