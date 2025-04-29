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

  //function for commas
  const formatINRCurrency = (num) => {
    const n = Number(num);
    if (isNaN(n)) return '$0.00';
    const [intPart, decimalPart] = n.toFixed(2).split('.');
    const formattedInt = intPart.replace(/\B(?=(\d{2})+(?!\d{3}))(?=(\d{3})+(?!\d))/g, ",");
    return `$${formattedInt}.${decimalPart}`;
  };


  // console.log(formatINRCurrency(advanceAmount)); 


  return (
    <>
     <h3 className="text-2xl font-bold">Invoice factoring calculator</h3>
    <main className="middlefe-main">
     

      <div className="space-y-4">
        <div className='space-y-4-new'>
          <label>Factored invoice total ($)</label>
          <input type="text" className="input" value={invoiceAmount} onChange={e => setInvoiceAmount(Number(e.target.value))} />
        </div>

        <div className='space-y-4-new'>
          <label>Factoring Fee:</label>
          {/* <input type="text" className="input" value={advanceRate} onChange={e => setAdvanceRate(Number(e.target.value))} /> */}
      
          <select
  className="input"
  value={advanceRate}
  onChange={e => setAdvanceRate(Number(e.target.value))}
>
  <option value={1.00}>1.00%</option>
  <option value={1.2}>1.25%</option>
  <option value={1.50}>1.50%</option>
  <option value={1.75}>1.75%</option>
  <option value={2.00}>2.00%</option>
  <option value={2.25}>2.25%</option>
</select>
        </div>

        <div className='space-y-4-new'>
          <label>Advance rate (%)</label>
        {/* <input type="text" className="input" value={discountRate} onChange={e => setDiscountRate(Number(e.target.value))} /> */}
        <select
  className="input"
  value={discountRate}
  onChange={e => setDiscountRate(Number(e.target.value))}
>

  <option value={75}>75%</option>
  <option value={80}>80%</option>
  <option value={85}>85%</option>
  <option value={90}>90%</option>
 
</select>
        </div>
        

        
      </div>

      <div className="mt-6 space-y-2 right-sect">
      <p><strong> Cash advance:</strong> {formatINRCurrency(discountFee)}</p>
        <p><strong>30 Day Factoring Fee:
        </strong> {formatINRCurrency(advanceAmount)}</p>   
      
        <p><strong>Cash available after the invoices have been paid:</strong> ${remaining}</p>
      <p><strong>Total cash received by the end of the factoring process</strong> {formatINRCurrency(Number(discountFee) + Number(remaining))}</p> 
        <div className='cal-link-main-link'>
          <Link href="/contact-us">Get a quote</Link>
        </div>
      </div>
     
    </main>
    </>
  );
}
   