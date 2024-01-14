var y = Object.defineProperty;
var z = (e, t, o) => t in e ? y(e, t, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[t] = o;
var h = (e, t, o) => (z(e, typeof t != "symbol" ? t + "" : t, o), o), v = (e, t, o) => {
  if (!t.has(e))
    throw TypeError("Cannot " + o);
};
var i = (e, t, o) => (v(e, t, "read from private field"), o ? o.call(e) : t.get(e)), w = (e, t, o) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, o);
}, a = (e, t, o, s) => (v(e, t, "write to private field"), s ? s.call(e, o) : t.set(e, o), o);
const b = (e) => `
  <style>
    .request-reason {
      font-size: var(--r-p-reason-font-size, 12px);
    }
  </style>

  <div class="permissions-container">
    ${e ? e.map(
  (t) => `<request-permission permission-name="${t.name}">
      ${t.reason ? `<p class="request-reason" slot="reason">${t.reason}</p>` : ""}
    </request-permission>`
).join("") : ""}
  </div>
`;
class L extends HTMLElement {
  // biome-ignore lint/complexity/noUselessConstructor: This IS needed for HTMLElement inheritance
  constructor() {
    super();
    h(this, "permissions");
  }
  connectedCallback() {
    var s;
    const o = this.attachShadow({ mode: "open" });
    this.permissions = JSON.parse(
      ((s = this.querySelector("#browser-permission-data")) == null ? void 0 : s.textContent) || "[]"
    ), this.errorCheck(), o.innerHTML = b(this.permissions);
  }
  errorCheck() {
    if (this.permissions.length === 0)
      throw new Error("No permissions data provided.");
  }
  // attributeChangedCallback(name: string, oldValue: string, newValue: string) {
  // console.log(name, oldValue, newValue);
  // }
}
const C = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>', M = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>', H = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>', x = (e) => {
  const t = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/></svg>', o = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>', s = '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/></svg>';
  return {
    camera: '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>',
    microphone: '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/></svg>',
    notifications: '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z"/></svg>',
    geolocation: '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"/></svg>',
    midi: '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm16 64h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16zm80-176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V144zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zM160 336c0-8.8 7.2-16 16-16H400c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V336zM272 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM256 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM368 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM352 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16V240zM464 128h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16zM448 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V240zm16 80h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H464c-8.8 0-16-7.2-16-16V336c0-8.8 7.2-16 16-16z"/></svg>',
    "clipboard-read": o,
    "clipboard-write": o,
    "display-capture": "",
    "persistent-storage": t,
    "storage-access": t,
    "top-level-storage-access": t,
    push: '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M284 224.8a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 284 224.8zm-110.5 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 173.6 224.8zm220.9 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 394.5 224.8zm153.8-55.3c-15.5-24.2-37.3-45.6-64.7-63.6-52.9-34.8-122.4-54-195.7-54a406 406 0 0 0 -72 6.4 238.5 238.5 0 0 0 -49.5-36.6C99.7-11.7 40.9 .7 11.1 11.4A14.3 14.3 0 0 0 5.6 34.8C26.5 56.5 61.2 99.3 52.7 138.3c-33.1 33.9-51.1 74.8-51.1 117.3 0 43.4 18 84.2 51.1 118.1 8.5 39-26.2 81.8-47.1 103.5a14.3 14.3 0 0 0 5.6 23.3c29.7 10.7 88.5 23.1 155.3-10.2a238.7 238.7 0 0 0 49.5-36.6A406 406 0 0 0 288 460.1c73.3 0 142.8-19.2 195.7-54 27.4-18 49.1-39.4 64.7-63.6 17.3-26.9 26.1-55.9 26.1-86.1C574.4 225.4 565.6 196.4 548.3 169.5zM285 409.9a345.7 345.7 0 0 1 -89.4-11.5l-20.1 19.4a184.4 184.4 0 0 1 -37.1 27.6 145.8 145.8 0 0 1 -52.5 14.9c1-1.8 1.9-3.6 2.8-5.4q30.3-55.7 16.3-100.1c-33-26-52.8-59.2-52.8-95.4 0-83.1 104.3-150.5 232.8-150.5s232.9 67.4 232.9 150.5C517.9 342.5 413.6 409.9 285 409.9z"/></svg>',
    "background-fetch": "",
    "background-sync": '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M142.9 142.9c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5c0 0 0 0 0 0H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5c7.7-21.8 20.2-42.3 37.8-59.8zM16 312v7.6 .7V440c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l41.6-41.6c87.6 86.5 228.7 86.2 315.8-1c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.2 62.2-162.7 62.5-225.3 1L185 329c6.9-6.9 8.9-17.2 5.2-26.2s-12.5-14.8-22.2-14.8H48.4h-.7H40c-13.3 0-24 10.7-24 24z"/></svg>',
    accelerometer: '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM256 416c35.3 0 64-28.7 64-64c0-17.4-6.9-33.1-18.1-44.6L366 161.7c5.3-12.1-.2-26.3-12.3-31.6s-26.3 .2-31.6 12.3L257.9 288c-.6 0-1.3 0-1.9 0c-35.3 0-64 28.7-64 64s28.7 64 64 64zM176 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM96 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm352-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>',
    gyroscope: '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288H584.4L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320H199.3L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"/></svg>',
    magnetometer: '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M0 160v96C0 379.7 100.3 480 224 480s224-100.3 224-224V160H320v96c0 53-43 96-96 96s-96-43-96-96V160H0zm0-32H128V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64zm320 0H448V64c0-17.7-14.3-32-32-32H352c-17.7 0-32 14.3-32 32v64z"/></svg>',
    nfc: '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M211.8 488.6C213.4 491.1 213.9 494.2 213.2 497.1C212.6 500 210.8 502.6 208.3 504.2C205.7 505.8 202.7 506.3 199.7 505.7C138.3 491.8 84.1 455.8 47.5 404.5C11 353.2-5.4 290.3 1.6 227.7C8.5 165 38.3 107.2 85.3 65.2C132.2 23.2 193 0 256 0C257.5 0 258.1 .3 260.3 .9C261.7 1.4 262.1 2.3 264 3.3C265.1 4.4 265.9 5.6 266.5 7C267 8.4 267.3 9.8 267.3 11.3V112.3L291.8 86.4C292.8 85.3 294 84.4 295.4 83.8C296.7 83.2 298.2 82.9 299.7 82.9C301.2 82.8 302.6 83.1 304 83.6C305.4 84.1 306.7 84.9 307.8 85.9C308.8 87 309.7 88.2 310.3 89.5C310.9 90.9 311.3 92.4 311.3 93.8C311.3 95.3 311.1 96.8 310.6 98.2C310 99.6 309.2 100.8 308.2 101.9L264.2 148.5C263.1 149.6 261.9 150.5 260.5 151.1C259 151.7 257.5 152 255.1 152C254.5 152 252.9 151.7 251.5 151.1C250.1 150.5 248.8 149.6 247.8 148.5L203.7 101.9C201.7 99.7 200.6 96.8 200.7 93.8C200.7 90.8 202 87.1 204.2 85.9C206.4 83.9 209.3 82.8 212.3 82.9C215.3 82.9 218.1 84.2 220.2 86.4L244.7 112.4V22.9C188.3 25.6 134.9 48.7 94.2 87.9C53.6 127 28.5 179.6 23.6 235.8C18.7 292 34.4 348.1 67.7 393.7C100.1 439.2 149.7 471.2 204.7 483.6C207.6 484.3 210.2 486.1 211.8 488.6L211.8 488.6zM171.4 126.1C170.6 127.4 169.5 128.5 168.3 129.3C147.8 143.2 131.1 161.9 119.5 183.8C107.9 205.7 101.8 230.1 101.8 254.9C101.8 279.7 107.9 304.1 119.5 325.1C131.1 347.9 147.8 366.6 168.3 380.5C170.8 382.2 172.5 384.8 173 387.8C173.6 390.7 172.1 393.8 171.3 396.2C169.6 398.7 166.1 400.4 164 400.1C161.1 401.5 158 400.9 155.6 399.2C132 383.2 112.8 361.7 99.5 336.5C86.2 311.4 79.2 283.4 79.2 254.9C79.2 226.5 86.2 198.4 99.5 173.3C112.8 148.1 132 126.6 155.6 110.6C156.8 109.8 158.2 109.2 159.6 108.8C161.1 108.5 162.6 108.5 164.1 108.8C165.5 109 166.9 109.6 168.2 110.4C169.5 111.2 170.5 112.3 171.4 113.5C172.2 114.7 172.8 116.1 173.1 117.6C173.4 119.1 173.4 120.6 173.1 122C172.8 123.5 172.3 124.9 171.4 126.1H171.4zM340.9 383.5C341.7 382.3 342.8 381.2 343.1 380.4V380.3C364.4 366.3 381.1 347.6 392.7 325.7C404.2 303.9 410.2 279.5 410.2 254.8C410.2 230.1 404.2 205.7 392.7 183.8C381.1 161.1 364.4 143.3 343.1 129.3C342.8 128.5 341.7 127.4 340.9 126.2C340.1 124.9 339.5 123.5 339.3 122.1C338.1 120.6 339 119.1 339.3 117.7C339.6 116.2 340.2 114.8 341 113.6C341.9 112.4 342.1 111.3 344.2 110.5C345.4 109.7 346.8 109.2 348.3 108.9C349.8 108.6 351.2 108.6 352.7 108.9C354.2 109.2 355.5 109.8 356.8 110.7C380.2 126.7 399.5 148.2 412.7 173.3C426 198.4 432.1 226.4 432.1 254.8C432.1 283.3 426 311.3 412.7 336.4C399.5 361.5 380.2 383 356.8 399C355.5 399.9 354.2 400.5 352.7 400.8C351.2 401.1 349.8 401.1 348.3 400.8C346.8 400.5 345.4 399.1 344.2 399.2C342.1 398.4 341.9 397.3 341 396.1C340.2 394.9 339.6 393.5 339.3 392C339 390.6 338.1 389.1 339.3 387.6C339.5 386.2 340.1 384.8 340.9 383.5V383.5zM312.3 6.3C368.5 19 418.7 50.3 455 95C485.4 132.6 504.6 178 510.3 226C515.9 274 507.9 322.7 487.1 366.3C466.2 409.9 433.5 446.8 392.6 472.6C351.7 498.3 304.4 512 256 512C254.5 512 253.1 511.7 251.7 511.1C250.3 510.6 249.1 509.7 248 508.7C246.1 507.6 246.1 506.4 245.6 505C245 503.6 244.7 502.2 244.7 500.7V401.5L220.2 427.5C218.1 429.7 215.3 430.1 212.3 431.1C209.3 431.2 206.4 430 204.2 427.1C202 425.9 200.7 423.1 200.7 420.1C200.6 417.1 201.7 414.2 203.7 412L247.8 365.4C249.1 363.2 252.9 362 255.1 362C259.1 362 262 363.2 264.2 365.4L308.2 412C310.3 414.2 311.4 417.1 311.3 420.1C311.2 423.1 309.9 425.9 307.8 427.1C305.6 430 302.7 431.2 299.7 431.1C296.7 430.1 293.8 429.7 291.8 427.5L267.3 401.6V489.1C323.7 486.3 377.1 463.3 417.8 424.1C458.5 384.1 483.6 332.4 488.5 276.2C493.3 219.1 477.7 163.9 444.4 118.3C411.1 72.8 362.4 40.8 307.4 28.4C305.9 28 304.6 27.4 303.3 26.6C302.1 25.7 301.1 24.6 300.3 23.4C299.5 22.1 298.1 20.7 298.7 19.3C298.5 17.8 298.5 16.3 298.8 14.9C299.2 13.4 299.8 12 300.6 10.8C301.5 9.6 302.6 8.6 303.8 7.8C305.1 7 306.5 6.5 307.9 6.2C309.4 5.9 310.9 6 312.3 6.3L312.3 6.3zM353.1 256.1C353.1 287.5 335.6 317.2 303.8 339.6C301.7 341.1 299 341.9 296.4 341.6C293.7 341.4 291.2 340.3 289.4 338.4L219.3 268.6C217.1 266.5 215.1 263.6 215.9 260.6C215.9 257.6 217.1 254.7 219.2 252.6C221.4 250.5 224.2 249.3 227.2 249.3C230.2 249.3 233.1 250.5 235.2 252.6L298.3 315.4C319.1 298.3 330.5 277.5 330.5 256.1C330.5 232.2 316.4 209.1 290.8 191C288.3 189.3 286.7 186.7 286.2 183.7C285.7 180.8 286.3 177.7 288.1 175.3C289.8 172.8 292.4 171.2 295.4 170.7C298.3 170.2 301.4 170.8 303.8 172.6C335.6 195 353.1 224.7 353.1 256.1V256.1zM216.7 341.5C213.7 342 210.7 341.3 208.2 339.6C176.5 317.2 158.1 287.5 158.1 256.1C158.1 224.7 176.5 195 208.2 172.6C210.4 171 213.1 170.3 215.7 170.5C218.4 170.8 220.8 171.9 222.7 173.8L292.8 243.6C294.9 245.7 296.1 248.6 296.1 251.6C296.1 254.6 294.1 257.4 292.8 259.6C290.7 261.7 287.8 262.9 284.9 262.9C281.9 262.9 278.1 261.7 276.9 259.6L213.8 196.7C192.9 214 181.6 234.7 181.6 256.1C181.6 279.1 195.7 303.1 221.3 321.1C223.7 322.9 225.4 325.5 225.9 328.5C226.4 331.4 225.7 334.4 224 336.9C222.3 339.3 219.6 341 216.7 341.5L216.7 341.5z"/></svg>',
    "accessibility-events": '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M423.9 255.8L411 413.1c-3.3 40.7-63.9 35.1-60.6-4.9l10-122.5-41.1 2.3c10.1 20.7 15.8 43.9 15.8 68.5 0 41.2-16.1 78.7-42.3 106.5l-39.3-39.3c57.9-63.7 13.1-167.2-74-167.2-25.9 0-49.5 9.9-67.2 26L73 243.2c22-20.7 50.1-35.1 81.4-40.2l75.3-85.7-42.6-24.8-51.6 46c-30 26.8-70.6-18.5-40.5-45.4l68-60.7c9.8-8.8 24.1-10.2 35.5-3.6 0 0 139.3 80.9 139.5 81.1 16.2 10.1 20.7 36 6.1 52.6L285.7 229l106.1-5.9c18.5-1.1 33.6 14.4 32.1 32.7zm-64.9-154c28.1 0 50.9-22.8 50.9-50.9C409.9 22.8 387.1 0 359 0c-28.1 0-50.9 22.8-50.9 50.9 0 28.1 22.8 50.9 50.9 50.9zM179.6 456.5c-80.6 0-127.4-90.6-82.7-156.1l-39.7-39.7C36.4 287 24 320.3 24 356.4c0 130.7 150.7 201.4 251.4 122.5l-39.7-39.7c-16 10.9-35.3 17.3-56.1 17.3z"/></svg>',
    "payment-handler": '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/></svg>',
    "idle-detection": "",
    "periodic-background-sync": "",
    "screen-wake-lock": s,
    "system-wake-lock": s,
    "window-management": '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M432 64H208c-8.8 0-16 7.2-16 16V96H128V80c0-44.2 35.8-80 80-80H432c44.2 0 80 35.8 80 80V304c0 44.2-35.8 80-80 80H416V320h16c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM0 192c0-35.3 28.7-64 64-64H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V192zm64 32c0 17.7 14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32 14.3-32 32z"/></svg>',
    "window-placement": '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M.3 89.5C.1 91.6 0 93.8 0 96V224 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64V224 96c0-35.3-28.7-64-64-64H64c-2.2 0-4.4 .1-6.5 .3c-9.2 .9-17.8 3.8-25.5 8.2C21.8 46.5 13.4 55.1 7.7 65.5c-3.9 7.3-6.5 15.4-7.4 24zM48 224H464l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192z"/></svg>',
    "local-fonts": '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z"/></svg>',
    "captured-surface-control": "",
    "speaker-selection": "",
    "ambient-light-sensor": '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"/></svg>',
    bluetooth: '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M196.5 260l92.6-103.3L143.1 0v206.3l-86.1-86.1-31.4 31.4 108.1 108.4L25.6 368.4l31.4 31.4 86.1-86.1L145.8 512l148.6-148.6-97.9-103.3zm40.9-103l-50 50-.3-100.3 50.3 50.3zM187.4 313l50 50-50.3 50.3 .3-100.3z"/></svg>'
  }[e];
};
async function F() {
  const e = await navigator.mediaDevices.getUserMedia({ video: !0 });
  if (e) {
    for (const t of e.getTracks())
      t.stop();
    return { allowed: !0, name: "camera" };
  }
  return { allowed: !1, name: "camera" };
}
async function V() {
  const e = await navigator.mediaDevices.getUserMedia({ audio: !0 });
  if (e) {
    for (const t of e.getTracks())
      t.stop();
    return { allowed: !0, name: "microphone" };
  }
  return { allowed: !1, name: "microphone" };
}
async function k() {
  const e = await navigator.mediaDevices.getDisplayMedia({
    video: !0
  });
  if (e) {
    for (const t of e.getTracks())
      t.stop();
    return { allowed: !0, name: "display-capture" };
  }
  return { allowed: !1, name: "display-capture" };
}
function A() {
  return new Promise((e, t) => {
    navigator.geolocation.getCurrentPosition(
      () => {
        e({ allowed: !0, name: "geolocation" });
      },
      () => {
        t({ allowed: !1, name: "geolocation" });
      }
    );
  });
}
async function P() {
  console.log("requesting notifications");
  try {
    return { name: "notifications", allowed: await Notification.requestPermission() === "granted" };
  } catch (e) {
    return console.error(e), { name: "notifications", allowed: !1 };
  }
}
const f = (e) => async () => {
  const t = await navigator.permissions.query({
    name: e
  });
  return {
    name: e,
    allowed: t.state === "granted" ? !0 : t.state === "denied" ? !1 : void 0
  };
}, I = async () => {
  try {
    return await navigator.requestMIDIAccess(), { name: "midi", allowed: !0 };
  } catch {
    return { name: "midi", allowed: !1 };
  }
};
async function S() {
  try {
    return await navigator.clipboard.readText(), { allowed: !0, name: "clipboard-read" };
  } catch {
    return { allowed: !1, name: "clipboard-read" };
  }
}
async function B() {
  try {
    return await navigator.clipboard.writeText(
      "required string input for getting clipboard write permissions"
    ), { allowed: !0, name: "clipboard-write" };
  } catch {
    return { allowed: !1, name: "clipboard-write" };
  }
}
async function p() {
  try {
    return await document.requestStorageAccess(), { allowed: !0, name: "storage-access" };
  } catch {
    return { allowed: !1, name: "storage-access" };
  }
}
const N = (e) => ({
  camera: F,
  microphone: V,
  notifications: P,
  geolocation: A,
  midi: I,
  "display-capture": k,
  "clipboard-read": S,
  "clipboard-write": B,
  "persistent-storage": p,
  "top-level-storage-access": p,
  "storage-access": p,
  accelerometer: () => Promise.resolve({
    name: "accelerometer",
    allowed: !1,
    error: "Not implemented"
  }),
  gyroscope: () => Promise.resolve({
    name: "gyroscope",
    allowed: !1,
    error: "Not implemented"
  }),
  magnetometer: () => Promise.resolve({
    name: "magnetometer",
    allowed: !1,
    error: "Not implemented"
  }),
  "ambient-light-sensor": () => Promise.resolve({
    name: "ambient-light-sensor",
    allowed: !1,
    error: "Not implemented"
  }),
  push: () => Promise.resolve({
    name: "push",
    allowed: !1,
    error: "Not implemented"
  }),
  "background-fetch": () => Promise.resolve({
    name: "background-fetch",
    allowed: !1,
    error: "Not implemented"
  }),
  "background-sync": () => Promise.resolve({
    name: "background-sync",
    allowed: !1,
    error: "Not implemented"
  }),
  "periodic-background-sync": () => Promise.resolve({
    name: "periodic-background-sync",
    allowed: !1,
    error: "Not implemented"
  }),
  "screen-wake-lock": () => Promise.resolve({
    name: "screen-wake-lock",
    allowed: !1,
    error: "Not implemented"
  }),
  nfc: () => Promise.resolve({
    name: "nfc",
    allowed: !1,
    error: "Not implemented"
  }),
  "accessibility-events": () => Promise.resolve({
    name: "accessibility-events",
    allowed: !1,
    error: "Not implemented"
  }),
  "payment-handler": () => Promise.resolve({
    name: "payment-handler",
    allowed: !1,
    error: "Not implemented"
  }),
  "idle-detection": () => Promise.resolve({
    name: "idle-detection",
    allowed: !1,
    error: "Not implemented"
  }),
  "system-wake-lock": () => Promise.resolve({
    name: "system-wake-lock",
    allowed: !1,
    error: "Not implemented"
  }),
  "local-fonts": () => Promise.resolve({
    name: "local-fonts",
    allowed: !1,
    error: "Not implemented"
  }),
  "captured-surface-control": () => Promise.resolve({
    name: "captured-surface-control",
    allowed: !1,
    error: "Not implemented"
  }),
  "speaker-selection": () => Promise.resolve({
    name: "speaker-selection",
    allowed: !1,
    error: "Not implemented"
  }),
  bluetooth: () => Promise.resolve({
    name: "bluetooth",
    allowed: !1,
    error: "Not implemented"
  }),
  "window-management": () => Promise.resolve({
    name: "window-management",
    allowed: !1,
    error: "Not implemented"
  }),
  "window-placement": () => Promise.resolve({
    name: "window-placement",
    allowed: !1,
    error: "Not implemented"
  })
})[e], q = (e, t) => `
  <style>
    .request-permission {
      width: var(--r-p-width, 200px);
      
      position: fixed;
      bottom: var(--r-p-bottom, 30px);
      top: var(--r-p-top, initial);

      left: var(--r-p-left-start, initial);
      right: var(--r-p-right-start, initial);

      transition: right 0.5s ease-in-out, opacity 0.5s ease-in-out;
      opacity: 0;
      
      border-radius: var(--r-p-border-radius, 15px);
      border: var(--r-p-border, 1px solid #000);
      padding: 10px;

      background-color: var(--r-p-background-color, #fff);
    }

    .fade-in {
      left: var(--r-p-left-end, initial) !important;
      right: var(--r-p-right-end, initial) !important;

      top: var(--r-p-top, initial) !important;
      bottom: var(--r-p-bottom, initial) !important;

      opacity: 1 !important;
    }

    .fade-out {
      right: calc(0px - var(--r-p-width, 200px)) !important;
      opacity: 0 !important;
    }
    
    button {
      border: none;
      border-radius: var(--r-p-buttons-border-radius, 5px);
      padding: 5px 10px;
      cursor: pointer;
      margin-right: 10px;

      svg {
        width: var(--r-p-buttons-size, 20px);
        height: var(--r-p-buttons-size, 20px);
      }

      &:hover {
        opacity: 0.8;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    .loading {
      & svg {
        animation: spin 2s linear infinite;
      }
    }

    .permission-title {
      font-size: var(--r-p-title-font-size, 20px);
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      & > svg {
        width: var(--r-p-title-icon-size, 30px);
        height: var(--r-p-title-icon-size, 30px);
        margin-right: 10px;
      }
    }

    p {
      margin: 0;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>

  <div class="request-permission">
    <div class="permission-title">
      ${x(e)} <p>Trigger ${e}?</p>
    </div>
    <slot name="reason"></slot>
    <button ${t === void 0 ? "" : "disabled"} type="button" data-name"${e}" class="permission-trigger">${C}
    </button>
    <button ${t === void 0 ? "" : "disabled"}  type="button" class="permission-deny">${M}</button>
  </div>
  `;
var r, m, c, n;
class u extends HTMLElement {
  // biome-ignore lint/complexity/noUselessConstructor: This IS needed for HTMLElement inheritance
  constructor() {
    super();
    w(this, r, void 0);
    w(this, m, void 0);
    w(this, c, void 0);
    w(this, n, void 0);
  }
  async connectedCallback() {
    var s, l, d, g;
    this.attachShadow({ mode: "open" });
    const o = await this.getPermissionState();
    localStorage[`${i(this, c)}-deny`] ? a(this, m, localStorage[`${i(this, c)}-deny`] === "true") : localStorage[`${i(this, c)}-deny`] = !1, a(this, r, i(this, m) ? !i(this, m) : o.allowed), !i(this, r) && (this.shadowRoot && (this.shadowRoot.innerHTML = q(
      i(this, c) ?? "",
      i(this, r)
    )), i(this, r) === void 0 && this.activate(), a(this, n, (s = this.shadowRoot) == null ? void 0 : s.querySelector(
      ".permission-trigger"
    )), (l = i(this, n)) == null || l.addEventListener(
      "click",
      () => this.triggerPermission(i(this, c))
    ), (g = (d = this.shadowRoot) == null ? void 0 : d.querySelector(".permission-deny")) == null || g.addEventListener("click", () => {
      console.log("hide the permission request!"), this.deactivate();
    }));
  }
  async getPermissionState() {
    const o = this.getAttribute(
      "permission-name"
    );
    if (!o)
      throw new Error(
        "'permission-name' attribute is required on permission-item element."
      );
    return a(this, c, o), await f(o)();
  }
  activate() {
    setTimeout(() => {
      var o, s;
      (s = (o = this.shadowRoot) == null ? void 0 : o.querySelector(".request-permission")) == null || s.classList.add("fade-in");
    }, Math.random() * 1e3);
  }
  deactivate() {
    var o, s;
    localStorage[`${i(this, c)}-deny`] = !i(this, r), (s = (o = this.shadowRoot) == null ? void 0 : o.querySelector(".request-permission")) == null || s.classList.add("fade-out");
  }
  addLoadingIndicator() {
    var o, s;
    if (i(this, n))
      (o = i(this, n)) == null || o.setAttribute("disabled", "true"), (s = i(this, n)) == null || s.classList.add("loading"), i(this, n).innerHTML = H;
    else
      throw new Error("Permission trigger not found.");
  }
  removeLoadingIndicator() {
    var o, s;
    if (i(this, n))
      (o = i(this, n)) == null || o.removeAttribute("disabled"), (s = i(this, n)) == null || s.classList.remove("loading"), i(this, n).innerHTML = C;
    else
      throw new Error("Permission trigger not found.");
  }
  async triggerPermission(o) {
    this.addLoadingIndicator();
    const s = await N(o)();
    a(this, r, s.allowed);
    const l = await f(i(this, c))();
    a(this, r, l.allowed), this.removeLoadingIndicator(), i(this, r) && this.deactivate();
  }
}
r = new WeakMap(), m = new WeakMap(), c = new WeakMap(), n = new WeakMap(), h(u, "observedAttributes", ["permission-name"]);
function T() {
  customElements.define("browser-permissions", L), customElements.define("request-permission", u);
}
export {
  T as makeBrowserPermissions
};
