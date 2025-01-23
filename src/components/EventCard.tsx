import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';
import type { Event } from '../types';
import { Button } from './ui/Button';

interface EventCardProps {
  event: Event;
  onRegister?: (eventId: string) => void;
}

export function EventCard({ event, onRegister }: EventCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
            {event.category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Users className="w-4 h-4" />
            <span>{event.attendees} attending</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={event.organizer.avatar}
              alt={event.organizer.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm font-medium">{event.organizer.name}</p>
              <p className="text-xs text-gray-500 capitalize">{event.organizer.type}</p>
            </div>
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={() => onRegister?.(event.id)}
          >
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}