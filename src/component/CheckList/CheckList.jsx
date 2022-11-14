import React,{useState} from 'react';
import CheckItem from '../CheckItem/CheckItem';
import './CheckList.css';

export default function CheckList(props) {
    const {changeCheckState,deleteItem,toDoList} = props;

    return (
        <div className='list'>
            {toDoList.map(item => 
                <CheckItem key = {item.id} id = {item.id} label = {item.label} checked = {item.checked} 
                    changeCheckState = {changeCheckState} deleteItem = {deleteItem}/>
            )}
        </div>
    )
}
