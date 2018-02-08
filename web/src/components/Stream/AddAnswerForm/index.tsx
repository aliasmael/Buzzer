import * as React from 'react'
import { Form, View, Text, Item, Input, Button } from 'native-base'
import { StyleSheet } from 'react-native'
import * as moment from 'moment'
import { Answer } from '../Models'
import socket from '../../../services/socket'

const uuid = require('uuid/v4')


interface IAddAnswerFormState {
	username: string,
	answer: string
}

const initialState: IAddAnswerFormState = {
	username: 'Dummy user',
	answer: ''
}

export default class AddAnswerForm extends React.Component<{}, IAddAnswerFormState> {
	constructor(props: any) {
		super(props)
		this.submitAnswer = this.submitAnswer.bind(this)
	}

	componentWillMount() {
		this.setState(initialState)
	}

	onInputChange(field: string, value: string) {
		let newState = initialState
		switch (field) {
			case 'username':
				newState = {
					...this.state,
					username: value
				}
				break

			case 'answer':
				newState = {
					...this.state,
					answer: value
				}
				break
		}
		this.setState(newState)
	}

	submitAnswer() {
    let newAnswer: Answer = {
      id: uuid(),
      user: this.state.username,
      answer: this.state.answer,
      time: moment().toISOString()
    }

    // Publish to server
    socket.emit('new-answer', newAnswer)

    this.setState({...this.state, answer: ''})
	}
	
	render() {
		return (
			<Form>
				<Item>
					<Input placeholder="Username" onChangeText={(text) => this.onInputChange('username', text)} />
				</Item>
				<Item last>
					<Input placeholder="Your answer" onChangeText={(text) => this.onInputChange('answer', text)} value={this.state.answer} />
				</Item>
				<View style={style.actionBtns}>
					<Button style={style.sendBtn} onPress={this.submitAnswer} success><Text> Send </Text></Button>
				</View>
			</Form>
		)
	}
}

const style = StyleSheet.create({
	actionBtns: { display: 'flex', flexDirection: 'row', justifyContent: 'center' },
	sendBtn: { marginTop: 10 }
})