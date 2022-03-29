interface IProfileReducerState {
	avatar: string | null,
	name: string | null,
	users: any[]
}

interface IProfileReducerAction {
	type: string,
	payload: {}
}

export const ProfileInitialState: IProfileReducerState = {
  avatar: null,
  name: null,
	users: []
}

export function ProfileReducer(state = ProfileInitialState, action: IProfileReducerAction) {
  switch(action.type) {
		case 'setProfile':
			const updatedState = { ...state, ...action.payload }
			state = updatedState
			return state
    case 'addProfile':
      const newProfile = {
        ...state,
        users: state.users.concat(action.payload)
      }
      state = newProfile
      return state
		default:
			throw new Error('In order to change the state send an action type and a payload')
	}
}