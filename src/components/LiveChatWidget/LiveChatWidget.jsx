import React, { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const LiveChatWidget = () => {
  const tawkMessengerRef = useRef(null);

  const onLoad = () => {
    console.log("Tawk.to chat widget loaded!");
  };

  return (
    <div>
      <TawkMessengerReact
        propertyId={import.meta.env.VITE_TAWKTO_PROPERTY_ID}
        widgetId={import.meta.env.VITE_TAWKTO_WIDGET_ID}
        onLoad={onLoad}
        ref={tawkMessengerRef}
      />
    </div>
  );
};

export default LiveChatWidget;
