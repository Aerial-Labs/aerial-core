export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-red-950/10 text-white p-6">
      <div className="w-16 h-16 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center mb-4">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <h1 className="text-3xl font-black">Cancelled</h1>
      <p className="text-white/60 text-center max-w-sm">
        Checkout process was cancelled. You have not been charged.
      </p>
      <button 
        onClick={() => { window.location.href = '/' }} 
        className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 font-medium transition-colors"
      >
        Dashboard
      </button>
    </div>
  );
}
