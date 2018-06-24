import React from 'react';
import * as Icon from 'react-feather';

class Landing extends React.Component {
    render() {
        return (
            <div class="section">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="card">
                                <div class="card-aside">
                                    <button class="card-skill">Italian</button>

                                    <span class="card-difficulty">
                                        Beginner Difficulty
                                    </span>
                                </div>

                                <div class="card-primary">
                                    <a href="#">
                                        <h3 class="card-title">
                                            Prima Lezione (Assimil Italian)
                                        </h3>
                                    </a>

                                    <div class="card-meta">
                                        <div>
                                            <Icon.Archive />
                                            5 cards
                                        </div>

                                        <div>
                                            <Icon.Clock />
                                            10 days ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col">
                            <div class="box">Some Callout Text</div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="box">Some Callout Text</div>
                        </div>

                        <div class="col">
                            <div class="box">Some Callout Text</div>
                        </div>

                        <div class="col">
                            <div class="box">Some Callout Text</div>
                        </div>

                        <div class="col">
                            <div class="box">Some Callout Text</div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <div class="box">Some Callout Text</div>
                        </div>

                        <div class="col">
                            <div class="box">Some Callout Text</div>
                        </div>

                        <div class="col">
                            <div class="box">Some Callout Text</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;
