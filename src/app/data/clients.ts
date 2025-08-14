// data/clients.ts

export type Client = {
  name: string;
  logo: string;
  domains: string[]; // 포함되는 도메인
};

export const clients = [
  { name: "여기어때컴퍼니", logo: "/clients/yeogi.png", domains: ["platform"] },
  { name: "지마켓", logo: "/clients/gmarket.png", domains: ["platform"] },
  { name: "11번가", logo: "/clients/11street.png", domains: ["platform"] },
  { name: "cj오쇼핑", logo: "/clients/cjoshopping.png", domains: ["platform"] },
  { name: "엔에이치엔", logo: "/clients/nhn.png", domains: ["platform"] },
  { name: "엔티에스", logo: "/clients/nts.png", domains: ["platform"] },
  { name: "ok저축은행", logo: "/clients/oksavingbank.png", domains: ["platform"] },
  { name: "skm엔서비스", logo: "/clients/skm&service.png", domains: ["platform"] },
  { name: "글라이드", logo: "/clients/glyde.png", domains: ["platform"] },
  { name: "동원홈푸드", logo: "/clients/dongwon.png", domains: ["platform"] },
  { name: "마켓컬리", logo: "/clients/kulry.png", domains: ["platform"] },
  { name: "뱅크샐러드", logo: "/clients/banksalad.png", domains: ["platform"] },
  { name: "베네피아", logo: "/clients/benepia.png", domains: ["platform"] },
  { name: "스마일게이트스토브", logo: "/clients/smilegatestove.png", domains: ["platform"] },
  { name: "세븐일레븐", logo: "/clients/7eleven.png", domains: ["platform"] },
  { name: "스마일게이트홀딩스", logo: "/clients/smilegateholdings.png", domains: ["platform"] },
  { name: "신세계인터내셔날", logo: "/clients/sikorea.png", domains: ["platform"] },
  { name: "신한은행", logo: "/clients/shinhanbank.png", domains: ["platform"] },
  { name: "아시아나IDT", logo: "/clients/asianaidt.png", domains: ["platform"] },
  { name: "아이스크림에듀", logo: "/clients/icecreamedu.png", domains: ["platform"] },
  { name: "우리카드", logo: "/clients/wooricard.png", domains: ["platform"] },
  { name: "윌라", logo: "/clients/wila.png", domains: ["platform"] },
  { name: "이랜드몰", logo: "/clients/elandmall.png", domains: ["platform"] },
  { name: "이마트", logo: "/clients/emart.png", domains: ["platform"] },
  { name: "토스", logo: "/clients/toss.png", domains: ["platform"] },
  { name: "파스토", logo: "/clients/fassto.png", domains: ["platform"] },
  { name: "파이언넷", logo: "/clients/pionnet.png", domains: ["platform"] },
  { name: "프리윌린", logo: "/clients/freewheelin.png", domains: ["platform"] },
  { name: "하나손해보험", logo: "/clients/hanainsure.png", domains: ["platform"] },
  { name: "바비톡", logo: "/clients/babitalk.png", domains: ["platform"] },
  { name: "플래티어", logo: "/clients/plateer.png", domains: ["platform"] },

  { name: "삼성전자", logo: "/clients/samsungelecronic.png", domains: ["ictsi", "embedded"] },
  { name: "삼성SDS", logo: "/clients/sds.png", domains: ["ictsi"] },
  { name: "포스코ict", logo: "/clients/poscoict.png", domains: ["ictsi"] },
  { name: "LGCNS", logo: "/clients/lgcns.png", domains: ["ictsi"] },
  { name: "젬백스링크", logo: "/clients/gemvaxlink.png", domains: ["ictsi"] },
  { name: "한글과컴퓨터", logo: "/clients/hancom.png", domains: ["ictsi"] },
  { name: "ADOBE", logo: "/clients/adobe.png", domains: ["platform", "ictsi"] },

  { name: "모트렉스", logo: "/clients/motrex.png", domains: ["car"] },
  { name: "마르시스", logo: "/clients/marusys.png", domains: ["car"] },
  { name: "오토잇", logo: "/clients/autoit.png", domains: ["car"] },
  { name: "효림엑스이", logo: "/clients/hyorim.png", domains: ["car"] },
  { name: "엔지스", logo: "/clients/engis.png", domains: ["car"] },



  { name: "에스원", logo: "/clients/s1.png", domains: ["embedded", "security"] },
  { name: "SK쉴더스", logo: "/clients/skshieldus.png", domains: ["embedded", "security"] },
  { name: "한화비전", logo: "/clients/hanwhavision.png", domains: ["embedded", "security"] },
  { name: "한화", logo: "/clients/hanwha.png", domains: ["embedded"] },
  
  { name: "엘지에릭슨", logo: "/clients/lgericson.png", domains: ["embedded"] },
  { name: "휴맥스네트웍스", logo: "/clients/humaxnetworks.png", domains: ["embedded"] },
  { name: "제노레이", logo: "/clients/genoray.png", domains: ["embedded"] },
  { name: "뷰웍스", logo: "/clients/vieworks.png", domains: ["embedded"] },
  { name: "이지엔도서지컬", logo: "/clients/easyendo.png", domains: ["embedded"] },
  { name: "슈프리마", logo: "/clients/suprema.png", domains: ["embedded"] },
  { name: "제노레이", logo: "/clients/genoray.png", domains: ["embedded"] },
  { name: "스카이랩스", logo: "/clients/skylabs.png", domains: ["embedded"] },


  // ... 나머지 회사도 동일하게 추가
];
