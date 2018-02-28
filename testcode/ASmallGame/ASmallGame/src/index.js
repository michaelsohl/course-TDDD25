import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image
} from 'react-native'
import StartButton from './startButton'

export default class Appi extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.absoluteContainer} source={require('../media/images/space.jpg')} />
        <View style={styles.background}>
          <StartButton />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  absoluteContainer: {
    flex: 1,
    position: 'absolute',
    top: -16,
    bottom: 0,
    left: 0,
    right: 0
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  }
})
