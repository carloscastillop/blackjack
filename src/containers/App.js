import React from 'react';
import Style from './App.module.scss';
import '../../node_modules/animate.css/animate.min.css';
import '../styles/playing-cards.scss';


function App() {
    return (
        <div className={Style.App}>
            <nav className={`${Style.navbar} ${Style['navbar-light']} ${Style['bg-light']}`}>
                <div className={Style['container']}>
                    <span
                        className={`${Style.h1} ${Style['navbar-brand']} ${Style['mb-0']} animate__animated animate__bounce`}
                    >
                        <i className="fab fa-bitcoin"></i> Blackjack
                    </span>
                </div>
            </nav>
            <div className={`${Style.container} ${Style['py-3']}`}>
                <div className={Style.deck}>
                    <div className={`playingCards faceImages ${Style.cardDeck} ${Style.dealer}`}>
                        <span
                            className={`${Style.badge} ${Style['bg-primary']}`}
                        >
                            Dealer
                        </span>
                        <div className={Style.row}>
                            <div className={Style['col-6']}>
                                <ul className={`hand ${Style.hand}`}>
                                    <li>
                                        <div className={`card back`}>*</div>
                                    </li>
                                    <li>
                                        <div className="card rank-10 diams">
                                            <div className="rank">10</div>
                                            <div className="suit">&diams;</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="card rank-9 hearts">
                                            <div className="rank">9</div>
                                            <div className="suit">&hearts;</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="card rank-8 spades">
                                            <div className="rank">8</div>
                                            <div className="suit">&spades;</div>
                                        </div>
                                    </li>
                                </ul>
                                <span className={`${Style.badge} ${Style['rounded-pill']} ${Style['bg-dark']}`}>
                                    18
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={`${Style.cardDeck}`}>
                        <div className="row">
                            <div className={Style['col-12']}>
                                <div className={`${Style['text-center']}`}>
                                    <h2>
                                        $100
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`playingCards faceImages ${Style.cardDeck} ${Style.player}`}>
                        <span
                            className={`${Style.badge} ${Style['bg-primary']}`}
                        >
                            Player
                        </span>
                        <div className={Style.row}>
                            <div className={Style['col-7']}>
                                <ul className={`hand ${Style.hand}`}>
                                    <li>
                                        <div className={`card back`}>*</div>
                                    </li>
                                    <li>
                                        <div className="card rank-7 clubs">
                                            <div className="rank">7</div>
                                            <div className="suit">&clubs;</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="card rank-j clubs">
                                            <div className="rank">j</div>
                                            <div className="suit">&clubs;</div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="card rank-k clubs">
                                            <div className="rank">k</div>
                                            <div className="suit">&clubs;</div>
                                        </div>
                                    </li>
                                </ul>
                                <span className={`${Style.badge} ${Style['rounded-pill']} ${Style['bg-dark']}`}>
                                    27
                                </span>
                            </div>
                            <div className={`${Style['col-5']} ${Style['pl-3']} ${Style['text-right']}`}>
                                <div className={`${Style['btn-group-vertical']} ${Style['mt-3']}`}>
                                    <button type="button" className={`${Style.btn} ${Style['btn-primary']}`}>
                                        <i className="fas fa-plus-circle"></i> Hit
                                    </button>
                                    <button type="button" className={`${Style.btn} ${Style['btn-secondary']}`}>
                                        <i className="far fa-hand-paper"></i> Stand
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className={Style.footer}>
                <nav className={`${Style.navbar} ${Style['navbar-light']} ${Style['bg-light']}`}>
                    <div className={Style['container']}>
                    <span
                        className={`${Style.h1} ${Style['navbar-brand']} ${Style['mb-0']}`}
                    >
                        <i className="fas fa-wallet"></i> My Wallet
                    </span>
                    </div>
                </nav>
            </footer>
        </div>
    );
}

export default App;
