export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  venue: string;
  organizer: {
    name: string;
    type: 'college' | 'company';
    avatar: string;
  };
  category: string;
  image: string;
  attendees: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'professional' | 'organization' | 'admin';
  avatar: string;
}

export interface DashboardStats {
  totalEvents: number;
  registeredEvents: number;
  upcomingEvents: number;
}