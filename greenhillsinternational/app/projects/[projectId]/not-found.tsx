import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project Not Found | Green Hills International',
  description: 'The requested project could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-6xl font-serif font-light text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-serif text-muted-foreground mb-8">
          Project Not Found
        </h2>
        <p className="text-muted-foreground mb-8">
          The project you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a
          href="/construction"
          className="inline-block px-6 py-3 bg-accent text-accent-foreground rounded-sm hover:bg-accent/90 transition-colors"
        >
          Back to Projects
        </a>
      </div>
    </div>
  );
}
