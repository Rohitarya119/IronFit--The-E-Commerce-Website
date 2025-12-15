import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";
const footerLinks = {
  shop: [{
    name: "Men",
    href: "/men"
  }, {
    name: "Women",
    href: "/women"
  }, {
    name: "Accessories",
    href: "/accessories"
  }, {
    name: "Equipment",
    href: "/equipment"
  }, {
    name: "Sale",
    href: "/sale"
  }],
  support: [{
    name: "Contact Us",
    href: "/contact"
  }, {
    name: "FAQs",
    href: "/faqs"
  }, {
    name: "Shipping Info",
    href: "/shipping"
  }, {
    name: "Returns",
    href: "/returns"
  }, {
    name: "Size Guide",
    href: "/size-guide"
  }],
  company: [{
    name: "About Us",
    href: "/about"
  }, {
    name: "Careers",
    href: "/careers"
  }, {
    name: "Press",
    href: "/press"
  }, {
    name: "Athletes",
    href: "/athletes"
  }, {
    name: "Sustainability",
    href: "/sustainability"
  }]
};
const socialLinks = [{
  name: "Instagram",
  href: "#",
  icon: Instagram
}, {
  name: "Twitter",
  href: "#",
  icon: Twitter
}, {
  name: "Facebook",
  href: "#",
  icon: Facebook
}, {
  name: "YouTube",
  href: "#",
  icon: Youtube
}];
export function Footer() {
  return <footer className="border-t border-border bg-card">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <span className="text-lg font-black text-primary-foreground">IF</span>
            </div>
            <span className="text-xl font-black tracking-tight text-foreground">IRONFIT</span>
          </Link>
          <p className="mt-4 max-w-sm text-muted-foreground">
            Premium gym accessories and apparel for athletes who demand performance, durability, and style.
          </p>
          <div className="mt-6 flex gap-4">
            {socialLinks.map(social => <Link key={social.name} to={social.href} className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
              <social.icon className="h-5 w-5" />
              <span className="sr-only">{social.name}</span>
            </Link>)}
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold uppercase tracking-wider text-foreground">Shop</h3>
          <ul className="mt-4 space-y-3">
            {footerLinks.shop.map(link => <li key={link.name}>
              <Link to={link.href} className="text-muted-foreground hover:text-primary">
                {link.name}
              </Link>
            </li>)}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold uppercase tracking-wider text-foreground">Support</h3>
          <ul className="mt-4 space-y-3">
            {footerLinks.support.map(link => <li key={link.name}>
              <Link to={link.href} className="text-muted-foreground hover:text-primary">
                {link.name}
              </Link>
            </li>)}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold uppercase tracking-wider text-foreground">Company</h3>
          <ul className="mt-4 space-y-3">
            {footerLinks.company.map(link => <li key={link.name}>
              <Link to={link.href} className="text-muted-foreground hover:text-primary">
                {link.name}
              </Link>
            </li>)}
          </ul>
        </div>
      </div>

      {/* Contact Info */}
      <div className="mt-12 flex flex-wrap gap-6 border-t border-border pt-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-primary" />
          support@ironfit.com
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-primary" />
          1-800-IRONFIT
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-primary" />
          Los Angeles, CA
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
        <p>© 2025 IRONFIT. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-primary">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-primary">
            Terms of Service
          </Link>
          <Link to="/cookies" className="hover:text-primary">
            Cookie Policy
          </Link>
        </div>
      </div>
    </div>
  </footer>;
}