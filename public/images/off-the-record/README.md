# OFF THE RECORD 이미지 폴더

이 폴더(`public/images/off-the-record/`)에 OFF THE RECORD 프로젝트의 작업물 이미지 파일들을 저장합니다.

## 카테고리별 추천 파일명 예시:
1. `01 / KEY VISUAL`: `key-visual-1.png`, `key-visual-2.png` 등
2. `02 / CHARACTER`: `character-sheet-1.png`, `character-model.png` 등
3. `03 / ENVIRONMENT`: `space-station-1.png`, `space-debris.png` 등
4. `04 / GRAPHICS`: `title-logo.png`, `mission-patch.png` 등

## 데이터 파일 등록 방법:
이미지 파일을 이 폴더에 넣은 후, `src/data/offTheRecordGalleryData.ts` 파일에서 해당 카테고리의 `images` 배열에 항목을 등록해 주시면 웹사이트 갤러리에 자동으로 표시됩니다.

```ts
{
  id: 'kv-1',
  src: '/images/off-the-record/key-visual-1.png',
  title: 'Main Key Artwork — Orbital Horizon',
  description: '우주 쓰레기와 궤도 링 기지 속 탐사 대원의 조우를 담은 대표 비주얼',
  alt: 'OFF THE RECORD 메인 키 아트'
}
```
