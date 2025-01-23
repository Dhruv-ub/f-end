import  { useState } from 'react';
import { EventCard } from '../components/EventCard';
import { Button } from '../components/ui/Button';
import {  Filter, Search as SearchIcon } from 'lucide-react';

const searchResults = [
  {
    id: '1',
    title: 'Tech Conference 2024',
    description: 'Join us for the biggest tech conference of the year featuring industry leaders and innovative workshops.',
    date: 'March 15, 2024',
    venue: 'Silicon Valley Convention Center',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    attendees: 500,
    organizer: {
      name: 'Tech Industries Inc.',
      type: 'company',
      avatar: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop'
    }
  },
  {
    id: '2',
    title: 'Career Fair Spring 2024',
    description: 'Connect with top employers and discover exciting career opportunities across various industries.',
    date: 'April 5, 2024',
    venue: 'University Main Campus',
    category: 'Career',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80',
    attendees: 1000,
    organizer: {
      name: 'State University',
      type: 'college',
      avatar: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=50&h=50&fit=crop'
    }
  }
];

export function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Technology', 'Career', 'Education', 'Networking'];

  return (
    <div className="pt-16">
      {/* Search Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search events, categories, or locations..."
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Filters */}
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Search Results</h2>
          <Button variant="outline" size="sm">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {searchResults.map((event) => (
            <EventCard
              key={event.id}
              event = {event}
              onRegister={(id) => console.log('Register for event:', id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}