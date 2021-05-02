import React, { useState } from 'react';
import { ColorLensOutlined, DeleteOutline, Archive } from "@material-ui/icons";
import NoteColorbox from './NoteColorbox';
import { useData } from '../Context/DataContext'
const Note = ({ item, setDisplay, setUpdate }) => {
    const Item_pinned =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDRhMiAyIDAgMCAwLTItMkg5Yy0xLjEgMC0yIC45LTIgMnY3bC0yIDN2Mmg2djVsMSAxIDEtMXYtNWg2di0ybC0yLTNWNHoiLz4KPC9zdmc+Cg==";
    const Item_not_pinned =
        "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg==";
    const [colorDisplaystate, setcolorDisplaystate] = useState("none");
    const { dispatch } = useData();
    return (
        <div
            key={item.id}
            className="notes"
            style={{ backgroundColor: item.bgcolor }}
        >
            <div style={{ display: "flex", justifyContent: "space-between" }} >
                <div style={{
                    fontSize: "22px",
                    fontWeight: "bold",
                    width: "100%",
                    backgroundColor: item.bgcolor,
                }}
                    onClick={() => { setDisplay("flex"); setUpdate(item) }}
                >
                    {item.heading}
                </div>
                <img
                    className="pin"
                    src={item.pinned ? Item_pinned : Item_not_pinned}
                    alt=""
                    onClick={() =>
                        dispatch({ type: "TOGGLE_PIN_NOTE", payload: { id: item.id, pinned: item.pinned } })}
                />
            </div>
            <div onClick={() => { setDisplay("flex"); setUpdate(item) }}>
                <span className="tagbox" >{item.tags}</span>
            </div>
            <div style={{ backgroundColor: item.bgcolor }} onClick={() => { setDisplay("flex"); setUpdate(item) }}>
                {item.body}
            </div>
            <div style={{ position: "relative" }}>
                <ColorLensOutlined
                    onMouseEnter={() => setcolorDisplaystate("flex")}
                    onMouseLeave={() => setcolorDisplaystate("none")}
                />
                <NoteColorbox
                    id={item.id}
                    display={colorDisplaystate}
                    setDisplay={setcolorDisplaystate}
                    type='MAIN'
                />
                <Archive
                    style={{ margin: "0 10px", cursor: "pointer" }}
                    onClick={() => dispatch({ type: "ARCHIVE_NOTE", payload: item })}
                />
                <DeleteOutline
                    style={{ margin: "0 10px", cursor: "pointer" }}
                    onClick={() => dispatch({ type: "REMOVE_NOTE", payload: item })}
                />
            </div>
        </div >
    );
}

export default Note;
