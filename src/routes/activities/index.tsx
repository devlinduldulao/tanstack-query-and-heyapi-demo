import { createFileRoute, Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getApiV1ActivitiesOptions } from "../../api/client/@tanstack/react-query.gen";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { EyeIcon } from "lucide-react";
import { ActivitiesListSkeleton } from "./-skeletons/activities-list-skeleton";

export const Route = createFileRoute("/activities/")({
  component: RouteComponent,
  pendingComponent: ActivitiesListSkeleton,
  loader: ({ context }) => {
    void context.queryClient.ensureQueryData(getApiV1ActivitiesOptions());
  },
});

function RouteComponent() {
  const { data: activities } = useSuspenseQuery(getApiV1ActivitiesOptions());

  return (
    <div className="container mx-auto py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Activities</h1>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-25">ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Completed</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {activities?.length ? (
              activities.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell className="font-medium">{activity.id}</TableCell>
                  <TableCell>{activity.title}</TableCell>
                  <TableCell>{activity.dueDate ? new Date(activity.dueDate).toLocaleDateString() : "-"}</TableCell>
                  <TableCell>
                    {activity.completed ? (
                      <span className="font-medium text-green-600">Yes</span>
                    ) : (
                      <span className="font-medium text-yellow-600">No</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <Link to="/activities/$id" params={{ id: activity.id!.toString() }}>
                        <EyeIcon className="h-4 w-4" />
                        <span className="sr-only">View</span>
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No activities found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
