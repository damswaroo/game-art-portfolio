import { Project } from '../types/portfolio';

/**
 * ============================================================================
 * 게임 프로젝트별 한 줄 소개 문구 공통 데이터 관리 파일
 * ============================================================================
 *
 * - 메인페이지 GAME PROJECTS 카드와 상세페이지 PROJECT OVERVIEW가
 *   동일한 소개 문구를 참조하도록 단일 원천 데이터로 관리합니다.
 * - 문장 끝에 온점(.)을 붙이지 않으며, 반환 시에도 끝 온점을 제거해 일관성을 유지합니다.
 */

export const projectIntrosData: Record<string, string> = {
  'off-the-record': '빚을 갚기 위해 우주 쓰레기를 수집하고 귀환하는 SF 익스트랙션 게임',
  'feel-so-gut': '사이버 무속을 콘셉트로 리듬과 굿을 통해 귀신과 놀아주며 성불을 돕는 2D 리듬게임',
  'grow-the-ball': '작은 공으로 시작해 주변의 오브젝트를 흡수하며 점점 몸집을 키워나가는 성장형 아케이드 게임',
  'tales-unwritten':
    '웹캠으로 플레이어의 표정을 인식하고, 아이템이 요구하는 감정과 일치하면 수집할 수 있는 표정 인식 기반 인터랙티브 게임',
};

export const normalizeProjectIntro = (text?: string): string => {
  if (!text) return '';
  return text.trim().replace(/\.+$/, '');
};

export const getProjectIntro = (
  project: Pick<Project, 'id' | 'subtitle' | 'summary'>
): string => {
  const canonical = projectIntrosData[project.id];
  return normalizeProjectIntro(canonical || project.subtitle || project.summary);
};
