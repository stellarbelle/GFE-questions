import { useState } from "react";

export default Tabs = () => {
  const [tab, setTab] = useState("html");
  const isActive = (value) => {
    return value === tab ? "active" : "inactive";
  };
  return (
    <div>
      <div>
        <button
          className={isActive("html")}
          value="html"
          onClick={(e) => setTab(e.target.value)}
        >
          HTML
        </button>
        <button
          className={isActive("css")}
          value="css"
          onClick={(e) => setTab(e.target.value)}
        >
          CSS
        </button>
        <button
          className={isActive("js")}
          value="js"
          onClick={(e) => setTab(e.target.value)}
        >
          JavaScript
        </button>
      </div>
      <div>
        {tab === "html" && (
          <p>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </p>
        )}
        {tab === "css" && (
          <p>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </p>
        )}
        {tab === "js" && (
          <p>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </p>
        )}
      </div>
    </div>
  );
};
