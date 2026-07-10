import { Compass } from 'lucide-react'
import { Container, Button } from '../components/ui.jsx'

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-32 text-center">
      <Compass className="h-14 w-14 text-brand-400" />
      <h1 className="mt-6 text-6xl font-extrabold tracking-tight text-white">404</h1>
      <p className="mt-3 max-w-md text-slate-400">
        This route drifted off the map. Let's get you back to safe ground.
      </p>
      <Button to="/" className="mt-8">
        Return home
      </Button>
    </Container>
  )
}
