import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  title: "",
  content: "",
  showToolBar: false,
  showArticleIndex:false,
  readList:fromJS([]),
  showReadList: false,
  currentArticle: 0,
});

const changeDetail = (state, action) => {
  console.log('hit')
  console.log(action)
  return state.merge({
    currentArticle: action.data.idx,
    content: action.data.content.content,
    title:action.data.content.title,
  });
};

const reset = (state) =>{
  return state.merge(defaultState)
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.RESET_STORE:
      return reset(state)
    case constants.CHANGE_DETAIL:
      return changeDetail(state, action);
    case constants.SHOW_TOOL_BAR:
      return state.set("showToolBar",action.data.show)
    case constants.SHOW_READ_LIST:
      return state.set("showReadList",action.data.show)
    case constants.SHOW_ARTICLE_IDX:
      return state.set("showArticleIndex",action.data.show)
    case constants.GET_READ_LIST:
      return state.merge({
        readList:fromJS(action.data.readList),
      })
    default:
      return state;
  }
};