# Lining Yan — Personal Homepage

Multi-page academic site. Top bar: links left · **name centered** · links right.

| Page | File |
|------|------|
| About | `index.html` |
| Background | `background.html` |
| Research | `research.html` |
| Personal | `personal.html` |
| CV | `assets/Lining_Yan-CV.pdf` |

## Preview

```bash
cd ~/Desktop/lining-yan
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080).

## Photo

Place `assets/portrait.jpg`, then replace the photo placeholder with:

```html
<img src="assets/portrait.jpg" alt="Lining Yan" />
```
