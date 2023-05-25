import React from "react";
import { useTitle } from "../../useHooks/useTitle";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="w-2/3 mx-auto">
      <SectionTitle title={"Blogs"} />
      <div>
        {/*  */}
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-primary">
            Question 1 : What is an access token and refresh token? How do they
            work and where should we store them on the client-side?
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-primary">
            Answer 1 : Access Token is like a key to get his own data,and
            refresh token its generate a new token in every authentication ,
            thats why is become more private and safty, we can use JWT(json Web
            Token) for this token, We should store them http cookie only
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-secondary">
            Question 2 :Compare SQL and NoSQL databases?
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-secondary">
            Answer 2 : SQL data are represent with table , and every table has
            eonnection between, its also called relational database, ANd NoSQl
            data are store like object,and every document are independend.
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-info">
            Question 3 :What is express js? What is Nest JS (google it)?
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-info">
            Answer 3 : express js is a node.js freamwork,its use for backend
            intregation,and short version of node.js,Next.js is a React
            framework that gives you building blocks to create web applications.
            By framework, we mean Next.js handles the tooling and configuration
            needed for React, and provides additional structure, features, and
            optimizations for your application.
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="chat chat-start">
          <div className="chat-bubble chat-bubble-warning">
            Question 4 :What is MongoDB aggregate and how does it work (google
            it)?
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-warning">
            Answer 4 : Aggregation is a way of processing a large number of
            documents in a collection by means of passing them through different
            stages. The stages make up what is known as a pipeline. The stages
            in a pipeline can filter, sort, group, reshape and modify documents
            that pass through the pipeline.
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default Blogs;
