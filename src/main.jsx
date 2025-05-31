/* pour modifie den amazon
1) git status
2) git add .
3) git status
4) git commit -m "v2 changes"
5) git push origin master
*/ 
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
