# HTML & Terminal Cheat Sheet

## Shortcuts
* Toggle Code Comment (Windows/Linux): Ctrl + /
* Toggle Code Comment (Mac/iPad): Cmd + /


## Semantic Tags
* Important/Bold: <strong>
* Emphasis/Italic: <em>

## Ubuntu Terminal Commands
* Create File: touch filename
* Make Folder: mkdir foldername
* Host Server: python3 -m http.server 8000
* Move a file: mv filename foldername/

## Security for Links
* If linking to a website you DO NOT own, use `rel="noreferrer"` so they cannot track your users.
* Example: <a href="https://google.com" rel="noreferrer">Go to Google</a>

## URLs (Uniform Resource Locators)
* **What it is:** A URL (Uniform Resource Locator) is the address of a unique resource on the internet.
* **Absolute URL:** Has all necessary parts needed to locate the resource, like the protocol and domain. (Example: `https://www.google.com`)
* **Relative URL:** A shorter link used within a document where the browser fills in the missing parts automatically. (Example: `../Web/CSS/Reference`)
* **Anchors:** Uses a `#` to act as a "bookmark" to scroll to a specific part of the current document.

## 4. Asset Licensing (Stock Images/Icons)
* **The Golden Rule:** If you use a free tier (like Magnific or Flaticon), you MUST put a link on your site giving them credit. If you pay for Premium, you do not.
* **The Logo Rule:** NEVER use a stock image or icon as a company logo. You do not own the copyright.
* **The PDF Rule:** Always download the PDF license file immediately. If your paid subscription expires, you can still use the image, but you cannot download the proof anymore.

## 5. Image Formats (When to use what)
* **JPG / JPEG:** Best for real-life photographs. (Files are small, but they cannot have transparent backgrounds).
* **PNG:** Best for logos, icons, and screenshots. (Files are slightly larger, but they support transparent backgrounds).
* **GIF:** Best for small, simple animations.
* **SVG:** Best for UI icons and vector graphics. (Created with code, meaning they never get pixelated or blurry no matter how big you make them).

## 6. Navigating Folders (The Double Dot)
* **Going Forward:** `pages/about.html` (Tells the browser to step INSIDE a folder).
* **Going Backward:** `../index.html` (The `../` tells the browser to step UP and OUT of the current folder to find the file).

## 7. Git Commit Messages
* **Command form (Imperative):** Write it like you are giving an order. Use `Add logo` instead of `Added logo` or `Adding logo`.
* **Keep it short:** The main subject line must be under 50 characters.
* **Format:** Capitalize the first letter. Do not put a period at the end.
* **The "Why":** Your actual code shows *how* you built it. Your commit message should explain *why* you built it.  
