import React from "react";
import styles from "./Sidebar.module.css";
import { BrowserRouter, Routes, Route ,NavLink} from "react-router-dom";

function Sidebar() {
  const array = [
    {
      "id": 1,
      "title": "Batabana Hela Mo Prema",
      "artist": "Humane Sugar",
      "pic": "https://tse1.mm.bing.net/th?id=OIP.Vn5AcmvWiqdMzFZdJVdmxwFZC1&pid=Api&P=0&h=180",
    },
    {
      
        "id": 2,
      "title": "Banjaara",
      "artist": "Mohammed Irfan",
      "pic": "	https://tse4.mm.bing.net/th?id=OIP.vG9S_SbnAvgVLOSn0QjtwQHaEK&pid=Api&P=0&h=180",
    },
    {
      "id": 3,
      "title": "Jagatare Paibuni Emiti Thakur Tie",
      "artist": "Satyajit Pradhan",
      "pic": "https://tse2.mm.bing.net/th?id=OIP.HWxstVbwKaHiPmweqcvaCAHaEK&pid=Api&P=0&h=180",
    },
    {
      "id": 4,
      "title": "Jamuna Jibaku Mate",
      "artist": "Humane Sagar",
      "pic": "	https://tse2.mm.bing.net/th?id=OIP.ROeMnnIc1u3Ff_C9XCjhRwHaHa&pid=Api&P=0&h=180",
    },
    {
      "id": 5,
      "title": "Le Le Baula",
      "artist": "Ruku Suna & Antara Chakraborty",
      "pic": "	https://tse4.mm.bing.net/th?id=OIP.40sXygOEQBAsNFklD9voPAHaEK&pid=Api&P=0&h=180",
    },{
      "id": 6,
      
      "title": "O Mahi O Mahi",
      "artist": "Arjit Singh",
      "pic": "	https://tse1.mm.bing.net/th?id=OIP._38Le4hDyKhUoOQCxA8xEAHaEK&pid=Api&P=0&h=180",
    },{
      "id": 7,
      
      "title": "Humnava Mere",
      "artist": "Jubin Nautiyal",
      "pic": "https://tse3.mm.bing.net/th?id=OIP.00j47Izp2bg2BK3thJ9IOQHaEK&pid=Api&P=0&h=180",
    },{
      "id": 8,
      
      "title": "Khushi Jab Bhi Tere",
      "artist": "Jubin Nautiyal",
      "pic": "https://tse1.mm.bing.net/th?id=OIP._J3OzuK6POq2Mevc7VjvsAHaEK&pid=Api&H=89&W=160",
    },{
      "id": 9,
      
      "title": "Mein Tera Boyfriend",
      "artist": "Arjit Singh",
      "pic": "	https://tse4.mm.bing.net/th?id=OVP.ynIO2k-SWbpWQ8l_dl5WFwHgFo&pid=Api&w=296&h=156&c=7&p=0",
    },{
      "id": 10,
      
      "title": "Is Qadar",
      "artist": "Sachet-Parampara",
      "pic": "https://tse3.mm.bing.net/th?id=OIP.6aqgW9qolVHPAUwvevRmdAHaEK&pid=Api&P=0&h=180",
    },
  ];
  const trending=[
    {
        "id": 1,
        "title": "Ram Siya Ram",
        "artist": "Sachet Tandon",
        "pic": "https://tse1.mm.bing.net/th?id=OIP.1wisinfyfhQPuredc2IBwwHaEK&pid=Api&P=0&h=180",
      },
      {
        
          "id": 2,
        "title": "Feeling Proud of Indian Army",
        "artist": "Sumit Goswami",
        "pic": "https://tse4.mm.bing.net/th?id=OIP.t5rOM1IO5e1eEsRzrq9eKwAAAA&pid=Api&P=0&h=180",
      },
      {
        "id": 3,
        "title": "Jagatare Paibuni Emiti Thakur Tie",
        "artist": "Satyajit Pradhan",
        "pic": "https://tse2.mm.bing.net/th?id=OIP.HWxstVbwKaHiPmweqcvaCAHaEK&pid=Api&P=0&h=180",
      },
      {
        "id": 4,
        "title": "Jamuna Jibaku Mate",
        "artist": "Humane Sagar",
        "pic": "	https://tse2.mm.bing.net/th?id=OIP.ROeMnnIc1u3Ff_C9XCjhRwHaHa&pid=Api&P=0&h=180",
      },
      {
        "id": 5,
        "title": "Le Le Baula",
        "artist": "Ruku Suna & Antara Chakraborty",
        "pic": "	https://tse4.mm.bing.net/th?id=OIP.40sXygOEQBAsNFklD9voPAHaEK&pid=Api&P=0&h=180",
      },{
        "id": 6,
        
        "title": "O Mahi O Mahi",
        "artist": "Arjit Singh",
        "pic": "	https://tse1.mm.bing.net/th?id=OIP._38Le4hDyKhUoOQCxA8xEAHaEK&pid=Api&P=0&h=180",
      },{
        "id": 7,
        
        "title": "Humnava Mere",
        "artist": "Jubin Nautiyal",
        "pic": "https://tse3.mm.bing.net/th?id=OIP.00j47Izp2bg2BK3thJ9IOQHaEK&pid=Api&P=0&h=180",
      },{
        "id": 8,
        
        "title": "Khushi Jab Bhi Tere",
        "artist": "Jubin Nautiyal",
        "pic": "https://tse1.mm.bing.net/th?id=OIP._J3OzuK6POq2Mevc7VjvsAHaEK&pid=Api&H=89&W=160",
      },{
        "id": 9,
        
        "title": "Mein Tera Boyfriend",
        "artist": "Arjit Singh",
        "pic": "	https://tse4.mm.bing.net/th?id=OVP.ynIO2k-SWbpWQ8l_dl5WFwHgFo&pid=Api&w=296&h=156&c=7&p=0",
      },{
        "id": 10,
        
        "title": "Is Qadar",
        "artist": "Sachet-Parampara",
        "pic": "https://tse3.mm.bing.net/th?id=OIP.6aqgW9qolVHPAUwvevRmdAHaEK&pid=Api&P=0&h=180",
      },
  ]
  return (
    <div className={styles.container}>
      <div className={styles.Navbar}>
        <NavLink to={'/Songlist'}>

        <button  className={styles.songList}>
          Song List

        </button>
        </NavLink>
        <NavLink to={'/Playlist'}>

        <button  className={styles.songList}>
          Play List

        </button>
        </NavLink>
        <NavLink to={'/Library'}>

        <button  className={styles.songList}>
          My Library

        </button>
        </NavLink>
        <NavLink to={'/Subscriptions'}>

        <button  className={styles.songList}>
          My Subscriptions

        </button>
        </NavLink>
      </div>
      <div className={styles.recently}>
        <h3 className={styles.heading}>Recently Played Songs</h3>
        <div className={styles.box_container}>
          <NavLink to={`/song${array[0].id}`} className={styles.box}>
            <img src={array[0].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{array[0].title}</h3>
            <h5 className={styles.singer}>Singer:{array[0].artist}</h5>
          </NavLink>
          <NavLink to={`/song${array[1].id}`} className={styles.box}>
            <img src={array[1].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{array[1].title}</h3>
            <h5 className={styles.singer}>Singer:{array[1].artist}</h5>
          </NavLink>
          <NavLink to={`/song${array[2].id}`}  className={styles.box}>
            <img src={array[2].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{array[2].title}</h3>
            <h5 className={styles.singer}>Singer:{array[2].artist}</h5>
          </NavLink>
          <NavLink to={`/song${array[3].id}`}  className={styles.box}>
            <img src={array[3].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{array[3].title}</h3>
            <h5 className={styles.singer}>Singer:{array[3].artist}</h5>
          </NavLink>
          <NavLink to={`/song${array[4].id}`}  className={styles.box}>
            <img src={array[4].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{array[4].title}</h3>
            <h5 className={styles.singer}>Singer:{array[4].artist}</h5>
          </NavLink>
          <NavLink to={`/song${array[4].id}`}  className={styles.box}>
            <img src={array[5].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{array[5].title}</h3>
            <h5 className={styles.singer}>Singer:{array[5].artist}</h5>
          </NavLink>
          <NavLink to={`/song${array[4].id}`}  className={styles.box}>
            <img src={array[6].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{array[6].title}</h3>
            <h5 className={styles.singer}>Singer:{array[6].artist}</h5>
          </NavLink>
          <NavLink to={`/song${array[4].id}`}  className={styles.box}>
            <img src={array[7].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{array[7].title}</h3>
            <h5 className={styles.singer}>Singer:{array[7].artist}</h5>
          </NavLink>
          <NavLink to={`/song${array[4].id}`}  className={styles.box}>
            <img src={array[8].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{array[8].title}</h3>
            <h5 className={styles.singer}>Singer:{array[8].artist}</h5>
          </NavLink>
          <NavLink to={`/song${array[4].id}`}  className={styles.box}>
            <img src={array[9].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{array[9].title}</h3>
            <h5 className={styles.singer}>Singer:{array[9].artist}</h5>
          </NavLink>
        </div>
      </div>
      <div className={styles.trending}>
        <h3 className={styles.heading}>Trending Songs</h3>
        <div className={styles.box_container}>
          <NavLink to={`/trending song${array[0].id}`}  className={styles.box}>
            <img src={trending[0].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{trending[0].title}</h3>
            <h5 className={styles.singer}>Singer:{trending[0].artist}</h5>
          </NavLink>
          <NavLink to={`/trending song${array[1].id}`}  className={styles.box}>
            <img src={trending[1].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{trending[1].title}</h3>
            <h5 className={styles.singer}>Singer:{trending[1].artist}</h5>
          </NavLink>
          <NavLink to={`/trending song${array[2].id}`} className={styles.box}>
            <img src={trending[2].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{trending[2].title}</h3>
            <h5 className={styles.singer}>Singer:{trending[2].artist}</h5>
          </NavLink>
          <NavLink to={`/trending song${array[3].id}`} className={styles.box}>
            <img src={trending[3].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{trending[3].title}</h3>
            <h5 className={styles.singer}>Singer:{trending[3].artist}</h5>
          </NavLink>
          <NavLink to={`/trending song${array[4].id}`} className={styles.box}>
            <img src={trending[4].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{trending[4].title}</h3>
            <h5 className={styles.singer}>Singer:{trending[4].artist}</h5>
          </NavLink>
          <NavLink to={`/trending song${array[4].id}`} className={styles.box}>
            <img src={trending[5].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{trending[5].title}</h3>
            <h5 className={styles.singer}>Singer:{trending[5].artist}</h5>
          </NavLink>
          <NavLink to={`/trending song${array[4].id}`} className={styles.box}>
            <img src={trending[6].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{trending[6].title}</h3>
            <h5 className={styles.singer}>Singer:{trending[6].artist}</h5>
          </NavLink>
          <NavLink to={`/trending song${array[4].id}`} className={styles.box}>
            <img src={trending[7].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{trending[7].title}</h3>
            <h5 className={styles.singer}>Singer:{trending[7].artist}</h5>
          </NavLink>
          <NavLink to={`/trending song${array[4].id}`} className={styles.box}>
            <img src={trending[8].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{trending[8].title}</h3>
            <h5 className={styles.singer}>Singer:{trending[8].artist}</h5>
          </NavLink>
          <NavLink to={`/trending song${array[4].id}`} className={styles.box}>
            <img src={trending[9].pic} alt="pic" className={styles.pic} />
            <h3 className={styles.title}>{trending[9].title}</h3>
            <h5 className={styles.singer}>Singer:{trending[9].artist}</h5>
          </NavLink>
          
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
