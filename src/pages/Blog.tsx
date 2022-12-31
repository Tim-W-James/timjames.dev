import Button from "@components/Button";
import cn from "@styles/cssUtils";
import { SiDevdotto, SiMedium } from "react-icons/si";

const Contact = () => (
  <div className={cn("flex mx-auto px-8 mt-8", "flex-col")}>
    <section className={cn("text-left text-xl")}>
      <div
        className={cn(
          "flex gap-4 justify-around items-center mt-4 max-w-2xl mx-auto",
          "flex-row",
          "flex-wrap"
        )}
      >
        <Button
          icon={<SiDevdotto />}
          isLight
          label={"DEV.to Blog"}
          to="https://dev.to/timwjames"
          tooltip="Find my personal blog @timwjames"
        />
        <Button
          icon={<SiMedium />}
          isLight
          label={"Medium Blog"}
          to="https://medium.com/@twjames"
          tooltip="Find my professional @twjames"
        />
      </div>
    </section>
  </div>
);

export default Contact;
