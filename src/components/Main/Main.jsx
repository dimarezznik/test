import React from "react";
import s from './Main.module.css';
import Rectangle1 from '../../assets/Rectangle1.png';
import Rectangle2 from '../../assets/Rectangle2.png';
import Rectangle3 from '../../assets/Rectangle3.png';
import Rectangle4 from '../../assets/Rectangle4.png';
import Rectangle5 from '../../assets/Rectangle5.png';
import Rectangle6 from '../../assets/Rectangle6.png';

const Main = ({setActive}) => {
    return(
        <main>
            <div className={s.row}>
                <div className={s.image} onClick={() => setActive(true)}>
                    <img src={Rectangle1} alt="Rectangle1" />
                </div>
                <div className={s.image} onClick={() => setActive(true)}>
                    <img src={Rectangle2} alt="Rectangle2" />
                </div>
                <div className={s.image} onClick={() => setActive(true)}>
                    <img src={Rectangle3} alt="Rectangle3" />
                </div>
            </div>
            <div className={s.row}>
                <div className={s.image} onClick={() => setActive(true)}>
                    <img src={Rectangle4} alt="Rectangle4" />
                </div>
                <div className={s.image} onClick={() => setActive(true)}>
                    <img src={Rectangle5} alt="Rectangle5" />
                </div>
                <div className={s.image} onClick={() => setActive(true)}>
                    <img src={Rectangle6} alt="Rectangle6" />
                </div>
            </div>
        </main>
    )
};

export default Main;