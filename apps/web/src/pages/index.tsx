import { useState } from 'react';

const API_ROOT = process.env.NEXT_PUBLIC_WORKER_API_URL || 'http://localhost:8787';

export default function Home() {
  const [userId, setUserId] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mock Login (Send to Hono)
  const handleLogin = async () => {
    if (!userId) return alert('Enter userId');
    setLoading(true);
    try {
      const res = await fetch(`${API_ROOT}/api/login?userId=${userId}`);
      const data = await res.json();
      if (data.success) {
        setIsLogged(true);
        alert(data.message);
      } else {
        alert(data.error);
      }
    } catch (e: any) {
      alert(`Error: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Create Stripe Session via Hono
  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_ROOT}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, planId: 'price_xxxxxxxx' }), // Replace with actual Price ID
      });
      const { url, error } = await res.json();
      if (url) {
        window.location.href = url; // SPEC: Stripe Checkoutへリダイレクト
      } else {
        alert(error);
      }
    } catch (e: any) {
      alert(`Error: ${e.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8 bg-black text-white p-6 font-sans">
      <h1 className="text-4xl font-black gradient-text">Aerial Demo</h1>
      
      {!isLogged ? (
        <div className="glass p-8 rounded-2xl flex flex-col gap-4 w-full max-w-sm">
          <label className="text-sm text-white/50">Enter Mock userId</label>
          <input 
            value={userId} 
            onChange={e => setUserId(e.target.value)}
            className="bg-white/5 border border-white/10 p-3 rounded-xl outline-none" 
            placeholder="e.g. kenta-001"
          />
          <button 
            onClick={handleLogin}
            disabled={loading}
            className="bg-white text-black font-bold p-3 rounded-xl hover:bg-white/90 disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login (Upsert to D1)'}
          </button>
        </div>
      ) : (
        <div className="glass p-8 rounded-2xl flex flex-col gap-6 w-full max-w-sm text-center">
          <div className="text-lg">Logged in as <span className="font-bold">{userId}</span></div>
          <button 
            onClick={handleCheckout}
            disabled={loading}
            className="bg-blue-600 font-bold p-4 rounded-xl hover:bg-blue-500 shadow-xl transition-all"
          >
            {loading ? 'Processing...' : 'Go to Stripe Checkout Session'}
          </button>
        </div>
      )}
    </div>
  );
}
