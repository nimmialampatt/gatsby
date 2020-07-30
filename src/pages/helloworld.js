import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../component/Layout";
// import { graphql } from "gatsby"
import CodeBox from "../component/codeBox/codeBox";
import Tips from "../component/tips/index"

//   console.log("Ssssssssssss",data);

const HelloWorld = (props) => {
  const data = useStaticQuery(graphql`
    query {
      postsJson(slug: { eq: "helloworld" }) {
        title
        slug
        content {
          title
          paragraph0
          paragraph1
          paragraph2
          paragraph3
          paragraph4
          Tips
          codeboxText
          shortDescription
          codepen
          subDescription
        }
      }
    }
  `);
  console.log("Ssssssssssssssss", data);
  return (
    <div>
      <Layout>
        {data.postsJson.content.map((content) => (
          <div key={content.title}>
            {console.log("sss",content)}
            <h3>{content.paragraph0}</h3>
            <span>{content.codeboxText ? <CodeBox codeboxText={content.codeboxText}/> : ""}</span>
            <p>{content.shortDescription}</p>
            <p>{content.codepen}</p>
            <p>{content.subDescription}</p>
            <h1>{content.title}</h1>
            <p>{content.paragraph1}</p><span>
            {content.Tips ? <Tips tipText={content.Tips}/> : ""}</span>            <p>{content.paragraph2}</p>
            <p>{content.paragraph3}</p>
            <p>{content.paragraph4}</p>
          </div>
        ))}
      </Layout>
    </div>
  );
};

export default HelloWorld;
