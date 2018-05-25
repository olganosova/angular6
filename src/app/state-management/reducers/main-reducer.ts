import {ActionReducer, Action} from "@ngrx/store";
import {State, intitialState, OPEN_DIALOG, SAVE_DIALOG, LOAD_LOCAL_STORAGE} from "../state/main-state";
import { loadState, saveState }  from  "../localStorage";



export const mainStoreReducer: ActionReducer<State> =
  (state = intitialState, action: Action) => {

    switch (action.type) {
      case OPEN_DIALOG: {
        console.log('Dialog was opened!');
        return { ...state, counter: state.counter + 1
        }
      }
      case SAVE_DIALOG: {
        console.log('Form was saved!');
        return { ...state,  courseForm: action['data'] }
      }
      case LOAD_LOCAL_STORAGE: {
        let savedState = loadState();
        if(savedState){
          state = savedState;
          return savedState;
        }
        else{
          return state;
        }
      }

      default: {
        return state;
      }
    }
  };
