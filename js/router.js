/* SPA Router for Portfolio */

const Router = {
  contentEl: null,
  activeFilter: "all",

  init() {
    this.contentEl = document.getElementById("app-content");
    
    // Listen for hash changes
    window.addEventListener("hashchange", () => this.handleRoute());
    
    // Handle initial route
    this.handleRoute();
  },

  handleRoute() {
    const hash = window.location.hash || "#home";
    
    // Fade out current content
    this.contentEl.classList.add("fade-out");
    
    setTimeout(() => {
      window.scrollTo(0, 0);
      
      if (hash === "#home") {
        this.renderHome();
      } else if (hash === "#projects") {
        this.renderProjects();
      } else if (hash === "#contact") {
        this.renderContact();
      } else if (hash.startsWith("#project/")) {
        const id = hash.split("/")[1];
        this.renderProjectDetail(id);
      } else {
        this.renderHome(); // Fallback
      }
      
      // Update Navbar Links Active State
      this.updateNavbarActive(hash);

      // Fade in new content
      this.contentEl.classList.remove("fade-out");
      
      // Reinitialize animations for new elements
      if (window.Animations) {
        window.Animations.initAnimations();
      }
    }, 200);
  },

  updateNavbarActive(hash) {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (hash === href || (hash.startsWith("#project/") && href === "#projects")) {
        link.classList.add("active");
      }
    });
  },

  renderHome() {
    // Select 3 projects
    const featuredProjects = window.projectsData.slice(0, 3);
    
    let projectsHtml = "";
    featuredProjects.forEach(proj => {
      projectsHtml += this.getProjectCardMarkup(proj);
    });

    this.contentEl.innerHTML = `
      <!-- HERO -->
      <section class="hero container reveal">
        <div class="hero-tagline">Product Designer</div>
        <h1 class="hero-title">CREATING DIGITAL<br>EXPERIENCES WITH<br><span>TACTILE IMPACT.</span></h1>
        <p class="hero-description">
          Chào bạn! Tôi là một Product Designer đam mê tạo ra các giao diện người dùng sống động, trực quan và có chiều sâu. 
          Thiết kế của tôi tập trung vào việc cân bằng giữa tính thẩm mỹ cá tính và trải nghiệm mượt mà của sản phẩm.
        </p>
        <div class="hero-cta">
          <a href="#projects" class="btn btn-primary cursor-hover-target" data-cursor="teal">Xem các dự án</a>
          <a href="#contact" class="btn btn-outline cursor-hover-target" data-cursor="coral">Liên hệ với tôi</a>
        </div>
        
        <div class="hero-decorations">
          <div class="floating-widget widget-1">Figma Expert ✦</div>
          <div class="floating-widget widget-2">10+ Shipped Apps 🚀</div>
          <div class="floating-widget widget-3">User-Centered 🧠</div>
        </div>
      </section>

      <!-- STATS -->
      <section class="stats-grid container reveal">
        <div class="stat-card">
          <div class="stat-number">04+</div>
          <div class="stat-label">Năm kinh nghiệm</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">15+</div>
          <div class="stat-label">Dự án hoàn thành</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">98%</div>
          <div class="stat-label">Khách hàng hài lòng</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">01</div>
          <div class="stat-label">Đam mê thiết kế</div>
        </div>
      </section>

      <!-- FEATURED PROJECTS -->
      <section class="projects-section reveal">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Dự án nổi bật</h2>
            <p class="section-subtitle">Dưới đây là một số case study thiết kế sản phẩm tiêu biểu mà tôi từng phụ trách.</p>
          </div>
          
          <div class="projects-grid">
            ${projectsHtml}
          </div>
          
          <div style="text-align: center; margin-top: 60px;">
            <a href="#projects" class="btn btn-secondary cursor-hover-target" data-cursor="coral">Xem tất cả dự án (3)</a>
          </div>
        </div>
      </section>

      <!-- ABOUT SECTION -->
      <section id="about-sec" class="about-section reveal">
        <div class="container">
          <div class="about-grid">
            <div class="about-content">
              <div class="badge badge-teal" style="margin-bottom: 20px;">Về tôi</div>
              <h2 class="section-title" style="margin-bottom: 32px; display: block;">Thiết kế là giải quyết bài toán của người dùng.</h2>
              <p>Tôi tin rằng một sản phẩm tốt không chỉ dừng lại ở giao diện bóng bẩy, mà là cách nó hoạt động trơn tru để giải quyết các nhu cầu thực tế của người dùng. Với nền tảng về cả Nghiên cứu người dùng (User Research) và Thiết kế tương tác (Interaction Design), tôi tiếp cận công việc bằng cách thấu hiểu sâu sắc hành vi con người.</p>
              <p>Tôi yêu thích phong cách thiết kế đậm chất cá tính, sử dụng các tương tác vật lý trực quan để giúp các sản phẩm số trở nên sống động, gần gũi hơn.</p>
            </div>
            
            <div class="skills-wrapper">
              <h3 class="skills-title">Kỹ năng chính</h3>
              <div class="skills-tags">
                <span class="skill-tag">Mobile App Design</span>
                <span class="skill-tag">Web Application UI</span>
                <span class="skill-tag">Design Systems</span>
                <span class="skill-tag">User Research</span>
                <span class="skill-tag">Interactive Prototyping</span>
                <span class="skill-tag">Product Strategy</span>
                <span class="skill-tag">3D Modelling (Spline/Blender)</span>
                <span class="skill-tag">Figma & Principle</span>
                <span class="skill-tag">Interaction Micro-effects</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  renderContact() {
    this.contentEl.innerHTML = `
      <!-- CONTACT SECTION -->
      <section class="reveal contact-section container">
        <div class="contact-grid" style="margin-top: 40px;">
          <div class="contact-info-card">
            <h2 class="contact-title">Let's create<br>something <span>bold!</span></h2>
            <p class="contact-text">Bạn đang có dự án mới cần thiết kế hoặc muốn cùng thảo luận về ý tưởng sản phẩm? Đừng ngần ngại liên hệ nhé!</p>
            
            <div class="contact-methods">
              <div class="contact-method-item">
                <div class="contact-method-icon">✉</div>
                <div class="contact-method-details">
                  <span class="contact-method-label">Email</span>
                  <a href="mailto:designer@email.com" class="contact-method-value cursor-hover-target">designer@email.com</a>
                </div>
              </div>
              <div class="contact-method-item">
                <div class="contact-method-icon">☏</div>
                <div class="contact-method-details">
                  <span class="contact-method-label">Số điện thoại</span>
                  <span class="contact-method-value">+84 987 654 321</span>
                </div>
              </div>
              <div class="contact-method-item">
                <div class="contact-method-icon">✦</div>
                <div class="contact-method-details">
                  <span class="contact-method-label">Mạng xã hội</span>
                  <a href="https://behance.net" target="_blank" class="contact-method-value cursor-hover-target" style="display:inline-block; margin-right: 12px;">Behance</a>
                  <a href="https://linkedin.com" target="_blank" class="contact-method-value cursor-hover-target">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          <div class="brutalist-card">
            <h3 class="skills-title" style="margin-bottom: 32px;">Gửi tin nhắn trực tiếp</h3>
            <form id="contact-form" onsubmit="event.preventDefault(); alert('Cảm ơn bạn! Tin nhắn đã được gửi (Mô phỏng).'); this.reset();">
              <div class="form-group">
                <label class="form-label" for="form-name">Họ và tên</label>
                <input type="text" id="form-name" class="form-input cursor-hover-target" data-cursor="teal" placeholder="Nguyễn Văn A" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="form-email">Email liên hệ</label>
                <input type="email" id="form-email" class="form-input cursor-hover-target" data-cursor="teal" placeholder="email@gmail.com" required>
              </div>
              <div class="form-group">
                <label class="form-label" for="form-msg">Lời nhắn của bạn</label>
                <textarea id="form-msg" class="form-textarea cursor-hover-target" data-cursor="teal" placeholder="Chia sẻ thêm về ý tưởng dự án của bạn..." required></textarea>
              </div>
              <button type="submit" class="btn btn-primary cursor-hover-target" data-cursor="yellow" style="width: 100%;">Gửi tin nhắn ✉</button>
            </form>
          </div>
        </div>
      </section>
    `;
  },

  renderProjects() {
    let projectsHtml = "";
    
    // Filter projects
    const filtered = window.projectsData.filter(proj => {
      if (this.activeFilter === "all") return true;
      if (this.activeFilter === "uiux") return proj.category.includes("UI/UX");
      if (this.activeFilter === "webapp") return proj.category.includes("Web App");
      if (this.activeFilter === "smart") return proj.category.includes("Smart");
      return true;
    });

    filtered.forEach(proj => {
      projectsHtml += this.getProjectCardMarkup(proj);
    });

    if (filtered.length === 0) {
      projectsHtml = `<div class="brutalist-card" style="grid-column: 1/-1; text-align: center; padding: 60px;"><p>Không tìm thấy dự án phù hợp.</p></div>`;
    }

    this.contentEl.innerHTML = `
      <section class="projects-section container reveal">
        <div class="section-header">
          <h1 class="section-title">Danh sách dự án</h1>
          <p class="section-subtitle">Tuyển tập các sản phẩm thiết kế chất lượng cao tập trung vào giải quyết vấn đề của người dùng.</p>
        </div>

        <div class="projects-filter">
          <button class="filter-btn cursor-hover-target ${this.activeFilter === "all" ? "active" : ""}" data-filter="all">Tất cả</button>
          <button class="filter-btn cursor-hover-target ${this.activeFilter === "uiux" ? "active" : ""}" data-filter="uiux">UI/UX & Mobile</button>
          <button class="filter-btn cursor-hover-target ${this.activeFilter === "webapp" ? "active" : ""}" data-filter="webapp">Web Application</button>
          <button class="filter-btn cursor-hover-target ${this.activeFilter === "smart" ? "active" : ""}" data-filter="smart">Smart System</button>
        </div>

        <div class="projects-grid">
          ${projectsHtml}
        </div>
      </section>
    `;

    // Bind filter events
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        this.activeFilter = e.target.getAttribute("data-filter");
        this.renderProjects();
      });
    });
  },

  renderProjectDetail(id) {
    const project = window.projectsData.find(p => p.id === id);
    if (!project) {
      this.contentEl.innerHTML = `
        <div class="container reveal" style="padding: 100px 0; text-align: center;">
          <h2 class="section-title">Không tìm thấy dự án</h2>
          <p style="margin: 24px 0 40px 0; color: var(--text-muted);">Dự án bạn yêu cầu không tồn tại.</p>
          <a href="#projects" class="btn btn-primary cursor-hover-target">Quay về trang dự án</a>
        </div>
      `;
      return;
    }

    // Find next project
    const currentIndex = window.projectsData.findIndex(p => p.id === id);
    const nextIndex = (currentIndex + 1) % window.projectsData.length;
    const nextProject = window.projectsData[nextIndex];

    this.contentEl.innerHTML = `
      <section class="project-detail container reveal">
        <a href="#projects" class="btn btn-outline detail-back-btn cursor-hover-target" data-cursor="teal">← Quay về dự án</a>

        <div class="detail-header">
          <div class="badge badge-coral" style="margin-bottom: 20px;">${project.category}</div>
          <h1 class="detail-title">${project.title}</h1>
          <p class="hero-description">${project.tagline}</p>
        </div>

        <div class="detail-meta-strip">
          <div class="meta-item">
            <span class="meta-label">Client</span>
            <span class="meta-value">${project.client}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Vai trò</span>
            <span class="meta-value">${project.role}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Thời gian</span>
            <span class="meta-value">${project.year}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Công cụ</span>
            <span class="meta-value">${project.tools}</span>
          </div>
        </div>

        <div class="detail-hero-img-wrapper">
          <img src="${project.image}" alt="${project.title} Banner" class="detail-hero-img">
        </div>

        <div class="cs-content-grid">
          <div class="cs-section">
            <h3 class="cs-section-title">01 / The Challenge</h3>
            <div class="cs-section-body">
              <p>${project.challenge}</p>
            </div>
          </div>
          
          <div class="cs-section">
            <h3 class="cs-section-title">02 / Design Process</h3>
            <div class="cs-section-body">
              <p>${project.process}</p>
              
              <div class="cs-gallery">
                <div class="cs-gallery-item">
                  <img src="${project.gallery[0]}" alt="${project.title} Process 1">
                </div>
                <div class="cs-gallery-item">
                  <img src="${project.gallery[1]}" alt="${project.title} Process 2">
                </div>
              </div>
            </div>
          </div>
          
          <div class="cs-section">
            <h3 class="cs-section-title">03 / Solution & Outcome</h3>
            <div class="cs-section-body">
              <p>${project.outcome}</p>
            </div>
          </div>
        </div>

        <!-- Next Project Card -->
        <div class="next-project-panel">
          <div class="next-label">Dự án tiếp theo</div>
          <h2 class="next-title"><a href="#project/${nextProject.id}" class="cursor-hover-target" data-cursor="coral">${nextProject.title}</a></h2>
          <a href="#project/${nextProject.id}" class="btn btn-primary cursor-hover-target" data-cursor="teal">Xem Case Study →</a>
        </div>
      </section>
    `;
  },

  getProjectCardMarkup(project) {
    return `
      <article class="project-card brutalist-card reveal">
        <a href="#project/${project.id}" class="project-img-wrapper cursor-hover-target" data-cursor="coral">
          <img src="${project.image}" alt="${project.title}" class="project-img">
        </a>
        <div class="project-meta">
          <span class="project-category">${project.category}</span>
          <span class="project-year">${project.year}</span>
        </div>
        <h3 class="project-title">
          <a href="#project/${project.id}" class="cursor-hover-target" data-cursor="teal">${project.title}</a>
        </h3>
        <p class="project-excerpt">${project.description}</p>
        <a href="#project/${project.id}" class="btn btn-outline cursor-hover-target" data-cursor="yellow" style="margin-top: auto; align-self: flex-start;">Chi tiết dự án</a>
      </article>
    `;
  }
};

window.Router = Router;
