import { IBillboard } from '../components/Billboard/Interfaces'

export interface IProfileReducerState {
  id: string
	avatar: string | null
	name: string | null
	users: any[]
}

export interface IProfileReducerAction {
	type: string
	payload: IProfileReducerState
}

interface IUserFavoritesReducerState extends IBillboard {
  profileId: string
}

export interface IFavoritesReducerState {
  list: IUserFavoritesReducerState[]
}

export interface IFavoritesReducerAction {
  type: string
  payload: IUserFavoritesReducerState
}