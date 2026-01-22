import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getApiV1BooksOptions } from "../../api/client/@tanstack/react-query.gen";
import { Eye } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { BooksListSkeleton } from "./-skeletons/books-list-skeleton";

export const Route = createFileRoute("/books/")({
  component: RouteComponent,
  pendingComponent: BooksListSkeleton,
  loader: ({ context }) => {
    void context.queryClient.ensureQueryData(getApiV1BooksOptions());
  },
});

function RouteComponent() {
  const { data: books } = useSuspenseQuery(getApiV1BooksOptions());

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-6 text-3xl font-bold">Books</h1>
      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Page Count</TableHead>
              <TableHead>Publish Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books?.length ? (
              books.map((book) => (
                <TableRow key={book.id}>
                  <TableCell>{book.id}</TableCell>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.description}</TableCell>
                  <TableCell>{book.pageCount}</TableCell>
                  <TableCell>{book.publishDate ? new Date(book.publishDate).toLocaleDateString() : "-"}</TableCell>
                  <TableCell>
                    <Link to="/books/$id" params={{ id: book.id!.toString() }}>
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
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
  );
}
