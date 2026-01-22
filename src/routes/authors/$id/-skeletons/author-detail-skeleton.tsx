import { Skeleton } from '@/components/ui/skeleton'
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card'

export function AuthorDetailSkeleton() {
  return (
    <div className="container mx-auto py-8">
      <Skeleton className="h-10 w-36 mb-6" />

      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-32 mb-2" />
          <Skeleton className="h-4 w-16" />
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Skeleton className="h-4 w-20 mb-2" />
              <Skeleton className="h-6 w-32" />
            </div>
            <div>
              <Skeleton className="h-4 w-20 mb-2" />
              <Skeleton className="h-6 w-32" />
            </div>
            <div>
              <Skeleton className="h-4 w-16 mb-2" />
              <Skeleton className="h-6 w-12" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
