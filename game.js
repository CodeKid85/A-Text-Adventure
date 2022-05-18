const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const game = document.getElementById('game')
const playButton = document.getElementById('playButton')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Heyy',
    options: [
      {
        text: 'Hello',
        nextText: 3
      },
      {
        text: 'Hi',
        nextText: 3
      },
      {
        text:"Hey how are you",
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: "I'm good, you haven't been messaging for  while",
    options: [
      {
        text: 'Been busy',
        nextText: 4
      }
    ]
  },
  {
    id: 3,
    text: "How are you?",
    options: [
      {
        text: 'Good, how about you?',
        nextText: 4
      },
      {
        text: 'Terrible, what about you?',
        nextText: 4
      },
      {
        text: 'Im ok',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'ok lol',
    options: [
      {
        text: '...',
        nextText: 5
      }
    ]
  },

  {
    id: 5,
    text: "I really felt like you would never be online again",
    options: [
      {
        text: "oh why?",
        nextText: 6,
      },
      {
        text: "thats sad",
        nextText: 7
      }
    ]
  },
  {
    id: 6,
    text: "oh no reason really",
    options: [
      {
        text: "um ok",
        nextText: 8,
      },
      {
        text: "well im sorry you feel that way",
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: "it's ok",
    options: [
      {
        text: "...",
        nextText: 8,
      }
    ]
  },
  {
    id: 8,
    text: "So anyways what's new?",
    options: [
      {
        text: "nothing really",
        nextText: 9,
      },
      {
        text: "oh you know, just work",
        nextText: 10
      }
    ]
  },
  {
    id: 9,
    text: "come on theres gotta be something",
    options: [
      {
        text: "I mean works is ok",
        nextText: 10,
      }
    ]
  },
  {
    id: 10,
    text: "oh yeah whats it like to work there?",
    options: [
      {
        text: "Love it, the arcade is fun",
        nextText: 12,
      },
      {
        text: "Oh yeah Burger Queen is fun",
        nextText: 11
      }
    ]
  },
  {
    id: 11,
    text: "It seems really fun",
    options: [
      {
        text: "its ok",
        nextText: 14,
      },
      {
        text: "Its fantastic love the people there",
        nextText: 17
      }
    ]
  },
  {
    id: 12,
    text: "You don't work at an arcade...",
    options: [
      {
        text: "oh yeah I was kidding",
        nextText: 13,
      },
      {
        text: "Joking, of course!",
        nextText: 13
      }
    ]
  },
  {
    id: 13,
    text: "Um where do you work then",
    options: [
      {
        text: "Burger Queen lol",
        nextText: 15,
      },
    ]
  },
  {
    id: 14,
    text: "Marcus why ok?",
    options: [
      {
        text: "It's super boring",
        nextText: 16,
      },
      {
        text: "I don't get paid enough",
        nextText: 16
      },
      {
        text: "people :(",
        nextText: 16
      }
    ]
  },
  {
    id: 15,
    text: "yes? You're so confusing man",
    options: [
      {
        text: "I just can't make a joke",
        nextText: -1,
      },
    ]
  },
  {
    id: 16,
    text: "I get it lol",
    options: [
      {
        text: "restart",
        nextText: -1,
      },
    ]
  },
  {
    id: 17,
    text: "Thats great! lot of people say the opposite",
    options: [
      {
        text: "oh why?",
        nextText: 7,
      },
      {
        text: "thats sad",
        nextText: 8
      }
    ]
  }
]

localStorage.setItem("my name", "Bob")

startGame()