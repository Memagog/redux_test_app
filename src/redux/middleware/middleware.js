import { ADD_ARTICLE } from "../constans/actions-type";


const forbiddenWords = ["spam", "money"];

function forbiddenWordsMiddleware({ dispatch }) {
    return function(next){
      return function(action){
        // do your stuff
        if(action.type === ADD_ARTICLE){
            const foundWord = forbiddenWords.filter(
                word => action.payload.title.includes(word)
                
                )
            if(foundWord.length){
                return dispatch({type: "FOUND_WARNING_WORD"});
            }
        }
        
         
        return next(action);
      }
    }
  }
  export default forbiddenWordsMiddleware;