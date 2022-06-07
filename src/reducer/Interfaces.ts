import { IBillboard } from '../components/Billboard/Interfaces'

export interface IProfileReducerState {
  id: number,
	avatar: string | null,
	name: string | null,
	users: any[]
}

export interface IProfileReducerAction {
	type: string,
	payload: IProfileReducerState
}

export interface IFavoritesReducerState {
  list: IBillboard[]
}

export interface IFavoritesReducerAction {
  type: string,
  payload: IBillboard
}