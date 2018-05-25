//ACTIONS
export const OPEN_DIALOG:string = "OPEN_DIALOG";
export const SAVE_DIALOG:string = "SAVE_DIALOG";
export const LOAD_LOCAL_STORAGE:string = "LOAD_LOCAL_STORAGE";


//STATE
export interface State {
  counter: number;
  courseForm: any;
};

export const intitialState: State = {
  counter: 1,
  courseForm: null
};
