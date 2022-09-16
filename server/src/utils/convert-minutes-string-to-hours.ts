export const convertMinutesStringTohours = (minutesAmount: number) => {
  const hours = Math.floor(minutesAmount / 60);
  const minutes =  minutesAmount % 60

  return `${String(hours).padStart(2,'0')}:${String(minutes).padEnd(2, '0')
  }`;
}

//padStart(2,'0') se não tiver 2 caracter ele adiciona um 0 no inicio
//padEnd(2,'0') o zero no final