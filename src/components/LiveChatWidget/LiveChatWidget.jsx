import React, { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

const LiveChatWidget = () => {
  const tawkMessengerRef = useRef(null);

  return (
    <div>
      <TawkMessengerReact
        propertyId="667ff4f0eaf3bd8d4d164efd"
        widgetId="1i1jvvdef"
        ref={tawkMessengerRef}
      />
    </div>
  );
};

export default LiveChatWidget;
