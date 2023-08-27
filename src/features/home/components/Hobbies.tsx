import cn from "@styles/cssUtils";
import { HashLink } from "react-router-hash-link";

const Hobbies: React.FC = () => {
  const copyFragment = useCallback(
    () =>
      navigator.clipboard.writeText(
        `${location.href.split("#")[0] ?? ""}#hobbies`
      ),
    []
  );
  return (
    <div
      className={cn(
        "mx-auto mt-8 flex place-content-center items-center px-8",
        "flex-col"
      )}
    >
      <h2 id="hobbies">
        <HashLink
          className={cn("hash-link")}
          onClick={copyFragment}
          to="#hobbies"
        >
          What I do When I&apos;m not Writing Code{" "}
        </HashLink>
        <hr className={cn("radial-border")} />
      </h2>
      <br />
      <section aria-labelledby="hobbies">
        <ul className={cn("list-disc text-left text-xl")}>
          <li>
            ✨ <b className={cn("font-bold")}>Interests</b>: Hiking, Astronomy,
            Creative Writing, Philosophy, Guitar, Board Games
          </li>
          <li>
            🎮 <b className={cn("font-bold")}>Video Games</b>: Hollow Knight,
            Monster Hunter, Subnautica - Find me on{" "}
            <a
              aria-label="Steam"
              className={cn("link")}
              href="https://steamcommunity.com/id/ExplosiveFridge"
              rel="noreferrer"
              target="_blank"
              title="ExplosiveFridge"
            >
              Steam
            </a>
          </li>
          <li>
            🎥 <b className={cn("font-bold")}>Movies</b>: Bladerunner 2049, Mad
            Max: Fury Road, What We Do in the Shadows
          </li>
          <li>
            📺 <b className={cn("font-bold")}>TV Shows</b>: The Expanse,
            Breaking Bad, Game of Thrones
          </li>
          <li>
            📚 <b className={cn("font-bold")}>Books</b>: Dune
          </li>
          <li>
            🎵 <b className={cn("font-bold")}>Music</b>: Tame Impala - Find me
            on{" "}
            <a
              aria-label="Spotify"
              className={cn("link")}
              href="https://open.spotify.com/user/22xzbbohotkdpq5wfipvefk4y"
              rel="noreferrer"
              target="_blank"
              title="TimJ"
            >
              Spotify
            </a>
          </li>
          <li>
            🐈 <b className={cn("font-bold")}>Pets</b>: I have a cat called Max
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Hobbies;
