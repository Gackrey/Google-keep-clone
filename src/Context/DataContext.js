import { useContext, createContext, useReducer } from 'react'
import { reducerFunc } from "../Reducer/ReducerFun";
const DataContext = createContext();

export function DataProvider({ children }) {
    const Mainlist = [];
    const Archivelist = [];
    const Deletelist = [];
    const NotesTag = ["Todo Tasks", "Appointments", "Household","Work"];
    const [ state, dispatch ] = useReducer(reducerFunc, {
        Mainlist,
        Archivelist,
        Deletelist,
        NotesTag,
    })
    return (
        <DataContext.Provider value={{
            Mainlist:state.Mainlist,
            Archivelist:state.Archivelist,
            Deletelist:state.Deletelist,
            NotesTag:state.NotesTag,
            dispatch
        }} >
            {children}
        </DataContext.Provider>
    )
}
export function useData() {
    return useContext(DataContext)
}