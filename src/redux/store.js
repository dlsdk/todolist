import { createStore } from "redux";
import reducers from "./reducers"


export const store = createStore(reducers); // reducers dan fırlatılan stateleri yakala gibi bir şey demek oluyor