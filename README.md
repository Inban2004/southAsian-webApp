# South Asian Fly

A South Asian grocery/food e-commerce web app, built from a Figma design.

## Stack

- **Frontend**: React + TypeScript + Vite (`frontend/`)
- **Backend**: FastAPI + Python, layered architecture (`backend/`)
- **Auth**: Supabase Auth
- **Database**: MongoDB
- **Design source**: Figma (`DESIGN.md` has extracted tokens/components)

## Running locally

**Backend**

```bash
cd backend
venv/bin/uvicorn main:app --reload --port 8000
```

**Frontend**

```bash
cd frontend
npm run dev
```

Both need their own `.env` file (see `.env.example` in each folder) — not committed, since they hold
real credentials.

## Project docs

- `DESIGN.md` — design tokens, components, and known Figma/implementation gaps
- `TODO.md` — current status and next steps
- `.claude/rules/` — frontend/backend architecture reference
