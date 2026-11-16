import React from 'react';
import { Youtube } from 'lucide-react';
import { ProjectVideo } from '../types/portfolio';
import { projectVideosData } from '../data/projectVideosData';

interface Props {
  video?: ProjectVideo;
  projectId: string;
  projectTitle: string;
}

const ALLOWED_YOUTUBE_HOSTS = new Set([
  'youtube.com',
  'www.youtube.com',
  'm.youtube.com',
  'music.youtube.com',
  'youtube-nocookie.com',
  'www.youtube-nocookie.com',
  'youtu.be',
  'www.youtu.be',
]);

const YOUTUBE_VIDEO_ID_REGEX = /^[a-zA-Z0-9_-]{11}$/;

export function extractYouTubeVideoId(rawUrl?: string): string | null {
  if (!rawUrl) return null;
  const trimmed = rawUrl.trim();
  if (!trimmed) return null;

  let parsed: URL;
  try {
    parsed = new URL(trimmed);
  } catch {
    return null;
  }

  if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
    return null;
  }

  const host = parsed.hostname.toLowerCase();
  if (!ALLOWED_YOUTUBE_HOSTS.has(host)) {
    return null;
  }

  const segments = parsed.pathname.split('/').filter(Boolean);

  if (host === 'youtu.be' || host === 'www.youtu.be') {
    const candidate = segments[0] || '';
    return YOUTUBE_VIDEO_ID_REGEX.test(candidate) ? candidate : null;
  }

  if (parsed.pathname === '/watch' || segments[0] === 'watch') {
    const v = parsed.searchParams.get('v') || '';
    return YOUTUBE_VIDEO_ID_REGEX.test(v) ? v : null;
  }

  if (['embed', 'shorts', 'live', 'v'].includes(segments[0] || '')) {
    const candidate = segments[1] || '';
    return YOUTUBE_VIDEO_ID_REGEX.test(candidate) ? candidate : null;
  }

  return null;
}

function getYouTubeEmbedUrl(videoId: string): string {
  return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
}

function resolveProjectYouTubeUrl(projectId: string, propVideo?: ProjectVideo): string {
  const staticRegistryUrl = projectVideosData[projectId]?.youtubeUrl?.trim() || '';
  if (extractYouTubeVideoId(staticRegistryUrl)) {
    return staticRegistryUrl;
  }

  const propUrl = propVideo?.youtubeUrl?.trim() || '';
  if (extractYouTubeVideoId(propUrl)) {
    return propUrl;
  }

  return '';
}

export const ProjectVideoPlayer: React.FC<Props> = ({ video, projectId, projectTitle }) => {
  const registeredUrl = resolveProjectYouTubeUrl(projectId, video);
  const videoId = extractYouTubeVideoId(registeredUrl);
  const embedUrl = videoId ? getYouTubeEmbedUrl(videoId) : null;

  return (
    <div className="w-full space-y-3">
      {/* Top Header Label: GAMEPLAY / TRAILER */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5FA59]" />
          <span className="text-xs font-mono font-bold text-[#C5FA59] tracking-wider uppercase">
            GAMEPLAY / TRAILER
          </span>
        </div>
      </div>

      {/* Case A: Registered YouTube Video -> 16:9 Embedded YouTube Player */}
      {embedUrl ? (
        <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#2D313B] bg-[#0A0B0E] shadow-2xl">
          <iframe
            key={embedUrl}
            src={embedUrl}
            title={`${projectTitle} Gameplay / Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      ) : (
        /* Case B: Read-only Placeholder when no YouTube URL is configured in source data */
        <div className="w-full aspect-[16/9] min-h-[220px] p-6 md:p-8 rounded-2xl bg-[#17191E]/70 border border-dashed border-[#2D313B] flex flex-col items-center justify-center text-center space-y-3">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#12141A] border border-[#2D313B] flex items-center justify-center text-[#C5FA59]">
            <Youtube className="w-5 h-5" />
          </div>

          <div className="space-y-1.5 max-w-md mx-auto">
            <p className="text-sm sm:text-base font-semibold text-[#F5F4F0] font-['Space_Grotesk']">
              {projectTitle} 게임플레이 / 트레일러 영상 준비 중
            </p>
            <p className="text-xs text-[#A7AAB0] leading-relaxed break-keep">
              게임플레이 및 트레일러 영상이 추후 업데이트될 예정입니다.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

interface PrototypeVideosProps {
  videos: {
    id: string;
    code: string;
    title: string;
    roleLabel: string;
    description: string;
    youtubeUrl?: string;
  }[];
  projectId: string;
  projectTitle: string;
}

export const PrototypeVideosPlayer: React.FC<PrototypeVideosProps> = ({
  videos,
  projectId,
  projectTitle,
}) => {
  const staticProjectVideos = projectVideosData[projectId]?.videos || [];
  const sourceVideos = staticProjectVideos.length > 0 ? staticProjectVideos : videos;

  return (
    <div className="w-full max-w-[900px] mx-auto space-y-8 md:space-y-10">
      {/* Top Section Header: GAMEPLAY / TRAILER */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#24262B]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C5FA59]" />
          <span className="text-xs font-mono font-bold text-[#C5FA59] tracking-wider uppercase">
            GAMEPLAY / TRAILER
          </span>
        </div>
        <span className="text-[11px] font-mono text-[#F5F4F0] px-2.5 py-0.5 rounded border border-[#F5F4F0]/35 bg-[#17191E] tracking-wider uppercase">
          PROTOTYPE GAMEPLAY · {sourceVideos.length} VIDEOS
        </span>
      </div>

      {/* Vertical 1-Column Stack */}
      <div className="flex flex-col space-y-8 md:space-y-10">
        {sourceVideos.map((item) => {
          const staticEntry = staticProjectVideos.find((v) => v.id === item.id);
          const candidateUrl =
            staticEntry?.youtubeUrl?.trim() || item.youtubeUrl?.trim() || '';
          const videoId = extractYouTubeVideoId(candidateUrl);
          const embedUrl = videoId ? getYouTubeEmbedUrl(videoId) : null;

          return (
            <div key={item.id} className="w-full space-y-3">
              {/* Video Header Metadata */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <h3 className="text-base sm:text-lg font-bold text-[#F5F4F0] font-['Space_Grotesk'] tracking-tight">
                      {item.code}
                    </h3>
                    <span className="text-[11px] font-mono text-[#F5F4F0] px-2 py-0.5 rounded border border-[#F5F4F0]/35 bg-[#17191E]">
                      역할: {item.roleLabel}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#A7AAB0] px-2.5 py-0.5 rounded bg-[#14161C] border border-[#272B33] uppercase tracking-wider">
                    PROTOTYPE GAMEPLAY
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#A7AAB0] font-sans leading-relaxed break-keep">
                  {item.description}
                </p>
              </div>

              {/* 16:9 Player or Ready-State Placeholder */}
              {embedUrl ? (
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-[#2D313B] bg-[#0A0B0E] shadow-2xl">
                  <iframe
                    key={embedUrl}
                    src={embedUrl}
                    title={`${projectTitle} - ${item.title}`}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              ) : (
                <div className="w-full aspect-[16/9] min-h-[220px] p-6 md:p-8 rounded-2xl bg-[#17191E]/70 border border-dashed border-[#2D313B] flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[#12141A] border border-[#2D313B] flex items-center justify-center text-[#F5F4F0]">
                    <Youtube className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5 max-w-md mx-auto">
                    <span className="inline-block text-[10px] font-mono text-[#F5F4F0]/90 px-2 py-0.5 rounded border border-[#F5F4F0]/30 bg-[#101114] tracking-wider uppercase">
                      PROTOTYPE GAMEPLAY · {item.roleLabel}
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-[#F5F4F0] font-['Space_Grotesk']">
                      {item.title} 영상 준비 중
                    </p>
                    <p className="text-xs text-[#A7AAB0] leading-relaxed break-keep">
                      프로토타입 플레이 영상이 추후 업데이트될 예정입니다.
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
