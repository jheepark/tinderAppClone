import React, {Component} from 'react'
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

export default class FacebookButton extends Component {
  render(){
    return(
      <TouchableHighlight
        style={styles.button}
        onPress={this.props.onPress}>
        <View style={styles.buttonContainer}>
          <FontAwesome name={'facebook-f'} size={20} color={'white'} />
          <Text style={styles.buttonText}>Login with Facebook</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    borderRadius: 40,
    height: 40,
    width: 220,
    backgroundColor: '#3b5998'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    marginLeft: 15,
  }
})
