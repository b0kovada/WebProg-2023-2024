L = (n, L0, L1, add) => {
  res = [];
  for (let i = 0; i < n; i++) {
    res.push(L0);
    [L0, L1] = [L1, L0 + L1 + add];
  }
  return res;
};