import React from 'react';
import { Note, Delete, Archive } from "@material-ui/icons";
const Sidebar = ({ pageset }) => {

    return (
        <div className="sidebar">
            <div className="sidebar-elem" onClick={() => pageset('home')}>
                <Note />
                <span>Notes</span>
            </div>
            <div className="sidebar-elem" onClick={() => pageset('archive')}>
                <Archive />
                <span>Archived</span>
            </div>
            <div className="sidebar-elem" onClick={() => pageset('delete')}>
                <Delete />
                <span>Deleted</span>
            </div>
        </div>
    );
}

export default Sidebar;
