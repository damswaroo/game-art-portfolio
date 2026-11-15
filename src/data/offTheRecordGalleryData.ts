import { VisualGalleryCategory } from '../types/portfolio';
import { resolveAssetUrl } from '../utils/assetPath';

/**
 * ============================================================================
 * OFF THE RECORD — 비주얼 작업물 갤러리 데이터 관리 파일
 * ============================================================================
 * 
 * [이미지 파일 관리 가이드]
 * 1. 이미지 파일 업로드 경로:
 *    `public/images/off-the-record/` 폴더에 이미지 파일(JPG, JPEG, PNG, GIF)을 추가합니다.
 *    (예: `public/images/off-the-record/key-visual-1.png`, `public/images/off-the-record/intro.gif`)
 *    ※ GIF 파일은 정지 이미지로 변환되지 않고 원본 애니메이션과 비율이 그대로 유지됩니다.
 * 
 * 2. 갤러리 데이터 등록 방법:
 *    해당 카테고리의 `images` 배열에 아래 예시처럼 객체를 추가합니다:
 *    ```ts
 *    {
 *      id: 'otr-kv-01',
 *      src: '/images/off-the-record/key-visual-1.png',
 *      title: 'Orbital Horizon Key Visual',
 *      description: '우주 쓰레기와 궤도 링 기지 속 탐사 대원의 조우를 담은 대표 비주얼',
 *      alt: 'OFF THE RECORD 메인 키 아트'
 *    }
 *    ```
 * 
 * 3. 미등록 카테고리 동작:
 *    이미지가 없는 카테고리는 `images: []`로 유지되며, 웹사이트 화면에서
 *    오류 없이 우아한 빈 갤러리 안내 문구가 표시됩니다.
 * 
 * 4. 주의사항:
 *    웹사이트는 임의의 가짜 이미지나 외부 스톡 이미지를 자동으로 생성하지 않으며,
 *    본 데이터 파일에 등록된 실제 파일 경로만을 렌더링합니다.
 */

export const offTheRecordVisualGallery: VisualGalleryCategory[] = [
  {
    id: 'key-visual',
    categoryCode: '01 / KEY VISUAL',
    title: '키 비주얼',
    description: '게임의 세계관과 분위기를 표현한 대표 비주얼 아트워크',
    images: [
      {
        id: 'kv-1',
        src: resolveAssetUrl('/images/off-the-record/오프더레코드_B2_2.png'),
        alt: 'OFF THE RECORD 대표 키 비주얼 포스터 1',
      },
      {
        id: 'kv-2',
        src: resolveAssetUrl('/images/off-the-record/오프더레코드_1.png'),
        alt: 'OFF THE RECORD 키 비주얼 세로 포스터 2',
      },
      {
        id: 'kv-3',
        src: resolveAssetUrl('/images/off-the-record/오프더레코드_메인아트1.png'),
        alt: 'OFF THE RECORD 메인 아트 1',
      },
      {
        id: 'kv-4',
        src: resolveAssetUrl('/images/off-the-record/오프더레코드_메인아트2.png'),
        alt: 'OFF THE RECORD 메인 아트 2',
      },
    ],
  },
  {
    id: 'character',
    categoryCode: '02 / CHARACTER DESIGN',
    title: '캐릭터 디자인',
    description: '게임 속 주요 인물의 캐릭터 비주얼 및 디자인',
    images: [
      {
        id: 'char-1',
        src: resolveAssetUrl('/images/off-the-record/오프더레코드_메인아트3.png'),
        alt: 'OFF THE RECORD 캐릭터 비주얼 1 (메인아트 3)',
      },
      {
        id: 'char-2',
        src: resolveAssetUrl('/images/off-the-record/오프더레코드_메인아트4.png'),
        alt: 'OFF THE RECORD 캐릭터 비주얼 2 (메인아트 4)',
      },
      {
        id: 'char-3',
        src: resolveAssetUrl('/images/off-the-record/오프더레코드_메인아트5.png'),
        alt: 'OFF THE RECORD 캐릭터 비주얼 3 (메인아트 5)',
      },
      {
        id: 'char-4',
        src: resolveAssetUrl('/images/off-the-record/캐릭터시트_아리아.png'),
        title: '아리아 캐릭터 시트',
        alt: 'OFF THE RECORD 아리아 캐릭터 시트',
      },
      {
        id: 'char-5',
        src: resolveAssetUrl('/images/off-the-record/캐릭터시트_태오.png'),
        title: '태오 캐릭터 시트',
        alt: 'OFF THE RECORD 태오 캐릭터 시트',
      },
    ],
  },
  {
    id: 'environment',
    categoryCode: '03 / ENVIRONMENT & GAME ASSETS',
    title: '배경 및 게임 에셋',
    description: '우주 배경, 환경 오브젝트, 함선 및 적 유닛 등 게임 비주얼 에셋',
    images: [],
    subcategories: [
      {
        id: 'background-art',
        code: '01 · 배경 아트 / BACKGROUND ART',
        columns: 2,
        images: [
          {
            id: 'env-1',
            src: resolveAssetUrl('/images/off-the-record/오프더레코드_배경아트1.png'),
            alt: 'OFF THE RECORD 우주 잔해 및 지구 궤도 배경 아트 1',
          },
          {
            id: 'env-2',
            src: resolveAssetUrl('/images/off-the-record/오프더레코드_배경이미지2.png'),
            alt: 'OFF THE RECORD 지구 궤도 및 위성 잔해 배경 아트 2',
          },
        ],
      },
      {
        id: 'environment-assets',
        code: '02 · 환경 에셋 / ENVIRONMENT ASSETS',
        columns: 3,
        images: [
          {
            id: 'env-3',
            src: resolveAssetUrl('/images/off-the-record/우주쓰레기.png'),
            alt: 'OFF THE RECORD 환경 오브젝트 — 우주쓰레기',
          },
          {
            id: 'env-4',
            src: resolveAssetUrl('/images/off-the-record/운석.png'),
            alt: 'OFF THE RECORD 환경 오브젝트 — 운석',
          },
          {
            id: 'env-5',
            src: resolveAssetUrl('/images/off-the-record/인공위성.png'),
            alt: 'OFF THE RECORD 환경 오브젝트 — 인공위성',
          },
        ],
      },
      {
        id: 'spaceship-design',
        code: '03 · 함선 디자인 / SPACESHIP DESIGN',
        columns: 3,
        images: [
          {
            id: 'ship-stage-0',
            src: resolveAssetUrl('/images/off-the-record/0단계_우주선.png'),
            title: '0단계 함선',
            alt: 'OFF THE RECORD 플레이어 우주선 0단계',
          },
          {
            id: 'ship-stage-1',
            src: resolveAssetUrl('/images/off-the-record/1단계_우주선.png'),
            title: '1단계 함선',
            alt: 'OFF THE RECORD 플레이어 우주선 1단계',
          },
          {
            id: 'ship-stage-2',
            src: resolveAssetUrl('/images/off-the-record/2단계_우주선.png'),
            title: '2단계 함선',
            alt: 'OFF THE RECORD 플레이어 우주선 2단계',
          },
          {
            id: 'ship-part-barrier',
            src: resolveAssetUrl('/images/off-the-record/베리어.png'),
            title: '베리어',
            alt: 'OFF THE RECORD 우주선 부품 — 베리어',
          },
          {
            id: 'ship-part-booster',
            src: resolveAssetUrl('/images/off-the-record/부스터.png'),
            title: '부스터',
            alt: 'OFF THE RECORD 우주선 부품 — 부스터',
          },
          {
            id: 'ship-part-emp',
            src: resolveAssetUrl('/images/off-the-record/EMP.png'),
            title: 'EMP',
            alt: 'OFF THE RECORD 우주선 부품 — EMP',
          },
          {
            id: 'ship-part-cargo',
            src: resolveAssetUrl('/images/off-the-record/택배상자.png'),
            title: '택배상자',
            alt: 'OFF THE RECORD 우주선 부품 — 택배상자',
          },
          {
            id: 'ship-part-turret',
            src: resolveAssetUrl('/images/off-the-record/요격포탑.png'),
            title: '요격포탑',
            alt: 'OFF THE RECORD 우주선 부품 — 요격포탑',
          },
        ],
      },
      {
        id: 'enemy-design',
        code: '04 · 적 및 보스 디자인 / ENEMY & BOSS',
        columns: 5,
        images: [
          {
            id: 'enemy-main-boss',
            src: resolveAssetUrl('/images/off-the-record/메인보스.png'),
            title: '메인 보스',
            alt: 'OFF THE RECORD 적 유닛 — 메인 보스',
          },
          {
            id: 'enemy-midboss-1-carrier',
            src: resolveAssetUrl('/images/off-the-record/중간보스1드론모함.png'),
            title: '중간보스 1-1 드론모함',
            alt: 'OFF THE RECORD 적 유닛 — 중간보스 1-1 드론모함',
          },
          {
            id: 'enemy-midboss-1-2-mini',
            src: resolveAssetUrl('/images/off-the-record/중간보스1-2미니드론.png'),
            title: '중간보스 1-2 미니드론',
            alt: 'OFF THE RECORD 적 유닛 — 중간보스 1-2 미니드론',
          },
          {
            id: 'enemy-midboss-2-ghost',
            src: resolveAssetUrl('/images/off-the-record/중간보스2유령드론.png'),
            title: '중간보스 2 유령드론',
            alt: 'OFF THE RECORD 적 유닛 — 중간보스 2 유령드론',
          },
          {
            id: 'enemy-midboss-3-vacuum',
            src: resolveAssetUrl('/images/off-the-record/중간보스3청소기드론.png'),
            title: '중간보스 3 청소기드론',
            alt: 'OFF THE RECORD 적 유닛 — 중간보스 3 청소기드론',
          },
        ],
      },
    ],
  },
  {
    id: 'graphics',
    categoryCode: '04 / UI & GAME GRAPHICS',
    title: 'UI 및 게임 그래픽',
    description: '게임 HUD, 인터페이스, 아이콘 및 타이틀 화면 그래픽',
    images: [],
    subcategories: [
      {
        id: 'start-screen',
        code: '01 / 시작 화면 (START SCREEN)',
        columns: 1,
        images: [
          {
            id: 'graphics-start-screen',
            src: resolveAssetUrl('/images/off-the-record/시작화면.png'),
            title: '시작화면',
            alt: 'OFF THE RECORD UI & Game Graphics — 시작화면',
          },
        ],
      },
      {
        id: 'intro-cutscenes',
        code: '02 / 인트로 컷씬 (INTRO CUTSCENES)',
        columns: 3,
        images: [
          {
            id: 'graphics-intro-1',
            src: resolveAssetUrl('/images/off-the-record/인트로_1.png'),
            title: '인트로 컷씬 1',
            alt: 'OFF THE RECORD 인트로 컷씬 1',
          },
          {
            id: 'graphics-intro-2',
            src: resolveAssetUrl('/images/off-the-record/인트로_2.png'),
            title: '인트로 컷씬 2',
            alt: 'OFF THE RECORD 인트로 컷씬 2',
          },
          {
            id: 'graphics-intro-3',
            src: resolveAssetUrl('/images/off-the-record/인트로_3.png'),
            title: '인트로 컷씬 3',
            alt: 'OFF THE RECORD 인트로 컷씬 3',
          },
          {
            id: 'graphics-intro-4',
            src: resolveAssetUrl('/images/off-the-record/인트로_4.png'),
            title: '인트로 컷씬 4',
            alt: 'OFF THE RECORD 인트로 컷씬 4',
          },
          {
            id: 'graphics-intro-5',
            src: resolveAssetUrl('/images/off-the-record/인트로_5.png'),
            title: '인트로 컷씬 5',
            alt: 'OFF THE RECORD 인트로 컷씬 5',
          },
          {
            id: 'graphics-intro-6',
            src: resolveAssetUrl('/images/off-the-record/인트로_6.png'),
            title: '인트로 컷씬 6',
            alt: 'OFF THE RECORD 인트로 컷씬 6',
          },
        ],
      },
      {
        id: 'ui-game-graphics',
        code: '03 / UI 및 게임 그래픽 (UI & GAME GRAPHICS)',
        images: [
          {
            id: 'graphics-loading-screen',
            src: resolveAssetUrl('/images/로딩창.png'),
            title: '로딩창',
            alt: 'OFF THE RECORD UI & Game Graphics — 로딩창',
          },
          {
            id: 'graphics-item-icons',
            src: resolveAssetUrl('/images/아이템 아이콘.jpg'),
            title: '결과창',
            alt: 'OFF THE RECORD UI & Game Graphics — 결과창',
          },
          {
            id: 'graphics-hud-1',
            src: resolveAssetUrl('/images/HUD1.jpg'),
            title: 'HUD1',
            alt: 'OFF THE RECORD UI & Game Graphics — HUD1',
          },
          {
            id: 'graphics-hud-2',
            src: resolveAssetUrl('/images/HUD2.jpg'),
            title: 'HUD2',
            alt: 'OFF THE RECORD UI & Game Graphics — HUD2',
          },
          {
            id: 'graphics-hud-3',
            src: resolveAssetUrl('/images/HUD3.jpg'),
            title: 'HUD3',
            alt: 'OFF THE RECORD UI & Game Graphics — HUD3',
          },
        ],
      },
    ],
  },
];
