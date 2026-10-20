"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";

const SESSION_KEY = "an-intro-seen";
const WORDMARK = ["ATELIER", "NÓRDEN"];

function delay(value: string): CSSProperties {
  return { "--d": value } as CSSProperties;
}

export function Intro() {
  const [hidden, setHidden] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const skipRef = useRef<HTMLButtonElement>(null);
  const finished = useRef(false);

  const finish = useCallback(() => {
    if (finished.current) return;
    finished.current = true;

    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // Si el almacenamiento no está disponible, la intro simplemente
      // se repetirá en la próxima carga completa.
    }

    document.documentElement.setAttribute("data-intro", "skip");
    document.body.classList.remove("intro-lock");
    setHidden(true);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    let seen = false;

    try {
      seen = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      seen = true;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reduceMotion || root.getAttribute("data-intro") === "skip") {
      finish();
      return;
    }

    document.body.classList.add("intro-lock");

    const node = rootRef.current;
    const handleAnimationEnd = (event: AnimationEvent) => {
      if (event.target === node && event.animationName === "intro-exit") {
        finish();
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        finish();
        return;
      }

      // La intro es modal: el foco no debe escaparse a la página que espera
      // detrás del overlay mientras la animación está en curso.
      if (event.key === "Tab") {
        event.preventDefault();
        skipRef.current?.focus();
      }
    };
    const fallback = window.setTimeout(finish, 4300);
    const focusTimer = window.setTimeout(() => rootRef.current?.focus(), 60);

    node?.addEventListener("animationend", handleAnimationEnd);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(fallback);
      window.clearTimeout(focusTimer);
      node?.removeEventListener("animationend", handleAnimationEnd);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("intro-lock");
    };
  }, [finish]);

  if (hidden) return null;

  return (
    <div
      ref={rootRef}
      className="intro"
      role="dialog"
      aria-modal="true"
      aria-label="Introducción de marca de ATELIER NÓRDEN"
      tabIndex={-1}
    >
      <div className="intro__paper" aria-hidden="true">
        <div className="intro__grid" />
        <PlanDrawing />
      </div>
      <ElevationDrawing />

      <div className="intro__photo" aria-hidden="true">
        <Image
          src="/images/hero-vivienda.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="intro__photo-veil" />
      </div>
      <div className="intro__scan" aria-hidden="true" />

      <div className="intro__meta intro__meta--top-left" aria-hidden="true">
        <span className="eyebrow">ATELIER NÓRDEN</span>
        <span className="eyebrow opacity-50">SEC. 01</span>
      </div>
      <div className="intro__meta intro__meta--bottom-left" aria-hidden="true">
        <span className="eyebrow">El espacio comienza con una línea</span>
      </div>
      <div className="intro__meta intro__meta--bottom-right" aria-hidden="true">
        <span className="eyebrow opacity-60">Planta · Alzado · Materia</span>
      </div>

      <div className="intro__identity">
        <p className="eyebrow mb-4 text-paper-light/70">Estudio de arquitectura · Colombia</p>
        <p className="sr-only">ATELIER NÓRDEN</p>
        <p className="intro__wordmark" aria-hidden="true">
          {WORDMARK.map((word) => (
            <span key={word} className="inline-flex">
              {word.split("").map((letter, index) => (
                <span
                  key={`${word}-${index}`}
                  className="intro__letter"
                  style={{ "--i": index + (word === "NÓRDEN" ? 8 : 0) } as CSSProperties}
                >
                  {letter}
                </span>
              ))}
            </span>
          ))}
        </p>
        <p className="intro__descriptor">Arquitectura · Espacio · Materialidad</p>
      </div>

      <button ref={skipRef} type="button" className="intro__skip" onClick={finish}>
        Saltar intro
        <span className="intro__skip-key" aria-hidden="true">
          Esc
        </span>
      </button>

      <div className="intro__progress" aria-hidden="true">
        <span />
      </div>
    </div>
  );
}

function PlanDrawing() {
  return (
    <svg
      className="intro__plan"
      viewBox="0 0 1000 640"
      fill="none"
      aria-hidden="true"
    >
      <g className="intro-annotation">
        <line x1="320" y1="64" x2="320" y2="588" />
        <line x1="104" y1="320" x2="900" y2="320" />
        <circle cx="320" cy="64" r="9" />
        <circle cx="900" cy="320" r="9" />
        <text x="310" y="50" className="intro-label">
          A
        </text>
        <text x="912" y="324" className="intro-label">
          B
        </text>
      </g>

      <g style={delay("0.1s")}>
        <path
          className="intro-line"
          pathLength={1}
          d="M190 500V180H430V140H810V420H740V500H560V520H430V500Z"
        />
        <path
          className="intro-line intro-line--accent"
          pathLength={1}
          d="M430 180V140H810V420H740V500H560V520"
        />
      </g>

      <g style={delay("0.25s")}>
        <path className="intro-line" pathLength={1} d="M430 180V300M430 500V520M600 140V420M740 420V500" />
        <path className="intro-line" pathLength={1} d="M190 300H390M460 300H590M600 300H740" />
        <path className="intro-line" pathLength={1} d="M600 420H810" />
      </g>

      <g style={delay("0.4s")}>
        <rect className="intro-fill" x="455" y="306" width="128" height="108" />
        <path className="intro-line" pathLength={1} d="M455 306H583V414H455Z" />
        <path className="intro-line intro-line--thin" pathLength={1} d="M455 306L583 414M583 306L455 414" />
        <circle className="intro-line" pathLength={1} cx="520" cy="360" r="22" />
        <path className="intro-line intro-line--thin" pathLength={1} d="M520 382V416M520 338V306M498 360H455M542 360H583" />
      </g>

      <g style={delay("0.5s")}>
        <path className="intro-line intro-line--thin" pathLength={1} d="M486 146V128M622 146V128M758 146V128" />
        <path className="intro-line" pathLength={1} d="M486 140V128M622 140V128M758 140V128" />
        <path className="intro-line intro-line--thin" pathLength={1} d="M810 210H822M810 320H822M810 400H822" />
        <path className="intro-line intro-line--thin" pathLength={1} d="M222 500V512M330 500V512M438 500V512" />
      </g>

      <g style={delay("0.56s")}>
        <path className="intro-line" pathLength={1} d="M240 300V355H330V300" />
        <path className="intro-line intro-line--thin" pathLength={1} d="M350 300A30 30 0 0 1 380 330" />
        <path className="intro-line" pathLength={1} d="M620 300A30 30 0 0 0 620 360" />
        <path className="intro-line intro-line--thin" pathLength={1} d="M645 315H700M645 335H700M645 355H700" />
        <path className="intro-line" pathLength={1} d="M610 160H700V220H610Z" />
        <path className="intro-line intro-line--thin" pathLength={1} d="M610 190H700M655 160V220" />
        <path className="intro-line" pathLength={1} d="M450 355H560M450 380H560M450 405H560" />
      </g>

      <g style={delay("0.62s")}>
        <line className="intro-line" pathLength={1} x1="430" y1="108" x2="810" y2="108" />
        <line className="intro-line intro-line--thin" pathLength={1} x1="430" y1="100" x2="430" y2="116" />
        <line className="intro-line intro-line--thin" pathLength={1} x1="810" y1="100" x2="810" y2="116" />
        <line className="intro-line" pathLength={1} x1="150" y1="140" x2="150" y2="520" />
        <line className="intro-line intro-line--thin" pathLength={1} x1="142" y1="140" x2="158" y2="140" />
        <line className="intro-line intro-line--thin" pathLength={1} x1="142" y1="520" x2="158" y2="520" />
      </g>

      <g className="intro-label" aria-hidden="true">
        <text x="606" y="98" className="intro-label intro-label--muted">
          12.40
        </text>
        <text x="116" y="336" className="intro-label intro-label--muted" transform="rotate(-90 116 336)">
          9.60
        </text>
        <text x="212" y="352" className="intro-label">
          ESTAR
        </text>
        <text x="645" y="255" className="intro-label">
          COCINA
        </text>
        <text x="628" y="378" className="intro-label">
          DORMITORIO
        </text>
        <text x="490" y="366" className="intro-label intro-label--accent">
          PATIO
        </text>
        <text x="228" y="474" className="intro-label">
          TERRAZA
        </text>
        <text x="783" y="558" className="intro-label intro-label--muted">
          E 1:100
        </text>
      </g>

      <g className="intro-label" aria-hidden="true">
        <path className="intro-line intro-line--thin" pathLength={1} d="M780 565H900" />
        <path className="intro-line intro-line--thin" pathLength={1} d="M780 560V570M820 562V568M860 560V570M900 562V568" />
        <text x="780" y="585" className="intro-label intro-label--muted">
          0
        </text>
        <text x="850" y="585" className="intro-label intro-label--muted">
          5 m
        </text>
        <path className="intro-line" pathLength={1} d="M860 500V470M850 480L860 470L870 480" />
        <text x="848" y="458" className="intro-label intro-label--muted">
          N
        </text>
      </g>

      <text x="190" y="615" className="intro-label">
        PLANTA BAJA · CASA LUNA
      </text>
    </svg>
  );
}

function ElevationDrawing() {
  return (
    <svg
      className="intro__elevation"
      viewBox="0 0 1000 640"
      fill="none"
      aria-hidden="true"
    >
      <g style={delay("0.1s")}>
        <path className="intro-line" pathLength={1} d="M100 520H900" />
        <path className="intro-line" pathLength={1} d="M190 520V310H470V520" />
        <path className="intro-line" pathLength={1} d="M470 520V230H810V520" />
        <path className="intro-line intro-line--accent" pathLength={1} d="M470 230H810" />
      </g>

      <g style={delay("0.3s")}>
        <path className="intro-line" pathLength={1} d="M520 310H760V520H520Z" />
        <path className="intro-line intro-line--thin" pathLength={1} d="M520 360H760M520 430H760" />
        <path className="intro-line intro-line--thin" pathLength={1} d="M568 310V520M616 310V520M664 310V520M712 310V520" />
        <path className="intro-line" pathLength={1} d="M210 350H420V520H210Z" />
        <path className="intro-line intro-line--thin" pathLength={1} d="M210 400H420M210 460H420" />
      </g>

      <g style={delay("0.5s")}>
        <path className="intro-line" pathLength={1} d="M90 340H210M90 340L120 310M130 340L160 310M170 340L200 310" />
        <path className="intro-line intro-line--thin" pathLength={1} d="M100 520H180M820 520H900" />
        <path className="intro-line" pathLength={1} d="M850 230V520M842 230H858M842 520H858" />
        <path className="intro-line intro-line--thin" pathLength={1} d="M190 548H810M190 540V556M810 540V556" />
      </g>

      <g className="intro-label" aria-hidden="true">
        <text x="825" y="380" className="intro-label intro-label--muted" transform="rotate(-90 825 380)">
          9.60
        </text>
        <text x="470" y="572" className="intro-label intro-label--muted">
          21.40
        </text>
        <text x="100" y="600" className="intro-label">
          ALZADO SUR · CASA LUNA
        </text>
        <text x="748" y="210" className="intro-label intro-label--muted">
          E 1:100
        </text>
      </g>
    </svg>
  );
}
