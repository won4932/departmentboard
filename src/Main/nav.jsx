import React, {Component} from 'react';

import Slider from "react-slick";

// 상단메뉴
class Nav extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow:1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1000,
            dotsClass : "slick-dots",
        };
        return (
            <div className="board_nav">
                <Slider {...settings}>
                  <div><header className="jumbotron my-4">
                    <h1 className="display-3">Project</h1>
                      <div className="board_main">
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, ipsam, eligendi, in quo
                        sunt possimus non incidunt odit vero aliquid similique quaerat nam nobis illo aspernatur vitae fugiat
                        numquam repellat.</p>
                      </div>
                    <a href="#" className="btn btn-primary btn-lg">확인하기</a>
                  </header>
                 </div>
                <div className="board_main">
                    <header className="jumbotron my-4">
                        <h1 className="display-3">Project2</h1>
                        <div className="board_main">
                        <p className="lead">Lorem ksdjficovdkfnekfasldjfl sjdkflsdjkfasjkj</p>
                        </div>
                        <a href="#" className="btn btn-primary btn-lg">확인하기</a>
                    </header>
                </div>
            </Slider>
            </div>
        );
    }
}

export default Nav;
