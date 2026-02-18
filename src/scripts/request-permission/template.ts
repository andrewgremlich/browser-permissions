import { Check, getPermissionIcon, Xmark } from "~/icons";
import type { Permissions } from "~/types";

/**
 *
 * @param dataName The name to ID the permission to display.
 * @param isAllowed To disable the buttons or not.
 * @returns An HTML template string for this web component.
 */
export const template = (dataName: string, isAllowed?: boolean) => {
	return `
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
      color: var(--r-p-font-color, #000);
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
