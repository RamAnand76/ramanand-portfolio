import { X } from 'lucide-react';

interface SuccessAlertProps {
  title: string;
  description: string;
  onClose: () => void;
}

const CheckIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


export default function SuccessAlert({ title, description, onClose }: SuccessAlertProps) {
  return (
    <div className="bg-black border border-[#054a31] rounded-lg p-4 max-w-sm w-full shadow-lg text-white">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 bg-[#054a31] p-2 rounded-full">
          <CheckIcon />
        </div>
        <div className="flex-grow">
          <h3 className="font-semibold text-[#6ee7b7]">{title}</h3>
          <p className="text-sm text-[#a7f3d0] mt-1">{description}</p>
        </div>
        <button onClick={onClose} className="text-[#6ee7b7] hover:text-white">
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
