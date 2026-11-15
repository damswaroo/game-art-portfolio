# FEEL SO GUT! 이미지 & GIF 폴더

이 폴더(`public/images/feel-so-gut/`)에 FEEL SO GUT! 프로젝트의 작업물 이미지(`JPG`, `JPEG`, `PNG`) 및 움직이는 `GIF` 파일을 저장합니다.

## 카테고리별 파일 예시
1. `01 / 로고 및 대표 이미지`: `logo.png`, `key-visual.png` 등
2. `02 / 캐릭터 디자인`: `character-arang.png`, `character-sheet.png` 등
3. `03 / 시작 화면 / 로비 화면 / 인트로 화면`: `start-screen.gif`, `lobby-screen.gif`, `intro-cutscene.gif` 등

## 데이터 파일 등록 방법
파일을 이 폴더에 추가한 후 `src/data/feelSoGutGalleryData.ts`의 해당 카테고리 `images` 배열에 경로를 등록하면 갤러리와 확대 보기 모달에서 원본 비율 및 GIF 애니메이션이 자동으로 재생됩니다.
