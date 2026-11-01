function initEventSearch() {
  const searchInput = document.getElementById("eventSearch");
  const clearButton = document.getElementById("clearSearch");
  const eventGrid = document.getElementById("eventGrid");
  const resultCount = document.getElementById("resultCount");
  const noResults = document.getElementById("noResults");

  // Gerekli HTML elemanları yoksa sorunu konsola bildir.
  if (!searchInput || !clearButton || !eventGrid || !resultCount || !noResults) {
    console.error("Etkinlik araması için gerekli HTML elemanları bulunamadı.");
    return;
  }

  // eventGrid'in doğrudan çocuklarını etkinlik kartları olarak kabul et.
  const cards = Array.from(eventGrid.children);

  function filterEvents() {
    // Başındaki ve sonundaki boşlukları kaldır; Türkçe harf kurallarına göre küçült.
    const query = searchInput.value.trim().toLocaleLowerCase("tr-TR");
    let visibleCount = 0;

    cards.forEach((card) => {
      // Kart başlığını bul ve arama metniyle aynı biçimde karşılaştır.
      const heading = card.querySelector("h1, h2, h3, h4, h5, h6");
      const title = heading
        ? heading.textContent.trim().toLocaleLowerCase("tr-TR")
        : "";

      const matches = title.includes(query);
      card.hidden = !matches;

      if (matches) {
        visibleCount++;
      }
    });

    // Görünen etkinlik sayısını ve sonuç bulunamadı mesajını güncelle.
    resultCount.textContent = `${visibleCount} etkinlik bulundu.`;
    noResults.hidden = visibleCount !== 0;
  }

  // Kullanıcı yazdıkça etkinlikleri filtrele.
  searchInput.addEventListener("input", filterEvents);

  // Temizle butonu arama alanını sıfırlar ve tüm kartları geri getirir.
  clearButton.addEventListener("click", (event) => {
    event.preventDefault();
    searchInput.value = "";
    filterEvents();
  });

  // Sayfa ilk açıldığında toplam etkinlik sayısını göster.
  filterEvents();
}

// Kod, DOM yüklenmeden veya yüklendikten sonra çalıştırılsa da başlatılır.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEventSearch, { once: true });
} else {
  initEventSearch();
}