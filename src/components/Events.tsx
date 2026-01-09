import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Trophy, Video, Users, ArrowRight, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contests = [
  {
    id: 1,
    title: 'CodeSprint Challenge 2025',
    description: 'Test your algorithmic skills in this 3-hour coding challenge',
    date: 'Jan 20, 2025',
    time: '6:00 PM IST',
    participants: '250+',
    prize: '₹25,000',
    status: 'upcoming',
  },
  {
    id: 2,
    title: 'Data Structures Marathon',
    description: 'Master DSA concepts through competitive problem-solving',
    date: 'Feb 5, 2025',
    time: '4:00 PM IST',
    participants: '180+',
    prize: '₹15,000',
    status: 'upcoming',
  },
  {
    id: 3,
    title: 'Python Hackathon',
    description: 'Build innovative projects using Python in 24 hours',
    date: 'Feb 15, 2025',
    time: '9:00 AM IST',
    participants: '100 teams',
    prize: '₹50,000',
    status: 'upcoming',
  },
];

const webinars = [
  {
    id: 1,
    title: 'Career in Tech: From Zero to Hero',
    description: 'Industry experts share their journey and tips for success',
    date: 'Jan 18, 2025',
    time: '7:00 PM IST',
    speaker: 'Tech Industry Panel',
    attendees: '500+',
    status: 'upcoming',
  },
  {
    id: 2,
    title: 'AI & Machine Learning Fundamentals',
    description: 'Introduction to AI/ML concepts and career opportunities',
    date: 'Jan 25, 2025',
    time: '6:30 PM IST',
    speaker: 'Dr. Priya Sharma',
    attendees: '300+',
    status: 'upcoming',
  },
  {
    id: 3,
    title: 'Building Your First Web App',
    description: 'Live coding session: Create a full-stack application',
    date: 'Feb 1, 2025',
    time: '5:00 PM IST',
    speaker: 'Rahul Kumar',
    attendees: '400+',
    status: 'upcoming',
  },
];

const Events = () => {
  const [activeTab, setActiveTab] = useState<'contests' | 'webinars'>('contests');

  return (
    <section id="events" className="py-20 md:py-32 relative bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-medium mb-4 block">EVENTS</span>
          <h2 className="section-heading mb-4">
            Contests & <span className="gradient-text">Webinars</span>
          </h2>
          <p className="section-subheading">
            Participate in exciting coding challenges and learn from industry experts
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-xl bg-card border border-border">
            <button
              onClick={() => setActiveTab('contests')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all cursor-pointer ${
                activeTab === 'contests'
                  ? 'bg-secondary text-secondary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Trophy className="w-4 h-4" />
              Contests
            </button>
            <button
              onClick={() => setActiveTab('webinars')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all cursor-pointer ${
                activeTab === 'webinars'
                  ? 'bg-secondary text-secondary-foreground shadow-lg'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Video className="w-4 h-4" />
              Webinars
            </button>
          </div>
        </div>

        {/* Event Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {(activeTab === 'contests' ? contests : webinars).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 group cursor-pointer"
              >
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary">
                    Upcoming
                  </span>
                  {activeTab === 'contests' && (
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Trophy className="w-4 h-4" />
                      <span className="text-sm font-medium">{(event as typeof contests[0]).prize}</span>
                    </div>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold font-display mb-2 group-hover:text-secondary transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{event.description}</p>

                {/* Event Details */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-secondary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-secondary" />
                    <span>
                      {activeTab === 'contests'
                        ? `${(event as typeof contests[0]).participants} Participants`
                        : `${(event as typeof webinars[0]).attendees} Attendees`}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full group-hover:border-secondary group-hover:text-secondary">
                  Register Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Events;
