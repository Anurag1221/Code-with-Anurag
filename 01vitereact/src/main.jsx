import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

function MyApp(){
    
    return(
        <div>
        <h1>Custom App</h1>
    </div>
    )
    
}

const reactElement = {
    type : 'a',
    props: {
        href: 'httpd://google.com',
        target: '_black'
    },
    children: 'click me to visit google'      
}

const anotherElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
);

const reactElements = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'Click me to visit Google'
)


createRoot(document.getElementById('root')).render(
  
    reactElements
  
)
