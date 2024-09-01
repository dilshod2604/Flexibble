import React, { FC } from "react";
import scss from "./Footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import footerlogo from "../../../public/logo-purple.svg";
import { footerLinks } from "@/constants";
const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.footer_content}>
          <div className={scss.footer_top}>
            <Link href="/">
              <Image
                src={footerlogo}
                alt="logo-purple"
                width={115}
                height={30}
              />
            </Link>
            <p className={scss.footer_top_text}>
              Flexibble is the world&apos;s leading community for creatives to
              share, grow, and get hired.
            </p>
          </div>
          <div className={scss.footer_middle}>
            <FooterLinks
              title={footerLinks[0].title}
              links={footerLinks[0].links}
            />
            <div>
              <FooterLinks
                title={footerLinks[1].title}
                links={footerLinks[1].links}
              />
              <FooterLinks
                title={footerLinks[2].title}
                links={footerLinks[2].links}
              />
            </div>
            <FooterLinks
              title={footerLinks[3].title}
              links={footerLinks[3].links}
            />
            <div>
              <FooterLinks
                title={footerLinks[4].title}
                links={footerLinks[4].links}
              />
              <FooterLinks
                title={footerLinks[5].title}
                links={footerLinks[5].links}
              />
            </div>
            <FooterLinks
              title={footerLinks[6].title}
              links={footerLinks[6].links}
            />
          </div>
          <div className={scss.footer_bottom}>
            <p className={scss.footer_bottom_text}>
              @ 2023 Flexibble. All rights reserved
            </p>
            <p className={scss.footer_bottom_text2}>
              <span>10,214</span> projects submitted
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

interface FooterLinksProps {
  title: string;
  links: Array<string>;
}
const FooterLinks: FC<FooterLinksProps> = (props) => {
  const { links, title } = props;
  return (
    <div className={scss.footer_links}>
      <h4 className={scss.links_title}>{title}</h4>
      <div className={scss.link_items}>
        {links.map((link) => (
          <Link href="#">{link}</Link>
        ))}
      </div>
    </div>
  );
};
