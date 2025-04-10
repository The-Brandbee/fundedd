'use client';
import Link from "next/link";
import { useState } from 'react';
 
export default function Home() {
  const [invoiceAmount, setInvoiceAmount] = useState(10000);
  const [advanceRate, setAdvanceRate] = useState(80);
  const [discountRate, setDiscountRate] = useState(2);
  const [daysOutstanding, setDaysOutstanding] = useState(30);

  const advanceAmount = (invoiceAmount * (advanceRate / 100)).toFixed(2);
  const discountFee = ((invoiceAmount * (discountRate / 100)) * (daysOutstanding / 30)).toFixed(2);
  const remaining = (invoiceAmount - parseFloat(advanceAmount) - parseFloat(discountFee)).toFixed(2);

  return (
    <>
     <h3 className="text-2xl font-bold">Invoice factoring calculator</h3>
    <main className="middlefe-main">
     

      <div className="space-y-4">
        <div className='space-y-4-new'>
          <label>Invoice Amount ($)</label>
          <input type="range" className="input" value={invoiceAmount} onChange={e => setInvoiceAmount(Number(e.target.value))} />
        </div>

        <div className='space-y-4-new'>
          <label>Advance Rate (%)</label>
          <input type="range" className="input" value={advanceRate} onChange={e => setAdvanceRate(Number(e.target.value))} />
        </div>

        <div className='space-y-4-new'>
          <label>Discount Rate (%)</label>
          <input type="range" className="input" value={discountRate} onChange={e => setDiscountRate(Number(e.target.value))} />
        </div>

        <div className='space-y-4-new'>
          <label>Days Outstanding</label>
          <input type="range" className="input" value={daysOutstanding} onChange={e => setDaysOutstanding(Number(e.target.value))} />
        </div>
      </div>

      <div className="mt-6 space-y-2 right-sect">
        <p><strong>Advance Amount:</strong> ${advanceAmount}</p>
        <p><strong>Discount Fee:</strong> ${discountFee}</p>
        <p><strong>Remaining Payout:</strong> ${remaining}</p>
        <div className='cal-link-main-link'>
          <Link href="/contact-us">Get a quote</Link>
        </div>
      </div>
     
    </main>
    </>
  );
}
   