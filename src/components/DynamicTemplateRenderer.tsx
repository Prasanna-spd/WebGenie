import React from "react";

import EcommerceTemplate from "@/templates/EcommerceTemplate";
import { TemplateProps } from "@/types/templateProps";


type DynamicRendererProps = {
    templateType: string;
    templateProps: TemplateProps; // Replace with specific type if possible
  };


const DynamicRenderer = ({ templateType, templateProps }:DynamicRendererProps) => {
  switch (templateType) {
    case "ecomm":
      return <EcommerceTemplate {...templateProps} />;
    // case "portfolio":
    //   return <PortfolioPreview {...templateProps} />;
    // case "agency":
    //   return <AgencyPreview {...templateProps} />;
    default:
      return <div>Preview not available for this template.</div>;
  }
};

export default DynamicRenderer;
