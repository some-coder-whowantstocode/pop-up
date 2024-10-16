import React, { createContext, useContext, useState } from 'react';
import styles from './popup.module.css';
import { Popupprops } from './type';

const PopupContext = createContext();

export const PopupProvider: React.FC<Popupprops> = ({children}) => {
    const [data, setData] = useState([]);

    const pushPopup = (message: string, bg: string, col: string, border:string) => {
        try {
            let newData = [...data];
            if(newData.length > 10){
                newData.splice(0,1);
            }
            newData.push({ message,  id: `${Date.now()}`, bg, col, border });
            setData(newData);
        } catch (error) {
            console.log(error);
        }
    };

    const popPopup = (id: string) => {
        try {
            const newData = [...data];
            for (let i = 0; i < newData.length; i++) {
                if (newData[i].id === id) {
                    newData.splice(i, 1);
                    break;
                }
            }
            setData(newData);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <PopupContext.Provider value={{ pushPopup, popPopup }}>
            <div className={styles.popuppage}>
                <div>
                {data.map(({ message, id, bg, col, border }) => (
                    <p
                        style={{
                            color: col ? col : 'white' ,
                            backgroundColor: bg ? bg : 'black',
                            border: `2px solid ${border ? border : 'gray'}`,
                            marginBottom:'0.4rem'
                        }}
                        onClick={() => { popPopup(id); }}
                        key={id}
                    >
                        {message}
                    </p>
                ))}
                </div>
            </div>
            {children}
        </PopupContext.Provider>
    );
};

export const usePopup = () => useContext(PopupContext);
