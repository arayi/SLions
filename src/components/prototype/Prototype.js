/**
 * Prototype Scene
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';

// Consts and Libs
import { AppStyles } from '@theme/';
import { DefaultSongs } from '@constants/';
import Sound from 'react-native-sound';

// Components
import { Text } from '@ui/';

Sound.setCategory('Playback');
const english = new Sound(require('./english.mp3'), (error) => {
  if (error) {
    alert(JSON.stringify(error));
  }
});

const chinese = new Sound(require('./chinese.mp3'), (error) => {
  if (error) {
    alert(JSON.stringify(error));
  }
})

const playSong = (path) => {
  const song = path === 'english' ? english : chinese
  song.play();
};

/* Component ==================================================================== */
const Prototype = ({ text, songArray }) => {
  const songs = [...songArray];
  return (
    <View style={[AppStyles.container, AppStyles.containerCentered]}>
      <Text h1>{text}</Text>
      {songs.map(song => (
        <Button
          onPress={() => playSong(song.path)}
          key={song.language}
          color="#20aa25"
          title={`${song.name} (${song.language})`}
        />
        ))
      }
    </View>
  );
};

Prototype.propTypes = {
  text: PropTypes.string,
  songArray: PropTypes.arrayOf(PropTypes.shape({
    language: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  })),
};
Prototype.defaultProps = {
  text: 'Songs to Sing',
  songArray: DefaultSongs,
};
Prototype.componentName = 'Prototype';

/* Export Component ==================================================================== */
export default Prototype;
