import { AnyMxRecord } from "dns";
import React from "react";

type IProps = {
  children: any;
  value: string;
  onChange: (e: any) => void;
};

const SearchComponent = (props: IProps) => {
  return (
    <div>
      <label htmlFor="search">{props.children}</label>
      <input
        type="text"
        id="search"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default SearchComponent;
