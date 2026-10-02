"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { MessageCircle, Calendar, Star, ChevronDown } from "lucide-react";
import { getWhatsAppLink } from "@/lib/constants";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollPromptRef = useRef<HTMLDivElement>(null);

  const [isReady, setIsReady] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Armazena a duração do vídeo sem re-renderizar
  const durationRef = useRef<number>(0);
  const rafIdRef = useRef<number | null>(null);
  const isIntersectingRef = useRef<boolean>(true);

  // Atualização suave via requestAnimationFrame
  const updateScrollProgress = useCallback(() => {
    if (!sectionRef.current || !videoRef.current || reducedMotion) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const windowH = window.innerHeight;
    const maxScroll = rect.height - windowH;

    if (maxScroll <= 0) return;

    // Progresso relativo do scroll dentro da seção Hero (0.0 até 1.0)
    const rawProgress = -rect.top / maxScroll;
    const progress = Math.min(Math.max(rawProgress, 0), 1);

    // 1. Controle direto do currentTime do vídeo
    const duration = durationRef.current || videoRef.current.duration;
    if (duration && !isNaN(duration) && duration > 0) {
      const targetTime = progress * duration;
      // Atualiza apenas se houver diferença relevante para scrubbing fluido
      if (Math.abs(videoRef.current.currentTime - targetTime) > 0.02) {
        videoRef.current.currentTime = targetTime;
      }
    }

    // 2. Animação suave do conteúdo do Hero (opacity + transform)
    // 0% a 20%: totalmente visível
    // 20% a 50%: desaparece gradualmente
    // > 50%: invisível para foco total no cachorro
    if (contentRef.current) {
      if (progress <= 0.2) {
        contentRef.current.style.opacity = "1";
        contentRef.current.style.transform = "translate3d(0, 0, 0)";
        contentRef.current.style.pointerEvents = "auto";
      } else if (progress < 0.5) {
        const fadeProgress = (progress - 0.2) / 0.3; // 0 a 1
        const opacity = Math.max(1 - fadeProgress, 0);
        const translateY = -fadeProgress * 35; // deslocamento sutil para cima
        contentRef.current.style.opacity = opacity.toFixed(3);
        contentRef.current.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0)`;
        contentRef.current.style.pointerEvents = opacity > 0.2 ? "auto" : "none";
      } else {
        contentRef.current.style.opacity = "0";
        contentRef.current.style.transform = "translate3d(0, -35px, 0)";
        contentRef.current.style.pointerEvents = "none";
      }
    }

    // 3. Suavização gradual do overlay escuro (revela as cores do vídeo conforme rola)
    if (overlayRef.current) {
      // Começa com 100% do gradiente e reduz suavemente para dar protagonismo ao cachorro
      const overlayStrength = Math.max(1 - progress * 1.15, 0.15);
      overlayRef.current.style.opacity = overlayStrength.toFixed(3);
    }

    // 4. Indicador de scroll (desaparece nos primeiros 5% de rolagem)
    if (scrollPromptRef.current) {
      const promptOpacity = Math.max(1 - progress * 15, 0);
      scrollPromptRef.current.style.opacity = promptOpacity.toFixed(3);
      scrollPromptRef.current.style.pointerEvents = promptOpacity > 0 ? "auto" : "none";
    }
  }, [reducedMotion]);

  useEffect(() => {
    // Checagem de acessibilidade (prefers-reduced-motion)
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setReducedMotion(true);
      return;
    }

    const video = videoRef.current;
    if (!video) return;

    // Configurações do vídeo para controle puramente manual
    video.pause();
    video.muted = true;
    video.currentTime = 0;

    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration)) {
        durationRef.current = video.duration;
        setIsReady(true);
        updateScrollProgress();
      }
    };

    if (video.readyState >= 1 && video.duration) {
      handleLoadedMetadata();
    } else {
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    // IntersectionObserver para pausar listeners quando a seção sair da viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isIntersectingRef.current = entry.isIntersecting;
        });
      },
      { rootMargin: "100px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Handler de scroll otimizado com requestAnimationFrame
    const onScroll = () => {
      if (!isIntersectingRef.current) return;
      if (rafIdRef.current !== null) return;

      rafIdRef.current = requestAnimationFrame(() => {
        updateScrollProgress();
        rafIdRef.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Chamada inicial
    updateScrollProgress();

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
    };
  }, [updateScrollProgress]);

  return (
    <section
      ref={sectionRef}
      className={`video-scroll-section relative w-full bg-[#0F081D] ${
        reducedMotion ? "min-h-[calc(100svh-5rem)]" : "h-[250vh] sm:h-[280vh]"
      }`}
      aria-label="Seção principal interativa"
    >
      {/* ── STICKY CONTAINER (FIXO NA TELA DURANTE O SCROLL) ── */}
      <div
        ref={stickyRef}
        className={`w-full overflow-hidden ${
          reducedMotion
            ? "relative min-h-[calc(100svh-5rem)] flex items-center"
            : "sticky top-0 h-[100svh] flex items-center"
        }`}
      >
        {/* ── 1. VÍDEO DO CACHORRO — FULLSCREEN BACKGROUND CONTROLADO PELO SCROLL ── */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            tabIndex={-1}
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              willChange: "currentTime",
            }}
          >
            <source src="/videos/dog-running.mp4" type="video/mp4" />
          </video>
        </div>

        {/* ── 2. OVERLAY ESCURO ELEGANTE (TRANSIÇÃO SUAVE AO ROLAR) ── */}
        <div
          ref={overlayRef}
          className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-150 ease-out"
          style={{
            background:
              "linear-gradient(to right, rgba(15, 8, 29, 0.92) 0%, rgba(15, 8, 29, 0.82) 42%, rgba(15, 8, 29, 0.45) 72%, rgba(15, 8, 29, 0.15) 100%), linear-gradient(to top, rgba(15, 8, 29, 0.6) 0%, transparent 25%), linear-gradient(to bottom, rgba(15, 8, 29, 0.5) 0%, transparent 20%)",
          }}
        />

        {/* ── 3. CONTEÚDO DO HERO (ANIMAÇÃO SUAVE DE ENTRADA E SAÍDA) ── */}
        <div
          ref={contentRef}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 transition-all duration-75 will-change-transform"
        >
          <div className="w-full max-w-[620px] flex flex-col items-start text-left space-y-6">

            {/* Endereço / Badge */}
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-semibold uppercase tracking-wider border border-white/15 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Alameda São Caetano, 2493 · São Caetano do Sul
            </span>

            {/* Título Principal */}
            <h1 className="font-young text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.18] drop-shadow-md">
              Seu melhor amigo merece mais que ração.{" "}
              <span className="text-white">
                Ele merece carinho, cuidado e muito amor!
              </span>
            </h1>

            {/* Texto de Apoio */}
            <p className="font-sans text-sm sm:text-base text-stone-200/90 leading-relaxed font-normal drop-shadow-sm">
              Na <strong className="text-white font-semibold">Cat &amp; Dog Pet Shop</strong>, seu pet é tratado como parte da família — com cosméticos hipoalergênicos, toalhas esterilizadas e atendimento humanizado.
            </p>

            {/* CTAs de Conversão */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#agendamento"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#4F2D96] hover:bg-[#5f39b3] text-white font-bold text-sm sm:text-base shadow-[0_10px_25px_rgba(79,45,150,0.5)] transition-all hover:scale-105 active:scale-95 border border-purple-400/30 text-center"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Agendar Horário</span>
              </a>

              <a
                href={getWhatsAppLink("Olá! Gostaria de falar com um atendente da Cat & Dog Pet Shop.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-sm sm:text-base backdrop-blur-md shadow-lg transition-all hover:scale-105 active:scale-95 text-center"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Prova Social / Avaliação Google */}
            <div className="flex items-center gap-3 pt-1">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="text-white font-bold text-sm">4.6</span>
              <span className="text-stone-300 text-xs sm:text-sm">
                · 56 avaliações reais no Google
              </span>
            </div>

          </div>
        </div>

        {/* ── 4. INDICADOR SUTIL DE SCROLL INTERATIVO ── */}
        {!reducedMotion && (
          <div
            ref={scrollPromptRef}
            className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/70 pointer-events-none transition-opacity duration-200"
          >
            <span className="text-[11px] font-medium tracking-widest uppercase">
              Role para ver
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-white/40 flex items-start justify-center p-1">
              <div className="w-1.5 h-2 bg-white rounded-full animate-bounce" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
