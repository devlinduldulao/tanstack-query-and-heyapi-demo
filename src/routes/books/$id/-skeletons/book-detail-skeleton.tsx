import { Skeleton } from '@/components/ui/skeleton'
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card'

export function BookDetailSkeleton() {
  return (
    <div className="container mx-auto py-8">
      <Skeleton className="h-10 w-32 mb-6" />

      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-28 mb-2" />
          <Skeleton className="h-4 w-16" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Skeleton className="h-4 w-12 mb-2" />
              <Skeleton className="h-6 w-40" />
            </div>
            <div>
              <Skeleton className="h-4 w-20 mb-2" />
              <Skeleton className="h-6 w-16" />
            </div>
            <div>
              <Skeleton className="h-4 w-24 mb-2" />
              <Skeleton className="h-6 w-24" />
            </div>
          </div>
          <div>
            <Skeleton className="h-4 w-16 mb-2" />
            <Skeleton className="h-20 w-full" />
          </div>
          <div>
            <Skeleton className="h-4 w-24 mb-2" />
            <Skeleton className="h-16 w-full" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
