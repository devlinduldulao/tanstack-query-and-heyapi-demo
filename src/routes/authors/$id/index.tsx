import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/authors/$id/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/authors/$id/"!</div>
}
