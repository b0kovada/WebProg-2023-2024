const generateSequence = (n, L0, L1, add) => {
    const sequence = [L0, L1];
  
    for (let i = 0; i < n - 2; i++) {
      sequence.push(sequence[i] + sequence[i + 1] + add);
    }
  
    return sequence;
  };