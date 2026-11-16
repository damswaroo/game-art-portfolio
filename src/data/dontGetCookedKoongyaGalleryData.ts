import { VisualGalleryCategory } from '../types/portfolio';
import { resolveAssetUrl } from '../utils/assetPath';

/**
 * ============================================================================
 * Don't get cooked, Koongya! — 비주얼 작업물 갤러리 데이터 관리 파일
 * ============================================================================
 *
 * [이미지 파일 등록 가이드]
 * 1. `public/images/dont-get-cooked-koongya/` 폴더에 작업물 파일(JPG, JPEG, PNG, GIF)을 추가합니다.
 * 2. 아래 각 카테고리의 `images` 배열에 `{ id, src: resolveAssetUrl('/images/dont-get-cooked-koongya/파일명.png'), title, alt }`
 *    객체를 추가하면 상세페이지 02 / VISUAL WORKS 갤러리에 자동으로 표시됩니다.
 * 3. 현재 프로토타입 개발 단계이므로 작업물 이미지 등록 전까지는 빈 상태(`[]`)를 유지합니다.
 */
void resolveAssetUrl;

export const dontGetCookedKoongyaVisualGallery: VisualGalleryCategory[] = [
  {
    id: 'game-ui-design',
    categoryCode: '01 / GAME UI DESIGN',
    title: '게임 UI 디자인',
    description: '인게임 HUD, 상태 UI 및 플레이어/셰프 역할별 인터페이스 작업물',
    images: [],
  },
  {
    id: 'icon-design',
    categoryCode: '02 / ICON DESIGN',
    title: '아이콘 디자인',
    description: '고유 스킬, 가스 밸브, 특선 재료 및 상호작용 아이콘 리소스',
    images: [],
  },
  {
    id: '3d-asset-design',
    categoryCode: '03 / 3D ASSET DESIGN',
    title: '3D 에셋 디자인',
    description: 'Roblox 인게임 환경 오브젝트 및 소품 3D 모델링 에셋',
    images: [],
  },
];
