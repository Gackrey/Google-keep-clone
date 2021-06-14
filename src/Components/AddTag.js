import React, { useState } from 'react';
import { useData } from '../Context/DataContext'
const AddTag = () => {
    const { dispatch } = useData();
    const [newTag, setTag] = useState('')
    function AddNewTag() {
        setTag('')
        dispatch({ type: "ADD_NEW_TAG", payload: newTag })
    }
    return (
        <div className="tagentrybox">
            <input
                className="taginput"
                value={newTag}
                type="text"
                placeholder="Enter tag"
                onChange={(e) => { setTag(e.target.value); }}
            />
            <button className="btn-circle" onClick={AddNewTag}>+</button>
        </div>
    );
}

export default AddTag;
