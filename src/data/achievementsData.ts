import { Achievement } from '../types/portfolio';
import { resolveAssetUrl } from '../utils/assetPath';

/**
 * ACHIEVEMENTS DATA (권유담 포트폴리오 공식 성과 및 활동 기록)
 * 
 * - 실제 파일이 public/certificates/ 폴더에 업로드되어 있는 항목만 proofs 배열에 연결됩니다.
 * - 아직 업로드되지 않은 항목은 proofs: [] 로 유지되어 '증빙 이미지 미등록' 비활성화 상태로 안전하게 표시됩니다.
 */
export const initialAchievements: Achievement[] = [
  // 1순위: 수상 경력 (항상 최상단 배치)
  {
    id: 'competition-indie-u-2026',
    category: 'AWARDS',
    categoryLabel: '수상 경력',
    title: '2026 충청권 인디게임 공모전 INDIE-U 우수상',
    organization: '대전정보문화산업진흥원 외 2개 기관',
    date: '2026.11.25',
    year: 2026,
    order: 1,
    highlight: true,
    awardDivision: '팀 수상 (삼유스튜디오)',
    description:
      '프로젝트 ‘OFF THE RECORD’로 대학부 본선 진출, 전문가 멘토링 3회 및 본선 발표를 거쳐 우수상 수상',
    articleUrl: 'https://www.ccnnews.co.kr/news/articleView.html?idxno=418455',
    proofs: [
      {
        src: resolveAssetUrl('/certificates/인디유_우수상.jpg'),
        title:
          '2026년 충청권 인디게임 공모전 인디유(indie·U) 대학부 우수상 상장 (3USTUDIO)',
        date: '2026.11.25',
        alt: '2026년 충청권 인디게임 공모전 인디유(indie·U) 대학부 우수상 상장 - 오프 더 레코드 (3USTUDIO)',
      },
    ],
  },
  {
    id: 'award-sw-gamedev-2026',
    category: 'AWARDS',
    categoryLabel: '수상 경력',
    title: '2026 SW융합대학 게임개발 경진대회 우수상',
    organization: '순천향대학교 SW융합대학',
    date: '2026.11.11',
    year: 2026,
    order: 2,
    highlight: true,
    awardDivision: '팀 수상 (2인)',
    description: '제3회 SW융합대학 학술제 게임개발 경진대회에서 우수상 수상.',
    proofs: [
      {
        src: resolveAssetUrl('/certificates/게임개발경진대회_우수상.jpg'),
        title: '제3회 SW융합대학 학술제 게임개발 경진대회 우수상 상장 (2인 팀 수상)',
        date: '2026.11.11',
        alt: '순천향대학교 SW융합대학 제3회 학술제 게임개발 경진대회 우수상 상장',
      },
    ],
  },
  {
    id: 'award-future-gamejam-2026',
    category: 'AWARDS',
    categoryLabel: '수상 경력',
    title: '2026 미래 게임잼 최우수상',
    organization: '충남콘텐츠진흥원',
    date: '2026.09.13',
    year: 2026,
    order: 3,
    highlight: true,
    awardDivision: '팀 수상 (삼유스튜디오)',
    description:
      '2박 3일간 팀원들과 게임 ‘우주해체 대작전’을 제작하여 최우수상 수상',
    articleUrl: 'https://ccon.kr/bbs/board.php?bo_table=news&wr_id=366',
    proofs: [
      {
        src: resolveAssetUrl('/certificates/gamejam-award-2026.png'),
        title: '충남콘텐츠진흥원 2026 미래 게임잼 최우수상 상장 (삼유스튜디오 팀)',
        date: '2026.09.13',
        alt: '충남글로벌게임센터 2026 미래 게임잼 최우수상 상장',
      },
    ],
  },
  {
    id: 'award-digital-contents-2025',
    category: 'AWARDS',
    categoryLabel: '수상 경력',
    title: '한국디지털콘텐츠학회 대학생 논문경진대회 동상',
    organization: '(사)한국디지털콘텐츠학회',
    date: '2025.07.05',
    year: 2025,
    order: 4,
    highlight: true,
    awardDivision: '공동저자 수상',
    description:
      '감정 인식 기반 인터랙티브 게임 연구로 대학생 논문경진대회 동상 수상',
    proofs: [
      {
        src: resolveAssetUrl('/certificates/research-award-2025.png'),
        title: '2025 한국디지털콘텐츠학회 대학생 논문경진대회 동상 상장',
        date: '2025.07.05',
        alt: '한국디지털콘텐츠학회 대학생 논문경진대회 동상 상장 (이유진, 권유담, 오제호)',
      },
    ],
  },

  // 2순위: 주요 공모전 및 프로젝트 활동
  {
    id: 'competition-koongya-roblox-2026',
    category: 'COMPETITION',
    categoryLabel: '공모전 진행',
    title: '쿵야 IP를 활용한 로블록스 게임 콘텐츠 제작 공모전',
    organization: '넷마블 MNB',
    date: '2026',
    isOngoing: true,
    year: 2026,
    order: 5,
    statusBadges: ['게임 제작 중'],
    description:
      '넷마블의 쿵야 IP를 활용한 로블록스 게임 콘텐츠 제작 공모전 참가 신청 완료 및 출품작 제작 중',
    articleUrl:
      'https://www.wevity.com/?c=find&s=1&gub=3&cidx=33&sp=contents&gbn=viewok&gp=1&ix=110895',
    articleLabel: '공모전 안내 보기',
    proofs: [],
  },

  // 3순위: 학업 성취 및 장학 경력
  {
    id: 'academic-deans-list',
    category: 'ACADEMIC EXCELLENCE',
    categoryLabel: '학업 성취',
    title: "Dean's List — 성적우수학생 3학기 연속 선정",
    organization: '순천향대학교 SW융합대학',
    date: '2025 - 2026',
    year: 2026,
    order: 6,
    description: 'SW융합대학 성적우수학생으로 3학기 연속 선정',
    details: [
      '2025학년도 1학기 (인증일: 2025.08.28)',
      '2025학년도 2학기 (인증일: 2026.01.08)',
      '2026학년도 1학기 (인증일: 2026.07.20)',
    ],
    proofs: [
      {
        src: resolveAssetUrl('/certificates/deans-list-2025-1.png'),
        title: "2025학년도 1학기 SW융합대학 Dean's List 성적우수학생 인증서",
        date: '2025.08.28',
        alt: "2025학년도 1학기 SW융합대학 Dean's List 성적우수학생 인증서 (권유담)",
      },
      {
        src: resolveAssetUrl('/certificates/deans-list-2025-2.png'),
        title: "2025학년도 2학기 SW융합대학 Dean's List 성적우수학생 인증서",
        date: '2026.01.08',
        alt: "2025학년도 2학기 SW융합대학 Dean's List 성적우수학생 인증서 (권유담)",
      },
      {
        src: resolveAssetUrl('/certificates/deans-list-2026-1.png'),
        title: "2026학년도 1학기 SW융합대학 Dean's List 성적우수학생 인증서",
        date: '2026.07.20',
        alt: "2026학년도 1학기 SW융합대학 Dean's List 성적우수학생 인증서 (권유담)",
      },
    ],
  },
  {
    id: 'scholarship-kim-jung-ok-2026',
    category: 'SCHOLARSHIP',
    categoryLabel: '장학 경력',
    title: '김정옥 장학금 장학생 선정',
    organization: '순천향대학교',
    date: '2026.04.02',
    year: 2026,
    order: 7,
    description:
      '학업 성적, 봉사활동 및 학교생활의 성실도를 종합적으로 평가하여 단과대별 여학생 1명에게 수여하는 전액 장학금 수혜',
    proofs: [
      {
        src: resolveAssetUrl('/certificates/scholarship-2026.png'),
        title: '2026학년도 순천향대학교 김정옥 장학증서',
        date: '2026.04.02',
        alt: '순천향대학교 2026학년도 김정옥 장학증서 (권유담)',
      },
    ],
  },

  // 4순위: 교육 프로그램 수료
  {
    id: 'training-future-creator-2026',
    category: 'EDUCATION & TRAINING',
    categoryLabel: '프로그램 수료',
    title: '2026 미래 창작자 성장 과정 수료',
    organization: '충남콘텐츠진흥원',
    date: '2026.10.23',
    year: 2026,
    order: 8,
    description:
      "충남글로벌게임센터 운영 '2026 미래 창작자 성장 과정'(2026년 4월~10월)에 삼유스튜디오 팀으로 참여하여 교육 과정 수료",
    proofs: [
      {
        src: resolveAssetUrl('/certificates/미래창작자_수료증.jpg'),
        title: '2026 미래 창작자 성장 과정 수료증 (삼유스튜디오)',
        date: '2026.10.23',
        alt: '충남콘텐츠진흥원 2026 미래 창작자 성장 과정 수료증 (삼유스튜디오)',
      },
    ],
  },
  {
    id: 'training-human-interface-2026',
    category: 'EDUCATION & TRAINING',
    categoryLabel: '교육 이수',
    title: '휴먼인터페이스 디자인 실습 프로그램 이수',
    organization: '서울대학교 대학연대 지역인재양성 사업단',
    date: '2026.07.06 ~ 2026.07.10',
    year: 2026,
    order: 9,
    description: '인간과 인터페이스의 관계를 다루는 디자인 실습 교육 이수',
    proofs: [
      {
        src: resolveAssetUrl('/certificates/training-certificate-2026.png'),
        title: '서울대학교 교육 프로그램 이수증 (휴먼인터페이스 디자인 실습)',
        date: '2026.07.10',
        alt: '서울대학교 대학연대 지역인재양성 사업단 교육 프로그램 이수증',
      },
    ],
  },

  // 5순위: 대외활동 (학생자치 활동)
  {
    id: 'leadership-sch-delegate',
    category: 'LEADERSHIP',
    categoryLabel: '학생자치 활동',
    title: '순천향대학교 대의원 활동',
    organization: '순천향대학교 총대의원회',
    date: '2025.04 & 2026.04',
    year: 2026,
    order: 10,
    description: '2025년 및 2026년 순천향대학교 대의원 인준 및 대의원 활동',
    details: [
      '2025년도 대의원 인준 (2025.04.30)',
      '2026년도 대의원 인준 (2026.04.30)',
    ],
    proofs: [
      {
        src: resolveAssetUrl('/certificates/student-council-2025.png'),
        title: '2025년도 순천향대학교 대의원 인준서 (총대의원회)',
        date: '2025.04.30',
        alt: '2025년도 순천향대학교 대의원 인준서',
      },
      {
        src: resolveAssetUrl('/certificates/student-council-2026.png'),
        title: '2026년도 순천향대학교 대의원 인준서 (총대의원회)',
        date: '2026.04.30',
        alt: '2026년도 순천향대학교 대의원 인준서',
      },
    ],
  },
];
