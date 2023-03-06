import {useState} from 'react'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
const App = () => {
  const [name, setActiveBtn] = useState(languageGreetingsList[0].imageAltText)
  const [url, setUrl] = useState(languageGreetingsList[0].imageUrl)

  const setNewUrl = item => {
    setActiveBtn(item.imageAltText)
    setUrl(item.imageUrl)
  }

  return (
    <div className="main-container">
      <div>
        <h1>Multilingual Greetings</h1>
        <ul className="btn-items-box">
          {languageGreetingsList.map(item => (
            <li key={item.id} className="each-item">
              <button
                type="button"
                onClick={() => setNewUrl(item)}
                className={
                  name === item.imageAltText ? 'active-btn' : 'inactive-btn'
                }
              >
                {item.buttonText}
              </button>
            </li>
          ))}
        </ul>
        <div className="img-box">
          <img src={url} alt={name} className="img-box-item" />
        </div>
      </div>
    </div>
  )
}

export default App
