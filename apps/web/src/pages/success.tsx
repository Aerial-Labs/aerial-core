import { useRouter } from 'next/router';

export default function SuccessPage() {
  const router = useRouter();
  const { session_id } = router.query;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-teal-900/10 text-white p-6">
      <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-4">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-3xl font-black">Success!</h1>
      <p className="text-white/60 text-center max-w-sm">
        Checkout session <span className="text-emerald-400 font-mono text-xs">{session_id}</span> has been confirmed.
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
