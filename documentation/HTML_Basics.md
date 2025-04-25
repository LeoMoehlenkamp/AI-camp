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
✅ This is enough for the browser to load and show something!<br><br>

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

Save and open it in your browser (or via Live Server) to verify your structure renders correctly.<br><br>

---
# 📚 Mini Lesson 3: Links & Images

## 🧠 Concept

- **Links** (anchors) let users navigate between pages or external websites.  
- **Images** embed visual content; they need proper attributes for accessibility and responsiveness.

---

## 🔗 Links

- Use the `<a>` tag with the `href` attribute to define the link target.  
- Optional attributes:  
  - `target="_blank"` opens the link in a new tab/window.  
  - `title="…”` shows a tooltip on hover.  
  - For security, when using `target="_blank"`, add `rel="noopener noreferrer"`.

### ✏️ Examples

```html
<!-- Internal link to another page in your site -->
<a href="lesson1.html">Go to Lesson 1</a>

<!-- External link opening in a new tab -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer" title="Visit Example.com">
  Visit Example.com
</a>
```

---

## 🖼️ Images

- Use the `<img>` tag with the `src` attribute to point to the image file.  
- **Always** include an `alt="…”` attribute for accessibility.  
- Optional attributes:  
  - `width="..."` and `height="..."` to set size  
  - `title="…”` to show a tooltip

### ✏️ Examples

```html
<!-- Local image with alt text -->
<img src="images/logo.png" alt="Company logo">

<!-- External image with size and tooltip -->
<img
  src="https://via.placeholder.com/150"
  alt="Placeholder image"
  width="150"
  height="150"
  title="This is a placeholder graphic"
/>
```

---

## 🧹 Basic Rules

- Always **close** your `<a>` tags and never leave `<img>` tags without an `alt` attribute.  
- Use **quotation marks** around all attribute values.  
- For accessibility and SEO, write **meaningful link text** (avoid “click here”).  
- For external links, always add `rel="noopener noreferrer"` when using `target="_blank"`.

---

## 🎯 Task

1. Add this lesson to `/docs/html-basics.md` under a new "**Links & Images**" section.  
2. Create a simple HTML file (e.g., `lesson3.html`) that includes:  
   - One internal link and one external link (use `target="_blank"` appropriately).  
   - Two images (one local, one external) with proper `alt` and optional `title`, `width`, `height`.  

Save and open it in your browser (or via Live Server) to verify everything renders correctly. <br><br>
# 📚 Mini Lesson 4: Tables & Media Embeds

## 🧠 Concept

- **Tables** organize data into rows and columns, making structured information easy to read.  
- **Media Embeds** incorporate rich content—audio, video, or external resources—directly into your page.

---

## 📊 Tables

- Use `<table>` to start the table.  
- Inside, define a `<tr>` (table row) for each row.  
- Use `<th>` for header cells and `<td>` for regular data cells.  
- Optionally use `<caption>` to add a title above the table.

### ✏️ Example

```html
<table>
  <caption>Monthly Sales</caption>
  <tr>
    <th>Month</th>
    <th>Sales</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$5,000</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$6,200</td>
  </tr>
</table>
```

---

## 🎥 Media Embeds

### 🔉 Audio

- Use `<audio>` with `controls` so the user can play/pause.  
- `src` points to the audio file.

#### Example

```html
<audio controls>
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

### 📺 Video

- Use `<video>` with `controls` for play/pause/seek.  
- Can include multiple `<source>` formats for compatibility.

#### Example

```html
<video width="320" height="240" controls>
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

### 🌐 Iframe (External Content)

- Use `<iframe>` to embed another webpage or service (maps, docs, etc.).  
- Include `width`, `height`, and `src`.  
- For security, consider `sandbox` and `loading="lazy"`.

#### Example

```html
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="Embedded YouTube Video"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
```

---

## 🧹 Basic Rules

- Always **close** table tags (`</table>`, `</tr>`, etc.).  
- Use `<th>` only in the table header row.  
- Provide meaningful `<caption>` text for accessibility.  
- Include fallback text inside `<audio>`/`<video>` for unsupported browsers.  
- When embedding with `<iframe>`, set a descriptive `title` and consider `sandbox` for security.

---

## 🎯 Task

1. Add this lesson to `/docs/html-basics.md` under a new **“Tables & Media Embeds”** section.  
2. Create a new HTML file (e.g., `lesson4.html`) that includes:  
   - A table with at least 3 columns and 2 rows (plus a header and caption).  
   - An audio player using a sample audio file URL.  
   - A video player using a sample video URL.  
   - An iframe embedding a YouTube video or another external page.  
3. Open `lesson4.html` in your browser (or via Live Server) and verify that the table and all media render and controls work correctly.<br><br>

# 📚 Mini Lesson 5: Forms & Inputs


## 🧠 Concept

Forms allow users to submit data to your website.  
**Inputs** collect specific types of data (text, email, password, choices), and **buttons** send that data to a server or script.

---

## 📝 Form Elements

- `<form>`: Container for form controls.  
  - Attributes:  
    - `action="URL"` – where data is sent  
    - `method="get"` or `"post"` – how data is sent  

- `<label>`: Describes an input.  
  - Use `for="id"` to associate with `<input id="…">`, or wrap the `<input>` inside.  

- `<input>`: Single-line field.  
  - `type="text"`, `email`, `password`, `number`, `checkbox`, `radio`, `submit`, etc.  
  - Must include `name="…"`.  
  - Optional: `placeholder="…"`, `required`, `value="…"`.  

- `<textarea>`: Multi-line text input.  
  - Attributes: `name`, `rows`, `cols`, `placeholder`.  

- `<select>` / `<option>`: Dropdown menu.  
  - `<option value="…">Display</option>`.  

- `<button>`: Clickable button.  
  - `type="submit"`, `button`, `reset`.

---

### ✏️ Examples

**Simple GET form:**

```html
<form action="/search" method="get">
  <label for="query">Search:</label>
  <input type="text" id="query" name="q" placeholder="Enter keyword" />
  <button type="submit">Go</button>
</form>
```

**Registration form with multiple inputs:**

```html
<form action="/register" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label>Password:</label>
  <input type="password" name="password" />

  <fieldset>
    <legend>Gender:</legend>
    <label><input type="radio" name="gender" value="male" /> Male</label>
    <label><input type="radio" name="gender" value="female" /> Female</label>
  </fieldset>

  <label for="country">Country:</label>
  <select id="country" name="country">
    <option value="de">Germany</option>
    <option value="us">USA</option>
  </select>

  <button type="submit">Register</button>
</form>
```

---

## 🧹 Basic Rules

- Always include `name` attributes on inputs so data is sent.  
- Use `<label>` for accessibility—clicking the label focuses the input.  
- Choose the right `method`:  
  - `GET` for non-sensitive queries (appears in URL),  
  - `POST` for sensitive or large data.  
- Use `required` to enforce mandatory fields.  
- Group related controls with `<fieldset>` and `<legend>` for clarity.

---

## 🎯 Task

1. Add this lesson to `/docs/html-basics.md` under a new **“Forms & Inputs”** section.  
2. Create `lesson5.html` including:  
   - A text input with `<label>` and `required`.  
   - An email input.  
   - A password input.  
   - A set of radio buttons.  
   - A `<select>` dropdown.  
   - A submit `<button>`.  
3. Open `lesson5.html` in your browser (or via Live Server) and verify you can fill the form and (if using `method="get"`) see the query string in the URL.

---

> **Next Up:**  
> We have one final lesson on **Semantic Elements & Layout** to complete your HTML basics before moving on to CSS.<br><br>
# 📚 Mini Lesson 6: Semantic Elements & Layout


## 🧠 Concept

- **Semantic HTML** uses meaningful tags to describe the role of content (not just how it looks).  
- Improves **accessibility**, **SEO**, and **maintainability** of your pages.  
- Browsers and assistive technologies (screen readers) rely on semantics to understand your page.

---

## 🔖 Key Semantic Elements

| Element      | Purpose                                          |
|--------------|--------------------------------------------------|
| `<header>`   | Introductory content (logo, site title, nav)     |
| `<nav>`      | Site or page navigation links                    |
| `<main>`     | The primary content of the document (one per page) |
| `<section>`  | Thematic grouping of content, with optional heading |
| `<article>`  | Self-contained content (blog post, news article) |
| `<aside>`    | Sidebar or tangential content (related links)    |
| `<footer>`   | Footer content (copyright, contact, links)       |

### ✏️ Examples

```html
<header>
  <h1>My Site Title</h1>
  <nav>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
  </nav>
</header>

<main>
  <article>
    <h2>Article Title</h2>
    <p>Article content goes here.</p>
  </article>

  <aside>
    <h3>Related</h3>
    <ul>
      <li><a href="#">Related link 1</a></li>
      <li><a href="#">Related link 2</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>© 2025 Your Name</p>
</footer>
```

---

## 📄 Basic Page Layout Skeleton

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Semantic Layout Example</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <header>
    <!-- site title, logo, nav -->
  </header>

  <nav>
    <!-- main navigation links -->
  </nav>

  <main>
    <section>
      <!-- section content with heading -->
    </section>
    <section>
      <!-- another section -->
    </section>
  </main>

  <aside>
    <!-- sidebar or related content -->
  </aside>

  <footer>
    <!-- footer content -->
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

---

## 🧹 Basic Rules

- Only **one** `<main>` per page.  
- Place `<nav>` inside `<header>` or right after it.  
- Use `<section>` for distinct groups within `<main>`, each with its own heading.  
- Use `<article>` for self-contained pieces that could stand alone.  
- Use `<aside>` for content related but not central to the main flow.  
- Keep `<footer>` at the bottom with global info.

---

## 🎯 Task

1. Add this lesson to `/docs/html-basics.md` under a new **“Semantic Elements & Layout”** section.  
2. Create `lesson6.html` that uses at least:
   - `<header>` with a site title and navigation.
   - `<main>` containing two `<section>` blocks.
   - One `<aside>` sidebar.
   - A `<footer>` with copyright or contact info.
3. Open `lesson6.html` in your browser (or via Live Server) and verify the semantic structure appears and you can inspect tags in DevTools.




