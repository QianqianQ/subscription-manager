import React from 'react';

interface SubscriptionCardProps {
  name: string;
  price: number;
  billingCycle: 'monthly' | 'yearly';
  nextBillingDate: Date;
  category?: string;
}

export default function SubscriptionCard({
  name,
  price,
  billingCycle,
  nextBillingDate,
  category = 'Other'
}: SubscriptionCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(nextBillingDate);

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {name}
        </h3>
        <span className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded">
          {category}
        </span>
      </div>
      
      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        {formattedPrice}
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 ml-1">
          /{billingCycle}
        </span>
      </div>
      
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Next billing date: {formattedDate}
      </div>
    </div>
  );
}
