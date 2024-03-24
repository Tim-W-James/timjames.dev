import ContactForm from "@features/contactForm/components/ContactForm";
import contactFormOnSubmit, {
  contactFormOnSubmitDev,
} from "@features/contactForm/utils/submitFuncs";
import cn from "@styles/cssUtils";
import FadeIn from "react-fade-in";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiSpotify, SiSteam } from "react-icons/si";
import { HashLink } from "react-router-hash-link";

type SocialLinkProps = {
  icon: JSX.Element;
  body?: string;
  url: string;
  tooltip: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({
  icon,
  body,
  url,
  tooltip,
}) => (
  <a
    aria-label={body}
    href={url}
    rel="noreferrer"
    target="_blank"
    title={tooltip}
  >
    <div
      className={cn(
        "hover:text-light-accent active:text-dark-accent active:underline",
        "inline-flex",
        "items-center gap-1"
      )}
    >
      {icon}
      <p className={cn("hyphens-none")}>{body}</p>
    </div>
  </a>
);

const Contact = () => {
  const copyFragment = useCallback(
    () => navigator.clipboard.writeText(`${location.href}#social-links`),
    []
  );

  return (
    <div>
      <FadeIn transitionDuration={200}>
        <ContactForm
          onSubmit={
            import.meta.env.DEV ? contactFormOnSubmitDev : contactFormOnSubmit
          }
          showPromptOnClose
        />
        <h2
          className={cn("mx-auto mt-8 w-fit self-center text-center")}
          id="social-links"
        >
          <HashLink
            className={cn("hash-link")}
            onClick={copyFragment}
            to="#social-links"
          >
            Social Links{" "}
          </HashLink>
          <hr className={cn("radial-border mb-4")} />
        </h2>
        <section
          aria-labelledby="social-links"
          className={cn(
            "mx-auto mt-8 grid w-fit gap-4 self-center text-center text-xl",
            "grid-cols-2"
          )}
        >
          <SocialLink
            body="LinkedIn"
            icon={<BsLinkedin />}
            tooltip="timothy-william-james"
            url="https://www.linkedin.com/in/timothy-william-james/"
          />
          <SocialLink
            body="GitHub"
            icon={<BsGithub />}
            tooltip="Tim-W-James"
            url="https://github.com/Tim-W-James"
          />
          <SocialLink
            body="Twitter"
            icon={<FaXTwitter />}
            tooltip="@TimWJames"
            url="https://twitter.com/TimWJames"
          />
          <SocialLink
            body="Facebook"
            icon={<BsFacebook />}
            tooltip="TimJames9800"
            url="https://www.facebook.com/TimJames9800/"
          />
          <SocialLink
            body="Steam"
            icon={<SiSteam />}
            tooltip="ExplosiveFridge"
            url="https://steamcommunity.com/id/ExplosiveFridge"
          />
          <SocialLink
            body="Spotify"
            icon={<SiSpotify />}
            tooltip="TimJ"
            url="https://open.spotify.com/user/22xzbbohotkdpq5wfipvefk4y"
          />
        </section>
        <div className={cn("mt-4 text-center text-xl", "basis-min-content")}>
          <MdEmail /> Send me an email:{" "}
          <a
            className={cn("link", "hyphens-none")}
            href="mailto:tim.james.work9800@gmail.com"
            rel="noreferrer"
            target="_blank"
            title="tim.james.work9800@gmail.com"
          >
            tim.james.work9800@gmail.com
          </a>
        </div>
        <div className={cn("mt-4 text-center text-xl", "basis-min-content")}>
          ABN:{" "}
          <a
            className={cn("link", "hyphens-none")}
            href="https://abr.business.gov.au/ABN/View?id=31445198482"
            rel="noreferrer"
            target="_blank"
            title="ABN Lookup"
          >
            31 445 198 482
          </a>
        </div>
      </FadeIn>
    </div>
  );
};

export default Contact;
