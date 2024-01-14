# Browser Permissions

A drop-in component to aid a website application's user experience in handling browser permissions.

## Documentation

This module exports `makeBrowserPermissions`. This function declares two web components: `browser-permissions` and `request-permission`. Place `browser-permissions` where you would like in HTML/JSX and it will also handle generation of `request-permission`

Within the `browser-permissions` web component, place a script tag with an type attribute of "application/json" and an ID attribute of "browser-permission-data". The JSON within this script tag should follow the example.

The component `browser-permissions` will do an error check for if any JSON data was inputted.

```html
<browser-perWmissions>
  <script type="application/json" id="browser-permission-data">
    [
      { "name": "microphone", "reason": "The microphone is used to record a song." },
      { "name": "geolocation", "reason": "The snow button at the button uses a localized forecast." }
    ]
  </script>
</browser-permissions>
```

With the previous data, `request-permission` tags will be generated and slide into view. The component will display the feature requested from the website. It could also display a reason why the feature needs to be used, if a reason was provided. The component `request-permission` handles any permission state on its own with a combination of permission queries in the website and explicitly set `LocalStorage`.

The permission slide-ins are customizable with CSS variables. Here is an example of the CSS variables supported.

```css
:root {
  --r-p-width: 250px;
  --r-p-background-color: #fff;
  --r-p-border: 5px solid rgba(0 0 0 / 0.2);
  --r-p-border-radius: 15px;
  --r-p-buttons-border-radius: 5px;
  --r-p-buttons-size: 20px;
  --r-p-font-color: #000;
  --r-p-title-font-size: 1.2rem;
  --r-p-title-icon-size: 1.2rem;
  --r-p-reason-font-size: 19px;

  --r-p-bottom: 30px;
  --r-p-top: initial;
  
  --r-p-right-start: -230px;
  --r-p-right-end: 30px;

  --r-p-left-start: initial;
  --r-p-left-end: initial;
}
```

## Supported Permissions

This module aims to support different permissions across each browser. Here is a list of the currently supported permissions.

- camera
- microphone
- notifications
- geolocation
- midi
- display-capture
- clipboard-read
- clipboard-write
- persistent-storage
- top-level-storage-access
- storage-access

## Roadmap

### v1.1

- [ ] Trigger all permissions at once.
- [ ] Provide a typescript way to input permission data.

### v1.2

- [ ] Add a feature to wrap query permissions in case in order to trigger permissions

### v1.3

- [ ] A "privacy summary" of the webpage like what Apple does for the app store.

### v2

- [ ] Mobile Support.
  - `src/scripts/permissions-helpers/index.ts` should have all options supported
  - Styling should support mobile.

## Entire example

```html
<style>
  :root {
    --r-p-width: 250px;
    --r-p-background-color: #fff;
    --r-p-border: 5px solid rgba(0 0 0 / 0.2);
    --r-p-border-radius: 15px;
    --r-p-buttons-border-radius: 5px;
    --r-p-buttons-size: 20px;
    --r-p-title-font-size: 1.2rem;
    --r-p-font-color: #000;
    --r-p-title-icon-size: 1.2rem;
    --r-p-reason-font-size: 19px;
  
    --r-p-bottom: 30px;
    --r-p-top: initial;
    
    --r-p-right-start: -230px;
    --r-p-right-end: 30px;
  
    --r-p-left-start: initial;
    --r-p-left-end: initial;
  }
</style>

<script type="importmap">
  {
    "imports": {
      "browser-permissions": "https://unpkg.com/browser-permissions@1.0.9/dist/esm/browser-permissions.esm.js"
    }
  }
</script>

<browser-permissions>
  <script type="application/json" id="browser-permission-data">
    [
      { "name": "geolocation", "reason": "The snow button at the button uses a localized forecast." }
    ]
  </script>
</browser-permissions>

<script type="module">
  import { makeBrowserPermissions } from "browser-permissions";
  makeBrowserPermissions();
</script>
```
