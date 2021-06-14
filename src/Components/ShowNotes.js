import React, { useState } from 'react';
import Note from './Note'
import Editnotes from './Editnotes'

const ShowNotes = ({ notelist }) => {
    const sortedNotes = notelist.sort(function (x, y) {
        return y.timestamp - x.timestamp;
    })
    const Pinned = sortedNotes.filter(item => item.pinned === true);
    const countPinned = Pinned.length;
    const Unpinned = sortedNotes.filter(item => item.pinned === false);
    const countUnpinned = Unpinned.length;
    const [displayState, setDisplay] = useState("none");
    const [updateItem, setupdateItem] = useState('');
    return (
        <div className="ShowNotes">
            {countPinned > 0 ? <p className="noteHeading">Pinned</p> : ""}
            <div className="NoteDisplay">
                {
                    countPinned > 0 ?
                        Pinned.map(note => {
                            return (
                                <>
                                    <Note
                                        key={note.id}
                                        item={note}
                                        setDisplay={setDisplay}
                                        setUpdate={setupdateItem}
                                    />
                                </>
                            )
                        })
                        : ""
                }
            </div>
            {countUnpinned > 0 ? <p className="noteHeading">Others</p> : ""}
            <div className="NoteDisplay">
                {
                    countUnpinned > 0 ?
                        Unpinned.map(note => {
                            return (
                                <>
                                    <Note
                                        key={note.id}
                                        item={note}
                                        setDisplay={setDisplay}
                                        setUpdate={setupdateItem}
                                    />
                                </>
                            )
                        })
                        : ""
                }
            </div>
            <Editnotes
                item={updateItem}
                display={displayState}
                setDisplay={setDisplay}
                type='MAIN'
            />
        </div>
    );
}

export default ShowNotes;
