import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <header className="jumbotron my-4">
            <h1 className="display-3">A Warm Welcome!</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo
                sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat
                numquam repellat.</p>
            <a href="#" className="btn btn-primary btn-lg">Call to action!</a>
        </header>

        <div className="container">
            <div className="row text-center">
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src="http://placehold.it/500x325" alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Sapiente esse necessitatibus neque.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">Find Out More!</a>
                            </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src="http://placehold.it/500x325" alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">Find Out More!</a>
                            </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src="http://placehold.it/500x325" alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Sapiente esse necessitatibus neque.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">Find Out More!</a>
                            </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src="http://placehold.it/500x325" alt=""/>
                            <div className="card-body">
                                <h4 className="card-title">Card title</h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">Find Out More!</a>
                            </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="card h-100">
                        <img className="card-img-top" src="http://placehold.it/500x325" alt=""/>
                        <div className="card-body">
                            <h4 className="card-title">Card title</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Find Out More!</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
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
