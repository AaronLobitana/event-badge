import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class EventBadge extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--event-badge-background-color);
    }

  

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

  
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
    
    <div>
      Test
      <svg height="130" width="500">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
          </linearGradient>
        </defs>

        <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />

        <text fill="#ffffff" font-size="45" font-family="Verdana" x="50" y="86">SVG</text>
      </svg>
    </div>



  
      
    `;
  }
}

customElements.define('event-badge', EventBadge);