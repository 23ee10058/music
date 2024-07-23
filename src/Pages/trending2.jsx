import React, { useState } from "react";
import styles from "./music1.module.css";
import {
  BrowserRouter, Routes, Route,NavLink
} from 'react-router-dom'
import audio from "./Feeling Proud Indian Army(PagalWorld).mp3";
import { FaStepForward } from "react-icons/fa";
import { FaStepBackward } from "react-icons/fa";
import { FaShuffle } from "react-icons/fa6";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { MdOutlinePlaylistAddCheck } from "react-icons/md";
function trending2() {
    const list=["Banjaara",'Batabana hela Mo Prema','Jagatare Paibuni Emiti Thakur Tie','Jamuna Jibaku Mate Heichhi Mana','Le Le Baula','Ram Siya Ram','Proud Of Indian Army','Humnava Mere','Baarish Mein Tum','Zihaal-e-Miskin','Kulfhi Rani choco Bar','Is Qadar','O Mahi O Mahi','Hua Hai Aaj Pehli Bar','Thodi Jagah','Agar Tum Saath Ho','Chhod Diya','Khairiyat','Afghan jalebi','Achha Sila DIya','Dil Tod Ke','Dil Diya Gallan','Jale 2','Tujhe Kitna Chahne Lage']
    const list1=[
        {
            "title":"Banjaara",
            "singer":"Mohammed Irfan",
        }, {
            "title":"Batabana hela Mo Prema",
            "singer":"Humane Sagar",
        },{
            "title":"Jagatare Paibuni Emiti Thakur Tie",
            "singer":"Satyajit Pradhan",
        },{
            "title":"Jamuna Jibaku Mate Heichhi Mana",
            "singer":"Humane Sagar",
        },{
            "title":"Le Le Baula",
            "singer":"Ruku Sona",
        },{
            "title":"Ram Siya Ram",
            "singer":"Sachet & Parampara",
        },{
            "title":"Proud Of Indian Army",
            "singer":"Sumit Goswami",
        },{
            "title":"Humnava Mere",
            "singer":"Jubin Nautiyal",
        },{
            "title":"Baarish Mein Tum",
            "singer":"Neha Kakkar & Rohanpreet Singh",
        },{
            "title":"Zihaal-e-Miskin",
            "singer":"Vishal Mishra",
        },{
            "title":"Kulfhi Rani choco Bar",
            "singer":"Humane Sagar",
        },{
            "title":"Is Qadar",
            "singer":"Jubin Nautiyal",
        },{
            "title":"O Mahi O Mahi",
            "singer":"Arjit Singh",
        },{
            "title":"Hua Hai Aaj Pehli Bar",
            "singer":"Arjit Singh",
        },{
            "title":"Thodi Jagah",
            "singer":"Mohammed Irfan",
        },{
            "title":"Agar Tum Saath Ho",
            "singer":"Arjit Singh",
        },{
            "title":"Chhod Diya",
            "singer":"Arjit Singh",
        },{
            "title":"Khairiyat",
            "singer":"Mohammed Irfan",
        },{
            "title":"Afghan jalebi",
            "singer":"Asrar",
        },{
            "title":"Achha Sila DIya",
            "singer":"Arjit Singh",
        },{
            "title":"Dil Tod Ke",
            "singer":"Jubin Nautiyal",
        },{
            "title":"Dil Diya Gallan",
            "singer":"Arjit Singh",
        },{
            "title":"Jale 2",
            "singer":"Shiva Choudhary",
        },{
            "title":"Tujhe Kitna Chahne Lage",
            "singer":"Arjit Singh",
        },


    ]
  const [show, setshow] = useState(1);
  const onClick = () => {
    if (show == 1) {
      setshow(0);
      console.log(show);
    } else {
      setshow(1);
      console.log(show);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <div>
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.t5rOM1IO5e1eEsRzrq9eKwAAAA&pid=Api&P=0&h=180"
            alt="pic"
            className={styles.pic}
          />
        </div>
        <div className={styles.aud_icon}>
          <NavLink to={'/trending song1'}>

          <FaStepBackward size={30} className={styles.backward} />
          </NavLink>
          <audio src={audio} className={styles.audio}  controls autoPlay ></audio>
          <NavLink to={'/trending song3'}>

          <FaStepForward size={30} className={styles.forward} />
          </NavLink>
          <FaShuffle size={30} className={styles.shuffle} />
          <button className={styles.playbut} onClick={()=>onClick()}>
            {show == 1 ? (
              <MdOutlinePlaylistAdd size={40} className={styles.playlist} />
            ) : (
              <MdOutlinePlaylistAddCheck
                size={40}
                className={styles.playlist}
              />
            )}
          </button>
        </div>
      </div>
      <div className={styles.container1}>
        <div className={styles.head}>

        <h2>Play List</h2>
        </div>
        <div className={styles.song}>
        <ul className={styles.list}>
                <NavLink to={'/song2'}>

                <li id={styles.list}>
                  <p>{list1[0].title}</p>
                  <p id={styles.sing}>{list1[0].singer}</p>
                </li>
                </NavLink>
                <NavLink to={'/song1'}>
                  
                <li id={styles.list}>
                  <p>{list1[1].title}</p>
                  <p id={styles.sing}>{list1[1].singer}</p>
                </li>
                </NavLink>
                <NavLink to={'/song3'}>

                <li id={styles.list}>
                  <p>{list1[2].title}</p>
                  <p id={styles.sing}>{list1[2].singer}</p>
                </li>
                </NavLink>
                <NavLink to={'/song4'}>

                <li id={styles.list}>
                  <p>{list1[3].title}</p>
                  <p id={styles.sing}>{list1[3].singer}</p>
                </li>
                </NavLink>
                <NavLink to={'/song5'}>

                <li id={styles.list}>
                  <p>{list1[4].title}</p>
                  <p id={styles.sing}>{list1[4].singer}</p>
                </li>
                </NavLink>
                <NavLink to={'/trending song1'}>

                <li id={styles.list}>
                  <p>{list1[5].title}</p>
                  <p id={styles.sing}>{list1[5].singer}</p>
                </li>
                </NavLink>
                <NavLink to={'/trending song2'}>

                <li id={styles.list}>
                  <p>{list1[6].title}</p>
                  <p id={styles.sing}>{list1[6].singer}</p>
                </li>
                </NavLink>
                <li id={styles.list}>
                  <p>{list1[7].title}</p>
                  <p id={styles.sing}>{list1[7].singer}</p>
                </li>
                <li id={styles.list}>
                  <p>{list1[8].title}</p>
                  <p id={styles.sing}>{list1[9].singer}</p>
                </li>
                <li id={styles.list}>
                  <p>{list1[10].title}</p>
                  <p id={styles.sing}>{list1[10].singer}</p>
                </li>
                <li id={styles.list}>
                  <p>{list1[11].title}</p>
                  <p id={styles.sing}>{list1[11].singer}</p>
                </li>
                <li id={styles.list}>
                  <p>{list1[12].title}</p>
                  <p id={styles.sing}>{list1[12].singer}</p>
                </li>
                <li id={styles.list}>
                  <p>{list1[13].title}</p>
                  <p id={styles.sing}>{list1[13].singer}</p>
                </li>
                <li id={styles.list}>
                  <p>{list1[14].title}</p>
                  <p id={styles.sing}>{list1[14].singer}</p>
                </li>
                <li id={styles.list}>
                  <p>{list1[15].title}</p>
                  <p id={styles.sing}>{list1[15].singer}</p>
                </li>
                <li id={styles.list}>
                  <p>{list1[16].title}</p>
                  <p id={styles.sing}>{list1[16].singer}</p>
                </li>
                <li id={styles.list}>
                  <p>{list1[17].title}</p>
                  <p id={styles.sing}>{list1[17].singer}</p>
                </li>
                <li id={styles.list}>
                  <p>{list1[18].title}</p>
                  <p id={styles.sing}>{list1[18].singer}</p>
                </li>
                <li id={styles.list}>
                  <p>{list1[19].title}</p>
                  <p id={styles.sing}>{list1[19].singer}</p>
                </li>
                <li id={styles.list}>
                  <p>{list1[20].title}</p>
                  <p id={styles.sing}>{list1[20].singer}</p>
                </li>
                <li id={styles.list}>
                  <p>{list1[21].title}</p>
                  <p id={styles.sing}>{list1[21].singer}</p>
                </li>
                <li id={styles.list}>
                  <p>{list1[22].title}</p>
                  <p id={styles.sing}>{list1[22].singer}</p>
                </li>
                <li id={styles.list}>
                  <p>{list1[23].title}</p>
                  <p id={styles.sing}>{list1[23].singer}</p>
                </li>
            </ul>
        </div>
      </div>
    </div>
  );z
}

export default trending2;