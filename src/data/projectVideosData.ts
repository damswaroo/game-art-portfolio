import { ProjectVideo } from '../types/portfolio';

/**
 * ============================================================================
 * 게임 프로젝트별 GAMEPLAY / TRAILER YouTube 영상 URL 데이터 관리 파일
 * ============================================================================
 *
 * [YouTube 영상 등록 방법]
 * 1. 각 게임 프로젝트의 고유 ID(`project.id`)에 해당하는 항목의 `youtubeUrl`에
 *    YouTube 일반 링크(https://www.youtube.com/watch?v=...) 또는
 *    단축 링크(https://youtu.be/...)를 입력한 뒤 재배포합니다.
 * 2. 공개 웹사이트 방문자에게는 영상 등록·수정·삭제 UI가 노출되지 않으며,
 *    이 파일에 등록된 URL만 16:9 YouTube 플레이어로 안전하게 재생됩니다.
 */

export const projectVideosData: Record<string, ProjectVideo> = {
  'off-the-record': {
    youtubeUrl: '',
    caption: 'OFF THE RECORD — GAMEPLAY / TRAILER',
  },
  'feel-so-gut': {
    youtubeUrl: '',
    caption: 'FEEL SO GUT! — GAMEPLAY / TRAILER',
  },
  'koongya-roblox': {
    youtubeUrl: '',
    caption: '쿵야 레스토랑즈 IP 로블록스 게임 — GAMEPLAY / TRAILER',
  },
  'tales-unwritten': {
    youtubeUrl: '',
    caption: 'TALES UNWRITTEN — INTERACTION DEMO / TRAILER',
  },
  'grow-the-ball': {
    youtubeUrl: '',
    caption: '공 좀 키워오게 — GAMEPLAY / TRAILER',
  },
};
