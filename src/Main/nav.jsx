import React, {Component} from 'react';

class Nav extends Component {
    render() {
        return (
            <div className="container">
                <header className="jumbotron my-4">
                    <h1 className="display-3">Project</h1>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo
                        sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat
                        numquam repellat.</p>
                    <a href="#" className="btn btn-primary btn-lg">확인하기</a>
                </header>
            </div>
        );
    }
}

export default Nav;
