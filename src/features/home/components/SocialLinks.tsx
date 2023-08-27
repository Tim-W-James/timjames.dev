import Button from "@components/buttons/Button";
import cn from "@styles/cssUtils";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

type SocialLinksProps = { shouldShrinkButtons: boolean };

const SocialLinks: React.FC<SocialLinksProps> = ({ shouldShrinkButtons }) => (
  <section
    aria-label="Social Links"
    className={cn(
      "mx-auto mt-4 flex max-w-2xl items-center justify-around gap-4",
      "flex-row",
      "flex-wrap"
    )}
  >
    <Button
      icon={<BsLinkedin className={cn({ "text-4xl": shouldShrinkButtons })} />}
      isLabelHidden={shouldShrinkButtons}
      isLight
      label="Linkedin"
      to="https://www.linkedin.com/in/timothy-william-james/"
      tooltip="Find me on Linkedin"
    />
    <Button
      icon={<BsGithub className={cn({ "text-4xl": shouldShrinkButtons })} />}
      isLabelHidden={shouldShrinkButtons}
      isLight
      label="GitHub"
      to="https://github.com/Tim-W-James"
      tooltip="Find my projects on GitHub"
    />
    <Button
      icon={<BsTwitter className={cn({ "text-4xl": shouldShrinkButtons })} />}
      isLabelHidden={shouldShrinkButtons}
      isLight
      label="Twitter"
      to="https://twitter.com/TimWJames"
      tooltip="Follow me on Twitter @TimWJames"
    />
  </section>
);

export default SocialLinks;
