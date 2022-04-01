import { IProfileReducerState, IProfileReducerAction } from './Interfaces'

export const ProfileInitialState: IProfileReducerState = {
  id: 0,
  avatar: null,
  name: null,
	users: []
}

export function ProfileReducer(state = ProfileInitialState, action: IProfileReducerAction) {
  switch(action.type) {
    case 'addProfile': {
      const newProfile = {
        ...state,
        users: state.users.concat({ ...action.payload, id: Date.now() })
      }
      state = newProfile
      return state
    }
    case 'editProfile': {
      const id: number = action.payload.id
      const users: object[] = state.users.filter(user => user.id != id)
      const newUsers = users.concat({ ...action.payload, id })
      const newState = {
        ...state,
        users: newUsers
      }
      state = newState
      return state
    }
    case 'deleteProfile': {
      const id: number = action.payload.id
      const newUsers: object[] = state.users.filter(user => user.id != id)
      const newState = {
        ...state,
        users: newUsers
      }
      state = newState
      return state
    }
    case 'setProfile': {
      const id: number = action.payload.id
      const user: object[] = state.users.filter(user => user.id == id)[0]
      const newSetProfile = {
        ...state,
        ...user
      }
      state = newSetProfile
      return state
    }
		default: {
			throw new Error('In order to change the state send an action type and a payload')
    }
	}
}