# عرب رين | كتاب القوانين الرسمي

<div align="center">

![Arab Reen RP](https://img.shields.io/badge/Arab_Reen-RP-d4a44b?style=for-the-badge&labelColor=0a0a12)
![FiveM](https://img.shields.io/badge/FiveM-Server-c0392b?style=for-the-badge&labelColor=0a0a12)
![Status](https://img.shields.io/badge/Status-Live-27ae60?style=for-the-badge&labelColor=0a0a12)

**الموقع الرسمي لقوانين سيرفر عرب رين للرول بلاي**

[عرض الموقع](https://YOUR_USERNAME.github.io/REPO_NAME) · [الدسكورد](#) · [الإبلاغ عن مشكلة](../../issues)

</div>

---

## ✨ المميزات

- 🎨 **تصميم احترافي داكن** مع أكسنت ذهبي فاخر
- 📱 **متجاوب بالكامل** — يعمل على كل الأجهزة (موبايل / تابلت / ديسكتوب)
- 🌐 **دعم كامل للعربية (RTL)** بخطوط عربية فخمة
- ⚡ **سريع وخفيف** — HTML/CSS/JS فقط، بدون أي إطار عمل
- ♿ **سهل الوصول** — Accessible navigation
- 🖨 **جاهز للطباعة** — Print stylesheet مدمج
- 🎭 **أنيميشن سلس** — تفاعلات وتأثيرات احترافية

## 📁 محتوى الموقع

1. **قوانين الدسكورد** — قواعد السلوك في سيرفر الدسكورد
2. **القوانين العامة** — أساسيات الرول بلاي داخل السيرفر
3. **قوانين السيناريوهات** — الإعلانات والقواعد العامة
4. **التفاوض والرهائن** — مع جدول الأسعار الكامل
5. **السرقات** — قوانين كل موقع (البنك المركزي، المجوهرات، الأسلحة، الخ)
6. **مداهمات العصابات** — التحالفات والاشتباكات
7. **الهروب الآمن** — المدد والشروط
8. **قوانين المدرسة** — قواعد الفايتات

## 🚀 النشر على GitHub Pages

### الخطوات:

1. ارفع الملفات لمستودع GitHub جديد أو موجود
2. اذهب إلى **Settings** → **Pages**
3. تحت **Source**، اختر **Deploy from a branch**
4. اختر **main** branch و **/ (root)**
5. اضغط **Save**
6. انتظر دقيقة، وموقعك راح يكون متاح على:
   ```
   https://USERNAME.github.io/REPO_NAME/
   ```

## 💻 تشغيل محلياً

ما يحتاج build أو dependencies. فقط:

```bash
# افتح index.html مباشرة في المتصفح
# أو شغّل سيرفر محلي:
python3 -m http.server 8000

# ثم افتح: http://localhost:8000
```

## 📦 هيكل المشروع

```
.
├── index.html      # الصفحة الرئيسية مع كل المحتوى
├── styles.css      # كل التنسيقات والتصميم
├── script.js       # التفاعلات (القائمة، scroll، عدادات)
├── .nojekyll       # ضروري لـ GitHub Pages
└── README.md       # هذا الملف
```

## 🎨 التخصيص

كل الألوان معرفة كـ CSS Variables في أعلى ملف `styles.css`:

```css
:root {
  --bg:        #0a0a12;   /* الخلفية الأساسية */
  --gold:      #d4a44b;   /* الذهبي - اللون الرئيسي */
  --crimson:   #c0392b;   /* الأحمر - للتحذيرات */
  --emerald:   #27ae60;   /* الأخضر - للنجاحات */
  /* ... */
}
```

غيّرها وانطبق التغيير على الموقع كله.

## 🔧 تحديث القوانين

كل القوانين موجودة مباشرة في `index.html` بشكل HTML واضح ومنظم. عشان تضيف قانون جديد:

```html
<article class="rule">
  <div class="rule-num">XX</div>
  <p>نص القانون هنا...</p>
</article>
```

للقوانين الخطيرة استخدم class `danger`:

```html
<article class="rule danger">
  <div class="rule-num">XX</div>
  <p>نص القانون <strong>المهم</strong>...</p>
</article>
```

## 📜 الترخيص

كل الحقوق محفوظة لإدارة سيرفر عرب رين © 2026

---

<div align="center">

**صُنع بـ ❤ لمجتمع عرب رين**

</div>
