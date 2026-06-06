# Bello Almanca Arena — Landing Page & APK Dağıtım Deposu 🌐🚀

Bu depo, **Bello Almanca Arena** uygulamasının tanıtım web sitesini ve kullanıcıların doğrudan indirebileceği Beta APK sürümlerini barındırmak amacıyla oluşturulmuştur.

Web sitesi, cyberpunk renk şeması, yarı şeffaf cam efektleri (glassmorphism) ve Bello animasyonları ile premium bir arayüze sahiptir ve **GitHub Pages** üzerinde barındırılacak şekilde tasarlanmıştır.

---

## 🛠️ Yayına Alma Adımları (Deployment Guide)

Tanıtım web sitenizi internette ücretsiz olarak yayınlamak için aşağıdaki adımları sırasıyla uygulayabilirsiniz:

### 1. Yeni Bir GitHub Reposu Oluşturun
* GitHub hesabınıza gidin ve **`almancaarena-landing`** adında **Public (Herkese Açık)** yeni bir depo oluşturun.

### 2. Kodları PowerShell ile Pushlayın
PowerShell terminalinizi açın ve şu komutları sırasıyla çalıştırın:

```powershell
# 1. Landing dizinine geçin
cd "C:\Users\ayberk\Desktop\Almanca Arena\almancaarena-landing"

# 2. Tüm dosyaları Git'e ekleyin ve commit edin
git add .
git commit -m "feat: initialize premium landing page website with glassmorphism aesthetics and local assets"

# 3. Uzak GitHub deposunu bağlayın (GitHub kullanıcı adınıza göre güncelleyin)
git branch -M main
git remote add origin https://github.com/bercaius/almancaarena-landing.git

# 4. Kodları gönderin
git push -u origin main
```

### 3. GitHub Pages Özelliğini Aktifleştirin
* GitHub tarayıcınızdan oluşturduğunuz `almancaarena-landing` reposuna gidin.
* Sağ üst köşedeki **Settings (Ayarlar)** sekmesine tıklayın.
* Sol menüden **Pages** kısmına gelin.
* **Build and deployment** başlığı altındaki **Source** ayarını "Deploy from a branch" olarak bırakın.
* **Branch** kısmını `main` ve klasörü `/ (root)` seçip **Save** butonuna basın.
* 1-2 dakika içinde web siteniz `https://bercaius.github.io/almancaarena-landing/` adresinde yayına girecektir.

---

## 📦 APK Sürümü Yayınlama (Releases)

Web sitenizdeki indirme butonunun çalışması için derlediğiniz APK dosyasını GitHub Release olarak yüklemeniz gerekir:

1. Ana kod deponuzdan (`almancaarena`) veya Android Studio'dan imzaladığınız release APK dosyasını alın.
2. `almancaarena-landing` reposuna gidin ve sağ sütundaki **Releases > Create a new release** seçeneğine tıklayın.
3. Etiket (tag) olarak **`v1.0.0-beta`** yazın.
4. Alt kısımdaki sürükle-bırak alanına **`app-release.apk`** dosyasını yükleyin.
5. **Publish release** butonuna basarak yayınlayın.

Web sitenizdeki indirme butonu doğrudan bu APK dosyasını indirilecek şekilde `https://github.com/bercaius/almancaarena-landing/releases/download/v1.0.0-beta/app-release.apk` linkine göre ayarlanmıştır. Sürüm güncelledikçe yeni sürümü aynı link yapısına uygun olarak yüklemeniz yeterli olacaktır.
