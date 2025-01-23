import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const ProfileHeader = () => {
  return (
    <>
      <div className="absolute top-20 left-4 z-50 w-full max-w-[300px] md:max-w-none">
        <div className="flex items-center gap-2 bg-white/10 p-3 rounded-lg backdrop-blur-md">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-white">RD</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xl md:text-2xl font-bold text-white">Rodrigo Dev</span>
            <span className="text-sm text-white/80 -mt-1">MT</span>
          </div>
        </div>
      </div>

      <div className="absolute top-16 md:top-8 right-4 z-50">
        <div className="bg-white/10 p-3 rounded-full backdrop-blur-md">
          <Avatar className="w-16 h-16 md:w-24 md:h-24 border-4 border-white/20 hover:scale-105 transition-transform duration-300">
            <AvatarImage src="/lovable-uploads/4a344239-9e8e-497e-b498-026599010a26.png" alt="Rodrigo Dev" />
            <AvatarFallback>RD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;