import React, { Component } from 'react';

const ItemCheckBox = (props) =>  {
    return (
        <div>   
            <label className="font-sans font-size-12 font-weight-normal" htmlFor={'topOption' + props.optionKey}>
                <input  checked={props.isChecked} onChange={(evt)=>props.onSelect(evt,props.option)} className="font-size-18" id={'topOption' + props.optionKey} type="checkbox" />
                {props.option.name}
                &#160;
                <span className="font-color-grey">
                    (+ {props.option.price} £ per head)
                </span>
            </label>
        </div>
    )
}

export default ItemCheckBox;


