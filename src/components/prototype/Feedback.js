/**
 * Practice Scene
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
const Feedback = ({ songArray }) => {
  const song = songArray[0];
  return (
    <View style={[AppStyles.container, AppStyles.containerCentered]}>
      <Text h1>Feedback!</Text>
      {song.body.map((line, index) => {
        const currentLine = `line-${index}`;
        return (<Text key={currentLine}>{line.toString()}</Text>);
      })}
      <Button
        onPress={() => Actions.prototype()}
        key="Feedback"
        color="#2025bb"
        title="Go back to song list"
      />
    </View>
  );
};

Feedback.propTypes = {
  songArray: PropTypes.arrayOf(PropTypes.shape({
    language: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    body: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))).isRequired,
  })),
};
Feedback.defaultProps = {
  songArray: DefaultSongs,
};
Feedback.componentName = 'Feedback';

/* Export Component ==================================================================== */
export default Feedback;
