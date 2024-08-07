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
    about:{sentence1:"Projelerimizden ilki '2Tekerlek'dir.",sentence2:"2Tekerlek, işlerinizi hızlı ve güvenli bir şekilde halletmenizi sağlayan bir platformdur. İhtiyacınız olan her şeyi, uzman kuryelerimiz aracılığıyla kolayca teslim alabilirsiniz. İlaçlarınızı, önemli evraklarınızı veya ürün değişim ve iadelerinizi güvenle ve zamanında teslim almak için 2Tekerlek size hizmet vermektedir. Hızlı, güvenilir ve pratik çözümler için 2Tekerlek'i tercih edin!"},
    services:["Luminalgoo’nun yeni uygulaması 2Tekerlek ile Yaşamınızı Kolaylaştırın!", 
    "İşlerinizi hızla ve güvenle halletmenin yeni yolu 2TEKERLEK yakında sizlerle! İster ilaç teslimi, ister evrak taşıma, isterse ürün değişimi veya iade olsun, Luminalgoo’nun uzman kuryeleri bir tık uzağınızda.",
    "Neden 2Tekerlek?\n• Hızlı Teslimat: İhtiyaçlarınızı en kısa sürede karşılamak için yanınızdayız. \n• Güvenilir Hizmet: Değerli eşyalarınız bizimle güvende.\n•	Esnek Çözümler: Her türlü getir-götür işinizi kolayca halledin.\n•	Kolay Kullanım: Kullanıcı dostu arayüzümüzle işleriniz artık daha pratik.",
      "Artık zamanınızı yolda harcamayın. \n2Tekerlek ile her şey kapınıza gelsin! Yakında, Luminalgoo’yu ve uygulamalarını keşfetmeye hazır olun. Hayatınızı kolaylaştırmak için sabırsızlanıyoruz!" ,
      "Çevrimiçi danışmanlık sayesinde sorunlarınızı iletebilir ve teslim süresi vb. konularda bilgi sahibi olabilirsiniz."],
    contact:"Luminalgoo şirketi olarak bu proje başlangıç projemizdir. Gelişmelerden haberdar olmak ve daha fazlası için takipte kalın. Daha fazla projelerde görüşmek üzere!"
}

export const englishData:Data={
    home:{sentence1:"Luminalgoo is a company established to make our lives easier.",sentence2:" Its name comes from lumin, meaning light and algorithm in Turkish.", sentence3:" We aim to take steps that make our lives easier and thus enlighten our daily lives with various algorithms."},
    about:{sentence1:"The first of our projects is '2Tekerlek'.",sentence2:"2Tekerlek is a platform that allows you to get your work done quickly and safely. You can easily receive everything you need via our expert couriers. 2Tekerlek serves you to receive your medicines, important documents or product exchanges and returns safely and on time. Choose 2Terlek for fast, reliable and practical solutions!"},
    services:["Make Your Life Easier with Luminalgoo's new application 2TEKERLEK! ",
     "2TEKERLEK, the new way to get your work done quickly and safely, will be with you soon! Whether it's medicine delivery, document transportation, product replacement or return, Luminalgoo's expert couriers are just a click away.", 
     "Why 2TEKERLEK?\n•⁠  ⁠Fast Delivery: We are with you to meet your needs as soon as possible.\n•⁠  ⁠Reliable Service: Your valuables are safe with us.\n•⁠  ⁠Flexible Solutions: Easily handle all your pick-up and drop-off tasks.\n•⁠  ⁠Easy to Use: Your work is now more practical with our user-friendly interface.", 
     "Don't waste your time on the road anymore. Let everything come to your door with 2TEKERLEK!\nGet ready to discover Luminalgoo and its applications soon. We can't wait to make your life easier!",
     "Thanks to online consultancy, you can convey your problems and get information about delivery time etc. You can gain knowledge on the subject.",],
    contact:"As Luminalgoo company, this project is our initial project. Stay tuned to be informed about developments and more. See you in more projects!"
}