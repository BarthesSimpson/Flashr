//REACT
import React from 'react'
import {
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Text,
  StyleSheet
} from 'react-native'
const t = require('tcomb-form-native')
import { Constants } from 'expo'

//REDUX
import { connect } from 'react-redux'
import { getDeckLengths } from '../../ducks/decks'

//STYLING
import {
  eggyolk,
  firebrick,
  base,
  accent1,
  accent2,
  darklime
} from '../../common/constants/colors.js'

var styles = StyleSheet.create({
  title: {
    fontSize: 24
  },
  input: {
    marginTop: 16
  },
  container: {
    backgroundColor: base,
    flex: 1
  },
  deckDescription: {
    fontSize: 16,
    color: eggyolk,
    textAlign: 'center',
    marginTop: 10
  },
  buttons: {
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: firebrick,
    alignSelf: 'stretch',
    padding: 10,
    marginBottom: 1
  },
  liteButton: {
    backgroundColor: accent1
  },
  buttonText: {
    color: eggyolk,
    fontSize: 18,
    textAlign: 'center'
  },
  liteButtonText: {
    color: darklime
  }
})

//PARTIALS
const Form = t.form.Form

const newDeckModel = t.struct({
  name: t.String,
  description: t.String
})
//RENDER
class Deck extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Add a deck </Text>
        <KeyboardAvoidingView>
          <Form ref="form" type={newDeckModel} />
          {/* <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <TextInput style={styles.input} /> */}
        </KeyboardAvoidingView>
      </View>
    )
  }
}

export default Deck