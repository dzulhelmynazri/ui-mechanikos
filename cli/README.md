# UI Mechanikos CLI

A command-line interface for adding UI components to your project.

## Installation

This CLI is designed to be used with `pnpm dlx`:

```bash
pnpm dlx ui-mechanikos@latest add <component-name>
```

## Usage

### Initialize a project

```bash
pnpm dlx ui-mechanikos@latest init
```

This will:

- Create a `ui-mechanikos.json` configuration file
- Set up your components directory
- Create an example component

### Add a component

```bash
pnpm dlx ui-mechanikos@latest add accordion
```

Available components:

- accordion
- alert
- alert-dialog
- avatar
- badge
- button
- calendar
- card
- checkbox
- collapsible
- command
- context-menu
- dialog
- dropdown-menu
- form
- hover-card
- input
- label
- menubar
- navigation-menu
- popover
- progress
- radio-group
- scroll-area
- select
- separator
- sheet
- skeleton
- slider
- switch
- table
- tabs
- textarea
- toast
- toggle
- toggle-group
- tooltip

### Options

- `-y, --yes`: Skip confirmation prompts
- `-d, --dry-run`: Show what would be added without making changes

## Development

### Building

```bash
npm run build
```

### Development mode

```bash
npm run dev
```

### Publishing

```bash
npm publish
```

## Configuration

The CLI creates a `ui-mechanikos.json` file in your project root:

```json
{
  "componentsDir": "components/ui",
  "style": "default",
  "typescript": true,
  "tailwind": true
}
```

## Architecture

- `src/index.ts`: Main CLI entry point
- `src/commands/`: Command implementations
- `src/utils/`: Utility functions
- `dist/`: Compiled JavaScript output

## License

MIT
