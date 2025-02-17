## Why Pulsar?

There are a lot of text editors out there; why should you spend your time
learning about and using Pulsar? Editors like Sublime and TextMate offer
convenience but only limited extensibility. On the other end of the spectrum,
Emacs and Vim offer extreme flexibility, but they aren't very approachable and
can only be customized with special-purpose scripting languages.

We think we can do better. Our goal is a zero-compromise combination of
hackability and usability: an editor that will be welcoming to an elementary
school student on their first day learning to code, but also a tool they won't
outgrow as they develop into seasoned hackers.

As we've used Pulsar to build Pulsar, what began as an experiment has gradually
matured into a tool we can't live without. On the surface, Pulsar is the modern
desktop text editor you've come to expect. Pop the hood, however, and you'll
discover a system begging to be hacked on.

### The Nucleus of Pulsar

The web is not without its faults, but two decades of development has forged it
into an incredibly malleable and powerful platform. So when we set out to write
a text editor that we ourselves would want to extend, web technology was the
obvious choice. But first, we had to free it from its chains.

### The Native Web

Web browsers are great for browsing web pages, but writing code is a specialized
activity that warrants dedicated tools. More importantly, the browser severely
restricts access to the local system for security reasons, and for us, a text
editor that couldn't write files or run local sub-processes was a non-starter.

For this reason, we didn't build Pulsar as a traditional web application.
Instead, Pulsar is a specialized variant of Chromium designed to be a text
editor rather than a web browser. Every Pulsar window is essentially a
locally-rendered web page.

All the APIs available to a typical Node.js application are also available to
the code running in each window's JavaScript context. This hybrid provides a
unique client-side development experience.

Since everything is local, you don't have to worry about asset pipelines, script
concatenation, and asynchronous module definitions. If you want to load some
code, just require it at the top of your file. Node's module system makes it
easy to break the system down into lots of small, focused packages.

### JavaScript, Meet C++

Interacting with native code is also really simple. For example, we wrote a
wrapper around the Oniguruma regular expression engine for our TextMate grammar
support. In a browser, that would have required adventures with NaCl or Esprima.
Node integration made it easy.

In addition to the Node APIs, we also expose APIs for native dialogs, adding
application and context menu items, manipulating the window dimensions, etc.

### Web Tech: The Fun Parts

Another great benefit, that comes with writing code for Pulsar, is the guarantee
that it's running on the newest version of Chromium. That means we can ignore
issues like browser compatibility and polyfills. We can use all the web's shiny
features of tomorrow, today.

For example, the layout of our workspace and panes is based on flexbox. It's an
emerging standard and has gone through a lot of change since we started using
it, but none of that mattered as long as it worked.

With the entire industry pushing web technology forward, we're confident that
we're building Pulsar on fertile ground. Native UI technologies come and go, but
the web is a standard that becomes more capable and ubiquitous with every
passing year. We're excited to dig deeper into its toolbox.

## An Open-Source Text Editor

We see Pulsar as a great replacement for Atom but we can't do it without your
support going forward, since we know that we can't achieve our vision for 
Pulsar alone. As Emacs and Vim have demonstrated over the past three 
decades, if you want to build a thriving, long-lasting community around 
a text editor, it has to be open source.

The entire Pulsar editor is free and open source and available under our
[Organizational](https://github.com/pulsar-edit) repositories.
