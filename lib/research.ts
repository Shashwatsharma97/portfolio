// Published research. Add an entry here for each paper — every field is
// optional except title/venue/description; leave `href`/`codeHref` off if
// there isn't a public link yet.

export type Paper = {
  slug: string;
  title: string;
  venue: string;
  type: string;
  description: string;
  tags: string[];
  href?: string;
  codeHref?: string;
};

export const papers: Paper[] = [
  {
    slug: "crop-prediction-explainable-ai",
    title: "Enhancing Crop Prediction with Explainable AI: A SHAP-Based Approach",
    venue: "2025 International Conference on Modeling, Simulation & Intelligent Computing (MoSICom)",
    type: "Conference Paper",
    description:
      "A crop recommendation system that pairs machine learning with SHAP-based explainability, so predictions come with transparent, farmer-readable reasoning instead of a black-box output.",
    tags: ["Machine Learning", "Explainable AI", "SHAP"],
    href: "https://ieeexplore.ieee.org/abstract/document/11398280",
    codeHref:
      "https://github.com/Shashwatsharma97/Enhancing-Crop-Prediction-with-Explainable-AI-ASHAP-Based-Approach-",
  },
  {
    slug: "food-waste-prediction",
    title: "Revolutionizing Waste Management: An AI-Driven Approach Towards Sustainability",
    venue: "Book Chapter",
    type: "Book Chapter",
    description:
      "Machine learning models (Random Forest, Logistic Regression, SVM) trained on event data to predict food wastage and help organizations plan preparation and storage more sustainably.",
    tags: ["Machine Learning", "Sustainability", "Classification"],
    href: "https://www.taylorfrancis.com/chapters/edit/10.1201/9781003593089-140/revolutionizing-waste-management-ai-driven-approach-towards-sustainability-sankalp-bijalwan-aniket-saroj-himanshu-gupta-shashwat-sharma-saurabh-kumar-srivastava-ambrish-kumar",
    codeHref:
      "https://github.com/Shashwatsharma97/Revolutionizing-Waste-Management-An-AI-driven-Approach-Towards-Sustainability-",
  },
];
