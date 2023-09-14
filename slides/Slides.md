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

- What is Testing?
- What is Playwright?
- Benefits of Using Playwright
- Creating End-to-End Tests with Playwright
- Integrating with Continuous Integration

---

# What is Testing?

---

**Testing is** the ***systematic process*** of **verifying** and **validating** that a software application or system meets specified requirements and functions correctly.

<!-- ## Purpose

- **Detect Errors**
- **Enhance Quality**
- **Reduce Costs**
- **Increase User Satisfaction** -->

---

## Types of Testing

<div class="columns">
<div>

* Unit Testing
* Integration Testing
* System Testing
* Acceptance Testing

</div>
<div>

* End-to-End (E2E) Testing
* Accessibility Testing
* Visual Testing
* Component Testing

</div>
</div>

---

# UI Testing Best Practices

- Test user-visible behavior
- Make tests as **isolated** as possible
- Avoid testing third-party dependencies
- If you test with a database, **control** the data

---

# Testing Challenges

<div class="columns">
<div>

- Testing is **hard**
- Testing takes **time to learn**
- Testing **time to build**
- **Testing culture**

</div>
<div>

* Tests are **slow**
* Tests are **brittle**
* Tests are **flaky**

</div>
</div>

---

# Lets try to make testing easier... with 
![center](./img/playwright-logo.png)

---

![bg right:40% fit](./img/playwright-logo.svg)

# What is Playwright?
- ### **Open Source** released by Microsoft in 2020
- A Modern web test framework
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

![bg right:40% w:450](img/playwright-arch.drawio.svg)

# Playwright Architecture

- Language Bindings
- Single Automation Protocol
- Abstracts debugging protocols

---

# Benefits of Using Playwright

---

# Reliable & Stable

- Automatically waits for UI to be ready.
- Handles dynamic content, animations, and AJAX requests gracefully.
- Minimizes flaky tests.
- Isolation with Browser Contexts

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
- Isolation with Browser Contexts
  
---

# Auto-Waiting
For example, for *page.click()*, Playwright will ensure that:

- element is Attached to the DOM
- element is Visible
- element is Stable, as in not animating or completed animation
- element Receives Events, as in not obscured by other elements
- element is Enabled

#### See a full list of actions at: https://playwright.dev/docs/actionability

</div>
</div>

---

# Locators

| Method | Description |
|---|---|
| `page.getByRole()` | Locate by explicit and implicit accessibility attributes. |
| `page.getByText()` | Locate by text content. |
| `page.getByLabel()` | Locate a form control by associated label's text. |
| `page.getByPlaceholder()` | Locate an input by placeholder. |
| `page.getByAltText()` | Locate an element, usually image, by its text alternative. |
| `page.getByTitle()` | Locate an element by its title attribute. |
| `page.getByTestId()` | Locate an element based on its data-testid attribute. |

--- 

# Web-First Assertions

<div class="columns">
<div>

- expect(locator).toBeAttached()
- expect(locator).toBeChecked()
- expect(locator).toBeDisabled()
- expect(locator).toBeEditable()
- expect(locator).toBeEmpty()
- expect(locator).toBeEnabled()
- expect(locator).toBeFocused()
- expect(locator).toBeHidden()
- expect(locator).toBeInViewport()
- expect(locator).toBeVisible()
- expect(locator).toContainText()
- expect(locator).toHaveAttribute()

</div>
<div>

- expect(locator).toHaveClass()
- expect(locator).toHaveCount()
- expect(locator).toHaveCSS()
- expect(locator).toHaveId()
- expect(locator).toHaveJSProperty()
- expect(locator).toHaveScreenshot()
- expect(locator).toHaveText()
- expect(locator).toHaveValue()
- expect(locator).toHaveValues()
- expect(page).toHaveScreenshot()
- expect(page).toHaveTitle()
- expect(page).toHaveURL()
- expect(response).toBeOK()

</div>
</div>

---

# Visual evidence

- screenshot support
- Video Recording

---

# Rich Tooling Ecosystem

- VS Code Extension
- Integrations with popular CI/CD services.
- Compatible with multiple assertion libraries.

---

# Playwright Extension
![bg right fit](img/playwright-extension-marketplace.png)

---

# Integration with IDE Testing
![bg right fit](img/playwright-extension-testing.png)

---

# Codegen

Playwright Test Generator is a GUI tool that helps you record Playwright tests

![bg right fit](img/playwright-codegen.png)

---

# Playwright Best Practices

- Use locators
  - Use chaining and filtering
  - Prefer user-facing attributes to XPath or CSS selectors
- Generate locators
  - Use codegen to generate locators
  - Use the VS Code extension to generate locators
- Use web first assertions
  - Don't use manual assertions

---

# Playwright Best Practices

- Configure debugging
  - Local debugging
  - Debugging on CI
- Use Playwright's Tooling
- Test across all browsers
- Keep your Playwright dependency up to date
- Run tests on CI
- Lint your tests
  - Use parallelism and sharding

---

# DEMOS

---

![bg](img/sketchthedocs-intro.png)

---

![bg](img/playwright-cli.png)

---

# Microsoft Playwright Testing

Join the waitlist for Microsoft Playwright Testing private preview
• New Azure service for running Playwright tests.
• Cloud enabled to run Playwright tests at scale.
• High parallelization across operating system-browser combinations.
• Speed up delivery of features without sacrificing quality.

### Private Preview
To learn more about Microsoft Playwright Testing, refer to:
 https://aka.ms/mpt/private-preview-blog.

---

# Questions?

![bg right](img/owl.png)

---

<div class="columns">
<div>

## Resources

#### GitHub Repo
[**https://github.com/codebytes/testing-with-playwright**](https://github.com/codebytes/testing-with-playwright)

#### Playwright website
[**https://playwright.dev/**](https://playwright.dev/)

</div>

<div>

## Contact

<i class="fa-brands fa-twitter"></i> Twitter: @Chris\_L\_Ayers
<i class="fa-brands fa-mastodon"></i> Mastodon: @Chrisayers@hachyderm.io
<i class="fa-brands fa-linkedin"></i> LinkedIn: - [chris\-l\-ayers](https://linkedin.com/in/chris-l-ayers/)
<i class="fa fa-window-maximize"></i> Blog: [https://chris-ayers\.com/](https://chris-ayers.com/)
<i class="fa-brands fa-github"></i> GitHub: [Codebytes](https://github.com/codebytes)

</div>
</div>