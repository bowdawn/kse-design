import React from "react";

export const IconPage: React.FC = () => {
  return (
    <>
      <div>Small Icon (size 16px)</div>
      <svg viewBox="64 64 896 896" className="kse-icon-small">
        <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
      </svg>
      <div>Default Icon (size 32px)</div>
      <svg
        className="kse-icon"
        viewBox="64 64 896 896"
        focusable="false"
        data-icon="menu"
        width="1em"
        height="1em"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
      </svg>
      <h1>Current Assets</h1>
      <div className="kse-space kse-space-middle">
        <div>
          <div>Menu</div>
          <svg
            className="kse-icon"
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="menu"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
          </svg>
        </div>

        <div>
          <div>Safe Box</div>
          <svg className="kse-icon kse-icon-link" viewBox="0 0 30 31.5">
            <g>
              <path d="M12,15c0-1.65,1.35-3,3-3s3,1.35,3,3-1.35,3-3,3-3-1.35-3-3m-3.3,8.55l-2.25-2.1,2.25-2.25c-.75-1.2-1.2-2.7-1.2-4.2s.45-3,1.2-4.05l-2.25-2.25,2.25-2.25,2.1,2.25c1.2-.75,2.7-1.2,4.2-1.2s3,.45,4.2,1.2l2.25-2.25,2.1,2.1-2.25,2.25c.75,1.2,1.2,2.7,1.2,4.2s-.45,3-1.2,4.2l2.25,2.25-2.1,2.1-2.25-2.25c-1.2,.75-2.7,1.2-4.2,1.2s-3-.45-4.05-1.2l-2.25,2.25m6.3-13.05c-2.55,0-4.5,1.95-4.5,4.5s1.95,4.5,4.5,4.5,4.5-1.95,4.5-4.5-1.95-4.5-4.5-4.5M27,0c1.65,0,3,1.35,3,3V27c0,1.65-1.35,3-3,3h-1.5v1.5h-6v-1.5H10.5v1.5H4.5v-1.5h-1.5c-1.65,0-3-1.35-3-3V3C0,1.35,1.35,0,3,0H27m0,27V3H3V27H27Z" />
            </g>
          </svg>
        </div>
        <div>
          <div>Search</div>
          <svg viewBox="64 64 896 896" className="kse-icon-small">
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
          </svg>
        </div>
        <div>
          <div>Close</div>
          <svg
            className="kse-icon kse-icon-bold-link"
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="close"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
          </svg>
        </div>
        <div>
          <div>icon 5</div>( - )
        </div>
        <div>
          <div>icon 6</div>( - )
        </div>
      </div>
    </>
  );
};