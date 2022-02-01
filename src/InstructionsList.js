import React from 'react';
import Instruction from './Instruction';

export default function InstructionsList({ instructions }) {
    // console.log(instructions, '||');
  const instructionsEl = instructions.map((instruction, i) => {
        // console.log(instruction, '||');
    return (
      <Instruction key={`${instruction} + ${i}`} instruction={instruction} />
    );
  });
  return (
    <ul className='instructions-list'>
      <h2>Instructions: </h2>
      {instructionsEl}
    </ul>
  );
}
