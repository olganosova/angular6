//ACTIONS
export const OPEN_DIALOG:string = "OPEN_DIALOG";
export const SAVE_DIALOG:string = "SAVE_DIALOG";


//STATE
export interface State {
  counter: number;
  courseForm: any;
};

export const intitialState: State = {
  counter: 1,
  courseForm: null
};
