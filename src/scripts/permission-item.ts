const template = (strings, permissionName) => {
  return `${strings[0]}${permissionName}${strings[1]}`;
}

export class RequestPermission extends HTMLElement {
  // biome-ignore lint/complexity/noUselessConstructor: This IS needed for HTMLElement inheritance
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = template`<p>Request ${this.getAttribute('data-name')}?</p>`;

    // in this component, trigger browser request for permission.
    // there may need to be another component or feature to trigger with the user tries to activate something.
  }
}