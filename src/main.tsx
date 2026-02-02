import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HeroFrame } from './pages/HeroFrame.tsx'
import { DashboardFrame } from './pages/DashboardFrame.tsx'
import { DeployFrame } from './pages/DeployFrame.tsx'
import { BuilderFrame } from './pages/BuilderFrame.tsx'
import { TicketsFrame } from './pages/TicketsFrame.tsx'
import { CallFlowFrame } from './pages/CallFlowFrame.tsx'
import { ArchitectureFrame } from './pages/ArchitectureFrame.tsx'
import { TrackingFrame } from './pages/TrackingFrame.tsx'
import { LeadFlowFrame } from './pages/LeadFlowFrame.tsx'
import { TicketRouteFrame } from './pages/TicketRouteFrame.tsx'
import { IntegrationsFrame } from './pages/IntegrationsFrame.tsx'
import { LaunchFrame } from './pages/LaunchFrame.tsx'

function Router() {
  const [route, setRoute] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (route === '#/frame') {
    return <HeroFrame />
  }

  if (route === '#/dashboard') {
    return <DashboardFrame />
  }

  if (route === '#/deploy') {
    return <DeployFrame />
  }

  if (route === '#/builder') {
    return <BuilderFrame />
  }

  if (route === '#/tickets') {
    return <TicketsFrame />
  }

  if (route === '#/callflow') {
    return <CallFlowFrame />
  }

  if (route === '#/architecture') {
    return <ArchitectureFrame />
  }

  if (route === '#/tracking') {
    return <TrackingFrame />
  }

  if (route === '#/leadflow') {
    return <LeadFlowFrame />
  }

  if (route === '#/ticketroute') {
    return <TicketRouteFrame />
  }

  if (route === '#/integrations') {
    return <IntegrationsFrame />
  }

  if (route === '#/launch') {
    return <LaunchFrame />
  }

  return <App />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
)
