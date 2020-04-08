import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Animation from './Animation';
import { Header } from 'react-navigation-stack';
import { WebView } from 'react-native-webview';

class DrillAnimationPage extends Component {
  render() {
    return (
      <View style={styles.drillAnimationPage}>
        {this.props.animation ? (
          <Animation animation={this.props.animation} />
        ) : this.props.video ? (
          <WebView source={{ uri: 'https://www.youtube.com/embed/oN1bzPCKkGE' }} />
        ) : (
          <Text>No visual content for this drill</Text>
        )}
      </View>
    );
  }
}

const screenDimension = Dimensions.get('window');
const styles = StyleSheet.create({
  drillAnimationPage: {
    flex: 1,
    height: screenDimension.height,
  },
});

export default DrillAnimationPage;
