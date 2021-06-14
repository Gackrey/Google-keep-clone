import React from 'react';
import { useData } from '../Context/DataContext'
import { colorList } from './Colors'
const NoteColorbox = ({ id, display, setDisplay, type }) => {
    const { dispatch } = useData();
    function colorHandler(color) {
        if (type === 'MAIN')
            dispatch({ type: "CHANGE_NOTE_COLOR", payload: { id, color } })
        else if (type === 'ARCHIVE')
            dispatch({ type: "CHANGE_ARCHIVE_COLOR", payload: { id, color } })
        else if (type === 'DELETE')
            dispatch({ type: "CHANGE_DELETE_COLOR", payload: { id, color } })

    }
    return (
        <div
            className="colorChooserNote"
            style={{ display: display }}
            onMouseEnter={() => setDisplay("flex")}
            onMouseLeave={() => setDisplay('none')}
        >
            {
                colorList.map(color => {
                    return (
                        <div
                            key={color}
                            className="colorcircle"
                            style={{ backgroundColor: color }}
                            onClick={() => colorHandler(color)}
                        ></div>
                    )
                })
            }
        </div>
    );
}

export default NoteColorbox;
