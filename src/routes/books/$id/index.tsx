import { createFileRoute, Link } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getApiV1BooksByIdOptions } from '../../../api/client/@tanstack/react-query.gen'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../components/ui/card'
import { Button } from '../../../components/ui/button'
import { ChevronLeft } from 'lucide-react'
import { BookDetailSkeleton } from './-skeletons/book-detail-skeleton'

export const Route = createFileRoute('/books/$id/')({
  component: RouteComponent,
  pendingComponent: BookDetailSkeleton,
  loader: ({ context, params }) => {
    void context.queryClient.ensureQueryData(
      getApiV1BooksByIdOptions({
        path: { id: parseInt(params.id) },
      }),
    )
  },
})

function RouteComponent() {
  const { id } = Route.useParams()
  const { data: book } = useSuspenseQuery(
    getApiV1BooksByIdOptions({
      path: { id: parseInt(id) },
    }),
  )

  return (
    <div className="container mx-auto py-8">
      <Button variant="ghost" className="mb-6">
        <Link to="/books">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Books
        </Link>
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Book Details</CardTitle>
          <CardDescription>ID: {book.id}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Title</h3>
              <p className="text-lg">{book.title}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                Page Count
              </h3>
              <p className="text-lg">{book.pageCount}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">
                Publish Date
              </h3>
              <p className="text-lg">
                {book.publishDate
                  ? new Date(book.publishDate).toLocaleDateString()
                  : '-'}
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Excerpt</h3>
            <p className="text-base mt-1">{book.excerpt}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">
              Description
            </h3>
            <p className="text-base mt-1">{book.description}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
