# 📚 Mini Lesson 1: What is HTML and how does it work?

## 🧠 Concept

**HTML** stands for **HyperText Markup Language**.  
It’s not a programming language — it’s a **markup language**:  
> **You use HTML to describe the structure and meaning of content on a web page.**

A browser (like Chrome or Firefox) reads your HTML and knows:  
"This is a heading", "This is a paragraph", "This is a link", etc.

👉 **HTML = The "what" of the page, not the "how it looks" (that's CSS).**

---

## 📦 How HTML works

- You create **elements** using **tags**.
- Most elements have an **opening tag** `<tag>` and a **closing tag** `</tag>`.
- Elements can have **content inside** them.
- Elements can also have **attributes** (extra information).

---

### ✏️ Example 1: Basic Element

```html
<p>Hello, world!</p>
```
- `<p>` is the opening tag for a **paragraph**.
- `Hello, world!` is the content.
- `</p>` is the closing tag.

---

### ✏️ Example 2: Adding an Attribute

```html
<a href="https://www.example.com">Visit Example</a>
```
- `<a>` = an **anchor** (a link).
- `href="..."` = attribute that tells the browser where the link goes.
- `"Visit Example"` = the text the user sees and can click.

---

### ✏️ Example 3: Nesting Elements

```html
<div>
  <h1>Welcome!</h1>
  <p>This is my first web page.</p>
</div>
```
- `<div>` = a **division** (a block to group things).
- Inside the `<div>` you have a heading and a paragraph.

---

# 🧹 Basic Rules You Should Always Follow

- Tags must be **properly closed** (`<p>...</p>`, not just `<p>...`).
- Nesting must be **logical**:
  - ✅ Good:
    ```html
    <div><p>Text</p></div>
    ```
  - ❌ Bad:
    ```html
    <p><div>Text</div></p>
    ```
- Always **indent** nested elements for better readability.
- Keep your **code clean and consistent** (lowercase tags, clear structure).

---

# 📄 Quick Template of a Full Minimal HTML Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My First Page</title>
</head>
<body>

  <h1>Hello, I'm learning HTML!</h1>
  <p>This is my first paragraph.</p>

</body>
</html>
```
✅ This is enough for the browser to load and show something!








---

# 📚 Mini Lesson 2: Headings, Paragraphs, and Lists

## 🧠 Concept

- **Headings** define the hierarchy and structure of your content.  
- **Paragraphs** group sentences and text into readable blocks.  
- **Lists** organize related items as bullet points or a numbered sequence.

---

## 🔠 Headings

- Use `#` through `######` for heading levels 1–6.
- Don’t skip levels: start at `#`, then `##`, etc.

### ✏️ Examples

```html
<h1>Main Title (Level 1)</h1>
<h2>Section Title (Level 2)</h2>
<h3>Subsection (Level 3)</h3>
```

- `<h1>` is the most important (usually page title).  
- `<h2>`–`<h6>` nest underneath in decreasing importance.

---

## 📄 Paragraphs

- Wrap plain text in `<p>` tags.
- Browsers automatically add spacing before & after a paragraph.

### ✏️ Example

```html
<p>This is one paragraph of text. It can be several sentences long, but stays in one block.</p>
<p>This is another paragraph. It’s separate from the first, with its own spacing.</p>
```

---

## 📋 Lists

### 1. Unordered (Bulleted) Lists

- Use `<ul>` to start, then `<li>` for each item.

#### Example

```html
<ul>
  <li>First bullet item</li>
  <li>Second bullet item</li>
  <li>Third bullet item</li>
</ul>
```

### 2. Ordered (Numbered) Lists

- Use `<ol>` instead of `<ul>`.

#### Example

```html
<ol>
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
```

---

## 🧹 Basic Rules

- Always **close** your tags (`</h1>`, `</p>`, `</ul>`, etc.).  
- **Indent** nested `<li>` items under their `<ul>` or `<ol>`.  
- Don’t put `<li>` directly under `<ol>` or `<ul>` without the parent list tag.  
- Use headings **semantically**: exactly one `<h1>` per page, then subsections.

---

## 🎯 Task

1. Add this lesson to `/docs/html-basics.md` under a new “Headings, Paragraphs, and Lists” section.  
2. Create a simple HTML file (e.g., `lesson2.html`) that includes:  
   - One `<h1>` title.  
   - Two `<h2>` subtitles.  
   - Three paragraphs of placeholder text.  
   - One bulleted list and one numbered list.

Save and open it in your browser (or via Live Server) to verify your structure renders correctly.
