interface HomeData {
    sentence1: string;
    sentence2: string;
    sentence3: string;
  }
  interface AboutData {
    sentence1: string;
    sentence2: string;
  }
  
  interface Data {
    home: HomeData;
    about: AboutData;
    services: string[];
    contact: string;
  }
  
export const turkishhData:Data={
    home:{sentence1:"Luminalgoo hayatımızı kolaylaştırmak adına kurulmuş bir şirkettir.",sentence2:"İsmi, lumin Türkçe anlamıyla ışık ve algoritmadan gelmektedir",sentence3:"Hayatımızı kolaylaştıran adımlar atıp böylece günlük yaşantımızı çeşitli algoritmalarla aydınlatmayı hedeflemekteyiz."},
    about:{sentence1:"Projelerimizden ilki 'İki Teker'dir.",sentence2:" Projemizin amacı, uygulamamız sayesinde eczanede bulunan çeşitli ürünleri ve ilaçları size en yakın eczaneden kuryelerimiz aracılığıyla evinize ve iş yerlerinize en hızlı şekilde ulaştırmaktır."},
    services:["İşte uygulamamızın size sunduğu şeyler! Takviyeler (pastil,collagen,tatlandırıcı), kozmetik, anne bebek, yüz bakımı, kişisel bakım, temizleyiciler, vücut bakımı, vitamin mineral, saç bakımı, göz dudak, ağız bakımı, makyaj, sağlık, medikal, güneş bakımı, ortopedi, çocuk, sporcu takviyeleri, cinsel sağlık ürünlerini sipariş edebilirsiniz. İlaçları da sipariş edebilirsiniz.", 
    "Uygulamamızdaki yapay zeka sayesinde gereksiz ve yanlış ilaç kullanımını engellemeyi planlamaktayız.",
    "Bu konudaki hassasiyetimize güvenebilirsiniz. Tansiyon, şeker ve kilonuzu kaydedip doktorunuz ve kendiniz bilgilere kolayca erişebilirsiniz.",
      "Ayrıca yakındaki eczaneleri görmekle kalmayıp nöbetçi eczaneleri de öğrenebilirsiniz. Ücretli ve ücretsiz aylık yayınlanan yazılara ve dergilere ulaşmanız da mümkündür." ,
      "Kullandığınız ilaçların yan etkilerini bildirme sekmesinden doktorunuza hangi ilaçların sizde ne gibi belirtiler gösterdiğini ekleyerek sağlığınız için iyi bir adım atmış olursunuz.",
      "İlaç hatırlatmaları bölümünden alacağınız ilaçların saatini ve hangi ilaçları almanız gerektiğini öğrenmiş olursunuz. Bunlara ek olarak kupon ve indirimlerden faydalanabilirsiniz.", 
      "Çevrimiçi danışmanlık sayesinde sorunlarınızı iletebilir ve teslim süresi vb. konularda bilgi sahibi olabilirsiniz."],
    contact:"Luminalgoo şirketi olarak bu proje başlangıç projemizdir. Gelişmelerden haberdar olmak ve daha fazlası için takipte kalın. Daha fazla projelerde görüşmek üzere!"
}

export const englishData:Data={
    home:{sentence1:"Luminalgoo is a company established to make our lives easier.",sentence2:" Its name comes from lumin, meaning light and algorithm in Turkish.", sentence3:" We aim to take steps that make our lives easier and thus enlighten our daily lives with various algorithms."},
    about:{sentence1:"The first of our projects is 'Two Wheel'.",sentence2:" The aim of our project is to deliver various products and medicines available in the pharmacy to your home and workplaces as quickly as possible, through our couriers, from the nearest pharmacy, thanks to our application."},
    services:["Here's what our app offers you! Supplements (lozenge, collagen, sweetener), cosmetics, mother baby, facial care, personal care, cleansers, body care, vitamin mineral, hair care, eye lip, oral care, make-up, health, medical, sun care, orthopedics, children, You can order sports supplements and sexual health products. You can also order medications.",
     "Thanks to the artificial intelligence in our application, we plan to prevent unnecessary and incorrect drug use.", 
     "You can trust our sensitivity on this issue. You can record your blood pressure, sugar and weight and access the information easily for you and your doctor.", 
     "Additionally, you can not only see nearby pharmacies but also learn about pharmacies on duty. It is also possible to access paid and free monthly articles and magazines.",
      "You can take a good step for your health by informing your doctor about the side effects of the medications you use, by informing your doctor which medications are causing you symptoms." ,
      "From the medication reminders section, you can learn the time of the medications you will take and which medications you should take. In addition, you can benefit from coupons and discounts." ,
     "Thanks to online consultancy, you can convey your problems and get information about delivery time etc. You can gain knowledge on the subject.",],
    contact:"As Luminalgoo company, this project is our initial project. Stay tuned to be informed about developments and more. See you in more projects!"
}