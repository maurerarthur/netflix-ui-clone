import { IFavoritesReducerState, IFavoritesReducerAction } from './Interfaces'

export const FavoritesInitialState: IFavoritesReducerState = {
  list: []
}

export function FavoritesReducer(state = FavoritesInitialState, action: IFavoritesReducerAction) {
  switch(action.type) {
    case 'addToList': {
      const doesListIncludesMovie = state.list.find(favorite => favorite.imdbID == action.payload.imdbID)

      if(!doesListIncludesMovie) {
        state = {
          list: state.list.concat({ ...action.payload })
        }
      }

      return state
    }
    case 'removeFromList': {
      const newList = state.list.filter(favorite => favorite.imdbID != action.payload.imdbID)

      state = {
        list: newList
      }

      return state
    }
  }
}