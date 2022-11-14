import React from 'react';
import './CheckItem.css'

export default function CheckItem(props) {
    const {changeCheckState,deleteItem,id,checked,label} = props;

    return (
        <div className = "item">
            <div>
                <input type="checkbox" checked = {checked} className = "checkBox"
                    onChange = {(event) => {
                        changeCheckState(id,event.target.checked);
                    }}
                />
                {label}
            </div>
            <div className="delete" onClick = {() => {deleteItem(id)}}>删除</div>
        </div>
    )
}