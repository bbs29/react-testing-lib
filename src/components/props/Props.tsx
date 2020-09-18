import { defaultCipherList } from "constants";
import React from "react";

type IProps = {
  name?: string;
};
const PropsComponent = (props: IProps) => {
  return props.name ? <h1>Hello, {props.name}</h1> : <h1>Hey stranger!!</h1>;
};

export default PropsComponent;
