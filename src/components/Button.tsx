import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary-pink" | "secondary-periwinkle" | "submit";

const base =
  "inline-flex h-[51px] items-center justify-center rounded-pill border bg-transparent px-[20.8px] text-base font-normal uppercase tracking-wide transition-colors duration-100 ease-linear";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "border-white text-white hover:bg-white hover:text-pink",
  "secondary-pink": "border-pink text-pink hover:bg-pink hover:text-white",
  "secondary-periwinkle":
    "border-periwinkle text-periwinkle hover:bg-periwinkle hover:text-white",
  submit: "border-pink text-pink hover:bg-pink hover:text-white",
};

type BaseProps = {
  variant: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & { href: string };

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { href?: undefined };

export default function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant, className = "", children, ...rest } = props;
  const classes = `${base} ${variantClasses[variant]} ${className}`.trim();

  if (rest.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);
    if (isExternal) {
      return (
        <a href={href} className={classes} {...anchorRest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
