import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

import {Routes_} from './routes/Routes'

createRoot(document.getElementById('app')!).render(
    <StrictMode>
        < Routes_ />
    </StrictMode>,
)