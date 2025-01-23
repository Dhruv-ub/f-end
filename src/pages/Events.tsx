import { useState } from 'react';
import { EventCard } from '../components/EventCard';
import { Button } from '../components/ui/Button';
import { Calendar, Filter} from 'lucide-react';
// MapPin

const allEvents = [
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
  },
  {
    id: '3',
    title: 'AI & Machine Learning Workshop',
    description: 'Learn about the latest developments in AI and machine learning from industry experts.',
    date: 'March 20, 2024',
    venue: 'Tech Hub Downtown',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
    attendees: 200,
    organizer: {
      name: 'AI Research Lab',
      type: 'company',
      avatar: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=50&h=50&fit=crop'
    }
  },
  {
    id: '4',
    title: 'Startup Networking Mixer',
    description: 'Network with fellow entrepreneurs and investors in a casual setting.',
    date: 'April 15, 2024',
    venue: 'Innovation Center',
    category: 'Networking',
    image: 'https://images.unsplash.com/photo-1511795409834-432f7b1728f2?auto=format&fit=crop&q=80',
    attendees: 150,
    organizer: {
      name: 'Startup Incubator',
      type: 'company',
      avatar: 'https://images.unsplash.com/photo-1565339119519-c9895a030719?w=50&h=50&fit=crop'
    }
  }
];

const categories = ['All', 'Technology', 'Career', 'Education', 'Networking'];

export function Events() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [view, setView] = useState<'grid' | 'calendar'>('grid');

  const filteredEvents = selectedCategory === 'All'
    ? allEvents
    : allEvents.filter(event => event.category === selectedCategory);

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold">Events</h1>
              <p className="text-gray-600">Discover and join amazing events</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={view === 'grid' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setView('grid')}
              >
                Grid
              </Button>
              <Button
                variant={view === 'calendar' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setView('calendar')}
              >
                <Calendar className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
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

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onRegister={(id) => console.log('Register for event:', id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}