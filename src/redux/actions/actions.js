import { ADD_ARTICLE } from "../constans/actions-type";

const  addArticle = (payload)=> {
  return { type: ADD_ARTICLE, payload };
}
export default addArticle;