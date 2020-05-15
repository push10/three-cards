import React from 'react';
import { connect } from 'react-redux';

const SongDetail = (props) => {
    if (props.song !== null) {
        return <div>
            {props.song.title}
        </div>
    } else {
        return  <div></div>
    }

}


const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);