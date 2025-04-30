# 📚 Mini Lesson 1: Selectors, Properties & Values


## 🧠 Concept

CSS controls the look and feel of HTML elements by targeting them with **selectors** and applying **declarations** (property–value pairs).

---

## 🕵️ Selectors

Selectors define **which** elements you style. Common types:

- **Type selector**: targets elements by tag name (e.g., `h1`, `p`).  
- **Class selector**: targets elements with a `class` attribute, prefix with `.` (e.g., `.highlight`).  
- **ID selector**: targets a unique element with an `id` attribute, prefix with `#` (e.g., `#main-title`).

### ✏️ Examples

```css
/* Type selector */
p {
  color: #333;
}

/* Class selector */
.highlight {
  background-color: yellow;
}

/* ID selector */
#main-title {
  font-size: 2rem;
}
```

---

## 🎨 Properties & Values

- **Properties** specify the aspect to change (e.g., `color`, `background-color`, `font-size`).  
- **Values** assign the new property state (e.g., `red`, `#f0f0f0`, `16px`).

### ✏️ Examples

```css
h1 {
  font-family: Arial, sans-serif;
  color: #1e293b;
  margin-bottom: 1rem;
}

.button {
  background-color: #007acc;
  color: white;
  padding: 0.5rem 1rem;
}
```

---

## 🧹 Basic Rules

- A **declaration block** goes inside `{}` after a selector.  
- Each declaration is `property: value;`.  
- Use **classes** for reusable styles; avoid overusing IDs for styling.  
- Keep your CSS organized with comments and logical grouping.

---

## 🎯 Task

1. Add this lesson to `/docs/css-basics.md` under a new **“Selectors, Properties & Values”** section.  
2. Create a file `lesson1.css` with:
   - A **type selector** (`h1`) setting `color` and `font-size`.  
   - A **class selector** (`.highlight`) setting `background-color`.  
   - An **ID selector** (`#main-title`) setting `font-family` and `margin`.  
3. Create `lesson1.html` that:
   - Links to `lesson1.css` in the `<head>`.  
   - Contains an `<h1 id="main-title">Lesson 1: CSS Basics</h1>`,  
     a `<p class="highlight">This text is highlighted.</p>`,  
     and a normal `<p>` of your choice.  
4. Open `lesson1.html` in your browser (or via Live Server) and verify that your CSS rules apply correctly.<br><br>

# 📚 Mini Lesson 2: Box Model & Spacing


## 🧠 Concept

Every HTML element is a **box**. The **CSS Box Model** defines how the element’s size and spacing work:

- **Content**: The actual text or image.
- **Padding**: Space **inside** the box, around the content.
- **Border**: The line that wraps around padding and content.
- **Margin**: Space **outside** the box, separating it from other elements.

Understanding and controlling these lets you create precise layouts.

---

## 📐 Box Model Properties

- `width` / `height` – size of the content box.  
- `padding` – space inside: `padding: 10px;` or `padding: 5px 10px;` (vertical horizontal).  
- `border` – edge around padding: `border: 2px solid #333;`.  
- `margin` – space outside: `margin: 20px;` or `margin: 10px 0 20px;` (top right/left bottom).

### ✏️ Examples

```css
.box {
  width: 200px;
  height: 100px;
  padding: 20px;               /* space inside the box */
  border: 2px solid #007acc;   /* visible border */
  margin: 10px auto;           /* vertical 10px, centered horizontally */
}
```

---

## 🎛️ Box-Sizing

By default, `width` / `height` apply only to **content**, and padding & border add extra size:

- **Default** (`content-box`):
  ```
  total element width = width + padding-left + padding-right + border-left + border-right
  ```

- **Alternative** (`border-box`):
  ```css
  * {
    box-sizing: border-box;
  }
  ```
  Now `width` includes padding & border, making layouts easier to manage.

---

## 🧹 Basic Rules

- Use **shorthand** when you can:  
  - `margin: top right bottom left;`  
  - `padding: vertical horizontal;`  
- Apply `box-sizing: border-box;` globally to simplify sizing.  
- Remember: **margin** may collapse between sibling/parent elements—you might need to adjust.

---

## 🎯 Task

1. Add this lesson to `/docs/css-basics.md` under a new **“Box Model & Spacing”** section.  
2. Create `lesson2.css` with:
   - A `.box` class demonstrating `width`, `height`, `padding`, `border`, and `margin`.
   - A global rule to set `box-sizing: border-box;` on all elements.
3. Create `lesson2.html` that:
   - Links to `lesson2.css` in the `<head>`.
   - Contains a `<div class="box">Box Model Demo</div>` inside the `<body>`.
4. Open `lesson2.html` in your browser (or via Live Server) and verify:
   - The box appears with padding, border, and centered margin.
   - Resizing the viewport shows consistent sizing due to `border-box`.<br><br>

# 📚 Mini Lesson 3: Typography & Colors


## 🧠 Concept

Good typography and thoughtful color choices make your content readable, accessible, and visually appealing.  
- **Typography** covers font families, sizes, weights, line-height and spacing.  
- **Color** covers text color, background color, and how to define colors in CSS.

---

## 🔤 Typography

### Font Family

- Use a comma-separated **font stack**: browser picks first available.  
- Always include a **generic fallback** (`serif`, `sans-serif`, `monospace`).

```css
body {
  font-family: "Inter", "Arial", sans-serif;
}
```

### Font Size

- Use relative units (`rem`, `em`, `%`) for better scalability.
- Example: `1rem` equals the root font size (usually 16px by default).

```css
h1 {
  font-size: 2rem;    /* roughly 32px if root is 16px */
}
p {
  font-size: 1rem;    /* 16px */
}
```

### Font Weight & Style

- `font-weight`: normal (400), bold (700), or numeric 100–900.
- `font-style`: normal, italic, oblique.

```css
strong {
  font-weight: 700;
}
em {
  font-style: italic;
}
```

### Line-Height

- Controls vertical spacing between lines.  
- Use unitless values (e.g. `1.5`) for automatic scaling.

```css
p {
  line-height: 1.6;
}
```

---

## 🎨 Colors

### Color Formats

1. **Named colors**  
   ```css
   color: blue;
   ```
2. **Hexadecimal**  
   ```css
   color: #1e293b;
   ```
3. **RGB / RGBA**  
   ```css
   color: rgb(30, 41, 59);
   background-color: rgba(30, 41, 59, 0.1);
   ```
4. **HSL / HSLA**  
   ```css
   color: hsl(210, 40%, 20%);
   background-color: hsla(210, 40%, 20%, 0.1);
   ```

### Text & Background

```css
h2 {
  color: #007acc;           /* text color */
}

.highlight {
  background-color: yellow; /* background behind element */
  color: black;             /* ensure legibility */
}
```

---

## 🧹 Basic Rules

- Ensure **sufficient contrast** between text and background for accessibility (WCAG).  
- Use **relative font sizes** (`rem`, `em`) instead of fixed `px`.  
- Keep a **limited set of fonts** and colors for consistency.  
- Use **CSS variables** for a maintainable color palette:

  ```css
  :root {
    --brand-blue: #007acc;
    --text-color: #333;
    --bg-light: #f9f9f9;
  }

  body {
    color: var(--text-color);
    background-color: var(--bg-light);
  }
  ```

---

## 🎯 Task

1. Add this lesson to `/docs/css-basics.md` under a new **“Typography & Colors”** section.  
2. Create `lesson3.css` with:
   - Body font stack and base font size.  
   - Styles for an `<h1>` (font-size, weight, color).  
   - A `.highlight` class (background-color, contrasting text color).  
   - A CSS variable palette in `:root`.  
3. Create `lesson3.html` that:
   - Links to `lesson3.css` in the `<head>`.  
   - Contains an `<h1>` and two `<p>` elements (one with `class="highlight"`).  
4. Open `lesson3.html` in your browser (or via Live Server) and verify your typography and colors render as expected.<br><br>


# 📚 Mini Lesson 4: Layout with Flexbox


## 🧠 Concept

Flexbox is a one-dimensional CSS layout model that makes it easy to align and distribute space among items in a container—even when their size is unknown or dynamic.

---

## 🔄 Flex Container & Items

- **display: flex;** turns a container into a flex context (row by default).  
- **flex-direction:** row | row-reverse | column | column-reverse  
- **justify-content:** align items along the main axis:  
  - flex-start | center | flex-end | space-between | space-around | space-evenly  
- **align-items:** align items along the cross axis:  
  - stretch | flex-start | center | flex-end | baseline  
- **gap:** define consistent spacing between flex items (e.g., `gap: 1rem;`).

---

### ✏️ Examples

```css
/* Flex container */
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

/* Flex items */
.container .item {
  flex: 1;               /* grow/shrink to fill space */
  padding: 1rem;
  background: #f0f0f0;
  text-align: center;
}
```

```html
<div class="container">
  <div class="item">Box A</div>
  <div class="item">Box B</div>
  <div class="item">Box C</div>
</div>
```

---

## 🧹 Basic Rules

- Only **direct children** of a flex container become flex items.  
- Use `flex: 1` (or `flex-grow`) to make items share available space.  
- `align-self` on an item can override the container’s `align-items`.  
- For vertical stacks, use `flex-direction: column`.  
- Use `gap` instead of manual margins for even spacing.

---

## 🎯 Task

1. Add this lesson to `/docs/css-basics.md` under a new **“Layout with Flexbox”** section.  
2. Create `lesson4.css` with:  
   - A `.container` class demonstrating `display: flex`, `justify-content`, `align-items`, and `gap`.  
   - A `.item` class demonstrating `flex: 1` and some padding/background.  
3. Create `lesson4.html` that:  
   - Links to `lesson4.css` in the `<head>`.  
   - Contains a `<div class="container">` with three `<div class="item">Box A</div>`, `<div class="item">Box B</div>`, and `<div class="item">Box C</div>`.  
4. Open `lesson4.html` in your browser (or via Live Server) and verify:  
   - The three boxes sit in a row, evenly spaced.  
   - They stretch or shrink as you resize the viewport.
