import * as React from 'react'
import { Answer } from './Models'
import { View } from 'native-base'
import AddAnswerForm from './AddAnswerForm'
import AnswersList from './AnswersList'
import socket from '../../services/socket'

export interface IStreamState {
	answers: Answer[],
}

const initialState: IStreamState = {
	answers: []
}

export default class Stream extends React.Component<{}, IStreamState> {

	constructor(props: any) {
		super(props)
		this.reset = this.reset.bind(this)
	}

	componentWillMount() {
		this.setState(initialState)

		socket.on('connect', (_: any) => {
			this.onUserJoin("Dummy user")
		})

		socket.on('new-answer', (answer: Answer) => {
			this.onMessageReceived(answer)
		})
	}

	onMessageReceived(answer: Answer) {
		this.setState({
			...this.state,
			answers: [
				answer,
				...this.state.answers
			]
		})
	}

	onUserJoin(user: string) {
		socket.emit('join', user)
	}

	reset() {
		this.setState({...this.state, answers: []})
	}

	render() {
		return (
			<View>
				<AddAnswerForm />
				<AnswersList answers={this.state.answers} reset={this.reset} />
			</View>
		)
	}
}