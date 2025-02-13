import React, { useState } from 'react'

const StopWatch = () => {
    const timeObj = {
        hour:0,
        minute:0,
        second:0,
        miliSecond:0
    }
    // 1) sb s pehly time ki state banyngy isk andr hm objy pass kreingy hr,sec,min,milisec jiski value 0 hongi
    const [startTime, setStartTime] = useState(timeObj)
    // console.log(startTime)
    
    const [status,setStatus] = useState()

    // 4) start sy pehly aik funtion bany os issy pehly hm is objrctwaly data ko variables mn save krva leingy
    let updateHour = startTime.hour
    let updateMinute = startTime.minute
    let updateSecond = startTime.second
    let updateMiliSecond = startTime.miliSecond
    // console.log(updateHour,updateMiliSecond,updateMinute,updateSecond)

    const Start = ()=>{
        // 5) ab onclick py myfunc chaly abhi ye kuch show nhi kry ga q k hmny setTime mn kuch save nhi krvaya ab aik sttae banyngy status ki 
        myFunction()
        // 6) setInterval ye repetative task ko perform krta h
        setStatus(setInterval(myFunction,10))
    }


    const myFunction = ()=>{
        // start krny py agr updatemilisecd barabr h 100 k isko dobara 0 krodo or sec ko + 1 krdo
        if(updateMiliSecond === 100){
            updateMiliSecond = 0;
            updateSecond++;
        }
        // agr second barabr h 60sec k tw isko dobara 0 krodo or min ko + 1 krdo
        if(updateSecond === 60){
            updateSecond=0;
            updateMinute++
        } 
        // agr min barabr h 60sec k tw isko dobara 0 krodo or hour ko + 1 krdo
        if(updateMinute === 60){
            updateMinute = 0;
            updateHour++
        }
        // ab update milisecond ko increament krty jayngy
        updateMiliSecond++;

        // 7)ab hamri jo updation hori hn isko hm usobj mn save krvaingy jesy
        return setStartTime({
            hour:updateHour,
        minute:updateMinute,
        second:updateSecond,
        miliSecond:updateMiliSecond
        })
    }
    
    // 8) stop interval
    const Stop = ()=>{
        // stop krny km liye hmny status ko clear interval mn dalna hoga q k status k andr hmara hamar timer start hora h mtlb hamara data save hora h is mn jo numbers bherh rahy hn      
        clearInterval(status)
    }
    // 9) reset 
    const Reset = ()=>{
        clearInterval(status)
        setStartTime({
            hour:0,
            minute:0,
            second:0,
            miliSecond:0
        })

    }


    // const [hour,setHour] = useState(0)
    // const [minutes,setMinutes] = useState(0)
    // const [second,setSecond] = useState(0)
    // const [milisecond,setMiliSecond] = useState(0)
  return (
    <>
    <h1>stop watch</h1>
    {/* 3) ab start pu onlick lagyga */}
    <button onClick={Start}>Start</button>
    <button onClick={Stop}>Stop</button>
    <button onClick={Reset} >Reset</button>
    <br /><br />
    {/* 2) hamara dat ab time mn save hoagay h ab ye hm 0 n mn show krvaingy */}
    <button>{startTime.hour} h</button>
    <button>{startTime.minute} min</button>
    <button>{startTime.second} sec</button>
    <button>{startTime.miliSecond} miliSec</button>



    </>


  )
}

export default StopWatch











// import React, { useState } from 'react'

// const Stopwatch = () => {
//     const [time, setTime] = useState({hr:0, min:0, sec:0,milli:0 });
//     const [status, setStatus] = useState()

//     let updHr = time.hr;
//     let updMin = time.min;
//     let updSec = time.sec;
//     let updMilli = time.milli;


//     const start = () =>{
//         myFun();
//         setStatus(setInterval(myFun, 10))
//     }
//     const stop = () =>{
//         clearInterval(status)
//     }

//     const reset = () =>{
//         clearInterval(status);
//         setTime({hr:0, min:0, sec:0,milli:0 })
//     }

//     const myFun = () =>{
//         if(updMilli === 100){
//             updMilli=0;
//             updSec++
//         }
//         if(updSec === 60){
//             updSec=0
//             updMin++
//         }
//         if(updMin === 60){
//             updMin=0;
//             updHr++
//         }
//         updMilli++;
//         return setTime({hr:updHr, min:updMin, sec:updSec,milli:updMilli})

//     }

    
//   return (
//     <>
//         <div className='container'>
//             <h1>{time.hr+" : "+time.min+" : "+time.sec+" : "+time.milli}</h1>
//             <div className='buttons'>
//             <button className='start' onClick={start}>Start</button>
//             <button className='stop' onClick={stop}>Stop</button>
//             <button className='reset' onClick={reset}>Reset</button>

//             </div>
//         </div>
//     </>
//   )
// }

// export default Stopwatch