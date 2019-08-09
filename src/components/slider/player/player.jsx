import React, {Component} from 'react';

import styles from './player.module.css';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlay: false
        }
    }

    handlePlay() {
        this.audio.play();
        this.setState({isPlay: true});
    }

    handleStop() {
        this.audio.pause();
        this.setState({isPlay: false});
    }

    render() {
        // const soundTitle = this.props.soundtrackTitle;
        const src = this.props.soundtrack;

        return (
            <React.Fragment>
                <audio ref={ (audio) => { this.audio = audio } }
                       src={ src } />

                {this.state.isPlay === false ?
                    <button className={ styles.audioField }
                            onClick={ this.handlePlay.bind(this) } >
                        <input type="button" className={ `${styles.playBtn} ${styles.icon}` }/>
                        {/*<p className={ styles.soundTitle }>{ soundTitle }</p>*/}
                    </button>
                    :
                    <button className={ styles.audioField }
                            onClick={ this.handleStop.bind(this) } >
                        <input type="button" className={ `${styles.pauseBtn} ${styles.icon}` }/>
                        {/*<p className={ styles.soundTitle }>{ soundTitle }</p>*/}
                    </button>
                }
            </React.Fragment>
        )
    }
}

export default Player;