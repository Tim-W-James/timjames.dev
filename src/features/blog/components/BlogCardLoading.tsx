import cn from "@styles/cssUtils";

const LoadingCard: React.FC<{
  isCarouselItem?: boolean;
}> = ({ isCarouselItem }) => (
  <div
    className={cn(
      "border p-4",
      "border-dark-accent",
      "acrylic-light",
      "rounded-lg",
      isCarouselItem ? "min-w-sm snap-center" : "w-full max-w-sm"
    )}
  >
    <div className={cn("flex gap-4", "flex-col", "animate-pulse")}>
      <div className={cn("aspect-wide", "bg-slate-700 rounded col-span-1")} />
      <div className={cn("h-16", "mt-10", "bg-slate-700 rounded col-span-1")} />
      <hr className={cn("radial-border")} />
      <div className={cn("grid gap-4", "grid-cols-5")}>
        {[...Array(5).keys()].map((key) => (
          <div
            className={cn("h-6 bg-slate-700 rounded col-span-1")}
            key={key}
          />
        ))}
      </div>
      <div className={cn("grid gap-4", "grid-cols-5")}>
        <div className={cn("h-4 bg-slate-700 rounded col-span-2")} />
        <div className={cn("h-4 col-span-2")} />
        <div className={cn("h-4 bg-slate-700 rounded col-span-1")} />
      </div>
    </div>
  </div>
);

export default LoadingCard;
