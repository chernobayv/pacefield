import { useState } from 'react';
import imgImage1 from "../assets/logo.png";

export default function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      // In a real app, this would send to a backend/database
      console.log('Email submitted:', email);
    }
  };

  return (
    <div className="bg-[#f7f7ea] min-h-screen w-full flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl flex flex-col items-center">
        {/* Green star image */}
          <div className="mb-12 md:mb-16">
            <img 
    alt="Decorative star" 
    className="h-[200px] md:h-[274px] w-auto object-contain"
    src={imgImage1} 
  />
</div>

        {/* Waitlist form */}
        <div className="w-full max-w-md px-4">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <p className="font-['Inter',sans-serif] font-normal leading-normal mb-3 not-italic text-[#3c4e2b] text-[12px] md:text-[14px] whitespace-nowrap">
                Sign up for the wait-list →
              </p>
              <div className="relative w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-white border border-black border-solid h-[40px] md:h-[50px] w-full rounded-[15px] md:rounded-[20px] px-5 text-[14px] md:text-[16px] outline-none focus:border-[#3c4e2b] focus:border-2 transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#3c4e2b] text-white px-4 md:px-6 py-1.5 md:py-2 rounded-[10px] md:rounded-[12px] text-[12px] md:text-[14px] font-medium hover:bg-[#2d3a20] transition-colors"
                >
                  Join
                </button>
              </div>
            </form>
          ) : (
            <div className="flex flex-col items-center">
              <p className="font-['Inter',sans-serif] font-normal leading-normal mb-3 text-[#3c4e2b] text-[14px] md:text-[16px] text-center">
                ✓ You're on the list!
              </p>
              <p className="text-[#3c4e2b] text-[12px] md:text-[14px] text-center opacity-70">
                We'll notify you at <strong>{email}</strong>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
