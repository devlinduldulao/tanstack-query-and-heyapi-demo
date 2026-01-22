import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      <Link
        to="/"
        className="hover:text-primary text-sm font-medium transition-colors"
        activeProps={{
          className: "text-primary",
        }}
        inactiveProps={{
          className: "text-muted-foreground",
        }}
      >
        React Miami 26
      </Link>
      <Link
        to="/activities"
        className="hover:text-primary text-sm font-medium transition-colors"
        activeProps={{
          className: "text-primary",
        }}
        inactiveProps={{
          className: "text-muted-foreground",
        }}
      >
        Activities
      </Link>
      <Link
        to="/authors"
        className="hover:text-primary text-sm font-medium transition-colors"
        activeProps={{
          className: "text-primary",
        }}
        inactiveProps={{
          className: "text-muted-foreground",
        }}
      >
        Authors
      </Link>
      <Link
        to="/books"
        className="hover:text-primary text-sm font-medium transition-colors"
        activeProps={{
          className: "text-primary",
        }}
        inactiveProps={{
          className: "text-muted-foreground",
        }}
      >
        Books
      </Link>
    </nav>
  );
}
