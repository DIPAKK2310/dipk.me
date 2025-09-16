This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


### Simple web app that renders minimalist CV with print-friendly layout.
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FBartoszJarocki%2Fcv)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-8+-F69220?logo=pnpm)](https://pnpm.io/)
[![Docker](https://img.shields.io/badge/Docker-ready-2496ED?logo=docker)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🛠️ Tech Stack

1. Clone this repository to your local machine:
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **GraphQL**: [Apollo Server](https://www.apollographql.com/) + [TypeGraphQL](https://typegraphql.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Deployment**: Optimized for [Vercel](https://vercel.com/)

   ```bash
   git clone https://github.com/DIPAKK2310/dipk.me.git
   ```


### Prerequisites

- Node.js 18+ 
- pnpm 8+

2. Move to the cloned directory
### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/DIPAKK2310/dipk.me.git
   
   ```



2.**Install dependencies**

   ```bash
    yarn install
    pnpm install
   ```



3. **Start the development server**

   ```bash
   
   pnpm dev
   ```

5. Open the [Config file](./src/data/resume-data.tsx) and make changes
4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## 📁 Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout with metadata
│   └── page.tsx      # Main resume page
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   └── icons/       # Icon components
├── data/            # Resume data configuration
│   └── resume-data.tsx
├── images/          # Static assets
│   └── logos/       # Company logos
└── apollo/          # GraphQL server setup
    ├── resolvers.ts
    └── type-defs.ts
```

All resume content is stored in a single configuration file:

```typescript
// src/data/resume-data.tsx
export const RESUME_DATA = {
  name: "Your Name",
  initials: "YN",
  location: "Your City, Country",
  about: "Brief description",
  summary: "Professional summary",
  // ... more fields
}
```

### Styling

The app uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Global styles in `src/app/globals.css`
- Print styles are defined separately for optimal printing

## 🐳 Docker Deployment

### Using Docker Compose

```bash
# Build the container
docker compose build

# Run the container
docker compose up -d

# Stop the container
docker compose down
```

## Stop the Container
### Using Docker directly

```bash
# Build the image
docker build -t cv-app .

# Run the container
docker run -p 3000:3000 cv-app
```
```
docker compose down 
```


### Print Settings

The app is optimized for printing. For best results:
- Use Chrome/Chromium for printing
- Enable "Background graphics" in print settings
- Set margins to "Default"


## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Vercel](https://vercel.com/) for hosting and deployment
- All contributors who have helped improve this project

---
<p align="center">
  Made with ❤️ by <a href="https://github.com/DIPAKK2310">Dipak Khare</a>
</p>