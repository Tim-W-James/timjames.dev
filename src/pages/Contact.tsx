import ContactForm from "@features/contactForm/components/ContactForm";
import contactFormOnSubmit, {
  contactFormOnSubmitDev,
} from "@features/contactForm/utils/submitFuncs";
import cn from "@styles/cssUtils";
import FadeIn from "react-fade-in";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiSpotify, SiSteam } from "react-icons/si";
import { HashLink } from "react-router-hash-link";

const SocialLink: React.FC<{
  icon: JSX.Element;
  body: string;
  url: string;
  tooltip: string;
}> = ({ icon, body, url, tooltip }) => (
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

const Contact = () => (
  <div>
    <FadeIn transitionDuration={200}>
      <ContactForm
        onSubmit={
          import.meta.env.DEV ? contactFormOnSubmitDev : contactFormOnSubmit
        }
        showPromptOnClose
      />
      <h2
        className={cn("text-center self-center mt-8 mx-auto w-fit")}
        id="social-links"
      >
        <HashLink
          className={cn("hash-link")}
          onClick={() =>
            navigator.clipboard.writeText(`${location.href}#social-links`)
          }
          to={"#social-links"}
        >
          Social Links{" "}
        </HashLink>
        <hr className={cn("radial-border mb-4")} />
      </h2>
      <section
        aria-labelledby="social-links"
        className={cn(
          "text-center self-center mt-8 mx-auto w-fit text-xl grid gap-4",
          "grid-cols-2"
        )}
      >
        <SocialLink
          body={"LinkedIn"}
          icon={<BsLinkedin />}
          tooltip={"timothy-william-james"}
          url={"https://www.linkedin.com/in/timothy-william-james/"}
        />
        <SocialLink
          body={"GitHub"}
          icon={<BsGithub />}
          tooltip={"Tim-W-James"}
          url={"https://github.com/Tim-W-James"}
        />
        <SocialLink
          body={"Twitter"}
          icon={<BsTwitter />}
          tooltip={"@TimWJames"}
          url={"https://twitter.com/TimWJames"}
        />
        <SocialLink
          body={"Facebook"}
          icon={<BsFacebook />}
          tooltip={"TimJames9800"}
          url={"https://www.facebook.com/TimJames9800/"}
        />
        <SocialLink
          body={"Steam"}
          icon={<SiSteam />}
          tooltip={"ExplosiveFridge"}
          url={"https://steamcommunity.com/id/ExplosiveFridge"}
        />
        <SocialLink
          body={"Spotify"}
          icon={<SiSpotify />}
          tooltip={"TimJ"}
          url={"https://open.spotify.com/user/22xzbbohotkdpq5wfipvefk4y"}
        />
      </section>
      <div className={cn("text-xl text-center mt-4", "basis-min-content")}>
        <MdEmail /> Send me an email:{" "}
        <a
          className={cn("link", "hyphens-none")}
          href="mailto:tim.james.work9800@gmail.com"
          rel="noreferrer"
          target="_blank"
          title={"tim.james.work9800@gmail.com"}
        >
          tim.james.work9800@gmail.com
        </a>
      </div>
    </FadeIn>
  </div>
);

export default Contact;
