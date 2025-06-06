import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ShareWorkflow from "./pages/ShareWorkflow.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ShareWorkflow/>
  </StrictMode>,
)
