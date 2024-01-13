import { getPermissionIcon, Check, Xmark } from "~/icons";

/**
 *
 * @param dataName The name to ID the permission to display.
 * @param isAllowed To disable the buttons or not.
 * @returns An HTML template string for this web component.
 */
export const template = (dataName: string, isAllowed?: boolean) => {
  return `
  <style>
    :host {
      --browser-permission-width: 200px;
    }

    button {
      border: none;
      border-radius: 5px;
      padding: 5px 10px;
      cursor: pointer;
      margin-right: 10px;
      font-size: 12px;

      &:hover {
        opacity: 0.8;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    .fade-in {
      right: 30px !important;
      opacity: 1 !important;
    }

    .fade-out {
      right: calc(0px - var(--browser-permission-width)) !important;
      opacity: 0 !important;
    }

    .request-permission {
      position: fixed;
      bottom: 30px;
      width: var(--browser-permission-width);

      right: calc(0px - var(--browser-permission-width));
      transition: right 0.5s ease-in-out, opacity 0.5s ease-in-out;
      opacity: 0;
      
      border-radius: 15px;
      border: 5px solid rgba(0 0 0 / 0.2);
      padding: 10px;

      background-color: white;
    }

    .loading {
      & svg {
        animation: spin 2s linear infinite;
      }
    }

    .permission-title {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      & > svg {
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
      ${getPermissionIcon(dataName as Permissions)} <p>Trigger ${dataName}?</p>
    </div>
    <slot name="reason"></slot>
    <button ${
      isAllowed === undefined ? "" : "disabled"
    } type="button" data-name"${dataName}" class="permission-trigger">${Check}
    </button>
    <button ${
      isAllowed === undefined ? "" : "disabled"
    }  type="button" class="permission-deny">${Xmark}</button>
  </div>
  `;
};