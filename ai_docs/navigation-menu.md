# Navigation Menu Component

## Overview
A collection of links for navigating websites, built using Radix UI and Tailwind CSS.

## Installation

### CLI Command
```bash
pnpm dlx shadcn@latest add navigation-menu
```

## Usage

### Import Components
```typescript
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
```

### Basic Example
```typescript
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

## Link Usage
You can use the `asChild` prop to make another component look like a navigation menu trigger:

```typescript
<NavigationMenuItem>
  <NavigationMenuLink asChild>
    <Link href="/docs">Documentation</Link>
  </NavigationMenuLink>
</NavigationMenuItem>
```

## Full Code Example
The documentation provides a comprehensive example demonstrating various navigation menu configurations, including:
- Home section
- Components section
- Simple links
- Links with icons

## Additional Resources
- [Radix UI Docs](https://www.radix-ui.com/docs/primitives/components/navigation-menu)
- [API Reference](https://www.radix-ui.com/docs/primitives/components/navigation-menu#api-reference)