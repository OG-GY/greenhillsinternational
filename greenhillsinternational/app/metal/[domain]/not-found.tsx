import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-deep-navy to-deep-navy/90">
      <div className="text-center px-4">
        <h1 className="text-6xl font-serif font-light text-warm-cream mb-4">404</h1>
        <p className="text-2xl text-warm-cream/80 mb-8">Trading Domain Not Found</p>
        <p className="text-warm-cream/60 mb-8 max-w-md mx-auto">
          The metal trading service you&apos;re looking for doesn&apos;t exist. Please return to our trading portfolio.
        </p>
        <Link
          href="/metal"
          className="inline-block px-8 py-3 bg-luxury-gold text-deep-navy font-semibold rounded-lg hover:bg-luxury-gold/90 transition-colors"
        >
          Back to Metal Trading
        </Link>
      </div>
    </div>
  );
}
