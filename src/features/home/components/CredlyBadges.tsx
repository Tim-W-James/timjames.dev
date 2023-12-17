import cn from "@styles/cssUtils";
import { Suspense } from "react";

const CredlyBadges: React.FC<{ badgeIds: readonly string[] }> = ({
  badgeIds,
}) => {
  const badgeStyles = [
    "acrylic-white",
    "rounded-lg",
    "shrink",
    "grow",
    "basis-0",
    "w-auto",
    "h-auto",
  ] as const;
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "//cdn.credly.com/assets/utilities/embed.js";

    document.body.appendChild(script);

    script.onload = () => {
      badgeIds.forEach((badgeId) => {
        const iframe = document.getElementById(`embedded-badge-${badgeId}`);
        // append class name
        if (iframe !== null) {
          iframe.className = cn(...badgeStyles, "animate-pulse");
          iframe.onload = () => {
            iframe.className = cn(...badgeStyles);
          };
        }
      });
    };

    return () => {
      // Cleanup if needed (e.g., remove the script element).
      document.body.removeChild(script);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div
        className={cn("flex items-center justify-between gap-2", "flex-wrap")}
      >
        {badgeIds.map((badgeId, index) => (
          <div
            data-iframe-height="240"
            data-iframe-width="150"
            data-share-badge-host="https://www.credly.com"
            data-share-badge-id={badgeId}
            key={`${index}-${badgeId}`}
          />
        ))}
      </div>
    </Suspense>
  );
};

export default CredlyBadges;
