import logo from './logo.svg';
// import './App.css';
import './board_ui/integrated.css'
import 'bootstrap/dist/css/bootstrap.css'
import Main from './Main/main';
import Nav from './Main/nav';
import DeView from './Main/departmentView'

function App() {
  return (
    <div className="container">
        <div className="board_nav">
        <Main />
        <Nav />
        <DeView />
        </div>

        <h1>test</h1>
        <ul className="list-group">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
    </div>
  );
}

export default App;
