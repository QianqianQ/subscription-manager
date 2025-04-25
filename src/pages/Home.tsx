import React from 'react';
import SubscriptionCard from '../components/SubscriptionCard';

const sampleSubscriptions = [
  {
    name: 'Netflix',
    price: 15.99,
    billingCycle: 'monthly',
    nextBillingDate: new Date('2024-05-15'),
    category: 'Entertainment'
  },
  {
    name: 'Spotify',
    price: 9.99,
    billingCycle: 'monthly',
    nextBillingDate: new Date('2024-05-10'),
    category: 'Music'
  },
  {
    name: 'AWS',
    price: 29.99,
    billingCycle: 'monthly',
    nextBillingDate: new Date('2024-05-01'),
    category: 'Cloud Services'
  }
] as const;

export default function Home() {
  const totalMonthly = sampleSubscriptions.reduce((sum, sub) => sum + sub.price, 0);

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Your Subscriptions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sampleSubscriptions.map((subscription) => (
            <SubscriptionCard
              key={subscription.name}
              {...subscription}
            />
          ))}
        </div>
      </div>
      
      <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Monthly Overview
        </h2>
        <div className="text-3xl font-bold text-gray-900 dark:text-white">
          ${totalMonthly.toFixed(2)}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Total monthly subscriptions
        </p>
      </div>
    </div>
  );
}
