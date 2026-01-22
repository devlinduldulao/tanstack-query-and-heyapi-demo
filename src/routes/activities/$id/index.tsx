import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getApiV1ActivitiesByIdOptions } from "../../../api/client/@tanstack/react-query.gen";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { ChevronLeft } from "lucide-react";
import { ActivityDetailSkeleton } from "./-skeletons/activity-detail-skeleton";

export const Route = createFileRoute("/activities/$id/")({
  component: RouteComponent,
  pendingComponent: ActivityDetailSkeleton,
  loader: ({ context, params }) => {
    void context.queryClient.ensureQueryData(
      getApiV1ActivitiesByIdOptions({
        path: { id: parseInt(params.id) },
      }),
    );
  },
});

function RouteComponent() {
  const { id } = Route.useParams();
  const { data: activity } = useSuspenseQuery(
    getApiV1ActivitiesByIdOptions({
      path: { id: parseInt(id) },
    }),
  );

  return (
    <div className="container mx-auto py-8">
      <Link to="/activities">
        <Button variant="ghost" className="mb-6">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Back to Activities
        </Button>
      </Link>

      <Card>
        <CardHeader>
          <CardTitle>Activity Details</CardTitle>
          <CardDescription>ID: {activity.id}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-muted-foreground text-sm font-medium">Title</h3>
              <p className="text-lg">{activity.title}</p>
            </div>
            <div>
              <h3 className="text-muted-foreground text-sm font-medium">Due Date</h3>
              <p className="text-lg">{activity.dueDate ? new Date(activity.dueDate).toLocaleDateString() : "-"}</p>
            </div>
            <div>
              <h3 className="text-muted-foreground text-sm font-medium">Status</h3>
              <p className="text-lg">
                {activity.completed ? (
                  <span className="font-medium text-green-600">Completed</span>
                ) : (
                  <span className="font-medium text-yellow-600">Pending</span>
                )}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
