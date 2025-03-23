"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const notificationMessages = {
  auth_required: "Access denied. Please sign in to view the dashboard.",
};

// This is the component that uses the hook
function NotificationContent() {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    const notification = searchParams.get("notification");
    if (notification) {
      setMessage(
        notificationMessages[notification as keyof typeof notificationMessages]
      );
      setVisible(true);

      // Auto-hide after 5 seconds
      const timer = setTimeout(() => {
        setVisible(false);

        // Clean up URL parameter after notification is dismissed
        const url = new URL(window.location.href);
        url.searchParams.delete("notification");
        window.history.replaceState({}, "", url);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  if (!visible) return null;

  return (
    <div className="fixed top-4 right-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-md max-w-md z-50">
      <div className="flex">
        <div className="py-1">
          <svg
            className="h-6 w-6 text-red-500 mr-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <div>
          <p className="font-bold">{message}</p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="ml-auto text-red-500 hover:text-red-700"
        >
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// This is the main component that wraps the hook-using component in Suspense
export default function Notification() {
  return (
    <Suspense fallback={null}>
      <NotificationContent />
    </Suspense>
  );
}
