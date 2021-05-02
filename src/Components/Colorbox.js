import React from 'react';
import { colorList } from './Colors'
export default function Colorbox({ setnotecolor, display, setDisplay }) {
    return (
        <div
            className="colorChooser"
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
                            onClick={() => setnotecolor(color)}
                        ></div>
                    )
                })
            }
        </div>
    );
}