import { VisualGalleryCategory } from '../types/portfolio';

/**
 * ============================================================================
 * FEEL SO GUT! — 비주얼 작업물 갤러리 데이터 관리 파일
 * ============================================================================
 *
 * [이미지 파일 관리 가이드]
 * 1. `public/images/feel-so-gut/` 폴더에 실제 이미지 파일(JPG, JPEG, PNG, GIF)을 추가합니다.
 *    (움직이는 GIF 파일은 정지 이미지로 변환되지 않고 원본 애니메이션이 그대로 유지됩니다.)
 * 2. 아래 3개 카테고리의 `images` 배열에 `{ id, src, title, description, alt }` 객체를 등록하면
 *    FEEL SO GUT! 상세페이지의 02 / VISUAL WORKS 스크롤 갤러리에 자동으로 표시됩니다.
 */

export const feelSoGutVisualGallery: VisualGalleryCategory[] = [
  {
    id: 'logo-key-visual',
    categoryCode: '01 / LOGO & KEY VISUAL',
    title: '로고 및 대표 이미지',
    description: '게임의 로고 디자인 및 대표 비주얼 아트워크',
    images: [
      {
        id: 'fsg-key-visual',
        src: '/images/feel-so-gut/필쏘굿_대표이미지.png',
        title: '대표 이미지',
        alt: 'FEEL SO GUT! 대표 이미지',
      },
      {
        id: 'fsg-logo',
        src: '/images/feel-so-gut/필쏘꿋_로고.png',
        title: '로고',
        alt: 'FEEL SO GUT! 로고',
      },
    ],
  },
  {
    id: 'character-design',
    categoryCode: '02 / CHARACTER DESIGN',
    title: '캐릭터 디자인',
    description: '게임에 등장하는 주요 캐릭터의 비주얼 디자인 및 캐릭터 시트',
    images: [
      {
        id: 'fsg-char-jackdoo',
        src: '/images/feel-so-gut/캐릭터 스프라이트_잭두.png',
        title: '잭두(주인공)',
        alt: 'FEEL SO GUT! 캐릭터 스프라이트 잭두(주인공)',
      },
      {
        id: 'fsg-char-jackdoo-ant',
        src: '/images/feel-so-gut/캐릭터 스프라이트_ 잭두(개미VER.).png',
        title: '잭두(개미VER.)',
        alt: 'FEEL SO GUT! 캐릭터 스프라이트 잭두(개미VER.)',
      },
      {
        id: 'fsg-char-clown',
        src: '/images/feel-so-gut/캐릭터 스프라이트_ 광대(물귀신).png',
        title: '광대',
        alt: 'FEEL SO GUT! 캐릭터 스프라이트 광대(물귀신)',
      },
      {
        id: 'fsg-char-ant',
        src: '/images/feel-so-gut/캐릭터 스프라이트_개미.png',
        title: '개미',
        alt: 'FEEL SO GUT! 캐릭터 스프라이트 개미',
      },
    ],
  },
  {
    id: 'game-screens',
    categoryCode: '03 / GAME SCREENS',
    title: '시작 화면 / 로비 화면 / 인트로 화면 / 랭크 화면',
    description: '게임의 시작 화면, 로비 인터페이스, 인트로 연출 및 랭크 화면 디자인',
    images: [],
    subcategories: [
      {
        id: 'start-screen',
        code: '01 · 시작 화면 / START SCREEN',
        columns: 1,
        images: [
          {
            id: 'fsg-start-screen',
            src: '/images/feel-so-gut/필쏘굿_시작화면.png',
            title: '시작 화면',
            alt: 'FEEL SO GUT! 시작 화면',
          },
        ],
      },
      {
        id: 'lobby-screen',
        code: '02 · 로비 화면 / LOBBY SCREEN',
        columns: 3,
        images: [
          {
            id: 'fsg-lobby-main',
            src: '/images/feel-so-gut/메인 로비.gif',
            title: '메인 로비',
            alt: 'FEEL SO GUT! 메인 로비 화면 GIF',
          },
          {
            id: 'fsg-lobby-detail-1',
            src: '/images/feel-so-gut/세부 로비1.gif',
            title: '세부 로비 1',
            alt: 'FEEL SO GUT! 세부 로비 화면 1 GIF',
          },
          {
            id: 'fsg-lobby-detail-2',
            src: '/images/feel-so-gut/세부 로비2.gif',
            title: '세부 로비 2',
            alt: 'FEEL SO GUT! 세부 로비 화면 2 GIF',
          },
        ],
      },
      {
        id: 'intro-screen',
        code: '03 · 인트로 화면 / INTRO SCREEN',
        columns: 3,
        images: [
          {
            id: 'fsg-intro-1',
            src: '/images/feel-so-gut/인트로1.gif',
            title: '인트로 1',
            alt: 'FEEL SO GUT! 인트로 1 GIF',
          },
          {
            id: 'fsg-intro-2',
            src: '/images/feel-so-gut/인트로2.gif',
            title: '인트로 2',
            alt: 'FEEL SO GUT! 인트로 2 GIF',
          },
          {
            id: 'fsg-intro-3',
            src: '/images/feel-so-gut/인트로3.gif',
            title: '인트로 3',
            alt: 'FEEL SO GUT! 인트로 3 GIF',
          },
          {
            id: 'fsg-intro-4',
            src: '/images/feel-so-gut/인트로4.gif',
            title: '인트로 4',
            alt: 'FEEL SO GUT! 인트로 4 GIF',
          },
          {
            id: 'fsg-intro-5',
            src: '/images/feel-so-gut/인트로5.gif',
            title: '인트로 5',
            alt: 'FEEL SO GUT! 인트로 5 GIF',
          },
        ],
      },
      {
        id: 'rank-screen',
        code: '04 · 랭크 화면 / RANK SCREEN',
        title: '랭크 화면',
        columns: 2,
        images: [
          {
            id: 'fsg-rank-s',
            src: '/images/feel-so-gut/랭크S.png',
            title: '랭크 UI · S',
            alt: 'FEEL SO GUT! 플레이 랭크 S UI',
          },
          {
            id: 'fsg-rank-a',
            src: '/images/feel-so-gut/랭크A.png',
            title: '랭크 UI · A',
            alt: 'FEEL SO GUT! 플레이 랭크 A UI',
          },
          {
            id: 'fsg-rank-b',
            src: '/images/feel-so-gut/랭크B.png',
            title: '랭크 UI · B',
            alt: 'FEEL SO GUT! 플레이 랭크 B UI',
          },
          {
            id: 'fsg-rank-c',
            src: '/images/feel-so-gut/랭크C.png',
            title: '랭크 UI · C',
            alt: 'FEEL SO GUT! 플레이 랭크 C UI',
          },
        ],
      },
    ],
  },
];

/**
 * 기존 4개 카테고리 구성 보존용 아카이브 (상세페이지 UI에는 노출되지 않음)
 */
export const feelSoGutArchivedCategories: VisualGalleryCategory[] = [
  {
    id: 'character',
    categoryCode: '01 / CHARACTER',
    title: 'Cyber Shaman Character',
    description: '디지털 방울과 홀로그램 부채를 다루는 메인 캐릭터 아랑 비주얼',
    images: [],
  },
  {
    id: 'game-assets',
    categoryCode: '02 / GAME ASSETS',
    title: '2D Sprites & Rhythm Notes',
    description: '비트에 반응해 발광하는 네온 부적 리듬 노트 및 판정 이펙트',
    images: [],
  },
  {
    id: 'game-ui',
    categoryCode: '03 / GAME UI',
    title: 'Game UI & HUD',
    description: '인게임 콤보 카운터, 판정 타이포그래피 및 시스템 인터페이스',
    images: [],
  },
  {
    id: 'graphics',
    categoryCode: '04 / GRAPHICS',
    title: 'Logo & Title Graphics',
    description: 'FEEL SO GUT! 공식 타이틀 엠블럼 및 그래픽 아이덴티티',
    images: [],
  },
];
