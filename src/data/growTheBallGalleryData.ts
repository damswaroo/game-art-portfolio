import { VisualGalleryCategory } from '../types/portfolio';

/**
 * ============================================================================
 * 공 좀 키워오게 — 비주얼 작업물 갤러리 데이터 관리 파일
 * ============================================================================
 *
 * [이미지 파일 등록 가이드]
 * 1. `public/images/grow-the-ball/` 폴더에 작업물 파일(JPG, JPEG, PNG, GIF)을 추가합니다.
 * 2. 아래 각 카테고리의 `images` 배열에 `{ id, src, title, description, alt }` 객체를 추가하면
 *    상세페이지 02 / VISUAL WORKS 갤러리 및 확대 보기 모달에 자동으로 표시됩니다.
 */

export const growTheBallVisualGallery: VisualGalleryCategory[] = [
  {
    id: 'start-intro-cutscenes',
    categoryCode: '01 / START SCREEN & INTRO CUTSCENES',
    title: '시작화면 및 인트로 컷씬',
    description: '게임의 시작 화면과 인트로 연출 컷씬 작업물',
    images: [
      {
        id: 'gtb-start-1',
        src: '/images/공좀키워오게/시작화면.png',
        title: '시작 화면 (메인 타이틀)',
        alt: '공 좀 키워오게 시작 화면 메인 타이틀',
      },
      {
        id: 'gtb-start-2',
        src: '/images/공좀키워오게/시작화면2.png',
        title: '시작 화면 2 (과제 접수)',
        alt: '공 좀 키워오게 과제 접수 화면',
      },
      {
        id: 'gtb-start-3',
        src: '/images/공좀키워오게/시작화면3.png',
        title: '시작 화면 3 (과제 접수 입력)',
        alt: '공 좀 키워오게 과제 접수 학번 및 이름 입력 화면',
      },
      {
        id: 'gtb-intro-cutscene',
        src: '/images/공좀키워오게/인트로컷씬.gif',
        title: '인트로 컷씬',
        alt: '공 좀 키워오게 인트로 컷씬 GIF',
      },
    ],
  },
  {
    id: 'result-ranking-screen',
    categoryCode: '02 / RESULT SCREEN & RANKING SCREEN',
    title: '결과 화면 및 랭킹 화면',
    description: '플레이 결과 화면과 랭킹 UI 디자인 작업물',
    images: [
      {
        id: 'gtb-result-1',
        src: '/images/공좀키워오게/결과화면.png',
        title: '결과 화면 (과제 평가서)',
        alt: '공 좀 키워오게 플레이 결과 과제 평가서 화면',
      },
      {
        id: 'gtb-ranking-1',
        src: '/images/공좀키워오게/랭킹화면1.png',
        title: '랭킹 화면 1 (전체 순위)',
        alt: '공 좀 키워오게 이번 학기 MVP 전체 랭킹 화면',
      },
      {
        id: 'gtb-ranking-2',
        src: '/images/공좀키워오게/랭킹화면2.png',
        title: '랭킹 화면 2 (학과 대항 순위)',
        alt: '공 좀 키워오게 이번 학기 MVP 학과 대항 랭킹 화면',
      },
    ],
  },
  {
    id: 'gameplay-screens',
    categoryCode: '03 / GAMEPLAY SCREENS',
    title: '게임 플레이 화면',
    description: '게임의 실제 플레이 장면과 성장 단계별 게임 플레이 화면',
    images: [
      {
        id: 'gtb-gameplay-1',
        src: '/images/공좀키워오게/게임플레이화면.png',
        title: '게임플레이 1',
        alt: '공 좀 키워오게 게임플레이 화면 1 (공 지름 10.0cm)',
      },
      {
        id: 'gtb-gameplay-2',
        src: '/images/공좀키워오게/게임플레이화면4.png',
        title: '게임플레이 2',
        alt: '공 좀 키워오게 게임플레이 화면 2 (공 지름 11.5cm)',
      },
      {
        id: 'gtb-gameplay-3',
        src: '/images/공좀키워오게/게임플레이화면2.png',
        title: '게임플레이 3',
        alt: '공 좀 키워오게 게임플레이 화면 3 (공 지름 11.8cm)',
      },
      {
        id: 'gtb-gameplay-4',
        src: '/images/공좀키워오게/게임플레이화면5.png',
        title: '게임플레이 4',
        alt: '공 좀 키워오게 게임플레이 화면 4 (공 지름 67.7cm)',
      },
      {
        id: 'gtb-gameplay-5',
        src: '/images/공좀키워오게/게임플레이화면3.png',
        title: '게임플레이 5',
        alt: '공 좀 키워오게 게임플레이 화면 5 (공 지름 1.19m)',
      },
      {
        id: 'gtb-gameplay-6',
        src: '/images/공좀키워오게/게임플레이화면6.png',
        title: '게임플레이 6',
        alt: '공 좀 키워오게 게임플레이 화면 6 (공 지름 3.78m)',
      },
    ],
  },
];
