import TypeWriter from "./TypeWriter";

// components/RippleBackground.tsx
const RippleBackground = () => {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="fixed inset-0 z-0">
          <div className="ripple-circle"></div>
          <div className="ripple-circle delay"></div>
          <div className="ripple-circle delay-2"></div>
        </div>
      </div>

      <div className="z-10 flex flex-col items-center text-center space-y-4">
        <div className="mb-12">
          <h1 className="text-7xl font-bold">Welcome to Web Genie</h1>
          <p className="mt-4 text-lg">Your wish-built web presence ✨</p>
        </div>

        <div className="text-2xl font-semibold h-12">
          <TypeWriter />
        </div>
      </div>
    </main>
  );
};

export default RippleBackground;
