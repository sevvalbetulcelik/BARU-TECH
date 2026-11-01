
# Yapay Zekâ Kullanım Notları

## 1. Kullanılan Yapay Zekâ
Proje geliştirme sürecinde GitHub Copilot kullanılmıştır.

## 2. Kullanılan İstemler

### İstem 1
Etkinlikler sayfası için canlı arama sisteminin nasıl çalışacağını açıkla, henüz kod yazma.

**Amaç:** Arama sisteminin mantığını öğrenmek.

### İstem 2
Etkinlik başlıklarına göre canlı arama yapan, büyük-küçük harf duyarsız çalışan, boşlukları temizleyen, sonuç sayısını gösteren ve temizle butonu içeren JavaScript kodu yaz.

**Amaç:** Etkinlik arama özelliğini geliştirmek.

### İstem 3
Oluşturduğun JavaScript kodunu kontrol et. HTML elemanlarıyla uyumunu ve olası hataları açıkla.

**Amaç:** Kodun doğruluğunu ve HTML ile bağlantısını değerlendirmek.

## 3. Yapay Zekâ Önerisinin Değerlendirilmesi
Copilot'un önerdiği canlı arama kodu projeye uyarlanmıştır. Kodda Türkçe karakterler için toLocaleLowerCase("tr-TR"), boşlukları temizlemek için trim() ve başlık eşleşmesi için includes() kullanılmıştır.

## 4. Kendi Açıklamalarım

**addEventListener:** Kullanıcının arama kutusuna yazı yazması veya temizle butonuna basması gibi olayları dinler. Olay gerçekleştiğinde belirlenen fonksiyonu çalıştırır.

**filterEvents fonksiyonundaki eşleşme koşulu:** includes() metodu, aranan kelimenin etkinlik başlığında bulunup bulunmadığını kontrol eder. Eşleşme varsa kart gösterilir, yoksa gizlenir.
