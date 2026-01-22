import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getApiV1BooksByIdOptions } from "../../../api/client/@tanstack/react-query.gen";
import { ChevronLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookDetailSkeleton } from "./-skeletons/book-detail-skeleton";

export const Route = createFileRoute("/books/$id/")({
  component: RouteComponent,
  pendingComponent: BookDetailSkeleton,
  loader: ({ context, params }) => {
    void context.queryClient.ensureQueryData(
      getApiV1BooksByIdOptions({
        path: { id: parseInt(params.id) },
      }),
    );
  },
});

function RouteComponent() {
  const { id } = Route.useParams();
  const { data: book } = useSuspenseQuery(
    getApiV1BooksByIdOptions({
      path: { id: parseInt(id) },
    }),
  );

  return (
    <div className="container mx-auto py-8">
      <Link to="/books">
        <Button variant="ghost" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Books
        </Button>
      </Link>

      <Card>
        <CardHeader>
          <CardTitle>Book Details</CardTitle>
          <CardDescription>ID: {book.id}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-muted-foreground mb-2 text-sm font-medium">Title</h3>
              <p className="text-lg">{book.title}</p>
            </div>
            <div>
              <h3 className="text-muted-foreground mb-2 text-sm font-medium">Page Count</h3>
              <p className="text-lg">{book.pageCount}</p>
            </div>
          </div>

          <div>
            <h3 className="text-muted-foreground mb-2 text-sm font-medium">Publish Date</h3>
            <p className="text-lg">{book.publishDate ? new Date(book.publishDate).toLocaleDateString() : "-"}</p>
          </div>

          <div>
            <h3 className="text-muted-foreground mb-2 text-sm font-medium">Excerpt</h3>
            <p className="text-base leading-relaxed">{book.excerpt}</p>
          </div>

          <div>
            <h3 className="text-muted-foreground mb-2 text-sm font-medium">Description</h3>
            <p className="text-base">{book.description}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
