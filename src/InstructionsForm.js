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
                    New instruction
          <input value={instructionInForm} onChange={e => setInstructionInForm(e.target.value)} />
        </label>
        <button>Add instructions</button>
      </form>
    </section>
  );
}