const name = prompt('Enter Your Name')
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput
  
    }else{
      return 'Error, Please Input rock or paper or scissors'
    }
  }
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*3)
    switch (randomNumber){
      case 0:
        return 'rock'
        break
      case 1:
        return 'paper'
        break
      case 2:
        return 'scissors'
        break
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb'){
      return 'user win'
    }
    if(userChoice === computerChoice ){
      return 'the game was a tie'
    }
    else if(userChoice === 'rock'){
      if (computerChoice === 'paper'){
        return 'computer won'
      }else{
        return 'user won'
      }
    }
    else if(userChoice === 'paper'){
      if (computerChoice === 'scissors'){
        return 'computer won'
      }else{
        return 'user won'
      }
    }
    else if(userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'computer won'
      }else{
        return 'user won'
      }
    }
  }
  
  const playGame = (name) => {
    const userChoice = getUserChoice(name)
    const computerChoice = getComputerChoice()
    console.log('You threw: ' + userChoice)
    console.log('The computer threw: ' + computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  while (true){
      const choice = prompt('Choice rock, paper or scissors')
      if (choice === 'exit'){break}
      playGame(choice)
  }
  
  console.log(name + ' Thanks for playing our game.') 