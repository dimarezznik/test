import React from "react";
import s from './Item.module.css';

const Item = ({setActive, img}) => {
    return(
        <div className={s.image} onClick={() => setActive(true)}>
                    <img src={img} alt="Rectangle1" />
                </div>
    )
}

export default Item