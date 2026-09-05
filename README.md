# thefurdoodle 🐾

The Shopify theme for **thefurdoodle** — Lala's shop for bold, hand-drawn digital pet portraits.

Bold pink · bold green · Dosis · a lot of love.

---

## What's in here

```
assets/          base.css, theme.js, the leafy background pattern
config/          settings_schema.json (everything you can edit), settings_data.json (current values)
layout/          theme.liquid (the page shell), password.liquid
locales/         en.default.json
sections/        every block of the site you can add, move or delete in the editor
snippets/        small reusable pieces — the logo, icons, product cards, stars
templates/       which sections appear on each page
content/blog/    the five journal posts, as HTML (already published to the store too)
docs/            EDITING-GUIDE.md — how to change things without touching code
```

---

## Installing the theme in Shopify

The tidiest way is to connect this repository directly to your store. Shopify then keeps
the theme and the repo in sync — every push updates the theme.

1. In Shopify admin go to **Online Store → Themes**
2. Click **Add theme → Connect from GitHub**
3. Authorise Shopify to access your GitHub account
4. Pick the repository **`lalas-doodle`** and the branch
   **`claude/thefurdoodle-shopify-store-oisjqo`**
5. Shopify adds it to your theme list as an unpublished theme

Then click **Customize** to look around, and **Publish** when you're happy with it.

> Publishing replaces whatever theme is currently live. Your current theme stays in the
> theme list, so you can always switch back.

---

## The colours

Both hero colours live in **Theme settings → 🎨 Brand colours**. Change them there and the
whole shop follows — logo, buttons, outlines, stars, links, everything.

| | Colour | Where it's used |
|---|---|---|
| Bold pink | `#ee8cc4` | logo letters, accents, stickers, stars, button hovers |
| Bold green | `#2e7a45` | logo letters, buttons, prices, headings |
| Soft pink | `#fbe0ef` | gentle section backgrounds |
| Deep green | `#17402a` | text, and every outline and offset shadow |
| Cream | `#fffaf6` | the page background |

## The font

Dosis, loaded from Google Fonts. To swap it, paste a different Google Fonts link into
**Theme settings → ✏️ Typography → Google Fonts link** and type the family name underneath.
Sizes, weights, letter spacing and capitalisation are all adjustable there too.

## The logo

By default the logo is the built-in wordmark: the word **thefurdoodle** with every letter
alternating between your pink and your green, next to a paw print. It's not an image —
it's drawn from your theme colours, so it changes when they do.

In **Theme settings → 🐾 Logo & brand** you can change the text, the size (desktop and
mobile separately), the letter spacing, which colour starts the alternation, whether the
paw shows and where it sits, and whether the letters wiggle when you hover.

If you'd rather use a logo you've drawn yourself, switch **Logo style** to
*My own uploaded image* and upload it.

---

## The product

**Custom Digital Pet Portrait** is already in your store as a **draft**.

- **1 pet — £35**, and **+£7 for each extra pet** (2 pets £42, 3 £49, 4 £56, 5 £63, 6 £70)
- A second option for **With background / No background**, same price either way
- Marked as a digital product, so checkout never asks for a shipping address
- Inventory isn't tracked, so it can never sell out

The product page also collects, on every order:

- **Pet name(s)** (required)
- **Instagram username**
- **About your pet** — a longer description box

These arrive with the order in Shopify, so you'll see them on the order page and in your
notification email.

**To start selling it:** open the product in Shopify admin and change its status from
*Draft* to *Active*. Add your artwork photos while you're there.

---

## Reviews

Reviews are yours to write, in the theme editor — no app needed, no monthly fee.

Open the **Reviews** section on any page, click **Add block → Review**, and fill in the
stars, the title, the review, the customer's name, their pet's name, the date, and
**the artwork you made for them**.

To keep a review on one specific product page, type that product's handle into
**Show on these products** (the portrait product's handle is `custom-digital-pet-portrait`).
Leave it empty and the review shows everywhere.

Full details are in [docs/EDITING-GUIDE.md](docs/EDITING-GUIDE.md).

---

## Screen sizes

Built and laid out for three widths:

- **Mobile** (up to 749px) — single column, slide-out menu, reduced section padding
- **Tablet** (750–989px) — two-column grids
- **Laptop / desktop** (990px and up) — full layouts, sticky product details, hover effects

There's a **Mobile spacing scale** setting under 📐 Layout & spacing that shrinks every
section's padding on phones in one go.

---

## The journal

Five long posts are already written and published to the store:

1. How to photograph your pet for a portrait that actually looks like them
2. How to print your pet portrait (and where to hang it)
3. Memorial pet portraits: a gentle guide for when you're ready
4. Why every doodle I draw is pink and green
5. The tiny details that make a pet portrait look like them

The source HTML is in `content/blog/` if you ever want to edit one outside Shopify.
Each post could do with a featured image — add one in **Content → Blog posts**.
