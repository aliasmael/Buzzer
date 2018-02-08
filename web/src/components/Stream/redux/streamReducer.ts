import { CLEAR_ANSWERS } from './constants'
import { IStreamState } from '../index'

const initialState : IStreamState = {
  answers: []
}

export default function blogReducer (state = initialState, action: any): IStreamState {
  switch (action.type) {
    case CLEAR_ANSWERS:
      return {
        ...state,
        answers: []
      }
    default:
      return state
  }
}