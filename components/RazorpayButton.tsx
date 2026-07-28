'use client';

import { useState } from 'react';
import { ShoppingBag, Loader2, CheckCircle, XCircle } from 'lucide-react';

// Extend window type for Razorpay
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

interface RazorpayButtonProps {
  amount: number;          // in rupees (e.g. 1200)
  productName: string;
  className?: string;
  label?: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function RazorpayButton({
  amount,
  productName,
  className = '',
  label = 'Buy Now',
}: RazorpayButtonProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const loadRazorpayScript = (): Promise<boolean> =>
    new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const handleBuy = async () => {
    setStatus('loading');
    setErrorMsg('');

    try {
      // 1. Load Razorpay SDK
      const loaded = await loadRazorpayScript();
      if (!loaded) throw new Error('Razorpay SDK failed to load. Check your internet connection.');

      // 2. Create order server-side
      const res = await fetch('/api/razorpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, productName }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error ?? 'Order creation failed.');
      }

      const { orderId, keyId } = await res.json();

      // 3. Open Razorpay checkout popup
      const options = {
        key: keyId,
        amount: amount * 100,
        currency: 'INR',
        name: 'Kathak Shades',
        description: productName,
        order_id: orderId,
        theme: { color: '#6B0F1A' }, // brand-maroon
        handler: () => {
          setStatus('success');
        },
        modal: {
          ondismiss: () => {
            setStatus('idle');
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', (response: { error: { description: string } }) => {
        setStatus('error');
        setErrorMsg(response.error?.description ?? 'Payment failed. Please try again.');
      });
      rzp.open();
      setStatus('idle'); // Reset while popup is open
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-green-700 font-sans font-semibold bg-green-50 border border-green-200 rounded-xl px-5 py-3">
        <CheckCircle className="w-5 h-5 shrink-0" />
        Payment Successful! We will contact you shortly.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={handleBuy}
        disabled={status === 'loading'}
        className={`flex items-center gap-2 bg-brand-maroon text-brand-gold px-7 py-3 rounded-full font-sans font-bold hover:bg-brand-maroon/90 transition-all transform hover:scale-105 shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 ${className}`}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Processing...
          </>
        ) : (
          <>
            <ShoppingBag className="w-5 h-5" />
            {label}
          </>
        )}
      </button>

      {status === 'error' && (
        <div className="flex items-start gap-2 text-red-700 font-sans text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-2">
          <XCircle className="w-4 h-4 mt-0.5 shrink-0" />
          {errorMsg}
        </div>
      )}
    </div>
  );
}
