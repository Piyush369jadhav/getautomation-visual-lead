import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center splash-screen">
      <img
        src={logo}
        alt="Automation Logo"
        className="splash-logo"
      />
    </div>
  );
};

export default SplashScreen;
