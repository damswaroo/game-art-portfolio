import { ProjectVideo } from '../types/portfolio';

/**
 * ============================================================================
 * 게임 프로젝트별 GAMEPLAY / TRAILER YouTube 영상 URL 데이터 관리 파일
 * ============================================================================
 *
 * [YouTube 영상 등록 방법]
 * 1. 단일 영상 프로젝트: 각 게임 프로젝트의 고유 ID(`project.id`)에 해당하는 `youtubeUrl`에
 *    YouTube 일반 링크(https://www.youtube.com/watch?v=...) 또는
 *    단축 링크(https://youtu.be/...)를 입력한 뒤 재배포합니다.
 * 2. 다중 영상 프로젝트(예: dont-get-cooked-koongya): 해당 프로젝트 키의 `videos` 배열 내
 *    각 항목의 `youtubeUrl`을 독립적으로 입력합니다.
 * 3. 공개 웹사이트 방문자에게는 영상 등록·수정·삭제 UI가 노출되지 않으며,
 *    이 파일에 등록된 URL만 16:9 YouTube 플레이어로 안전하게 재생됩니다.
 */

export const projectVideosData: Record<string, ProjectVideo> = {
  'off-the-record': {
    youtubeUrl: 'https://youtu.be/HJ_KCXzhRTs',
    caption: 'OFF THE RECORD — GAMEPLAY / TRAILER',
  },
  'feel-so-gut': {
    youtubeUrl: 'https://youtu.be/EjUfez7XZA4',
    caption: 'FEEL SO GUT! — GAMEPLAY / TRAILER',
  },
  'koongya-roblox': {
    youtubeUrl: '',
    caption: '쿵야 레스토랑즈 IP 로블록스 게임 — GAMEPLAY / TRAILER',
  },
  'tales-unwritten': {
    youtubeUrl: 'https://youtu.be/xzt4N9Qe4Dk',
    caption: 'TALES UNWRITTEN — INTERACTION DEMO / TRAILER',
  },
  'grow-the-ball': {
    youtubeUrl: 'https://youtu.be/ubRGYI-gN2s',
    caption: '공 좀 키워오게 — GAMEPLAY / TRAILER',
  },
  'dont-get-cooked-koongya': {
    caption: "Don't get cooked, Koongya! — PROTOTYPE GAMEPLAY",
    videos: [
      {
        id: 'koongya',
        code: '01 / 쿵야 플레이 (KOONGYA GAMEPLAY)',
        title: '쿵야 플레이 (KOONGYA GAMEPLAY)',
        roleLabel: '생존자',
        description:
          '생존자 시점의 프로토타입 게임플레이 — 셰프의 추격을 피해 살아남고 동료를 구조하는 플레이 영상',
        youtubeUrl: 'https://youtu.be/tgnUYxWSdP8',
        caption: "Don't get cooked, Koongya! — 쿵야 플레이 (생존자 프로토타입)",
      },
      {
        id: 'chef',
        code: '02 / 셰프 플레이 (CHEF GAMEPLAY)',
        title: '셰프 플레이 (CHEF GAMEPLAY)',
        roleLabel: '추격자',
        description:
          '추격자 시점의 프로토타입 게임플레이 — 쿵야를 추격하고 붙잡아 요리를 완성하는 플레이 영상',
        youtubeUrl: 'https://youtu.be/DQKmmQoiWek',
        caption: "Don't get cooked, Koongya! — 셰프 플레이 (추격자 프로토타입)",
      },
    ],
  },
};
