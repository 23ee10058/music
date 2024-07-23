import React from "react";
import styles from "./songlist.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
function library() {
  return (
    
    <div className={styles.container}>
      <table class="table" className={styles.item_table}>
        <thead>
          <tr className={styles.row}>
            <th scope="col">Sl.No.</th>
            <th scope="col">Title</th>
            <th scope="col">Singer</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.row1}>
            <th scope="row">1</th>
            <td>Banjaara</td>
            <td>Mohammed Irfan</td>
            <td>5 mins</td>
          </tr>
          <tr className={styles.row1}>
            <th scope="row">2</th>
            <td>Batabana Hela Mo Prema</td>
            <td>Humane Sagar</td>
            <td>5 mins</td>
          </tr>
          <tr className={styles.row1}>
            <th scope="row">3</th>
            <td colspan="1">Jagatare Paibuni Emiti Thakur Tie</td>
            <td>Satyajit Pradhan</td>
            <td>9 mins</td>
          </tr>
          <tr className={styles.row1}>
            <th scope="row">4</th>
            <td colspan="1">Jamuna Jibaku Mate Heichhi Mana</td>
            <td>Humane Sagar & Sital kabi</td>
            <td>4 mins</td>
          </tr>
          <tr className={styles.row1}>
            <th scope="row">5</th>
            <td colspan="1">Le Le Baula</td>
            <td>Ruku Suna</td>
            <td>3 mins</td>
          </tr>
          <tr className={styles.row1}>
            <th scope="row">6</th>
            <td colspan="1">Ram Siya Ram</td>
            <td>Sachet Tandon & Parampara Tandon</td>
            <td>4 mins</td>
          </tr>
          <tr className={styles.row1}>
            <th scope="row">7</th>
            <td colspan="1">Proud Of Indian Army</td>
            <td>Sumit Goswami</td>
            <td>4 mins</td>
          </tr>
          <tr className={styles.row1}>
            <th scope="row">8</th>
            <td colspan="1">Humnava Mere</td>
            <td>Jubin Nautiyal</td>
            <td>5 mins</td>
          </tr>
          <tr className={styles.row1}>
            <th scope="row">8</th>
            <td colspan="1">Baarish Mein Tum</td>
            <td>Neha Kakkar & Rohanpreet Singh</td>
            <td>4 mins</td>
          </tr>
          <tr className={styles.row1}>
            <th scope="row">9</th>
            <td colspan="1">Zihaal-e-Miskin</td>
            <td>shreya Ghoshal</td>
            <td>6 mins</td>
          </tr>
          <tr className={styles.row1}>
            <th scope="row">10</th>
            <td colspan="1">Kulfhi Rani choco Bar</td>
            <td>Ruku Suna & Ira Mohanty</td>
            <td>7 mins</td>
          </tr>
          <tr className={styles.row1}>
            <th scope="row">11</th>
            <td colspan="1">Is Qadar</td>
            <td>Darshan Raval & Sachet-Parampara</td>
            <td>4 mins</td>
          </tr>
          <tr className={styles.row1}>
            <th scope="row">12</th>
            <td colspan="1">O Mahi O Mahi</td>
            <td>Arjit Singh</td>
            <td>5 mins</td>
          </tr>
          <tr className={styles.row1}>
            <th scope="row">13</th>
            <td colspan="1">Hua Hai Aaj Pehli Bar</td>
            <td>Arman Mallik</td>
            <td>4 mins</td>
          </tr>
          <tr className={styles.row1}>
            <th scope="row">14</th>
            <td colspan="1">Thodi Jagah</td>
            <td>Arman Mallik</td>
            <td>4 mins</td>
          </tr>
          <tr className={styles.row1}>
            <th scope="row">15</th>
            <td colspan="1">Agar Tum Saath Ho</td>
            <td>Arman Mallik</td>
            <td>5 mins</td>
          </tr>
          <tr className={styles.row1}>
            <th scope="row">16</th>
            <td colspan="1">Sanam Re</td>
            <td>Arjit Singh</td>
            <td>5 mins</td>
          </tr>
          <tr className={styles.row1}>
            <th scope="row">17</th>
            <td colspan="1">Lal Taha Taha</td>
            <td>Humane Sagar</td>
            <td>4 mins</td>
          </tr>

          

        </tbody>
      </table>
    </div>
  );
}

export default library;
