import { useState } from 'react';
import './SideBar.css';
import addImage from '../../assets/add.png';

const SideBar = (props) => {

    const [isListOpen, setIsListOpen] = useState(false);

    const colorList = [ '#C4DFAA', '#F5F0BB', '#D6EFED', '#FBA1A1', '#DCD6F7', '#FFC7C7' ];

    return (
        <div className='sidebar'>
            
            <img 
                className='sidebar__add-img' 
                 src={addImage} alt="add image" 
                 onClick={()=> setIsListOpen(!isListOpen)} 
            />
            
            <ul className={ `sidebar__colorlist ${isListOpen ? "sidebar__colorlist_active" : "" }` }>
                { isListOpen &&
                    colorList.map( (color, index)=>
                        <li 
                            className='sidebar__colorlist_color'
                            key={index}
                            style={ {backgroundColor: color} }
                            onClick={ ()=> props.addTheme(color) }
                        ></li>
                    )
                }
            </ul>
        
        </div>
    )
}

export default SideBar;