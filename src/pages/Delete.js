import React, { useState } from 'react';
import { useData } from '../Context/DataContext'
import DeleteNote from '../Components/DeleteNote'
import Editnotes from '../Components/Editnotes'
const Delete = () => {
    const { Deletelist } = useData();
    const Pinned = Deletelist.filter(item => item.pinned === true);
    const countPinned = Pinned.length;
    const Unpinned = Deletelist.filter(item => item.pinned === false);
    const countUnpinned = Unpinned.length;
    const [displayState, setDisplay] = useState("none");
    const [updateItem, setupdateItem] = useState('');
    return (
        Deletelist.length > 0 ?
            <div className="ShowNotes">
                {countPinned > 0 ? <p className="noteHeading">Pinned</p> : ""}
                <div className="NoteDisplay">
                    {
                        countPinned > 0 ?
                            Pinned.map(note => {
                                return (
                                    <>
                                        <DeleteNote
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
                                        <DeleteNote
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
                    type='DELETE'
                />
            </div> :
            <h1 style={{textAlign:"center"}}>No deleted notes found</h1>
    );
}

export default Delete;
