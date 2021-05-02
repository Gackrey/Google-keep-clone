import React, { useEffect, useState } from 'react';
import AddNote from '../Components/AddNote'
import ShowNotes from '../Components/ShowNotes'
import AddTag from '../Components/AddTag'
import { useData } from '../Context/DataContext'
import { borderColorList } from '../Components/BorderColors'
const Home = () => {
    const { Mainlist, NotesTag } = useData();
    const [filterByTag, setFilterByTag] = useState(Mainlist)

    function tagFilterHandler(tags) {
        const newNoteList = Mainlist.filter(item => item.tags === tags)
        setFilterByTag(newNoteList)
    }
    useEffect(() => {
        setFilterByTag(Mainlist)
    }, [Mainlist]);
    return (
        <div>
            <AddNote />
            <div className="filters" >
                <span
                    className="filter-elem"
                    style={{ borderColor: `${borderColorList[Math.floor(Math.random() * 11)]}` }}
                    onClick={() => setFilterByTag(Mainlist)}
                >All</span>
                {
                    NotesTag.map(tag => {
                        return <span
                            key={tag}
                            className="filter-elem"
                            onClick={() => tagFilterHandler(tag)}
                            style={{ borderColor: `${borderColorList[Math.floor(Math.random() * 11)]}` }}
                        >{tag}</span>
                    })
                }
            </div>
            <AddTag />
            <ShowNotes notelist={filterByTag} />
        </div>
    );
}

export default Home;
