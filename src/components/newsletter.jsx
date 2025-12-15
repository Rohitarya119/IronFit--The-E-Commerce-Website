;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, CheckCircle } from "lucide-react";
export function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };
  return <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-card p-8 sm:p-12 lg:p-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-black uppercase tracking-tight text-foreground sm:text-4xl">
              Join the IRONFIT Community
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Subscribe for exclusive deals, new releases, and fitness tips from pro athletes.
            </p>

            {subscribed ? <div className="mt-8 flex items-center justify-center gap-2 text-primary">
                <CheckCircle className="h-6 w-6" />
                <span className="text-lg font-semibold">You're in! Check your inbox.</span>
              </div> : <form onSubmit={handleSubmit} className="mt-8">
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-0">
                  <Input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} className="h-12 flex-1 rounded-lg border-border bg-secondary text-foreground placeholder:text-muted-foreground sm:rounded-r-none" required />
                  <Button type="submit" size="lg" className="h-12 bg-primary px-8 text-primary-foreground hover:bg-primary/90 sm:rounded-l-none">
                    Subscribe
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>}

            <p className="mt-4 text-sm text-muted-foreground">
              No spam, unsubscribe anytime. By subscribing you agree to our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>;
}