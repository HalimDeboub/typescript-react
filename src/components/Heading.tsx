import React, { ReactElement } from "react";
type HeadingProps = { title: string };
function Heading({ title }: HeadingProps): ReactElement {
  return <div>{title}</div>;
}

export default Heading;
