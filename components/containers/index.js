import PropTypes from "prop-types";
import React from "react";
import { SEO } from "utils/seo";
import { rootDescription, rootTitle } from "utils/seo/settings";
let urlImageDefault = "https://portfolio-jordi.s3.amazonaws.com/images/banner.jpg";
export const PageContainer = ({
  children,
  loading,
  error,
  empty,
  emptyMessage,
  title = rootTitle,
  keywords = "",
  description = rootDescription,
  image = urlImageDefault,
}) => {
  return (
    <div>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        image={image}
      />
      <div className="page-container">{children}</div>
    </div>
  );
};
PageContainer.propTypes = {
  children: PropTypes.node.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  empty: PropTypes.bool,
  emptyMessage: PropTypes.string,
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
PageContainer.defaultProps = {
  loading: false,
  error: false,
  empty: false,
  emptyMessage: "No data",
  title: rootTitle,
  keywords: "",
  description: rootDescription,
  image: urlImageDefault,
  children: <div>PageContainer</div>,
};
