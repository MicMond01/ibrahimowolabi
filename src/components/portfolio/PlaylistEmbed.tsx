import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Play, VolumeX } from "lucide-react";

/**
 * The public playlist this block plays:
 * "Ibrahim Owolabi | Interviews and Media Appearances."
 *
 * Nothing is requested from YouTube until the block scrolls into view, so the
 * embed costs the initial page load nothing. Playback then starts on its own —
 * muted, because every browser blocks autoplay with sound. The "tap for sound"
 * pill drives the player over postMessage (hence `enablejsapi=1`); the player's
 * own controls stay available as well.
 *
 * Visitors with reduced motion are never autoplayed at — they get the poster and
 * the (un-animated) play button, and playback starts on click instead.
 */
const PLAYLIST_ID = "PLQ4ui_CkOJTQ";
/** First video in the playlist — its thumbnail stands in as the poster. */
const POSTER_VIDEO_ID = "xfCRME9bknI";

const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`;
const POSTER_URL = `https://i.ytimg.com/vi/${POSTER_VIDEO_ID}/maxresdefault.jpg`;
const POSTER_FALLBACK_URL = `https://i.ytimg.com/vi/${POSTER_VIDEO_ID}/hqdefault.jpg`;

type Mode = "idle" | "auto" | "click";

function embedUrl(muted: boolean, origin: string) {
  const params = new URLSearchParams({
    list: PLAYLIST_ID,
    autoplay: "1",
    mute: muted ? "1" : "0",
    rel: "0",
    playsinline: "1",
    enablejsapi: "1",
  });
  if (origin) params.set("origin", origin);
  return `https://www.youtube.com/embed/videoseries?${params.toString()}`;
}

export function PlaylistEmbed() {
  const boxRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [mode, setMode] = useState<Mode>("idle");
  const [ready, setReady] = useState(false);
  const [muted, setMuted] = useState(true);
  const [posterSrc, setPosterSrc] = useState<string | null>(POSTER_URL);
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin);

    const el = boxRef.current;
    if (!el) return;

    // Reduced motion: no autoplay. The poster and play button carry the section,
    // and playback waits for a deliberate click.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setMode((m) => (m === "idle" ? "auto" : m));
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.4, rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const src = useMemo(() => embedUrl(mode !== "click", origin), [mode, origin]);

  const command = (func: string, args: unknown[] = []) => {
    frameRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args }),
      "*",
    );
  };

  const unmute = () => {
    command("unMute");
    command("setVolume", [65]);
    setMuted(false);
  };

  const active = mode !== "idle";

  return (
    <div ref={boxRef} className="mt-12 w-full sm:mt-16">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="eyebrow">Interviews &amp; appearances</p>
          <p className="mt-2 font-display text-xl leading-snug text-navy">
            Watch the conversations
          </p>
        </div>
        <a
          href={PLAYLIST_URL}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-burgundy"
        >
          Open playlist
          <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className="relative mt-5 aspect-video w-full overflow-hidden rounded-2xl bg-navy-ink shadow-lift ring-1 ring-navy/10">
        {/* Poster — stays put until the player reports itself loaded, so there is
            never a black flash while the iframe spins up. */}
        <div
          aria-hidden
          className={`absolute inset-0 transition-opacity duration-700 ${
            ready ? "opacity-0" : "opacity-100"
          }`}
        >
          {posterSrc && (
            <img
              src={posterSrc}
              // maxres isn't available for every video — step down once, then
              // fall back to the flat navy ground already behind us.
              onError={() =>
                setPosterSrc((s) => (s === POSTER_URL ? POSTER_FALLBACK_URL : null))
              }
              alt=""
              decoding="async"
              loading="lazy"
              className="size-full object-cover"
            />
          )}
          {/* the cover: a light black wash under a bottom-weighted gradient */}
          <span className="absolute inset-0 bg-black/25" />
          <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        {active && (
          <iframe
            ref={frameRef}
            src={src}
            title="Ibrahim Owolabi — interviews and media appearances"
            onLoad={() => setReady(true)}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 size-full border-0"
          />
        )}

        {/* Play affordance. An anchor, not a button: with JavaScript unavailable
            it still opens the playlist on YouTube. */}
        {!active && (
          <a
            href={PLAYLIST_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="Play the interviews and media appearances playlist"
            onClick={(e) => {
              e.preventDefault();
              setMuted(false);
              setMode("click");
            }}
            className="group absolute inset-0 grid place-items-center"
          >
            <span className="relative grid size-24 place-items-center sm:size-28">
              <span
                aria-hidden
                className="media-play-ring absolute inset-0 rounded-full border border-paper/45"
              />
              <span
                aria-hidden
                className="media-play-ring absolute inset-0 rounded-full border border-paper/25"
                style={{ animationDelay: "1.2s" }}
              />
              <span className="media-play-pulse relative grid size-20 place-items-center rounded-full border-2 border-paper/90 bg-black/10 backdrop-blur-[2px] transition-all duration-300 group-hover:scale-105 group-hover:border-paper group-hover:bg-black/30 sm:size-24">
                <Play
                  className="size-8 translate-x-0.5 fill-current text-paper sm:size-9"
                  strokeWidth={1}
                />
              </span>
            </span>
          </a>
        )}

        {muted && mode === "auto" && (
          <button
            type="button"
            onClick={unmute}
            className="absolute bottom-14 left-3 z-10 inline-flex items-center gap-2 rounded-full bg-navy/85 px-3.5 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-paper backdrop-blur-sm transition-colors hover:bg-burgundy"
          >
            <VolumeX className="size-3.5" />
            Tap for sound
          </button>
        )}
      </div>
    </div>
  );
}
