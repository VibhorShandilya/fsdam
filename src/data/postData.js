import page1Profile from "./assets/profile.png";
import p1 from "./assets/p1.png";

const postData = [
  {
    id: 1,
    postHeader: {
      PageName: "안녕 나 응애",
      PageProfile: page1Profile,
      isVerified: true,
      PageAltT1: "1일전",
      PageAltT2: "165cm • 53kg",
      postMainDesc: "지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?",
      postDesc: [
        "지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~혹시 어떤 상품이 제일 괜찮았어?",
        "후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 제일 재밌었다던데 맞아???",
        "올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!",
      ],
      postTags: ["2023", "TODAYISMONDAY", "TOP", "POPS!", "WOW", "ROW"],
    },
    postImages: [
      "https://wjddnjs754.cafe24.com/web/product/small/202303/5b9279582db2a92beb8db29fa1512ee9.jpg",
      "https://wjddnjs754.cafe24.com/web/product/small/202303/5b9279582db2a92beb8db29fa1512ee9.jpg",
      "https://wjddnjs754.cafe24.com/web/product/small/202303/5b9279582db2a92beb8db29fa1512ee9.jpg",
    ],

    postComments: {
      postLikes: 5,
      Comments: [
        {
          commentBy: {
            avatar: page1Profile,
            name: "안녕 나 응애",
            isVerified: true,
            meta: "1일전",
          },
          comment: {
            description:
              "어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭 봐주세용~!",
            likes: 5,
            nestedComments: {
              likes: 5,
              comments: [
                {
                  commentBy: {
                    avatar: p1,
                    name: "ㅇㅅㅇ",
                    isVerified: false,
                    meta: "1일전",
                  },
                  likes: 5,
                  description:
                    "오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다",
                },
              ],
            },
          },
        },
      ],
    },
  },
];

export { postData };
