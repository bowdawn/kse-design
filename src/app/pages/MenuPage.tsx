import React from "react";
import { IconInput } from "./InputPage";
import logo from "../../core/images/koreasilverexchangelogo.png";

export const MenuPage: React.FC = () => {
  return (
    <>
      <div>Menu Top Header</div>
      <header className="kse-layout-header kse-block">
        <div className="kse-row kse-row-lg kse-row-space-between">
          <a
            href="/shop/page.html?id=2"
            className="kse-link-primary-bg-hover kse-text-middle"
          >
            한국은거래소는 건전한 투자와 수집문화 발전에 앞장서고 있습니다.
          </a>

          <div className="kse-space kse-space-align-center kse-space-middle">
            <a
              href="<!--/link_logout/-->"
              className="kse-link-primary-bg-hover kse-text-middle"
            >
              로그아웃
            </a>
            <a
              href="<!--/link_join/-->"
              className="kse-link-primary-bg-hover kse-text-middle"
            >
              정보수정
            </a>

            <a
              href="<!--/link_login/-->"
              className="kse-link-primary-bg-hover kse-text-middle"
            >
              로그인
            </a>
            <a
              href="<!--/link_join/-->"
              className="kse-link-primary-bg-hover kse-text-middle"
            >
              회원가입
            </a>

            <a
              href="<!--/link_mypage/-->"
              className="kse-link-primary-bg-hover kse-text-middle"
            >
              라운지
            </a>
            <a
              href="/shop/confirm_login.html?type=myorder"
              className="kse-link-primary-bg-hover kse-text-middle"
            >
              주문조회
            </a>
            <a
              href="<!--/link_basket/-->"
              className="kse-link-primary-bg-hover kse-text-middle"
            >
              나의 금고
            </a>
          </div>
        </div>
      </header>
      <div>Menu Bottom Header</div>
      <div className="kse-menu-dummy" style={{ height: 87.2 }}>
        <div className="kse-shadow  kse-row kse-row-center kse-block kse-row-lg-min kse-affix">
          <div className="kse-row kse-row-lg kse-row-space-between">
            <div className="kse-menu">
              <div className="kse-menu-item">
                <a className="kse-space-small kse-space-align-center kse-text-large header-menu menu-1">
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
                  <span className="kse-link-hover">상품보기</span>
                </a>
              </div>
              <div className="kse-menu-item">
                <a
                  className=" kse-link-hover kse-text-large"
                  href="/shop/page.html?id=1"
                >
                  은시세
                </a>
              </div>
              <div className="kse-menu-item">
                <a className="" href="/shop/page.html?id=3">
                  <span className="txt kse-link-hover kse-text-large">
                    금시세
                  </span>
                </a>
              </div>
              <div className="kse-menu-item">
                <a className="" href="/board/board.html?code=ksilverex_image1">
                  <span className="txt kse-link-hover kse-text-large">
                    매거진
                  </span>
                </a>
              </div>
              <div className="kse-menu-item">
                <a className="" href="/board/board.html?code=ksilverex_image2">
                  <span className="txt kse-link-hover kse-text-large">
                    이벤트
                  </span>
                </a>
              </div>
              <div className="kse-menu-item">
                <a className="" href="/shop/shopbrand.html?xcode=011&type=X">
                  <span className="txt kse-link-hover kse-text-large">
                    위탁판매
                  </span>
                </a>
              </div>
            </div>

            <div className="kse-space-middle kse-space-align-center">
              <a href="/shop/basket.html" className="kse-link-hover kse-badge">
                <svg className="kse-icon kse-icon-link" viewBox="0 0 30 31.5">
                  <g>
                    <path d="M12,15c0-1.65,1.35-3,3-3s3,1.35,3,3-1.35,3-3,3-3-1.35-3-3m-3.3,8.55l-2.25-2.1,2.25-2.25c-.75-1.2-1.2-2.7-1.2-4.2s.45-3,1.2-4.05l-2.25-2.25,2.25-2.25,2.1,2.25c1.2-.75,2.7-1.2,4.2-1.2s3,.45,4.2,1.2l2.25-2.25,2.1,2.1-2.25,2.25c.75,1.2,1.2,2.7,1.2,4.2s-.45,3-1.2,4.2l2.25,2.25-2.1,2.1-2.25-2.25c-1.2,.75-2.7,1.2-4.2,1.2s-3-.45-4.05-1.2l-2.25,2.25m6.3-13.05c-2.55,0-4.5,1.95-4.5,4.5s1.95,4.5,4.5,4.5,4.5-1.95,4.5-4.5-1.95-4.5-4.5-4.5M27,0c1.65,0,3,1.35,3,3V27c0,1.65-1.35,3-3,3h-1.5v1.5h-6v-1.5H10.5v1.5H4.5v-1.5h-1.5c-1.65,0-3-1.35-3-3V3C0,1.35,1.35,0,3,0H27m0,27V3H3V27H27Z" />
                  </g>
                </svg>
                <sup className="kse-badge-count"> 5 </sup>
              </a>

              <div id="side_search" className="kse-space-item">
                {IconInput}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>Mobile Top Header</div>
      <header className="kse-layout-header kse-block">
        <div className="kse-row  kse-row-center">
          <a
            href="/m/page.html?id=3"
            id="txt"
            className="kse-link-primary-bg-hover kse-text-middle"
          >
            건전한 투자와 수집문화 발전에 앞장서고 있습니다.
          </a>
        </div>
      </header>
      <div>Mobile Middle Header</div>
      <div className="kse-row kse-row-space-between kse-row-align-center kse-layout-header-middle-mobile ">
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
        <div className="kse-card">
          <div className="kse-card-body">
            <a href="/">
              <img src={logo} />
            </a>
          </div>
        </div>
        <a href="/shop/basket.html" className="kse-link-hover kse-badge">
          <svg className="kse-icon kse-icon-link" viewBox="0 0 30 31.5">
            <g>
              <path d="M12,15c0-1.65,1.35-3,3-3s3,1.35,3,3-1.35,3-3,3-3-1.35-3-3m-3.3,8.55l-2.25-2.1,2.25-2.25c-.75-1.2-1.2-2.7-1.2-4.2s.45-3,1.2-4.05l-2.25-2.25,2.25-2.25,2.1,2.25c1.2-.75,2.7-1.2,4.2-1.2s3,.45,4.2,1.2l2.25-2.25,2.1,2.1-2.25,2.25c.75,1.2,1.2,2.7,1.2,4.2s-.45,3-1.2,4.2l2.25,2.25-2.1,2.1-2.25-2.25c-1.2,.75-2.7,1.2-4.2,1.2s-3-.45-4.05-1.2l-2.25,2.25m6.3-13.05c-2.55,0-4.5,1.95-4.5,4.5s1.95,4.5,4.5,4.5,4.5-1.95,4.5-4.5-1.95-4.5-4.5-4.5M27,0c1.65,0,3,1.35,3,3V27c0,1.65-1.35,3-3,3h-1.5v1.5h-6v-1.5H10.5v1.5H4.5v-1.5h-1.5c-1.65,0-3-1.35-3-3V3C0,1.35,1.35,0,3,0H27m0,27V3H3V27H27Z" />
            </g>
          </svg>
          <sup className="kse-badge-count"> 5 </sup>
        </a>
      </div>
      <div>Mobile Bottom Header</div>
      <div className="kse-shadow kse-row kse-row-center kse-layout-header-bottom-mobile ">
        <div className="kse-row kse-menu">
          <div className="kse-menu-item">
            <a className="kse-space-small kse-space-align-center kse-text-large header-menu menu-1">
              <span className="kse-link-hover">상품보기</span>
            </a>
          </div>
          <div className="kse-menu-item">
            <a className="" href="/shop/page.html?id=1">
              <span className="txt kse-link-hover kse-text-large">은시세</span>
            </a>
          </div>
          <div className="kse-menu-item">
            <a className="" href="/shop/page.html?id=3">
              <span className="txt kse-link-hover kse-text-large">금시세</span>
            </a>
          </div>
          <div className="kse-menu-item">
            <a className="" href="/board/board.html?code=ksilverex_image1">
              <span className="txt kse-link-hover kse-text-large">매거진</span>
            </a>
          </div>
          <div className="kse-menu-item">
            <a className="" href="/board/board.html?code=ksilverex_image2">
              <span className="txt kse-link-hover kse-text-large">이벤트</span>
            </a>
          </div>
          <div className="kse-menu-item">
            <a className="" href="/shop/shopbrand.html?xcode=011&type=X">
              <span className="txt kse-link-hover kse-text-large">
                위탁판매
              </span>
            </a>
          </div>
        </div>
      </div>
      <h3>Lounge (web)</h3>
      <div className="kse-layout-sider-children">
        <div className="kse-layout-sider-header">
          <div>오늘도 좋은 일이 가득할</div>
          <div className="kse-layout-sider-header-customer">
            <strong>홍길동</strong>
            &nbsp;고객님!
          </div>
        </div>
        <ul className="kse-menu-horizontal">
          <li className="kse-menu-item-group kse-space-vertical-small">
            <div
              className="kse-menu-item-group-title"
              style={{ paddingTop: 0 }}
            >
              쇼핑정보
            </div>
            <hr className="kse-divider-no-style kse-divider-color-10" />

            <ul>
              <li className="kse-menu-item">
                <a href="/shop/mypage.html?mypage_type=myorder">주문내역</a>
              </li>
              <li className="kse-menu-item">
                <a href="/shop/mypage.html?mypage_type=mycoupon">쿠폰</a>
              </li>
              <li className="kse-menu-item">
                <a href="/shop/mypage.html?mypage_type=myreserve">
                  멤버십 포인트
                </a>
              </li>
              <li className="kse-menu-item">
                <a href="/shop/mypage.html?mypage_type=myemoney">예치금 내역</a>
              </li>
              <li className="kse-menu-item">
                <a href="/shop/todaygoods.html">오늘 본 상품</a>
              </li>
              <li className="kse-menu-item">
                <a href="/shop/mypage.html?mypage_type=mywishlist">관심상품</a>
              </li>
              <li className="kse-menu-item">
                <a href="/shop/basket.html">나의 금고</a>
              </li>

              <li className="kse-menu-item">
                <a href="/shop/mypage.html?mypage_type=myplace">주소록 관리</a>
              </li>
              <li className="kse-menu-item">
                <a href="/shop/page.html?id=6">VIP CLUB</a>
              </li>
            </ul>
          </li>
          <li className="kse-menu-item-group  kse-space-vertical-small">
            <div className="kse-menu-item-group-title ">문의내역</div>
            <hr className="kse-divider-no-style kse-divider-color-10" />
            <ul>
              <li className="kse-menu-item">
                <a href="/shop/mypage.html?mypage_type=myarticle">
                  내 게시글 보기
                </a>
              </li>
              <li className="kse-menu-item">
                <a href="/shop/mypage.html?mypage_type=mym2mboard">1:1 문의</a>
              </li>
              <li className="kse-menu-item">
                <a href="/shop/faq.html">자주묻는 질문</a>
              </li>
            </ul>
            <li className="kse-menu-item-group kse-space-vertical-small">
              <div className="kse-menu-item-group-title">고객정보</div>
              <hr className="kse-divider-no-style kse-divider-color-10" />
              <ul>
                <li className="kse-menu-item">
                  <a href="/shop/idinfo.html">회원정보 변경</a>
                </li>
                <li className="kse-menu-item">
                  <a href="javascript:userexit();">회원탈퇴 신청</a>
                </li>
              </ul>
            </li>
          </li>
        </ul>
      </div>
    </>
  );
};
