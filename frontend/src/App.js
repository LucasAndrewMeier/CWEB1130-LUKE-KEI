
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="box">
        <form action="action_page.php">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>

            <label for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" id="email" required></input>

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" id="psw" required></input>

            <button type="submit" class="registerbtn">Register</button>
        </form>
        </div>
      </header>
    </div>
  );
}

export default App;
