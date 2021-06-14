import React, { useState, useEffect, useRef } from 'react';
import { useData } from '../Context/DataContext'
import { Send } from "@material-ui/icons";
const Editnotes = ({ item, display, setDisplay, type }) => {
    const { NotesTag, dispatch } = useData();
    const [heading, setHeading] = useState(item.heading);
    const [body, setBody] = useState(item.body);
    const [tags, setTags] = useState(item.tags);
    let textAreaRef = useRef(null);
    useEffect(() => {
        setHeading(item.heading)
        setBody(item.body)
        setTags(item.tags)
    }, [item])
    useEffect(() => {
        if (textAreaRef) {
            textAreaRef.style.height = "25px";
            textAreaRef.style.height = textAreaRef.scrollHeight + "px";
        }
    }, [body]);
    function updateNote() {
        const edittedNote = {
            id: item.id,
            heading: heading,
            body: body,
            tags: tags,
        }
        if (type === 'MAIN') {
            dispatch({ type: "EDIT_NOTE", payload: edittedNote })
        }
        else if (type === 'ARCHIVE') {
            dispatch({ type: "EDIT_NOTE_ARCHIVE", payload: edittedNote })
        }
        else if (type === 'DELETE') {
            dispatch({ type: "EDIT_NOTE_DELETE", payload: edittedNote })
        }
        setDisplay('none')
    }
    return (
        <div className="editnotes" style={{ display: display }}>
            <div className="inner-edit-box" style={{ backgroundColor: item.bgcolor }}>
                <input
                    style={{ backgroundColor: item.bgcolor }}
                    type="text"
                    className="heading"
                    placeholder="Title"
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                />
                <textarea
                    style={{ backgroundColor: item.bgcolor,maxHeight:"120px" }}
                    type="text"
                    className="body"
                    placeholder="Take a note...."
                    value={body}
                    ref={ref => textAreaRef = ref}
                    onChange={(e) => setBody(e.target.value)}
                />
                <div className="addNoteFooter">
                    <div>
                        <label htmlFor="choose">Tags: </label>
                        <select
                            style={{ backgroundColor: item.bgcolor }}
                            name="choose"
                            className="tags"
                            value={tags}
                            onChange={(e) => { setTags(e.target.value) }}
                        >
                            {
                                NotesTag.map(tag => {
                                    return <option key={tag} value={tag}>{tag}</option>
                                })
                            }
                        </select>
                    </div>
                    <Send className="send" onClick={updateNote} />
                </div>
            </div>
        </div >
    );
}

export default Editnotes;
