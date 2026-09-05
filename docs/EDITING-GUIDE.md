# Editing thefurdoodle 🐾

Everything on the site can be changed from **Online Store → Themes → Customize**,
without touching a single line of code. This is the map.

---

## How the editor is laid out

On the left you'll see the sections that make up the page you're looking at.
Click one to open its settings. Drag it to move it. Click the eye to hide it.
Click **Add section** to add a new one.

At the bottom left, **Theme settings** (the little gear) holds the global choices —
colours, fonts, borders, spacing, the logo. Those apply to the whole shop at once.

---

## Theme settings — the global stuff

### 🎨 Brand colours

The two hero colours sit at the top. Change **Bold pink** or **Bold green** and the entire
shop follows: the logo letters, the buttons, the stars, the stickers, the link hovers.

Below them:

- **Soft pink** — the gentle background used on quieter sections
- **Deep green** — your text colour *and* the colour of every outline and offset shadow
- **Page background / Alternate background** — the cream tones behind everything
- **Button background / text**, and the hover versions — buttons flip to these on hover
- **Sale price** and **Review stars**

### ✏️ Typography

- **Google Fonts link** — paste a different link here to change the font entirely
- **Heading font family / Body font family** — type the family name (e.g. `Dosis`)
- **Heading size** — scales every heading up or down at once, as a percentage
- **Heading weight** — Medium through Extra bold
- **Heading letter spacing** and **capitalisation**
- **Body text size**, **Line height**, **Body weight**
- **Button capitalisation** and **letter spacing**

### 🖍 Borders & lines

This is the one that changes the whole personality of the site.

- **Outline thickness** — the hand-inked border around every card, image and button.
  Set it to 0 for a soft, borderless look; push it to 6–8px for a bold sticker-book look.
- **Corner roundness** — and a separate one for small items
- **Wobbly 'blob' corners** — organic, hand-cut-sticker corners on images. Turn off for
  neat rounded rectangles.
- **Offset shadow** — the solid colour block sitting behind each card. Turn it off, or
  change its distance and colour.
- **Button roundness / outline / padding** — button shape, and how tall and wide they are

### 📐 Layout & spacing

- **Maximum page width** — how wide the content gets on big screens
- **Side padding** — separately for desktop and mobile
- **Gap between cards**
- **Mobile spacing scale** — shrinks every section's top and bottom padding on phones,
  all at once. Lower it if the site feels too airy on a small screen.

### 🐾 Logo & brand

Covered in the README. Wordmark or uploaded image, size per device, paw position,
which colour starts the alternation, hover wiggle, and the favicon.

### 🌸 Doodles & background

- **Show the leafy pink & green pattern** — the faint repeating pattern behind the page
- **Pattern image** — upload your own repeating tile to replace the built-in one
- **Pattern strength** and **tile size**
- **Fade sections in as you scroll**
- **Lift cards on hover**
- **Leave paw prints when the mouse moves** — playful, off by default

### 🛍 Product cards

Image shape, text alignment, whether to show price and vendor, whether a second image
appears on hover, and whether a quick *View* button slides up.

### 💌 Social & contact

Your Instagram, TikTok, Facebook, Pinterest and Etsy links, plus a contact email.
Icons only appear for the links you fill in.

---

## Every section, and what it does

Each of these has its **own** background colour, top padding and bottom padding, so you can
alternate colours down the page and control the rhythm.

| Section | What it's for |
|---|---|
| **Announcement bar** | The thin strip above the header |
| **Header** | Logo, menu, search and basket. Choose logo left or centred, sticky or not |
| **Hero** | The big opening. Heading, text, two buttons, an image, a round sticker ("From £35") and up to four little stats |
| **Scrolling strip** | The moving band of words with paws between them. Add or remove words as blocks |
| **How it works** | Numbered steps with emoji. Add as many as you like |
| **Featured products** | Pulls products from a collection you choose |
| **Art gallery** | Your portfolio grid. Each image is a block with a caption and optional link |
| **About Lala** | Your story. Photo with a tape label, then paragraphs, small headings, a quote and little fact cards — each one its own block |
| **Reviews** | See below |
| **Blog posts** | Latest posts from the journal |
| **FAQ** | Drop-down questions. Each is a block |
| **Newsletter** | Email sign-up |
| **Contact form** | Form with name, email, Instagram, pet name and message |
| **Rich text** | Free-form heading and text with a button |
| **Image with text** | An image beside a block of text |
| **Footer** | Logo blurb, menus, text and a newsletter, as blocks |

---

## Reviews, in detail

The Reviews section is on your homepage and under every product.

**To add a review:**

1. Open the **Reviews** section
2. **Add block → Review**
3. Fill in:
   - **Stars** — 1 to 5
   - **Review title** — a short headline
   - **Review** — the body text
   - **Customer name** and **Pet's name**
   - **Date** — free text, so "March 2026" is fine
   - **Show 'Verified' tick** — the little green tick
   - **Artwork you made for them** — upload the portrait you drew for that customer
   - **Show on these products** — see below

**Keeping a review on one product:**

Type the product's handle into *Show on these products*. The handle is the last part of the
product's web address — for the portrait product it's `custom-digital-pet-portrait`.

- Leave it **empty** → the review shows on every product
- Type **one handle** → only that product's page
- Type **several, separated by commas** → those products

**Section options:**

- **Only show reviews for the product being viewed** — leave on for product pages.
  Turn it off on the homepage so every review shows.
- **Columns**, **image shape**, and whether to show the artwork images at all
- **Show the average score at the top** — works it out automatically from the stars

You can add up to 50 reviews per section, which is Shopify's limit for blocks. If you ever
need more, add a second Reviews section underneath.

---

## The product page

Open a product in the editor and you'll see the page built from blocks you can reorder:

- **Title** — with an optional line of text next to the stars
- **Price** — and the note underneath ("One pet £35 — add £7 for each extra pet…")
- **Options (pets & background)** — the pill buttons. The price updates as you click
- **Description** — the product description from Shopify admin
- **Price table** — the little £35 / £42 / £49 / +£7 table
- **Personalisation fields** — the three questions:
  - **Pet name(s)** — on, required
  - **Instagram username** — on, optional
  - **About your pet** — on, with a character limit you can set
  Each one can be renamed, given a different placeholder and hint, switched on or off,
  and made required or optional.
- **Buy buttons** — add to basket, optional quantity picker, express checkout
- **Tick list** — one promise per line
- **Drop-down panels** — the accordions ("What you'll receive", "Sending me your photos",
  "Timings & changes"). Add as many as you like.

Everything a customer types into the personalisation fields arrives with their order.

---

## Changing prices

Prices live in Shopify admin, not the theme: **Products → Custom Digital Pet Portrait →
Variants**. Each row is one combination of pet count and background.

If you change them, remember to update the two places in the theme that mention prices in
words — the **note under the price** and the **Price table** block on the product page,
plus the hero sticker on the homepage.

To allow more than six pets, add a new option value in Shopify admin and the pill buttons
will appear on the product page automatically.

---

## Adding your artwork

The site currently uses placeholder shapes where images go. To fill them in:

- **Hero image** — Homepage → Hero → Image
- **Gallery** — Homepage → Art gallery → each Artwork block
- **About photo** — Homepage and About page → About Lala → Photo
- **Product photos** — Shopify admin → Products → Custom Digital Pet Portrait
- **Review artwork** — each Review block
- **Blog post images** — Shopify admin → Content → Blog posts → each post → Featured image

Square images work best in the gallery and reviews. Anything around 1200–2000px wide is plenty.

---

## Two small things to do

1. **Add your pet's name to your story.** The About page tells your story without naming
   her — if you'd like her name in there, edit the paragraphs on the About page and drop it in.
2. **Set the product live.** It's a draft right now. Shopify admin → Products →
   Custom Digital Pet Portrait → change status to **Active**.
