import {Const} from './../../const/Const';
export default function dasboardRoutes(state = {
  dataDasboard: [],
},action) {
  var {dataDasboard} = state;
  switch (action.type) {
    case `${Const.GET_DASBOARD}`:
    break;
    default:
      return state;
  }
}
