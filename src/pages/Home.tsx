import { Search } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { EventCard } from '../components/EventCard';

const featuredEvents = [
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

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-r from-gray-500 to-gray-700
 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">
              Discover Amazing Events Near You
            </h1>
            <p className="text-lg text-blue-100 mb-8">
              Join thousands of people in educational, professional, and networking events tailored for you.
            </p>
            
            {/* Search Bar */}
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events, categories, or locations..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900"
                />
              </div>
              <Button size="lg">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Technology', 'Career', 'Education', 'Networking'].map((category) => (
              <button
                key={category}
                className="p-6 text-center rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium">{category}</h3>
                <p className="text-sm text-gray-500">View Events</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Featured Events</h2>
            <Button variant="outline">View All</Button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onRegister={(id) => console.log('Register for event:', id)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}