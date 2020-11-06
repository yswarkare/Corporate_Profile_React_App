import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import companyProfileReducer from "./reducers/companyProfileReducer"
import engagementReducer from "./reducers/engagementReducer";

const saveToSessionStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem("Corporate_Profiles", serializedState);
    } catch (error) {
        console.log(error);
    }
}

const loadFromSessionStorage = () => {
    try {
        let serializedState = sessionStorage.getItem("Corporate_Profiles");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.log(error);
        return undefined;
    }
}

const persistedState = loadFromSessionStorage();

const rootReducer = combineReducers({
    profiles: companyProfileReducer,
    engagements: engagementReducer
});

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(()=>{
    return saveToSessionStorage(store.getState());
});

export default store;