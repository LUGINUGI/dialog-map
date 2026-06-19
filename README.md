# The Dialog Map

Interactive, evidence-labeled network explorer for a 15-person research
prototype based on the alleged Dialog directory.

The interface distinguishes confirmed relationships, reported claims,
disputes, thin contact, and cases where no reliable evidence was found.
Association does not establish knowledge of or participation in wrongdoing.

## Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run build
```

The app uses Next.js, React, Framer Motion, and `@liquid-dom/react`, with a CSS
glass fallback for browsers that do not support Liquid DOM's experimental
WebGPU rendering requirements.
