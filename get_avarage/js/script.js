const getAverage = (marks) => {
    if (marks.length === 0) {
      return 0; 
    }

    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return Math.floor(total / marks.length);
  };

  const marksArray = [75, 80, 95, 60, 85];
  const average = getAverage(marksArray);
  console.log("Avarage: " + average);