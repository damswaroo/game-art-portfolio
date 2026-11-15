import { DesignerProfile, Project } from '../types/portfolio';
import { offTheRecordVisualGallery } from './offTheRecordGalleryData';
import { feelSoGutVisualGallery } from './feelSoGutGalleryData';
import { growTheBallVisualGallery } from './growTheBallGalleryData';

export const designerProfile: DesignerProfile = {
  name: '권유담',
  nameEn: 'KWON YUDAM',
  roleTitle: 'Game Designer & Visual Artist',
  oneLiner:
    '상상 속 게임의 세계를 시각적으로 구현하는 비주얼 디자이너 권유담입니다. 생성형 AI와 그래픽 디자인을 활용해 게임의 세계관과 분위기를 담아내는 비주얼 콘텐츠를 제작합니다.',
  heroHeadline: 'IMAGINED WORLDS, MADE VISIBLE.',
  heroSubheadline: '상상을 시각화하고, 세계관에 생명력을 더합니다.',
  specializations: [
    'VISUAL DESIGN',
    'AI-ASSISTED CREATION',
    'GAME GRAPHICS',
  ],
  aboutBio:
    '상상 속 게임의 세계를 살아 숨쉬는 비주얼로 구현하고, 플레이어의 감정을 움직이는 경험을 설계하는 게임 디자이너 권유담입니다. 순천향대학교에서 메타버스&게임학과와 컨버전스디자인학과를 복수전공하며 캐릭터, 배경, 그래픽 리소스 제작부터 UI/UX 시스템 설계까지 다양한 프로젝트를 완수해 왔습니다. 게임의 시각적 완성도와 플레이어가 마주하는 모든 순간의 몰입감을 집요하게 고민합니다.',
  education: {
    university: '순천향대학교',
    major: '메타버스&게임학과',
    subMajor: '컨버전스디자인학과',
    type: '복수전공 (Double Major)',
    status: 'In Progress / Graduation Expected',
  },
  skills: [
    {
      category: 'Game Visuals',
      items: [
        'Game Art',
        'Character Design',
        'Visual Concept Design',
        'Environment & Prop Concept',
      ],
    },
    {
      category: 'Interface & Interaction',
      items: [
        'UI/UX Design',
        'Interaction Design',
        'HUD & Game Wireframing',
        'Design Systems & Sprites',
      ],
    },
  ],
  tools: [
    { name: 'Adobe Photoshop', role: '디지털 페인팅, 원화 및 텍스처링' },
    { name: 'Adobe Illustrator', role: '벡터 에셋, UI 아이콘 및 그래픽 리소스' },
    { name: 'Figma', role: '게임 UI/UX 플로우, 와이어프레임 및 프로토타입' },
    { name: 'Unity', role: '에셋 인게임 연동, Canvas UI 및 씬 구성' },
  ],
  contact: {
    email: 'dam0608@naver.com',
    behance: 'https://behance.net/portfolio-placeholder',
    github: 'https://github.com/portfolio-placeholder',
    location: 'Seoul, Republic of Korea',
  },
};

const OFF_THE_RECORD_INTRO =
  '빚을 갚기 위해 우주 쓰레기를 수집하고 귀환하는 SF 익스트랙션 게임';

const GROW_THE_BALL_INTRO =
  '작은 공으로 시작해 주변의 오브젝트를 흡수하며 점점 몸집을 키워나가는 성장형 아케이드 게임';

export const projectsData: Project[] = [
  {
    id: 'off-the-record',
    slug: 'off-the-record',
    title: 'OFF THE RECORD',
    previousTitle: '우주해체 대작전',
    subtitle: OFF_THE_RECORD_INTRO,
    kicker: 'ART DIRECTION & VISUAL ASSETS',
    category: 'Game Art',
    subCategory: 'GAME VISUAL DESIGN / ART DIRECTION / VISUAL ASSETS',
    isFeatured: true,
    status: 'IN DEVELOPMENT',
    period: '2026 · ONGOING',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Generative AI'],
    team: '3U STUDIO (삼유스튜디오) · 3인 개발팀',
    teamMembers: [
      {
        role: '팀원 1',
        scope: '게임 개발 및 프로그래밍',
        isSelf: false,
      },
      {
        role: '팀원 2',
        scope: '게임 기획 및 사운드',
        isSelf: false,
      },
      {
        role: 'KWON YUDAM (본인)',
        scope: '게임 아트 콘셉트 기획 및 비주얼 리소스 제작 전반 총괄',
        isSelf: true,
      },
    ],
    video: {
      src: '',
      youtubeUrl: '',
      caption: 'OFF THE RECORD — GAMEPLAY / TRAILER',
    },
    roleScope: '게임 아트 총괄 및 시각 리소스 제작',
    contributionRate: 40,
    summary: OFF_THE_RECORD_INTRO,
    overview: {
      purpose:
        '우주 쓰레기로 가득 찬 궤도 세계 속에서 단절된 통신과 잔해를 탐사하고 미지의 기록을 복원해 나가는 여정을 시각화했습니다.',
      background:
        '2026 미래 게임잼에서 2박 3일간 프로토타입 \'우주해체 대작전\'으로 시작된 프로젝트로, 우주 쓰레기와 고립감이라는 독창적인 세계관을 보다 깊이 있게 확장하여 정식 타이틀 \'OFF THE RECORD\'로 발전시키고 있습니다.',
      keyThemes: [
        'Space Debris & Exploration',
        'Cosmic Isolation',
        'Hard SF Aesthetics',
        'Generative AI Art Direction',
      ],
    },
    myRole: {
      roleTitle: '게임 아트 총괄 및 시각 리소스 제작',
      directResponsibilities: [
        '게임 아트 콘셉트 기획: 우주 쓰레기로 뒤덮인 심우주 궤도 탐사 세계관의 시각 언어 및 톤앤매너 수립',
        '생성형 AI(Generative AI) 기반 이미지 제작: 캐릭터, 배경, 궤도 정거장 등 핵심 비주얼 에셋의 프롬프트 엔지니어링 및 1차 생성 (※ 직접 원화 드로잉이 아닌 최신 AI 파이프라인 활용)',
        'Adobe Photoshop 정밀 리터칭 및 합성: AI 생성 이미지의 아티팩트 수정, 파츠 결합, 광원/재질 정밀 보정 및 일관된 화풍 확립',
        '인게임 비주얼 리소스 최적화: 타이틀 로고타입, 엠블럼, 씬 텍스처 머티리얼 및 그래픽 리소스 전반 제작',
      ],
      collaborationProcess:
        '3인 개발팀(개발 1, 기획/사운드 1, 아트 1) 체제에서 기획자의 세계관 시나리오에 부합하는 무드보드를 수립하고, 프로그래머와의 긴밀한 파이프라인 연계를 통해 2박 3일 게임잼부터 현재 공모전 본선 준비 단계까지 유기적인 개발을 이어가고 있습니다.',
      individualContribution:
        '게임 아트 콘셉트 기획 100%, Generative AI 프롬프트 설계 100%, Photoshop 리터칭 및 그래픽 에셋 제작 전반 100%',
    },
    artDirection: {
      headline: '우주 쓰레기와 미개척 궤도가 자아내는 고립과 탐사의 시각 언어',
      concept:
        '거대한 우주 파편과 차가운 금속 잔해 속에서 탐사 대원의 생존과 기록을 다루는 하드 SF 감성을 지향합니다. 직접적인 붓터치 원화 드로잉 대신, 최신 생성형 AI 기술을 활용하여 방대한 시각적 아이디어를 신속하게 탐색하고 이를 포토샵으로 정밀 합성·정리하여 상용 수준의 일관된 아트 스타일을 도출했습니다.',
      points: [
        {
          title: '고립감과 스케일 대비',
          description:
            '거대 가스 행성과 무수한 궤도 잔해, 그 속을 항해하는 작은 탐사 대원의 대비를 통해 심우주의 압도적인 스케일을 강조했습니다.',
        },
        {
          title: '기능적 하드 SF 질감',
          description:
            '탐사 수트의 산소 순환 튜브, 내마모성 합금 플레이트, 바이저 반사광 등 기능성에 기반한 디테일을 구축했습니다.',
        },
        {
          title: '시선 유도형 라이팅',
          description:
            '차가운 우주 암흑 속에서 바이저의 따뜻한 발광과 궤도 기지의 신호등을 활용하여 직관적인 시선 집중을 유도했습니다.',
        },
      ],
    },
    creativeProcess: {
      title: 'Generative AI 이미지 생성과 Photoshop 정밀 편집의 융합 파이프라인',
      description:
        '본 프로젝트의 캐릭터와 배경 등 비주얼 리소스는 직접 수작업 드로잉을 한 것이 아니라, 생성형 AI(Generative AI)를 전략적으로 활용하여 이미지를 제작하고 Adobe Photoshop을 통해 게임 리소스에 적합하도록 고도화하는 현대적 아트 디렉션 파이프라인을 적용했습니다.',
      steps: [
        {
          title: '01. 세계관 기획 & 무드보드',
          tool: 'Concept Design',
          description:
            '우주 쓰레기 세계관에 부합하는 컬러 팔레트, 조명 앵글, 하드 SF 메카닉 형태 언어 가이드를 수립했습니다.',
        },
        {
          title: '02. Generative AI 프롬프트 생성',
          tool: 'Generative AI',
          description:
            '설계된 콘셉트에 맞춰 정밀한 프롬프트 엔지니어링을 수행하고, 수십 회의 반복 생성을 통해 최적의 실루엣과 텍스처 원천 소스를 확보했습니다.',
        },
        {
          title: '03. Photoshop 결함 보정 및 합성',
          tool: 'Adobe Photoshop',
          description:
            'AI 생성 이미지 특유의 왜곡된 파츠나 아티팩트를 제거하고, 레이어 마스킹과 브러시 블렌딩으로 다양한 요소를 정밀하게 합성했습니다.',
        },
        {
          title: '04. 톤앤매너 통합 & 인게임 최적화',
          tool: 'Adobe Photoshop',
          description:
            '전체 에셋의 명도, 채도, 림 라이트 톤을 통일하여 게임 전체에서 하나의 일관된 아트 스타일로 인식되도록 완성했습니다.',
        },
      ],
    },
    process: [
      {
        step: '01',
        title: '세계관 기획 & 무드보드 (Concept Formulation)',
        description:
          '심우주 탐사의 고립감을 표현하기 위해 차가운 암석 텍스처, 행성 링의 빛 산란, 선외 기동복의 기능적 금속 파츠를 분석하고 명도 대비 중심의 무드보드를 구축했습니다.',
        deliverables: ['SF 무드보드 3종', '컬러 스크립트 (Color Script)', '형태 언어(Shape Language) 가이드'],
      },
      {
        step: '02',
        title: '생성형 AI 탐색 & 실루엣 선별 (AI Prompt Engineering)',
        description:
          '탐사 수트와 우주 파편의 실루엣이 장거리 시점에서도 명확히 읽히도록 생성형 AI 프롬프트를 정교하게 조율하여 후보군 시안을 추출했습니다.',
        deliverables: ['캐릭터 썸네일 AI 시안 12종', '우주 정거장 실루엣 시안', '비교 분석 차트'],
      },
      {
        step: '03',
        title: 'Photoshop 정밀 리터칭 & 텍스처 합성 (Photoshop Look-Dev)',
        description:
          'AI 생성 소스의 결함을 수정하고 카본 파이버, 방열 직물, 바이저 반사광 등 재질별 광택과 거칠기(Roughness)를 포토샵으로 세밀하게 규정했습니다.',
        deliverables: ['수트 전/측/후 분석 렌더', '재질 분해도 매핑', '소품 및 핸드헬드 스캐너 시안'],
      },
      {
        step: '04',
        title: '배경 환경 아트 & 인게임 최적화 (Lighting & Scene Assets)',
        description:
          '거대 가스 행성의 링 그림자가 궤도 기지에 드리우는 시네마틱 키 아트를 완성하고, 인게임 씬 적용을 위한 리소스를 최적화했습니다.',
        deliverables: ['대표 환경 키 아트 2종', '씬 조명 룩셋업 가이드', '포스터 프로모션 그래픽'],
      },
    ],
    deliverables: [
      {
        id: 'otr-1',
        title: 'Main Key Artwork — Orbital Horizon',
        type: 'Key Visual',
        caption: '우주 쓰레기와 궤도 링 기지 속 탐사 대원의 조우를 담은 메인 시네마틱 키 아트',
        description:
          '공간감과 스케일을 강조하기 위해 행성 고리의 거대한 곡선과 대원의 미세한 실루엣을 극명한 대비로 배치했습니다.',
      },
      {
        id: 'otr-2',
        title: 'EVA Heavy Explorer Character Sheet',
        type: 'Character Asset',
        caption: '고위험 선외활동용 중장갑 탐사 수트 3면도 및 파츠 상세 분석',
        description:
          '산소 순환 파이프와 관절 가동 범위를 시각적으로 고려한 실용적 SF 디테일 디자인.',
      },
      {
        id: 'otr-3',
        title: 'Deep Space Station Architecture',
        type: 'Environment Asset',
        caption: '모듈형 궤도 연구 기지의 회전 중력 링 및 도킹 베이 콘셉트',
        description:
          '반복적인 모듈 구조물에 조명 가이드를 배치하여 플레이어의 시선 유도 경로를 설계했습니다.',
      },
      {
        id: 'otr-4',
        title: 'Project Emblem & Typography Logo',
        type: 'Graphic Identity',
        caption: 'OFF THE RECORD 공식 타이틀 로고타입 및 미션 패치 엠블럼',
        description:
          '기록이 말소된 기밀 작전의 성격을 표현하기 위해 결손된 활자 획과 좌표 그리드를 결합했습니다.',
      },
    ],
    visualGallery: offTheRecordVisualGallery,
    projectAchievements: [
      {
        title: '2026 미래 게임잼',
        badge: '최우수상 수상',
        badgeType: 'AWARDED',
        description:
          '2박 3일간 팀원들과 함께 제작한 프로토타입 게임 \'우주해체 대작전\'으로 충남콘텐츠진흥원 미래 게임잼 팀 최우수상을 수상했습니다.',
      },
      {
        title: '2026 충청권 인디게임 공모전 INDIE-U',
        badge: '대학부 우수상 수상',
        badgeType: 'SELECTED',
        description:
          '프로젝트 ‘OFF THE RECORD’로 2026 충청권 인디게임 공모전(INDIE-U) 대학부 예선을 통과하여 본선에 진출하였습니다. 그 후, 전문가 멘토링을 통해 게임의 완성도를 높였으며, 본선 발표 및 최종 심사를 거쳐 대학부 우수상 수상이 확정되었습니다. 현재 시상식을 앞두고 있습니다.',
      },
      {
        title: 'G-STAR 2026',
        badge: '출품 확정 · 전시 준비 중',
        badgeType: 'CONFIRMED',
        description:
          '2026년 11월 18일부터 22일까지 개최되는 G-STAR 2026 전시에 출품이 확정되어, 전시용 빌드와 프로모션 리소스를 고도화하고 있습니다.',
      },
    ],
    developmentStatus: {
      currentStatus: 'IN DEVELOPMENT (개발 진행 중 · 본선 심사 준비)',
      currentDescription:
        '게임잼 프로토타입 \'우주해체 대작전\'에서 출발하여, 현재 \'OFF THE RECORD\'로 타이틀과 세계관을 심화하며 2026 INDIE-U 본선 심사 및 G-STAR 2026 전시 참가를 위해 활발히 개발을 이어가고 있습니다.',
      upcomingMilestone: 'INDIE-U 본선 심사 & G-STAR 2026 전시 참가',
      roadmap: [
        {
          phase: 'PHASE 1',
          title: '2026 미래 게임잼 프로토타입',
          details: '2박 3일간 \'우주해체 대작전\' 제작 및 충남콘텐츠진흥원 팀 최우수상 수상',
          status: 'completed',
        },
        {
          phase: 'PHASE 2',
          title: 'OFF THE RECORD 리브랜딩 & 예선 통과',
          details: '세계관 심화 및 비주얼 리소스 확장, 2026 INDIE-U 대학부 예선 10팀 선정',
          status: 'completed',
        },
        {
          phase: 'PHASE 3',
          title: '공모전 멘토링 & 본선 심사 준비',
          details: '분야별 전문가 멘토링 참여, 인게임 아트 에셋 고도화 및 본선 빌드 최적화',
          status: 'in-progress',
        },
        {
          phase: 'PHASE 4',
          title: 'G-STAR 2026 전시 참가 준비',
          details: '2026.11.18 ~ 11.22 지스타 전시 참가 일정에 맞춘 부스 전시 빌드 및 프로모션 에셋 준비',
          status: 'planned',
        },
      ],
    },
    reflection: {
      problemSolved:
        '생성형 AI로 생성된 초기 이미지에서는 파츠 간의 원근 왜곡과 캐릭터-배경의 톤 불일치 문제가 발생했습니다. Adobe Photoshop의 레이어 마스킹 기법과 림 라이트(Rim Light) 후보정 작업을 체계적으로 적용하여 하나의 통일된 상용 게임 아트 룩으로 완성해냈습니다.',
      learnings:
        '수작업 드로잉을 고집하지 않고 생성형 AI를 창작의 촉매제로 활용함으로써, 2박 3일 게임잼과 같은 제한된 시간 속에서도 압도적인 비주얼 퀄리티를 확보하고 게임 아트 디렉터로서의 콘셉트 기획 및 편집 역량을 극대화할 수 있었습니다.',
      futureImprovements:
        '현재 준비 중인 INDIE-U 본선 심사와 11월 G-STAR 2026 전시 참가 일정에 맞추어, 인게임 UI/HUD 시스템과 환경 텍스처를 한 단계 더 정밀하게 다듬어 전시 관람객에게 몰입도 높은 비주얼 경험을 제공하고자 합니다.',
    },
  },
  {
    id: 'feel-so-gut',
    slug: 'feel-so-gut',
    title: 'FEEL SO GUT!',
    subtitle: '사이버 무속을 콘셉트로 리듬과 굿을 통해 귀신과 놀아주며 성불을 돕는 2D 리듬게임.',
    kicker: 'Visual Concept & 2D Game Art',
    category: 'Game Art',
    subCategory: 'GAME VISUAL DESIGN / ART DIRECTION / VISUAL ASSETS',
    status: '스토브인디 BOOST LAB 등록 완료',
    program: '충남콘텐츠진흥원 미래 창작자 과정',
    platform: 'STOVE INDIE BOOST LAB (등록 완료)',
    period: '2026.03 - 2026.08',
    tools: ['Adobe Photoshop', 'Adobe Illustrator', 'Generative AI'],
    video: {
      src: '',
      youtubeUrl: '',
      caption: 'FEEL SO GUT! — GAMEPLAY / TRAILER',
    },
    externalLinks: [
      {
        label: 'STOVE 인디 부스트랩',
        url: 'https://page.onstove.com/boostlab/global/view/14624450?boardKey=147914',
      },
    ],
    team: '3U STUDIO (삼유스튜디오) · 3인 개발팀',
    roleScope: '게임 아트 전반 담당 — 캐릭터·배경 디자인, UI 및 캐릭터 스프라이트 제작',
    contributionRate: 30,
    summary:
      '사이버 무속을 콘셉트로 리듬과 굿을 통해 귀신과 놀아주며 성불을 돕는 2D 리듬게임.',
    overview: {
      purpose:
        '한국적 문화 원형(무속, 부적, 오방색)을 미래 디스토피아 감성으로 재해석하여, 전 세계 게이머에게 신선한 시각적 충격과 리드미컬한 카타르시스를 전달하는 독창적 아트 스타일 구축.',
      background:
        '기존 리듬 게임의 전형적인 일렉트로닉 비주얼에서 탈피하여, 신내림과 디지털 네트워크 해킹의 유사성에 착안해 부적을 데이터 패킷으로, 굿을 시스템 정화 의식으로 치환했습니다.',
      keyThemes: ['Cyber Shamanism', 'Korean Neo-Traditional', 'Rhythm Action', 'Vivid Neon Contrast'],
      program: '충남콘텐츠진흥원 미래 창작자 과정',
      platform: 'STOVE INDIE BOOST LAB (등록 완료)',
    },
    myRole: {
      directResponsibilities: [
        '전통 무당 의상(철릭, 쾌자)의 사이버펑크 스타일 리디자인',
        '2D 캐릭터 프레임별 키포즈 및 스프라이트 시트(Sprite Sheet) 드로잉',
        '네온 부적 노트, 오방색 판정 이펙트, 콤보 타이포그래피 등 그래픽 리소스 40여 종 제작',
        '사이버 사당 및 네온 제단 게임 플레이 배경 원화',
      ],
      collaborationProcess:
        '사운드 디자이너가 제작한 꽹과리·비트 BPM 데이터에 맞춰 노트 스프라이트의 가독성과 타격감 판정 애니메이션 타이밍을 1/60초 단위로 프로그래머와 동기화했습니다.',
      individualContribution: '게임 2D 비주얼 리소스 100% 단독 제작 (캐릭터, 배경, UI, 이펙트)',
    },
    process: [
      {
        step: '01',
        title: '전통 무속 요소의 디지털 기호화 (Cultural Deconstruction)',
        description:
          '삼태극, 부적의 주사(朱砂) 붉은 글씨, 명두경(거울) 등의 상징을 분석하고 이를 네온 회로 기판과 데이터 스트림으로 재해석한 콘셉트 시트를 작성했습니다.',
        deliverables: ['전통 상징 해체 리서치 보드', '디지털 부적 기호 8종', '키 비주얼 시안'],
      },
      {
        step: '02',
        title: '캐릭터 조형 & 프레임 애니메이션 (Character & Motion)',
        description:
          '방울을 흔들며 신을 부르는 무녀의 역동적인 춤사위를 2D 셀 애니메이션 기법으로 프레임 분할 드로잉하여 타격 순간의 쾌감을 극대화했습니다.',
        deliverables: ['무녀 캐릭터 턴어라운드', '공격/연타/미스 모션 스프라이트 시트', '페이스 표정 5종'],
      },
      {
        step: '03',
        title: '인게임 리듬 노트 & 판정 이펙트 설계 (Gameplay Assets)',
        description:
          '고속 스크롤 환경에서도 노트를 놓치지 않도록 채도가 높은 라임 그린, 사이언, 형광 마젠타 3색 체계를 정립하고 시각적 소음을 최소화했습니다.',
        deliverables: ['레인별 부적 노트 세트', 'PERFECT / GUT / MISS 판정 타이포', '콤보 카운터 UI'],
      },
      {
        step: '04',
        title: '사이버 제단 배경 연출 (Environment & FX)',
        description:
          '네온 촛불과 홀로그램 병풍이 배치된 미래형 굿판 배경을 3단계 패럴랙스 레이어로 분리 제작하여 깊이감을 부여했습니다.',
        deliverables: ['3-Layer 패럴랙스 배경 리소스', 'Unity 2D 씬 세팅', '인게임 데모 영상 클립'],
      },
    ],
    deliverables: [
      {
        id: 'fsg-1',
        title: 'Cyber Shaman Character — A-Rang',
        type: 'Character Art',
        caption: '디지털 방울과 홀로그램 부채를 다루는 메인 캐릭터 ‘아랑’ 전신 일러스트',
        description: '전통 한복의 곡선 실루엣에 발광 광섬유 테이핑과 헤드셋을 믹스매치하여 개성 있는 무당 전사를 구축했습니다.',
      },
      {
        id: 'fsg-2',
        title: 'Interactive Talisman Rhythm Notes',
        type: '2D Sprite Assets',
        caption: '비트에 반응해 발광하는 네온 부적 형태의 리듬 노트 & 타격 이펙트',
        description: '각 음계와 비트 강도에 따라 한자 룬 문자가 회전하며 번쩍이는 인터랙티브 시각 피드백 디자인.',
      },
      {
        id: 'fsg-3',
        title: 'Neon Shrine Parallax Background',
        type: 'Parallax Environment',
        caption: '사이버네틱 네온 제단과 오방색 데이터 병풍이 펼쳐진 게임 배경 스테이지',
        description: '리듬에 맞춰 앰비언트 라이트가 점멸하도록 레이어를 모듈화하여 엔진에 납품했습니다.',
      },
      {
        id: 'fsg-4',
        title: 'Game Logo & Iconography System',
        type: 'Graphic Identity',
        caption: '‘FEEL SO GUT!’ 타이틀 엠블럼 및 인게임 보증 아이콘 시스템',
        description: '강렬한 붓글씨의 획과 글리치 왜곡 효과를 결합한 독창적 타이포그래피.',
      },
    ],
    visualGallery: feelSoGutVisualGallery,
    projectAchievements: [
      {
        title: '충남콘텐츠진흥원 미래 창작자 과정',
        badge: '지원 프로그램 참여',
        badgeType: 'ONGOING',
        description:
          '충남콘텐츠진흥원 미래 창작자 과정에 선발되어 멘토링 및 제작 지원을 받아 프로젝트를 개발했습니다.',
      },
      {
        title: 'STOVE INDIE BOOST LAB',
        badge: '등록 완료',
        badgeType: 'CONFIRMED',
        description:
          '인디게임 플랫폼 스토브인디(STOVE INDIE) BOOST LAB에 등록을 완료했습니다.',
      },
    ],
    reflection: {
      problemSolved:
        '리듬 게임의 특성상 배경이 너무 화려하면 날아오는 노트를 놓치는 가독성 저하가 발생했습니다. 플레이 영역 뒤편의 배경 채도를 40% 낮추고 어두운 비네팅을 추가하여 노트와 이펙트의 콘트라스트를 확보했습니다.',
      learnings:
        '전통 문화 코드를 서브컬처에 접목할 때 자칫 이질적으로 느껴질 수 있는 경계를, 일관된 형태 언어(원형과 각진 회로선의 조화)를 통해 유기적으로 풀어내는 감각을 체득했습니다.',
      futureImprovements:
        '스파인(Spine 2D) 애니메이션 툴을 도입하여 스프라이트 용량을 줄이고 본(Bone) 기반의 더 부드러운 천 흔들림 인터랙션을 구현할 계획입니다.',
    },
  },
  {
    id: 'grow-the-ball',
    slug: 'grow-the-ball',
    title: '공 좀 키워오게',
    subtitle: GROW_THE_BALL_INTRO,
    kicker: 'Growth Arcade · Game Art Assets',
    category: 'Game Art',
    subCategory: '성장형 아케이드 (Growth Arcade)',
    status: '2026 SW융합대학 게임개발 경진대회 우수상',
    period: '2026.10 – 2026.11 (1개월)',
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Generative AI', 'Blender'],
    video: {
      src: '',
      youtubeUrl: '',
      caption: '공 좀 키워오게 — GAMEPLAY / TRAILER',
    },
    team: '2인 팀(개발 1, 아트1)',
    roleScope: '게임 아트 에셋 제작',
    contributionRate: 40,
    summary: GROW_THE_BALL_INTRO,
    overview: {
      purpose:
        '작은 공에서 시작해 주변 오브젝트를 흡수하며 점차 거대해지는 성장형 아케이드 게임의 시각적 스케일감과 직관적인 오브젝트 식별성을 아트 에셋으로 구현했습니다.',
      background:
        '순천향대학교 제3회 SW융합대학 학술제 게임개발 경진대회 출품작으로 제작되었으며, 단계별 성장에 어울리는 2D·3D 그래픽 리소스 및 인게임 아트 에셋을 제작해 우수상을 수상했습니다.',
      keyThemes: ['Growth Arcade', 'Object Absorption', 'Game Art Assets', '2D & 3D Visuals'],
    },
    myRole: {
      roleTitle: '게임 아트 에셋 제작',
      directResponsibilities: [
        '성장형 아케이드 게임 콘셉트에 맞춘 인게임 오브젝트 및 환경 아트 에셋 제작',
        'Adobe Illustrator·Photoshop 및 Generative AI를 활용한 2D 그래픽 및 UI 리소스 제작',
        'Blender를 활용한 인게임 3D 오브젝트 및 소품 모델링 에셋 제작',
      ],
      collaborationProcess:
        '단계별 성장 규모와 충돌 판정 기준에 맞춰 오브젝트의 크기감과 실루엣이 인게임에서 명확히 구분되도록 아트 에셋 규격을 조율했습니다.',
      individualContribution: '게임 아트 에셋 제작 전반 (40% 프로젝트 기여)',
    },
    visualGallery: growTheBallVisualGallery,
    projectAchievements: [
      {
        title: '2026 순천향대학교 SW융합대학 게임개발 경진대회',
        badge: '우수상 수상',
        badgeType: 'AWARDED',
        description:
          '제3회 순천향대학교 SW융합대학 학술제 게임개발 경진대회에서 프로젝트 ‘공 좀 키워오게’로 우수상을 수상했습니다.',
        footer: '2026.11.11 · 순천향대학교 SW융합대학',
      },
    ],
    process: [],
    deliverables: [],
    reflection: {
      problemSolved:
        '공의 크기가 커짐에 따라 흡수 가능한 작은 오브젝트와 회피해야 할 대형 오브젝트의 시각적 위계가 흐려지지 않도록 실루엣과 컬러 대비를 명확히 설계했습니다.',
      learnings:
        '2D 그래픽 툴과 Generative AI, Blender 3D 모델링을 결합해 짧은 개발 기간(1개월) 안에서도 성장 아케이드 장르 특유의 경쾌한 비주얼 완성도를 확보할 수 있었습니다.',
      futureImprovements:
        '스테이지별 테마 오브젝트 종류와 성장 이펙트 변주를 확장해 visual works 갤러리에 추가 정리할 예정입니다.',
    },
  },
  {
    id: 'tales-unwritten',
    slug: 'tales-unwritten',
    title: 'TALES UNWRITTEN',
    subtitle:
      '웹캠으로 플레이어의 표정을 인식하고, 아이템이 요구하는 감정과 일치하면 수집할 수 있는 표정 인식 기반 인터랙티브 게임.',
    kicker: 'Game Planning & 3D Modeling',
    category: 'Game Art',
    subCategory: '기획 / 3D 에셋 제작(모델링)',
    period: '2025.04 – 2025.05 (2개월)',
    tools: ['Blender', 'Unity', 'MediaPipe'],
    video: {
      src: '',
      youtubeUrl: '',
      caption: 'TALES UNWRITTEN — INTERACTION DEMO / TRAILER',
    },
    team: '2인 팀 프로젝트 (개발 1, 기획·3D 에셋 제작 1)',
    roleScope: '기획 및 3D 에셋 제작(모델링)',
    contributionRate: 40,
    summary:
      '플레이어의 얼굴 표정을 실시간으로 인식하고 감정을 분석하는 인터랙티브 스토리 게임. 아이템마다 요구되는 감정이 있으며, 플레이어가 해당 감정을 표정으로 표현하면 이를 분석해 일치 여부를 판정하고 아이템을 수집하는 시스템을 구현했습니다.',
    overview: {
      purpose:
        '아이템마다 요구되는 감정을 플레이어의 실시간 표정으로 표현하면 이를 분석해 일치 여부를 판정하고 아이템을 수집하는 새로운 감성 인터랙션 시스템을 구현했습니다.',
      background:
        '플레이어의 얼굴 표정을 실시간으로 인식하고 감정을 분석하여, 단순한 조작을 넘어 표정과 감정의 일치를 통해 게임 내 아이템을 획득하고 스토리를 전개하는 몰입감 높은 인터랙티브 경험을 설계했습니다.',
      keyThemes: ['Emotion Recognition', 'Facial Expression Analysis', 'Item Collection Mechanics', 'Interactive Story'],
    },
    myRole: {
      roleTitle: '기획 및 3D 에셋 제작(모델링)',
      directResponsibilities: [
        '기획: 얼굴 표정 인식 및 감정 판정 기반 인터랙티브 스토리텔링과 아이템 수집 룰 기획',
        '3D 에셋 모델링: 게임 내 상호작용 아이템 및 소품 3D 에셋 제작 (Blender)',
        'Unity 연동: 제작된 3D 모델링 에셋의 엔진 임포트 및 씬 내 배치 최적화',
      ],
      collaborationProcess:
        '2인 개발팀(개발 1, 기획·3D 에셋 제작 1) 체제에서 개발자와 긴밀히 소통하며 표정 감정 인식 로직에 맞춘 3D 아이템 규격과 게임 메커니즘을 긴밀히 조율했습니다.',
      individualContribution: '기획 및 3D 에셋 제작(모델링) 담당',
    },
    visualGallery: [
      {
        id: 'cabin',
        categoryCode: '01 / CABIN',
        title: '오두막',
        description: '게임 엔딩의 배경이 되는 오두막 공간 작업물',
        images: [
          {
            src: '/images/tales-unwritten/cabin.png',
            alt: '오두막 3D 모델 (아이소메트릭 뷰)',
            caption: '오두막 (Cabin) — 아이소메트릭 뷰 3D 모델링',
          },
          {
            src: '/images/tales-unwritten/cabin2.png',
            alt: '오두막 3D 모델 (측면 뷰)',
            caption: '오두막 (Cabin) — 측면 뷰 3D 모델링',
          },
          {
            src: '/images/tales-unwritten/cabin3.png',
            alt: '오두막 3D 모델 (정면 뷰)',
            caption: '오두막 (Cabin) — 정면 뷰 3D 모델링',
          },
        ],
      },
      {
        id: 'objects',
        categoryCode: '02 / OBJECTS',
        title: '오브젝트들',
        description: '게임 내 사용된 개별 오브젝트 및 소품 작업물',
        images: [
          {
            src: '/images/tales-unwritten/teddy-bear.png',
            alt: '곰인형 3D 에셋',
            caption: '곰인형 (Teddy Bear)',
          },
          {
            src: '/images/tales-unwritten/red-ribbon.png',
            alt: '붉은 리본 3D 에셋',
            caption: '붉은 리본 (Red Ribbon)',
          },
          {
            src: '/images/tales-unwritten/family-picture.png',
            alt: '가족 액자 3D 에셋',
            caption: '가족 액자 (Family Picture Frame)',
          },
          {
            src: '/images/tales-unwritten/burn-paper.png',
            alt: '불탄 종이 3D 에셋',
            caption: '불탄 종이 (Burn Paper)',
          },
          {
            src: '/images/tales-unwritten/tear-paper.png',
            alt: '찢어진 종이 3D 에셋',
            caption: '찢어진 종이 (Tear Paper)',
          },
          {
            src: '/images/tales-unwritten/memo.png',
            alt: '메모지 3D 에셋',
            caption: '메모지 (Memo)',
          },
          {
            src: '/images/tales-unwritten/broken-glass.png',
            alt: '깨진 유리 파편 3D 에셋',
            caption: '깨진 유리 (Broken Glass)',
          },
        ],
      },
    ],
    projectAchievements: [
      {
        title: '2025 한국디지털콘텐츠학회 대학생 논문경진대회',
        badge: '동상 수상',
        badgeType: 'AWARDED',
        researchTitle: 'Tales in Fragments',
        description:
          '감정 인식 기반 페이셜 인터랙션을 활용한 인터랙티브 스토리텔링 게임 연구(<Tales in Fragments>)로 대학생 논문경진대회에서 동상을 수상했습니다.',
        footer: '2025.07.05 · 공동저자',
        posterPdfUrl: '/docs/학술대회포스터_최종본.pdf',
        posterThumbnail: '/docs/academic-poster-preview.png',
      },
    ],
    process: [
      {
        step: '01',
        title: '감정 UX 흐름 설계 (Emotion Journey Mapping)',
        description:
          '감정 인식이 플레이어에게 ‘감시당하는 불쾌감’이 아닌 ‘주인공과 호흡하는 몰입감’으로 다가가도록 카메라 상태 표시와 감정 반응 타이밍을 단계별로 정의했습니다.',
        deliverables: ['유저 저니 맵 (User Journey Map)', '감정 트리거 매트릭스', '카메라 프라이버시 UX 가이드'],
      },
      {
        step: '02',
        title: '와이어프레임 & HUD 레이아웃 탐색 (HUD Architecture)',
        description:
          '시네마틱 영상 감상을 방해하지 않도록 화면 가장자리에 미니멀한 라인 형태의 감정 링을 배치하고, 대화 선택지는 시선 집중 구역(Center-Lower 1/3)에 배치했습니다.',
        deliverables: ['Low-fi 와이어프레임 15개 화면', '시선 동선 히트맵 분석', '정보 위계 명세서'],
      },
      {
        step: '03',
        title: '인터랙티브 프로토타이핑 & 모션 (Figma & Micro-interactions)',
        description:
          '플레이어가 표정을 바꿀 때 선택지의 텍스트 톤이 은은하게 변형(Glitch/Warm Glow)되는 마이크로 인터랙션을 설계하고 피그마 프로토타입으로 사용성 검증을 마쳤습니다.',
        deliverables: ['Hi-fi 인터랙티브 프로토타입', '컴포넌트 디자인 시스템 (Design Tokens)', '모션 스펙 시트'],
      },
      {
        step: '04',
        title: '엔진 적용 및 사용자 테스트 (Unity Integration & Usability)',
        description:
          '실제 15명의 테스터를 대상으로 표정 반응 딜레이와 텍스트 가독성을 테스트하여, 감정 판정 보류 시간(Dwell Time)을 0.4초로 최적화했습니다.',
        deliverables: ['Unity UI 프리팹 패키지', 'UT 분석 보고서', '최종 반응형 UI 레이아웃'],
      },
    ],
    deliverables: [
      {
        id: 'tu-1',
        title: 'Biometric Emotion Ring HUD',
        type: 'Diegetic UI Component',
        caption: '플레이어의 표정 변화를 실시간으로 부드럽게 시각화하는 반투명 링 HUD',
        description: '얼굴 전체를 띄우지 않고 감정 스펙트럼의 변화 파동만 전달하여 시네마틱 집중도를 극대화했습니다.',
      },
      {
        id: 'tu-2',
        title: 'Adaptive Dialogue Choice Interface',
        type: 'Game UI System',
        caption: '현재 플레이어의 감정에 따라 반응하는 적응형 분기 선택지 시스템',
        description: '차분할 때는 논리적 답변이 활성화되고 긴장할 때는 떨리는 텍스트 애니메이션이 연출됩니다.',
      },
      {
        id: 'tu-3',
        title: 'Narrative Decision Flowchart',
        type: 'Information Architecture',
        caption: '다중 엔딩 분기 구조를 직관적으로 조망할 수 있는 아카이브 뷰어 화면',
        description: '플레이어가 지나온 감정의 자취를 별자리 형태로 되돌아볼 수 있는 인터랙티브 차트 설계.',
      },
      {
        id: 'tu-4',
        title: 'Comprehensive Game UI Design System',
        type: 'Design System',
        caption: '타이포그래피, 버튼 컴포넌트 상태, 다이얼로그 박스 규격 가이드',
        description: '다양한 해상도(16:9, 21:9)에 유연하게 대응하는 9-슬라이스 및 앵커 프리셋 구축.',
      },
    ],
    reflection: {
      problemSolved:
        '사용자 표정 인식에 0.2~0.3초의 하드웨어 지연이 발생할 때 UI가 뚝뚝 끊겨 보이는 문제를, 감정 전이 애니메이션에 탄성 이징(Elastic easing)을 부여하여 감각적 딜레이를 자연스러운 연출로 승화시켰습니다.',
      learnings:
        '신기술(컴퓨터 비전)이 도입된 게임일수록, 기술 자체를 과시하는 복잡한 UI보다 플레이어가 인지 부하 없이 자연스럽게 직관적으로 받아들일 수 있는 미니멀한 인터페이스가 핵심임을 확인했습니다.',
      futureImprovements:
        '시선 추적(Eye-tracking) 센서 데이터와 연계하여 플레이어가 바라보고 있는 NPC에게만 감정 선택지가 발동되는 2차 프로토타입을 준비하고 있습니다.',
    },
  },
];

