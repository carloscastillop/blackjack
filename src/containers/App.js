import React from 'react';
import Style from './App.module.scss';
import '../../node_modules/animate.css/animate.min.css';
import '../styles/cards.scss';


function App() {
    return (
        <div className={Style.App}>
            <div className={Style.container}>
                <h1
                    className={`animate__animated animate__bounce`}
                >
                    <i className="fab fa-bitcoin"></i> Blackjack
                </h1>

                <div className={`playingCards`}>
                    <div class={`card back`}>*</div>
                    <div class="card rank-10 diams">
                        <div class="rank">10</div>
                        <div class="suit">&diams;</div>
                    </div>
                    <div className="card rank-9 hearts">
                        <div className="rank">9</div>
                        <div className="suit">&hearts;</div>
                    </div>
                    <div className="card rank-8 spades">
                        <div className="rank">8</div>
                        <div className="suit">&spades;</div>
                    </div>
                    <div className="card rank-7 clubs">
                        <div className="rank">7</div>
                        <div className="suit">&clubs;</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
