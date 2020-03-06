import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import BlogPreview from "./cms-preview-templates/blog";
import CondicionesPreview from "./cms-preview-templates/condiciones";
import WebcamsPreview from "./cms-preview-templates/webcams";
import ContactoPreview from "./cms-preview-templates/contacto";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("blog", BlogPreview);
CMS.registerPreviewTemplate("condiciones", CondicionesPreview);
CMS.registerPreviewTemplate("webcams", WebcamsPreview);
CMS.registerPreviewTemplate("contacto", ContactoPreview);
CMS.init();
