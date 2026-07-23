/* Portfolio Projects Data */

const projectsData = [
  {
    id: "fino",
    title: "Fino Mobile Banking",
    tagline: "Reimagining personal banking for Gen-Z with brutalist clarity and intuitive flow.",
    category: "UI/UX • Mobile App",
    year: "2025",
    client: "Fino Technologies Ltd.",
    role: "Lead Product Designer",
    tools: "Figma, Principle, Spline 3D",
    image: "assets/fino_mockup.png",
    description: "Fino là ứng dụng ngân hàng số tối giản hướng tới thế hệ Gen Z, giúp giảm bớt sự phức tạp và lo âu tài chính của các app ngân hàng truyền thống thông qua ngôn ngữ thiết kế Neobrutalism rõ ràng và tương tác xúc giác trực quan.",
    challenge: `
      <div class="cs-subsection">
        <h4 style="color: var(--accent-teal); margin-bottom: 12px;">Bối cảnh dự án</h4>
        <p>Thế hệ trẻ (đặc biệt là Gen Z từ 18-25 tuổi) đang bắt đầu tự chủ tài chính nhưng gặp nhiều khó khăn khi tiếp cận các ứng dụng ngân hàng hiện tại. Hầu hết các ứng dụng này đều có giao diện quá tải thông tin, nhiều quảng cáo dịch vụ đi kèm và biểu đồ số dư phức tạp gây cảm giác lo âu (Financial Anxiety).</p>
      </div>
      <div class="cs-subsection" style="margin-top: 24px;">
        <h4 style="color: var(--accent-teal); margin-bottom: 12px;">Thách thức cốt lõi</h4>
        <p>Làm thế nào để đơn giản hóa trải nghiệm quản lý tài chính cá nhân về các tác vụ cốt lõi nhất (Chuyển khoản, Xem số dư, Tiết kiệm tích lũy) mà vẫn đảm bảo tính bảo mật nghiêm ngặt và mang lại cảm giác thú vị, chủ động cho người dùng?</p>
      </div>
      <div class="cs-subsection" style="margin-top: 24px;">
        <h4 style="color: var(--accent-teal); margin-bottom: 12px;">Mục tiêu thiết kế</h4>
        <ul style="margin-left: 20px; color: var(--text-muted); list-style-type: square; line-height: 1.8;">
          <li>Giảm tải nhận thức (Cognitive Load) bằng cách ẩn các menu phụ ít dùng.</li>
          <li>Xây dựng tính năng tiết kiệm tích lũy thụ động có tính tương tác cao (Gamification).</li>
          <li>Thiết kế ngôn ngữ trực quan mạnh mẽ, tương phản cao để làm nổi bật dòng tiền đi/đến.</li>
        </ul>
      </div>
    `,
    process: `
      <div class="cs-subsection">
        <h4 style="color: var(--accent-teal); margin-bottom: 12px;">1. Nghiên cứu người dùng & Khám phá (User Research)</h4>
        <p>Chúng tôi đã tiến hành phỏng vấn chuyên sâu 15 bạn trẻ tuổi từ 18-24 và khảo sát nhanh 120 người dùng trực tuyến. Kết quả chỉ ra:</p>
        <ul style="margin-left: 20px; margin-bottom: 16px; color: var(--text-muted); list-style-type: decimal;">
          <li><strong>73%</strong> người dùng cảm thấy căng thẳng khi app ngân hàng hiển thị biểu đồ giảm sút hoặc các cảnh báo đỏ.</li>
          <li><strong>65%</strong> không hiểu hết các thuật ngữ tài chính chuyên ngành trên các app hiện nay.</li>
          <li><strong>80%</strong> muốn có một ngăn quỹ tiết kiệm nhỏ cho các mục tiêu ngắn hạn (như mua giày, đi du lịch) thay vì gửi tiết kiệm kỳ hạn dài.</li>
        </ul>
      </div>
      
      <div class="cs-subsection" style="margin-top: 32px;">
        <h4 style="color: var(--accent-teal); margin-bottom: 12px;">2. Luồng người dùng & Wireframe (User Flow & Wireframing)</h4>
        <p>Chúng tôi tối giản hóa cấu trúc thông tin (Information Architecture) từ 5 tab điều hướng xuống còn 3 tab chính: <strong>Home (Ví chính), Vaults (Quỹ tích lũy), và Activity (Lịch sử giao dịch)</strong>. Phép kiểm tra độ khả dụng (Usability Testing) với mô hình giấy cho thấy tốc độ chuyển khoản tăng gấp 2 lần nhờ rút ngắn các bước xác nhận dư thừa.</p>
      </div>

      <div class="cs-subsection" style="margin-top: 32px;">
        <h4 style="color: var(--accent-teal); margin-bottom: 12px;">3. Thiết kế giao diện trực quan (UI Design & Design System)</h4>
        <p>Quyết định sử dụng phong cách <strong>Neobrutalism</strong> kết hợp tông màu <strong>Dark Teal</strong> chủ đạo:</p>
        <ul style="margin-left: 20px; margin-bottom: 16px; color: var(--text-muted); list-style-type: circle;">
          <li><strong>Typography:</strong> Font không chân Space Grotesk nét dày mang cảm giác đương đại, trẻ trung.</li>
          <li><strong>Tactile Cards:</strong> Các thẻ ví và nút chuyển khoản có viền đen đậm, đổ bóng phẳng đổ cứng. Khi nhấn vào, nút sẽ di chuyển thụt lùi tạo cảm giác bấm cơ học.</li>
          <li><strong>Màu sắc:</strong> Màu nền Dark Teal dịu mắt kết hợp với màu Neon Teal (đại diện cho thu nhập) và màu Coral (đại diện cho chi tiêu) giúp nhận diện dòng tiền tức thì.</li>
        </ul>
      </div>
    `,
    outcome: `
      <div class="cs-subsection">
        <h4 style="color: var(--accent-teal); margin-bottom: 12px;">Kết quả thực tế</h4>
        <p>Fino đã phát hành phiên bản thử nghiệm (Beta) tại thị trường nội địa và đạt được những chỉ số tăng trưởng ấn tượng:</p>
        <ul style="margin-left: 20px; margin-bottom: 20px; color: var(--text-muted); list-style-type: disc; line-height: 1.8;">
          <li><strong style="color: var(--accent-yellow);">+50,000</strong> lượt đăng ký mở tài khoản trong 4 tuần đầu tiên.</li>
          <li>Tỷ lệ người dùng duy trì thói quen tích lũy hàng ngày qua tính năng "Swipe-to-save" (Vuốt nhanh tiết kiệm lẻ) tăng <strong style="color: var(--accent-yellow);">78%</strong> so với phương thức chuyển khoản tiết kiệm truyền thống.</li>
          <li>Chỉ số hài lòng sản phẩm (CSAT) đạt <strong style="color: var(--accent-yellow);">4.8/5</strong>, với phản hồi tích cực nhất dành cho giao diện tối giản, trực quan và các nút bấm mang cảm giác cơ học đã tay.</li>
        </ul>
      </div>
      <div class="cs-subsection" style="margin-top: 24px;">
        <h4 style="color: var(--accent-teal); margin-bottom: 12px;">Bài học rút ra</h4>
        <p>Nghiên cứu này chứng minh rằng việc thiết kế không chỉ là trang trí bề nổi. Bằng việc thấu hiểu nỗi sợ tài chính của thế hệ trẻ và giải quyết nó bằng trải nghiệm tương tác trực quan, vui nhộn, chúng tôi có thể thay đổi hành vi tích lũy tài chính của họ theo hướng tích cực hơn.</p>
      </div>
    `,
    gallery: [
      "assets/fino_process1.png",
      "assets/fino_process2.png"
    ]
  },
  {
    id: "voyage",
    title: "Voyage Travel Dashboard",
    tagline: "A bold, distraction-free travel portal designed to search, book, and log unique destinations.",
    category: "Web App • Interaction",
    year: "2026",
    client: "Voyage Explorer Co.",
    role: "Product & UI/UX Designer",
    tools: "Figma, Webflow, Adobe CC",
    image: "assets/voyage_mockup.png",
    description: "An all-in-one web portal for modern travelers seeking curated, off-the-grid travel packages and an interactive digital journal.",
    challenge: "Travel booking sites are notorious for high-pressure UI dark patterns, flashing countdown timers, and messy layouts. Voyage aimed to create the exact opposite: a calm, intentional, and artistic portal where planning a trip feels as exciting as the trip itself. The visual language needed to reflect natural elements while preserving Brutalist layouts.",
    process: "I mapped out the entire user journey from discovery to packing checklist. By creating a grid-based booking dashboard, travelers can easily drag and drop activities into a calendar view. We replaced traditional search filters with a dynamic 'Vibe Selector' (e.g., Cozy, Adventurous, Isolated) which matches destinations with the user's current mood using clean tag systems.",
    outcome: "The final product was praised for its aesthetic freshness. Users spent on average 4.2x more time on the planning phase compared to competitors because they enjoyed interacting with the map widgets and calendar boards. Bounce rates fell by 34% due to the transparent, zero-pressure pricing widgets.",
    gallery: [
      "assets/voyage_process1.png",
      "assets/voyage_process2.png"
    ]
  },
  {
    id: "hestia",
    title: "Hestia Smart Home UI",
    tagline: "Designing a tactile, physical-feeling interface for smart home automation hardware.",
    category: "UI/UX • Smart Interface",
    year: "2025",
    client: "Hestia Systems Inc.",
    role: "Interaction Designer",
    tools: "Figma, ProtoPie, Blender",
    image: "assets/hestia_mockup.png",
    description: "Hestia is a smart home interface designed for walls and tablets, emphasizing physical tactile response and high-contrast control states.",
    challenge: "Most smart home UI controls rely on generic sliders and flat icons that lack sensory feedback, making it hard to adjust light levels or temperature accurately from a distance. As smart displays are placed on walls, they need to look beautiful when idle and remain extremely easy to operate for children and elderly individuals alike.",
    process: "We designed a layout heavily inspired by physical control panels. Neobrutalist buttons behave like real toggle switches, casting heavy black shadows when turned OFF, and sinking flat into the screen with a glowing neon border when ON. Large radial dials let users control temperature and volume with clear numeric feedback visible from across the room.",
    outcome: "Hestia's wall panel went into production in Q4 2025. Hardware testing showed a 50% decrease in input errors (accidental taps or over-adjusting) because the visual touch targets were distinct and large, and the virtual tactile response (sound & micro-vibration cues) matched the brutalist visuals perfectly.",
    gallery: [
      "assets/hestia_process1.png",
      "assets/hestia_process2.png"
    ]
  }
];

// Exporting to window for global access in scripts
window.projectsData = projectsData;
