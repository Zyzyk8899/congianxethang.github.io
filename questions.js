const subjects = [
  {
    id: "phap-luat",
    name: "Pháp Luật Đại Cương",
    description: "Nắm vững bản chất Nhà nước & Pháp luật, các ngành luật cơ bản (Dân sự, Hình sự, Lao động, Hôn nhân và Gia đình) và Luật Phòng chống tham nhũng.",
    badge: "HCMUTE 2023 • 298 Trang",
    theme: {
      primary: "#2d6df6",
      accent: "#5a8dff"
    },
    stats: [
      { icon: "✓", label: "Ngân hàng câu hỏi", value: "195 câu MCQ" },
      { icon: "◌", label: "Thẻ nhớ flashcards", value: "110 thẻ" },
      { icon: "◔", label: "Thi thử chuẩn", value: "40 câu / 60 phút" },
      { icon: "✓", label: "Chương giáo trình", value: "7 chương" }
    ],
    chapters: [
      { id: 1, title: "Tổng quan về Nhà nước & Pháp luật", total: 25, current: 0 },
      { id: 2, title: "Quyền con người", total: 30, current: 0 },
      { id: 3, title: "Luật dân sự", total: 35, current: 0 },
      { id: 4, title: "Luật hình sự", total: 40, current: 0 },
      { id: 5, title: "Luật lao động", total: 30, current: 0 },
      { id: 6, title: "Luật hôn nhân và gia đình", total: 35, current: 0 },
      { id: 7, title: "Luật phòng chống tham nhũng", total: 25, current: 0 }
    ],
    questions: [
      {
        id: "PL-01",
        question: "Nhà nước có các chức năng nào?",
        answers: [
          { text: "Chức năng lập pháp, hành pháp, tư pháp", correct: true },
          { text: "Chức năng sản xuất, kinh doanh, thương mại", correct: false },
          { text: "Chức năng nghiên cứu, phát triển, giáo dục", correct: false },
          { text: "Chức năng bảo vệ môi trường duy nhất", correct: false }
        ]
      },
      {
        id: "PL-02",
        question: "Quyền con người được hiểu là?",
        answers: [
          { text: "Những quyền cơ bản của con người do pháp luật công nhận", correct: true },
          { text: "Quyền chỉ dành cho cán bộ nhà nước", correct: false },
          { text: "Quyền thuộc về doanh nghiệp", correct: false },
          { text: "Quyền được miễn thuế", correct: false }
        ]
      },
      {
        id: "PL-03",
        question: "Luật Dân sự điều chỉnh các quan hệ nào?",
        answers: [
          { text: "Quan hệ giữa cá nhân, tổ chức trong đời sống xã hội", correct: true },
          { text: "Chỉ quan hệ giữa lực lượng vũ trang", correct: false },
          { text: "Chỉ quan hệ công chứng", correct: false },
          { text: "Chỉ quan hệ quốc tế", correct: false }
        ]
      }
    ]
  },
  {
    id: "c-lang",
    name: "Lập trình C & C++",
    description: "Hệ thống ôn tập trọng tâm cho ngôn ngữ C/C++ với chương trình UTT và HCMUTE.",
    badge: "HCMUTE 2023",
    theme: {
      primary: "#2d6df6",
      accent: "#5e8cff"
    },
    stats: [
      { icon: "◌", label: "Ngân hàng câu hỏi", value: "270 câu MCQ" },
      { icon: "◌", label: "Thẻ nhớ flashcards", value: "125 thẻ" },
      { icon: "◔", label: "Thi thử chuẩn", value: "45 câu / 90 phút" },
      { icon: "✓", label: "Chương giáo trình", value: "9 chương" }
    ],
    chapters: [
      { id: 1, title: "Tổng quan về Ngôn ngữ C & Môi trường lập trình", total: 25, current: 0 },
      { id: 2, title: "Kiểu dữ liệu cơ bản", total: 30, current: 0 },
      { id: 3, title: "Câu lệnh điều kiện", total: 35, current: 0 },
      { id: 4, title: "Vòng lặp", total: 40, current: 0 },
      { id: 5, title: "Mảng", total: 30, current: 0 },
      { id: 6, title: "Hàm", total: 35, current: 0 },
      { id: 7, title: "Con trỏ", total: 25, current: 0 },
      { id: 8, title: "Cấu trúc", total: 20, current: 0 },
      { id: 9, title: "Tệp tin", total: 20, current: 0 }
    ],
    questionSets: [
      {
        id: "q1",
        title: "Chương 1",
        prompt: "Trình bày khái niệm về ngôn ngữ C và môi trường lập trình.",
        examples: [
          "C là ngôn ngữ bậc trung, mạnh, hiệu quả và có thể kiểm soát bộ nhớ.",
          "C hỗ trợ cấu trúc, hàm, biến và thao tác dữ liệu trực tiếp.",
          "Một chương trình C gồm: hàm main(), thư viện, biến và câu lệnh."
        ]
      }
    ],
    questions: [
      {
        id: "C-01",
        question: "Đặc điểm nào dưới đây là đúng về ngôn ngữ C?",
        answers: [
          { text: "C là ngôn ngữ hướng đối tượng thuần túy", correct: false },
          { text: "C là ngôn ngữ lập trình bậc trung, mạnh và hiệu quả", correct: true },
          { text: "C không hỗ trợ cấu trúc dữ liệu", correct: false },
          { text: "C chỉ dùng cho web", correct: false }
        ]
      },
      {
        id: "C-02",
        question: "Phần đầu của chương trình C thường chứa gì?",
        answers: [
          { text: "Câu lệnh điều kiện", correct: false },
          { text: "Thư viện và khai báo", correct: true },
          { text: "Hàm render", correct: false },
          { text: "HTML", correct: false }
        ]
      },
      {
        id: "C-03",
        question: "Câu lệnh nào được dùng để in ra màn hình?",
        answers: [
          { text: "scanf()", correct: false },
          { text: "printf()", correct: true },
          { text: "for()", correct: false },
          { text: "return", correct: false }
        ]
      }
    ]
  }
];
