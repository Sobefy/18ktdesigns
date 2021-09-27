import { FaqDataCategory } from "@lib/types";

interface WarrantyButtonSvgProps {
  category: FaqDataCategory;
  color: "white" | "gray";
}

const WarrantyButtonSvg = ({ category, color }: WarrantyButtonSvgProps) => {
  const getWarrantyButtonSvgColor = () => {
    switch (color) {
      case "white":
        return "white";
      case "gray":
        return "#838EA4";
      default:
        return "";
    }
  };
  const GetWarrantyButtonSvg = () => {
    switch (category) {
      case "warrantyOverview":
        return (
          <svg
            className="mx-auto mb-5"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.65991 17.7087L11.6508 12.5218L16.203 16.0977L20.1084 11.0573"
              stroke={`${getWarrantyButtonSvgColor()}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <circle
              cx="24.6606"
              cy="3.60028"
              r="2.56293"
              stroke={`${getWarrantyButtonSvgColor()}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></circle>
            <path
              d="M17.8994 2.16016H8.20906C4.1938 2.16016 1.7041 5.00379 1.7041 9.01904V19.7956C1.7041 23.8108 4.14499 26.6422 8.20906 26.6422H19.6812C23.6965 26.6422 26.1862 23.8108 26.1862 19.7956V10.4103"
              stroke={`${getWarrantyButtonSvgColor()}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        );
      case "satisfactionGuarantee":
        return (
          <svg
            className="mx-auto mb-5"
            width="26"
            height="28"
            viewBox="0 0 26 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.7424 8.16474L23.9125 6.72461C23.2104 5.50605 21.6544 5.08568 20.4342 5.78487V5.78487C19.8534 6.12704 19.1603 6.22412 18.5078 6.0547C17.8553 5.88528 17.297 5.46327 16.956 4.88175C16.7366 4.51212 16.6187 4.09111 16.6142 3.6613V3.6613C16.634 2.97221 16.374 2.30445 15.8935 1.81014C15.413 1.31583 14.7529 1.03707 14.0635 1.03735H12.3915C11.7161 1.03735 11.0686 1.30647 10.5922 1.78518C10.1157 2.26389 9.84973 2.91271 9.85298 3.58808V3.58808C9.83296 4.98249 8.6968 6.10233 7.30225 6.10219C6.87245 6.09773 6.45144 5.97984 6.08181 5.76047V5.76047C4.86158 5.06127 3.30565 5.48164 2.60355 6.70021L1.71262 8.16474C1.01138 9.38178 1.42603 10.9367 2.64016 11.643V11.643C3.42937 12.0986 3.91554 12.9407 3.91554 13.852C3.91554 14.7633 3.42937 15.6054 2.64016 16.061V16.061C1.42757 16.7625 1.01247 18.3137 1.71262 19.5271V19.5271L2.55473 20.9794C2.88369 21.573 3.43563 22.011 4.08842 22.1965C4.74121 22.382 5.44102 22.2998 6.03299 21.9679V21.9679C6.61494 21.6284 7.30841 21.5353 7.95928 21.7095C8.61015 21.8837 9.16448 22.3106 9.49905 22.8955C9.71843 23.2651 9.83631 23.6861 9.84077 24.1159V24.1159C9.84077 25.5246 10.9828 26.6666 12.3915 26.6666H14.0635C15.4675 26.6667 16.6075 25.5321 16.6142 24.1281V24.1281C16.611 23.4506 16.8787 22.7999 17.3577 22.3209C17.8368 21.8418 18.4875 21.5741 19.165 21.5774C19.5937 21.5889 20.013 21.7063 20.3854 21.9191V21.9191C21.6024 22.6204 23.1574 22.2057 23.8637 20.9916V20.9916L24.7424 19.5271C25.0825 18.9432 25.1759 18.2479 25.0018 17.5951C24.8277 16.9422 24.4005 16.3857 23.8148 16.0488V16.0488C23.2292 15.7119 22.802 15.1554 22.6279 14.5025C22.4538 13.8497 22.5472 13.1543 22.8873 12.5705C23.1085 12.1844 23.4287 11.8642 23.8148 11.643V11.643C25.0217 10.9371 25.4354 9.39124 24.7424 8.17694V8.17694V8.16474Z"
              stroke={`${getWarrantyButtonSvgColor()}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <circle
              cx="13.2336"
              cy="13.852"
              r="3.51487"
              stroke={`${getWarrantyButtonSvgColor()}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></circle>
          </svg>
        );
      case "diamondPriceMatch":
        return (
          <svg
            className="mx-auto mb-5"
            width="28"
            height="26"
            viewBox="0 0 28 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.8521 16.1943H21.4543C19.4724 16.1931 17.866 14.5879 17.8647 12.6059C17.8647 10.624 19.4724 9.01879 21.4543 9.01758H26.8521"
              stroke={`${getWarrantyButtonSvgColor()}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M22.0649 12.5238H21.6493"
              stroke={`${getWarrantyButtonSvgColor()}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.33038 1H19.855C23.7192 1 26.8518 4.13268 26.8518 7.99689V17.5663C26.8518 21.4305 23.7192 24.5631 19.855 24.5631H8.33038C4.46618 24.5631 1.3335 21.4305 1.3335 17.5663V7.99689C1.3335 4.13268 4.46618 1 8.33038 1Z"
              stroke={`${getWarrantyButtonSvgColor()}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.38086 7.05094H14.5795"
              stroke={`${getWarrantyButtonSvgColor()}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        );
      case "freeRingResizing":
        return (
          <svg
            className="mx-auto mb-5"
            width="26"
            height="24"
            viewBox="0 0 26 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.4527 22.8856V4.72852"
              stroke={`${getWarrantyButtonSvgColor()}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M24.8897 17.4241L19.4527 22.8863L14.0156 17.4241"
              stroke={`${getWarrantyButtonSvgColor()}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M6.21486 1.11047V19.2675"
              stroke={`${getWarrantyButtonSvgColor()}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M0.777832 6.57196L6.21487 1.10974L11.6519 6.57196"
              stroke={`${getWarrantyButtonSvgColor()}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        );
      case "lifetimeWarranty":
        return (
          <svg
            className="mx-auto mb-5"
            width="30"
            height="24"
            viewBox="0 0 30 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.466 1.66711V4.89378"
              stroke={`${getWarrantyButtonSvgColor()}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M17.466 19.6802V22.3788"
              stroke={`${getWarrantyButtonSvgColor()}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M17.466 15.0995V8.67151"
              stroke={`${getWarrantyButtonSvgColor()}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.936 22.6667C26.3654 22.6667 28.3332 20.7234 28.3332 18.3242V14.8676C26.7256 14.8676 25.4309 13.589 25.4309 12.0014C25.4309 10.4138 26.7256 9.1339 28.3332 9.1339L28.3318 5.67585C28.3318 3.27664 26.3627 1.33337 23.9346 1.33337H6.06506C3.63702 1.33337 1.66789 3.27664 1.66789 5.67585L1.6665 9.24651C3.27407 9.24651 4.56874 10.4138 4.56874 12.0014C4.56874 13.589 3.27407 14.8676 1.6665 14.8676V18.3242C1.6665 20.7234 3.63424 22.6667 6.06367 22.6667H23.936Z"
              stroke={`${getWarrantyButtonSvgColor()}`}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        );
      default:
        return null;
    }
  };
  return <GetWarrantyButtonSvg />;
};

export default WarrantyButtonSvg;
