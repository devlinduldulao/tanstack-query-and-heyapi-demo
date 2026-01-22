import { createFileRoute, Link } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { getApiV1BooksOptions } from '../../api/client/@tanstack/react-query.gen'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table'
import { Button } from '../../components/ui/button'
import { EyeIcon } from 'lucide-react'
import { BooksListSkeleton } from './-skeletons/books-list-skeleton'

export const Route = createFileRoute('/books/')({
  component: RouteComponent,
  pendingComponent: BooksListSkeleton,
  loader: ({ context }) => {
    void context.queryClient.ensureQueryData(getApiV1BooksOptions())
  },
})

function RouteComponent() {
  const { data: books } = useSuspenseQuery(getApiV1BooksOptions())

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Books</h1>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-25">ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Page Count</TableHead>
              <TableHead>Publish Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books?.length ? (
              books.map((book) => (
                <TableRow key={book.id}>
                  <TableCell>{book.id}</TableCell>
                  <TableCell>{book.title}</TableCell>
                  <TableCell className="max-w-75 truncate" title={book.description || ''}>
                    {book.description}
                  </TableCell>
                  <TableCell>{book.pageCount}</TableCell>
                  <TableCell>
                    {book.publishDate
                      ? new Date(book.publishDate).toLocaleDateString()
                      : '-'}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Link to="/books/$id" params={{ id: book.id!.toString() }}>
                        <EyeIcon className="h-4 w-4" />
                        <span className="sr-only">View</span>
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  No books found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
