/**
 * Practice Scene
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles } from '@theme/';
import { DefaultSongs } from '@constants/';
import Sound from 'react-native-sound';

// Components
import { Text } from '@ui/';

Sound.setCategory('Playback');
const english = new Sound(require('./english.mp3'), (error) => {
  if (error) {
    Alert(JSON.stringify(error));
  }
});

const chinese = new Sound(require('./chinese.mp3'), (error) => {
  if (error) {
    Alert(JSON.stringify(error));
  }
});

const playSong = (path) => {
  const song = path === 'english' ? english : chinese;
  song.play();
};

/* Component ==================================================================== */
const Record = ({ songArray }) => {
  const song = songArray[0];
  return (
    <View style={[AppStyles.container, AppStyles.containerCentered]}>
      <Text h1>Record!</Text>
      <Button
        onPress={() => playSong(song.path)}
        key={song.language}
        color="#20aa25"
        title={`${song.name} (${song.language})`}
      />
      {song.body.map((line, index) => {
        const currentLine = `line-${index}`;
        return (<Text key={currentLine}>{line.toString()}</Text>);
      })}
      <Button
        onPress={() => Actions.feedback()}
        key="record"
        color="#bb2520"
        title="Start recording..."
      />
    </View>
  );
};

Record.propTypes = {
  songArray: PropTypes.arrayOf(PropTypes.shape({
    language: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))).isRequired,
  })),
};
Record.defaultProps = {
  songArray: DefaultSongs,
};
Record.componentName = 'Record';

/* Export Component ==================================================================== */
export default Record;
