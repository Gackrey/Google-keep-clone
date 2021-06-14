export function reducerFunc(state, action) {
    switch (action.type) {
        case 'ADD_NOTE': return { ...state, Mainlist: state.Mainlist.concat(action.payload) }
        case 'EDIT_NOTE':
            return {
                ...state,
                Mainlist: state.Mainlist.map((item) =>
                    item.id === action.payload.id ?
                        {
                            ...item,
                            heading: action.payload.heading,
                            body: action.payload.body,
                            tags: action.payload.tags,
                        }
                        : item
                )
            }
        case 'EDIT_NOTE_ARCHIVE':
            return {
                ...state,
                Archivelist: state.Archivelist.map((item) =>
                    item.id === action.payload.id ?
                        {
                            ...item,
                            heading: action.payload.heading,
                            body: action.payload.body,
                            tags: action.payload.tags,
                        }
                        : item
                )
            }
        case 'EDIT_NOTE_DELETE':
            return {
                ...state,
                Deletelist: state.Deletelist.map((item) =>
                    item.id === action.payload.id ?
                        {
                            ...item,
                            heading: action.payload.heading,
                            body: action.payload.body,
                            tags: action.payload.tags,
                        }
                        : item
                )
            }
        case 'REMOVE_NOTE': return {
            ...state,
            Mainlist: state.Mainlist.filter(item => item.id !== action.payload.id),
            Deletelist: state.Deletelist.concat(action.payload)
        }
        case 'REMOVE_NOTE_FROM_ARCHIVE': return {
            ...state,
            Archivelist: state.Archivelist.filter(item => item.id !== action.payload.id),
            Deletelist: state.Deletelist.concat(action.payload)
        }
        case 'RECOVER_NOTE': return {
            ...state,
            Mainlist: state.Mainlist.concat(action.payload),
            Deletelist: state.Deletelist.filter(item => item.id !== action.payload.id)
        }
        case 'DELETE_FOREVER': return {
            ...state,
            Deletelist: state.Deletelist.filter(item => item.id !== action.payload.id)
        }
        case 'ARCHIVE_NOTE': return {
            ...state,
            Mainlist: state.Mainlist.filter(item => item.id !== action.payload.id),
            Archivelist: state.Archivelist.concat(action.payload)
        }
        case 'ARCHIVE_NOTE_FROM_DELETE': return {
            ...state,
            Deletelist: state.Deletelist.filter(item => item.id !== action.payload.id),
            Archivelist: state.Archivelist.concat(action.payload)
        }
        case 'UNARCHIVE_NOTE': return {
            ...state,
            Mainlist: state.Mainlist.concat(action.payload),
            Archivelist: state.Archivelist.filter(item => item.id !== action.payload.id),
        }
        case 'TOGGLE_PIN_NOTE': return {
            ...state,
            Mainlist: state.Mainlist.map((item) =>
                item.id === action.payload.id
                    ? { ...item, pinned: !action.payload.pinned }
                    : item
            )
        }
        case 'TOGGLE_PIN_ARCHIVE': return {
            ...state,
            Archivelist: state.Archivelist.map((item) =>
                item.id === action.payload.id
                    ? { ...item, pinned: !action.payload.pinned }
                    : item
            )
        }
        case 'TOGGLE_PIN_DELETE': return {
            ...state,
            Deletelist: state.Deletelist.map((item) =>
                item.id === action.payload.id
                    ? { ...item, pinned: !action.payload.pinned }
                    : item
            )
        }
        case 'CHANGE_NOTE_COLOR': return {
            ...state,
            Mainlist: state.Mainlist.map((item) =>
                item.id === action.payload.id
                    ? { ...item, bgcolor: action.payload.color }
                    : item
            )
        }
        case 'CHANGE_ARCHIVE_COLOR': return {
            ...state,
            Archivelist: state.Archivelist.map((item) =>
                item.id === action.payload.id
                    ? { ...item, bgcolor: action.payload.color }
                    : item
            )
        }
        case 'CHANGE_DELETE_COLOR': return {
            ...state,
            Deletelist: state.Deletelist.map((item) =>
                item.id === action.payload.id
                    ? { ...item, bgcolor: action.payload.color }
                    : item
            )
        }
        case 'ADD_NEW_TAG': return { ...state, NotesTag: state.NotesTag.concat(action.payload) }
    }
}
