document.addEventListener('DOMContentLoaded', () => {
    // --- Localization Dictionary ---
    const translations = {
        en: {
            search_placeholder: "Search for places...",
            hero_title: "Search Your Area",
            hero_desc: "Discover the locations/places in Your Sorroundings, in the Cities across Pakistan.",
            live_namaz_clock: "Live Namaz Clock",
            upcoming: "Upcoming:",
            in_time: "in",
            prov_all: "All Pakistan",
            prov_punjab: "Punjab",
            prov_sindh: "Sindh",
            prov_kpk: "Khyber Pakhtunkhwa",
            prov_baloch: "Balochistan",
            prov_gb: "Gilgit-Baltistan",
            prov_ajk: "AJK",
            select_city: "Select or type City",
            enter_area: "Enter neighborhood or area...",
            find_places: "Find Places",
            cat_all: "All",
            cat_masjid: "Masjids",
            cat_namaz: "Namaz",
            cat_food: "Food",
            cat_health: "Health",
            cat_edu: "Education",
            cat_shop: "Shopping",
            dir_cat_title: "Directory Categories",
            desc_masjid: "Find nearby Masjids for daily prayers",
            cat_namaz_times: "Namaz Times",
            desc_namaz: "Accurate prayer times",
            today_times: "Today's Times",
            cat_food_title: "Restaurants",
            desc_food: "Local food, Dining & Delivery",
            cat_health_title: "Hospitals",
            desc_health: "Clinics, Pharmacies & Emergencies",
            cat_edu_title: "Schools",
            desc_edu: "Educational Institutes & Tuition Centers",
            cat_shop_title: "Shops",
            desc_shop: "Malls, Boutiques & Local Markets",
            search_results: "Search Results",
            btn_close: "Close",
            top_rated: "Top Rated Locations",
            nearby_landmarks: "Nearby Landmarks",
            "2_5_km": "2.5 km away",
            "5_0_km": "5.0 km away",
            "3_2_km": "3.2 km away",
            directions: "Directions",
            footer_copy: "© 2026 Rasta.pk - Connecting Pakistani Cities",
            // Dynamic Results Panel
            nearest: "Nearest",
            secondary: "Secondary",
            found_locs: "Found 5+ locations matching your search for",
            alt_loc: "Alternative location in the same vicinity.",
            dist_gps: "from your GPS location",
            dist_near: "Near",
            btn_map: "View on Map",
            btn_details: "Details"
        },
        ur: {
            search_placeholder: "مقامات تلاش کریں...",
            hero_title: "اپنا علاقہ تلاش کریں",
            hero_desc: "پاکستان بھر کے شہروں میں، اپنے ارد گرد کے مقامات دریافت کریں۔",
            live_namaz_clock: "براہ راست نماز کی گھڑی",
            upcoming: "آنے والی:",
            in_time: "میں",
            prov_all: "پورا پاکستان",
            prov_punjab: "پنجاب",
            prov_sindh: "سندھ",
            prov_kpk: "خیبر پختونخواہ",
            prov_baloch: "بلوچستان",
            prov_gb: "گلگت بلتستان",
            prov_ajk: "آزاد کشمیر",
            select_city: "شہر منتخب کریں یا ٹائپ کریں",
            enter_area: "محلہ یا علاقہ درج کریں...",
            find_places: "مقامات تلاش کریں",
            cat_all: "سب",
            cat_masjid: "مساجد",
            cat_namaz: "نماز",
            cat_food: "کھانا",
            cat_health: "صحت",
            cat_edu: "تعلیم",
            cat_shop: "خریداری",
            dir_cat_title: "ڈائریکٹری کیٹیگریز",
            desc_masjid: "روزانہ کی نماز کے لیے قریبی مساجد تلاش کریں",
            cat_namaz_times: "نماز کے اوقات",
            desc_namaz: "نماز کے درست اوقات",
            today_times: "آج کے اوقات",
            cat_food_title: "ریستوراں",
            desc_food: "مقامی کھانا، ڈائننگ اور ڈیلیوری",
            cat_health_title: "ہسپتال",
            desc_health: "کلینکس، فارمیسی اور ایمرجنسی",
            cat_edu_title: "سکولز",
            desc_edu: "تعلیمی ادارے اور ٹیوشن سینٹرز",
            cat_shop_title: "دکانیں",
            desc_shop: "مالز، بوتیک اور مقامی بازار",
            search_results: "تلاش کے نتائج",
            btn_close: "بند کریں",
            top_rated: "ٹاپ ریٹیڈ مقامات",
            nearby_landmarks: "قریبی مشہور مقامات",
            "2_5_km": "2.5 کلومیٹر دور",
            "5_0_km": "5.0 کلومیٹر دور",
            "3_2_km": "3.2 کلومیٹر دور",
            directions: "راستے",
            footer_copy: "© 2026 Rasta.pk - پاکستانی شہروں کو جوڑتا ہے",
            // Dynamic Results Panel
            nearest: "قریب ترین",
            secondary: "ثانوی",
            found_locs: "آپ کی تلاش کے مطابق 5+ مقامات ملے",
            alt_loc: "اسی علاقے میں متبادل مقام۔",
            dist_gps: "آپ کے GPS مقام سے دور",
            dist_near: "کے قریب",
            btn_map: "نقشے پر دیکھیں",
            btn_details: "تفصیلات"
        },
        ar: {
            search_placeholder: "ابحث عن الأماكن...",
            hero_title: "ابحث في منطقتك",
            hero_desc: "اكتشف المواقع/الأماكن في محيطك، في المدن عبر باكستان.",
            live_namaz_clock: "ساعة الصلاة الحية",
            upcoming: "القادمة:",
            in_time: "في",
            prov_all: "كل باكستان",
            prov_punjab: "البنجاب",
            prov_sindh: "السند",
            prov_kpk: "خيبر بختونخوا",
            prov_baloch: "بلوشستان",
            prov_gb: "جلجت بلتستان",
            prov_ajk: "كشمير الحرة",
            select_city: "اختر أو اكتب المدينة",
            enter_area: "أدخل الحي أو المنطقة...",
            find_places: "البحث عن الأماكن",
            cat_all: "الكل",
            cat_masjid: "المساجد",
            cat_namaz: "الصلاة",
            cat_food: "طعام",
            cat_health: "صحة",
            cat_edu: "تعليم",
            cat_shop: "تسوق",
            dir_cat_title: "فئات الدليل",
            desc_masjid: "ابحث عن المساجد القريبة للصلوات اليومية",
            cat_namaz_times: "أوقات الصلاة",
            desc_namaz: "أوقات الصلاة الدقيقة",
            today_times: "أوقات اليوم",
            cat_food_title: "مطاعم",
            desc_food: "الطعام المحلي، وتناول الطعام والتوصيل",
            cat_health_title: "مستشفيات",
            desc_health: "العيادات والصيدليات والطوارئ",
            cat_edu_title: "مدارس",
            desc_edu: "المعاهد التعليمية ومراكز الدروس الخصوصية",
            cat_shop_title: "متاجر",
            desc_shop: "مراكز التسوق والبوتيكات والأسواق المحلية",
            search_results: "نتائج البحث",
            btn_close: "إغلاق",
            top_rated: "أعلى المواقع تصنيفاً",
            nearby_landmarks: "معالم قريبة",
            "2_5_km": "يبعد 2.5 كم",
            "5_0_km": "يبعد 5.0 كم",
            "3_2_km": "يبعد 3.2 كم",
            directions: "الاتجاهات",
            footer_copy: "© 2026 Rasta.pk - ربط المدن الباكستانية",
            // Dynamic Results Panel
            nearest: "الأقرب",
            secondary: "ثانوي",
            found_locs: "تم العثور على أكثر من 5 مواقع تطابق بحثك عن",
            alt_loc: "موقع بديل في نفس المنطقة.",
            dist_gps: "من موقع GPS الخاص بك",
            dist_near: "بالقرب من",
            btn_map: "عرض على الخريطة",
            btn_details: "التفاصيل"
        }
    };

    // --- City Translations ---
    const cityTranslations = {
        ur: {
            'Karachi': 'کراچی', 'Lahore': 'لاہور', 'Islamabad': 'اسلام آباد', 'Peshawar': 'پشاور',
            'Quetta': 'کوئٹہ', 'Multan': 'ملتان', 'Faisalabad': 'فیصل آباد', 'Hyderabad': 'حیدرآباد',
            'Rawalpindi': 'راولپنڈی', 'Gujranwala': 'گوجرانوالہ', 'Bahawalpur': 'بہاولپور', 'Mardan': 'مردان',
            'Sialkot': 'سیالکوٹ', 'Sukkur': 'سکھر', 'Larkana': 'لاڑکانہ', 'Sheikhupura': 'شیخوپورہ',
            'Rahim Yar Khan': 'رحیم یار خان', 'Jhang': 'جھنگ', 'Dera Ghazi Khan': 'ڈیرہ غازی خان', 'Gujrat': 'گجرات',
            'Sahiwal': 'ساہیوال', 'Wah Cantonment': 'واہ کینٹ', 'Kasur': 'قصور', 'Okara': 'اوکاڑہ',
            'Mingora': 'مینگورہ', 'Nawabshah': 'نوابشاہ', 'Chiniot': 'چنیوٹ', 'Kotri': 'کوٹری',
            'Kāmoke': 'کامونکے', 'Hafizabad': 'حافظ آباد', 'Sadiqabad': 'صادق آباد', 'Mirpur Khas': 'میرپور خاص',
            'Burewala': 'بورے والا', 'Kohat': 'کوہاٹ', 'Khanewal': 'خانیوال', 'Dera Ismail Khan': 'ڈیرہ اسماعیل خان',
            'Turbat': 'تربت', 'Muzaffargarh': 'مظفرگڑھ', 'Abbottabad': 'ایبٹ آباد', 'Mandi Bahauddin': 'منڈی بہاؤالدین',
            'Shikarpur': 'شکارپور', 'Jacobabad': 'جیکب آباد', 'Jhelum': 'جہلم', 'Khuzdar': 'خضدار',
            'Khairpur': 'خیرپور', 'Dadu': 'دادو', 'Nowshera': 'نوشہرہ', 'Swabi': 'صوابی', 'Khushab': 'خوشاب',
            'Charsadda': 'چارسدہ', 'Gujar Khan': 'گوجر خان', 'Chaman': 'چمن', 'Muridke': 'مریدکے',
            'Pakpattan': 'پاکپتن', 'Gojra': 'گوجرہ', 'Vehari': 'وہاڑی', 'Tando Adam': 'ٹنڈو آدم',
            'Kharian': 'کھاریاں', 'Jalalpur Jattan': 'جلالپور جٹاں', 'Bahawalnagar': 'بہاولنگر',
            'Chishtian': 'چشتیاں', 'Mailsi': 'میلسی', 'Pattoki': 'پتوکی', 'Swat': 'سوات', 'Chotila': 'چوٹیلا',
            'Ghotki': 'گھوٹکی', 'Daska': 'ڈسکہ', 'Hassan Abdal': 'حسن ابدال', 'Wazirabad': 'وزیرآباد',
            'Qila Abdullah': 'قلعہ عبداللہ', 'Muzaffarabad': 'مظفرآباد', 'Mirpur': 'میرپور', 'Gilgit': 'گلگت',
            'Skardu': 'سکردو', 'Arifwala': 'عارف والا', 'Attoq': 'اٹک', 'Bhakkar': 'بھکر', 'Bhalwal': 'بھلوال',
            'Chakwal': 'چکوال', 'Chichawatni': 'چیچہ وطنی', 'Dipalpur': 'دیپالپور', 'Kamalia': 'کمالیہ',
            'Kot Addu': 'کوٹ ادو', 'Leiah': 'لیہ', 'Lodhran': 'لودھراں', 'Mianwali': 'میانوالی',
            'Rajanpur': 'راجن پور', 'Shorkot': 'شورکوٹ', 'Taunsa': 'تونسہ', 'Toba Tek Singh': 'ٹوبہ ٹیک سنگھ',
            'Badin': 'بدین', 'Daharki': 'ڈہرکی', 'Gambat': 'گمبٹ', 'Hala': 'ہالا', 'Jamshoro': 'جامشورو',
            'Kashmore': 'کشمور', 'Khadro': 'کھڈرو', 'Khipro': 'کھپرو', 'Kot Diji': 'کوٹ ڈیجی', 'Matiari': 'مٹیاری',
            'Mehar': 'میہڑ', 'Moro': 'مورو', 'Naushahro Firoz': 'نوشہرو فیروز', 'Pad Idan': 'پڈعیدن', 'Rohri': 'روہڑی',
            'Sanghar': 'سانگھڑ', 'Sehwan': 'سیہون', 'Shahdadpur': 'شہدادپور', 'Shahdadkot': 'شہدادکوٹ', 'Sujawal': 'سجاول',
            'Tando Allahyar': 'ٹنڈو الہ یار', 'Tando Muhammad Khan': 'ٹنڈو محمد خان', 'Thatta': 'ٹھٹہ', 'Thul': 'ٹھل',
            'Umarkot': 'عمرکوٹ', 'Akora Khattak': 'اکوڑہ خٹک', 'Alpuri': 'الپوری', 'Bannu': 'بنوں', 'Batkhela': 'بٹ خیلہ',
            'Chitral': 'چترال', 'Daggar': 'ڈگر', 'Dargai': 'درگئی', 'Dir': 'دیر', 'Hangu': 'ہنگو', 'Haripur': 'ہری پور',
            'Karak': 'کرک', 'Khwazakhela': 'خواوزہ خیلہ', 'Kulachi': 'کلاچی', 'Lakki Marwat': 'لکی مروت',
            'Mansehra': 'مانسہرہ', 'Pabbi': 'پبی', 'Paharpur': 'پہاڑپور', 'Saidu Sharif': 'سیدو شریف',
            'Shabqadar': 'شبقدر', 'Tank': 'ٹانک', 'Tordher': 'توردھر', 'Awaran': 'آواران', 'Barkhan': 'بارکھان',
            'Dera Bugti': 'ڈیرہ بگٹی', 'Dera Murad Jamali': 'ڈیرہ مراد جمالی', 'Gadani': 'گڈانی', 'Gawadar': 'گوادر',
            'Harnai': 'ہرنائی', 'Jiwani': 'جیوانی', 'Kalat': 'قلات', 'Kharan': 'خاران', 'Kohlu': 'کوہلو',
            'Lasbela': 'لسبیلہ', 'Loralai': 'لورالائی', 'Mach': 'مچھ', 'Mastung': 'مستونگ', 'Nushki': 'نوشکی',
            'Ormara': 'اورماڑہ', 'Pasni': 'پسنی', 'Pishin': 'پشین', 'Sibi': 'سبی', 'Sui': 'سوئی', 'Surab': 'سوراب',
            'Uthal': 'اوتھل', 'Zhob': 'ژوب', 'Ziarat': 'زیارت', 'Hunza': 'ہنزہ', 'Chilas': 'چلاس', 'Gahkuch': 'گاہکوچ',
            'Astore': 'استور', 'Aliabad': 'علی آباد', 'Danyore': 'دنیور', 'Gupis': 'گوپس', 'Tolti': 'ٹولٹی',
            'Khaplu': 'خپلو', 'Shigar': 'شگر', 'Rawalakot': 'راولاکوٹ', 'Kotli': 'کوٹلی', 'Bagh': 'باغ',
            'Bhimber': 'بھمبر', 'Hajira': 'ہجیرہ', 'Hatian Bala': 'ہٹیاں بالا', 'Palandri': 'پلندری',
            'Athmuqam': 'اٹھمقام', 'Jalalabad': 'جلال آباد', 'Abbaspur': 'عباس پور', 'Dadyal': 'ڈڈیال',
            'Khuiratta': 'کھوئی رٹہ', 'Charhoi': 'چڑہوئی', 'Sehnsa': 'سہنسہ', 'Barnala': 'برنالہ', 'Samahni': 'سماہنی',
            'Trarkhel': 'تراڑکھل', 'Dhirkot': 'دھیرکوٹ', 'Chikar': 'چکار', 'Garhi Dupatta': 'گڑھی دوپٹہ',
            'Forward Kahuta': 'فارورڈ کہوٹہ', 'Mangla': 'منگلا', 'Afzalpur': 'افضل پور'
        },
        ar: {
            'Karachi': 'كراتشي', 'Lahore': 'لاهور', 'Islamabad': 'إسلام آباد', 'Peshawar': 'بيشاور',
            'Quetta': 'كويته', 'Multan': 'مولتان', 'Faisalabad': 'فيصل آباد', 'Hyderabad': 'حيدر أباد',
            'Rawalpindi': 'راولبندي', 'Gujranwala': 'جوجرانوالا', 'Bahawalpur': 'بهاولبور', 'Mardan': 'مردان',
            'Sialkot': 'سيالكوت', 'Sukkur': 'سوكور', 'Larkana': 'لاركانا', 'Sheikhupura': 'شيخوبورا',
            'Rahim Yar Khan': 'رحيم يار خان', 'Jhang': 'جهانغ', 'Dera Ghazi Khan': 'ديرا غازي خان', 'Gujrat': 'جوجرات',
            'Sahiwal': 'ساهيوال', 'Wah Cantonment': 'واه كانتونمينت', 'Kasur': 'كاسور', 'Okara': 'أوكارا',
            'Mingora': 'مينغورا', 'Nawabshah': 'نوابشاه', 'Chiniot': 'تشينيوت', 'Kotri': 'كوتري',
            'Kāmoke': 'كاموكي', 'Hafizabad': 'حافيز أباد', 'Sadiqabad': 'صادق آباد', 'Mirpur Khas': 'ميربور خاس',
            'Burewala': 'بوريوالا', 'Kohat': 'كوهات', 'Khanewal': 'خانيوال', 'Dera Ismail Khan': 'ديرا إسماعيل خان',
            'Turbat': 'توربات', 'Muzaffargarh': 'مظفر غره', 'Abbottabad': 'أبوت آباد', 'Mandi Bahauddin': 'ماندي بهاءالدين',
            'Shikarpur': 'شيكاربور', 'Jacobabad': 'جاكوب آباد', 'Jhelum': 'جيلوم', 'Khuzdar': 'خوزدار',
            'Khairpur': 'خيربور', 'Dadu': 'دادو', 'Nowshera': 'نوشيرا', 'Swabi': 'سوابي', 'Khushab': 'خوشاب',
            'Charsadda': 'تشارسادا', 'Gujar Khan': 'غوجار خان', 'Chaman': 'شامان', 'Muridke': 'موريدكي',
            'Pakpattan': 'باكباتان', 'Gojra': 'غوجرا', 'Vehari': 'ويهاري', 'Tando Adam': 'تاندو أدم',
            'Kharian': 'خاريان', 'Jalalpur Jattan': 'جلال بور جاتان', 'Bahawalnagar': 'بهاولناغار',
            'Chishtian': 'تشيشتيان', 'Mailsi': 'مايلسي', 'Pattoki': 'باتوكي', 'Swat': 'سوات', 'Chotila': 'تشوتيلا',
            'Ghotki': 'غوتكي', 'Daska': 'داسكا', 'Hassan Abdal': 'حسن عبد ال', 'Wazirabad': 'وازيرأباد',
            'Qila Abdullah': 'قيلا عبد الله', 'Muzaffarabad': 'مظفر آباد', 'Mirpur': 'ميربور', 'Gilgit': 'غيلغيت',
            'Skardu': 'سكاردو', 'Arifwala': 'عارفوالا', 'Attoq': 'أتوك', 'Bhakkar': 'باكار', 'Bhalwal': 'بهالوال',
            'Chakwal': 'تشاكوال', 'Chichawatni': 'تشيتشاواتني', 'Dipalpur': 'ديبال بور', 'Kamalia': 'كاماليا',
            'Kot Addu': 'كوت أدو', 'Leiah': 'لياه', 'Lodhran': 'لودهران', 'Mianwali': 'ميانوالي',
            'Rajanpur': 'راجانبور', 'Shorkot': 'شوركوت', 'Taunsa': 'تاونسا', 'Toba Tek Singh': 'توبا تيك سينغ',
            'Badin': 'بادين', 'Daharki': 'داهاركي', 'Gambat': 'غامبات', 'Hala': 'هالا', 'Jamshoro': 'جامشورو',
            'Kashmore': 'كاشموري', 'Khadro': 'خادرو', 'Khipro': 'خيبرو', 'Kot Diji': 'كوت ديجي', 'Matiari': 'ماتياري',
            'Mehar': 'ميهار', 'Moro': 'مورو', 'Naushahro Firoz': 'ناوشاهرو فيروز', 'Pad Idan': 'باد ايدان', 'Rohri': 'روهري',
            'Sanghar': 'سانغهار', 'Sehwan': 'سيهوان', 'Shahdadpur': 'شاهدا بور', 'Shahdadkot': 'شاهداد كوت', 'Sujawal': 'سوجاوال',
            'Tando Allahyar': 'تاندو الله يار', 'Tando Muhammad Khan': 'تاندو محمد خان', 'Thatta': 'تهاتا', 'Thul': 'ثول',
            'Umarkot': 'أوماركوت', 'Akora Khattak': 'أكورا خاتاك', 'Alpuri': 'ألبوري', 'Bannu': 'بانو', 'Batkhela': 'باتخيلا',
            'Chitral': 'تشيترال', 'Daggar': 'داغار', 'Dargai': 'دارغاي', 'Dir': 'دير', 'Hangu': 'هانغو', 'Haripur': 'هاريبور',
            'Karak': 'كاراك', 'Khwazakhela': 'خواوزا خيلا', 'Kulachi': 'كولاتشي', 'Lakki Marwat': 'لاكي ماروات',
            'Mansehra': 'مانسهرا', 'Pabbi': 'بابي', 'Paharpur': 'باهاربور', 'Saidu Sharif': 'سايدو شاريف',
            'Shabqadar': 'شابقادار', 'Tank': 'تانك', 'Tordher': 'توردير', 'Awaran': 'أواران', 'Barkhan': 'بارخان',
            'Dera Bugti': 'ديرا بوغتي', 'Dera Murad Jamali': 'ديرا موراد جامالي', 'Gadani': 'غاداني', 'Gawadar': 'غوادار',
            'Harnai': 'هارناي', 'Jiwani': 'جيواني', 'Kalat': 'كالات', 'Kharan': 'خاران', 'Kohlu': 'كوهلو',
            'Lasbela': 'لازبيلا', 'Loralai': 'لورالاي', 'Mach': 'ماتش', 'Mastung': 'ماستونغ', 'Nushki': 'نوشكي',
            'Ormara': 'أورمارا', 'Pasni': 'باسني', 'Pishin': 'بيشين', 'Sibi': 'سيبي', 'Sui': 'سوي', 'Surab': 'سوراب',
            'Uthal': 'أوثال', 'Zhob': 'زوب', 'Ziarat': 'زيارات', 'Hunza': 'هونزا', 'Chilas': 'تشيلاس', 'Gahkuch': 'غاهكوتش',
            'Astore': 'أستوري', 'Aliabad': 'علي آباد', 'Danyore': 'دانيوري', 'Gupis': 'غوبيس', 'Tolti': 'تولتي',
            'Khaplu': 'خابلو', 'Shigar': 'شيغار', 'Rawalakot': 'راوالاكوت', 'Kotli': 'كوتلي', 'Bagh': 'باغ',
            'Bhimber': 'بهيمبير', 'Hajira': 'هاجيرا', 'Hatian Bala': 'هاتيان بالا', 'Palandri': 'بالاندري',
            'Athmuqam': 'أثموكم', 'Jalalabad': 'جلال أباد', 'Abbaspur': 'عباس بور', 'Dadyal': 'داديال',
            'Khuiratta': 'خويراتا', 'Charhoi': 'شارهوي', 'Sehnsa': 'سيهنسا', 'Barnala': 'بارنالا', 'Samahni': 'ساماهني',
            'Trarkhel': 'ترارخيل', 'Dhirkot': 'دهيركوت', 'Chikar': 'تشيكار', 'Garhi Dupatta': 'غارهي دوباتا',
            'Forward Kahuta': 'فورورد كاهوتا', 'Mangla': 'مانغلا', 'Afzalpur': 'أفضل بور'
        }
    };

    let currentLang = 'en';

    function setLanguage(lang) {
        // Handle city input translation translation
        const cityInput = document.getElementById('citySelect');
        if (cityInput && cityInput.value) {
            let val = cityInput.value;
            let newCity = val;
            // Switch to ur/ar
            if (lang === 'ur' || lang === 'ar') {
                // From english to ur/ar
                if (cityTranslations[lang] && cityTranslations[lang][val]) {
                    newCity = cityTranslations[lang][val];
                } else if (currentLang !== 'en' && cityTranslations[currentLang]) {
                    // From ar/ur to target ur/ar
                    const engKey = Object.keys(cityTranslations[currentLang]).find(k => cityTranslations[currentLang][k] === val);
                    if (engKey && cityTranslations[lang][engKey]) {
                        newCity = cityTranslations[lang][engKey];
                    }
                }
            } else if (lang === 'en' && currentLang !== 'en') {
                // From ur/ar to english
                if (cityTranslations[currentLang]) {
                    const engKey = Object.keys(cityTranslations[currentLang]).find(k => cityTranslations[currentLang][k] === val);
                    if (engKey) {
                        newCity = engKey;
                    }
                }
            }
            cityInput.value = newCity;
        }

        currentLang = lang;
        document.documentElement.lang = lang;
        document.documentElement.dir = (lang === 'ur' || lang === 'ar') ? 'rtl' : 'ltr';

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                // If it's an input with placeholder
                if (el.tagName === 'INPUT' && el.hasAttribute('placeholder')) {
                    el.placeholder = translations[lang][key];
                } else if (el.childNodes.length > 0) {
                    // Update text node specifically so we don't overwrite inner HTML icons
                    for (let node of el.childNodes) {
                        if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
                            node.nodeValue = translations[lang][key];
                            break;
                        }
                    }
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Re-calculate the upcoming namaz clock to translate "Upcoming" and "in" labels
        calculateUpcomingNamaz(new Date());

        // Update Datalist with translated names without resetting input string
        const activeTab = document.querySelector('.province-tab.active');
        if (activeTab && typeof updateCityDropdown === 'function') {
            updateCityDropdown(activeTab.getAttribute('data-province') || 'all', true);
        }
    }

    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    // 1. Live Namaz Clock
    const clockDisplay = document.getElementById('clock-display');
    const nextNamazDisplay = document.getElementById('next-namaz');
    let currentTimings = null;

    function calculateUpcomingNamaz(now) {
        if (!currentTimings || !nextNamazDisplay) return;

        const prayers = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
        let nextPrayer = null;
        let nextPrayerTime = null;

        for (let prayer of prayers) {
            let timeStr = currentTimings[prayer];
            if (!timeStr) continue;

            let [pHours, pMins] = timeStr.split(':');
            let pDate = new Date(now);
            pDate.setHours(parseInt(pHours), parseInt(pMins), 0, 0);

            if (pDate > now) {
                nextPrayer = prayer;
                nextPrayerTime = pDate;
                break;
            }
        }

        // If all prayers today are done, next is Fajr tomorrow
        if (!nextPrayer && currentTimings['Fajr']) {
            nextPrayer = 'Fajr';
            let [pHours, pMins] = currentTimings['Fajr'].split(':');
            nextPrayerTime = new Date(now);
            nextPrayerTime.setDate(nextPrayerTime.getDate() + 1);
            nextPrayerTime.setHours(parseInt(pHours), parseInt(pMins), 0, 0);
        }

        if (nextPrayer && nextPrayerTime) {
            const diffMs = nextPrayerTime - now;
            const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
            const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

            const displayName = nextPrayer === 'Dhuhr' ? 'Zuhr' : nextPrayer;

            let timeString = '';
            if (diffHrs > 0) timeString += `${diffHrs}h `;
            timeString += `${diffMins}m`;

            const upcLabel = translations[currentLang]?.upcoming || 'Upcoming:';
            const inLabel = translations[currentLang]?.in_time || 'in';
            const htmlString = currentLang === 'en'
                ? `${upcLabel} ${displayName} ${inLabel} <span id="time-left">${timeString}</span>`
                : `${upcLabel} <span id="time-left">${timeString}</span> ${inLabel} ${displayName}`;

            nextNamazDisplay.innerHTML = htmlString;
        }
    }

    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12;
        hours = hours ? hours : 12; // 0 format to 12

        // Add leading zeros
        const hStr = hours.toString().padStart(2, '0');
        const mStr = minutes.toString().padStart(2, '0');
        const sStr = seconds.toString().padStart(2, '0');

        if (clockDisplay) {
            clockDisplay.textContent = `${hStr}:${mStr}:${sStr} ${ampm}`;
        }

        calculateUpcomingNamaz(now);
    }

    // Initial call & Interval setup
    updateClock();
    setInterval(updateClock, 1000);

    // Global GPS State tracking
    let userLocation = null;
    let gpsActive = false;

    function openCategorySearch(category) {
        let query = '';
        const cityInput = document.getElementById('citySelect');
        const city = cityInput ? cityInput.value.trim() : '';
        const locationString = city ? `${city}, Pakistan` : 'Pakistan';

        if (category === 'namaz') {
            // Namaz timings are now displayed natively on the card!
            const namazCard = document.querySelector('.card[data-category="namaz"]');
            if (namazCard) namazCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        let categoryName = 'Places';
        let iconClass = 'fas fa-map-marker-alt';

        switch (category) {
            case 'masjid':
                categoryName = 'Masjids';
                iconClass = 'fas fa-mosque';
                query = (gpsActive && userLocation) ? `${categoryName} near ${userLocation.lat},${userLocation.lng}` : `${categoryName} in ${locationString}`;
                break;
            case 'food':
                categoryName = 'Restaurants';
                iconClass = 'fas fa-utensils';
                query = (gpsActive && userLocation) ? `${categoryName} near ${userLocation.lat},${userLocation.lng}` : `${categoryName} in ${locationString}`;
                break;
            case 'health':
                categoryName = 'Hospitals';
                iconClass = 'fas fa-hospital';
                query = (gpsActive && userLocation) ? `${categoryName} near ${userLocation.lat},${userLocation.lng}` : `${categoryName} in ${locationString}`;
                break;
            case 'education':
                categoryName = 'Schools';
                iconClass = 'fas fa-school';
                query = (gpsActive && userLocation) ? `${categoryName} near ${userLocation.lat},${userLocation.lng}` : `${categoryName} in ${locationString}`;
                break;
            case 'shopping':
                categoryName = 'Shopping Malls';
                iconClass = 'fas fa-shopping-bag';
                query = (gpsActive && userLocation) ? `${categoryName} near ${userLocation.lat},${userLocation.lng}` : `${categoryName} in ${locationString}`;
                break;
        }

        // Show the results section
        const resultsSection = document.getElementById('searchResultsSection');
        const resultsList = document.getElementById('resultsList');
        if (resultsSection && resultsList) {
            resultsSection.style.display = 'block';

            // Scroll to it smoothly
            resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Generate Map Link
            const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

            // Build Translation Keys
            const t = translations[currentLang] || translations['en'];

            // Fix: Translate the specific category name being searched
            let categoryNameI18n = categoryName;
            if (category === 'masjid') categoryNameI18n = t.cat_masjid || categoryName;
            if (category === 'food') categoryNameI18n = t.cat_food_title || categoryName;
            if (category === 'health') categoryNameI18n = t.cat_health_title || categoryName;
            if (category === 'education') categoryNameI18n = t.cat_edu_title || categoryName;
            if (category === 'shopping') categoryNameI18n = t.cat_shop_title || categoryName;

            const distGpsStr = gpsActive ? `0.8 km ${t.dist_gps}` : `${t.dist_near} ${locationString}`;
            const secondaryDistGpsStr = gpsActive ? `2.4 km ${t.dist_gps}` : `${t.dist_near} ${locationString}`;

            // Inject Dummy Data Results (Since we don't have a live places API yet, we simulate the nearest results)
            resultsList.innerHTML = `
                <div class="results-card">
                    <div class="results-icon"><i class="${iconClass}"></i></div>
                    <div class="results-info">
                        <h3>${t.nearest} ${categoryNameI18n}</h3>
                        <p>${t.found_locs} ${categoryNameI18n}</p>
                        <span class="results-distance"><i class="fas fa-location-arrow"></i> ${distGpsStr}</span>
                    </div>
                    <div class="results-actions">
                        <a href="${mapLink}" target="_blank" class="btn-primary" style="padding: 0.6rem 1.2rem; font-size: 0.9rem; text-decoration: none; text-align: center;"><i class="fas fa-map"></i> ${t.btn_map}</a>
                        <button class="btn-outline" style="padding: 0.6rem 1.2rem; font-size: 0.9rem;"><i class="fas fa-bars"></i> ${t.btn_details}</button>
                    </div>
                </div>
                
                <div class="results-card" style="opacity: 0.9;">
                    <div class="results-icon"><i class="${iconClass}"></i></div>
                    <div class="results-info">
                        <h3>${t.secondary} ${categoryNameI18n}</h3>
                        <p>${t.alt_loc}</p>
                        <span class="results-distance"><i class="fas fa-location-arrow"></i> ${secondaryDistGpsStr}</span>
                    </div>
                    <div class="results-actions">
                        <a href="${mapLink}" target="_blank" class="btn-primary" style="padding: 0.6rem 1.2rem; font-size: 0.9rem; text-decoration: none; text-align: center;"><i class="fas fa-map"></i> ${t.btn_map}</a>
                        <button class="btn-outline" style="padding: 0.6rem 1.2rem; font-size: 0.9rem;"><i class="fas fa-bars"></i> ${t.btn_details}</button>
                    </div>
                </div>
            `;
        }
    }

    // Close Results Panel Setup
    const closeResultsBtn = document.getElementById('closeResultsBtn');
    if (closeResultsBtn) {
        closeResultsBtn.addEventListener('click', () => {
            document.getElementById('searchResultsSection').style.display = 'none';
        });
    }

    // 2. Category Card Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Manage Active State
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            // Apply filter mapping with simple vanilla JS
            cards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filterValue === 'all' || category === filterValue) {
                    card.style.display = 'block';
                    // Trigger reflow for animation
                    void card.offsetWidth;

                    // Simple animation
                    card.animate([
                        { opacity: 0, transform: 'scale(0.95)' },
                        { opacity: 1, transform: 'scale(1)' }
                    ], {
                        duration: 350,
                        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                        fill: 'forwards'
                    });
                } else {
                    card.style.display = 'none';
                }
            });

            // Link filter buttons to trigger search logic natively 
            if (filterValue !== 'all') {
                openCategorySearch(filterValue);
            }
        });
    });

    // 3. Province Tabs & City Dropdown Integration
    const provinceTabs = document.querySelectorAll('.province-tab');
    const cityInput = document.getElementById('citySelect');
    const cityDataList = document.getElementById('cityList');

    const provinceCities = {
        all: ['Karachi', 'Lahore', 'Islamabad', 'Peshawar', 'Quetta', 'Multan', 'Faisalabad', 'Hyderabad', 'Rawalpindi', 'Gujranwala', 'Bahawalpur', 'Mardan', 'Sialkot', 'Sukkur', 'Larkana', 'Sheikhupura', 'Rahim Yar Khan', 'Jhang', 'Dera Ghazi Khan', 'Gujrat', 'Sahiwal', 'Wah Cantonment', 'Kasur', 'Okara', 'Mingora', 'Nawabshah', 'Chiniot', 'Kotri', 'Kāmoke', 'Hafizabad', 'Sadiqabad', 'Mirpur Khas', 'Burewala', 'Kohat', 'Khanewal', 'Dera Ismail Khan', 'Turbat', 'Muzaffargarh', 'Abbottabad', 'Mandi Bahauddin', 'Shikarpur', 'Jacobabad', 'Jhelum', 'Khuzdar', 'Khairpur', 'Dadu', 'Nowshera', 'Swabi', 'Khushab', 'Charsadda', 'Gujar Khan', 'Chaman', 'Muridke', 'Pakpattan', 'Gojra', 'Vehari', 'Tando Adam', 'Kharian', 'Jalalpur Jattan', 'Bahawalnagar', 'Chishtian', 'Mailsi', 'Pattoki', 'Swat', 'Chotila', 'Ghotki', 'Daska', 'Hassan Abdal', 'Wazirabad', 'Qila Abdullah', 'Muzaffarabad', 'Mirpur', 'Gilgit', 'Skardu', 'Khuiratta', 'Charhoi', 'Sehnsa', 'Barnala', 'Samahni', 'Trarkhel', 'Dhirkot', 'Chikar', 'Garhi Dupatta', 'Forward Kahuta', 'Mangla', 'Afzalpur'],
        punjab: ['Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Gujranwala', 'Bahawalpur', 'Sialkot', 'Sheikhupura', 'Rahim Yar Khan', 'Jhang', 'Dera Ghazi Khan', 'Gujrat', 'Sahiwal', 'Wah Cantonment', 'Kasur', 'Okara', 'Chiniot', 'Kāmoke', 'Hafizabad', 'Sadiqabad', 'Burewala', 'Khanewal', 'Muzaffargarh', 'Mandi Bahauddin', 'Jhelum', 'Khushab', 'Gujar Khan', 'Muridke', 'Pakpattan', 'Gojra', 'Vehari', 'Kharian', 'Jalalpur Jattan', 'Bahawalnagar', 'Chishtian', 'Mailsi', 'Pattoki', 'Daska', 'Hassan Abdal', 'Wazirabad', 'Arifwala', 'Attoq', 'Bhakkar', 'Bhalwal', 'Chakwal', 'Chichawatni', 'Dipalpur', 'Kamalia', 'Kot Addu', 'Leiah', 'Lodhran', 'Mianwali', 'Rajanpur', 'Shorkot', 'Taunsa', 'Toba Tek Singh'],
        sindh: ['Karachi', 'Hyderabad', 'Sukkur', 'Larkana', 'Nawabshah', 'Kotri', 'Mirpur Khas', 'Shikarpur', 'Jacobabad', 'Khairpur', 'Dadu', 'Tando Adam', 'Ghotki', 'Badin', 'Daharki', 'Gambat', 'Hala', 'Jamshoro', 'Kashmore', 'Khadro', 'Khipro', 'Kot Diji', 'Matiari', 'Mehar', 'Moro', 'Naushahro Firoz', 'Pad Idan', 'Rohri', 'Sanghar', 'Sehwan', 'Shahdadpur', 'Shahdadkot', 'Sujawal', 'Tando Allahyar', 'Tando Muhammad Khan', 'Thatta', 'Thul', 'Umarkot'],
        kpk: ['Peshawar', 'Mardan', 'Mingora', 'Kohat', 'Dera Ismail Khan', 'Abbottabad', 'Nowshera', 'Swabi', 'Charsadda', 'Swat', 'Akora Khattak', 'Alpuri', 'Bannu', 'Batkhela', 'Chitral', 'Daggar', 'Dargai', 'Dir', 'Hangu', 'Haripur', 'Karak', 'Khwazakhela', 'Kulachi', 'Lakki Marwat', 'Mansehra', 'Pabbi', 'Paharpur', 'Saidu Sharif', 'Shabqadar', 'Tank', 'Tordher'],
        balochistan: ['Quetta', 'Turbat', 'Khuzdar', 'Chaman', 'Qila Abdullah', 'Awaran', 'Barkhan', 'Dera Bugti', 'Dera Murad Jamali', 'Gadani', 'Gawadar', 'Harnai', 'Jiwani', 'Kalat', 'Kharan', 'Kohlu', 'Lasbela', 'Loralai', 'Mach', 'Mastung', 'Nushki', 'Ormara', 'Pasni', 'Pishin', 'Sibi', 'Sui', 'Surab', 'Uthal', 'Zhob', 'Ziarat'],
        gb: ['Gilgit', 'Skardu', 'Hunza', 'Chilas', 'Gahkuch', 'Astore', 'Aliabad', 'Danyore', 'Gupis', 'Tolti', 'Khaplu', 'Shigar'],
        ajk: ['Muzaffarabad', 'Mirpur', 'Rawalakot', 'Kotli', 'Bagh', 'Bhimber', 'Hajira', 'Hatian Bala', 'Palandri', 'Athmuqam', 'Jalalabad', 'Abbaspur', 'Dadyal', 'Khuiratta', 'Charhoi', 'Sehnsa', 'Barnala', 'Samahni', 'Trarkhel', 'Dhirkot', 'Chikar', 'Garhi Dupatta', 'Forward Kahuta', 'Mangla', 'Afzalpur']
    };

    // Aladhan API Integration for Live Namaz Timings
    async function fetchNamazTimes() {
        const namazCard = document.querySelector('.card[data-category="namaz"] .quick-view');
        if (!namazCard) return;

        namazCard.innerHTML = `<h4>Fetching Times...</h4> <i class="fas fa-spinner fa-spin"></i>`;

        let apiUrl = '';
        const rawCity = cityInput.value.trim();
        let apiCity = rawCity;

        // Reverse lookup the english name for Aladhan API
        if (currentLang === 'ur' || currentLang === 'ar') {
            if (cityTranslations[currentLang]) {
                const engKey = Object.keys(cityTranslations[currentLang]).find(k => cityTranslations[currentLang][k] === rawCity);
                if (engKey) apiCity = engKey;
            }
        }

        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        const dateString = `${dd}-${mm}-${yyyy}`;

        if (gpsActive && userLocation) {
            apiUrl = `https://api.aladhan.com/v1/timings/${dateString}?latitude=${userLocation.lat}&longitude=${userLocation.lng}&method=1`; // Method 1 is University of Islamic Sciences, Karachi
        } else if (apiCity) {
            apiUrl = `https://api.aladhan.com/v1/timingsByCity/${dateString}?city=${apiCity}&country=Pakistan&method=1`;
        } else {
            // Default to Islamabad when no city / no GPS is provided
            apiUrl = `https://api.aladhan.com/v1/timingsByCity/${dateString}?city=Islamabad&country=Pakistan&method=1`;
        }

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data && data.code === 200) {
                const timings = data.data.timings;
                currentTimings = timings; // Store globally for live countdown sync

                // Convert 24h to 12h AM/PM
                const formatTime = (time24) => {
                    let [hours, minutes] = time24.split(':');
                    let ampm = hours >= 12 ? 'PM' : 'AM';
                    hours = hours % 12;
                    hours = hours ? hours : 12;
                    return `${hours}:${minutes} ${ampm}`;
                };

                let locationDisplay = (gpsActive && userLocation) ? 'Your Location' : (rawCity || 'Islamabad');

                const t = translations[currentLang] || translations['en'];
                const timesForStr = currentLang === 'ur' ? `کے لئے اوقات` : currentLang === 'ar' ? `أوقات لـ` : `Times for`;
                const fajrStr = currentLang === 'ur' ? `فجر` : currentLang === 'ar' ? `الفجر` : `Fajr`;
                const zuhrStr = currentLang === 'ur' ? `ظہر` : currentLang === 'ar' ? `الظهر` : `Zuhr`;
                const asrStr = currentLang === 'ur' ? `عصر` : currentLang === 'ar' ? `العصر` : `Asr`;
                const maghribStr = currentLang === 'ur' ? `مغرب` : currentLang === 'ar' ? `المغرب` : `Maghrib`;
                const ishaStr = currentLang === 'ur' ? `عشاء` : currentLang === 'ar' ? `العشاء` : `Isha`;

                namazCard.innerHTML = `
                    <h4>${currentLang === 'en' ? timesForStr + ' ' + locationDisplay : locationDisplay + ' ' + timesForStr}</h4>
                    <p>${fajrStr}: ${formatTime(timings.Fajr)}</p>
                    <p>${zuhrStr}: ${formatTime(timings.Dhuhr)}</p>
                    <p>${asrStr}: ${formatTime(timings.Asr)}</p>
                    <p>${maghribStr}: ${formatTime(timings.Maghrib)}</p>
                    <p>${ishaStr}: ${formatTime(timings.Isha)}</p>
                `;
            } else {
                throw new Error('Invalid API Response');
            }
        } catch (error) {
            console.error("Failed to fetch Namaz times:", error);
            namazCard.innerHTML = `<h4>Times Unavailable</h4><p>Could not load prayer times for location.</p>`;
        }
    }

    // Call initially
    fetchNamazTimes();

    // Listeners for changing city input manually (by typing or picking from standard datalist)
    cityInput.addEventListener('change', fetchNamazTimes);

    function updateCityDropdown(province, preserveValue = false) {
        if (!cityDataList) return;

        // Reset options
        cityDataList.innerHTML = '';
        if (cityInput && !preserveValue) cityInput.value = ''; // Clear typed text on province change

        // Fetch specific province list, fallback to 'all'
        const cities = provinceCities[province] || provinceCities['all'];

        cities.forEach(city => {
            const option = document.createElement('option');
            let displayedCity = city;
            if (currentLang === 'ur' || currentLang === 'ar') {
                if (cityTranslations[currentLang] && cityTranslations[currentLang][city]) {
                    displayedCity = cityTranslations[currentLang][city];
                }
            }
            option.value = displayedCity;
            cityDataList.appendChild(option);
        });
    }

    // Initialize dropdown on load
    updateCityDropdown('all');

    provinceTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Update UI Active State
            provinceTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Update Dropdown List Values
            const selectedProvince = tab.getAttribute('data-province');
            updateCityDropdown(selectedProvince);
        });
    });

    // 4. External Links (Google Maps & Prayer Times)
    const searchBtn = document.getElementById('searchBtn');
    const areaInput = document.getElementById('areaInput');

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            const rawCity = cityInput.value.trim();
            const area = areaInput.value.trim();

            // Allow manual text pass-through for unlisted cities or custom locations
            let translatedCity = rawCity;
            if (currentLang === 'ur' || currentLang === 'ar') {
                if (cityTranslations[currentLang]) {
                    const engKey = Object.keys(cityTranslations[currentLang]).find(k => cityTranslations[currentLang][k] === rawCity);
                    if (engKey) translatedCity = engKey;
                }
            }

            let query = '';

            if (gpsActive && userLocation) {
                if (area) {
                    query = `${area} near ${userLocation.lat},${userLocation.lng}`;
                } else if (translatedCity) {
                    query = `${translatedCity} near ${userLocation.lat},${userLocation.lng}`;
                } else {
                    window.open(`https://www.google.com/maps/search/?api=1&query=${userLocation.lat},${userLocation.lng}`, '_blank');
                    return;
                }
            } else if (area && translatedCity) {
                // E.g., "DHA, Lahore, Pakistan" or customized typed area + typed city
                query = `${area}, ${translatedCity}, Pakistan`;
            } else if (translatedCity) {
                // Manual or listed city input
                query = `${translatedCity}, Pakistan`;
            } else if (area) {
                // Just an area typed
                query = `${area}, Pakistan`;
            }

            if (query) {
                window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`, '_blank');
            } else {
                alert('Please type or select a city/area to search seamlessly on Maps, or enable GPS.');
            }
        });
    }

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');

            // Only trigger if it's not simply an empty click
            if (category) {
                openCategorySearch(category);
            }
        });
    });

    // 5. Geolocation / Use Current Location
    const getLocationBtn = document.getElementById('getLocationBtn');

    if (getLocationBtn) {
        getLocationBtn.addEventListener('click', () => {
            if (gpsActive) {
                // Turn OFF GPS mapping
                gpsActive = false;
                userLocation = null;
                getLocationBtn.style.color = 'var(--primary-color)';
                getLocationBtn.innerHTML = '<i class="fas fa-location-crosshairs"></i>';
                return;
            }

            // Turn ON GPS mapping
            if ("geolocation" in navigator) {
                getLocationBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'; // Loading state

                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        userLocation = {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude
                        };
                        gpsActive = true;

                        // Change button appearance to show it's actively tracked lock
                        getLocationBtn.style.color = '#e74c3c'; // red/active color
                        getLocationBtn.innerHTML = '<i class="fas fa-location-crosshairs"></i>';

                        // Update Namaz timings automatically for newly locked GPS position!
                        fetchNamazTimes();

                        alert('GPS is now locked to your position! Selecting any category below will automatically search for the nearest places to you.');
                    },
                    (error) => {
                        console.error('Error obtaining location', error);
                        alert('Unable to retrieve your location. Please check your browser permissions.');
                        getLocationBtn.innerHTML = '<i class="fas fa-location-crosshairs"></i>'; // Reset icon
                        gpsActive = false;
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0
                    }
                );
            } else {
                alert("Geolocation is not supported by your browser");
            }
        });
    }
});
