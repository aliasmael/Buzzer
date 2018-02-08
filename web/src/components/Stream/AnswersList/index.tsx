import * as React from 'react'
import * as moment from 'moment'
import { Text, List, ListItem, Right, Body, View, Button, Icon } from 'native-base'
import { Answer } from '../Models'
import { StyleSheet } from 'react-native'

interface IAnswersListProps {
	answers: Answer[],
	reset: () => void
}

export default class AnswersList extends React.Component<IAnswersListProps> {

	render() {
		const { answers } = this.props

		return (
			<View>
				<View style={style.actionBtns}>
					<Text style={{display: 'flex', alignSelf: 'center'}}>Answers</Text>
					<Button transparent primary onPress={this.props.reset}>
            <Icon name='refresh' />
          </Button>
				</View>
				<List>
					{
						answers.map(answer => (
							<ListItem key={answer.id}>
								<Body>
									<Text>{answer.user}</Text>
									<Text note>{answer.answer}</Text>
								</Body>
								<Right>
									<Text note>{moment(answer.time).format("DMMM, YY")}</Text>
									<Text note>{moment(answer.time).format("hh:mm:ss.S")}</Text>
								</Right>
							</ListItem>
						))
					}
				</List>
			</View>
		)
	}
}

const style = StyleSheet.create({
	actionBtns: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between' },
	resetBtn: { marginTop: 10 }
})