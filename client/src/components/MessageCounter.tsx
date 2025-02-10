import { useState, useEffect } from "react";

export function MessageCounter() {
  const [messageCount, setMessageCount] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setMessageCount(42);
    setLoading(false);
  }, []);

  const progress = (messageCount / 100) * 100;

  return (
    <div className="text-center p-4 border border-primary/20 rounded-lg bg-primary/5 mt-4">
      <p className="text-sm text-muted-foreground mb-2">
        Progress towards softcap
      </p>
      <div className="w-full bg-primary/10 rounded-full h-4 mb-2">
        <div
          className="bg-primary h-full rounded-full transition-all duration-500"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>
      <p className="text-sm text-primary">
        {loading
          ? "Loading..."
          : `${messageCount} / 100 messages (${Math.floor(progress)}%)`}
      </p>
    </div>
  );
}
