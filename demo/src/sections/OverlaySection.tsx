import {
  AlertDialog, AlertDialogContent, AlertDialogTrigger,
  Avatar,
  Button,
  ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger,
  Dialog, DialogClose, DialogContent, DialogTrigger,
  HoverCard, HoverCardContent, HoverCardTrigger,
  Popover, PopoverContent, PopoverTrigger,
  Separator,
} from "@smngs/ui";
import { Section } from "../Section";
import { CodeBlock } from "../CodeBlock";

export function OverlaySection({ isDark }: { isDark: boolean }) {
  return (
    <>
      <div className="section" id="overlay">
        <h2>Overlay</h2>
      </div>

      {/* Dialog / AlertDialog */}
      <Section title="Dialog / AlertDialog" id="dialog" level={3}>
        <div className="row">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="primary">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent title="Product Details" description="View detailed information about this item.">
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-muted)" }}>
                Name: Wireless Headphones Pro<br />
                Color: Midnight Black<br />
                Stock: 3 remaining
              </p>
              <DialogClose asChild>
                <Button variant="ghost" style={{ marginTop: "var(--space-2)" }}>Close</Button>
              </DialogClose>
            </DialogContent>
          </Dialog>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost">Confirm Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent
              title="Are you sure?"
              description="This action cannot be undone."
              actionLabel="Delete"
              cancelLabel="Cancel"
            />
          </AlertDialog>
        </div>
        <CodeBlock isDark={isDark} code={`
<Dialog>
  <DialogTrigger asChild><Button>Open</Button></DialogTrigger>
  <DialogContent title="Title" description="Description">
    <p>Dialog body content.</p>
    <DialogClose asChild><Button variant="ghost">Close</Button></DialogClose>
  </DialogContent>
</Dialog>

<AlertDialog>
  <AlertDialogTrigger asChild><Button variant="ghost">Delete</Button></AlertDialogTrigger>
  <AlertDialogContent
    title="Are you sure?"
    description="This action cannot be undone."
    actionLabel="Delete"
    cancelLabel="Cancel"
  />
</AlertDialog>
        `} />
      </Section>

      <Separator />

      {/* Popover / HoverCard */}
      <Section title="Popover / HoverCard" id="popover" level={3}>
        <div className="row">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost">Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div style={{ fontSize: "var(--text-sm)" }}>
                <div style={{ fontWeight: "var(--font-bold)", marginBottom: "var(--space-1)" }}>More Info</div>
                <p style={{ margin: 0, color: "var(--color-muted)" }}>A floating panel that opens on click.</p>
              </div>
            </PopoverContent>
          </Popover>

          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="ghost">HoverCard (hover me)</Button>
            </HoverCardTrigger>
            <HoverCardContent>
              <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
                <Avatar fallback="AL" size="sm" />
                <div style={{ fontSize: "var(--text-sm)" }}>
                  <div style={{ fontWeight: "var(--font-bold)" }}>@alice</div>
                  <div style={{ color: "var(--color-subtle)" }}>Alice Johnson</div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <CodeBlock isDark={isDark} code={`
<Popover>
  <PopoverTrigger asChild><Button variant="ghost">Open</Button></PopoverTrigger>
  <PopoverContent>Popover content.</PopoverContent>
</Popover>

<HoverCard>
  <HoverCardTrigger asChild><Button variant="ghost">Hover me</Button></HoverCardTrigger>
  <HoverCardContent>Card shown on hover.</HoverCardContent>
</HoverCard>
        `} />
      </Section>

      <Separator />

      {/* ContextMenu */}
      <Section title="ContextMenu" id="context-menu" level={3}>
        <ContextMenu>
          <ContextMenuTrigger>
            <div style={{
              padding: "var(--space-4)",
              border: "2px dashed var(--color-divider)",
              borderRadius: "var(--radius-md)",
              textAlign: "center",
              color: "var(--color-subtle)",
              fontSize: "var(--text-sm)",
              userSelect: "none",
              cursor: "context-menu",
            }}>
              Right-click (or long-press) this area
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuLabel>Actions</ContextMenuLabel>
            <ContextMenuItem>View</ContextMenuItem>
            <ContextMenuItem>Duplicate</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>Copy Link</ContextMenuItem>
                <ContextMenuItem>Email</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem>Move to Trash</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
        <CodeBlock isDark={isDark} code={`
<ContextMenu>
  <ContextMenuTrigger>
    <div>Right-click this area</div>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuLabel>Actions</ContextMenuLabel>
    <ContextMenuItem>View</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
      <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>Copy Link</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
    <ContextMenuItem>Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
        `} />
      </Section>

      <Separator />
    </>
  );
}
