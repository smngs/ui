import React from "react";

interface LinkCardProps {
  href: string;
  title: string;
  description?: string;
  image?: string;
  favicon?: string;
}

export const LinkCard = React.forwardRef<HTMLAnchorElement, LinkCardProps>(
  ({ href, title, description, image, favicon }, ref) => {
    let domain = "";
    try {
      domain = new URL(href).hostname;
    } catch {
      domain = href;
    }

    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="smngs-link-card"
      >
        <div className="smngs-link-card-body">
          <div className="smngs-link-card-title">{title}</div>
          {description && (
            <div className="smngs-link-card-description">{description}</div>
          )}
          <div className="smngs-link-card-domain">
            {favicon && (
              <img
                src={favicon}
                alt=""
                className="smngs-link-card-favicon"
                aria-hidden="true"
              />
            )}
            {domain}
          </div>
        </div>
        {image && (
          <img
            src={image}
            alt=""
            className="smngs-link-card-image"
            aria-hidden="true"
          />
        )}
      </a>
    );
  }
);
LinkCard.displayName = "LinkCard";
