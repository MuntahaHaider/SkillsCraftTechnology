import React, { useState } from 'react'
import Squares from './Squares'
import styles from './Game.module.css'

const Game = () => {
  const [num,setNum] = useState([...Array(9).fill(null)])
  console.log(num)

  const [condition,setCondition] = useState(true)


  const handleClick = (index)=>{
      // Task 4
      // hm jb aik dafa click kry tw X show hora h lekin hm usi py dobara click kreingy tw hamary passs O show hoga tw ye 1 bug h or thik nhi h ye isy thk krna hoga, is k liye condition lagy gi is handle click mn 
      // agr array k andr jo bhi index honga jesy 0 num py click kia tw ) index ara hoga wo equal nhi honi chahiye null sy
      if(num[index] != null){
        return;
      }

    console.log(index)
    // ab is array ko hm aik variablee mn save krvaingy
    let copyArray = [...num]
    console.log(copyArray)
    // ab hmny on click py box mn kuch show krna h 
    // hm copy array mn index dy dyngy jesy agr hmny 1 box py click kia tw kia assign hojaye "X" assign hojaye
    // copyArray[index] = "X"
     copyArray[index] = condition ? "X" : "O"
    

    // or phir is setNum mn is coppy array ko assign kr deingy issy hamara array update hoga X k sath
    setNum(copyArray)
    console.log(num)
    console.log(copyArray)
    // ab hm jis py bhi click kreingy means jis index py wohan X assign hoga or new array ban jayega or hmny box mn X show hoga 
    
    // ab hmny random krna h mtlb ab jb click krien tw X na aye kuch or aye jesy O waghera tw hm is k liye aik state bataingy
    // const [condition,setCondition] = useState(true)
    //  hm hm is mn changing kreingy k bhai copyArray[index] = "X" copyArray[index] = condition(mtlb ye contion h mtlb true h ? tw ye "X" show krvo ) : (othervise "O" ye zero show kro) "O"  ye changing upper hi kro or sath hi hm onclick sy iski contion ko change kreingy jesy true h tw onclick py false hojaye or so on  
    setCondition(!condition)
    
    }

    
    
    // 3rd Task
    // ab show tw hora h ab agr tw wo win hoya h tw winner ko show krna h mtln win kis kis trha hoskta h draw ko game kjo or sb mn index num show kro or cross waghera kr k winn kr k dekho jo jo numbers milry hn wo ye hn (0,1,2) , 
    // (3,4,5,) , (6,7,8,) , (0,3,6,) , (1,4,7,) , (2,5,8,) , (0,4,8,) , (2,4,6,) , ab in condition k base pr win krna h 
    const checkWinner = ()=>{
      //1) yahan hm array banyengy or in values ko daleingy
      let winner = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]
      // 2) ab hm ye check kreingy k user ny jis index py click kia or jo show howa h mtln jo 0,1,2, py jo symbol h wo same h k nhi , agr same hota h tw winner ko show krdeingy
      // yahn hm loop lagayngy
      for(let i=0 ; i<winner.length ; i++){
        // ab hm yahn is array k andr loop waly i ko pass kringhy ye check kryga k \
        let [a,b,c] = winner[i]  //[0,1,2]
        if(num[a] != null && num[a] === num[b] && num[a]=== num[c] ){
          return num[a]
        }
      }
      return false;
    }


    // ab is checkWinner ko call krny k liye hm aik variabole banynegy 
    let result = checkWinner()
    // agr winner ho tw hmy kuch msg dikhy tw hm aik h3 ban leingy




    // playAgain
    const playAgain = ()=>{
      // yahan hm setnum ko wohi null aray assign krdeingy mtlnb wo game dobara sy start hoga
      setNum([...Array(9).fill(null)])
    }


  return (
    <>
    <div className={styles.container}>
      <h2>Tic Tac Toe Game</h2>
      

      {/* // agr winner ho tw hmy kuch msg dikhy tw hm aik h3 ban leingy */}
        {
          result ? <><h1>{result}: you winner</h1><button onClick={playAgain}>Play Again</button></> : (   //ye work kra h show kra h k you winner lekin ya nhi pata chal ra k X winner h ya ) tw ab hm ye kreingy {result} , is k sath hmny aik button show krna h play again ka tw btn banlo
            <>

            {/* Task 5 : ab hmny ye show krna h agr X ki bari hogai tw ab 0 ki bari h ) ki hogai tw X ki bari h tw simple hm h1 banyngy or is mn ye condition pass krdeingy k bhai ( condition ? "X" : "O" ) agr condition true h X tmhari turn wrna 0 teri bari   */}
      <h3>{condition ? "X" : "O"}: your turn !</h3>

<div className={styles.row}>
        {/* value hmny is mn array k element ko save krvaya h isky index number sy tw abhi sb mn null jayegi value */}
        {/* handle click sy hmny imn values bheji hn or wo uper parameter mn receive hori hn jb onclick hoga tw hmny array k index k hisab ye handle click wali values dikheingi clg mn */}
        {/* handle click sy hmny index milra ha ye  */}
        <Squares onClick={()=>handleClick(0)} value={num[0]}/>
        <Squares onClick={()=>handleClick(1)} value={num[1]}/>
        <Squares onClick={()=>handleClick(2)} value={num[2]}/>
      </div>

      <div  className={styles.row}>
        <Squares onClick={()=>handleClick(3)} value={num[3]}/>
        <Squares onClick={()=>handleClick(4)} value={num[4]}/>
        <Squares onClick={()=>handleClick(5)} value={num[5]}/>
      </div>

      <div  className={styles.row}>
        <Squares onClick={()=>handleClick(6)} value={num[6]}/>
        <Squares onClick={()=>handleClick(7)} value={num[7]}/>
        <Squares onClick={()=>handleClick(8)} value={num[8]}/>
      </div>
            </>
          )
        }
      
    </div>
    </>
  )
}

export default Game