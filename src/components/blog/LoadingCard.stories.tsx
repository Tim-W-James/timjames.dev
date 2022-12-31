import cn from "@styles/cssUtils";
import LoadingCardComponent from "./LoadingCard";

export default {
  title: "Components/Blog/LoadingCard",
  component: LoadingCardComponent,
};

export const LoadingCard = () => (
  <div className={cn("p-8")}>
    <LoadingCardComponent />
  </div>
);
