# JSX in TypeScript (TSX)

In a `.tsx` file, a function is called **JSX** (JavaScript XML), and it's used to return HTML elements.

## Rules of JSX

1. **Parent Tag**: All HTML elements must be inside a single parent tag.
2. **Closing Tags**: Every HTML element should have a closing tag. Do not leave them open.
3. **Fragments**: You can use `<>` and `</>` to wrap multiple HTML elements without using an extra parent tag.

## Example

If you want to create an "About" page:
- Create a folder named `about`.
- Inside it, add a file called `page.tsx`.

---

## Navigating Between Pages (Routing)

To navigate between pages, you use **routing**.

- Use the `<Link>` tag (written in uppercase) to link pages, and make sure to import it from the Next.js library.
- **Components** are reusable elements that help you build your application efficiently.

---

## What is a Component?

A component is like a reusable piece of code. For example:
- You can create a separate header component in a file.
- Then, import and use that header component in different sections of your project.

The `page.tsx` file is the **root** of your project and serves as your homepage.

---

## Layout and Page Relationship

- The `layout.tsx` file is used to **wrap** and **render** all the pages in your project.
- Next.js automatically wraps `page.tsx` with `layout.tsx`.
- Inside `layout.tsx`, the content of `page.tsx` is referred to as **children**.
- To render `page.tsx` inside `layout.tsx`, use the `{children}` parameter.
- When rendering, Next.js first looks for the `layout.tsx` file.
