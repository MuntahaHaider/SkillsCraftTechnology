// import React from 'react'

// const Squares = ({value,onClick}) => {
//   // console.log(value)
//   // console.log(onClick)
//   return (
//     <>
//      <div className="box" onClick={onClick}>
//       <p >{value}</p>
//      </div>
//     </>
//   )
// }

// export default Squares


import React from 'react';
import style from './Square.module.css'
const Squares = ({ value, onClick }) => {
  return (
    <div className={style.box} onClick={onClick}>
      <p>{value}</p>
    </div>
  );
};

export default Squares;
