import React from 'react'
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet
} from 'react-native'

const startButton = () => {
  return (
    <TouchableOpacity>
      <Button label='Starta spel' />
    </TouchableOpacity>
  )
}

const Button = (props) => {
  return (
    <View style={styles.textContainer}>
      <Text> { props.label } </Text>
    </View>
  )
}

export default startButton

const styles = StyleSheet.create({
  textContainer: {
    width: 100,
    backgroundColor: 'rgba(225,225,225, 0.75)',
    borderBottomLeftRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderTopRightRadius: 40
  }
})
