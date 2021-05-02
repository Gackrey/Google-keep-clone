import React, { useState, useRef, useEffect } from 'react';
import { ColorLensOutlined, Send } from "@material-ui/icons";
import { useData } from '../Context/DataContext'
import { colorList } from './Colors'
import Colorbox from './Colorbox'
import { v4 as uuid } from 'uuid'
const AddNote = () => {
    const Item_pinned =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDRhMiAyIDAgMCAwLTItMkg5Yy0xLjEgMC0yIC45LTIgMnY3bC0yIDN2Mmg2djVsMSAxIDEtMXYtNWg2di0ybC0yLTNWNHoiLz4KPC9zdmc+Cg==";
    const Item_not_pinned =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg==";

    const [pinnedstate, setpinnedstate] = useState(false);
    const [notecolor, setnotecolor] = useState(colorList[0]);
    const [heading, setHeading] = useState('');
    const [body, setBody] = useState('');
    const { NotesTag, dispatch } = useData();
    const [tags, setTags] = useState(NotesTag[0]);
    const [colorDisplaystate, setcolorDisplaystate] = useState("none");
    let textAreaRef = useRef(null);
    useEffect(() => {
        if (textAreaRef) {
            textAreaRef.style.height = "25px";
            textAreaRef.style.height = textAreaRef.scrollHeight + "px";
        }
    }, [body]);
    function Pinnedfun() {
        if (pinnedstate) setpinnedstate(false);
        else setpinnedstate(true);
    }
    function Addtolist() {
        const newNote = {
            id: uuid(),
            heading: heading,
            body: body,
            tags: tags,
            bgcolor: notecolor,
            pinned: pinnedstate
        }
        if (heading !== '' || body !== '') {
            dispatch({ type: 'ADD_NOTE', payload: newNote })
            setHeading('');
            setBody('');
            setnotecolor(colorList[0])
            setTags(NotesTag[0])
            setpinnedstate(false)
        }
    }
    return (
        <div>
            <div className="AddNote" style={{ backgroundColor: notecolor }}>
                <input
                    style={{ backgroundColor: notecolor }}
                    type="text"
                    className="heading"
                    autoFocus
                    placeholder="Title"
                    value={heading}
                    onChange={(e) => setHeading(e.target.value)}
                />
                <img
                    className="pin"
                    src={pinnedstate ? Item_pinned : Item_not_pinned}
                    alt=""
                    onClick={Pinnedfun} />
                <textarea
                    style={{ backgroundColor: notecolor }}
                    type="text"
                    className="body"
                    placeholder="Take a note...."
                    value={body}
                    ref={ref => textAreaRef = ref}
                    onChange={(e) => setBody(e.target.value)}
                />
                <div className="addNoteFooter">
                    <div className="colorDiv">
                        <label htmlFor="choose">Tags: </label>
                        <select
                            style={{ backgroundColor: notecolor }}
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
                        <ColorLensOutlined
                            style={{ position: "relative" }}
                            onMouseEnter={() => setcolorDisplaystate("flex")}
                            onMouseLeave={() => setcolorDisplaystate("none")}
                        />
                    </div>
                    <Colorbox
                        setnotecolor={setnotecolor}
                        display={colorDisplaystate}
                        setDisplay={setcolorDisplaystate}
                    />
                    <Send className="send" onClick={Addtolist} />
                </div>
            </div>
        </div>
    );
}

export default AddNote;
