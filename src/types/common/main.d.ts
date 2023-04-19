type PropsWithChildren<P = unknown> = P & { children?: ReactNode };
type PropsWithClassName<P = unknown> = P & { className?: string };
type PropsWithChildrenAndClassName<P = unknown> = PropsWithClassName<P> &
  PropsWithChildren<P>;
interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
}
