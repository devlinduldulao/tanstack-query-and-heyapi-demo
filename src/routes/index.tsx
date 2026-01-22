import { createFileRoute, Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, FileJson, Globe, Database, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  component: IndexComponent,
});

function IndexComponent() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-16 text-center lg:pt-32">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">TanStack Query + HeyAPI</h1>
          <p className="text-muted-foreground text-xl">
            A demonstration of type-safe, auto-generated API clients using TanStack Query and HeyAPI with OpenAPI
            specifications.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/activities" className={buttonVariants({ size: "lg", className: "gap-2" })}>
              Browse Data
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="https://heyapi.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              HeyAPI Docs
            </a>
          </div>
        </div>
      </section>

      {/* Info Grid */}
      <section className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <FileJson className="text-primary mb-2 h-10 w-10" />
              <CardTitle>OpenAPI Spec</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Uses a standard Swagger/OpenAPI JSON specification as the single source of truth for API definitions.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="text-primary mb-2 h-10 w-10" />
              <CardTitle>HeyAPI Codegen</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Automatically generates TypeScript interfaces, Zod schemas, and TanStack Query options hooks from the
                spec.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Database className="text-primary mb-2 h-10 w-10" />
              <CardTitle>TanStack Query</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Seamlessly integrates with generated hooks for caching, synchronization, and server state management.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Globe className="text-primary mb-2 h-10 w-10" />
              <CardTitle>REST API</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Connects to <span className="font-semibold">fakerestapi.azurewebsites.net</span> to demonstrate
                real-world data fetching and manipulation.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
