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

        const src = this.props.soundtrack;

        return (
            <div className={styles.wrapper}>
                <audio ref={(audio) => { this.audio = audio }}
                       src={src}/>

                {this.state.isPlay === false ?
                    <input type="button"
                           onClick={this.handlePlay.bind(this)}
                           className={styles.playBtn}/>
                    :
                    <input type="button"
                           onClick={this.handleStop.bind(this)}
                           className={styles.pauseBtn}/>
                }
            </div>
        )
    }
}

export default Player;