  import React from 'react'
  import { useState } from 'react'



  export const Waiting = () => {

    const [Room,setRoom]= useState(null);


    async function createRoom() {
      try{const response= await fetch(`http://localhost:4000/prolang/createRoom`, {method: "POST",});
      const data  = await response.json();
      return data}
      catch(err){
        console.log("error in api createroom");
        console.error(err);
      }
    }
    
   async function getRandomRoom() {
      try{
        const response= await fetch(`http://localhost:4000/prolang/randRoom`);
      const data = await response.json();
      return data;
      
      }
      catch(err){
        console.log("error in api getrandomroom");
        console.error(err);
      
      }
    }
    async function connectToARoom() {
      const randroom  = await getRandomRoom();
        randroom= randroom.room;
      if (randroom._id !==-1) {
        setRoom(randroom);
      } else {
        const {newroom} = await createRoom();
        setRoom(newroom); 
      }
    }
    return (
      <div className='h-96 flex flex-col  justify-center items-center'>
          <p>{Room?._id}</p>
          <button onClick={connectToARoom}>start/connect</button>
      </div>
    )
  }
