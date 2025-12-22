    // credit to Zach Leatherman for <snow-fall> https://www.zachleat.com/web/snow-fall/

    class Snow extends HTMLElement {
      static random(min, max) {
        return min + Math.floor(Math.random() * (max - min) + 1);
      }

      static attrs = {
        count: "count",
        mode: "mode",
        text: "text",
      }

      generateCss(mode, count) {
        let css = [];
        css.push(`
:host([mode="element"]) {
  display: block;
  position: relative;
  overflow: hidden;
}
:host([mode="page"]) {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
:host([mode="page"]) > *,
:host([mode="element"]) > * {
  pointer-events: none;
}
:host([mode="element"]) ::slotted(*) {
  pointer-events: all;
}
* {
  position: absolute;
}
:host([text]) * {
  font-size: var(--snow-fall-size, 1em);
}
:host(:not([text])) * {
  width: var(--snow-fall-size, 10px);
  height: var(--snow-fall-size, 10px);
  background: var(--snow-fall-color, rgba(255,255,255,.5));
  border-radius: 50%;
}
`);

        let dimensions = { width: 100, height: 100 };
        let units = { x: "vw", y: "vh" };

        if (mode === "element") {
          dimensions = {
            width: this.firstElementChild.clientWidth,
            height: this.firstElementChild.clientHeight,
          };
          units = { x: "px", y: "px" };
        }

        for (let j = 1; j <= count; j++) {
          let x = Snow.random(1, 100) * dimensions.width / 100;
          let offset = Snow.random(-10, 10) * dimensions.width / 100;

          let yoyo = Math.round(Snow.random(30, 100));
          let yStart = yoyo * dimensions.height / 100;
          let yEnd = dimensions.height;

          let scale = Snow.random(1, 10000) * .0001;
          let duration = Snow.random(10, 30);
          let delay = Snow.random(0, 30) * -1;

          css.push(`
:nth-child(${j}) {
  opacity: ${Snow.random(0, 1000) * 0.001};
  transform: translate(${x}${units.x}, -10px) scale(${scale});
  animation: fall-${j} ${duration}s ${delay}s linear infinite;
}

@keyframes fall-${j} {
  ${yoyo}% {
    transform: translate(${x + offset}${units.x}, ${yStart}${units.y}) scale(${scale});
  }

  to {
    transform: translate(${x + offset / 2}${units.x}, ${yEnd}${units.y}) scale(${scale});
  }
}`);
        }
        return css.join("\n");
      }

      updateSnow(count) {
        if (!this.shadowRoot) return;

        // Clear existing snowflakes
        const slot = this.shadowRoot.querySelector('slot');
        while (this.shadowRoot.firstChild !== slot) {
          this.shadowRoot.removeChild(this.shadowRoot.firstChild);
        }

        // Get mode
        let mode = this.getAttribute(Snow.attrs.mode) || "page";

        // Generate new CSS
        let sheet = new CSSStyleSheet();
        sheet.replaceSync(this.generateCss(mode, count));
        this.shadowRoot.adoptedStyleSheets = [sheet];

        // Add new snowflakes
        let d = document.createElement("div");
        let text = this.getAttribute(Snow.attrs.text);
        d.innerText = text || "";
        for (let j = 0; j < count; j++) {
          this.shadowRoot.insertBefore(d.cloneNode(true), slot);
        }

        // Update the count attribute
        this.setAttribute(Snow.attrs.count, count);
      }

      connectedCallback() {
        if (this.shadowRoot || !("replaceSync" in CSSStyleSheet.prototype)) {
          return;
        }

        // Load saved preference from localStorage
        const savedCount = localStorage.getItem('snowfall-count');
        let count = savedCount ? parseInt(savedCount) : (parseInt(this.getAttribute(Snow.attrs.count)) || 100);

        let mode;
        if (this.hasAttribute(Snow.attrs.mode)) {
          mode = this.getAttribute(Snow.attrs.mode);
        } else {
          mode = this.firstElementChild ? "element" : "page";
          this.setAttribute(Snow.attrs.mode, mode);
        }

        let sheet = new CSSStyleSheet();
        sheet.replaceSync(this.generateCss(mode, count));

        let shadowroot = this.attachShadow({ mode: "open" });
        shadowroot.adoptedStyleSheets = [sheet];

        let d = document.createElement("div");
        let text = this.getAttribute(Snow.attrs.text);
        d.innerText = text || "";
        for (let j = 0; j < count; j++) {
          shadowroot.appendChild(d.cloneNode(true));
        }

        shadowroot.appendChild(document.createElement("slot"));

        // Update the count attribute to match what was loaded
        this.setAttribute(Snow.attrs.count, count);
      }
    }

    customElements.define("snow-fall", Snow);

    // Initialize controls
    document.addEventListener('DOMContentLoaded', () => {
      const snowEffect = document.getElementById('snowEffect');
      const slider = document.getElementById('snowSlider');
      const countDisplay = document.getElementById('countDisplay');
      const snowControls = document.getElementById('snowControls');
      const toggleButton = document.getElementById('toggleButton');

      // Show controls now that JavaScript is enabled
      snowControls.classList.add('js-enabled');

      // Load saved preference
      const savedCount = localStorage.getItem('snowfall-count');
      if (savedCount !== null) {
        const count = parseInt(savedCount);
        slider.value = count;
        countDisplay.textContent = count;
      }

      // Load saved collapsed state
      const savedCollapsed = localStorage.getItem('snowfall-controls-collapsed');
      if (savedCollapsed === 'true') {
        snowControls.classList.add('collapsed');
        toggleButton.textContent = '❄';
        toggleButton.setAttribute('aria-label', 'Expand snow controls');
      }

      // Handle toggle button
      toggleButton.addEventListener('click', () => {
        const isCollapsed = snowControls.classList.toggle('collapsed');
        toggleButton.textContent = isCollapsed ? '❄' : 'close';
        toggleButton.setAttribute('aria-label', isCollapsed ? 'Expand snow controls' : 'Collapse snow controls');
        
        // Save collapsed state
        localStorage.setItem('snowfall-controls-collapsed', isCollapsed);
      });

      // Handle slider changes
      slider.addEventListener('input', (e) => {
        const count = parseInt(e.target.value);
        countDisplay.textContent = count;
        snowEffect.updateSnow(count);
        
        // Save preference to localStorage
        localStorage.setItem('snowfall-count', count);
      });
    });