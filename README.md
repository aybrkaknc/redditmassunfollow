Bu GitHub deposu, Reddit'teki aboneliklerinizi daha kolay ve hızlı bir şekilde yönetmek isteyen kullanıcılar için tasarlanmış basit bir JavaScript kullanıcı betiği içerir. Özellikle, Reddit'in /subreddits/ sayfasında bulunan abone olunan tüm alt dizinlerden (subreddit'lerden) toplu olarak çıkma işlevini otomatikleştirmektedir.

Temel Özellikler:

Tek Tıklamayla Toplu Abonelik İptali: Reddit'in subreddits sayfasında listelenen tüm aboneliklerden manuel olarak tek tek çıkmak yerine, bu betik sayesinde tek bir onayla tümünden çıkabilirsiniz.
    
Tampermonkey Uyumlu: Betik, Firefox için Tampermonkey ve Chrome için Greasemonkey/Tampermonkey gibi tarayıcı eklentileri aracılığıyla kolayca yüklenebilir ve çalıştırılabilir.
    
Eski Reddit Arayüzü Desteği: Betik, Reddit'in eski arayüzü (old.reddit.com) yapısına uygun olarak tasarlanmıştır ve abonelikten çıkma butonlarını bu arayüzde doğru şekilde bulup etkileşime geçebilir.
    
Güvenli Çalışma: Her bir abonelikten çıkma işlemi arasında küçük bir gecikme (timeout) bırakılarak, Reddit sunucularına aşırı yük bindirilmesi veya API kısıtlamalarına takılma riskini azaltır.
***
Nasıl Kullanılır?

1.Tarayıcınıza (Firefox için Tampermonkey önerilir) Tampermonkey eklentisini kurun.
2.Bu depodaki JavaScript dosyasını (veya doğrudan yukarıda verilen kodu) Tampermonkey'de yeni bir betik olarak kaydedin.
3.https://www.reddit.com/subreddits/ adresine gidin.
4.Betik otomatik olarak çalışacak ve size abonelikten çıkma işlemini onaylamanız için bir uyarı gösterecektir. Onayınızın ardından işlem başlayacaktır.
***
Uyarı:

Bu betik, onayınızla birlikte geri alınamaz bir şekilde tüm aboneliklerinizden çıkacaktır. Lütfen kullanmadan önce işlemi gerçekleştirmek istediğinizden tamamen emin olun. Depoda bulunan kodu inceleyerek veya bir sorunla karşılaştığınızda bir 'issue' açarak katkıda bulunabilirsiniz.
