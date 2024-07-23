import React from 'react'
import styles from './search.module.css'
import { FaPlayCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import {GoogleLogin} from 'react-google-login'
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
function Search() {
    const onSuccess=(response)=>{
        console.log(response)
    }
    const onFailure=()=>{
        console.log("Failed")
    }
    const list=["Banjaara",'Batabana hela Mo Prema','Jagatare Paibuni Emiti Thakur Tie','Jamuna Jibaku Mate Heichhi Mana','Le Le Baula','Ram Siya Ram','Proud Of Indian Army','Humnava Mere','Baarish Mein Tum','Zihaal-e-Miskin','Kulfhi Rani choco Bar','Is Qadar','O Mahi O Mahi','hua Aaj Pehli Bar','Thodi Jagah','Agar Tum Saath Ho','Chhod Diya','Khairiyat','Afghan jalebi','Achha Sila DIya','Dil Tod Ke','Dil Diya Gallan','Jale 2','Tujhe Kitna Chahne Lage']
    const [display,setdisplay]=useState({display:'none'});
    const [dynaList,setdynaList]=useState(list);
    const Input=document.querySelector('input')
    const onChange=(e)=>{
        setdisplay({display:'flex'})
        console.log(e)
       const song=e.target.value;
       const new_list=list.filter((item)=>(
        item.includes(song)
       ))
       console.log(new_list)
       setdynaList(new_list);

    }
    const onClick=(e)=>{
        console.log(e)
        Input.value=e.target.innerText
        console.log(Input.value)
        setdisplay({display:'none'})
        console.log(display)
    }
  return (
    <>
    <div className={styles.container}>
        <div className={styles.icon}>
        <FaPlayCircle size={40} className={styles.play} />
        </div>
        
        <input type="text" placeholder='Search songs,artist' className={styles.input} onChange={(e)=>onChange(e)}/>
        <FaSearch size={30} className={styles.icon}/>
        
        <GoogleLogin
            onSuccess={onSuccess}
            onFailure={onFailure}
            buttonText='Sign in with Google'
            scope='mail'
            
        />
        

    </div>
    <div className={styles.list_container} style={display}>
        <div className={styles.list}>
        {dynaList.map(item=>(
            <li className={styles.item} onClick={(e)=>onClick(e)}>{item}</li>
        ))}

        </div>
    </div>
    </>
  )
}

export default Search;