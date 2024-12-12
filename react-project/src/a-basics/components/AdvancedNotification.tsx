import { ReactNode } from "react";
import classNames from "classnames";

interface Props {
  children: ReactNode;
  type?: "is-danger" | "is-warning" | "is-success" | "";
}

export function AdvancedNotification({ children, type }: Props) {
  return <div className={classNames("notification", type)}>{children}</div>;
}
