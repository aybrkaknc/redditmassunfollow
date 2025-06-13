// ==UserScript==
// @name         Reddit Toplu Abonelikten Çıkma (Güncellenmiş)
// @namespace    http://tampermonkey.net/
// @version      0.2 // Versiyon numarasını güncelledim
// @description  Reddit'teki tüm subreddit aboneliklerinden toplu olarak çıkar. (Eski Reddit arayüzü için güncellendi)
// @author       ChatGPT (Yardımcı: Gemini)
// @match        https://www.reddit.com/subreddits/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Kullanıcıya uyarı ver ve işlemi onaylamasını iste
    if (!confirm("Tüm subreddit aboneliklerinden çıkmak istediğine emin misin? Bu işlem geri alınamaz!")) {
        return; // Kullanıcı iptal ederse betiği durdur
    }

    let unsubscribedCount = 0;
    // Yeni seçiciyi kullan: .option.remove sınıfına sahip linkleri bul
    const unsubscribeButtons = document.querySelectorAll('a.option.remove');
    const totalButtons = unsubscribeButtons.length;

    if (totalButtons === 0) {
        alert("Bu sayfada abonelikten çıkma butonu bulunamadı. Zaten abone değilsin veya sayfa doğru değil. Reddit'in arayüzü değişmiş olabilir mi?");
        return;
    }

    alert(`Toplam ${totalButtons} abonelikten çıkma işlemi başlatılıyor. Lütfen pencereyi kapatmayın ve işlemi tamamlamasını bekleyin.`);

    // Butonlara tıklamak için bir gecikme fonksiyonu
    function clickButtonWithDelay(index) {
        if (index < totalButtons) {
            const button = unsubscribeButtons[index];
            if (button) {
                // Butonun görünür ve tıklanabilir olduğundan emin olun
                if (button.offsetParent !== null) { // Butonun DOM'da görünür olup olmadığını kontrol eder
                    button.click();
                    unsubscribedCount++;
                    console.log(`Abone olmaktan çıkıldı: ${unsubscribedCount}/${totalButtons}`);
                } else {
                    console.log(`Buton gizli veya tıklanamazdı, atlandı: ${button.innerText}`);
                }
            }

            // Bir sonraki butona tıklamadan önce kısa bir gecikme
            // Reddit'in eski arayüzünde AJAX isteği daha yavaş olabilir, bu yüzden gecikmeyi biraz artırdım
            setTimeout(() => {
                clickButtonWithDelay(index + 1);
            }, 300); // 300 milisaniye gecikme
        } else {
            alert(`Tüm aboneliklerden çıkma işlemi tamamlandı! Toplam ${unsubscribedCount} subreddit'ten çıkıldı.`);
            // Sayfayı yenilemeden önce kısa bir gecikme ekledim, değişikliklerin işlenmesi için
            setTimeout(() => {
                window.location.reload(); // Sayfayı yenileyerek değişiklikleri göster
            }, 1000); // 1 saniye sonra yenile
        }
    }

    // İşlemi başlat
    clickButtonWithDelay(0);
})();
