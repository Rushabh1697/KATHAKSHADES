'use client';

import { useState } from 'react';
import {
  ShoppingBag,
  Loader2,
  CheckCircle,
  XCircle,
  User,
  Phone,
  Mail,
  MapPin,
  Hash,
  Send,
  X,
} from 'lucide-react';

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => {
      open(): void;
      on(event: string, handler: (response: Record<string, unknown>) => void): void;
    };
  }
}

interface RazorpayButtonProps {
  amount: number;
  productName: string;
  className?: string;
  label?: string;
}

interface PaymentResult {
  paymentId: string;
  orderId: string;
}

interface OrderForm {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  pincode: string;
}

type Status = 'idle' | 'loading' | 'paid' | 'submitted' | 'error';

const WHATSAPP_NUMBER = '919773602766';

export default function RazorpayButton({
  amount,
  productName,
  className = '',
  label = 'Buy Now',
}: RazorpayButtonProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [payment, setPayment] = useState<PaymentResult | null>(null);
  const [form, setForm] = useState<OrderForm>({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
  });
  const [formErrors, setFormErrors] = useState<Partial<OrderForm>>({});

  // ── Load Razorpay SDK lazily ──────────────────────────────────────────────
  const loadRazorpayScript = (): Promise<boolean> =>
    new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  // ── Trigger Razorpay checkout ─────────────────────────────────────────────
  const handleBuy = async () => {
    setStatus('loading');
    setErrorMsg('');

    try {
      const loaded = await loadRazorpayScript();
      if (!loaded) throw new Error('Razorpay SDK failed to load. Check your internet connection.');

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

      const options = {
        key: keyId,
        amount: amount * 100,
        currency: 'INR',
        name: 'Kathak Shades',
        description: productName,
        order_id: orderId,
        theme: { color: '#6B0F1A' },
        handler: (response: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
        }) => {
          setPayment({
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
          });
          setStatus('paid'); // show the details form
        },
        modal: {
          ondismiss: () => {
            if (status !== 'paid') setStatus('idle');
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', (response: { error: { description: string } }) => {
        setStatus('error');
        setErrorMsg(response.error?.description ?? 'Payment failed. Please try again.');
      });

      setStatus('idle'); // Reset while popup is open
      rzp.open();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  // ── Form validation ───────────────────────────────────────────────────────
  const validate = (): boolean => {
    const errors: Partial<OrderForm> = {};
    if (!form.name.trim()) errors.name = 'Name is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.replace(/\s/g, '')))
      errors.phone = 'Enter a valid 10-digit phone number';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errors.email = 'Enter a valid email address';
    if (!form.address.trim()) errors.address = 'Delivery address is required';
    if (!form.city.trim()) errors.city = 'City is required';
    if (!form.pincode.trim() || !/^\d{6}$/.test(form.pincode))
      errors.pincode = 'Enter a valid 6-digit pincode';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // ── Submit form → WhatsApp ────────────────────────────────────────────────
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || !payment) return;

    const msg = [
      `🛍️ *New Order — Kathak Shades*`,
      ``,
      `📦 *Product:* ${productName}`,
      `💰 *Amount Paid:* ₹${amount.toLocaleString('en-IN')}`,
      ``,
      `🔖 *Payment ID:* ${payment.paymentId}`,
      `📋 *Order ID:* ${payment.orderId}`,
      ``,
      `👤 *Customer Details*`,
      `• Name: ${form.name}`,
      `• Phone: ${form.phone}`,
      `• Email: ${form.email || 'Not provided'}`,
      ``,
      `📍 *Delivery Address*`,
      `• ${form.address}`,
      `• ${form.city} — ${form.pincode}`,
    ].join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setStatus('submitted');
  };

  const handleChange = (field: keyof OrderForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) setFormErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  // ── States ────────────────────────────────────────────────────────────────

  if (status === 'submitted') {
    return (
      <div className="flex flex-col items-start gap-2 bg-green-50 border border-green-200 rounded-2xl px-5 py-4 w-full max-w-sm">
        <div className="flex items-center gap-2 text-green-700 font-sans font-bold">
          <CheckCircle className="w-5 h-5 shrink-0" />
          Order Received!
        </div>
        <p className="text-green-700/80 font-sans text-sm">
          Your details have been sent to us on WhatsApp. We will confirm your order and dispatch details shortly.
        </p>
      </div>
    );
  }

  if (status === 'paid' && payment) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-brand-maroon/10">

          {/* Header */}
          <div className="bg-gradient-to-r from-brand-maroon to-[#3d0a0e] px-6 py-5 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 text-brand-gold mb-1">
                <CheckCircle className="w-5 h-5" />
                <span className="font-sans font-bold text-sm uppercase tracking-wider">Payment Successful</span>
              </div>
              <p className="font-serif text-white text-xl font-bold">{productName}</p>
              <p className="font-sans text-brand-gold/80 text-sm mt-0.5">₹{amount.toLocaleString('en-IN')} paid</p>
            </div>
            <button
              onClick={() => setStatus('idle')}
              className="text-white/60 hover:text-white transition-colors mt-1"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Transaction IDs (auto-filled) */}
          <div className="px-6 pt-4 pb-2 bg-brand-cream/60 border-b border-brand-maroon/10">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-xs font-sans text-brand-black/60">
                <Hash className="w-3.5 h-3.5" />
                <span className="font-semibold">Payment ID:</span>
                <span className="font-mono text-brand-maroon">{payment.paymentId}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-sans text-brand-black/60">
                <Hash className="w-3.5 h-3.5" />
                <span className="font-semibold">Order ID:</span>
                <span className="font-mono text-brand-maroon">{payment.orderId}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4 overflow-y-auto max-h-[60vh]">
            <p className="font-sans text-brand-black/70 text-sm">
              Please fill in your delivery details so we can dispatch your order.
            </p>

            {/* Name */}
            <div>
              <label className="block font-sans text-xs font-semibold text-brand-black/60 uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-maroon/40" />
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Your full name"
                  className={`w-full pl-9 pr-3 py-2.5 rounded-xl border font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-maroon/30 transition ${
                    formErrors.name ? 'border-red-400 bg-red-50' : 'border-brand-maroon/20 bg-white'
                  }`}
                />
              </div>
              {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block font-sans text-xs font-semibold text-brand-black/60 uppercase tracking-wider mb-1.5">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-maroon/40" />
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="10-digit mobile number"
                  maxLength={10}
                  className={`w-full pl-9 pr-3 py-2.5 rounded-xl border font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-maroon/30 transition ${
                    formErrors.phone ? 'border-red-400 bg-red-50' : 'border-brand-maroon/20 bg-white'
                  }`}
                />
              </div>
              {formErrors.phone && <p className="text-red-500 text-xs mt-1">{formErrors.phone}</p>}
            </div>

            {/* Email (optional) */}
            <div>
              <label className="block font-sans text-xs font-semibold text-brand-black/60 uppercase tracking-wider mb-1.5">
                Email <span className="text-brand-black/30 font-normal">(optional)</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-maroon/40" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="your@email.com"
                  className={`w-full pl-9 pr-3 py-2.5 rounded-xl border font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-maroon/30 transition ${
                    formErrors.email ? 'border-red-400 bg-red-50' : 'border-brand-maroon/20 bg-white'
                  }`}
                />
              </div>
              {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
            </div>

            {/* Address */}
            <div>
              <label className="block font-sans text-xs font-semibold text-brand-black/60 uppercase tracking-wider mb-1.5">
                Delivery Address *
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-brand-maroon/40" />
                <textarea
                  value={form.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                  placeholder="House / Flat no., Street, Locality"
                  rows={2}
                  className={`w-full pl-9 pr-3 py-2.5 rounded-xl border font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-maroon/30 transition resize-none ${
                    formErrors.address ? 'border-red-400 bg-red-50' : 'border-brand-maroon/20 bg-white'
                  }`}
                />
              </div>
              {formErrors.address && <p className="text-red-500 text-xs mt-1">{formErrors.address}</p>}
            </div>

            {/* City + Pincode */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-sans text-xs font-semibold text-brand-black/60 uppercase tracking-wider mb-1.5">
                  City *
                </label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  placeholder="Mumbai"
                  className={`w-full px-3 py-2.5 rounded-xl border font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-maroon/30 transition ${
                    formErrors.city ? 'border-red-400 bg-red-50' : 'border-brand-maroon/20 bg-white'
                  }`}
                />
                {formErrors.city && <p className="text-red-500 text-xs mt-1">{formErrors.city}</p>}
              </div>
              <div>
                <label className="block font-sans text-xs font-semibold text-brand-black/60 uppercase tracking-wider mb-1.5">
                  Pincode *
                </label>
                <input
                  type="text"
                  value={form.pincode}
                  onChange={(e) => handleChange('pincode', e.target.value)}
                  placeholder="421201"
                  maxLength={6}
                  className={`w-full px-3 py-2.5 rounded-xl border font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand-maroon/30 transition ${
                    formErrors.pincode ? 'border-red-400 bg-red-50' : 'border-brand-maroon/20 bg-white'
                  }`}
                />
                {formErrors.pincode && <p className="text-red-500 text-xs mt-1">{formErrors.pincode}</p>}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-brand-maroon text-brand-gold py-3 rounded-xl font-sans font-bold hover:bg-brand-maroon/90 transition-all shadow-lg mt-2"
            >
              <Send className="w-4 h-4" />
              Submit & Confirm Order
            </button>
            <p className="font-sans text-brand-black/40 text-xs text-center">
              Your details will be sent to us via WhatsApp for order confirmation.
            </p>
          </form>
        </div>
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
