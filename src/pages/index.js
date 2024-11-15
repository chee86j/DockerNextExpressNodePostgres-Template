export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-600 text-white">
      <main className="px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to My Accessible, Responsive Next.js App
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          This landing page is designed to be responsive and accessible on all devices and for all
          users. Built with a focus on usability and readability.
        </p>
        <a
          href="#get-started"
          className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          aria-label="Get started with our app"
        >
          Get Started
        </a>
      </main>

      <footer className="mt-8 text-sm">
        <p>&copy; {new Date().getFullYear()} My Next.js App. All rights reserved.</p>
      </footer>
    </div>
  );
}