import React, { useEffect, useState } from "react";
import s from './Main.module.css';
import Rectangle1 from '../../assets/Rectangle1.png';
import Rectangle2 from '../../assets/Rectangle2.png';
import Rectangle3 from '../../assets/Rectangle3.png';
import Rectangle4 from '../../assets/Rectangle4.png';
import Rectangle5 from '../../assets/Rectangle5.png';
import Rectangle6 from '../../assets/Rectangle6.png';
import Item from "./Item/Item";

const Main = ({setActive}) => {
    const [imgArr, setImgArr] = useState([])
    const images = 'https://boiling-refuge-66454.herokuapp.com/images';

  useEffect(() => {
    function getImages(method, url, body = null){
        return fetch(url).then(response => {
            const data = response.json()
            
            return data
        })
    }
    getImages('GET', images)
    .then(data => setImgArr([...data]) )
    .catch(err => console.log(err))
  }, [])    

    return(
        <main>
            <div className={s.row}>
                {imgArr.map(img => {
                    return(
                        <Item setActive={setActive} key={img.id} img={img.url}/>
                    )
                })}
            </div>
        </main>
    )
};

export default Main;