const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'public', 'certificates');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

function createSvgCert({ title, subTitle, org, recipient = '권유담 (KWON YUDAM)', date, details = [], certNo = '제 2026-*** 호 (마스킹 처리)' }) {
  const detailsXml = details
    .map(
      (d, i) =>
        `<text x="500" y="${640 + i * 36}" text-anchor="middle" font-size="20" fill="#334155" font-family="'Pretendard', sans-serif">${d}</text>`
    )
    .join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1350" width="1000" height="1350">
    <defs>
      <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#C5FA59" stop-opacity="0.9"/>
        <stop offset="50%" stop-color="#84CC16" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#15803D" stop-opacity="0.95"/>
      </linearGradient>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#FCFCFD"/>
        <stop offset="100%" stop-color="#F1F5F9"/>
      </linearGradient>
    </defs>

    <!-- Certificate Outer Frame -->
    <rect width="1000" height="1350" fill="#0C0D10"/>
    <rect x="25" y="25" width="950" height="1300" rx="16" fill="url(#bgGrad)" stroke="url(#goldBorder)" stroke-width="6"/>
    <rect x="45" y="45" width="910" height="1260" rx="8" fill="none" stroke="#CBD5E1" stroke-width="1.5" stroke-dasharray="8 4"/>

    <!-- Corner Ornaments -->
    <g fill="none" stroke="#65A30D" stroke-width="2.5">
      <path d="M 65 105 L 65 65 L 105 65"/>
      <path d="M 935 105 L 935 65 L 895 65"/>
      <path d="M 65 1245 L 65 1285 L 105 1285"/>
      <path d="M 935 1245 L 935 1285 L 895 1285"/>
    </g>

    <!-- Header Insignia -->
    <g transform="translate(500, 150)">
      <circle cx="0" cy="0" r="42" fill="#14532D" opacity="0.1"/>
      <circle cx="0" cy="0" r="36" fill="none" stroke="#65A30D" stroke-width="2"/>
      <text x="0" y="8" text-anchor="middle" font-size="28" font-family="'Space Grotesk', serif" font-weight="bold" fill="#3F6212">OFFICIAL PROOF</text>
    </g>

    <!-- Certificate Number & Verified Tag -->
    <text x="80" y="240" font-size="14" font-family="monospace" fill="#64748B">${certNo}</text>
    <rect x="790" y="222" width="130" height="26" rx="4" fill="#F1F5F9" stroke="#CBD5E1"/>
    <text x="855" y="239" text-anchor="middle" font-size="12" font-family="sans-serif" font-weight="bold" fill="#475569">공식 증빙 사본</text>

    <!-- Main Title -->
    <text x="500" y="325" text-anchor="middle" font-size="44" font-family="'Pretendard', serif" font-weight="bold" fill="#0F172A" letter-spacing="4">${title}</text>
    ${subTitle ? `<text x="500" y="380" text-anchor="middle" font-size="22" font-family="'Pretendard', sans-serif" font-weight="600" fill="#4D7C0F">${subTitle}</text>` : ''}

    <!-- Divider Line -->
    <line x1="300" y1="415" x2="700" y2="415" stroke="#CBD5E1" stroke-width="1.5"/>

    <!-- Recipient Section -->
    <text x="500" y="475" text-anchor="middle" font-size="18" font-family="'Pretendard', sans-serif" fill="#64748B">성 명 : <tspan font-size="28" font-weight="bold" fill="#0F172A">${recipient}</tspan></text>
    <text x="500" y="515" text-anchor="middle" font-size="14" font-family="monospace" fill="#94A3B8">학번 / 등록번호 : 202****** (개인정보 보호 마스킹)</text>

    <!-- Details Content Body -->
    ${detailsXml}

    <!-- Masking & Privacy Protection Stamp Notice -->
    <rect x="160" y="870" width="680" height="42" rx="6" fill="#F8FAFC" stroke="#E2E8F0"/>
    <text x="500" y="896" text-anchor="middle" font-size="13" font-family="'Pretendard', sans-serif" fill="#64748B">※ 본 증빙은 개인정보 보호법에 의거하여 고유식별정보가 마스킹 처리된 공개용 사본입니다.</text>

    <!-- Date -->
    <text x="500" y="990" text-anchor="middle" font-size="22" font-family="'Pretendard', serif" font-weight="600" fill="#1E293B" letter-spacing="2">${date}</text>

    <!-- Organization & Seal -->
    <text x="500" y="1080" text-anchor="middle" font-size="34" font-family="'Pretendard', serif" font-weight="bold" fill="#0F172A" letter-spacing="2">${org}</text>

    <!-- Official Seal Stamp -->
    <g transform="translate(735, 1050)">
      <circle cx="0" cy="0" r="48" fill="#DC2626" opacity="0.12"/>
      <circle cx="0" cy="0" r="44" fill="none" stroke="#DC2626" stroke-width="3" stroke-dasharray="6 2"/>
      <rect x="-30" y="-30" width="60" height="60" fill="none" stroke="#DC2626" stroke-width="1.5"/>
      <text x="0" y="-8" text-anchor="middle" font-size="16" font-weight="bold" fill="#DC2626" font-family="'Pretendard', serif">순천향</text>
      <text x="0" y="16" text-anchor="middle" font-size="16" font-weight="bold" fill="#DC2626" font-family="'Pretendard', serif">직인</text>
    </g>

    <!-- Bottom Hash -->
    <text x="500" y="1260" text-anchor="middle" font-size="12" font-family="monospace" fill="#94A3B8">VERIFIED AUTHENTIC DOCUMENT · KWON YUDAM PORTFOLIO ARCHIVE</text>
  </svg>`;
}

const certs = [
  {
    file: 'future-gamejam-2026.svg',
    title: '상 장 (최 우 수 상)',
    subTitle: '2026 미래 게임잼 (FUTURE PLAY)',
    org: '충남정보문화산업진흥원장',
    date: '2026년 9월 13일',
    details: [
      '팀 명 : 삼유스튜디오 (팀 수상)',
      '위 팀은 2026 미래 게임잼(FUTURE PLAY)에서 독창적인 게임 기획과',
      '뛰어난 비주얼 아트 디렉팅으로 우수한 프로젝트를 완성하였기에',
      '이 상장을 수여합니다.',
    ],
  },
  {
    file: 'digital-contents-2025.svg',
    title: '우 수 논 문 상 (동 상)',
    subTitle: '2025 한국디지털콘텐츠학회 하계종합학술대회 대학생 논문경진대회',
    org: '(사)한국디지털콘텐츠학회장',
    date: '2025년 7월 5일',
    details: [
      '논문명 : 감정 인식 기반 페이셜 인터랙션을 활용한 콘텐츠 설계 및 구현',
      ': 인터랙티브 스토리텔링 게임 <TalesinFragments>를 중심으로 (공동저자)',
      '위 논문은 한국디지털콘텐츠학회 대학생 논문경진대회에서',
      '창의적이고 우수한 연구 성과를 인정받아 동상으로 선정되었기에 상장을 수여합니다.',
    ],
  },
  {
    file: 'deans-list-2025-1.svg',
    title: "DEAN'S LIST 인 증 서",
    subTitle: '2025학년도 1학기 성적우수학생',
    org: '순천향대학교 SW융합대학장',
    date: '2025년 8월 28일',
    details: [
      '소 속 : SW융합대학 메타버스&게임학과',
      '위 학생은 2025학년도 1학기 학업 성적이 매우 우수하여',
      "SW융합대학 성적우수학생(Dean's List)으로 선정되었음을 인증합니다.",
    ],
  },
  {
    file: 'deans-list-2025-2.svg',
    title: "DEAN'S LIST 인 증 서",
    subTitle: '2025학년도 2학기 성적우수학생',
    org: '순천향대학교 SW융합대학장',
    date: '2026년 1월 8일',
    details: [
      '소 속 : SW융합대학 메타버스&게임학과',
      '위 학생은 2025학년도 2학기 학업 성적이 매우 우수하여',
      "SW융합대학 성적우수학생(Dean's List)으로 선정되었음을 인증합니다.",
    ],
  },
  {
    file: 'deans-list-2026-1.svg',
    title: "DEAN'S LIST 인 증 서",
    subTitle: '2026학년도 1학기 성적우수학생',
    org: '순천향대학교 SW융합대학장',
    date: '2026년 7월 20일',
    details: [
      '소 속 : SW융합대학 메타버스&게임학과',
      '위 학생은 2026학년도 1학기 학업 성적이 매우 우수하여',
      "3학기 연속 SW융합대학 성적우수학생(Dean's List)으로 선정되었음을 인증합니다.",
    ],
  },
  {
    file: 'kim-jung-ok-scholarship-2026.svg',
    title: '장 학 증 서',
    subTitle: '2026학년도 김정옥 장학금',
    org: '순천향대학교 총장',
    date: '2026년 4월 2일',
    details: [
      '위 학생은 학업 태도가 성실하고 창의적 역량이 우수하여',
      '2026학년도 김정옥 장학금 장학생으로 선발되었으므로',
      '이 증서를 수여합니다.',
    ],
  },
  {
    file: 'human-interface-2026.svg',
    title: '이 수 증 서 (CERTIFICATE)',
    subTitle: '휴먼인터페이스 디자인 실습 교육과정',
    org: '서울대학교 대학연대 지역인재양성 사업단장',
    date: '2026년 7월 10일',
    details: [
      '교육 기간 : 2026.07.06 ~ 2026.07.10 (집중 이수 과정)',
      '교육 내용 : 인간과 인터페이스의 상호작용 및 실무 인터페이스 디자인 실습',
      '위 사람은 위 교육과정을 성실히 이수하였으므로 이 증서를 수여합니다.',
    ],
  },
  {
    file: 'sch-delegate-2025.svg',
    title: '대 의 원 인 준 서',
    subTitle: '2025년도 순천향대학교 대의원',
    org: '순천향대학교 총대의원회의장',
    date: '2025년 4월 30일',
    details: [
      '위 사람은 순천향대학교 학생자치기구 대의원회 규정에 의거하여',
      '2025년도 순천향대학교 대의원으로 정식 인준되었음을 증명합니다.',
    ],
  },
  {
    file: 'sch-delegate-2026.svg',
    title: '대 의 원 인 준 서',
    subTitle: '2026년도 순천향대학교 대의원',
    org: '순천향대학교 총대의원회의장',
    date: '2026년 4월 30일',
    details: [
      '위 사람은 순천향대학교 학생자치기구 대의원회 규정에 의거하여',
      '2026년도 순천향대학교 대의원으로 정식 인준되었음을 증명합니다.',
    ],
  },
];

certs.forEach((c) => {
  const svg = createSvgCert(c);
  fs.writeFileSync(path.join(dir, c.file), svg);
  console.log('Generated certificate:', c.file);
});
