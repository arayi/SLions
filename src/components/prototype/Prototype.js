/**
 * Prototype Scene
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles } from '@theme/';
import { DefaultSongs } from '@constants/';

// Components
import { Text } from '@ui/';

/* Component ==================================================================== */
const Prototype = ({ text, songArray }) => {
  const songs = [...songArray];
  return (
    <View style={[AppStyles.container, AppStyles.containerCentered]}>
      <Text h1>{text}</Text>
      {songs.map(song => (
        <Button
          onPress={() => Actions.practice()}
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
    body: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))).isRequired,
  })),
};
Prototype.defaultProps = {
  text: 'Pick a Song!',
  songArray: DefaultSongs,
};
Prototype.componentName = 'Prototype';

/* Export Component ==================================================================== */
export default Prototype;
