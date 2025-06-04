// components/RippleBackground.tsx
const RippleBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="ripple-circle"></div>
      <div className="ripple-circle delay"></div>
      <div className="ripple-circle delay-2"></div>
    </div>
  );
};

export default RippleBackground;
