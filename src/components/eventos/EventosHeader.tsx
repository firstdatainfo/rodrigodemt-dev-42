import { Ticket } from 'lucide-react';

const EventosHeader = () => {
  return (
    <div className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-xl hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div className="relative">
        <Ticket className="w-8 h-8 text-white" />
      </div>
      <span className="text-2xl font-bold text-white tracking-wider">
        Isa<span className="text-purple-200">Pass</span>
      </span>
    </div>
  );
};

export default EventosHeader;