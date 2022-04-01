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