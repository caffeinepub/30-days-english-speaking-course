# The Learning Hub

## Current State
The app has a ConversationsPage with school, party, and wedding dialogue tabs. There is no dedicated "Phrases" or "Daily Sentences" module.

## Requested Changes (Diff)

### Add
- New `PhrasesPage.tsx` with 6 categories of daily-use sentences:
  1. Outside / Public Places
  2. Party
  3. School
  4. Friend Group
  5. Home / Family
  6. Office / Work
- Each category has 12–15 bilingual (English + Hindi) sentences
- New `phrases` value added to the `Section` type
- New module card on LearningHome for "Daily Phrases"
- New route in App.tsx for `phrases` section

### Modify
- `LearningHome.tsx` – add phrases module card and update stats
- `App.tsx` – add lazy import and route for PhrasesPage

### Remove
- Nothing removed

## Implementation Plan
1. Create `src/frontend/src/pages/PhrasesPage.tsx` with all content
2. Update `Section` type in `LearningHome.tsx` to include `"phrases"`
3. Add phrases module card in `modules` array in `LearningHome.tsx`
4. Update `App.tsx`: lazy import PhrasesPage, add `case "phrases"` in renderSection
