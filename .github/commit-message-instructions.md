# Commit Message Guidelines

Purpose
-------
These guidelines define the standard for commit messages in this repository. All commit messages MUST be written in English and follow the Conventional Commits format.

Scope
-----
Applies to all commits made to this repository, by contributors and CI automation.

Format (Conventional Commits)
--------------------------------
Use the following structure for commit messages:

```
<type>(<scope>): <subject>

<body>

<footer>
```

Rules
-----
- Language: English only.
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `build`, `ci`, `revert`.
- Subject: imperative mood, concise (<= 50 characters), no trailing period.
- Scope: optional, use when it adds clarity (e.g., `api`, `auth`, `ui`).
- Body: optional; when present, explain the motivation and contrast with previous behavior. Wrap lines at ~72 characters.
- Footer: use for references and BREAKING CHANGES. For breaking changes include a `BREAKING CHANGE:` header followed by details.
- Issue references: include full references like `Closes #123` in the footer when applicable.

Examples
--------
- `feat(auth): add OAuth2 refresh token support`
- `fix(api): handle null response from user service`
- `docs: update contributing guide with commit message rules`
- `perf: improve home page rendering speed`
- `chore: bump dependency @angular/core to 16.2.0`
- `feat(ui): new header component\n\nAdds a responsive header with navigation. Closes #45`
- `refactor(api): simplify user serializer\n\nBREAKING CHANGE: removed legacy fields from user payload.`

How agents should use this
--------------------------
- When asked to generate commit messages, produce a one-line subject plus optional body and footer following the rules above.
- Always produce messages in English.
- Prefer the `type(scope): subject` form; omit scope if unnecessary.
- For breaking changes explicitly include `BREAKING CHANGE:` in the footer with details.

Enforcement suggestions (optional)
---------------------------------
- Integrate `commitlint` with the Conventional Commits rule set in CI to enforce format.
- Add a pre-commit hook (e.g., Husky) to run a lint check before pushing.

If anything here should be stricter or adapted for specific branches, say which branches and which rule to change.
