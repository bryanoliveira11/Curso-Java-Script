import { motion } from "framer-motion";
import React from "react";

interface ToastNotificationProps {
  message: string;
}

export default function ToastNotification({ message }: ToastNotificationProps) {
  const [visible, setVisible] = React.useState(false);

  const showToast = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  };

  return (
    <div className="flex flex-col items-center">
      <button className="btn btn-outline btn-success" onClick={showToast}>
        Show Notification
      </button>

      {visible && (
        <motion.div
          className="fixed p-4 top-4 right-4 bg-green-300
         text-black font-semibold rounded"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
        >
          <h2>{message}</h2>
        </motion.div>
      )}
    </div>
  );
}
