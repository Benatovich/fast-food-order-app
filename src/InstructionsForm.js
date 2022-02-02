import { useState } from 'react';

export default function InstructionsForm({ setInstructions, instructions }) {
  const [instructionInForm, setInstructionInForm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    setInstructions([...instructions, instructionInForm]);

    setInstructionInForm('');
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
                    Add instructions: 
          <input value={instructionInForm} onChange={e => setInstructionInForm(e.target.value)} />
        </label>
        <button>Customize</button>
      </form>
    </section>
  );
}