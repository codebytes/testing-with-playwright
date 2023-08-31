---
marp: true
theme: default
footer: 'https://example.com'
style: |
  .columns {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
  .columns3 {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  } 
  img[alt~="center"] {
    display: block;
    margin: 0 auto;
  }
  .fa-twitter { color: aqua; }
  .fa-mastodon { color: purple; }
  .fa-linkedin { color: blue; }
  .fa-window-maximize { color: skyblue; }

  svg[id^="mermaid-"] { 
    min-width: 480px; 
    max-width: 960px; 
    min-height: 360px; 
    max-height: 600px; 
  }

  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css'
---

# <!--fit-->Testing with<br/>Playwright
## Chris Ayers
![bg right](./img/playwright-logo.svg)

---

![bg left:40%](./img/portrait.png)

# Chris Ayers
## Senior Customer Engineer<br>Microsoft

<i class="fa-brands fa-twitter"></i> Twitter : @Chris\_L\_Ayers
<i class="fa-brands fa-mastodon"></i> Mastodon: @Chrisayers@hachyderm.io
<i class="fa-brands fa-linkedin"></i> LinkedIn: [chris\-l\-ayers](https://linkedin.com/in/chris-l-ayers/)
<i class="fa fa-window-maximize"></i> Blog: [https://chris-ayers\.com/](https://chris-ayers.com/)
<i class="fa-brands fa-github"></i> GitHub: [Codebytes](https://github.com/codebytes)

---

# Agenda

- What is Playwright?
- Benefits of Using Playwright
- Setting up a React Project
- Creating End-to-End Tests with Playwright
- Integrating with Continuous Integration

---

![bg right:40% fit](./img/playwright-logo.svg)

# What is Playwright?
- Open Source released by Microsoft in 2020
- A Modern web test framework
- Can test APIs
- Works with Headless or Headed Browsers
  - Chromium - Chrome/Edge
  - Firefox
  - WebKit

---

# Language Support

- Bindings for:
  - Python
  - Javascript/Typescript
  - Java
  - .NET

---

# Benefits of Using Playwright

---

# Reliable & Stable

- Automatically waits for UI to be ready.
- Handles dynamic content, animations, and AJAX requests gracefully.
- Minimizes flaky tests.

---

# Mobile Emulation

- Easily emulate various mobile devices.
- Test responsiveness and mobile-specific features.
- Ability to emulate location via geolocation

---

# Advanced Interactions

- Network request interception.
- Create custom scenarios (e.g., offline mode, slow network).

---

# Native Context Automation

- Automate beyond the browser:
  - Upload & download files
  - Work with iframes and shadow DOM

---

# Fast Execution

- Tests are executed swiftly, reducing waiting time.
- Parallel test execution.
- Optimal performance due to its architecture.

---

# Rich Tooling Ecosystem

- VS Code Extension
- Integrations with popular CI/CD services.
- Compatible with multiple assertion libraries.

---

# Types of Testing

---

# End-to-End Testing

- Validate the flow of an application as a user would.

---

# Snapshot Testing

- Capture screenshots or page content.
- Compare against known states to detect visual changes.

---

# Interaction Testing

- Simulate user interactions like clicks, form inputs, and scrolls.

---

# Accessibility Testing

- Evaluate your application's accessibility features.
- Ensure it's user-friendly for all audiences.

---

# Performance Testing

- Analyze page load times and rendering performance.
- Identify bottlenecks and optimization opportunities.

---

# Testing takes time
- is hard
- takes time to learn
- time to build
- testing culture

