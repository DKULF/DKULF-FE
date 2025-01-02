import { NOTICE } from '@/constants/message';
import { Phone } from 'lucide-react';

export const ContactCard = () => {
  return (
    <div className="w-full bg-white rounded-xl p-[10px] flex justify-between">
      <div className="flex items-start space-y-1 flex-col">
        <div className="flex items-center space-x-2">
          <Phone className="text-blue-600 w-4 h-4" />
          <span className="font-semibold text-sm text-black">
            {NOTICE.CONTACT}
          </span>
        </div>
        <span className="font-semibold text-sm text-blue-600">
          {NOTICE.CONTACT_NUMBER}
        </span>
      </div>
      <div />
    </div>
  );
};
