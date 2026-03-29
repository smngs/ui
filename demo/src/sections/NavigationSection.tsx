import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
  Avatar,
  Button,
  Collapsible, CollapsibleContent, CollapsibleTrigger,
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
  Navbar, NavbarTitle, NavbarLinks, NavbarRight, NavbarHamburger, NavbarMobileMenu, NavbarDropdownContent,
  NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger,
  Separator,
  Tabs, TabsContent, TabsList, TabsTrigger,
} from "@smngs/ui";
import { Section } from "../Section";
import { CodeBlock } from "../CodeBlock";

export function NavigationSection({ isDark }: { isDark: boolean }) {
  const [collOpen, setCollOpen] = useState(false);

  return (
    <>
      <div className="section" id="navigation">
        <h2>Navigation</h2>
      </div>

      {/* Tabs */}
      <Section title="Tabs" id="tabs" level={3}>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="recent">Recently Viewed</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <p style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>All items are displayed here.</p>
          </TabsContent>
          <TabsContent value="favorites">
            <p style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>Items you have marked as favorites appear here.</p>
          </TabsContent>
          <TabsContent value="recent">
            <p style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>Items you have recently viewed appear here.</p>
          </TabsContent>
        </Tabs>
        <Tabs defaultValue="a" size="sm">
          <TabsList>
            <TabsTrigger value="a">Small</TabsTrigger>
            <TabsTrigger value="b">Tabs</TabsTrigger>
            <TabsTrigger value="c">Example</TabsTrigger>
          </TabsList>
          <TabsContent value="a"><p style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>Small size tab content.</p></TabsContent>
          <TabsContent value="b"><p style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>Tab B.</p></TabsContent>
          <TabsContent value="c"><p style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>Tab C.</p></TabsContent>
        </Tabs>
        <Tabs defaultValue="a" size="lg">
          <TabsList>
            <TabsTrigger value="a">Large</TabsTrigger>
            <TabsTrigger value="b">Tabs</TabsTrigger>
            <TabsTrigger value="c">Example</TabsTrigger>
          </TabsList>
          <TabsContent value="a"><p style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>Large size tab content.</p></TabsContent>
          <TabsContent value="b"><p style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>Tab B.</p></TabsContent>
          <TabsContent value="c"><p style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>Tab C.</p></TabsContent>
        </Tabs>
        <CodeBlock isDark={isDark} code={`
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content for Tab 1</TabsContent>
  <TabsContent value="tab2">Content for Tab 2</TabsContent>
</Tabs>

{/* size: "sm" | "md" (default) | "lg" */}
<Tabs defaultValue="tab1" size="sm">...</Tabs>
<Tabs defaultValue="tab1" size="lg">...</Tabs>
        `} />
      </Section>

      <Separator />

      {/* Accordion */}
      <Section title="Accordion" id="accordion" level={3}>
        <Accordion type="single" defaultValue="q1" collapsible>
          <AccordionItem value="q1">
            <AccordionTrigger>How long does shipping take?</AccordionTrigger>
            <AccordionContent>Standard delivery takes 2–5 business days. Express options are available if you need it sooner.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>Can I return or exchange an item?</AccordionTrigger>
            <AccordionContent>Yes, unused items can be returned or exchanged within 30 days of delivery.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>How do I delete my account?</AccordionTrigger>
            <AccordionContent>Go to Settings → Account and follow the deletion steps. This action cannot be undone.</AccordionContent>
          </AccordionItem>
        </Accordion>
        <CodeBlock isDark={isDark} code={`
<Accordion type="single" collapsible>
  <AccordionItem value="q1">
    <AccordionTrigger>Question?</AccordionTrigger>
    <AccordionContent>Answer.</AccordionContent>
  </AccordionItem>
</Accordion>
        `} />
      </Section>

      <Separator />

      {/* Collapsible */}
      <Section title="Collapsible" id="collapsible" level={3}>
        <Collapsible open={collOpen} onOpenChange={setCollOpen}>
          <div style={{ border: "1px solid var(--color-divider)", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "var(--space-2) var(--space-3)" }}>
              <span style={{ fontWeight: "var(--font-medium)" }}>Team Members</span>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" style={{ fontSize: "var(--text-xs)" }}>
                  {collOpen ? "Collapse" : "Expand"}
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent>
              <div style={{ padding: "0 var(--space-3) var(--space-2)", fontSize: "var(--text-sm)", color: "var(--color-muted)" }}>
                <div>• Alice Johnson</div>
                <div>• Bob Smith</div>
                <div>• Carol Williams</div>
              </div>
            </CollapsibleContent>
          </div>
        </Collapsible>
        <CodeBlock isDark={isDark} code={`
<Collapsible open={open} onOpenChange={setOpen}>
  <CollapsibleTrigger asChild>
    <Button variant="ghost">Toggle</Button>
  </CollapsibleTrigger>
  <CollapsibleContent>Hidden content here.</CollapsibleContent>
</Collapsible>
        `} />
      </Section>

      <Separator />

      {/* DropdownMenu */}
      <Section title="DropdownMenu" id="dropdown-menu" level={3}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">Menu ▾</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onSelect={() => alert("Copied!")}>Copy Link</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => alert("Shared!")}>Share</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem disabled>Delete (disabled)</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <CodeBlock isDark={isDark} code={`
<DropdownMenu>
  <DropdownMenuTrigger asChild><Button variant="ghost">Menu ▾</Button></DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuItem onSelect={() => {}}>Copy Link</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem disabled>Delete (disabled)</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
        `} />
      </Section>

      <Separator />

      {/* Navbar */}
      <Section title="Navbar" id="navbar" level={3}>
        <Navbar>
          <Avatar src="https://github.com/smngs.png" fallback="SM" size="sm" />
          <NavbarTitle href="#navbar">@smngs/ui</NavbarTitle>
          <NavbarLinks>
            <Button variant="nav" asChild><a href="#navbar">Home</a></Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="nav">Components ▾</Button>
              </DropdownMenuTrigger>
              <NavbarDropdownContent>
                <DropdownMenuItem onSelect={() => { location.hash = "#button"; }}>Button</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => { location.hash = "#badge"; }}>Badge</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => { location.hash = "#card"; }}>Card</DropdownMenuItem>
                <DropdownMenuItem onSelect={() => { location.hash = "#tabs"; }}>Tabs</DropdownMenuItem>
              </NavbarDropdownContent>
            </DropdownMenu>
            <Button variant="nav" asChild><a href="#navbar">Blog</a></Button>
          </NavbarLinks>
          <NavbarRight>
            <Button variant="nav"><FontAwesomeIcon icon={faMoon} /></Button>
            <NavbarHamburger />
          </NavbarRight>
          <NavbarMobileMenu>
            <a href="#navbar">Home</a>
            <a href="#button">Components</a>
            <a href="#navbar">Blog</a>
          </NavbarMobileMenu>
        </Navbar>
        <CodeBlock isDark={isDark} code={`
<Navbar>
  <Avatar src="/avatar.png" fallback="SM" size="sm" />
  <NavbarTitle href="/">My App</NavbarTitle>
  <NavbarLinks>
    <Button variant="nav" asChild><a href="/">Home</a></Button>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="nav">Components ▾</Button>
      </DropdownMenuTrigger>
      <NavbarDropdownContent>
        <DropdownMenuItem onSelect={() => router.push("/button")}>Button</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => router.push("/badge")}>Badge</DropdownMenuItem>
      </NavbarDropdownContent>
    </DropdownMenu>
    <Button variant="nav" asChild><a href="/blog">Blog</a></Button>
  </NavbarLinks>
  <NavbarRight>
    {/* icon buttons, theme toggle, etc. */}
    <NavbarHamburger />
  </NavbarRight>
  <NavbarMobileMenu>
    <a href="/">Home</a>
    <a href="/blog">Blog</a>
  </NavbarMobileMenu>
</Navbar>
        `} />
      </Section>

      <Separator />

      {/* NavigationMenu */}
      <Section title="NavigationMenu" id="navigation-menu" level={3}>
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuLink href="" className="">About</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
                <NavigationMenuLink href="#">New Arrivals</NavigationMenuLink>
                <NavigationMenuLink href="#">On Sale</NavigationMenuLink>
                <NavigationMenuLink href="#">Top Picks</NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Blog</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenu>
        <CodeBlock isDark={isDark} code={`
<NavigationMenu>
  <NavigationMenuItem>
    <NavigationMenuLink href="#">About</NavigationMenuLink>
  </NavigationMenuItem>
  <NavigationMenuItem>
    <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
    <NavigationMenuContent>
      <NavigationMenuLink href="#">New Arrivals</NavigationMenuLink>
    </NavigationMenuContent>
  </NavigationMenuItem>
</NavigationMenu>
        `} />
      </Section>

      <Separator />
    </>
  );
}
