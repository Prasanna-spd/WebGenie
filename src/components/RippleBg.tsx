// components/RippleBackground.tsx
const RippleBackground = () => {
    return (
      <div className="fixed inset-0 z-0 overflow-hidden">
       <div className="fixed inset-0 z-0">
        <div className="ripple-circle"></div>
        <div className="ripple-circle delay"></div>
      </div>
      </div>
    );
  };
  
  export default RippleBackground;
  