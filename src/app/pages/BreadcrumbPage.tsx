import React from "react";

export const BreadcrumbPage: React.FC = () => {
  return (
    <>
      <div>Breadcrumb</div>
      <nav className="kse-breadcrumb">
        <ol>
          <li>
            <span className="kse-breadcrumb-link">Home</span>
          </li>
          <li className="kse-breadcrumb-separator">/</li>
          <li>
            <span className="kse-breadcrumb-link">
              <a href="">Application Center</a>
            </span>
          </li>
          <li className="kse-breadcrumb-separator">/</li>
          <li>
            <span className="kse-breadcrumb-link">
              <a href="">Application List</a>
            </span>
          </li>
          <li className="kse-breadcrumb-separator">/</li>
          <li>
            <span className="kse-breadcrumb-link">An Application</span>
          </li>
        </ol>
      </nav>
    </>
  );
};
