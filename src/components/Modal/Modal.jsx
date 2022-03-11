import React from "react";
import s from './Modal.module.css';
import Rectangle6 from '../../assets/Rectangle6.png';

const Modal = ({active, setActive}) => {
    return(
        <div className={active ? s.modal : s.modal_non_active}>
            <div className={s.modal_main}>
            <div className={s.modal_content}>
                <div className={s.col}>
                    <div className={s.image}>
                        <img src={Rectangle6} alt="image"/>
                    </div>
                    <form className={s.form}>
                        <input type="text" placeholder="Ваше имя" />
                        <input type="text" placeholder="Ваш Комментарий" />
                        <button>Оставить комментарий</button>
                    </form>
                </div>
                <div className={s.comments}>
                    <div className={s.comment}>
                    <p className={s.date}>18.12.2019</p>
                    <span>Отличное фото</span>
                </div>
                <div className={s.comment}>
                    <p className={s.date}>18.12.2019</p>
                    <span>Я тут был, очень понравилось</span>
                </div>
                </div>
                </div>
                <div className={s.close} onClick={() => setActive(false)}>
                <span className={s.span}></span>
                </div>  
            </div>
        </div>
    );
}

export default Modal