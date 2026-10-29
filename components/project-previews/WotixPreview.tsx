'use client';

import React, { useState } from 'react';
import { ShoppingBag, Plus, Minus, ArrowRight, Check, PackageCheck } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  qty: number;
}

const PRODUCTS = [
  { id: 'p1', name: 'Nomad Heavyweight Hoodie', category: 'Apparel', price: 95, color: 'Graphite' },
  { id: 'p2', name: 'Ceramic Pour-Over Dripper', category: 'Objects', price: 48, color: 'Matte Clay' },
  { id: 'p3', name: 'Modular Canvas Work Tote', category: 'Carry', price: 120, color: 'Sand' }
];

export default function WotixPreview() {
  const [cart, setCart] = useState<CartItem[]>([
    { id: 'p1', name: 'Nomad Heavyweight Hoodie', category: 'Apparel', price: 95, qty: 1 }
  ]);
  const [checkedOut, setCheckedOut] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const addToCart = (product: typeof PRODUCTS[0]) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { id: product.id, name: product.name, category: product.category, price: product.price, qty: 1 }];
    });
    setShowDrawer(true);
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckedOut(true);
    setTimeout(() => {
      setCheckedOut(false);
      setShowDrawer(false);
    }, 3000);
  };

  return (
    <div className="w-full bg-[#0d0f15] border border-white/[0.08] rounded-xl overflow-hidden text-slate-200 text-xs select-none">
      {/* Simulation Top Bar */}
      <div className="px-4 py-2.5 bg-[#141822] border-b border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] text-slate-400">wotix.store/cart-pipeline</span>
        </div>
        <button
          type="button"
          onClick={() => setShowDrawer(!showDrawer)}
          className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[11px] border border-emerald-500/30 hover:bg-emerald-500/30 transition-colors"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          <span>Cart ({totalItems}) · ${subtotal}</span>
        </button>
      </div>

      <div className="p-4 sm:p-5">
        {!showDrawer ? (
          <div>
            <div className="flex items-center justify-between mb-3 text-[11px] text-slate-400">
              <span>Catalog Ingestion (Real-Time Stock)</span>
              <span className="text-emerald-400 font-mono">3 Products Active</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-3">
              {PRODUCTS.map((prod) => {
                const inCart = cart.find((i) => i.id === prod.id);
                return (
                  <div
                    key={prod.id}
                    className="p-3 rounded-lg bg-[#141823] border border-white/[0.06] flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-1">
                        {prod.category}
                      </span>
                      <h6 className="font-semibold text-white text-[11px] leading-snug line-clamp-1">
                        {prod.name}
                      </h6>
                      <div className="text-[10px] text-slate-400 mt-1">{prod.color}</div>
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/[0.06]">
                      <span className="font-mono font-bold text-white text-xs">${prod.price}</span>
                      <button
                        type="button"
                        onClick={() => addToCart(prod)}
                        className="px-2 py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded text-[10px] flex items-center gap-1 transition-colors"
                      >
                        <Plus className="w-2.5 h-2.5" />
                        <span>{inCart ? `Add (${inCart.qty})` : 'Add'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-[10px] text-slate-400 pt-2 border-t border-white/[0.06]">
              <span>Optimistic client state with local session persistence</span>
              <button
                type="button"
                onClick={() => setShowDrawer(true)}
                className="text-emerald-400 font-semibold hover:underline flex items-center gap-1"
              >
                <span>Open Cart Checkout</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h5 className="font-bold text-white text-xs flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-emerald-400" />
                <span>Active Cart Drawer</span>
              </h5>
              <button
                type="button"
                onClick={() => setShowDrawer(false)}
                className="text-[10px] text-slate-400 hover:text-white"
              >
                Back to catalog
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="py-6 text-center text-slate-400 text-xs">
                Your cart is empty.
              </div>
            ) : (
              <div className="space-y-2 mb-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-2.5 bg-[#141823] rounded-lg border border-white/[0.06] flex items-center justify-between"
                  >
                    <div>
                      <div className="font-semibold text-white text-[11px]">{item.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono">${item.price} each</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center bg-[#1c2230] rounded border border-white/10 px-1 py-0.5">
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, -1)}
                          className="p-0.5 text-slate-400 hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-2.5 h-2.5" />
                        </button>
                        <span className="font-mono text-xs px-2 text-white font-semibold">{item.qty}</span>
                        <button
                          type="button"
                          onClick={() => updateQty(item.id, 1)}
                          className="p-0.5 text-slate-400 hover:text-white"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-2.5 h-2.5" />
                        </button>
                      </div>
                      <div className="font-mono text-xs font-bold text-white w-12 text-right">
                        ${item.price * item.qty}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {cart.length > 0 && (
              <form onSubmit={handleCheckout} className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400">Total with tax:</div>
                  <div className="font-mono font-bold text-emerald-400 text-sm">${subtotal}</div>
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded text-[11px] transition-colors flex items-center gap-1.5"
                >
                  {checkedOut ? (
                    <>
                      <Check className="w-3 h-3" />
                      <span>Order Verified</span>
                    </>
                  ) : (
                    <>
                      <PackageCheck className="w-3.5 h-3.5" />
                      <span>Process Checkout</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
