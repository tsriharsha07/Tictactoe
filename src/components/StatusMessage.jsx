import React from 'react'

const StatusMessage = ({winner,current}) => {
  const noMovesleft= current.board.every((el)=>el !== null);
  
  return <h2>{ winner &&  `Winner is ${winner}`}
  { !winner &&!noMovesleft && `Next player is ${current.isXNext ? 'X' : 'O'}`}
  {!winner && noMovesleft && 'X and 0 tied'}</h2>
    // const message = winner
    //  ? `Winner is ${winner}`
    //  : `Next player is ${current.isXNext ? 'X' : 'O'}`;
    
    
};
export default StatusMessage
