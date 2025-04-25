import React, { useState } from 'react';
import SubscriptionCard from '../components/SubscriptionCard';
import AddSubscriptionForm from '../components/AddSubscriptionForm';

const initialSubscriptions = [
  {
    name: 'Netflix',
    price: 15.99,
    billingCycle: 'monthly' as const,
    nextBillingDate: new Date('2024-05-15'),
    category: 'Entertainment'
  },
  {
    name: 'Spotify',
    price: 9.99,
    billingCycle: 'monthly' as const,
    nextBillingDate: new Date('2024-05-10'),
    category: 'Music'
  },
  {
    name: 'AWS',
    price: 29.99,
    billingCycle: 'monthly' as const,
    nextBillingDate: new Date('2024-05-01'),
    category: 'Cloud Services'
  }
];

export default function Home() {
  const [subscriptions, setSubscriptions] = useState(initialSubscriptions);
  const [showAddForm, setShowAddForm] = useState(false);

  const totalMonthly = subscriptions.reduce((sum, sub) => sum + sub.price, 0);

  const handleAddSubscription = (newSubscription: typeof subscriptions[0]) => {
    setSubscriptions([...subscriptions, newSubscription]);
    setShowAddForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Your Subscriptions
        </h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg flex items-center"
        >
          <span className="mr-2">+</span> Add Subscription
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow sm:rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subscriptions.map((subscription) => (
            <SubscriptionCard
              key={subscription.name}
              name={subscription.name}
              price={subscription.price}
              billingCycle={subscription.billingCycle}
              nextBillingDate={subscription.nextBillingDate}
              category={subscription.category}
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

      {showAddForm && (
        <AddSubscriptionForm
          onSubmit={handleAddSubscription}
          onClose={() => setShowAddForm(false)}
        />
      )}
    </div>
  );
}