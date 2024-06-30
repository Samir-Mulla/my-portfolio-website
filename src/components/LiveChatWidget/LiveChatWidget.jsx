import React, { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const LiveChatWidget = () => {
  const tawkMessengerRef = useRef(null);

  const handleMinimize = () => {
    if (tawkMessengerRef.current) {
      tawkMessengerRef.current.minimize();
    }
  };

  const onLoad = () => {
    console.log("Tawk.to chat widget loaded!");
  };

  return (
    <div>
      <TawkMessengerReact
        propertyId={import.meta.env.VITE_TAWKTO_PROPERTY_ID}
        widgetId="1i1jvvdef"
        onLoad={onLoad}
        ref={tawkMessengerRef}
      />
    </div>
  );
};

export default LiveChatWidget;
